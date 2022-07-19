import { _ as __vitePreload } from "./index.ae92f232.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics$1 = function(d, b2) {
  extendStatics$1 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
    d2.__proto__ = b3;
  } || function(d2, b3) {
    for (var p2 in b3)
      if (b3.hasOwnProperty(p2))
        d2[p2] = b3[p2];
  };
  return extendStatics$1(d, b2);
};
function __extends$1(d, b2) {
  extendStatics$1(d, b2);
  function __() {
    this.constructor = d;
  }
  d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t[p2] = s[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y2, t, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done)
          return t;
        if (y2 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t[1]) {
              _2.label = t[1];
              t = op;
              break;
            }
            if (t && _2.label < t[2]) {
              _2.label = t[2];
              _2.ops.push(op);
              break;
            }
            if (t[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values$1(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n2) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r2, ar2 = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar2.push(r2.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar2;
}
function __spread() {
  for (var ar2 = [], i = 0; i < arguments.length; i++)
    ar2 = ar2.concat(__read(arguments[i]));
  return ar2;
}
function __spreadArrays$1() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r2 = Array(s), k2 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j2 = 0, jl = a.length; j2 < jl; j2++, k2++)
      r2[k2] = a[j2];
  return r2;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function deepCopy(value) {
  return deepExtend(void 0, value);
}
function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }
  switch (source.constructor) {
    case Date:
      var dateValue = source;
      return new Date(dateValue.getTime());
    case Object:
      if (target === void 0) {
        target = {};
      }
      break;
    case Array:
      target = [];
      break;
    default:
      return source;
  }
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) {
      continue;
    }
    target[prop] = deepExtend(target[prop], source[prop]);
  }
  return target;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Deferred = function() {
  function Deferred2() {
    var _this = this;
    this.reject = function() {
    };
    this.resolve = function() {
    };
    this.promise = new Promise(function(resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  Deferred2.prototype.wrapCallback = function(callback) {
    var _this = this;
    return function(error, value) {
      if (error) {
        _this.reject(error);
      } else {
        _this.resolve(value);
      }
      if (typeof callback === "function") {
        _this.promise.catch(function() {
        });
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  };
  return Deferred2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function getUA() {
  if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isMobileCordova() {
  return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch (e) {
    return false;
  }
}
function isBrowser() {
  return typeof self === "object" && self.self === self;
}
function isBrowserExtension() {
  var runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isReactNative() {
  return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
function isElectron() {
  return getUA().indexOf("Electron/") >= 0;
}
function isIE() {
  var ua2 = getUA();
  return ua2.indexOf("MSIE ") >= 0 || ua2.indexOf("Trident/") >= 0;
}
function isUWP() {
  return getUA().indexOf("MSAppHost/") >= 0;
}
function isIndexedDBAvailable() {
  return "indexedDB" in self && indexedDB != null;
}
function validateIndexedDBOpenable() {
  return new Promise(function(resolve, reject) {
    try {
      var preExist_1 = true;
      var DB_CHECK_NAME_1 = "validate-browser-context-for-indexeddb-analytics-module";
      var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);
      request_1.onsuccess = function() {
        request_1.result.close();
        if (!preExist_1) {
          window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
        }
        resolve(true);
      };
      request_1.onupgradeneeded = function() {
        preExist_1 = false;
      };
      request_1.onerror = function() {
        var _a2;
        reject(((_a2 = request_1.error) === null || _a2 === void 0 ? void 0 : _a2.message) || "");
      };
    } catch (error) {
      reject(error);
    }
  });
}
function areCookiesEnabled() {
  if (!navigator || !navigator.cookieEnabled) {
    return false;
  }
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var ERROR_NAME = "FirebaseError";
var FirebaseError = function(_super) {
  __extends$1(FirebaseError2, _super);
  function FirebaseError2(code, message) {
    var _this = _super.call(this, message) || this;
    _this.code = code;
    _this.name = ERROR_NAME;
    Object.setPrototypeOf(_this, FirebaseError2.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, ErrorFactory.prototype.create);
    }
    return _this;
  }
  return FirebaseError2;
}(Error);
var ErrorFactory = function() {
  function ErrorFactory2(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  ErrorFactory2.prototype.create = function(code) {
    var data = [];
    for (var _i2 = 1; _i2 < arguments.length; _i2++) {
      data[_i2 - 1] = arguments[_i2];
    }
    var customData = data[0] || {};
    var fullCode = this.service + "/" + code;
    var template = this.errors[code];
    var message = template ? replaceTemplate(template, customData) : "Error";
    var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
    var error = new FirebaseError(fullCode, fullMessage);
    for (var _a2 = 0, _b = Object.keys(customData); _a2 < _b.length; _a2++) {
      var key = _b[_a2];
      if (key.slice(-1) !== "_") {
        if (key in error) {
          console.warn('Overwriting FirebaseError base field "' + key + '" can cause unexpected behavior.');
        }
        error[key] = customData[key];
      }
    }
    return error;
  };
  return ErrorFactory2;
}();
function replaceTemplate(template, data) {
  return template.replace(PATTERN, function(_2, key) {
    var value = data[key];
    return value != null ? String(value) : "<" + key + "?>";
  });
}
var PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
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
function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
var ObserverProxy = function() {
  function ObserverProxy2(executor, onNoObservers) {
    var _this = this;
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    this.task.then(function() {
      executor(_this);
    }).catch(function(e) {
      _this.error(e);
    });
  }
  ObserverProxy2.prototype.next = function(value) {
    this.forEachObserver(function(observer) {
      observer.next(value);
    });
  };
  ObserverProxy2.prototype.error = function(error) {
    this.forEachObserver(function(observer) {
      observer.error(error);
    });
    this.close(error);
  };
  ObserverProxy2.prototype.complete = function() {
    this.forEachObserver(function(observer) {
      observer.complete();
    });
    this.close();
  };
  ObserverProxy2.prototype.subscribe = function(nextOrObserver, error, complete) {
    var _this = this;
    var observer;
    if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
      throw new Error("Missing Observer.");
    }
    if (implementsAnyMethods(nextOrObserver, [
      "next",
      "error",
      "complete"
    ])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error,
        complete
      };
    }
    if (observer.next === void 0) {
      observer.next = noop;
    }
    if (observer.error === void 0) {
      observer.error = noop;
    }
    if (observer.complete === void 0) {
      observer.complete = noop;
    }
    var unsub = this.unsubscribeOne.bind(this, this.observers.length);
    if (this.finalized) {
      this.task.then(function() {
        try {
          if (_this.finalError) {
            observer.error(_this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {
        }
        return;
      });
    }
    this.observers.push(observer);
    return unsub;
  };
  ObserverProxy2.prototype.unsubscribeOne = function(i) {
    if (this.observers === void 0 || this.observers[i] === void 0) {
      return;
    }
    delete this.observers[i];
    this.observerCount -= 1;
    if (this.observerCount === 0 && this.onNoObservers !== void 0) {
      this.onNoObservers(this);
    }
  };
  ObserverProxy2.prototype.forEachObserver = function(fn2) {
    if (this.finalized) {
      return;
    }
    for (var i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn2);
    }
  };
  ObserverProxy2.prototype.sendOne = function(i, fn2) {
    var _this = this;
    this.task.then(function() {
      if (_this.observers !== void 0 && _this.observers[i] !== void 0) {
        try {
          fn2(_this.observers[i]);
        } catch (e) {
          if (typeof console !== "undefined" && console.error) {
            console.error(e);
          }
        }
      }
    });
  };
  ObserverProxy2.prototype.close = function(err) {
    var _this = this;
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (err !== void 0) {
      this.finalError = err;
    }
    this.task.then(function() {
      _this.observers = void 0;
      _this.onNoObservers = void 0;
    });
  };
  return ObserverProxy2;
}();
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (var _i2 = 0, methods_1 = methods; _i2 < methods_1.length; _i2++) {
    var method = methods_1[_i2];
    if (method in obj && typeof obj[method] === "function") {
      return true;
    }
  }
  return false;
}
function noop() {
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
var DEFAULT_INTERVAL_MILLIS = 1e3;
var DEFAULT_BACKOFF_FACTOR = 2;
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
var RANDOM_FACTOR = 0.5;
function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
  if (intervalMillis === void 0) {
    intervalMillis = DEFAULT_INTERVAL_MILLIS;
  }
  if (backoffFactor === void 0) {
    backoffFactor = DEFAULT_BACKOFF_FACTOR;
  }
  var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
  var randomWait = Math.round(RANDOM_FACTOR * currBaseValue * (Math.random() - 0.5) * 2);
  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
var Component = function() {
  function Component2(name2, instanceFactory, type) {
    this.name = name2;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
  }
  Component2.prototype.setInstantiationMode = function(mode) {
    this.instantiationMode = mode;
    return this;
  };
  Component2.prototype.setMultipleInstances = function(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  };
  Component2.prototype.setServiceProps = function(props) {
    this.serviceProps = props;
    return this;
  };
  return Component2;
}();
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
var DEFAULT_ENTRY_NAME$1 = "[DEFAULT]";
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
var Provider = function() {
  function Provider2(name2, container) {
    this.name = name2;
    this.container = container;
    this.component = null;
    this.instances = /* @__PURE__ */ new Map();
    this.instancesDeferred = /* @__PURE__ */ new Map();
  }
  Provider2.prototype.get = function(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      var deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      try {
        var instance = this.getOrInitializeService(normalizedIdentifier);
        if (instance) {
          deferred.resolve(instance);
        }
      } catch (e) {
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  };
  Provider2.prototype.getImmediate = function(options) {
    var _a2 = __assign({ identifier: DEFAULT_ENTRY_NAME$1, optional: false }, options), identifier = _a2.identifier, optional = _a2.optional;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    try {
      var instance = this.getOrInitializeService(normalizedIdentifier);
      if (!instance) {
        if (optional) {
          return null;
        }
        throw Error("Service " + this.name + " is not available");
      }
      return instance;
    } catch (e) {
      if (optional) {
        return null;
      } else {
        throw e;
      }
    }
  };
  Provider2.prototype.getComponent = function() {
    return this.component;
  };
  Provider2.prototype.setComponent = function(component) {
    var e_1, _a2;
    if (component.name !== this.name) {
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }
    if (this.component) {
      throw Error("Component for " + this.name + " has already been provided");
    }
    this.component = component;
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService(DEFAULT_ENTRY_NAME$1);
      } catch (e) {
      }
    }
    try {
      for (var _b = __values$1(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try {
          var instance = this.getOrInitializeService(normalizedIdentifier);
          instanceDeferred.resolve(instance);
        } catch (e) {
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  Provider2.prototype.clearInstance = function(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    this.instancesDeferred.delete(identifier);
    this.instances.delete(identifier);
  };
  Provider2.prototype.delete = function() {
    return __awaiter(this, void 0, void 0, function() {
      var services;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            services = Array.from(this.instances.values());
            return [4, Promise.all(__spread(services.filter(function(service) {
              return "INTERNAL" in service;
            }).map(function(service) {
              return service.INTERNAL.delete();
            }), services.filter(function(service) {
              return "_delete" in service;
            }).map(function(service) {
              return service._delete();
            })))];
          case 1:
            _a2.sent();
            return [2];
        }
      });
    });
  };
  Provider2.prototype.isComponentSet = function() {
    return this.component != null;
  };
  Provider2.prototype.getOrInitializeService = function(identifier) {
    var instance = this.instances.get(identifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
      this.instances.set(identifier, instance);
    }
    return instance || null;
  };
  Provider2.prototype.normalizeInstanceIdentifier = function(identifier) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
    } else {
      return identifier;
    }
  };
  return Provider2;
}();
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME$1 ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
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
var ComponentContainer = function() {
  function ComponentContainer2(name2) {
    this.name = name2;
    this.providers = /* @__PURE__ */ new Map();
  }
  ComponentContainer2.prototype.addComponent = function(component) {
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }
    provider.setComponent(component);
  };
  ComponentContainer2.prototype.addOrOverwriteComponent = function(component) {
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  };
  ComponentContainer2.prototype.getProvider = function(name2) {
    if (this.providers.has(name2)) {
      return this.providers.get(name2);
    }
    var provider = new Provider(name2, this);
    this.providers.set(name2, provider);
    return provider;
  };
  ComponentContainer2.prototype.getProviders = function() {
    return Array.from(this.providers.values());
  };
  return ComponentContainer2;
}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r2 = Array(s), k2 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j2 = 0, jl = a.length; j2 < jl; j2++, k2++)
      r2[k2] = a[j2];
  return r2;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var _a$2;
var instances = [];
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = (_a$2 = {}, _a$2[LogLevel.DEBUG] = "log", _a$2[LogLevel.VERBOSE] = "log", _a$2[LogLevel.INFO] = "info", _a$2[LogLevel.WARN] = "warn", _a$2[LogLevel.ERROR] = "error", _a$2);
var defaultLogHandler = function(instance, logType) {
  var args = [];
  for (var _i2 = 2; _i2 < arguments.length; _i2++) {
    args[_i2 - 2] = arguments[_i2];
  }
  if (logType < instance.logLevel) {
    return;
  }
  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];
  if (method) {
    console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};
var Logger = function() {
  function Logger2(name2) {
    this.name = name2;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  Object.defineProperty(Logger2.prototype, "logLevel", {
    get: function() {
      return this._logLevel;
    },
    set: function(val) {
      if (!(val in LogLevel)) {
        throw new TypeError('Invalid value "' + val + '" assigned to `logLevel`');
      }
      this._logLevel = val;
    },
    enumerable: false,
    configurable: true
  });
  Logger2.prototype.setLogLevel = function(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  };
  Object.defineProperty(Logger2.prototype, "logHandler", {
    get: function() {
      return this._logHandler;
    },
    set: function(val) {
      if (typeof val !== "function") {
        throw new TypeError("Value assigned to `logHandler` must be a function");
      }
      this._logHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger2.prototype, "userLogHandler", {
    get: function() {
      return this._userLogHandler;
    },
    set: function(val) {
      this._userLogHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Logger2.prototype.debug = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
  };
  Logger2.prototype.log = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
  };
  Logger2.prototype.info = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
  };
  Logger2.prototype.warn = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
  };
  Logger2.prototype.error = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
  };
  return Logger2;
}();
function setLogLevel(level) {
  instances.forEach(function(inst) {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  var _loop_1 = function(instance2) {
    var customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance2.userLogHandler = null;
    } else {
      instance2.userLogHandler = function(instance3, level) {
        var args = [];
        for (var _i3 = 2; _i3 < arguments.length; _i3++) {
          args[_i3 - 2] = arguments[_i3];
        }
        var message = args.map(function(arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === "string") {
            return arg;
          } else if (typeof arg === "number" || typeof arg === "boolean") {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function(arg) {
          return arg;
        }).join(" ");
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance3.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message,
            args,
            type: instance3.name
          });
        }
      };
    }
  };
  for (var _i2 = 0, instances_1 = instances; _i2 < instances_1.length; _i2++) {
    var instance = instances_1[_i2];
    _loop_1(instance);
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
var _a$1;
var ERRORS = (_a$1 = {}, _a$1["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", _a$1["bad-app-name"] = "Illegal App name: '{$appName}", _a$1["duplicate-app"] = "Firebase App named '{$appName}' already exists", _a$1["app-deleted"] = "Firebase App named '{$appName}' already deleted", _a$1["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", _a$1["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", _a$1);
var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
var name$1$1 = "@firebase/app";
var version$3 = "0.6.11";
var name$2$1 = "@firebase/analytics";
var name$3$1 = "@firebase/auth";
var name$4 = "@firebase/database";
var name$5 = "@firebase/functions";
var name$6 = "@firebase/installations";
var name$7 = "@firebase/messaging";
var name$8 = "@firebase/performance";
var name$9 = "@firebase/remote-config";
var name$a = "@firebase/storage";
var name$b = "@firebase/firestore";
var name$c = "firebase-wrapper";
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
var _a$1$1;
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var PLATFORM_LOG_STRING = (_a$1$1 = {}, _a$1$1[name$1$1] = "fire-core", _a$1$1[name$2$1] = "fire-analytics", _a$1$1[name$3$1] = "fire-auth", _a$1$1[name$4] = "fire-rtdb", _a$1$1[name$5] = "fire-fn", _a$1$1[name$6] = "fire-iid", _a$1$1[name$7] = "fire-fcm", _a$1$1[name$8] = "fire-perf", _a$1$1[name$9] = "fire-rc", _a$1$1[name$a] = "fire-gcs", _a$1$1[name$b] = "fire-fst", _a$1$1["fire-js"] = "fire-js", _a$1$1[name$c] = "fire-js-all", _a$1$1);
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
var logger = new Logger("@firebase/app");
/**
 * @license
 * Copyright 2017 Google LLC
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
var FirebaseAppImpl = function() {
  function FirebaseAppImpl2(options, config, firebase_) {
    var e_1, _a2;
    var _this = this;
    this.firebase_ = firebase_;
    this.isDeleted_ = false;
    this.name_ = config.name;
    this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
    this.options_ = deepCopy(options);
    this.container = new ComponentContainer(config.name);
    this._addComponent(new Component("app", function() {
      return _this;
    }, "PUBLIC"));
    try {
      for (var _b = __values$1(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var component = _c.value;
        this._addComponent(component);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }
  Object.defineProperty(FirebaseAppImpl2.prototype, "automaticDataCollectionEnabled", {
    get: function() {
      this.checkDestroyed_();
      return this.automaticDataCollectionEnabled_;
    },
    set: function(val) {
      this.checkDestroyed_();
      this.automaticDataCollectionEnabled_ = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl2.prototype, "name", {
    get: function() {
      this.checkDestroyed_();
      return this.name_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl2.prototype, "options", {
    get: function() {
      this.checkDestroyed_();
      return this.options_;
    },
    enumerable: false,
    configurable: true
  });
  FirebaseAppImpl2.prototype.delete = function() {
    var _this = this;
    return new Promise(function(resolve) {
      _this.checkDestroyed_();
      resolve();
    }).then(function() {
      _this.firebase_.INTERNAL.removeApp(_this.name_);
      return Promise.all(_this.container.getProviders().map(function(provider) {
        return provider.delete();
      }));
    }).then(function() {
      _this.isDeleted_ = true;
    });
  };
  FirebaseAppImpl2.prototype._getService = function(name2, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }
    this.checkDestroyed_();
    return this.container.getProvider(name2).getImmediate({
      identifier: instanceIdentifier
    });
  };
  FirebaseAppImpl2.prototype._removeServiceInstance = function(name2, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }
    this.container.getProvider(name2).clearInstance(instanceIdentifier);
  };
  FirebaseAppImpl2.prototype._addComponent = function(component) {
    try {
      this.container.addComponent(component);
    } catch (e) {
      logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
    }
  };
  FirebaseAppImpl2.prototype._addOrOverwriteComponent = function(component) {
    this.container.addOrOverwriteComponent(component);
  };
  FirebaseAppImpl2.prototype.checkDestroyed_ = function() {
    if (this.isDeleted_) {
      throw ERROR_FACTORY.create("app-deleted", { appName: this.name_ });
    }
  };
  return FirebaseAppImpl2;
}();
FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log("dc");
var version$1$1 = "7.20.0";
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
function createFirebaseNamespaceCore(firebaseAppImpl) {
  var apps = {};
  var components = /* @__PURE__ */ new Map();
  var namespace = {
    __esModule: true,
    initializeApp: initializeApp2,
    app,
    registerVersion,
    setLogLevel,
    onLog,
    apps: null,
    SDK_VERSION: version$1$1,
    INTERNAL: {
      registerComponent,
      removeApp,
      components,
      useAsService
    }
  };
  namespace["default"] = namespace;
  Object.defineProperty(namespace, "apps", {
    get: getApps
  });
  function removeApp(name2) {
    delete apps[name2];
  }
  function app(name2) {
    name2 = name2 || DEFAULT_ENTRY_NAME;
    if (!contains(apps, name2)) {
      throw ERROR_FACTORY.create("no-app", { appName: name2 });
    }
    return apps[name2];
  }
  app["App"] = firebaseAppImpl;
  function initializeApp2(options, rawConfig) {
    if (rawConfig === void 0) {
      rawConfig = {};
    }
    if (typeof rawConfig !== "object" || rawConfig === null) {
      var name_1 = rawConfig;
      rawConfig = { name: name_1 };
    }
    var config = rawConfig;
    if (config.name === void 0) {
      config.name = DEFAULT_ENTRY_NAME;
    }
    var name2 = config.name;
    if (typeof name2 !== "string" || !name2) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name2)
      });
    }
    if (contains(apps, name2)) {
      throw ERROR_FACTORY.create("duplicate-app", { appName: name2 });
    }
    var app2 = new firebaseAppImpl(options, config, namespace);
    apps[name2] = app2;
    return app2;
  }
  function getApps() {
    return Object.keys(apps).map(function(name2) {
      return apps[name2];
    });
  }
  function registerComponent(component) {
    var e_1, _a2;
    var componentName = component.name;
    if (components.has(componentName)) {
      logger.debug("There were multiple attempts to register component " + componentName + ".");
      return component.type === "PUBLIC" ? namespace[componentName] : null;
    }
    components.set(componentName, component);
    if (component.type === "PUBLIC") {
      var serviceNamespace = function(appArg) {
        if (appArg === void 0) {
          appArg = app();
        }
        if (typeof appArg[componentName] !== "function") {
          throw ERROR_FACTORY.create("invalid-app-argument", {
            appName: componentName
          });
        }
        return appArg[componentName]();
      };
      if (component.serviceProps !== void 0) {
        deepExtend(serviceNamespace, component.serviceProps);
      }
      namespace[componentName] = serviceNamespace;
      firebaseAppImpl.prototype[componentName] = function() {
        var args = [];
        for (var _i2 = 0; _i2 < arguments.length; _i2++) {
          args[_i2] = arguments[_i2];
        }
        var serviceFxn = this._getService.bind(this, componentName);
        return serviceFxn.apply(this, component.multipleInstances ? args : []);
      };
    }
    try {
      for (var _b = __values$1(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var appName = _c.value;
        apps[appName]._addComponent(component);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return component.type === "PUBLIC" ? namespace[componentName] : null;
  }
  function registerVersion(libraryKeyOrName, version2, variant) {
    var _a2;
    var library = (_a2 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a2 !== void 0 ? _a2 : libraryKeyOrName;
    if (variant) {
      library += "-" + variant;
    }
    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version2.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      var warning = [
        'Unable to register library "' + library + '" with version "' + version2 + '":'
      ];
      if (libraryMismatch) {
        warning.push('library name "' + library + '" contains illegal characters (whitespace or "/")');
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push('version name "' + version2 + '" contains illegal characters (whitespace or "/")');
      }
      logger.warn(warning.join(" "));
      return;
    }
    registerComponent(new Component(library + "-version", function() {
      return { library, version: version2 };
    }, "VERSION"));
  }
  function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== "function") {
      throw ERROR_FACTORY.create("invalid-log-argument", {
        appName: name
      });
    }
    setUserLogHandler(logCallback, options);
  }
  function useAsService(app2, name2) {
    if (name2 === "serverAuth") {
      return null;
    }
    var useService = name2;
    return useService;
  }
  return namespace;
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
function createFirebaseNamespace() {
  var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = __assign(__assign({}, namespace.INTERNAL), {
    createFirebaseNamespace,
    extendNamespace,
    createSubscribe,
    ErrorFactory,
    deepExtend
  });
  function extendNamespace(props) {
    deepExtend(namespace, props);
  }
  return namespace;
}
var firebase$1 = createFirebaseNamespace();
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
var PlatformLoggerService = function() {
  function PlatformLoggerService2(container) {
    this.container = container;
  }
  PlatformLoggerService2.prototype.getPlatformInfoString = function() {
    var providers = this.container.getProviders();
    return providers.map(function(provider) {
      if (isVersionServiceProvider(provider)) {
        var service = provider.getImmediate();
        return service.library + "/" + service.version;
      } else {
        return null;
      }
    }).filter(function(logString) {
      return logString;
    }).join(" ");
  };
  return PlatformLoggerService2;
}();
function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
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
function registerCoreComponents(firebase2, variant) {
  firebase2.INTERNAL.registerComponent(new Component("platform-logger", function(container) {
    return new PlatformLoggerService(container);
  }, "PRIVATE"));
  firebase2.registerVersion(name$1$1, version$3, variant);
  firebase2.registerVersion("fire-js", "");
}
/**
 * @license
 * Copyright 2017 Google LLC
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
if (isBrowser() && self.firebase !== void 0) {
  logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
  var sdkVersion = self.firebase.SDK_VERSION;
  if (sdkVersion && sdkVersion.indexOf("LITE") >= 0) {
    logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
  }
}
var initializeApp = firebase$1.initializeApp;
firebase$1.initializeApp = function() {
  var args = [];
  for (var _i2 = 0; _i2 < arguments.length; _i2++) {
    args[_i2] = arguments[_i2];
  }
  if (isNode()) {
    logger.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/rollup-plugin-node-resolve
      `);
  }
  return initializeApp.apply(void 0, args);
};
var firebase$1$1 = firebase$1;
registerCoreComponents(firebase$1$1);
var name$3 = "firebase";
var version$2 = "7.24.0";
/**
 * @license
 * Copyright 2018 Google LLC
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
firebase$1$1.registerVersion(name$3, version$2, "app");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
    d2.__proto__ = b3;
  } || function(d2, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d2[p2] = b3[p2];
  };
  return extendStatics(d, b2);
};
function __extends(d, b2) {
  extendStatics(d, b2);
  function __() {
    this.constructor = d;
  }
  d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var g, goog = goog || {}, k$1 = commonjsGlobal || self;
function aa$1() {
}
function ba$1(a) {
  var b2 = typeof a;
  return "object" != b2 ? b2 : a ? Array.isArray(a) ? "array" : b2 : "null";
}
function ca$1(a) {
  var b2 = ba$1(a);
  return "array" == b2 || "object" == b2 && "number" == typeof a.length;
}
function n(a) {
  var b2 = typeof a;
  return "object" == b2 && null != a || "function" == b2;
}
function da$1(a) {
  return Object.prototype.hasOwnProperty.call(a, ea$1) && a[ea$1] || (a[ea$1] = ++fa$1);
}
var ea$1 = "closure_uid_" + (1e9 * Math.random() >>> 0), fa$1 = 0;
function ha$1(a, b2, c) {
  return a.call.apply(a.bind, arguments);
}
function ja(a, b2, c) {
  if (!a)
    throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b2, e);
    };
  }
  return function() {
    return a.apply(b2, arguments);
  };
}
function p(a, b2, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = ha$1 : p = ja;
  return p.apply(null, arguments);
}
function ka$1(a, b2) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
var q$1 = Date.now;
function r(a, b2) {
  function c() {
  }
  c.prototype = b2.prototype;
  a.S = b2.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
}
function u() {
  this.j = this.j;
  this.i = this.i;
}
var la$1 = 0;
u.prototype.j = false;
u.prototype.ja = function() {
  if (!this.j && (this.j = true, this.G(), 0 != la$1)) {
    da$1(this);
  }
};
u.prototype.G = function() {
  if (this.i)
    for (; this.i.length; )
      this.i.shift()();
};
var na$1 = Array.prototype.indexOf ? function(a, b2) {
  return Array.prototype.indexOf.call(a, b2, void 0);
} : function(a, b2) {
  if ("string" === typeof a)
    return "string" !== typeof b2 || 1 != b2.length ? -1 : a.indexOf(b2, 0);
  for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b2)
      return c;
  return -1;
}, oa$1 = Array.prototype.forEach ? function(a, b2, c) {
  Array.prototype.forEach.call(a, b2, c);
} : function(a, b2, c) {
  for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b2.call(c, e[f], f, a);
};
function pa$1(a) {
  a: {
    var b2 = qa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b2.call(void 0, d[e], e, a)) {
        b2 = e;
        break a;
      }
    b2 = -1;
  }
  return 0 > b2 ? null : "string" === typeof a ? a.charAt(b2) : a[b2];
}
function ra$1(a) {
  return Array.prototype.concat.apply([], arguments);
}
function sa$1(a) {
  var b2 = a.length;
  if (0 < b2) {
    for (var c = Array(b2), d = 0; d < b2; d++)
      c[d] = a[d];
    return c;
  }
  return [];
}
function ta$1(a) {
  return /^[\s\xa0]*$/.test(a);
}
var ua$1 = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function v(a, b2) {
  return -1 != a.indexOf(b2);
}
function xa$1(a, b2) {
  return a < b2 ? -1 : a > b2 ? 1 : 0;
}
var w;
a: {
  var ya$1 = k$1.navigator;
  if (ya$1) {
    var za = ya$1.userAgent;
    if (za) {
      w = za;
      break a;
    }
  }
  w = "";
}
function Aa$1(a, b2, c) {
  for (var d in a)
    b2.call(c, a[d], d, a);
}
function Ba(a) {
  var b2 = {};
  for (var c in a)
    b2[c] = a[c];
  return b2;
}
var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Da$1(a, b2) {
  var c, d;
  for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
      a[c] = d[c];
    for (var f = 0; f < Ca.length; f++)
      c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ea$1(a) {
  Ea$1[" "](a);
  return a;
}
Ea$1[" "] = aa$1;
function Fa(a, b2) {
  var c = Ga;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b2(a);
}
var Ha = v(w, "Opera"), x$1 = v(w, "Trident") || v(w, "MSIE"), Ia$1 = v(w, "Edge"), Ja = Ia$1 || x$1, Ka = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"), La$1 = v(w.toLowerCase(), "webkit") && !v(w, "Edge");
function Ma() {
  var a = k$1.document;
  return a ? a.documentMode : void 0;
}
var Na$1;
a: {
  var Oa$1 = "", Pa = function() {
    var a = w;
    if (Ka)
      return /rv:([^\);]+)(\)|;)/.exec(a);
    if (Ia$1)
      return /Edge\/([\d\.]+)/.exec(a);
    if (x$1)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (La$1)
      return /WebKit\/(\S+)/.exec(a);
    if (Ha)
      return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();
  Pa && (Oa$1 = Pa ? Pa[1] : "");
  if (x$1) {
    var Qa = Ma();
    if (null != Qa && Qa > parseFloat(Oa$1)) {
      Na$1 = String(Qa);
      break a;
    }
  }
  Na$1 = Oa$1;
}
var Ga = {};
function Ra$1(a) {
  return Fa(a, function() {
    {
      var b2 = 0;
      var e = ua$1(String(Na$1)).split("."), f = ua$1(String(a)).split("."), h = Math.max(e.length, f.length);
      for (var m = 0; 0 == b2 && m < h; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
          c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
          d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
          if (0 == c[0].length && 0 == d[0].length)
            break;
          b2 = xa$1(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || xa$1(0 == c[2].length, 0 == d[2].length) || xa$1(c[2], d[2]);
          c = c[3];
          d = d[3];
        } while (0 == b2);
      }
    }
    return 0 <= b2;
  });
}
var Sa$1;
if (k$1.document && x$1) {
  var Ta$1 = Ma();
  Sa$1 = Ta$1 ? Ta$1 : parseInt(Na$1, 10) || void 0;
} else
  Sa$1 = void 0;
var Ua = Sa$1;
var Va = !x$1 || 9 <= Number(Ua), Wa = x$1 && !Ra$1("9"), Xa = function() {
  if (!k$1.addEventListener || !Object.defineProperty)
    return false;
  var a = false, b2 = Object.defineProperty({}, "passive", { get: function() {
    a = true;
  } });
  try {
    k$1.addEventListener("test", aa$1, b2), k$1.removeEventListener("test", aa$1, b2);
  } catch (c) {
  }
  return a;
}();
function y(a, b2) {
  this.type = a;
  this.a = this.target = b2;
  this.defaultPrevented = false;
}
y.prototype.b = function() {
  this.defaultPrevented = true;
};
function A$1(a, b2) {
  y.call(this, a ? a.type : "");
  this.relatedTarget = this.a = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.pointerId = 0;
  this.pointerType = "";
  this.c = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b2;
    if (b2 = a.relatedTarget) {
      if (Ka) {
        a: {
          try {
            Ea$1(b2.nodeName);
            var e = true;
            break a;
          } catch (f) {
          }
          e = false;
        }
        e || (b2 = null);
      }
    } else
      "mouseover" == c ? b2 = a.fromElement : "mouseout" == c && (b2 = a.toElement);
    this.relatedTarget = b2;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ya[a.pointerType] || "";
    this.c = a;
    a.defaultPrevented && this.b();
  }
}
r(A$1, y);
var Ya = { 2: "touch", 3: "pen", 4: "mouse" };
A$1.prototype.b = function() {
  A$1.S.b.call(this);
  var a = this.c;
  if (a.preventDefault)
    a.preventDefault();
  else if (a.returnValue = false, Wa)
    try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
        a.keyCode = -1;
    } catch (b2) {
    }
};
var C$1 = "closure_listenable_" + (1e6 * Math.random() | 0), Za = 0;
function $a(a, b2, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b2;
  this.type = c;
  this.capture = !!d;
  this.ca = e;
  this.key = ++Za;
  this.Y = this.Z = false;
}
function ab(a) {
  a.Y = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ca = null;
}
function bb(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
bb.prototype.add = function(a, b2, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var h = cb(a, b2, d, e);
  -1 < h ? (b2 = a[h], c || (b2.Z = false)) : (b2 = new $a(b2, this.src, f, !!d, e), b2.Z = c, a.push(b2));
  return b2;
};
function db$1(a, b2) {
  var c = b2.type;
  if (c in a.a) {
    var d = a.a[c], e = na$1(d, b2), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (ab(b2), 0 == a.a[c].length && (delete a.a[c], a.b--));
  }
}
function cb(a, b2, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b2 && f.capture == !!c && f.ca == d)
      return e;
  }
  return -1;
}
var eb = "closure_lm_" + (1e6 * Math.random() | 0), fb = {};
function hb(a, b2, c, d, e) {
  if (d && d.once)
    return ib(a, b2, c, d, e);
  if (Array.isArray(b2)) {
    for (var f = 0; f < b2.length; f++)
      hb(a, b2[f], c, d, e);
    return null;
  }
  c = jb(c);
  return a && a[C$1] ? a.va(b2, c, n(d) ? !!d.capture : !!d, e) : kb(a, b2, c, false, d, e);
}
function kb(a, b2, c, d, e, f) {
  if (!b2)
    throw Error("Invalid event type");
  var h = n(e) ? !!e.capture : !!e;
  if (h && !Va)
    return null;
  var m = lb(a);
  m || (a[eb] = m = new bb(a));
  c = m.add(b2, c, d, h, f);
  if (c.proxy)
    return c;
  d = mb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener)
    Xa || (e = h), void 0 === e && (e = false), a.addEventListener(b2.toString(), d, e);
  else if (a.attachEvent)
    a.attachEvent(nb(b2.toString()), d);
  else if (a.addListener && a.removeListener)
    a.addListener(d);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function mb() {
  var a = ob, b2 = Va ? function(c) {
    return a.call(b2.src, b2.listener, c);
  } : function(c) {
    c = a.call(b2.src, b2.listener, c);
    if (!c)
      return c;
  };
  return b2;
}
function ib(a, b2, c, d, e) {
  if (Array.isArray(b2)) {
    for (var f = 0; f < b2.length; f++)
      ib(a, b2[f], c, d, e);
    return null;
  }
  c = jb(c);
  return a && a[C$1] ? a.wa(b2, c, n(d) ? !!d.capture : !!d, e) : kb(a, b2, c, true, d, e);
}
function pb(a, b2, c, d, e) {
  if (Array.isArray(b2))
    for (var f = 0; f < b2.length; f++)
      pb(a, b2[f], c, d, e);
  else
    (d = n(d) ? !!d.capture : !!d, c = jb(c), a && a[C$1]) ? (a = a.c, b2 = String(b2).toString(), b2 in a.a && (f = a.a[b2], c = cb(f, c, d, e), -1 < c && (ab(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b2], a.b--)))) : a && (a = lb(a)) && (b2 = a.a[b2.toString()], a = -1, b2 && (a = cb(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && rb(c));
}
function rb(a) {
  if ("number" !== typeof a && a && !a.Y) {
    var b2 = a.src;
    if (b2 && b2[C$1])
      db$1(b2.c, a);
    else {
      var c = a.type, d = a.proxy;
      b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(nb(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
      (c = lb(b2)) ? (db$1(c, a), 0 == c.b && (c.src = null, b2[eb] = null)) : ab(a);
    }
  }
}
function nb(a) {
  return a in fb ? fb[a] : fb[a] = "on" + a;
}
function sb(a, b2) {
  var c = a.listener, d = a.ca || a.src;
  a.Z && rb(a);
  return c.call(d, b2);
}
function ob(a, b2) {
  if (a.Y)
    return true;
  if (!Va) {
    if (!b2)
      a: {
        b2 = ["window", "event"];
        for (var c = k$1, d = 0; d < b2.length; d++)
          if (c = c[b2[d]], null == c) {
            b2 = null;
            break a;
          }
        b2 = c;
      }
    b2 = new A$1(b2, this);
    return sb(a, b2);
  }
  return sb(a, new A$1(b2, this));
}
function lb(a) {
  a = a[eb];
  return a instanceof bb ? a : null;
}
var tb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function jb(a) {
  if ("function" == ba$1(a))
    return a;
  a[tb] || (a[tb] = function(b2) {
    return a.handleEvent(b2);
  });
  return a[tb];
}
function D$1() {
  u.call(this);
  this.c = new bb(this);
  this.J = this;
  this.C = null;
}
r(D$1, u);
D$1.prototype[C$1] = true;
g = D$1.prototype;
g.addEventListener = function(a, b2, c, d) {
  hb(this, a, b2, c, d);
};
g.removeEventListener = function(a, b2, c, d) {
  pb(this, a, b2, c, d);
};
g.dispatchEvent = function(a) {
  var b2, c = this.C;
  if (c)
    for (b2 = []; c; c = c.C)
      b2.push(c);
  c = this.J;
  var d = a.type || a;
  if ("string" === typeof a)
    a = new y(a, c);
  else if (a instanceof y)
    a.target = a.target || c;
  else {
    var e = a;
    a = new y(d, c);
    Da$1(a, e);
  }
  e = true;
  if (b2)
    for (var f = b2.length - 1; 0 <= f; f--) {
      var h = a.a = b2[f];
      e = ub(h, d, true, a) && e;
    }
  h = a.a = c;
  e = ub(h, d, true, a) && e;
  e = ub(h, d, false, a) && e;
  if (b2)
    for (f = 0; f < b2.length; f++)
      h = a.a = b2[f], e = ub(h, d, false, a) && e;
  return e;
};
g.G = function() {
  D$1.S.G.call(this);
  if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
      for (var d = a.a[c], e = 0; e < d.length; e++)
        ab(d[e]);
      delete a.a[c];
      a.b--;
    }
  }
  this.C = null;
};
g.va = function(a, b2, c, d) {
  return this.c.add(String(a), b2, false, c, d);
};
g.wa = function(a, b2, c, d) {
  return this.c.add(String(a), b2, true, c, d);
};
function ub(a, b2, c, d) {
  b2 = a.c.a[String(b2)];
  if (!b2)
    return true;
  b2 = b2.concat();
  for (var e = true, f = 0; f < b2.length; ++f) {
    var h = b2[f];
    if (h && !h.Y && h.capture == c) {
      var m = h.listener, l = h.ca || h.src;
      h.Z && db$1(a.c, h);
      e = false !== m.call(l, d) && e;
    }
  }
  return e && !d.defaultPrevented;
}
var vb = k$1.JSON.stringify;
function wb() {
  this.b = this.a = null;
}
var yb = new (function() {
  function class_1(a, b2, c) {
    this.f = c;
    this.c = a;
    this.g = b2;
    this.b = 0;
    this.a = null;
  }
  class_1.prototype.get = function() {
    var a;
    0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
    return a;
  };
  return class_1;
}())(function() {
  return new xb();
}, function(a) {
  a.reset();
}, 100);
wb.prototype.add = function(a, b2) {
  var c = yb.get();
  c.set(a, b2);
  this.b ? this.b.next = c : this.a = c;
  this.b = c;
};
function zb() {
  var a = Ab, b2 = null;
  a.a && (b2 = a.a, a.a = a.a.next, a.a || (a.b = null), b2.next = null);
  return b2;
}
function xb() {
  this.next = this.b = this.a = null;
}
xb.prototype.set = function(a, b2) {
  this.a = a;
  this.b = b2;
  this.next = null;
};
xb.prototype.reset = function() {
  this.next = this.b = this.a = null;
};
function Bb(a) {
  k$1.setTimeout(function() {
    throw a;
  }, 0);
}
function Cb(a, b2) {
  Db || Eb();
  Fb || (Db(), Fb = true);
  Ab.add(a, b2);
}
var Db;
function Eb() {
  var a = k$1.Promise.resolve(void 0);
  Db = function() {
    a.then(Gb);
  };
}
var Fb = false, Ab = new wb();
function Gb() {
  for (var a; a = zb(); ) {
    try {
      a.a.call(a.b);
    } catch (c) {
      Bb(c);
    }
    var b2 = yb;
    b2.g(a);
    b2.b < b2.f && (b2.b++, a.next = b2.a, b2.a = a);
  }
  Fb = false;
}
function Hb(a, b2) {
  D$1.call(this);
  this.b = a || 1;
  this.a = b2 || k$1;
  this.f = p(this.Ya, this);
  this.g = q$1();
}
r(Hb, D$1);
g = Hb.prototype;
g.aa = false;
g.M = null;
g.Ya = function() {
  if (this.aa) {
    var a = q$1() - this.g;
    0 < a && a < 0.8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (Ib(this), this.start()));
  }
};
g.start = function() {
  this.aa = true;
  this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q$1());
};
function Ib(a) {
  a.aa = false;
  a.M && (a.a.clearTimeout(a.M), a.M = null);
}
g.G = function() {
  Hb.S.G.call(this);
  Ib(this);
  delete this.a;
};
function Jb(a, b2, c) {
  if ("function" == ba$1(a))
    c && (a = p(a, c));
  else if (a && "function" == typeof a.handleEvent)
    a = p(a.handleEvent, a);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(b2) ? -1 : k$1.setTimeout(a, b2 || 0);
}
function Kb(a) {
  a.a = Jb(function() {
    a.a = null;
    a.c && (a.c = false, Kb(a));
  }, a.h);
  var b2 = a.b;
  a.b = null;
  a.g.apply(null, b2);
}
var Lb = function(_super) {
  __extends(Lb2, _super);
  function Lb2(a, b2, c) {
    var _this = _super.call(this) || this;
    _this.g = null != c ? a.bind(c) : a;
    _this.h = b2;
    _this.b = null;
    _this.c = false;
    _this.a = null;
    return _this;
  }
  Lb2.prototype.f = function(a) {
    this.b = arguments;
    this.a ? this.c = true : Kb(this);
  };
  Lb2.prototype.G = function() {
    _super.prototype.G.call(this);
    this.a && (k$1.clearTimeout(this.a), this.a = null, this.c = false, this.b = null);
  };
  return Lb2;
}(u);
function E$1(a) {
  u.call(this);
  this.b = a;
  this.a = {};
}
r(E$1, u);
var Mb = [];
function Nb(a, b2, c, d) {
  Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb);
  for (var e = 0; e < c.length; e++) {
    var f = hb(b2, c[e], d || a.handleEvent, false, a.b || a);
    if (!f)
      break;
    a.a[f.key] = f;
  }
}
function Ob(a) {
  Aa$1(a.a, function(b2, c) {
    this.a.hasOwnProperty(c) && rb(b2);
  }, a);
  a.a = {};
}
E$1.prototype.G = function() {
  E$1.S.G.call(this);
  Ob(this);
};
E$1.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Pb() {
  this.a = true;
}
function Qb(a, b2, c, d, e, f) {
  a.info(function() {
    if (a.a)
      if (f) {
        var h = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
          var t = m[l].split("=");
          if (1 < t.length) {
            var B2 = t[0];
            t = t[1];
            var z2 = B2.split("_");
            h = 2 <= z2.length && "type" == z2[1] ? h + (B2 + "=" + t + "&") : h + (B2 + "=redacted&");
          }
        }
      } else
        h = null;
    else
      h = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c + "\n" + h;
  });
}
function Rb(a, b2, c, d, e, f, h) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c + "\n" + f + " " + h;
  });
}
function F$1(a, b2, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b2 + "): " + Sb(a, c) + (d ? " " + d : "");
  });
}
function Tb(a, b2) {
  a.info(function() {
    return "TIMEOUT: " + b2;
  });
}
Pb.prototype.info = function() {
};
function Sb(a, b2) {
  if (!a.a)
    return b2;
  if (!b2)
    return null;
  try {
    var c = JSON.parse(b2);
    if (c) {
      for (a = 0; a < c.length; a++)
        if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f = e[0];
              if ("noop" != f && "stop" != f && "close" != f)
                for (var h = 1; h < e.length; h++)
                  e[h] = "";
            }
          }
        }
    }
    return vb(c);
  } catch (m) {
    return b2;
  }
}
var Ub = null;
function Vb() {
  return Ub = Ub || new D$1();
}
function Wb(a) {
  y.call(this, "serverreachability", a);
}
r(Wb, y);
function G$1(a) {
  var b2 = Vb();
  b2.dispatchEvent(new Wb(b2));
}
function Xb(a) {
  y.call(this, "statevent", a);
}
r(Xb, y);
function H$1(a) {
  var b2 = Vb();
  b2.dispatchEvent(new Xb(b2));
}
function Yb(a) {
  y.call(this, "timingevent", a);
}
r(Yb, y);
function I$1(a, b2) {
  if ("function" != ba$1(a))
    throw Error("Fn must not be null and must be a function");
  return k$1.setTimeout(function() {
    a();
  }, b2);
}
var Zb = { NO_ERROR: 0, Za: 1, gb: 2, fb: 3, bb: 4, eb: 5, hb: 6, Da: 7, TIMEOUT: 8, kb: 9 };
var $b = { ab: "complete", ob: "success", Ea: "error", Da: "abort", mb: "ready", nb: "readystatechange", TIMEOUT: "timeout", ib: "incrementaldata", lb: "progress", cb: "downloadprogress", pb: "uploadprogress" };
function ac() {
}
ac.prototype.a = null;
function bc(a) {
  var b2;
  (b2 = a.a) || (b2 = a.a = {});
  return b2;
}
function cc() {
}
var J$1 = { OPEN: "a", $a: "b", Ea: "c", jb: "d" };
function dc() {
  y.call(this, "d");
}
r(dc, y);
function ec() {
  y.call(this, "c");
}
r(ec, y);
var fc;
function gc() {
}
r(gc, ac);
fc = new gc();
function K$1(a, b2, c, d) {
  this.g = a;
  this.c = b2;
  this.f = c;
  this.T = d || 1;
  this.J = new E$1(this);
  this.P = hc;
  a = Ja ? 125 : void 0;
  this.R = new Hb(a);
  this.B = null;
  this.b = false;
  this.j = this.l = this.i = this.H = this.u = this.U = this.o = null;
  this.s = [];
  this.a = null;
  this.D = 0;
  this.h = this.m = null;
  this.N = -1;
  this.A = false;
  this.O = 0;
  this.F = null;
  this.W = this.C = this.V = this.I = false;
}
var hc = 45e3, ic = {}, jc = {};
g = K$1.prototype;
g.setTimeout = function(a) {
  this.P = a;
};
function kc(a, b2, c) {
  a.H = 1;
  a.i = lc(L$1(b2));
  a.j = c;
  a.I = true;
  mc(a, null);
}
function mc(a, b2) {
  a.u = q$1();
  M$1(a);
  a.l = L$1(a.i);
  var c = a.l, d = a.T;
  Array.isArray(d) || (d = [String(d)]);
  nc(c.b, "t", d);
  a.D = 0;
  a.a = oc(a.g, a.g.C ? b2 : null);
  0 < a.O && (a.F = new Lb(p(a.Ca, a, a.a), a.O));
  Nb(a.J, a.a, "readystatechange", a.Wa);
  b2 = a.B ? Ba(a.B) : {};
  a.j ? (a.m || (a.m = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b2)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b2));
  G$1();
  Qb(a.c, a.m, a.l, a.f, a.T, a.j);
}
g.Wa = function(a) {
  a = a.target;
  var b2 = this.F;
  b2 && 3 == N$1(a) ? b2.f() : this.Ca(a);
};
g.Ca = function(a) {
  try {
    if (a == this.a)
      a: {
        var b2 = N$1(this.a), c = this.a.ua(), d = this.a.X();
        if (!(3 > b2 || 3 == b2 && !Ja && !this.a.$())) {
          this.A || 4 != b2 || 7 == c || (8 == c || 0 >= d ? G$1(3) : G$1(2));
          pc(this);
          var e = this.a.X();
          this.N = e;
          var f = this.a.$();
          this.b = 200 == e;
          Rb(this.c, this.m, this.l, this.f, this.T, b2, e);
          if (this.b) {
            if (this.V && !this.C) {
              b: {
                if (this.a) {
                  var h, m = this.a;
                  if ((h = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !ta$1(h)) {
                    var l = h;
                    break b;
                  }
                }
                l = null;
              }
              if (l)
                F$1(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"), this.C = true, qc(this, l);
              else {
                this.b = false;
                this.h = 3;
                H$1(12);
                O$1(this);
                rc(this);
                break a;
              }
            }
            this.I ? (tc(this, b2, f), Ja && this.b && 3 == b2 && (Nb(this.J, this.R, "tick", this.Va), this.R.start())) : (F$1(this.c, this.f, f, null), qc(this, f));
            4 == b2 && O$1(this);
            this.b && !this.A && (4 == b2 ? uc(this.g, this) : (this.b = false, M$1(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, H$1(12)) : (this.h = 0, H$1(13)), O$1(this), rc(this);
        }
      }
  } catch (t) {
  } finally {
  }
};
function tc(a, b2, c) {
  for (var d = true; !a.A && a.D < c.length; ) {
    var e = vc(a, c);
    if (e == jc) {
      4 == b2 && (a.h = 4, H$1(), d = false);
      F$1(a.c, a.f, null, "[Incomplete Response]");
      break;
    } else if (e == ic) {
      a.h = 4;
      H$1();
      F$1(a.c, a.f, c, "[Invalid Chunk]");
      d = false;
      break;
    } else
      F$1(a.c, a.f, e, null), qc(a, e);
  }
  4 == b2 && 0 == c.length && (a.h = 1, H$1(), d = false);
  a.b = a.b && d;
  d ? 0 < c.length && !a.W && (a.W = true, b2 = a.g, b2.a == a && b2.V && !b2.F && (b2.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), xc(b2), b2.F = true)) : (F$1(a.c, a.f, c, "[Invalid Chunked Response]"), O$1(a), rc(a));
}
g.Va = function() {
  if (this.a) {
    var a = N$1(this.a), b2 = this.a.$();
    this.D < b2.length && (pc(this), tc(this, a, b2), this.b && 4 != a && M$1(this));
  }
};
function vc(a, b2) {
  var c = a.D, d = b2.indexOf("\n", c);
  if (-1 == d)
    return jc;
  c = Number(b2.substring(c, d));
  if (isNaN(c))
    return ic;
  d += 1;
  if (d + c > b2.length)
    return jc;
  b2 = b2.substr(d, c);
  a.D = d + c;
  return b2;
}
g.cancel = function() {
  this.A = true;
  O$1(this);
};
function M$1(a) {
  a.U = q$1() + a.P;
  yc(a, a.P);
}
function yc(a, b2) {
  if (null != a.o)
    throw Error("WatchDog timer not null");
  a.o = I$1(p(a.Ua, a), b2);
}
function pc(a) {
  a.o && (k$1.clearTimeout(a.o), a.o = null);
}
g.Ua = function() {
  this.o = null;
  var a = q$1();
  0 <= a - this.U ? (Tb(this.c, this.l), 2 != this.H && (G$1(), H$1()), O$1(this), this.h = 2, rc(this)) : yc(this, this.U - a);
};
function rc(a) {
  0 == a.g.v || a.A || uc(a.g, a);
}
function O$1(a) {
  pc(a);
  var b2 = a.F;
  b2 && "function" == typeof b2.ja && b2.ja();
  a.F = null;
  Ib(a.R);
  Ob(a.J);
  a.a && (b2 = a.a, a.a = null, b2.abort(), b2.ja());
}
function qc(a, b2) {
  try {
    var c = a.g;
    if (0 != c.v && (c.a == a || zc(c.b, a))) {
      if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
        try {
          var d = c.ka.a.parse(b2);
        } catch (sc) {
          d = null;
        }
        if (Array.isArray(d) && 3 == d.length) {
          var e = d;
          if (0 == e[0])
            a: {
              if (!c.j) {
                if (c.a)
                  if (c.a.u + 3e3 < a.u)
                    Ac(c), Bc(c);
                  else
                    break a;
                Cc(c);
                H$1(18);
              }
            }
          else
            c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = I$1(p(c.Ra, c), 6e3));
          if (1 >= Dc(c.b) && c.ea) {
            try {
              c.ea();
            } catch (sc) {
            }
            c.ea = void 0;
          }
        } else
          P$1(c, 11);
      } else if ((a.C || c.a == a) && Ac(c), !ta$1(b2))
        for (b2 = d = c.ka.a.parse(b2), d = 0; d < b2.length; d++)
          if (e = b2[d], c.P = e[0], e = e[1], 2 == c.v)
            if ("c" == e[0]) {
              c.J = e[1];
              c.ga = e[2];
              var f = e[3];
              null != f && (c.ha = f, c.c.info("VER=" + c.ha));
              var h = e[4];
              null != h && (c.pa = h, c.c.info("SVER=" + c.pa));
              var m = e[5];
              if (null != m && "number" === typeof m && 0 < m) {
                var l = 1.5 * m;
                c.D = l;
                c.c.info("backChannelRequestTimeoutMs_=" + l);
              }
              l = c;
              var t = a.a;
              if (t) {
                var B2 = t.a ? t.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (B2) {
                  var z2 = l.b;
                  !z2.a && (v(B2, "spdy") || v(B2, "quic") || v(B2, "h2")) && (z2.f = z2.g, z2.a = /* @__PURE__ */ new Set(), z2.b && (Ec(z2, z2.b), z2.b = null));
                }
                if (l.A) {
                  var qb = t.a ? t.a.getResponseHeader("X-HTTP-Session-Id") : null;
                  qb && (l.na = qb, Q$1(l.B, l.A, qb));
                }
              }
              c.v = 3;
              c.f && c.f.ta();
              c.V && (c.N = q$1() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
              l = c;
              var va2 = a;
              l.la = Fc(l, l.C ? l.ga : null, l.fa);
              if (va2.C) {
                Gc(l.b, va2);
                var wa2 = va2, wc = l.D;
                wc && wa2.setTimeout(wc);
                wa2.o && (pc(wa2), M$1(wa2));
                l.a = va2;
              } else
                Hc(l);
              0 < c.g.length && Ic(c);
            } else
              "stop" != e[0] && "close" != e[0] || P$1(c, 7);
          else
            3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? P$1(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
    }
    G$1(4);
  } catch (sc) {
  }
}
function Kc(a) {
  if (a.K && "function" == typeof a.K)
    return a.K();
  if ("string" === typeof a)
    return a.split("");
  if (ca$1(a)) {
    for (var b2 = [], c = a.length, d = 0; d < c; d++)
      b2.push(a[d]);
    return b2;
  }
  b2 = [];
  c = 0;
  for (d in a)
    b2[c++] = a[d];
  return a = b2;
}
function Lc(a, b2) {
  if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b2, void 0);
  else if (ca$1(a) || "string" === typeof a)
    oa$1(a, b2, void 0);
  else {
    if (a.L && "function" == typeof a.L)
      var c = a.L();
    else if (a.K && "function" == typeof a.K)
      c = void 0;
    else if (ca$1(a) || "string" === typeof a) {
      c = [];
      for (var d = a.length, e = 0; e < d; e++)
        c.push(e);
    } else
      for (e in c = [], d = 0, a)
        c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
      b2.call(void 0, d[f], c && c[f], a);
  }
}
function R$1(a, b2) {
  this.b = {};
  this.a = [];
  this.c = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2)
      throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
      this.set(arguments[d], arguments[d + 1]);
  } else if (a)
    if (a instanceof R$1)
      for (c = a.L(), d = 0; d < c.length; d++)
        this.set(c[d], a.get(c[d]));
    else
      for (d in a)
        this.set(d, a[d]);
}
g = R$1.prototype;
g.K = function() {
  Mc(this);
  for (var a = [], b2 = 0; b2 < this.a.length; b2++)
    a.push(this.b[this.a[b2]]);
  return a;
};
g.L = function() {
  Mc(this);
  return this.a.concat();
};
function Mc(a) {
  if (a.c != a.a.length) {
    for (var b2 = 0, c = 0; b2 < a.a.length; ) {
      var d = a.a[b2];
      S$1(a.b, d) && (a.a[c++] = d);
      b2++;
    }
    a.a.length = c;
  }
  if (a.c != a.a.length) {
    var e = {};
    for (c = b2 = 0; b2 < a.a.length; )
      d = a.a[b2], S$1(e, d) || (a.a[c++] = d, e[d] = 1), b2++;
    a.a.length = c;
  }
}
g.get = function(a, b2) {
  return S$1(this.b, a) ? this.b[a] : b2;
};
g.set = function(a, b2) {
  S$1(this.b, a) || (this.c++, this.a.push(a));
  this.b[a] = b2;
};
g.forEach = function(a, b2) {
  for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b2, f, e, this);
  }
};
function S$1(a, b2) {
  return Object.prototype.hasOwnProperty.call(a, b2);
}
var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc(a, b2) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else
        f = a[c];
      b2(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function T$1(a, b2) {
  this.c = this.j = this.f = "";
  this.h = null;
  this.i = this.g = "";
  this.a = false;
  if (a instanceof T$1) {
    this.a = void 0 !== b2 ? b2 : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b2 = a.b;
    var c = new U$1();
    c.c = b2.c;
    b2.a && (c.a = new R$1(b2.a), c.b = b2.b);
    Sc(this, c);
    this.i = a.i;
  } else
    a && (c = String(a).match(Nc)) ? (this.a = !!b2, Pc(this, c[1] || "", true), this.j = Tc(c[2] || ""), Qc(this, c[3] || "", true), Rc(this, c[4]), this.g = Tc(c[5] || "", true), Sc(this, c[6] || "", true), this.i = Tc(c[7] || "")) : (this.a = !!b2, this.b = new U$1(null, this.a));
}
T$1.prototype.toString = function() {
  var a = [], b2 = this.f;
  b2 && a.push(Uc(b2, Vc, true), ":");
  var c = this.c;
  if (c || "file" == b2)
    a.push("//"), (b2 = this.j) && a.push(Uc(b2, Vc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
  if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(Uc(c, "/" == c.charAt(0) ? Wc : Xc, true));
  (c = this.b.toString()) && a.push("?", c);
  (c = this.i) && a.push("#", Uc(c, Yc));
  return a.join("");
};
function L$1(a) {
  return new T$1(a);
}
function Pc(a, b2, c) {
  a.f = c ? Tc(b2, true) : b2;
  a.f && (a.f = a.f.replace(/:$/, ""));
}
function Qc(a, b2, c) {
  a.c = c ? Tc(b2, true) : b2;
}
function Rc(a, b2) {
  if (b2) {
    b2 = Number(b2);
    if (isNaN(b2) || 0 > b2)
      throw Error("Bad port number " + b2);
    a.h = b2;
  } else
    a.h = null;
}
function Sc(a, b2, c) {
  b2 instanceof U$1 ? (a.b = b2, Zc(a.b, a.a)) : (c || (b2 = Uc(b2, $c)), a.b = new U$1(b2, a.a));
}
function Q$1(a, b2, c) {
  a.b.set(b2, c);
}
function lc(a) {
  Q$1(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q$1()).toString(36));
  return a;
}
function ad(a) {
  return a instanceof T$1 ? L$1(a) : new T$1(a, void 0);
}
function bd(a, b2, c, d) {
  var e = new T$1(null, void 0);
  a && Pc(e, a);
  b2 && Qc(e, b2);
  c && Rc(e, c);
  d && (e.g = d);
  return e;
}
function Tc(a, b2) {
  return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Uc(a, b2, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b2, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function cd(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Vc = /[#\/\?@]/g, Xc = /[#\?:]/g, Wc = /[#\?]/g, $c = /[#\?@]/g, Yc = /#/g;
function U$1(a, b2) {
  this.b = this.a = null;
  this.c = a || null;
  this.f = !!b2;
}
function V$1(a) {
  a.a || (a.a = new R$1(), a.b = 0, a.c && Oc(a.c, function(b2, c) {
    a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
  }));
}
g = U$1.prototype;
g.add = function(a, b2) {
  V$1(this);
  this.c = null;
  a = W$1(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b2);
  this.b += 1;
  return this;
};
function dd(a, b2) {
  V$1(a);
  b2 = W$1(a, b2);
  S$1(a.a.b, b2) && (a.c = null, a.b -= a.a.get(b2).length, a = a.a, S$1(a.b, b2) && (delete a.b[b2], a.c--, a.a.length > 2 * a.c && Mc(a)));
}
function ed(a, b2) {
  V$1(a);
  b2 = W$1(a, b2);
  return S$1(a.a.b, b2);
}
g.forEach = function(a, b2) {
  V$1(this);
  this.a.forEach(function(c, d) {
    oa$1(c, function(e) {
      a.call(b2, e, d, this);
    }, this);
  }, this);
};
g.L = function() {
  V$1(this);
  for (var a = this.a.K(), b2 = this.a.L(), c = [], d = 0; d < b2.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
      c.push(b2[d]);
  return c;
};
g.K = function(a) {
  V$1(this);
  var b2 = [];
  if ("string" === typeof a)
    ed(this, a) && (b2 = ra$1(b2, this.a.get(W$1(this, a))));
  else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
      b2 = ra$1(b2, a[c]);
  }
  return b2;
};
g.set = function(a, b2) {
  V$1(this);
  this.c = null;
  a = W$1(this, a);
  ed(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b2]);
  this.b += 1;
  return this;
};
g.get = function(a, b2) {
  if (!a)
    return b2;
  a = this.K(a);
  return 0 < a.length ? String(a[0]) : b2;
};
function nc(a, b2, c) {
  dd(a, b2);
  0 < c.length && (a.c = null, a.a.set(W$1(a, b2), sa$1(c)), a.b += c.length);
}
g.toString = function() {
  if (this.c)
    return this.c;
  if (!this.a)
    return "";
  for (var a = [], b2 = this.a.L(), c = 0; c < b2.length; c++) {
    var d = b2[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.c = a.join("&");
};
function W$1(a, b2) {
  b2 = String(b2);
  a.f && (b2 = b2.toLowerCase());
  return b2;
}
function Zc(a, b2) {
  b2 && !a.f && (V$1(a), a.c = null, a.a.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (dd(this, d), nc(this, e, c));
  }, a));
  a.f = b2;
}
function fd(a, b2) {
  this.b = a;
  this.a = b2;
}
function gd(a) {
  this.g = a || hd;
  k$1.PerformanceNavigationTiming ? (a = k$1.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k$1.ia && k$1.ia.ya && k$1.ia.ya() && k$1.ia.ya().qb);
  this.f = a ? this.g : 1;
  this.a = null;
  1 < this.f && (this.a = /* @__PURE__ */ new Set());
  this.b = null;
  this.c = [];
}
var hd = 10;
function id(a) {
  return a.b ? true : a.a ? a.a.size >= a.f : false;
}
function Dc(a) {
  return a.b ? 1 : a.a ? a.a.size : 0;
}
function zc(a, b2) {
  return a.b ? a.b == b2 : a.a ? a.a.has(b2) : false;
}
function Ec(a, b2) {
  a.a ? a.a.add(b2) : a.b = b2;
}
function Gc(a, b2) {
  a.b && a.b == b2 ? a.b = null : a.a && a.a.has(b2) && a.a.delete(b2);
}
gd.prototype.cancel = function() {
  var e_1, _a2;
  this.c = jd(this);
  if (this.b)
    this.b.cancel(), this.b = null;
  else if (this.a && 0 !== this.a.size) {
    try {
      for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var a = _c.value;
        a.cancel();
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    this.a.clear();
  }
};
function jd(a) {
  var e_2, _a2;
  if (null != a.b)
    return a.c.concat(a.b.s);
  if (null != a.a && 0 !== a.a.size) {
    var b2 = a.c;
    try {
      for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var c = _c.value;
        b2 = b2.concat(c.s);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return b2;
  }
  return sa$1(a.c);
}
function kd() {
}
kd.prototype.stringify = function(a) {
  return k$1.JSON.stringify(a, void 0);
};
kd.prototype.parse = function(a) {
  return k$1.JSON.parse(a, void 0);
};
function ld() {
  this.a = new kd();
}
function md(a, b2, c) {
  var d = c || "";
  try {
    Lc(a, function(e, f) {
      var h = e;
      n(e) && (h = vb(e));
      b2.push(d + f + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b2.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function nd(a, b2) {
  var c = new Pb();
  if (k$1.Image) {
    var d = new Image();
    d.onload = ka$1(od, c, d, "TestLoadImage: loaded", true, b2);
    d.onerror = ka$1(od, c, d, "TestLoadImage: error", false, b2);
    d.onabort = ka$1(od, c, d, "TestLoadImage: abort", false, b2);
    d.ontimeout = ka$1(od, c, d, "TestLoadImage: timeout", false, b2);
    k$1.setTimeout(function() {
      if (d.ontimeout)
        d.ontimeout();
    }, 1e4);
    d.src = a;
  } else
    b2(false);
}
function od(a, b2, c, d, e) {
  try {
    b2.onload = null, b2.onerror = null, b2.onabort = null, b2.ontimeout = null, e(d);
  } catch (f) {
  }
}
var pd = k$1.JSON.parse;
function X$1(a) {
  D$1.call(this);
  this.headers = new R$1();
  this.H = a || null;
  this.b = false;
  this.s = this.a = null;
  this.B = "";
  this.h = 0;
  this.f = "";
  this.g = this.A = this.l = this.u = false;
  this.o = 0;
  this.m = null;
  this.I = qd;
  this.D = this.F = false;
}
r(X$1, D$1);
var qd = "", rd = /^https?$/i, sd = ["POST", "PUT"];
g = X$1.prototype;
g.ba = function(a, b2, c, d) {
  if (this.a)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
  b2 = b2 ? b2.toUpperCase() : "GET";
  this.B = a;
  this.f = "";
  this.h = 0;
  this.u = false;
  this.b = true;
  this.a = new XMLHttpRequest();
  this.s = this.H ? bc(this.H) : bc(fc);
  this.a.onreadystatechange = p(this.za, this);
  try {
    this.A = true, this.a.open(b2, String(a), true), this.A = false;
  } catch (f) {
    td(this, f);
    return;
  }
  a = c || "";
  var e = new R$1(this.headers);
  d && Lc(d, function(f, h) {
    e.set(h, f);
  });
  d = pa$1(e.L());
  c = k$1.FormData && a instanceof k$1.FormData;
  !(0 <= na$1(sd, b2)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  e.forEach(function(f, h) {
    this.a.setRequestHeader(h, f);
  }, this);
  this.I && (this.a.responseType = this.I);
  "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
  try {
    ud(this), 0 < this.o && ((this.D = vd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Jb(this.xa, this.o, this)), this.l = true, this.a.send(a), this.l = false;
  } catch (f) {
    td(this, f);
  }
};
function vd(a) {
  return x$1 && Ra$1(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}
function qa(a) {
  return "content-type" == a.toLowerCase();
}
g.xa = function() {
  "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8));
};
function td(a, b2) {
  a.b = false;
  a.a && (a.g = true, a.a.abort(), a.g = false);
  a.f = b2;
  a.h = 5;
  wd(a);
  xd(a);
}
function wd(a) {
  a.u || (a.u = true, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
g.abort = function(a) {
  this.a && this.b && (this.b = false, this.g = true, this.a.abort(), this.g = false, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), xd(this));
};
g.G = function() {
  this.a && (this.b && (this.b = false, this.g = true, this.a.abort(), this.g = false), xd(this, true));
  X$1.S.G.call(this);
};
g.za = function() {
  this.j || (this.A || this.l || this.g ? yd(this) : this.Ta());
};
g.Ta = function() {
  yd(this);
};
function yd(a) {
  if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != N$1(a) || 2 != a.X())) {
    if (a.l && 4 == N$1(a))
      Jb(a.za, 0, a);
    else if (a.dispatchEvent("readystatechange"), 4 == N$1(a)) {
      a.b = false;
      try {
        var b2 = a.X();
        a:
          switch (b2) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = true;
              break a;
            default:
              c = false;
          }
        var d;
        if (!(d = c)) {
          var e;
          if (e = 0 === b2) {
            var f = String(a.B).match(Nc)[1] || null;
            if (!f && k$1.self && k$1.self.location) {
              var h = k$1.self.location.protocol;
              f = h.substr(0, h.length - 1);
            }
            e = !rd.test(f ? f.toLowerCase() : "");
          }
          d = e;
        }
        if (d)
          a.dispatchEvent("complete"), a.dispatchEvent("success");
        else {
          a.h = 6;
          try {
            var m = 2 < N$1(a) ? a.a.statusText : "";
          } catch (l) {
            m = "";
          }
          a.f = m + " [" + a.X() + "]";
          wd(a);
        }
      } finally {
        xd(a);
      }
    }
  }
}
function xd(a, b2) {
  if (a.a) {
    ud(a);
    var c = a.a, d = a.s[0] ? aa$1 : null;
    a.a = null;
    a.s = null;
    b2 || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function ud(a) {
  a.a && a.D && (a.a.ontimeout = null);
  a.m && (k$1.clearTimeout(a.m), a.m = null);
}
function N$1(a) {
  return a.a ? a.a.readyState : 0;
}
g.X = function() {
  try {
    return 2 < N$1(this) ? this.a.status : -1;
  } catch (a) {
    return -1;
  }
};
g.$ = function() {
  try {
    return this.a ? this.a.responseText : "";
  } catch (a) {
    return "";
  }
};
g.Na = function(a) {
  if (this.a) {
    var b2 = this.a.responseText;
    a && 0 == b2.indexOf(a) && (b2 = b2.substring(a.length));
    return pd(b2);
  }
};
g.ua = function() {
  return this.h;
};
g.Qa = function() {
  return "string" === typeof this.f ? this.f : String(this.f);
};
function zd(a) {
  var b2 = "";
  Aa$1(a, function(c, d) {
    b2 += d;
    b2 += ":";
    b2 += c;
    b2 += "\r\n";
  });
  return b2;
}
function Ad(a, b2, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = zd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : Q$1(a, b2, c));
}
function Bd(a, b2, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b2 : b2;
}
function Cd(a) {
  this.pa = 0;
  this.g = [];
  this.c = new Pb();
  this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null;
  this.La = this.R = 0;
  this.Ia = Bd("failFast", false, a);
  this.H = this.m = this.j = this.h = this.f = null;
  this.T = true;
  this.I = this.oa = this.P = -1;
  this.U = this.o = this.u = 0;
  this.Fa = Bd("baseRetryDelayMs", 5e3, a);
  this.Ma = Bd("retryDelaySeedMs", 1e4, a);
  this.Ja = Bd("forwardChannelMaxRetries", 2, a);
  this.ma = Bd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.Ka = a && a.g || void 0;
  this.D = void 0;
  this.C = a && a.supportsCrossDomainXhr || false;
  this.J = "";
  this.b = new gd(a && a.concurrentRequestLimit);
  this.ka = new ld();
  this.da = a && a.fastHandshake || false;
  this.Ga = a && a.b || false;
  a && a.f && (this.c.a = false);
  a && a.forceLongPolling && (this.T = false);
  this.V = !this.da && this.T && a && a.c || false;
  this.ea = void 0;
  this.N = 0;
  this.F = false;
  this.s = null;
}
g = Cd.prototype;
g.ha = 8;
g.v = 1;
function Jc(a) {
  Dd(a);
  if (3 == a.v) {
    var b2 = a.R++, c = L$1(a.B);
    Q$1(c, "SID", a.J);
    Q$1(c, "RID", b2);
    Q$1(c, "TYPE", "terminate");
    Ed(a, c);
    b2 = new K$1(a, a.c, b2, void 0);
    b2.H = 2;
    b2.i = lc(L$1(c));
    c = false;
    k$1.navigator && k$1.navigator.sendBeacon && (c = k$1.navigator.sendBeacon(b2.i.toString(), ""));
    !c && k$1.Image && (new Image().src = b2.i, c = true);
    c || (b2.a = oc(b2.g, null), b2.a.ba(b2.i));
    b2.u = q$1();
    M$1(b2);
  }
  Fd(a);
}
function Bc(a) {
  a.a && (xc(a), a.a.cancel(), a.a = null);
}
function Dd(a) {
  Bc(a);
  a.j && (k$1.clearTimeout(a.j), a.j = null);
  Ac(a);
  a.b.cancel();
  a.h && ("number" === typeof a.h && k$1.clearTimeout(a.h), a.h = null);
}
function Gd(a, b2) {
  a.g.push(new fd(a.La++, b2));
  3 == a.v && Ic(a);
}
function Ic(a) {
  id(a.b) || a.h || (a.h = true, Cb(a.Ba, a), a.u = 0);
}
function Hd(a, b2) {
  if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0))
    return false;
  if (a.h)
    return a.g = b2.s.concat(a.g), true;
  if (1 == a.v || 2 == a.v || a.u >= (a.Ia ? 0 : a.Ja))
    return false;
  a.h = I$1(p(a.Ba, a, b2), Id(a, a.u));
  a.u++;
  return true;
}
g.Ba = function(a) {
  if (this.h)
    if (this.h = null, 1 == this.v) {
      if (!a) {
        this.R = Math.floor(1e5 * Math.random());
        a = this.R++;
        var b2 = new K$1(this, this.c, a, void 0), c = this.l;
        this.O && (c ? (c = Ba(c), Da$1(c, this.O)) : c = this.O);
        null === this.i && (b2.B = c);
        var d;
        if (this.da)
          a: {
            for (var e = d = 0; e < this.g.length; e++) {
              b: {
                var f = this.g[e];
                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                  f = f.length;
                  break b;
                }
                f = void 0;
              }
              if (void 0 === f)
                break;
              d += f;
              if (4096 < d) {
                d = e;
                break a;
              }
              if (4096 === d || e === this.g.length - 1) {
                d = e + 1;
                break a;
              }
            }
            d = 1e3;
          }
        else
          d = 1e3;
        d = Jd(this, b2, d);
        e = L$1(this.B);
        Q$1(e, "RID", a);
        Q$1(e, "CVER", 22);
        this.A && Q$1(e, "X-HTTP-Session-Id", this.A);
        Ed(this, e);
        this.i && c && Ad(e, this.i, c);
        Ec(this.b, b2);
        this.Ga && Q$1(e, "TYPE", "init");
        this.da ? (Q$1(e, "$req", d), Q$1(e, "SID", "null"), b2.V = true, kc(b2, e, null)) : kc(b2, e, d);
        this.v = 2;
      }
    } else
      3 == this.v && (a ? Kd(this, a) : 0 == this.g.length || id(this.b) || Kd(this));
};
function Kd(a, b2) {
  var c;
  b2 ? c = b2.f : c = a.R++;
  var d = L$1(a.B);
  Q$1(d, "SID", a.J);
  Q$1(d, "RID", c);
  Q$1(d, "AID", a.P);
  Ed(a, d);
  a.i && a.l && Ad(d, a.i, a.l);
  c = new K$1(a, a.c, c, a.u + 1);
  null === a.i && (c.B = a.l);
  b2 && (a.g = b2.s.concat(a.g));
  b2 = Jd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.ma) + Math.round(0.5 * a.ma * Math.random()));
  Ec(a.b, c);
  kc(c, d, b2);
}
function Ed(a, b2) {
  a.f && Lc({}, function(c, d) {
    Q$1(b2, d, c);
  });
}
function Jd(a, b2, c) {
  c = Math.min(a.g.length, c);
  var d = a.f ? p(a.f.Ha, a.f, a) : null;
  a:
    for (var e = a.g, f = -1; ; ) {
      var h = ["count=" + c];
      -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
      for (var m = true, l = 0; l < c; l++) {
        var t = e[l].b, B2 = e[l].a;
        t -= f;
        if (0 > t)
          f = Math.max(0, e[l].b - 100), m = false;
        else
          try {
            md(B2, h, "req" + t + "_");
          } catch (z2) {
            d && d(B2);
          }
      }
      if (m) {
        d = h.join("&");
        break a;
      }
    }
  a = a.g.splice(0, c);
  b2.s = a;
  return d;
}
function Hc(a) {
  a.a || a.j || (a.U = 1, Cb(a.Aa, a), a.o = 0);
}
function Cc(a) {
  if (a.a || a.j || 3 <= a.o)
    return false;
  a.U++;
  a.j = I$1(p(a.Aa, a), Id(a, a.o));
  a.o++;
  return true;
}
g.Aa = function() {
  this.j = null;
  Ld(this);
  if (this.V && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = I$1(p(this.Sa, this), a);
  }
};
g.Sa = function() {
  this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = false, this.F = true, Bc(this), Ld(this));
};
function xc(a) {
  null != a.s && (k$1.clearTimeout(a.s), a.s = null);
}
function Ld(a) {
  a.a = new K$1(a, a.c, "rpc", a.U);
  null === a.i && (a.a.B = a.l);
  a.a.O = 0;
  var b2 = L$1(a.la);
  Q$1(b2, "RID", "rpc");
  Q$1(b2, "SID", a.J);
  Q$1(b2, "CI", a.H ? "0" : "1");
  Q$1(b2, "AID", a.P);
  Ed(a, b2);
  Q$1(b2, "TYPE", "xmlhttp");
  a.i && a.l && Ad(b2, a.i, a.l);
  a.D && a.a.setTimeout(a.D);
  var c = a.a;
  a = a.ga;
  c.H = 1;
  c.i = lc(L$1(b2));
  c.j = null;
  c.I = true;
  mc(c, a);
}
g.Ra = function() {
  null != this.m && (this.m = null, Bc(this), Cc(this), H$1());
};
function Ac(a) {
  null != a.m && (k$1.clearTimeout(a.m), a.m = null);
}
function uc(a, b2) {
  var c = null;
  if (a.a == b2) {
    Ac(a);
    xc(a);
    a.a = null;
    var d = 2;
  } else if (zc(a.b, b2))
    c = b2.s, Gc(a.b, b2), d = 1;
  else
    return;
  a.I = b2.N;
  if (0 != a.v) {
    if (b2.b)
      if (1 == d) {
        c = b2.j ? b2.j.length : 0;
        b2 = q$1() - b2.u;
        var e = a.u;
        d = Vb();
        d.dispatchEvent(new Yb(d));
        Ic(a);
      } else
        Hc(a);
    else if (e = b2.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Hd(a, b2) || 2 == d && Cc(a)))
      switch (c && 0 < c.length && (b2 = a.b, b2.c = b2.c.concat(c)), e) {
        case 1:
          P$1(a, 5);
          break;
        case 4:
          P$1(a, 10);
          break;
        case 3:
          P$1(a, 6);
          break;
        default:
          P$1(a, 2);
      }
  }
}
function Id(a, b2) {
  var c = a.Fa + Math.floor(Math.random() * a.Ma);
  a.f || (c *= 2);
  return c * b2;
}
function P$1(a, b2) {
  a.c.info("Error code " + b2);
  if (2 == b2) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Xa, a);
    c || (c = new T$1("//www.google.com/images/cleardot.gif"), k$1.location && "http" == k$1.location.protocol || Pc(c, "https"), lc(c));
    nd(c.toString(), d);
  } else
    H$1();
  a.v = 0;
  a.f && a.f.ra(b2);
  Fd(a);
  Dd(a);
}
g.Xa = function(a) {
  a ? (this.c.info("Successfully pinged google.com"), H$1()) : (this.c.info("Failed to ping google.com"), H$1());
};
function Fd(a) {
  a.v = 0;
  a.I = -1;
  if (a.f) {
    if (0 != jd(a.b).length || 0 != a.g.length)
      a.b.c.length = 0, sa$1(a.g), a.g.length = 0;
    a.f.qa();
  }
}
function Fc(a, b2, c) {
  var d = ad(c);
  if ("" != d.c)
    b2 && Qc(d, b2 + "." + d.c), Rc(d, d.h);
  else {
    var e = k$1.location;
    d = bd(e.protocol, b2 ? b2 + "." + e.hostname : e.hostname, +e.port, c);
  }
  a.W && Aa$1(a.W, function(f, h) {
    Q$1(d, h, f);
  });
  b2 = a.A;
  c = a.na;
  b2 && c && Q$1(d, b2, c);
  Q$1(d, "VER", a.ha);
  Ed(a, d);
  return d;
}
function oc(a, b2) {
  if (b2 && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object.");
  b2 = new X$1(a.Ka);
  b2.F = a.C;
  return b2;
}
function Md() {
}
g = Md.prototype;
g.ta = function() {
};
g.sa = function() {
};
g.ra = function() {
};
g.qa = function() {
};
g.Ha = function() {
};
function Nd() {
  if (x$1 && !(10 <= Number(Ua)))
    throw Error("Environmental error: no available transport.");
}
Nd.prototype.a = function(a, b2) {
  return new Y$1(a, b2);
};
function Y$1(a, b2) {
  D$1.call(this);
  this.a = new Cd(b2);
  this.l = a;
  this.b = b2 && b2.messageUrlParams || null;
  a = b2 && b2.messageHeaders || null;
  b2 && b2.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
  this.a.l = a;
  a = b2 && b2.initMessageHeaders || null;
  b2 && b2.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b2.messageContentType : a = { "X-WebChannel-Content-Type": b2.messageContentType });
  b2 && b2.a && (a ? a["X-WebChannel-Client-Profile"] = b2.a : a = { "X-WebChannel-Client-Profile": b2.a });
  this.a.O = a;
  (a = b2 && b2.httpHeadersOverwriteParam) && !ta$1(a) && (this.a.i = a);
  this.h = b2 && b2.supportsCrossDomainXhr || false;
  this.g = b2 && b2.sendRawJson || false;
  (b2 = b2 && b2.httpSessionIdParam) && !ta$1(b2) && (this.a.A = b2, a = this.b, null !== a && b2 in a && (a = this.b, b2 in a && delete a[b2]));
  this.f = new Z$1(this);
}
r(Y$1, D$1);
g = Y$1.prototype;
g.addEventListener = function(a, b2, c, d) {
  Y$1.S.addEventListener.call(this, a, b2, c, d);
};
g.removeEventListener = function(a, b2, c, d) {
  Y$1.S.removeEventListener.call(this, a, b2, c, d);
};
g.Oa = function() {
  this.a.f = this.f;
  this.h && (this.a.C = true);
  var a = this.a, b2 = this.l, c = this.b || void 0;
  H$1();
  a.fa = b2;
  a.W = c || {};
  a.H = a.T;
  a.B = Fc(a, null, a.fa);
  Ic(a);
};
g.close = function() {
  Jc(this.a);
};
g.Pa = function(a) {
  if ("string" === typeof a) {
    var b2 = {};
    b2.__data__ = a;
    Gd(this.a, b2);
  } else
    this.g ? (b2 = {}, b2.__data__ = vb(a), Gd(this.a, b2)) : Gd(this.a, a);
};
g.G = function() {
  this.a.f = null;
  delete this.f;
  Jc(this.a);
  delete this.a;
  Y$1.S.G.call(this);
};
function Od(a) {
  dc.call(this);
  var b2 = a.__sm__;
  if (b2) {
    a: {
      for (var c in b2) {
        a = c;
        break a;
      }
      a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b2 && a in b2 ? b2[a] : void 0) : this.data = b2;
  } else
    this.data = a;
}
r(Od, dc);
function Pd() {
  ec.call(this);
  this.status = 1;
}
r(Pd, ec);
function Z$1(a) {
  this.a = a;
}
r(Z$1, Md);
Z$1.prototype.ta = function() {
  this.a.dispatchEvent("a");
};
Z$1.prototype.sa = function(a) {
  this.a.dispatchEvent(new Od(a));
};
Z$1.prototype.ra = function(a) {
  this.a.dispatchEvent(new Pd());
};
Z$1.prototype.qa = function() {
  this.a.dispatchEvent("b");
};
Nd.prototype.createWebChannel = Nd.prototype.a;
Y$1.prototype.send = Y$1.prototype.Pa;
Y$1.prototype.open = Y$1.prototype.Oa;
Y$1.prototype.close = Y$1.prototype.close;
Zb.NO_ERROR = 0;
Zb.TIMEOUT = 8;
Zb.HTTP_ERROR = 6;
$b.COMPLETE = "complete";
cc.EventType = J$1;
J$1.OPEN = "a";
J$1.CLOSE = "b";
J$1.ERROR = "c";
J$1.MESSAGE = "d";
D$1.prototype.listen = D$1.prototype.va;
X$1.prototype.listenOnce = X$1.prototype.wa;
X$1.prototype.getLastError = X$1.prototype.Qa;
X$1.prototype.getLastErrorCode = X$1.prototype.ua;
X$1.prototype.getStatus = X$1.prototype.X;
X$1.prototype.getResponseJson = X$1.prototype.Na;
X$1.prototype.getResponseText = X$1.prototype.$;
X$1.prototype.send = X$1.prototype.ba;
var createWebChannelTransport = function() {
  return new Nd();
};
var ErrorCode$1 = Zb;
var EventType = $b;
var WebChannel = cc;
var XhrIo = X$1;
/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * @license
 * Copyright 2017 Google LLC
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
var b = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
}, I = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, n3) || this).code = t, r2.message = n3, r2.name = "FirebaseError", r2.toString = function() {
      return r2.name + ": [code=" + r2.code + "]: " + r2.message;
    }, r2;
  }
  return __extends$1(n2, e), n2;
}(Error), E = new Logger("@firebase/firestore");
function _() {
  return E.logLevel;
}
function T(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++)
    e[n2 - 1] = arguments[n2];
  if (E.logLevel <= LogLevel.DEBUG) {
    var i = e.map(S);
    E.debug.apply(E, __spreadArrays$1(["Firestore (7.24.0): " + t], i));
  }
}
function N(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++)
    e[n2 - 1] = arguments[n2];
  if (E.logLevel <= LogLevel.ERROR) {
    var i = e.map(S);
    E.error.apply(E, __spreadArrays$1(["Firestore (7.24.0): " + t], i));
  }
}
function A(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++)
    e[n2 - 1] = arguments[n2];
  if (E.logLevel <= LogLevel.WARN) {
    var i = e.map(S);
    E.warn.apply(E, __spreadArrays$1(["Firestore (7.24.0): " + t], i));
  }
}
function S(t) {
  if ("string" == typeof t)
    return t;
  try {
    return e = t, JSON.stringify(e);
  } catch (e2) {
    return t;
  }
  /**
  * @license
  * Copyright 2020 Google LLC
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
  var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function D(t) {
  void 0 === t && (t = "Unexpected state");
  var e = "FIRESTORE (7.24.0) INTERNAL ASSERTION FAILED: " + t;
  throw N(e), new Error(e);
}
function k(t, e) {
  t || D();
}
function x(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function L(t) {
  var e = 0;
  for (var n2 in t)
    Object.prototype.hasOwnProperty.call(t, n2) && e++;
  return e;
}
function R(t, e) {
  for (var n2 in t)
    Object.prototype.hasOwnProperty.call(t, n2) && e(n2, t[n2]);
}
function O(t) {
  for (var e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return false;
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var P = function() {
  function t(t2, e, n2) {
    void 0 === e ? e = 0 : e > t2.length && D(), void 0 === n2 ? n2 = t2.length - e : n2 > t2.length - e && D(), this.segments = t2, this.offset = e, this.t = n2;
  }
  return Object.defineProperty(t.prototype, "length", {
    get: function() {
      return this.t;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(e) {
    return 0 === t.i(this, e);
  }, t.prototype.child = function(e) {
    var n2 = this.segments.slice(this.offset, this.limit());
    return e instanceof t ? e.forEach(function(t2) {
      n2.push(t2);
    }) : n2.push(e), this.o(n2);
  }, t.prototype.limit = function() {
    return this.offset + this.length;
  }, t.prototype.u = function(t2) {
    return t2 = void 0 === t2 ? 1 : t2, this.o(this.segments, this.offset + t2, this.length - t2);
  }, t.prototype.h = function() {
    return this.o(this.segments, this.offset, this.length - 1);
  }, t.prototype.l = function() {
    return this.segments[this.offset];
  }, t.prototype._ = function() {
    return this.get(this.length - 1);
  }, t.prototype.get = function(t2) {
    return this.segments[this.offset + t2];
  }, t.prototype.m = function() {
    return 0 === this.length;
  }, t.prototype.T = function(t2) {
    if (t2.length < this.length)
      return false;
    for (var e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }, t.prototype.I = function(t2) {
    if (this.length + 1 !== t2.length)
      return false;
    for (var e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }, t.prototype.forEach = function(t2) {
    for (var e = this.offset, n2 = this.limit(); e < n2; e++)
      t2(this.segments[e]);
  }, t.prototype.A = function() {
    return this.segments.slice(this.offset, this.limit());
  }, t.i = function(t2, e) {
    for (var n2 = Math.min(t2.length, e.length), r2 = 0; r2 < n2; r2++) {
      var i = t2.get(r2), o = e.get(r2);
      if (i < o)
        return -1;
      if (i > o)
        return 1;
    }
    return t2.length < e.length ? -1 : t2.length > e.length ? 1 : 0;
  }, t;
}(), V = function(e) {
  function n2() {
    return null !== e && e.apply(this, arguments) || this;
  }
  return __extends$1(n2, e), n2.prototype.o = function(t, e2, r2) {
    return new n2(t, e2, r2);
  }, n2.prototype.R = function() {
    return this.A().join("/");
  }, n2.prototype.toString = function() {
    return this.R();
  }, n2.g = function() {
    for (var t = [], e2 = 0; e2 < arguments.length; e2++)
      t[e2] = arguments[e2];
    for (var r2 = [], i = 0, o = t; i < o.length; i++) {
      var s = o[i];
      if (s.indexOf("//") >= 0)
        throw new I(b.INVALID_ARGUMENT, "Invalid segment (" + s + "). Paths must not contain // in them.");
      r2.push.apply(r2, s.split("/").filter(function(t2) {
        return t2.length > 0;
      }));
    }
    return new n2(r2);
  }, n2.P = function() {
    return new n2([]);
  }, n2;
}(P), U = /^[_a-zA-Z][_a-zA-Z0-9]*$/, C = function(e) {
  function n2() {
    return null !== e && e.apply(this, arguments) || this;
  }
  return __extends$1(n2, e), n2.prototype.o = function(t, e2, r2) {
    return new n2(t, e2, r2);
  }, n2.V = function(t) {
    return U.test(t);
  }, n2.prototype.R = function() {
    return this.A().map(function(t) {
      return t = t.replace("\\", "\\\\").replace("`", "\\`"), n2.V(t) || (t = "`" + t + "`"), t;
    }).join(".");
  }, n2.prototype.toString = function() {
    return this.R();
  }, n2.prototype.p = function() {
    return 1 === this.length && "__name__" === this.get(0);
  }, n2.v = function() {
    return new n2(["__name__"]);
  }, n2.S = function(t) {
    for (var e2 = [], r2 = "", i = 0, o = function() {
      if (0 === r2.length)
        throw new I(b.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
      e2.push(r2), r2 = "";
    }, s = false; i < t.length; ) {
      var u2 = t[i];
      if ("\\" === u2) {
        if (i + 1 === t.length)
          throw new I(b.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
        var a = t[i + 1];
        if ("\\" !== a && "." !== a && "`" !== a)
          throw new I(b.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
        r2 += a, i += 2;
      } else
        "`" === u2 ? (s = !s, i++) : "." !== u2 || s ? (r2 += u2, i++) : (o(), i++);
    }
    if (o(), s)
      throw new I(b.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new n2(e2);
  }, n2.P = function() {
    return new n2([]);
  }, n2;
}(P), F = function() {
  function t(t2) {
    this.path = t2;
  }
  return t.D = function(e) {
    return new t(V.g(e));
  }, t.C = function(e) {
    return new t(V.g(e).u(5));
  }, t.prototype.N = function(t2) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t2;
  }, t.prototype.isEqual = function(t2) {
    return null !== t2 && 0 === V.i(this.path, t2.path);
  }, t.prototype.toString = function() {
    return this.path.toString();
  }, t.i = function(t2, e) {
    return V.i(t2.path, e.path);
  }, t.F = function(t2) {
    return t2.length % 2 == 0;
  }, t.$ = function(e) {
    return new t(new V(e.slice()));
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function M(t, e) {
  if (0 !== e.length)
    throw new I(b.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + rt(e.length, "argument") + ".");
}
function q(t, e, n2) {
  if (e.length !== n2)
    throw new I(b.INVALID_ARGUMENT, "Function " + t + "() requires " + rt(n2, "argument") + ", but was called with " + rt(e.length, "argument") + ".");
}
function j(t, e, n2) {
  if (e.length < n2)
    throw new I(b.INVALID_ARGUMENT, "Function " + t + "() requires at least " + rt(n2, "argument") + ", but was called with " + rt(e.length, "argument") + ".");
}
function G(t, e, n2, r2) {
  if (e.length < n2 || e.length > r2)
    throw new I(b.INVALID_ARGUMENT, "Function " + t + "() requires between " + n2 + " and " + r2 + " arguments, but was called with " + rt(e.length, "argument") + ".");
}
function z(t, e, n2, r2) {
  Y(t, e, nt(n2) + " argument", r2);
}
function B(t, e, n2, r2) {
  void 0 !== r2 && z(t, e, n2, r2);
}
function K(t, e, n2, r2) {
  Y(t, e, n2 + " option", r2);
}
function W(t, e, n2, r2) {
  void 0 !== r2 && K(t, e, n2, r2);
}
function Q(t, e, n2, r2, i) {
  void 0 !== r2 && function(t2, e2, n3, r3, i2) {
    for (var o = [], s = 0, u2 = i2; s < u2.length; s++) {
      var a = u2[s];
      if (a === r3)
        return;
      o.push(X(a));
    }
    var c = X(r3);
    throw new I(b.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t2 + '() for option "' + n3 + '". Acceptable values: ' + o.join(", "));
  }(t, 0, n2, r2, i);
}
function H(t, e, n2, r2) {
  if (!e.some(function(t2) {
    return t2 === r2;
  }))
    throw new I(b.INVALID_ARGUMENT, "Invalid value " + X(r2) + " provided to function " + t + "() for its " + nt(n2) + " argument. Acceptable values: " + e.join(", "));
  return r2;
}
function Y(t, e, n2, r2) {
  if (!("object" === e ? $(r2) : "non-empty string" === e ? "string" == typeof r2 && "" !== r2 : typeof r2 === e)) {
    var i = X(r2);
    throw new I(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + n2 + " to be of type " + e + ", but it was: " + i);
  }
}
function $(t) {
  return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}
function X(t) {
  if (void 0 === t)
    return "undefined";
  if (null === t)
    return "null";
  if ("string" == typeof t)
    return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
  if ("number" == typeof t || "boolean" == typeof t)
    return "" + t;
  if ("object" == typeof t) {
    if (t instanceof Array)
      return "an array";
    var e = function(t2) {
      if (t2.constructor) {
        var e2 = /function\s+([^\s(]+)\s*\(/.exec(t2.constructor.toString());
        if (e2 && e2.length > 1)
          return e2[1];
      }
      return null;
    }(t);
    return e ? "a custom " + e + " object" : "an object";
  }
  return "function" == typeof t ? "a function" : D();
}
function J(t, e, n2) {
  if (void 0 === n2)
    throw new I(b.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + nt(e) + " argument, but it was undefined.");
}
function Z(t, e, n2) {
  R(e, function(e2, r2) {
    if (n2.indexOf(e2) < 0)
      throw new I(b.INVALID_ARGUMENT, "Unknown option '" + e2 + "' passed to function " + t + "(). Available options: " + n2.join(", "));
  });
}
function tt(t, e, n2, r2) {
  var i = X(r2);
  return new I(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + nt(n2) + " argument to be a " + e + ", but it was: " + i);
}
function et(t, e, n2) {
  if (n2 <= 0)
    throw new I(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + nt(e) + " argument to be a positive number, but it was: " + n2 + ".");
}
function nt(t) {
  switch (t) {
    case 1:
      return "first";
    case 2:
      return "second";
    case 3:
      return "third";
    default:
      return t + "th";
  }
}
function rt(t, e) {
  return t + " " + e + (1 === t ? "" : "s");
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function it(t) {
  var e = "undefined" != typeof self && (self.crypto || self.msCrypto), n2 = new Uint8Array(t);
  if (e && "function" == typeof e.getRandomValues)
    e.getRandomValues(n2);
  else
    for (var r2 = 0; r2 < t; r2++)
      n2[r2] = Math.floor(256 * Math.random());
  return n2;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var ot = function() {
  function t() {
  }
  return t.k = function() {
    for (var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t2.length) * t2.length, n2 = ""; n2.length < 20; )
      for (var r2 = it(40), i = 0; i < r2.length; ++i)
        n2.length < 20 && r2[i] < e && (n2 += t2.charAt(r2[i] % t2.length));
    return n2;
  }, t;
}();
function st(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function ut(t, e, n2) {
  return t.length === e.length && t.every(function(t2, r2) {
    return n2(t2, e[r2]);
  });
}
function at(t) {
  return t + "\0";
}
/**
 * @license
 * Copyright 2020 Google LLC
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
var ct = function() {
  function t(t2) {
    this.M = t2;
  }
  return t.fromBase64String = function(e) {
    return new t(atob(e));
  }, t.fromUint8Array = function(e) {
    return new t(function(t2) {
      for (var e2 = "", n2 = 0; n2 < t2.length; ++n2)
        e2 += String.fromCharCode(t2[n2]);
      return e2;
    }(e));
  }, t.prototype.toBase64 = function() {
    return t2 = this.M, btoa(t2);
    var t2;
  }, t.prototype.toUint8Array = function() {
    return function(t2) {
      for (var e = new Uint8Array(t2.length), n2 = 0; n2 < t2.length; n2++)
        e[n2] = t2.charCodeAt(n2);
      return e;
    }(this.M);
  }, t.prototype.O = function() {
    return 2 * this.M.length;
  }, t.prototype.L = function(t2) {
    return st(this.M, t2.M);
  }, t.prototype.isEqual = function(t2) {
    return this.M === t2.M;
  }, t;
}();
ct.B = new ct("");
var ht = function() {
  function t(t2) {
    this.q = t2;
  }
  return t.fromBase64String = function(e) {
    try {
      return new t(ct.fromBase64String(e));
    } catch (e2) {
      throw new I(b.INVALID_ARGUMENT, "Failed to construct Bytes from Base64 string: " + e2);
    }
  }, t.fromUint8Array = function(e) {
    return new t(ct.fromUint8Array(e));
  }, t.prototype.toBase64 = function() {
    return this.q.toBase64();
  }, t.prototype.toUint8Array = function() {
    return this.q.toUint8Array();
  }, t.prototype.toString = function() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }, t.prototype.isEqual = function(t2) {
    return this.q.isEqual(t2.q);
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function ft() {
  if ("undefined" == typeof Uint8Array)
    throw new I(b.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}
function lt() {
  if ("undefined" == typeof atob)
    throw new I(b.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}
var pt = function(e) {
  function n2() {
    return null !== e && e.apply(this, arguments) || this;
  }
  return __extends$1(n2, e), n2.fromBase64String = function(t) {
    q("Blob.fromBase64String", arguments, 1), z("Blob.fromBase64String", "string", 1, t), lt();
    try {
      return new n2(ct.fromBase64String(t));
    } catch (t2) {
      throw new I(b.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t2);
    }
  }, n2.fromUint8Array = function(t) {
    if (q("Blob.fromUint8Array", arguments, 1), ft(), !(t instanceof Uint8Array))
      throw tt("Blob.fromUint8Array", "Uint8Array", 1, t);
    return new n2(ct.fromUint8Array(t));
  }, n2.prototype.toBase64 = function() {
    return q("Blob.toBase64", arguments, 0), lt(), e.prototype.toBase64.call(this);
  }, n2.prototype.toUint8Array = function() {
    return q("Blob.toUint8Array", arguments, 0), ft(), e.prototype.toUint8Array.call(this);
  }, n2.prototype.toString = function() {
    return "Blob(base64: " + this.toBase64() + ")";
  }, n2;
}(ht), dt = function(t, e, n2, r2, i, o) {
  this.U = t, this.persistenceKey = e, this.host = n2, this.ssl = r2, this.forceLongPolling = i, this.W = o;
}, vt = function() {
  function t(t2, e) {
    this.projectId = t2, this.database = e || "(default)";
  }
  return Object.defineProperty(t.prototype, "j", {
    get: function() {
      return "(default)" === this.database;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(e) {
    return e instanceof t && e.projectId === this.projectId && e.database === this.database;
  }, t.prototype.L = function(t2) {
    return st(this.projectId, t2.projectId) || st(this.database, t2.database);
  }, t;
}(), yt = function() {
  function t(t2, e) {
    this.K = t2, this.G = e, this.H = {};
  }
  return t.prototype.get = function(t2) {
    var e = this.K(t2), n2 = this.H[e];
    if (void 0 !== n2)
      for (var r2 = 0, i = n2; r2 < i.length; r2++) {
        var o = i[r2], s = o[0], u2 = o[1];
        if (this.G(s, t2))
          return u2;
      }
  }, t.prototype.has = function(t2) {
    return void 0 !== this.get(t2);
  }, t.prototype.set = function(t2, e) {
    var n2 = this.K(t2), r2 = this.H[n2];
    if (void 0 !== r2) {
      for (var i = 0; i < r2.length; i++)
        if (this.G(r2[i][0], t2))
          return void (r2[i] = [t2, e]);
      r2.push([t2, e]);
    } else
      this.H[n2] = [[t2, e]];
  }, t.prototype.delete = function(t2) {
    var e = this.K(t2), n2 = this.H[e];
    if (void 0 === n2)
      return false;
    for (var r2 = 0; r2 < n2.length; r2++)
      if (this.G(n2[r2][0], t2))
        return 1 === n2.length ? delete this.H[e] : n2.splice(r2, 1), true;
    return false;
  }, t.prototype.forEach = function(t2) {
    R(this.H, function(e, n2) {
      for (var r2 = 0, i = n2; r2 < i.length; r2++) {
        var o = i[r2], s = o[0], u2 = o[1];
        t2(s, u2);
      }
    });
  }, t.prototype.m = function() {
    return O(this.H);
  }, t;
}(), mt = function() {
  function t(t2, e) {
    if (this.seconds = t2, this.nanoseconds = e, e < 0)
      throw new I(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9)
      throw new I(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t2 < -62135596800)
      throw new I(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
    if (t2 >= 253402300800)
      throw new I(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
  }
  return t.now = function() {
    return t.fromMillis(Date.now());
  }, t.fromDate = function(e) {
    return t.fromMillis(e.getTime());
  }, t.fromMillis = function(e) {
    var n2 = Math.floor(e / 1e3);
    return new t(n2, 1e6 * (e - 1e3 * n2));
  }, t.prototype.toDate = function() {
    return new Date(this.toMillis());
  }, t.prototype.toMillis = function() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }, t.prototype.Y = function(t2) {
    return this.seconds === t2.seconds ? st(this.nanoseconds, t2.nanoseconds) : st(this.seconds, t2.seconds);
  }, t.prototype.isEqual = function(t2) {
    return t2.seconds === this.seconds && t2.nanoseconds === this.nanoseconds;
  }, t.prototype.toString = function() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }, t.prototype.toJSON = function() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }, t.prototype.valueOf = function() {
    var t2 = this.seconds - -62135596800;
    return String(t2).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }, t;
}(), gt = function() {
  function t(t2) {
    this.timestamp = t2;
  }
  return t.J = function(e) {
    return new t(e);
  }, t.min = function() {
    return new t(new mt(0, 0));
  }, t.prototype.L = function(t2) {
    return this.timestamp.Y(t2.timestamp);
  }, t.prototype.isEqual = function(t2) {
    return this.timestamp.isEqual(t2.timestamp);
  }, t.prototype.X = function() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }, t.prototype.toString = function() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }, t.prototype.Z = function() {
    return this.timestamp;
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * @license
 * Copyright 2017 Google LLC
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
function wt(t) {
  return null == t;
}
function bt(t) {
  return 0 === t && 1 / t == -1 / 0;
}
function It(t) {
  return "number" == typeof t && Number.isInteger(t) && !bt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
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
var Et = function(t, e, n2, r2, i, o, s) {
  void 0 === e && (e = null), void 0 === n2 && (n2 = []), void 0 === r2 && (r2 = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n2, this.filters = r2, this.limit = i, this.startAt = o, this.endAt = s, this.tt = null;
};
function _t(t, e, n2, r2, i, o, s) {
  return void 0 === e && (e = null), void 0 === n2 && (n2 = []), void 0 === r2 && (r2 = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), new Et(t, e, n2, r2, i, o, s);
}
function Tt(t) {
  var e = x(t);
  if (null === e.tt) {
    var n2 = e.path.R();
    null !== e.collectionGroup && (n2 += "|cg:" + e.collectionGroup), n2 += "|f:", n2 += e.filters.map(function(t2) {
      return function(t3) {
        return t3.field.R() + t3.op.toString() + ve(t3.value);
      }(t2);
    }).join(","), n2 += "|ob:", n2 += e.orderBy.map(function(t2) {
      return (e2 = t2).field.R() + e2.dir;
      var e2;
    }).join(","), wt(e.limit) || (n2 += "|l:", n2 += e.limit), e.startAt && (n2 += "|lb:", n2 += br(e.startAt)), e.endAt && (n2 += "|ub:", n2 += br(e.endAt)), e.tt = n2;
  }
  return e.tt;
}
function Nt(t, e) {
  if (t.limit !== e.limit)
    return false;
  if (t.orderBy.length !== e.orderBy.length)
    return false;
  for (var n2 = 0; n2 < t.orderBy.length; n2++)
    if (!Nr(t.orderBy[n2], e.orderBy[n2]))
      return false;
  if (t.filters.length !== e.filters.length)
    return false;
  for (var r2 = 0; r2 < t.filters.length; r2++)
    if (i = t.filters[r2], o = e.filters[r2], i.op !== o.op || !i.field.isEqual(o.field) || !fe(i.value, o.value))
      return false;
  var i, o;
  return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Er(t.startAt, e.startAt) && Er(t.endAt, e.endAt);
}
function At(t) {
  return F.F(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var St, Dt, kt = function() {
  function t(t2, e, n2, r2, i, o, s) {
    void 0 === i && (i = gt.min()), void 0 === o && (o = gt.min()), void 0 === s && (s = ct.B), this.target = t2, this.targetId = e, this.et = n2, this.sequenceNumber = r2, this.nt = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
  }
  return t.prototype.st = function(e) {
    return new t(this.target, this.targetId, this.et, e, this.nt, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  }, t.prototype.it = function(e, n2) {
    return new t(this.target, this.targetId, this.et, this.sequenceNumber, n2, this.lastLimboFreeSnapshotVersion, e);
  }, t.prototype.rt = function(e) {
    return new t(this.target, this.targetId, this.et, this.sequenceNumber, this.nt, e, this.resumeToken);
  }, t;
}(), xt = function(t) {
  this.count = t;
};
/**
 * @license
 * Copyright 2017 Google LLC
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
function Lt(t) {
  switch (t) {
    case b.OK:
      return D();
    case b.CANCELLED:
    case b.UNKNOWN:
    case b.DEADLINE_EXCEEDED:
    case b.RESOURCE_EXHAUSTED:
    case b.INTERNAL:
    case b.UNAVAILABLE:
    case b.UNAUTHENTICATED:
      return false;
    case b.INVALID_ARGUMENT:
    case b.NOT_FOUND:
    case b.ALREADY_EXISTS:
    case b.PERMISSION_DENIED:
    case b.FAILED_PRECONDITION:
    case b.ABORTED:
    case b.OUT_OF_RANGE:
    case b.UNIMPLEMENTED:
    case b.DATA_LOSS:
      return true;
    default:
      return D();
  }
}
function Rt(t) {
  if (void 0 === t)
    return N("GRPC error has no .code"), b.UNKNOWN;
  switch (t) {
    case St.OK:
      return b.OK;
    case St.CANCELLED:
      return b.CANCELLED;
    case St.UNKNOWN:
      return b.UNKNOWN;
    case St.DEADLINE_EXCEEDED:
      return b.DEADLINE_EXCEEDED;
    case St.RESOURCE_EXHAUSTED:
      return b.RESOURCE_EXHAUSTED;
    case St.INTERNAL:
      return b.INTERNAL;
    case St.UNAVAILABLE:
      return b.UNAVAILABLE;
    case St.UNAUTHENTICATED:
      return b.UNAUTHENTICATED;
    case St.INVALID_ARGUMENT:
      return b.INVALID_ARGUMENT;
    case St.NOT_FOUND:
      return b.NOT_FOUND;
    case St.ALREADY_EXISTS:
      return b.ALREADY_EXISTS;
    case St.PERMISSION_DENIED:
      return b.PERMISSION_DENIED;
    case St.FAILED_PRECONDITION:
      return b.FAILED_PRECONDITION;
    case St.ABORTED:
      return b.ABORTED;
    case St.OUT_OF_RANGE:
      return b.OUT_OF_RANGE;
    case St.UNIMPLEMENTED:
      return b.UNIMPLEMENTED;
    case St.DATA_LOSS:
      return b.DATA_LOSS;
    default:
      return D();
  }
}
(Dt = St || (St = {}))[Dt.OK = 0] = "OK", Dt[Dt.CANCELLED = 1] = "CANCELLED", Dt[Dt.UNKNOWN = 2] = "UNKNOWN", Dt[Dt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Dt[Dt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Dt[Dt.NOT_FOUND = 5] = "NOT_FOUND", Dt[Dt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Dt[Dt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Dt[Dt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Dt[Dt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Dt[Dt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Dt[Dt.ABORTED = 10] = "ABORTED", Dt[Dt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Dt[Dt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Dt[Dt.INTERNAL = 13] = "INTERNAL", Dt[Dt.UNAVAILABLE = 14] = "UNAVAILABLE", Dt[Dt.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
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
var Ot = function() {
  function t(t2, e) {
    this.i = t2, this.root = e || Vt.EMPTY;
  }
  return t.prototype.ot = function(e, n2) {
    return new t(this.i, this.root.ot(e, n2, this.i).copy(null, null, Vt.at, null, null));
  }, t.prototype.remove = function(e) {
    return new t(this.i, this.root.remove(e, this.i).copy(null, null, Vt.at, null, null));
  }, t.prototype.get = function(t2) {
    for (var e = this.root; !e.m(); ) {
      var n2 = this.i(t2, e.key);
      if (0 === n2)
        return e.value;
      n2 < 0 ? e = e.left : n2 > 0 && (e = e.right);
    }
    return null;
  }, t.prototype.indexOf = function(t2) {
    for (var e = 0, n2 = this.root; !n2.m(); ) {
      var r2 = this.i(t2, n2.key);
      if (0 === r2)
        return e + n2.left.size;
      r2 < 0 ? n2 = n2.left : (e += n2.left.size + 1, n2 = n2.right);
    }
    return -1;
  }, t.prototype.m = function() {
    return this.root.m();
  }, Object.defineProperty(t.prototype, "size", {
    get: function() {
      return this.root.size;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.ct = function() {
    return this.root.ct();
  }, t.prototype.ut = function() {
    return this.root.ut();
  }, t.prototype.ht = function(t2) {
    return this.root.ht(t2);
  }, t.prototype.forEach = function(t2) {
    this.ht(function(e, n2) {
      return t2(e, n2), false;
    });
  }, t.prototype.toString = function() {
    var t2 = [];
    return this.ht(function(e, n2) {
      return t2.push(e + ":" + n2), false;
    }), "{" + t2.join(", ") + "}";
  }, t.prototype.lt = function(t2) {
    return this.root.lt(t2);
  }, t.prototype._t = function() {
    return new Pt(this.root, null, this.i, false);
  }, t.prototype.ft = function(t2) {
    return new Pt(this.root, t2, this.i, false);
  }, t.prototype.dt = function() {
    return new Pt(this.root, null, this.i, true);
  }, t.prototype.wt = function(t2) {
    return new Pt(this.root, t2, this.i, true);
  }, t;
}(), Pt = function() {
  function t(t2, e, n2, r2) {
    this.Tt = r2, this.Et = [];
    for (var i = 1; !t2.m(); )
      if (i = e ? n2(t2.key, e) : 1, r2 && (i *= -1), i < 0)
        t2 = this.Tt ? t2.left : t2.right;
      else {
        if (0 === i) {
          this.Et.push(t2);
          break;
        }
        this.Et.push(t2), t2 = this.Tt ? t2.right : t2.left;
      }
  }
  return t.prototype.It = function() {
    var t2 = this.Et.pop(), e = {
      key: t2.key,
      value: t2.value
    };
    if (this.Tt)
      for (t2 = t2.left; !t2.m(); )
        this.Et.push(t2), t2 = t2.right;
    else
      for (t2 = t2.right; !t2.m(); )
        this.Et.push(t2), t2 = t2.left;
    return e;
  }, t.prototype.At = function() {
    return this.Et.length > 0;
  }, t.prototype.Rt = function() {
    if (0 === this.Et.length)
      return null;
    var t2 = this.Et[this.Et.length - 1];
    return {
      key: t2.key,
      value: t2.value
    };
  }, t;
}(), Vt = function() {
  function t(e, n2, r2, i, o) {
    this.key = e, this.value = n2, this.color = null != r2 ? r2 : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  return t.prototype.copy = function(e, n2, r2, i, o) {
    return new t(null != e ? e : this.key, null != n2 ? n2 : this.value, null != r2 ? r2 : this.color, null != i ? i : this.left, null != o ? o : this.right);
  }, t.prototype.m = function() {
    return false;
  }, t.prototype.ht = function(t2) {
    return this.left.ht(t2) || t2(this.key, this.value) || this.right.ht(t2);
  }, t.prototype.lt = function(t2) {
    return this.right.lt(t2) || t2(this.key, this.value) || this.left.lt(t2);
  }, t.prototype.min = function() {
    return this.left.m() ? this : this.left.min();
  }, t.prototype.ct = function() {
    return this.min().key;
  }, t.prototype.ut = function() {
    return this.right.m() ? this.key : this.right.ut();
  }, t.prototype.ot = function(t2, e, n2) {
    var r2 = this, i = n2(t2, r2.key);
    return (r2 = i < 0 ? r2.copy(null, null, null, r2.left.ot(t2, e, n2), null) : 0 === i ? r2.copy(null, e, null, null, null) : r2.copy(null, null, null, null, r2.right.ot(t2, e, n2))).gt();
  }, t.prototype.Pt = function() {
    if (this.left.m())
      return t.EMPTY;
    var e = this;
    return e.left.yt() || e.left.left.yt() || (e = e.Vt()), (e = e.copy(null, null, null, e.left.Pt(), null)).gt();
  }, t.prototype.remove = function(e, n2) {
    var r2, i = this;
    if (n2(e, i.key) < 0)
      i.left.m() || i.left.yt() || i.left.left.yt() || (i = i.Vt()), i = i.copy(null, null, null, i.left.remove(e, n2), null);
    else {
      if (i.left.yt() && (i = i.bt()), i.right.m() || i.right.yt() || i.right.left.yt() || (i = i.vt()), 0 === n2(e, i.key)) {
        if (i.right.m())
          return t.EMPTY;
        r2 = i.right.min(), i = i.copy(r2.key, r2.value, null, null, i.right.Pt());
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n2));
    }
    return i.gt();
  }, t.prototype.yt = function() {
    return this.color;
  }, t.prototype.gt = function() {
    var t2 = this;
    return t2.right.yt() && !t2.left.yt() && (t2 = t2.St()), t2.left.yt() && t2.left.left.yt() && (t2 = t2.bt()), t2.left.yt() && t2.right.yt() && (t2 = t2.Dt()), t2;
  }, t.prototype.Vt = function() {
    var t2 = this.Dt();
    return t2.right.left.yt() && (t2 = (t2 = (t2 = t2.copy(null, null, null, null, t2.right.bt())).St()).Dt()), t2;
  }, t.prototype.vt = function() {
    var t2 = this.Dt();
    return t2.left.left.yt() && (t2 = (t2 = t2.bt()).Dt()), t2;
  }, t.prototype.St = function() {
    var e = this.copy(null, null, t.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }, t.prototype.bt = function() {
    var e = this.copy(null, null, t.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }, t.prototype.Dt = function() {
    var t2 = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t2, e);
  }, t.prototype.Ct = function() {
    var t2 = this.Nt();
    return Math.pow(2, t2) <= this.size + 1;
  }, t.prototype.Nt = function() {
    if (this.yt() && this.left.yt())
      throw D();
    if (this.right.yt())
      throw D();
    var t2 = this.left.Nt();
    if (t2 !== this.right.Nt())
      throw D();
    return t2 + (this.yt() ? 0 : 1);
  }, t;
}();
Vt.EMPTY = null, Vt.RED = true, Vt.at = false, Vt.EMPTY = new (function() {
  function t() {
    this.size = 0;
  }
  return Object.defineProperty(t.prototype, "key", {
    get: function() {
      throw D();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "value", {
    get: function() {
      throw D();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "color", {
    get: function() {
      throw D();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "left", {
    get: function() {
      throw D();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "right", {
    get: function() {
      throw D();
    },
    enumerable: false,
    configurable: true
  }), t.prototype.copy = function(t2, e, n2, r2, i) {
    return this;
  }, t.prototype.ot = function(t2, e, n2) {
    return new Vt(t2, e);
  }, t.prototype.remove = function(t2, e) {
    return this;
  }, t.prototype.m = function() {
    return true;
  }, t.prototype.ht = function(t2) {
    return false;
  }, t.prototype.lt = function(t2) {
    return false;
  }, t.prototype.ct = function() {
    return null;
  }, t.prototype.ut = function() {
    return null;
  }, t.prototype.yt = function() {
    return false;
  }, t.prototype.Ct = function() {
    return true;
  }, t.prototype.Nt = function() {
    return 0;
  }, t;
}())();
/**
 * @license
 * Copyright 2017 Google LLC
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
var Ut = function() {
  function t(t2) {
    this.i = t2, this.data = new Ot(this.i);
  }
  return t.prototype.has = function(t2) {
    return null !== this.data.get(t2);
  }, t.prototype.first = function() {
    return this.data.ct();
  }, t.prototype.last = function() {
    return this.data.ut();
  }, Object.defineProperty(t.prototype, "size", {
    get: function() {
      return this.data.size;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.indexOf = function(t2) {
    return this.data.indexOf(t2);
  }, t.prototype.forEach = function(t2) {
    this.data.ht(function(e, n2) {
      return t2(e), false;
    });
  }, t.prototype.Ft = function(t2, e) {
    for (var n2 = this.data.ft(t2[0]); n2.At(); ) {
      var r2 = n2.It();
      if (this.i(r2.key, t2[1]) >= 0)
        return;
      e(r2.key);
    }
  }, t.prototype.xt = function(t2, e) {
    var n2;
    for (n2 = void 0 !== e ? this.data.ft(e) : this.data._t(); n2.At(); )
      if (!t2(n2.It().key))
        return;
  }, t.prototype.$t = function(t2) {
    var e = this.data.ft(t2);
    return e.At() ? e.It().key : null;
  }, t.prototype._t = function() {
    return new Ct(this.data._t());
  }, t.prototype.ft = function(t2) {
    return new Ct(this.data.ft(t2));
  }, t.prototype.add = function(t2) {
    return this.copy(this.data.remove(t2).ot(t2, true));
  }, t.prototype.delete = function(t2) {
    return this.has(t2) ? this.copy(this.data.remove(t2)) : this;
  }, t.prototype.m = function() {
    return this.data.m();
  }, t.prototype.kt = function(t2) {
    var e = this;
    return e.size < t2.size && (e = t2, t2 = this), t2.forEach(function(t3) {
      e = e.add(t3);
    }), e;
  }, t.prototype.isEqual = function(e) {
    if (!(e instanceof t))
      return false;
    if (this.size !== e.size)
      return false;
    for (var n2 = this.data._t(), r2 = e.data._t(); n2.At(); ) {
      var i = n2.It().key, o = r2.It().key;
      if (0 !== this.i(i, o))
        return false;
    }
    return true;
  }, t.prototype.A = function() {
    var t2 = [];
    return this.forEach(function(e) {
      t2.push(e);
    }), t2;
  }, t.prototype.toString = function() {
    var t2 = [];
    return this.forEach(function(e) {
      return t2.push(e);
    }), "SortedSet(" + t2.toString() + ")";
  }, t.prototype.copy = function(e) {
    var n2 = new t(this.i);
    return n2.data = e, n2;
  }, t;
}(), Ct = function() {
  function t(t2) {
    this.Mt = t2;
  }
  return t.prototype.It = function() {
    return this.Mt.It().key;
  }, t.prototype.At = function() {
    return this.Mt.At();
  }, t;
}(), Ft = new Ot(F.i);
function Mt() {
  return Ft;
}
function qt() {
  return Mt();
}
var jt = new Ot(F.i);
function Gt() {
  return jt;
}
var zt = new Ot(F.i), Bt = new Ut(F.i);
function Kt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var n2 = Bt, r2 = 0, i = t; r2 < i.length; r2++) {
    var o = i[r2];
    n2 = n2.add(o);
  }
  return n2;
}
var Wt = new Ut(st);
function Qt() {
  return Wt;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Ht = function() {
  function t(t2) {
    this.i = t2 ? function(e, n2) {
      return t2(e, n2) || F.i(e.key, n2.key);
    } : function(t3, e) {
      return F.i(t3.key, e.key);
    }, this.Ot = Gt(), this.Lt = new Ot(this.i);
  }
  return t.Bt = function(e) {
    return new t(e.i);
  }, t.prototype.has = function(t2) {
    return null != this.Ot.get(t2);
  }, t.prototype.get = function(t2) {
    return this.Ot.get(t2);
  }, t.prototype.first = function() {
    return this.Lt.ct();
  }, t.prototype.last = function() {
    return this.Lt.ut();
  }, t.prototype.m = function() {
    return this.Lt.m();
  }, t.prototype.indexOf = function(t2) {
    var e = this.Ot.get(t2);
    return e ? this.Lt.indexOf(e) : -1;
  }, Object.defineProperty(t.prototype, "size", {
    get: function() {
      return this.Lt.size;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.forEach = function(t2) {
    this.Lt.ht(function(e, n2) {
      return t2(e), false;
    });
  }, t.prototype.add = function(t2) {
    var e = this.delete(t2.key);
    return e.copy(e.Ot.ot(t2.key, t2), e.Lt.ot(t2, null));
  }, t.prototype.delete = function(t2) {
    var e = this.get(t2);
    return e ? this.copy(this.Ot.remove(t2), this.Lt.remove(e)) : this;
  }, t.prototype.isEqual = function(e) {
    if (!(e instanceof t))
      return false;
    if (this.size !== e.size)
      return false;
    for (var n2 = this.Lt._t(), r2 = e.Lt._t(); n2.At(); ) {
      var i = n2.It().key, o = r2.It().key;
      if (!i.isEqual(o))
        return false;
    }
    return true;
  }, t.prototype.toString = function() {
    var t2 = [];
    return this.forEach(function(e) {
      t2.push(e.toString());
    }), 0 === t2.length ? "DocumentSet ()" : "DocumentSet (\n  " + t2.join("  \n") + "\n)";
  }, t.prototype.copy = function(e, n2) {
    var r2 = new t();
    return r2.i = this.i, r2.Ot = e, r2.Lt = n2, r2;
  }, t;
}(), Yt = function() {
  function t() {
    this.qt = new Ot(F.i);
  }
  return t.prototype.track = function(t2) {
    var e = t2.doc.key, n2 = this.qt.get(e);
    n2 ? 0 !== t2.type && 3 === n2.type ? this.qt = this.qt.ot(e, t2) : 3 === t2.type && 1 !== n2.type ? this.qt = this.qt.ot(e, {
      type: n2.type,
      doc: t2.doc
    }) : 2 === t2.type && 2 === n2.type ? this.qt = this.qt.ot(e, {
      type: 2,
      doc: t2.doc
    }) : 2 === t2.type && 0 === n2.type ? this.qt = this.qt.ot(e, {
      type: 0,
      doc: t2.doc
    }) : 1 === t2.type && 0 === n2.type ? this.qt = this.qt.remove(e) : 1 === t2.type && 2 === n2.type ? this.qt = this.qt.ot(e, {
      type: 1,
      doc: n2.doc
    }) : 0 === t2.type && 1 === n2.type ? this.qt = this.qt.ot(e, {
      type: 2,
      doc: t2.doc
    }) : D() : this.qt = this.qt.ot(e, t2);
  }, t.prototype.Ut = function() {
    var t2 = [];
    return this.qt.ht(function(e, n2) {
      t2.push(n2);
    }), t2;
  }, t;
}(), $t = function() {
  function t(t2, e, n2, r2, i, o, s, u2) {
    this.query = t2, this.docs = e, this.Qt = n2, this.docChanges = r2, this.Wt = i, this.fromCache = o, this.jt = s, this.Kt = u2;
  }
  return t.Gt = function(e, n2, r2, i) {
    var o = [];
    return n2.forEach(function(t2) {
      o.push({
        type: 0,
        doc: t2
      });
    }), new t(e, n2, Ht.Bt(n2), o, r2, i, true, false);
  }, Object.defineProperty(t.prototype, "hasPendingWrites", {
    get: function() {
      return !this.Wt.m();
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(t2) {
    if (!(this.fromCache === t2.fromCache && this.jt === t2.jt && this.Wt.isEqual(t2.Wt) && or(this.query, t2.query) && this.docs.isEqual(t2.docs) && this.Qt.isEqual(t2.Qt)))
      return false;
    var e = this.docChanges, n2 = t2.docChanges;
    if (e.length !== n2.length)
      return false;
    for (var r2 = 0; r2 < e.length; r2++)
      if (e[r2].type !== n2[r2].type || !e[r2].doc.isEqual(n2[r2].doc))
        return false;
    return true;
  }, t;
}(), Xt = function() {
  function t(t2, e, n2, r2, i) {
    this.nt = t2, this.zt = e, this.Ht = n2, this.Yt = r2, this.Jt = i;
  }
  return t.Xt = function(e, n2) {
    var r2 = /* @__PURE__ */ new Map();
    return r2.set(e, Jt.Zt(e, n2)), new t(gt.min(), r2, Qt(), Mt(), Kt());
  }, t;
}(), Jt = function() {
  function t(t2, e, n2, r2, i) {
    this.resumeToken = t2, this.te = e, this.ee = n2, this.ne = r2, this.se = i;
  }
  return t.Zt = function(e, n2) {
    return new t(ct.B, n2, Kt(), Kt(), Kt());
  }, t;
}(), Zt = function(t, e, n2, r2) {
  this.ie = t, this.removedTargetIds = e, this.key = n2, this.re = r2;
}, te = function(t, e) {
  this.targetId = t, this.oe = e;
}, ee = function(t, e, n2, r2) {
  void 0 === n2 && (n2 = ct.B), void 0 === r2 && (r2 = null), this.state = t, this.targetIds = e, this.resumeToken = n2, this.cause = r2;
}, ne = function() {
  function t() {
    this.ae = 0, this.ce = oe(), this.ue = ct.B, this.he = false, this.le = true;
  }
  return Object.defineProperty(t.prototype, "te", {
    get: function() {
      return this.he;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "resumeToken", {
    get: function() {
      return this.ue;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "_e", {
    get: function() {
      return 0 !== this.ae;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "fe", {
    get: function() {
      return this.le;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.de = function(t2) {
    t2.O() > 0 && (this.le = true, this.ue = t2);
  }, t.prototype.we = function() {
    var t2 = Kt(), e = Kt(), n2 = Kt();
    return this.ce.forEach(function(r2, i) {
      switch (i) {
        case 0:
          t2 = t2.add(r2);
          break;
        case 2:
          e = e.add(r2);
          break;
        case 1:
          n2 = n2.add(r2);
          break;
        default:
          D();
      }
    }), new Jt(this.ue, this.he, t2, e, n2);
  }, t.prototype.me = function() {
    this.le = false, this.ce = oe();
  }, t.prototype.Te = function(t2, e) {
    this.le = true, this.ce = this.ce.ot(t2, e);
  }, t.prototype.Ee = function(t2) {
    this.le = true, this.ce = this.ce.remove(t2);
  }, t.prototype.Ie = function() {
    this.ae += 1;
  }, t.prototype.Ae = function() {
    this.ae -= 1;
  }, t.prototype.Re = function() {
    this.le = true, this.he = true;
  }, t;
}(), re = function() {
  function t(t2) {
    this.ge = t2, this.Pe = /* @__PURE__ */ new Map(), this.ye = Mt(), this.Ve = ie(), this.pe = new Ut(st);
  }
  return t.prototype.be = function(t2) {
    for (var e = 0, n2 = t2.ie; e < n2.length; e++) {
      var r2 = n2[e];
      t2.re instanceof zn ? this.ve(r2, t2.re) : t2.re instanceof Bn && this.Se(r2, t2.key, t2.re);
    }
    for (var i = 0, o = t2.removedTargetIds; i < o.length; i++) {
      var s = o[i];
      this.Se(s, t2.key, t2.re);
    }
  }, t.prototype.De = function(t2) {
    var e = this;
    this.Ce(t2, function(n2) {
      var r2 = e.Ne(n2);
      switch (t2.state) {
        case 0:
          e.Fe(n2) && r2.de(t2.resumeToken);
          break;
        case 1:
          r2.Ae(), r2._e || r2.me(), r2.de(t2.resumeToken);
          break;
        case 2:
          r2.Ae(), r2._e || e.removeTarget(n2);
          break;
        case 3:
          e.Fe(n2) && (r2.Re(), r2.de(t2.resumeToken));
          break;
        case 4:
          e.Fe(n2) && (e.xe(n2), r2.de(t2.resumeToken));
          break;
        default:
          D();
      }
    });
  }, t.prototype.Ce = function(t2, e) {
    var n2 = this;
    t2.targetIds.length > 0 ? t2.targetIds.forEach(e) : this.Pe.forEach(function(t3, r2) {
      n2.Fe(r2) && e(r2);
    });
  }, t.prototype.$e = function(t2) {
    var e = t2.targetId, n2 = t2.oe.count, r2 = this.ke(e);
    if (r2) {
      var i = r2.target;
      if (At(i))
        if (0 === n2) {
          var o = new F(i.path);
          this.Se(e, o, new Bn(o, gt.min()));
        } else
          k(1 === n2);
      else
        this.Me(e) !== n2 && (this.xe(e), this.pe = this.pe.add(e));
    }
  }, t.prototype.Oe = function(t2) {
    var e = this, n2 = /* @__PURE__ */ new Map();
    this.Pe.forEach(function(r3, i2) {
      var o = e.ke(i2);
      if (o) {
        if (r3.te && At(o.target)) {
          var s = new F(o.target.path);
          null !== e.ye.get(s) || e.Le(i2, s) || e.Se(i2, s, new Bn(s, t2));
        }
        r3.fe && (n2.set(i2, r3.we()), r3.me());
      }
    });
    var r2 = Kt();
    this.Ve.forEach(function(t3, n3) {
      var i2 = true;
      n3.xt(function(t4) {
        var n4 = e.ke(t4);
        return !n4 || 2 === n4.et || (i2 = false, false);
      }), i2 && (r2 = r2.add(t3));
    });
    var i = new Xt(t2, n2, this.pe, this.ye, r2);
    return this.ye = Mt(), this.Ve = ie(), this.pe = new Ut(st), i;
  }, t.prototype.ve = function(t2, e) {
    if (this.Fe(t2)) {
      var n2 = this.Le(t2, e.key) ? 2 : 0;
      this.Ne(t2).Te(e.key, n2), this.ye = this.ye.ot(e.key, e), this.Ve = this.Ve.ot(e.key, this.Be(e.key).add(t2));
    }
  }, t.prototype.Se = function(t2, e, n2) {
    if (this.Fe(t2)) {
      var r2 = this.Ne(t2);
      this.Le(t2, e) ? r2.Te(e, 1) : r2.Ee(e), this.Ve = this.Ve.ot(e, this.Be(e).delete(t2)), n2 && (this.ye = this.ye.ot(e, n2));
    }
  }, t.prototype.removeTarget = function(t2) {
    this.Pe.delete(t2);
  }, t.prototype.Me = function(t2) {
    var e = this.Ne(t2).we();
    return this.ge.qe(t2).size + e.ee.size - e.se.size;
  }, t.prototype.Ie = function(t2) {
    this.Ne(t2).Ie();
  }, t.prototype.Ne = function(t2) {
    var e = this.Pe.get(t2);
    return e || (e = new ne(), this.Pe.set(t2, e)), e;
  }, t.prototype.Be = function(t2) {
    var e = this.Ve.get(t2);
    return e || (e = new Ut(st), this.Ve = this.Ve.ot(t2, e)), e;
  }, t.prototype.Fe = function(t2) {
    var e = null !== this.ke(t2);
    return e || T("WatchChangeAggregator", "Detected inactive target", t2), e;
  }, t.prototype.ke = function(t2) {
    var e = this.Pe.get(t2);
    return e && e._e ? null : this.ge.Ue(t2);
  }, t.prototype.xe = function(t2) {
    var e = this;
    this.Pe.set(t2, new ne()), this.ge.qe(t2).forEach(function(n2) {
      e.Se(t2, n2, null);
    });
  }, t.prototype.Le = function(t2, e) {
    return this.ge.qe(t2).has(e);
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function ie() {
  return new Ot(F.i);
}
function oe() {
  return new Ot(F.i);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function se(t) {
  var e, n2;
  return "server_timestamp" === (null === (n2 = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n2 ? void 0 : n2.stringValue);
}
function ue(t) {
  var e = t.mapValue.fields.__previous_value__;
  return se(e) ? ue(e) : e;
}
function ae(t) {
  var e = me(t.mapValue.fields.__local_write_time__.timestampValue);
  return new mt(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
var ce = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function he(t) {
  return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? se(t) ? 4 : 10 : D();
}
function fe(t, e) {
  var n2 = he(t);
  if (n2 !== he(e))
    return false;
  switch (n2) {
    case 0:
      return true;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return ae(t).isEqual(ae(e));
    case 3:
      return function(t2, e2) {
        if ("string" == typeof t2.timestampValue && "string" == typeof e2.timestampValue && t2.timestampValue.length === e2.timestampValue.length)
          return t2.timestampValue === e2.timestampValue;
        var n3 = me(t2.timestampValue), r2 = me(e2.timestampValue);
        return n3.seconds === r2.seconds && n3.nanos === r2.nanos;
      }(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return function(t2, e2) {
        return we(t2.bytesValue).isEqual(we(e2.bytesValue));
      }(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return function(t2, e2) {
        return ge(t2.geoPointValue.latitude) === ge(e2.geoPointValue.latitude) && ge(t2.geoPointValue.longitude) === ge(e2.geoPointValue.longitude);
      }(t, e);
    case 2:
      return function(t2, e2) {
        if ("integerValue" in t2 && "integerValue" in e2)
          return ge(t2.integerValue) === ge(e2.integerValue);
        if ("doubleValue" in t2 && "doubleValue" in e2) {
          var n3 = ge(t2.doubleValue), r2 = ge(e2.doubleValue);
          return n3 === r2 ? bt(n3) === bt(r2) : isNaN(n3) && isNaN(r2);
        }
        return false;
      }(t, e);
    case 9:
      return ut(t.arrayValue.values || [], e.arrayValue.values || [], fe);
    case 10:
      return function(t2, e2) {
        var n3 = t2.mapValue.fields || {}, r2 = e2.mapValue.fields || {};
        if (L(n3) !== L(r2))
          return false;
        for (var i in n3)
          if (n3.hasOwnProperty(i) && (void 0 === r2[i] || !fe(n3[i], r2[i])))
            return false;
        return true;
      }(t, e);
    default:
      return D();
  }
}
function le(t, e) {
  return void 0 !== (t.values || []).find(function(t2) {
    return fe(t2, e);
  });
}
function pe(t, e) {
  var n2 = he(t), r2 = he(e);
  if (n2 !== r2)
    return st(n2, r2);
  switch (n2) {
    case 0:
      return 0;
    case 1:
      return st(t.booleanValue, e.booleanValue);
    case 2:
      return function(t2, e2) {
        var n3 = ge(t2.integerValue || t2.doubleValue), r3 = ge(e2.integerValue || e2.doubleValue);
        return n3 < r3 ? -1 : n3 > r3 ? 1 : n3 === r3 ? 0 : isNaN(n3) ? isNaN(r3) ? 0 : -1 : 1;
      }(t, e);
    case 3:
      return de(t.timestampValue, e.timestampValue);
    case 4:
      return de(ae(t), ae(e));
    case 5:
      return st(t.stringValue, e.stringValue);
    case 6:
      return function(t2, e2) {
        var n3 = we(t2), r3 = we(e2);
        return n3.L(r3);
      }(t.bytesValue, e.bytesValue);
    case 7:
      return function(t2, e2) {
        for (var n3 = t2.split("/"), r3 = e2.split("/"), i = 0; i < n3.length && i < r3.length; i++) {
          var o = st(n3[i], r3[i]);
          if (0 !== o)
            return o;
        }
        return st(n3.length, r3.length);
      }(t.referenceValue, e.referenceValue);
    case 8:
      return function(t2, e2) {
        var n3 = st(ge(t2.latitude), ge(e2.latitude));
        return 0 !== n3 ? n3 : st(ge(t2.longitude), ge(e2.longitude));
      }(t.geoPointValue, e.geoPointValue);
    case 9:
      return function(t2, e2) {
        for (var n3 = t2.values || [], r3 = e2.values || [], i = 0; i < n3.length && i < r3.length; ++i) {
          var o = pe(n3[i], r3[i]);
          if (o)
            return o;
        }
        return st(n3.length, r3.length);
      }(t.arrayValue, e.arrayValue);
    case 10:
      return function(t2, e2) {
        var n3 = t2.fields || {}, r3 = Object.keys(n3), i = e2.fields || {}, o = Object.keys(i);
        r3.sort(), o.sort();
        for (var s = 0; s < r3.length && s < o.length; ++s) {
          var u2 = st(r3[s], o[s]);
          if (0 !== u2)
            return u2;
          var a = pe(n3[r3[s]], i[o[s]]);
          if (0 !== a)
            return a;
        }
        return st(r3.length, o.length);
      }(t.mapValue, e.mapValue);
    default:
      throw D();
  }
}
function de(t, e) {
  if ("string" == typeof t && "string" == typeof e && t.length === e.length)
    return st(t, e);
  var n2 = me(t), r2 = me(e), i = st(n2.seconds, r2.seconds);
  return 0 !== i ? i : st(n2.nanos, r2.nanos);
}
function ve(t) {
  return ye(t);
}
function ye(t) {
  return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t2) {
    var e2 = me(t2);
    return "time(" + e2.seconds + "," + e2.nanos + ")";
  }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? we(t.bytesValue).toBase64() : "referenceValue" in t ? (n2 = t.referenceValue, F.C(n2).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function(t2) {
    for (var e2 = "[", n3 = true, r2 = 0, i = t2.values || []; r2 < i.length; r2++) {
      n3 ? n3 = false : e2 += ",", e2 += ye(i[r2]);
    }
    return e2 + "]";
  }(t.arrayValue) : "mapValue" in t ? function(t2) {
    for (var e2 = "{", n3 = true, r2 = 0, i = Object.keys(t2.fields || {}).sort(); r2 < i.length; r2++) {
      var o = i[r2];
      n3 ? n3 = false : e2 += ",", e2 += o + ":" + ye(t2.fields[o]);
    }
    return e2 + "}";
  }(t.mapValue) : D();
  var e, n2;
}
function me(t) {
  if (k(!!t), "string" == typeof t) {
    var e = 0, n2 = ce.exec(t);
    if (k(!!n2), n2[1]) {
      var r2 = n2[1];
      r2 = (r2 + "000000000").substr(0, 9), e = Number(r2);
    }
    var i = new Date(t);
    return {
      seconds: Math.floor(i.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: ge(t.seconds),
    nanos: ge(t.nanos)
  };
}
function ge(t) {
  return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}
function we(t) {
  return "string" == typeof t ? ct.fromBase64String(t) : ct.fromUint8Array(t);
}
function be(t, e) {
  return {
    referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.R()
  };
}
function Ie(t) {
  return !!t && "integerValue" in t;
}
function Ee(t) {
  return !!t && "arrayValue" in t;
}
function _e(t) {
  return !!t && "nullValue" in t;
}
function Te(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function Ne(t) {
  return !!t && "mapValue" in t;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Ae = {
  asc: "ASCENDING",
  desc: "DESCENDING"
}, Se = {
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
}, De = function(t, e) {
  this.U = t, this.Qe = e;
};
function ke(t) {
  return {
    integerValue: "" + t
  };
}
function xe(t, e) {
  if (t.Qe) {
    if (isNaN(e))
      return {
        doubleValue: "NaN"
      };
    if (e === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (e === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: bt(e) ? "-0" : e
  };
}
function Le(t, e) {
  return It(e) ? ke(e) : xe(t, e);
}
function Re(t, e) {
  return t.Qe ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Oe(t, e) {
  return t.Qe ? e.toBase64() : e.toUint8Array();
}
function Pe(t, e) {
  return Re(t, e.Z());
}
function Ve(t) {
  return k(!!t), gt.J(function(t2) {
    var e = me(t2);
    return new mt(e.seconds, e.nanos);
  }(t));
}
function Ue(t, e) {
  return function(t2) {
    return new V(["projects", t2.projectId, "databases", t2.database]);
  }(t).child("documents").child(e).R();
}
function Ce(t) {
  var e = V.g(t);
  return k(un(e)), e;
}
function Fe(t, e) {
  return Ue(t.U, e.path);
}
function Me(t, e) {
  var n2 = Ce(e);
  return k(n2.get(1) === t.U.projectId), k(!n2.get(3) && !t.U.database || n2.get(3) === t.U.database), new F(ze(n2));
}
function qe(t, e) {
  return Ue(t.U, e);
}
function je(t) {
  var e = Ce(t);
  return 4 === e.length ? V.P() : ze(e);
}
function Ge(t) {
  return new V(["projects", t.U.projectId, "databases", t.U.database]).R();
}
function ze(t) {
  return k(t.length > 4 && "documents" === t.get(4)), t.u(5);
}
function Be(t, e, n2) {
  return {
    name: Fe(t, e),
    fields: n2.proto.mapValue.fields
  };
}
function Ke(t, e) {
  var n2;
  if (e instanceof Ln)
    n2 = {
      update: Be(t, e.key, e.value)
    };
  else if (e instanceof Cn)
    n2 = {
      delete: Fe(t, e.key)
    };
  else if (e instanceof Rn)
    n2 = {
      update: Be(t, e.key, e.data),
      updateMask: sn(e.We)
    };
  else if (e instanceof Pn)
    n2 = {
      transform: {
        document: Fe(t, e.key),
        fieldTransforms: e.fieldTransforms.map(function(t2) {
          return function(t3, e2) {
            var n3 = e2.transform;
            if (n3 instanceof ln)
              return {
                fieldPath: e2.field.R(),
                setToServerValue: "REQUEST_TIME"
              };
            if (n3 instanceof pn)
              return {
                fieldPath: e2.field.R(),
                appendMissingElements: {
                  values: n3.elements
                }
              };
            if (n3 instanceof vn)
              return {
                fieldPath: e2.field.R(),
                removeAllFromArray: {
                  values: n3.elements
                }
              };
            if (n3 instanceof mn)
              return {
                fieldPath: e2.field.R(),
                increment: n3.je
              };
            throw D();
          }(0, t2);
        })
      }
    };
  else {
    if (!(e instanceof Fn))
      return D();
    n2 = {
      verify: Fe(t, e.key)
    };
  }
  return e.Ge.Ke || (n2.currentDocument = function(t2, e2) {
    return void 0 !== e2.updateTime ? {
      updateTime: Pe(t2, e2.updateTime)
    } : void 0 !== e2.exists ? {
      exists: e2.exists
    } : D();
  }(t, e.Ge)), n2;
}
function We(t, e) {
  var n2 = e.currentDocument ? function(t2) {
    return void 0 !== t2.updateTime ? _n.updateTime(Ve(t2.updateTime)) : void 0 !== t2.exists ? _n.exists(t2.exists) : _n.ze();
  }(e.currentDocument) : _n.ze();
  if (e.update) {
    e.update.name;
    var r2 = Me(t, e.update.name), i = new Mn({
      mapValue: {
        fields: e.update.fields
      }
    });
    if (e.updateMask) {
      var o = function(t2) {
        var e2 = t2.fieldPaths || [];
        return new bn(e2.map(function(t3) {
          return C.S(t3);
        }));
      }(e.updateMask);
      return new Rn(r2, i, o, n2);
    }
    return new Ln(r2, i, n2);
  }
  if (e.delete) {
    var s = Me(t, e.delete);
    return new Cn(s, n2);
  }
  if (e.transform) {
    var u2 = Me(t, e.transform.document), a = e.transform.fieldTransforms.map(function(e2) {
      return function(t2, e3) {
        var n3 = null;
        if ("setToServerValue" in e3)
          k("REQUEST_TIME" === e3.setToServerValue), n3 = new ln();
        else if ("appendMissingElements" in e3) {
          var r3 = e3.appendMissingElements.values || [];
          n3 = new pn(r3);
        } else if ("removeAllFromArray" in e3) {
          var i2 = e3.removeAllFromArray.values || [];
          n3 = new vn(i2);
        } else
          "increment" in e3 ? n3 = new mn(t2, e3.increment) : D();
        var o2 = C.S(e3.fieldPath);
        return new In(o2, n3);
      }(t, e2);
    });
    return k(true === n2.exists), new Pn(u2, a);
  }
  if (e.verify) {
    var c = Me(t, e.verify);
    return new Fn(c, n2);
  }
  return D();
}
function Qe(t, e) {
  return {
    documents: [qe(t, e.path)]
  };
}
function He(t, e) {
  var n2 = {
    structuredQuery: {}
  }, r2 = e.path;
  null !== e.collectionGroup ? (n2.parent = qe(t, r2), n2.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (n2.parent = qe(t, r2.h()), n2.structuredQuery.from = [{
    collectionId: r2._()
  }]);
  var i = function(t2) {
    if (0 !== t2.length) {
      var e2 = t2.map(function(t3) {
        return function(t4) {
          if ("==" === t4.op) {
            if (Te(t4.value))
              return {
                unaryFilter: {
                  field: en(t4.field),
                  op: "IS_NAN"
                }
              };
            if (_e(t4.value))
              return {
                unaryFilter: {
                  field: en(t4.field),
                  op: "IS_NULL"
                }
              };
          } else if ("!=" === t4.op) {
            if (Te(t4.value))
              return {
                unaryFilter: {
                  field: en(t4.field),
                  op: "IS_NOT_NAN"
                }
              };
            if (_e(t4.value))
              return {
                unaryFilter: {
                  field: en(t4.field),
                  op: "IS_NOT_NULL"
                }
              };
          }
          return {
            fieldFilter: {
              field: en(t4.field),
              op: tn(t4.op),
              value: t4.value
            }
          };
        }(t3);
      });
      return 1 === e2.length ? e2[0] : {
        compositeFilter: {
          op: "AND",
          filters: e2
        }
      };
    }
  }(e.filters);
  i && (n2.structuredQuery.where = i);
  var o = function(t2) {
    if (0 !== t2.length)
      return t2.map(function(t3) {
        return function(t4) {
          return {
            field: en(t4.field),
            direction: Ze(t4.dir)
          };
        }(t3);
      });
  }(e.orderBy);
  o && (n2.structuredQuery.orderBy = o);
  var s = function(t2, e2) {
    return t2.Qe || wt(e2) ? e2 : {
      value: e2
    };
  }(t, e.limit);
  return null !== s && (n2.structuredQuery.limit = s), e.startAt && (n2.structuredQuery.startAt = Xe(e.startAt)), e.endAt && (n2.structuredQuery.endAt = Xe(e.endAt)), n2;
}
function Ye(t) {
  var e = je(t.parent), n2 = t.structuredQuery, r2 = n2.from ? n2.from.length : 0, i = null;
  if (r2 > 0) {
    k(1 === r2);
    var o = n2.from[0];
    o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
  }
  var s = [];
  n2.where && (s = $e(n2.where));
  var u2 = [];
  n2.orderBy && (u2 = n2.orderBy.map(function(t2) {
    return function(t3) {
      return new _r(nn(t3.field), function(t4) {
        switch (t4) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      }(t3.direction));
    }(t2);
  }));
  var a = null;
  n2.limit && (a = function(t2) {
    var e2;
    return wt(e2 = "object" == typeof t2 ? t2.value : t2) ? null : e2;
  }(n2.limit));
  var c = null;
  n2.startAt && (c = Je(n2.startAt));
  var h = null;
  return n2.endAt && (h = Je(n2.endAt)), er(Qn(e, i, u2, s, a, "F", c, h));
}
function $e(t) {
  return t ? void 0 !== t.unaryFilter ? [on(t)] : void 0 !== t.fieldFilter ? [rn(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function(t2) {
    return $e(t2);
  }).reduce(function(t2, e) {
    return t2.concat(e);
  }) : D() : [];
}
function Xe(t) {
  return {
    before: t.before,
    values: t.position
  };
}
function Je(t) {
  var e = !!t.before, n2 = t.values || [];
  return new wr(n2, e);
}
function Ze(t) {
  return Ae[t];
}
function tn(t) {
  return Se[t];
}
function en(t) {
  return {
    fieldPath: t.R()
  };
}
function nn(t) {
  return C.S(t.fieldPath);
}
function rn(t) {
  return hr.create(nn(t.fieldFilter.field), function(t2) {
    switch (t2) {
      case "EQUAL":
        return "==";
      case "NOT_EQUAL":
        return "!=";
      case "GREATER_THAN":
        return ">";
      case "GREATER_THAN_OR_EQUAL":
        return ">=";
      case "LESS_THAN":
        return "<";
      case "LESS_THAN_OR_EQUAL":
        return "<=";
      case "ARRAY_CONTAINS":
        return "array-contains";
      case "IN":
        return "in";
      case "NOT_IN":
        return "not-in";
      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any";
      case "OPERATOR_UNSPECIFIED":
      default:
        return D();
    }
  }(t.fieldFilter.op), t.fieldFilter.value);
}
function on(t) {
  switch (t.unaryFilter.op) {
    case "IS_NAN":
      var e = nn(t.unaryFilter.field);
      return hr.create(e, "==", {
        doubleValue: NaN
      });
    case "IS_NULL":
      var n2 = nn(t.unaryFilter.field);
      return hr.create(n2, "==", {
        nullValue: "NULL_VALUE"
      });
    case "IS_NOT_NAN":
      var r2 = nn(t.unaryFilter.field);
      return hr.create(r2, "!=", {
        doubleValue: NaN
      });
    case "IS_NOT_NULL":
      var i = nn(t.unaryFilter.field);
      return hr.create(i, "!=", {
        nullValue: "NULL_VALUE"
      });
    case "OPERATOR_UNSPECIFIED":
    default:
      return D();
  }
}
function sn(t) {
  var e = [];
  return t.fields.forEach(function(t2) {
    return e.push(t2.R());
  }), {
    fieldPaths: e
  };
}
function un(t) {
  return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}
/**
 * @license
 * Copyright 2018 Google LLC
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
var an = function() {
  this.He = void 0;
};
function cn(t, e, n2) {
  return t instanceof ln ? function(t2, e2) {
    var n3 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t2.seconds,
            nanos: t2.nanoseconds
          }
        }
      }
    };
    return e2 && (n3.fields.__previous_value__ = e2), {
      mapValue: n3
    };
  }(n2, e) : t instanceof pn ? dn(t, e) : t instanceof vn ? yn(t, e) : function(t2, e2) {
    var n3 = fn(t2, e2), r2 = gn(n3) + gn(t2.je);
    return Ie(n3) && Ie(t2.je) ? ke(r2) : xe(t2.serializer, r2);
  }(t, e);
}
function hn(t, e, n2) {
  return t instanceof pn ? dn(t, e) : t instanceof vn ? yn(t, e) : n2;
}
function fn(t, e) {
  return t instanceof mn ? Ie(n2 = e) || function(t2) {
    return !!t2 && "doubleValue" in t2;
  }(n2) ? e : {
    integerValue: 0
  } : null;
  var n2;
}
var ln = function(e) {
  function n2() {
    return null !== e && e.apply(this, arguments) || this;
  }
  return __extends$1(n2, e), n2;
}(an), pn = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this) || this).elements = t, n3;
  }
  return __extends$1(n2, e), n2;
}(an);
function dn(t, e) {
  for (var n2 = wn(e), r2 = function(t2) {
    n2.some(function(e2) {
      return fe(e2, t2);
    }) || n2.push(t2);
  }, i = 0, o = t.elements; i < o.length; i++) {
    r2(o[i]);
  }
  return {
    arrayValue: {
      values: n2
    }
  };
}
var vn = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this) || this).elements = t, n3;
  }
  return __extends$1(n2, e), n2;
}(an);
function yn(t, e) {
  for (var n2 = wn(e), r2 = function(t2) {
    n2 = n2.filter(function(e2) {
      return !fe(e2, t2);
    });
  }, i = 0, o = t.elements; i < o.length; i++) {
    r2(o[i]);
  }
  return {
    arrayValue: {
      values: n2
    }
  };
}
var mn = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).serializer = t, r2.je = n3, r2;
  }
  return __extends$1(n2, e), n2;
}(an);
function gn(t) {
  return ge(t.integerValue || t.doubleValue);
}
function wn(t) {
  return Ee(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var bn = function() {
  function t(t2) {
    this.fields = t2, t2.sort(C.i);
  }
  return t.prototype.Ye = function(t2) {
    for (var e = 0, n2 = this.fields; e < n2.length; e++) {
      if (n2[e].T(t2))
        return true;
    }
    return false;
  }, t.prototype.isEqual = function(t2) {
    return ut(this.fields, t2.fields, function(t3, e) {
      return t3.isEqual(e);
    });
  }, t;
}(), In = function(t, e) {
  this.field = t, this.transform = e;
};
var En = function(t, e) {
  this.version = t, this.transformResults = e;
}, _n = function() {
  function t(t2, e) {
    this.updateTime = t2, this.exists = e;
  }
  return t.ze = function() {
    return new t();
  }, t.exists = function(e) {
    return new t(void 0, e);
  }, t.updateTime = function(e) {
    return new t(e);
  }, Object.defineProperty(t.prototype, "Ke", {
    get: function() {
      return void 0 === this.updateTime && void 0 === this.exists;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(t2) {
    return this.exists === t2.exists && (this.updateTime ? !!t2.updateTime && this.updateTime.isEqual(t2.updateTime) : !t2.updateTime);
  }, t;
}();
function Tn(t, e) {
  return void 0 !== t.updateTime ? e instanceof zn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof zn;
}
var Nn = function() {
};
function An(t, e, n2) {
  return t instanceof Ln ? function(t2, e2, n3) {
    return new zn(t2.key, n3.version, t2.value, {
      hasCommittedMutations: true
    });
  }(t, 0, n2) : t instanceof Rn ? function(t2, e2, n3) {
    if (!Tn(t2.Ge, e2))
      return new Kn(t2.key, n3.version);
    var r2 = On(t2, e2);
    return new zn(t2.key, n3.version, r2, {
      hasCommittedMutations: true
    });
  }(t, e, n2) : t instanceof Pn ? function(t2, e2, n3) {
    if (k(null != n3.transformResults), !Tn(t2.Ge, e2))
      return new Kn(t2.key, n3.version);
    var r2 = Vn(t2, e2), i = function(t3, e3, n4) {
      var r3 = [];
      k(t3.length === n4.length);
      for (var i2 = 0; i2 < n4.length; i2++) {
        var o2 = t3[i2], s2 = o2.transform, u2 = null;
        e3 instanceof zn && (u2 = e3.field(o2.field)), r3.push(hn(s2, u2, n4[i2]));
      }
      return r3;
    }(t2.fieldTransforms, e2, n3.transformResults), o = n3.version, s = Un(t2, r2.data(), i);
    return new zn(t2.key, o, s, {
      hasCommittedMutations: true
    });
  }(t, e, n2) : function(t2, e2, n3) {
    return new Bn(t2.key, n3.version, {
      hasCommittedMutations: true
    });
  }(t, 0, n2);
}
function Sn(t, e, n2, r2) {
  return t instanceof Ln ? function(t2, e2) {
    if (!Tn(t2.Ge, e2))
      return e2;
    var n3 = xn(e2);
    return new zn(t2.key, n3, t2.value, {
      Je: true
    });
  }(t, e) : t instanceof Rn ? function(t2, e2) {
    if (!Tn(t2.Ge, e2))
      return e2;
    var n3 = xn(e2), r3 = On(t2, e2);
    return new zn(t2.key, n3, r3, {
      Je: true
    });
  }(t, e) : t instanceof Pn ? function(t2, e2, n3, r3) {
    if (!Tn(t2.Ge, e2))
      return e2;
    var i = Vn(t2, e2), o = function(t3, e3, n4, r4) {
      for (var i2 = [], o2 = 0, s2 = t3; o2 < s2.length; o2++) {
        var u2 = s2[o2], a = u2.transform, c = null;
        n4 instanceof zn && (c = n4.field(u2.field)), null === c && r4 instanceof zn && (c = r4.field(u2.field)), i2.push(cn(a, c, e3));
      }
      return i2;
    }(t2.fieldTransforms, n3, e2, r3), s = Un(t2, i.data(), o);
    return new zn(t2.key, i.version, s, {
      Je: true
    });
  }(t, e, r2, n2) : function(t2, e2) {
    return Tn(t2.Ge, e2) ? new Bn(t2.key, gt.min()) : e2;
  }(t, e);
}
function Dn(t, e) {
  return t instanceof Pn ? function(t2, e2) {
    for (var n2 = null, r2 = 0, i = t2.fieldTransforms; r2 < i.length; r2++) {
      var o = i[r2], s = e2 instanceof zn ? e2.field(o.field) : void 0, u2 = fn(o.transform, s || null);
      null != u2 && (n2 = null == n2 ? new qn().set(o.field, u2) : n2.set(o.field, u2));
    }
    return n2 ? n2.Xe() : null;
  }(t, e) : null;
}
function kn(t, e) {
  return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ge.isEqual(e.Ge) && (0 === t.type ? t.value.isEqual(e.value) : 1 === t.type ? t.data.isEqual(e.data) && t.We.isEqual(e.We) : 2 !== t.type || ut(t.fieldTransforms, t.fieldTransforms, function(t2, e2) {
    return function(t3, e3) {
      return t3.field.isEqual(e3.field) && function(t4, e4) {
        return t4 instanceof pn && e4 instanceof pn || t4 instanceof vn && e4 instanceof vn ? ut(t4.elements, e4.elements, fe) : t4 instanceof mn && e4 instanceof mn ? fe(t4.je, e4.je) : t4 instanceof ln && e4 instanceof ln;
      }(t3.transform, e3.transform);
    }(t2, e2);
  }));
}
function xn(t) {
  return t instanceof zn ? t.version : gt.min();
}
var Ln = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this) || this).key = t, i.value = n3, i.Ge = r2, i.type = 0, i;
  }
  return __extends$1(n2, e), n2;
}(Nn), Rn = function(e) {
  function n2(t, n3, r2, i) {
    var o = this;
    return (o = e.call(this) || this).key = t, o.data = n3, o.We = r2, o.Ge = i, o.type = 1, o;
  }
  return __extends$1(n2, e), n2;
}(Nn);
function On(t, e) {
  return function(t2, e2) {
    var n2 = new qn(e2);
    return t2.We.fields.forEach(function(e3) {
      if (!e3.m()) {
        var r2 = t2.data.field(e3);
        null !== r2 ? n2.set(e3, r2) : n2.delete(e3);
      }
    }), n2.Xe();
  }(t, e instanceof zn ? e.data() : Mn.empty());
}
var Pn = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).key = t, r2.fieldTransforms = n3, r2.type = 2, r2.Ge = _n.exists(true), r2;
  }
  return __extends$1(n2, e), n2;
}(Nn);
function Vn(t, e) {
  return e;
}
function Un(t, e, n2) {
  for (var r2 = new qn(e), i = 0; i < t.fieldTransforms.length; i++) {
    var o = t.fieldTransforms[i];
    r2.set(o.field, n2[i]);
  }
  return r2.Xe();
}
var Cn = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).key = t, r2.Ge = n3, r2.type = 3, r2;
  }
  return __extends$1(n2, e), n2;
}(Nn), Fn = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).key = t, r2.Ge = n3, r2.type = 4, r2;
  }
  return __extends$1(n2, e), n2;
}(Nn), Mn = function() {
  function t(t2) {
    this.proto = t2;
  }
  return t.empty = function() {
    return new t({
      mapValue: {}
    });
  }, t.prototype.field = function(t2) {
    if (t2.m())
      return this.proto;
    for (var e = this.proto, n2 = 0; n2 < t2.length - 1; ++n2) {
      if (!e.mapValue.fields)
        return null;
      if (!Ne(e = e.mapValue.fields[t2.get(n2)]))
        return null;
    }
    return (e = (e.mapValue.fields || {})[t2._()]) || null;
  }, t.prototype.isEqual = function(t2) {
    return fe(this.proto, t2.proto);
  }, t;
}(), qn = function() {
  function t(t2) {
    void 0 === t2 && (t2 = Mn.empty()), this.Ze = t2, this.tn = /* @__PURE__ */ new Map();
  }
  return t.prototype.set = function(t2, e) {
    return this.en(t2, e), this;
  }, t.prototype.delete = function(t2) {
    return this.en(t2, null), this;
  }, t.prototype.en = function(t2, e) {
    for (var n2 = this.tn, r2 = 0; r2 < t2.length - 1; ++r2) {
      var i = t2.get(r2), o = n2.get(i);
      o instanceof Map ? n2 = o : o && 10 === he(o) ? (o = new Map(Object.entries(o.mapValue.fields || {})), n2.set(i, o), n2 = o) : (o = /* @__PURE__ */ new Map(), n2.set(i, o), n2 = o);
    }
    n2.set(t2._(), e);
  }, t.prototype.Xe = function() {
    var t2 = this.nn(C.P(), this.tn);
    return null != t2 ? new Mn(t2) : this.Ze;
  }, t.prototype.nn = function(t2, e) {
    var n2 = this, r2 = false, i = this.Ze.field(t2), o = Ne(i) ? Object.assign({}, i.mapValue.fields) : {};
    return e.forEach(function(e2, i2) {
      if (e2 instanceof Map) {
        var s = n2.nn(t2.child(i2), e2);
        null != s && (o[i2] = s, r2 = true);
      } else
        null !== e2 ? (o[i2] = e2, r2 = true) : o.hasOwnProperty(i2) && (delete o[i2], r2 = true);
    }), r2 ? {
      mapValue: {
        fields: o
      }
    } : null;
  }, t;
}();
function jn(t) {
  var e = [];
  return R(t.fields || {}, function(t2, n2) {
    var r2 = new C([t2]);
    if (Ne(n2)) {
      var i = jn(n2.mapValue).fields;
      if (0 === i.length)
        e.push(r2);
      else
        for (var o = 0, s = i; o < s.length; o++) {
          var u2 = s[o];
          e.push(r2.child(u2));
        }
    } else
      e.push(r2);
  }), new bn(e);
}
var Gn = function(t, e) {
  this.key = t, this.version = e;
}, zn = function(e) {
  function n2(t, n3, r2, i) {
    var o = this;
    return (o = e.call(this, t, n3) || this).sn = r2, o.Je = !!i.Je, o.hasCommittedMutations = !!i.hasCommittedMutations, o;
  }
  return __extends$1(n2, e), n2.prototype.field = function(t) {
    return this.sn.field(t);
  }, n2.prototype.data = function() {
    return this.sn;
  }, n2.prototype.rn = function() {
    return this.sn.proto;
  }, n2.prototype.isEqual = function(t) {
    return t instanceof n2 && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Je === t.Je && this.hasCommittedMutations === t.hasCommittedMutations && this.sn.isEqual(t.sn);
  }, n2.prototype.toString = function() {
    return "Document(" + this.key + ", " + this.version + ", " + this.sn.toString() + ", {hasLocalMutations: " + this.Je + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
  }, Object.defineProperty(n2.prototype, "hasPendingWrites", {
    get: function() {
      return this.Je || this.hasCommittedMutations;
    },
    enumerable: false,
    configurable: true
  }), n2;
}(Gn), Bn = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this, t, n3) || this).hasCommittedMutations = !(!r2 || !r2.hasCommittedMutations), i;
  }
  return __extends$1(n2, e), n2.prototype.toString = function() {
    return "NoDocument(" + this.key + ", " + this.version + ")";
  }, Object.defineProperty(n2.prototype, "hasPendingWrites", {
    get: function() {
      return this.hasCommittedMutations;
    },
    enumerable: false,
    configurable: true
  }), n2.prototype.isEqual = function(t) {
    return t instanceof n2 && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
  }, n2;
}(Gn), Kn = function(e) {
  function n2() {
    return null !== e && e.apply(this, arguments) || this;
  }
  return __extends$1(n2, e), n2.prototype.toString = function() {
    return "UnknownDocument(" + this.key + ", " + this.version + ")";
  }, Object.defineProperty(n2.prototype, "hasPendingWrites", {
    get: function() {
      return true;
    },
    enumerable: false,
    configurable: true
  }), n2.prototype.isEqual = function(t) {
    return t instanceof n2 && t.version.isEqual(this.version) && t.key.isEqual(this.key);
  }, n2;
}(Gn), Wn = function(t, e, n2, r2, i, o, s, u2) {
  void 0 === e && (e = null), void 0 === n2 && (n2 = []), void 0 === r2 && (r2 = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u2 && (u2 = null), this.path = t, this.collectionGroup = e, this.on = n2, this.filters = r2, this.limit = i, this.an = o, this.startAt = s, this.endAt = u2, this.cn = null, this.un = null, this.startAt, this.endAt;
};
function Qn(t, e, n2, r2, i, o, s, u2) {
  return new Wn(t, e, n2, r2, i, o, s, u2);
}
function Hn(t) {
  return new Wn(t);
}
function Yn(t) {
  return !wt(t.limit) && "F" === t.an;
}
function $n(t) {
  return !wt(t.limit) && "L" === t.an;
}
function Xn(t) {
  return t.on.length > 0 ? t.on[0].field : null;
}
function Jn(t) {
  for (var e = 0, n2 = t.filters; e < n2.length; e++) {
    var r2 = n2[e];
    if (r2.hn())
      return r2.field;
  }
  return null;
}
function Zn(t) {
  return null !== t.collectionGroup;
}
function tr(t) {
  var e = x(t);
  if (null === e.cn) {
    e.cn = [];
    var n2 = Jn(e), r2 = Xn(e);
    if (null !== n2 && null === r2)
      n2.p() || e.cn.push(new _r(n2)), e.cn.push(new _r(C.v(), "asc"));
    else {
      for (var i = false, o = 0, s = e.on; o < s.length; o++) {
        var u2 = s[o];
        e.cn.push(u2), u2.field.p() && (i = true);
      }
      if (!i) {
        var a = e.on.length > 0 ? e.on[e.on.length - 1].dir : "asc";
        e.cn.push(new _r(C.v(), a));
      }
    }
  }
  return e.cn;
}
function er(t) {
  var e = x(t);
  if (!e.un)
    if ("F" === e.an)
      e.un = _t(e.path, e.collectionGroup, tr(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      for (var n2 = [], r2 = 0, i = tr(e); r2 < i.length; r2++) {
        var o = i[r2], s = "desc" === o.dir ? "asc" : "desc";
        n2.push(new _r(o.field, s));
      }
      var u2 = e.endAt ? new wr(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new wr(e.startAt.position, !e.startAt.before) : null;
      e.un = _t(e.path, e.collectionGroup, n2, e.filters, e.limit, u2, a);
    }
  return e.un;
}
function nr(t, e, n2) {
  return new Wn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), e, n2, t.startAt, t.endAt);
}
function rr(t, e) {
  return new Wn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), t.limit, t.an, e, t.endAt);
}
function ir(t, e) {
  return new Wn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), t.limit, t.an, t.startAt, e);
}
function or(t, e) {
  return Nt(er(t), er(e)) && t.an === e.an;
}
function sr(t) {
  return Tt(er(t)) + "|lt:" + t.an;
}
function ur(t) {
  return "Query(target=" + function(t2) {
    var e = t2.path.R();
    return null !== t2.collectionGroup && (e += " collectionGroup=" + t2.collectionGroup), t2.filters.length > 0 && (e += ", filters: [" + t2.filters.map(function(t3) {
      return (e2 = t3).field.R() + " " + e2.op + " " + ve(e2.value);
      var e2;
    }).join(", ") + "]"), wt(t2.limit) || (e += ", limit: " + t2.limit), t2.orderBy.length > 0 && (e += ", orderBy: [" + t2.orderBy.map(function(t3) {
      return (e2 = t3).field.R() + " (" + e2.dir + ")";
      var e2;
    }).join(", ") + "]"), t2.startAt && (e += ", startAt: " + br(t2.startAt)), t2.endAt && (e += ", endAt: " + br(t2.endAt)), "Target(" + e + ")";
  }(er(t)) + "; limitType=" + t.an + ")";
}
function ar(t, e) {
  return function(t2, e2) {
    var n2 = e2.key.path;
    return null !== t2.collectionGroup ? e2.key.N(t2.collectionGroup) && t2.path.T(n2) : F.F(t2.path) ? t2.path.isEqual(n2) : t2.path.I(n2);
  }(t, e) && function(t2, e2) {
    for (var n2 = 0, r2 = t2.on; n2 < r2.length; n2++) {
      var i = r2[n2];
      if (!i.field.p() && null === e2.field(i.field))
        return false;
    }
    return true;
  }(t, e) && function(t2, e2) {
    for (var n2 = 0, r2 = t2.filters; n2 < r2.length; n2++) {
      if (!r2[n2].matches(e2))
        return false;
    }
    return true;
  }(t, e) && function(t2, e2) {
    return !(t2.startAt && !Ir(t2.startAt, tr(t2), e2)) && (!t2.endAt || !Ir(t2.endAt, tr(t2), e2));
  }(t, e);
}
function cr(t) {
  return function(e, n2) {
    for (var r2 = false, i = 0, o = tr(t); i < o.length; i++) {
      var s = o[i], u2 = Tr(s, e, n2);
      if (0 !== u2)
        return u2;
      r2 = r2 || s.field.p();
    }
    return 0;
  };
}
var hr = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this) || this).field = t, i.op = n3, i.value = r2, i;
  }
  return __extends$1(n2, e), n2.create = function(t, e2, r2) {
    if (t.p())
      return "in" === e2 || "not-in" === e2 ? this.ln(t, e2, r2) : new fr(t, e2, r2);
    if (_e(r2)) {
      if ("==" !== e2 && "!=" !== e2)
        throw new I(b.INVALID_ARGUMENT, "Invalid query. Null only supports '==' and '!=' comparisons.");
      return new n2(t, e2, r2);
    }
    if (Te(r2)) {
      if ("==" !== e2 && "!=" !== e2)
        throw new I(b.INVALID_ARGUMENT, "Invalid query. NaN only supports '==' and '!=' comparisons.");
      return new n2(t, e2, r2);
    }
    return "array-contains" === e2 ? new vr(t, r2) : "in" === e2 ? new yr(t, r2) : "not-in" === e2 ? new mr(t, r2) : "array-contains-any" === e2 ? new gr(t, r2) : new n2(t, e2, r2);
  }, n2.ln = function(t, e2, n3) {
    return "in" === e2 ? new lr(t, n3) : new pr(t, n3);
  }, n2.prototype.matches = function(t) {
    var e2 = t.field(this.field);
    return "!=" === this.op ? null !== e2 && this._n(pe(e2, this.value)) : null !== e2 && he(this.value) === he(e2) && this._n(pe(e2, this.value));
  }, n2.prototype._n = function(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return 0 === t;
      case "!=":
        return 0 !== t;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return D();
    }
  }, n2.prototype.hn = function() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }, n2;
}(function() {
});
var fr = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this, t, n3, r2) || this).key = F.C(r2.referenceValue), i;
  }
  return __extends$1(n2, e), n2.prototype.matches = function(t) {
    var e2 = F.i(t.key, this.key);
    return this._n(e2);
  }, n2;
}(hr), lr = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, t, "in", n3) || this).keys = dr("in", n3), r2;
  }
  return __extends$1(n2, e), n2.prototype.matches = function(t) {
    return this.keys.some(function(e2) {
      return e2.isEqual(t.key);
    });
  }, n2;
}(hr), pr = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, t, "not-in", n3) || this).keys = dr("not-in", n3), r2;
  }
  return __extends$1(n2, e), n2.prototype.matches = function(t) {
    return !this.keys.some(function(e2) {
      return e2.isEqual(t.key);
    });
  }, n2;
}(hr);
function dr(t, e) {
  var n2;
  return ((null === (n2 = e.arrayValue) || void 0 === n2 ? void 0 : n2.values) || []).map(function(t2) {
    return F.C(t2.referenceValue);
  });
}
var vr = function(e) {
  function n2(t, n3) {
    return e.call(this, t, "array-contains", n3) || this;
  }
  return __extends$1(n2, e), n2.prototype.matches = function(t) {
    var e2 = t.field(this.field);
    return Ee(e2) && le(e2.arrayValue, this.value);
  }, n2;
}(hr), yr = function(e) {
  function n2(t, n3) {
    return e.call(this, t, "in", n3) || this;
  }
  return __extends$1(n2, e), n2.prototype.matches = function(t) {
    var e2 = t.field(this.field);
    return null !== e2 && le(this.value.arrayValue, e2);
  }, n2;
}(hr), mr = function(e) {
  function n2(t, n3) {
    return e.call(this, t, "not-in", n3) || this;
  }
  return __extends$1(n2, e), n2.prototype.matches = function(t) {
    if (le(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return false;
    var e2 = t.field(this.field);
    return null !== e2 && !le(this.value.arrayValue, e2);
  }, n2;
}(hr), gr = function(e) {
  function n2(t, n3) {
    return e.call(this, t, "array-contains-any", n3) || this;
  }
  return __extends$1(n2, e), n2.prototype.matches = function(t) {
    var e2 = this, n3 = t.field(this.field);
    return !(!Ee(n3) || !n3.arrayValue.values) && n3.arrayValue.values.some(function(t2) {
      return le(e2.value.arrayValue, t2);
    });
  }, n2;
}(hr), wr = function(t, e) {
  this.position = t, this.before = e;
};
function br(t) {
  return (t.before ? "b" : "a") + ":" + t.position.map(function(t2) {
    return ve(t2);
  }).join(",");
}
function Ir(t, e, n2) {
  for (var r2 = 0, i = 0; i < t.position.length; i++) {
    var o = e[i], s = t.position[i];
    if (r2 = o.field.p() ? F.i(F.C(s.referenceValue), n2.key) : pe(s, n2.field(o.field)), "desc" === o.dir && (r2 *= -1), 0 !== r2)
      break;
  }
  return t.before ? r2 <= 0 : r2 < 0;
}
function Er(t, e) {
  if (null === t)
    return null === e;
  if (null === e)
    return false;
  if (t.before !== e.before || t.position.length !== e.position.length)
    return false;
  for (var n2 = 0; n2 < t.position.length; n2++)
    if (!fe(t.position[n2], e.position[n2]))
      return false;
  return true;
}
var _r = function(t, e) {
  void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};
function Tr(t, e, n2) {
  var r2 = t.field.p() ? F.i(e.key, n2.key) : function(t2, e2, n3) {
    var r3 = e2.field(t2), i = n3.field(t2);
    return null !== r3 && null !== i ? pe(r3, i) : D();
  }(t.field, e, n2);
  switch (t.dir) {
    case "asc":
      return r2;
    case "desc":
      return -1 * r2;
    default:
      return D();
  }
}
function Nr(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Ar = function() {
  var t = this;
  this.promise = new Promise(function(e, n2) {
    t.resolve = e, t.reject = n2;
  });
}, Sr = function() {
  function t(t2, e, n2, r2, i) {
    void 0 === n2 && (n2 = 1e3), void 0 === r2 && (r2 = 1.5), void 0 === i && (i = 6e4), this.fn = t2, this.dn = e, this.wn = n2, this.mn = r2, this.Tn = i, this.En = 0, this.In = null, this.An = Date.now(), this.reset();
  }
  return t.prototype.reset = function() {
    this.En = 0;
  }, t.prototype.Rn = function() {
    this.En = this.Tn;
  }, t.prototype.gn = function(t2) {
    var e = this;
    this.cancel();
    var n2 = Math.floor(this.En + this.Pn()), r2 = Math.max(0, Date.now() - this.An), i = Math.max(0, n2 - r2);
    i > 0 && T("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.En + " ms, delay with jitter: " + n2 + " ms, last attempt: " + r2 + " ms ago)"), this.In = this.fn.yn(this.dn, i, function() {
      return e.An = Date.now(), t2();
    }), this.En *= this.mn, this.En < this.wn && (this.En = this.wn), this.En > this.Tn && (this.En = this.Tn);
  }, t.prototype.Vn = function() {
    null !== this.In && (this.In.pn(), this.In = null);
  }, t.prototype.cancel = function() {
    null !== this.In && (this.In.cancel(), this.In = null);
  }, t.prototype.Pn = function() {
    return (Math.random() - 0.5) * this.En;
  }, t;
}(), Dr = function() {
  function t(t2) {
    var e = this;
    this.bn = null, this.vn = null, this.result = void 0, this.error = void 0, this.Sn = false, this.Dn = false, t2(function(t3) {
      e.Sn = true, e.result = t3, e.bn && e.bn(t3);
    }, function(t3) {
      e.Sn = true, e.error = t3, e.vn && e.vn(t3);
    });
  }
  return t.prototype.catch = function(t2) {
    return this.next(void 0, t2);
  }, t.prototype.next = function(e, n2) {
    var r2 = this;
    return this.Dn && D(), this.Dn = true, this.Sn ? this.error ? this.Cn(n2, this.error) : this.Nn(e, this.result) : new t(function(t2, i) {
      r2.bn = function(n3) {
        r2.Nn(e, n3).next(t2, i);
      }, r2.vn = function(e2) {
        r2.Cn(n2, e2).next(t2, i);
      };
    });
  }, t.prototype.Fn = function() {
    var t2 = this;
    return new Promise(function(e, n2) {
      t2.next(e, n2);
    });
  }, t.prototype.xn = function(e) {
    try {
      var n2 = e();
      return n2 instanceof t ? n2 : t.resolve(n2);
    } catch (e2) {
      return t.reject(e2);
    }
  }, t.prototype.Nn = function(e, n2) {
    return e ? this.xn(function() {
      return e(n2);
    }) : t.resolve(n2);
  }, t.prototype.Cn = function(e, n2) {
    return e ? this.xn(function() {
      return e(n2);
    }) : t.reject(n2);
  }, t.resolve = function(e) {
    return new t(function(t2, n2) {
      t2(e);
    });
  }, t.reject = function(e) {
    return new t(function(t2, n2) {
      n2(e);
    });
  }, t.$n = function(e) {
    return new t(function(t2, n2) {
      var r2 = 0, i = 0, o = false;
      e.forEach(function(e2) {
        ++r2, e2.next(function() {
          ++i, o && i === r2 && t2();
        }, function(t3) {
          return n2(t3);
        });
      }), o = true, i === r2 && t2();
    });
  }, t.kn = function(e) {
    for (var n2 = t.resolve(false), r2 = function(e2) {
      n2 = n2.next(function(n3) {
        return n3 ? t.resolve(n3) : e2();
      });
    }, i = 0, o = e; i < o.length; i++) {
      r2(o[i]);
    }
    return n2;
  }, t.forEach = function(t2, e) {
    var n2 = this, r2 = [];
    return t2.forEach(function(t3, i) {
      r2.push(e.call(n2, t3, i));
    }), this.$n(r2);
  }, t;
}(), kr = function() {
  function t(e, n2, r2) {
    this.name = e, this.version = n2, this.Mn = r2, 12.2 === t.On(getUA()) && N("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  return t.delete = function(t2) {
    return T("SimpleDb", "Removing database:", t2), Vr(window.indexedDB.deleteDatabase(t2)).Fn();
  }, t.Ln = function() {
    if ("undefined" == typeof indexedDB)
      return false;
    if (t.Bn())
      return true;
    var e = getUA(), n2 = t.On(e), r2 = 0 < n2 && n2 < 10, i = t.qn(e), o = 0 < i && i < 4.5;
    return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r2 || o);
  }, t.Bn = function() {
    var t2;
    return "undefined" != typeof process && "YES" === (null === (t2 = process.env) || void 0 === t2 ? void 0 : t2.Un);
  }, t.Qn = function(t2, e) {
    return t2.store(e);
  }, t.On = function(t2) {
    var e = t2.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n2 = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n2);
  }, t.qn = function(t2) {
    var e = t2.match(/Android ([\d.]+)/i), n2 = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n2);
  }, t.prototype.Wn = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      var e, r2 = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.db ? [3, 2] : (T("SimpleDb", "Opening database:", this.name), e = this, [4, new Promise(function(e2, n3) {
              var i = indexedDB.open(r2.name, r2.version);
              i.onsuccess = function(t3) {
                var n4 = t3.target.result;
                e2(n4);
              }, i.onblocked = function() {
                n3(new Lr(t2, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
              }, i.onerror = function(e3) {
                var r3 = e3.target.error;
                "VersionError" === r3.name ? n3(new I(b.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n3(new Lr(t2, r3));
              }, i.onupgradeneeded = function(t3) {
                T("SimpleDb", 'Database "' + r2.name + '" requires upgrade from version:', t3.oldVersion);
                var e3 = t3.target.result;
                r2.Mn.createOrUpgrade(e3, i.transaction, t3.oldVersion, r2.version).next(function() {
                  T("SimpleDb", "Database upgrade to version " + r2.version + " complete");
                });
              };
            })]);
          case 1:
            e.db = n2.sent(), n2.label = 2;
          case 2:
            return [2, (this.jn && (this.db.onversionchange = function(t3) {
              return r2.jn(t3);
            }), this.db)];
        }
      });
    });
  }, t.prototype.Kn = function(t2) {
    this.jn = t2, this.db && (this.db.onversionchange = function(e) {
      return t2(e);
    });
  }, t.prototype.runTransaction = function(t2, r2, i, o) {
    return __awaiter(this, void 0, void 0, function() {
      var e, s, u2, a, c;
      return __generator(this, function(h) {
        switch (h.label) {
          case 0:
            e = "readonly" === r2, s = 0, u2 = function() {
              var r3, u3, c2, h2, f;
              return __generator(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    ++s, n2.label = 1;
                  case 1:
                    return n2.trys.push([1, 4, , 5]), [4, a.Wn(t2)];
                  case 2:
                    return a.db = n2.sent(), r3 = Or.open(a.db, t2, e ? "readonly" : "readwrite", i), u3 = o(r3).catch(function(t3) {
                      return r3.abort(t3), Dr.reject(t3);
                    }).Fn(), c2 = {}, u3.catch(function() {
                    }), [4, r3.Gn];
                  case 3:
                    return [2, (c2.value = (n2.sent(), u3), c2)];
                  case 4:
                    return h2 = n2.sent(), f = "FirebaseError" !== h2.name && s < 3, T("SimpleDb", "Transaction failed with error:", h2.message, "Retrying:", f), a.close(), f ? [3, 5] : [2, {
                      value: Promise.reject(h2)
                    }];
                  case 5:
                    return [2];
                }
              });
            }, a = this, h.label = 1;
          case 1:
            return [5, u2()];
          case 2:
            if ("object" == typeof (c = h.sent()))
              return [2, c.value];
            h.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, t.prototype.close = function() {
    this.db && this.db.close(), this.db = void 0;
  }, t;
}(), xr = function() {
  function t(t2) {
    this.zn = t2, this.Hn = false, this.Yn = null;
  }
  return Object.defineProperty(t.prototype, "Sn", {
    get: function() {
      return this.Hn;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "Jn", {
    get: function() {
      return this.Yn;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "cursor", {
    set: function(t2) {
      this.zn = t2;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.done = function() {
    this.Hn = true;
  }, t.prototype.Xn = function(t2) {
    this.Yn = t2;
  }, t.prototype.delete = function() {
    return Vr(this.zn.delete());
  }, t;
}(), Lr = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, b.UNAVAILABLE, "IndexedDB transaction '" + t + "' failed: " + n3) || this).name = "IndexedDbTransactionError", r2;
  }
  return __extends$1(n2, e), n2;
}(I);
/**
 * @license
 * Copyright 2017 Google LLC
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
function Rr(t) {
  return "IndexedDbTransactionError" === t.name;
}
var Or = function() {
  function t(t2, e) {
    var n2 = this;
    this.action = t2, this.transaction = e, this.aborted = false, this.Zn = new Ar(), this.transaction.oncomplete = function() {
      n2.Zn.resolve();
    }, this.transaction.onabort = function() {
      e.error ? n2.Zn.reject(new Lr(t2, e.error)) : n2.Zn.resolve();
    }, this.transaction.onerror = function(e2) {
      var r2 = Cr(e2.target.error);
      n2.Zn.reject(new Lr(t2, r2));
    };
  }
  return t.open = function(e, n2, r2, i) {
    try {
      return new t(n2, e.transaction(i, r2));
    } catch (e2) {
      throw new Lr(n2, e2);
    }
  }, Object.defineProperty(t.prototype, "Gn", {
    get: function() {
      return this.Zn.promise;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.abort = function(t2) {
    t2 && this.Zn.reject(t2), this.aborted || (T("SimpleDb", "Aborting transaction:", t2 ? t2.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
  }, t.prototype.store = function(t2) {
    var e = this.transaction.objectStore(t2);
    return new Pr(e);
  }, t;
}(), Pr = function() {
  function t(t2) {
    this.store = t2;
  }
  return t.prototype.put = function(t2, e) {
    var n2;
    return void 0 !== e ? (T("SimpleDb", "PUT", this.store.name, t2, e), n2 = this.store.put(e, t2)) : (T("SimpleDb", "PUT", this.store.name, "<auto-key>", t2), n2 = this.store.put(t2)), Vr(n2);
  }, t.prototype.add = function(t2) {
    return T("SimpleDb", "ADD", this.store.name, t2, t2), Vr(this.store.add(t2));
  }, t.prototype.get = function(t2) {
    var e = this;
    return Vr(this.store.get(t2)).next(function(n2) {
      return void 0 === n2 && (n2 = null), T("SimpleDb", "GET", e.store.name, t2, n2), n2;
    });
  }, t.prototype.delete = function(t2) {
    return T("SimpleDb", "DELETE", this.store.name, t2), Vr(this.store.delete(t2));
  }, t.prototype.count = function() {
    return T("SimpleDb", "COUNT", this.store.name), Vr(this.store.count());
  }, t.prototype.ts = function(t2, e) {
    var n2 = this.cursor(this.options(t2, e)), r2 = [];
    return this.es(n2, function(t3, e2) {
      r2.push(e2);
    }).next(function() {
      return r2;
    });
  }, t.prototype.ns = function(t2, e) {
    T("SimpleDb", "DELETE ALL", this.store.name);
    var n2 = this.options(t2, e);
    n2.ss = false;
    var r2 = this.cursor(n2);
    return this.es(r2, function(t3, e2, n3) {
      return n3.delete();
    });
  }, t.prototype.rs = function(t2, e) {
    var n2;
    e ? n2 = t2 : (n2 = {}, e = t2);
    var r2 = this.cursor(n2);
    return this.es(r2, e);
  }, t.prototype.os = function(t2) {
    var e = this.cursor({});
    return new Dr(function(n2, r2) {
      e.onerror = function(t3) {
        var e2 = Cr(t3.target.error);
        r2(e2);
      }, e.onsuccess = function(e2) {
        var r3 = e2.target.result;
        r3 ? t2(r3.primaryKey, r3.value).next(function(t3) {
          t3 ? r3.continue() : n2();
        }) : n2();
      };
    });
  }, t.prototype.es = function(t2, e) {
    var n2 = [];
    return new Dr(function(r2, i) {
      t2.onerror = function(t3) {
        i(t3.target.error);
      }, t2.onsuccess = function(t3) {
        var i2 = t3.target.result;
        if (i2) {
          var o = new xr(i2), s = e(i2.primaryKey, i2.value, o);
          if (s instanceof Dr) {
            var u2 = s.catch(function(t4) {
              return o.done(), Dr.reject(t4);
            });
            n2.push(u2);
          }
          o.Sn ? r2() : null === o.Jn ? i2.continue() : i2.continue(o.Jn);
        } else
          r2();
      };
    }).next(function() {
      return Dr.$n(n2);
    });
  }, t.prototype.options = function(t2, e) {
    var n2 = void 0;
    return void 0 !== t2 && ("string" == typeof t2 ? n2 = t2 : e = t2), {
      index: n2,
      range: e
    };
  }, t.prototype.cursor = function(t2) {
    var e = "next";
    if (t2.reverse && (e = "prev"), t2.index) {
      var n2 = this.store.index(t2.index);
      return t2.ss ? n2.openKeyCursor(t2.range, e) : n2.openCursor(t2.range, e);
    }
    return this.store.openCursor(t2.range, e);
  }, t;
}();
function Vr(t) {
  return new Dr(function(e, n2) {
    t.onsuccess = function(t2) {
      var n3 = t2.target.result;
      e(n3);
    }, t.onerror = function(t2) {
      var e2 = Cr(t2.target.error);
      n2(e2);
    };
  });
}
var Ur = false;
function Cr(t) {
  var e = kr.On(getUA());
  if (e >= 12.2 && e < 13) {
    var n2 = "An internal error was encountered in the Indexed Database server";
    if (t.message.indexOf(n2) >= 0) {
      var r2 = new I("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n2 + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
      return Ur || (Ur = true, setTimeout(function() {
        throw r2;
      }, 0)), r2;
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Fr() {
  return "undefined" != typeof window ? window : null;
}
function Mr() {
  return "undefined" != typeof document ? document : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var qr = function() {
  function t(t2, e, n2, r2, i) {
    this.cs = t2, this.dn = e, this.us = n2, this.op = r2, this.hs = i, this.ls = new Ar(), this.then = this.ls.promise.then.bind(this.ls.promise), this.ls.promise.catch(function(t3) {
    });
  }
  return t._s = function(e, n2, r2, i, o) {
    var s = new t(e, n2, Date.now() + r2, i, o);
    return s.start(r2), s;
  }, t.prototype.start = function(t2) {
    var e = this;
    this.fs = setTimeout(function() {
      return e.ds();
    }, t2);
  }, t.prototype.pn = function() {
    return this.ds();
  }, t.prototype.cancel = function(t2) {
    null !== this.fs && (this.clearTimeout(), this.ls.reject(new I(b.CANCELLED, "Operation cancelled" + (t2 ? ": " + t2 : ""))));
  }, t.prototype.ds = function() {
    var t2 = this;
    this.cs.ws(function() {
      return null !== t2.fs ? (t2.clearTimeout(), t2.op().then(function(e) {
        return t2.ls.resolve(e);
      })) : Promise.resolve();
    });
  }, t.prototype.clearTimeout = function() {
    null !== this.fs && (this.hs(this), clearTimeout(this.fs), this.fs = null);
  }, t;
}(), jr = function() {
  function t() {
    var t2 = this;
    this.Ts = Promise.resolve(), this.Es = [], this.Is = false, this.As = [], this.Rs = null, this.gs = false, this.Ps = [], this.ys = new Sr(this, "async_queue_retry"), this.Vs = function() {
      var e2 = Mr();
      e2 && T("AsyncQueue", "Visibility state changed to  ", e2.visibilityState), t2.ys.Vn();
    };
    var e = Mr();
    e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Vs);
  }
  return Object.defineProperty(t.prototype, "ps", {
    get: function() {
      return this.Is;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.ws = function(t2) {
    this.enqueue(t2);
  }, t.prototype.bs = function(t2) {
    this.vs(), this.Ss(t2);
  }, t.prototype.Ds = function() {
    if (!this.Is) {
      this.Is = true;
      var t2 = Mr();
      t2 && "function" == typeof t2.removeEventListener && t2.removeEventListener("visibilitychange", this.Vs);
    }
  }, t.prototype.enqueue = function(t2) {
    return this.vs(), this.Is ? new Promise(function(t3) {
    }) : this.Ss(t2);
  }, t.prototype.Cs = function(t2) {
    var e = this;
    this.ws(function() {
      return e.Es.push(t2), e.Ns();
    });
  }, t.prototype.Ns = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            if (0 === this.Es.length)
              return [3, 5];
            n2.label = 1;
          case 1:
            return n2.trys.push([1, 3, , 4]), [4, this.Es[0]()];
          case 2:
            return n2.sent(), this.Es.shift(), this.ys.reset(), [3, 4];
          case 3:
            if (!Rr(t2 = n2.sent()))
              throw t2;
            return T("AsyncQueue", "Operation failed with retryable error: " + t2), [3, 4];
          case 4:
            this.Es.length > 0 && this.ys.gn(function() {
              return e.Ns();
            }), n2.label = 5;
          case 5:
            return [2];
        }
      });
    });
  }, t.prototype.Ss = function(t2) {
    var e = this, n2 = this.Ts.then(function() {
      return e.gs = true, t2().catch(function(t3) {
        throw e.Rs = t3, e.gs = false, N("INTERNAL UNHANDLED ERROR: ", function(t4) {
          var e2 = t4.message || "";
          return t4.stack && (e2 = t4.stack.includes(t4.message) ? t4.stack : t4.message + "\n" + t4.stack), e2;
        }(t3)), t3;
      }).then(function(t3) {
        return e.gs = false, t3;
      });
    });
    return this.Ts = n2, n2;
  }, t.prototype.yn = function(t2, e, n2) {
    var r2 = this;
    this.vs(), this.Ps.indexOf(t2) > -1 && (e = 0);
    var i = qr._s(this, t2, e, n2, function(t3) {
      return r2.Fs(t3);
    });
    return this.As.push(i), i;
  }, t.prototype.vs = function() {
    this.Rs && D();
  }, t.prototype.xs = function() {
  }, t.prototype.$s = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2;
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, t2 = this.Ts];
          case 1:
            e.sent(), e.label = 2;
          case 2:
            if (t2 !== this.Ts)
              return [3, 0];
            e.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, t.prototype.ks = function(t2) {
    for (var e = 0, n2 = this.As; e < n2.length; e++) {
      if (n2[e].dn === t2)
        return true;
    }
    return false;
  }, t.prototype.Ms = function(t2) {
    var e = this;
    return this.$s().then(function() {
      e.As.sort(function(t3, e2) {
        return t3.us - e2.us;
      });
      for (var n2 = 0, r2 = e.As; n2 < r2.length; n2++) {
        var i = r2[n2];
        if (i.pn(), "all" !== t2 && i.dn === t2)
          break;
      }
      return e.$s();
    });
  }, t.prototype.Os = function(t2) {
    this.Ps.push(t2);
  }, t.prototype.Fs = function(t2) {
    var e = this.As.indexOf(t2);
    this.As.splice(e, 1);
  }, t;
}();
function Gr(t, e) {
  if (N("AsyncQueue", e + ": " + t), Rr(t))
    return new I(b.UNAVAILABLE, e + ": " + t);
  throw t;
}
var zr = function() {
  this.Ls = void 0, this.listeners = [];
}, Br = function() {
  this.Bs = new yt(function(t) {
    return sr(t);
  }, or), this.onlineState = "Unknown", this.qs = /* @__PURE__ */ new Set();
};
function Kr(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o, s, u2, a, c;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          if (e = x(t), i = r2.query, o = false, (s = e.Bs.get(i)) || (o = true, s = new zr()), !o)
            return [3, 4];
          n2.label = 1;
        case 1:
          return n2.trys.push([1, 3, , 4]), u2 = s, [4, e.Us(i)];
        case 2:
          return u2.Ls = n2.sent(), [3, 4];
        case 3:
          return a = n2.sent(), c = Gr(a, "Initialization of query '" + ur(r2.query) + "' failed"), [2, void r2.onError(c)];
        case 4:
          return e.Bs.set(i, s), s.listeners.push(r2), r2.Qs(e.onlineState), s.Ls && r2.Ws(s.Ls) && Yr(e), [2];
      }
    });
  });
}
function Wr(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o, s, u2;
    return __generator(this, function(n2) {
      return e = x(t), i = r2.query, o = false, (s = e.Bs.get(i)) && (u2 = s.listeners.indexOf(r2)) >= 0 && (s.listeners.splice(u2, 1), o = 0 === s.listeners.length), o ? [2, (e.Bs.delete(i), e.js(i))] : [2];
    });
  });
}
function Qr(t, e) {
  for (var n2 = x(t), r2 = false, i = 0, o = e; i < o.length; i++) {
    var s = o[i], u2 = s.query, a = n2.Bs.get(u2);
    if (a) {
      for (var c = 0, h = a.listeners; c < h.length; c++) {
        h[c].Ws(s) && (r2 = true);
      }
      a.Ls = s;
    }
  }
  r2 && Yr(n2);
}
function Hr(t, e, n2) {
  var r2 = x(t), i = r2.Bs.get(e);
  if (i)
    for (var o = 0, s = i.listeners; o < s.length; o++) {
      s[o].onError(n2);
    }
  r2.Bs.delete(e);
}
function Yr(t) {
  t.qs.forEach(function(t2) {
    t2.next();
  });
}
var $r = function() {
  function t(t2, e, n2) {
    this.query = t2, this.Ks = e, this.Gs = false, this.zs = null, this.onlineState = "Unknown", this.options = n2 || {};
  }
  return t.prototype.Ws = function(t2) {
    if (!this.options.includeMetadataChanges) {
      for (var e = [], n2 = 0, r2 = t2.docChanges; n2 < r2.length; n2++) {
        var i = r2[n2];
        3 !== i.type && e.push(i);
      }
      t2 = new $t(t2.query, t2.docs, t2.Qt, e, t2.Wt, t2.fromCache, t2.jt, true);
    }
    var o = false;
    return this.Gs ? this.Hs(t2) && (this.Ks.next(t2), o = true) : this.Ys(t2, this.onlineState) && (this.Js(t2), o = true), this.zs = t2, o;
  }, t.prototype.onError = function(t2) {
    this.Ks.error(t2);
  }, t.prototype.Qs = function(t2) {
    this.onlineState = t2;
    var e = false;
    return this.zs && !this.Gs && this.Ys(this.zs, t2) && (this.Js(this.zs), e = true), e;
  }, t.prototype.Ys = function(t2, e) {
    if (!t2.fromCache)
      return true;
    var n2 = "Offline" !== e;
    return !(this.options.Xs && n2 || t2.docs.m() && "Offline" !== e);
  }, t.prototype.Hs = function(t2) {
    if (t2.docChanges.length > 0)
      return true;
    var e = this.zs && this.zs.hasPendingWrites !== t2.hasPendingWrites;
    return !(!t2.jt && !e) && true === this.options.includeMetadataChanges;
  }, t.prototype.Js = function(t2) {
    t2 = $t.Gt(t2.query, t2.docs, t2.Wt, t2.fromCache), this.Gs = true, this.Ks.next(t2);
  }, t;
}(), Xr = function() {
  function t(t2) {
    this.uid = t2;
  }
  return t.prototype.Zs = function() {
    return null != this.uid;
  }, t.prototype.ti = function() {
    return this.Zs() ? "uid:" + this.uid : "anonymous-user";
  }, t.prototype.isEqual = function(t2) {
    return t2.uid === this.uid;
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
Xr.UNAUTHENTICATED = new Xr(null), Xr.ei = new Xr("google-credentials-uid"), Xr.ni = new Xr("first-party-uid");
/**
 * @license
 * Copyright 2018 Google LLC
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
var Jr = function() {
  function t(t2, e) {
    var n2 = this;
    this.previousValue = t2, e && (e.si = function(t3) {
      return n2.ii(t3);
    }, this.ri = function(t3) {
      return e.oi(t3);
    });
  }
  return t.prototype.ii = function(t2) {
    return this.previousValue = Math.max(t2, this.previousValue), this.previousValue;
  }, t.prototype.next = function() {
    var t2 = ++this.previousValue;
    return this.ri && this.ri(t2), t2;
  }, t;
}();
function Zr(t, e) {
  return "firestore_clients_" + t + "_" + e;
}
function ti(t, e, n2) {
  var r2 = "firestore_mutations_" + t + "_" + n2;
  return e.Zs() && (r2 += "_" + e.uid), r2;
}
function ei(t, e) {
  return "firestore_targets_" + t + "_" + e;
}
Jr.ai = -1;
var ni = function() {
  function t(t2, e, n2, r2) {
    this.user = t2, this.batchId = e, this.state = n2, this.error = r2;
  }
  return t.ci = function(e, n2, r2) {
    var i = JSON.parse(r2), o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error), s = void 0;
    return o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new I(i.error.code, i.error.message))), o ? new t(e, n2, i.state, s) : (N("SharedClientState", "Failed to parse mutation state for ID '" + n2 + "': " + r2), null);
  }, t.prototype.ui = function() {
    var t2 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t2.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t2);
  }, t;
}(), ri = function() {
  function t(t2, e, n2) {
    this.targetId = t2, this.state = e, this.error = n2;
  }
  return t.ci = function(e, n2) {
    var r2 = JSON.parse(n2), i = "object" == typeof r2 && -1 !== ["not-current", "current", "rejected"].indexOf(r2.state) && (void 0 === r2.error || "object" == typeof r2.error), o = void 0;
    return i && r2.error && ((i = "string" == typeof r2.error.message && "string" == typeof r2.error.code) && (o = new I(r2.error.code, r2.error.message))), i ? new t(e, r2.state, o) : (N("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n2), null);
  }, t.prototype.ui = function() {
    var t2 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t2.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t2);
  }, t;
}(), ii = function() {
  function t(t2, e) {
    this.clientId = t2, this.activeTargetIds = e;
  }
  return t.ci = function(e, n2) {
    for (var r2 = JSON.parse(n2), i = "object" == typeof r2 && r2.activeTargetIds instanceof Array, o = Qt(), s = 0; i && s < r2.activeTargetIds.length; ++s)
      i = It(r2.activeTargetIds[s]), o = o.add(r2.activeTargetIds[s]);
    return i ? new t(e, o) : (N("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n2), null);
  }, t;
}(), oi = function() {
  function t(t2, e) {
    this.clientId = t2, this.onlineState = e;
  }
  return t.ci = function(e) {
    var n2 = JSON.parse(e);
    return "object" == typeof n2 && -1 !== ["Unknown", "Online", "Offline"].indexOf(n2.onlineState) && "string" == typeof n2.clientId ? new t(n2.clientId, n2.onlineState) : (N("SharedClientState", "Failed to parse online state: " + e), null);
  }, t;
}(), si = function() {
  function t() {
    this.activeTargetIds = Qt();
  }
  return t.prototype.hi = function(t2) {
    this.activeTargetIds = this.activeTargetIds.add(t2);
  }, t.prototype.li = function(t2) {
    this.activeTargetIds = this.activeTargetIds.delete(t2);
  }, t.prototype.ui = function() {
    var t2 = {
      activeTargetIds: this.activeTargetIds.A(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t2);
  }, t;
}(), ui = function() {
  function t(t2, e, n2, r2, i) {
    this.window = t2, this.fn = e, this.persistenceKey = n2, this._i = r2, this.fi = null, this.di = null, this.si = null, this.wi = this.mi.bind(this), this.Ti = new Ot(st), this.Ei = false, this.Ii = [];
    var o = n2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage, this.currentUser = i, this.Ai = Zr(this.persistenceKey, this._i), this.Ri = function(t3) {
      return "firestore_sequence_number_" + t3;
    }(this.persistenceKey), this.Ti = this.Ti.ot(this._i, new si()), this.gi = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Pi = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.yi = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.Vi = function(t3) {
      return "firestore_online_state_" + t3;
    }(this.persistenceKey), this.window.addEventListener("storage", this.wi);
  }
  return t.Ln = function(t2) {
    return !(!t2 || !t2.localStorage);
  }, t.prototype.start = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e, r2, i, o, s, u2, a, c, h, f, l = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this.fi.pi()];
          case 1:
            for (t2 = n2.sent(), e = 0, r2 = t2; e < r2.length; e++)
              (i = r2[e]) !== this._i && (o = this.getItem(Zr(this.persistenceKey, i))) && (s = ii.ci(i, o)) && (this.Ti = this.Ti.ot(s.clientId, s));
            for (this.bi(), (u2 = this.storage.getItem(this.Vi)) && (a = this.vi(u2)) && this.Si(a), c = 0, h = this.Ii; c < h.length; c++)
              f = h[c], this.mi(f);
            return this.Ii = [], this.window.addEventListener("unload", function() {
              return l.Di();
            }), this.Ei = true, [2];
        }
      });
    });
  }, t.prototype.oi = function(t2) {
    this.setItem(this.Ri, JSON.stringify(t2));
  }, t.prototype.Ci = function() {
    return this.Ni(this.Ti);
  }, t.prototype.Fi = function(t2) {
    var e = false;
    return this.Ti.forEach(function(n2, r2) {
      r2.activeTargetIds.has(t2) && (e = true);
    }), e;
  }, t.prototype.xi = function(t2) {
    this.$i(t2, "pending");
  }, t.prototype.ki = function(t2, e, n2) {
    this.$i(t2, e, n2), this.Mi(t2);
  }, t.prototype.Oi = function(t2) {
    var e = "not-current";
    if (this.Fi(t2)) {
      var n2 = this.storage.getItem(ei(this.persistenceKey, t2));
      if (n2) {
        var r2 = ri.ci(t2, n2);
        r2 && (e = r2.state);
      }
    }
    return this.Li.hi(t2), this.bi(), e;
  }, t.prototype.Bi = function(t2) {
    this.Li.li(t2), this.bi();
  }, t.prototype.qi = function(t2) {
    return this.Li.activeTargetIds.has(t2);
  }, t.prototype.Ui = function(t2) {
    this.removeItem(ei(this.persistenceKey, t2));
  }, t.prototype.Qi = function(t2, e, n2) {
    this.Wi(t2, e, n2);
  }, t.prototype.ji = function(t2, e, n2) {
    var r2 = this;
    e.forEach(function(t3) {
      r2.Mi(t3);
    }), this.currentUser = t2, n2.forEach(function(t3) {
      r2.xi(t3);
    });
  }, t.prototype.Ki = function(t2) {
    this.Gi(t2);
  }, t.prototype.Di = function() {
    this.Ei && (this.window.removeEventListener("storage", this.wi), this.removeItem(this.Ai), this.Ei = false);
  }, t.prototype.getItem = function(t2) {
    var e = this.storage.getItem(t2);
    return T("SharedClientState", "READ", t2, e), e;
  }, t.prototype.setItem = function(t2, e) {
    T("SharedClientState", "SET", t2, e), this.storage.setItem(t2, e);
  }, t.prototype.removeItem = function(t2) {
    T("SharedClientState", "REMOVE", t2), this.storage.removeItem(t2);
  }, t.prototype.mi = function(t2) {
    var r2 = this, i = t2;
    if (i.storageArea === this.storage) {
      if (T("SharedClientState", "EVENT", i.key, i.newValue), i.key === this.Ai)
        return void N("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this.fn.Cs(function() {
        return __awaiter(r2, void 0, void 0, function() {
          var t3, e, r3, o, s, u2;
          return __generator(this, function(n2) {
            if (this.Ei) {
              if (null !== i.key)
                if (this.gi.test(i.key)) {
                  if (null == i.newValue)
                    return t3 = this.zi(i.key), [2, this.Hi(t3, null)];
                  if (e = this.Yi(i.key, i.newValue))
                    return [2, this.Hi(e.clientId, e)];
                } else if (this.Pi.test(i.key)) {
                  if (null !== i.newValue && (r3 = this.Ji(i.key, i.newValue)))
                    return [2, this.Xi(r3)];
                } else if (this.yi.test(i.key)) {
                  if (null !== i.newValue && (o = this.Zi(i.key, i.newValue)))
                    return [2, this.tr(o)];
                } else if (i.key === this.Vi) {
                  if (null !== i.newValue && (s = this.vi(i.newValue)))
                    return [2, this.Si(s)];
                } else
                  i.key === this.Ri && (u2 = function(t4) {
                    var e2 = Jr.ai;
                    if (null != t4)
                      try {
                        var n3 = JSON.parse(t4);
                        k("number" == typeof n3), e2 = n3;
                      } catch (t5) {
                        N("SharedClientState", "Failed to read sequence number from WebStorage", t5);
                      }
                    return e2;
                  }(i.newValue)) !== Jr.ai && this.si(u2);
            } else
              this.Ii.push(i);
            return [2];
          });
        });
      });
    }
  }, Object.defineProperty(t.prototype, "Li", {
    get: function() {
      return this.Ti.get(this._i);
    },
    enumerable: false,
    configurable: true
  }), t.prototype.bi = function() {
    this.setItem(this.Ai, this.Li.ui());
  }, t.prototype.$i = function(t2, e, n2) {
    var r2 = new ni(this.currentUser, t2, e, n2), i = ti(this.persistenceKey, this.currentUser, t2);
    this.setItem(i, r2.ui());
  }, t.prototype.Mi = function(t2) {
    var e = ti(this.persistenceKey, this.currentUser, t2);
    this.removeItem(e);
  }, t.prototype.Gi = function(t2) {
    var e = {
      clientId: this._i,
      onlineState: t2
    };
    this.storage.setItem(this.Vi, JSON.stringify(e));
  }, t.prototype.Wi = function(t2, e, n2) {
    var r2 = ei(this.persistenceKey, t2), i = new ri(t2, e, n2);
    this.setItem(r2, i.ui());
  }, t.prototype.zi = function(t2) {
    var e = this.gi.exec(t2);
    return e ? e[1] : null;
  }, t.prototype.Yi = function(t2, e) {
    var n2 = this.zi(t2);
    return ii.ci(n2, e);
  }, t.prototype.Ji = function(t2, e) {
    var n2 = this.Pi.exec(t2), r2 = Number(n2[1]), i = void 0 !== n2[2] ? n2[2] : null;
    return ni.ci(new Xr(i), r2, e);
  }, t.prototype.Zi = function(t2, e) {
    var n2 = this.yi.exec(t2), r2 = Number(n2[1]);
    return ri.ci(r2, e);
  }, t.prototype.vi = function(t2) {
    return oi.ci(t2);
  }, t.prototype.Xi = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        return t2.user.uid === this.currentUser.uid ? [2, this.fi.er(t2.batchId, t2.state, t2.error)] : (T("SharedClientState", "Ignoring mutation for non-active user " + t2.user.uid), [2]);
      });
    });
  }, t.prototype.tr = function(t2) {
    return this.fi.nr(t2.targetId, t2.state, t2.error);
  }, t.prototype.Hi = function(t2, e) {
    var n2 = this, r2 = e ? this.Ti.ot(t2, e) : this.Ti.remove(t2), i = this.Ni(this.Ti), o = this.Ni(r2), s = [], u2 = [];
    return o.forEach(function(t3) {
      i.has(t3) || s.push(t3);
    }), i.forEach(function(t3) {
      o.has(t3) || u2.push(t3);
    }), this.fi.sr(s, u2).then(function() {
      n2.Ti = r2;
    });
  }, t.prototype.Si = function(t2) {
    this.Ti.get(t2.clientId) && this.di(t2.onlineState);
  }, t.prototype.Ni = function(t2) {
    var e = Qt();
    return t2.forEach(function(t3, n2) {
      e = e.kt(n2.activeTargetIds);
    }), e;
  }, t;
}(), ai = function() {
  function t() {
    this.ir = new si(), this.rr = {}, this.di = null, this.si = null;
  }
  return t.prototype.xi = function(t2) {
  }, t.prototype.ki = function(t2, e, n2) {
  }, t.prototype.Oi = function(t2) {
    return this.ir.hi(t2), this.rr[t2] || "not-current";
  }, t.prototype.Qi = function(t2, e, n2) {
    this.rr[t2] = e;
  }, t.prototype.Bi = function(t2) {
    this.ir.li(t2);
  }, t.prototype.qi = function(t2) {
    return this.ir.activeTargetIds.has(t2);
  }, t.prototype.Ui = function(t2) {
    delete this.rr[t2];
  }, t.prototype.Ci = function() {
    return this.ir.activeTargetIds;
  }, t.prototype.Fi = function(t2) {
    return this.ir.activeTargetIds.has(t2);
  }, t.prototype.start = function() {
    return this.ir = new si(), Promise.resolve();
  }, t.prototype.ji = function(t2, e, n2) {
  }, t.prototype.Ki = function(t2) {
  }, t.prototype.Di = function() {
  }, t.prototype.oi = function(t2) {
  }, t;
}(), ci = function() {
  function t(t2, e, n2, r2) {
    this.batchId = t2, this.ar = e, this.baseMutations = n2, this.mutations = r2;
  }
  return t.prototype.cr = function(t2, e, n2) {
    for (var r2 = n2.ur, i = 0; i < this.mutations.length; i++) {
      var o = this.mutations[i];
      o.key.isEqual(t2) && (e = An(o, e, r2[i]));
    }
    return e;
  }, t.prototype.hr = function(t2, e) {
    for (var n2 = 0, r2 = this.baseMutations; n2 < r2.length; n2++) {
      var i = r2[n2];
      i.key.isEqual(t2) && (e = Sn(i, e, e, this.ar));
    }
    for (var o = e, s = 0, u2 = this.mutations; s < u2.length; s++) {
      var a = u2[s];
      a.key.isEqual(t2) && (e = Sn(a, e, o, this.ar));
    }
    return e;
  }, t.prototype.lr = function(t2) {
    var e = this, n2 = t2;
    return this.mutations.forEach(function(r2) {
      var i = e.hr(r2.key, t2.get(r2.key));
      i && (n2 = n2.ot(r2.key, i));
    }), n2;
  }, t.prototype.keys = function() {
    return this.mutations.reduce(function(t2, e) {
      return t2.add(e.key);
    }, Kt());
  }, t.prototype.isEqual = function(t2) {
    return this.batchId === t2.batchId && ut(this.mutations, t2.mutations, function(t3, e) {
      return kn(t3, e);
    }) && ut(this.baseMutations, t2.baseMutations, function(t3, e) {
      return kn(t3, e);
    });
  }, t;
}(), hi = function() {
  function t(t2, e, n2, r2) {
    this.batch = t2, this._r = e, this.ur = n2, this.dr = r2;
  }
  return t.from = function(e, n2, r2) {
    k(e.mutations.length === r2.length);
    for (var i = zt, o = e.mutations, s = 0; s < o.length; s++)
      i = i.ot(o[s].key, r2[s].version);
    return new t(e, n2, r2, i);
  }, t;
}(), fi = function() {
  function t() {
    this.wr = new yt(function(t2) {
      return t2.toString();
    }, function(t2, e) {
      return t2.isEqual(e);
    }), this.mr = false;
  }
  return Object.defineProperty(t.prototype, "readTime", {
    get: function() {
      return this.Tr;
    },
    set: function(t2) {
      this.Tr = t2;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.Er = function(t2, e) {
    this.Ir(), this.readTime = e, this.wr.set(t2.key, t2);
  }, t.prototype.Ar = function(t2, e) {
    this.Ir(), e && (this.readTime = e), this.wr.set(t2, null);
  }, t.prototype.Rr = function(t2, e) {
    this.Ir();
    var n2 = this.wr.get(e);
    return void 0 !== n2 ? Dr.resolve(n2) : this.gr(t2, e);
  }, t.prototype.getEntries = function(t2, e) {
    return this.Pr(t2, e);
  }, t.prototype.apply = function(t2) {
    return this.Ir(), this.mr = true, this.yr(t2);
  }, t.prototype.Ir = function() {
  }, t;
}(), li = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", pi = function() {
  function t() {
    this.Vr = [];
  }
  return t.prototype.pr = function(t2) {
    this.Vr.push(t2);
  }, t.prototype.br = function() {
    this.Vr.forEach(function(t2) {
      return t2();
    });
  }, t;
}(), di = function() {
  function t(t2, e, n2) {
    this.vr = t2, this.Sr = e, this.Dr = n2;
  }
  return t.prototype.Cr = function(t2, e) {
    var n2 = this;
    return this.Sr.Nr(t2, e).next(function(r2) {
      return n2.Fr(t2, e, r2);
    });
  }, t.prototype.Fr = function(t2, e, n2) {
    return this.vr.Rr(t2, e).next(function(t3) {
      for (var r2 = 0, i = n2; r2 < i.length; r2++) {
        t3 = i[r2].hr(e, t3);
      }
      return t3;
    });
  }, t.prototype.$r = function(t2, e, n2) {
    var r2 = qt();
    return e.forEach(function(t3, e2) {
      for (var i = 0, o = n2; i < o.length; i++) {
        e2 = o[i].hr(t3, e2);
      }
      r2 = r2.ot(t3, e2);
    }), r2;
  }, t.prototype.kr = function(t2, e) {
    var n2 = this;
    return this.vr.getEntries(t2, e).next(function(e2) {
      return n2.Mr(t2, e2);
    });
  }, t.prototype.Mr = function(t2, e) {
    var n2 = this;
    return this.Sr.Or(t2, e).next(function(r2) {
      var i = n2.$r(t2, e, r2), o = Mt();
      return i.forEach(function(t3, e2) {
        e2 || (e2 = new Bn(t3, gt.min())), o = o.ot(t3, e2);
      }), o;
    });
  }, t.prototype.Lr = function(t2, e, n2) {
    return function(t3) {
      return F.F(t3.path) && null === t3.collectionGroup && 0 === t3.filters.length;
    }(e) ? this.Br(t2, e.path) : Zn(e) ? this.qr(t2, e, n2) : this.Ur(t2, e, n2);
  }, t.prototype.Br = function(t2, e) {
    return this.Cr(t2, new F(e)).next(function(t3) {
      var e2 = Gt();
      return t3 instanceof zn && (e2 = e2.ot(t3.key, t3)), e2;
    });
  }, t.prototype.qr = function(t2, e, n2) {
    var r2 = this, i = e.collectionGroup, o = Gt();
    return this.Dr.Qr(t2, i).next(function(s) {
      return Dr.forEach(s, function(s2) {
        var u2 = function(t3, e2) {
          return new Wn(e2, null, t3.on.slice(), t3.filters.slice(), t3.limit, t3.an, t3.startAt, t3.endAt);
        }(e, s2.child(i));
        return r2.Ur(t2, u2, n2).next(function(t3) {
          t3.forEach(function(t4, e2) {
            o = o.ot(t4, e2);
          });
        });
      }).next(function() {
        return o;
      });
    });
  }, t.prototype.Ur = function(t2, e, n2) {
    var r2, i, o = this;
    return this.vr.Lr(t2, e, n2).next(function(n3) {
      return r2 = n3, o.Sr.Wr(t2, e);
    }).next(function(e2) {
      return i = e2, o.jr(t2, i, r2).next(function(t3) {
        r2 = t3;
        for (var e3 = 0, n3 = i; e3 < n3.length; e3++)
          for (var o2 = n3[e3], s = 0, u2 = o2.mutations; s < u2.length; s++) {
            var a = u2[s], c = a.key, h = r2.get(c), f = Sn(a, h, h, o2.ar);
            r2 = f instanceof zn ? r2.ot(c, f) : r2.remove(c);
          }
      });
    }).next(function() {
      return r2.forEach(function(t3, n3) {
        ar(e, n3) || (r2 = r2.remove(t3));
      }), r2;
    });
  }, t.prototype.jr = function(t2, e, n2) {
    for (var r2 = Kt(), i = 0, o = e; i < o.length; i++)
      for (var s = 0, u2 = o[i].mutations; s < u2.length; s++) {
        var a = u2[s];
        a instanceof Rn && null === n2.get(a.key) && (r2 = r2.add(a.key));
      }
    var c = n2;
    return this.vr.getEntries(t2, r2).next(function(t3) {
      return t3.forEach(function(t4, e2) {
        null !== e2 && e2 instanceof zn && (c = c.ot(t4, e2));
      }), c;
    });
  }, t;
}(), vi = function() {
  function t(t2, e, n2, r2) {
    this.targetId = t2, this.fromCache = e, this.Kr = n2, this.Gr = r2;
  }
  return t.zr = function(e, n2) {
    for (var r2 = Kt(), i = Kt(), o = 0, s = n2.docChanges; o < s.length; o++) {
      var u2 = s[o];
      switch (u2.type) {
        case 0:
          r2 = r2.add(u2.doc.key);
          break;
        case 1:
          i = i.add(u2.doc.key);
      }
    }
    return new t(e, n2.fromCache, r2, i);
  }, t;
}();
/**
 * @license
 * Copyright 2018 Google LLC
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
function yi(t, e) {
  var n2 = t[0], r2 = t[1], i = e[0], o = e[1], s = st(n2, i);
  return 0 === s ? st(r2, o) : s;
}
var mi = function() {
  function t(t2) {
    this.Hr = t2, this.buffer = new Ut(yi), this.Yr = 0;
  }
  return t.prototype.Jr = function() {
    return ++this.Yr;
  }, t.prototype.Xr = function(t2) {
    var e = [t2, this.Jr()];
    if (this.buffer.size < this.Hr)
      this.buffer = this.buffer.add(e);
    else {
      var n2 = this.buffer.last();
      yi(e, n2) < 0 && (this.buffer = this.buffer.delete(n2).add(e));
    }
  }, Object.defineProperty(t.prototype, "maxValue", {
    get: function() {
      return this.buffer.last()[0];
    },
    enumerable: false,
    configurable: true
  }), t;
}(), gi = {
  Zr: false,
  eo: 0,
  no: 0,
  so: 0
}, wi = function() {
  function t(t2, e, n2) {
    this.io = t2, this.ro = e, this.oo = n2;
  }
  return t.ao = function(e) {
    return new t(e, t.co, t.uo);
  }, t;
}();
wi.ho = -1, wi.lo = 1048576, wi._o = 41943040, wi.co = 10, wi.uo = 1e3, wi.fo = new wi(wi._o, wi.co, wi.uo), wi.do = new wi(wi.ho, 0, 0);
var bi = function() {
  function t(t2, e) {
    this.wo = t2, this.cs = e, this.mo = false, this.To = null;
  }
  return t.prototype.start = function(t2) {
    this.wo.params.io !== wi.ho && this.Eo(t2);
  }, t.prototype.stop = function() {
    this.To && (this.To.cancel(), this.To = null);
  }, Object.defineProperty(t.prototype, "Ei", {
    get: function() {
      return null !== this.To;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.Eo = function(t2) {
    var r2 = this, i = this.mo ? 3e5 : 6e4;
    T("LruGarbageCollector", "Garbage collection scheduled in " + i + "ms"), this.To = this.cs.yn("lru_garbage_collection", i, function() {
      return __awaiter(r2, void 0, void 0, function() {
        var e;
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              this.To = null, this.mo = true, n2.label = 1;
            case 1:
              return n2.trys.push([1, 3, , 7]), [4, t2.Io(this.wo)];
            case 2:
              return n2.sent(), [3, 7];
            case 3:
              return Rr(e = n2.sent()) ? (T("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, 6]) : [3, 4];
            case 4:
              return [4, qo(e)];
            case 5:
              n2.sent(), n2.label = 6;
            case 6:
              return [3, 7];
            case 7:
              return [4, this.Eo(t2)];
            case 8:
              return n2.sent(), [2];
          }
        });
      });
    });
  }, t;
}(), Ii = function() {
  function t(t2, e) {
    this.Ao = t2, this.params = e;
  }
  return t.prototype.Ro = function(t2, e) {
    return this.Ao.Po(t2).next(function(t3) {
      return Math.floor(e / 100 * t3);
    });
  }, t.prototype.yo = function(t2, e) {
    var n2 = this;
    if (0 === e)
      return Dr.resolve(Jr.ai);
    var r2 = new mi(e);
    return this.Ao.Ce(t2, function(t3) {
      return r2.Xr(t3.sequenceNumber);
    }).next(function() {
      return n2.Ao.Vo(t2, function(t3) {
        return r2.Xr(t3);
      });
    }).next(function() {
      return r2.maxValue;
    });
  }, t.prototype.po = function(t2, e, n2) {
    return this.Ao.po(t2, e, n2);
  }, t.prototype.bo = function(t2, e) {
    return this.Ao.bo(t2, e);
  }, t.prototype.vo = function(t2, e) {
    var n2 = this;
    return this.params.io === wi.ho ? (T("LruGarbageCollector", "Garbage collection skipped; disabled"), Dr.resolve(gi)) : this.So(t2).next(function(r2) {
      return r2 < n2.params.io ? (T("LruGarbageCollector", "Garbage collection skipped; Cache size " + r2 + " is lower than threshold " + n2.params.io), gi) : n2.Do(t2, e);
    });
  }, t.prototype.So = function(t2) {
    return this.Ao.So(t2);
  }, t.prototype.Do = function(t2, e) {
    var n2, r2, i, o, u2, a, c, h = this, f = Date.now();
    return this.Ro(t2, this.params.ro).next(function(e2) {
      return e2 > h.params.oo ? (T("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.oo + " from " + e2), r2 = h.params.oo) : r2 = e2, o = Date.now(), h.yo(t2, r2);
    }).next(function(r3) {
      return n2 = r3, u2 = Date.now(), h.po(t2, n2, e);
    }).next(function(e2) {
      return i = e2, a = Date.now(), h.bo(t2, n2);
    }).next(function(t3) {
      return c = Date.now(), _() <= LogLevel.DEBUG && T("LruGarbageCollector", "LRU Garbage Collection\n	Counted targets in " + (o - f) + "ms\n	Determined least recently used " + r2 + " in " + (u2 - o) + "ms\n	Removed " + i + " targets in " + (a - u2) + "ms\n	Removed " + t3 + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - f) + "ms"), Dr.resolve({
        Zr: true,
        eo: r2,
        no: i,
        so: t3
      });
    });
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function Ei(t) {
  for (var e = "", n2 = 0; n2 < t.length; n2++)
    e.length > 0 && (e = Ti(e)), e = _i(t.get(n2), e);
  return Ti(e);
}
function _i(t, e) {
  for (var n2 = e, r2 = t.length, i = 0; i < r2; i++) {
    var o = t.charAt(i);
    switch (o) {
      case "\0":
        n2 += "";
        break;
      case "":
        n2 += "";
        break;
      default:
        n2 += o;
    }
  }
  return n2;
}
function Ti(t) {
  return t + "";
}
function Ni(t) {
  var e = t.length;
  if (k(e >= 2), 2 === e)
    return k("" === t.charAt(0) && "" === t.charAt(1)), V.P();
  for (var n2 = e - 2, r2 = [], i = "", o = 0; o < e; ) {
    var s = t.indexOf("", o);
    switch ((s < 0 || s > n2) && D(), t.charAt(s + 1)) {
      case "":
        var u2 = t.substring(o, s), a = void 0;
        0 === i.length ? a = u2 : (a = i += u2, i = ""), r2.push(a);
        break;
      case "":
        i += t.substring(o, s), i += "\0";
        break;
      case "":
        i += t.substring(o, s + 1);
        break;
      default:
        D();
    }
    o = s + 2;
  }
  return new V(r2);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Ai = function(t) {
  this.Co = t;
};
function Si(t, e) {
  if (e.document)
    return function(t2, e2, n3) {
      var r3 = Me(t2, e2.name), i2 = Ve(e2.updateTime), o2 = new Mn({
        mapValue: {
          fields: e2.fields
        }
      });
      return new zn(r3, i2, o2, {
        hasCommittedMutations: !!n3
      });
    }(t.Co, e.document, !!e.hasCommittedMutations);
  if (e.noDocument) {
    var n2 = F.$(e.noDocument.path), r2 = Ri(e.noDocument.readTime);
    return new Bn(n2, r2, {
      hasCommittedMutations: !!e.hasCommittedMutations
    });
  }
  if (e.unknownDocument) {
    var i = F.$(e.unknownDocument.path), o = Ri(e.unknownDocument.version);
    return new Kn(i, o);
  }
  return D();
}
function Di(t, e, n2) {
  var r2 = ki(n2), i = e.key.path.h().A();
  if (e instanceof zn) {
    var o = function(t2, e2) {
      return {
        name: Fe(t2, e2.key),
        fields: e2.rn().mapValue.fields,
        updateTime: Re(t2, e2.version.Z())
      };
    }(t.Co, e), s = e.hasCommittedMutations;
    return new io(null, null, o, s, r2, i);
  }
  if (e instanceof Bn) {
    var u2 = e.key.path.A(), a = Li(e.version), c = e.hasCommittedMutations;
    return new io(null, new no(u2, a), null, c, r2, i);
  }
  if (e instanceof Kn) {
    var h = e.key.path.A(), f = Li(e.version);
    return new io(new ro(h, f), null, null, true, r2, i);
  }
  return D();
}
function ki(t) {
  var e = t.Z();
  return [e.seconds, e.nanoseconds];
}
function xi(t) {
  var e = new mt(t[0], t[1]);
  return gt.J(e);
}
function Li(t) {
  var e = t.Z();
  return new Xi(e.seconds, e.nanoseconds);
}
function Ri(t) {
  var e = new mt(t.seconds, t.nanoseconds);
  return gt.J(e);
}
function Oi(t, e) {
  var n2 = (e.baseMutations || []).map(function(e2) {
    return We(t.Co, e2);
  }), r2 = e.mutations.map(function(e2) {
    return We(t.Co, e2);
  }), i = mt.fromMillis(e.localWriteTimeMs);
  return new ci(e.batchId, i, n2, r2);
}
function Pi(t) {
  var e, n2, r2 = Ri(t.readTime), i = void 0 !== t.lastLimboFreeSnapshotVersion ? Ri(t.lastLimboFreeSnapshotVersion) : gt.min();
  return void 0 !== t.query.documents ? (k(1 === (n2 = t.query).documents.length), e = er(Hn(je(n2.documents[0])))) : e = Ye(t.query), new kt(e, t.targetId, 0, t.lastListenSequenceNumber, r2, i, ct.fromBase64String(t.resumeToken));
}
function Vi(t, e) {
  var n2, r2 = Li(e.nt), i = Li(e.lastLimboFreeSnapshotVersion);
  n2 = At(e.target) ? Qe(t.Co, e.target) : He(t.Co, e.target);
  var o = e.resumeToken.toBase64();
  return new so(e.targetId, Tt(e.target), r2, o, e.sequenceNumber, i, n2);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Ui = function() {
  function t(t2, e, n2, r2) {
    this.userId = t2, this.serializer = e, this.Dr = n2, this.No = r2, this.Fo = {};
  }
  return t.xo = function(e, n2, r2, i) {
    return k("" !== e.uid), new t(e.Zs() ? e.uid : "", n2, r2, i);
  }, t.prototype.$o = function(t2) {
    var e = true, n2 = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return Mi(t2).rs({
      index: to.userMutationsIndex,
      range: n2
    }, function(t3, n3, r2) {
      e = false, r2.done();
    }).next(function() {
      return e;
    });
  }, t.prototype.ko = function(t2, e, n2, r2) {
    var i = this, o = qi(t2), s = Mi(t2);
    return s.add({}).next(function(u2) {
      k("number" == typeof u2);
      for (var a = new ci(u2, e, n2, r2), c = function(t3, e2, n3) {
        var r3 = n3.baseMutations.map(function(e3) {
          return Ke(t3.Co, e3);
        }), i2 = n3.mutations.map(function(e3) {
          return Ke(t3.Co, e3);
        });
        return new to(e2, n3.batchId, n3.ar.toMillis(), r3, i2);
      }(i.serializer, i.userId, a), h = [], f = new Ut(function(t3, e2) {
        return st(t3.R(), e2.R());
      }), l = 0, p2 = r2; l < p2.length; l++) {
        var d = p2[l], v2 = eo.key(i.userId, d.key.path, u2);
        f = f.add(d.key.path.h()), h.push(s.put(c)), h.push(o.put(v2, eo.PLACEHOLDER));
      }
      return f.forEach(function(e2) {
        h.push(i.Dr.Mo(t2, e2));
      }), t2.pr(function() {
        i.Fo[u2] = a.keys();
      }), Dr.$n(h).next(function() {
        return a;
      });
    });
  }, t.prototype.Oo = function(t2, e) {
    var n2 = this;
    return Mi(t2).get(e).next(function(t3) {
      return t3 ? (k(t3.userId === n2.userId), Oi(n2.serializer, t3)) : null;
    });
  }, t.prototype.Lo = function(t2, e) {
    var n2 = this;
    return this.Fo[e] ? Dr.resolve(this.Fo[e]) : this.Oo(t2, e).next(function(t3) {
      if (t3) {
        var r2 = t3.keys();
        return n2.Fo[e] = r2, r2;
      }
      return null;
    });
  }, t.prototype.Bo = function(t2, e) {
    var n2 = this, r2 = e + 1, i = IDBKeyRange.lowerBound([this.userId, r2]), o = null;
    return Mi(t2).rs({
      index: to.userMutationsIndex,
      range: i
    }, function(t3, e2, i2) {
      e2.userId === n2.userId && (k(e2.batchId >= r2), o = Oi(n2.serializer, e2)), i2.done();
    }).next(function() {
      return o;
    });
  }, t.prototype.qo = function(t2) {
    var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]), n2 = -1;
    return Mi(t2).rs({
      index: to.userMutationsIndex,
      range: e,
      reverse: true
    }, function(t3, e2, r2) {
      n2 = e2.batchId, r2.done();
    }).next(function() {
      return n2;
    });
  }, t.prototype.Uo = function(t2) {
    var e = this, n2 = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return Mi(t2).ts(to.userMutationsIndex, n2).next(function(t3) {
      return t3.map(function(t4) {
        return Oi(e.serializer, t4);
      });
    });
  }, t.prototype.Nr = function(t2, e) {
    var n2 = this, r2 = eo.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r2), o = [];
    return qi(t2).rs({
      range: i
    }, function(r3, i2, s) {
      var u2 = r3[0], a = r3[1], c = r3[2], h = Ni(a);
      if (u2 === n2.userId && e.path.isEqual(h))
        return Mi(t2).get(c).next(function(t3) {
          if (!t3)
            throw D();
          k(t3.userId === n2.userId), o.push(Oi(n2.serializer, t3));
        });
      s.done();
    }).next(function() {
      return o;
    });
  }, t.prototype.Or = function(t2, e) {
    var n2 = this, r2 = new Ut(st), i = [];
    return e.forEach(function(e2) {
      var o = eo.prefixForPath(n2.userId, e2.path), s = IDBKeyRange.lowerBound(o), u2 = qi(t2).rs({
        range: s
      }, function(t3, i2, o2) {
        var s2 = t3[0], u3 = t3[1], a = t3[2], c = Ni(u3);
        s2 === n2.userId && e2.path.isEqual(c) ? r2 = r2.add(a) : o2.done();
      });
      i.push(u2);
    }), Dr.$n(i).next(function() {
      return n2.Qo(t2, r2);
    });
  }, t.prototype.Wr = function(t2, e) {
    var n2 = this, r2 = e.path, i = r2.length + 1, o = eo.prefixForPath(this.userId, r2), s = IDBKeyRange.lowerBound(o), u2 = new Ut(st);
    return qi(t2).rs({
      range: s
    }, function(t3, e2, o2) {
      var s2 = t3[0], a = t3[1], c = t3[2], h = Ni(a);
      s2 === n2.userId && r2.T(h) ? h.length === i && (u2 = u2.add(c)) : o2.done();
    }).next(function() {
      return n2.Qo(t2, u2);
    });
  }, t.prototype.Qo = function(t2, e) {
    var n2 = this, r2 = [], i = [];
    return e.forEach(function(e2) {
      i.push(Mi(t2).get(e2).next(function(t3) {
        if (null === t3)
          throw D();
        k(t3.userId === n2.userId), r2.push(Oi(n2.serializer, t3));
      }));
    }), Dr.$n(i).next(function() {
      return r2;
    });
  }, t.prototype.Wo = function(t2, e) {
    var n2 = this;
    return Fi(t2.jo, this.userId, e).next(function(r2) {
      return t2.pr(function() {
        n2.Ko(e.batchId);
      }), Dr.forEach(r2, function(e2) {
        return n2.No.Go(t2, e2);
      });
    });
  }, t.prototype.Ko = function(t2) {
    delete this.Fo[t2];
  }, t.prototype.zo = function(t2) {
    var e = this;
    return this.$o(t2).next(function(n2) {
      if (!n2)
        return Dr.resolve();
      var r2 = IDBKeyRange.lowerBound(eo.prefixForUser(e.userId)), i = [];
      return qi(t2).rs({
        range: r2
      }, function(t3, n3, r3) {
        if (t3[0] === e.userId) {
          var o = Ni(t3[1]);
          i.push(o);
        } else
          r3.done();
      }).next(function() {
        k(0 === i.length);
      });
    });
  }, t.prototype.Ho = function(t2, e) {
    return Ci(t2, this.userId, e);
  }, t.prototype.Yo = function(t2) {
    var e = this;
    return ji(t2).get(this.userId).next(function(t3) {
      return t3 || new Zi(e.userId, -1, "");
    });
  }, t;
}();
function Ci(t, e, n2) {
  var r2 = eo.prefixForPath(e, n2.path), i = r2[1], o = IDBKeyRange.lowerBound(r2), s = false;
  return qi(t).rs({
    range: o,
    ss: true
  }, function(t2, n3, r3) {
    var o2 = t2[0], u2 = t2[1];
    t2[2];
    o2 === e && u2 === i && (s = true), r3.done();
  }).next(function() {
    return s;
  });
}
function Fi(t, e, n2) {
  var r2 = t.store(to.store), i = t.store(eo.store), o = [], s = IDBKeyRange.only(n2.batchId), u2 = 0, a = r2.rs({
    range: s
  }, function(t2, e2, n3) {
    return u2++, n3.delete();
  });
  o.push(a.next(function() {
    k(1 === u2);
  }));
  for (var c = [], h = 0, f = n2.mutations; h < f.length; h++) {
    var l = f[h], p2 = eo.key(e, l.key.path, n2.batchId);
    o.push(i.delete(p2)), c.push(l.key);
  }
  return Dr.$n(o).next(function() {
    return c;
  });
}
function Mi(t) {
  return _o.Qn(t, to.store);
}
function qi(t) {
  return _o.Qn(t, eo.store);
}
function ji(t) {
  return _o.Qn(t, Zi.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Gi = function() {
  function t(t2, e) {
    this.serializer = t2, this.Dr = e;
  }
  return t.prototype.Er = function(t2, e, n2) {
    return Ki(t2).put(Wi(e), n2);
  }, t.prototype.Ar = function(t2, e) {
    var n2 = Ki(t2), r2 = Wi(e);
    return n2.delete(r2);
  }, t.prototype.updateMetadata = function(t2, e) {
    var n2 = this;
    return this.getMetadata(t2).next(function(r2) {
      return r2.byteSize += e, n2.Jo(t2, r2);
    });
  }, t.prototype.Rr = function(t2, e) {
    var n2 = this;
    return Ki(t2).get(Wi(e)).next(function(t3) {
      return n2.Xo(t3);
    });
  }, t.prototype.Zo = function(t2, e) {
    var n2 = this;
    return Ki(t2).get(Wi(e)).next(function(t3) {
      var e2 = n2.Xo(t3);
      return e2 ? {
        ta: e2,
        size: Qi(t3)
      } : null;
    });
  }, t.prototype.getEntries = function(t2, e) {
    var n2 = this, r2 = qt();
    return this.ea(t2, e, function(t3, e2) {
      var i = n2.Xo(e2);
      r2 = r2.ot(t3, i);
    }).next(function() {
      return r2;
    });
  }, t.prototype.na = function(t2, e) {
    var n2 = this, r2 = qt(), i = new Ot(F.i);
    return this.ea(t2, e, function(t3, e2) {
      var o = n2.Xo(e2);
      o ? (r2 = r2.ot(t3, o), i = i.ot(t3, Qi(e2))) : (r2 = r2.ot(t3, null), i = i.ot(t3, 0));
    }).next(function() {
      return {
        sa: r2,
        ia: i
      };
    });
  }, t.prototype.ea = function(t2, e, n2) {
    if (e.m())
      return Dr.resolve();
    var r2 = IDBKeyRange.bound(e.first().path.A(), e.last().path.A()), i = e._t(), o = i.It();
    return Ki(t2).rs({
      range: r2
    }, function(t3, e2, r3) {
      for (var s = F.$(t3); o && F.i(o, s) < 0; )
        n2(o, null), o = i.It();
      o && o.isEqual(s) && (n2(o, e2), o = i.At() ? i.It() : null), o ? r3.Xn(o.path.A()) : r3.done();
    }).next(function() {
      for (; o; )
        n2(o, null), o = i.At() ? i.It() : null;
    });
  }, t.prototype.Lr = function(t2, e, n2) {
    var r2 = this, i = Gt(), o = e.path.length + 1, s = {};
    if (n2.isEqual(gt.min())) {
      var u2 = e.path.A();
      s.range = IDBKeyRange.lowerBound(u2);
    } else {
      var a = e.path.A(), c = ki(n2);
      s.range = IDBKeyRange.lowerBound([a, c], true), s.index = io.collectionReadTimeIndex;
    }
    return Ki(t2).rs(s, function(t3, n3, s2) {
      if (t3.length === o) {
        var u3 = Si(r2.serializer, n3);
        e.path.T(u3.key.path) ? u3 instanceof zn && ar(e, u3) && (i = i.ot(u3.key, u3)) : s2.done();
      }
    }).next(function() {
      return i;
    });
  }, t.prototype.ra = function(t2) {
    return new zi(this, !!t2 && t2.oa);
  }, t.prototype.aa = function(t2) {
    return this.getMetadata(t2).next(function(t3) {
      return t3.byteSize;
    });
  }, t.prototype.getMetadata = function(t2) {
    return Bi(t2).get(oo.key).next(function(t3) {
      return k(!!t3), t3;
    });
  }, t.prototype.Jo = function(t2, e) {
    return Bi(t2).put(oo.key, e);
  }, t.prototype.Xo = function(t2) {
    if (t2) {
      var e = Si(this.serializer, t2);
      return e instanceof Bn && e.version.isEqual(gt.min()) ? null : e;
    }
    return null;
  }, t;
}(), zi = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).ca = t, r2.oa = n3, r2.ua = new yt(function(t2) {
      return t2.toString();
    }, function(t2, e2) {
      return t2.isEqual(e2);
    }), r2;
  }
  return __extends$1(n2, e), n2.prototype.yr = function(t) {
    var e2 = this, n3 = [], r2 = 0, i = new Ut(function(t2, e3) {
      return st(t2.R(), e3.R());
    });
    return this.wr.forEach(function(o, s) {
      var u2 = e2.ua.get(o);
      if (s) {
        var a = Di(e2.ca.serializer, s, e2.readTime);
        i = i.add(o.path.h());
        var c = Qi(a);
        r2 += c - u2, n3.push(e2.ca.Er(t, o, a));
      } else if (r2 -= u2, e2.oa) {
        var h = Di(e2.ca.serializer, new Bn(o, gt.min()), e2.readTime);
        n3.push(e2.ca.Er(t, o, h));
      } else
        n3.push(e2.ca.Ar(t, o));
    }), i.forEach(function(r3) {
      n3.push(e2.ca.Dr.Mo(t, r3));
    }), n3.push(this.ca.updateMetadata(t, r2)), Dr.$n(n3);
  }, n2.prototype.gr = function(t, e2) {
    var n3 = this;
    return this.ca.Zo(t, e2).next(function(t2) {
      return null === t2 ? (n3.ua.set(e2, 0), null) : (n3.ua.set(e2, t2.size), t2.ta);
    });
  }, n2.prototype.Pr = function(t, e2) {
    var n3 = this;
    return this.ca.na(t, e2).next(function(t2) {
      var e3 = t2.sa;
      return t2.ia.forEach(function(t3, e4) {
        n3.ua.set(t3, e4);
      }), e3;
    });
  }, n2;
}(fi);
function Bi(t) {
  return _o.Qn(t, oo.store);
}
function Ki(t) {
  return _o.Qn(t, io.store);
}
function Wi(t) {
  return t.path.A();
}
function Qi(t) {
  var e;
  if (t.document)
    e = t.document;
  else if (t.unknownDocument)
    e = t.unknownDocument;
  else {
    if (!t.noDocument)
      throw D();
    e = t.noDocument;
  }
  return JSON.stringify(e).length;
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
var Hi = function() {
  function t() {
    this.ha = new Yi();
  }
  return t.prototype.Mo = function(t2, e) {
    return this.ha.add(e), Dr.resolve();
  }, t.prototype.Qr = function(t2, e) {
    return Dr.resolve(this.ha.getEntries(e));
  }, t;
}(), Yi = function() {
  function t() {
    this.index = {};
  }
  return t.prototype.add = function(t2) {
    var e = t2._(), n2 = t2.h(), r2 = this.index[e] || new Ut(V.i), i = !r2.has(n2);
    return this.index[e] = r2.add(n2), i;
  }, t.prototype.has = function(t2) {
    var e = t2._(), n2 = t2.h(), r2 = this.index[e];
    return r2 && r2.has(n2);
  }, t.prototype.getEntries = function(t2) {
    return (this.index[t2] || new Ut(V.i)).A();
  }, t;
}(), $i = function() {
  function t(t2) {
    this.serializer = t2;
  }
  return t.prototype.createOrUpgrade = function(t2, e, n2, r2) {
    var i = this;
    k(n2 < r2 && n2 >= 0 && r2 <= 10);
    var o = new Or("createOrUpgrade", e);
    n2 < 1 && r2 >= 1 && (function(t3) {
      t3.createObjectStore(Ji.store);
    }(t2), function(t3) {
      t3.createObjectStore(Zi.store, {
        keyPath: Zi.keyPath
      }), t3.createObjectStore(to.store, {
        keyPath: to.keyPath,
        autoIncrement: true
      }).createIndex(to.userMutationsIndex, to.userMutationsKeyPath, {
        unique: true
      }), t3.createObjectStore(eo.store);
    }(t2), ho(t2), function(t3) {
      t3.createObjectStore(io.store);
    }(t2));
    var s = Dr.resolve();
    return n2 < 3 && r2 >= 3 && (0 !== n2 && (function(t3) {
      t3.deleteObjectStore(uo.store), t3.deleteObjectStore(so.store), t3.deleteObjectStore(ao.store);
    }(t2), ho(t2)), s = s.next(function() {
      return function(t3) {
        var e2 = t3.store(ao.store), n3 = new ao(0, 0, gt.min().Z(), 0);
        return e2.put(ao.key, n3);
      }(o);
    })), n2 < 4 && r2 >= 4 && (0 !== n2 && (s = s.next(function() {
      return function(t3, e2) {
        return e2.store(to.store).ts().next(function(n3) {
          t3.deleteObjectStore(to.store), t3.createObjectStore(to.store, {
            keyPath: to.keyPath,
            autoIncrement: true
          }).createIndex(to.userMutationsIndex, to.userMutationsKeyPath, {
            unique: true
          });
          var r3 = e2.store(to.store), i2 = n3.map(function(t4) {
            return r3.put(t4);
          });
          return Dr.$n(i2);
        });
      }(t2, o);
    })), s = s.next(function() {
      !function(t3) {
        t3.createObjectStore(fo.store, {
          keyPath: fo.keyPath
        });
      }(t2);
    })), n2 < 5 && r2 >= 5 && (s = s.next(function() {
      return i.removeAcknowledgedMutations(o);
    })), n2 < 6 && r2 >= 6 && (s = s.next(function() {
      return function(t3) {
        t3.createObjectStore(oo.store);
      }(t2), i.addDocumentGlobal(o);
    })), n2 < 7 && r2 >= 7 && (s = s.next(function() {
      return i.ensureSequenceNumbers(o);
    })), n2 < 8 && r2 >= 8 && (s = s.next(function() {
      return i.createCollectionParentIndex(t2, o);
    })), n2 < 9 && r2 >= 9 && (s = s.next(function() {
      !function(t3) {
        t3.objectStoreNames.contains("remoteDocumentChanges") && t3.deleteObjectStore("remoteDocumentChanges");
      }(t2), function(t3) {
        var e2 = t3.objectStore(io.store);
        e2.createIndex(io.readTimeIndex, io.readTimeIndexPath, {
          unique: false
        }), e2.createIndex(io.collectionReadTimeIndex, io.collectionReadTimeIndexPath, {
          unique: false
        });
      }(e);
    })), n2 < 10 && r2 >= 10 && (s = s.next(function() {
      return i.rewriteCanonicalIds(o);
    })), s;
  }, t.prototype.addDocumentGlobal = function(t2) {
    var e = 0;
    return t2.store(io.store).rs(function(t3, n2) {
      e += Qi(n2);
    }).next(function() {
      var n2 = new oo(e);
      return t2.store(oo.store).put(oo.key, n2);
    });
  }, t.prototype.removeAcknowledgedMutations = function(t2) {
    var e = this, n2 = t2.store(Zi.store), r2 = t2.store(to.store);
    return n2.ts().next(function(n3) {
      return Dr.forEach(n3, function(n4) {
        var i = IDBKeyRange.bound([n4.userId, -1], [n4.userId, n4.lastAcknowledgedBatchId]);
        return r2.ts(to.userMutationsIndex, i).next(function(r3) {
          return Dr.forEach(r3, function(r4) {
            k(r4.userId === n4.userId);
            var i2 = Oi(e.serializer, r4);
            return Fi(t2, n4.userId, i2).next(function() {
            });
          });
        });
      });
    });
  }, t.prototype.ensureSequenceNumbers = function(t2) {
    var e = t2.store(uo.store), n2 = t2.store(io.store);
    return t2.store(ao.store).get(ao.key).next(function(t3) {
      var r2 = [];
      return n2.rs(function(n3, i) {
        var o = new V(n3), s = function(t4) {
          return [0, Ei(t4)];
        }(o);
        r2.push(e.get(s).next(function(n4) {
          return n4 ? Dr.resolve() : function(n5) {
            return e.put(new uo(0, Ei(n5), t3.highestListenSequenceNumber));
          }(o);
        }));
      }).next(function() {
        return Dr.$n(r2);
      });
    });
  }, t.prototype.createCollectionParentIndex = function(t2, e) {
    t2.createObjectStore(co.store, {
      keyPath: co.keyPath
    });
    var n2 = e.store(co.store), r2 = new Yi(), i = function(t3) {
      if (r2.add(t3)) {
        var e2 = t3._(), i2 = t3.h();
        return n2.put({
          collectionId: e2,
          parent: Ei(i2)
        });
      }
    };
    return e.store(io.store).rs({
      ss: true
    }, function(t3, e2) {
      var n3 = new V(t3);
      return i(n3.h());
    }).next(function() {
      return e.store(eo.store).rs({
        ss: true
      }, function(t3, e2) {
        t3[0];
        var n3 = t3[1], r3 = (t3[2], Ni(n3));
        return i(r3.h());
      });
    });
  }, t.prototype.rewriteCanonicalIds = function(t2) {
    var e = this, n2 = t2.store(so.store);
    return n2.rs(function(t3, r2) {
      var i = Pi(r2), o = Vi(e.serializer, i);
      return n2.put(o);
    });
  }, t;
}(), Xi = function(t, e) {
  this.seconds = t, this.nanoseconds = e;
}, Ji = function(t, e, n2) {
  this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n2;
};
Ji.store = "owner", Ji.key = "owner";
var Zi = function(t, e, n2) {
  this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n2;
};
Zi.store = "mutationQueues", Zi.keyPath = "userId";
var to = function(t, e, n2, r2, i) {
  this.userId = t, this.batchId = e, this.localWriteTimeMs = n2, this.baseMutations = r2, this.mutations = i;
};
to.store = "mutations", to.keyPath = "batchId", to.userMutationsIndex = "userMutationsIndex", to.userMutationsKeyPath = ["userId", "batchId"];
var eo = function() {
  function t() {
  }
  return t.prefixForUser = function(t2) {
    return [t2];
  }, t.prefixForPath = function(t2, e) {
    return [t2, Ei(e)];
  }, t.key = function(t2, e, n2) {
    return [t2, Ei(e), n2];
  }, t;
}();
eo.store = "documentMutations", eo.PLACEHOLDER = new eo();
var no = function(t, e) {
  this.path = t, this.readTime = e;
}, ro = function(t, e) {
  this.path = t, this.version = e;
}, io = function(t, e, n2, r2, i, o) {
  this.unknownDocument = t, this.noDocument = e, this.document = n2, this.hasCommittedMutations = r2, this.readTime = i, this.parentPath = o;
};
io.store = "remoteDocuments", io.readTimeIndex = "readTimeIndex", io.readTimeIndexPath = "readTime", io.collectionReadTimeIndex = "collectionReadTimeIndex", io.collectionReadTimeIndexPath = ["parentPath", "readTime"];
var oo = function(t) {
  this.byteSize = t;
};
oo.store = "remoteDocumentGlobal", oo.key = "remoteDocumentGlobalKey";
var so = function(t, e, n2, r2, i, o, s) {
  this.targetId = t, this.canonicalId = e, this.readTime = n2, this.resumeToken = r2, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};
so.store = "targets", so.keyPath = "targetId", so.queryTargetsIndexName = "queryTargetsIndex", so.queryTargetsKeyPath = ["canonicalId", "targetId"];
var uo = function(t, e, n2) {
  this.targetId = t, this.path = e, this.sequenceNumber = n2;
};
uo.store = "targetDocuments", uo.keyPath = ["targetId", "path"], uo.documentTargetsIndex = "documentTargetsIndex", uo.documentTargetsKeyPath = ["path", "targetId"];
var ao = function(t, e, n2, r2) {
  this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n2, this.targetCount = r2;
};
ao.key = "targetGlobalKey", ao.store = "targetGlobal";
var co = function(t, e) {
  this.collectionId = t, this.parent = e;
};
function ho(t) {
  t.createObjectStore(uo.store, {
    keyPath: uo.keyPath
  }).createIndex(uo.documentTargetsIndex, uo.documentTargetsKeyPath, {
    unique: true
  }), t.createObjectStore(so.store, {
    keyPath: so.keyPath
  }).createIndex(so.queryTargetsIndexName, so.queryTargetsKeyPath, {
    unique: true
  }), t.createObjectStore(ao.store);
}
co.store = "collectionParents", co.keyPath = ["collectionId", "parent"];
var fo = function(t, e, n2, r2) {
  this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n2, this.inForeground = r2;
};
fo.store = "clientMetadata", fo.keyPath = "clientId";
var lo = __spreadArrays$1(__spreadArrays$1(__spreadArrays$1([Zi.store, to.store, eo.store, io.store, so.store, Ji.store, ao.store, uo.store], [fo.store]), [oo.store]), [co.store]), po = function() {
  function t() {
    this.la = new Yi();
  }
  return t.prototype.Mo = function(t2, e) {
    var n2 = this;
    if (!this.la.has(e)) {
      var r2 = e._(), i = e.h();
      t2.pr(function() {
        n2.la.add(e);
      });
      var o = {
        collectionId: r2,
        parent: Ei(i)
      };
      return vo(t2).put(o);
    }
    return Dr.resolve();
  }, t.prototype.Qr = function(t2, e) {
    var n2 = [], r2 = IDBKeyRange.bound([e, ""], [at(e), ""], false, true);
    return vo(t2).ts(r2).next(function(t3) {
      for (var r3 = 0, i = t3; r3 < i.length; r3++) {
        var o = i[r3];
        if (o.collectionId !== e)
          break;
        n2.push(Ni(o.parent));
      }
      return n2;
    });
  }, t;
}();
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
function vo(t) {
  return _o.Qn(t, co.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var yo = function() {
  function t(t2) {
    this._a = t2;
  }
  return t.prototype.next = function() {
    return this._a += 2, this._a;
  }, t.fa = function() {
    return new t(0);
  }, t.da = function() {
    return new t(-1);
  }, t;
}(), mo = function() {
  function t(t2, e) {
    this.No = t2, this.serializer = e;
  }
  return t.prototype.wa = function(t2) {
    var e = this;
    return this.ma(t2).next(function(n2) {
      var r2 = new yo(n2.highestTargetId);
      return n2.highestTargetId = r2.next(), e.Ta(t2, n2).next(function() {
        return n2.highestTargetId;
      });
    });
  }, t.prototype.Ea = function(t2) {
    return this.ma(t2).next(function(t3) {
      return gt.J(new mt(t3.lastRemoteSnapshotVersion.seconds, t3.lastRemoteSnapshotVersion.nanoseconds));
    });
  }, t.prototype.Ia = function(t2) {
    return this.ma(t2).next(function(t3) {
      return t3.highestListenSequenceNumber;
    });
  }, t.prototype.Aa = function(t2, e, n2) {
    var r2 = this;
    return this.ma(t2).next(function(i) {
      return i.highestListenSequenceNumber = e, n2 && (i.lastRemoteSnapshotVersion = n2.Z()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r2.Ta(t2, i);
    });
  }, t.prototype.Ra = function(t2, e) {
    var n2 = this;
    return this.ga(t2, e).next(function() {
      return n2.ma(t2).next(function(r2) {
        return r2.targetCount += 1, n2.Pa(e, r2), n2.Ta(t2, r2);
      });
    });
  }, t.prototype.ya = function(t2, e) {
    return this.ga(t2, e);
  }, t.prototype.Va = function(t2, e) {
    var n2 = this;
    return this.pa(t2, e.targetId).next(function() {
      return go(t2).delete(e.targetId);
    }).next(function() {
      return n2.ma(t2);
    }).next(function(e2) {
      return k(e2.targetCount > 0), e2.targetCount -= 1, n2.Ta(t2, e2);
    });
  }, t.prototype.po = function(t2, e, n2) {
    var r2 = this, i = 0, o = [];
    return go(t2).rs(function(s, u2) {
      var a = Pi(u2);
      a.sequenceNumber <= e && null === n2.get(a.targetId) && (i++, o.push(r2.Va(t2, a)));
    }).next(function() {
      return Dr.$n(o);
    }).next(function() {
      return i;
    });
  }, t.prototype.Ce = function(t2, e) {
    return go(t2).rs(function(t3, n2) {
      var r2 = Pi(n2);
      e(r2);
    });
  }, t.prototype.ma = function(t2) {
    return wo(t2).get(ao.key).next(function(t3) {
      return k(null !== t3), t3;
    });
  }, t.prototype.Ta = function(t2, e) {
    return wo(t2).put(ao.key, e);
  }, t.prototype.ga = function(t2, e) {
    return go(t2).put(Vi(this.serializer, e));
  }, t.prototype.Pa = function(t2, e) {
    var n2 = false;
    return t2.targetId > e.highestTargetId && (e.highestTargetId = t2.targetId, n2 = true), t2.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t2.sequenceNumber, n2 = true), n2;
  }, t.prototype.ba = function(t2) {
    return this.ma(t2).next(function(t3) {
      return t3.targetCount;
    });
  }, t.prototype.va = function(t2, e) {
    var n2 = Tt(e), r2 = IDBKeyRange.bound([n2, Number.NEGATIVE_INFINITY], [n2, Number.POSITIVE_INFINITY]), i = null;
    return go(t2).rs({
      range: r2,
      index: so.queryTargetsIndexName
    }, function(t3, n3, r3) {
      var o = Pi(n3);
      Nt(e, o.target) && (i = o, r3.done());
    }).next(function() {
      return i;
    });
  }, t.prototype.Sa = function(t2, e, n2) {
    var r2 = this, i = [], o = bo(t2);
    return e.forEach(function(e2) {
      var s = Ei(e2.path);
      i.push(o.put(new uo(n2, s))), i.push(r2.No.Da(t2, n2, e2));
    }), Dr.$n(i);
  }, t.prototype.Ca = function(t2, e, n2) {
    var r2 = this, i = bo(t2);
    return Dr.forEach(e, function(e2) {
      var o = Ei(e2.path);
      return Dr.$n([i.delete([n2, o]), r2.No.Na(t2, n2, e2)]);
    });
  }, t.prototype.pa = function(t2, e) {
    var n2 = bo(t2), r2 = IDBKeyRange.bound([e], [e + 1], false, true);
    return n2.delete(r2);
  }, t.prototype.Fa = function(t2, e) {
    var n2 = IDBKeyRange.bound([e], [e + 1], false, true), r2 = bo(t2), i = Kt();
    return r2.rs({
      range: n2,
      ss: true
    }, function(t3, e2, n3) {
      var r3 = Ni(t3[1]), o = new F(r3);
      i = i.add(o);
    }).next(function() {
      return i;
    });
  }, t.prototype.Ho = function(t2, e) {
    var n2 = Ei(e.path), r2 = IDBKeyRange.bound([n2], [at(n2)], false, true), i = 0;
    return bo(t2).rs({
      index: uo.documentTargetsIndex,
      ss: true,
      range: r2
    }, function(t3, e2, n3) {
      var r3 = t3[0];
      t3[1];
      0 !== r3 && (i++, n3.done());
    }).next(function() {
      return i > 0;
    });
  }, t.prototype.Ue = function(t2, e) {
    return go(t2).get(e).next(function(t3) {
      return t3 ? Pi(t3) : null;
    });
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function go(t) {
  return _o.Qn(t, so.store);
}
function wo(t) {
  return _o.Qn(t, ao.store);
}
function bo(t) {
  return _o.Qn(t, uo.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Io = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", Eo = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).jo = t, r2.xa = n3, r2;
  }
  return __extends$1(n2, e), n2;
}(pi), _o = function() {
  function t(e, n2, r2, i, o, s, u2, a, c, h) {
    if (this.allowTabSynchronization = e, this.persistenceKey = n2, this.clientId = r2, this.fn = o, this.window = s, this.document = u2, this.$a = c, this.ka = h, this.Ma = null, this.Oa = false, this.isPrimary = false, this.networkEnabled = true, this.La = null, this.inForeground = false, this.Ba = null, this.qa = null, this.Ua = Number.NEGATIVE_INFINITY, this.Qa = function(t2) {
      return Promise.resolve();
    }, !t.Ln())
      throw new I(b.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.No = new Ao(this, i), this.Wa = n2 + "main", this.serializer = new Ai(a), this.ja = new kr(this.Wa, 10, new $i(this.serializer)), this.Ka = new mo(this.No, this.serializer), this.Dr = new po(), this.vr = function(t2, e2) {
      return new Gi(t2, e2);
    }(this.serializer, this.Dr), this.window && this.window.localStorage ? this.Ga = this.window.localStorage : (this.Ga = null, false === h && N("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }
  return t.Qn = function(t2, e) {
    if (t2 instanceof Eo)
      return kr.Qn(t2.jo, e);
    throw D();
  }, t.prototype.start = function() {
    var t2 = this;
    return this.za().then(function() {
      if (!t2.isPrimary && !t2.allowTabSynchronization)
        throw new I(b.FAILED_PRECONDITION, Io);
      return t2.Ha(), t2.Ya(), t2.Ja(), t2.runTransaction("getHighestListenSequenceNumber", "readonly", function(e) {
        return t2.Ka.Ia(e);
      });
    }).then(function(e) {
      t2.Ma = new Jr(e, t2.$a);
    }).then(function() {
      t2.Oa = true;
    }).catch(function(e) {
      return t2.ja && t2.ja.close(), Promise.reject(e);
    });
  }, t.prototype.Xa = function(t2) {
    var r2 = this;
    return this.Qa = function(i) {
      return __awaiter(r2, void 0, void 0, function() {
        return __generator(this, function(e) {
          return this.Ei ? [2, t2(i)] : [2];
        });
      });
    }, t2(this.isPrimary);
  }, t.prototype.Za = function(t2) {
    var r2 = this;
    this.ja.Kn(function(i) {
      return __awaiter(r2, void 0, void 0, function() {
        return __generator(this, function(e) {
          switch (e.label) {
            case 0:
              return null === i.newVersion ? [4, t2()] : [3, 2];
            case 1:
              e.sent(), e.label = 2;
            case 2:
              return [2];
          }
        });
      });
    });
  }, t.prototype.tc = function(t2) {
    var r2 = this;
    this.networkEnabled !== t2 && (this.networkEnabled = t2, this.fn.ws(function() {
      return __awaiter(r2, void 0, void 0, function() {
        return __generator(this, function(t3) {
          switch (t3.label) {
            case 0:
              return this.Ei ? [4, this.za()] : [3, 2];
            case 1:
              t3.sent(), t3.label = 2;
            case 2:
              return [2];
          }
        });
      });
    }));
  }, t.prototype.za = function() {
    var t2 = this;
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function(e) {
      return No(e).put(new fo(t2.clientId, Date.now(), t2.networkEnabled, t2.inForeground)).next(function() {
        if (t2.isPrimary)
          return t2.ec(e).next(function(e2) {
            e2 || (t2.isPrimary = false, t2.fn.Cs(function() {
              return t2.Qa(false);
            }));
          });
      }).next(function() {
        return t2.nc(e);
      }).next(function(n2) {
        return t2.isPrimary && !n2 ? t2.sc(e).next(function() {
          return false;
        }) : !!n2 && t2.ic(e).next(function() {
          return true;
        });
      });
    }).catch(function(e) {
      if (Rr(e))
        return T("IndexedDbPersistence", "Failed to extend owner lease: ", e), t2.isPrimary;
      if (!t2.allowTabSynchronization)
        throw e;
      return T("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), false;
    }).then(function(e) {
      t2.isPrimary !== e && t2.fn.Cs(function() {
        return t2.Qa(e);
      }), t2.isPrimary = e;
    });
  }, t.prototype.ec = function(t2) {
    var e = this;
    return To(t2).get(Ji.key).next(function(t3) {
      return Dr.resolve(e.rc(t3));
    });
  }, t.prototype.oc = function(t2) {
    return No(t2).delete(this.clientId);
  }, t.prototype.ac = function() {
    return __awaiter(this, void 0, void 0, function() {
      var e, r2, i, o, s = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return !this.isPrimary || this.cc(this.Ua, 18e5) ? [3, 2] : (this.Ua = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function(e2) {
              var n3 = t.Qn(e2, fo.store);
              return n3.ts().next(function(t2) {
                var e3 = s.uc(t2, 18e5), r3 = t2.filter(function(t3) {
                  return -1 === e3.indexOf(t3);
                });
                return Dr.forEach(r3, function(t3) {
                  return n3.delete(t3.clientId);
                }).next(function() {
                  return r3;
                });
              });
            }).catch(function() {
              return [];
            })]);
          case 1:
            if (e = n2.sent(), this.Ga)
              for (r2 = 0, i = e; r2 < i.length; r2++)
                o = i[r2], this.Ga.removeItem(this.hc(o.clientId));
            n2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t.prototype.Ja = function() {
    var t2 = this;
    this.qa = this.fn.yn("client_metadata_refresh", 4e3, function() {
      return t2.za().then(function() {
        return t2.ac();
      }).then(function() {
        return t2.Ja();
      });
    });
  }, t.prototype.rc = function(t2) {
    return !!t2 && t2.ownerId === this.clientId;
  }, t.prototype.nc = function(t2) {
    var e = this;
    return this.ka ? Dr.resolve(true) : To(t2).get(Ji.key).next(function(n2) {
      if (null !== n2 && e.cc(n2.leaseTimestampMs, 5e3) && !e.lc(n2.ownerId)) {
        if (e.rc(n2) && e.networkEnabled)
          return true;
        if (!e.rc(n2)) {
          if (!n2.allowTabSynchronization)
            throw new I(b.FAILED_PRECONDITION, Io);
          return false;
        }
      }
      return !(!e.networkEnabled || !e.inForeground) || No(t2).ts().next(function(t3) {
        return void 0 === e.uc(t3, 5e3).find(function(t4) {
          if (e.clientId !== t4.clientId) {
            var n3 = !e.networkEnabled && t4.networkEnabled, r2 = !e.inForeground && t4.inForeground, i = e.networkEnabled === t4.networkEnabled;
            if (n3 || r2 && i)
              return true;
          }
          return false;
        });
      });
    }).next(function(t3) {
      return e.isPrimary !== t3 && T("IndexedDbPersistence", "Client " + (t3 ? "is" : "is not") + " eligible for a primary lease."), t3;
    });
  }, t.prototype.Di = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2 = this;
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return this.Oa = false, this._c(), this.qa && (this.qa.cancel(), this.qa = null), this.fc(), this.dc(), [4, this.ja.runTransaction("shutdown", "readwrite", [Ji.store, fo.store], function(e2) {
              var n2 = new Eo(e2, Jr.ai);
              return t2.sc(n2).next(function() {
                return t2.oc(n2);
              });
            })];
          case 1:
            return e.sent(), this.ja.close(), this.wc(), [2];
        }
      });
    });
  }, t.prototype.uc = function(t2, e) {
    var n2 = this;
    return t2.filter(function(t3) {
      return n2.cc(t3.updateTimeMs, e) && !n2.lc(t3.clientId);
    });
  }, t.prototype.pi = function() {
    var t2 = this;
    return this.runTransaction("getActiveClients", "readonly", function(e) {
      return No(e).ts().next(function(e2) {
        return t2.uc(e2, 18e5).map(function(t3) {
          return t3.clientId;
        });
      });
    });
  }, Object.defineProperty(t.prototype, "Ei", {
    get: function() {
      return this.Oa;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.mc = function(t2) {
    return Ui.xo(t2, this.serializer, this.Dr, this.No);
  }, t.prototype.Tc = function() {
    return this.Ka;
  }, t.prototype.Ec = function() {
    return this.vr;
  }, t.prototype.Ic = function() {
    return this.Dr;
  }, t.prototype.runTransaction = function(t2, e, n2) {
    var r2 = this;
    T("IndexedDbPersistence", "Starting transaction:", t2);
    var i, o = "readonly" === e ? "readonly" : "readwrite";
    return this.ja.runTransaction(t2, o, lo, function(o2) {
      return i = new Eo(o2, r2.Ma ? r2.Ma.next() : Jr.ai), "readwrite-primary" === e ? r2.ec(i).next(function(t3) {
        return !!t3 || r2.nc(i);
      }).next(function(e2) {
        if (!e2)
          throw N("Failed to obtain primary lease for action '" + t2 + "'."), r2.isPrimary = false, r2.fn.Cs(function() {
            return r2.Qa(false);
          }), new I(b.FAILED_PRECONDITION, li);
        return n2(i);
      }).next(function(t3) {
        return r2.ic(i).next(function() {
          return t3;
        });
      }) : r2.Ac(i).next(function() {
        return n2(i);
      });
    }).then(function(t3) {
      return i.br(), t3;
    });
  }, t.prototype.Ac = function(t2) {
    var e = this;
    return To(t2).get(Ji.key).next(function(t3) {
      if (null !== t3 && e.cc(t3.leaseTimestampMs, 5e3) && !e.lc(t3.ownerId) && !e.rc(t3) && !(e.ka || e.allowTabSynchronization && t3.allowTabSynchronization))
        throw new I(b.FAILED_PRECONDITION, Io);
    });
  }, t.prototype.ic = function(t2) {
    var e = new Ji(this.clientId, this.allowTabSynchronization, Date.now());
    return To(t2).put(Ji.key, e);
  }, t.Ln = function() {
    return kr.Ln();
  }, t.prototype.sc = function(t2) {
    var e = this, n2 = To(t2);
    return n2.get(Ji.key).next(function(t3) {
      return e.rc(t3) ? (T("IndexedDbPersistence", "Releasing primary lease."), n2.delete(Ji.key)) : Dr.resolve();
    });
  }, t.prototype.cc = function(t2, e) {
    var n2 = Date.now();
    return !(t2 < n2 - e || t2 > n2 && (N("Detected an update time that is in the future: " + t2 + " > " + n2), 1));
  }, t.prototype.Ha = function() {
    var t2 = this;
    null !== this.document && "function" == typeof this.document.addEventListener && (this.Ba = function() {
      t2.fn.ws(function() {
        return t2.inForeground = "visible" === t2.document.visibilityState, t2.za();
      });
    }, this.document.addEventListener("visibilitychange", this.Ba), this.inForeground = "visible" === this.document.visibilityState);
  }, t.prototype.fc = function() {
    this.Ba && (this.document.removeEventListener("visibilitychange", this.Ba), this.Ba = null);
  }, t.prototype.Ya = function() {
    var t2, e = this;
    "function" == typeof (null === (t2 = this.window) || void 0 === t2 ? void 0 : t2.addEventListener) && (this.La = function() {
      e._c(), e.fn.ws(function() {
        return e.Di();
      });
    }, this.window.addEventListener("unload", this.La));
  }, t.prototype.dc = function() {
    this.La && (this.window.removeEventListener("unload", this.La), this.La = null);
  }, t.prototype.lc = function(t2) {
    var e;
    try {
      var n2 = null !== (null === (e = this.Ga) || void 0 === e ? void 0 : e.getItem(this.hc(t2)));
      return T("IndexedDbPersistence", "Client '" + t2 + "' " + (n2 ? "is" : "is not") + " zombied in LocalStorage"), n2;
    } catch (t3) {
      return N("IndexedDbPersistence", "Failed to get zombied client id.", t3), false;
    }
  }, t.prototype._c = function() {
    if (this.Ga)
      try {
        this.Ga.setItem(this.hc(this.clientId), String(Date.now()));
      } catch (t2) {
        N("Failed to set zombie client id.", t2);
      }
  }, t.prototype.wc = function() {
    if (this.Ga)
      try {
        this.Ga.removeItem(this.hc(this.clientId));
      } catch (t2) {
      }
  }, t.prototype.hc = function(t2) {
    return "firestore_zombie_" + this.persistenceKey + "_" + t2;
  }, t;
}();
function To(t) {
  return _o.Qn(t, Ji.store);
}
function No(t) {
  return _o.Qn(t, fo.store);
}
var Ao = function() {
  function t(t2, e) {
    this.db = t2, this.wo = new Ii(this, e);
  }
  return t.prototype.Po = function(t2) {
    var e = this.Rc(t2);
    return this.db.Tc().ba(t2).next(function(t3) {
      return e.next(function(e2) {
        return t3 + e2;
      });
    });
  }, t.prototype.Rc = function(t2) {
    var e = 0;
    return this.Vo(t2, function(t3) {
      e++;
    }).next(function() {
      return e;
    });
  }, t.prototype.Ce = function(t2, e) {
    return this.db.Tc().Ce(t2, e);
  }, t.prototype.Vo = function(t2, e) {
    return this.gc(t2, function(t3, n2) {
      return e(n2);
    });
  }, t.prototype.Da = function(t2, e, n2) {
    return So(t2, n2);
  }, t.prototype.Na = function(t2, e, n2) {
    return So(t2, n2);
  }, t.prototype.po = function(t2, e, n2) {
    return this.db.Tc().po(t2, e, n2);
  }, t.prototype.Go = function(t2, e) {
    return So(t2, e);
  }, t.prototype.Pc = function(t2, e) {
    return function(t3, e2) {
      var n2 = false;
      return ji(t3).os(function(r2) {
        return Ci(t3, r2, e2).next(function(t4) {
          return t4 && (n2 = true), Dr.resolve(!t4);
        });
      }).next(function() {
        return n2;
      });
    }(t2, e);
  }, t.prototype.bo = function(t2, e) {
    var n2 = this, r2 = this.db.Ec().ra(), i = [], o = 0;
    return this.gc(t2, function(s, u2) {
      if (u2 <= e) {
        var a = n2.Pc(t2, s).next(function(e2) {
          if (!e2)
            return o++, r2.Rr(t2, s).next(function() {
              return r2.Ar(s), bo(t2).delete([0, Ei(s.path)]);
            });
        });
        i.push(a);
      }
    }).next(function() {
      return Dr.$n(i);
    }).next(function() {
      return r2.apply(t2);
    }).next(function() {
      return o;
    });
  }, t.prototype.removeTarget = function(t2, e) {
    var n2 = e.st(t2.xa);
    return this.db.Tc().ya(t2, n2);
  }, t.prototype.yc = function(t2, e) {
    return So(t2, e);
  }, t.prototype.gc = function(t2, e) {
    var n2, r2 = bo(t2), i = Jr.ai;
    return r2.rs({
      index: uo.documentTargetsIndex
    }, function(t3, r3) {
      var o = t3[0], s = (t3[1], r3.path), u2 = r3.sequenceNumber;
      0 === o ? (i !== Jr.ai && e(new F(Ni(n2)), i), i = u2, n2 = s) : i = Jr.ai;
    }).next(function() {
      i !== Jr.ai && e(new F(Ni(n2)), i);
    });
  }, t.prototype.So = function(t2) {
    return this.db.Ec().aa(t2);
  }, t;
}();
function So(t, e) {
  return bo(t).put(function(t2, e2) {
    return new uo(0, Ei(t2.path), e2);
  }(e, t.xa));
}
function Do(t, e) {
  var n2 = t.projectId;
  return t.j || (n2 += "." + t.database), "firestore/" + e + "/" + n2 + "/";
}
var ko = function() {
  function t(t2, e, n2) {
    this.persistence = t2, this.Vc = e, this.bc = new Ot(st), this.vc = new yt(function(t3) {
      return Tt(t3);
    }, Nt), this.Sc = gt.min(), this.Sr = t2.mc(n2), this.Dc = t2.Ec(), this.Ka = t2.Tc(), this.Cc = new di(this.Dc, this.Sr, this.persistence.Ic()), this.Vc.Nc(this.Cc);
  }
  return t.prototype.Io = function(t2) {
    var e = this;
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function(n2) {
      return t2.vo(n2, e.bc);
    });
  }, t;
}();
function xo(t, e) {
  var n2 = x(t);
  return n2.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function(t2) {
    var r2 = e.batch.keys(), i = n2.Dc.ra({
      oa: true
    });
    return function(t3, e2, n3, r3) {
      var i2 = n3.batch, o = i2.keys(), s = Dr.resolve();
      return o.forEach(function(t4) {
        s = s.next(function() {
          return r3.Rr(e2, t4);
        }).next(function(e3) {
          var o2 = e3, s2 = n3.dr.get(t4);
          k(null !== s2), (!o2 || o2.version.L(s2) < 0) && ((o2 = i2.cr(t4, o2, n3)) && r3.Er(o2, n3._r));
        });
      }), s.next(function() {
        return t3.Sr.Wo(e2, i2);
      });
    }(n2, t2, e, i).next(function() {
      return i.apply(t2);
    }).next(function() {
      return n2.Sr.zo(t2);
    }).next(function() {
      return n2.Cc.kr(t2, r2);
    });
  });
}
function Lo(t) {
  var e = x(t);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function(t2) {
    return e.Ka.Ea(t2);
  });
}
function Ro(t, e) {
  var n2 = x(t), r2 = e.nt, i = n2.bc;
  return n2.persistence.runTransaction("Apply remote event", "readwrite-primary", function(t2) {
    var o = n2.Dc.ra({
      oa: true
    });
    i = n2.bc;
    var s = [];
    e.zt.forEach(function(e2, o2) {
      var u3 = i.get(o2);
      if (u3) {
        s.push(n2.Ka.Ca(t2, e2.se, o2).next(function() {
          return n2.Ka.Sa(t2, e2.ee, o2);
        }));
        var a2 = e2.resumeToken;
        if (a2.O() > 0) {
          var c2 = u3.it(a2, r2).st(t2.xa);
          i = i.ot(o2, c2), function(t3, e3, n3) {
            return k(e3.resumeToken.O() > 0), 0 === t3.resumeToken.O() || (e3.nt.X() - t3.nt.X() >= 3e8 || n3.ee.size + n3.ne.size + n3.se.size > 0);
          }(u3, c2, e2) && s.push(n2.Ka.ya(t2, c2));
        }
      }
    });
    var u2 = Mt(), a = Kt();
    if (e.Yt.forEach(function(t3, e2) {
      a = a.add(t3);
    }), s.push(o.getEntries(t2, a).next(function(i2) {
      e.Yt.forEach(function(a2, c2) {
        var h = i2.get(a2);
        c2 instanceof Bn && c2.version.isEqual(gt.min()) ? (o.Ar(a2, r2), u2 = u2.ot(a2, c2)) : null == h || c2.version.L(h.version) > 0 || 0 === c2.version.L(h.version) && h.hasPendingWrites ? (o.Er(c2, r2), u2 = u2.ot(a2, c2)) : T("LocalStore", "Ignoring outdated watch update for ", a2, ". Current version:", h.version, " Watch version:", c2.version), e.Jt.has(a2) && s.push(n2.persistence.No.yc(t2, a2));
      });
    })), !r2.isEqual(gt.min())) {
      var c = n2.Ka.Ea(t2).next(function(e2) {
        return n2.Ka.Aa(t2, t2.xa, r2);
      });
      s.push(c);
    }
    return Dr.$n(s).next(function() {
      return o.apply(t2);
    }).next(function() {
      return n2.Cc.Mr(t2, u2);
    });
  }).then(function(t2) {
    return n2.bc = i, t2;
  });
}
function Oo(t, e) {
  var n2 = x(t);
  return n2.persistence.runTransaction("Get next mutation batch", "readonly", function(t2) {
    return void 0 === e && (e = -1), n2.Sr.Bo(t2, e);
  });
}
function Po(t, e) {
  var n2 = x(t);
  return n2.persistence.runTransaction("Allocate target", "readwrite", function(t2) {
    var r2;
    return n2.Ka.va(t2, e).next(function(i) {
      return i ? (r2 = i, Dr.resolve(r2)) : n2.Ka.wa(t2).next(function(i2) {
        return r2 = new kt(e, i2, 0, t2.xa), n2.Ka.Ra(t2, r2).next(function() {
          return r2;
        });
      });
    });
  }).then(function(t2) {
    var r2 = n2.bc.get(t2.targetId);
    return (null === r2 || t2.nt.L(r2.nt) > 0) && (n2.bc = n2.bc.ot(t2.targetId, t2), n2.vc.set(e, t2.targetId)), t2;
  });
}
function Vo(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, o, s, u2;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = x(t), o = e.bc.get(r2), s = i ? "readwrite" : "readwrite-primary", n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 5]), i ? [3, 3] : [4, e.persistence.runTransaction("Release target", s, function(t2) {
            return e.persistence.No.removeTarget(t2, o);
          })];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return [3, 5];
        case 4:
          if (!Rr(u2 = n2.sent()))
            throw u2;
          return T("LocalStore", "Failed to update sequence numbers for target " + r2 + ": " + u2), [3, 5];
        case 5:
          return e.bc = e.bc.remove(r2), e.vc.delete(o.target), [2];
      }
    });
  });
}
function Uo(t, e, n2) {
  var r2 = x(t), i = gt.min(), o = Kt();
  return r2.persistence.runTransaction("Execute query", "readonly", function(t2) {
    return function(t3, e2, n3) {
      var r3 = x(t3), i2 = r3.vc.get(n3);
      return void 0 !== i2 ? Dr.resolve(r3.bc.get(i2)) : r3.Ka.va(e2, n3);
    }(r2, t2, er(e)).next(function(e2) {
      if (e2)
        return i = e2.lastLimboFreeSnapshotVersion, r2.Ka.Fa(t2, e2.targetId).next(function(t3) {
          o = t3;
        });
    }).next(function() {
      return r2.Vc.Lr(t2, e, n2 ? i : gt.min(), n2 ? o : Kt());
    }).next(function(t3) {
      return {
        documents: t3,
        Fc: o
      };
    });
  });
}
function Co(t, e) {
  var n2 = x(t), r2 = x(n2.Ka), i = n2.bc.get(e);
  return i ? Promise.resolve(i.target) : n2.persistence.runTransaction("Get target data", "readonly", function(t2) {
    return r2.Ue(t2, e).next(function(t3) {
      return t3 ? t3.target : null;
    });
  });
}
function Fo(t) {
  var e = x(t);
  return e.persistence.runTransaction("Get new document changes", "readonly", function(t2) {
    return function(t3, e2, n2) {
      var r2 = x(t3), i = Mt(), o = ki(n2), s = Ki(e2), u2 = IDBKeyRange.lowerBound(o, true);
      return s.rs({
        index: io.readTimeIndex,
        range: u2
      }, function(t4, e3) {
        var n3 = Si(r2.serializer, e3);
        i = i.ot(n3.key, n3), o = e3.readTime;
      }).next(function() {
        return {
          xc: i,
          readTime: xi(o)
        };
      });
    }(e.Dc, t2, e.Sc);
  }).then(function(t2) {
    var n2 = t2.xc, r2 = t2.readTime;
    return e.Sc = r2, n2;
  });
}
function Mo(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e;
    return __generator(this, function(n2) {
      return [2, (e = x(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", function(t2) {
        return function(t3) {
          var e2 = Ki(t3), n3 = gt.min();
          return e2.rs({
            index: io.readTimeIndex,
            reverse: true
          }, function(t4, e3, r2) {
            e3.readTime && (n3 = xi(e3.readTime)), r2.done();
          }).next(function() {
            return n3;
          });
        }(t2);
      }).then(function(t2) {
        e.Sc = t2;
      })];
    });
  });
}
function qo(t) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      if (t.code !== b.FAILED_PRECONDITION || t.message !== li)
        throw t;
      return T("LocalStore", "Unexpectedly lost primary lease"), [2];
    });
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var jo = function() {
  function t() {
    this.$c = new Ut(Go.kc), this.Mc = new Ut(Go.Oc);
  }
  return t.prototype.m = function() {
    return this.$c.m();
  }, t.prototype.Da = function(t2, e) {
    var n2 = new Go(t2, e);
    this.$c = this.$c.add(n2), this.Mc = this.Mc.add(n2);
  }, t.prototype.Lc = function(t2, e) {
    var n2 = this;
    t2.forEach(function(t3) {
      return n2.Da(t3, e);
    });
  }, t.prototype.Na = function(t2, e) {
    this.Bc(new Go(t2, e));
  }, t.prototype.qc = function(t2, e) {
    var n2 = this;
    t2.forEach(function(t3) {
      return n2.Na(t3, e);
    });
  }, t.prototype.Uc = function(t2) {
    var e = this, n2 = new F(new V([])), r2 = new Go(n2, t2), i = new Go(n2, t2 + 1), o = [];
    return this.Mc.Ft([r2, i], function(t3) {
      e.Bc(t3), o.push(t3.key);
    }), o;
  }, t.prototype.Qc = function() {
    var t2 = this;
    this.$c.forEach(function(e) {
      return t2.Bc(e);
    });
  }, t.prototype.Bc = function(t2) {
    this.$c = this.$c.delete(t2), this.Mc = this.Mc.delete(t2);
  }, t.prototype.Wc = function(t2) {
    var e = new F(new V([])), n2 = new Go(e, t2), r2 = new Go(e, t2 + 1), i = Kt();
    return this.Mc.Ft([n2, r2], function(t3) {
      i = i.add(t3.key);
    }), i;
  }, t.prototype.Ho = function(t2) {
    var e = new Go(t2, 0), n2 = this.$c.$t(e);
    return null !== n2 && t2.isEqual(n2.key);
  }, t;
}(), Go = function() {
  function t(t2, e) {
    this.key = t2, this.jc = e;
  }
  return t.kc = function(t2, e) {
    return F.i(t2.key, e.key) || st(t2.jc, e.jc);
  }, t.Oc = function(t2, e) {
    return st(t2.jc, e.jc) || F.i(t2.key, e.key);
  }, t;
}(), zo = function(t, e) {
  this.user = e, this.type = "OAuth", this.Kc = {}, this.Kc.Authorization = "Bearer " + t;
}, Bo = function() {
  function t() {
    this.Gc = null;
  }
  return t.prototype.getToken = function() {
    return Promise.resolve(null);
  }, t.prototype.zc = function() {
  }, t.prototype.Hc = function(t2) {
    this.Gc = t2, t2(Xr.UNAUTHENTICATED);
  }, t.prototype.Yc = function() {
    this.Gc = null;
  }, t;
}(), Ko = function() {
  function t(t2) {
    var e = this;
    this.Jc = null, this.currentUser = Xr.UNAUTHENTICATED, this.Xc = false, this.Zc = 0, this.Gc = null, this.forceRefresh = false, this.Jc = function() {
      e.Zc++, e.currentUser = e.tu(), e.Xc = true, e.Gc && e.Gc(e.currentUser);
    }, this.Zc = 0, this.auth = t2.getImmediate({
      optional: true
    }), this.auth ? this.auth.addAuthTokenListener(this.Jc) : (this.Jc(null), t2.get().then(function(t3) {
      e.auth = t3, e.Jc && e.auth.addAuthTokenListener(e.Jc);
    }, function() {
    }));
  }
  return t.prototype.getToken = function() {
    var t2 = this, e = this.Zc, n2 = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(n2).then(function(n3) {
      return t2.Zc !== e ? (T("FirebaseCredentialsProvider", "getToken aborted due to token change."), t2.getToken()) : n3 ? (k("string" == typeof n3.accessToken), new zo(n3.accessToken, t2.currentUser)) : null;
    }) : Promise.resolve(null);
  }, t.prototype.zc = function() {
    this.forceRefresh = true;
  }, t.prototype.Hc = function(t2) {
    this.Gc = t2, this.Xc && t2(this.currentUser);
  }, t.prototype.Yc = function() {
    this.auth && this.auth.removeAuthTokenListener(this.Jc), this.Jc = null, this.Gc = null;
  }, t.prototype.tu = function() {
    var t2 = this.auth && this.auth.getUid();
    return k(null === t2 || "string" == typeof t2), new Xr(t2);
  }, t;
}(), Wo = function() {
  function t(t2, e) {
    this.eu = t2, this.nu = e, this.type = "FirstParty", this.user = Xr.ni;
  }
  return Object.defineProperty(t.prototype, "Kc", {
    get: function() {
      var t2 = {
        "X-Goog-AuthUser": this.nu
      }, e = this.eu.auth.getAuthHeaderValueForFirstParty([]);
      return e && (t2.Authorization = e), t2;
    },
    enumerable: false,
    configurable: true
  }), t;
}(), Qo = function() {
  function t(t2, e) {
    this.eu = t2, this.nu = e;
  }
  return t.prototype.getToken = function() {
    return Promise.resolve(new Wo(this.eu, this.nu));
  }, t.prototype.Hc = function(t2) {
    t2(Xr.ni);
  }, t.prototype.Yc = function() {
  }, t.prototype.zc = function() {
  }, t;
}(), Ho = function() {
  function t(t2, e, n2, r2, i, o) {
    this.fn = t2, this.su = n2, this.iu = r2, this.ru = i, this.listener = o, this.state = 0, this.ou = 0, this.au = null, this.stream = null, this.ys = new Sr(t2, e);
  }
  return t.prototype.cu = function() {
    return 1 === this.state || 2 === this.state || 4 === this.state;
  }, t.prototype.uu = function() {
    return 2 === this.state;
  }, t.prototype.start = function() {
    3 !== this.state ? this.auth() : this.hu();
  }, t.prototype.stop = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        switch (t2.label) {
          case 0:
            return this.cu() ? [4, this.close(0)] : [3, 2];
          case 1:
            t2.sent(), t2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t.prototype.lu = function() {
    this.state = 0, this.ys.reset();
  }, t.prototype._u = function() {
    var t2 = this;
    this.uu() && null === this.au && (this.au = this.fn.yn(this.su, 6e4, function() {
      return t2.fu();
    }));
  }, t.prototype.du = function(t2) {
    this.wu(), this.stream.send(t2);
  }, t.prototype.fu = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        return this.uu() ? [2, this.close(0)] : [2];
      });
    });
  }, t.prototype.wu = function() {
    this.au && (this.au.cancel(), this.au = null);
  }, t.prototype.close = function(t2, r2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return this.wu(), this.ys.cancel(), this.ou++, 3 !== t2 ? this.ys.reset() : r2 && r2.code === b.RESOURCE_EXHAUSTED ? (N(r2.toString()), N("Using maximum backoff delay to prevent overloading the backend."), this.ys.Rn()) : r2 && r2.code === b.UNAUTHENTICATED && this.ru.zc(), null !== this.stream && (this.mu(), this.stream.close(), this.stream = null), this.state = t2, [4, this.listener.Tu(r2)];
          case 1:
            return e.sent(), [2];
        }
      });
    });
  }, t.prototype.mu = function() {
  }, t.prototype.auth = function() {
    var t2 = this;
    this.state = 1;
    var e = this.Eu(this.ou), n2 = this.ou;
    this.ru.getToken().then(function(e2) {
      t2.ou === n2 && t2.Iu(e2);
    }, function(n3) {
      e(function() {
        var e2 = new I(b.UNKNOWN, "Fetching auth token failed: " + n3.message);
        return t2.Au(e2);
      });
    });
  }, t.prototype.Iu = function(t2) {
    var e = this, n2 = this.Eu(this.ou);
    this.stream = this.Ru(t2), this.stream.gu(function() {
      n2(function() {
        return e.state = 2, e.listener.gu();
      });
    }), this.stream.Tu(function(t3) {
      n2(function() {
        return e.Au(t3);
      });
    }), this.stream.onMessage(function(t3) {
      n2(function() {
        return e.onMessage(t3);
      });
    });
  }, t.prototype.hu = function() {
    var t2 = this;
    this.state = 4, this.ys.gn(function() {
      return __awaiter(t2, void 0, void 0, function() {
        return __generator(this, function(t3) {
          return this.state = 0, this.start(), [2];
        });
      });
    });
  }, t.prototype.Au = function(t2) {
    return T("PersistentStream", "close with error: " + t2), this.stream = null, this.close(3, t2);
  }, t.prototype.Eu = function(t2) {
    var e = this;
    return function(n2) {
      e.fn.ws(function() {
        return e.ou === t2 ? n2() : (T("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
      });
    };
  }, t;
}(), Yo = function(e) {
  function n2(t, n3, r2, i, o) {
    var s = this;
    return (s = e.call(this, t, "listen_stream_connection_backoff", "listen_stream_idle", n3, r2, o) || this).serializer = i, s;
  }
  return __extends$1(n2, e), n2.prototype.Ru = function(t) {
    return this.iu.Pu("Listen", t);
  }, n2.prototype.onMessage = function(t) {
    this.ys.reset();
    var e2 = function(t2, e3) {
      var n4;
      if ("targetChange" in e3) {
        e3.targetChange;
        var r2 = function(t3) {
          return "NO_CHANGE" === t3 ? 0 : "ADD" === t3 ? 1 : "REMOVE" === t3 ? 2 : "CURRENT" === t3 ? 3 : "RESET" === t3 ? 4 : D();
        }(e3.targetChange.targetChangeType || "NO_CHANGE"), i = e3.targetChange.targetIds || [], o = function(t3, e4) {
          return t3.Qe ? (k(void 0 === e4 || "string" == typeof e4), ct.fromBase64String(e4 || "")) : (k(void 0 === e4 || e4 instanceof Uint8Array), ct.fromUint8Array(e4 || new Uint8Array()));
        }(t2, e3.targetChange.resumeToken), s = e3.targetChange.cause, u2 = s && function(t3) {
          var e4 = void 0 === t3.code ? b.UNKNOWN : Rt(t3.code);
          return new I(e4, t3.message || "");
        }(s);
        n4 = new ee(r2, i, o, u2 || null);
      } else if ("documentChange" in e3) {
        e3.documentChange;
        var a = e3.documentChange;
        a.document, a.document.name, a.document.updateTime;
        var c = Me(t2, a.document.name), h = Ve(a.document.updateTime), f = new Mn({
          mapValue: {
            fields: a.document.fields
          }
        }), l = new zn(c, h, f, {}), p2 = a.targetIds || [], d = a.removedTargetIds || [];
        n4 = new Zt(p2, d, l.key, l);
      } else if ("documentDelete" in e3) {
        e3.documentDelete;
        var v2 = e3.documentDelete;
        v2.document;
        var y2 = Me(t2, v2.document), m = v2.readTime ? Ve(v2.readTime) : gt.min(), g2 = new Bn(y2, m), w2 = v2.removedTargetIds || [];
        n4 = new Zt([], w2, g2.key, g2);
      } else if ("documentRemove" in e3) {
        e3.documentRemove;
        var E2 = e3.documentRemove;
        E2.document;
        var _2 = Me(t2, E2.document), T2 = E2.removedTargetIds || [];
        n4 = new Zt([], T2, _2, null);
      } else {
        if (!("filter" in e3))
          return D();
        e3.filter;
        var N2 = e3.filter;
        N2.targetId;
        var A2 = N2.count || 0, S2 = new xt(A2), x2 = N2.targetId;
        n4 = new te(x2, S2);
      }
      return n4;
    }(this.serializer, t), n3 = function(t2) {
      if (!("targetChange" in t2))
        return gt.min();
      var e3 = t2.targetChange;
      return e3.targetIds && e3.targetIds.length ? gt.min() : e3.readTime ? Ve(e3.readTime) : gt.min();
    }(t);
    return this.listener.yu(e2, n3);
  }, n2.prototype.Vu = function(t) {
    var e2 = {};
    e2.database = Ge(this.serializer), e2.addTarget = function(t2, e3) {
      var n4, r2 = e3.target;
      return (n4 = At(r2) ? {
        documents: Qe(t2, r2)
      } : {
        query: He(t2, r2)
      }).targetId = e3.targetId, e3.resumeToken.O() > 0 && (n4.resumeToken = Oe(t2, e3.resumeToken)), n4;
    }(this.serializer, t);
    var n3 = function(t2, e3) {
      var n4 = function(t3, e4) {
        switch (e4) {
          case 0:
            return null;
          case 1:
            return "existence-filter-mismatch";
          case 2:
            return "limbo-document";
          default:
            return D();
        }
      }(0, e3.et);
      return null == n4 ? null : {
        "goog-listen-tags": n4
      };
    }(this.serializer, t);
    n3 && (e2.labels = n3), this.du(e2);
  }, n2.prototype.pu = function(t) {
    var e2 = {};
    e2.database = Ge(this.serializer), e2.removeTarget = t, this.du(e2);
  }, n2;
}(Ho), $o = function(e) {
  function n2(t, n3, r2, i, o) {
    var s = this;
    return (s = e.call(this, t, "write_stream_connection_backoff", "write_stream_idle", n3, r2, o) || this).serializer = i, s.bu = false, s;
  }
  return __extends$1(n2, e), Object.defineProperty(n2.prototype, "vu", {
    get: function() {
      return this.bu;
    },
    enumerable: false,
    configurable: true
  }), n2.prototype.start = function() {
    this.bu = false, this.lastStreamToken = void 0, e.prototype.start.call(this);
  }, n2.prototype.mu = function() {
    this.bu && this.Su([]);
  }, n2.prototype.Ru = function(t) {
    return this.iu.Pu("Write", t);
  }, n2.prototype.onMessage = function(t) {
    if (k(!!t.streamToken), this.lastStreamToken = t.streamToken, this.bu) {
      this.ys.reset();
      var e2 = function(t2, e3) {
        return t2 && t2.length > 0 ? (k(void 0 !== e3), t2.map(function(t3) {
          return function(t4, e4) {
            var n4 = t4.updateTime ? Ve(t4.updateTime) : Ve(e4);
            n4.isEqual(gt.min()) && (n4 = Ve(e4));
            var r2 = null;
            return t4.transformResults && t4.transformResults.length > 0 && (r2 = t4.transformResults), new En(n4, r2);
          }(t3, e3);
        })) : [];
      }(t.writeResults, t.commitTime), n3 = Ve(t.commitTime);
      return this.listener.Du(n3, e2);
    }
    return k(!t.writeResults || 0 === t.writeResults.length), this.bu = true, this.listener.Cu();
  }, n2.prototype.Nu = function() {
    var t = {};
    t.database = Ge(this.serializer), this.du(t);
  }, n2.prototype.Su = function(t) {
    var e2 = this, n3 = {
      streamToken: this.lastStreamToken,
      writes: t.map(function(t2) {
        return Ke(e2.serializer, t2);
      })
    };
    this.du(n3);
  }, n2;
}(Ho), Xo = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this) || this).credentials = t, i.iu = n3, i.serializer = r2, i.Fu = false, i;
  }
  return __extends$1(n2, e), n2.prototype.xu = function() {
    if (this.Fu)
      throw new I(b.FAILED_PRECONDITION, "The client has already been terminated.");
  }, n2.prototype.$u = function(t, e2, n3) {
    var r2 = this;
    return this.xu(), this.credentials.getToken().then(function(i) {
      return r2.iu.$u(t, e2, n3, i);
    }).catch(function(t2) {
      throw t2.code === b.UNAUTHENTICATED && r2.credentials.zc(), t2;
    });
  }, n2.prototype.ku = function(t, e2, n3) {
    var r2 = this;
    return this.xu(), this.credentials.getToken().then(function(i) {
      return r2.iu.ku(t, e2, n3, i);
    }).catch(function(t2) {
      throw t2.code === b.UNAUTHENTICATED && r2.credentials.zc(), t2;
    });
  }, n2.prototype.terminate = function() {
    this.Fu = false;
  }, n2;
}(function() {
}), Jo = function() {
  function t(t2, e) {
    this.cs = t2, this.di = e, this.state = "Unknown", this.Mu = 0, this.Ou = null, this.Lu = true;
  }
  return t.prototype.Bu = function() {
    var t2 = this;
    0 === this.Mu && (this.qu("Unknown"), this.Ou = this.cs.yn("online_state_timeout", 1e4, function() {
      return t2.Ou = null, t2.Uu("Backend didn't respond within 10 seconds."), t2.qu("Offline"), Promise.resolve();
    }));
  }, t.prototype.Qu = function(t2) {
    "Online" === this.state ? this.qu("Unknown") : (this.Mu++, this.Mu >= 1 && (this.Wu(), this.Uu("Connection failed 1 times. Most recent error: " + t2.toString()), this.qu("Offline")));
  }, t.prototype.set = function(t2) {
    this.Wu(), this.Mu = 0, "Online" === t2 && (this.Lu = false), this.qu(t2);
  }, t.prototype.qu = function(t2) {
    t2 !== this.state && (this.state = t2, this.di(t2));
  }, t.prototype.Uu = function(t2) {
    var e = "Could not reach Cloud Firestore backend. " + t2 + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
    this.Lu ? (N(e), this.Lu = false) : T("OnlineStateTracker", e);
  }, t.prototype.Wu = function() {
    null !== this.Ou && (this.Ou.cancel(), this.Ou = null);
  }, t;
}(), Zo = function(t, r2, i, o, s) {
  var u2 = this;
  this.ju = t, this.Ku = r2, this.cs = i, this.Gu = {}, this.zu = [], this.Hu = /* @__PURE__ */ new Map(), this.Yu = /* @__PURE__ */ new Set(), this.Ju = [], this.Xu = s, this.Xu.Zu(function(t2) {
    i.ws(function() {
      return __awaiter(u2, void 0, void 0, function() {
        return __generator(this, function(t3) {
          switch (t3.label) {
            case 0:
              return cs(this) ? (T("RemoteStore", "Restarting streams for network reachability change."), [4, function(t4) {
                return __awaiter(this, void 0, void 0, function() {
                  var e;
                  return __generator(this, function(n2) {
                    switch (n2.label) {
                      case 0:
                        return (e = x(t4)).Yu.add(4), [4, es(e)];
                      case 1:
                        return n2.sent(), e.th.set("Unknown"), e.Yu.delete(4), [4, ts(e)];
                      case 2:
                        return n2.sent(), [2];
                    }
                  });
                });
              }(this)]) : [3, 2];
            case 1:
              t3.sent(), t3.label = 2;
            case 2:
              return [2];
          }
        });
      });
    });
  }), this.th = new Jo(i, o);
};
function ts(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e, r2;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          if (!cs(t))
            return [3, 4];
          e = 0, r2 = t.Ju, n2.label = 1;
        case 1:
          return e < r2.length ? [4, (0, r2[e])(true)] : [3, 4];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return e++, [3, 1];
        case 4:
          return [2];
      }
    });
  });
}
function es(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e, r2;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = 0, r2 = t.Ju, n2.label = 1;
        case 1:
          return e < r2.length ? [4, (0, r2[e])(false)] : [3, 4];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return e++, [3, 1];
        case 4:
          return [2];
      }
    });
  });
}
function ns(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e = x(t), T("RemoteStore", "RemoteStore shutting down."), e.Yu.add(5), [4, es(e)];
        case 1:
          return n2.sent(), e.Xu.Di(), e.th.set("Unknown"), [2];
      }
    });
  });
}
function rs(t, e) {
  var n2 = x(t);
  n2.Hu.has(e.targetId) || (n2.Hu.set(e.targetId, e), as(n2) ? us(n2) : Ts(n2).uu() && os(n2, e));
}
function is(t, e) {
  var n2 = x(t), r2 = Ts(n2);
  n2.Hu.delete(e), r2.uu() && ss(n2, e), 0 === n2.Hu.size && (r2.uu() ? r2._u() : cs(n2) && n2.th.set("Unknown"));
}
function os(t, e) {
  t.eh.Ie(e.targetId), Ts(t).Vu(e);
}
function ss(t, e) {
  t.eh.Ie(e), Ts(t).pu(e);
}
function us(t) {
  t.eh = new re({
    qe: function(e) {
      return t.Gu.qe(e);
    },
    Ue: function(e) {
      return t.Hu.get(e) || null;
    }
  }), Ts(t).start(), t.th.Bu();
}
function as(t) {
  return cs(t) && !Ts(t).cu() && t.Hu.size > 0;
}
function cs(t) {
  return 0 === x(t).Yu.size;
}
function hs(t) {
  t.eh = void 0;
}
function fs(t) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      return t.Hu.forEach(function(e2, n2) {
        os(t, e2);
      }), [2];
    });
  });
}
function ls(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      return hs(t), as(t) ? (t.th.Qu(r2), us(t)) : t.th.set("Unknown"), [2];
    });
  });
}
function ps(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var o, s, u2;
    return __generator(this, function(a) {
      switch (a.label) {
        case 0:
          if (t.th.set("Online"), !(r2 instanceof ee && 2 === r2.state && r2.cause))
            return [3, 6];
          a.label = 1;
        case 1:
          return a.trys.push([1, 3, , 5]), [
            4,
            function(t2, r3) {
              return __awaiter(this, void 0, void 0, function() {
                var e, i2, o2, s2;
                return __generator(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      e = r3.cause, i2 = 0, o2 = r3.targetIds, n2.label = 1;
                    case 1:
                      return i2 < o2.length ? (s2 = o2[i2], t2.Hu.has(s2) ? [4, t2.Gu.nh(s2, e)] : [3, 3]) : [3, 5];
                    case 2:
                      n2.sent(), t2.Hu.delete(s2), t2.eh.removeTarget(s2), n2.label = 3;
                    case 3:
                      n2.label = 4;
                    case 4:
                      return i2++, [3, 1];
                    case 5:
                      return [2];
                  }
                });
              });
            }(t, r2)
          ];
        case 2:
          return a.sent(), [3, 5];
        case 3:
          return o = a.sent(), T("RemoteStore", "Failed to remove targets %s: %s ", r2.targetIds.join(","), o), [4, ds(t, o)];
        case 4:
          return a.sent(), [3, 5];
        case 5:
          return [3, 13];
        case 6:
          if (r2 instanceof Zt ? t.eh.be(r2) : r2 instanceof te ? t.eh.$e(r2) : t.eh.De(r2), i.isEqual(gt.min()))
            return [3, 13];
          a.label = 7;
        case 7:
          return a.trys.push([7, 11, , 13]), [4, Lo(t.ju)];
        case 8:
          return s = a.sent(), i.L(s) >= 0 ? [
            4,
            function(t2, e) {
              var n2 = t2.eh.Oe(e);
              return n2.zt.forEach(function(n3, r3) {
                if (n3.resumeToken.O() > 0) {
                  var i2 = t2.Hu.get(r3);
                  i2 && t2.Hu.set(r3, i2.it(n3.resumeToken, e));
                }
              }), n2.Ht.forEach(function(e2) {
                var n3 = t2.Hu.get(e2);
                if (n3) {
                  t2.Hu.set(e2, n3.it(ct.B, n3.nt)), ss(t2, e2);
                  var r3 = new kt(n3.target, e2, 1, n3.sequenceNumber);
                  os(t2, r3);
                }
              }), t2.Gu.sh(n2);
            }(t, i)
          ] : [3, 10];
        case 9:
          a.sent(), a.label = 10;
        case 10:
          return [3, 13];
        case 11:
          return T("RemoteStore", "Failed to raise snapshot:", u2 = a.sent()), [4, ds(t, u2)];
        case 12:
          return a.sent(), [3, 13];
        case 13:
          return [2];
      }
    });
  });
}
function ds(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var o = this;
    return __generator(this, function(s) {
      switch (s.label) {
        case 0:
          if (!Rr(r2))
            throw r2;
          return t.Yu.add(1), [4, es(t)];
        case 1:
          return s.sent(), t.th.set("Offline"), i || (i = function() {
            return Lo(t.ju);
          }), t.cs.Cs(function() {
            return __awaiter(o, void 0, void 0, function() {
              return __generator(this, function(e) {
                switch (e.label) {
                  case 0:
                    return T("RemoteStore", "Retrying IndexedDB access"), [4, i()];
                  case 1:
                    return e.sent(), t.Yu.delete(1), [4, ts(t)];
                  case 2:
                    return e.sent(), [2];
                }
              });
            });
          }), [2];
      }
    });
  });
}
function vs(t, e) {
  return e().catch(function(n2) {
    return ds(t, n2, e);
  });
}
function ys(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e, r2, i, o, s;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = x(t), r2 = Ns(e), i = e.zu.length > 0 ? e.zu[e.zu.length - 1].batchId : -1, n2.label = 1;
        case 1:
          if (!function(t2) {
            return cs(t2) && t2.zu.length < 10;
          }(e))
            return [3, 7];
          n2.label = 2;
        case 2:
          return n2.trys.push([2, 4, , 6]), [4, Oo(e.ju, i)];
        case 3:
          return null === (o = n2.sent()) ? (0 === e.zu.length && r2._u(), [3, 7]) : (i = o.batchId, function(t2, e2) {
            t2.zu.push(e2);
            var n3 = Ns(t2);
            n3.uu() && n3.vu && n3.Su(e2.mutations);
          }(e, o), [3, 6]);
        case 4:
          return s = n2.sent(), [4, ds(e, s)];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [3, 1];
        case 7:
          return ms(e) && gs(e), [2];
      }
    });
  });
}
function ms(t) {
  return cs(t) && !Ns(t).cu() && t.zu.length > 0;
}
function gs(t) {
  Ns(t).start();
}
function ws(t) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      return Ns(t).Nu(), [2];
    });
  });
}
function bs(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e, r2, i, o;
    return __generator(this, function(n2) {
      for (e = Ns(t), r2 = 0, i = t.zu; r2 < i.length; r2++)
        o = i[r2], e.Su(o.mutations);
      return [2];
    });
  });
}
function Is(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, o;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e = t.zu.shift(), o = hi.from(e, r2, i), [4, vs(t, function() {
            return t.Gu.ih(o);
          })];
        case 1:
          return n2.sent(), [4, ys(t)];
        case 2:
          return n2.sent(), [2];
      }
    });
  });
}
function Es(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(i) {
      switch (i.label) {
        case 0:
          return r2 && Ns(t).vu ? [4, function(t2, r3) {
            return __awaiter(this, void 0, void 0, function() {
              var e, i2;
              return __generator(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    return Lt(i2 = r3.code) && i2 !== b.ABORTED ? (e = t2.zu.shift(), Ns(t2).lu(), [4, vs(t2, function() {
                      return t2.Gu.rh(e.batchId, r3);
                    })]) : [3, 3];
                  case 1:
                    return n2.sent(), [4, ys(t2)];
                  case 2:
                    n2.sent(), n2.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
          }(t, r2)] : [3, 2];
        case 1:
          i.sent(), i.label = 2;
        case 2:
          return ms(t) && gs(t), [2];
      }
    });
  });
}
function _s(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e = x(t), r2 ? (e.Yu.delete(2), [4, ts(e)]) : [3, 2];
        case 1:
          return n2.sent(), [3, 5];
        case 2:
          return r2 ? [3, 4] : (e.Yu.add(2), [4, es(e)]);
        case 3:
          n2.sent(), e.th.set("Unknown"), n2.label = 4;
        case 4:
          n2.label = 5;
        case 5:
          return [2];
      }
    });
  });
}
function Ts(t) {
  var r2 = this;
  return t.oh || (t.oh = function(t2, e, n2) {
    var r3 = x(t2);
    return r3.xu(), new Yo(e, r3.iu, r3.credentials, r3.serializer, n2);
  }(t.Ku, t.cs, {
    gu: fs.bind(null, t),
    Tu: ls.bind(null, t),
    yu: ps.bind(null, t)
  }), t.Ju.push(function(i) {
    return __awaiter(r2, void 0, void 0, function() {
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return i ? (t.oh.lu(), as(t) ? us(t) : t.th.set("Unknown"), [3, 3]) : [3, 1];
          case 1:
            return [4, t.oh.stop()];
          case 2:
            e.sent(), hs(t), e.label = 3;
          case 3:
            return [2];
        }
      });
    });
  })), t.oh;
}
function Ns(t) {
  var r2 = this;
  return t.ah || (t.ah = function(t2, e, n2) {
    var r3 = x(t2);
    return r3.xu(), new $o(e, r3.iu, r3.credentials, r3.serializer, n2);
  }(t.Ku, t.cs, {
    gu: ws.bind(null, t),
    Tu: Es.bind(null, t),
    Cu: bs.bind(null, t),
    Du: Is.bind(null, t)
  }), t.Ju.push(function(i) {
    return __awaiter(r2, void 0, void 0, function() {
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return i ? (t.ah.lu(), [4, ys(t)]) : [3, 2];
          case 1:
            return e.sent(), [3, 4];
          case 2:
            return [4, t.ah.stop()];
          case 3:
            e.sent(), t.zu.length > 0 && (T("RemoteStore", "Stopping write stream with " + t.zu.length + " pending writes"), t.zu = []), e.label = 4;
          case 4:
            return [2];
        }
      });
    });
  })), t.ah;
}
var As = function(t) {
  this.key = t;
}, Ss = function(t) {
  this.key = t;
}, Ds = function() {
  function t(t2, e) {
    this.query = t2, this.uh = e, this.hh = null, this.te = false, this.lh = Kt(), this.Wt = Kt(), this._h = cr(t2), this.fh = new Ht(this._h);
  }
  return Object.defineProperty(t.prototype, "dh", {
    get: function() {
      return this.uh;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.wh = function(t2, e) {
    var n2 = this, r2 = e ? e.mh : new Yt(), i = e ? e.fh : this.fh, o = e ? e.Wt : this.Wt, s = i, u2 = false, a = Yn(this.query) && i.size === this.query.limit ? i.last() : null, c = $n(this.query) && i.size === this.query.limit ? i.first() : null;
    if (t2.ht(function(t3, e2) {
      var h2 = i.get(t3), f = e2 instanceof zn ? e2 : null;
      f && (f = ar(n2.query, f) ? f : null);
      var l = !!h2 && n2.Wt.has(h2.key), p2 = !!f && (f.Je || n2.Wt.has(f.key) && f.hasCommittedMutations), d = false;
      h2 && f ? h2.data().isEqual(f.data()) ? l !== p2 && (r2.track({
        type: 3,
        doc: f
      }), d = true) : n2.Th(h2, f) || (r2.track({
        type: 2,
        doc: f
      }), d = true, (a && n2._h(f, a) > 0 || c && n2._h(f, c) < 0) && (u2 = true)) : !h2 && f ? (r2.track({
        type: 0,
        doc: f
      }), d = true) : h2 && !f && (r2.track({
        type: 1,
        doc: h2
      }), d = true, (a || c) && (u2 = true)), d && (f ? (s = s.add(f), o = p2 ? o.add(t3) : o.delete(t3)) : (s = s.delete(t3), o = o.delete(t3)));
    }), Yn(this.query) || $n(this.query))
      for (; s.size > this.query.limit; ) {
        var h = Yn(this.query) ? s.last() : s.first();
        s = s.delete(h.key), o = o.delete(h.key), r2.track({
          type: 1,
          doc: h
        });
      }
    return {
      fh: s,
      mh: r2,
      Eh: u2,
      Wt: o
    };
  }, t.prototype.Th = function(t2, e) {
    return t2.Je && e.hasCommittedMutations && !e.Je;
  }, t.prototype.yr = function(t2, e, n2) {
    var r2 = this, i = this.fh;
    this.fh = t2.fh, this.Wt = t2.Wt;
    var o = t2.mh.Ut();
    o.sort(function(t3, e2) {
      return function(t4, e3) {
        var n3 = function(t5) {
          switch (t5) {
            case 0:
              return 1;
            case 2:
            case 3:
              return 2;
            case 1:
              return 0;
            default:
              return D();
          }
        };
        return n3(t4) - n3(e3);
      }(t3.type, e2.type) || r2._h(t3.doc, e2.doc);
    }), this.Ih(n2);
    var s = e ? this.Ah() : [], u2 = 0 === this.lh.size && this.te ? 1 : 0, a = u2 !== this.hh;
    return this.hh = u2, 0 !== o.length || a ? {
      snapshot: new $t(this.query, t2.fh, i, o, t2.Wt, 0 === u2, a, false),
      Rh: s
    } : {
      Rh: s
    };
  }, t.prototype.Qs = function(t2) {
    return this.te && "Offline" === t2 ? (this.te = false, this.yr({
      fh: this.fh,
      mh: new Yt(),
      Wt: this.Wt,
      Eh: false
    }, false)) : {
      Rh: []
    };
  }, t.prototype.gh = function(t2) {
    return !this.uh.has(t2) && !!this.fh.has(t2) && !this.fh.get(t2).Je;
  }, t.prototype.Ih = function(t2) {
    var e = this;
    t2 && (t2.ee.forEach(function(t3) {
      return e.uh = e.uh.add(t3);
    }), t2.ne.forEach(function(t3) {
    }), t2.se.forEach(function(t3) {
      return e.uh = e.uh.delete(t3);
    }), this.te = t2.te);
  }, t.prototype.Ah = function() {
    var t2 = this;
    if (!this.te)
      return [];
    var e = this.lh;
    this.lh = Kt(), this.fh.forEach(function(e2) {
      t2.gh(e2.key) && (t2.lh = t2.lh.add(e2.key));
    });
    var n2 = [];
    return e.forEach(function(e2) {
      t2.lh.has(e2) || n2.push(new Ss(e2));
    }), this.lh.forEach(function(t3) {
      e.has(t3) || n2.push(new As(t3));
    }), n2;
  }, t.prototype.Ph = function(t2) {
    this.uh = t2.Fc, this.lh = Kt();
    var e = this.wh(t2.documents);
    return this.yr(e, true);
  }, t.prototype.yh = function() {
    return $t.Gt(this.query, this.fh, this.Wt, 0 === this.hh);
  }, t;
}(), ks = function(t, e, n2) {
  this.query = t, this.targetId = e, this.view = n2;
}, xs = function(t) {
  this.key = t, this.Vh = false;
}, Ls = function() {
  function t(t2, e, n2, r2, i, o) {
    this.ju = t2, this.ph = e, this.bh = n2, this.Sh = r2, this.currentUser = i, this.Dh = o, this.Ch = {}, this.Nh = new yt(function(t3) {
      return sr(t3);
    }, or), this.Fh = /* @__PURE__ */ new Map(), this.xh = [], this.$h = new Ot(F.i), this.kh = /* @__PURE__ */ new Map(), this.Mh = new jo(), this.Oh = {}, this.Lh = /* @__PURE__ */ new Map(), this.Bh = yo.da(), this.onlineState = "Unknown", this.qh = void 0;
  }
  return Object.defineProperty(t.prototype, "Uh", {
    get: function() {
      return true === this.qh;
    },
    enumerable: false,
    configurable: true
  }), t;
}();
function Rs(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o, s, u2, a;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e = iu(t), (s = e.Nh.get(r2)) ? (i = s.targetId, e.Sh.Oi(i), o = s.view.yh(), [3, 4]) : [3, 1];
        case 1:
          return [4, Po(e.ju, er(r2))];
        case 2:
          return u2 = n2.sent(), a = e.Sh.Oi(u2.targetId), i = u2.targetId, [4, Os(e, r2, i, "current" === a)];
        case 3:
          o = n2.sent(), e.Uh && rs(e.ph, u2), n2.label = 4;
        case 4:
          return [2, o];
      }
    });
  });
}
function Os(t, r2, i, o) {
  return __awaiter(this, void 0, void 0, function() {
    var s, u2, a, c, h, f;
    return __generator(this, function(l) {
      switch (l.label) {
        case 0:
          return t.Qh = function(r3, i2, o2) {
            return function(t2, r4, i3, o3) {
              return __awaiter(this, void 0, void 0, function() {
                var e, s2, u3;
                return __generator(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      return e = r4.view.wh(i3), e.Eh ? [4, Uo(t2.ju, r4.query, false).then(function(t3) {
                        var n3 = t3.documents;
                        return r4.view.wh(n3, e);
                      })] : [3, 2];
                    case 1:
                      e = n2.sent(), n2.label = 2;
                    case 2:
                      return s2 = o3 && o3.zt.get(r4.targetId), u3 = r4.view.yr(e, t2.Uh, s2), [2, (Bs(t2, r4.targetId, u3.Rh), u3.snapshot)];
                  }
                });
              });
            }(t, r3, i2, o2);
          }, [4, Uo(t.ju, r2, true)];
        case 1:
          return s = l.sent(), u2 = new Ds(r2, s.Fc), a = u2.wh(s.documents), c = Jt.Zt(i, o && "Offline" !== t.onlineState), h = u2.yr(a, t.Uh, c), Bs(t, i, h.Rh), f = new ks(r2, i, u2), [2, (t.Nh.set(r2, f), t.Fh.has(i) ? t.Fh.get(i).push(r2) : t.Fh.set(i, [r2]), h.snapshot)];
      }
    });
  });
}
function Ps(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e = x(t), i = e.Nh.get(r2), (o = e.Fh.get(i.targetId)).length > 1 ? [2, (e.Fh.set(i.targetId, o.filter(function(t2) {
            return !or(t2, r2);
          })), void e.Nh.delete(r2))] : e.Uh ? (e.Sh.Bi(i.targetId), e.Sh.Fi(i.targetId) ? [3, 2] : [4, Vo(e.ju, i.targetId, false).then(function() {
            e.Sh.Ui(i.targetId), is(e.ph, i.targetId), Gs(e, i.targetId);
          }).catch(qo)]) : [3, 3];
        case 1:
          n2.sent(), n2.label = 2;
        case 2:
          return [3, 5];
        case 3:
          return Gs(e, i.targetId), [4, Vo(e.ju, i.targetId, true)];
        case 4:
          n2.sent(), n2.label = 5;
        case 5:
          return [2];
      }
    });
  });
}
function Vs(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = x(t), n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 6]), [4, Ro(e.ju, r2)];
        case 2:
          return i = n2.sent(), r2.zt.forEach(function(t2, n3) {
            var r3 = e.kh.get(n3);
            r3 && (k(t2.ee.size + t2.ne.size + t2.se.size <= 1), t2.ee.size > 0 ? r3.Vh = true : t2.ne.size > 0 ? k(r3.Vh) : t2.se.size > 0 && (k(r3.Vh), r3.Vh = false));
          }), [4, Qs(e, i, r2)];
        case 3:
          return n2.sent(), [3, 6];
        case 4:
          return [4, qo(n2.sent())];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function Us(t, e, n2) {
  var r2 = x(t);
  if (r2.Uh && 0 === n2 || !r2.Uh && 1 === n2) {
    var i = [];
    r2.Nh.forEach(function(t2, n3) {
      var r3 = n3.view.Qs(e);
      r3.snapshot && i.push(r3.snapshot);
    }), function(t2, e2) {
      var n3 = x(t2);
      n3.onlineState = e2;
      var r3 = false;
      n3.Bs.forEach(function(t3, n4) {
        for (var i2 = 0, o = n4.listeners; i2 < o.length; i2++) {
          o[i2].Qs(e2) && (r3 = true);
        }
      }), r3 && Yr(n3);
    }(r2.bh, e), i.length && r2.Ch.yu(i), r2.onlineState = e, r2.Uh && r2.Sh.Ki(e);
  }
}
function Cs(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, o, s, u2, a, c;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return (e = x(t)).Sh.Qi(r2, "rejected", i), o = e.kh.get(r2), (s = o && o.key) ? (u2 = (u2 = new Ot(F.i)).ot(s, new Bn(s, gt.min())), a = Kt().add(s), c = new Xt(gt.min(), /* @__PURE__ */ new Map(), new Ut(st), u2, a), [4, Vs(e, c)]) : [3, 2];
        case 1:
          return n2.sent(), e.$h = e.$h.remove(s), e.kh.delete(r2), Ws(e), [3, 4];
        case 2:
          return [4, Vo(e.ju, r2, false).then(function() {
            return Gs(e, r2, i);
          }).catch(qo)];
        case 3:
          n2.sent(), n2.label = 4;
        case 4:
          return [2];
      }
    });
  });
}
function Fs(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = x(t), i = r2.batch.batchId, n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 6]), [4, xo(e.ju, r2)];
        case 2:
          return o = n2.sent(), js(e, i, null), qs(e, i), e.Sh.ki(i, "acknowledged"), [4, Qs(e, o)];
        case 3:
          return n2.sent(), [3, 6];
        case 4:
          return [4, qo(n2.sent())];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function Ms(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, o;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = x(t), n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 6]), [4, function(t2, e2) {
            var n3 = x(t2);
            return n3.persistence.runTransaction("Reject batch", "readwrite-primary", function(t3) {
              var r3;
              return n3.Sr.Oo(t3, e2).next(function(e3) {
                return k(null !== e3), r3 = e3.keys(), n3.Sr.Wo(t3, e3);
              }).next(function() {
                return n3.Sr.zo(t3);
              }).next(function() {
                return n3.Cc.kr(t3, r3);
              });
            });
          }(e.ju, r2)];
        case 2:
          return o = n2.sent(), js(e, r2, i), qs(e, r2), e.Sh.ki(r2, "rejected", i), [4, Qs(e, o)];
        case 3:
          return n2.sent(), [3, 6];
        case 4:
          return [4, qo(n2.sent())];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function qs(t, e) {
  (t.Lh.get(e) || []).forEach(function(t2) {
    t2.resolve();
  }), t.Lh.delete(e);
}
function js(t, e, n2) {
  var r2 = x(t), i = r2.Oh[r2.currentUser.ti()];
  if (i) {
    var o = i.get(e);
    o && (n2 ? o.reject(n2) : o.resolve(), i = i.remove(e)), r2.Oh[r2.currentUser.ti()] = i;
  }
}
function Gs(t, e, n2) {
  void 0 === n2 && (n2 = null), t.Sh.Bi(e);
  for (var r2 = 0, i = t.Fh.get(e); r2 < i.length; r2++) {
    var o = i[r2];
    t.Nh.delete(o), n2 && t.Ch.Wh(o, n2);
  }
  t.Fh.delete(e), t.Uh && t.Mh.Uc(e).forEach(function(e2) {
    t.Mh.Ho(e2) || zs(t, e2);
  });
}
function zs(t, e) {
  var n2 = t.$h.get(e);
  null !== n2 && (is(t.ph, n2), t.$h = t.$h.remove(e), t.kh.delete(n2), Ws(t));
}
function Bs(t, e, n2) {
  for (var r2 = 0, i = n2; r2 < i.length; r2++) {
    var o = i[r2];
    o instanceof As ? (t.Mh.Da(o.key, e), Ks(t, o)) : o instanceof Ss ? (T("SyncEngine", "Document no longer in limbo: " + o.key), t.Mh.Na(o.key, e), t.Mh.Ho(o.key) || zs(t, o.key)) : D();
  }
}
function Ks(t, e) {
  var n2 = e.key;
  t.$h.get(n2) || (T("SyncEngine", "New document in limbo: " + n2), t.xh.push(n2), Ws(t));
}
function Ws(t) {
  for (; t.xh.length > 0 && t.$h.size < t.Dh; ) {
    var e = t.xh.shift(), n2 = t.Bh.next();
    t.kh.set(n2, new xs(e)), t.$h = t.$h.ot(e, n2), rs(t.ph, new kt(er(Hn(e.path)), n2, 2, Jr.ai));
  }
}
function Qs(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var o, s, u2, a;
    return __generator(this, function(c) {
      switch (c.label) {
        case 0:
          return o = x(t), s = [], u2 = [], a = [], o.Nh.m() ? [3, 3] : (o.Nh.forEach(function(t2, e) {
            a.push(o.Qh(e, r2, i).then(function(t3) {
              if (t3) {
                o.Uh && o.Sh.Qi(e.targetId, t3.fromCache ? "not-current" : "current"), s.push(t3);
                var n2 = vi.zr(e.targetId, t3);
                u2.push(n2);
              }
            }));
          }), [4, Promise.all(a)]);
        case 1:
          return c.sent(), o.Ch.yu(s), [4, function(t2, r3) {
            return __awaiter(this, void 0, void 0, function() {
              var e, i2, o2, s2, u3, a2, c2, h, f;
              return __generator(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    e = x(t2), n2.label = 1;
                  case 1:
                    return n2.trys.push([1, 3, , 4]), [4, e.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function(t3) {
                      return Dr.forEach(r3, function(n3) {
                        return Dr.forEach(n3.Kr, function(r4) {
                          return e.persistence.No.Da(t3, n3.targetId, r4);
                        }).next(function() {
                          return Dr.forEach(n3.Gr, function(r4) {
                            return e.persistence.No.Na(t3, n3.targetId, r4);
                          });
                        });
                      });
                    })];
                  case 2:
                    return n2.sent(), [3, 4];
                  case 3:
                    if (!Rr(i2 = n2.sent()))
                      throw i2;
                    return T("LocalStore", "Failed to update sequence numbers: " + i2), [3, 4];
                  case 4:
                    for (o2 = 0, s2 = r3; o2 < s2.length; o2++)
                      u3 = s2[o2], a2 = u3.targetId, u3.fromCache || (c2 = e.bc.get(a2), h = c2.nt, f = c2.rt(h), e.bc = e.bc.ot(a2, f));
                    return [2];
                }
              });
            });
          }(o.ju, u2)];
        case 2:
          c.sent(), c.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function Hs(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var i, o;
    return __generator(this, function(s) {
      switch (s.label) {
        case 0:
          return (i = x(t)).currentUser.isEqual(r2) ? [3, 3] : (T("SyncEngine", "User change. New user:", r2.ti()), [
            4,
            function(t2, r3) {
              return __awaiter(this, void 0, void 0, function() {
                var e, i2, o2, s2;
                return __generator(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      return e = x(t2), i2 = e.Sr, o2 = e.Cc, [4, e.persistence.runTransaction("Handle user change", "readonly", function(t3) {
                        var n3;
                        return e.Sr.Uo(t3).next(function(s3) {
                          return n3 = s3, i2 = e.persistence.mc(r3), o2 = new di(e.Dc, i2, e.persistence.Ic()), i2.Uo(t3);
                        }).next(function(e2) {
                          for (var r4 = [], i3 = [], s3 = Kt(), u2 = 0, a = n3; u2 < a.length; u2++) {
                            var c = a[u2];
                            r4.push(c.batchId);
                            for (var h = 0, f = c.mutations; h < f.length; h++) {
                              var l = f[h];
                              s3 = s3.add(l.key);
                            }
                          }
                          for (var p2 = 0, d = e2; p2 < d.length; p2++) {
                            var v2 = d[p2];
                            i3.push(v2.batchId);
                            for (var y2 = 0, m = v2.mutations; y2 < m.length; y2++) {
                              var g2 = m[y2];
                              s3 = s3.add(g2.key);
                            }
                          }
                          return o2.kr(t3, s3).next(function(t4) {
                            return {
                              jh: t4,
                              Kh: r4,
                              Gh: i3
                            };
                          });
                        });
                      })];
                    case 1:
                      return s2 = n2.sent(), [2, (e.Sr = i2, e.Cc = o2, e.Vc.Nc(e.Cc), s2)];
                  }
                });
              });
            }(i.ju, r2)
          ]);
        case 1:
          return o = s.sent(), i.currentUser = r2, function(t2, e) {
            t2.Lh.forEach(function(t3) {
              t3.forEach(function(t4) {
                t4.reject(new I(b.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
              });
            }), t2.Lh.clear();
          }(i), i.Sh.ji(r2, o.Kh, o.Gh), [4, Qs(i, o.jh)];
        case 2:
          s.sent(), s.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function Ys(t, e) {
  var n2 = x(t), r2 = n2.kh.get(e);
  if (r2 && r2.Vh)
    return Kt().add(r2.key);
  var i = Kt(), o = n2.Fh.get(e);
  if (!o)
    return i;
  for (var s = 0, u2 = o; s < u2.length; s++) {
    var a = u2[s], c = n2.Nh.get(a);
    i = i.kt(c.view.dh);
  }
  return i;
}
function $s(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return [4, Uo((e = x(t)).ju, r2.query, true)];
        case 1:
          return i = n2.sent(), o = r2.view.Ph(i), [2, (e.Uh && Bs(e, r2.targetId, o.Rh), o)];
      }
    });
  });
}
function Xs(t, r2, i, o) {
  return __awaiter(this, void 0, void 0, function() {
    var e, s;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return [4, function(t2, e2) {
            var n3 = x(t2), r3 = x(n3.Sr);
            return n3.persistence.runTransaction("Lookup mutation documents", "readonly", function(t3) {
              return r3.Lo(t3, e2).next(function(e3) {
                return e3 ? n3.Cc.kr(t3, e3) : Dr.resolve(null);
              });
            });
          }((e = x(t)).ju, r2)];
        case 1:
          return null === (s = n2.sent()) ? [3, 6] : "pending" !== i ? [3, 3] : [4, ys(e.ph)];
        case 2:
          return n2.sent(), [3, 4];
        case 3:
          "acknowledged" === i || "rejected" === i ? (js(e, r2, o || null), qs(e, r2), function(t2, e2) {
            x(x(t2).Sr).Ko(e2);
          }(e.ju, r2)) : D(), n2.label = 4;
        case 4:
          return [4, Qs(e, s)];
        case 5:
          return n2.sent(), [3, 7];
        case 6:
          T("SyncEngine", "Cannot apply mutation batch with id: " + r2), n2.label = 7;
        case 7:
          return [2];
      }
    });
  });
}
function Js(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o, s, u2, a, c, h;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return iu(e = x(t)), ou(e), true !== r2 || true === e.qh ? [3, 3] : (i = e.Sh.Ci(), [4, Zs(e, i.A())]);
        case 1:
          return o = n2.sent(), e.qh = true, [4, _s(e.ph, true)];
        case 2:
          for (n2.sent(), s = 0, u2 = o; s < u2.length; s++)
            a = u2[s], rs(e.ph, a);
          return [3, 7];
        case 3:
          return false !== r2 || false === e.qh ? [3, 7] : (c = [], h = Promise.resolve(), e.Fh.forEach(function(t2, n3) {
            e.Sh.qi(n3) ? c.push(n3) : h = h.then(function() {
              return Gs(e, n3), Vo(e.ju, n3, true);
            }), is(e.ph, n3);
          }), [4, h]);
        case 4:
          return n2.sent(), [4, Zs(e, c)];
        case 5:
          return n2.sent(), function(t2) {
            var e2 = x(t2);
            e2.kh.forEach(function(t3, n3) {
              is(e2.ph, n3);
            }), e2.Mh.Qc(), e2.kh = /* @__PURE__ */ new Map(), e2.$h = new Ot(F.i);
          }(e), e.qh = false, [4, _s(e.ph, false)];
        case 6:
          n2.sent(), n2.label = 7;
        case 7:
          return [2];
      }
    });
  });
}
function Zs(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i2, o, s, u2, a, c, h, f, l, p2, d, v2, y2;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = x(t), i2 = [], o = [], s = 0, u2 = r2, n2.label = 1;
        case 1:
          return s < u2.length ? (a = u2[s], c = void 0, (h = e.Fh.get(a)) && 0 !== h.length ? [4, Po(e.ju, er(h[0]))] : [3, 7]) : [3, 13];
        case 2:
          c = n2.sent(), f = 0, l = h, n2.label = 3;
        case 3:
          return f < l.length ? (p2 = l[f], d = e.Nh.get(p2), [4, $s(e, d)]) : [3, 6];
        case 4:
          (v2 = n2.sent()).snapshot && o.push(v2.snapshot), n2.label = 5;
        case 5:
          return f++, [3, 3];
        case 6:
          return [3, 11];
        case 7:
          return [4, Co(e.ju, a)];
        case 8:
          return y2 = n2.sent(), [4, Po(e.ju, y2)];
        case 9:
          return c = n2.sent(), [4, Os(e, tu(y2), a, false)];
        case 10:
          n2.sent(), n2.label = 11;
        case 11:
          i2.push(c), n2.label = 12;
        case 12:
          return s++, [3, 1];
        case 13:
          return [2, (e.Ch.yu(o), i2)];
      }
    });
  });
}
function tu(t) {
  return Qn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt);
}
function eu(t) {
  var e = x(t);
  return x(x(e.ju).persistence).pi();
}
function nu(t, r2, i, o) {
  return __awaiter(this, void 0, void 0, function() {
    var e, s, u2;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return (e = x(t)).qh ? (T("SyncEngine", "Ignoring unexpected query state notification."), [3, 8]) : [3, 1];
        case 1:
          if (!e.Fh.has(r2))
            return [3, 8];
          switch (i) {
            case "current":
            case "not-current":
              return [3, 2];
            case "rejected":
              return [3, 5];
          }
          return [3, 7];
        case 2:
          return [4, Fo(e.ju)];
        case 3:
          return s = n2.sent(), u2 = Xt.Xt(r2, "current" === i), [4, Qs(e, s, u2)];
        case 4:
          return n2.sent(), [3, 8];
        case 5:
          return [4, Vo(e.ju, r2, true)];
        case 6:
          return n2.sent(), Gs(e, r2, o), [3, 8];
        case 7:
          D(), n2.label = 8;
        case 8:
          return [2];
      }
    });
  });
}
function ru(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, o, s, u2, a, c, h, f, l, p2;
    return __generator(this, function(d) {
      switch (d.label) {
        case 0:
          if (!(e = iu(t)).qh)
            return [3, 10];
          o = 0, s = r2, d.label = 1;
        case 1:
          return o < s.length ? (u2 = s[o], e.Fh.has(u2) ? (T("SyncEngine", "Adding an already active target " + u2), [3, 5]) : [4, Co(e.ju, u2)]) : [3, 6];
        case 2:
          return a = d.sent(), [4, Po(e.ju, a)];
        case 3:
          return c = d.sent(), [4, Os(e, tu(a), c.targetId, false)];
        case 4:
          d.sent(), rs(e.ph, c), d.label = 5;
        case 5:
          return o++, [3, 1];
        case 6:
          h = function(t2) {
            return __generator(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return e.Fh.has(t2) ? [4, Vo(e.ju, t2, false).then(function() {
                    is(e.ph, t2), Gs(e, t2);
                  }).catch(qo)] : [3, 2];
                case 1:
                  n2.sent(), n2.label = 2;
                case 2:
                  return [2];
              }
            });
          }, f = 0, l = i, d.label = 7;
        case 7:
          return f < l.length ? (p2 = l[f], [5, h(p2)]) : [3, 10];
        case 8:
          d.sent(), d.label = 9;
        case 9:
          return f++, [3, 7];
        case 10:
          return [2];
      }
    });
  });
}
function iu(t) {
  var e = x(t);
  return e.ph.Gu.sh = Vs.bind(null, e), e.ph.Gu.qe = Ys.bind(null, e), e.ph.Gu.nh = Cs.bind(null, e), e.Ch.yu = Qr.bind(null, e.bh), e.Ch.Wh = Hr.bind(null, e.bh), e;
}
function ou(t) {
  var e = x(t);
  return e.ph.Gu.ih = Fs.bind(null, e), e.ph.Gu.rh = Ms.bind(null, e), e;
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
var su = function() {
  function t() {
  }
  return t.prototype.Nc = function(t2) {
    this.zh = t2;
  }, t.prototype.Lr = function(t2, e, n2, r2) {
    var i = this;
    return function(t3) {
      return 0 === t3.filters.length && null === t3.limit && null == t3.startAt && null == t3.endAt && (0 === t3.on.length || 1 === t3.on.length && t3.on[0].field.p());
    }(e) || n2.isEqual(gt.min()) ? this.Hh(t2, e) : this.zh.kr(t2, r2).next(function(o) {
      var u2 = i.Yh(e, o);
      return (Yn(e) || $n(e)) && i.Eh(e.an, u2, r2, n2) ? i.Hh(t2, e) : (_() <= LogLevel.DEBUG && T("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n2.toString(), ur(e)), i.zh.Lr(t2, e, n2).next(function(t3) {
        return u2.forEach(function(e2) {
          t3 = t3.ot(e2.key, e2);
        }), t3;
      }));
    });
  }, t.prototype.Yh = function(t2, e) {
    var n2 = new Ut(cr(t2));
    return e.forEach(function(e2, r2) {
      r2 instanceof zn && ar(t2, r2) && (n2 = n2.add(r2));
    }), n2;
  }, t.prototype.Eh = function(t2, e, n2, r2) {
    if (n2.size !== e.size)
      return true;
    var i = "F" === t2 ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.L(r2) > 0);
  }, t.prototype.Hh = function(t2, e) {
    return _() <= LogLevel.DEBUG && T("IndexFreeQueryEngine", "Using full collection scan to execute query:", ur(e)), this.zh.Lr(t2, e, gt.min());
  }, t;
}(), uu = function() {
  function t(t2, e) {
    this.Dr = t2, this.No = e, this.Sr = [], this.Jh = 1, this.Xh = new Ut(Go.kc);
  }
  return t.prototype.$o = function(t2) {
    return Dr.resolve(0 === this.Sr.length);
  }, t.prototype.ko = function(t2, e, n2, r2) {
    var i = this.Jh;
    this.Jh++, this.Sr.length > 0 && this.Sr[this.Sr.length - 1];
    var o = new ci(i, e, n2, r2);
    this.Sr.push(o);
    for (var s = 0, u2 = r2; s < u2.length; s++) {
      var a = u2[s];
      this.Xh = this.Xh.add(new Go(a.key, i)), this.Dr.Mo(t2, a.key.path.h());
    }
    return Dr.resolve(o);
  }, t.prototype.Oo = function(t2, e) {
    return Dr.resolve(this.Zh(e));
  }, t.prototype.Bo = function(t2, e) {
    var n2 = e + 1, r2 = this.tl(n2), i = r2 < 0 ? 0 : r2;
    return Dr.resolve(this.Sr.length > i ? this.Sr[i] : null);
  }, t.prototype.qo = function() {
    return Dr.resolve(0 === this.Sr.length ? -1 : this.Jh - 1);
  }, t.prototype.Uo = function(t2) {
    return Dr.resolve(this.Sr.slice());
  }, t.prototype.Nr = function(t2, e) {
    var n2 = this, r2 = new Go(e, 0), i = new Go(e, Number.POSITIVE_INFINITY), o = [];
    return this.Xh.Ft([r2, i], function(t3) {
      var e2 = n2.Zh(t3.jc);
      o.push(e2);
    }), Dr.resolve(o);
  }, t.prototype.Or = function(t2, e) {
    var n2 = this, r2 = new Ut(st);
    return e.forEach(function(t3) {
      var e2 = new Go(t3, 0), i = new Go(t3, Number.POSITIVE_INFINITY);
      n2.Xh.Ft([e2, i], function(t4) {
        r2 = r2.add(t4.jc);
      });
    }), Dr.resolve(this.el(r2));
  }, t.prototype.Wr = function(t2, e) {
    var n2 = e.path, r2 = n2.length + 1, i = n2;
    F.F(i) || (i = i.child(""));
    var o = new Go(new F(i), 0), s = new Ut(st);
    return this.Xh.xt(function(t3) {
      var e2 = t3.key.path;
      return !!n2.T(e2) && (e2.length === r2 && (s = s.add(t3.jc)), true);
    }, o), Dr.resolve(this.el(s));
  }, t.prototype.el = function(t2) {
    var e = this, n2 = [];
    return t2.forEach(function(t3) {
      var r2 = e.Zh(t3);
      null !== r2 && n2.push(r2);
    }), n2;
  }, t.prototype.Wo = function(t2, e) {
    var n2 = this;
    k(0 === this.nl(e.batchId, "removed")), this.Sr.shift();
    var r2 = this.Xh;
    return Dr.forEach(e.mutations, function(i) {
      var o = new Go(i.key, e.batchId);
      return r2 = r2.delete(o), n2.No.Go(t2, i.key);
    }).next(function() {
      n2.Xh = r2;
    });
  }, t.prototype.Ko = function(t2) {
  }, t.prototype.Ho = function(t2, e) {
    var n2 = new Go(e, 0), r2 = this.Xh.$t(n2);
    return Dr.resolve(e.isEqual(r2 && r2.key));
  }, t.prototype.zo = function(t2) {
    return this.Sr.length, Dr.resolve();
  }, t.prototype.nl = function(t2, e) {
    return this.tl(t2);
  }, t.prototype.tl = function(t2) {
    return 0 === this.Sr.length ? 0 : t2 - this.Sr[0].batchId;
  }, t.prototype.Zh = function(t2) {
    var e = this.tl(t2);
    return e < 0 || e >= this.Sr.length ? null : this.Sr[e];
  }, t;
}(), au = function() {
  function t(t2, e) {
    this.Dr = t2, this.sl = e, this.docs = new Ot(F.i), this.size = 0;
  }
  return t.prototype.Er = function(t2, e, n2) {
    var r2 = e.key, i = this.docs.get(r2), o = i ? i.size : 0, s = this.sl(e);
    return this.docs = this.docs.ot(r2, {
      ta: e,
      size: s,
      readTime: n2
    }), this.size += s - o, this.Dr.Mo(t2, r2.path.h());
  }, t.prototype.Ar = function(t2) {
    var e = this.docs.get(t2);
    e && (this.docs = this.docs.remove(t2), this.size -= e.size);
  }, t.prototype.Rr = function(t2, e) {
    var n2 = this.docs.get(e);
    return Dr.resolve(n2 ? n2.ta : null);
  }, t.prototype.getEntries = function(t2, e) {
    var n2 = this, r2 = qt();
    return e.forEach(function(t3) {
      var e2 = n2.docs.get(t3);
      r2 = r2.ot(t3, e2 ? e2.ta : null);
    }), Dr.resolve(r2);
  }, t.prototype.Lr = function(t2, e, n2) {
    for (var r2 = Gt(), i = new F(e.path.child("")), o = this.docs.ft(i); o.At(); ) {
      var s = o.It(), u2 = s.key, a = s.value, c = a.ta, h = a.readTime;
      if (!e.path.T(u2.path))
        break;
      h.L(n2) <= 0 || c instanceof zn && ar(e, c) && (r2 = r2.ot(c.key, c));
    }
    return Dr.resolve(r2);
  }, t.prototype.il = function(t2, e) {
    return Dr.forEach(this.docs, function(t3) {
      return e(t3);
    });
  }, t.prototype.ra = function(t2) {
    return new cu(this);
  }, t.prototype.aa = function(t2) {
    return Dr.resolve(this.size);
  }, t;
}(), cu = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this) || this).ca = t, n3;
  }
  return __extends$1(n2, e), n2.prototype.yr = function(t) {
    var e2 = this, n3 = [];
    return this.wr.forEach(function(r2, i) {
      i ? n3.push(e2.ca.Er(t, i, e2.readTime)) : e2.ca.Ar(r2);
    }), Dr.$n(n3);
  }, n2.prototype.gr = function(t, e2) {
    return this.ca.Rr(t, e2);
  }, n2.prototype.Pr = function(t, e2) {
    return this.ca.getEntries(t, e2);
  }, n2;
}(fi), hu = function() {
  function t(t2) {
    this.persistence = t2, this.rl = new yt(function(t3) {
      return Tt(t3);
    }, Nt), this.lastRemoteSnapshotVersion = gt.min(), this.highestTargetId = 0, this.ol = 0, this.al = new jo(), this.targetCount = 0, this.cl = yo.fa();
  }
  return t.prototype.Ce = function(t2, e) {
    return this.rl.forEach(function(t3, n2) {
      return e(n2);
    }), Dr.resolve();
  }, t.prototype.Ea = function(t2) {
    return Dr.resolve(this.lastRemoteSnapshotVersion);
  }, t.prototype.Ia = function(t2) {
    return Dr.resolve(this.ol);
  }, t.prototype.wa = function(t2) {
    return this.highestTargetId = this.cl.next(), Dr.resolve(this.highestTargetId);
  }, t.prototype.Aa = function(t2, e, n2) {
    return n2 && (this.lastRemoteSnapshotVersion = n2), e > this.ol && (this.ol = e), Dr.resolve();
  }, t.prototype.ga = function(t2) {
    this.rl.set(t2.target, t2);
    var e = t2.targetId;
    e > this.highestTargetId && (this.cl = new yo(e), this.highestTargetId = e), t2.sequenceNumber > this.ol && (this.ol = t2.sequenceNumber);
  }, t.prototype.Ra = function(t2, e) {
    return this.ga(e), this.targetCount += 1, Dr.resolve();
  }, t.prototype.ya = function(t2, e) {
    return this.ga(e), Dr.resolve();
  }, t.prototype.Va = function(t2, e) {
    return this.rl.delete(e.target), this.al.Uc(e.targetId), this.targetCount -= 1, Dr.resolve();
  }, t.prototype.po = function(t2, e, n2) {
    var r2 = this, i = 0, o = [];
    return this.rl.forEach(function(s, u2) {
      u2.sequenceNumber <= e && null === n2.get(u2.targetId) && (r2.rl.delete(s), o.push(r2.pa(t2, u2.targetId)), i++);
    }), Dr.$n(o).next(function() {
      return i;
    });
  }, t.prototype.ba = function(t2) {
    return Dr.resolve(this.targetCount);
  }, t.prototype.va = function(t2, e) {
    var n2 = this.rl.get(e) || null;
    return Dr.resolve(n2);
  }, t.prototype.Sa = function(t2, e, n2) {
    return this.al.Lc(e, n2), Dr.resolve();
  }, t.prototype.Ca = function(t2, e, n2) {
    this.al.qc(e, n2);
    var r2 = this.persistence.No, i = [];
    return r2 && e.forEach(function(e2) {
      i.push(r2.Go(t2, e2));
    }), Dr.$n(i);
  }, t.prototype.pa = function(t2, e) {
    return this.al.Uc(e), Dr.resolve();
  }, t.prototype.Fa = function(t2, e) {
    var n2 = this.al.Wc(e);
    return Dr.resolve(n2);
  }, t.prototype.Ho = function(t2, e) {
    return Dr.resolve(this.al.Ho(e));
  }, t;
}(), fu = function() {
  function t(t2) {
    var e = this;
    this.ul = {}, this.Ma = new Jr(0), this.Oa = false, this.Oa = true, this.No = t2(this), this.Ka = new hu(this), this.Dr = new Hi(), this.vr = function(t3, n2) {
      return new au(t3, function(t4) {
        return e.No.hl(t4);
      });
    }(this.Dr);
  }
  return t.prototype.start = function() {
    return Promise.resolve();
  }, t.prototype.Di = function() {
    return this.Oa = false, Promise.resolve();
  }, Object.defineProperty(t.prototype, "Ei", {
    get: function() {
      return this.Oa;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.Za = function() {
  }, t.prototype.tc = function() {
  }, t.prototype.Ic = function() {
    return this.Dr;
  }, t.prototype.mc = function(t2) {
    var e = this.ul[t2.ti()];
    return e || (e = new uu(this.Dr, this.No), this.ul[t2.ti()] = e), e;
  }, t.prototype.Tc = function() {
    return this.Ka;
  }, t.prototype.Ec = function() {
    return this.vr;
  }, t.prototype.runTransaction = function(t2, e, n2) {
    var r2 = this;
    T("MemoryPersistence", "Starting transaction:", t2);
    var i = new lu(this.Ma.next());
    return this.No.ll(), n2(i).next(function(t3) {
      return r2.No._l(i).next(function() {
        return t3;
      });
    }).Fn().then(function(t3) {
      return i.br(), t3;
    });
  }, t.prototype.fl = function(t2, e) {
    return Dr.kn(Object.values(this.ul).map(function(n2) {
      return function() {
        return n2.Ho(t2, e);
      };
    }));
  }, t;
}(), lu = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this) || this).xa = t, n3;
  }
  return __extends$1(n2, e), n2;
}(pi), pu = function() {
  function t(t2) {
    this.persistence = t2, this.dl = new jo(), this.wl = null;
  }
  return t.ml = function(e) {
    return new t(e);
  }, Object.defineProperty(t.prototype, "Tl", {
    get: function() {
      if (this.wl)
        return this.wl;
      throw D();
    },
    enumerable: false,
    configurable: true
  }), t.prototype.Da = function(t2, e, n2) {
    return this.dl.Da(n2, e), this.Tl.delete(n2.toString()), Dr.resolve();
  }, t.prototype.Na = function(t2, e, n2) {
    return this.dl.Na(n2, e), this.Tl.add(n2.toString()), Dr.resolve();
  }, t.prototype.Go = function(t2, e) {
    return this.Tl.add(e.toString()), Dr.resolve();
  }, t.prototype.removeTarget = function(t2, e) {
    var n2 = this;
    this.dl.Uc(e.targetId).forEach(function(t3) {
      return n2.Tl.add(t3.toString());
    });
    var r2 = this.persistence.Tc();
    return r2.Fa(t2, e.targetId).next(function(t3) {
      t3.forEach(function(t4) {
        return n2.Tl.add(t4.toString());
      });
    }).next(function() {
      return r2.Va(t2, e);
    });
  }, t.prototype.ll = function() {
    this.wl = /* @__PURE__ */ new Set();
  }, t.prototype._l = function(t2) {
    var e = this, n2 = this.persistence.Ec().ra();
    return Dr.forEach(this.Tl, function(r2) {
      var i = F.D(r2);
      return e.El(t2, i).next(function(t3) {
        t3 || n2.Ar(i);
      });
    }).next(function() {
      return e.wl = null, n2.apply(t2);
    });
  }, t.prototype.yc = function(t2, e) {
    var n2 = this;
    return this.El(t2, e).next(function(t3) {
      t3 ? n2.Tl.delete(e.toString()) : n2.Tl.add(e.toString());
    });
  }, t.prototype.hl = function(t2) {
    return 0;
  }, t.prototype.El = function(t2, e) {
    var n2 = this;
    return Dr.kn([function() {
      return Dr.resolve(n2.dl.Ho(e));
    }, function() {
      return n2.persistence.Tc().Ho(t2, e);
    }, function() {
      return n2.persistence.fl(t2, e);
    }]);
  }, t;
}(), du = function() {
  function t(t2) {
    this.Il = t2.Il, this.Al = t2.Al;
  }
  return t.prototype.gu = function(t2) {
    this.Rl = t2;
  }, t.prototype.Tu = function(t2) {
    this.gl = t2;
  }, t.prototype.onMessage = function(t2) {
    this.Pl = t2;
  }, t.prototype.close = function() {
    this.Al();
  }, t.prototype.send = function(t2) {
    this.Il(t2);
  }, t.prototype.yl = function() {
    this.Rl();
  }, t.prototype.Vl = function(t2) {
    this.gl(t2);
  }, t.prototype.pl = function(t2) {
    this.Pl(t2);
  }, t;
}(), vu = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery"
}, yu = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n3.W = t.W, n3;
  }
  return __extends$1(n2, e), n2.prototype.Nl = function(t, e2, n3, r2) {
    return new Promise(function(i, o) {
      var s = new XhrIo();
      s.listenOnce(EventType.COMPLETE, function() {
        try {
          switch (s.getLastErrorCode()) {
            case ErrorCode$1.NO_ERROR:
              var e3 = s.getResponseJson();
              T("Connection", "XHR received:", JSON.stringify(e3)), i(e3);
              break;
            case ErrorCode$1.TIMEOUT:
              T("Connection", 'RPC "' + t + '" timed out'), o(new I(b.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode$1.HTTP_ERROR:
              var n4 = s.getStatus();
              if (T("Connection", 'RPC "' + t + '" failed with status:', n4, "response text:", s.getResponseText()), n4 > 0) {
                var r3 = s.getResponseJson().error;
                if (r3 && r3.status && r3.message) {
                  var u3 = function(t2) {
                    var e4 = t2.toLowerCase().replace("_", "-");
                    return Object.values(b).indexOf(e4) >= 0 ? e4 : b.UNKNOWN;
                  }(r3.status);
                  o(new I(u3, r3.message));
                } else
                  o(new I(b.UNKNOWN, "Server responded with status " + s.getStatus()));
              } else
                o(new I(b.UNAVAILABLE, "Connection failed."));
              break;
            default:
              D();
          }
        } finally {
          T("Connection", 'RPC "' + t + '" completed.');
        }
      });
      var u2 = JSON.stringify(r2);
      s.send(e2, "POST", u2, n3, 15);
    });
  }, n2.prototype.Pu = function(t, e2) {
    var n3 = [this.vl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"], r2 = createWebChannelTransport(), i = {
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        database: "projects/" + this.U.projectId + "/databases/" + this.U.database
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.W
    };
    this.Cl(i.initMessageHeaders, e2), isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (i.httpHeadersOverwriteParam = "$httpHeaders");
    var o = n3.join("");
    T("Connection", "Creating WebChannel: " + o, i);
    var s = r2.createWebChannel(o, i), u2 = false, d = false, v2 = new du({
      Il: function(t2) {
        d ? T("Connection", "Not sending because WebChannel is closed:", t2) : (u2 || (T("Connection", "Opening WebChannel transport."), s.open(), u2 = true), T("Connection", "WebChannel sending:", t2), s.send(t2));
      },
      Al: function() {
        return s.close();
      }
    }), y2 = function(t2, e3) {
      s.listen(t2, function(t3) {
        try {
          e3(t3);
        } catch (t4) {
          setTimeout(function() {
            throw t4;
          }, 0);
        }
      });
    };
    return y2(WebChannel.EventType.OPEN, function() {
      d || T("Connection", "WebChannel transport opened.");
    }), y2(WebChannel.EventType.CLOSE, function() {
      d || (d = true, T("Connection", "WebChannel transport closed"), v2.Vl());
    }), y2(WebChannel.EventType.ERROR, function(t2) {
      d || (d = true, A("Connection", "WebChannel transport errored:", t2), v2.Vl(new I(b.UNAVAILABLE, "The operation could not be completed")));
    }), y2(WebChannel.EventType.MESSAGE, function(t2) {
      var e3;
      if (!d) {
        var n4 = t2.data[0];
        k(!!n4);
        var r3 = n4, i2 = r3.error || (null === (e3 = r3[0]) || void 0 === e3 ? void 0 : e3.error);
        if (i2) {
          T("Connection", "WebChannel received error:", i2);
          var o2 = i2.status, u3 = function(t3) {
            var e4 = St[t3];
            if (void 0 !== e4)
              return Rt(e4);
          }(o2), a = i2.message;
          void 0 === u3 && (u3 = b.INTERNAL, a = "Unknown error status: " + o2 + " with message " + i2.message), d = true, v2.Vl(new I(u3, a)), s.close();
        } else
          T("Connection", "WebChannel received:", n4), v2.pl(n4);
      }
    }), setTimeout(function() {
      v2.yl();
    }, 0), v2;
  }, n2;
}(function() {
  function t(t2) {
    this.bl = t2, this.U = t2.U;
    var e = t2.ssl ? "https" : "http";
    this.vl = e + "://" + t2.host, this.Sl = "projects/" + this.U.projectId + "/databases/" + this.U.database + "/documents";
  }
  return t.prototype.$u = function(t2, e, n2, r2) {
    var i = this.Dl(t2, e);
    T("RestConnection", "Sending: ", i, n2);
    var o = {};
    return this.Cl(o, r2), this.Nl(t2, i, o, n2).then(function(t3) {
      return T("RestConnection", "Received: ", t3), t3;
    }, function(e2) {
      throw A("RestConnection", t2 + " failed with error: ", e2, "url: ", i, "request:", n2), e2;
    });
  }, t.prototype.ku = function(t2, e, n2, r2) {
    return this.$u(t2, e, n2, r2);
  }, t.prototype.Cl = function(t2, e) {
    if (t2["X-Goog-Api-Client"] = "gl-js/ fire/7.24.0", t2["Content-Type"] = "text/plain", e)
      for (var n2 in e.Kc)
        e.Kc.hasOwnProperty(n2) && (t2[n2] = e.Kc[n2]);
  }, t.prototype.Dl = function(t2, e) {
    var n2 = vu[t2];
    return this.vl + "/v1/" + e + ":" + n2;
  }, t;
}()), mu = function() {
  function t() {
    var t2 = this;
    this.Fl = function() {
      return t2.xl();
    }, this.$l = function() {
      return t2.kl();
    }, this.Ml = [], this.Ol();
  }
  return t.prototype.Zu = function(t2) {
    this.Ml.push(t2);
  }, t.prototype.Di = function() {
    window.removeEventListener("online", this.Fl), window.removeEventListener("offline", this.$l);
  }, t.prototype.Ol = function() {
    window.addEventListener("online", this.Fl), window.addEventListener("offline", this.$l);
  }, t.prototype.xl = function() {
    T("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (var t2 = 0, e = this.Ml; t2 < e.length; t2++) {
      (0, e[t2])(0);
    }
  }, t.prototype.kl = function() {
    T("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (var t2 = 0, e = this.Ml; t2 < e.length; t2++) {
      (0, e[t2])(1);
    }
  }, t.Ln = function() {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }, t;
}(), gu = function() {
  function t() {
  }
  return t.prototype.Zu = function(t2) {
  }, t.prototype.Di = function() {
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * @license
 * Copyright 2020 Google LLC
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
function wu(t) {
  return new De(t, true);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
var bu = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.", Iu = function() {
  function t() {
  }
  return t.prototype.initialize = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return this.Sh = this.Ll(t2), this.persistence = this.Bl(t2), [4, this.persistence.start()];
          case 1:
            return e.sent(), this.ql = this.Ul(t2), this.ju = this.Ql(t2), [2];
        }
      });
    });
  }, t.prototype.Ul = function(t2) {
    return null;
  }, t.prototype.Ql = function(t2) {
    return e = this.persistence, n2 = new su(), r2 = t2.Wl, new ko(e, n2, r2);
    var e, n2, r2;
  }, t.prototype.Bl = function(t2) {
    if (t2.persistenceSettings.jl)
      throw new I(b.FAILED_PRECONDITION, bu);
    return new fu(pu.ml);
  }, t.prototype.Ll = function(t2) {
    return new ai();
  }, t.prototype.terminate = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        switch (t2.label) {
          case 0:
            return this.ql && this.ql.stop(), [4, this.Sh.Di()];
          case 1:
            return t2.sent(), [4, this.persistence.Di()];
          case 2:
            return t2.sent(), [2];
        }
      });
    });
  }, t.prototype.clearPersistence = function(t2, e) {
    throw new I(b.FAILED_PRECONDITION, bu);
  }, t;
}(), Eu = function(r2) {
  function i() {
    return null !== r2 && r2.apply(this, arguments) || this;
  }
  return __extends$1(i, r2), i.prototype.initialize = function(t) {
    return __awaiter(this, void 0, void 0, function() {
      var i2, o = this;
      return __generator(this, function(s) {
        switch (s.label) {
          case 0:
            return [4, r2.prototype.initialize.call(this, t)];
          case 1:
            return s.sent(), i2 = this.Kl.fi, this.Sh instanceof ui ? (this.Sh.fi = {
              er: Xs.bind(null, i2),
              nr: nu.bind(null, i2),
              sr: ru.bind(null, i2),
              pi: eu.bind(null, i2)
            }, [4, this.Sh.start()]) : [3, 3];
          case 2:
            s.sent(), s.label = 3;
          case 3:
            return [4, this.persistence.Xa(function(t2) {
              return __awaiter(o, void 0, void 0, function() {
                return __generator(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [4, Js(this.Kl.fi, t2)];
                    case 1:
                      return e.sent(), this.ql && (t2 && !this.ql.Ei ? this.ql.start(this.ju) : t2 || this.ql.stop()), [2];
                  }
                });
              });
            })];
          case 4:
            return s.sent(), [2];
        }
      });
    });
  }, i.prototype.Ll = function(t) {
    if (t.persistenceSettings.jl && t.persistenceSettings.synchronizeTabs) {
      var e = Fr();
      if (!ui.Ln(e))
        throw new I(b.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
      var n2 = Do(t.bl.U, t.bl.persistenceKey);
      return new ui(e, t.cs, n2, t.clientId, t.Wl);
    }
    return new ai();
  }, i;
}(function(r2) {
  function i(t) {
    var e = this;
    return (e = r2.call(this) || this).Kl = t, e;
  }
  return __extends$1(i, r2), i.prototype.initialize = function(t) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, r2.prototype.initialize.call(this, t)];
          case 1:
            return e.sent(), [4, Mo(this.ju)];
          case 2:
            return e.sent(), [4, this.Kl.initialize(this, t)];
          case 3:
            return e.sent(), [4, ou(this.Kl.fi)];
          case 4:
            return e.sent(), [4, ys(this.Kl.ph)];
          case 5:
            return e.sent(), [2];
        }
      });
    });
  }, i.prototype.Ul = function(t) {
    var e = this.persistence.No.wo;
    return new bi(e, t.cs);
  }, i.prototype.Bl = function(t) {
    var e = Do(t.bl.U, t.bl.persistenceKey), n2 = wu(t.bl.U);
    return new _o(t.persistenceSettings.synchronizeTabs, e, t.clientId, wi.ao(t.persistenceSettings.cacheSizeBytes), t.cs, Fr(), Mr(), n2, this.Sh, t.persistenceSettings.ka);
  }, i.prototype.Ll = function(t) {
    return new ai();
  }, i.prototype.clearPersistence = function(t, r3) {
    return function(t2) {
      return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              return kr.Ln() ? (e = t2 + "main", [4, kr.delete(e)]) : [2, Promise.resolve()];
            case 1:
              return n2.sent(), [2];
          }
        });
      });
    }(Do(t, r3));
  }, i;
}(Iu)), _u = function() {
  function t() {
  }
  return t.prototype.initialize = function(t2, r2) {
    return __awaiter(this, void 0, void 0, function() {
      var e = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.ju ? [3, 2] : (this.ju = t2.ju, this.Sh = t2.Sh, this.Ku = this.Gl(r2), this.ph = this.zl(r2), this.bh = this.Hl(r2), this.fi = this.Yl(r2), this.Sh.di = function(t3) {
              return Us(e.fi, t3, 1);
            }, this.ph.Gu.Jl = Hs.bind(null, this.fi), [4, _s(this.ph, this.fi.Uh)]);
          case 1:
            n2.sent(), n2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t.prototype.Hl = function(t2) {
    return new Br();
  }, t.prototype.Gl = function(t2) {
    var e, n2 = wu(t2.bl.U), r2 = (e = t2.bl, new yu(e));
    return function(t3, e2, n3) {
      return new Xo(t3, e2, n3);
    }(t2.credentials, r2, n2);
  }, t.prototype.zl = function(t2) {
    var e, n2, r2, i, o, s = this;
    return e = this.ju, n2 = this.Ku, r2 = t2.cs, i = function(t3) {
      return Us(s.fi, t3, 0);
    }, o = mu.Ln() ? new mu() : new gu(), new Zo(e, n2, r2, i, o);
  }, t.prototype.Yl = function(t2) {
    return function(t3, e, n2, r2, i, o, s) {
      var u2 = new Ls(t3, e, n2, r2, i, o);
      return s && (u2.qh = true), u2;
    }(this.ju, this.ph, this.bh, this.Sh, t2.Wl, t2.Dh, !t2.persistenceSettings.jl || !t2.persistenceSettings.synchronizeTabs);
  }, t.prototype.terminate = function() {
    return ns(this.ph);
  }, t;
}(), Tu = function() {
  function t(t2) {
    this.observer = t2, this.muted = false;
  }
  return t.prototype.next = function(t2) {
    this.observer.next && this.Xl(this.observer.next, t2);
  }, t.prototype.error = function(t2) {
    this.observer.error ? this.Xl(this.observer.error, t2) : console.error("Uncaught Error in snapshot listener:", t2);
  }, t.prototype.Zl = function() {
    this.muted = true;
  }, t.prototype.Xl = function(t2, e) {
    var n2 = this;
    this.muted || setTimeout(function() {
      n2.muted || t2(e);
    }, 0);
  }, t;
}(), Nu = function(t) {
  !function(t2, e2, n2, r2) {
    if (!(e2 instanceof Array) || e2.length < 1)
      throw new I(b.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + rt(1, "element") + ".");
  }(0, t);
  for (var e = 0; e < t.length; ++e)
    if (z("FieldPath", "string", e, t[e]), 0 === t[e].length)
      throw new I(b.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
  this.t_ = new C(t);
}, Au = function(e) {
  function n2() {
    for (var t = [], n3 = 0; n3 < arguments.length; n3++)
      t[n3] = arguments[n3];
    return e.call(this, t) || this;
  }
  return __extends$1(n2, e), n2.documentId = function() {
    return new n2(C.v().R());
  }, n2.prototype.isEqual = function(t) {
    if (!(t instanceof n2))
      throw tt("isEqual", "FieldPath", 1, t);
    return this.t_.isEqual(t.t_);
  }, n2;
}(Nu), Su = new RegExp("[~\\*/\\[\\]]"), Du = function(t) {
  this.e_ = t;
}, ku = function(e) {
  function n2() {
    return null !== e && e.apply(this, arguments) || this;
  }
  return __extends$1(n2, e), n2.prototype.n_ = function(t) {
    if (2 !== t.s_)
      throw 1 === t.s_ ? t.i_(this.e_ + "() can only appear at the top level of your update data") : t.i_(this.e_ + "() cannot be used with set() unless you pass {merge:true}");
    return t.We.push(t.path), null;
  }, n2.prototype.isEqual = function(t) {
    return t instanceof n2;
  }, n2;
}(Du);
function xu(t, e, n2) {
  return new Gu({
    s_: 3,
    r_: e.settings.r_,
    methodName: t.e_,
    o_: n2
  }, e.U, e.serializer, e.ignoreUndefinedProperties);
}
var Lu = function(e) {
  function n2() {
    return null !== e && e.apply(this, arguments) || this;
  }
  return __extends$1(n2, e), n2.prototype.n_ = function(t) {
    return new In(t.path, new ln());
  }, n2.prototype.isEqual = function(t) {
    return t instanceof n2;
  }, n2;
}(Du), Ru = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, t) || this).a_ = n3, r2;
  }
  return __extends$1(n2, e), n2.prototype.n_ = function(t) {
    var e2 = xu(this, t, true), n3 = this.a_.map(function(t2) {
      return Hu(t2, e2);
    }), r2 = new pn(n3);
    return new In(t.path, r2);
  }, n2.prototype.isEqual = function(t) {
    return this === t;
  }, n2;
}(Du), Ou = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, t) || this).a_ = n3, r2;
  }
  return __extends$1(n2, e), n2.prototype.n_ = function(t) {
    var e2 = xu(this, t, true), n3 = this.a_.map(function(t2) {
      return Hu(t2, e2);
    }), r2 = new vn(n3);
    return new In(t.path, r2);
  }, n2.prototype.isEqual = function(t) {
    return this === t;
  }, n2;
}(Du), Pu = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, t) || this).c_ = n3, r2;
  }
  return __extends$1(n2, e), n2.prototype.n_ = function(t) {
    var e2 = new mn(t.serializer, Le(t.serializer, this.c_));
    return new In(t.path, e2);
  }, n2.prototype.isEqual = function(t) {
    return this === t;
  }, n2;
}(Du), Vu = function() {
  function t(t2, e) {
    if (q("GeoPoint", arguments, 2), z("GeoPoint", "number", 1, t2), z("GeoPoint", "number", 2, e), !isFinite(t2) || t2 < -90 || t2 > 90)
      throw new I(b.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t2);
    if (!isFinite(e) || e < -180 || e > 180)
      throw new I(b.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this.u_ = t2, this.h_ = e;
  }
  return Object.defineProperty(t.prototype, "latitude", {
    get: function() {
      return this.u_;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "longitude", {
    get: function() {
      return this.h_;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(t2) {
    return this.u_ === t2.u_ && this.h_ === t2.h_;
  }, t.prototype.toJSON = function() {
    return {
      latitude: this.u_,
      longitude: this.h_
    };
  }, t.prototype.Y = function(t2) {
    return st(this.u_, t2.u_) || st(this.h_, t2.h_);
  }, t;
}(), Uu = function(t) {
  this.l_ = t;
}, Cu = /^__.*__$/, Fu = function(t, e, n2) {
  this.__ = t, this.f_ = e, this.d_ = n2;
}, Mu = function() {
  function t(t2, e, n2) {
    this.data = t2, this.We = e, this.fieldTransforms = n2;
  }
  return t.prototype.w_ = function(t2, e) {
    var n2 = [];
    return null !== this.We ? n2.push(new Rn(t2, this.data, this.We, e)) : n2.push(new Ln(t2, this.data, e)), this.fieldTransforms.length > 0 && n2.push(new Pn(t2, this.fieldTransforms)), n2;
  }, t;
}(), qu = function() {
  function t(t2, e, n2) {
    this.data = t2, this.We = e, this.fieldTransforms = n2;
  }
  return t.prototype.w_ = function(t2, e) {
    var n2 = [new Rn(t2, this.data, this.We, e)];
    return this.fieldTransforms.length > 0 && n2.push(new Pn(t2, this.fieldTransforms)), n2;
  }, t;
}();
function ju(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw D();
  }
}
var Gu = function() {
  function t(t2, e, n2, r2, i, o) {
    this.settings = t2, this.U = e, this.serializer = n2, this.ignoreUndefinedProperties = r2, void 0 === i && this.m_(), this.fieldTransforms = i || [], this.We = o || [];
  }
  return Object.defineProperty(t.prototype, "path", {
    get: function() {
      return this.settings.path;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "s_", {
    get: function() {
      return this.settings.s_;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.T_ = function(e) {
    return new t(Object.assign(Object.assign({}, this.settings), e), this.U, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.We);
  }, t.prototype.E_ = function(t2) {
    var e, n2 = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), r2 = this.T_({
      path: n2,
      o_: false
    });
    return r2.I_(t2), r2;
  }, t.prototype.A_ = function(t2) {
    var e, n2 = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), r2 = this.T_({
      path: n2,
      o_: false
    });
    return r2.m_(), r2;
  }, t.prototype.R_ = function(t2) {
    return this.T_({
      path: void 0,
      o_: true
    });
  }, t.prototype.i_ = function(t2) {
    return ta(t2, this.settings.methodName, this.settings.g_ || false, this.path, this.settings.r_);
  }, t.prototype.contains = function(t2) {
    return void 0 !== this.We.find(function(e) {
      return t2.T(e);
    }) || void 0 !== this.fieldTransforms.find(function(e) {
      return t2.T(e.field);
    });
  }, t.prototype.m_ = function() {
    if (this.path)
      for (var t2 = 0; t2 < this.path.length; t2++)
        this.I_(this.path.get(t2));
  }, t.prototype.I_ = function(t2) {
    if (0 === t2.length)
      throw this.i_("Document fields must not be empty");
    if (ju(this.s_) && Cu.test(t2))
      throw this.i_('Document fields cannot begin and end with "__"');
  }, t;
}(), zu = function() {
  function t(t2, e, n2) {
    this.U = t2, this.ignoreUndefinedProperties = e, this.serializer = n2 || wu(t2);
  }
  return t.prototype.P_ = function(t2, e, n2, r2) {
    return void 0 === r2 && (r2 = false), new Gu({
      s_: t2,
      methodName: e,
      r_: n2,
      path: C.P(),
      o_: false,
      g_: r2
    }, this.U, this.serializer, this.ignoreUndefinedProperties);
  }, t;
}();
function Bu(t, e, n2, r2, i, o) {
  void 0 === o && (o = {});
  var s = t.P_(o.merge || o.mergeFields ? 2 : 0, e, n2, i);
  Xu("Data must be an object, but it was:", s, r2);
  var u2, a, c = Yu(r2, s);
  if (o.merge)
    u2 = new bn(s.We), a = s.fieldTransforms;
  else if (o.mergeFields) {
    for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
      var p2 = l[f], d = void 0;
      if (p2 instanceof Nu)
        d = p2.t_;
      else {
        if ("string" != typeof p2)
          throw D();
        d = Zu(e, p2, n2);
      }
      if (!s.contains(d))
        throw new I(b.INVALID_ARGUMENT, "Field '" + d + "' is specified in your field mask but missing from your input data.");
      ea(h, d) || h.push(d);
    }
    u2 = new bn(h), a = s.fieldTransforms.filter(function(t2) {
      return u2.Ye(t2.field);
    });
  } else
    u2 = null, a = s.fieldTransforms;
  return new Mu(new Mn(c), u2, a);
}
function Ku(t, e, n2, r2) {
  var i = t.P_(1, e, n2);
  Xu("Data must be an object, but it was:", i, r2);
  var o = [], s = new qn();
  R(r2, function(t2, r3) {
    var u3 = Zu(e, t2, n2), a = i.A_(u3);
    if (r3 instanceof ku || r3 instanceof Uu && r3.l_ instanceof ku)
      o.push(u3);
    else {
      var c = Hu(r3, a);
      null != c && (o.push(u3), s.set(u3, c));
    }
  });
  var u2 = new bn(o);
  return new qu(s.Xe(), u2, i.fieldTransforms);
}
function Wu(t, e, n2, r2, i, o) {
  var s = t.P_(1, e, n2), u2 = [Ju(e, r2, n2)], a = [i];
  if (o.length % 2 != 0)
    throw new I(b.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
  for (var c = 0; c < o.length; c += 2)
    u2.push(Ju(e, o[c])), a.push(o[c + 1]);
  for (var h = [], f = new qn(), l = u2.length - 1; l >= 0; --l)
    if (!ea(h, u2[l])) {
      var p2 = u2[l], d = a[l], v2 = s.A_(p2);
      if (d instanceof ku || d instanceof Uu && d.l_ instanceof ku)
        h.push(p2);
      else {
        var y2 = Hu(d, v2);
        null != y2 && (h.push(p2), f.set(p2, y2));
      }
    }
  var m = new bn(h);
  return new qu(f.Xe(), m, s.fieldTransforms);
}
function Qu(t, e, n2, r2) {
  return void 0 === r2 && (r2 = false), Hu(n2, t.P_(r2 ? 4 : 3, e));
}
function Hu(t, e) {
  if (t instanceof Uu && (t = t.l_), $u(t))
    return Xu("Unsupported field value:", e, t), Yu(t, e);
  if (t instanceof Du)
    return function(t2, e2) {
      if (!ju(e2.s_))
        throw e2.i_(t2.e_ + "() can only be used with update() and set()");
      if (!e2.path)
        throw e2.i_(t2.e_ + "() is not currently supported inside arrays");
      var n2 = t2.n_(e2);
      n2 && e2.fieldTransforms.push(n2);
    }(t, e), null;
  if (e.path && e.We.push(e.path), t instanceof Array) {
    if (e.settings.o_ && 4 !== e.s_)
      throw e.i_("Nested arrays are not supported");
    return function(t2, e2) {
      for (var n2 = [], r2 = 0, i = 0, o = t2; i < o.length; i++) {
        var s = Hu(o[i], e2.R_(r2));
        null == s && (s = {
          nullValue: "NULL_VALUE"
        }), n2.push(s), r2++;
      }
      return {
        arrayValue: {
          values: n2
        }
      };
    }(t, e);
  }
  return function(t2, e2) {
    if (null === t2)
      return {
        nullValue: "NULL_VALUE"
      };
    if ("number" == typeof t2)
      return Le(e2.serializer, t2);
    if ("boolean" == typeof t2)
      return {
        booleanValue: t2
      };
    if ("string" == typeof t2)
      return {
        stringValue: t2
      };
    if (t2 instanceof Date) {
      var n2 = mt.fromDate(t2);
      return {
        timestampValue: Re(e2.serializer, n2)
      };
    }
    if (t2 instanceof mt) {
      var r2 = new mt(t2.seconds, 1e3 * Math.floor(t2.nanoseconds / 1e3));
      return {
        timestampValue: Re(e2.serializer, r2)
      };
    }
    if (t2 instanceof Vu)
      return {
        geoPointValue: {
          latitude: t2.latitude,
          longitude: t2.longitude
        }
      };
    if (t2 instanceof ht)
      return {
        bytesValue: Oe(e2.serializer, t2.q)
      };
    if (t2 instanceof Fu) {
      var i = e2.U, o = t2.__;
      if (!o.isEqual(i))
        throw e2.i_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
      return {
        referenceValue: Ue(t2.__ || e2.U, t2.f_.path)
      };
    }
    if (void 0 === t2 && e2.ignoreUndefinedProperties)
      return null;
    throw e2.i_("Unsupported field value: " + X(t2));
  }(t, e);
}
function Yu(t, e) {
  var n2 = {};
  return O(t) ? e.path && e.path.length > 0 && e.We.push(e.path) : R(t, function(t2, r2) {
    var i = Hu(r2, e.E_(t2));
    null != i && (n2[t2] = i);
  }), {
    mapValue: {
      fields: n2
    }
  };
}
function $u(t) {
  return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof mt || t instanceof Vu || t instanceof ht || t instanceof Fu || t instanceof Du);
}
function Xu(t, e, n2) {
  if (!$u(n2) || !$(n2)) {
    var r2 = X(n2);
    throw "an object" === r2 ? e.i_(t + " a custom object") : e.i_(t + " " + r2);
  }
}
function Ju(t, e, n2) {
  if (e instanceof Nu)
    return e.t_;
  if ("string" == typeof e)
    return Zu(t, e);
  throw ta("Field path arguments must be of type string or FieldPath.", t, false, void 0, n2);
}
function Zu(t, e, n2) {
  try {
    return function(t2) {
      if (t2.search(Su) >= 0)
        throw new I(b.INVALID_ARGUMENT, "Invalid field path (" + t2 + "). Paths must not contain '~', '*', '/', '[', or ']'");
      try {
        return new (Au.bind.apply(Au, __spreadArrays$1([void 0], t2.split("."))))();
      } catch (e2) {
        throw new I(b.INVALID_ARGUMENT, "Invalid field path (" + t2 + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
      }
    }(e).t_;
  } catch (e2) {
    throw ta((i = e2) instanceof Error ? i.message : i.toString(), t, false, void 0, n2);
  }
  var i;
}
function ta(t, e, n2, r2, i) {
  var o = r2 && !r2.m(), s = void 0 !== i, u2 = "Function " + e + "() called with invalid data";
  n2 && (u2 += " (via `toFirestore()`)");
  var a = "";
  return (o || s) && (a += " (found", o && (a += " in field " + r2), s && (a += " in document " + i), a += ")"), new I(b.INVALID_ARGUMENT, (u2 += ". ") + t + a);
}
function ea(t, e) {
  return t.some(function(t2) {
    return t2.isEqual(e);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var na = function() {
  function t(t2) {
    this.Ku = t2, this.y_ = /* @__PURE__ */ new Map(), this.mutations = [], this.V_ = false, this.p_ = null, this.b_ = /* @__PURE__ */ new Set();
  }
  return t.prototype.v_ = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      var r2, i = this;
      return __generator(this, function(o) {
        switch (o.label) {
          case 0:
            if (this.S_(), this.mutations.length > 0)
              throw new I(b.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
            return [4, function(t3, r3) {
              return __awaiter(this, void 0, void 0, function() {
                var e, i2, o2, s, u2, a;
                return __generator(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      return e = x(t3), i2 = Ge(e.serializer) + "/documents", o2 = {
                        documents: r3.map(function(t4) {
                          return Fe(e.serializer, t4);
                        })
                      }, [4, e.ku("BatchGetDocuments", i2, o2)];
                    case 1:
                      return s = n2.sent(), u2 = /* @__PURE__ */ new Map(), s.forEach(function(t4) {
                        var n3 = function(t5, e2) {
                          return "found" in e2 ? function(t6, e3) {
                            k(!!e3.found), e3.found.name, e3.found.updateTime;
                            var n4 = Me(t6, e3.found.name), r4 = Ve(e3.found.updateTime), i3 = new Mn({
                              mapValue: {
                                fields: e3.found.fields
                              }
                            });
                            return new zn(n4, r4, i3, {});
                          }(t5, e2) : "missing" in e2 ? function(t6, e3) {
                            k(!!e3.missing), k(!!e3.readTime);
                            var n4 = Me(t6, e3.missing), r4 = Ve(e3.readTime);
                            return new Bn(n4, r4);
                          }(t5, e2) : D();
                        }(e.serializer, t4);
                        u2.set(n3.key.toString(), n3);
                      }), a = [], [2, (r3.forEach(function(t4) {
                        var e2 = u2.get(t4.toString());
                        k(!!e2), a.push(e2);
                      }), a)];
                  }
                });
              });
            }(this.Ku, t2)];
          case 1:
            return [2, ((r2 = o.sent()).forEach(function(t3) {
              t3 instanceof Bn || t3 instanceof zn ? i.D_(t3) : D();
            }), r2)];
        }
      });
    });
  }, t.prototype.set = function(t2, e) {
    this.write(e.w_(t2, this.Ge(t2))), this.b_.add(t2.toString());
  }, t.prototype.update = function(t2, e) {
    try {
      this.write(e.w_(t2, this.C_(t2)));
    } catch (t3) {
      this.p_ = t3;
    }
    this.b_.add(t2.toString());
  }, t.prototype.delete = function(t2) {
    this.write([new Cn(t2, this.Ge(t2))]), this.b_.add(t2.toString());
  }, t.prototype.commit = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, r2 = this;
      return __generator(this, function(i) {
        switch (i.label) {
          case 0:
            if (this.S_(), this.p_)
              throw this.p_;
            return t2 = this.y_, this.mutations.forEach(function(e) {
              t2.delete(e.key.toString());
            }), t2.forEach(function(t3, e) {
              var n2 = F.D(e);
              r2.mutations.push(new Fn(n2, r2.Ge(n2)));
            }), [4, function(t3, r3) {
              return __awaiter(this, void 0, void 0, function() {
                var e, i2, o;
                return __generator(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      return e = x(t3), i2 = Ge(e.serializer) + "/documents", o = {
                        writes: r3.map(function(t4) {
                          return Ke(e.serializer, t4);
                        })
                      }, [4, e.$u("Commit", i2, o)];
                    case 1:
                      return n2.sent(), [2];
                  }
                });
              });
            }(this.Ku, this.mutations)];
          case 1:
            return i.sent(), this.V_ = true, [2];
        }
      });
    });
  }, t.prototype.D_ = function(t2) {
    var e;
    if (t2 instanceof zn)
      e = t2.version;
    else {
      if (!(t2 instanceof Bn))
        throw D();
      e = gt.min();
    }
    var n2 = this.y_.get(t2.key.toString());
    if (n2) {
      if (!e.isEqual(n2))
        throw new I(b.ABORTED, "Document version changed between two reads.");
    } else
      this.y_.set(t2.key.toString(), e);
  }, t.prototype.Ge = function(t2) {
    var e = this.y_.get(t2.toString());
    return !this.b_.has(t2.toString()) && e ? _n.updateTime(e) : _n.ze();
  }, t.prototype.C_ = function(t2) {
    var e = this.y_.get(t2.toString());
    if (!this.b_.has(t2.toString()) && e) {
      if (e.isEqual(gt.min()))
        throw new I(b.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      return _n.updateTime(e);
    }
    return _n.exists(true);
  }, t.prototype.write = function(t2) {
    this.S_(), this.mutations = this.mutations.concat(t2);
  }, t.prototype.S_ = function() {
  }, t;
}(), ra = function() {
  function t(t2, e, n2, r2) {
    this.cs = t2, this.Ku = e, this.updateFunction = n2, this.ls = r2, this.N_ = 5, this.ys = new Sr(this.cs, "transaction_retry");
  }
  return t.prototype.run = function() {
    this.F_();
  }, t.prototype.F_ = function() {
    var t2 = this;
    this.ys.gn(function() {
      return __awaiter(t2, void 0, void 0, function() {
        var t3, e, r2 = this;
        return __generator(this, function(n2) {
          return t3 = new na(this.Ku), (e = this.x_(t3)) && e.then(function(e2) {
            r2.cs.ws(function() {
              return t3.commit().then(function() {
                r2.ls.resolve(e2);
              }).catch(function(t4) {
                r2.k_(t4);
              });
            });
          }).catch(function(t4) {
            r2.k_(t4);
          }), [2];
        });
      });
    });
  }, t.prototype.x_ = function(t2) {
    try {
      var e = this.updateFunction(t2);
      return !wt(e) && e.catch && e.then ? e : (this.ls.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t3) {
      return this.ls.reject(t3), null;
    }
  }, t.prototype.k_ = function(t2) {
    var e = this;
    this.N_ > 0 && this.M_(t2) ? (this.N_ -= 1, this.cs.ws(function() {
      return e.F_(), Promise.resolve();
    })) : this.ls.reject(t2);
  }, t.prototype.M_ = function(t2) {
    if ("FirebaseError" === t2.name) {
      var e = t2.code;
      return "aborted" === e || "failed-precondition" === e || !Lt(e);
    }
    return false;
  }, t;
}(), ia = function() {
  function t(t2, e) {
    this.credentials = t2, this.cs = e, this.clientId = ot.k(), this.O_ = new Ar();
  }
  return t.prototype.start = function(t2, r2, i, o) {
    var s = this;
    this.L_(), this.bl = t2;
    var u2 = new Ar(), a = false;
    return this.credentials.Hc(function(t3) {
      if (!a)
        return a = true, T("FirestoreClient", "Initializing. user=", t3.uid), s.B_(r2, i, o, t3, u2).then(s.O_.resolve, s.O_.reject);
      s.cs.Cs(function() {
        return function(t4, r3) {
          return __awaiter(this, void 0, void 0, function() {
            var e, i2;
            return __generator(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return (e = x(t4)).cs.xs(), T("RemoteStore", "RemoteStore received new credentials"), i2 = cs(e), e.Yu.add(3), [4, es(e)];
                case 1:
                  return n2.sent(), i2 && e.th.set("Unknown"), [4, e.Gu.Jl(r3)];
                case 2:
                  return n2.sent(), e.Yu.delete(3), [4, ts(e)];
                case 3:
                  return n2.sent(), [2];
              }
            });
          });
        }(s.ph, t3);
      });
    }), this.cs.ws(function() {
      return s.O_.promise;
    }), u2.promise;
  }, t.prototype.enableNetwork = function() {
    var t2 = this;
    return this.L_(), this.cs.enqueue(function() {
      return t2.persistence.tc(true), function(t3) {
        var e = x(t3);
        return e.Yu.delete(0), ts(e);
      }(t2.ph);
    });
  }, t.prototype.B_ = function(t2, r2, i, o, s) {
    return __awaiter(this, void 0, void 0, function() {
      var u2, a, c = this;
      return __generator(this, function(h) {
        switch (h.label) {
          case 0:
            return h.trys.push([0, 3, , 4]), u2 = {
              cs: this.cs,
              bl: this.bl,
              clientId: this.clientId,
              credentials: this.credentials,
              Wl: o,
              Dh: 100,
              persistenceSettings: i
            }, [4, t2.initialize(u2)];
          case 1:
            return h.sent(), [4, r2.initialize(t2, u2)];
          case 2:
            return h.sent(), this.persistence = t2.persistence, this.Sh = t2.Sh, this.ju = t2.ju, this.ql = t2.ql, this.Ku = r2.Ku, this.ph = r2.ph, this.fi = r2.fi, this.q_ = r2.bh, this.q_.Us = Rs.bind(null, this.fi), this.q_.js = Ps.bind(null, this.fi), this.persistence.Za(function() {
              return __awaiter(c, void 0, void 0, function() {
                return __generator(this, function(t3) {
                  switch (t3.label) {
                    case 0:
                      return [4, this.terminate()];
                    case 1:
                      return t3.sent(), [2];
                  }
                });
              });
            }), s.resolve(), [3, 4];
          case 3:
            if (a = h.sent(), s.reject(a), !this.U_(a))
              throw a;
            return [2, (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + a), this.B_(new Iu(), new _u(), {
              jl: false
            }, o, s))];
          case 4:
            return [2];
        }
      });
    });
  }, t.prototype.U_ = function(t2) {
    return "FirebaseError" === t2.name ? t2.code === b.FAILED_PRECONDITION || t2.code === b.UNIMPLEMENTED : !("undefined" != typeof DOMException && t2 instanceof DOMException) || 22 === t2.code || 20 === t2.code || 11 === t2.code;
  }, t.prototype.L_ = function() {
    if (this.cs.ps)
      throw new I(b.FAILED_PRECONDITION, "The client has already been terminated.");
  }, t.prototype.disableNetwork = function() {
    var t2 = this;
    return this.L_(), this.cs.enqueue(function() {
      return t2.persistence.tc(false), function(t3) {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          return __generator(this, function(n2) {
            switch (n2.label) {
              case 0:
                return (e = x(t3)).Yu.add(0), [4, es(e)];
              case 1:
                return n2.sent(), e.th.set("Offline"), [2];
            }
          });
        });
      }(t2.ph);
    });
  }, t.prototype.terminate = function() {
    var t2 = this;
    this.cs.Ds();
    var r2 = new Ar();
    return this.cs.bs(function() {
      return __awaiter(t2, void 0, void 0, function() {
        var t3, e;
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              return n2.trys.push([0, 4, , 5]), this.ql && this.ql.stop(), [4, ns(this.ph)];
            case 1:
              return n2.sent(), [4, this.Sh.Di()];
            case 2:
              return n2.sent(), [4, this.persistence.Di()];
            case 3:
              return n2.sent(), this.credentials.Yc(), r2.resolve(), [3, 5];
            case 4:
              return t3 = n2.sent(), e = Gr(t3, "Failed to shutdown persistence"), r2.reject(e), [3, 5];
            case 5:
              return [2];
          }
        });
      });
    }), r2.promise;
  }, t.prototype.waitForPendingWrites = function() {
    var t2 = this;
    this.L_();
    var r2 = new Ar();
    return this.cs.ws(function() {
      return function(t3, r3) {
        return __awaiter(this, void 0, void 0, function() {
          var e, i, o, s, u2;
          return __generator(this, function(n2) {
            switch (n2.label) {
              case 0:
                cs((e = x(t3)).ph) || T("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), n2.label = 1;
              case 1:
                return n2.trys.push([1, 3, , 4]), [4, function(t4) {
                  var e2 = x(t4);
                  return e2.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function(t5) {
                    return e2.Sr.qo(t5);
                  });
                }(e.ju)];
              case 2:
                return -1 === (i = n2.sent()) ? [2, void r3.resolve()] : ((o = e.Lh.get(i) || []).push(r3), e.Lh.set(i, o), [3, 4]);
              case 3:
                return s = n2.sent(), u2 = Gr(s, "Initialization of waitForPendingWrites() operation failed"), r3.reject(u2), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }(t2.fi, r2);
    }), r2.promise;
  }, t.prototype.listen = function(t2, e, n2) {
    var r2 = this;
    this.L_();
    var i = new Tu(n2), o = new $r(t2, i, e);
    return this.cs.ws(function() {
      return Kr(r2.q_, o);
    }), function() {
      i.Zl(), r2.cs.ws(function() {
        return Wr(r2.q_, o);
      });
    };
  }, t.prototype.Q_ = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      var r2, i = this;
      return __generator(this, function(o) {
        switch (o.label) {
          case 0:
            return this.L_(), [4, this.O_.promise];
          case 1:
            return o.sent(), r2 = new Ar(), [2, (this.cs.ws(function() {
              return function(t3, r3, i2) {
                return __awaiter(this, void 0, void 0, function() {
                  var e, o2, s;
                  return __generator(this, function(n2) {
                    switch (n2.label) {
                      case 0:
                        return n2.trys.push([0, 2, , 3]), [4, function(t4, e2) {
                          var n3 = x(t4);
                          return n3.persistence.runTransaction("read document", "readonly", function(t5) {
                            return n3.Cc.Cr(t5, e2);
                          });
                        }(t3, r3)];
                      case 1:
                        return (e = n2.sent()) instanceof zn ? i2.resolve(e) : e instanceof Bn ? i2.resolve(null) : i2.reject(new I(b.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, 3];
                      case 2:
                        return o2 = n2.sent(), s = Gr(o2, "Failed to get document '" + r3 + " from cache"), i2.reject(s), [3, 3];
                      case 3:
                        return [2];
                    }
                  });
                });
              }(i.ju, t2, r2);
            }), r2.promise)];
        }
      });
    });
  }, t.prototype.W_ = function(t2, r2) {
    return void 0 === r2 && (r2 = {}), __awaiter(this, void 0, void 0, function() {
      var e, i = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.L_(), [4, this.O_.promise];
          case 1:
            return n2.sent(), e = new Ar(), [2, (this.cs.ws(function() {
              return function(t3, e2, n3, r3, i2) {
                var o = new Tu({
                  next: function(o2) {
                    e2.ws(function() {
                      return Wr(t3, s);
                    });
                    var u2 = o2.docs.has(n3);
                    !u2 && o2.fromCache ? i2.reject(new I(b.UNAVAILABLE, "Failed to get document because the client is offline.")) : u2 && o2.fromCache && r3 && "server" === r3.source ? i2.reject(new I(b.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i2.resolve(o2);
                  },
                  error: function(t4) {
                    return i2.reject(t4);
                  }
                }), s = new $r(Hn(n3.path), o, {
                  includeMetadataChanges: true,
                  Xs: true
                });
                return Kr(t3, s);
              }(i.q_, i.cs, t2, r2, e);
            }), e.promise)];
        }
      });
    });
  }, t.prototype.j_ = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      var r2, i = this;
      return __generator(this, function(o) {
        switch (o.label) {
          case 0:
            return this.L_(), [4, this.O_.promise];
          case 1:
            return o.sent(), r2 = new Ar(), [2, (this.cs.ws(function() {
              return function(t3, r3, i2) {
                return __awaiter(this, void 0, void 0, function() {
                  var e, o2, s, u2, a, c;
                  return __generator(this, function(n2) {
                    switch (n2.label) {
                      case 0:
                        return n2.trys.push([0, 2, , 3]), [4, Uo(t3, r3, true)];
                      case 1:
                        return e = n2.sent(), o2 = new Ds(r3, e.Fc), s = o2.wh(e.documents), u2 = o2.yr(s, false), i2.resolve(u2.snapshot), [3, 3];
                      case 2:
                        return a = n2.sent(), c = Gr(a, "Failed to execute query '" + r3 + " against cache"), i2.reject(c), [3, 3];
                      case 3:
                        return [2];
                    }
                  });
                });
              }(i.ju, t2, r2);
            }), r2.promise)];
        }
      });
    });
  }, t.prototype.K_ = function(t2, r2) {
    return void 0 === r2 && (r2 = {}), __awaiter(this, void 0, void 0, function() {
      var e, i = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.L_(), [4, this.O_.promise];
          case 1:
            return n2.sent(), e = new Ar(), [2, (this.cs.ws(function() {
              return function(t3, e2, n3, r3, i2) {
                var o = new Tu({
                  next: function(n4) {
                    e2.ws(function() {
                      return Wr(t3, s);
                    }), n4.fromCache && "server" === r3.source ? i2.reject(new I(b.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i2.resolve(n4);
                  },
                  error: function(t4) {
                    return i2.reject(t4);
                  }
                }), s = new $r(n3, o, {
                  includeMetadataChanges: true,
                  Xs: true
                });
                return Kr(t3, s);
              }(i.q_, i.cs, t2, r2, e);
            }), e.promise)];
        }
      });
    });
  }, t.prototype.write = function(t2) {
    var r2 = this;
    this.L_();
    var i = new Ar();
    return this.cs.ws(function() {
      return function(t3, r3, i2) {
        return __awaiter(this, void 0, void 0, function() {
          var e, o, s, u2;
          return __generator(this, function(n2) {
            switch (n2.label) {
              case 0:
                e = ou(t3), n2.label = 1;
              case 1:
                return n2.trys.push([1, 5, , 6]), [
                  4,
                  function(t4, e2) {
                    var n3, r4 = x(t4), i3 = mt.now(), o2 = e2.reduce(function(t5, e3) {
                      return t5.add(e3.key);
                    }, Kt());
                    return r4.persistence.runTransaction("Locally write mutations", "readwrite", function(t5) {
                      return r4.Cc.kr(t5, o2).next(function(o3) {
                        n3 = o3;
                        for (var s2 = [], u3 = 0, a = e2; u3 < a.length; u3++) {
                          var c = a[u3], h = Dn(c, n3.get(c.key));
                          null != h && s2.push(new Rn(c.key, h, jn(h.proto.mapValue), _n.exists(true)));
                        }
                        return r4.Sr.ko(t5, i3, s2, e2);
                      });
                    }).then(function(t5) {
                      var e3 = t5.lr(n3);
                      return {
                        batchId: t5.batchId,
                        wr: e3
                      };
                    });
                  }(e.ju, r3)
                ];
              case 2:
                return o = n2.sent(), e.Sh.xi(o.batchId), function(t4, e2, n3) {
                  var r4 = t4.Oh[t4.currentUser.ti()];
                  r4 || (r4 = new Ot(st)), r4 = r4.ot(e2, n3), t4.Oh[t4.currentUser.ti()] = r4;
                }(e, o.batchId, i2), [4, Qs(e, o.wr)];
              case 3:
                return n2.sent(), [4, ys(e.ph)];
              case 4:
                return n2.sent(), [3, 6];
              case 5:
                return s = n2.sent(), u2 = Gr(s, "Failed to persist write"), i2.reject(u2), [3, 6];
              case 6:
                return [2];
            }
          });
        });
      }(r2.fi, t2, i);
    }), i.promise;
  }, t.prototype.U = function() {
    return this.bl.U;
  }, t.prototype.G_ = function(t2) {
    var r2 = this;
    this.L_();
    var i = new Tu(t2);
    return this.cs.ws(function() {
      return __awaiter(r2, void 0, void 0, function() {
        return __generator(this, function(t3) {
          return [2, function(t4, e) {
            x(t4).qs.add(e), e.next();
          }(this.q_, i)];
        });
      });
    }), function() {
      i.Zl(), r2.cs.ws(function() {
        return __awaiter(r2, void 0, void 0, function() {
          return __generator(this, function(t3) {
            return [2, function(t4, e) {
              x(t4).qs.delete(e);
            }(this.q_, i)];
          });
        });
      });
    };
  }, Object.defineProperty(t.prototype, "z_", {
    get: function() {
      return this.cs.ps;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.transaction = function(t2) {
    var e = this;
    this.L_();
    var n2 = new Ar();
    return this.cs.ws(function() {
      return new ra(e.cs, e.Ku, t2, n2).run(), Promise.resolve();
    }), n2.promise;
  }, t;
}();
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
function oa(t) {
  return function(t2, e) {
    if ("object" != typeof t2 || null === t2)
      return false;
    for (var n2 = t2, r2 = 0, i = ["next", "error", "complete"]; r2 < i.length; r2++) {
      var o = i[r2];
      if (o in n2 && "function" == typeof n2[o])
        return true;
    }
    return false;
  }(t);
}
var sa = function() {
  function t(t2, e, n2, r2, i) {
    this.U = t2, this.timestampsInSnapshots = e, this.H_ = n2, this.Y_ = r2, this.J_ = i;
  }
  return t.prototype.X_ = function(t2) {
    switch (he(t2)) {
      case 0:
        return null;
      case 1:
        return t2.booleanValue;
      case 2:
        return ge(t2.integerValue || t2.doubleValue);
      case 3:
        return this.Z_(t2.timestampValue);
      case 4:
        return this.tf(t2);
      case 5:
        return t2.stringValue;
      case 6:
        return this.J_(we(t2.bytesValue));
      case 7:
        return this.ef(t2.referenceValue);
      case 8:
        return this.nf(t2.geoPointValue);
      case 9:
        return this.sf(t2.arrayValue);
      case 10:
        return this.if(t2.mapValue);
      default:
        throw D();
    }
  }, t.prototype.if = function(t2) {
    var e = this, n2 = {};
    return R(t2.fields || {}, function(t3, r2) {
      n2[t3] = e.X_(r2);
    }), n2;
  }, t.prototype.nf = function(t2) {
    return new Vu(ge(t2.latitude), ge(t2.longitude));
  }, t.prototype.sf = function(t2) {
    var e = this;
    return (t2.values || []).map(function(t3) {
      return e.X_(t3);
    });
  }, t.prototype.tf = function(t2) {
    switch (this.H_) {
      case "previous":
        var e = ue(t2);
        return null == e ? null : this.X_(e);
      case "estimate":
        return this.Z_(ae(t2));
      default:
        return null;
    }
  }, t.prototype.Z_ = function(t2) {
    var e = me(t2), n2 = new mt(e.seconds, e.nanos);
    return this.timestampsInSnapshots ? n2 : n2.toDate();
  }, t.prototype.ef = function(t2) {
    var e = V.g(t2);
    k(un(e));
    var n2 = new vt(e.get(1), e.get(3)), r2 = new F(e.u(5));
    return n2.isEqual(this.U) || N("Document " + r2 + " contains a document reference within a different database (" + n2.projectId + "/" + n2.database + ") which is not supported. It will be treated as a reference in the current database (" + this.U.projectId + "/" + this.U.database + ") instead."), this.Y_(r2);
  }, t;
}(), ua = wi.ho, aa = function() {
  function t(t2) {
    var e, n2, r2, i, o;
    if (void 0 === t2.host) {
      if (void 0 !== t2.ssl)
        throw new I(b.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else
      K("settings", "non-empty string", "host", t2.host), this.host = t2.host, W("settings", "boolean", "ssl", t2.ssl), this.ssl = null === (e = t2.ssl) || void 0 === e || e;
    if (Z("settings", t2, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "experimentalAutoDetectLongPolling", "ignoreUndefinedProperties"]), W("settings", "object", "credentials", t2.credentials), this.credentials = t2.credentials, W("settings", "boolean", "timestampsInSnapshots", t2.timestampsInSnapshots), W("settings", "boolean", "ignoreUndefinedProperties", t2.ignoreUndefinedProperties), true === t2.timestampsInSnapshots ? N("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : false === t2.timestampsInSnapshots && N("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), this.timestampsInSnapshots = null === (n2 = t2.timestampsInSnapshots) || void 0 === n2 || n2, this.ignoreUndefinedProperties = null !== (r2 = t2.ignoreUndefinedProperties) && void 0 !== r2 && r2, W("settings", "number", "cacheSizeBytes", t2.cacheSizeBytes), void 0 === t2.cacheSizeBytes)
      this.cacheSizeBytes = wi._o;
    else {
      if (t2.cacheSizeBytes !== ua && t2.cacheSizeBytes < wi.lo)
        throw new I(b.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + wi.lo);
      this.cacheSizeBytes = t2.cacheSizeBytes;
    }
    W("settings", "boolean", "experimentalForceLongPolling", t2.experimentalForceLongPolling), this.experimentalForceLongPolling = null !== (i = t2.experimentalForceLongPolling) && void 0 !== i && i, W("settings", "boolean", "experimentalAutoDetectLongPolling", t2.experimentalAutoDetectLongPolling), this.experimentalAutoDetectLongPolling = null !== (o = t2.experimentalAutoDetectLongPolling) && void 0 !== o && o, function(t3, e2, n3, r3) {
      if (true === e2 && true === r3)
        throw new I(b.INVALID_ARGUMENT, "experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.");
    }(0, t2.experimentalForceLongPolling, 0, t2.experimentalAutoDetectLongPolling);
  }
  return t.prototype.isEqual = function(t2) {
    return this.host === t2.host && this.ssl === t2.ssl && this.timestampsInSnapshots === t2.timestampsInSnapshots && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t2.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties;
  }, t;
}(), ca = function() {
  function t(r2, i, o, s) {
    var u2 = this;
    if (void 0 === o && (o = new Iu()), void 0 === s && (s = new _u()), this.rf = o, this.af = s, this.cf = null, this.uf = new jr(), this.INTERNAL = {
      delete: function() {
        return __awaiter(u2, void 0, void 0, function() {
          return __generator(this, function(t2) {
            switch (t2.label) {
              case 0:
                return this.hf(), [4, this.lf.terminate()];
              case 1:
                return t2.sent(), [2];
            }
          });
        });
      }
    }, "object" == typeof r2.options) {
      var a = r2;
      this.cf = a, this.__ = t._f(a), this.ff = a.name, this.df = new Ko(i);
    } else {
      var c = r2;
      if (!c.projectId)
        throw new I(b.INVALID_ARGUMENT, "Must provide projectId");
      this.__ = new vt(c.projectId, c.database), this.ff = "[DEFAULT]", this.df = new Bo();
    }
    this.wf = new aa({});
  }
  return Object.defineProperty(t.prototype, "mf", {
    get: function() {
      return this.Tf || (this.Tf = new zu(this.__, this.wf.ignoreUndefinedProperties)), this.Tf;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.settings = function(t2) {
    q("Firestore.settings", arguments, 1), z("Firestore.settings", "object", 1, t2), t2.merge && delete (t2 = Object.assign(Object.assign({}, this.wf), t2)).merge;
    var e = new aa(t2);
    if (this.lf && !this.wf.isEqual(e))
      throw new I(b.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
    this.wf = e, void 0 !== e.credentials && (this.df = function(t3) {
      if (!t3)
        return new Bo();
      switch (t3.type) {
        case "gapi":
          var e2 = t3.client;
          return k(!("object" != typeof e2 || null === e2 || !e2.auth || !e2.auth.getAuthHeaderValueForFirstParty)), new Qo(e2, t3.sessionIndex || "0");
        case "provider":
          return t3.client;
        default:
          throw new I(b.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
      }
    }(e.credentials));
  }, t.prototype.enableNetwork = function() {
    return this.hf(), this.lf.enableNetwork();
  }, t.prototype.disableNetwork = function() {
    return this.hf(), this.lf.disableNetwork();
  }, t.prototype.enablePersistence = function(t2) {
    var e, n2;
    if (this.lf)
      throw new I(b.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
    var r2 = false, i = false;
    if (t2 && (void 0 !== t2.experimentalTabSynchronization && N("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), r2 = null !== (n2 = null !== (e = t2.synchronizeTabs) && void 0 !== e ? e : t2.experimentalTabSynchronization) && void 0 !== n2 && n2, i = !!t2.experimentalForceOwningTab && t2.experimentalForceOwningTab, r2 && i))
      throw new I(b.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
    return this.Ef(this.rf, this.af, {
      jl: true,
      cacheSizeBytes: this.wf.cacheSizeBytes,
      synchronizeTabs: r2,
      ka: i
    });
  }, t.prototype.clearPersistence = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, r2 = this;
      return __generator(this, function(i) {
        if (void 0 !== this.lf && !this.lf.z_)
          throw new I(b.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
        return t2 = new Ar(), [2, (this.uf.bs(function() {
          return __awaiter(r2, void 0, void 0, function() {
            var e;
            return __generator(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return n2.trys.push([0, 2, , 3]), [4, this.rf.clearPersistence(this.__, this.ff)];
                case 1:
                  return n2.sent(), t2.resolve(), [3, 3];
                case 2:
                  return e = n2.sent(), t2.reject(e), [3, 3];
                case 3:
                  return [2];
              }
            });
          });
        }), t2.promise)];
      });
    });
  }, t.prototype.terminate = function() {
    return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
  }, Object.defineProperty(t.prototype, "If", {
    get: function() {
      return this.hf(), this.lf.z_;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.waitForPendingWrites = function() {
    return this.hf(), this.lf.waitForPendingWrites();
  }, t.prototype.onSnapshotsInSync = function(t2) {
    if (this.hf(), oa(t2))
      return this.lf.G_(t2);
    z("Firestore.onSnapshotsInSync", "function", 1, t2);
    var e = {
      next: t2
    };
    return this.lf.G_(e);
  }, t.prototype.hf = function() {
    return this.lf || this.Ef(new Iu(), new _u(), {
      jl: false
    }), this.lf;
  }, t.prototype.Af = function() {
    return new dt(this.__, this.ff, this.wf.host, this.wf.ssl, this.wf.experimentalForceLongPolling, this.wf.experimentalAutoDetectLongPolling);
  }, t.prototype.Ef = function(t2, e, n2) {
    var r2 = this.Af();
    return this.lf = new ia(this.df, this.uf), this.lf.start(r2, t2, e, n2);
  }, t._f = function(t2) {
    if (e = t2.options, !Object.prototype.hasOwnProperty.call(e, "projectId"))
      throw new I(b.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
    var e, n2 = t2.options.projectId;
    if (!n2 || "string" != typeof n2)
      throw new I(b.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
    return new vt(n2);
  }, Object.defineProperty(t.prototype, "app", {
    get: function() {
      if (!this.cf)
        throw new I(b.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this.cf;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.collection = function(t2) {
    return q("Firestore.collection", arguments, 1), z("Firestore.collection", "non-empty string", 1, t2), this.hf(), new Ta(V.g(t2), this, null);
  }, t.prototype.doc = function(t2) {
    return q("Firestore.doc", arguments, 1), z("Firestore.doc", "non-empty string", 1, t2), this.hf(), la.Rf(V.g(t2), this, null);
  }, t.prototype.collectionGroup = function(t2) {
    if (q("Firestore.collectionGroup", arguments, 1), z("Firestore.collectionGroup", "non-empty string", 1, t2), t2.indexOf("/") >= 0)
      throw new I(b.INVALID_ARGUMENT, "Invalid collection ID '" + t2 + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
    return this.hf(), new Ea(function(t3) {
      return new Wn(V.P(), t3);
    }(t2), this, null);
  }, t.prototype.runTransaction = function(t2) {
    var e = this;
    return q("Firestore.runTransaction", arguments, 1), z("Firestore.runTransaction", "function", 1, t2), this.hf().transaction(function(n2) {
      return t2(new ha(e, n2));
    });
  }, t.prototype.batch = function() {
    return this.hf(), new fa(this);
  }, Object.defineProperty(t, "logLevel", {
    get: function() {
      switch (_()) {
        case LogLevel.DEBUG:
          return "debug";
        case LogLevel.ERROR:
          return "error";
        case LogLevel.SILENT:
          return "silent";
        case LogLevel.WARN:
          return "warn";
        case LogLevel.INFO:
          return "info";
        case LogLevel.VERBOSE:
          return "verbose";
        default:
          return "error";
      }
    },
    enumerable: false,
    configurable: true
  }), t.setLogLevel = function(t2) {
    var e;
    q("Firestore.setLogLevel", arguments, 1), H("setLogLevel", ["debug", "error", "silent", "warn", "info", "verbose"], 1, t2), e = t2, E.setLogLevel(e);
  }, t.prototype.gf = function() {
    return this.wf.timestampsInSnapshots;
  }, t.prototype.Pf = function() {
    return this.wf;
  }, t;
}(), ha = function() {
  function t(t2, e) {
    this.yf = t2, this.Vf = e;
  }
  return t.prototype.get = function(t2) {
    var e = this;
    q("Transaction.get", arguments, 1);
    var n2 = Da("Transaction.get", t2, this.yf);
    return this.Vf.v_([n2.f_]).then(function(t3) {
      if (!t3 || 1 !== t3.length)
        return D();
      var r2 = t3[0];
      if (r2 instanceof Bn)
        return new da(e.yf, n2.f_, null, false, false, n2.d_);
      if (r2 instanceof zn)
        return new da(e.yf, n2.f_, r2, false, false, n2.d_);
      throw D();
    });
  }, t.prototype.set = function(t2, e, n2) {
    G("Transaction.set", arguments, 2, 3);
    var r2 = Da("Transaction.set", t2, this.yf);
    n2 = Na("Transaction.set", n2);
    var i = xa(r2.d_, e, n2), o = Bu(this.yf.mf, "Transaction.set", r2.f_, i, null !== r2.d_, n2);
    return this.Vf.set(r2.f_, o), this;
  }, t.prototype.update = function(t2, e, n2) {
    for (var r2, i, o = [], s = 3; s < arguments.length; s++)
      o[s - 3] = arguments[s];
    return "string" == typeof e || e instanceof Au ? (j("Transaction.update", arguments, 3), r2 = Da("Transaction.update", t2, this.yf), i = Wu(this.yf.mf, "Transaction.update", r2.f_, e, n2, o)) : (q("Transaction.update", arguments, 2), r2 = Da("Transaction.update", t2, this.yf), i = Ku(this.yf.mf, "Transaction.update", r2.f_, e)), this.Vf.update(r2.f_, i), this;
  }, t.prototype.delete = function(t2) {
    q("Transaction.delete", arguments, 1);
    var e = Da("Transaction.delete", t2, this.yf);
    return this.Vf.delete(e.f_), this;
  }, t;
}(), fa = function() {
  function t(t2) {
    this.yf = t2, this.pf = [], this.bf = false;
  }
  return t.prototype.set = function(t2, e, n2) {
    G("WriteBatch.set", arguments, 2, 3), this.vf();
    var r2 = Da("WriteBatch.set", t2, this.yf);
    n2 = Na("WriteBatch.set", n2);
    var i = xa(r2.d_, e, n2), o = Bu(this.yf.mf, "WriteBatch.set", r2.f_, i, null !== r2.d_, n2);
    return this.pf = this.pf.concat(o.w_(r2.f_, _n.ze())), this;
  }, t.prototype.update = function(t2, e, n2) {
    for (var r2, i, o = [], s = 3; s < arguments.length; s++)
      o[s - 3] = arguments[s];
    return this.vf(), "string" == typeof e || e instanceof Au ? (j("WriteBatch.update", arguments, 3), r2 = Da("WriteBatch.update", t2, this.yf), i = Wu(this.yf.mf, "WriteBatch.update", r2.f_, e, n2, o)) : (q("WriteBatch.update", arguments, 2), r2 = Da("WriteBatch.update", t2, this.yf), i = Ku(this.yf.mf, "WriteBatch.update", r2.f_, e)), this.pf = this.pf.concat(i.w_(r2.f_, _n.exists(true))), this;
  }, t.prototype.delete = function(t2) {
    q("WriteBatch.delete", arguments, 1), this.vf();
    var e = Da("WriteBatch.delete", t2, this.yf);
    return this.pf = this.pf.concat(new Cn(e.f_, _n.ze())), this;
  }, t.prototype.commit = function() {
    return this.vf(), this.bf = true, this.pf.length > 0 ? this.yf.hf().write(this.pf) : Promise.resolve();
  }, t.prototype.vf = function() {
    if (this.bf)
      throw new I(b.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }, t;
}(), la = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this, n3.__, t, r2) || this).f_ = t, i.firestore = n3, i.d_ = r2, i.lf = i.firestore.hf(), i;
  }
  return __extends$1(n2, e), n2.Rf = function(t, e2, r2) {
    if (t.length % 2 != 0)
      throw new I(b.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.R() + " has " + t.length);
    return new n2(new F(t), e2, r2);
  }, Object.defineProperty(n2.prototype, "id", {
    get: function() {
      return this.f_.path._();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(n2.prototype, "parent", {
    get: function() {
      return new Ta(this.f_.path.h(), this.firestore, this.d_);
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(n2.prototype, "path", {
    get: function() {
      return this.f_.path.R();
    },
    enumerable: false,
    configurable: true
  }), n2.prototype.collection = function(t) {
    if (q("DocumentReference.collection", arguments, 1), z("DocumentReference.collection", "non-empty string", 1, t), !t)
      throw new I(b.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
    var e2 = V.g(t);
    return new Ta(this.f_.path.child(e2), this.firestore, null);
  }, n2.prototype.isEqual = function(t) {
    if (!(t instanceof n2))
      throw tt("isEqual", "DocumentReference", 1, t);
    return this.firestore === t.firestore && this.f_.isEqual(t.f_) && this.d_ === t.d_;
  }, n2.prototype.set = function(t, e2) {
    G("DocumentReference.set", arguments, 1, 2), e2 = Na("DocumentReference.set", e2);
    var n3 = xa(this.d_, t, e2), r2 = Bu(this.firestore.mf, "DocumentReference.set", this.f_, n3, null !== this.d_, e2);
    return this.lf.write(r2.w_(this.f_, _n.ze()));
  }, n2.prototype.update = function(t, e2) {
    for (var n3, r2 = [], i = 2; i < arguments.length; i++)
      r2[i - 2] = arguments[i];
    return "string" == typeof t || t instanceof Au ? (j("DocumentReference.update", arguments, 2), n3 = Wu(this.firestore.mf, "DocumentReference.update", this.f_, t, e2, r2)) : (q("DocumentReference.update", arguments, 1), n3 = Ku(this.firestore.mf, "DocumentReference.update", this.f_, t)), this.lf.write(n3.w_(this.f_, _n.exists(true)));
  }, n2.prototype.delete = function() {
    return q("DocumentReference.delete", arguments, 0), this.lf.write([new Cn(this.f_, _n.ze())]);
  }, n2.prototype.onSnapshot = function() {
    for (var t, e2, n3, r2 = this, i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    G("DocumentReference.onSnapshot", arguments, 1, 4);
    var s = {
      includeMetadataChanges: false
    }, u2 = 0;
    "object" != typeof i[u2] || oa(i[u2]) || (Z("DocumentReference.onSnapshot", s = i[u2], ["includeMetadataChanges"]), W("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u2++);
    var a = {
      includeMetadataChanges: s.includeMetadataChanges
    };
    if (oa(i[u2])) {
      var c = i[u2];
      i[u2] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[u2 + 1] = null === (e2 = c.error) || void 0 === e2 ? void 0 : e2.bind(c), i[u2 + 2] = null === (n3 = c.complete) || void 0 === n3 ? void 0 : n3.bind(c);
    } else
      z("DocumentReference.onSnapshot", "function", u2, i[u2]), B("DocumentReference.onSnapshot", "function", u2 + 1, i[u2 + 1]), B("DocumentReference.onSnapshot", "function", u2 + 2, i[u2 + 2]);
    var h = {
      next: function(t2) {
        i[u2] && i[u2](r2.Sf(t2));
      },
      error: i[u2 + 1],
      complete: i[u2 + 2]
    };
    return this.lf.listen(Hn(this.f_.path), a, h);
  }, n2.prototype.get = function(t) {
    var e2 = this;
    G("DocumentReference.get", arguments, 0, 1), Sa("DocumentReference.get", t);
    var n3 = this.firestore.hf();
    return t && "cache" === t.source ? n3.Q_(this.f_).then(function(t2) {
      return new da(e2.firestore, e2.f_, t2, true, t2 instanceof zn && t2.Je, e2.d_);
    }) : n3.W_(this.f_, t).then(function(t2) {
      return e2.Sf(t2);
    });
  }, n2.prototype.withConverter = function(t) {
    return new n2(this.f_, this.firestore, t);
  }, n2.prototype.Sf = function(t) {
    var e2 = t.docs.get(this.f_);
    return new da(this.firestore, this.f_, e2, t.fromCache, t.hasPendingWrites, this.d_);
  }, n2;
}(Fu), pa = function() {
  function t(t2, e) {
    this.hasPendingWrites = t2, this.fromCache = e;
  }
  return t.prototype.isEqual = function(t2) {
    return this.hasPendingWrites === t2.hasPendingWrites && this.fromCache === t2.fromCache;
  }, t;
}(), da = function() {
  function t(t2, e, n2, r2, i, o) {
    this.yf = t2, this.f_ = e, this.Df = n2, this.Cf = r2, this.Nf = i, this.d_ = o;
  }
  return t.prototype.data = function(t2) {
    var e = this;
    if (G("DocumentSnapshot.data", arguments, 0, 1), t2 = Aa("DocumentSnapshot.data", t2), this.Df) {
      if (this.d_) {
        var n2 = new va(this.yf, this.f_, this.Df, this.Cf, this.Nf, null);
        return this.d_.fromFirestore(n2, t2);
      }
      return new sa(this.yf.__, this.yf.gf(), t2.serverTimestamps || "none", function(t3) {
        return new la(t3, e.yf, null);
      }, function(t3) {
        return new pt(t3);
      }).X_(this.Df.rn());
    }
  }, t.prototype.get = function(t2, e) {
    var n2 = this;
    if (G("DocumentSnapshot.get", arguments, 1, 2), e = Aa("DocumentSnapshot.get", e), this.Df) {
      var r2 = this.Df.data().field(Ju("DocumentSnapshot.get", t2, this.f_));
      if (null !== r2)
        return new sa(this.yf.__, this.yf.gf(), e.serverTimestamps || "none", function(t3) {
          return new la(t3, n2.yf, n2.d_);
        }, function(t3) {
          return new pt(t3);
        }).X_(r2);
    }
  }, Object.defineProperty(t.prototype, "id", {
    get: function() {
      return this.f_.path._();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "ref", {
    get: function() {
      return new la(this.f_, this.yf, this.d_);
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "exists", {
    get: function() {
      return null !== this.Df;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "metadata", {
    get: function() {
      return new pa(this.Nf, this.Cf);
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(e) {
    if (!(e instanceof t))
      throw tt("isEqual", "DocumentSnapshot", 1, e);
    return this.yf === e.yf && this.Cf === e.Cf && this.f_.isEqual(e.f_) && (null === this.Df ? null === e.Df : this.Df.isEqual(e.Df)) && this.d_ === e.d_;
  }, t;
}(), va = function(e) {
  function n2() {
    return null !== e && e.apply(this, arguments) || this;
  }
  return __extends$1(n2, e), n2.prototype.data = function(t) {
    return e.prototype.data.call(this, t);
  }, n2;
}(da);
/**
 * @license
 * Copyright 2017 Google LLC
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
function ya(t, e, n2, r2, i, o, s) {
  var u2;
  if (i.p()) {
    if ("array-contains" === o || "array-contains-any" === o)
      throw new I(b.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
    if ("in" === o || "not-in" === o) {
      wa(s, o);
      for (var a = [], c = 0, h = s; c < h.length; c++) {
        var f = h[c];
        a.push(ga(r2, t, f));
      }
      u2 = {
        arrayValue: {
          values: a
        }
      };
    } else
      u2 = ga(r2, t, s);
  } else
    "in" !== o && "not-in" !== o && "array-contains-any" !== o || wa(s, o), u2 = Qu(n2, e, s, "in" === o || "not-in" === o);
  var l = hr.create(i, o, u2);
  return function(t2, e2) {
    if (e2.hn()) {
      var n3 = Jn(t2);
      if (null !== n3 && !n3.isEqual(e2.field))
        throw new I(b.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n3.toString() + "' and '" + e2.field.toString() + "'");
      var r3 = Xn(t2);
      null !== r3 && ba(t2, e2.field, r3);
    }
    var i2 = function(t3, e3) {
      for (var n4 = 0, r4 = t3.filters; n4 < r4.length; n4++) {
        var i3 = r4[n4];
        if (e3.indexOf(i3.op) >= 0)
          return i3.op;
      }
      return null;
    }(t2, function(t3) {
      switch (t3) {
        case "!=":
          return ["!=", "not-in"];
        case "array-contains":
          return ["array-contains", "array-contains-any", "not-in"];
        case "in":
          return ["array-contains-any", "in", "not-in"];
        case "array-contains-any":
          return ["array-contains", "array-contains-any", "in", "not-in"];
        case "not-in":
          return ["array-contains", "array-contains-any", "in", "not-in", "!="];
        default:
          return [];
      }
    }(e2.op));
    if (null !== i2)
      throw i2 === e2.op ? new I(b.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e2.op.toString() + "' filter.") : new I(b.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e2.op.toString() + "' filters with '" + i2.toString() + "' filters.");
  }(t, l), l;
}
function ma(t, e, n2) {
  if (null !== t.startAt)
    throw new I(b.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
  if (null !== t.endAt)
    throw new I(b.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
  var r2 = new _r(e, n2);
  return function(t2, e2) {
    if (null === Xn(t2)) {
      var n3 = Jn(t2);
      null !== n3 && ba(t2, n3, e2.field);
    }
  }(t, r2), r2;
}
function ga(t, e, n2) {
  if ("string" == typeof n2) {
    if ("" === n2)
      throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!Zn(e) && -1 !== n2.indexOf("/"))
      throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n2 + "' contains a '/' character.");
    var r2 = e.path.child(V.g(n2));
    if (!F.F(r2))
      throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r2 + "' is not because it has an odd number of segments (" + r2.length + ").");
    return be(t, new F(r2));
  }
  if (n2 instanceof Fu)
    return be(t, n2.f_);
  throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + X(n2) + ".");
}
function wa(t, e) {
  if (!Array.isArray(t) || 0 === t.length)
    throw new I(b.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
  if (t.length > 10)
    throw new I(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
  if ("in" === e || "array-contains-any" === e) {
    if (t.indexOf(null) >= 0)
      throw new I(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
    if (t.filter(function(t2) {
      return Number.isNaN(t2);
    }).length > 0)
      throw new I(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
  }
}
function ba(t, e, n2) {
  if (!n2.isEqual(e))
    throw new I(b.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n2.toString() + "' instead.");
}
function Ia(t) {
  if ($n(t) && 0 === t.on.length)
    throw new I(b.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
var Ea = function() {
  function t(t2, e, n2) {
    this.Ff = t2, this.firestore = e, this.d_ = n2;
  }
  return t.prototype.where = function(e, n2, r2) {
    q("Query.where", arguments, 3), J("Query.where", 3, r2);
    var i = H("Query.where", ["<", "<=", "==", "!=", ">=", ">", "array-contains", "in", "array-contains-any", "not-in"], 2, n2), o = Ju("Query.where", e), s = ya(this.Ff, "Query.where", this.firestore.mf, this.firestore.__, o, i, r2);
    return new t(function(t2, e2) {
      var n3 = t2.filters.concat([e2]);
      return new Wn(t2.path, t2.collectionGroup, t2.on.slice(), n3, t2.limit, t2.an, t2.startAt, t2.endAt);
    }(this.Ff, s), this.firestore, this.d_);
  }, t.prototype.orderBy = function(e, n2) {
    var r2;
    if (G("Query.orderBy", arguments, 1, 2), B("Query.orderBy", "non-empty string", 2, n2), void 0 === n2 || "asc" === n2)
      r2 = "asc";
    else {
      if ("desc" !== n2)
        throw new I(b.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n2 + "', expected 'asc' or 'desc'.");
      r2 = "desc";
    }
    var i = Ju("Query.orderBy", e), o = ma(this.Ff, i, r2);
    return new t(function(t2, e2) {
      var n3 = t2.on.concat([e2]);
      return new Wn(t2.path, t2.collectionGroup, n3, t2.filters.slice(), t2.limit, t2.an, t2.startAt, t2.endAt);
    }(this.Ff, o), this.firestore, this.d_);
  }, t.prototype.limit = function(e) {
    return q("Query.limit", arguments, 1), z("Query.limit", "number", 1, e), et("Query.limit", 1, e), new t(nr(this.Ff, e, "F"), this.firestore, this.d_);
  }, t.prototype.limitToLast = function(e) {
    return q("Query.limitToLast", arguments, 1), z("Query.limitToLast", "number", 1, e), et("Query.limitToLast", 1, e), new t(nr(this.Ff, e, "L"), this.firestore, this.d_);
  }, t.prototype.startAt = function(e) {
    for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
      n2[r2 - 1] = arguments[r2];
    j("Query.startAt", arguments, 1);
    var i = this.xf("Query.startAt", e, n2, true);
    return new t(rr(this.Ff, i), this.firestore, this.d_);
  }, t.prototype.startAfter = function(e) {
    for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
      n2[r2 - 1] = arguments[r2];
    j("Query.startAfter", arguments, 1);
    var i = this.xf("Query.startAfter", e, n2, false);
    return new t(rr(this.Ff, i), this.firestore, this.d_);
  }, t.prototype.endBefore = function(e) {
    for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
      n2[r2 - 1] = arguments[r2];
    j("Query.endBefore", arguments, 1);
    var i = this.xf("Query.endBefore", e, n2, true);
    return new t(ir(this.Ff, i), this.firestore, this.d_);
  }, t.prototype.endAt = function(e) {
    for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
      n2[r2 - 1] = arguments[r2];
    j("Query.endAt", arguments, 1);
    var i = this.xf("Query.endAt", e, n2, false);
    return new t(ir(this.Ff, i), this.firestore, this.d_);
  }, t.prototype.isEqual = function(e) {
    if (!(e instanceof t))
      throw tt("isEqual", "Query", 1, e);
    return this.firestore === e.firestore && or(this.Ff, e.Ff) && this.d_ === e.d_;
  }, t.prototype.withConverter = function(e) {
    return new t(this.Ff, this.firestore, e);
  }, t.prototype.xf = function(t2, e, n2, i) {
    if (J(t2, 1, e), e instanceof da)
      return q(t2, __spreadArrays$1([e], n2), 1), function(t3, e2, n3, r2, i2) {
        if (!r2)
          throw new I(b.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n3 + "().");
        for (var o2 = [], s = 0, u2 = tr(t3); s < u2.length; s++) {
          var a = u2[s];
          if (a.field.p())
            o2.push(be(e2, r2.key));
          else {
            var c = r2.field(a.field);
            if (se(c))
              throw new I(b.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (null === c) {
              var h = a.field.R();
              throw new I(b.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
            }
            o2.push(c);
          }
        }
        return new wr(o2, i2);
      }(this.Ff, this.firestore.__, t2, e.Df, i);
    var o = [e].concat(n2);
    return function(t3, e2, n3, r2, i2, o2) {
      var s = t3.on;
      if (i2.length > s.length)
        throw new I(b.INVALID_ARGUMENT, "Too many arguments provided to " + r2 + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
      for (var u2 = [], a = 0; a < i2.length; a++) {
        var c = i2[a];
        if (s[a].field.p()) {
          if ("string" != typeof c)
            throw new I(b.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r2 + "(), but got a " + typeof c);
          if (!Zn(t3) && -1 !== c.indexOf("/"))
            throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r2 + "() must be a plain document ID, but '" + c + "' contains a slash.");
          var h = t3.path.child(V.g(c));
          if (!F.F(h))
            throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r2 + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
          var f = new F(h);
          u2.push(be(e2, f));
        } else {
          var l = Qu(n3, r2, c);
          u2.push(l);
        }
      }
      return new wr(u2, o2);
    }(this.Ff, this.firestore.__, this.firestore.mf, t2, o, i);
  }, t.prototype.onSnapshot = function() {
    for (var t2, e, n2, r2 = this, i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    G("Query.onSnapshot", arguments, 1, 4);
    var s = {}, u2 = 0;
    if ("object" != typeof i[u2] || oa(i[u2]) || (Z("Query.onSnapshot", s = i[u2], ["includeMetadataChanges"]), W("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u2++), oa(i[u2])) {
      var a = i[u2];
      i[u2] = null === (t2 = a.next) || void 0 === t2 ? void 0 : t2.bind(a), i[u2 + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), i[u2 + 2] = null === (n2 = a.complete) || void 0 === n2 ? void 0 : n2.bind(a);
    } else
      z("Query.onSnapshot", "function", u2, i[u2]), B("Query.onSnapshot", "function", u2 + 1, i[u2 + 1]), B("Query.onSnapshot", "function", u2 + 2, i[u2 + 2]);
    var c = {
      next: function(t3) {
        i[u2] && i[u2](new _a(r2.firestore, r2.Ff, t3, r2.d_));
      },
      error: i[u2 + 1],
      complete: i[u2 + 2]
    };
    return Ia(this.Ff), this.firestore.hf().listen(this.Ff, s, c);
  }, t.prototype.get = function(t2) {
    var e = this;
    G("Query.get", arguments, 0, 1), Sa("Query.get", t2), Ia(this.Ff);
    var n2 = this.firestore.hf();
    return (t2 && "cache" === t2.source ? n2.j_(this.Ff) : n2.K_(this.Ff, t2)).then(function(t3) {
      return new _a(e.firestore, e.Ff, t3, e.d_);
    });
  }, t;
}(), _a = function() {
  function t(t2, e, n2, r2) {
    this.yf = t2, this.$f = e, this.kf = n2, this.d_ = r2, this.Mf = null, this.Of = null, this.metadata = new pa(n2.hasPendingWrites, n2.fromCache);
  }
  return Object.defineProperty(t.prototype, "docs", {
    get: function() {
      var t2 = [];
      return this.forEach(function(e) {
        return t2.push(e);
      }), t2;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "empty", {
    get: function() {
      return this.kf.docs.m();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "size", {
    get: function() {
      return this.kf.docs.size;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.forEach = function(t2, e) {
    var n2 = this;
    G("QuerySnapshot.forEach", arguments, 1, 2), z("QuerySnapshot.forEach", "function", 1, t2), this.kf.docs.forEach(function(r2) {
      t2.call(e, n2.Lf(r2, n2.metadata.fromCache, n2.kf.Wt.has(r2.key)));
    });
  }, Object.defineProperty(t.prototype, "query", {
    get: function() {
      return new Ea(this.$f, this.yf, this.d_);
    },
    enumerable: false,
    configurable: true
  }), t.prototype.docChanges = function(t2) {
    t2 && (Z("QuerySnapshot.docChanges", t2, ["includeMetadataChanges"]), W("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t2.includeMetadataChanges));
    var e = !(!t2 || !t2.includeMetadataChanges);
    if (e && this.kf.Kt)
      throw new I(b.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this.Mf && this.Of === e || (this.Mf = function(t3, e2, n2) {
      if (t3.Qt.m()) {
        var r2 = 0;
        return t3.docChanges.map(function(e3) {
          var i2 = n2(e3.doc, t3.fromCache, t3.Wt.has(e3.doc.key));
          return e3.doc, {
            type: "added",
            doc: i2,
            oldIndex: -1,
            newIndex: r2++
          };
        });
      }
      var i = t3.Qt;
      return t3.docChanges.filter(function(t4) {
        return e2 || 3 !== t4.type;
      }).map(function(e3) {
        var r3 = n2(e3.doc, t3.fromCache, t3.Wt.has(e3.doc.key)), o = -1, s = -1;
        return 0 !== e3.type && (o = i.indexOf(e3.doc.key), i = i.delete(e3.doc.key)), 1 !== e3.type && (s = (i = i.add(e3.doc)).indexOf(e3.doc.key)), {
          type: ka(e3.type),
          doc: r3,
          oldIndex: o,
          newIndex: s
        };
      });
    }(this.kf, e, this.Lf.bind(this)), this.Of = e), this.Mf;
  }, t.prototype.isEqual = function(e) {
    if (!(e instanceof t))
      throw tt("isEqual", "QuerySnapshot", 1, e);
    return this.yf === e.yf && or(this.$f, e.$f) && this.kf.isEqual(e.kf) && this.d_ === e.d_;
  }, t.prototype.Lf = function(t2, e, n2) {
    return new va(this.yf, t2.key, t2, e, n2, this.d_);
  }, t;
}(), Ta = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    if ((i = e.call(this, Hn(t), n3, r2) || this).Bf = t, t.length % 2 != 1)
      throw new I(b.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.R() + " has " + t.length);
    return i;
  }
  return __extends$1(n2, e), Object.defineProperty(n2.prototype, "id", {
    get: function() {
      return this.Ff.path._();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(n2.prototype, "parent", {
    get: function() {
      var t = this.Ff.path.h();
      return t.m() ? null : new la(new F(t), this.firestore, null);
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(n2.prototype, "path", {
    get: function() {
      return this.Ff.path.R();
    },
    enumerable: false,
    configurable: true
  }), n2.prototype.doc = function(t) {
    G("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = ot.k()), z("CollectionReference.doc", "non-empty string", 1, t);
    var e2 = V.g(t);
    return la.Rf(this.Ff.path.child(e2), this.firestore, this.d_);
  }, n2.prototype.add = function(t) {
    q("CollectionReference.add", arguments, 1);
    var e2 = this.d_ ? this.d_.toFirestore(t) : t;
    z("CollectionReference.add", "object", 1, e2);
    var n3 = this.doc();
    return new la(n3.f_, this.firestore, null).set(e2).then(function() {
      return n3;
    });
  }, n2.prototype.withConverter = function(t) {
    return new n2(this.Bf, this.firestore, t);
  }, n2;
}(Ea);
function Na(t, e) {
  if (void 0 === e)
    return {
      merge: false
    };
  if (Z(t, e, ["merge", "mergeFields"]), W(t, "boolean", "merge", e.merge), function(t2, e2, n2, r2, i) {
    void 0 !== r2 && function(t3, e3, n3, r3, i2) {
      if (!(r3 instanceof Array))
        throw new I(b.INVALID_ARGUMENT, "Function " + t3 + "() requires its " + e3 + " option to be an array, but it was: " + X(r3));
      for (var o = 0; o < r3.length; ++o)
        if (!i2(r3[o]))
          throw new I(b.INVALID_ARGUMENT, "Function " + t3 + "() requires all " + e3 + " elements to be " + n3 + ", but the value at index " + o + " was: " + X(r3[o]));
    }(t2, e2, n2, r2, i);
  }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function(t2) {
    return "string" == typeof t2 || t2 instanceof Au;
  }), void 0 !== e.mergeFields && void 0 !== e.merge)
    throw new I(b.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
  return e;
}
function Aa(t, e) {
  return void 0 === e ? {} : (Z(t, e, ["serverTimestamps"]), Q(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e);
}
function Sa(t, e) {
  B(t, "object", 1, e), e && (Z(t, e, ["source"]), Q(t, 0, "source", e.source, ["default", "server", "cache"]));
}
function Da(t, e, n2) {
  if (e instanceof Fu) {
    if (e.firestore !== n2)
      throw new I(b.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return e;
  }
  throw tt(t, "DocumentReference", 1, e);
}
function ka(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return D();
  }
}
function xa(t, e, n2) {
  return t ? n2 && (n2.merge || n2.mergeFields) ? t.toFirestore(e, n2) : t.toFirestore(e) : e;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
var La = function(e) {
  function n2() {
    return null !== e && e.apply(this, arguments) || this;
  }
  return __extends$1(n2, e), n2.serverTimestamp = function() {
    M("FieldValue.serverTimestamp", arguments);
    var t = new Lu("serverTimestamp");
    return t.e_ = "FieldValue.serverTimestamp", new n2(t);
  }, n2.delete = function() {
    M("FieldValue.delete", arguments);
    var t = new ku("deleteField");
    return t.e_ = "FieldValue.delete", new n2(t);
  }, n2.arrayUnion = function() {
    for (var t = [], e2 = 0; e2 < arguments.length; e2++)
      t[e2] = arguments[e2];
    j("FieldValue.arrayUnion", arguments, 1);
    var r2 = function() {
      for (var t2 = [], e3 = 0; e3 < arguments.length; e3++)
        t2[e3] = arguments[e3];
      return j("arrayUnion()", arguments, 1), new Ru("arrayUnion", t2);
    }.apply(void 0, t);
    return r2.e_ = "FieldValue.arrayUnion", new n2(r2);
  }, n2.arrayRemove = function() {
    for (var t = [], e2 = 0; e2 < arguments.length; e2++)
      t[e2] = arguments[e2];
    j("FieldValue.arrayRemove", arguments, 1);
    var r2 = function() {
      for (var t2 = [], e3 = 0; e3 < arguments.length; e3++)
        t2[e3] = arguments[e3];
      return j("arrayRemove()", arguments, 1), new Ou("arrayRemove", t2);
    }.apply(void 0, t);
    return r2.e_ = "FieldValue.arrayRemove", new n2(r2);
  }, n2.increment = function(t) {
    z("FieldValue.increment", "number", 1, t), q("FieldValue.increment", arguments, 1);
    var e2 = function(t2) {
      return new Pu("increment", t2);
    }(t);
    return e2.e_ = "FieldValue.increment", new n2(e2);
  }, n2.prototype.isEqual = function(t) {
    return this.l_.isEqual(t.l_);
  }, n2;
}(Uu), Ra = {
  Firestore: ca,
  GeoPoint: Vu,
  Timestamp: mt,
  Blob: pt,
  Transaction: ha,
  WriteBatch: fa,
  DocumentReference: la,
  DocumentSnapshot: da,
  Query: Ea,
  QueryDocumentSnapshot: va,
  QuerySnapshot: _a,
  CollectionReference: Ta,
  FieldPath: Au,
  FieldValue: La,
  setLogLevel: ca.setLogLevel,
  CACHE_SIZE_UNLIMITED: ua
};
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * @license
 * Copyright 2017 Google LLC
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
function Oa(t) {
  !function(t2, e) {
    t2.INTERNAL.registerComponent(new Component("firestore", function(t3) {
      return function(t4, e2) {
        var n2 = new _u(), r2 = new Eu(n2);
        return new ca(t4, e2, r2, n2);
      }(t3.getProvider("app").getImmediate(), t3.getProvider("auth-internal"));
    }, "PUBLIC").setServiceProps(Object.assign({}, Ra)));
  }(t), t.registerVersion("@firebase/firestore", "1.18.0");
}
Oa(firebase$1$1);
/**
 * @license
 * Copyright 2017 Google LLC
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
var errorCodeMap = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
var HttpsErrorImpl = function(_super) {
  __extends$1(HttpsErrorImpl2, _super);
  function HttpsErrorImpl2(code, message, details) {
    var _this = _super.call(this, message) || this;
    Object.setPrototypeOf(_this, HttpsErrorImpl2.prototype);
    _this.code = code;
    _this.details = details;
    return _this;
  }
  return HttpsErrorImpl2;
}(Error);
function codeForHTTPStatus(status) {
  if (status >= 200 && status < 300) {
    return "ok";
  }
  switch (status) {
    case 0:
      return "internal";
    case 400:
      return "invalid-argument";
    case 401:
      return "unauthenticated";
    case 403:
      return "permission-denied";
    case 404:
      return "not-found";
    case 409:
      return "aborted";
    case 429:
      return "resource-exhausted";
    case 499:
      return "cancelled";
    case 500:
      return "internal";
    case 501:
      return "unimplemented";
    case 503:
      return "unavailable";
    case 504:
      return "deadline-exceeded";
  }
  return "unknown";
}
function _errorForResponse(status, bodyJSON, serializer) {
  var code = codeForHTTPStatus(status);
  var description = code;
  var details = void 0;
  try {
    var errorJSON = bodyJSON && bodyJSON.error;
    if (errorJSON) {
      var status_1 = errorJSON.status;
      if (typeof status_1 === "string") {
        if (!errorCodeMap[status_1]) {
          return new HttpsErrorImpl("internal", "internal");
        }
        code = errorCodeMap[status_1];
        description = status_1;
      }
      var message = errorJSON.message;
      if (typeof message === "string") {
        description = message;
      }
      details = errorJSON.details;
      if (details !== void 0) {
        details = serializer.decode(details);
      }
    }
  } catch (e) {
  }
  if (code === "ok") {
    return null;
  }
  return new HttpsErrorImpl(code, description, details);
}
var ContextProvider = function() {
  function ContextProvider2(authProvider, messagingProvider) {
    var _this = this;
    this.auth = null;
    this.messaging = null;
    this.auth = authProvider.getImmediate({ optional: true });
    this.messaging = messagingProvider.getImmediate({
      optional: true
    });
    if (!this.auth) {
      authProvider.get().then(function(auth2) {
        return _this.auth = auth2;
      }, function() {
      });
    }
    if (!this.messaging) {
      messagingProvider.get().then(function(messaging) {
        return _this.messaging = messaging;
      }, function() {
      });
    }
  }
  ContextProvider2.prototype.getAuthToken = function() {
    return __awaiter(this, void 0, void 0, function() {
      var token;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            if (!this.auth) {
              return [2, void 0];
            }
            _a2.label = 1;
          case 1:
            _a2.trys.push([1, 3, , 4]);
            return [4, this.auth.getToken()];
          case 2:
            token = _a2.sent();
            if (!token) {
              return [2, void 0];
            }
            return [2, token.accessToken];
          case 3:
            _a2.sent();
            return [2, void 0];
          case 4:
            return [2];
        }
      });
    });
  };
  ContextProvider2.prototype.getInstanceIdToken = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a2) {
        if (!this.messaging || !("Notification" in self) || Notification.permission !== "granted") {
          return [2, void 0];
        }
        try {
          return [2, this.messaging.getToken()];
        } catch (e) {
          return [2, void 0];
        }
        return [2];
      });
    });
  };
  ContextProvider2.prototype.getContext = function() {
    return __awaiter(this, void 0, void 0, function() {
      var authToken, instanceIdToken;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            return [4, this.getAuthToken()];
          case 1:
            authToken = _a2.sent();
            return [4, this.getInstanceIdToken()];
          case 2:
            instanceIdToken = _a2.sent();
            return [2, { authToken, instanceIdToken }];
        }
      });
    });
  };
  return ContextProvider2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
var LONG_TYPE = "type.googleapis.com/google.protobuf.Int64Value";
var UNSIGNED_LONG_TYPE = "type.googleapis.com/google.protobuf.UInt64Value";
function mapValues(o, f) {
  var result = {};
  for (var key in o) {
    if (o.hasOwnProperty(key)) {
      result[key] = f(o[key]);
    }
  }
  return result;
}
var Serializer = function() {
  function Serializer2() {
  }
  Serializer2.prototype.encode = function(data) {
    var _this = this;
    if (data == null) {
      return null;
    }
    if (data instanceof Number) {
      data = data.valueOf();
    }
    if (typeof data === "number" && isFinite(data)) {
      return data;
    }
    if (data === true || data === false) {
      return data;
    }
    if (Object.prototype.toString.call(data) === "[object String]") {
      return data;
    }
    if (Array.isArray(data)) {
      return data.map(function(x2) {
        return _this.encode(x2);
      });
    }
    if (typeof data === "function" || typeof data === "object") {
      return mapValues(data, function(x2) {
        return _this.encode(x2);
      });
    }
    throw new Error("Data cannot be encoded in JSON: " + data);
  };
  Serializer2.prototype.decode = function(json) {
    var _this = this;
    if (json == null) {
      return json;
    }
    if (json["@type"]) {
      switch (json["@type"]) {
        case LONG_TYPE:
        case UNSIGNED_LONG_TYPE: {
          var value = Number(json["value"]);
          if (isNaN(value)) {
            throw new Error("Data cannot be decoded from JSON: " + json);
          }
          return value;
        }
        default: {
          throw new Error("Data cannot be decoded from JSON: " + json);
        }
      }
    }
    if (Array.isArray(json)) {
      return json.map(function(x2) {
        return _this.decode(x2);
      });
    }
    if (typeof json === "function" || typeof json === "object") {
      return mapValues(json, function(x2) {
        return _this.decode(x2);
      });
    }
    return json;
  };
  return Serializer2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function failAfter(millis) {
  var timer;
  var promise = new Promise(function(_2, reject) {
    timer = setTimeout(function() {
      reject(new HttpsErrorImpl("deadline-exceeded", "deadline-exceeded"));
    }, millis);
  });
  return {
    timer,
    promise
  };
}
var Service = function() {
  function Service2(app_, authProvider, messagingProvider, regionOrCustomDomain_, fetchImpl) {
    var _this = this;
    if (regionOrCustomDomain_ === void 0) {
      regionOrCustomDomain_ = "us-central1";
    }
    this.app_ = app_;
    this.fetchImpl = fetchImpl;
    this.serializer = new Serializer();
    this.emulatorOrigin = null;
    this.INTERNAL = {
      delete: function() {
        return Promise.resolve(_this.deleteService());
      }
    };
    this.contextProvider = new ContextProvider(authProvider, messagingProvider);
    this.cancelAllRequests = new Promise(function(resolve) {
      _this.deleteService = function() {
        return resolve();
      };
    });
    try {
      var url = new URL(regionOrCustomDomain_);
      this.customDomain = url.origin;
      this.region = "us-central1";
    } catch (e) {
      this.customDomain = null;
      this.region = regionOrCustomDomain_;
    }
  }
  Object.defineProperty(Service2.prototype, "app", {
    get: function() {
      return this.app_;
    },
    enumerable: false,
    configurable: true
  });
  Service2.prototype._url = function(name2) {
    var projectId = this.app_.options.projectId;
    if (this.emulatorOrigin !== null) {
      var origin_1 = this.emulatorOrigin;
      return origin_1 + "/" + projectId + "/" + this.region + "/" + name2;
    }
    if (this.customDomain !== null) {
      return this.customDomain + "/" + name2;
    }
    return "https://" + this.region + "-" + projectId + ".cloudfunctions.net/" + name2;
  };
  Service2.prototype.useFunctionsEmulator = function(origin) {
    this.emulatorOrigin = origin;
  };
  Service2.prototype.httpsCallable = function(name2, options) {
    var _this = this;
    return function(data) {
      return _this.call(name2, data, options || {});
    };
  };
  Service2.prototype.postJSON = function(url, body, headers) {
    return __awaiter(this, void 0, void 0, function() {
      var response, json;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            headers["Content-Type"] = "application/json";
            _a2.label = 1;
          case 1:
            _a2.trys.push([1, 3, , 4]);
            return [4, this.fetchImpl(url, {
              method: "POST",
              body: JSON.stringify(body),
              headers
            })];
          case 2:
            response = _a2.sent();
            return [3, 4];
          case 3:
            _a2.sent();
            return [2, {
              status: 0,
              json: null
            }];
          case 4:
            json = null;
            _a2.label = 5;
          case 5:
            _a2.trys.push([5, 7, , 8]);
            return [4, response.json()];
          case 6:
            json = _a2.sent();
            return [3, 8];
          case 7:
            _a2.sent();
            return [3, 8];
          case 8:
            return [2, {
              status: response.status,
              json
            }];
        }
      });
    });
  };
  Service2.prototype.call = function(name2, data, options) {
    return __awaiter(this, void 0, void 0, function() {
      var url, body, headers, context, timeout, _a2, timer, failAfterPromise, response, error, responseData, decodedData;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            url = this._url(name2);
            data = this.serializer.encode(data);
            body = { data };
            headers = {};
            return [4, this.contextProvider.getContext()];
          case 1:
            context = _b.sent();
            if (context.authToken) {
              headers["Authorization"] = "Bearer " + context.authToken;
            }
            if (context.instanceIdToken) {
              headers["Firebase-Instance-ID-Token"] = context.instanceIdToken;
            }
            timeout = options.timeout || 7e4;
            _a2 = failAfter(timeout), timer = _a2.timer, failAfterPromise = _a2.promise;
            return [4, Promise.race([
              clearTimeoutWrapper(timer, this.postJSON(url, body, headers)),
              failAfterPromise,
              clearTimeoutWrapper(timer, this.cancelAllRequests)
            ])];
          case 2:
            response = _b.sent();
            if (!response) {
              throw new HttpsErrorImpl("cancelled", "Firebase Functions instance was deleted.");
            }
            error = _errorForResponse(response.status, response.json, this.serializer);
            if (error) {
              throw error;
            }
            if (!response.json) {
              throw new HttpsErrorImpl("internal", "Response is not valid JSON object.");
            }
            responseData = response.json.data;
            if (typeof responseData === "undefined") {
              responseData = response.json.result;
            }
            if (typeof responseData === "undefined") {
              throw new HttpsErrorImpl("internal", "Response is missing data field.");
            }
            decodedData = this.serializer.decode(responseData);
            return [2, { data: decodedData }];
        }
      });
    });
  };
  return Service2;
}();
function clearTimeoutWrapper(timer, promise) {
  return __awaiter(this, void 0, void 0, function() {
    var result;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, promise];
        case 1:
          result = _a2.sent();
          clearTimeout(timer);
          return [2, result];
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
var FUNCTIONS_TYPE = "functions";
function registerFunctions(instance, fetchImpl) {
  var namespaceExports = {
    Functions: Service
  };
  function factory2(container, regionOrCustomDomain) {
    var app = container.getProvider("app").getImmediate();
    var authProvider = container.getProvider("auth-internal");
    var messagingProvider = container.getProvider("messaging");
    return new Service(app, authProvider, messagingProvider, regionOrCustomDomain, fetchImpl);
  }
  instance.INTERNAL.registerComponent(new Component(FUNCTIONS_TYPE, factory2, "PUBLIC").setServiceProps(namespaceExports).setMultipleInstances(true));
}
var name$2 = "@firebase/functions";
var version$1 = "0.5.1";
/**
 * @license
 * Copyright 2017 Google LLC
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
registerFunctions(firebase$1$1, fetch.bind(self));
firebase$1$1.registerVersion(name$2, version$1);
/**
 * @license
 * Copyright 2017 Google LLC
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
var DEFAULT_HOST = "firebasestorage.googleapis.com";
var CONFIG_STORAGE_BUCKET_KEY = "storageBucket";
var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1e3;
var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
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
var FirebaseStorageError = function() {
  function FirebaseStorageError2(code, message) {
    this.code_ = prependCode(code);
    this.message_ = "Firebase Storage: " + message;
    this.serverResponse_ = null;
    this.name_ = "FirebaseError";
  }
  FirebaseStorageError2.prototype.codeProp = function() {
    return this.code;
  };
  FirebaseStorageError2.prototype.codeEquals = function(code) {
    return prependCode(code) === this.codeProp();
  };
  FirebaseStorageError2.prototype.serverResponseProp = function() {
    return this.serverResponse_;
  };
  FirebaseStorageError2.prototype.setServerResponseProp = function(serverResponse) {
    this.serverResponse_ = serverResponse;
  };
  Object.defineProperty(FirebaseStorageError2.prototype, "name", {
    get: function() {
      return this.name_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseStorageError2.prototype, "code", {
    get: function() {
      return this.code_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseStorageError2.prototype, "message", {
    get: function() {
      if (this.serverResponse_) {
        return this.message_ + "\n" + this.serverResponse_;
      } else {
        return this.message_;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseStorageError2.prototype, "serverResponse", {
    get: function() {
      return this.serverResponse_;
    },
    enumerable: false,
    configurable: true
  });
  return FirebaseStorageError2;
}();
var Code = {
  UNKNOWN: "unknown",
  OBJECT_NOT_FOUND: "object-not-found",
  BUCKET_NOT_FOUND: "bucket-not-found",
  PROJECT_NOT_FOUND: "project-not-found",
  QUOTA_EXCEEDED: "quota-exceeded",
  UNAUTHENTICATED: "unauthenticated",
  UNAUTHORIZED: "unauthorized",
  RETRY_LIMIT_EXCEEDED: "retry-limit-exceeded",
  INVALID_CHECKSUM: "invalid-checksum",
  CANCELED: "canceled",
  INVALID_EVENT_NAME: "invalid-event-name",
  INVALID_URL: "invalid-url",
  INVALID_DEFAULT_BUCKET: "invalid-default-bucket",
  NO_DEFAULT_BUCKET: "no-default-bucket",
  CANNOT_SLICE_BLOB: "cannot-slice-blob",
  SERVER_FILE_WRONG_SIZE: "server-file-wrong-size",
  NO_DOWNLOAD_URL: "no-download-url",
  INVALID_ARGUMENT: "invalid-argument",
  INVALID_ARGUMENT_COUNT: "invalid-argument-count",
  APP_DELETED: "app-deleted",
  INVALID_ROOT_OPERATION: "invalid-root-operation",
  INVALID_FORMAT: "invalid-format",
  INTERNAL_ERROR: "internal-error"
};
function prependCode(code) {
  return "storage/" + code;
}
function unknown() {
  var message = "An unknown error occurred, please check the error payload for server response.";
  return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
  return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
  return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.");
}
function unauthenticated() {
  var message = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
  return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
  return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
}
function canceled() {
  return new FirebaseStorageError(Code.CANCELED, "User canceled the upload/download.");
}
function invalidUrl(url) {
  return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
  return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function cannotSliceBlob() {
  return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.");
}
function serverFileWrongSize() {
  return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, "Server recorded incorrect upload file size, please retry the upload.");
}
function noDownloadURL() {
  return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, "The given file does not have any download URLs.");
}
function invalidArgument(index, fnName, message) {
  return new FirebaseStorageError(Code.INVALID_ARGUMENT, "Invalid argument in `" + fnName + "` at index " + index + ": " + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
  var countPart;
  var plural;
  if (argMin === argMax) {
    countPart = argMin;
    plural = argMin === 1 ? "argument" : "arguments";
  } else {
    countPart = "between " + argMin + " and " + argMax;
    plural = "arguments";
  }
  return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, "Invalid argument count in `" + fnName + "`: Expected " + countPart + " " + plural + ", received " + real + ".");
}
function appDeleted() {
  return new FirebaseStorageError(Code.APP_DELETED, "The Firebase app was deleted.");
}
function invalidRootOperation(name2) {
  return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" + name2 + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
}
function invalidFormat(format, message) {
  return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
function internalError(message) {
  throw new FirebaseStorageError(Code.INTERNAL_ERROR, "Internal error: " + message);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var StringFormat = {
  RAW: "raw",
  BASE64: "base64",
  BASE64URL: "base64url",
  DATA_URL: "data_url"
};
function formatValidator(stringFormat) {
  switch (stringFormat) {
    case StringFormat.RAW:
    case StringFormat.BASE64:
    case StringFormat.BASE64URL:
    case StringFormat.DATA_URL:
      return;
    default:
      throw "Expected one of the event types: [" + StringFormat.RAW + ", " + StringFormat.BASE64 + ", " + StringFormat.BASE64URL + ", " + StringFormat.DATA_URL + "].";
  }
}
var StringData = function() {
  function StringData2(data, contentType) {
    this.data = data;
    this.contentType = contentType || null;
  }
  return StringData2;
}();
function dataFromString(format, stringData) {
  switch (format) {
    case StringFormat.RAW:
      return new StringData(utf8Bytes_(stringData));
    case StringFormat.BASE64:
    case StringFormat.BASE64URL:
      return new StringData(base64Bytes_(format, stringData));
    case StringFormat.DATA_URL:
      return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
  }
  throw unknown();
}
function utf8Bytes_(value) {
  var b2 = [];
  for (var i = 0; i < value.length; i++) {
    var c = value.charCodeAt(i);
    if (c <= 127) {
      b2.push(c);
    } else {
      if (c <= 2047) {
        b2.push(192 | c >> 6, 128 | c & 63);
      } else {
        if ((c & 64512) === 55296) {
          var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
          if (!valid) {
            b2.push(239, 191, 189);
          } else {
            var hi2 = c;
            var lo2 = value.charCodeAt(++i);
            c = 65536 | (hi2 & 1023) << 10 | lo2 & 1023;
            b2.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
          }
        } else {
          if ((c & 64512) === 56320) {
            b2.push(239, 191, 189);
          } else {
            b2.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
          }
        }
      }
    }
  }
  return new Uint8Array(b2);
}
function percentEncodedBytes_(value) {
  var decoded;
  try {
    decoded = decodeURIComponent(value);
  } catch (e) {
    throw invalidFormat(StringFormat.DATA_URL, "Malformed data URL.");
  }
  return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
  switch (format) {
    case StringFormat.BASE64: {
      var hasMinus = value.indexOf("-") !== -1;
      var hasUnder = value.indexOf("_") !== -1;
      if (hasMinus || hasUnder) {
        var invalidChar = hasMinus ? "-" : "_";
        throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
      }
      break;
    }
    case StringFormat.BASE64URL: {
      var hasPlus = value.indexOf("+") !== -1;
      var hasSlash = value.indexOf("/") !== -1;
      if (hasPlus || hasSlash) {
        var invalidChar = hasPlus ? "+" : "/";
        throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
      }
      value = value.replace(/-/g, "+").replace(/_/g, "/");
      break;
    }
  }
  var bytes;
  try {
    bytes = atob(value);
  } catch (e) {
    throw invalidFormat(format, "Invalid character found");
  }
  var array = new Uint8Array(bytes.length);
  for (var i = 0; i < bytes.length; i++) {
    array[i] = bytes.charCodeAt(i);
  }
  return array;
}
var DataURLParts = function() {
  function DataURLParts2(dataURL) {
    this.base64 = false;
    this.contentType = null;
    var matches = dataURL.match(/^data:([^,]+)?,/);
    if (matches === null) {
      throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
    }
    var middle = matches[1] || null;
    if (middle != null) {
      this.base64 = endsWith(middle, ";base64");
      this.contentType = this.base64 ? middle.substring(0, middle.length - ";base64".length) : middle;
    }
    this.rest = dataURL.substring(dataURL.indexOf(",") + 1);
  }
  return DataURLParts2;
}();
function dataURLBytes_(dataUrl) {
  var parts = new DataURLParts(dataUrl);
  if (parts.base64) {
    return base64Bytes_(StringFormat.BASE64, parts.rest);
  } else {
    return percentEncodedBytes_(parts.rest);
  }
}
function dataURLContentType_(dataUrl) {
  var parts = new DataURLParts(dataUrl);
  return parts.contentType;
}
function endsWith(s, end) {
  var longEnough = s.length >= end.length;
  if (!longEnough) {
    return false;
  }
  return s.substring(s.length - end.length) === end;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var TaskEvent = {
  STATE_CHANGED: "state_changed"
};
var InternalTaskState = {
  RUNNING: "running",
  PAUSING: "pausing",
  PAUSED: "paused",
  SUCCESS: "success",
  CANCELING: "canceling",
  CANCELED: "canceled",
  ERROR: "error"
};
var TaskState = {
  RUNNING: "running",
  PAUSED: "paused",
  SUCCESS: "success",
  CANCELED: "canceled",
  ERROR: "error"
};
function taskStateFromInternalTaskState(state) {
  switch (state) {
    case InternalTaskState.RUNNING:
    case InternalTaskState.PAUSING:
    case InternalTaskState.CANCELING:
      return TaskState.RUNNING;
    case InternalTaskState.PAUSED:
      return TaskState.PAUSED;
    case InternalTaskState.SUCCESS:
      return TaskState.SUCCESS;
    case InternalTaskState.CANCELED:
      return TaskState.CANCELED;
    case InternalTaskState.ERROR:
      return TaskState.ERROR;
    default:
      return TaskState.ERROR;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function isDef(p2) {
  return p2 != null;
}
function isJustDef(p2) {
  return p2 !== void 0;
}
function isFunction(p2) {
  return typeof p2 === "function";
}
function isObject(p2) {
  return typeof p2 === "object";
}
function isNonNullObject(p2) {
  return isObject(p2) && p2 !== null;
}
function isNonArrayObject(p2) {
  return isObject(p2) && !Array.isArray(p2);
}
function isString(p2) {
  return typeof p2 === "string" || p2 instanceof String;
}
function isInteger(p2) {
  return isNumber(p2) && Number.isInteger(p2);
}
function isNumber(p2) {
  return typeof p2 === "number" || p2 instanceof Number;
}
function isNativeBlob(p2) {
  return isNativeBlobDefined() && p2 instanceof Blob;
}
function isNativeBlobDefined() {
  return typeof Blob !== "undefined";
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2[ErrorCode2["NO_ERROR"] = 0] = "NO_ERROR";
  ErrorCode2[ErrorCode2["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
  ErrorCode2[ErrorCode2["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));
/**
 * @license
 * Copyright 2017 Google LLC
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
var NetworkXhrIo = function() {
  function NetworkXhrIo2() {
    var _this = this;
    this.sent_ = false;
    this.xhr_ = new XMLHttpRequest();
    this.errorCode_ = ErrorCode.NO_ERROR;
    this.sendPromise_ = new Promise(function(resolve) {
      _this.xhr_.addEventListener("abort", function() {
        _this.errorCode_ = ErrorCode.ABORT;
        resolve(_this);
      });
      _this.xhr_.addEventListener("error", function() {
        _this.errorCode_ = ErrorCode.NETWORK_ERROR;
        resolve(_this);
      });
      _this.xhr_.addEventListener("load", function() {
        resolve(_this);
      });
    });
  }
  NetworkXhrIo2.prototype.send = function(url, method, body, headers) {
    if (this.sent_) {
      throw internalError("cannot .send() more than once");
    }
    this.sent_ = true;
    this.xhr_.open(method, url, true);
    if (isDef(headers)) {
      for (var key in headers) {
        if (headers.hasOwnProperty(key)) {
          this.xhr_.setRequestHeader(key, headers[key].toString());
        }
      }
    }
    if (isDef(body)) {
      this.xhr_.send(body);
    } else {
      this.xhr_.send();
    }
    return this.sendPromise_;
  };
  NetworkXhrIo2.prototype.getErrorCode = function() {
    if (!this.sent_) {
      throw internalError("cannot .getErrorCode() before sending");
    }
    return this.errorCode_;
  };
  NetworkXhrIo2.prototype.getStatus = function() {
    if (!this.sent_) {
      throw internalError("cannot .getStatus() before sending");
    }
    try {
      return this.xhr_.status;
    } catch (e) {
      return -1;
    }
  };
  NetworkXhrIo2.prototype.getResponseText = function() {
    if (!this.sent_) {
      throw internalError("cannot .getResponseText() before sending");
    }
    return this.xhr_.responseText;
  };
  NetworkXhrIo2.prototype.abort = function() {
    this.xhr_.abort();
  };
  NetworkXhrIo2.prototype.getResponseHeader = function(header) {
    return this.xhr_.getResponseHeader(header);
  };
  NetworkXhrIo2.prototype.addUploadProgressListener = function(listener) {
    if (isDef(this.xhr_.upload)) {
      this.xhr_.upload.addEventListener("progress", listener);
    }
  };
  NetworkXhrIo2.prototype.removeUploadProgressListener = function(listener) {
    if (isDef(this.xhr_.upload)) {
      this.xhr_.upload.removeEventListener("progress", listener);
    }
  };
  return NetworkXhrIo2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
var XhrIoPool = function() {
  function XhrIoPool2() {
  }
  XhrIoPool2.prototype.createXhrIo = function() {
    return new NetworkXhrIo();
  };
  return XhrIoPool2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function getBlobBuilder() {
  if (typeof BlobBuilder !== "undefined") {
    return BlobBuilder;
  } else if (typeof WebKitBlobBuilder !== "undefined") {
    return WebKitBlobBuilder;
  } else {
    return void 0;
  }
}
function getBlob() {
  var args = [];
  for (var _i2 = 0; _i2 < arguments.length; _i2++) {
    args[_i2] = arguments[_i2];
  }
  var BlobBuilder2 = getBlobBuilder();
  if (BlobBuilder2 !== void 0) {
    var bb2 = new BlobBuilder2();
    for (var i = 0; i < args.length; i++) {
      bb2.append(args[i]);
    }
    return bb2.getBlob();
  } else {
    if (isNativeBlobDefined()) {
      return new Blob(args);
    } else {
      throw Error("This browser doesn't seem to support creating Blobs");
    }
  }
}
function sliceBlob(blob, start2, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start2, end);
  } else if (blob.mozSlice) {
    return blob.mozSlice(start2, end);
  } else if (blob.slice) {
    return blob.slice(start2, end);
  }
  return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var FbsBlob = function() {
  function FbsBlob2(data, elideCopy) {
    var size = 0;
    var blobType = "";
    if (isNativeBlob(data)) {
      this.data_ = data;
      size = data.size;
      blobType = data.type;
    } else if (data instanceof ArrayBuffer) {
      if (elideCopy) {
        this.data_ = new Uint8Array(data);
      } else {
        this.data_ = new Uint8Array(data.byteLength);
        this.data_.set(new Uint8Array(data));
      }
      size = this.data_.length;
    } else if (data instanceof Uint8Array) {
      if (elideCopy) {
        this.data_ = data;
      } else {
        this.data_ = new Uint8Array(data.length);
        this.data_.set(data);
      }
      size = data.length;
    }
    this.size_ = size;
    this.type_ = blobType;
  }
  FbsBlob2.prototype.size = function() {
    return this.size_;
  };
  FbsBlob2.prototype.type = function() {
    return this.type_;
  };
  FbsBlob2.prototype.slice = function(startByte, endByte) {
    if (isNativeBlob(this.data_)) {
      var realBlob = this.data_;
      var sliced = sliceBlob(realBlob, startByte, endByte);
      if (sliced === null) {
        return null;
      }
      return new FbsBlob2(sliced);
    } else {
      var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
      return new FbsBlob2(slice, true);
    }
  };
  FbsBlob2.getBlob = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    if (isNativeBlobDefined()) {
      var blobby = args.map(function(val) {
        if (val instanceof FbsBlob2) {
          return val.data_;
        } else {
          return val;
        }
      });
      return new FbsBlob2(getBlob.apply(null, blobby));
    } else {
      var uint8Arrays = args.map(function(val) {
        if (isString(val)) {
          return dataFromString(StringFormat.RAW, val).data;
        } else {
          return val.data_;
        }
      });
      var finalLength_1 = 0;
      uint8Arrays.forEach(function(array) {
        finalLength_1 += array.byteLength;
      });
      var merged_1 = new Uint8Array(finalLength_1);
      var index_1 = 0;
      uint8Arrays.forEach(function(array) {
        for (var i = 0; i < array.length; i++) {
          merged_1[index_1++] = array[i];
        }
      });
      return new FbsBlob2(merged_1, true);
    }
  };
  FbsBlob2.prototype.uploadData = function() {
    return this.data_;
  };
  return FbsBlob2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
var Location = function() {
  function Location2(bucket, path) {
    this.bucket = bucket;
    this.path_ = path;
  }
  Object.defineProperty(Location2.prototype, "path", {
    get: function() {
      return this.path_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Location2.prototype, "isRoot", {
    get: function() {
      return this.path.length === 0;
    },
    enumerable: false,
    configurable: true
  });
  Location2.prototype.fullServerUrl = function() {
    var encode = encodeURIComponent;
    return "/b/" + encode(this.bucket) + "/o/" + encode(this.path);
  };
  Location2.prototype.bucketOnlyServerUrl = function() {
    var encode = encodeURIComponent;
    return "/b/" + encode(this.bucket) + "/o";
  };
  Location2.makeFromBucketSpec = function(bucketString) {
    var bucketLocation;
    try {
      bucketLocation = Location2.makeFromUrl(bucketString);
    } catch (e) {
      return new Location2(bucketString, "");
    }
    if (bucketLocation.path === "") {
      return bucketLocation;
    } else {
      throw invalidDefaultBucket(bucketString);
    }
  };
  Location2.makeFromUrl = function(url) {
    var location = null;
    var bucketDomain = "([A-Za-z0-9.\\-_]+)";
    function gsModify(loc) {
      if (loc.path.charAt(loc.path.length - 1) === "/") {
        loc.path_ = loc.path_.slice(0, -1);
      }
    }
    var gsPath = "(/(.*))?$";
    var gsRegex = new RegExp("^gs://" + bucketDomain + gsPath, "i");
    var gsIndices = { bucket: 1, path: 3 };
    function httpModify(loc) {
      loc.path_ = decodeURIComponent(loc.path);
    }
    var version2 = "v[A-Za-z0-9_]+";
    var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, "\\.");
    var firebaseStoragePath = "(/([^?#]*).*)?$";
    var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version2 + "/b/" + bucketDomain + "/o" + firebaseStoragePath, "i");
    var firebaseStorageIndices = { bucket: 1, path: 3 };
    var cloudStorageHost = "(?:storage.googleapis.com|storage.cloud.google.com)";
    var cloudStoragePath = "([^?#]*)";
    var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, "i");
    var cloudStorageIndices = { bucket: 1, path: 2 };
    var groups = [
      { regex: gsRegex, indices: gsIndices, postModify: gsModify },
      {
        regex: firebaseStorageRegExp,
        indices: firebaseStorageIndices,
        postModify: httpModify
      },
      {
        regex: cloudStorageRegExp,
        indices: cloudStorageIndices,
        postModify: httpModify
      }
    ];
    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      var captures = group.regex.exec(url);
      if (captures) {
        var bucketValue = captures[group.indices.bucket];
        var pathValue = captures[group.indices.path];
        if (!pathValue) {
          pathValue = "";
        }
        location = new Location2(bucketValue, pathValue);
        group.postModify(location);
        break;
      }
    }
    if (location == null) {
      throw invalidUrl(url);
    }
    return location;
  };
  return Location2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function jsonObjectOrNull(s) {
  var obj;
  try {
    obj = JSON.parse(s);
  } catch (e) {
    return null;
  }
  if (isNonArrayObject(obj)) {
    return obj;
  } else {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function parent(path) {
  if (path.length === 0) {
    return null;
  }
  var index = path.lastIndexOf("/");
  if (index === -1) {
    return "";
  }
  var newPath = path.slice(0, index);
  return newPath;
}
function child(path, childPath) {
  var canonicalChildPath = childPath.split("/").filter(function(component) {
    return component.length > 0;
  }).join("/");
  if (path.length === 0) {
    return canonicalChildPath;
  } else {
    return path + "/" + canonicalChildPath;
  }
}
function lastComponent(path) {
  var index = path.lastIndexOf("/", path.length - 2);
  if (index === -1) {
    return path;
  } else {
    return path.slice(index + 1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function makeUrl(urlPart) {
  return "https://" + DEFAULT_HOST + "/v0" + urlPart;
}
function makeQueryString(params) {
  var encode = encodeURIComponent;
  var queryPart = "?";
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var nextPart = encode(key) + "=" + encode(params[key]);
      queryPart = queryPart + nextPart + "&";
    }
  }
  queryPart = queryPart.slice(0, -1);
  return queryPart;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function noXform_(metadata, value) {
  return value;
}
var Mapping = function() {
  function Mapping2(server, local, writable, xform) {
    this.server = server;
    this.local = local || server;
    this.writable = !!writable;
    this.xform = xform || noXform_;
  }
  return Mapping2;
}();
var mappings_ = null;
function xformPath(fullPath) {
  if (!isString(fullPath) || fullPath.length < 2) {
    return fullPath;
  } else {
    return lastComponent(fullPath);
  }
}
function getMappings() {
  if (mappings_) {
    return mappings_;
  }
  var mappings = [];
  mappings.push(new Mapping("bucket"));
  mappings.push(new Mapping("generation"));
  mappings.push(new Mapping("metageneration"));
  mappings.push(new Mapping("name", "fullPath", true));
  function mappingsXformPath(_metadata, fullPath) {
    return xformPath(fullPath);
  }
  var nameMapping = new Mapping("name");
  nameMapping.xform = mappingsXformPath;
  mappings.push(nameMapping);
  function xformSize(_metadata, size) {
    if (isDef(size)) {
      return Number(size);
    } else {
      return size;
    }
  }
  var sizeMapping = new Mapping("size");
  sizeMapping.xform = xformSize;
  mappings.push(sizeMapping);
  mappings.push(new Mapping("timeCreated"));
  mappings.push(new Mapping("updated"));
  mappings.push(new Mapping("md5Hash", null, true));
  mappings.push(new Mapping("cacheControl", null, true));
  mappings.push(new Mapping("contentDisposition", null, true));
  mappings.push(new Mapping("contentEncoding", null, true));
  mappings.push(new Mapping("contentLanguage", null, true));
  mappings.push(new Mapping("contentType", null, true));
  mappings.push(new Mapping("metadata", "customMetadata", true));
  mappings_ = mappings;
  return mappings_;
}
function addRef(metadata, service) {
  function generateRef() {
    var bucket = metadata["bucket"];
    var path = metadata["fullPath"];
    var loc = new Location(bucket, path);
    return service.makeStorageReference(loc);
  }
  Object.defineProperty(metadata, "ref", { get: generateRef });
}
function fromResource(service, resource, mappings) {
  var metadata = {};
  metadata["type"] = "file";
  var len = mappings.length;
  for (var i = 0; i < len; i++) {
    var mapping = mappings[i];
    metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
  }
  addRef(metadata, service);
  return metadata;
}
function fromResourceString(service, resourceString, mappings) {
  var obj = jsonObjectOrNull(resourceString);
  if (obj === null) {
    return null;
  }
  var resource = obj;
  return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString) {
  var obj = jsonObjectOrNull(resourceString);
  if (obj === null) {
    return null;
  }
  if (!isString(obj["downloadTokens"])) {
    return null;
  }
  var tokens = obj["downloadTokens"];
  if (tokens.length === 0) {
    return null;
  }
  var encode = encodeURIComponent;
  var tokensList = tokens.split(",");
  var urls = tokensList.map(function(token) {
    var bucket = metadata["bucket"];
    var path = metadata["fullPath"];
    var urlPart = "/b/" + encode(bucket) + "/o/" + encode(path);
    var base = makeUrl(urlPart);
    var queryString = makeQueryString({
      alt: "media",
      token
    });
    return base + queryString;
  });
  return urls[0];
}
function toResourceString(metadata, mappings) {
  var resource = {};
  var len = mappings.length;
  for (var i = 0; i < len; i++) {
    var mapping = mappings[i];
    if (mapping.writable) {
      resource[mapping.server] = metadata[mapping.local];
    }
  }
  return JSON.stringify(resource);
}
function metadataValidator(p2) {
  if (!isObject(p2) || !p2) {
    throw "Expected Metadata object.";
  }
  for (var key in p2) {
    if (p2.hasOwnProperty(key)) {
      var val = p2[key];
      if (key === "customMetadata") {
        if (!isObject(val)) {
          throw "Expected object for 'customMetadata' mapping.";
        }
      } else {
        if (isNonNullObject(val)) {
          throw "Mapping for '" + key + "' cannot be an object.";
        }
      }
    }
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
var MAX_RESULTS_KEY = "maxResults";
var MAX_MAX_RESULTS = 1e3;
var PAGE_TOKEN_KEY = "pageToken";
var PREFIXES_KEY = "prefixes";
var ITEMS_KEY = "items";
function fromBackendResponse(service, bucket, resource) {
  var listResult = {
    prefixes: [],
    items: [],
    nextPageToken: resource["nextPageToken"]
  };
  if (resource[PREFIXES_KEY]) {
    for (var _i2 = 0, _a2 = resource[PREFIXES_KEY]; _i2 < _a2.length; _i2++) {
      var path = _a2[_i2];
      var pathWithoutTrailingSlash = path.replace(/\/$/, "");
      var reference = service.makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
      listResult.prefixes.push(reference);
    }
  }
  if (resource[ITEMS_KEY]) {
    for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
      var item = _c[_b];
      var reference = service.makeStorageReference(new Location(bucket, item["name"]));
      listResult.items.push(reference);
    }
  }
  return listResult;
}
function fromResponseString(service, bucket, resourceString) {
  var obj = jsonObjectOrNull(resourceString);
  if (obj === null) {
    return null;
  }
  var resource = obj;
  return fromBackendResponse(service, bucket, resource);
}
function listOptionsValidator(p2) {
  if (!isObject(p2) || !p2) {
    throw "Expected ListOptions object.";
  }
  for (var key in p2) {
    if (key === MAX_RESULTS_KEY) {
      if (!isInteger(p2[MAX_RESULTS_KEY]) || p2[MAX_RESULTS_KEY] <= 0) {
        throw "Expected maxResults to be a positive number.";
      }
      if (p2[MAX_RESULTS_KEY] > 1e3) {
        throw "Expected maxResults to be less than or equal to " + MAX_MAX_RESULTS + ".";
      }
    } else if (key === PAGE_TOKEN_KEY) {
      if (p2[PAGE_TOKEN_KEY] && !isString(p2[PAGE_TOKEN_KEY])) {
        throw "Expected pageToken to be string.";
      }
    } else {
      throw "Unknown option: " + key;
    }
  }
}
var RequestInfo = function() {
  function RequestInfo2(url, method, handler, timeout) {
    this.url = url;
    this.method = method;
    this.handler = handler;
    this.timeout = timeout;
    this.urlParams = {};
    this.headers = {};
    this.body = null;
    this.errorHandler = null;
    this.progressCallback = null;
    this.successCodes = [200];
    this.additionalRetryCodes = [];
  }
  return RequestInfo2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function handlerCheck(cndn) {
  if (!cndn) {
    throw unknown();
  }
}
function metadataHandler(service, mappings) {
  function handler(xhr, text) {
    var metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return metadata;
  }
  return handler;
}
function listHandler(service, bucket) {
  function handler(xhr, text) {
    var listResult = fromResponseString(service, bucket, text);
    handlerCheck(listResult !== null);
    return listResult;
  }
  return handler;
}
function downloadUrlHandler(service, mappings) {
  function handler(xhr, text) {
    var metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return downloadUrlFromResourceString(metadata, text);
  }
  return handler;
}
function sharedErrorHandler(location) {
  function errorHandler(xhr, err) {
    var newErr;
    if (xhr.getStatus() === 401) {
      newErr = unauthenticated();
    } else {
      if (xhr.getStatus() === 402) {
        newErr = quotaExceeded(location.bucket);
      } else {
        if (xhr.getStatus() === 403) {
          newErr = unauthorized(location.path);
        } else {
          newErr = err;
        }
      }
    }
    newErr.setServerResponseProp(err.serverResponseProp());
    return newErr;
  }
  return errorHandler;
}
function objectErrorHandler(location) {
  var shared = sharedErrorHandler(location);
  function errorHandler(xhr, err) {
    var newErr = shared(xhr, err);
    if (xhr.getStatus() === 404) {
      newErr = objectNotFound(location.path);
    }
    newErr.setServerResponseProp(err.serverResponseProp());
    return newErr;
  }
  return errorHandler;
}
function getMetadata(service, location, mappings) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = "GET";
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}
function list(service, location, delimiter, pageToken, maxResults) {
  var urlParams = {};
  if (location.isRoot) {
    urlParams["prefix"] = "";
  } else {
    urlParams["prefix"] = location.path + "/";
  }
  if (delimiter && delimiter.length > 0) {
    urlParams["delimiter"] = delimiter;
  }
  if (pageToken) {
    urlParams["pageToken"] = pageToken;
  }
  if (maxResults) {
    urlParams["maxResults"] = maxResults;
  }
  var urlPart = location.bucketOnlyServerUrl();
  var url = makeUrl(urlPart);
  var method = "GET";
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = "GET";
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}
function updateMetadata(service, location, metadata, mappings) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = "PATCH";
  var body = toResourceString(metadata, mappings);
  var headers = { "Content-Type": "application/json; charset=utf-8" };
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.headers = headers;
  requestInfo.body = body;
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}
function deleteObject(service, location) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = "DELETE";
  var timeout = service.maxOperationRetryTime;
  function handler(_xhr, _text) {
  }
  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.successCodes = [200, 204];
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}
function determineContentType_(metadata, blob) {
  return metadata && metadata["contentType"] || blob && blob.type() || "application/octet-stream";
}
function metadataForUpload_(location, blob, metadata) {
  var metadataClone = Object.assign({}, metadata);
  metadataClone["fullPath"] = location.path;
  metadataClone["size"] = blob.size();
  if (!metadataClone["contentType"]) {
    metadataClone["contentType"] = determineContentType_(null, blob);
  }
  return metadataClone;
}
function multipartUpload(service, location, mappings, blob, metadata) {
  var urlPart = location.bucketOnlyServerUrl();
  var headers = {
    "X-Goog-Upload-Protocol": "multipart"
  };
  function genBoundary() {
    var str = "";
    for (var i = 0; i < 2; i++) {
      str = str + Math.random().toString().slice(2);
    }
    return str;
  }
  var boundary = genBoundary();
  headers["Content-Type"] = "multipart/related; boundary=" + boundary;
  var metadata_ = metadataForUpload_(location, blob, metadata);
  var metadataString = toResourceString(metadata_, mappings);
  var preBlobPart = "--" + boundary + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + metadataString + "\r\n--" + boundary + "\r\nContent-Type: " + metadata_["contentType"] + "\r\n\r\n";
  var postBlobPart = "\r\n--" + boundary + "--";
  var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
  if (body === null) {
    throw cannotSliceBlob();
  }
  var urlParams = { name: metadata_["fullPath"] };
  var url = makeUrl(urlPart);
  var method = "POST";
  var timeout = service.maxUploadRetryTime;
  var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
var ResumableUploadStatus = function() {
  function ResumableUploadStatus2(current, total, finalized, metadata) {
    this.current = current;
    this.total = total;
    this.finalized = !!finalized;
    this.metadata = metadata || null;
  }
  return ResumableUploadStatus2;
}();
function checkResumeHeader_(xhr, allowed) {
  var status = null;
  try {
    status = xhr.getResponseHeader("X-Goog-Upload-Status");
  } catch (e) {
    handlerCheck(false);
  }
  var allowedStatus = allowed || ["active"];
  handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
  return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
  var urlPart = location.bucketOnlyServerUrl();
  var metadataForUpload = metadataForUpload_(location, blob, metadata);
  var urlParams = { name: metadataForUpload["fullPath"] };
  var url = makeUrl(urlPart);
  var method = "POST";
  var headers = {
    "X-Goog-Upload-Protocol": "resumable",
    "X-Goog-Upload-Command": "start",
    "X-Goog-Upload-Header-Content-Length": blob.size(),
    "X-Goog-Upload-Header-Content-Type": metadataForUpload["contentType"],
    "Content-Type": "application/json; charset=utf-8"
  };
  var body = toResourceString(metadataForUpload, mappings);
  var timeout = service.maxUploadRetryTime;
  function handler(xhr) {
    checkResumeHeader_(xhr);
    var url2;
    try {
      url2 = xhr.getResponseHeader("X-Goog-Upload-URL");
    } catch (e) {
      handlerCheck(false);
    }
    handlerCheck(isString(url2));
    return url2;
  }
  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
function getResumableUploadStatus(service, location, url, blob) {
  var headers = { "X-Goog-Upload-Command": "query" };
  function handler(xhr) {
    var status = checkResumeHeader_(xhr, ["active", "final"]);
    var sizeString = null;
    try {
      sizeString = xhr.getResponseHeader("X-Goog-Upload-Size-Received");
    } catch (e) {
      handlerCheck(false);
    }
    if (!sizeString) {
      handlerCheck(false);
    }
    var size = Number(sizeString);
    handlerCheck(!isNaN(size));
    return new ResumableUploadStatus(size, blob.size(), status === "final");
  }
  var method = "POST";
  var timeout = service.maxUploadRetryTime;
  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.headers = headers;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
var resumableUploadChunkSize = 256 * 1024;
function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
  var status_ = new ResumableUploadStatus(0, 0);
  if (status) {
    status_.current = status.current;
    status_.total = status.total;
  } else {
    status_.current = 0;
    status_.total = blob.size();
  }
  if (blob.size() !== status_.total) {
    throw serverFileWrongSize();
  }
  var bytesLeft = status_.total - status_.current;
  var bytesToUpload = bytesLeft;
  if (chunkSize > 0) {
    bytesToUpload = Math.min(bytesToUpload, chunkSize);
  }
  var startByte = status_.current;
  var endByte = startByte + bytesToUpload;
  var uploadCommand = bytesToUpload === bytesLeft ? "upload, finalize" : "upload";
  var headers = {
    "X-Goog-Upload-Command": uploadCommand,
    "X-Goog-Upload-Offset": status_.current
  };
  var body = blob.slice(startByte, endByte);
  if (body === null) {
    throw cannotSliceBlob();
  }
  function handler(xhr, text) {
    var uploadStatus = checkResumeHeader_(xhr, ["active", "final"]);
    var newCurrent = status_.current + bytesToUpload;
    var size = blob.size();
    var metadata;
    if (uploadStatus === "final") {
      metadata = metadataHandler(service, mappings)(xhr, text);
    } else {
      metadata = null;
    }
    return new ResumableUploadStatus(newCurrent, size, uploadStatus === "final", metadata);
  }
  var method = "POST";
  var timeout = service.maxUploadRetryTime;
  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.progressCallback = progressCallback || null;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Observer = function() {
  function Observer2(nextOrObserver, error, complete) {
    var asFunctions = isFunction(nextOrObserver) || isDef(error) || isDef(complete);
    if (asFunctions) {
      this.next = nextOrObserver;
      this.error = error || null;
      this.complete = complete || null;
    } else {
      var observer = nextOrObserver;
      this.next = observer.next || null;
      this.error = observer.error || null;
      this.complete = observer.complete || null;
    }
  }
  return Observer2;
}();
var UploadTaskSnapshot = function() {
  function UploadTaskSnapshot2(bytesTransferred, totalBytes, state, metadata, task, ref) {
    this.bytesTransferred = bytesTransferred;
    this.totalBytes = totalBytes;
    this.state = state;
    this.metadata = metadata;
    this.task = task;
    this.ref = ref;
  }
  return UploadTaskSnapshot2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function validate(name2, specs, passed) {
  var minArgs = specs.length;
  var maxArgs = specs.length;
  for (var i = 0; i < specs.length; i++) {
    if (specs[i].optional) {
      minArgs = i;
      break;
    }
  }
  var validLength = minArgs <= passed.length && passed.length <= maxArgs;
  if (!validLength) {
    throw invalidArgumentCount(minArgs, maxArgs, name2, passed.length);
  }
  for (var i = 0; i < passed.length; i++) {
    try {
      specs[i].validator(passed[i]);
    } catch (e) {
      if (e instanceof Error) {
        throw invalidArgument(i, name2, e.message);
      } else {
        throw invalidArgument(i, name2, e);
      }
    }
  }
}
var ArgSpec = function() {
  function ArgSpec2(validator, optional) {
    var self2 = this;
    this.validator = function(p2) {
      if (self2.optional && !isJustDef(p2)) {
        return;
      }
      validator(p2);
    };
    this.optional = !!optional;
  }
  return ArgSpec2;
}();
function and_(v1, v2) {
  return function(p2) {
    v1(p2);
    v2(p2);
  };
}
function stringSpec(validator, optional) {
  function stringValidator(p2) {
    if (!isString(p2)) {
      throw "Expected string.";
    }
  }
  var chainedValidator;
  if (validator) {
    chainedValidator = and_(stringValidator, validator);
  } else {
    chainedValidator = stringValidator;
  }
  return new ArgSpec(chainedValidator, optional);
}
function uploadDataSpec() {
  function validator(p2) {
    var valid = p2 instanceof Uint8Array || p2 instanceof ArrayBuffer || isNativeBlobDefined() && p2 instanceof Blob;
    if (!valid) {
      throw "Expected Blob or File.";
    }
  }
  return new ArgSpec(validator);
}
function metadataSpec(optional) {
  return new ArgSpec(metadataValidator, optional);
}
function listOptionSpec(optional) {
  return new ArgSpec(listOptionsValidator, optional);
}
function nonNegativeNumberSpec() {
  function validator(p2) {
    var valid = isNumber(p2) && p2 >= 0;
    if (!valid) {
      throw "Expected a number 0 or greater.";
    }
  }
  return new ArgSpec(validator);
}
function looseObjectSpec(validator, optional) {
  function isLooseObjectValidator(p2) {
    var isLooseObject = p2 === null || isDef(p2) && p2 instanceof Object;
    if (!isLooseObject) {
      throw "Expected an Object.";
    }
    if (validator !== void 0 && validator !== null) {
      validator(p2);
    }
  }
  return new ArgSpec(isLooseObjectValidator, optional);
}
function nullFunctionSpec(optional) {
  function validator(p2) {
    var valid = p2 === null || isFunction(p2);
    if (!valid) {
      throw "Expected a Function.";
    }
  }
  return new ArgSpec(validator, optional);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function async(f) {
  return function() {
    var argsToForward = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      argsToForward[_i2] = arguments[_i2];
    }
    Promise.resolve().then(function() {
      return f.apply(void 0, argsToForward);
    });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var UploadTask = function() {
  function UploadTask2(ref, service, location, mappings, blob, metadata) {
    var _this = this;
    if (metadata === void 0) {
      metadata = null;
    }
    this.transferred_ = 0;
    this.needToFetchStatus_ = false;
    this.needToFetchMetadata_ = false;
    this.observers_ = [];
    this.error_ = null;
    this.uploadUrl_ = null;
    this.request_ = null;
    this.chunkMultiplier_ = 1;
    this.resolve_ = null;
    this.reject_ = null;
    this.ref_ = ref;
    this.service_ = service;
    this.location_ = location;
    this.blob_ = blob;
    this.metadata_ = metadata;
    this.mappings_ = mappings;
    this.resumable_ = this.shouldDoResumable_(this.blob_);
    this.state_ = InternalTaskState.RUNNING;
    this.errorHandler_ = function(error) {
      _this.request_ = null;
      _this.chunkMultiplier_ = 1;
      if (error.codeEquals(Code.CANCELED)) {
        _this.needToFetchStatus_ = true;
        _this.completeTransitions_();
      } else {
        _this.error_ = error;
        _this.transition_(InternalTaskState.ERROR);
      }
    };
    this.metadataErrorHandler_ = function(error) {
      _this.request_ = null;
      if (error.codeEquals(Code.CANCELED)) {
        _this.completeTransitions_();
      } else {
        _this.error_ = error;
        _this.transition_(InternalTaskState.ERROR);
      }
    };
    this.promise_ = new Promise(function(resolve, reject) {
      _this.resolve_ = resolve;
      _this.reject_ = reject;
      _this.start_();
    });
    this.promise_.then(null, function() {
    });
  }
  UploadTask2.prototype.makeProgressCallback_ = function() {
    var _this = this;
    var sizeBefore = this.transferred_;
    return function(loaded) {
      return _this.updateProgress_(sizeBefore + loaded);
    };
  };
  UploadTask2.prototype.shouldDoResumable_ = function(blob) {
    return blob.size() > 256 * 1024;
  };
  UploadTask2.prototype.start_ = function() {
    if (this.state_ !== InternalTaskState.RUNNING) {
      return;
    }
    if (this.request_ !== null) {
      return;
    }
    if (this.resumable_) {
      if (this.uploadUrl_ === null) {
        this.createResumable_();
      } else {
        if (this.needToFetchStatus_) {
          this.fetchStatus_();
        } else {
          if (this.needToFetchMetadata_) {
            this.fetchMetadata_();
          } else {
            this.continueUpload_();
          }
        }
      }
    } else {
      this.oneShotUpload_();
    }
  };
  UploadTask2.prototype.resolveToken_ = function(callback) {
    var _this = this;
    this.service_.getAuthToken().then(function(authToken) {
      switch (_this.state_) {
        case InternalTaskState.RUNNING:
          callback(authToken);
          break;
        case InternalTaskState.CANCELING:
          _this.transition_(InternalTaskState.CANCELED);
          break;
        case InternalTaskState.PAUSING:
          _this.transition_(InternalTaskState.PAUSED);
          break;
      }
    });
  };
  UploadTask2.prototype.createResumable_ = function() {
    var _this = this;
    this.resolveToken_(function(authToken) {
      var requestInfo = createResumableUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
      var createRequest = _this.service_.makeRequest(requestInfo, authToken);
      _this.request_ = createRequest;
      createRequest.getPromise().then(function(url) {
        _this.request_ = null;
        _this.uploadUrl_ = url;
        _this.needToFetchStatus_ = false;
        _this.completeTransitions_();
      }, _this.errorHandler_);
    });
  };
  UploadTask2.prototype.fetchStatus_ = function() {
    var _this = this;
    var url = this.uploadUrl_;
    this.resolveToken_(function(authToken) {
      var requestInfo = getResumableUploadStatus(_this.service_, _this.location_, url, _this.blob_);
      var statusRequest = _this.service_.makeRequest(requestInfo, authToken);
      _this.request_ = statusRequest;
      statusRequest.getPromise().then(function(status) {
        status = status;
        _this.request_ = null;
        _this.updateProgress_(status.current);
        _this.needToFetchStatus_ = false;
        if (status.finalized) {
          _this.needToFetchMetadata_ = true;
        }
        _this.completeTransitions_();
      }, _this.errorHandler_);
    });
  };
  UploadTask2.prototype.continueUpload_ = function() {
    var _this = this;
    var chunkSize = resumableUploadChunkSize * this.chunkMultiplier_;
    var status = new ResumableUploadStatus(this.transferred_, this.blob_.size());
    var url = this.uploadUrl_;
    this.resolveToken_(function(authToken) {
      var requestInfo;
      try {
        requestInfo = continueResumableUpload(_this.location_, _this.service_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
      } catch (e) {
        _this.error_ = e;
        _this.transition_(InternalTaskState.ERROR);
        return;
      }
      var uploadRequest = _this.service_.makeRequest(requestInfo, authToken);
      _this.request_ = uploadRequest;
      uploadRequest.getPromise().then(function(newStatus) {
        _this.increaseMultiplier_();
        _this.request_ = null;
        _this.updateProgress_(newStatus.current);
        if (newStatus.finalized) {
          _this.metadata_ = newStatus.metadata;
          _this.transition_(InternalTaskState.SUCCESS);
        } else {
          _this.completeTransitions_();
        }
      }, _this.errorHandler_);
    });
  };
  UploadTask2.prototype.increaseMultiplier_ = function() {
    var currentSize = resumableUploadChunkSize * this.chunkMultiplier_;
    if (currentSize < 32 * 1024 * 1024) {
      this.chunkMultiplier_ *= 2;
    }
  };
  UploadTask2.prototype.fetchMetadata_ = function() {
    var _this = this;
    this.resolveToken_(function(authToken) {
      var requestInfo = getMetadata(_this.service_, _this.location_, _this.mappings_);
      var metadataRequest = _this.service_.makeRequest(requestInfo, authToken);
      _this.request_ = metadataRequest;
      metadataRequest.getPromise().then(function(metadata) {
        _this.request_ = null;
        _this.metadata_ = metadata;
        _this.transition_(InternalTaskState.SUCCESS);
      }, _this.metadataErrorHandler_);
    });
  };
  UploadTask2.prototype.oneShotUpload_ = function() {
    var _this = this;
    this.resolveToken_(function(authToken) {
      var requestInfo = multipartUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
      var multipartRequest = _this.service_.makeRequest(requestInfo, authToken);
      _this.request_ = multipartRequest;
      multipartRequest.getPromise().then(function(metadata) {
        _this.request_ = null;
        _this.metadata_ = metadata;
        _this.updateProgress_(_this.blob_.size());
        _this.transition_(InternalTaskState.SUCCESS);
      }, _this.errorHandler_);
    });
  };
  UploadTask2.prototype.updateProgress_ = function(transferred) {
    var old = this.transferred_;
    this.transferred_ = transferred;
    if (this.transferred_ !== old) {
      this.notifyObservers_();
    }
  };
  UploadTask2.prototype.transition_ = function(state) {
    if (this.state_ === state) {
      return;
    }
    switch (state) {
      case InternalTaskState.CANCELING:
        this.state_ = state;
        if (this.request_ !== null) {
          this.request_.cancel();
        }
        break;
      case InternalTaskState.PAUSING:
        this.state_ = state;
        if (this.request_ !== null) {
          this.request_.cancel();
        }
        break;
      case InternalTaskState.RUNNING:
        var wasPaused = this.state_ === InternalTaskState.PAUSED;
        this.state_ = state;
        if (wasPaused) {
          this.notifyObservers_();
          this.start_();
        }
        break;
      case InternalTaskState.PAUSED:
        this.state_ = state;
        this.notifyObservers_();
        break;
      case InternalTaskState.CANCELED:
        this.error_ = canceled();
        this.state_ = state;
        this.notifyObservers_();
        break;
      case InternalTaskState.ERROR:
        this.state_ = state;
        this.notifyObservers_();
        break;
      case InternalTaskState.SUCCESS:
        this.state_ = state;
        this.notifyObservers_();
        break;
    }
  };
  UploadTask2.prototype.completeTransitions_ = function() {
    switch (this.state_) {
      case InternalTaskState.PAUSING:
        this.transition_(InternalTaskState.PAUSED);
        break;
      case InternalTaskState.CANCELING:
        this.transition_(InternalTaskState.CANCELED);
        break;
      case InternalTaskState.RUNNING:
        this.start_();
        break;
    }
  };
  Object.defineProperty(UploadTask2.prototype, "snapshot", {
    get: function() {
      var externalState = taskStateFromInternalTaskState(this.state_);
      return new UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
    },
    enumerable: false,
    configurable: true
  });
  UploadTask2.prototype.on = function(type, nextOrObserver, error, completed) {
    function typeValidator() {
      if (type !== TaskEvent.STATE_CHANGED) {
        throw "Expected one of the event types: [" + TaskEvent.STATE_CHANGED + "].";
      }
    }
    var nextOrObserverMessage = "Expected a function or an Object with one of `next`, `error`, `complete` properties.";
    var nextValidator = nullFunctionSpec(true).validator;
    var observerValidator = looseObjectSpec(null, true).validator;
    function nextOrObserverValidator(p2) {
      try {
        nextValidator(p2);
        return;
      } catch (e) {
      }
      try {
        observerValidator(p2);
        var anyDefined = isJustDef(p2["next"]) || isJustDef(p2["error"]) || isJustDef(p2["complete"]);
        if (!anyDefined) {
          throw "";
        }
        return;
      } catch (e) {
        throw nextOrObserverMessage;
      }
    }
    var specs = [
      stringSpec(typeValidator),
      looseObjectSpec(nextOrObserverValidator, true),
      nullFunctionSpec(true),
      nullFunctionSpec(true)
    ];
    validate("on", specs, arguments);
    var self2 = this;
    function makeBinder(specs2) {
      function binder(nextOrObserver2, error2, complete) {
        if (specs2 !== null) {
          validate("on", specs2, arguments);
        }
        var observer = new Observer(nextOrObserver2, error2, completed);
        self2.addObserver_(observer);
        return function() {
          self2.removeObserver_(observer);
        };
      }
      return binder;
    }
    function binderNextOrObserverValidator(p2) {
      if (p2 === null) {
        throw nextOrObserverMessage;
      }
      nextOrObserverValidator(p2);
    }
    var binderSpecs = [
      looseObjectSpec(binderNextOrObserverValidator),
      nullFunctionSpec(true),
      nullFunctionSpec(true)
    ];
    var typeOnly = !(isJustDef(nextOrObserver) || isJustDef(error) || isJustDef(completed));
    if (typeOnly) {
      return makeBinder(binderSpecs);
    } else {
      return makeBinder(null)(nextOrObserver, error, completed);
    }
  };
  UploadTask2.prototype.then = function(onFulfilled, onRejected) {
    return this.promise_.then(onFulfilled, onRejected);
  };
  UploadTask2.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
  };
  UploadTask2.prototype.addObserver_ = function(observer) {
    this.observers_.push(observer);
    this.notifyObserver_(observer);
  };
  UploadTask2.prototype.removeObserver_ = function(observer) {
    var i = this.observers_.indexOf(observer);
    if (i !== -1) {
      this.observers_.splice(i, 1);
    }
  };
  UploadTask2.prototype.notifyObservers_ = function() {
    var _this = this;
    this.finishPromise_();
    var observers = this.observers_.slice();
    observers.forEach(function(observer) {
      _this.notifyObserver_(observer);
    });
  };
  UploadTask2.prototype.finishPromise_ = function() {
    if (this.resolve_ !== null) {
      var triggered = true;
      switch (taskStateFromInternalTaskState(this.state_)) {
        case TaskState.SUCCESS:
          async(this.resolve_.bind(null, this.snapshot))();
          break;
        case TaskState.CANCELED:
        case TaskState.ERROR:
          var toCall = this.reject_;
          async(toCall.bind(null, this.error_))();
          break;
        default:
          triggered = false;
          break;
      }
      if (triggered) {
        this.resolve_ = null;
        this.reject_ = null;
      }
    }
  };
  UploadTask2.prototype.notifyObserver_ = function(observer) {
    var externalState = taskStateFromInternalTaskState(this.state_);
    switch (externalState) {
      case TaskState.RUNNING:
      case TaskState.PAUSED:
        if (observer.next) {
          async(observer.next.bind(observer, this.snapshot))();
        }
        break;
      case TaskState.SUCCESS:
        if (observer.complete) {
          async(observer.complete.bind(observer))();
        }
        break;
      case TaskState.CANCELED:
      case TaskState.ERROR:
        if (observer.error) {
          async(observer.error.bind(observer, this.error_))();
        }
        break;
      default:
        if (observer.error) {
          async(observer.error.bind(observer, this.error_))();
        }
    }
  };
  UploadTask2.prototype.resume = function() {
    validate("resume", [], arguments);
    var valid = this.state_ === InternalTaskState.PAUSED || this.state_ === InternalTaskState.PAUSING;
    if (valid) {
      this.transition_(InternalTaskState.RUNNING);
    }
    return valid;
  };
  UploadTask2.prototype.pause = function() {
    validate("pause", [], arguments);
    var valid = this.state_ === InternalTaskState.RUNNING;
    if (valid) {
      this.transition_(InternalTaskState.PAUSING);
    }
    return valid;
  };
  UploadTask2.prototype.cancel = function() {
    validate("cancel", [], arguments);
    var valid = this.state_ === InternalTaskState.RUNNING || this.state_ === InternalTaskState.PAUSING;
    if (valid) {
      this.transition_(InternalTaskState.CANCELING);
    }
    return valid;
  };
  return UploadTask2;
}();
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
var Reference = function() {
  function Reference2(service, location) {
    this.service = service;
    if (location instanceof Location) {
      this.location = location;
    } else {
      this.location = Location.makeFromUrl(location);
    }
  }
  Reference2.prototype.toString = function() {
    validate("toString", [], arguments);
    return "gs://" + this.location.bucket + "/" + this.location.path;
  };
  Reference2.prototype.newRef = function(service, location) {
    return new Reference2(service, location);
  };
  Reference2.prototype.mappings = function() {
    return getMappings();
  };
  Reference2.prototype.child = function(childPath) {
    validate("child", [stringSpec()], arguments);
    var newPath = child(this.location.path, childPath);
    var location = new Location(this.location.bucket, newPath);
    return this.newRef(this.service, location);
  };
  Object.defineProperty(Reference2.prototype, "parent", {
    get: function() {
      var newPath = parent(this.location.path);
      if (newPath === null) {
        return null;
      }
      var location = new Location(this.location.bucket, newPath);
      return this.newRef(this.service, location);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference2.prototype, "root", {
    get: function() {
      var location = new Location(this.location.bucket, "");
      return this.newRef(this.service, location);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference2.prototype, "bucket", {
    get: function() {
      return this.location.bucket;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference2.prototype, "fullPath", {
    get: function() {
      return this.location.path;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference2.prototype, "name", {
    get: function() {
      return lastComponent(this.location.path);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference2.prototype, "storage", {
    get: function() {
      return this.service;
    },
    enumerable: false,
    configurable: true
  });
  Reference2.prototype.put = function(data, metadata) {
    if (metadata === void 0) {
      metadata = null;
    }
    validate("put", [uploadDataSpec(), metadataSpec(true)], arguments);
    this.throwIfRoot_("put");
    return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data), metadata);
  };
  Reference2.prototype.putString = function(value, format, metadata) {
    if (format === void 0) {
      format = StringFormat.RAW;
    }
    validate("putString", [stringSpec(), stringSpec(formatValidator, true), metadataSpec(true)], arguments);
    this.throwIfRoot_("putString");
    var data = dataFromString(format, value);
    var metadataClone = Object.assign({}, metadata);
    if (!isDef(metadataClone["contentType"]) && isDef(data.contentType)) {
      metadataClone["contentType"] = data.contentType;
    }
    return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data.data, true), metadataClone);
  };
  Reference2.prototype.delete = function() {
    var _this = this;
    validate("delete", [], arguments);
    this.throwIfRoot_("delete");
    return this.service.getAuthToken().then(function(authToken) {
      var requestInfo = deleteObject(_this.service, _this.location);
      return _this.service.makeRequest(requestInfo, authToken).getPromise();
    });
  };
  Reference2.prototype.listAll = function() {
    validate("listAll", [], arguments);
    var accumulator = {
      prefixes: [],
      items: []
    };
    return this.listAllHelper(accumulator).then(function() {
      return accumulator;
    });
  };
  Reference2.prototype.listAllHelper = function(accumulator, pageToken) {
    return __awaiter(this, void 0, void 0, function() {
      var opt, nextPage;
      var _a2, _b;
      return __generator(this, function(_c) {
        switch (_c.label) {
          case 0:
            opt = {
              pageToken
            };
            return [4, this.list(opt)];
          case 1:
            nextPage = _c.sent();
            (_a2 = accumulator.prefixes).push.apply(_a2, nextPage.prefixes);
            (_b = accumulator.items).push.apply(_b, nextPage.items);
            if (!(nextPage.nextPageToken != null))
              return [3, 3];
            return [4, this.listAllHelper(accumulator, nextPage.nextPageToken)];
          case 2:
            _c.sent();
            _c.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  Reference2.prototype.list = function(options) {
    validate("list", [listOptionSpec(true)], arguments);
    var self2 = this;
    return this.service.getAuthToken().then(function(authToken) {
      var op = options || {};
      var requestInfo = list(self2.service, self2.location, "/", op.pageToken, op.maxResults);
      return self2.service.makeRequest(requestInfo, authToken).getPromise();
    });
  };
  Reference2.prototype.getMetadata = function() {
    var _this = this;
    validate("getMetadata", [], arguments);
    this.throwIfRoot_("getMetadata");
    return this.service.getAuthToken().then(function(authToken) {
      var requestInfo = getMetadata(_this.service, _this.location, _this.mappings());
      return _this.service.makeRequest(requestInfo, authToken).getPromise();
    });
  };
  Reference2.prototype.updateMetadata = function(metadata) {
    var _this = this;
    validate("updateMetadata", [metadataSpec()], arguments);
    this.throwIfRoot_("updateMetadata");
    return this.service.getAuthToken().then(function(authToken) {
      var requestInfo = updateMetadata(_this.service, _this.location, metadata, _this.mappings());
      return _this.service.makeRequest(requestInfo, authToken).getPromise();
    });
  };
  Reference2.prototype.getDownloadURL = function() {
    var _this = this;
    validate("getDownloadURL", [], arguments);
    this.throwIfRoot_("getDownloadURL");
    return this.service.getAuthToken().then(function(authToken) {
      var requestInfo = getDownloadUrl(_this.service, _this.location, _this.mappings());
      return _this.service.makeRequest(requestInfo, authToken).getPromise().then(function(url) {
        if (url === null) {
          throw noDownloadURL();
        }
        return url;
      });
    });
  };
  Reference2.prototype.throwIfRoot_ = function(name2) {
    if (this.location.path === "") {
      throw invalidRootOperation(name2);
    }
  };
  return Reference2;
}();
var FailRequest = function() {
  function FailRequest2(error) {
    this.promise_ = Promise.reject(error);
  }
  FailRequest2.prototype.getPromise = function() {
    return this.promise_;
  };
  FailRequest2.prototype.cancel = function(_appDelete) {
  };
  return FailRequest2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
function start(f, callback, timeout) {
  var waitSeconds = 1;
  var timeoutId = null;
  var hitTimeout = false;
  var cancelState = 0;
  function canceled2() {
    return cancelState === 2;
  }
  var triggeredCallback = false;
  function triggerCallback() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    if (!triggeredCallback) {
      triggeredCallback = true;
      callback.apply(null, args);
    }
  }
  function callWithDelay(millis) {
    timeoutId = setTimeout(function() {
      timeoutId = null;
      f(handler, canceled2());
    }, millis);
  }
  function handler(success) {
    var args = [];
    for (var _i2 = 1; _i2 < arguments.length; _i2++) {
      args[_i2 - 1] = arguments[_i2];
    }
    if (triggeredCallback) {
      return;
    }
    if (success) {
      triggerCallback.call.apply(triggerCallback, __spreadArrays$1([null, success], args));
      return;
    }
    var mustStop = canceled2() || hitTimeout;
    if (mustStop) {
      triggerCallback.call.apply(triggerCallback, __spreadArrays$1([null, success], args));
      return;
    }
    if (waitSeconds < 64) {
      waitSeconds *= 2;
    }
    var waitMillis;
    if (cancelState === 1) {
      cancelState = 2;
      waitMillis = 0;
    } else {
      waitMillis = (waitSeconds + Math.random()) * 1e3;
    }
    callWithDelay(waitMillis);
  }
  var stopped = false;
  function stop2(wasTimeout) {
    if (stopped) {
      return;
    }
    stopped = true;
    if (triggeredCallback) {
      return;
    }
    if (timeoutId !== null) {
      if (!wasTimeout) {
        cancelState = 2;
      }
      clearTimeout(timeoutId);
      callWithDelay(0);
    } else {
      if (!wasTimeout) {
        cancelState = 1;
      }
    }
  }
  callWithDelay(0);
  setTimeout(function() {
    hitTimeout = true;
    stop2(true);
  }, timeout);
  return stop2;
}
function stop(id2) {
  id2(false);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var NetworkRequest = function() {
  function NetworkRequest2(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
    var _this = this;
    this.pendingXhr_ = null;
    this.backoffId_ = null;
    this.canceled_ = false;
    this.appDelete_ = false;
    this.url_ = url;
    this.method_ = method;
    this.headers_ = headers;
    this.body_ = body;
    this.successCodes_ = successCodes.slice();
    this.additionalRetryCodes_ = additionalRetryCodes.slice();
    this.callback_ = callback;
    this.errorCallback_ = errorCallback;
    this.progressCallback_ = progressCallback;
    this.timeout_ = timeout;
    this.pool_ = pool;
    this.promise_ = new Promise(function(resolve, reject) {
      _this.resolve_ = resolve;
      _this.reject_ = reject;
      _this.start_();
    });
  }
  NetworkRequest2.prototype.start_ = function() {
    var self2 = this;
    function doTheRequest(backoffCallback, canceled2) {
      if (canceled2) {
        backoffCallback(false, new RequestEndStatus(false, null, true));
        return;
      }
      var xhr = self2.pool_.createXhrIo();
      self2.pendingXhr_ = xhr;
      function progressListener(progressEvent) {
        var loaded = progressEvent.loaded;
        var total = progressEvent.lengthComputable ? progressEvent.total : -1;
        if (self2.progressCallback_ !== null) {
          self2.progressCallback_(loaded, total);
        }
      }
      if (self2.progressCallback_ !== null) {
        xhr.addUploadProgressListener(progressListener);
      }
      xhr.send(self2.url_, self2.method_, self2.body_, self2.headers_).then(function(xhr2) {
        if (self2.progressCallback_ !== null) {
          xhr2.removeUploadProgressListener(progressListener);
        }
        self2.pendingXhr_ = null;
        xhr2 = xhr2;
        var hitServer = xhr2.getErrorCode() === ErrorCode.NO_ERROR;
        var status = xhr2.getStatus();
        if (!hitServer || self2.isRetryStatusCode_(status)) {
          var wasCanceled = xhr2.getErrorCode() === ErrorCode.ABORT;
          backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
          return;
        }
        var successCode = self2.successCodes_.indexOf(status) !== -1;
        backoffCallback(true, new RequestEndStatus(successCode, xhr2));
      });
    }
    function backoffDone(requestWentThrough, status) {
      var resolve = self2.resolve_;
      var reject = self2.reject_;
      var xhr = status.xhr;
      if (status.wasSuccessCode) {
        try {
          var result = self2.callback_(xhr, xhr.getResponseText());
          if (isJustDef(result)) {
            resolve(result);
          } else {
            resolve();
          }
        } catch (e) {
          reject(e);
        }
      } else {
        if (xhr !== null) {
          var err = unknown();
          err.setServerResponseProp(xhr.getResponseText());
          if (self2.errorCallback_) {
            reject(self2.errorCallback_(xhr, err));
          } else {
            reject(err);
          }
        } else {
          if (status.canceled) {
            var err = self2.appDelete_ ? appDeleted() : canceled();
            reject(err);
          } else {
            var err = retryLimitExceeded();
            reject(err);
          }
        }
      }
    }
    if (this.canceled_) {
      backoffDone(false, new RequestEndStatus(false, null, true));
    } else {
      this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
    }
  };
  NetworkRequest2.prototype.getPromise = function() {
    return this.promise_;
  };
  NetworkRequest2.prototype.cancel = function(appDelete) {
    this.canceled_ = true;
    this.appDelete_ = appDelete || false;
    if (this.backoffId_ !== null) {
      stop(this.backoffId_);
    }
    if (this.pendingXhr_ !== null) {
      this.pendingXhr_.abort();
    }
  };
  NetworkRequest2.prototype.isRetryStatusCode_ = function(status) {
    var isFiveHundredCode = status >= 500 && status < 600;
    var extraRetryCodes = [
      408,
      429
    ];
    var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
    var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
    return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
  };
  return NetworkRequest2;
}();
var RequestEndStatus = function() {
  function RequestEndStatus2(wasSuccessCode, xhr, canceled2) {
    this.wasSuccessCode = wasSuccessCode;
    this.xhr = xhr;
    this.canceled = !!canceled2;
  }
  return RequestEndStatus2;
}();
function addAuthHeader_(headers, authToken) {
  if (authToken !== null && authToken.length > 0) {
    headers["Authorization"] = "Firebase " + authToken;
  }
}
function addVersionHeader_(headers) {
  var version2 = typeof firebase$1$1 !== "undefined" ? firebase$1$1.SDK_VERSION : "AppManager";
  headers["X-Firebase-Storage-Version"] = "webjs/" + version2;
}
function addGmpidHeader_(headers, appId) {
  if (appId) {
    headers["X-Firebase-GMPID"] = appId;
  }
}
function makeRequest(requestInfo, appId, authToken, pool) {
  var queryPart = makeQueryString(requestInfo.urlParams);
  var url = requestInfo.url + queryPart;
  var headers = Object.assign({}, requestInfo.headers);
  addGmpidHeader_(headers, appId);
  addAuthHeader_(headers, authToken);
  addVersionHeader_(headers);
  return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var StorageService = function() {
  function StorageService2(app, authProvider, pool, url) {
    var _a2;
    this.bucket_ = null;
    this.appId_ = null;
    this.deleted_ = false;
    this.app_ = app;
    this.authProvider_ = authProvider;
    this.maxOperationRetryTime_ = DEFAULT_MAX_OPERATION_RETRY_TIME;
    this.maxUploadRetryTime_ = DEFAULT_MAX_UPLOAD_RETRY_TIME;
    this.requests_ = /* @__PURE__ */ new Set();
    this.pool_ = pool;
    if (url != null) {
      this.bucket_ = Location.makeFromBucketSpec(url);
    } else {
      this.bucket_ = StorageService2.extractBucket_((_a2 = this.app_) === null || _a2 === void 0 ? void 0 : _a2.options);
    }
    this.internals_ = new ServiceInternals(this);
  }
  StorageService2.extractBucket_ = function(config) {
    var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
    if (bucketString == null) {
      return null;
    }
    return Location.makeFromBucketSpec(bucketString);
  };
  StorageService2.prototype.getAuthToken = function() {
    return __awaiter(this, void 0, void 0, function() {
      var auth2, tokenData;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            auth2 = this.authProvider_.getImmediate({ optional: true });
            if (!auth2)
              return [3, 2];
            return [4, auth2.getToken()];
          case 1:
            tokenData = _a2.sent();
            if (tokenData !== null) {
              return [2, tokenData.accessToken];
            }
            _a2.label = 2;
          case 2:
            return [2, null];
        }
      });
    });
  };
  StorageService2.prototype.deleteApp = function() {
    this.deleted_ = true;
    this.app_ = null;
    this.requests_.forEach(function(request) {
      return request.cancel();
    });
    this.requests_.clear();
  };
  StorageService2.prototype.makeStorageReference = function(loc) {
    return new Reference(this, loc);
  };
  StorageService2.prototype.makeRequest = function(requestInfo, authToken) {
    var _this = this;
    if (!this.deleted_) {
      var request_1 = makeRequest(requestInfo, this.appId_, authToken, this.pool_);
      this.requests_.add(request_1);
      request_1.getPromise().then(function() {
        return _this.requests_.delete(request_1);
      }, function() {
        return _this.requests_.delete(request_1);
      });
      return request_1;
    } else {
      return new FailRequest(appDeleted());
    }
  };
  StorageService2.prototype.ref = function(path) {
    function validator(path2) {
      if (typeof path2 !== "string") {
        throw "Path is not a string.";
      }
      if (/^[A-Za-z]+:\/\//.test(path2)) {
        throw "Expected child path but got a URL, use refFromURL instead.";
      }
    }
    validate("ref", [stringSpec(validator, true)], arguments);
    if (this.bucket_ == null) {
      throw new Error("No Storage Bucket defined in Firebase Options.");
    }
    var ref = new Reference(this, this.bucket_);
    if (path != null) {
      return ref.child(path);
    } else {
      return ref;
    }
  };
  StorageService2.prototype.refFromURL = function(url) {
    function validator(p2) {
      if (typeof p2 !== "string") {
        throw "Path is not a string.";
      }
      if (!/^[A-Za-z]+:\/\//.test(p2)) {
        throw "Expected full URL but got a child path, use ref instead.";
      }
      try {
        Location.makeFromUrl(p2);
      } catch (e) {
        throw "Expected valid full URL but got an invalid one.";
      }
    }
    validate("refFromURL", [stringSpec(validator, false)], arguments);
    return new Reference(this, url);
  };
  Object.defineProperty(StorageService2.prototype, "maxUploadRetryTime", {
    get: function() {
      return this.maxUploadRetryTime_;
    },
    enumerable: false,
    configurable: true
  });
  StorageService2.prototype.setMaxUploadRetryTime = function(time) {
    validate("setMaxUploadRetryTime", [nonNegativeNumberSpec()], arguments);
    this.maxUploadRetryTime_ = time;
  };
  Object.defineProperty(StorageService2.prototype, "maxOperationRetryTime", {
    get: function() {
      return this.maxOperationRetryTime_;
    },
    enumerable: false,
    configurable: true
  });
  StorageService2.prototype.setMaxOperationRetryTime = function(time) {
    validate("setMaxOperationRetryTime", [nonNegativeNumberSpec()], arguments);
    this.maxOperationRetryTime_ = time;
  };
  Object.defineProperty(StorageService2.prototype, "app", {
    get: function() {
      return this.app_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StorageService2.prototype, "INTERNAL", {
    get: function() {
      return this.internals_;
    },
    enumerable: false,
    configurable: true
  });
  return StorageService2;
}();
var ServiceInternals = function() {
  function ServiceInternals2(service) {
    this.service_ = service;
  }
  ServiceInternals2.prototype.delete = function() {
    this.service_.deleteApp();
    return Promise.resolve();
  };
  return ServiceInternals2;
}();
var name$1 = "@firebase/storage";
var version = "0.3.43";
/**
 * @license
 * Copyright 2017 Google LLC
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
var STORAGE_TYPE = "storage";
function factory(container, url) {
  var app = container.getProvider("app").getImmediate();
  var authProvider = container.getProvider("auth-internal");
  return new StorageService(app, authProvider, new XhrIoPool(), url);
}
function registerStorage(instance) {
  var namespaceExports = {
    TaskState,
    TaskEvent,
    StringFormat,
    Storage: StorageService,
    Reference
  };
  instance.INTERNAL.registerComponent(new Component(STORAGE_TYPE, factory, "PUBLIC").setServiceProps(namespaceExports).setMultipleInstances(true));
  instance.registerVersion(name$1, version);
}
registerStorage(firebase$1$1);
(function() {
  var k2, aa2 = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b2, c) {
    a != Array.prototype && a != Object.prototype && (a[b2] = c.value);
  };
  function ba2(a) {
    a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
    for (var b2 = 0; b2 < a.length; ++b2) {
      var c = a[b2];
      if (c && c.Math == Math)
        return c;
    }
    return globalThis;
  }
  var ca2 = ba2(this);
  function da2(a, b2) {
    if (b2) {
      var c = ca2;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b2 = b2(d);
      b2 != d && null != b2 && aa2(c, a, { configurable: true, writable: true, value: b2 });
    }
  }
  function ea2(a) {
    var b2 = 0;
    return function() {
      return b2 < a.length ? { done: false, value: a[b2++] } : { done: true };
    };
  }
  function fa2(a) {
    var b2 = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b2 ? b2.call(a) : { next: ea2(a) };
  }
  da2("Promise", function(a) {
    function b2(g2) {
      this.b = 0;
      this.c = void 0;
      this.a = [];
      var h = this.f();
      try {
        g2(h.resolve, h.reject);
      } catch (m) {
        h.reject(m);
      }
    }
    function c() {
      this.a = null;
    }
    function d(g2) {
      return g2 instanceof b2 ? g2 : new b2(function(h) {
        h(g2);
      });
    }
    if (a)
      return a;
    c.prototype.b = function(g2) {
      if (null == this.a) {
        this.a = [];
        var h = this;
        this.c(function() {
          h.g();
        });
      }
      this.a.push(g2);
    };
    var e = ca2.setTimeout;
    c.prototype.c = function(g2) {
      e(g2, 0);
    };
    c.prototype.g = function() {
      for (; this.a && this.a.length; ) {
        var g2 = this.a;
        this.a = [];
        for (var h = 0; h < g2.length; ++h) {
          var m = g2[h];
          g2[h] = null;
          try {
            m();
          } catch (p2) {
            this.f(p2);
          }
        }
      }
      this.a = null;
    };
    c.prototype.f = function(g2) {
      this.c(function() {
        throw g2;
      });
    };
    b2.prototype.f = function() {
      function g2(p2) {
        return function(v2) {
          m || (m = true, p2.call(h, v2));
        };
      }
      var h = this, m = false;
      return { resolve: g2(this.v), reject: g2(this.g) };
    };
    b2.prototype.v = function(g2) {
      if (g2 === this)
        this.g(new TypeError("A Promise cannot resolve to itself"));
      else if (g2 instanceof b2)
        this.o(g2);
      else {
        a:
          switch (typeof g2) {
            case "object":
              var h = null != g2;
              break a;
            case "function":
              h = true;
              break a;
            default:
              h = false;
          }
        h ? this.m(g2) : this.h(g2);
      }
    };
    b2.prototype.m = function(g2) {
      var h = void 0;
      try {
        h = g2.then;
      } catch (m) {
        this.g(m);
        return;
      }
      "function" == typeof h ? this.u(h, g2) : this.h(g2);
    };
    b2.prototype.g = function(g2) {
      this.i(2, g2);
    };
    b2.prototype.h = function(g2) {
      this.i(1, g2);
    };
    b2.prototype.i = function(g2, h) {
      if (0 != this.b)
        throw Error("Cannot settle(" + g2 + ", " + h + "): Promise already settled in state" + this.b);
      this.b = g2;
      this.c = h;
      this.l();
    };
    b2.prototype.l = function() {
      if (null != this.a) {
        for (var g2 = 0; g2 < this.a.length; ++g2)
          f.b(this.a[g2]);
        this.a = null;
      }
    };
    var f = new c();
    b2.prototype.o = function(g2) {
      var h = this.f();
      g2.Pa(h.resolve, h.reject);
    };
    b2.prototype.u = function(g2, h) {
      var m = this.f();
      try {
        g2.call(h, m.resolve, m.reject);
      } catch (p2) {
        m.reject(p2);
      }
    };
    b2.prototype.then = function(g2, h) {
      function m(A2, Q2) {
        return "function" == typeof A2 ? function(xa2) {
          try {
            p2(A2(xa2));
          } catch (yd2) {
            v2(yd2);
          }
        } : Q2;
      }
      var p2, v2, B2 = new b2(function(A2, Q2) {
        p2 = A2;
        v2 = Q2;
      });
      this.Pa(m(g2, p2), m(h, v2));
      return B2;
    };
    b2.prototype.catch = function(g2) {
      return this.then(void 0, g2);
    };
    b2.prototype.Pa = function(g2, h) {
      function m() {
        switch (p2.b) {
          case 1:
            g2(p2.c);
            break;
          case 2:
            h(p2.c);
            break;
          default:
            throw Error("Unexpected state: " + p2.b);
        }
      }
      var p2 = this;
      null == this.a ? f.b(m) : this.a.push(m);
    };
    b2.resolve = d;
    b2.reject = function(g2) {
      return new b2(function(h, m) {
        m(g2);
      });
    };
    b2.race = function(g2) {
      return new b2(function(h, m) {
        for (var p2 = fa2(g2), v2 = p2.next(); !v2.done; v2 = p2.next())
          d(v2.value).Pa(h, m);
      });
    };
    b2.all = function(g2) {
      var h = fa2(g2), m = h.next();
      return m.done ? d([]) : new b2(function(p2, v2) {
        function B2(xa2) {
          return function(yd2) {
            A2[xa2] = yd2;
            Q2--;
            0 == Q2 && p2(A2);
          };
        }
        var A2 = [], Q2 = 0;
        do
          A2.push(void 0), Q2++, d(m.value).Pa(B2(A2.length - 1), v2), m = h.next();
        while (!m.done);
      });
    };
    return b2;
  });
  var ha2 = ha2 || {}, l = this || self, ia2 = /^[\w+/_-]+[=]{0,2}$/, ja2 = null;
  function ka2() {
  }
  function la2(a) {
    var b2 = typeof a;
    if ("object" == b2)
      if (a) {
        if (a instanceof Array)
          return "array";
        if (a instanceof Object)
          return b2;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c)
          return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
          return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
          return "function";
      } else
        return "null";
    else if ("function" == b2 && "undefined" == typeof a.call)
      return "object";
    return b2;
  }
  function ma2(a) {
    var b2 = la2(a);
    return "array" == b2 || "object" == b2 && "number" == typeof a.length;
  }
  function na2(a) {
    return "function" == la2(a);
  }
  function n2(a) {
    var b2 = typeof a;
    return "object" == b2 && null != a || "function" == b2;
  }
  function oa2(a) {
    return Object.prototype.hasOwnProperty.call(a, pa2) && a[pa2] || (a[pa2] = ++qa2);
  }
  var pa2 = "closure_uid_" + (1e9 * Math.random() >>> 0), qa2 = 0;
  function ra2(a, b2, c) {
    return a.call.apply(a.bind, arguments);
  }
  function sa2(a, b2, c) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b2, e);
      };
    }
    return function() {
      return a.apply(b2, arguments);
    };
  }
  function q2(a, b2, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q2 = ra2 : q2 = sa2;
    return q2.apply(null, arguments);
  }
  function ta2(a, b2) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  var ua2 = Date.now || function() {
    return +new Date();
  };
  function r2(a, b2) {
    function c() {
    }
    c.prototype = b2.prototype;
    a.$a = b2.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  }
  function t(a, b2, c) {
    this.code = va2 + a;
    this.message = b2 || wa2[a] || "";
    this.a = c || null;
  }
  r2(t, Error);
  t.prototype.w = function() {
    var a = { code: this.code, message: this.message };
    this.a && (a.serverResponse = this.a);
    return a;
  };
  t.prototype.toJSON = function() {
    return this.w();
  };
  function ya2(a) {
    var b2 = a && a.code;
    return b2 ? new t(b2.substring(va2.length), a.message, a.serverResponse) : null;
  }
  var va2 = "auth/", wa2 = {
    "admin-restricted-operation": "This operation is restricted to administrators only.",
    "argument-error": "",
    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
    "cordova-not-ready": "Cordova framework is not ready.",
    "cors-unsupported": "This browser is not supported.",
    "credential-already-in-use": "This credential is already associated with a different user account.",
    "custom-token-mismatch": "The custom token corresponds to a different audience.",
    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    "email-change-needs-verification": "Multi-factor users must always have a verified email.",
    "email-already-in-use": "The email address is already in use by another account.",
    "expired-action-code": "The action code has expired. ",
    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
    "internal-error": "An internal error has occurred.",
    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    "invalid-auth-event": "An internal error has occurred.",
    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
    "invalid-email": "The email address is badly formatted.",
    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
    "invalid-credential": "The supplied auth credential is malformed or has expired.",
    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    "wrong-password": "The password is invalid or the user does not have a password.",
    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    "invalid-provider-id": "The specified provider ID is invalid.",
    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
    "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
    "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
    "missing-continue-uri": "A continue URL must be provided in the request.",
    "missing-iframe-start": "An internal error has occurred.",
    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
    "missing-multi-factor-info": "No second factor identifier is provided.",
    "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
    "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
    "app-deleted": "This instance of FirebaseApp has been deleted.",
    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    "no-auth-event": "An internal error has occurred.",
    "no-such-provider": "User was not linked to an account with the given provider.",
    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
    "provider-already-linked": "User can only be linked to one identity for the given provider.",
    "quota-exceeded": "The project's quota for this operation has been exceeded.",
    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
    "rejected-credential": "The request contains malformed or mismatching credentials.",
    "second-factor-already-in-use": "The second factor is already enrolled on this account.",
    "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
    timeout: "The operation has timed out.",
    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
    "unverified-email": "The operation requires a verified email.",
    "user-cancelled": "The user did not grant your application the permissions it requested.",
    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
    "user-disabled": "The user account has been disabled by an administrator.",
    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
    "user-signed-out": "",
    "weak-password": "The password must be 6 characters long or more.",
    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
  };
  var za = { kd: { Sa: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token", Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/", id: "b" }, rd: { Sa: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", Ya: "https://securetoken.googleapis.com/v1/token", Va: "https://identitytoolkit.googleapis.com/v2/", id: "p" }, td: {
    Sa: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
    Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
    Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
    id: "s"
  }, ud: { Sa: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", Ya: "https://test-securetoken.sandbox.googleapis.com/v1/token", Va: "https://test-identitytoolkit.sandbox.googleapis.com/v2/", id: "t" } };
  function Aa2(a) {
    for (var b2 in za)
      if (za[b2].id === a)
        return a = za[b2], { firebaseEndpoint: a.Sa, secureTokenEndpoint: a.Ya, identityPlatformEndpoint: a.Va };
    return null;
  }
  var Ba2;
  Ba2 = Aa2("__EID__") ? "__EID__" : void 0;
  function Ca2(a) {
    if (!a)
      return false;
    try {
      return !!a.$goog_Thenable;
    } catch (b2) {
      return false;
    }
  }
  function u2(a) {
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, u2);
    else {
      var b2 = Error().stack;
      b2 && (this.stack = b2);
    }
    a && (this.message = String(a));
  }
  r2(u2, Error);
  u2.prototype.name = "CustomError";
  function Da2(a, b2) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b2.length ? b2[e] : "%s");
    u2.call(this, c + a[d]);
  }
  r2(Da2, u2);
  Da2.prototype.name = "AssertionError";
  function Ea2(a, b2) {
    throw new Da2("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }
  function Fa2(a, b2) {
    this.c = a;
    this.f = b2;
    this.b = 0;
    this.a = null;
  }
  Fa2.prototype.get = function() {
    if (0 < this.b) {
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null;
    } else
      a = this.c();
    return a;
  };
  function Ga2(a, b2) {
    a.f(b2);
    100 > a.b && (a.b++, b2.next = a.a, a.a = b2);
  }
  function Ha2() {
    this.b = this.a = null;
  }
  var Ja2 = new Fa2(function() {
    return new Ia2();
  }, function(a) {
    a.reset();
  });
  Ha2.prototype.add = function(a, b2) {
    var c = Ja2.get();
    c.set(a, b2);
    this.b ? this.b.next = c : this.a = c;
    this.b = c;
  };
  function Ka2() {
    var a = La2, b2 = null;
    a.a && (b2 = a.a, a.a = a.a.next, a.a || (a.b = null), b2.next = null);
    return b2;
  }
  function Ia2() {
    this.next = this.b = this.a = null;
  }
  Ia2.prototype.set = function(a, b2) {
    this.a = a;
    this.b = b2;
    this.next = null;
  };
  Ia2.prototype.reset = function() {
    this.next = this.b = this.a = null;
  };
  var Ma2 = Array.prototype.indexOf ? function(a, b2) {
    return Array.prototype.indexOf.call(a, b2, void 0);
  } : function(a, b2) {
    if ("string" === typeof a)
      return "string" !== typeof b2 || 1 != b2.length ? -1 : a.indexOf(b2, 0);
    for (var c = 0; c < a.length; c++)
      if (c in a && a[c] === b2)
        return c;
    return -1;
  }, w2 = Array.prototype.forEach ? function(a, b2, c) {
    Array.prototype.forEach.call(a, b2, c);
  } : function(a, b2, c) {
    for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
      f in e && b2.call(c, e[f], f, a);
  };
  function Na2(a, b2) {
    for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
      d in c && b2.call(void 0, c[d], d, a);
  }
  var Oa2 = Array.prototype.filter ? function(a, b2) {
    return Array.prototype.filter.call(a, b2, void 0);
  } : function(a, b2) {
    for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g2 = 0; g2 < c; g2++)
      if (g2 in f) {
        var h = f[g2];
        b2.call(void 0, h, g2, a) && (d[e++] = h);
      }
    return d;
  }, Pa = Array.prototype.map ? function(a, b2) {
    return Array.prototype.map.call(a, b2, void 0);
  } : function(a, b2) {
    for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
      f in e && (d[f] = b2.call(void 0, e[f], f, a));
    return d;
  }, Qa = Array.prototype.some ? function(a, b2) {
    return Array.prototype.some.call(a, b2, void 0);
  } : function(a, b2) {
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b2.call(void 0, d[e], e, a))
        return true;
    return false;
  };
  function Ra2(a) {
    a: {
      var b2 = Sa2;
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b2.call(void 0, d[e], e, a)) {
          b2 = e;
          break a;
        }
      b2 = -1;
    }
    return 0 > b2 ? null : "string" === typeof a ? a.charAt(b2) : a[b2];
  }
  function Ta2(a, b2) {
    return 0 <= Ma2(a, b2);
  }
  function Ua2(a, b2) {
    b2 = Ma2(a, b2);
    var c;
    (c = 0 <= b2) && Array.prototype.splice.call(a, b2, 1);
    return c;
  }
  function Va2(a, b2) {
    var c = 0;
    Na2(a, function(d, e) {
      b2.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++;
    });
  }
  function Wa2(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Xa2(a) {
    var b2 = a.length;
    if (0 < b2) {
      for (var c = Array(b2), d = 0; d < b2; d++)
        c[d] = a[d];
      return c;
    }
    return [];
  }
  var Ya2 = String.prototype.trim ? function(a) {
    return a.trim();
  } : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }, Za2 = /&/g, $a2 = /</g, ab2 = />/g, bb2 = /"/g, cb2 = /'/g, db2 = /\x00/g, eb2 = /[\x00&<>"']/;
  function x2(a, b2) {
    return -1 != a.indexOf(b2);
  }
  function fb2(a, b2) {
    return a < b2 ? -1 : a > b2 ? 1 : 0;
  }
  var gb;
  a: {
    var hb2 = l.navigator;
    if (hb2) {
      var ib2 = hb2.userAgent;
      if (ib2) {
        gb = ib2;
        break a;
      }
    }
    gb = "";
  }
  function y2(a) {
    return x2(gb, a);
  }
  function jb2(a, b2) {
    for (var c in a)
      b2.call(void 0, a[c], c, a);
  }
  function kb2(a) {
    for (var b2 in a)
      return false;
    return true;
  }
  function lb2(a) {
    var b2 = {}, c;
    for (c in a)
      b2[c] = a[c];
    return b2;
  }
  var mb2 = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function z2(a, b2) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d)
        a[c] = d[c];
      for (var f = 0; f < mb2.length; f++)
        c = mb2[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function nb2(a, b2) {
    a: {
      try {
        var c = a && a.ownerDocument, d = c && (c.defaultView || c.parentWindow);
        d = d || l;
        if (d.Element && d.Location) {
          var e = d;
          break a;
        }
      } catch (g2) {
      }
      e = null;
    }
    if (e && "undefined" != typeof e[b2] && (!a || !(a instanceof e[b2]) && (a instanceof e.Location || a instanceof e.Element))) {
      if (n2(a))
        try {
          var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
        } catch (g2) {
          f = "<object could not be stringified>";
        }
      else
        f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
      Ea2("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b2, f);
    }
  }
  function ob2(a, b2) {
    this.a = a === pb2 && b2 || "";
    this.b = qb;
  }
  ob2.prototype.sa = true;
  ob2.prototype.ra = function() {
    return this.a;
  };
  ob2.prototype.toString = function() {
    return "Const{" + this.a + "}";
  };
  function rb2(a) {
    if (a instanceof ob2 && a.constructor === ob2 && a.b === qb)
      return a.a;
    Ea2("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  }
  var qb = {}, pb2 = {}, sb2 = new ob2(pb2, "");
  function tb2(a, b2) {
    this.a = a === ub2 && b2 || "";
    this.b = vb2;
  }
  tb2.prototype.sa = true;
  tb2.prototype.ra = function() {
    return this.a.toString();
  };
  tb2.prototype.toString = function() {
    return "TrustedResourceUrl{" + this.a + "}";
  };
  function wb2(a) {
    if (a instanceof tb2 && a.constructor === tb2 && a.b === vb2)
      return a.a;
    Ea2("expected object of type TrustedResourceUrl, got '" + a + "' of type " + la2(a));
    return "type_error:TrustedResourceUrl";
  }
  function xb2(a, b2) {
    var c = rb2(a);
    if (!yb2.test(c))
      throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(zb2, function(d, e) {
      if (!Object.prototype.hasOwnProperty.call(b2, e))
        throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b2));
      d = b2[e];
      return d instanceof ob2 ? rb2(d) : encodeURIComponent(String(d));
    });
    return new tb2(ub2, a);
  }
  var zb2 = /%{(\w+)}/g, yb2 = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i, vb2 = {}, ub2 = {};
  function Ab2(a, b2) {
    this.a = a === Bb2 && b2 || "";
    this.b = Cb2;
  }
  Ab2.prototype.sa = true;
  Ab2.prototype.ra = function() {
    return this.a.toString();
  };
  Ab2.prototype.toString = function() {
    return "SafeUrl{" + this.a + "}";
  };
  function Db2(a) {
    if (a instanceof Ab2 && a.constructor === Ab2 && a.b === Cb2)
      return a.a;
    Ea2("expected object of type SafeUrl, got '" + a + "' of type " + la2(a));
    return "type_error:SafeUrl";
  }
  var Eb2 = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Fb2(a) {
    if (a instanceof Ab2)
      return a;
    a = "object" == typeof a && a.sa ? a.ra() : String(a);
    Eb2.test(a) || (a = "about:invalid#zClosurez");
    return new Ab2(Bb2, a);
  }
  var Cb2 = {}, Bb2 = {};
  function Gb2() {
    this.a = "";
    this.b = Hb2;
  }
  Gb2.prototype.sa = true;
  Gb2.prototype.ra = function() {
    return this.a.toString();
  };
  Gb2.prototype.toString = function() {
    return "SafeHtml{" + this.a + "}";
  };
  function Ib2(a) {
    if (a instanceof Gb2 && a.constructor === Gb2 && a.b === Hb2)
      return a.a;
    Ea2("expected object of type SafeHtml, got '" + a + "' of type " + la2(a));
    return "type_error:SafeHtml";
  }
  var Hb2 = {};
  function Jb2(a) {
    var b2 = new Gb2();
    b2.a = a;
    return b2;
  }
  Jb2("<!DOCTYPE html>");
  var Kb2 = Jb2("");
  Jb2("<br>");
  function Lb2(a) {
    var b2 = new tb2(ub2, rb2(sb2));
    nb2(a, "HTMLIFrameElement");
    a.src = wb2(b2).toString();
  }
  function Mb2(a, b2) {
    nb2(a, "HTMLScriptElement");
    a.src = wb2(b2);
    if (null === ja2)
      b: {
        b2 = l.document;
        if ((b2 = b2.querySelector && b2.querySelector("script[nonce]")) && (b2 = b2.nonce || b2.getAttribute("nonce")) && ia2.test(b2)) {
          ja2 = b2;
          break b;
        }
        ja2 = "";
      }
    b2 = ja2;
    b2 && a.setAttribute("nonce", b2);
  }
  function Nb2(a, b2) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
      d += c.shift() + e.shift();
    return d + c.join("%s");
  }
  function Ob2(a) {
    eb2.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Za2, "&amp;")), -1 != a.indexOf("<") && (a = a.replace($a2, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(ab2, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(bb2, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(cb2, "&#39;")), -1 != a.indexOf("\0") && (a = a.replace(db2, "&#0;")));
    return a;
  }
  function Pb2(a) {
    Pb2[" "](a);
    return a;
  }
  Pb2[" "] = ka2;
  function Qb2(a, b2) {
    var c = Rb2;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b2(a);
  }
  var Sb2 = y2("Opera"), Tb2 = y2("Trident") || y2("MSIE"), Ub2 = y2("Edge"), Vb2 = Ub2 || Tb2, Wb2 = y2("Gecko") && !(x2(gb.toLowerCase(), "webkit") && !y2("Edge")) && !(y2("Trident") || y2("MSIE")) && !y2("Edge"), Xb2 = x2(gb.toLowerCase(), "webkit") && !y2("Edge");
  function Yb2() {
    var a = l.document;
    return a ? a.documentMode : void 0;
  }
  var Zb2;
  a: {
    var $b2 = "", ac2 = function() {
      var a = gb;
      if (Wb2)
        return /rv:([^\);]+)(\)|;)/.exec(a);
      if (Ub2)
        return /Edge\/([\d\.]+)/.exec(a);
      if (Tb2)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (Xb2)
        return /WebKit\/(\S+)/.exec(a);
      if (Sb2)
        return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();
    ac2 && ($b2 = ac2 ? ac2[1] : "");
    if (Tb2) {
      var bc2 = Yb2();
      if (null != bc2 && bc2 > parseFloat($b2)) {
        Zb2 = String(bc2);
        break a;
      }
    }
    Zb2 = $b2;
  }
  var Rb2 = {};
  function cc2(a) {
    return Qb2(a, function() {
      for (var b2 = 0, c = Ya2(String(Zb2)).split("."), d = Ya2(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b2 && f < e; f++) {
        var g2 = c[f] || "", h = d[f] || "";
        do {
          g2 = /(\d*)(\D*)(.*)/.exec(g2) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == g2[0].length && 0 == h[0].length)
            break;
          b2 = fb2(0 == g2[1].length ? 0 : parseInt(g2[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || fb2(0 == g2[2].length, 0 == h[2].length) || fb2(g2[2], h[2]);
          g2 = g2[3];
          h = h[3];
        } while (0 == b2);
      }
      return 0 <= b2;
    });
  }
  var dc2;
  dc2 = l.document && Tb2 ? Yb2() : void 0;
  try {
    new self.OffscreenCanvas(0, 0).getContext("2d");
  } catch (a) {
  }
  var ec2 = !Tb2 || 9 <= Number(dc2);
  function fc2(a) {
    var b2 = document;
    return "string" === typeof a ? b2.getElementById(a) : a;
  }
  function gc2(a, b2) {
    jb2(b2, function(c, d) {
      c && "object" == typeof c && c.sa && (c = c.ra());
      "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : hc2.hasOwnProperty(d) ? a.setAttribute(hc2[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c;
    });
  }
  var hc2 = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };
  function ic2(a, b2, c) {
    var d = arguments, e = document, f = String(d[0]), g2 = d[1];
    if (!ec2 && g2 && (g2.name || g2.type)) {
      f = ["<", f];
      g2.name && f.push(' name="', Ob2(g2.name), '"');
      if (g2.type) {
        f.push(' type="', Ob2(g2.type), '"');
        var h = {};
        z2(h, g2);
        delete h.type;
        g2 = h;
      }
      f.push(">");
      f = f.join("");
    }
    f = jc2(e, f);
    g2 && ("string" === typeof g2 ? f.className = g2 : Array.isArray(g2) ? f.className = g2.join(" ") : gc2(f, g2));
    2 < d.length && kc2(e, f, d);
    return f;
  }
  function kc2(a, b2, c) {
    function d(g2) {
      g2 && b2.appendChild("string" === typeof g2 ? a.createTextNode(g2) : g2);
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      !ma2(f) || n2(f) && 0 < f.nodeType ? d(f) : w2(lc2(f) ? Xa2(f) : f, d);
    }
  }
  function jc2(a, b2) {
    b2 = String(b2);
    "application/xhtml+xml" === a.contentType && (b2 = b2.toLowerCase());
    return a.createElement(b2);
  }
  function lc2(a) {
    if (a && "number" == typeof a.length) {
      if (n2(a))
        return "function" == typeof a.item || "string" == typeof a.item;
      if (na2(a))
        return "function" == typeof a.item;
    }
    return false;
  }
  function mc2(a) {
    l.setTimeout(function() {
      throw a;
    }, 0);
  }
  var nc2;
  function oc2() {
    var a = l.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y2("Presto") && (a = function() {
      var e = jc2(document, "IFRAME");
      e.style.display = "none";
      Lb2(e);
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.write(Ib2(Kb2));
      e.close();
      var g2 = "callImmediate" + Math.random(), h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
      e = q2(function(m) {
        if (("*" == h || m.origin == h) && m.data == g2)
          this.port1.onmessage();
      }, this);
      f.addEventListener("message", e, false);
      this.port1 = {};
      this.port2 = { postMessage: function() {
        f.postMessage(g2, h);
      } };
    });
    if ("undefined" !== typeof a && !y2("Trident") && !y2("MSIE")) {
      var b2 = new a(), c = {}, d = c;
      b2.port1.onmessage = function() {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.Fb;
          c.Fb = null;
          e();
        }
      };
      return function(e) {
        d.next = { Fb: e };
        d = d.next;
        b2.port2.postMessage(0);
      };
    }
    return function(e) {
      l.setTimeout(e, 0);
    };
  }
  function pc2(a, b2) {
    qc2 || rc2();
    sc || (qc2(), sc = true);
    La2.add(a, b2);
  }
  var qc2;
  function rc2() {
    if (l.Promise && l.Promise.resolve) {
      var a = l.Promise.resolve(void 0);
      qc2 = function() {
        a.then(tc2);
      };
    } else
      qc2 = function() {
        var b2 = tc2;
        !na2(l.setImmediate) || l.Window && l.Window.prototype && !y2("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (nc2 || (nc2 = oc2()), nc2(b2)) : l.setImmediate(b2);
      };
  }
  var sc = false, La2 = new Ha2();
  function tc2() {
    for (var a; a = Ka2(); ) {
      try {
        a.a.call(a.b);
      } catch (b2) {
        mc2(b2);
      }
      Ga2(Ja2, a);
    }
    sc = false;
  }
  function C2(a, b2) {
    this.a = uc2;
    this.i = void 0;
    this.f = this.b = this.c = null;
    this.g = this.h = false;
    if (a != ka2)
      try {
        var c = this;
        a.call(b2, function(d) {
          vc2(c, wc, d);
        }, function(d) {
          if (!(d instanceof xc2))
            try {
              if (d instanceof Error)
                throw d;
              throw Error("Promise rejected.");
            } catch (e) {
            }
          vc2(c, yc2, d);
        });
      } catch (d) {
        vc2(this, yc2, d);
      }
  }
  var uc2 = 0, wc = 2, yc2 = 3;
  function zc2() {
    this.next = this.f = this.b = this.g = this.a = null;
    this.c = false;
  }
  zc2.prototype.reset = function() {
    this.f = this.b = this.g = this.a = null;
    this.c = false;
  };
  var Ac2 = new Fa2(function() {
    return new zc2();
  }, function(a) {
    a.reset();
  });
  function Bc2(a, b2, c) {
    var d = Ac2.get();
    d.g = a;
    d.b = b2;
    d.f = c;
    return d;
  }
  function D2(a) {
    if (a instanceof C2)
      return a;
    var b2 = new C2(ka2);
    vc2(b2, wc, a);
    return b2;
  }
  function E2(a) {
    return new C2(function(b2, c) {
      c(a);
    });
  }
  function Cc2(a, b2, c) {
    Dc2(a, b2, c, null) || pc2(ta2(b2, a));
  }
  function Ec2(a) {
    return new C2(function(b2, c) {
      var d = a.length, e = [];
      if (d)
        for (var f = function(p2, v2) {
          d--;
          e[p2] = v2;
          0 == d && b2(e);
        }, g2 = function(p2) {
          c(p2);
        }, h = 0, m; h < a.length; h++)
          m = a[h], Cc2(m, ta2(f, h), g2);
      else
        b2(e);
    });
  }
  function Fc2(a) {
    return new C2(function(b2) {
      var c = a.length, d = [];
      if (c)
        for (var e = function(h, m, p2) {
          c--;
          d[h] = m ? { Ob: true, value: p2 } : { Ob: false, reason: p2 };
          0 == c && b2(d);
        }, f = 0, g2; f < a.length; f++)
          g2 = a[f], Cc2(g2, ta2(e, f, true), ta2(e, f, false));
      else
        b2(d);
    });
  }
  C2.prototype.then = function(a, b2, c) {
    return Gc2(this, na2(a) ? a : null, na2(b2) ? b2 : null, c);
  };
  C2.prototype.$goog_Thenable = true;
  k2 = C2.prototype;
  k2.na = function(a, b2) {
    a = Bc2(a, a, b2);
    a.c = true;
    Hc2(this, a);
    return this;
  };
  k2.s = function(a, b2) {
    return Gc2(this, null, a, b2);
  };
  k2.cancel = function(a) {
    if (this.a == uc2) {
      var b2 = new xc2(a);
      pc2(function() {
        Ic2(this, b2);
      }, this);
    }
  };
  function Ic2(a, b2) {
    if (a.a == uc2)
      if (a.c) {
        var c = a.c;
        if (c.b) {
          for (var d = 0, e = null, f = null, g2 = c.b; g2 && (g2.c || (d++, g2.a == a && (e = g2), !(e && 1 < d))); g2 = g2.next)
            e || (f = g2);
          e && (c.a == uc2 && 1 == d ? Ic2(c, b2) : (f ? (d = f, d.next == c.f && (c.f = d), d.next = d.next.next) : Jc2(c), Kc2(c, e, yc2, b2)));
        }
        a.c = null;
      } else
        vc2(a, yc2, b2);
  }
  function Hc2(a, b2) {
    a.b || a.a != wc && a.a != yc2 || Lc2(a);
    a.f ? a.f.next = b2 : a.b = b2;
    a.f = b2;
  }
  function Gc2(a, b2, c, d) {
    var e = Bc2(null, null, null);
    e.a = new C2(function(f, g2) {
      e.g = b2 ? function(h) {
        try {
          var m = b2.call(d, h);
          f(m);
        } catch (p2) {
          g2(p2);
        }
      } : f;
      e.b = c ? function(h) {
        try {
          var m = c.call(d, h);
          void 0 === m && h instanceof xc2 ? g2(h) : f(m);
        } catch (p2) {
          g2(p2);
        }
      } : g2;
    });
    e.a.c = a;
    Hc2(a, e);
    return e.a;
  }
  k2.Zc = function(a) {
    this.a = uc2;
    vc2(this, wc, a);
  };
  k2.$c = function(a) {
    this.a = uc2;
    vc2(this, yc2, a);
  };
  function vc2(a, b2, c) {
    a.a == uc2 && (a === c && (b2 = yc2, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Dc2(c, a.Zc, a.$c, a) || (a.i = c, a.a = b2, a.c = null, Lc2(a), b2 != yc2 || c instanceof xc2 || Mc2(a, c)));
  }
  function Dc2(a, b2, c, d) {
    if (a instanceof C2)
      return Hc2(a, Bc2(b2 || ka2, c || null, d)), true;
    if (Ca2(a))
      return a.then(b2, c, d), true;
    if (n2(a))
      try {
        var e = a.then;
        if (na2(e))
          return Nc2(a, e, b2, c, d), true;
      } catch (f) {
        return c.call(d, f), true;
      }
    return false;
  }
  function Nc2(a, b2, c, d, e) {
    function f(m) {
      h || (h = true, d.call(e, m));
    }
    function g2(m) {
      h || (h = true, c.call(e, m));
    }
    var h = false;
    try {
      b2.call(a, g2, f);
    } catch (m) {
      f(m);
    }
  }
  function Lc2(a) {
    a.h || (a.h = true, pc2(a.fc, a));
  }
  function Jc2(a) {
    var b2 = null;
    a.b && (b2 = a.b, a.b = b2.next, b2.next = null);
    a.b || (a.f = null);
    return b2;
  }
  k2.fc = function() {
    for (var a; a = Jc2(this); )
      Kc2(this, a, this.a, this.i);
    this.h = false;
  };
  function Kc2(a, b2, c, d) {
    if (c == yc2 && b2.b && !b2.c)
      for (; a && a.g; a = a.c)
        a.g = false;
    if (b2.a)
      b2.a.c = null, Oc2(b2, c, d);
    else
      try {
        b2.c ? b2.g.call(b2.f) : Oc2(b2, c, d);
      } catch (e) {
        Pc2.call(null, e);
      }
    Ga2(Ac2, b2);
  }
  function Oc2(a, b2, c) {
    b2 == wc ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c);
  }
  function Mc2(a, b2) {
    a.g = true;
    pc2(function() {
      a.g && Pc2.call(null, b2);
    });
  }
  var Pc2 = mc2;
  function xc2(a) {
    u2.call(this, a);
  }
  r2(xc2, u2);
  xc2.prototype.name = "cancel";
  function Qc2() {
    this.xa = this.xa;
    this.oa = this.oa;
  }
  var Rc2 = 0;
  Qc2.prototype.xa = false;
  function Tc2(a) {
    if (!a.xa && (a.xa = true, a.Da(), 0 != Rc2)) {
      oa2(a);
    }
  }
  Qc2.prototype.Da = function() {
    if (this.oa)
      for (; this.oa.length; )
        this.oa.shift()();
  };
  var Uc2 = Object.freeze || function(a) {
    return a;
  };
  var Vc2 = !Tb2 || 9 <= Number(dc2), Wc2 = Tb2 && !cc2("9"), Xc2 = function() {
    if (!l.addEventListener || !Object.defineProperty)
      return false;
    var a = false, b2 = Object.defineProperty({}, "passive", { get: function() {
      a = true;
    } });
    try {
      l.addEventListener("test", ka2, b2), l.removeEventListener("test", ka2, b2);
    } catch (c) {
    }
    return a;
  }();
  function F2(a, b2) {
    this.type = a;
    this.b = this.target = b2;
    this.defaultPrevented = false;
  }
  F2.prototype.preventDefault = function() {
    this.defaultPrevented = true;
  };
  function Yc2(a, b2) {
    F2.call(this, a ? a.type : "");
    this.relatedTarget = this.b = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.pointerId = 0;
    this.pointerType = "";
    this.a = null;
    if (a) {
      var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.b = b2;
      if (b2 = a.relatedTarget) {
        if (Wb2) {
          a: {
            try {
              Pb2(b2.nodeName);
              var e = true;
              break a;
            } catch (f) {
            }
            e = false;
          }
          e || (b2 = null);
        }
      } else
        "mouseover" == c ? b2 = a.fromElement : "mouseout" == c && (b2 = a.toElement);
      this.relatedTarget = b2;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Zc2[a.pointerType] || "";
      this.a = a;
      a.defaultPrevented && this.preventDefault();
    }
  }
  r2(Yc2, F2);
  var Zc2 = Uc2({ 2: "touch", 3: "pen", 4: "mouse" });
  Yc2.prototype.preventDefault = function() {
    Yc2.$a.preventDefault.call(this);
    var a = this.a;
    if (a.preventDefault)
      a.preventDefault();
    else if (a.returnValue = false, Wc2)
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
          a.keyCode = -1;
      } catch (b2) {
      }
  };
  Yc2.prototype.g = function() {
    return this.a;
  };
  var $c2 = "closure_listenable_" + (1e6 * Math.random() | 0), ad2 = 0;
  function bd2(a, b2, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b2;
    this.type = c;
    this.capture = !!d;
    this.Ua = e;
    this.key = ++ad2;
    this.va = this.Oa = false;
  }
  function cd2(a) {
    a.va = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Ua = null;
  }
  function dd2(a) {
    this.src = a;
    this.a = {};
    this.b = 0;
  }
  dd2.prototype.add = function(a, b2, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g2 = ed2(a, b2, d, e);
    -1 < g2 ? (b2 = a[g2], c || (b2.Oa = false)) : (b2 = new bd2(b2, this.src, f, !!d, e), b2.Oa = c, a.push(b2));
    return b2;
  };
  function fd2(a, b2) {
    var c = b2.type;
    c in a.a && Ua2(a.a[c], b2) && (cd2(b2), 0 == a.a[c].length && (delete a.a[c], a.b--));
  }
  function ed2(a, b2, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.va && f.listener == b2 && f.capture == !!c && f.Ua == d)
        return e;
    }
    return -1;
  }
  var gd2 = "closure_lm_" + (1e6 * Math.random() | 0), hd2 = {};
  function jd2(a, b2, c, d, e) {
    if (d && d.once)
      kd2(a, b2, c, d, e);
    else if (Array.isArray(b2))
      for (var f = 0; f < b2.length; f++)
        jd2(a, b2[f], c, d, e);
    else
      c = ld2(c), a && a[$c2] ? md2(a, b2, c, n2(d) ? !!d.capture : !!d, e) : nd2(a, b2, c, false, d, e);
  }
  function nd2(a, b2, c, d, e, f) {
    if (!b2)
      throw Error("Invalid event type");
    var g2 = n2(e) ? !!e.capture : !!e, h = od2(a);
    h || (a[gd2] = h = new dd2(a));
    c = h.add(b2, c, d, g2, f);
    if (!c.proxy) {
      d = pd2();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        Xc2 || (e = g2), void 0 === e && (e = false), a.addEventListener(b2.toString(), d, e);
      else if (a.attachEvent)
        a.attachEvent(qd2(b2.toString()), d);
      else if (a.addListener && a.removeListener)
        a.addListener(d);
      else
        throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  function pd2() {
    var a = rd2, b2 = Vc2 ? function(c) {
      return a.call(b2.src, b2.listener, c);
    } : function(c) {
      c = a.call(b2.src, b2.listener, c);
      if (!c)
        return c;
    };
    return b2;
  }
  function kd2(a, b2, c, d, e) {
    if (Array.isArray(b2))
      for (var f = 0; f < b2.length; f++)
        kd2(a, b2[f], c, d, e);
    else
      c = ld2(c), a && a[$c2] ? sd2(a, b2, c, n2(d) ? !!d.capture : !!d, e) : nd2(a, b2, c, true, d, e);
  }
  function G2(a, b2, c, d, e) {
    if (Array.isArray(b2))
      for (var f = 0; f < b2.length; f++)
        G2(a, b2[f], c, d, e);
    else
      (d = n2(d) ? !!d.capture : !!d, c = ld2(c), a && a[$c2]) ? (a = a.v, b2 = String(b2).toString(), b2 in a.a && (f = a.a[b2], c = ed2(f, c, d, e), -1 < c && (cd2(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b2], a.b--)))) : a && (a = od2(a)) && (b2 = a.a[b2.toString()], a = -1, b2 && (a = ed2(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && td2(c));
  }
  function td2(a) {
    if ("number" !== typeof a && a && !a.va) {
      var b2 = a.src;
      if (b2 && b2[$c2])
        fd2(b2.v, a);
      else {
        var c = a.type, d = a.proxy;
        b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(qd2(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
        (c = od2(b2)) ? (fd2(c, a), 0 == c.b && (c.src = null, b2[gd2] = null)) : cd2(a);
      }
    }
  }
  function qd2(a) {
    return a in hd2 ? hd2[a] : hd2[a] = "on" + a;
  }
  function ud2(a, b2, c, d) {
    var e = true;
    if (a = od2(a)) {
      if (b2 = a.a[b2.toString()])
        for (b2 = b2.concat(), a = 0; a < b2.length; a++) {
          var f = b2[a];
          f && f.capture == c && !f.va && (f = vd2(f, d), e = e && false !== f);
        }
    }
    return e;
  }
  function vd2(a, b2) {
    var c = a.listener, d = a.Ua || a.src;
    a.Oa && td2(a);
    return c.call(d, b2);
  }
  function rd2(a, b2) {
    if (a.va)
      return true;
    if (!Vc2) {
      if (!b2)
        a: {
          b2 = ["window", "event"];
          for (var c = l, d = 0; d < b2.length; d++)
            if (c = c[b2[d]], null == c) {
              b2 = null;
              break a;
            }
          b2 = c;
        }
      d = b2;
      b2 = new Yc2(d, this);
      c = true;
      if (!(0 > d.keyCode || void 0 != d.returnValue)) {
        a: {
          var e = false;
          if (0 == d.keyCode)
            try {
              d.keyCode = -1;
              break a;
            } catch (g2) {
              e = true;
            }
          if (e || void 0 == d.returnValue)
            d.returnValue = true;
        }
        d = [];
        for (e = b2.b; e; e = e.parentNode)
          d.push(e);
        a = a.type;
        for (e = d.length - 1; 0 <= e; e--) {
          b2.b = d[e];
          var f = ud2(d[e], a, true, b2);
          c = c && f;
        }
        for (e = 0; e < d.length; e++)
          b2.b = d[e], f = ud2(d[e], a, false, b2), c = c && f;
      }
      return c;
    }
    return vd2(a, new Yc2(b2, this));
  }
  function od2(a) {
    a = a[gd2];
    return a instanceof dd2 ? a : null;
  }
  var wd2 = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function ld2(a) {
    if (na2(a))
      return a;
    a[wd2] || (a[wd2] = function(b2) {
      return a.handleEvent(b2);
    });
    return a[wd2];
  }
  function H2() {
    Qc2.call(this);
    this.v = new dd2(this);
    this.$b = this;
    this.fb = null;
  }
  r2(H2, Qc2);
  H2.prototype[$c2] = true;
  H2.prototype.addEventListener = function(a, b2, c, d) {
    jd2(this, a, b2, c, d);
  };
  H2.prototype.removeEventListener = function(a, b2, c, d) {
    G2(this, a, b2, c, d);
  };
  H2.prototype.dispatchEvent = function(a) {
    var b2, c = this.fb;
    if (c)
      for (b2 = []; c; c = c.fb)
        b2.push(c);
    c = this.$b;
    var d = a.type || a;
    if ("string" === typeof a)
      a = new F2(a, c);
    else if (a instanceof F2)
      a.target = a.target || c;
    else {
      var e = a;
      a = new F2(d, c);
      z2(a, e);
    }
    e = true;
    if (b2)
      for (var f = b2.length - 1; 0 <= f; f--) {
        var g2 = a.b = b2[f];
        e = xd2(g2, d, true, a) && e;
      }
    g2 = a.b = c;
    e = xd2(g2, d, true, a) && e;
    e = xd2(g2, d, false, a) && e;
    if (b2)
      for (f = 0; f < b2.length; f++)
        g2 = a.b = b2[f], e = xd2(g2, d, false, a) && e;
    return e;
  };
  H2.prototype.Da = function() {
    H2.$a.Da.call(this);
    if (this.v) {
      var a = this.v, c;
      for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
          cd2(d[e]);
        delete a.a[c];
        a.b--;
      }
    }
    this.fb = null;
  };
  function md2(a, b2, c, d, e) {
    a.v.add(String(b2), c, false, d, e);
  }
  function sd2(a, b2, c, d, e) {
    a.v.add(String(b2), c, true, d, e);
  }
  function xd2(a, b2, c, d) {
    b2 = a.v.a[String(b2)];
    if (!b2)
      return true;
    b2 = b2.concat();
    for (var e = true, f = 0; f < b2.length; ++f) {
      var g2 = b2[f];
      if (g2 && !g2.va && g2.capture == c) {
        var h = g2.listener, m = g2.Ua || g2.src;
        g2.Oa && fd2(a.v, g2);
        e = false !== h.call(m, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  function zd2(a, b2, c) {
    if (na2(a))
      c && (a = q2(a, c));
    else if (a && "function" == typeof a.handleEvent)
      a = q2(a.handleEvent, a);
    else
      throw Error("Invalid listener argument");
    return 2147483647 < Number(b2) ? -1 : l.setTimeout(a, b2 || 0);
  }
  function Ad2(a) {
    var b2 = null;
    return new C2(function(c, d) {
      b2 = zd2(function() {
        c(void 0);
      }, a);
      -1 == b2 && d(Error("Failed to schedule timer."));
    }).s(function(c) {
      l.clearTimeout(b2);
      throw c;
    });
  }
  function Bd2(a) {
    if (a.V && "function" == typeof a.V)
      return a.V();
    if ("string" === typeof a)
      return a.split("");
    if (ma2(a)) {
      for (var b2 = [], c = a.length, d = 0; d < c; d++)
        b2.push(a[d]);
      return b2;
    }
    b2 = [];
    c = 0;
    for (d in a)
      b2[c++] = a[d];
    return b2;
  }
  function Cd2(a) {
    if (a.Y && "function" == typeof a.Y)
      return a.Y();
    if (!a.V || "function" != typeof a.V) {
      if (ma2(a) || "string" === typeof a) {
        var b2 = [];
        a = a.length;
        for (var c = 0; c < a; c++)
          b2.push(c);
        return b2;
      }
      b2 = [];
      c = 0;
      for (var d in a)
        b2[c++] = d;
      return b2;
    }
  }
  function Dd2(a, b2) {
    if (a.forEach && "function" == typeof a.forEach)
      a.forEach(b2, void 0);
    else if (ma2(a) || "string" === typeof a)
      w2(a, b2, void 0);
    else
      for (var c = Cd2(a), d = Bd2(a), e = d.length, f = 0; f < e; f++)
        b2.call(void 0, d[f], c && c[f], a);
  }
  function Ed2(a, b2) {
    this.b = {};
    this.a = [];
    this.c = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2)
        throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof Ed2)
        for (c = a.Y(), d = 0; d < c.length; d++)
          this.set(c[d], a.get(c[d]));
      else
        for (d in a)
          this.set(d, a[d]);
  }
  k2 = Ed2.prototype;
  k2.V = function() {
    Fd2(this);
    for (var a = [], b2 = 0; b2 < this.a.length; b2++)
      a.push(this.b[this.a[b2]]);
    return a;
  };
  k2.Y = function() {
    Fd2(this);
    return this.a.concat();
  };
  k2.clear = function() {
    this.b = {};
    this.c = this.a.length = 0;
  };
  function Fd2(a) {
    if (a.c != a.a.length) {
      for (var b2 = 0, c = 0; b2 < a.a.length; ) {
        var d = a.a[b2];
        Gd2(a.b, d) && (a.a[c++] = d);
        b2++;
      }
      a.a.length = c;
    }
    if (a.c != a.a.length) {
      var e = {};
      for (c = b2 = 0; b2 < a.a.length; )
        d = a.a[b2], Gd2(e, d) || (a.a[c++] = d, e[d] = 1), b2++;
      a.a.length = c;
    }
  }
  k2.get = function(a, b2) {
    return Gd2(this.b, a) ? this.b[a] : b2;
  };
  k2.set = function(a, b2) {
    Gd2(this.b, a) || (this.c++, this.a.push(a));
    this.b[a] = b2;
  };
  k2.forEach = function(a, b2) {
    for (var c = this.Y(), d = 0; d < c.length; d++) {
      var e = c[d], f = this.get(e);
      a.call(b2, f, e, this);
    }
  };
  function Gd2(a, b2) {
    return Object.prototype.hasOwnProperty.call(a, b2);
  }
  var Hd2 = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function Id2(a, b2) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else
          f = a[c];
        b2(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function Jd2(a, b2) {
    this.a = this.l = this.f = "";
    this.g = null;
    this.h = this.c = "";
    this.i = false;
    var c;
    a instanceof Jd2 ? (this.i = void 0 !== b2 ? b2 : a.i, Kd2(this, a.f), this.l = a.l, this.a = a.a, Ld2(this, a.g), this.c = a.c, Md2(this, Nd2(a.b)), this.h = a.h) : a && (c = String(a).match(Hd2)) ? (this.i = !!b2, Kd2(this, c[1] || "", true), this.l = Od2(c[2] || ""), this.a = Od2(c[3] || "", true), Ld2(this, c[4]), this.c = Od2(c[5] || "", true), Md2(this, c[6] || "", true), this.h = Od2(c[7] || "")) : (this.i = !!b2, this.b = new Pd2(null, this.i));
  }
  Jd2.prototype.toString = function() {
    var a = [], b2 = this.f;
    b2 && a.push(Qd(b2, Rd, true), ":");
    var c = this.a;
    if (c || "file" == b2)
      a.push("//"), (b2 = this.l) && a.push(Qd(b2, Rd, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.g, null != c && a.push(":", String(c));
    if (c = this.c)
      this.a && "/" != c.charAt(0) && a.push("/"), a.push(Qd(c, "/" == c.charAt(0) ? Sd : Td, true));
    (c = this.b.toString()) && a.push("?", c);
    (c = this.h) && a.push("#", Qd(c, Ud));
    return a.join("");
  };
  Jd2.prototype.resolve = function(a) {
    var b2 = new Jd2(this), c = !!a.f;
    c ? Kd2(b2, a.f) : c = !!a.l;
    c ? b2.l = a.l : c = !!a.a;
    c ? b2.a = a.a : c = null != a.g;
    var d = a.c;
    if (c)
      Ld2(b2, a.g);
    else if (c = !!a.c) {
      if ("/" != d.charAt(0))
        if (this.a && !this.c)
          d = "/" + d;
        else {
          var e = b2.c.lastIndexOf("/");
          -1 != e && (d = b2.c.substr(0, e + 1) + d);
        }
      e = d;
      if (".." == e || "." == e)
        d = "";
      else if (x2(e, "./") || x2(e, "/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");
        for (var f = [], g2 = 0; g2 < e.length; ) {
          var h = e[g2++];
          "." == h ? d && g2 == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g2 == e.length && f.push("")) : (f.push(h), d = true);
        }
        d = f.join("/");
      } else
        d = e;
    }
    c ? b2.c = d : c = "" !== a.b.toString();
    c ? Md2(b2, Nd2(a.b)) : c = !!a.h;
    c && (b2.h = a.h);
    return b2;
  };
  function Kd2(a, b2, c) {
    a.f = c ? Od2(b2, true) : b2;
    a.f && (a.f = a.f.replace(/:$/, ""));
  }
  function Ld2(a, b2) {
    if (b2) {
      b2 = Number(b2);
      if (isNaN(b2) || 0 > b2)
        throw Error("Bad port number " + b2);
      a.g = b2;
    } else
      a.g = null;
  }
  function Md2(a, b2, c) {
    b2 instanceof Pd2 ? (a.b = b2, Vd(a.b, a.i)) : (c || (b2 = Qd(b2, Wd)), a.b = new Pd2(b2, a.i));
  }
  function I2(a, b2, c) {
    a.b.set(b2, c);
  }
  function Xd(a, b2) {
    return a.b.get(b2);
  }
  function J2(a) {
    return a instanceof Jd2 ? new Jd2(a) : new Jd2(a, void 0);
  }
  function Yd(a, b2, c, d) {
    var e = new Jd2(null, void 0);
    a && Kd2(e, a);
    b2 && (e.a = b2);
    c && Ld2(e, c);
    d && (e.c = d);
    return e;
  }
  function Od2(a, b2) {
    return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  function Qd(a, b2, c) {
    return "string" === typeof a ? (a = encodeURI(a).replace(b2, Zd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }
  function Zd(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  var Rd = /[#\/\?@]/g, Td = /[#\?:]/g, Sd = /[#\?]/g, Wd = /[#\?@]/g, Ud = /#/g;
  function Pd2(a, b2) {
    this.b = this.a = null;
    this.c = a || null;
    this.f = !!b2;
  }
  function $d(a) {
    a.a || (a.a = new Ed2(), a.b = 0, a.c && Id2(a.c, function(b2, c) {
      a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
    }));
  }
  function ae2(a) {
    var b2 = Cd2(a);
    if ("undefined" == typeof b2)
      throw Error("Keys are undefined");
    var c = new Pd2(null, void 0);
    a = Bd2(a);
    for (var d = 0; d < b2.length; d++) {
      var e = b2[d], f = a[d];
      Array.isArray(f) ? be2(c, e, f) : c.add(e, f);
    }
    return c;
  }
  k2 = Pd2.prototype;
  k2.add = function(a, b2) {
    $d(this);
    this.c = null;
    a = ce2(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b2);
    this.b += 1;
    return this;
  };
  function de2(a, b2) {
    $d(a);
    b2 = ce2(a, b2);
    Gd2(a.a.b, b2) && (a.c = null, a.b -= a.a.get(b2).length, a = a.a, Gd2(a.b, b2) && (delete a.b[b2], a.c--, a.a.length > 2 * a.c && Fd2(a)));
  }
  k2.clear = function() {
    this.a = this.c = null;
    this.b = 0;
  };
  function ee2(a, b2) {
    $d(a);
    b2 = ce2(a, b2);
    return Gd2(a.a.b, b2);
  }
  k2.forEach = function(a, b2) {
    $d(this);
    this.a.forEach(function(c, d) {
      w2(c, function(e) {
        a.call(b2, e, d, this);
      }, this);
    }, this);
  };
  k2.Y = function() {
    $d(this);
    for (var a = this.a.V(), b2 = this.a.Y(), c = [], d = 0; d < b2.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b2[d]);
    return c;
  };
  k2.V = function(a) {
    $d(this);
    var b2 = [];
    if ("string" === typeof a)
      ee2(this, a) && (b2 = Wa2(b2, this.a.get(ce2(this, a))));
    else {
      a = this.a.V();
      for (var c = 0; c < a.length; c++)
        b2 = Wa2(b2, a[c]);
    }
    return b2;
  };
  k2.set = function(a, b2) {
    $d(this);
    this.c = null;
    a = ce2(this, a);
    ee2(this, a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b2]);
    this.b += 1;
    return this;
  };
  k2.get = function(a, b2) {
    if (!a)
      return b2;
    a = this.V(a);
    return 0 < a.length ? String(a[0]) : b2;
  };
  function be2(a, b2, c) {
    de2(a, b2);
    0 < c.length && (a.c = null, a.a.set(ce2(a, b2), Xa2(c)), a.b += c.length);
  }
  k2.toString = function() {
    if (this.c)
      return this.c;
    if (!this.a)
      return "";
    for (var a = [], b2 = this.a.Y(), c = 0; c < b2.length; c++) {
      var d = b2[c], e = encodeURIComponent(String(d));
      d = this.V(d);
      for (var f = 0; f < d.length; f++) {
        var g2 = e;
        "" !== d[f] && (g2 += "=" + encodeURIComponent(String(d[f])));
        a.push(g2);
      }
    }
    return this.c = a.join("&");
  };
  function Nd2(a) {
    var b2 = new Pd2();
    b2.c = a.c;
    a.a && (b2.a = new Ed2(a.a), b2.b = a.b);
    return b2;
  }
  function ce2(a, b2) {
    b2 = String(b2);
    a.f && (b2 = b2.toLowerCase());
    return b2;
  }
  function Vd(a, b2) {
    b2 && !a.f && ($d(a), a.c = null, a.a.forEach(function(c, d) {
      var e = d.toLowerCase();
      d != e && (de2(this, d), be2(this, e, c));
    }, a));
    a.f = b2;
  }
  function fe2(a) {
    var b2 = [];
    ge2(new he2(), a, b2);
    return b2.join("");
  }
  function he2() {
  }
  function ge2(a, b2, c) {
    if (null == b2)
      c.push("null");
    else {
      if ("object" == typeof b2) {
        if (Array.isArray(b2)) {
          var d = b2;
          b2 = d.length;
          c.push("[");
          for (var e = "", f = 0; f < b2; f++)
            c.push(e), ge2(a, d[f], c), e = ",";
          c.push("]");
          return;
        }
        if (b2 instanceof String || b2 instanceof Number || b2 instanceof Boolean)
          b2 = b2.valueOf();
        else {
          c.push("{");
          e = "";
          for (d in b2)
            Object.prototype.hasOwnProperty.call(b2, d) && (f = b2[d], "function" != typeof f && (c.push(e), ie2(d, c), c.push(":"), ge2(a, f, c), e = ","));
          c.push("}");
          return;
        }
      }
      switch (typeof b2) {
        case "string":
          ie2(b2, c);
          break;
        case "number":
          c.push(isFinite(b2) && !isNaN(b2) ? String(b2) : "null");
          break;
        case "boolean":
          c.push(String(b2));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b2);
      }
    }
  }
  var je2 = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\u000b" }, ke2 = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
  function ie2(a, b2) {
    b2.push('"', a.replace(ke2, function(c) {
      var d = je2[c];
      d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), je2[c] = d);
      return d;
    }), '"');
  }
  function le2() {
    var a = K2();
    return Tb2 && !!dc2 && 11 == dc2 || /Edge\/\d+/.test(a);
  }
  function me2() {
    return l.window && l.window.location.href || self && self.location && self.location.href || "";
  }
  function ne2(a, b2) {
    b2 = b2 || l.window;
    var c = "about:blank";
    a && (c = Db2(Fb2(a)));
    b2.location.href = c;
  }
  function oe2(a, b2) {
    var c = [], d;
    for (d in a)
      d in b2 ? typeof a[d] != typeof b2[d] ? c.push(d) : "object" == typeof a[d] && null != a[d] && null != b2[d] ? 0 < oe2(a[d], b2[d]).length && c.push(d) : a[d] !== b2[d] && c.push(d) : c.push(d);
    for (d in b2)
      d in a || c.push(d);
    return c;
  }
  function pe2() {
    var a = K2();
    a = qe2(a) != re2 ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
    return a && 30 > a ? false : !Tb2 || !dc2 || 9 < dc2;
  }
  function se2(a) {
    a = (a || K2()).toLowerCase();
    return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? true : false;
  }
  function te2(a) {
    a = a || l.window;
    try {
      a.close();
    } catch (b2) {
    }
  }
  function ue2(a, b2, c) {
    var d = Math.floor(1e9 * Math.random()).toString();
    b2 = b2 || 500;
    c = c || 600;
    var e = (window.screen.availHeight - c) / 2, f = (window.screen.availWidth - b2) / 2;
    b2 = { width: b2, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: true, resizable: true, statusbar: true, toolbar: false };
    c = K2().toLowerCase();
    d && (b2.target = d, x2(c, "crios/") && (b2.target = "_blank"));
    qe2(K2()) == ve2 && (a = a || "http://localhost", b2.scrollbars = true);
    c = a || "";
    (a = b2) || (a = {});
    d = window;
    b2 = c instanceof Ab2 ? c : Fb2("undefined" != typeof c.href ? c.href : String(c));
    c = a.target || c.target;
    e = [];
    for (g2 in a)
      switch (g2) {
        case "width":
        case "height":
        case "top":
        case "left":
          e.push(g2 + "=" + a[g2]);
          break;
        case "target":
        case "noopener":
        case "noreferrer":
          break;
        default:
          e.push(g2 + "=" + (a[g2] ? 1 : 0));
      }
    var g2 = e.join(",");
    if ((y2("iPhone") && !y2("iPod") && !y2("iPad") || y2("iPad") || y2("iPod")) && d.navigator && d.navigator.standalone && c && "_self" != c)
      g2 = jc2(document, "A"), nb2(g2, "HTMLAnchorElement"), b2 instanceof Ab2 || b2 instanceof Ab2 || (b2 = "object" == typeof b2 && b2.sa ? b2.ra() : String(b2), Eb2.test(b2) || (b2 = "about:invalid#zClosurez"), b2 = new Ab2(Bb2, b2)), g2.href = Db2(b2), g2.setAttribute("target", c), a.noreferrer && g2.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", true, true, d, 1), g2.dispatchEvent(a), g2 = {};
    else if (a.noreferrer) {
      if (g2 = d.open("", c, g2), a = Db2(b2), g2 && (Vb2 && x2(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), g2.opener = null, a = Jb2('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Ob2(a) + '">'), d = g2.document))
        d.write(Ib2(a)), d.close();
    } else
      (g2 = d.open(Db2(b2), c, g2)) && a.noopener && (g2.opener = null);
    if (g2)
      try {
        g2.focus();
      } catch (h) {
      }
    return g2;
  }
  function we2(a) {
    return new C2(function(b2) {
      function c() {
        Ad2(2e3).then(function() {
          if (!a || a.closed)
            b2();
          else
            return c();
        });
      }
      return c();
    });
  }
  var xe2 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, ye2 = /^[^@]+@[^@]+$/;
  function ze2() {
    var a = null;
    return new C2(function(b2) {
      "complete" == l.document.readyState ? b2() : (a = function() {
        b2();
      }, kd2(window, "load", a));
    }).s(function(b2) {
      G2(window, "load", a);
      throw b2;
    });
  }
  function Ae2() {
    return Be2(void 0) ? ze2().then(function() {
      return new C2(function(a, b2) {
        var c = l.document, d = setTimeout(function() {
          b2(Error("Cordova framework is not ready."));
        }, 1e3);
        c.addEventListener("deviceready", function() {
          clearTimeout(d);
          a();
        }, false);
      });
    }) : E2(Error("Cordova must run in an Android or iOS file scheme."));
  }
  function Be2(a) {
    a = a || K2();
    return !("file:" !== Ce2() && "ionic:" !== Ce2() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
  }
  function De2() {
    var a = l.window;
    try {
      return !(!a || a == a.top);
    } catch (b2) {
      return false;
    }
  }
  function Ee2() {
    return "undefined" !== typeof l.WorkerGlobalScope && "function" === typeof l.importScripts;
  }
  function Fe2() {
    return firebase$1$1.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase$1$1.INTERNAL.hasOwnProperty("node") ? "Node" : Ee2() ? "Worker" : "Browser";
  }
  function Ge2() {
    var a = Fe2();
    return "ReactNative" === a || "Node" === a;
  }
  function He2() {
    for (var a = 50, b2 = []; 0 < a; )
      b2.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
    return b2.join("");
  }
  var ve2 = "Firefox", re2 = "Chrome";
  function qe2(a) {
    var b2 = a.toLowerCase();
    if (x2(b2, "opera/") || x2(b2, "opr/") || x2(b2, "opios/"))
      return "Opera";
    if (x2(b2, "iemobile"))
      return "IEMobile";
    if (x2(b2, "msie") || x2(b2, "trident/"))
      return "IE";
    if (x2(b2, "edge/"))
      return "Edge";
    if (x2(b2, "firefox/"))
      return ve2;
    if (x2(b2, "silk/"))
      return "Silk";
    if (x2(b2, "blackberry"))
      return "Blackberry";
    if (x2(b2, "webos"))
      return "Webos";
    if (!x2(b2, "safari/") || x2(b2, "chrome/") || x2(b2, "crios/") || x2(b2, "android"))
      if (!x2(b2, "chrome/") && !x2(b2, "crios/") || x2(b2, "edge/")) {
        if (x2(b2, "android"))
          return "Android";
        if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length)
          return a[1];
      } else
        return re2;
    else
      return "Safari";
    return "Other";
  }
  var Ie2 = { ld: "FirebaseCore-web", nd: "FirebaseUI-web" };
  function Je2(a, b2) {
    b2 = b2 || [];
    var c = [], d = {}, e;
    for (e in Ie2)
      d[Ie2[e]] = true;
    for (e = 0; e < b2.length; e++)
      "undefined" !== typeof d[b2[e]] && (delete d[b2[e]], c.push(b2[e]));
    c.sort();
    b2 = c;
    b2.length || (b2 = ["FirebaseCore-web"]);
    c = Fe2();
    "Browser" === c ? (d = K2(), c = qe2(d)) : "Worker" === c && (d = K2(), c = qe2(d) + "-" + c);
    return c + "/JsCore/" + a + "/" + b2.join(",");
  }
  function K2() {
    return l.navigator && l.navigator.userAgent || "";
  }
  function L2(a, b2) {
    a = a.split(".");
    b2 = b2 || l;
    for (var c = 0; c < a.length && "object" == typeof b2 && null != b2; c++)
      b2 = b2[a[c]];
    c != a.length && (b2 = void 0);
    return b2;
  }
  function Ke2() {
    try {
      var a = l.localStorage, b2 = Le2();
      if (a)
        return a.setItem(b2, "1"), a.removeItem(b2), le2() ? !!l.indexedDB : true;
    } catch (c) {
      return Ee2() && !!l.indexedDB;
    }
    return false;
  }
  function Me2() {
    return (Ne2() || "chrome-extension:" === Ce2() || Be2()) && !Ge2() && Ke2() && !Ee2();
  }
  function Ne2() {
    return "http:" === Ce2() || "https:" === Ce2();
  }
  function Ce2() {
    return l.location && l.location.protocol || null;
  }
  function Oe2(a) {
    a = a || K2();
    return se2(a) || qe2(a) == ve2 ? false : true;
  }
  function Pe2(a) {
    return "undefined" === typeof a ? null : fe2(a);
  }
  function Qe2(a) {
    var b2 = {}, c;
    for (c in a)
      a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b2[c] = a[c]);
    return b2;
  }
  function Re2(a) {
    if (null !== a)
      return JSON.parse(a);
  }
  function Le2(a) {
    return a ? a : Math.floor(1e9 * Math.random()).toString();
  }
  function Se2(a) {
    a = a || K2();
    return "Safari" == qe2(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? false : true;
  }
  function Te2() {
    var a = l.___jsl;
    if (a && a.H) {
      for (var b2 in a.H)
        if (a.H[b2].r = a.H[b2].r || [], a.H[b2].L = a.H[b2].L || [], a.H[b2].r = a.H[b2].L.concat(), a.CP)
          for (var c = 0; c < a.CP.length; c++)
            a.CP[c] = null;
    }
  }
  function Ue2(a, b2) {
    if (a > b2)
      throw Error("Short delay should be less than long delay!");
    this.a = a;
    this.c = b2;
    a = K2();
    b2 = Fe2();
    this.b = se2(a) || "ReactNative" === b2;
  }
  Ue2.prototype.get = function() {
    var a = l.navigator;
    return (a && "boolean" === typeof a.onLine && (Ne2() || "chrome-extension:" === Ce2() || "undefined" !== typeof a.connection) ? a.onLine : 1) ? this.b ? this.c : this.a : Math.min(5e3, this.a);
  };
  function Ve2() {
    var a = l.document;
    return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : true;
  }
  function We2() {
    var a = l.document, b2 = null;
    return Ve2() || !a ? D2() : new C2(function(c) {
      b2 = function() {
        Ve2() && (a.removeEventListener("visibilitychange", b2, false), c());
      };
      a.addEventListener("visibilitychange", b2, false);
    }).s(function(c) {
      a.removeEventListener("visibilitychange", b2, false);
      throw c;
    });
  }
  function Xe2(a) {
    "undefined" !== typeof console && "function" === typeof console.warn && console.warn(a);
  }
  function Ye2(a) {
    try {
      var b2 = new Date(parseInt(a, 10));
      if (!isNaN(b2.getTime()) && !/[^0-9]/.test(a))
        return b2.toUTCString();
    } catch (c) {
    }
    return null;
  }
  function Ze2() {
    return !(!L2("fireauth.oauthhelper", l) && !L2("fireauth.iframe", l));
  }
  function $e2() {
    var a = l.navigator;
    return a && a.serviceWorker && a.serviceWorker.controller || null;
  }
  function af() {
    var a = l.navigator;
    return a && a.serviceWorker ? D2().then(function() {
      return a.serviceWorker.ready;
    }).then(function(b2) {
      return b2.active || null;
    }).s(function() {
      return null;
    }) : D2(null);
  }
  var bf = {};
  function cf(a) {
    bf[a] || (bf[a] = true, Xe2(a));
  }
  var df;
  try {
    var ef = {};
    Object.defineProperty(ef, "abcd", { configurable: true, enumerable: true, value: 1 });
    Object.defineProperty(ef, "abcd", { configurable: true, enumerable: true, value: 2 });
    df = 2 == ef.abcd;
  } catch (a) {
    df = false;
  }
  function M2(a, b2, c) {
    df ? Object.defineProperty(a, b2, { configurable: true, enumerable: true, value: c }) : a[b2] = c;
  }
  function N2(a, b2) {
    if (b2)
      for (var c in b2)
        b2.hasOwnProperty(c) && M2(a, c, b2[c]);
  }
  function ff(a) {
    var b2 = {};
    N2(b2, a);
    return b2;
  }
  function gf(a) {
    var b2 = {}, c;
    for (c in a)
      a.hasOwnProperty(c) && (b2[c] = a[c]);
    return b2;
  }
  function hf(a, b2) {
    if (!b2 || !b2.length)
      return true;
    if (!a)
      return false;
    for (var c = 0; c < b2.length; c++) {
      var d = a[b2[c]];
      if (void 0 === d || null === d || "" === d)
        return false;
    }
    return true;
  }
  function jf(a) {
    var b2 = a;
    if ("object" == typeof a && null != a) {
      b2 = "length" in a ? [] : {};
      for (var c in a)
        M2(b2, c, jf(a[c]));
    }
    return b2;
  }
  function kf(a) {
    var b2 = a && (a[lf] ? "phone" : null);
    if (b2 && a && a[mf]) {
      M2(this, "uid", a[mf]);
      M2(this, "displayName", a[nf] || null);
      var c = null;
      a[of] && (c = new Date(a[of]).toUTCString());
      M2(this, "enrollmentTime", c);
      M2(this, "factorId", b2);
    } else
      throw new t("internal-error", "Internal assert: invalid MultiFactorInfo object");
  }
  kf.prototype.w = function() {
    return { uid: this.uid, displayName: this.displayName, factorId: this.factorId, enrollmentTime: this.enrollmentTime };
  };
  function pf(a) {
    try {
      var b2 = new qf(a);
    } catch (c) {
      b2 = null;
    }
    return b2;
  }
  var nf = "displayName", of = "enrolledAt", mf = "mfaEnrollmentId", lf = "phoneInfo";
  function qf(a) {
    kf.call(this, a);
    M2(this, "phoneNumber", a[lf]);
  }
  r2(qf, kf);
  qf.prototype.w = function() {
    var a = qf.$a.w.call(this);
    a.phoneNumber = this.phoneNumber;
    return a;
  };
  function rf(a) {
    var b2 = {}, c = a[sf], d = a[tf], e = a[uf];
    a = pf(a[vf]);
    if (!e || e != wf && e != xf && !c || e == xf && !d || e == yf && !a)
      throw Error("Invalid checkActionCode response!");
    e == xf ? (b2[zf] = c || null, b2[Af] = c || null, b2[Bf] = d) : (b2[zf] = d || null, b2[Af] = d || null, b2[Bf] = c || null);
    b2[Cf] = a || null;
    M2(this, Df, e);
    M2(this, Ef, jf(b2));
  }
  var yf = "REVERT_SECOND_FACTOR_ADDITION", wf = "EMAIL_SIGNIN", xf = "VERIFY_AND_CHANGE_EMAIL", sf = "email", vf = "mfaInfo", tf = "newEmail", uf = "requestType", Bf = "email", zf = "fromEmail", Cf = "multiFactorInfo", Af = "previousEmail", Ef = "data", Df = "operation";
  function Ff(a) {
    a = J2(a);
    var b2 = Xd(a, Gf) || null, c = Xd(a, Hf) || null, d = Xd(a, If) || null;
    d = d ? Jf[d] || null : null;
    if (!b2 || !c || !d)
      throw new t("argument-error", Gf + ", " + Hf + "and " + If + " are required in a valid action code URL.");
    N2(this, { apiKey: b2, operation: d, code: c, continueUrl: Xd(a, Kf) || null, languageCode: Xd(a, Lf) || null, tenantId: Xd(a, Mf) || null });
  }
  var Gf = "apiKey", Hf = "oobCode", Kf = "continueUrl", Lf = "languageCode", If = "mode", Mf = "tenantId", Jf = { recoverEmail: "RECOVER_EMAIL", resetPassword: "PASSWORD_RESET", revertSecondFactorAddition: yf, signIn: wf, verifyAndChangeEmail: xf, verifyEmail: "VERIFY_EMAIL" };
  function Nf(a) {
    try {
      return new Ff(a);
    } catch (b2) {
      return null;
    }
  }
  function Of(a) {
    var b2 = a[Pf];
    if ("undefined" === typeof b2)
      throw new t("missing-continue-uri");
    if ("string" !== typeof b2 || "string" === typeof b2 && !b2.length)
      throw new t("invalid-continue-uri");
    this.h = b2;
    this.b = this.a = null;
    this.g = false;
    var c = a[Qf];
    if (c && "object" === typeof c) {
      b2 = c[Rf];
      var d = c[Sf];
      c = c[Tf];
      if ("string" === typeof b2 && b2.length) {
        this.a = b2;
        if ("undefined" !== typeof d && "boolean" !== typeof d)
          throw new t("argument-error", Sf + " property must be a boolean when specified.");
        this.g = !!d;
        if ("undefined" !== typeof c && ("string" !== typeof c || "string" === typeof c && !c.length))
          throw new t("argument-error", Tf + " property must be a non empty string when specified.");
        this.b = c || null;
      } else {
        if ("undefined" !== typeof b2)
          throw new t("argument-error", Rf + " property must be a non empty string when specified.");
        if ("undefined" !== typeof d || "undefined" !== typeof c)
          throw new t("missing-android-pkg-name");
      }
    } else if ("undefined" !== typeof c)
      throw new t("argument-error", Qf + " property must be a non null object when specified.");
    this.f = null;
    if ((b2 = a[Uf]) && "object" === typeof b2)
      if (b2 = b2[Vf], "string" === typeof b2 && b2.length)
        this.f = b2;
      else {
        if ("undefined" !== typeof b2)
          throw new t("argument-error", Vf + " property must be a non empty string when specified.");
      }
    else if ("undefined" !== typeof b2)
      throw new t("argument-error", Uf + " property must be a non null object when specified.");
    b2 = a[Wf];
    if ("undefined" !== typeof b2 && "boolean" !== typeof b2)
      throw new t("argument-error", Wf + " property must be a boolean when specified.");
    this.c = !!b2;
    a = a[Xf];
    if ("undefined" !== typeof a && ("string" !== typeof a || "string" === typeof a && !a.length))
      throw new t("argument-error", Xf + " property must be a non empty string when specified.");
    this.i = a || null;
  }
  var Qf = "android", Xf = "dynamicLinkDomain", Wf = "handleCodeInApp", Uf = "iOS", Pf = "url", Sf = "installApp", Tf = "minimumVersion", Rf = "packageName", Vf = "bundleId";
  function Yf(a) {
    var b2 = {};
    b2.continueUrl = a.h;
    b2.canHandleCodeInApp = a.c;
    if (b2.androidPackageName = a.a)
      b2.androidMinimumVersion = a.b, b2.androidInstallApp = a.g;
    b2.iOSBundleId = a.f;
    b2.dynamicLinkDomain = a.i;
    for (var c in b2)
      null === b2[c] && delete b2[c];
    return b2;
  }
  function Zf(a) {
    return Pa(a, function(b2) {
      b2 = b2.toString(16);
      return 1 < b2.length ? b2 : "0" + b2;
    }).join("");
  }
  var $f = null;
  function ag(a) {
    var b2 = "";
    bg(a, function(c) {
      b2 += String.fromCharCode(c);
    });
    return b2;
  }
  function bg(a, b2) {
    function c(m) {
      for (; d < a.length; ) {
        var p2 = a.charAt(d++), v2 = $f[p2];
        if (null != v2)
          return v2;
        if (!/^[\s\xa0]*$/.test(p2))
          throw Error("Unknown base64 encoding at char: " + p2);
      }
      return m;
    }
    cg();
    for (var d = 0; ; ) {
      var e = c(-1), f = c(0), g2 = c(64), h = c(64);
      if (64 === h && -1 === e)
        break;
      b2(e << 2 | f >> 4);
      64 != g2 && (b2(f << 4 & 240 | g2 >> 2), 64 != h && b2(g2 << 6 & 192 | h));
    }
  }
  function cg() {
    if (!$f) {
      $f = {};
      for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b2 = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
        for (var d = a.concat(b2[c].split("")), e = 0; e < d.length; e++) {
          var f = d[e];
          void 0 === $f[f] && ($f[f] = e);
        }
    }
  }
  function dg(a) {
    var b2 = eg(a);
    if (!(b2 && b2.sub && b2.iss && b2.aud && b2.exp))
      throw Error("Invalid JWT");
    this.g = a;
    this.c = b2.exp;
    this.h = b2.sub;
    this.a = b2.provider_id || b2.firebase && b2.firebase.sign_in_provider || null;
    this.f = b2.firebase && b2.firebase.tenant || null;
    this.b = !!b2.is_anonymous || "anonymous" == this.a;
  }
  dg.prototype.S = function() {
    return this.f;
  };
  dg.prototype.i = function() {
    return this.b;
  };
  dg.prototype.toString = function() {
    return this.g;
  };
  function fg(a) {
    try {
      return new dg(a);
    } catch (b2) {
      return null;
    }
  }
  function eg(a) {
    if (!a)
      return null;
    a = a.split(".");
    if (3 != a.length)
      return null;
    a = a[1];
    for (var b2 = (4 - a.length % 4) % 4, c = 0; c < b2; c++)
      a += ".";
    try {
      return JSON.parse(ag(a));
    } catch (d) {
    }
    return null;
  }
  var gg = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "), hg = ["client_id", "response_type", "scope", "redirect_uri", "state"], ig = { md: { Ja: "locale", ua: 700, ta: 600, fa: "facebook.com", Wa: hg }, od: { Ja: null, ua: 500, ta: 750, fa: "github.com", Wa: hg }, pd: { Ja: "hl", ua: 515, ta: 680, fa: "google.com", Wa: hg }, vd: { Ja: "lang", ua: 485, ta: 705, fa: "twitter.com", Wa: gg }, jd: { Ja: "locale", ua: 640, ta: 600, fa: "apple.com", Wa: [] } };
  function jg(a) {
    for (var b2 in ig)
      if (ig[b2].fa == a)
        return ig[b2];
    return null;
  }
  function kg(a) {
    var b2 = {};
    b2["facebook.com"] = lg;
    b2["google.com"] = mg;
    b2["github.com"] = ng;
    b2["twitter.com"] = og;
    var c = a && a[pg];
    try {
      if (c)
        return b2[c] ? new b2[c](a) : new qg(a);
      if ("undefined" !== typeof a[rg])
        return new sg(a);
    } catch (d) {
    }
    return null;
  }
  var rg = "idToken", pg = "providerId";
  function sg(a) {
    var b2 = a[pg];
    if (!b2 && a[rg]) {
      var c = fg(a[rg]);
      c && c.a && (b2 = c.a);
    }
    if (!b2)
      throw Error("Invalid additional user info!");
    if ("anonymous" == b2 || "custom" == b2)
      b2 = null;
    c = false;
    "undefined" !== typeof a.isNewUser ? c = !!a.isNewUser : "identitytoolkit#SignupNewUserResponse" === a.kind && (c = true);
    M2(this, "providerId", b2);
    M2(this, "isNewUser", c);
  }
  function qg(a) {
    sg.call(this, a);
    a = Re2(a.rawUserInfo || "{}");
    M2(this, "profile", jf(a || {}));
  }
  r2(qg, sg);
  function lg(a) {
    qg.call(this, a);
    if ("facebook.com" != this.providerId)
      throw Error("Invalid provider ID!");
  }
  r2(lg, qg);
  function ng(a) {
    qg.call(this, a);
    if ("github.com" != this.providerId)
      throw Error("Invalid provider ID!");
    M2(this, "username", this.profile && this.profile.login || null);
  }
  r2(ng, qg);
  function mg(a) {
    qg.call(this, a);
    if ("google.com" != this.providerId)
      throw Error("Invalid provider ID!");
  }
  r2(mg, qg);
  function og(a) {
    qg.call(this, a);
    if ("twitter.com" != this.providerId)
      throw Error("Invalid provider ID!");
    M2(this, "username", a.screenName || null);
  }
  r2(og, qg);
  function tg(a) {
    var b2 = J2(a), c = Xd(b2, "link"), d = Xd(J2(c), "link");
    b2 = Xd(b2, "deep_link_id");
    return Xd(J2(b2), "link") || b2 || d || c || a;
  }
  function ug(a, b2) {
    if (!a && !b2)
      throw new t("internal-error", "Internal assert: no raw session string available");
    if (a && b2)
      throw new t("internal-error", "Internal assert: unable to determine the session type");
    this.a = a || null;
    this.b = b2 || null;
    this.type = this.a ? vg : wg;
  }
  var vg = "enroll", wg = "signin";
  ug.prototype.Ha = function() {
    return this.a ? D2(this.a) : D2(this.b);
  };
  ug.prototype.w = function() {
    return this.type == vg ? { multiFactorSession: { idToken: this.a } } : { multiFactorSession: { pendingCredential: this.b } };
  };
  function xg() {
  }
  xg.prototype.ja = function() {
  };
  xg.prototype.b = function() {
  };
  xg.prototype.c = function() {
  };
  xg.prototype.w = function() {
  };
  function yg(a, b2) {
    return a.then(function(c) {
      if (c[zg]) {
        var d = fg(c[zg]);
        if (!d || b2 != d.h)
          throw new t("user-mismatch");
        return c;
      }
      throw new t("user-mismatch");
    }).s(function(c) {
      throw c && c.code && c.code == va2 + "user-not-found" ? new t("user-mismatch") : c;
    });
  }
  function Ag(a, b2) {
    if (b2)
      this.a = b2;
    else
      throw new t("internal-error", "failed to construct a credential");
    M2(this, "providerId", a);
    M2(this, "signInMethod", a);
  }
  Ag.prototype.ja = function(a) {
    return Bg(a, Cg(this));
  };
  Ag.prototype.b = function(a, b2) {
    var c = Cg(this);
    c.idToken = b2;
    return Dg(a, c);
  };
  Ag.prototype.c = function(a, b2) {
    return yg(Eg(a, Cg(this)), b2);
  };
  function Cg(a) {
    return { pendingToken: a.a, requestUri: "http://localhost" };
  }
  Ag.prototype.w = function() {
    return { providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a };
  };
  function Fg(a) {
    if (a && a.providerId && a.signInMethod && 0 == a.providerId.indexOf("saml.") && a.pendingToken)
      try {
        return new Ag(a.providerId, a.pendingToken);
      } catch (b2) {
      }
    return null;
  }
  function Gg(a, b2, c) {
    this.a = null;
    if (b2.idToken || b2.accessToken)
      b2.idToken && M2(this, "idToken", b2.idToken), b2.accessToken && M2(this, "accessToken", b2.accessToken), b2.nonce && !b2.pendingToken && M2(this, "nonce", b2.nonce), b2.pendingToken && (this.a = b2.pendingToken);
    else if (b2.oauthToken && b2.oauthTokenSecret)
      M2(this, "accessToken", b2.oauthToken), M2(this, "secret", b2.oauthTokenSecret);
    else
      throw new t("internal-error", "failed to construct a credential");
    M2(this, "providerId", a);
    M2(this, "signInMethod", c);
  }
  Gg.prototype.ja = function(a) {
    return Bg(a, Hg(this));
  };
  Gg.prototype.b = function(a, b2) {
    var c = Hg(this);
    c.idToken = b2;
    return Dg(a, c);
  };
  Gg.prototype.c = function(a, b2) {
    var c = Hg(this);
    return yg(Eg(a, c), b2);
  };
  function Hg(a) {
    var b2 = {};
    a.idToken && (b2.id_token = a.idToken);
    a.accessToken && (b2.access_token = a.accessToken);
    a.secret && (b2.oauth_token_secret = a.secret);
    b2.providerId = a.providerId;
    a.nonce && !a.a && (b2.nonce = a.nonce);
    b2 = { postBody: ae2(b2).toString(), requestUri: "http://localhost" };
    a.a && (delete b2.postBody, b2.pendingToken = a.a);
    return b2;
  }
  Gg.prototype.w = function() {
    var a = { providerId: this.providerId, signInMethod: this.signInMethod };
    this.idToken && (a.oauthIdToken = this.idToken);
    this.accessToken && (a.oauthAccessToken = this.accessToken);
    this.secret && (a.oauthTokenSecret = this.secret);
    this.nonce && (a.nonce = this.nonce);
    this.a && (a.pendingToken = this.a);
    return a;
  };
  function Ig(a) {
    if (a && a.providerId && a.signInMethod) {
      var b2 = { idToken: a.oauthIdToken, accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken, oauthTokenSecret: a.oauthTokenSecret, oauthToken: a.oauthTokenSecret && a.oauthAccessToken, nonce: a.nonce, pendingToken: a.pendingToken };
      try {
        return new Gg(a.providerId, b2, a.signInMethod);
      } catch (c) {
      }
    }
    return null;
  }
  function Jg(a, b2) {
    this.Pc = b2 || [];
    N2(this, { providerId: a, isOAuthProvider: true });
    this.Hb = {};
    this.ob = (jg(a) || {}).Ja || null;
    this.nb = null;
  }
  Jg.prototype.Ka = function(a) {
    this.Hb = lb2(a);
    return this;
  };
  function Kg(a) {
    if ("string" !== typeof a || 0 != a.indexOf("saml."))
      throw new t("argument-error", 'SAML provider IDs must be prefixed with "saml."');
    Jg.call(this, a, []);
  }
  r2(Kg, Jg);
  function Lg(a) {
    Jg.call(this, a, hg);
    this.a = [];
  }
  r2(Lg, Jg);
  Lg.prototype.Ca = function(a) {
    Ta2(this.a, a) || this.a.push(a);
    return this;
  };
  Lg.prototype.Pb = function() {
    return Xa2(this.a);
  };
  Lg.prototype.credential = function(a, b2) {
    var c;
    n2(a) ? c = { idToken: a.idToken || null, accessToken: a.accessToken || null, nonce: a.rawNonce || null } : c = { idToken: a || null, accessToken: b2 || null };
    if (!c.idToken && !c.accessToken)
      throw new t("argument-error", "credential failed: must provide the ID token and/or the access token.");
    return new Gg(this.providerId, c, this.providerId);
  };
  function Mg() {
    Lg.call(this, "facebook.com");
  }
  r2(Mg, Lg);
  M2(Mg, "PROVIDER_ID", "facebook.com");
  M2(Mg, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");
  function Ng(a) {
    if (!a)
      throw new t("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    var b2 = a;
    n2(a) && (b2 = a.accessToken);
    return new Mg().credential({ accessToken: b2 });
  }
  function Og() {
    Lg.call(this, "github.com");
  }
  r2(Og, Lg);
  M2(Og, "PROVIDER_ID", "github.com");
  M2(Og, "GITHUB_SIGN_IN_METHOD", "github.com");
  function Pg(a) {
    if (!a)
      throw new t("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    var b2 = a;
    n2(a) && (b2 = a.accessToken);
    return new Og().credential({ accessToken: b2 });
  }
  function Qg() {
    Lg.call(this, "google.com");
    this.Ca("profile");
  }
  r2(Qg, Lg);
  M2(Qg, "PROVIDER_ID", "google.com");
  M2(Qg, "GOOGLE_SIGN_IN_METHOD", "google.com");
  function Rg(a, b2) {
    var c = a;
    n2(a) && (c = a.idToken, b2 = a.accessToken);
    return new Qg().credential({ idToken: c, accessToken: b2 });
  }
  function Sg() {
    Jg.call(this, "twitter.com", gg);
  }
  r2(Sg, Jg);
  M2(Sg, "PROVIDER_ID", "twitter.com");
  M2(Sg, "TWITTER_SIGN_IN_METHOD", "twitter.com");
  function Tg(a, b2) {
    var c = a;
    n2(c) || (c = { oauthToken: a, oauthTokenSecret: b2 });
    if (!c.oauthToken || !c.oauthTokenSecret)
      throw new t("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
    return new Gg("twitter.com", c, "twitter.com");
  }
  function Ug(a, b2, c) {
    this.a = a;
    this.f = b2;
    M2(this, "providerId", "password");
    M2(this, "signInMethod", c === Vg.EMAIL_LINK_SIGN_IN_METHOD ? Vg.EMAIL_LINK_SIGN_IN_METHOD : Vg.EMAIL_PASSWORD_SIGN_IN_METHOD);
  }
  Ug.prototype.ja = function(a) {
    return this.signInMethod == Vg.EMAIL_LINK_SIGN_IN_METHOD ? O2(a, Wg, { email: this.a, oobCode: this.f }) : O2(a, Xg, { email: this.a, password: this.f });
  };
  Ug.prototype.b = function(a, b2) {
    return this.signInMethod == Vg.EMAIL_LINK_SIGN_IN_METHOD ? O2(a, Yg, { idToken: b2, email: this.a, oobCode: this.f }) : O2(a, Zg, { idToken: b2, email: this.a, password: this.f });
  };
  Ug.prototype.c = function(a, b2) {
    return yg(this.ja(a), b2);
  };
  Ug.prototype.w = function() {
    return { email: this.a, password: this.f, signInMethod: this.signInMethod };
  };
  function $g(a) {
    return a && a.email && a.password ? new Ug(a.email, a.password, a.signInMethod) : null;
  }
  function Vg() {
    N2(this, { providerId: "password", isOAuthProvider: false });
  }
  function ah(a, b2) {
    b2 = bh(b2);
    if (!b2)
      throw new t("argument-error", "Invalid email link!");
    return new Ug(a, b2.code, Vg.EMAIL_LINK_SIGN_IN_METHOD);
  }
  function bh(a) {
    a = tg(a);
    return (a = Nf(a)) && a.operation === wf ? a : null;
  }
  N2(Vg, { PROVIDER_ID: "password" });
  N2(Vg, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" });
  N2(Vg, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" });
  function ch(a) {
    if (!(a.cb && a.bb || a.La && a.ea))
      throw new t("internal-error");
    this.a = a;
    M2(this, "providerId", "phone");
    this.fa = "phone";
    M2(this, "signInMethod", "phone");
  }
  ch.prototype.ja = function(a) {
    return a.eb(dh(this));
  };
  ch.prototype.b = function(a, b2) {
    var c = dh(this);
    c.idToken = b2;
    return O2(a, eh, c);
  };
  ch.prototype.c = function(a, b2) {
    var c = dh(this);
    c.operation = "REAUTH";
    a = O2(a, fh, c);
    return yg(a, b2);
  };
  ch.prototype.w = function() {
    var a = { providerId: "phone" };
    this.a.cb && (a.verificationId = this.a.cb);
    this.a.bb && (a.verificationCode = this.a.bb);
    this.a.La && (a.temporaryProof = this.a.La);
    this.a.ea && (a.phoneNumber = this.a.ea);
    return a;
  };
  function gh(a) {
    if (a && "phone" === a.providerId && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
      var b2 = {};
      w2(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(c) {
        a[c] && (b2[c] = a[c]);
      });
      return new ch(b2);
    }
    return null;
  }
  function dh(a) {
    return a.a.La && a.a.ea ? { temporaryProof: a.a.La, phoneNumber: a.a.ea } : { sessionInfo: a.a.cb, code: a.a.bb };
  }
  function hh(a) {
    try {
      this.a = a || firebase$1$1.auth();
    } catch (b2) {
      throw new t("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
    }
    N2(this, { providerId: "phone", isOAuthProvider: false });
  }
  hh.prototype.eb = function(a, b2) {
    var c = this.a.a;
    return D2(b2.verify()).then(function(d) {
      if ("string" !== typeof d)
        throw new t("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
      switch (b2.type) {
        case "recaptcha":
          var e = n2(a) ? a.session : null, f = n2(a) ? a.phoneNumber : a, g2;
          e && e.type == vg ? g2 = e.Ha().then(function(h) {
            return ih(c, { idToken: h, phoneEnrollmentInfo: { phoneNumber: f, recaptchaToken: d } });
          }) : e && e.type == wg ? g2 = e.Ha().then(function(h) {
            return jh(c, { mfaPendingCredential: h, mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid, phoneSignInInfo: { recaptchaToken: d } });
          }) : g2 = kh(c, { phoneNumber: f, recaptchaToken: d });
          return g2.then(function(h) {
            "function" === typeof b2.reset && b2.reset();
            return h;
          }, function(h) {
            "function" === typeof b2.reset && b2.reset();
            throw h;
          });
        default:
          throw new t("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
      }
    });
  };
  function lh(a, b2) {
    if (!a)
      throw new t("missing-verification-id");
    if (!b2)
      throw new t("missing-verification-code");
    return new ch({ cb: a, bb: b2 });
  }
  N2(hh, { PROVIDER_ID: "phone" });
  N2(hh, { PHONE_SIGN_IN_METHOD: "phone" });
  function mh(a) {
    if (a.temporaryProof && a.phoneNumber)
      return new ch({ La: a.temporaryProof, ea: a.phoneNumber });
    var b2 = a && a.providerId;
    if (!b2 || "password" === b2)
      return null;
    var c = a && a.oauthAccessToken, d = a && a.oauthTokenSecret, e = a && a.nonce, f = a && a.oauthIdToken, g2 = a && a.pendingToken;
    try {
      switch (b2) {
        case "google.com":
          return Rg(f, c);
        case "facebook.com":
          return Ng(c);
        case "github.com":
          return Pg(c);
        case "twitter.com":
          return Tg(c, d);
        default:
          return c || d || f || g2 ? g2 ? 0 == b2.indexOf("saml.") ? new Ag(b2, g2) : new Gg(b2, {
            pendingToken: g2,
            idToken: a.oauthIdToken,
            accessToken: a.oauthAccessToken
          }, b2) : new Lg(b2).credential({ idToken: f, accessToken: c, rawNonce: e }) : null;
      }
    } catch (h) {
      return null;
    }
  }
  function nh(a) {
    if (!a.isOAuthProvider)
      throw new t("invalid-oauth-provider");
  }
  function oh(a, b2, c, d, e, f, g2) {
    this.c = a;
    this.b = b2 || null;
    this.g = c || null;
    this.f = d || null;
    this.i = f || null;
    this.h = g2 || null;
    this.a = e || null;
    if (this.g || this.a) {
      if (this.g && this.a)
        throw new t("invalid-auth-event");
      if (this.g && !this.f)
        throw new t("invalid-auth-event");
    } else
      throw new t("invalid-auth-event");
  }
  oh.prototype.getUid = function() {
    var a = [];
    a.push(this.c);
    this.b && a.push(this.b);
    this.f && a.push(this.f);
    this.h && a.push(this.h);
    return a.join("-");
  };
  oh.prototype.S = function() {
    return this.h;
  };
  oh.prototype.w = function() {
    return { type: this.c, eventId: this.b, urlResponse: this.g, sessionId: this.f, postBody: this.i, tenantId: this.h, error: this.a && this.a.w() };
  };
  function ph(a) {
    a = a || {};
    return a.type ? new oh(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && ya2(a.error), a.postBody, a.tenantId) : null;
  }
  function qh() {
    this.b = null;
    this.a = [];
  }
  var rh = null;
  function sh(a) {
    var b2 = rh;
    b2.a.push(a);
    b2.b || (b2.b = function(c) {
      for (var d = 0; d < b2.a.length; d++)
        b2.a[d](c);
    }, a = L2("universalLinks.subscribe", l), "function" === typeof a && a(null, b2.b));
  }
  function th(a) {
    var b2 = "unauthorized-domain", c = void 0, d = J2(a);
    a = d.a;
    d = d.f;
    "chrome-extension" == d ? c = Nb2("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = Nb2("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b2 = "operation-not-supported-in-this-environment";
    t.call(this, b2, c);
  }
  r2(th, t);
  function uh(a, b2, c) {
    t.call(this, a, c);
    a = b2 || {};
    a.Ib && M2(this, "email", a.Ib);
    a.ea && M2(this, "phoneNumber", a.ea);
    a.credential && M2(this, "credential", a.credential);
    a.Yb && M2(this, "tenantId", a.Yb);
  }
  r2(uh, t);
  uh.prototype.w = function() {
    var a = { code: this.code, message: this.message };
    this.email && (a.email = this.email);
    this.phoneNumber && (a.phoneNumber = this.phoneNumber);
    this.tenantId && (a.tenantId = this.tenantId);
    var b2 = this.credential && this.credential.w();
    b2 && z2(a, b2);
    return a;
  };
  uh.prototype.toJSON = function() {
    return this.w();
  };
  function vh(a) {
    if (a.code) {
      var b2 = a.code || "";
      0 == b2.indexOf(va2) && (b2 = b2.substring(va2.length));
      var c = { credential: mh(a), Yb: a.tenantId };
      if (a.email)
        c.Ib = a.email;
      else if (a.phoneNumber)
        c.ea = a.phoneNumber;
      else if (!c.credential)
        return new t(b2, a.message || void 0);
      return new uh(b2, c, a.message);
    }
    return null;
  }
  function wh() {
  }
  wh.prototype.c = null;
  function xh(a) {
    return a.c || (a.c = a.b());
  }
  var yh;
  function zh() {
  }
  r2(zh, wh);
  zh.prototype.a = function() {
    var a = Ah(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  };
  zh.prototype.b = function() {
    var a = {};
    Ah(this) && (a[0] = true, a[1] = true);
    return a;
  };
  function Ah(a) {
    if (!a.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b2 = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b2.length; c++) {
        var d = b2[c];
        try {
          return new ActiveXObject(d), a.f = d;
        } catch (e) {
        }
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.f;
  }
  yh = new zh();
  function Bh() {
  }
  r2(Bh, wh);
  Bh.prototype.a = function() {
    var a = new XMLHttpRequest();
    if ("withCredentials" in a)
      return a;
    if ("undefined" != typeof XDomainRequest)
      return new Ch();
    throw Error("Unsupported browser");
  };
  Bh.prototype.b = function() {
    return {};
  };
  function Ch() {
    this.a = new XDomainRequest();
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseType = this.responseText = this.response = "";
    this.status = -1;
    this.statusText = "";
    this.a.onload = q2(this.pc, this);
    this.a.onerror = q2(this.Rb, this);
    this.a.onprogress = q2(this.qc, this);
    this.a.ontimeout = q2(this.uc, this);
  }
  k2 = Ch.prototype;
  k2.open = function(a, b2, c) {
    if (null != c && !c)
      throw Error("Only async requests are supported.");
    this.a.open(a, b2);
  };
  k2.send = function(a) {
    if (a)
      if ("string" == typeof a)
        this.a.send(a);
      else
        throw Error("Only string data is supported");
    else
      this.a.send();
  };
  k2.abort = function() {
    this.a.abort();
  };
  k2.setRequestHeader = function() {
  };
  k2.getResponseHeader = function(a) {
    return "content-type" == a.toLowerCase() ? this.a.contentType : "";
  };
  k2.pc = function() {
    this.status = 200;
    this.response = this.responseText = this.a.responseText;
    Dh(this, 4);
  };
  k2.Rb = function() {
    this.status = 500;
    this.response = this.responseText = "";
    Dh(this, 4);
  };
  k2.uc = function() {
    this.Rb();
  };
  k2.qc = function() {
    this.status = 200;
    Dh(this, 1);
  };
  function Dh(a, b2) {
    a.readyState = b2;
    if (a.onreadystatechange)
      a.onreadystatechange();
  }
  k2.getAllResponseHeaders = function() {
    return "content-type: " + this.a.contentType;
  };
  function Eh(a, b2, c) {
    this.reset(a, b2, c, void 0, void 0);
  }
  Eh.prototype.a = null;
  Eh.prototype.reset = function(a, b2, c, d, e) {
    delete this.a;
  };
  function Gh(a) {
    this.f = a;
    this.b = this.c = this.a = null;
  }
  function Hh(a, b2) {
    this.name = a;
    this.value = b2;
  }
  Hh.prototype.toString = function() {
    return this.name;
  };
  var Ih = new Hh("SEVERE", 1e3), Jh = new Hh("WARNING", 900), Kh = new Hh("CONFIG", 700), Lh = new Hh("FINE", 500);
  function Mh(a) {
    if (a.c)
      return a.c;
    if (a.a)
      return Mh(a.a);
    Ea2("Root logger has no level set.");
    return null;
  }
  Gh.prototype.log = function(a, b2, c) {
    if (a.value >= Mh(this).value)
      for (na2(b2) && (b2 = b2()), a = new Eh(a, String(b2), this.f), c && (a.a = c), c = this; c; )
        c = c.a;
  };
  var Nh = {}, Oh = null;
  function Ph(a) {
    Oh || (Oh = new Gh(""), Nh[""] = Oh, Oh.c = Kh);
    var b2;
    if (!(b2 = Nh[a])) {
      b2 = new Gh(a);
      var c = a.lastIndexOf("."), d = a.substr(c + 1);
      c = Ph(a.substr(0, c));
      c.b || (c.b = {});
      c.b[d] = b2;
      b2.a = c;
      Nh[a] = b2;
    }
    return b2;
  }
  function Qh(a, b2) {
    a && a.log(Lh, b2, void 0);
  }
  function Rh(a) {
    this.f = a;
  }
  r2(Rh, wh);
  Rh.prototype.a = function() {
    return new Sh(this.f);
  };
  Rh.prototype.b = function(a) {
    return function() {
      return a;
    };
  }({});
  function Sh(a) {
    H2.call(this);
    this.o = a;
    this.readyState = Th;
    this.status = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.i = new Headers();
    this.b = null;
    this.m = "GET";
    this.g = "";
    this.a = false;
    this.h = Ph("goog.net.FetchXmlHttp");
    this.l = this.c = this.f = null;
  }
  r2(Sh, H2);
  var Th = 0;
  k2 = Sh.prototype;
  k2.open = function(a, b2) {
    if (this.readyState != Th)
      throw this.abort(), Error("Error reopening a connection");
    this.m = a;
    this.g = b2;
    this.readyState = 1;
    Uh(this);
  };
  k2.send = function(a) {
    if (1 != this.readyState)
      throw this.abort(), Error("need to call open() first. ");
    this.a = true;
    var b2 = { headers: this.i, method: this.m, credentials: void 0, cache: void 0 };
    a && (b2.body = a);
    this.o.fetch(new Request(this.g, b2)).then(this.tc.bind(this), this.Ta.bind(this));
  };
  k2.abort = function() {
    this.response = this.responseText = "";
    this.i = new Headers();
    this.status = 0;
    this.c && this.c.cancel("Request was aborted.");
    1 <= this.readyState && this.a && 4 != this.readyState && (this.a = false, Vh(this, false));
    this.readyState = Th;
  };
  k2.tc = function(a) {
    this.a && (this.f = a, this.b || (this.b = a.headers, this.readyState = 2, Uh(this)), this.a && (this.readyState = 3, Uh(this), this.a && ("arraybuffer" === this.responseType ? a.arrayBuffer().then(this.rc.bind(this), this.Ta.bind(this)) : "undefined" !== typeof l.ReadableStream && "body" in a ? (this.response = this.responseText = "", this.c = a.body.getReader(), this.l = new TextDecoder(), Wh(this)) : a.text().then(this.sc.bind(this), this.Ta.bind(this)))));
  };
  function Wh(a) {
    a.c.read().then(a.oc.bind(a)).catch(a.Ta.bind(a));
  }
  k2.oc = function(a) {
    if (this.a) {
      var b2 = this.l.decode(a.value ? a.value : new Uint8Array(0), { stream: !a.done });
      b2 && (this.response = this.responseText += b2);
      a.done ? Vh(this, true) : Uh(this);
      3 == this.readyState && Wh(this);
    }
  };
  k2.sc = function(a) {
    this.a && (this.response = this.responseText = a, Vh(this, true));
  };
  k2.rc = function(a) {
    this.a && (this.response = a, Vh(this, true));
  };
  k2.Ta = function(a) {
    var b2 = this.h;
    b2 && b2.log(Jh, "Failed to fetch url " + this.g, a instanceof Error ? a : Error(a));
    this.a && Vh(this, true);
  };
  function Vh(a, b2) {
    b2 && a.f && (a.status = a.f.status, a.statusText = a.f.statusText);
    a.readyState = 4;
    a.f = null;
    a.c = null;
    a.l = null;
    Uh(a);
  }
  k2.setRequestHeader = function(a, b2) {
    this.i.append(a, b2);
  };
  k2.getResponseHeader = function(a) {
    return this.b ? this.b.get(a.toLowerCase()) || "" : ((a = this.h) && a.log(Jh, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "");
  };
  k2.getAllResponseHeaders = function() {
    if (!this.b) {
      var a = this.h;
      a && a.log(Jh, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0);
      return "";
    }
    a = [];
    for (var b2 = this.b.entries(), c = b2.next(); !c.done; )
      c = c.value, a.push(c[0] + ": " + c[1]), c = b2.next();
    return a.join("\r\n");
  };
  function Uh(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  function Xh(a) {
    H2.call(this);
    this.headers = new Ed2();
    this.O = a || null;
    this.c = false;
    this.A = this.a = null;
    this.h = this.P = this.l = "";
    this.f = this.N = this.i = this.G = false;
    this.g = 0;
    this.o = null;
    this.m = Yh;
    this.u = this.R = false;
  }
  r2(Xh, H2);
  var Yh = "";
  Xh.prototype.b = Ph("goog.net.XhrIo");
  var Zh = /^https?$/i, $h = ["POST", "PUT"];
  function ai2(a, b2, c, d, e) {
    if (a.a)
      throw Error("[goog.net.XhrIo] Object is active with another request=" + a.l + "; newUri=" + b2);
    c = c ? c.toUpperCase() : "GET";
    a.l = b2;
    a.h = "";
    a.P = c;
    a.G = false;
    a.c = true;
    a.a = a.O ? a.O.a() : yh.a();
    a.A = a.O ? xh(a.O) : xh(yh);
    a.a.onreadystatechange = q2(a.Ub, a);
    try {
      Qh(a.b, bi2(a, "Opening Xhr")), a.N = true, a.a.open(c, String(b2), true), a.N = false;
    } catch (g2) {
      Qh(a.b, bi2(a, "Error opening Xhr: " + g2.message));
      ci2(a, g2);
      return;
    }
    b2 = d || "";
    var f = new Ed2(a.headers);
    e && Dd2(e, function(g2, h) {
      f.set(h, g2);
    });
    e = Ra2(f.Y());
    d = l.FormData && b2 instanceof l.FormData;
    !Ta2($h, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function(g2, h) {
      this.a.setRequestHeader(h, g2);
    }, a);
    a.m && (a.a.responseType = a.m);
    "withCredentials" in a.a && a.a.withCredentials !== a.R && (a.a.withCredentials = a.R);
    try {
      di2(a), 0 < a.g && (a.u = ei2(a.a), Qh(a.b, bi2(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.u)), a.u ? (a.a.timeout = a.g, a.a.ontimeout = q2(a.Ma, a)) : a.o = zd2(a.Ma, a.g, a)), Qh(a.b, bi2(a, "Sending request")), a.i = true, a.a.send(b2), a.i = false;
    } catch (g2) {
      Qh(a.b, bi2(a, "Send error: " + g2.message)), ci2(a, g2);
    }
  }
  function ei2(a) {
    return Tb2 && cc2(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
  }
  function Sa2(a) {
    return "content-type" == a.toLowerCase();
  }
  k2 = Xh.prototype;
  k2.Ma = function() {
    "undefined" != typeof ha2 && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Qh(this.b, bi2(this, this.h)), this.dispatchEvent("timeout"), this.abort(8));
  };
  function ci2(a, b2) {
    a.c = false;
    a.a && (a.f = true, a.a.abort(), a.f = false);
    a.h = b2;
    fi2(a);
    gi2(a);
  }
  function fi2(a) {
    a.G || (a.G = true, a.dispatchEvent("complete"), a.dispatchEvent("error"));
  }
  k2.abort = function() {
    this.a && this.c && (Qh(this.b, bi2(this, "Aborting")), this.c = false, this.f = true, this.a.abort(), this.f = false, this.dispatchEvent("complete"), this.dispatchEvent("abort"), gi2(this));
  };
  k2.Da = function() {
    this.a && (this.c && (this.c = false, this.f = true, this.a.abort(), this.f = false), gi2(this, true));
    Xh.$a.Da.call(this);
  };
  k2.Ub = function() {
    this.xa || (this.N || this.i || this.f ? hi2(this) : this.Ic());
  };
  k2.Ic = function() {
    hi2(this);
  };
  function hi2(a) {
    if (a.c && "undefined" != typeof ha2) {
      if (a.A[1] && 4 == ii2(a) && 2 == ji2(a))
        Qh(a.b, bi2(a, "Local request error detected and ignored"));
      else if (a.i && 4 == ii2(a))
        zd2(a.Ub, 0, a);
      else if (a.dispatchEvent("readystatechange"), 4 == ii2(a)) {
        Qh(a.b, bi2(a, "Request complete"));
        a.c = false;
        try {
          var b2 = ji2(a);
          a:
            switch (b2) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var c = true;
                break a;
              default:
                c = false;
            }
          var d;
          if (!(d = c)) {
            var e;
            if (e = 0 === b2) {
              var f = String(a.l).match(Hd2)[1] || null;
              if (!f && l.self && l.self.location) {
                var g2 = l.self.location.protocol;
                f = g2.substr(0, g2.length - 1);
              }
              e = !Zh.test(f ? f.toLowerCase() : "");
            }
            d = e;
          }
          if (d)
            a.dispatchEvent("complete"), a.dispatchEvent("success");
          else {
            try {
              var h = 2 < ii2(a) ? a.a.statusText : "";
            } catch (m) {
              Qh(a.b, "Can not get status: " + m.message), h = "";
            }
            a.h = h + " [" + ji2(a) + "]";
            fi2(a);
          }
        } finally {
          gi2(a);
        }
      }
    }
  }
  function gi2(a, b2) {
    if (a.a) {
      di2(a);
      var c = a.a, d = a.A[0] ? ka2 : null;
      a.a = null;
      a.A = null;
      b2 || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = d;
      } catch (e) {
        (a = a.b) && a.log(Ih, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
      }
    }
  }
  function di2(a) {
    a.a && a.u && (a.a.ontimeout = null);
    a.o && (l.clearTimeout(a.o), a.o = null);
  }
  function ii2(a) {
    return a.a ? a.a.readyState : 0;
  }
  function ji2(a) {
    try {
      return 2 < ii2(a) ? a.a.status : -1;
    } catch (b2) {
      return -1;
    }
  }
  function ki2(a) {
    try {
      return a.a ? a.a.responseText : "";
    } catch (b2) {
      return Qh(a.b, "Can not get responseText: " + b2.message), "";
    }
  }
  k2.getResponse = function() {
    try {
      if (!this.a)
        return null;
      if ("response" in this.a)
        return this.a.response;
      switch (this.m) {
        case Yh:
        case "text":
          return this.a.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in this.a)
            return this.a.mozResponseArrayBuffer;
      }
      var a = this.b;
      a && a.log(Ih, "Response type " + this.m + " is not supported on this browser", void 0);
      return null;
    } catch (b2) {
      return Qh(this.b, "Can not get response: " + b2.message), null;
    }
  };
  function bi2(a, b2) {
    return b2 + " [" + a.P + " " + a.l + " " + ji2(a) + "]";
  }
  function li2(a) {
    var b2 = mi2;
    this.g = [];
    this.u = b2;
    this.o = a || null;
    this.f = this.a = false;
    this.c = void 0;
    this.m = this.A = this.i = false;
    this.h = 0;
    this.b = null;
    this.l = 0;
  }
  li2.prototype.cancel = function(a) {
    if (this.a)
      this.c instanceof li2 && this.c.cancel();
    else {
      if (this.b) {
        var b2 = this.b;
        delete this.b;
        a ? b2.cancel(a) : (b2.l--, 0 >= b2.l && b2.cancel());
      }
      this.u ? this.u.call(this.o, this) : this.m = true;
      this.a || (a = new ni2(), oi2(this), pi2(this, false, a));
    }
  };
  li2.prototype.v = function(a, b2) {
    this.i = false;
    pi2(this, a, b2);
  };
  function pi2(a, b2, c) {
    a.a = true;
    a.c = c;
    a.f = !b2;
    qi2(a);
  }
  function oi2(a) {
    if (a.a) {
      if (!a.m)
        throw new ri2();
      a.m = false;
    }
  }
  function si2(a, b2) {
    ti2(a, null, b2, void 0);
  }
  function ti2(a, b2, c, d) {
    a.g.push([b2, c, d]);
    a.a && qi2(a);
  }
  li2.prototype.then = function(a, b2, c) {
    var d, e, f = new C2(function(g2, h) {
      d = g2;
      e = h;
    });
    ti2(this, d, function(g2) {
      g2 instanceof ni2 ? f.cancel() : e(g2);
    });
    return f.then(a, b2, c);
  };
  li2.prototype.$goog_Thenable = true;
  function ui2(a) {
    return Qa(a.g, function(b2) {
      return na2(b2[1]);
    });
  }
  function qi2(a) {
    if (a.h && a.a && ui2(a)) {
      var b2 = a.h, c = vi2[b2];
      c && (l.clearTimeout(c.a), delete vi2[b2]);
      a.h = 0;
    }
    a.b && (a.b.l--, delete a.b);
    b2 = a.c;
    for (var d = c = false; a.g.length && !a.i; ) {
      var e = a.g.shift(), f = e[0], g2 = e[1];
      e = e[2];
      if (f = a.f ? g2 : f)
        try {
          var h = f.call(e || a.o, b2);
          void 0 !== h && (a.f = a.f && (h == b2 || h instanceof Error), a.c = b2 = h);
          if (Ca2(b2) || "function" === typeof l.Promise && b2 instanceof l.Promise)
            d = true, a.i = true;
        } catch (m) {
          b2 = m, a.f = true, ui2(a) || (c = true);
        }
    }
    a.c = b2;
    d && (h = q2(a.v, a, true), d = q2(a.v, a, false), b2 instanceof li2 ? (ti2(b2, h, d), b2.A = true) : b2.then(h, d));
    c && (b2 = new wi2(b2), vi2[b2.a] = b2, a.h = b2.a);
  }
  function ri2() {
    u2.call(this);
  }
  r2(ri2, u2);
  ri2.prototype.message = "Deferred has already fired";
  ri2.prototype.name = "AlreadyCalledError";
  function ni2() {
    u2.call(this);
  }
  r2(ni2, u2);
  ni2.prototype.message = "Deferred was canceled";
  ni2.prototype.name = "CanceledError";
  function wi2(a) {
    this.a = l.setTimeout(q2(this.c, this), 0);
    this.b = a;
  }
  wi2.prototype.c = function() {
    delete vi2[this.a];
    throw this.b;
  };
  var vi2 = {};
  function xi2(a) {
    var b2 = {}, c = b2.document || document, d = wb2(a).toString(), e = jc2(document, "SCRIPT"), f = { Vb: e, Ma: void 0 }, g2 = new li2(f), h = null, m = null != b2.timeout ? b2.timeout : 5e3;
    0 < m && (h = window.setTimeout(function() {
      yi2(e, true);
      var p2 = new zi2(Ai2, "Timeout reached for loading script " + d);
      oi2(g2);
      pi2(g2, false, p2);
    }, m), f.Ma = h);
    e.onload = e.onreadystatechange = function() {
      e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (yi2(e, b2.wd || false, h), oi2(g2), pi2(g2, true, null));
    };
    e.onerror = function() {
      yi2(e, true, h);
      var p2 = new zi2(Bi2, "Error while loading script " + d);
      oi2(g2);
      pi2(g2, false, p2);
    };
    f = b2.attributes || {};
    z2(f, { type: "text/javascript", charset: "UTF-8" });
    gc2(e, f);
    Mb2(e, a);
    Ci2(c).appendChild(e);
    return g2;
  }
  function Ci2(a) {
    var b2;
    return (b2 = (a || document).getElementsByTagName("HEAD")) && 0 != b2.length ? b2[0] : a.documentElement;
  }
  function mi2() {
    if (this && this.Vb) {
      var a = this.Vb;
      a && "SCRIPT" == a.tagName && yi2(a, true, this.Ma);
    }
  }
  function yi2(a, b2, c) {
    null != c && l.clearTimeout(c);
    a.onload = ka2;
    a.onerror = ka2;
    a.onreadystatechange = ka2;
    b2 && window.setTimeout(function() {
      a && a.parentNode && a.parentNode.removeChild(a);
    }, 0);
  }
  var Bi2 = 0, Ai2 = 1;
  function zi2(a, b2) {
    var c = "Jsloader error (code #" + a + ")";
    b2 && (c += ": " + b2);
    u2.call(this, c);
    this.code = a;
  }
  r2(zi2, u2);
  function Di2(a) {
    this.f = a;
  }
  r2(Di2, wh);
  Di2.prototype.a = function() {
    return new this.f();
  };
  Di2.prototype.b = function() {
    return {};
  };
  function Ei2(a, b2, c) {
    this.c = a;
    a = b2 || {};
    this.l = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
    this.v = a.secureTokenTimeout || Fi2;
    this.g = lb2(a.secureTokenHeaders || Gi2);
    this.h = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
    this.i = a.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/";
    this.m = a.firebaseTimeout || Hi2;
    this.a = lb2(a.firebaseHeaders || Ii2);
    c && (this.a["X-Client-Version"] = c, this.g["X-Client-Version"] = c);
    c = "Node" == Fe2();
    c = l.XMLHttpRequest || c && firebase$1$1.INTERNAL.node && firebase$1$1.INTERNAL.node.XMLHttpRequest;
    if (!c && !Ee2())
      throw new t("internal-error", "The XMLHttpRequest compatibility library was not found.");
    this.f = void 0;
    Ee2() ? this.f = new Rh(self) : Ge2() ? this.f = new Di2(c) : this.f = new Bh();
    this.b = null;
  }
  var Ji2, zg = "idToken", Fi2 = new Ue2(3e4, 6e4), Gi2 = { "Content-Type": "application/x-www-form-urlencoded" }, Hi2 = new Ue2(3e4, 6e4), Ii2 = { "Content-Type": "application/json" };
  function Ki2(a, b2) {
    b2 ? a.a["X-Firebase-Locale"] = b2 : delete a.a["X-Firebase-Locale"];
  }
  function Li2(a, b2) {
    b2 && (a.l = Mi2("https://securetoken.googleapis.com/v1/token", b2), a.h = Mi2("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", b2), a.i = Mi2("https://identitytoolkit.googleapis.com/v2/", b2));
  }
  function Mi2(a, b2) {
    a = J2(a);
    b2 = J2(b2.url);
    a.c = a.a + a.c;
    Kd2(a, b2.f);
    a.a = b2.a;
    Ld2(a, b2.g);
    return a.toString();
  }
  function Ni2(a, b2) {
    b2 ? (a.a["X-Client-Version"] = b2, a.g["X-Client-Version"] = b2) : (delete a.a["X-Client-Version"], delete a.g["X-Client-Version"]);
  }
  Ei2.prototype.S = function() {
    return this.b;
  };
  function Oi2(a, b2, c, d, e, f, g2) {
    pe2() || Ee2() ? a = q2(a.u, a) : (Ji2 || (Ji2 = new C2(function(h, m) {
      Pi2(h, m);
    })), a = q2(a.o, a));
    a(b2, c, d, e, f, g2);
  }
  Ei2.prototype.u = function(a, b2, c, d, e, f) {
    if (Ee2() && ("undefined" === typeof l.fetch || "undefined" === typeof l.Headers || "undefined" === typeof l.Request))
      throw new t("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
    var g2 = new Xh(this.f);
    if (f) {
      g2.g = Math.max(0, f);
      var h = setTimeout(function() {
        g2.dispatchEvent("timeout");
      }, f);
    }
    md2(g2, "complete", function() {
      h && clearTimeout(h);
      var m = null;
      try {
        m = JSON.parse(ki2(this)) || null;
      } catch (p2) {
        m = null;
      }
      b2 && b2(m);
    });
    sd2(g2, "ready", function() {
      h && clearTimeout(h);
      Tc2(this);
    });
    sd2(g2, "timeout", function() {
      h && clearTimeout(h);
      Tc2(this);
      b2 && b2(null);
    });
    ai2(g2, a, c, d, e);
  };
  var Qi2 = new ob2(pb2, "https://apis.google.com/js/client.js?onload=%{onload}"), Ri2 = "__fcb" + Math.floor(1e6 * Math.random()).toString();
  function Pi2(a, b2) {
    if (((window.gapi || {}).client || {}).request)
      a();
    else {
      l[Ri2] = function() {
        ((window.gapi || {}).client || {}).request ? a() : b2(Error("CORS_UNSUPPORTED"));
      };
      var c = xb2(Qi2, { onload: Ri2 });
      si2(xi2(c), function() {
        b2(Error("CORS_UNSUPPORTED"));
      });
    }
  }
  Ei2.prototype.o = function(a, b2, c, d, e) {
    var f = this;
    Ji2.then(function() {
      window.gapi.client.setApiKey(f.c);
      var g2 = window.gapi.auth.getToken();
      window.gapi.auth.setToken(null);
      window.gapi.client.request({ path: a, method: c, body: d, headers: e, authType: "none", callback: function(h) {
        window.gapi.auth.setToken(g2);
        b2 && b2(h);
      } });
    }).s(function(g2) {
      b2 && b2({ error: { message: g2 && g2.message || "CORS_UNSUPPORTED" } });
    });
  };
  function Si2(a, b2) {
    return new C2(function(c, d) {
      "refresh_token" == b2.grant_type && b2.refresh_token || "authorization_code" == b2.grant_type && b2.code ? Oi2(a, a.l + "?key=" + encodeURIComponent(a.c), function(e) {
        e ? e.error ? d(Ti2(e)) : e.access_token && e.refresh_token ? c(e) : d(new t("internal-error")) : d(new t("network-request-failed"));
      }, "POST", ae2(b2).toString(), a.g, a.v.get()) : d(new t("internal-error"));
    });
  }
  function Ui2(a, b2, c, d, e, f, g2) {
    var h = J2(b2 + c);
    I2(h, "key", a.c);
    g2 && I2(h, "cb", ua2().toString());
    var m = "GET" == d;
    if (m)
      for (var p2 in e)
        e.hasOwnProperty(p2) && I2(h, p2, e[p2]);
    return new C2(function(v2, B2) {
      Oi2(a, h.toString(), function(A2) {
        A2 ? A2.error ? B2(Ti2(A2, f || {})) : v2(A2) : B2(new t("network-request-failed"));
      }, d, m ? void 0 : fe2(Qe2(e)), a.a, a.m.get());
    });
  }
  function Vi2(a) {
    a = a.email;
    if ("string" !== typeof a || !ye2.test(a))
      throw new t("invalid-email");
  }
  function Wi2(a) {
    "email" in a && Vi2(a);
  }
  function Xi2(a, b2) {
    return O2(a, Yi2, { identifier: b2, continueUri: Ne2() ? me2() : "http://localhost" }).then(function(c) {
      return c.signinMethods || [];
    });
  }
  function Zi2(a) {
    return O2(a, $i2, {}).then(function(b2) {
      return b2.authorizedDomains || [];
    });
  }
  function P2(a) {
    if (!a[zg]) {
      if (a.mfaPendingCredential)
        throw new t("multi-factor-auth-required", null, lb2(a));
      throw new t("internal-error");
    }
  }
  function aj(a) {
    if (a.phoneNumber || a.temporaryProof) {
      if (!a.phoneNumber || !a.temporaryProof)
        throw new t("internal-error");
    } else {
      if (!a.sessionInfo)
        throw new t("missing-verification-id");
      if (!a.code)
        throw new t("missing-verification-code");
    }
  }
  Ei2.prototype.yb = function() {
    return O2(this, bj, {});
  };
  Ei2.prototype.Ab = function(a, b2) {
    return O2(this, cj, { idToken: a, email: b2 });
  };
  Ei2.prototype.Bb = function(a, b2) {
    return O2(this, Zg, { idToken: a, password: b2 });
  };
  var dj = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
  k2 = Ei2.prototype;
  k2.Cb = function(a, b2) {
    var c = { idToken: a }, d = [];
    jb2(dj, function(e, f) {
      var g2 = b2[f];
      null === g2 ? d.push(e) : f in b2 && (c[f] = g2);
    });
    d.length && (c.deleteAttribute = d);
    return O2(this, cj, c);
  };
  k2.ub = function(a, b2) {
    a = { requestType: "PASSWORD_RESET", email: a };
    z2(a, b2);
    return O2(this, ej, a);
  };
  k2.vb = function(a, b2) {
    a = { requestType: "EMAIL_SIGNIN", email: a };
    z2(a, b2);
    return O2(this, fj, a);
  };
  k2.tb = function(a, b2) {
    a = { requestType: "VERIFY_EMAIL", idToken: a };
    z2(a, b2);
    return O2(this, gj, a);
  };
  k2.Db = function(a, b2, c) {
    a = { requestType: "VERIFY_AND_CHANGE_EMAIL", idToken: a, newEmail: b2 };
    z2(a, c);
    return O2(this, hj, a);
  };
  function kh(a, b2) {
    return O2(a, ij, b2);
  }
  k2.eb = function(a) {
    return O2(this, jj, a);
  };
  function ih(a, b2) {
    return O2(a, kj, b2).then(function(c) {
      return c.phoneSessionInfo.sessionInfo;
    });
  }
  function lj(a) {
    if (!a.phoneVerificationInfo)
      throw new t("internal-error");
    if (!a.phoneVerificationInfo.sessionInfo)
      throw new t("missing-verification-id");
    if (!a.phoneVerificationInfo.code)
      throw new t("missing-verification-code");
  }
  function jh(a, b2) {
    return O2(a, mj, b2).then(function(c) {
      return c.phoneResponseInfo.sessionInfo;
    });
  }
  function nj(a, b2, c) {
    return O2(a, oj, { idToken: b2, deleteProvider: c });
  }
  function pj(a) {
    if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken)
      throw new t("internal-error");
  }
  function qj(a, b2) {
    b2.oauthIdToken && b2.providerId && 0 == b2.providerId.indexOf("oidc.") && !b2.pendingToken && (a.sessionId ? b2.nonce = a.sessionId : a.postBody && (a = new Pd2(a.postBody), ee2(a, "nonce") && (b2.nonce = a.get("nonce"))));
    return b2;
  }
  function rj(a) {
    var b2 = null;
    a.needConfirmation ? (a.code = "account-exists-with-different-credential", b2 = vh(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b2 = vh(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use", b2 = vh(a)) : a.errorMessage && (b2 = sj(a.errorMessage));
    if (b2)
      throw b2;
    P2(a);
  }
  function Bg(a, b2) {
    b2.returnIdpCredential = true;
    return O2(a, tj, b2);
  }
  function Dg(a, b2) {
    b2.returnIdpCredential = true;
    return O2(a, uj, b2);
  }
  function Eg(a, b2) {
    b2.returnIdpCredential = true;
    b2.autoCreate = false;
    return O2(a, vj, b2);
  }
  function wj(a) {
    if (!a.oobCode)
      throw new t("invalid-action-code");
  }
  k2.mb = function(a, b2) {
    return O2(this, xj, { oobCode: a, newPassword: b2 });
  };
  k2.Qa = function(a) {
    return O2(this, yj, { oobCode: a });
  };
  k2.ib = function(a) {
    return O2(this, zj, { oobCode: a });
  };
  var zj = { endpoint: "setAccountInfo", B: wj, Z: "email", C: true }, yj = { endpoint: "resetPassword", B: wj, F: function(a) {
    var b2 = a.requestType;
    if (!b2 || !a.email && "EMAIL_SIGNIN" != b2 && "VERIFY_AND_CHANGE_EMAIL" != b2)
      throw new t("internal-error");
  }, C: true }, Aj = { endpoint: "signupNewUser", B: function(a) {
    Vi2(a);
    if (!a.password)
      throw new t("weak-password");
  }, F: P2, U: true, C: true }, Yi2 = { endpoint: "createAuthUri", C: true }, Bj = { endpoint: "deleteAccount", M: ["idToken"] }, oj = { endpoint: "setAccountInfo", M: ["idToken", "deleteProvider"], B: function(a) {
    if ("array" != la2(a.deleteProvider))
      throw new t("internal-error");
  } }, Wg = { endpoint: "emailLinkSignin", M: ["email", "oobCode"], B: Vi2, F: P2, U: true, C: true }, Yg = { endpoint: "emailLinkSignin", M: ["idToken", "email", "oobCode"], B: Vi2, F: P2, U: true }, Cj = { endpoint: "accounts/mfaEnrollment:finalize", M: ["idToken", "phoneVerificationInfo"], B: lj, F: P2, C: true, Na: true }, Dj = { endpoint: "accounts/mfaSignIn:finalize", M: ["mfaPendingCredential", "phoneVerificationInfo"], B: lj, F: P2, C: true, Na: true }, Ej = { endpoint: "getAccountInfo" }, fj = {
    endpoint: "getOobConfirmationCode",
    M: ["requestType"],
    B: function(a) {
      if ("EMAIL_SIGNIN" != a.requestType)
        throw new t("internal-error");
      Vi2(a);
    },
    Z: "email",
    C: true
  }, gj = { endpoint: "getOobConfirmationCode", M: ["idToken", "requestType"], B: function(a) {
    if ("VERIFY_EMAIL" != a.requestType)
      throw new t("internal-error");
  }, Z: "email", C: true }, hj = { endpoint: "getOobConfirmationCode", M: ["idToken", "newEmail", "requestType"], B: function(a) {
    if ("VERIFY_AND_CHANGE_EMAIL" != a.requestType)
      throw new t("internal-error");
  }, Z: "email", C: true }, ej = { endpoint: "getOobConfirmationCode", M: ["requestType"], B: function(a) {
    if ("PASSWORD_RESET" != a.requestType)
      throw new t("internal-error");
    Vi2(a);
  }, Z: "email", C: true }, $i2 = { kb: true, endpoint: "getProjectConfig", Tb: "GET" }, Fj = { kb: true, endpoint: "getRecaptchaParam", Tb: "GET", F: function(a) {
    if (!a.recaptchaSiteKey)
      throw new t("internal-error");
  } }, xj = { endpoint: "resetPassword", B: wj, Z: "email", C: true }, ij = { endpoint: "sendVerificationCode", M: ["phoneNumber", "recaptchaToken"], Z: "sessionInfo", C: true }, cj = { endpoint: "setAccountInfo", M: ["idToken"], B: Wi2, U: true }, Zg = { endpoint: "setAccountInfo", M: ["idToken"], B: function(a) {
    Wi2(a);
    if (!a.password)
      throw new t("weak-password");
  }, F: P2, U: true }, bj = { endpoint: "signupNewUser", F: P2, U: true, C: true }, kj = { endpoint: "accounts/mfaEnrollment:start", M: ["idToken", "phoneEnrollmentInfo"], B: function(a) {
    if (!a.phoneEnrollmentInfo)
      throw new t("internal-error");
    if (!a.phoneEnrollmentInfo.phoneNumber)
      throw new t("missing-phone-number");
    if (!a.phoneEnrollmentInfo.recaptchaToken)
      throw new t("missing-app-credential");
  }, F: function(a) {
    if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo)
      throw new t("internal-error");
  }, C: true, Na: true }, mj = {
    endpoint: "accounts/mfaSignIn:start",
    M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
    B: function(a) {
      if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken)
        throw new t("missing-app-credential");
    },
    F: function(a) {
      if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo)
        throw new t("internal-error");
    },
    C: true,
    Na: true
  }, tj = { endpoint: "verifyAssertion", B: pj, Xa: qj, F: rj, U: true, C: true }, vj = { endpoint: "verifyAssertion", B: pj, Xa: qj, F: function(a) {
    if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage)
      throw new t("user-not-found");
    if (a.errorMessage)
      throw sj(a.errorMessage);
    P2(a);
  }, U: true, C: true }, uj = { endpoint: "verifyAssertion", B: function(a) {
    pj(a);
    if (!a.idToken)
      throw new t("internal-error");
  }, Xa: qj, F: rj, U: true }, Gj = { endpoint: "verifyCustomToken", B: function(a) {
    if (!a.token)
      throw new t("invalid-custom-token");
  }, F: P2, U: true, C: true }, Xg = { endpoint: "verifyPassword", B: function(a) {
    Vi2(a);
    if (!a.password)
      throw new t("wrong-password");
  }, F: P2, U: true, C: true }, jj = { endpoint: "verifyPhoneNumber", B: aj, F: P2, C: true }, eh = {
    endpoint: "verifyPhoneNumber",
    B: function(a) {
      if (!a.idToken)
        throw new t("internal-error");
      aj(a);
    },
    F: function(a) {
      if (a.temporaryProof)
        throw a.code = "credential-already-in-use", vh(a);
      P2(a);
    }
  }, fh = { Gb: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", B: aj, F: P2, C: true }, Hj = { endpoint: "accounts/mfaEnrollment:withdraw", M: ["idToken", "mfaEnrollmentId"], F: function(a) {
    if (!!a[zg] ^ !!a.refreshToken)
      throw new t("internal-error");
  }, C: true, Na: true };
  function O2(a, b2, c) {
    if (!hf(c, b2.M))
      return E2(new t("internal-error"));
    var d = !!b2.Na, e = b2.Tb || "POST", f;
    return D2(c).then(b2.B).then(function() {
      b2.U && (c.returnSecureToken = true);
      b2.C && a.b && "undefined" === typeof c.tenantId && (c.tenantId = a.b);
      return d ? Ui2(a, a.i, b2.endpoint, e, c, b2.Gb, b2.kb || false) : Ui2(a, a.h, b2.endpoint, e, c, b2.Gb, b2.kb || false);
    }).then(function(g2) {
      f = g2;
      return b2.Xa ? b2.Xa(c, f) : f;
    }).then(b2.F).then(function() {
      if (!b2.Z)
        return f;
      if (!(b2.Z in f))
        throw new t("internal-error");
      return f[b2.Z];
    });
  }
  function sj(a) {
    return Ti2({ error: { errors: [{ message: a }], code: 400, message: a } });
  }
  function Ti2(a, b2) {
    var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
    var d = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };
    if (c = d[c] ? new t(d[c]) : null)
      return c;
    c = a.error && a.error.message || "";
    d = {
      INVALID_CUSTOM_TOKEN: "invalid-custom-token",
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_EMAIL: "invalid-email",
      INVALID_PASSWORD: "wrong-password",
      USER_DISABLED: "user-disabled",
      MISSING_PASSWORD: "internal-error",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
      INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
      INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
      INVALID_SENDER: "invalid-sender",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      INVALID_PROVIDER_ID: "invalid-provider-id",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      CORS_UNSUPPORTED: "cors-unsupported",
      DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
      INVALID_APP_ID: "invalid-app-id",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      WEAK_PASSWORD: "weak-password",
      OPERATION_NOT_ALLOWED: "operation-not-allowed",
      USER_CANCELLED: "user-cancelled",
      CAPTCHA_CHECK_FAILED: "captcha-check-failed",
      INVALID_APP_CREDENTIAL: "invalid-app-credential",
      INVALID_CODE: "invalid-verification-code",
      INVALID_PHONE_NUMBER: "invalid-phone-number",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_APP_CREDENTIAL: "missing-app-credential",
      MISSING_CODE: "missing-verification-code",
      MISSING_PHONE_NUMBER: "missing-phone-number",
      MISSING_SESSION_INFO: "missing-verification-id",
      QUOTA_EXCEEDED: "quota-exceeded",
      SESSION_EXPIRED: "code-expired",
      REJECTED_CREDENTIAL: "rejected-credential",
      INVALID_CONTINUE_URI: "invalid-continue-uri",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      INVALID_CERT_HASH: "invalid-cert-hash",
      UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
      INVALID_TENANT_ID: "invalid-tenant-id",
      TENANT_ID_MISMATCH: "tenant-id-mismatch",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
      UNVERIFIED_EMAIL: "unverified-email"
    };
    z2(d, b2 || {});
    b2 = (b2 = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b2.length ? b2[1] : void 0;
    for (var e in d)
      if (0 === c.indexOf(e))
        return new t(d[e], b2);
    !b2 && a && (b2 = Pe2(a));
    return new t("internal-error", b2);
  }
  function Ij(a) {
    this.b = a;
    this.a = null;
    this.qb = Jj(this);
  }
  function Jj(a) {
    return Kj().then(function() {
      return new C2(function(b2, c) {
        L2("gapi.iframes.getContext")().open({ where: document.body, url: a.b, messageHandlersFilter: L2("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: true }, function(d) {
          function e() {
            clearTimeout(f);
            b2();
          }
          a.a = d;
          a.a.restyle({ setHideOnLeave: false });
          var f = setTimeout(function() {
            c(Error("Network Error"));
          }, Lj.get());
          d.ping(e).then(e, function() {
            c(Error("Network Error"));
          });
        });
      });
    });
  }
  function Mj(a, b2) {
    return a.qb.then(function() {
      return new C2(function(c) {
        a.a.send(b2.type, b2, c, L2("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    });
  }
  function Nj(a, b2) {
    a.qb.then(function() {
      a.a.register("authEvent", b2, L2("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
    });
  }
  var Oj = new ob2(pb2, "https://apis.google.com/js/api.js?onload=%{onload}"), Pj = new Ue2(3e4, 6e4), Lj = new Ue2(5e3, 15e3), Qj = null;
  function Kj() {
    return Qj ? Qj : Qj = new C2(function(a, b2) {
      function c() {
        Te2();
        L2("gapi.load")("gapi.iframes", { callback: a, ontimeout: function() {
          Te2();
          b2(Error("Network Error"));
        }, timeout: Pj.get() });
      }
      if (L2("gapi.iframes.Iframe"))
        a();
      else if (L2("gapi.load"))
        c();
      else {
        var d = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
        l[d] = function() {
          L2("gapi.load") ? c() : b2(Error("Network Error"));
        };
        d = xb2(Oj, { onload: d });
        D2(xi2(d)).s(function() {
          b2(Error("Network Error"));
        });
      }
    }).s(function(a) {
      Qj = null;
      throw a;
    });
  }
  function Rj(a, b2, c, d) {
    this.l = a;
    this.h = b2;
    this.i = c;
    this.g = d;
    this.f = null;
    this.g ? (a = J2(this.g.url), a = Yd(a.f, a.a, a.g, "/emulator/auth/iframe")) : a = Yd("https", this.l, null, "/__/auth/iframe");
    this.a = a;
    I2(this.a, "apiKey", this.h);
    I2(this.a, "appName", this.i);
    this.b = null;
    this.c = [];
  }
  Rj.prototype.toString = function() {
    this.f ? I2(this.a, "v", this.f) : de2(this.a.b, "v");
    this.b ? I2(this.a, "eid", this.b) : de2(this.a.b, "eid");
    this.c.length ? I2(this.a, "fw", this.c.join(",")) : de2(this.a.b, "fw");
    return this.a.toString();
  };
  function Sj(a, b2, c, d, e, f) {
    this.u = a;
    this.o = b2;
    this.c = c;
    this.v = d;
    this.m = f;
    this.i = this.g = this.l = null;
    this.a = e;
    this.h = this.f = null;
  }
  Sj.prototype.xb = function(a) {
    this.h = a;
    return this;
  };
  Sj.prototype.toString = function() {
    if (this.m) {
      var a = J2(this.m.url);
      a = Yd(a.f, a.a, a.g, "/emulator/auth/handler");
    } else
      a = Yd("https", this.u, null, "/__/auth/handler");
    I2(a, "apiKey", this.o);
    I2(a, "appName", this.c);
    I2(a, "authType", this.v);
    if (this.a.isOAuthProvider) {
      var b2 = this.a;
      try {
        var c = firebase$1$1.app(this.c).auth().ka();
      } catch (h) {
        c = null;
      }
      b2.nb = c;
      I2(a, "providerId", this.a.providerId);
      c = this.a;
      b2 = Qe2(c.Hb);
      for (var d in b2)
        b2[d] = b2[d].toString();
      d = c.Pc;
      b2 = lb2(b2);
      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        f in b2 && delete b2[f];
      }
      c.ob && c.nb && !b2[c.ob] && (b2[c.ob] = c.nb);
      kb2(b2) || I2(a, "customParameters", Pe2(b2));
    }
    "function" === typeof this.a.Pb && (c = this.a.Pb(), c.length && I2(a, "scopes", c.join(",")));
    this.l ? I2(a, "redirectUrl", this.l) : de2(a.b, "redirectUrl");
    this.g ? I2(a, "eventId", this.g) : de2(a.b, "eventId");
    this.i ? I2(a, "v", this.i) : de2(a.b, "v");
    if (this.b)
      for (var g2 in this.b)
        this.b.hasOwnProperty(g2) && !Xd(a, g2) && I2(a, g2, this.b[g2]);
    this.h ? I2(a, "tid", this.h) : de2(a.b, "tid");
    this.f ? I2(a, "eid", this.f) : de2(a.b, "eid");
    g2 = Tj(this.c);
    g2.length && I2(a, "fw", g2.join(","));
    return a.toString();
  };
  function Tj(a) {
    try {
      return firebase$1$1.app(a).auth().Ga();
    } catch (b2) {
      return [];
    }
  }
  function Uj(a, b2, c, d, e, f) {
    this.o = a;
    this.g = b2;
    this.b = c;
    this.f = f;
    this.c = d || null;
    this.i = e || null;
    this.l = this.u = this.A = null;
    this.h = [];
    this.v = this.a = null;
  }
  function Vj(a) {
    var b2 = me2();
    return Zi2(a).then(function(c) {
      a: {
        var d = J2(b2), e = d.f;
        d = d.a;
        for (var f = 0; f < c.length; f++) {
          var g2 = c[f];
          var h = d;
          var m = e;
          0 == g2.indexOf("chrome-extension://") ? h = J2(g2).a == h && "chrome-extension" == m : "http" != m && "https" != m ? h = false : xe2.test(g2) ? h = h == g2 : (g2 = g2.split(".").join("\\."), h = new RegExp("^(.+\\." + g2 + "|" + g2 + ")$", "i").test(h));
          if (h) {
            c = true;
            break a;
          }
        }
        c = false;
      }
      if (!c)
        throw new th(me2());
    });
  }
  function Wj(a) {
    if (a.v)
      return a.v;
    a.v = ze2().then(function() {
      if (!a.u) {
        var b2 = a.c, c = a.i, d = Tj(a.b), e = new Rj(a.o, a.g, a.b, a.f);
        e.f = b2;
        e.b = c;
        e.c = Xa2(d || []);
        a.u = e.toString();
      }
      a.m = new Ij(a.u);
      Xj(a);
    });
    return a.v;
  }
  k2 = Uj.prototype;
  k2.Nb = function(a, b2, c) {
    var d = new t("popup-closed-by-user"), e = new t("web-storage-unsupported"), f = this, g2 = false;
    return this.la().then(function() {
      Yj(f).then(function(h) {
        h || (a && te2(a), b2(e), g2 = true);
      });
    }).s(function() {
    }).then(function() {
      if (!g2)
        return we2(a);
    }).then(function() {
      if (!g2)
        return Ad2(c).then(function() {
          b2(d);
        });
    });
  };
  k2.Wb = function() {
    var a = K2();
    return !Oe2(a) && !Se2(a);
  };
  k2.Sb = function() {
    return false;
  };
  k2.Lb = function(a, b2, c, d, e, f, g2, h) {
    if (!a)
      return E2(new t("popup-blocked"));
    if (g2 && !Oe2())
      return this.la().s(function(p2) {
        te2(a);
        e(p2);
      }), d(), D2();
    this.a || (this.a = Vj(Zj(this)));
    var m = this;
    return this.a.then(function() {
      var p2 = m.la().s(function(v2) {
        te2(a);
        e(v2);
        throw v2;
      });
      d();
      return p2;
    }).then(function() {
      nh(c);
      if (!g2) {
        var p2 = ak(m.o, m.g, m.b, b2, c, null, f, m.c, void 0, m.i, h, m.f);
        ne2(p2, a);
      }
    }).s(function(p2) {
      "auth/network-request-failed" == p2.code && (m.a = null);
      throw p2;
    });
  };
  function Zj(a) {
    a.l || (a.A = a.c ? Je2(a.c, Tj(a.b)) : null, a.l = new Ei2(a.g, Aa2(a.i), a.A), a.f && Li2(a.l, a.f));
    return a.l;
  }
  k2.Mb = function(a, b2, c, d) {
    this.a || (this.a = Vj(Zj(this)));
    var e = this;
    return this.a.then(function() {
      nh(b2);
      var f = ak(e.o, e.g, e.b, a, b2, me2(), c, e.c, void 0, e.i, d, e.f);
      ne2(f);
    }).s(function(f) {
      "auth/network-request-failed" == f.code && (e.a = null);
      throw f;
    });
  };
  k2.la = function() {
    var a = this;
    return Wj(this).then(function() {
      return a.m.qb;
    }).s(function() {
      a.a = null;
      throw new t("network-request-failed");
    });
  };
  k2.Zb = function() {
    return true;
  };
  function ak(a, b2, c, d, e, f, g2, h, m, p2, v2, B2) {
    a = new Sj(a, b2, c, d, e, B2);
    a.l = f;
    a.g = g2;
    a.i = h;
    a.b = lb2(m || null);
    a.f = p2;
    return a.xb(v2).toString();
  }
  function Xj(a) {
    if (!a.m)
      throw Error("IfcHandler must be initialized!");
    Nj(a.m, function(b2) {
      var c = {};
      if (b2 && b2.authEvent) {
        var d = false;
        b2 = ph(b2.authEvent);
        for (c = 0; c < a.h.length; c++)
          d = a.h[c](b2) || d;
        c = {};
        c.status = d ? "ACK" : "ERROR";
        return D2(c);
      }
      c.status = "ERROR";
      return D2(c);
    });
  }
  function Yj(a) {
    var b2 = { type: "webStorageSupport" };
    return Wj(a).then(function() {
      return Mj(a.m, b2);
    }).then(function(c) {
      if (c && c.length && "undefined" !== typeof c[0].webStorageSupport)
        return c[0].webStorageSupport;
      throw Error();
    });
  }
  k2.Ea = function(a) {
    this.h.push(a);
  };
  k2.Ra = function(a) {
    Va2(this.h, function(b2) {
      return b2 == a;
    });
  };
  function bk(a) {
    this.a = a || firebase$1$1.INTERNAL.reactNative && firebase$1$1.INTERNAL.reactNative.AsyncStorage;
    if (!this.a)
      throw new t("internal-error", "The React Native compatibility library was not found.");
    this.type = "asyncStorage";
  }
  k2 = bk.prototype;
  k2.get = function(a) {
    return D2(this.a.getItem(a)).then(function(b2) {
      return b2 && Re2(b2);
    });
  };
  k2.set = function(a, b2) {
    return D2(this.a.setItem(a, Pe2(b2)));
  };
  k2.T = function(a) {
    return D2(this.a.removeItem(a));
  };
  k2.ca = function() {
  };
  k2.ia = function() {
  };
  function ck(a) {
    this.b = a;
    this.a = {};
    this.f = q2(this.c, this);
  }
  var dk = [];
  function ek() {
    var a = Ee2() ? self : null;
    w2(dk, function(c) {
      c.b == a && (b2 = c);
    });
    if (!b2) {
      var b2 = new ck(a);
      dk.push(b2);
    }
    return b2;
  }
  ck.prototype.c = function(a) {
    var b2 = a.data.eventType, c = a.data.eventId, d = this.a[b2];
    if (d && 0 < d.length) {
      a.ports[0].postMessage({ status: "ack", eventId: c, eventType: b2, response: null });
      var e = [];
      w2(d, function(f) {
        e.push(D2().then(function() {
          return f(a.origin, a.data.data);
        }));
      });
      Fc2(e).then(function(f) {
        var g2 = [];
        w2(f, function(h) {
          g2.push({ fulfilled: h.Ob, value: h.value, reason: h.reason ? h.reason.message : void 0 });
        });
        w2(g2, function(h) {
          for (var m in h)
            "undefined" === typeof h[m] && delete h[m];
        });
        a.ports[0].postMessage({
          status: "done",
          eventId: c,
          eventType: b2,
          response: g2
        });
      });
    }
  };
  function fk(a, b2, c) {
    kb2(a.a) && a.b.addEventListener("message", a.f);
    "undefined" === typeof a.a[b2] && (a.a[b2] = []);
    a.a[b2].push(c);
  }
  function gk(a) {
    this.a = a;
  }
  gk.prototype.postMessage = function(a, b2) {
    this.a.postMessage(a, b2);
  };
  function hk(a) {
    this.c = a;
    this.b = false;
    this.a = [];
  }
  function ik(a, b2, c, d) {
    var e, f = c || {}, g2, h, m, p2 = null;
    if (a.b)
      return E2(Error("connection_unavailable"));
    var v2 = d ? 800 : 50, B2 = "undefined" !== typeof MessageChannel ? new MessageChannel() : null;
    return new C2(function(A2, Q2) {
      B2 ? (e = Math.floor(Math.random() * Math.pow(10, 20)).toString(), B2.port1.start(), h = setTimeout(function() {
        Q2(Error("unsupported_event"));
      }, v2), g2 = function(xa2) {
        xa2.data.eventId === e && ("ack" === xa2.data.status ? (clearTimeout(h), m = setTimeout(function() {
          Q2(Error("timeout"));
        }, 3e3)) : "done" === xa2.data.status ? (clearTimeout(m), "undefined" !== typeof xa2.data.response ? A2(xa2.data.response) : Q2(Error("unknown_error"))) : (clearTimeout(h), clearTimeout(m), Q2(Error("invalid_response"))));
      }, p2 = { messageChannel: B2, onMessage: g2 }, a.a.push(p2), B2.port1.addEventListener("message", g2), a.c.postMessage({ eventType: b2, eventId: e, data: f }, [B2.port2])) : Q2(Error("connection_unavailable"));
    }).then(function(A2) {
      jk(a, p2);
      return A2;
    }).s(function(A2) {
      jk(a, p2);
      throw A2;
    });
  }
  function jk(a, b2) {
    if (b2) {
      var c = b2.messageChannel, d = b2.onMessage;
      c && (c.port1.removeEventListener("message", d), c.port1.close());
      Va2(a.a, function(e) {
        return e == b2;
      });
    }
  }
  hk.prototype.close = function() {
    for (; 0 < this.a.length; )
      jk(this, this.a[0]);
    this.b = true;
  };
  function kk() {
    if (!lk())
      throw new t("web-storage-unsupported");
    this.c = {};
    this.a = [];
    this.b = 0;
    this.m = l.indexedDB;
    this.type = "indexedDB";
    this.g = this.l = this.f = this.i = null;
    this.o = false;
    this.h = null;
    var a = this;
    Ee2() && self ? (this.l = ek(), fk(this.l, "keyChanged", function(b2, c) {
      return mk(a).then(function(d) {
        0 < d.length && w2(a.a, function(e) {
          e(d);
        });
        return { keyProcessed: Ta2(d, c.key) };
      });
    }), fk(this.l, "ping", function() {
      return D2(["keyChanged"]);
    })) : af().then(function(b2) {
      if (a.h = b2)
        a.g = new hk(new gk(b2)), ik(a.g, "ping", null, true).then(function(c) {
          c[0].fulfilled && Ta2(c[0].value, "keyChanged") && (a.o = true);
        }).s(function() {
        });
    });
  }
  var nk;
  function ok(a) {
    return new C2(function(b2, c) {
      var d = a.m.deleteDatabase("firebaseLocalStorageDb");
      d.onsuccess = function() {
        b2();
      };
      d.onerror = function(e) {
        c(Error(e.target.error));
      };
    });
  }
  function pk(a) {
    return new C2(function(b2, c) {
      var d = a.m.open("firebaseLocalStorageDb", 1);
      d.onerror = function(e) {
        try {
          e.preventDefault();
        } catch (f) {
        }
        c(Error(e.target.error));
      };
      d.onupgradeneeded = function(e) {
        e = e.target.result;
        try {
          e.createObjectStore("firebaseLocalStorage", { keyPath: "fbase_key" });
        } catch (f) {
          c(f);
        }
      };
      d.onsuccess = function(e) {
        e = e.target.result;
        e.objectStoreNames.contains("firebaseLocalStorage") ? b2(e) : ok(a).then(function() {
          return pk(a);
        }).then(function(f) {
          b2(f);
        }).s(function(f) {
          c(f);
        });
      };
    });
  }
  function qk(a) {
    a.v || (a.v = pk(a));
    return a.v;
  }
  function lk() {
    try {
      return !!l.indexedDB;
    } catch (a) {
      return false;
    }
  }
  function rk(a) {
    return a.objectStore("firebaseLocalStorage");
  }
  function sk(a, b2) {
    return a.transaction(["firebaseLocalStorage"], b2 ? "readwrite" : "readonly");
  }
  function tk(a) {
    return new C2(function(b2, c) {
      a.onsuccess = function(d) {
        d && d.target ? b2(d.target.result) : b2();
      };
      a.onerror = function(d) {
        c(d.target.error);
      };
    });
  }
  k2 = kk.prototype;
  k2.set = function(a, b2) {
    var c = false, d, e = this;
    return qk(this).then(function(f) {
      d = f;
      f = rk(sk(d, true));
      return tk(f.get(a));
    }).then(function(f) {
      var g2 = rk(sk(d, true));
      if (f)
        return f.value = b2, tk(g2.put(f));
      e.b++;
      c = true;
      f = {};
      f.fbase_key = a;
      f.value = b2;
      return tk(g2.add(f));
    }).then(function() {
      e.c[a] = b2;
      return uk(e, a);
    }).na(function() {
      c && e.b--;
    });
  };
  function uk(a, b2) {
    return a.g && a.h && $e2() === a.h ? ik(a.g, "keyChanged", { key: b2 }, a.o).then(function() {
    }).s(function() {
    }) : D2();
  }
  k2.get = function(a) {
    return qk(this).then(function(b2) {
      return tk(rk(sk(b2, false)).get(a));
    }).then(function(b2) {
      return b2 && b2.value;
    });
  };
  k2.T = function(a) {
    var b2 = false, c = this;
    return qk(this).then(function(d) {
      b2 = true;
      c.b++;
      return tk(rk(sk(d, true))["delete"](a));
    }).then(function() {
      delete c.c[a];
      return uk(c, a);
    }).na(function() {
      b2 && c.b--;
    });
  };
  function mk(a) {
    return qk(a).then(function(b2) {
      var c = rk(sk(b2, false));
      return c.getAll ? tk(c.getAll()) : new C2(function(d, e) {
        var f = [], g2 = c.openCursor();
        g2.onsuccess = function(h) {
          (h = h.target.result) ? (f.push(h.value), h["continue"]()) : d(f);
        };
        g2.onerror = function(h) {
          e(h.target.error);
        };
      });
    }).then(function(b2) {
      var c = {}, d = [];
      if (0 == a.b) {
        for (d = 0; d < b2.length; d++)
          c[b2[d].fbase_key] = b2[d].value;
        d = oe2(a.c, c);
        a.c = c;
      }
      return d;
    });
  }
  k2.ca = function(a) {
    0 == this.a.length && vk(this);
    this.a.push(a);
  };
  k2.ia = function(a) {
    Va2(this.a, function(b2) {
      return b2 == a;
    });
    0 == this.a.length && wk(this);
  };
  function vk(a) {
    function b2() {
      a.f = setTimeout(function() {
        a.i = mk(a).then(function(c) {
          0 < c.length && w2(a.a, function(d) {
            d(c);
          });
        }).then(function() {
          b2();
        }).s(function(c) {
          "STOP_EVENT" != c.message && b2();
        });
      }, 800);
    }
    wk(a);
    b2();
  }
  function wk(a) {
    a.i && a.i.cancel("STOP_EVENT");
    a.f && (clearTimeout(a.f), a.f = null);
  }
  function xk(a) {
    var b2 = this, c = null;
    this.a = [];
    this.type = "indexedDB";
    this.c = a;
    this.b = D2().then(function() {
      if (lk()) {
        var d = Le2(), e = "__sak" + d;
        nk || (nk = new kk());
        c = nk;
        return c.set(e, d).then(function() {
          return c.get(e);
        }).then(function(f) {
          if (f !== d)
            throw Error("indexedDB not supported!");
          return c.T(e);
        }).then(function() {
          return c;
        }).s(function() {
          return b2.c;
        });
      }
      return b2.c;
    }).then(function(d) {
      b2.type = d.type;
      d.ca(function(e) {
        w2(b2.a, function(f) {
          f(e);
        });
      });
      return d;
    });
  }
  k2 = xk.prototype;
  k2.get = function(a) {
    return this.b.then(function(b2) {
      return b2.get(a);
    });
  };
  k2.set = function(a, b2) {
    return this.b.then(function(c) {
      return c.set(a, b2);
    });
  };
  k2.T = function(a) {
    return this.b.then(function(b2) {
      return b2.T(a);
    });
  };
  k2.ca = function(a) {
    this.a.push(a);
  };
  k2.ia = function(a) {
    Va2(this.a, function(b2) {
      return b2 == a;
    });
  };
  function yk() {
    this.a = {};
    this.type = "inMemory";
  }
  k2 = yk.prototype;
  k2.get = function(a) {
    return D2(this.a[a]);
  };
  k2.set = function(a, b2) {
    this.a[a] = b2;
    return D2();
  };
  k2.T = function(a) {
    delete this.a[a];
    return D2();
  };
  k2.ca = function() {
  };
  k2.ia = function() {
  };
  function zk() {
    if (!Ak()) {
      if ("Node" == Fe2())
        throw new t("internal-error", "The LocalStorage compatibility library was not found.");
      throw new t("web-storage-unsupported");
    }
    this.a = Bk() || firebase$1$1.INTERNAL.node.localStorage;
    this.type = "localStorage";
  }
  function Bk() {
    try {
      var a = l.localStorage, b2 = Le2();
      a && (a.setItem(b2, "1"), a.removeItem(b2));
      return a;
    } catch (c) {
      return null;
    }
  }
  function Ak() {
    var a = "Node" == Fe2();
    a = Bk() || a && firebase$1$1.INTERNAL.node && firebase$1$1.INTERNAL.node.localStorage;
    if (!a)
      return false;
    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), true;
    } catch (b2) {
      return false;
    }
  }
  k2 = zk.prototype;
  k2.get = function(a) {
    var b2 = this;
    return D2().then(function() {
      var c = b2.a.getItem(a);
      return Re2(c);
    });
  };
  k2.set = function(a, b2) {
    var c = this;
    return D2().then(function() {
      var d = Pe2(b2);
      null === d ? c.T(a) : c.a.setItem(a, d);
    });
  };
  k2.T = function(a) {
    var b2 = this;
    return D2().then(function() {
      b2.a.removeItem(a);
    });
  };
  k2.ca = function(a) {
    l.window && jd2(l.window, "storage", a);
  };
  k2.ia = function(a) {
    l.window && G2(l.window, "storage", a);
  };
  function Ck() {
    this.type = "nullStorage";
  }
  k2 = Ck.prototype;
  k2.get = function() {
    return D2(null);
  };
  k2.set = function() {
    return D2();
  };
  k2.T = function() {
    return D2();
  };
  k2.ca = function() {
  };
  k2.ia = function() {
  };
  function Dk() {
    if (!Ek()) {
      if ("Node" == Fe2())
        throw new t("internal-error", "The SessionStorage compatibility library was not found.");
      throw new t("web-storage-unsupported");
    }
    this.a = Fk() || firebase$1$1.INTERNAL.node.sessionStorage;
    this.type = "sessionStorage";
  }
  function Fk() {
    try {
      var a = l.sessionStorage, b2 = Le2();
      a && (a.setItem(b2, "1"), a.removeItem(b2));
      return a;
    } catch (c) {
      return null;
    }
  }
  function Ek() {
    var a = "Node" == Fe2();
    a = Fk() || a && firebase$1$1.INTERNAL.node && firebase$1$1.INTERNAL.node.sessionStorage;
    if (!a)
      return false;
    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), true;
    } catch (b2) {
      return false;
    }
  }
  k2 = Dk.prototype;
  k2.get = function(a) {
    var b2 = this;
    return D2().then(function() {
      var c = b2.a.getItem(a);
      return Re2(c);
    });
  };
  k2.set = function(a, b2) {
    var c = this;
    return D2().then(function() {
      var d = Pe2(b2);
      null === d ? c.T(a) : c.a.setItem(a, d);
    });
  };
  k2.T = function(a) {
    var b2 = this;
    return D2().then(function() {
      b2.a.removeItem(a);
    });
  };
  k2.ca = function() {
  };
  k2.ia = function() {
  };
  function Gk() {
    var a = {};
    a.Browser = Hk;
    a.Node = Ik;
    a.ReactNative = Jk;
    a.Worker = Kk;
    this.a = a[Fe2()];
  }
  var Lk, Hk = { D: zk, ab: Dk }, Ik = { D: zk, ab: Dk }, Jk = { D: bk, ab: Ck }, Kk = { D: zk, ab: Ck };
  var Mk = { qd: "local", NONE: "none", sd: "session" };
  function Nk(a) {
    var b2 = new t("invalid-persistence-type"), c = new t("unsupported-persistence-type");
    a: {
      for (d in Mk)
        if (Mk[d] == a) {
          var d = true;
          break a;
        }
      d = false;
    }
    if (!d || "string" !== typeof a)
      throw b2;
    switch (Fe2()) {
      case "ReactNative":
        if ("session" === a)
          throw c;
        break;
      case "Node":
        if ("none" !== a)
          throw c;
        break;
      case "Worker":
        if ("session" === a || !lk() && "none" !== a)
          throw c;
        break;
      default:
        if (!Ke2() && "none" !== a)
          throw c;
    }
  }
  function Ok() {
    var a = !Se2(K2()) && De2() ? true : false, b2 = Oe2(), c = Ke2();
    this.v = a;
    this.h = b2;
    this.l = c;
    this.a = {};
    Lk || (Lk = new Gk());
    a = Lk;
    try {
      this.g = !le2() && Ze2() || !l.indexedDB ? new a.a.D() : new xk(Ee2() ? new yk() : new a.a.D());
    } catch (d) {
      this.g = new yk(), this.h = true;
    }
    try {
      this.i = new a.a.ab();
    } catch (d) {
      this.i = new yk();
    }
    this.m = new yk();
    this.f = q2(this.Xb, this);
    this.b = {};
  }
  var Pk;
  function Qk() {
    Pk || (Pk = new Ok());
    return Pk;
  }
  function Rk(a, b2) {
    switch (b2) {
      case "session":
        return a.i;
      case "none":
        return a.m;
      default:
        return a.g;
    }
  }
  function Sk(a, b2) {
    return "firebase:" + a.name + (b2 ? ":" + b2 : "");
  }
  function Tk(a, b2, c) {
    var d = Sk(b2, c), e = Rk(a, b2.D);
    return a.get(b2, c).then(function(f) {
      var g2 = null;
      try {
        g2 = Re2(l.localStorage.getItem(d));
      } catch (h) {
      }
      if (g2 && !f)
        return l.localStorage.removeItem(d), a.set(b2, g2, c);
      g2 && f && "localStorage" != e.type && l.localStorage.removeItem(d);
    });
  }
  k2 = Ok.prototype;
  k2.get = function(a, b2) {
    return Rk(this, a.D).get(Sk(a, b2));
  };
  function Uk(a, b2, c) {
    c = Sk(b2, c);
    "local" == b2.D && (a.b[c] = null);
    return Rk(a, b2.D).T(c);
  }
  k2.set = function(a, b2, c) {
    var d = Sk(a, c), e = this, f = Rk(this, a.D);
    return f.set(d, b2).then(function() {
      return f.get(d);
    }).then(function(g2) {
      "local" == a.D && (e.b[d] = g2);
    });
  };
  k2.addListener = function(a, b2, c) {
    a = Sk(a, b2);
    this.l && (this.b[a] = l.localStorage.getItem(a));
    kb2(this.a) && (Rk(this, "local").ca(this.f), this.h || (le2() || !Ze2()) && l.indexedDB || !this.l || Vk(this));
    this.a[a] || (this.a[a] = []);
    this.a[a].push(c);
  };
  k2.removeListener = function(a, b2, c) {
    a = Sk(a, b2);
    this.a[a] && (Va2(this.a[a], function(d) {
      return d == c;
    }), 0 == this.a[a].length && delete this.a[a]);
    kb2(this.a) && (Rk(this, "local").ia(this.f), Wk(this));
  };
  function Vk(a) {
    Wk(a);
    a.c = setInterval(function() {
      for (var b2 in a.a) {
        var c = l.localStorage.getItem(b2), d = a.b[b2];
        c != d && (a.b[b2] = c, c = new Yc2({ type: "storage", key: b2, target: window, oldValue: d, newValue: c, a: true }), a.Xb(c));
      }
    }, 1e3);
  }
  function Wk(a) {
    a.c && (clearInterval(a.c), a.c = null);
  }
  k2.Xb = function(a) {
    if (a && a.g) {
      var b2 = a.a.key;
      if (null == b2)
        for (var c in this.a) {
          var d = this.b[c];
          "undefined" === typeof d && (d = null);
          var e = l.localStorage.getItem(c);
          e !== d && (this.b[c] = e, this.lb(c));
        }
      else if (0 == b2.indexOf("firebase:") && this.a[b2]) {
        "undefined" !== typeof a.a.a ? Rk(this, "local").ia(this.f) : Wk(this);
        if (this.v) {
          if (c = l.localStorage.getItem(b2), d = a.a.newValue, d !== c)
            null !== d ? l.localStorage.setItem(b2, d) : l.localStorage.removeItem(b2);
          else if (this.b[b2] === d && "undefined" === typeof a.a.a)
            return;
        }
        var f = this;
        c = function() {
          if ("undefined" !== typeof a.a.a || f.b[b2] !== l.localStorage.getItem(b2))
            f.b[b2] = l.localStorage.getItem(b2), f.lb(b2);
        };
        Tb2 && dc2 && 10 == dc2 && l.localStorage.getItem(b2) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(c, 10) : c();
      }
    } else
      w2(a, q2(this.lb, this));
  };
  k2.lb = function(a) {
    this.a[a] && w2(this.a[a], function(b2) {
      b2();
    });
  };
  function Xk(a) {
    this.a = a;
    this.b = Qk();
  }
  var Yk = { name: "authEvent", D: "local" };
  function Zk(a) {
    return a.b.get(Yk, a.a).then(function(b2) {
      return ph(b2);
    });
  }
  function $k() {
    this.a = Qk();
  }
  function al() {
    this.b = -1;
  }
  function bl(a, b2) {
    this.b = cl;
    this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
    this.g = this.c = 0;
    this.a = [];
    this.i = a;
    this.h = b2;
    this.l = l.Int32Array ? new Int32Array(64) : Array(64);
    void 0 === dl && (l.Int32Array ? dl = new Int32Array(el) : dl = el);
    this.reset();
  }
  var dl;
  r2(bl, al);
  for (var cl = 64, fl = cl - 1, gl = [], hl = 0; hl < fl; hl++)
    gl[hl] = 0;
  var il = Wa2(128, gl);
  bl.prototype.reset = function() {
    this.g = this.c = 0;
    this.a = l.Int32Array ? new Int32Array(this.h) : Xa2(this.h);
  };
  function jl(a) {
    for (var b2 = a.f, c = a.l, d = 0, e = 0; e < b2.length; )
      c[d++] = b2[e] << 24 | b2[e + 1] << 16 | b2[e + 2] << 8 | b2[e + 3], e = 4 * d;
    for (b2 = 16; 64 > b2; b2++) {
      e = c[b2 - 15] | 0;
      d = c[b2 - 2] | 0;
      var f = (c[b2 - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0, g2 = (c[b2 - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
      c[b2] = f + g2 | 0;
    }
    d = a.a[0] | 0;
    e = a.a[1] | 0;
    var h = a.a[2] | 0, m = a.a[3] | 0, p2 = a.a[4] | 0, v2 = a.a[5] | 0, B2 = a.a[6] | 0;
    f = a.a[7] | 0;
    for (b2 = 0; 64 > b2; b2++) {
      var A2 = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
      g2 = p2 & v2 ^ ~p2 & B2;
      f = f + ((p2 >>> 6 | p2 << 26) ^ (p2 >>> 11 | p2 << 21) ^ (p2 >>> 25 | p2 << 7)) | 0;
      g2 = g2 + (dl[b2] | 0) | 0;
      g2 = f + (g2 + (c[b2] | 0) | 0) | 0;
      f = B2;
      B2 = v2;
      v2 = p2;
      p2 = m + g2 | 0;
      m = h;
      h = e;
      e = d;
      d = g2 + A2 | 0;
    }
    a.a[0] = a.a[0] + d | 0;
    a.a[1] = a.a[1] + e | 0;
    a.a[2] = a.a[2] + h | 0;
    a.a[3] = a.a[3] + m | 0;
    a.a[4] = a.a[4] + p2 | 0;
    a.a[5] = a.a[5] + v2 | 0;
    a.a[6] = a.a[6] + B2 | 0;
    a.a[7] = a.a[7] + f | 0;
  }
  function kl(a, b2, c) {
    void 0 === c && (c = b2.length);
    var d = 0, e = a.c;
    if ("string" === typeof b2)
      for (; d < c; )
        a.f[e++] = b2.charCodeAt(d++), e == a.b && (jl(a), e = 0);
    else if (ma2(b2))
      for (; d < c; ) {
        var f = b2[d++];
        if (!("number" == typeof f && 0 <= f && 255 >= f && f == (f | 0)))
          throw Error("message must be a byte array");
        a.f[e++] = f;
        e == a.b && (jl(a), e = 0);
      }
    else
      throw Error("message must be string or array");
    a.c = e;
    a.g += c;
  }
  var el = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  function ll() {
    bl.call(this, 8, ml);
  }
  r2(ll, bl);
  var ml = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  function nl(a, b2, c, d, e, f) {
    this.m = a;
    this.i = b2;
    this.l = c;
    this.v = d || null;
    this.u = e || null;
    this.o = f;
    this.h = b2 + ":" + c;
    this.A = new $k();
    this.g = new Xk(this.h);
    this.f = null;
    this.b = [];
    this.a = this.c = null;
  }
  function ol(a) {
    return new t("invalid-cordova-configuration", a);
  }
  k2 = nl.prototype;
  k2.la = function() {
    return this.Ia ? this.Ia : this.Ia = Ae2().then(function() {
      if ("function" !== typeof L2("universalLinks.subscribe", l))
        throw ol("cordova-universal-links-plugin-fix is not installed");
      if ("undefined" === typeof L2("BuildInfo.packageName", l))
        throw ol("cordova-plugin-buildinfo is not installed");
      if ("function" !== typeof L2("cordova.plugins.browsertab.openUrl", l))
        throw ol("cordova-plugin-browsertab is not installed");
      if ("function" !== typeof L2("cordova.InAppBrowser.open", l))
        throw ol("cordova-plugin-inappbrowser is not installed");
    }, function() {
      throw new t("cordova-not-ready");
    });
  };
  function pl() {
    for (var a = 20, b2 = []; 0 < a; )
      b2.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
    return b2.join("");
  }
  function ql(a) {
    var b2 = new ll();
    kl(b2, a);
    a = [];
    var c = 8 * b2.g;
    56 > b2.c ? kl(b2, il, 56 - b2.c) : kl(b2, il, b2.b - (b2.c - 56));
    for (var d = 63; 56 <= d; d--)
      b2.f[d] = c & 255, c /= 256;
    jl(b2);
    for (d = c = 0; d < b2.i; d++)
      for (var e = 24; 0 <= e; e -= 8)
        a[c++] = b2.a[d] >> e & 255;
    return Zf(a);
  }
  k2.Nb = function(a, b2) {
    b2(new t("operation-not-supported-in-this-environment"));
    return D2();
  };
  k2.Lb = function() {
    return E2(new t("operation-not-supported-in-this-environment"));
  };
  k2.Zb = function() {
    return false;
  };
  k2.Wb = function() {
    return true;
  };
  k2.Sb = function() {
    return true;
  };
  k2.Mb = function(a, b2, c, d) {
    if (this.c)
      return E2(new t("redirect-operation-pending"));
    var e = this, f = l.document, g2 = null, h = null, m = null, p2 = null;
    return this.c = D2().then(function() {
      nh(b2);
      return rl(e);
    }).then(function() {
      return sl(e, a, b2, c, d);
    }).then(function() {
      return new C2(function(v2, B2) {
        h = function() {
          var A2 = L2("cordova.plugins.browsertab.close", l);
          v2();
          "function" === typeof A2 && A2();
          e.a && "function" === typeof e.a.close && (e.a.close(), e.a = null);
          return false;
        };
        e.Ea(h);
        m = function() {
          g2 || (g2 = Ad2(2e3).then(function() {
            B2(new t("redirect-cancelled-by-user"));
          }));
        };
        p2 = function() {
          Ve2() && m();
        };
        f.addEventListener("resume", m, false);
        K2().toLowerCase().match(/android/) || f.addEventListener("visibilitychange", p2, false);
      }).s(function(v2) {
        return tl(e).then(function() {
          throw v2;
        });
      });
    }).na(function() {
      m && f.removeEventListener("resume", m, false);
      p2 && f.removeEventListener("visibilitychange", p2, false);
      g2 && g2.cancel();
      h && e.Ra(h);
      e.c = null;
    });
  };
  function sl(a, b2, c, d, e) {
    var f = pl(), g2 = new oh(b2, d, null, f, new t("no-auth-event"), null, e), h = L2("BuildInfo.packageName", l);
    if ("string" !== typeof h)
      throw new t("invalid-cordova-configuration");
    var m = L2("BuildInfo.displayName", l), p2 = {};
    if (K2().toLowerCase().match(/iphone|ipad|ipod/))
      p2.ibi = h;
    else if (K2().toLowerCase().match(/android/))
      p2.apn = h;
    else
      return E2(new t("operation-not-supported-in-this-environment"));
    m && (p2.appDisplayName = m);
    f = ql(f);
    p2.sessionId = f;
    var v2 = ak(a.m, a.i, a.l, b2, c, null, d, a.v, p2, a.u, e, a.o);
    return a.la().then(function() {
      var B2 = a.h;
      return a.A.a.set(Yk, g2.w(), B2);
    }).then(function() {
      var B2 = L2("cordova.plugins.browsertab.isAvailable", l);
      if ("function" !== typeof B2)
        throw new t("invalid-cordova-configuration");
      var A2 = null;
      B2(function(Q2) {
        if (Q2) {
          A2 = L2("cordova.plugins.browsertab.openUrl", l);
          if ("function" !== typeof A2)
            throw new t("invalid-cordova-configuration");
          A2(v2);
        } else {
          A2 = L2("cordova.InAppBrowser.open", l);
          if ("function" !== typeof A2)
            throw new t("invalid-cordova-configuration");
          Q2 = K2();
          a.a = A2(v2, Q2.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || Q2.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes");
        }
      });
    });
  }
  function ul(a, b2) {
    for (var c = 0; c < a.b.length; c++)
      try {
        a.b[c](b2);
      } catch (d) {
      }
  }
  function rl(a) {
    a.f || (a.f = a.la().then(function() {
      return new C2(function(b2) {
        function c(d) {
          b2(d);
          a.Ra(c);
          return false;
        }
        a.Ea(c);
        vl(a);
      });
    }));
    return a.f;
  }
  function tl(a) {
    var b2 = null;
    return Zk(a.g).then(function(c) {
      b2 = c;
      c = a.g;
      return Uk(c.b, Yk, c.a);
    }).then(function() {
      return b2;
    });
  }
  function vl(a) {
    function b2(g2) {
      d = true;
      e && e.cancel();
      tl(a).then(function(h) {
        var m = c;
        if (h && g2 && g2.url) {
          var p2 = null;
          m = tg(g2.url);
          -1 != m.indexOf("/__/auth/callback") && (p2 = J2(m), p2 = Re2(Xd(p2, "firebaseError") || null), p2 = (p2 = "object" === typeof p2 ? ya2(p2) : null) ? new oh(h.c, h.b, null, null, p2, null, h.S()) : new oh(h.c, h.b, m, h.f, null, null, h.S()));
          m = p2 || c;
        }
        ul(a, m);
      });
    }
    var c = new oh("unknown", null, null, null, new t("no-auth-event")), d = false, e = Ad2(500).then(function() {
      return tl(a).then(function() {
        d || ul(a, c);
      });
    }), f = l.handleOpenURL;
    l.handleOpenURL = function(g2) {
      0 == g2.toLowerCase().indexOf(L2("BuildInfo.packageName", l).toLowerCase() + "://") && b2({ url: g2 });
      if ("function" === typeof f)
        try {
          f(g2);
        } catch (h) {
          console.error(h);
        }
    };
    rh || (rh = new qh());
    sh(b2);
  }
  k2.Ea = function(a) {
    this.b.push(a);
    rl(this).s(function(b2) {
      "auth/invalid-cordova-configuration" === b2.code && (b2 = new oh("unknown", null, null, null, new t("no-auth-event")), a(b2));
    });
  };
  k2.Ra = function(a) {
    Va2(this.b, function(b2) {
      return b2 == a;
    });
  };
  function wl(a) {
    this.a = a;
    this.b = Qk();
  }
  var xl = { name: "pendingRedirect", D: "session" };
  function yl(a) {
    return a.b.set(xl, "pending", a.a);
  }
  function zl(a) {
    return Uk(a.b, xl, a.a);
  }
  function Al(a) {
    return a.b.get(xl, a.a).then(function(b2) {
      return "pending" == b2;
    });
  }
  function Bl(a, b2, c, d) {
    this.i = {};
    this.u = 0;
    this.O = a;
    this.m = b2;
    this.v = c;
    this.G = d;
    this.h = [];
    this.f = false;
    this.l = q2(this.o, this);
    this.b = new Cl();
    this.A = new Dl();
    this.g = new wl(El(this.m, this.v));
    this.c = {};
    this.c.unknown = this.b;
    this.c.signInViaRedirect = this.b;
    this.c.linkViaRedirect = this.b;
    this.c.reauthViaRedirect = this.b;
    this.c.signInViaPopup = this.A;
    this.c.linkViaPopup = this.A;
    this.c.reauthViaPopup = this.A;
    this.a = Fl(this.O, this.m, this.v, Ba2, this.G);
  }
  function Fl(a, b2, c, d, e) {
    var f = firebase$1$1.SDK_VERSION || null;
    return Be2() ? new nl(a, b2, c, f, d, e) : new Uj(a, b2, c, f, d, e);
  }
  Bl.prototype.reset = function() {
    this.f = false;
    this.a.Ra(this.l);
    this.a = Fl(this.O, this.m, this.v, null, this.G);
    this.i = {};
  };
  function Gl(a) {
    a.f || (a.f = true, a.a.Ea(a.l));
    var b2 = a.a;
    return a.a.la().s(function(c) {
      a.a == b2 && a.reset();
      throw c;
    });
  }
  function Hl(a) {
    a.a.Wb() && Gl(a).s(function(b2) {
      var c = new oh("unknown", null, null, null, new t("operation-not-supported-in-this-environment"));
      Il(b2) && a.o(c);
    });
    a.a.Sb() || Jl(a.b);
  }
  function Kl(a, b2) {
    Ta2(a.h, b2) || a.h.push(b2);
    a.f || Al(a.g).then(function(c) {
      c ? zl(a.g).then(function() {
        Gl(a).s(function(d) {
          var e = new oh("unknown", null, null, null, new t("operation-not-supported-in-this-environment"));
          Il(d) && a.o(e);
        });
      }) : Hl(a);
    }).s(function() {
      Hl(a);
    });
  }
  function Ll(a, b2) {
    Va2(a.h, function(c) {
      return c == b2;
    });
  }
  Bl.prototype.o = function(a) {
    if (!a)
      throw new t("invalid-auth-event");
    6e5 <= ua2() - this.u && (this.i = {}, this.u = 0);
    if (a && a.getUid() && this.i.hasOwnProperty(a.getUid()))
      return false;
    for (var b2 = false, c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      if (d.Eb(a.c, a.b)) {
        if (b2 = this.c[a.c])
          b2.h(a, d), a && (a.f || a.b) && (this.i[a.getUid()] = true, this.u = ua2());
        b2 = true;
        break;
      }
    }
    Jl(this.b);
    return b2;
  };
  var Ml = new Ue2(2e3, 1e4), Nl = new Ue2(3e4, 6e4);
  Bl.prototype.qa = function() {
    return this.b.qa();
  };
  function Ol(a, b2, c, d, e, f, g2) {
    return a.a.Lb(b2, c, d, function() {
      a.f || (a.f = true, a.a.Ea(a.l));
    }, function() {
      a.reset();
    }, e, f, g2);
  }
  function Il(a) {
    return a && "auth/cordova-not-ready" == a.code ? true : false;
  }
  function Pl(a, b2, c, d, e) {
    var f;
    return yl(a.g).then(function() {
      return a.a.Mb(b2, c, d, e).s(function(g2) {
        if (Il(g2))
          throw new t("operation-not-supported-in-this-environment");
        f = g2;
        return zl(a.g).then(function() {
          throw f;
        });
      }).then(function() {
        return a.a.Zb() ? new C2(function() {
        }) : zl(a.g).then(function() {
          return a.qa();
        }).then(function() {
        }).s(function() {
        });
      });
    });
  }
  function Ql(a, b2, c, d, e) {
    return a.a.Nb(d, function(f) {
      b2.ma(c, null, f, e);
    }, Ml.get());
  }
  var Rl = {};
  function El(a, b2, c) {
    a = a + ":" + b2;
    c && (a = a + ":" + c.url);
    return a;
  }
  function Sl(a, b2, c, d) {
    var e = El(b2, c, d);
    Rl[e] || (Rl[e] = new Bl(a, b2, c, d));
    return Rl[e];
  }
  function Cl() {
    this.b = null;
    this.f = [];
    this.c = [];
    this.a = null;
    this.i = this.g = false;
  }
  Cl.prototype.reset = function() {
    this.b = null;
    this.a && (this.a.cancel(), this.a = null);
  };
  Cl.prototype.h = function(a, b2) {
    if (a) {
      this.reset();
      this.g = true;
      var c = a.c, d = a.b, e = a.a && "auth/web-storage-unsupported" == a.a.code, f = a.a && "auth/operation-not-supported-in-this-environment" == a.a.code;
      this.i = !(!e && !f);
      "unknown" != c || e || f ? a.a ? (Tl(this, true, null, a.a), D2()) : b2.Fa(c, d) ? Ul(this, a, b2) : E2(new t("invalid-auth-event")) : (Tl(this, false, null, null), D2());
    } else
      E2(new t("invalid-auth-event"));
  };
  function Jl(a) {
    a.g || (a.g = true, Tl(a, false, null, null));
  }
  function Vl(a) {
    a.g && !a.i && Tl(a, false, null, null);
  }
  function Ul(a, b2, c) {
    c = c.Fa(b2.c, b2.b);
    var d = b2.g, e = b2.f, f = b2.i, g2 = b2.S(), h = !!b2.c.match(/Redirect$/);
    c(d, e, g2, f).then(function(m) {
      Tl(a, h, m, null);
    }).s(function(m) {
      Tl(a, h, null, m);
    });
  }
  function Wl(a, b2) {
    a.b = function() {
      return E2(b2);
    };
    if (a.c.length)
      for (var c = 0; c < a.c.length; c++)
        a.c[c](b2);
  }
  function Xl(a, b2) {
    a.b = function() {
      return D2(b2);
    };
    if (a.f.length)
      for (var c = 0; c < a.f.length; c++)
        a.f[c](b2);
  }
  function Tl(a, b2, c, d) {
    b2 ? d ? Wl(a, d) : Xl(a, c) : Xl(a, { user: null });
    a.f = [];
    a.c = [];
  }
  Cl.prototype.qa = function() {
    var a = this;
    return new C2(function(b2, c) {
      a.b ? a.b().then(b2, c) : (a.f.push(b2), a.c.push(c), Yl(a));
    });
  };
  function Yl(a) {
    var b2 = new t("timeout");
    a.a && a.a.cancel();
    a.a = Ad2(Nl.get()).then(function() {
      a.b || (a.g = true, Tl(a, true, null, b2));
    });
  }
  function Dl() {
  }
  Dl.prototype.h = function(a, b2) {
    if (a) {
      var c = a.c, d = a.b;
      a.a ? (b2.ma(a.c, null, a.a, a.b), D2()) : b2.Fa(c, d) ? Zl(a, b2) : E2(new t("invalid-auth-event"));
    } else
      E2(new t("invalid-auth-event"));
  };
  function Zl(a, b2) {
    var c = a.b, d = a.c;
    b2.Fa(d, c)(a.g, a.f, a.S(), a.i).then(function(e) {
      b2.ma(d, e, null, c);
    }).s(function(e) {
      b2.ma(d, null, e, c);
    });
  }
  function $l() {
    this.hb = false;
    Object.defineProperty(this, "appVerificationDisabled", { get: function() {
      return this.hb;
    }, set: function(a) {
      this.hb = a;
    }, enumerable: false });
  }
  function am(a, b2) {
    this.a = b2;
    M2(this, "verificationId", a);
  }
  am.prototype.confirm = function(a) {
    a = lh(this.verificationId, a);
    return this.a(a);
  };
  function bm(a, b2, c, d) {
    return new hh(a).eb(b2, c).then(function(e) {
      return new am(e, d);
    });
  }
  function cm(a) {
    var b2 = eg(a);
    if (!(b2 && b2.exp && b2.auth_time && b2.iat))
      throw new t("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
    N2(this, { token: a, expirationTime: Ye2(1e3 * b2.exp), authTime: Ye2(1e3 * b2.auth_time), issuedAtTime: Ye2(1e3 * b2.iat), signInProvider: b2.firebase && b2.firebase.sign_in_provider ? b2.firebase.sign_in_provider : null, signInSecondFactor: b2.firebase && b2.firebase.sign_in_second_factor ? b2.firebase.sign_in_second_factor : null, claims: b2 });
  }
  function dm(a, b2, c) {
    var d = b2 && b2[em];
    if (!d)
      throw new t("argument-error", "Internal assert: Invalid MultiFactorResolver");
    this.a = a;
    this.f = lb2(b2);
    this.g = c;
    this.c = new ug(null, d);
    this.b = [];
    var e = this;
    w2(b2[fm] || [], function(f) {
      (f = pf(f)) && e.b.push(f);
    });
    M2(this, "auth", this.a);
    M2(this, "session", this.c);
    M2(this, "hints", this.b);
  }
  var fm = "mfaInfo", em = "mfaPendingCredential";
  dm.prototype.Qc = function(a) {
    var b2 = this;
    return a.rb(this.a.a, this.c).then(function(c) {
      var d = lb2(b2.f);
      delete d[fm];
      delete d[em];
      z2(d, c);
      return b2.g(d);
    });
  };
  function gm(a, b2, c, d) {
    t.call(this, "multi-factor-auth-required", d, b2);
    this.b = new dm(a, b2, c);
    M2(this, "resolver", this.b);
  }
  r2(gm, t);
  function hm(a, b2, c) {
    if (a && n2(a.serverResponse) && "auth/multi-factor-auth-required" === a.code)
      try {
        return new gm(b2, a.serverResponse, c, a.message);
      } catch (d) {
      }
    return null;
  }
  function im() {
  }
  im.prototype.rb = function(a, b2, c) {
    return b2.type == vg ? jm(this, a, b2, c) : km(this, a, b2);
  };
  function jm(a, b2, c, d) {
    return c.Ha().then(function(e) {
      e = { idToken: e };
      "undefined" !== typeof d && (e.displayName = d);
      z2(e, { phoneVerificationInfo: dh(a.a) });
      return O2(b2, Cj, e);
    });
  }
  function km(a, b2, c) {
    return c.Ha().then(function(d) {
      d = { mfaPendingCredential: d };
      z2(d, { phoneVerificationInfo: dh(a.a) });
      return O2(b2, Dj, d);
    });
  }
  function lm(a) {
    M2(this, "factorId", a.fa);
    this.a = a;
  }
  r2(lm, im);
  function mm(a) {
    lm.call(this, a);
    if (this.a.fa != hh.PROVIDER_ID)
      throw new t("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
  }
  r2(mm, lm);
  function nm(a, b2) {
    F2.call(this, a);
    for (var c in b2)
      this[c] = b2[c];
  }
  r2(nm, F2);
  function om(a, b2) {
    this.a = a;
    this.b = [];
    this.c = q2(this.xc, this);
    jd2(this.a, "userReloaded", this.c);
    var c = [];
    b2 && b2.multiFactor && b2.multiFactor.enrolledFactors && w2(b2.multiFactor.enrolledFactors, function(d) {
      var e = null, f = {};
      if (d) {
        d.uid && (f[mf] = d.uid);
        d.displayName && (f[nf] = d.displayName);
        d.enrollmentTime && (f[of] = new Date(d.enrollmentTime).toISOString());
        d.phoneNumber && (f[lf] = d.phoneNumber);
        try {
          e = new qf(f);
        } catch (g2) {
        }
        d = e;
      } else
        d = null;
      d && c.push(d);
    });
    pm(this, c);
  }
  function qm(a) {
    var b2 = [];
    w2(a.mfaInfo || [], function(c) {
      (c = pf(c)) && b2.push(c);
    });
    return b2;
  }
  k2 = om.prototype;
  k2.xc = function(a) {
    pm(this, qm(a.gd));
  };
  function pm(a, b2) {
    a.b = b2;
    M2(a, "enrolledFactors", b2);
  }
  k2.Qb = function() {
    return this.a.I().then(function(a) {
      return new ug(a, null);
    });
  };
  k2.ec = function(a, b2) {
    var c = this, d = this.a.a;
    return this.Qb().then(function(e) {
      return a.rb(d, e, b2);
    }).then(function(e) {
      rm(c.a, e);
      return c.a.reload();
    });
  };
  k2.ad = function(a) {
    var b2 = this, c = "string" === typeof a ? a : a.uid, d = this.a.a;
    return this.a.I().then(function(e) {
      return O2(d, Hj, { idToken: e, mfaEnrollmentId: c });
    }).then(function(e) {
      var f = Oa2(b2.b, function(g2) {
        return g2.uid != c;
      });
      pm(b2, f);
      rm(b2.a, e);
      return b2.a.reload().s(function(g2) {
        if ("auth/user-token-expired" != g2.code)
          throw g2;
      });
    });
  };
  k2.w = function() {
    return { multiFactor: { enrolledFactors: Pa(this.b, function(a) {
      return a.w();
    }) } };
  };
  function sm(a, b2, c) {
    this.h = a;
    this.i = b2;
    this.g = c;
    this.c = 3e4;
    this.f = 96e4;
    this.b = null;
    this.a = this.c;
    if (this.f < this.c)
      throw Error("Proactive refresh lower bound greater than upper bound!");
  }
  sm.prototype.start = function() {
    this.a = this.c;
    tm(this, true);
  };
  function um(a, b2) {
    if (b2)
      return a.a = a.c, a.g();
    b2 = a.a;
    a.a *= 2;
    a.a > a.f && (a.a = a.f);
    return b2;
  }
  function tm(a, b2) {
    a.stop();
    a.b = Ad2(um(a, b2)).then(function() {
      return We2();
    }).then(function() {
      return a.h();
    }).then(function() {
      tm(a, true);
    }).s(function(c) {
      a.i(c) && tm(a, false);
    });
  }
  sm.prototype.stop = function() {
    this.b && (this.b.cancel(), this.b = null);
  };
  function vm(a) {
    this.c = a;
    this.b = this.a = null;
  }
  vm.prototype.w = function() {
    return { apiKey: this.c.c, refreshToken: this.a, accessToken: this.b && this.b.toString(), expirationTime: wm(this) };
  };
  function wm(a) {
    return a.b && 1e3 * a.b.c || 0;
  }
  function xm(a, b2) {
    var c = b2.refreshToken;
    a.b = fg(b2[zg] || "");
    a.a = c;
  }
  function ym(a, b2) {
    a.b = b2.b;
    a.a = b2.a;
  }
  function zm(a, b2) {
    return Si2(a.c, b2).then(function(c) {
      a.b = fg(c.access_token);
      a.a = c.refresh_token;
      return { accessToken: a.b.toString(), refreshToken: a.a };
    }).s(function(c) {
      "auth/user-token-expired" == c.code && (a.a = null);
      throw c;
    });
  }
  vm.prototype.getToken = function(a) {
    a = !!a;
    return this.b && !this.a ? E2(new t("user-token-expired")) : a || !this.b || ua2() > wm(this) - 3e4 ? this.a ? zm(this, { grant_type: "refresh_token", refresh_token: this.a }) : D2(null) : D2({ accessToken: this.b.toString(), refreshToken: this.a });
  };
  function Am(a, b2) {
    this.a = a || null;
    this.b = b2 || null;
    N2(this, { lastSignInTime: Ye2(b2 || null), creationTime: Ye2(a || null) });
  }
  function Bm(a) {
    return new Am(a.a, a.b);
  }
  Am.prototype.w = function() {
    return { lastLoginAt: this.b, createdAt: this.a };
  };
  function Cm(a, b2, c, d, e, f) {
    N2(this, { uid: a, displayName: d || null, photoURL: e || null, email: c || null, phoneNumber: f || null, providerId: b2 });
  }
  function Dm(a, b2, c) {
    this.G = [];
    this.l = a.apiKey;
    this.m = a.appName;
    this.o = a.authDomain || null;
    var d = firebase$1$1.SDK_VERSION ? Je2(firebase$1$1.SDK_VERSION) : null;
    this.a = new Ei2(this.l, Aa2(Ba2), d);
    a.emulatorConfig && Li2(this.a, a.emulatorConfig);
    this.b = new vm(this.a);
    Em(this, b2[zg]);
    xm(this.b, b2);
    M2(this, "refreshToken", this.b.a);
    Fm(this, c || {});
    H2.call(this);
    this.P = false;
    this.o && Me2() && (this.i = Sl(this.o, this.l, this.m));
    this.R = [];
    this.f = null;
    this.u = Gm(this);
    this.$ = q2(this.gb, this);
    var e = this;
    this.pa = null;
    this.Ba = function(f) {
      e.wa(f.h);
    };
    this.ba = null;
    this.za = function(f) {
      Li2(e.a, f.c);
    };
    this.W = null;
    this.X = [];
    this.Aa = function(f) {
      Hm(e, f.f);
    };
    this.aa = null;
    this.N = new om(this, c);
    M2(this, "multiFactor", this.N);
  }
  r2(Dm, H2);
  Dm.prototype.wa = function(a) {
    this.pa = a;
    Ki2(this.a, a);
  };
  Dm.prototype.ka = function() {
    return this.pa;
  };
  function Im(a, b2) {
    a.ba && G2(a.ba, "languageCodeChanged", a.Ba);
    (a.ba = b2) && jd2(b2, "languageCodeChanged", a.Ba);
  }
  function Jm(a, b2) {
    a.W && G2(a.W, "emulatorConfigChanged", a.za);
    (a.W = b2) && jd2(b2, "emulatorConfigChanged", a.za);
  }
  function Hm(a, b2) {
    a.X = b2;
    Ni2(a.a, firebase$1$1.SDK_VERSION ? Je2(firebase$1$1.SDK_VERSION, a.X) : null);
  }
  Dm.prototype.Ga = function() {
    return Xa2(this.X);
  };
  function Km(a, b2) {
    a.aa && G2(a.aa, "frameworkChanged", a.Aa);
    (a.aa = b2) && jd2(b2, "frameworkChanged", a.Aa);
  }
  Dm.prototype.gb = function() {
    this.u.b && (this.u.stop(), this.u.start());
  };
  function Lm(a) {
    try {
      return firebase$1$1.app(a.m).auth();
    } catch (b2) {
      throw new t("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.m + "'!");
    }
  }
  function Gm(a) {
    return new sm(function() {
      return a.I(true);
    }, function(b2) {
      return b2 && "auth/network-request-failed" == b2.code ? true : false;
    }, function() {
      var b2 = wm(a.b) - ua2() - 3e5;
      return 0 < b2 ? b2 : 0;
    });
  }
  function Mm(a) {
    a.A || a.u.b || (a.u.start(), G2(a, "tokenChanged", a.$), jd2(a, "tokenChanged", a.$));
  }
  function Nm(a) {
    G2(a, "tokenChanged", a.$);
    a.u.stop();
  }
  function Em(a, b2) {
    a.ya = b2;
    M2(a, "_lat", b2);
  }
  function Om(a, b2) {
    Va2(a.R, function(c) {
      return c == b2;
    });
  }
  function Pm(a) {
    for (var b2 = [], c = 0; c < a.R.length; c++)
      b2.push(a.R[c](a));
    return Fc2(b2).then(function() {
      return a;
    });
  }
  function Qm(a) {
    a.i && !a.P && (a.P = true, Kl(a.i, a));
  }
  function Fm(a, b2) {
    N2(a, { uid: b2.uid, displayName: b2.displayName || null, photoURL: b2.photoURL || null, email: b2.email || null, emailVerified: b2.emailVerified || false, phoneNumber: b2.phoneNumber || null, isAnonymous: b2.isAnonymous || false, tenantId: b2.tenantId || null, metadata: new Am(b2.createdAt, b2.lastLoginAt), providerData: [] });
    a.a.b = a.tenantId;
  }
  M2(Dm.prototype, "providerId", "firebase");
  function Rm() {
  }
  function Sm(a) {
    return D2().then(function() {
      if (a.A)
        throw new t("app-deleted");
    });
  }
  function Tm(a) {
    return Pa(a.providerData, function(b2) {
      return b2.providerId;
    });
  }
  function Um(a, b2) {
    b2 && (Vm(a, b2.providerId), a.providerData.push(b2));
  }
  function Vm(a, b2) {
    Va2(a.providerData, function(c) {
      return c.providerId == b2;
    });
  }
  function Wm(a, b2, c) {
    ("uid" != b2 || c) && a.hasOwnProperty(b2) && M2(a, b2, c);
  }
  function Xm(a, b2) {
    a != b2 && (N2(a, { uid: b2.uid, displayName: b2.displayName, photoURL: b2.photoURL, email: b2.email, emailVerified: b2.emailVerified, phoneNumber: b2.phoneNumber, isAnonymous: b2.isAnonymous, tenantId: b2.tenantId, providerData: [] }), b2.metadata ? M2(a, "metadata", Bm(b2.metadata)) : M2(a, "metadata", new Am()), w2(b2.providerData, function(c) {
      Um(a, c);
    }), ym(a.b, b2.b), M2(a, "refreshToken", a.b.a), pm(a.N, b2.N.b));
  }
  k2 = Dm.prototype;
  k2.reload = function() {
    var a = this;
    return R2(this, Sm(this).then(function() {
      return Ym(a).then(function() {
        return Pm(a);
      }).then(Rm);
    }));
  };
  function Ym(a) {
    return a.I().then(function(b2) {
      var c = a.isAnonymous;
      return Zm(a, b2).then(function() {
        c || Wm(a, "isAnonymous", false);
        return b2;
      });
    });
  }
  k2.nc = function(a) {
    return this.I(a).then(function(b2) {
      return new cm(b2);
    });
  };
  k2.I = function(a) {
    var b2 = this;
    return R2(this, Sm(this).then(function() {
      return b2.b.getToken(a);
    }).then(function(c) {
      if (!c)
        throw new t("internal-error");
      c.accessToken != b2.ya && (Em(b2, c.accessToken), b2.dispatchEvent(new nm("tokenChanged")));
      Wm(b2, "refreshToken", c.refreshToken);
      return c.accessToken;
    }));
  };
  function rm(a, b2) {
    b2[zg] && a.ya != b2[zg] && (xm(a.b, b2), a.dispatchEvent(new nm("tokenChanged")), Em(a, b2[zg]), Wm(a, "refreshToken", a.b.a));
  }
  function Zm(a, b2) {
    return O2(a.a, Ej, { idToken: b2 }).then(q2(a.Jc, a));
  }
  k2.Jc = function(a) {
    a = a.users;
    if (!a || !a.length)
      throw new t("internal-error");
    a = a[0];
    Fm(this, { uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified, phoneNumber: a.phoneNumber, lastLoginAt: a.lastLoginAt, createdAt: a.createdAt, tenantId: a.tenantId });
    for (var b2 = $m(a), c = 0; c < b2.length; c++)
      Um(this, b2[c]);
    Wm(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
    this.dispatchEvent(new nm("userReloaded", { gd: a }));
  };
  function $m(a) {
    return (a = a.providerUserInfo) && a.length ? Pa(a, function(b2) {
      return new Cm(b2.rawId, b2.providerId, b2.email, b2.displayName, b2.photoUrl, b2.phoneNumber);
    }) : [];
  }
  k2.Kc = function(a) {
    cf("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
    return this.sb(a);
  };
  k2.sb = function(a) {
    var b2 = this, c = null;
    return R2(this, a.c(this.a, this.uid).then(function(d) {
      rm(b2, d);
      c = an2(b2, d, "reauthenticate");
      b2.f = null;
      return b2.reload();
    }).then(function() {
      return c;
    }), true);
  };
  function bn2(a, b2) {
    return Ym(a).then(function() {
      if (Ta2(Tm(a), b2))
        return Pm(a).then(function() {
          throw new t("provider-already-linked");
        });
    });
  }
  k2.Bc = function(a) {
    cf("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
    return this.pb(a);
  };
  k2.pb = function(a) {
    var b2 = this, c = null;
    return R2(this, bn2(this, a.providerId).then(function() {
      return b2.I();
    }).then(function(d) {
      return a.b(b2.a, d);
    }).then(function(d) {
      c = an2(b2, d, "link");
      return cn2(b2, d);
    }).then(function() {
      return c;
    }));
  };
  k2.Cc = function(a, b2) {
    var c = this;
    return R2(this, bn2(this, "phone").then(function() {
      return bm(Lm(c), a, b2, q2(c.pb, c));
    }));
  };
  k2.Lc = function(a, b2) {
    var c = this;
    return R2(this, D2().then(function() {
      return bm(Lm(c), a, b2, q2(c.sb, c));
    }), true);
  };
  function an2(a, b2, c) {
    var d = mh(b2);
    b2 = kg(b2);
    return ff({ user: a, credential: d, additionalUserInfo: b2, operationType: c });
  }
  function cn2(a, b2) {
    rm(a, b2);
    return a.reload().then(function() {
      return a;
    });
  }
  k2.Ab = function(a) {
    var b2 = this;
    return R2(this, this.I().then(function(c) {
      return b2.a.Ab(c, a);
    }).then(function(c) {
      rm(b2, c);
      return b2.reload();
    }));
  };
  k2.dd = function(a) {
    var b2 = this;
    return R2(this, this.I().then(function(c) {
      return a.b(b2.a, c);
    }).then(function(c) {
      rm(b2, c);
      return b2.reload();
    }));
  };
  k2.Bb = function(a) {
    var b2 = this;
    return R2(this, this.I().then(function(c) {
      return b2.a.Bb(c, a);
    }).then(function(c) {
      rm(b2, c);
      return b2.reload();
    }));
  };
  k2.Cb = function(a) {
    if (void 0 === a.displayName && void 0 === a.photoURL)
      return Sm(this);
    var b2 = this;
    return R2(this, this.I().then(function(c) {
      return b2.a.Cb(c, { displayName: a.displayName, photoUrl: a.photoURL });
    }).then(function(c) {
      rm(b2, c);
      Wm(b2, "displayName", c.displayName || null);
      Wm(b2, "photoURL", c.photoUrl || null);
      w2(b2.providerData, function(d) {
        "password" === d.providerId && (M2(d, "displayName", b2.displayName), M2(d, "photoURL", b2.photoURL));
      });
      return Pm(b2);
    }).then(Rm));
  };
  k2.bd = function(a) {
    var b2 = this;
    return R2(this, Ym(this).then(function(c) {
      return Ta2(Tm(b2), a) ? nj(b2.a, c, [a]).then(function(d) {
        var e = {};
        w2(d.providerUserInfo || [], function(f) {
          e[f.providerId] = true;
        });
        w2(Tm(b2), function(f) {
          e[f] || Vm(b2, f);
        });
        e[hh.PROVIDER_ID] || M2(b2, "phoneNumber", null);
        return Pm(b2);
      }) : Pm(b2).then(function() {
        throw new t("no-such-provider");
      });
    }));
  };
  k2.delete = function() {
    var a = this;
    return R2(this, this.I().then(function(b2) {
      return O2(a.a, Bj, { idToken: b2 });
    }).then(function() {
      a.dispatchEvent(new nm("userDeleted"));
    })).then(function() {
      for (var b2 = 0; b2 < a.G.length; b2++)
        a.G[b2].cancel("app-deleted");
      Im(a, null);
      Jm(a, null);
      Km(a, null);
      a.G = [];
      a.A = true;
      Nm(a);
      M2(a, "refreshToken", null);
      a.i && Ll(a.i, a);
    });
  };
  k2.Eb = function(a, b2) {
    return "linkViaPopup" == a && (this.h || null) == b2 && this.g || "reauthViaPopup" == a && (this.h || null) == b2 && this.g || "linkViaRedirect" == a && (this.ga || null) == b2 || "reauthViaRedirect" == a && (this.ga || null) == b2 ? true : false;
  };
  k2.ma = function(a, b2, c, d) {
    "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.h || null) || (c && this.O ? this.O(c) : b2 && !c && this.g && this.g(b2), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O);
  };
  k2.Fa = function(a, b2) {
    return "linkViaPopup" == a && b2 == (this.h || null) ? q2(this.Jb, this) : "reauthViaPopup" == a && b2 == (this.h || null) ? q2(this.Kb, this) : "linkViaRedirect" == a && (this.ga || null) == b2 ? q2(this.Jb, this) : "reauthViaRedirect" == a && (this.ga || null) == b2 ? q2(this.Kb, this) : null;
  };
  k2.Dc = function(a) {
    var b2 = this;
    return dn2(this, "linkViaPopup", a, function() {
      return bn2(b2, a.providerId).then(function() {
        return Pm(b2);
      });
    }, false);
  };
  k2.Mc = function(a) {
    return dn2(this, "reauthViaPopup", a, function() {
      return D2();
    }, true);
  };
  function dn2(a, b2, c, d, e) {
    if (!Me2())
      return E2(new t("operation-not-supported-in-this-environment"));
    if (a.f && !e)
      return E2(a.f);
    var f = jg(c.providerId), g2 = Le2(a.uid + ":::"), h = null;
    (!Oe2() || De2()) && a.o && c.isOAuthProvider && (h = ak(a.o, a.l, a.m, b2, c, null, g2, firebase$1$1.SDK_VERSION || null, null, null, a.tenantId));
    var m = ue2(h, f && f.ua, f && f.ta);
    d = d().then(function() {
      en2(a);
      if (!e)
        return a.I().then(function() {
        });
    }).then(function() {
      return Ol(a.i, m, b2, c, g2, !!h, a.tenantId);
    }).then(function() {
      return new C2(function(p2, v2) {
        a.ma(b2, null, new t("cancelled-popup-request"), a.h || null);
        a.g = p2;
        a.O = v2;
        a.h = g2;
        a.c = Ql(a.i, a, b2, m, g2);
      });
    }).then(function(p2) {
      m && te2(m);
      return p2 ? ff(p2) : null;
    }).s(function(p2) {
      m && te2(m);
      throw p2;
    });
    return R2(a, d, e);
  }
  k2.Ec = function(a) {
    var b2 = this;
    return fn2(this, "linkViaRedirect", a, function() {
      return bn2(b2, a.providerId);
    }, false);
  };
  k2.Nc = function(a) {
    return fn2(this, "reauthViaRedirect", a, function() {
      return D2();
    }, true);
  };
  function fn2(a, b2, c, d, e) {
    if (!Me2())
      return E2(new t("operation-not-supported-in-this-environment"));
    if (a.f && !e)
      return E2(a.f);
    var f = null, g2 = Le2(a.uid + ":::");
    d = d().then(function() {
      en2(a);
      if (!e)
        return a.I().then(function() {
        });
    }).then(function() {
      a.ga = g2;
      return Pm(a);
    }).then(function(h) {
      a.ha && (h = a.ha, h = h.b.set(gn2, a.w(), h.a));
      return h;
    }).then(function() {
      return Pl(a.i, b2, c, g2, a.tenantId);
    }).s(function(h) {
      f = h;
      if (a.ha)
        return hn2(a.ha);
      throw f;
    }).then(function() {
      if (f)
        throw f;
    });
    return R2(a, d, e);
  }
  function en2(a) {
    if (!a.i || !a.P) {
      if (a.i && !a.P)
        throw new t("internal-error");
      throw new t("auth-domain-config-required");
    }
  }
  k2.Jb = function(a, b2, c, d) {
    var e = this;
    this.c && (this.c.cancel(), this.c = null);
    var f = null;
    c = this.I().then(function(g2) {
      return Dg(e.a, { requestUri: a, postBody: d, sessionId: b2, idToken: g2 });
    }).then(function(g2) {
      f = an2(e, g2, "link");
      return cn2(e, g2);
    }).then(function() {
      return f;
    });
    return R2(this, c);
  };
  k2.Kb = function(a, b2, c, d) {
    var e = this;
    this.c && (this.c.cancel(), this.c = null);
    var f = null, g2 = D2().then(function() {
      return yg(Eg(e.a, { requestUri: a, sessionId: b2, postBody: d, tenantId: c }), e.uid);
    }).then(function(h) {
      f = an2(e, h, "reauthenticate");
      rm(e, h);
      e.f = null;
      return e.reload();
    }).then(function() {
      return f;
    });
    return R2(this, g2, true);
  };
  k2.tb = function(a) {
    var b2 = this, c = null;
    return R2(this, this.I().then(function(d) {
      c = d;
      return "undefined" === typeof a || kb2(a) ? {} : Yf(new Of(a));
    }).then(function(d) {
      return b2.a.tb(c, d);
    }).then(function(d) {
      if (b2.email != d)
        return b2.reload();
    }).then(function() {
    }));
  };
  k2.Db = function(a, b2) {
    var c = this, d = null;
    return R2(this, this.I().then(function(e) {
      d = e;
      return "undefined" === typeof b2 || kb2(b2) ? {} : Yf(new Of(b2));
    }).then(function(e) {
      return c.a.Db(d, a, e);
    }).then(function(e) {
      if (c.email != e)
        return c.reload();
    }).then(function() {
    }));
  };
  function R2(a, b2, c) {
    var d = jn2(a, b2, c);
    a.G.push(d);
    d.na(function() {
      Ua2(a.G, d);
    });
    return d.s(function(e) {
      var f = null;
      e && "auth/multi-factor-auth-required" === e.code && (f = hm(e.w(), Lm(a), q2(a.ic, a)));
      throw f || e;
    });
  }
  k2.ic = function(a) {
    var b2 = null, c = this;
    a = yg(D2(a), c.uid).then(function(d) {
      b2 = an2(c, d, "reauthenticate");
      rm(c, d);
      c.f = null;
      return c.reload();
    }).then(function() {
      return b2;
    });
    return R2(this, a, true);
  };
  function jn2(a, b2, c) {
    return a.f && !c ? (b2.cancel(), E2(a.f)) : b2.s(function(d) {
      !d || "auth/user-disabled" != d.code && "auth/user-token-expired" != d.code || (a.f || a.dispatchEvent(new nm("userInvalidated")), a.f = d);
      throw d;
    });
  }
  k2.toJSON = function() {
    return this.w();
  };
  k2.w = function() {
    var a = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, tenantId: this.tenantId, providerData: [], apiKey: this.l, appName: this.m, authDomain: this.o, stsTokenManager: this.b.w(), redirectEventId: this.ga || null };
    this.metadata && z2(a, this.metadata.w());
    w2(this.providerData, function(b2) {
      a.providerData.push(gf(b2));
    });
    z2(a, this.N.w());
    return a;
  };
  function kn2(a) {
    if (!a.apiKey)
      return null;
    var b2 = { apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName, emulatorConfig: a.emulatorConfig }, c = {};
    if (a.stsTokenManager && a.stsTokenManager.accessToken)
      c[zg] = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null;
    else
      return null;
    var d = new Dm(b2, c, a);
    a.providerData && w2(a.providerData, function(e) {
      e && Um(d, ff(e));
    });
    a.redirectEventId && (d.ga = a.redirectEventId);
    return d;
  }
  function ln2(a, b2, c, d) {
    var e = new Dm(a, b2);
    c && (e.ha = c);
    d && Hm(e, d);
    return e.reload().then(function() {
      return e;
    });
  }
  function mn2(a, b2, c, d) {
    var e = a.b, f = {};
    f[zg] = e.b && e.b.toString();
    f.refreshToken = e.a;
    b2 = new Dm(b2 || { apiKey: a.l, authDomain: a.o, appName: a.m }, f);
    c && (b2.ha = c);
    d && Hm(b2, d);
    Xm(b2, a);
    return b2;
  }
  function nn2(a) {
    this.a = a;
    this.b = Qk();
  }
  var gn2 = { name: "redirectUser", D: "session" };
  function hn2(a) {
    return Uk(a.b, gn2, a.a);
  }
  function on2(a, b2) {
    return a.b.get(gn2, a.a).then(function(c) {
      c && b2 && (c.authDomain = b2);
      return kn2(c || {});
    });
  }
  function pn2(a) {
    this.a = a;
    this.b = Qk();
    this.c = null;
    this.f = qn2(this);
    this.b.addListener(rn2("local"), this.a, q2(this.g, this));
  }
  pn2.prototype.g = function() {
    var a = this, b2 = rn2("local");
    sn2(this, function() {
      return D2().then(function() {
        return a.c && "local" != a.c.D ? a.b.get(b2, a.a) : null;
      }).then(function(c) {
        if (c)
          return tn2(a, "local").then(function() {
            a.c = b2;
          });
      });
    });
  };
  function tn2(a, b2) {
    var c = [], d;
    for (d in Mk)
      Mk[d] !== b2 && c.push(Uk(a.b, rn2(Mk[d]), a.a));
    c.push(Uk(a.b, un2, a.a));
    return Ec2(c);
  }
  function qn2(a) {
    var b2 = rn2("local"), c = rn2("session"), d = rn2("none");
    return Tk(a.b, b2, a.a).then(function() {
      return a.b.get(c, a.a);
    }).then(function(e) {
      return e ? c : a.b.get(d, a.a).then(function(f) {
        return f ? d : a.b.get(b2, a.a).then(function(g2) {
          return g2 ? b2 : a.b.get(un2, a.a).then(function(h) {
            return h ? rn2(h) : b2;
          });
        });
      });
    }).then(function(e) {
      a.c = e;
      return tn2(a, e.D);
    }).s(function() {
      a.c || (a.c = b2);
    });
  }
  var un2 = { name: "persistence", D: "session" };
  function rn2(a) {
    return { name: "authUser", D: a };
  }
  pn2.prototype.wb = function(a) {
    var b2 = null, c = this;
    Nk(a);
    return sn2(this, function() {
      return a != c.c.D ? c.b.get(c.c, c.a).then(function(d) {
        b2 = d;
        return tn2(c, a);
      }).then(function() {
        c.c = rn2(a);
        if (b2)
          return c.b.set(c.c, b2, c.a);
      }) : D2();
    });
  };
  function vn2(a) {
    return sn2(a, function() {
      return a.b.set(un2, a.c.D, a.a);
    });
  }
  function wn2(a, b2) {
    return sn2(a, function() {
      return a.b.set(a.c, b2.w(), a.a);
    });
  }
  function xn2(a) {
    return sn2(a, function() {
      return Uk(a.b, a.c, a.a);
    });
  }
  function yn2(a, b2, c) {
    return sn2(a, function() {
      return a.b.get(a.c, a.a).then(function(d) {
        d && b2 && (d.authDomain = b2);
        d && c && (d.emulatorConfig = c);
        return kn2(d || {});
      });
    });
  }
  function sn2(a, b2) {
    a.f = a.f.then(b2, b2);
    return a.f;
  }
  function zn2(a) {
    this.m = false;
    M2(this, "settings", new $l());
    M2(this, "app", a);
    if (S2(this).options && S2(this).options.apiKey)
      a = firebase$1$1.SDK_VERSION ? Je2(firebase$1$1.SDK_VERSION) : null, this.a = new Ei2(S2(this).options && S2(this).options.apiKey, Aa2(Ba2), a);
    else
      throw new t("invalid-api-key");
    this.R = [];
    this.u = [];
    this.P = [];
    this.ac = firebase$1$1.INTERNAL.createSubscribe(q2(this.yc, this));
    this.X = void 0;
    this.bc = firebase$1$1.INTERNAL.createSubscribe(q2(this.zc, this));
    An2(this, null);
    this.l = new pn2(S2(this).options.apiKey + ":" + S2(this).name);
    this.G = new nn2(S2(this).options.apiKey + ":" + S2(this).name);
    this.$ = T2(this, Bn2(this));
    this.i = T2(this, Cn2(this));
    this.ba = false;
    this.pa = q2(this.Yc, this);
    this.Ba = q2(this.da, this);
    this.ya = q2(this.kc, this);
    this.za = q2(this.vc, this);
    this.Aa = q2(this.wc, this);
    this.b = null;
    Dn2(this);
    this.INTERNAL = {};
    this.INTERNAL["delete"] = q2(this.delete, this);
    this.INTERNAL.logFramework = q2(this.Fc, this);
    this.A = 0;
    H2.call(this);
    En2(this);
    this.N = [];
    this.f = null;
  }
  r2(zn2, H2);
  function Fn2(a) {
    F2.call(this, "languageCodeChanged");
    this.h = a;
  }
  r2(Fn2, F2);
  function Gn2(a) {
    F2.call(this, "emulatorConfigChanged");
    this.c = a;
  }
  r2(Gn2, F2);
  function Hn2(a) {
    F2.call(this, "frameworkChanged");
    this.f = a;
  }
  r2(Hn2, F2);
  k2 = zn2.prototype;
  k2.wb = function(a) {
    a = this.l.wb(a);
    return T2(this, a);
  };
  k2.wa = function(a) {
    this.aa === a || this.m || (this.aa = a, Ki2(this.a, this.aa), this.dispatchEvent(new Fn2(this.ka())));
  };
  k2.ka = function() {
    return this.aa;
  };
  k2.ed = function() {
    var a = l.navigator;
    this.wa(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null);
  };
  k2.fd = function(a) {
    if (!this.f) {
      if (!/^https?:\/\//.test(a))
        throw new t("argument-error", "Emulator URL must start with a valid scheme (http:// or https://).");
      In2();
      this.f = { url: a };
      this.settings.hb = true;
      Li2(this.a, this.f);
      this.dispatchEvent(new Gn2(this.f));
    }
  };
  function In2() {
    Xe2("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
    l.document && ze2().then(function() {
      var a = l.document.createElement("div");
      a.innerText = "Running in emulator mode. Do not use with production credentials.";
      a.style.position = "fixed";
      a.style.width = "100%";
      a.style.backgroundColor = "#ffffff";
      a.style.border = ".1em solid #000000";
      a.style.color = "#ff0000";
      a.style.bottom = "0px";
      a.style.left = "0px";
      a.style.margin = "0px";
      a.style.zIndex = 1e4;
      a.style.textAlign = "center";
      a.classList.add("firebase-emulator-warning");
      l.document.body.appendChild(a);
    });
  }
  k2.Fc = function(a) {
    this.N.push(a);
    Ni2(this.a, firebase$1$1.SDK_VERSION ? Je2(firebase$1$1.SDK_VERSION, this.N) : null);
    this.dispatchEvent(new Hn2(this.N));
  };
  k2.Ga = function() {
    return Xa2(this.N);
  };
  k2.xb = function(a) {
    this.W === a || this.m || (this.W = a, this.a.b = this.W);
  };
  k2.S = function() {
    return this.W;
  };
  function En2(a) {
    Object.defineProperty(a, "lc", { get: function() {
      return this.ka();
    }, set: function(b2) {
      this.wa(b2);
    }, enumerable: false });
    a.aa = null;
    Object.defineProperty(a, "ti", { get: function() {
      return this.S();
    }, set: function(b2) {
      this.xb(b2);
    }, enumerable: false });
    a.W = null;
  }
  k2.toJSON = function() {
    return { apiKey: S2(this).options.apiKey, authDomain: S2(this).options.authDomain, appName: S2(this).name, currentUser: U2(this) && U2(this).w() };
  };
  function Jn2(a) {
    return a.gb || E2(new t("auth-domain-config-required"));
  }
  function Dn2(a) {
    var b2 = S2(a).options.authDomain, c = S2(a).options.apiKey;
    b2 && Me2() && (a.gb = a.$.then(function() {
      if (!a.m) {
        a.b = Sl(b2, c, S2(a).name, a.f);
        Kl(a.b, a);
        U2(a) && Qm(U2(a));
        if (a.o) {
          Qm(a.o);
          var d = a.o;
          d.wa(a.ka());
          Im(d, a);
          d = a.o;
          Hm(d, a.N);
          Km(d, a);
          d = a.o;
          Li2(d.a, a.f);
          Jm(d, a);
          a.o = null;
        }
        return a.b;
      }
    }));
  }
  k2.Eb = function(a, b2) {
    switch (a) {
      case "unknown":
      case "signInViaRedirect":
        return true;
      case "signInViaPopup":
        return this.h == b2 && !!this.g;
      default:
        return false;
    }
  };
  k2.ma = function(a, b2, c, d) {
    "signInViaPopup" == a && this.h == d && (c && this.O ? this.O(c) : b2 && !c && this.g && this.g(b2), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O);
  };
  k2.Fa = function(a, b2) {
    return "signInViaRedirect" == a || "signInViaPopup" == a && this.h == b2 && this.g ? q2(this.hc, this) : null;
  };
  k2.hc = function(a, b2, c, d) {
    var e = this, f = { requestUri: a, postBody: d, sessionId: b2, tenantId: c };
    this.c && (this.c.cancel(), this.c = null);
    return e.$.then(function() {
      return Kn2(e, Bg(e.a, f));
    });
  };
  k2.Wc = function(a) {
    if (!Me2())
      return E2(new t("operation-not-supported-in-this-environment"));
    var b2 = this, c = jg(a.providerId), d = Le2(), e = null;
    (!Oe2() || De2()) && S2(this).options.authDomain && a.isOAuthProvider && (e = ak(S2(this).options.authDomain, S2(this).options.apiKey, S2(this).name, "signInViaPopup", a, null, d, firebase$1$1.SDK_VERSION || null, null, null, this.S(), this.f));
    var f = ue2(e, c && c.ua, c && c.ta);
    c = Jn2(this).then(function(g2) {
      return Ol(g2, f, "signInViaPopup", a, d, !!e, b2.S());
    }).then(function() {
      return new C2(function(g2, h) {
        b2.ma("signInViaPopup", null, new t("cancelled-popup-request"), b2.h);
        b2.g = g2;
        b2.O = h;
        b2.h = d;
        b2.c = Ql(b2.b, b2, "signInViaPopup", f, d);
      });
    }).then(function(g2) {
      f && te2(f);
      return g2 ? ff(g2) : null;
    }).s(function(g2) {
      f && te2(f);
      throw g2;
    });
    return T2(this, c);
  };
  k2.Xc = function(a) {
    if (!Me2())
      return E2(new t("operation-not-supported-in-this-environment"));
    var b2 = this, c = Jn2(this).then(function() {
      return vn2(b2.l);
    }).then(function() {
      return Pl(b2.b, "signInViaRedirect", a, void 0, b2.S());
    });
    return T2(this, c);
  };
  function Ln2(a) {
    if (!Me2())
      return E2(new t("operation-not-supported-in-this-environment"));
    var b2 = Jn2(a).then(function() {
      return a.b.qa();
    }).then(function(c) {
      return c ? ff(c) : null;
    });
    return T2(a, b2);
  }
  k2.qa = function() {
    var a = this;
    return Ln2(this).then(function(b2) {
      a.b && Vl(a.b.b);
      return b2;
    }).s(function(b2) {
      a.b && Vl(a.b.b);
      throw b2;
    });
  };
  k2.cd = function(a) {
    if (!a)
      return E2(new t("null-user"));
    if (this.W != a.tenantId)
      return E2(new t("tenant-id-mismatch"));
    var b2 = this, c = {};
    c.apiKey = S2(this).options.apiKey;
    c.authDomain = S2(this).options.authDomain;
    c.appName = S2(this).name;
    var d = mn2(a, c, b2.G, b2.Ga());
    return T2(this, this.i.then(function() {
      if (S2(b2).options.apiKey != a.l)
        return d.reload();
    }).then(function() {
      if (U2(b2) && a.uid == U2(b2).uid)
        return Xm(U2(b2), a), b2.da(a);
      An2(b2, d);
      Qm(d);
      return b2.da(d);
    }).then(function() {
      Mn2(b2);
    }));
  };
  function Nn2(a, b2) {
    var c = {};
    c.apiKey = S2(a).options.apiKey;
    c.authDomain = S2(a).options.authDomain;
    c.appName = S2(a).name;
    a.f && (c.emulatorConfig = a.f);
    return a.$.then(function() {
      return ln2(c, b2, a.G, a.Ga());
    }).then(function(d) {
      if (U2(a) && d.uid == U2(a).uid)
        return Xm(U2(a), d), a.da(d);
      An2(a, d);
      Qm(d);
      return a.da(d);
    }).then(function() {
      Mn2(a);
    });
  }
  function An2(a, b2) {
    U2(a) && (Om(U2(a), a.Ba), G2(U2(a), "tokenChanged", a.ya), G2(U2(a), "userDeleted", a.za), G2(U2(a), "userInvalidated", a.Aa), Nm(U2(a)));
    b2 && (b2.R.push(a.Ba), jd2(b2, "tokenChanged", a.ya), jd2(b2, "userDeleted", a.za), jd2(b2, "userInvalidated", a.Aa), 0 < a.A && Mm(b2));
    M2(a, "currentUser", b2);
    b2 && (b2.wa(a.ka()), Im(b2, a), Hm(b2, a.N), Km(b2, a), Li2(b2.a, a.f), Jm(b2, a));
  }
  k2.zb = function() {
    var a = this, b2 = this.i.then(function() {
      a.b && Vl(a.b.b);
      if (!U2(a))
        return D2();
      An2(a, null);
      return xn2(a.l).then(function() {
        Mn2(a);
      });
    });
    return T2(this, b2);
  };
  function On2(a) {
    var b2 = on2(a.G, S2(a).options.authDomain).then(function(c) {
      if (a.o = c)
        c.ha = a.G;
      return hn2(a.G);
    });
    return T2(a, b2);
  }
  function Bn2(a) {
    var b2 = S2(a).options.authDomain, c = On2(a).then(function() {
      return yn2(a.l, b2, a.f);
    }).then(function(d) {
      return d ? (d.ha = a.G, a.o && (a.o.ga || null) == (d.ga || null) ? d : d.reload().then(function() {
        return wn2(a.l, d).then(function() {
          return d;
        });
      }).s(function(e) {
        return "auth/network-request-failed" == e.code ? d : xn2(a.l);
      })) : null;
    }).then(function(d) {
      An2(a, d || null);
    });
    return T2(a, c);
  }
  function Cn2(a) {
    return a.$.then(function() {
      return Ln2(a);
    }).s(function() {
    }).then(function() {
      if (!a.m)
        return a.pa();
    }).s(function() {
    }).then(function() {
      if (!a.m) {
        a.ba = true;
        var b2 = a.l;
        b2.b.addListener(rn2("local"), b2.a, a.pa);
      }
    });
  }
  k2.Yc = function() {
    var a = this;
    return yn2(this.l, S2(this).options.authDomain).then(function(b2) {
      if (!a.m) {
        var c;
        if (c = U2(a) && b2) {
          c = U2(a).uid;
          var d = b2.uid;
          c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? false : c == d;
        }
        if (c)
          return Xm(U2(a), b2), U2(a).I();
        if (U2(a) || b2)
          An2(a, b2), b2 && (Qm(b2), b2.ha = a.G), a.b && Kl(a.b, a), Mn2(a);
      }
    });
  };
  k2.da = function(a) {
    return wn2(this.l, a);
  };
  k2.kc = function() {
    Mn2(this);
    this.da(U2(this));
  };
  k2.vc = function() {
    this.zb();
  };
  k2.wc = function() {
    this.zb();
  };
  function Kn2(a, b2) {
    var c = null, d = null;
    return T2(a, b2.then(function(e) {
      c = mh(e);
      d = kg(e);
      return Nn2(a, e);
    }, function(e) {
      var f = null;
      e && "auth/multi-factor-auth-required" === e.code && (f = hm(e.w(), a, q2(a.jc, a)));
      throw f || e;
    }).then(function() {
      return ff({ user: U2(a), credential: c, additionalUserInfo: d, operationType: "signIn" });
    }));
  }
  k2.jc = function(a) {
    var b2 = this;
    return this.i.then(function() {
      return Kn2(b2, D2(a));
    });
  };
  k2.yc = function(a) {
    var b2 = this;
    this.addAuthTokenListener(function() {
      a.next(U2(b2));
    });
  };
  k2.zc = function(a) {
    var b2 = this;
    Pn2(this, function() {
      a.next(U2(b2));
    });
  };
  k2.Hc = function(a, b2, c) {
    var d = this;
    this.ba && Promise.resolve().then(function() {
      "function" === typeof a ? a(U2(d)) : "function" === typeof a.next && a.next(U2(d));
    });
    return this.ac(a, b2, c);
  };
  k2.Gc = function(a, b2, c) {
    var d = this;
    this.ba && Promise.resolve().then(function() {
      d.X = d.getUid();
      "function" === typeof a ? a(U2(d)) : "function" === typeof a.next && a.next(U2(d));
    });
    return this.bc(a, b2, c);
  };
  k2.mc = function(a) {
    var b2 = this, c = this.i.then(function() {
      return U2(b2) ? U2(b2).I(a).then(function(d) {
        return { accessToken: d };
      }) : null;
    });
    return T2(this, c);
  };
  k2.Sc = function(a) {
    var b2 = this;
    return this.i.then(function() {
      return Kn2(b2, O2(b2.a, Gj, { token: a }));
    }).then(function(c) {
      var d = c.user;
      Wm(d, "isAnonymous", false);
      b2.da(d);
      return c;
    });
  };
  k2.Tc = function(a, b2) {
    var c = this;
    return this.i.then(function() {
      return Kn2(c, O2(c.a, Xg, { email: a, password: b2 }));
    });
  };
  k2.dc = function(a, b2) {
    var c = this;
    return this.i.then(function() {
      return Kn2(c, O2(c.a, Aj, { email: a, password: b2 }));
    });
  };
  k2.Za = function(a) {
    var b2 = this;
    return this.i.then(function() {
      return Kn2(b2, a.ja(b2.a));
    });
  };
  k2.Rc = function(a) {
    cf("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
    return this.Za(a);
  };
  k2.yb = function() {
    var a = this;
    return this.i.then(function() {
      var b2 = U2(a);
      if (b2 && b2.isAnonymous) {
        var c = ff({ providerId: null, isNewUser: false });
        return ff({ user: b2, credential: null, additionalUserInfo: c, operationType: "signIn" });
      }
      return Kn2(a, a.a.yb()).then(function(d) {
        var e = d.user;
        Wm(e, "isAnonymous", true);
        a.da(e);
        return d;
      });
    });
  };
  function S2(a) {
    return a.app;
  }
  function U2(a) {
    return a.currentUser;
  }
  k2.getUid = function() {
    return U2(this) && U2(this).uid || null;
  };
  function Qn2(a) {
    return U2(a) && U2(a)._lat || null;
  }
  function Mn2(a) {
    if (a.ba) {
      for (var b2 = 0; b2 < a.u.length; b2++)
        if (a.u[b2])
          a.u[b2](Qn2(a));
      if (a.X !== a.getUid() && a.P.length) {
        for (a.X = a.getUid(), b2 = 0; b2 < a.P.length; b2++)
          if (a.P[b2])
            a.P[b2](Qn2(a));
      }
    }
  }
  k2.cc = function(a) {
    this.addAuthTokenListener(a);
    this.A++;
    0 < this.A && U2(this) && Mm(U2(this));
  };
  k2.Oc = function(a) {
    var b2 = this;
    w2(this.u, function(c) {
      c == a && b2.A--;
    });
    0 > this.A && (this.A = 0);
    0 == this.A && U2(this) && Nm(U2(this));
    this.removeAuthTokenListener(a);
  };
  k2.addAuthTokenListener = function(a) {
    var b2 = this;
    this.u.push(a);
    T2(this, this.i.then(function() {
      b2.m || Ta2(b2.u, a) && a(Qn2(b2));
    }));
  };
  k2.removeAuthTokenListener = function(a) {
    Va2(this.u, function(b2) {
      return b2 == a;
    });
  };
  function Pn2(a, b2) {
    a.P.push(b2);
    T2(a, a.i.then(function() {
      !a.m && Ta2(a.P, b2) && a.X !== a.getUid() && (a.X = a.getUid(), b2(Qn2(a)));
    }));
  }
  k2.delete = function() {
    this.m = true;
    for (var a = 0; a < this.R.length; a++)
      this.R[a].cancel("app-deleted");
    this.R = [];
    this.l && (a = this.l, a.b.removeListener(rn2("local"), a.a, this.pa));
    this.b && (Ll(this.b, this), Vl(this.b.b));
    return Promise.resolve();
  };
  function T2(a, b2) {
    a.R.push(b2);
    b2.na(function() {
      Ua2(a.R, b2);
    });
    return b2;
  }
  k2.gc = function(a) {
    return T2(this, Xi2(this.a, a));
  };
  k2.Ac = function(a) {
    return !!bh(a);
  };
  k2.vb = function(a, b2) {
    var c = this;
    return T2(this, D2().then(function() {
      var d = new Of(b2);
      if (!d.c)
        throw new t("argument-error", Wf + " must be true when sending sign in link to email");
      return Yf(d);
    }).then(function(d) {
      return c.a.vb(a, d);
    }).then(function() {
    }));
  };
  k2.hd = function(a) {
    return this.Qa(a).then(function(b2) {
      return b2.data.email;
    });
  };
  k2.mb = function(a, b2) {
    return T2(this, this.a.mb(a, b2).then(function() {
    }));
  };
  k2.Qa = function(a) {
    return T2(this, this.a.Qa(a).then(function(b2) {
      return new rf(b2);
    }));
  };
  k2.ib = function(a) {
    return T2(this, this.a.ib(a).then(function() {
    }));
  };
  k2.ub = function(a, b2) {
    var c = this;
    return T2(this, D2().then(function() {
      return "undefined" === typeof b2 || kb2(b2) ? {} : Yf(new Of(b2));
    }).then(function(d) {
      return c.a.ub(a, d);
    }).then(function() {
    }));
  };
  k2.Vc = function(a, b2) {
    return T2(this, bm(this, a, b2, q2(this.Za, this)));
  };
  k2.Uc = function(a, b2) {
    var c = this;
    return T2(this, D2().then(function() {
      var d = b2 || me2(), e = ah(a, d);
      d = bh(d);
      if (!d)
        throw new t("argument-error", "Invalid email link!");
      if (d.tenantId !== c.S())
        throw new t("tenant-id-mismatch");
      return c.Za(e);
    }));
  };
  function Rn2() {
  }
  Rn2.prototype.render = function() {
  };
  Rn2.prototype.reset = function() {
  };
  Rn2.prototype.getResponse = function() {
  };
  Rn2.prototype.execute = function() {
  };
  function Sn2() {
    this.a = {};
    this.b = 1e12;
  }
  var Tn2 = null;
  Sn2.prototype.render = function(a, b2) {
    this.a[this.b.toString()] = new Un2(a, b2);
    return this.b++;
  };
  Sn2.prototype.reset = function(a) {
    var b2 = Vn2(this, a);
    a = Wn2(a);
    b2 && a && (b2.delete(), delete this.a[a]);
  };
  Sn2.prototype.getResponse = function(a) {
    return (a = Vn2(this, a)) ? a.getResponse() : null;
  };
  Sn2.prototype.execute = function(a) {
    (a = Vn2(this, a)) && a.execute();
  };
  function Vn2(a, b2) {
    return (b2 = Wn2(b2)) ? a.a[b2] || null : null;
  }
  function Wn2(a) {
    return (a = "undefined" === typeof a ? 1e12 : a) ? a.toString() : null;
  }
  function Un2(a, b2) {
    this.g = false;
    this.c = b2;
    this.a = this.b = null;
    this.h = "invisible" !== this.c.size;
    this.f = fc2(a);
    var c = this;
    this.i = function() {
      c.execute();
    };
    this.h ? this.execute() : jd2(this.f, "click", this.i);
  }
  Un2.prototype.getResponse = function() {
    Xn2(this);
    return this.b;
  };
  Un2.prototype.execute = function() {
    Xn2(this);
    var a = this;
    this.a || (this.a = setTimeout(function() {
      a.b = He2();
      var b2 = a.c.callback, c = a.c["expired-callback"];
      if (b2)
        try {
          b2(a.b);
        } catch (d) {
        }
      a.a = setTimeout(function() {
        a.a = null;
        a.b = null;
        if (c)
          try {
            c();
          } catch (d) {
          }
        a.h && a.execute();
      }, 6e4);
    }, 500));
  };
  Un2.prototype.delete = function() {
    Xn2(this);
    this.g = true;
    clearTimeout(this.a);
    this.a = null;
    G2(this.f, "click", this.i);
  };
  function Xn2(a) {
    if (a.g)
      throw Error("reCAPTCHA mock was already deleted!");
  }
  function Yn2() {
  }
  M2(Yn2, "FACTOR_ID", "phone");
  function Zn2() {
  }
  Zn2.prototype.g = function() {
    Tn2 || (Tn2 = new Sn2());
    return D2(Tn2);
  };
  Zn2.prototype.c = function() {
  };
  var $n2 = null;
  function ao2() {
    this.b = l.grecaptcha ? Infinity : 0;
    this.f = null;
    this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString();
  }
  var bo2 = new ob2(pb2, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"), co2 = new Ue2(3e4, 6e4);
  ao2.prototype.g = function(a) {
    var b2 = this;
    return new C2(function(c, d) {
      var e = setTimeout(function() {
        d(new t("network-request-failed"));
      }, co2.get());
      if (!l.grecaptcha || a !== b2.f && !b2.b) {
        l[b2.a] = function() {
          if (l.grecaptcha) {
            b2.f = a;
            var g2 = l.grecaptcha.render;
            l.grecaptcha.render = function(h, m) {
              h = g2(h, m);
              b2.b++;
              return h;
            };
            clearTimeout(e);
            c(l.grecaptcha);
          } else
            clearTimeout(e), d(new t("internal-error"));
          delete l[b2.a];
        };
        var f = xb2(bo2, { onload: b2.a, hl: a || "" });
        D2(xi2(f)).s(function() {
          clearTimeout(e);
          d(new t("internal-error", "Unable to load external reCAPTCHA dependencies!"));
        });
      } else
        clearTimeout(e), c(l.grecaptcha);
    });
  };
  ao2.prototype.c = function() {
    this.b--;
  };
  var eo2 = null;
  function fo2(a, b2, c, d, e, f, g2) {
    M2(this, "type", "recaptcha");
    this.c = this.f = null;
    this.A = false;
    this.m = b2;
    this.g = null;
    g2 ? ($n2 || ($n2 = new Zn2()), g2 = $n2) : (eo2 || (eo2 = new ao2()), g2 = eo2);
    this.v = g2;
    this.a = c || { theme: "light", type: "image" };
    this.h = [];
    if (this.a[go2])
      throw new t("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
    this.i = "invisible" === this.a[ho2];
    if (!l.document)
      throw new t("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
    if (!fc2(b2) || !this.i && fc2(b2).hasChildNodes())
      throw new t("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
    this.o = new Ei2(a, f || null, e || null);
    this.u = d || function() {
      return null;
    };
    var h = this;
    this.l = [];
    var m = this.a[io2];
    this.a[io2] = function(v2) {
      jo2(h, v2);
      if ("function" === typeof m)
        m(v2);
      else if ("string" === typeof m) {
        var B2 = L2(m, l);
        "function" === typeof B2 && B2(v2);
      }
    };
    var p2 = this.a[ko2];
    this.a[ko2] = function() {
      jo2(h, null);
      if ("function" === typeof p2)
        p2();
      else if ("string" === typeof p2) {
        var v2 = L2(p2, l);
        "function" === typeof v2 && v2();
      }
    };
  }
  var io2 = "callback", ko2 = "expired-callback", go2 = "sitekey", ho2 = "size";
  function jo2(a, b2) {
    for (var c = 0; c < a.l.length; c++)
      try {
        a.l[c](b2);
      } catch (d) {
      }
  }
  function lo2(a, b2) {
    Va2(a.l, function(c) {
      return c == b2;
    });
  }
  function mo2(a, b2) {
    a.h.push(b2);
    b2.na(function() {
      Ua2(a.h, b2);
    });
    return b2;
  }
  k2 = fo2.prototype;
  k2.Ia = function() {
    var a = this;
    return this.f ? this.f : this.f = mo2(this, D2().then(function() {
      if (Ne2() && !Ee2())
        return ze2();
      throw new t("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
    }).then(function() {
      return a.v.g(a.u());
    }).then(function(b2) {
      a.g = b2;
      return O2(a.o, Fj, {});
    }).then(function(b2) {
      a.a[go2] = b2.recaptchaSiteKey;
    }).s(function(b2) {
      a.f = null;
      throw b2;
    }));
  };
  k2.render = function() {
    no2(this);
    var a = this;
    return mo2(this, this.Ia().then(function() {
      if (null === a.c) {
        var b2 = a.m;
        if (!a.i) {
          var c = fc2(b2);
          b2 = ic2("DIV");
          c.appendChild(b2);
        }
        a.c = a.g.render(b2, a.a);
      }
      return a.c;
    }));
  };
  k2.verify = function() {
    no2(this);
    var a = this;
    return mo2(this, this.render().then(function(b2) {
      return new C2(function(c) {
        var d = a.g.getResponse(b2);
        if (d)
          c(d);
        else {
          var e = function(f) {
            f && (lo2(a, e), c(f));
          };
          a.l.push(e);
          a.i && a.g.execute(a.c);
        }
      });
    }));
  };
  k2.reset = function() {
    no2(this);
    null !== this.c && this.g.reset(this.c);
  };
  function no2(a) {
    if (a.A)
      throw new t("internal-error", "RecaptchaVerifier instance has been destroyed.");
  }
  k2.clear = function() {
    no2(this);
    this.A = true;
    this.v.c();
    for (var a = 0; a < this.h.length; a++)
      this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");
    if (!this.i) {
      a = fc2(this.m);
      for (var b2; b2 = a.firstChild; )
        a.removeChild(b2);
    }
  };
  function oo2(a, b2, c) {
    var d = false;
    try {
      this.b = c || firebase$1$1.app();
    } catch (g2) {
      throw new t("argument-error", "No firebase.app.App instance is currently initialized.");
    }
    if (this.b.options && this.b.options.apiKey)
      c = this.b.options.apiKey;
    else
      throw new t("invalid-api-key");
    var e = this, f = null;
    try {
      f = this.b.auth().Ga();
    } catch (g2) {
    }
    try {
      d = this.b.auth().settings.appVerificationDisabledForTesting;
    } catch (g2) {
    }
    f = firebase$1$1.SDK_VERSION ? Je2(firebase$1$1.SDK_VERSION, f) : null;
    fo2.call(this, c, a, b2, function() {
      try {
        var g2 = e.b.auth().ka();
      } catch (h) {
        g2 = null;
      }
      return g2;
    }, f, Aa2(Ba2), d);
  }
  r2(oo2, fo2);
  function po2(a, b2, c, d) {
    a: {
      c = Array.prototype.slice.call(c);
      var e = 0;
      for (var f = false, g2 = 0; g2 < b2.length; g2++)
        if (b2[g2].optional)
          f = true;
        else {
          if (f)
            throw new t("internal-error", "Argument validator encountered a required argument after an optional argument.");
          e++;
        }
      f = b2.length;
      if (c.length < e || f < c.length)
        d = "Expected " + (e == f ? 1 == e ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";
      else {
        for (e = 0; e < c.length; e++)
          if (f = b2[e].optional && void 0 === c[e], !b2[e].K(c[e]) && !f) {
            b2 = b2[e];
            if (0 > e || e >= qo2.length)
              throw new t("internal-error", "Argument validator received an unsupported number of arguments.");
            c = qo2[e];
            d = (d ? "" : c + " argument ") + (b2.name ? '"' + b2.name + '" ' : "") + "must be " + b2.J + ".";
            break a;
          }
        d = null;
      }
    }
    if (d)
      throw new t("argument-error", a + " failed: " + d);
  }
  var qo2 = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");
  function V2(a, b2) {
    return { name: a || "", J: "a valid string", optional: !!b2, K: function(c) {
      return "string" === typeof c;
    } };
  }
  function ro2(a, b2) {
    return { name: a || "", J: "a boolean", optional: !!b2, K: function(c) {
      return "boolean" === typeof c;
    } };
  }
  function W2(a, b2) {
    return { name: a || "", J: "a valid object", optional: !!b2, K: n2 };
  }
  function so2(a, b2) {
    return { name: a || "", J: "a function", optional: !!b2, K: function(c) {
      return "function" === typeof c;
    } };
  }
  function to2(a, b2) {
    return { name: a || "", J: "null", optional: !!b2, K: function(c) {
      return null === c;
    } };
  }
  function uo2() {
    return { name: "", J: "an HTML element", optional: false, K: function(a) {
      return !!(a && a instanceof Element);
    } };
  }
  function vo2() {
    return { name: "auth", J: "an instance of Firebase Auth", optional: true, K: function(a) {
      return !!(a && a instanceof zn2);
    } };
  }
  function wo2() {
    return { name: "app", J: "an instance of Firebase App", optional: true, K: function(a) {
      return !!(a && a instanceof firebase$1$1.app.App);
    } };
  }
  function xo2(a) {
    return { name: a ? a + "Credential" : "credential", J: a ? "a valid " + a + " credential" : "a valid credential", optional: false, K: function(b2) {
      if (!b2)
        return false;
      var c = !a || b2.providerId === a;
      return !(!b2.ja || !c);
    } };
  }
  function yo2() {
    return { name: "multiFactorAssertion", J: "a valid multiFactorAssertion", optional: false, K: function(a) {
      return a ? !!a.rb : false;
    } };
  }
  function zo2() {
    return { name: "authProvider", J: "a valid Auth provider", optional: false, K: function(a) {
      return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
    } };
  }
  function Ao2(a, b2) {
    return n2(a) && "string" === typeof a.type && a.type === b2 && "function" === typeof a.Ha;
  }
  function Bo2(a) {
    return n2(a) && "string" === typeof a.uid;
  }
  function Co2() {
    return { name: "applicationVerifier", J: "an implementation of firebase.auth.ApplicationVerifier", optional: false, K: function(a) {
      return !(!a || "string" !== typeof a.type || "function" !== typeof a.verify);
    } };
  }
  function X2(a, b2, c, d) {
    return { name: c || "", J: a.J + " or " + b2.J, optional: !!d, K: function(e) {
      return a.K(e) || b2.K(e);
    } };
  }
  function Y2(a, b2) {
    for (var c in b2) {
      var d = b2[c].name;
      a[d] = Do2(d, a[c], b2[c].j);
    }
  }
  function Eo2(a, b2) {
    for (var c in b2) {
      var d = b2[c].name;
      d !== c && Object.defineProperty(a, d, { get: ta2(function(e) {
        return this[e];
      }, c), set: ta2(function(e, f, g2, h) {
        po2(e, [g2], [h], true);
        this[f] = h;
      }, d, c, b2[c].jb), enumerable: true });
    }
  }
  function Z2(a, b2, c, d) {
    a[b2] = Do2(b2, c, d);
  }
  function Do2(a, b2, c) {
    function d() {
      var g2 = Array.prototype.slice.call(arguments);
      po2(e, c, g2);
      return b2.apply(this, g2);
    }
    if (!c)
      return b2;
    var e = Fo2(a), f;
    for (f in b2)
      d[f] = b2[f];
    for (f in b2.prototype)
      d.prototype[f] = b2.prototype[f];
    return d;
  }
  function Fo2(a) {
    a = a.split(".");
    return a[a.length - 1];
  }
  Y2(zn2.prototype, {
    ib: { name: "applyActionCode", j: [V2("code")] },
    Qa: { name: "checkActionCode", j: [V2("code")] },
    mb: { name: "confirmPasswordReset", j: [V2("code"), V2("newPassword")] },
    dc: { name: "createUserWithEmailAndPassword", j: [V2("email"), V2("password")] },
    gc: { name: "fetchSignInMethodsForEmail", j: [V2("email")] },
    qa: { name: "getRedirectResult", j: [] },
    Ac: { name: "isSignInWithEmailLink", j: [V2("emailLink")] },
    Gc: { name: "onAuthStateChanged", j: [X2(W2(), so2(), "nextOrObserver"), so2("opt_error", true), so2("opt_completed", true)] },
    Hc: {
      name: "onIdTokenChanged",
      j: [X2(W2(), so2(), "nextOrObserver"), so2("opt_error", true), so2("opt_completed", true)]
    },
    ub: { name: "sendPasswordResetEmail", j: [V2("email"), X2(W2("opt_actionCodeSettings", true), to2(null, true), "opt_actionCodeSettings", true)] },
    vb: { name: "sendSignInLinkToEmail", j: [V2("email"), W2("actionCodeSettings")] },
    wb: { name: "setPersistence", j: [V2("persistence")] },
    Rc: { name: "signInAndRetrieveDataWithCredential", j: [xo2()] },
    yb: { name: "signInAnonymously", j: [] },
    Za: { name: "signInWithCredential", j: [xo2()] },
    Sc: { name: "signInWithCustomToken", j: [V2("token")] },
    Tc: { name: "signInWithEmailAndPassword", j: [V2("email"), V2("password")] },
    Uc: { name: "signInWithEmailLink", j: [V2("email"), V2("emailLink", true)] },
    Vc: { name: "signInWithPhoneNumber", j: [V2("phoneNumber"), Co2()] },
    Wc: { name: "signInWithPopup", j: [zo2()] },
    Xc: { name: "signInWithRedirect", j: [zo2()] },
    cd: { name: "updateCurrentUser", j: [X2(function(a) {
      return { name: "user", J: "an instance of Firebase User", optional: !!a, K: function(b2) {
        return !!(b2 && b2 instanceof Dm);
      } };
    }(), to2(), "user")] },
    zb: { name: "signOut", j: [] },
    toJSON: { name: "toJSON", j: [V2(null, true)] },
    ed: { name: "useDeviceLanguage", j: [] },
    fd: { name: "useEmulator", j: [V2("url")] },
    hd: { name: "verifyPasswordResetCode", j: [V2("code")] }
  });
  Eo2(zn2.prototype, { lc: { name: "languageCode", jb: X2(V2(), to2(), "languageCode") }, ti: { name: "tenantId", jb: X2(V2(), to2(), "tenantId") } });
  zn2.Persistence = Mk;
  zn2.Persistence.LOCAL = "local";
  zn2.Persistence.SESSION = "session";
  zn2.Persistence.NONE = "none";
  Y2(Dm.prototype, {
    "delete": { name: "delete", j: [] },
    nc: { name: "getIdTokenResult", j: [ro2("opt_forceRefresh", true)] },
    I: { name: "getIdToken", j: [ro2("opt_forceRefresh", true)] },
    Bc: { name: "linkAndRetrieveDataWithCredential", j: [xo2()] },
    pb: { name: "linkWithCredential", j: [xo2()] },
    Cc: { name: "linkWithPhoneNumber", j: [V2("phoneNumber"), Co2()] },
    Dc: { name: "linkWithPopup", j: [zo2()] },
    Ec: { name: "linkWithRedirect", j: [zo2()] },
    Kc: { name: "reauthenticateAndRetrieveDataWithCredential", j: [xo2()] },
    sb: { name: "reauthenticateWithCredential", j: [xo2()] },
    Lc: {
      name: "reauthenticateWithPhoneNumber",
      j: [V2("phoneNumber"), Co2()]
    },
    Mc: { name: "reauthenticateWithPopup", j: [zo2()] },
    Nc: { name: "reauthenticateWithRedirect", j: [zo2()] },
    reload: { name: "reload", j: [] },
    tb: { name: "sendEmailVerification", j: [X2(W2("opt_actionCodeSettings", true), to2(null, true), "opt_actionCodeSettings", true)] },
    toJSON: { name: "toJSON", j: [V2(null, true)] },
    bd: { name: "unlink", j: [V2("provider")] },
    Ab: { name: "updateEmail", j: [V2("email")] },
    Bb: { name: "updatePassword", j: [V2("password")] },
    dd: { name: "updatePhoneNumber", j: [xo2("phone")] },
    Cb: { name: "updateProfile", j: [W2("profile")] },
    Db: { name: "verifyBeforeUpdateEmail", j: [V2("email"), X2(W2("opt_actionCodeSettings", true), to2(null, true), "opt_actionCodeSettings", true)] }
  });
  Y2(Sn2.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } });
  Y2(Rn2.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } });
  Y2(C2.prototype, { na: { name: "finally" }, s: { name: "catch" }, then: { name: "then" } });
  Eo2($l.prototype, { appVerificationDisabled: { name: "appVerificationDisabledForTesting", jb: ro2("appVerificationDisabledForTesting") } });
  Y2(am.prototype, { confirm: { name: "confirm", j: [V2("verificationCode")] } });
  Z2(xg, "fromJSON", function(a) {
    a = "string" === typeof a ? JSON.parse(a) : a;
    for (var b2, c = [Ig, $g, gh, Fg], d = 0; d < c.length; d++)
      if (b2 = c[d](a))
        return b2;
    return null;
  }, [X2(V2(), W2(), "json")]);
  Z2(Vg, "credential", function(a, b2) {
    return new Ug(a, b2);
  }, [V2("email"), V2("password")]);
  Y2(Ug.prototype, { w: { name: "toJSON", j: [V2(null, true)] } });
  Y2(Mg.prototype, { Ca: { name: "addScope", j: [V2("scope")] }, Ka: { name: "setCustomParameters", j: [W2("customOAuthParameters")] } });
  Z2(Mg, "credential", Ng, [X2(V2(), W2(), "token")]);
  Z2(Vg, "credentialWithLink", ah, [V2("email"), V2("emailLink")]);
  Y2(Og.prototype, { Ca: { name: "addScope", j: [V2("scope")] }, Ka: { name: "setCustomParameters", j: [W2("customOAuthParameters")] } });
  Z2(Og, "credential", Pg, [X2(V2(), W2(), "token")]);
  Y2(Qg.prototype, { Ca: { name: "addScope", j: [V2("scope")] }, Ka: { name: "setCustomParameters", j: [W2("customOAuthParameters")] } });
  Z2(Qg, "credential", Rg, [X2(V2(), X2(W2(), to2()), "idToken"), X2(V2(), to2(), "accessToken", true)]);
  Y2(Sg.prototype, { Ka: { name: "setCustomParameters", j: [W2("customOAuthParameters")] } });
  Z2(Sg, "credential", Tg, [X2(V2(), W2(), "token"), V2("secret", true)]);
  Y2(Lg.prototype, { Ca: { name: "addScope", j: [V2("scope")] }, credential: { name: "credential", j: [X2(V2(), X2(W2(), to2()), "optionsOrIdToken"), X2(V2(), to2(), "accessToken", true)] }, Ka: { name: "setCustomParameters", j: [W2("customOAuthParameters")] } });
  Y2(Gg.prototype, { w: { name: "toJSON", j: [V2(null, true)] } });
  Y2(Ag.prototype, { w: { name: "toJSON", j: [V2(null, true)] } });
  Z2(hh, "credential", lh, [V2("verificationId"), V2("verificationCode")]);
  Y2(hh.prototype, { eb: { name: "verifyPhoneNumber", j: [X2(V2(), function(a, b2) {
    return { name: a || "phoneInfoOptions", J: "valid phone info options", optional: !!b2, K: function(c) {
      return c ? c.session && c.phoneNumber ? Ao2(c.session, vg) && "string" === typeof c.phoneNumber : c.session && c.multiFactorHint ? Ao2(c.session, wg) && Bo2(c.multiFactorHint) : c.session && c.multiFactorUid ? Ao2(c.session, wg) && "string" === typeof c.multiFactorUid : c.phoneNumber ? "string" === typeof c.phoneNumber : false : false;
    } };
  }(), "phoneInfoOptions"), Co2()] } });
  Y2(ch.prototype, { w: { name: "toJSON", j: [V2(null, true)] } });
  Y2(t.prototype, { toJSON: { name: "toJSON", j: [V2(null, true)] } });
  Y2(uh.prototype, { toJSON: { name: "toJSON", j: [V2(null, true)] } });
  Y2(th.prototype, { toJSON: { name: "toJSON", j: [V2(null, true)] } });
  Y2(gm.prototype, { toJSON: { name: "toJSON", j: [V2(null, true)] } });
  Y2(dm.prototype, { Qc: { name: "resolveSignIn", j: [yo2()] } });
  Y2(om.prototype, { Qb: { name: "getSession", j: [] }, ec: { name: "enroll", j: [yo2(), V2("displayName", true)] }, ad: { name: "unenroll", j: [X2({ name: "multiFactorInfo", J: "a valid multiFactorInfo", optional: false, K: Bo2 }, V2(), "multiFactorInfoIdentifier")] } });
  Y2(oo2.prototype, { clear: { name: "clear", j: [] }, render: { name: "render", j: [] }, verify: { name: "verify", j: [] } });
  Z2(Ff, "parseLink", Nf, [V2("link")]);
  Z2(Yn2, "assertion", function(a) {
    return new mm(a);
  }, [xo2("phone")]);
  (function() {
    if ("undefined" !== typeof firebase$1$1 && firebase$1$1.INTERNAL && firebase$1$1.INTERNAL.registerComponent) {
      var a = { ActionCodeInfo: { Operation: { EMAIL_SIGNIN: wf, PASSWORD_RESET: "PASSWORD_RESET", RECOVER_EMAIL: "RECOVER_EMAIL", REVERT_SECOND_FACTOR_ADDITION: yf, VERIFY_AND_CHANGE_EMAIL: xf, VERIFY_EMAIL: "VERIFY_EMAIL" } }, Auth: zn2, AuthCredential: xg, Error: t };
      Z2(a, "EmailAuthProvider", Vg, []);
      Z2(a, "FacebookAuthProvider", Mg, []);
      Z2(a, "GithubAuthProvider", Og, []);
      Z2(a, "GoogleAuthProvider", Qg, []);
      Z2(a, "TwitterAuthProvider", Sg, []);
      Z2(a, "OAuthProvider", Lg, [V2("providerId")]);
      Z2(a, "SAMLAuthProvider", Kg, [V2("providerId")]);
      Z2(a, "PhoneAuthProvider", hh, [vo2()]);
      Z2(a, "RecaptchaVerifier", oo2, [X2(V2(), uo2(), "recaptchaContainer"), W2("recaptchaParameters", true), wo2()]);
      Z2(a, "ActionCodeURL", Ff, []);
      Z2(a, "PhoneMultiFactorGenerator", Yn2, []);
      firebase$1$1.INTERNAL.registerComponent({ name: "auth", instanceFactory: function(b2) {
        b2 = b2.getProvider("app").getImmediate();
        return new zn2(b2);
      }, multipleInstances: false, serviceProps: a, instantiationMode: "LAZY", type: "PUBLIC" });
      firebase$1$1.INTERNAL.registerComponent({
        name: "auth-internal",
        instanceFactory: function(b2) {
          b2 = b2.getProvider("auth").getImmediate();
          return { getUid: q2(b2.getUid, b2), getToken: q2(b2.mc, b2), addAuthTokenListener: q2(b2.cc, b2), removeAuthTokenListener: q2(b2.Oc, b2) };
        },
        multipleInstances: false,
        instantiationMode: "LAZY",
        type: "PRIVATE"
      });
      firebase$1$1.registerVersion("@firebase/auth", "0.15.0");
      firebase$1$1.INTERNAL.extendNamespace({ User: Dm });
    } else
      throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
  })();
}).apply(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
const firebaseConfig = {
  apiKey: "AIzaSyCKC3r59-Agj4JmTFkNcxKjPpq0cm-cJ6c",
  authDomain: "leisure-cooperative.firebaseapp.com",
  databaseURL: "null",
  projectId: "null",
  storageBucket: "null",
  messagingSenderId: "null",
  appId: "null"
};
firebaseConfig.measurementId = "null";
const firebase = firebase$1$1.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const functions = firebase.functions();
const storage = firebase.storage().ref();
const Timestamp = firebase$1$1.firestore.Timestamp;
auth.useDeviceLanguage();
if (window.location.hostname === "localhost" && "false") {
  functions.useFunctionsEmulator("http://localhost:5001");
}
const addMetrics = async () => {
  await __vitePreload(() => import("./index.esm.ee051002.js"), true ? ["assets/index.esm.ee051002.js","assets/index.esm.b547e4a7.js","assets/index.ae92f232.js"] : void 0);
  await __vitePreload(() => import("./index.esm.b597570b.js"), true ? ["assets/index.esm.b597570b.js","assets/index.esm.b547e4a7.js","assets/index.ae92f232.js"] : void 0);
  firebase.analytics();
  firebase.performance();
};
addMetrics();
export { Component as C, ErrorFactory as E, FirebaseError as F, Logger as L, Timestamp as T, __awaiter as _, auth as a, firebase$1$1 as b, __generator as c, db as d, areCookiesEnabled as e, functions as f, isIndexedDBAvailable as g, calculateBackoffMillis as h, isBrowserExtension as i, __assign as j, __values$1 as k, __spread as l, LogLevel as m, __spreadArrays$1 as n, storage as s, validateIndexedDBOpenable as v };
