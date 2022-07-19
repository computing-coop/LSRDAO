import { E as ErrorFactory, C as Component, b as firebase$1, k as __values, _ as __awaiter, c as __generator, F as FirebaseError, j as __assign, l as __spread } from "./index.a79b2e56.js";
function toArray(arr) {
  return Array.prototype.slice.call(arr);
}
function promisifyRequest(request) {
  return new Promise(function(resolve, reject) {
    request.onsuccess = function() {
      resolve(request.result);
    };
    request.onerror = function() {
      reject(request.error);
    };
  });
}
function promisifyRequestCall(obj, method, args) {
  var request;
  var p = new Promise(function(resolve, reject) {
    request = obj[method].apply(obj, args);
    promisifyRequest(request).then(resolve, reject);
  });
  p.request = request;
  return p;
}
function promisifyCursorRequestCall(obj, method, args) {
  var p = promisifyRequestCall(obj, method, args);
  return p.then(function(value) {
    if (!value)
      return;
    return new Cursor(value, p.request);
  });
}
function proxyProperties(ProxyClass, targetProp, properties) {
  properties.forEach(function(prop) {
    Object.defineProperty(ProxyClass.prototype, prop, {
      get: function() {
        return this[targetProp][prop];
      },
      set: function(val) {
        this[targetProp][prop] = val;
      }
    });
  });
}
function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
  properties.forEach(function(prop) {
    if (!(prop in Constructor.prototype))
      return;
    ProxyClass.prototype[prop] = function() {
      return promisifyRequestCall(this[targetProp], prop, arguments);
    };
  });
}
function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
  properties.forEach(function(prop) {
    if (!(prop in Constructor.prototype))
      return;
    ProxyClass.prototype[prop] = function() {
      return this[targetProp][prop].apply(this[targetProp], arguments);
    };
  });
}
function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
  properties.forEach(function(prop) {
    if (!(prop in Constructor.prototype))
      return;
    ProxyClass.prototype[prop] = function() {
      return promisifyCursorRequestCall(this[targetProp], prop, arguments);
    };
  });
}
function Index(index) {
  this._index = index;
}
proxyProperties(Index, "_index", [
  "name",
  "keyPath",
  "multiEntry",
  "unique"
]);
proxyRequestMethods(Index, "_index", IDBIndex, [
  "get",
  "getKey",
  "getAll",
  "getAllKeys",
  "count"
]);
proxyCursorRequestMethods(Index, "_index", IDBIndex, [
  "openCursor",
  "openKeyCursor"
]);
function Cursor(cursor, request) {
  this._cursor = cursor;
  this._request = request;
}
proxyProperties(Cursor, "_cursor", [
  "direction",
  "key",
  "primaryKey",
  "value"
]);
proxyRequestMethods(Cursor, "_cursor", IDBCursor, [
  "update",
  "delete"
]);
["advance", "continue", "continuePrimaryKey"].forEach(function(methodName) {
  if (!(methodName in IDBCursor.prototype))
    return;
  Cursor.prototype[methodName] = function() {
    var cursor = this;
    var args = arguments;
    return Promise.resolve().then(function() {
      cursor._cursor[methodName].apply(cursor._cursor, args);
      return promisifyRequest(cursor._request).then(function(value) {
        if (!value)
          return;
        return new Cursor(value, cursor._request);
      });
    });
  };
});
function ObjectStore(store) {
  this._store = store;
}
ObjectStore.prototype.createIndex = function() {
  return new Index(this._store.createIndex.apply(this._store, arguments));
};
ObjectStore.prototype.index = function() {
  return new Index(this._store.index.apply(this._store, arguments));
};
proxyProperties(ObjectStore, "_store", [
  "name",
  "keyPath",
  "indexNames",
  "autoIncrement"
]);
proxyRequestMethods(ObjectStore, "_store", IDBObjectStore, [
  "put",
  "add",
  "delete",
  "clear",
  "get",
  "getAll",
  "getKey",
  "getAllKeys",
  "count"
]);
proxyCursorRequestMethods(ObjectStore, "_store", IDBObjectStore, [
  "openCursor",
  "openKeyCursor"
]);
proxyMethods(ObjectStore, "_store", IDBObjectStore, [
  "deleteIndex"
]);
function Transaction(idbTransaction) {
  this._tx = idbTransaction;
  this.complete = new Promise(function(resolve, reject) {
    idbTransaction.oncomplete = function() {
      resolve();
    };
    idbTransaction.onerror = function() {
      reject(idbTransaction.error);
    };
    idbTransaction.onabort = function() {
      reject(idbTransaction.error);
    };
  });
}
Transaction.prototype.objectStore = function() {
  return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
};
proxyProperties(Transaction, "_tx", [
  "objectStoreNames",
  "mode"
]);
proxyMethods(Transaction, "_tx", IDBTransaction, [
  "abort"
]);
function UpgradeDB(db, oldVersion, transaction) {
  this._db = db;
  this.oldVersion = oldVersion;
  this.transaction = new Transaction(transaction);
}
UpgradeDB.prototype.createObjectStore = function() {
  return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
};
proxyProperties(UpgradeDB, "_db", [
  "name",
  "version",
  "objectStoreNames"
]);
proxyMethods(UpgradeDB, "_db", IDBDatabase, [
  "deleteObjectStore",
  "close"
]);
function DB(db) {
  this._db = db;
}
DB.prototype.transaction = function() {
  return new Transaction(this._db.transaction.apply(this._db, arguments));
};
proxyProperties(DB, "_db", [
  "name",
  "version",
  "objectStoreNames"
]);
proxyMethods(DB, "_db", IDBDatabase, [
  "close"
]);
["openCursor", "openKeyCursor"].forEach(function(funcName) {
  [ObjectStore, Index].forEach(function(Constructor) {
    if (!(funcName in Constructor.prototype))
      return;
    Constructor.prototype[funcName.replace("open", "iterate")] = function() {
      var args = toArray(arguments);
      var callback = args[args.length - 1];
      var nativeObject = this._store || this._index;
      var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
      request.onsuccess = function() {
        callback(request.result);
      };
    };
  });
});
[Index, ObjectStore].forEach(function(Constructor) {
  if (Constructor.prototype.getAll)
    return;
  Constructor.prototype.getAll = function(query, count) {
    var instance = this;
    var items = [];
    return new Promise(function(resolve) {
      instance.iterateCursor(query, function(cursor) {
        if (!cursor) {
          resolve(items);
          return;
        }
        items.push(cursor.value);
        if (count !== void 0 && items.length == count) {
          resolve(items);
          return;
        }
        cursor.continue();
      });
    });
  };
});
function openDb(name2, version2, upgradeCallback) {
  var p = promisifyRequestCall(indexedDB, "open", [name2, version2]);
  var request = p.request;
  if (request) {
    request.onupgradeneeded = function(event) {
      if (upgradeCallback) {
        upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
      }
    };
  }
  return p.then(function(db) {
    return new DB(db);
  });
}
var name = "@firebase/installations";
var version = "0.4.17";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PENDING_TIMEOUT_MS = 1e4;
var PACKAGE_VERSION = "w:" + version;
var INTERNAL_AUTH_VERSION = "FIS_v2";
var INSTALLATIONS_API_URL = "https://firebaseinstallations.googleapis.com/v1";
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1e3;
var SERVICE = "installations";
var SERVICE_NAME = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERROR_DESCRIPTION_MAP = (_a = {}, _a["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', _a["not-registered"] = "Firebase Installation is not registered.", _a["installation-not-found"] = "Firebase Installation not found.", _a["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', _a["app-offline"] = "Could not process request. Application offline.", _a["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", _a);
var ERROR_FACTORY = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
function isServerError(error) {
  return error instanceof FirebaseError && error.code.includes("request-failed");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint(_a2) {
  var projectId = _a2.projectId;
  return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
}
function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}
function getErrorFromResponse(requestName, response) {
  return __awaiter(this, void 0, void 0, function() {
    var responseJson, errorData;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, response.json()];
        case 1:
          responseJson = _a2.sent();
          errorData = responseJson.error;
          return [2, ERROR_FACTORY.create("request-failed", {
            requestName,
            serverCode: errorData.code,
            serverMessage: errorData.message,
            serverStatus: errorData.status
          })];
      }
    });
  });
}
function getHeaders(_a2) {
  var apiKey = _a2.apiKey;
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
function getHeadersWithAuth(appConfig, _a2) {
  var refreshToken = _a2.refreshToken;
  var headers = getHeaders(appConfig);
  headers.append("Authorization", getAuthorizationHeader(refreshToken));
  return headers;
}
function retryIfServerError(fn) {
  return __awaiter(this, void 0, void 0, function() {
    var result;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, fn()];
        case 1:
          result = _a2.sent();
          if (result.status >= 500 && result.status < 600) {
            return [2, fn()];
          }
          return [2, result];
      }
    });
  });
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  return Number(responseExpiresIn.replace("s", "000"));
}
function getAuthorizationHeader(refreshToken) {
  return INTERNAL_AUTH_VERSION + " " + refreshToken;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createInstallationRequest(appConfig, _a2) {
  var fid = _a2.fid;
  return __awaiter(this, void 0, void 0, function() {
    var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          endpoint = getInstallationsEndpoint(appConfig);
          headers = getHeaders(appConfig);
          body = {
            fid,
            authVersion: INTERNAL_AUTH_VERSION,
            appId: appConfig.appId,
            sdkVersion: PACKAGE_VERSION
          };
          request = {
            method: "POST",
            headers,
            body: JSON.stringify(body)
          };
          return [4, retryIfServerError(function() {
            return fetch(endpoint, request);
          })];
        case 1:
          response = _b.sent();
          if (!response.ok)
            return [3, 3];
          return [4, response.json()];
        case 2:
          responseValue = _b.sent();
          registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
          };
          return [2, registeredInstallationEntry];
        case 3:
          return [4, getErrorFromResponse("Create Installation", response)];
        case 4:
          throw _b.sent();
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sleep(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
  var b64 = btoa(String.fromCharCode.apply(String, __spread(array)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = "";
function generateFid() {
  try {
    var fidByteArray = new Uint8Array(17);
    var crypto_1 = self.crypto || self.msCrypto;
    crypto_1.getRandomValues(fidByteArray);
    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    var fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a2) {
    return INVALID_FID;
  }
}
function encode(fidByteArray) {
  var b64String = bufferToBase64UrlSafe(fidByteArray);
  return b64String.substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getKey(appConfig) {
  return appConfig.appName + "!" + appConfig.appId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fidChangeCallbacks = /* @__PURE__ */ new Map();
function fidChanged(appConfig, fid) {
  var key = getKey(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
  getBroadcastChannel();
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    callbackSet = /* @__PURE__ */ new Set();
    fidChangeCallbacks.set(key, callbackSet);
  }
  callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    return;
  }
  callbackSet.delete(callback);
  if (callbackSet.size === 0) {
    fidChangeCallbacks.delete(key);
  }
  closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
  var e_1, _a2;
  var callbacks = fidChangeCallbacks.get(key);
  if (!callbacks) {
    return;
  }
  try {
    for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
      var callback = callbacks_1_1.value;
      callback(fid);
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (callbacks_1_1 && !callbacks_1_1.done && (_a2 = callbacks_1.return))
        _a2.call(callbacks_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
}
function broadcastFidChange(key, fid) {
  var channel = getBroadcastChannel();
  if (channel) {
    channel.postMessage({ key, fid });
  }
  closeBroadcastChannel();
}
var broadcastChannel = null;
function getBroadcastChannel() {
  if (!broadcastChannel && "BroadcastChannel" in self) {
    broadcastChannel = new BroadcastChannel("[Firebase] FID Change");
    broadcastChannel.onmessage = function(e) {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }
  return broadcastChannel;
}
function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DATABASE_NAME = "firebase-installations-database";
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = "firebase-installations-store";
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDb(DATABASE_NAME, DATABASE_VERSION, function(upgradeDB) {
      switch (upgradeDB.oldVersion) {
        case 0:
          upgradeDB.createObjectStore(OBJECT_STORE_NAME);
      }
    });
  }
  return dbPromise;
}
function set(appConfig, value) {
  return __awaiter(this, void 0, void 0, function() {
    var key, db, tx, objectStore, oldValue;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          key = getKey(appConfig);
          return [4, getDbPromise()];
        case 1:
          db = _a2.sent();
          tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
          objectStore = tx.objectStore(OBJECT_STORE_NAME);
          return [4, objectStore.get(key)];
        case 2:
          oldValue = _a2.sent();
          return [4, objectStore.put(value, key)];
        case 3:
          _a2.sent();
          return [4, tx.complete];
        case 4:
          _a2.sent();
          if (!oldValue || oldValue.fid !== value.fid) {
            fidChanged(appConfig, value.fid);
          }
          return [2, value];
      }
    });
  });
}
function remove(appConfig) {
  return __awaiter(this, void 0, void 0, function() {
    var key, db, tx;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          key = getKey(appConfig);
          return [4, getDbPromise()];
        case 1:
          db = _a2.sent();
          tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
          return [4, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
        case 2:
          _a2.sent();
          return [4, tx.complete];
        case 3:
          _a2.sent();
          return [2];
      }
    });
  });
}
function update(appConfig, updateFn) {
  return __awaiter(this, void 0, void 0, function() {
    var key, db, tx, store, oldValue, newValue;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          key = getKey(appConfig);
          return [4, getDbPromise()];
        case 1:
          db = _a2.sent();
          tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
          store = tx.objectStore(OBJECT_STORE_NAME);
          return [4, store.get(key)];
        case 2:
          oldValue = _a2.sent();
          newValue = updateFn(oldValue);
          if (!(newValue === void 0))
            return [3, 4];
          return [4, store.delete(key)];
        case 3:
          _a2.sent();
          return [3, 6];
        case 4:
          return [4, store.put(newValue, key)];
        case 5:
          _a2.sent();
          _a2.label = 6;
        case 6:
          return [4, tx.complete];
        case 7:
          _a2.sent();
          if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
            fidChanged(appConfig, newValue.fid);
          }
          return [2, newValue];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationEntry(appConfig) {
  return __awaiter(this, void 0, void 0, function() {
    var registrationPromise, installationEntry;
    var _a2;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          return [4, update(appConfig, function(oldEntry) {
            var installationEntry2 = updateOrCreateInstallationEntry(oldEntry);
            var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry2);
            registrationPromise = entryWithPromise.registrationPromise;
            return entryWithPromise.installationEntry;
          })];
        case 1:
          installationEntry = _b.sent();
          if (!(installationEntry.fid === INVALID_FID))
            return [3, 3];
          _a2 = {};
          return [4, registrationPromise];
        case 2:
          return [2, (_a2.installationEntry = _b.sent(), _a2)];
        case 3:
          return [2, {
            installationEntry,
            registrationPromise
          }];
      }
    });
  });
}
function updateOrCreateInstallationEntry(oldEntry) {
  var entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0
  };
  return clearTimedOutRequest(entry);
}
function triggerRegistrationIfNecessary(appConfig, installationEntry) {
  if (installationEntry.registrationStatus === 0) {
    if (!navigator.onLine) {
      var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline"));
      return {
        installationEntry,
        registrationPromise: registrationPromiseWithError
      };
    }
    var inProgressEntry = {
      fid: installationEntry.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    };
    var registrationPromise = registerInstallation(appConfig, inProgressEntry);
    return { installationEntry: inProgressEntry, registrationPromise };
  } else if (installationEntry.registrationStatus === 1) {
    return {
      installationEntry,
      registrationPromise: waitUntilFidRegistration(appConfig)
    };
  } else {
    return { installationEntry };
  }
}
function registerInstallation(appConfig, installationEntry) {
  return __awaiter(this, void 0, void 0, function() {
    var registeredInstallationEntry, e_1;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          _a2.trys.push([0, 2, , 7]);
          return [4, createInstallationRequest(appConfig, installationEntry)];
        case 1:
          registeredInstallationEntry = _a2.sent();
          return [2, set(appConfig, registeredInstallationEntry)];
        case 2:
          e_1 = _a2.sent();
          if (!(isServerError(e_1) && e_1.serverCode === 409))
            return [3, 4];
          return [4, remove(appConfig)];
        case 3:
          _a2.sent();
          return [3, 6];
        case 4:
          return [4, set(appConfig, {
            fid: installationEntry.fid,
            registrationStatus: 0
          })];
        case 5:
          _a2.sent();
          _a2.label = 6;
        case 6:
          throw e_1;
        case 7:
          return [2];
      }
    });
  });
}
function waitUntilFidRegistration(appConfig) {
  return __awaiter(this, void 0, void 0, function() {
    var entry, _a2, installationEntry, registrationPromise;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          return [4, updateInstallationRequest(appConfig)];
        case 1:
          entry = _b.sent();
          _b.label = 2;
        case 2:
          if (!(entry.registrationStatus === 1))
            return [3, 5];
          return [4, sleep(100)];
        case 3:
          _b.sent();
          return [4, updateInstallationRequest(appConfig)];
        case 4:
          entry = _b.sent();
          return [3, 2];
        case 5:
          if (!(entry.registrationStatus === 0))
            return [3, 7];
          return [4, getInstallationEntry(appConfig)];
        case 6:
          _a2 = _b.sent(), installationEntry = _a2.installationEntry, registrationPromise = _a2.registrationPromise;
          if (registrationPromise) {
            return [2, registrationPromise];
          } else {
            return [2, installationEntry];
          }
        case 7:
          return [2, entry];
      }
    });
  });
}
function updateInstallationRequest(appConfig) {
  return update(appConfig, function(oldEntry) {
    if (!oldEntry) {
      throw ERROR_FACTORY.create("installation-not-found");
    }
    return clearTimedOutRequest(oldEntry);
  });
}
function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0
    };
  }
  return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1 && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function generateAuthTokenRequest(_a2, installationEntry) {
  var appConfig = _a2.appConfig, platformLoggerProvider = _a2.platformLoggerProvider;
  return __awaiter(this, void 0, void 0, function() {
    var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          platformLogger = platformLoggerProvider.getImmediate({
            optional: true
          });
          if (platformLogger) {
            headers.append("x-firebase-client", platformLogger.getPlatformInfoString());
          }
          body = {
            installation: {
              sdkVersion: PACKAGE_VERSION
            }
          };
          request = {
            method: "POST",
            headers,
            body: JSON.stringify(body)
          };
          return [4, retryIfServerError(function() {
            return fetch(endpoint, request);
          })];
        case 1:
          response = _b.sent();
          if (!response.ok)
            return [3, 3];
          return [4, response.json()];
        case 2:
          responseValue = _b.sent();
          completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
          return [2, completedAuthToken];
        case 3:
          return [4, getErrorFromResponse("Generate Auth Token", response)];
        case 4:
          throw _b.sent();
      }
    });
  });
}
function getGenerateAuthTokenEndpoint(appConfig, _a2) {
  var fid = _a2.fid;
  return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function refreshAuthToken(dependencies, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  return __awaiter(this, void 0, void 0, function() {
    var tokenPromise, entry, authToken, _a2;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          return [4, update(dependencies.appConfig, function(oldEntry) {
            if (!isEntryRegistered(oldEntry)) {
              throw ERROR_FACTORY.create("not-registered");
            }
            var oldAuthToken = oldEntry.authToken;
            if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
              return oldEntry;
            } else if (oldAuthToken.requestStatus === 1) {
              tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
              return oldEntry;
            } else {
              if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline");
              }
              var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
              tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
              return inProgressEntry;
            }
          })];
        case 1:
          entry = _b.sent();
          if (!tokenPromise)
            return [3, 3];
          return [4, tokenPromise];
        case 2:
          _a2 = _b.sent();
          return [3, 4];
        case 3:
          _a2 = entry.authToken;
          _b.label = 4;
        case 4:
          authToken = _a2;
          return [2, authToken];
      }
    });
  });
}
function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
  return __awaiter(this, void 0, void 0, function() {
    var entry, authToken;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, updateAuthTokenRequest(dependencies.appConfig)];
        case 1:
          entry = _a2.sent();
          _a2.label = 2;
        case 2:
          if (!(entry.authToken.requestStatus === 1))
            return [3, 5];
          return [4, sleep(100)];
        case 3:
          _a2.sent();
          return [4, updateAuthTokenRequest(dependencies.appConfig)];
        case 4:
          entry = _a2.sent();
          return [3, 2];
        case 5:
          authToken = entry.authToken;
          if (authToken.requestStatus === 0) {
            return [2, refreshAuthToken(dependencies, forceRefresh)];
          } else {
            return [2, authToken];
          }
      }
    });
  });
}
function updateAuthTokenRequest(appConfig) {
  return update(appConfig, function(oldEntry) {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY.create("not-registered");
    }
    var oldAuthToken = oldEntry.authToken;
    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return __assign(__assign({}, oldEntry), { authToken: { requestStatus: 0 } });
    }
    return oldEntry;
  });
}
function fetchAuthTokenFromServer(dependencies, installationEntry) {
  return __awaiter(this, void 0, void 0, function() {
    var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          _a2.trys.push([0, 3, , 8]);
          return [4, generateAuthTokenRequest(dependencies, installationEntry)];
        case 1:
          authToken = _a2.sent();
          updatedInstallationEntry = __assign(__assign({}, installationEntry), { authToken });
          return [4, set(dependencies.appConfig, updatedInstallationEntry)];
        case 2:
          _a2.sent();
          return [2, authToken];
        case 3:
          e_1 = _a2.sent();
          if (!(isServerError(e_1) && (e_1.serverCode === 401 || e_1.serverCode === 404)))
            return [3, 5];
          return [4, remove(dependencies.appConfig)];
        case 4:
          _a2.sent();
          return [3, 7];
        case 5:
          updatedInstallationEntry = __assign(__assign({}, installationEntry), { authToken: { requestStatus: 0 } });
          return [4, set(dependencies.appConfig, updatedInstallationEntry)];
        case 6:
          _a2.sent();
          _a2.label = 7;
        case 7:
          throw e_1;
        case 8:
          return [2];
      }
    });
  });
}
function isEntryRegistered(installationEntry) {
  return installationEntry !== void 0 && installationEntry.registrationStatus === 2;
}
function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2 && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
  var now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
