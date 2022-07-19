import { L as Logger, E as ErrorFactory, C as Component, b as firebase$1, _ as __awaiter, c as __generator, v as validateIndexedDBOpenable, i as isBrowserExtension, e as areCookiesEnabled, g as isIndexedDBAvailable, h as calculateBackoffMillis, j as __assign, F as FirebaseError } from "./index.a79b2e56.js";
import "./index.esm.b547e4a7.js";
import "./index.ae92f232.js";
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
var GA_FID_KEY = "firebase_id";
var ORIGIN_KEY = "origin";
var FETCH_TIMEOUT_MILLIS = 60 * 1e3;
var DYNAMIC_CONFIG_URL = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig";
var GTAG_URL = "https://www.googletagmanager.com/gtag/js";
var GtagCommand;
(function(GtagCommand2) {
  GtagCommand2["EVENT"] = "event";
  GtagCommand2["SET"] = "set";
  GtagCommand2["CONFIG"] = "config";
})(GtagCommand || (GtagCommand = {}));
var EventName;
(function(EventName2) {
  EventName2["ADD_SHIPPING_INFO"] = "add_shipping_info";
  EventName2["ADD_PAYMENT_INFO"] = "add_payment_info";
  EventName2["ADD_TO_CART"] = "add_to_cart";
  EventName2["ADD_TO_WISHLIST"] = "add_to_wishlist";
  EventName2["BEGIN_CHECKOUT"] = "begin_checkout";
  EventName2["CHECKOUT_PROGRESS"] = "checkout_progress";
  EventName2["EXCEPTION"] = "exception";
  EventName2["GENERATE_LEAD"] = "generate_lead";
  EventName2["LOGIN"] = "login";
  EventName2["PAGE_VIEW"] = "page_view";
  EventName2["PURCHASE"] = "purchase";
  EventName2["REFUND"] = "refund";
  EventName2["REMOVE_FROM_CART"] = "remove_from_cart";
  EventName2["SCREEN_VIEW"] = "screen_view";
  EventName2["SEARCH"] = "search";
  EventName2["SELECT_CONTENT"] = "select_content";
  EventName2["SELECT_ITEM"] = "select_item";
  EventName2["SELECT_PROMOTION"] = "select_promotion";
  EventName2["SET_CHECKOUT_OPTION"] = "set_checkout_option";
  EventName2["SHARE"] = "share";
  EventName2["SIGN_UP"] = "sign_up";
  EventName2["TIMING_COMPLETE"] = "timing_complete";
  EventName2["VIEW_CART"] = "view_cart";
  EventName2["VIEW_ITEM"] = "view_item";
  EventName2["VIEW_ITEM_LIST"] = "view_item_list";
  EventName2["VIEW_PROMOTION"] = "view_promotion";
  EventName2["VIEW_SEARCH_RESULTS"] = "view_search_results";
})(EventName || (EventName = {}));
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
function logEvent(gtagFunction, initializationPromise, eventName, eventParams, options) {
  return __awaiter(this, void 0, void 0, function() {
    var measurementId, params;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          if (!(options && options.global))
            return [3, 1];
          gtagFunction(GtagCommand.EVENT, eventName, eventParams);
          return [2];
        case 1:
          return [4, initializationPromise];
        case 2:
          measurementId = _a2.sent();
          params = __assign(__assign({}, eventParams), { "send_to": measurementId });
          gtagFunction(GtagCommand.EVENT, eventName, params);
          _a2.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function setCurrentScreen(gtagFunction, initializationPromise, screenName, options) {
  return __awaiter(this, void 0, void 0, function() {
    var measurementId;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          if (!(options && options.global))
            return [3, 1];
          gtagFunction(GtagCommand.SET, { "screen_name": screenName });
          return [2, Promise.resolve()];
        case 1:
          return [4, initializationPromise];
        case 2:
          measurementId = _a2.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            "screen_name": screenName
          });
          _a2.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function setUserId(gtagFunction, initializationPromise, id, options) {
  return __awaiter(this, void 0, void 0, function() {
    var measurementId;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          if (!(options && options.global))
            return [3, 1];
          gtagFunction(GtagCommand.SET, { "user_id": id });
          return [2, Promise.resolve()];
        case 1:
          return [4, initializationPromise];
        case 2:
          measurementId = _a2.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            "user_id": id
          });
          _a2.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function setUserProperties(gtagFunction, initializationPromise, properties, options) {
  return __awaiter(this, void 0, void 0, function() {
    var flatProperties, _i, _a2, key, measurementId;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          if (!(options && options.global))
            return [3, 1];
          flatProperties = {};
          for (_i = 0, _a2 = Object.keys(properties); _i < _a2.length; _i++) {
            key = _a2[_i];
            flatProperties["user_properties." + key] = properties[key];
          }
          gtagFunction(GtagCommand.SET, flatProperties);
          return [2, Promise.resolve()];
        case 1:
          return [4, initializationPromise];
        case 2:
          measurementId = _b.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            "user_properties": properties
          });
          _b.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function setAnalyticsCollectionEnabled(initializationPromise, enabled) {
  return __awaiter(this, void 0, void 0, function() {
    var measurementId;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, initializationPromise];
        case 1:
          measurementId = _a2.sent();
          window["ga-disable-" + measurementId] = !enabled;
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
var logger = new Logger("@firebase/analytics");
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
function insertScriptTag(dataLayerName2) {
  var script = document.createElement("script");
  script.src = GTAG_URL + "?l=" + dataLayerName2;
  script.async = true;
  document.head.appendChild(script);
}
function getOrCreateDataLayer(dataLayerName2) {
  var dataLayer = [];
  if (Array.isArray(window[dataLayerName2])) {
    dataLayer = window[dataLayerName2];
  } else {
    window[dataLayerName2] = dataLayer;
  }
  return dataLayer;
}
function gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams) {
  return __awaiter(this, void 0, void 0, function() {
    var correspondingAppId, dynamicConfigResults, foundConfig, e_1;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          correspondingAppId = measurementIdToAppId2[measurementId];
          _a2.label = 1;
        case 1:
          _a2.trys.push([1, 7, , 8]);
          if (!correspondingAppId)
            return [3, 3];
          return [4, initializationPromisesMap2[correspondingAppId]];
        case 2:
          _a2.sent();
          return [3, 6];
        case 3:
          return [4, Promise.all(dynamicConfigPromisesList2)];
        case 4:
          dynamicConfigResults = _a2.sent();
          foundConfig = dynamicConfigResults.find(function(config) {
            return config.measurementId === measurementId;
          });
          if (!foundConfig)
            return [3, 6];
          return [4, initializationPromisesMap2[foundConfig.appId]];
        case 5:
          _a2.sent();
          _a2.label = 6;
        case 6:
          return [3, 8];
        case 7:
          e_1 = _a2.sent();
          logger.error(e_1);
          return [3, 8];
        case 8:
          gtagCore(GtagCommand.CONFIG, measurementId, gtagParams);
          return [2];
      }
    });
  });
}
function gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams) {
  return __awaiter(this, void 0, void 0, function() {
    var initializationPromisesToWaitFor, gaSendToList, dynamicConfigResults, _loop_1, _i, gaSendToList_1, sendToId, state_1, e_2;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          _a2.trys.push([0, 4, , 5]);
          initializationPromisesToWaitFor = [];
          if (!(gtagParams && gtagParams["send_to"]))
            return [3, 2];
          gaSendToList = gtagParams["send_to"];
          if (!Array.isArray(gaSendToList)) {
            gaSendToList = [gaSendToList];
          }
          return [4, Promise.all(dynamicConfigPromisesList2)];
        case 1:
          dynamicConfigResults = _a2.sent();
          _loop_1 = function(sendToId2) {
            var foundConfig = dynamicConfigResults.find(function(config) {
              return config.measurementId === sendToId2;
            });
            var initializationPromise = foundConfig && initializationPromisesMap2[foundConfig.appId];
            if (initializationPromise) {
              initializationPromisesToWaitFor.push(initializationPromise);
            } else {
              initializationPromisesToWaitFor = [];
              return "break";
            }
          };
          for (_i = 0, gaSendToList_1 = gaSendToList; _i < gaSendToList_1.length; _i++) {
            sendToId = gaSendToList_1[_i];
            state_1 = _loop_1(sendToId);
            if (state_1 === "break")
              break;
          }
          _a2.label = 2;
        case 2:
          if (initializationPromisesToWaitFor.length === 0) {
            initializationPromisesToWaitFor = Object.values(initializationPromisesMap2);
          }
          return [4, Promise.all(initializationPromisesToWaitFor)];
        case 3:
          _a2.sent();
          gtagCore(GtagCommand.EVENT, measurementId, gtagParams || {});
          return [3, 5];
        case 4:
          e_2 = _a2.sent();
          logger.error(e_2);
          return [3, 5];
        case 5:
          return [2];
      }
    });
  });
}
function wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2) {
  function gtagWrapper(command, idOrNameOrParams, gtagParams) {
    return __awaiter(this, void 0, void 0, function() {
      var e_3;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            _a2.trys.push([0, 6, , 7]);
            if (!(command === GtagCommand.EVENT))
              return [3, 2];
            return [4, gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, idOrNameOrParams, gtagParams)];
          case 1:
            _a2.sent();
            return [3, 5];
          case 2:
            if (!(command === GtagCommand.CONFIG))
              return [3, 4];
            return [4, gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, idOrNameOrParams, gtagParams)];
          case 3:
            _a2.sent();
            return [3, 5];
          case 4:
            gtagCore(GtagCommand.SET, idOrNameOrParams);
            _a2.label = 5;
          case 5:
            return [3, 7];
          case 6:
            e_3 = _a2.sent();
            logger.error(e_3);
            return [3, 7];
          case 7:
            return [2];
        }
      });
    });
  }
  return gtagWrapper;
}
function wrapOrCreateGtag(initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, dataLayerName2, gtagFunctionName) {
  var gtagCore = function() {
    window[dataLayerName2].push(arguments);
  };
  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === "function") {
    gtagCore = window[gtagFunctionName];
  }
  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2);
  return {
    gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
function findGtagScriptOnPage() {
  var scriptTags = window.document.getElementsByTagName("script");
  for (var _i = 0, _a2 = Object.values(scriptTags); _i < _a2.length; _i++) {
    var tag = _a2[_i];
    if (tag.src && tag.src.includes(GTAG_URL)) {
      return tag;
    }
  }
  return null;
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
var _a;
var ERRORS = (_a = {}, _a["already-exists"] = "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.", _a["already-initialized"] = "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.", _a["interop-component-reg-failed"] = "Firebase Analytics Interop Component failed to instantiate: {$reason}", _a["invalid-analytics-context"] = "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}", _a["indexeddb-unavailable"] = "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}", _a["fetch-throttle"] = "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.", _a["config-fetch-failed"] = "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}", _a["no-api-key"] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.', _a["no-app-id"] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.', _a);
var ERROR_FACTORY = new ErrorFactory("analytics", "Analytics", ERRORS);
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
var LONG_RETRY_FACTOR = 30;
var BASE_INTERVAL_MILLIS = 1e3;
var RetryData = function() {
  function RetryData2(throttleMetadata, intervalMillis) {
    if (throttleMetadata === void 0) {
      throttleMetadata = {};
    }
    if (intervalMillis === void 0) {
      intervalMillis = BASE_INTERVAL_MILLIS;
    }
    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }
  RetryData2.prototype.getThrottleMetadata = function(appId) {
    return this.throttleMetadata[appId];
  };
  RetryData2.prototype.setThrottleMetadata = function(appId, metadata) {
    this.throttleMetadata[appId] = metadata;
  };
  RetryData2.prototype.deleteThrottleMetadata = function(appId) {
    delete this.throttleMetadata[appId];
  };
  return RetryData2;
}();
var defaultRetryData = new RetryData();
function getHeaders(apiKey) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
function fetchDynamicConfig(appFields) {
  var _a2;
  return __awaiter(this, void 0, void 0, function() {
    var appId, apiKey, request, appUrl, response, errorMessage, jsonResponse;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          appId = appFields.appId, apiKey = appFields.apiKey;
          request = {
            method: "GET",
            headers: getHeaders(apiKey)
          };
          appUrl = DYNAMIC_CONFIG_URL.replace("{app-id}", appId);
          return [4, fetch(appUrl, request)];
        case 1:
          response = _b.sent();
          if (!(response.status !== 200 && response.status !== 304))
            return [3, 6];
          errorMessage = "";
          _b.label = 2;
        case 2:
          _b.trys.push([2, 4, , 5]);
          return [4, response.json()];
        case 3:
          jsonResponse = _b.sent();
          if ((_a2 = jsonResponse.error) === null || _a2 === void 0 ? void 0 : _a2.message) {
            errorMessage = jsonResponse.error.message;
          }
          return [3, 5];
        case 4:
          _b.sent();
          return [3, 5];
        case 5:
          throw ERROR_FACTORY.create("config-fetch-failed", {
            httpStatus: response.status,
            responseMessage: errorMessage
          });
        case 6:
          return [2, response.json()];
      }
    });
  });
}
function fetchDynamicConfigWithRetry(app, retryData, timeoutMillis) {
  if (retryData === void 0) {
    retryData = defaultRetryData;
  }
  return __awaiter(this, void 0, void 0, function() {
    var _a2, appId, apiKey, measurementId, throttleMetadata, signal;
    var _this = this;
    return __generator(this, function(_b) {
      _a2 = app.options, appId = _a2.appId, apiKey = _a2.apiKey, measurementId = _a2.measurementId;
      if (!appId) {
        throw ERROR_FACTORY.create("no-app-id");
      }
      if (!apiKey) {
        if (measurementId) {
          return [2, {
            measurementId,
            appId
          }];
        }
        throw ERROR_FACTORY.create("no-api-key");
      }
      throttleMetadata = retryData.getThrottleMetadata(appId) || {
        backoffCount: 0,
        throttleEndTimeMillis: Date.now()
      };
      signal = new AnalyticsAbortSignal();
      setTimeout(function() {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a3) {
            signal.abort();
            return [2];
          });
        });
      }, timeoutMillis !== void 0 ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
      return [2, attemptFetchDynamicConfigWithRetry({ appId, apiKey, measurementId }, throttleMetadata, signal, retryData)];
    });
  });
}
function attemptFetchDynamicConfigWithRetry(appFields, _a2, signal, retryData) {
  var throttleEndTimeMillis = _a2.throttleEndTimeMillis, backoffCount = _a2.backoffCount;
  if (retryData === void 0) {
    retryData = defaultRetryData;
  }
  return __awaiter(this, void 0, void 0, function() {
    var appId, measurementId, e_1, response, e_2, backoffMillis, throttleMetadata;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          appId = appFields.appId, measurementId = appFields.measurementId;
          _b.label = 1;
        case 1:
          _b.trys.push([1, 3, , 4]);
          return [4, setAbortableTimeout(signal, throttleEndTimeMillis)];
        case 2:
          _b.sent();
          return [3, 4];
        case 3:
          e_1 = _b.sent();
          if (measurementId) {
            logger.warn("Timed out fetching this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (' provided in the "measurementId" field in the local Firebase config. [' + e_1.message + "]"));
            return [2, { appId, measurementId }];
          }
          throw e_1;
        case 4:
          _b.trys.push([4, 6, , 7]);
          return [4, fetchDynamicConfig(appFields)];
        case 5:
          response = _b.sent();
          retryData.deleteThrottleMetadata(appId);
          return [2, response];
        case 6:
          e_2 = _b.sent();
          if (!isRetriableError(e_2)) {
            retryData.deleteThrottleMetadata(appId);
            if (measurementId) {
              logger.warn("Failed to fetch this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (' provided in the "measurementId" field in the local Firebase config. [' + e_2.message + "]"));
              return [2, { appId, measurementId }];
            } else {
              throw e_2;
            }
          }
          backoffMillis = Number(e_2.httpStatus) === 503 ? calculateBackoffMillis(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : calculateBackoffMillis(backoffCount, retryData.intervalMillis);
          throttleMetadata = {
            throttleEndTimeMillis: Date.now() + backoffMillis,
            backoffCount: backoffCount + 1
          };
          retryData.setThrottleMetadata(appId, throttleMetadata);
          logger.debug("Calling attemptFetch again in " + backoffMillis + " millis");
          return [2, attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData)];
        case 7:
          return [2];
      }
    });
  });
}
function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise(function(resolve, reject) {
    var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    var timeout = setTimeout(resolve, backoffMillis);
    signal.addEventListener(function() {
      clearTimeout(timeout);
      reject(ERROR_FACTORY.create("fetch-throttle", {
        throttleEndTimeMillis
      }));
    });
  });
}
function isRetriableError(e) {
  if (!(e instanceof FirebaseError)) {
    return false;
  }
  var httpStatus = Number(e["httpStatus"]);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
var AnalyticsAbortSignal = function() {
  function AnalyticsAbortSignal2() {
    this.listeners = [];
  }
  AnalyticsAbortSignal2.prototype.addEventListener = function(listener) {
    this.listeners.push(listener);
  };
  AnalyticsAbortSignal2.prototype.abort = function() {
    this.listeners.forEach(function(listener) {
      return listener();
    });
  };
  return AnalyticsAbortSignal2;
}();
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
function validateIndexedDB() {
  return __awaiter(this, void 0, void 0, function() {
    var e_1;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          if (!!isIndexedDBAvailable())
            return [3, 1];
          logger.warn(ERROR_FACTORY.create("indexeddb-unavailable", {
            errorInfo: "IndexedDB is not available in this environment."
          }).message);
          return [2, false];
        case 1:
          _a2.trys.push([1, 3, , 4]);
          return [4, validateIndexedDBOpenable()];
        case 2:
          _a2.sent();
          return [3, 4];
        case 3:
          e_1 = _a2.sent();
          logger.warn(ERROR_FACTORY.create("indexeddb-unavailable", {
            errorInfo: e_1
          }).message);
          return [2, false];
        case 4:
          return [2, true];
      }
    });
  });
}
function initializeIds(app, dynamicConfigPromisesList2, measurementIdToAppId2, installations, gtagCore) {
  return __awaiter(this, void 0, void 0, function() {
    var dynamicConfigPromise, fidPromise, _a2, dynamicConfig, fid, configProperties;
    var _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
          dynamicConfigPromise.then(function(config) {
            measurementIdToAppId2[config.measurementId] = config.appId;
            if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
              logger.warn("The measurement ID in the local Firebase config (" + app.options.measurementId + ")" + (" does not match the measurement ID fetched from the server (" + config.measurementId + ").") + " To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.");
            }
          }).catch(function(e) {
            return logger.error(e);
          });
          dynamicConfigPromisesList2.push(dynamicConfigPromise);
          fidPromise = validateIndexedDB().then(function(envIsValid) {
            if (envIsValid) {
              return installations.getId();
            } else {
              return void 0;
            }
          });
          return [4, Promise.all([
            dynamicConfigPromise,
            fidPromise
          ])];
        case 1:
          _a2 = _c.sent(), dynamicConfig = _a2[0], fid = _a2[1];
          gtagCore("js", new Date());
          configProperties = (_b = {}, _b[ORIGIN_KEY] = "firebase", _b.update = true, _b);
          if (fid != null) {
            configProperties[GA_FID_KEY] = fid;
          }
          gtagCore(GtagCommand.CONFIG, dynamicConfig.measurementId, configProperties);
          return [2, dynamicConfig.measurementId];
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
var initializationPromisesMap = {};
var dynamicConfigPromisesList = [];
var measurementIdToAppId = {};
var dataLayerName = "dataLayer";
var gtagName = "gtag";
var gtagCoreFunction;
var wrappedGtagFunction;
var globalInitDone = false;
function settings(options) {
  if (globalInitDone) {
    throw ERROR_FACTORY.create("already-initialized");
  }
  if (options.dataLayerName) {
    dataLayerName = options.dataLayerName;
  }
  if (options.gtagName) {
    gtagName = options.gtagName;
  }
}
function warnOnBrowserContextMismatch() {
  var mismatchedEnvMessages = [];
  if (isBrowserExtension()) {
    mismatchedEnvMessages.push("This is a browser extension environment.");
  }
  if (!areCookiesEnabled()) {
    mismatchedEnvMessages.push("Cookies are not available.");
  }
  if (mismatchedEnvMessages.length > 0) {
    var details = mismatchedEnvMessages.map(function(message, index) {
      return "(" + (index + 1) + ") " + message;
    }).join(" ");
    var err = ERROR_FACTORY.create("invalid-analytics-context", {
      errorInfo: details
    });
    logger.warn(err.message);
  }
}
function factory(app, installations) {
  warnOnBrowserContextMismatch();
  var appId = app.options.appId;
  if (!appId) {
    throw ERROR_FACTORY.create("no-app-id");
  }
  if (!app.options.apiKey) {
    if (app.options.measurementId) {
      logger.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest' + (" measurement ID for this Firebase app. Falling back to the measurement ID " + app.options.measurementId) + ' provided in the "measurementId" field in the local Firebase config.');
    } else {
      throw ERROR_FACTORY.create("no-api-key");
    }
  }
  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY.create("already-exists", {
      id: appId
    });
  }
  if (!globalInitDone) {
    if (!findGtagScriptOnPage()) {
      insertScriptTag(dataLayerName);
    }
    getOrCreateDataLayer(dataLayerName);
    var _a2 = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName), wrappedGtag = _a2.wrappedGtag, gtagCore = _a2.gtagCore;
    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  }
  initializationPromisesMap[appId] = initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction);
  var analyticsInstance = {
    app,
    logEvent: function(eventName, eventParams, options) {
      logEvent(wrappedGtagFunction, initializationPromisesMap[appId], eventName, eventParams, options).catch(function(e) {
        return logger.error(e);
      });
    },
    setCurrentScreen: function(screenName, options) {
      setCurrentScreen(wrappedGtagFunction, initializationPromisesMap[appId], screenName, options).catch(function(e) {
        return logger.error(e);
      });
    },
    setUserId: function(id, options) {
      setUserId(wrappedGtagFunction, initializationPromisesMap[appId], id, options).catch(function(e) {
        return logger.error(e);
      });
    },
    setUserProperties: function(properties, options) {
      setUserProperties(wrappedGtagFunction, initializationPromisesMap[appId], properties, options).catch(function(e) {
        return logger.error(e);
      });
    },
    setAnalyticsCollectionEnabled: function(enabled) {
      setAnalyticsCollectionEnabled(initializationPromisesMap[appId], enabled).catch(function(e) {
        return logger.error(e);
      });
    },
    INTERNAL: {
      delete: function() {
        delete initializationPromisesMap[appId];
        return Promise.resolve();
      }
    }
  };
  return analyticsInstance;
}
var name = "@firebase/analytics";
var version = "0.6.0";
var ANALYTICS_TYPE = "analytics";
function registerAnalytics(instance) {
  instance.INTERNAL.registerComponent(new Component(ANALYTICS_TYPE, function(container) {
    var app = container.getProvider("app").getImmediate();
    var installations = container.getProvider("installations").getImmediate();
    return factory(app, installations);
  }, "PUBLIC").setServiceProps({
    settings,
    EventName,
    isSupported
  }));
  instance.INTERNAL.registerComponent(new Component("analytics-internal", internalFactory, "PRIVATE"));
  instance.registerVersion(name, version);
  function internalFactory(container) {
    try {
      var analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: analytics.logEvent
      };
    } catch (e) {
      throw ERROR_FACTORY.create("interop-component-reg-failed", {
        reason: e
      });
    }
  }
}
registerAnalytics(firebase$1);
function isSupported() {
  return __awaiter(this, void 0, void 0, function() {
    var isDBOpenable;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          if (isBrowserExtension()) {
            return [2, false];
          }
          if (!areCookiesEnabled()) {
            return [2, false];
          }
          if (!isIndexedDBAvailable()) {
            return [2, false];
          }
          _a2.label = 1;
        case 1:
          _a2.trys.push([1, 3, , 4]);
          return [4, validateIndexedDBOpenable()];
        case 2:
          isDBOpenable = _a2.sent();
          return [2, isDBOpenable];
        case 3:
          _a2.sent();
          return [2, false];
        case 4:
          return [2];
      }
    });
  });
}