function makeAuthTokenRequestInProgressEntry(oldEntry) {
  var inProgressAuthToken = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return __assign(__assign({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1 && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getId(dependencies) {
  return __awaiter(this, void 0, void 0, function() {
    var _a2, installationEntry, registrationPromise;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          return [4, getInstallationEntry(dependencies.appConfig)];
        case 1:
          _a2 = _b.sent(), installationEntry = _a2.installationEntry, registrationPromise = _a2.registrationPromise;
          if (registrationPromise) {
            registrationPromise.catch(console.error);
          } else {
            refreshAuthToken(dependencies).catch(console.error);
          }
          return [2, installationEntry.fid];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getToken(dependencies, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  return __awaiter(this, void 0, void 0, function() {
    var authToken;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, completeInstallationRegistration(dependencies.appConfig)];
        case 1:
          _a2.sent();
          return [4, refreshAuthToken(dependencies, forceRefresh)];
        case 2:
          authToken = _a2.sent();
          return [2, authToken.token];
      }
    });
  });
}
function completeInstallationRegistration(appConfig) {
  return __awaiter(this, void 0, void 0, function() {
    var registrationPromise;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getInstallationEntry(appConfig)];
        case 1:
          registrationPromise = _a2.sent().registrationPromise;
          if (!registrationPromise)
            return [3, 3];
          return [4, registrationPromise];
        case 2:
          _a2.sent();
          _a2.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallationRequest(appConfig, installationEntry) {
  return __awaiter(this, void 0, void 0, function() {
    var endpoint, headers, request, response;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          endpoint = getDeleteEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          request = {
            method: "DELETE",
            headers
          };
          return [4, retryIfServerError(function() {
            return fetch(endpoint, request);
          })];
        case 1:
          response = _a2.sent();
          if (!!response.ok)
            return [3, 3];
          return [4, getErrorFromResponse("Delete Installation", response)];
        case 2:
          throw _a2.sent();
        case 3:
          return [2];
      }
    });
  });
}
function getDeleteEndpoint(appConfig, _a2) {
  var fid = _a2.fid;
  return getInstallationsEndpoint(appConfig) + "/" + fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallation(dependencies) {
  return __awaiter(this, void 0, void 0, function() {
    var appConfig, entry;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          appConfig = dependencies.appConfig;
          return [4, update(appConfig, function(oldEntry) {
            if (oldEntry && oldEntry.registrationStatus === 0) {
              return void 0;
            }
            return oldEntry;
          })];
        case 1:
          entry = _a2.sent();
          if (!entry)
            return [3, 6];
          if (!(entry.registrationStatus === 1))
            return [3, 2];
          throw ERROR_FACTORY.create("delete-pending-registration");
        case 2:
          if (!(entry.registrationStatus === 2))
            return [3, 6];
          if (!!navigator.onLine)
            return [3, 3];
          throw ERROR_FACTORY.create("app-offline");
        case 3:
          return [4, deleteInstallationRequest(appConfig, entry)];
        case 4:
          _a2.sent();
          return [4, remove(appConfig)];
        case 5:
          _a2.sent();
          _a2.label = 6;
        case 6:
          return [2];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function onIdChange(_a2, callback) {
  var appConfig = _a2.appConfig;
  addCallback(appConfig, callback);
  return function() {
    removeCallback(appConfig, callback);
  };
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
  var e_1, _a2;
  if (!app || !app.options) {
    throw getMissingValueError("App Configuration");
  }
  if (!app.name) {
    throw getMissingValueError("App Name");
  }
  var configKeys = [
    "projectId",
    "apiKey",
    "appId"
  ];
  try {
    for (var configKeys_1 = __values(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
      var keyName = configKeys_1_1.value;
      if (!app.options[keyName]) {
        throw getMissingValueError(keyName);
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (configKeys_1_1 && !configKeys_1_1.done && (_a2 = configKeys_1.return))
        _a2.call(configKeys_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}
function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values", {
    valueName
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerInstallations(instance) {
  var installationsName = "installations";
  instance.INTERNAL.registerComponent(new Component(installationsName, function(container) {
    var app = container.getProvider("app").getImmediate();
    var appConfig = extractAppConfig(app);
    var platformLoggerProvider = container.getProvider("platform-logger");
    var dependencies = {
      appConfig,
      platformLoggerProvider
    };
    var installations = {
      app,
      getId: function() {
        return getId(dependencies);
      },
      getToken: function(forceRefresh) {
        return getToken(dependencies, forceRefresh);
      },
      delete: function() {
        return deleteInstallation(dependencies);
      },
      onIdChange: function(callback) {
        return onIdChange(dependencies, callback);
      }
    };
    return installations;
  }, "PUBLIC"));
  instance.registerVersion(name, version);
}
registerInstallations(firebase$1);
