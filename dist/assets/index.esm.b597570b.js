import { L as Logger, m as LogLevel, E as ErrorFactory, C as Component, b as firebase$1, v as validateIndexedDBOpenable, g as isIndexedDBAvailable, n as __spreadArrays, j as __assign } from "./index.a79b2e56.js";
import "./index.esm.b547e4a7.js";
import "./index.ae92f232.js";
var name = "@firebase/performance";
var version = "0.4.2";
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
var SDK_VERSION = version;
var TRACE_START_MARK_PREFIX = "FB-PERF-TRACE-START";
var TRACE_STOP_MARK_PREFIX = "FB-PERF-TRACE-STOP";
var TRACE_MEASURE_PREFIX = "FB-PERF-TRACE-MEASURE";
var OOB_TRACE_PAGE_LOAD_PREFIX = "_wt_";
var FIRST_PAINT_COUNTER_NAME = "_fp";
var FIRST_CONTENTFUL_PAINT_COUNTER_NAME = "_fcp";
var FIRST_INPUT_DELAY_COUNTER_NAME = "_fid";
var CONFIG_LOCAL_STORAGE_KEY = "@firebase/performance/config";
var CONFIG_EXPIRY_LOCAL_STORAGE_KEY = "@firebase/performance/configexpire";
var SERVICE = "performance";
var SERVICE_NAME = "Performance";
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
var ERROR_DESCRIPTION_MAP = (_a = {}, _a["trace started"] = "Trace {$traceName} was started before.", _a["trace stopped"] = "Trace {$traceName} is not running.", _a["nonpositive trace startTime"] = "Trace {$traceName} startTime should be positive.", _a["nonpositive trace duration"] = "Trace {$traceName} duration should be positive.", _a["no window"] = "Window is not available.", _a["no app id"] = "App id is not available.", _a["no project id"] = "Project id is not available.", _a["no api key"] = "Api key is not available.", _a["invalid cc log"] = "Attempted to queue invalid cc event", _a["FB not default"] = "Performance can only start when Firebase app instance is the default one.", _a["RC response not ok"] = "RC response is not ok", _a["invalid attribute name"] = "Attribute name {$attributeName} is invalid.", _a["invalid attribute value"] = "Attribute value {$attributeValue} is invalid.", _a["invalid custom metric name"] = "Custom metric name {$customMetricName} is invalid", _a["invalid String merger input"] = "Input for String merger is invalid, contact support team to resolve.", _a);
var ERROR_FACTORY = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
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
var consoleLogger = new Logger(SERVICE_NAME);
consoleLogger.logLevel = LogLevel.INFO;
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
var apiInstance;
var windowInstance;
var Api = function() {
  function Api2(window2) {
    this.window = window2;
    if (!window2) {
      throw ERROR_FACTORY.create("no window");
    }
    this.performance = window2.performance;
    this.PerformanceObserver = window2.PerformanceObserver;
    this.windowLocation = window2.location;
    this.navigator = window2.navigator;
    this.document = window2.document;
    if (this.navigator && this.navigator.cookieEnabled) {
      this.localStorage = window2.localStorage;
    }
    if (window2.perfMetrics && window2.perfMetrics.onFirstInputDelay) {
      this.onFirstInputDelay = window2.perfMetrics.onFirstInputDelay;
    }
  }
  Api2.prototype.getUrl = function() {
    return this.windowLocation.href.split("?")[0];
  };
  Api2.prototype.mark = function(name2) {
    if (!this.performance || !this.performance.mark) {
      return;
    }
    this.performance.mark(name2);
  };
  Api2.prototype.measure = function(measureName, mark1, mark2) {
    if (!this.performance || !this.performance.measure) {
      return;
    }
    this.performance.measure(measureName, mark1, mark2);
  };
  Api2.prototype.getEntriesByType = function(type) {
    if (!this.performance || !this.performance.getEntriesByType) {
      return [];
    }
    return this.performance.getEntriesByType(type);
  };
  Api2.prototype.getEntriesByName = function(name2) {
    if (!this.performance || !this.performance.getEntriesByName) {
      return [];
    }
    return this.performance.getEntriesByName(name2);
  };
  Api2.prototype.getTimeOrigin = function() {
    return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart);
  };
  Api2.prototype.requiredApisAvailable = function() {
    if (!fetch || !Promise || !this.navigator || !this.navigator.cookieEnabled) {
      consoleLogger.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.");
      return false;
    }
    if (!isIndexedDBAvailable()) {
      consoleLogger.info("IndexedDB is not supported by current browswer");
      return false;
    }
    return true;
  };
  Api2.prototype.setupObserver = function(entryType, callback) {
    if (!this.PerformanceObserver) {
      return;
    }
    var observer = new this.PerformanceObserver(function(list) {
      for (var _i = 0, _a2 = list.getEntries(); _i < _a2.length; _i++) {
        var entry = _a2[_i];
        callback(entry);
      }
    });
    observer.observe({ entryTypes: [entryType] });
  };
  Api2.getInstance = function() {
    if (apiInstance === void 0) {
      apiInstance = new Api2(windowInstance);
    }
    return apiInstance;
  };
  return Api2;
}();
function setupApi(window2) {
  windowInstance = window2;
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
function mergeStrings(part1, part2) {
  var sizeDiff = part1.length - part2.length;
  if (sizeDiff < 0 || sizeDiff > 1) {
    throw ERROR_FACTORY.create("invalid String merger input");
  }
  var resultArray = [];
  for (var i = 0; i < part1.length; i++) {
    resultArray.push(part1.charAt(i));
    if (part2.length > i) {
      resultArray.push(part2.charAt(i));
    }
  }
  return resultArray.join("");
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
var settingsServiceInstance;
var SettingsService = function() {
  function SettingsService2() {
    this.instrumentationEnabled = true;
    this.dataCollectionEnabled = true;
    this.loggingEnabled = false;
    this.tracesSamplingRate = 1;
    this.networkRequestsSamplingRate = 1;
    this.logEndPointUrl = "https://firebaselogging.googleapis.com/v0cc/log?format=json_proto";
    this.flTransportEndpointUrl = mergeStrings("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o");
    this.transportKey = mergeStrings("AzSC8r6ReiGqFMyfvgow", "Iayx0u-XT3vksVM-pIV");
    this.logSource = 462;
    this.logTraceAfterSampling = false;
    this.logNetworkAfterSampling = false;
    this.configTimeToLive = 12;
  }
  SettingsService2.prototype.getAppId = function() {
    var appId = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.appId;
    if (!appId) {
      throw ERROR_FACTORY.create("no app id");
    }
    return appId;
  };
  SettingsService2.prototype.getProjectId = function() {
    var projectId = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.projectId;
    if (!projectId) {
      throw ERROR_FACTORY.create("no project id");
    }
    return projectId;
  };
  SettingsService2.prototype.getApiKey = function() {
    var apiKey = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.apiKey;
    if (!apiKey) {
      throw ERROR_FACTORY.create("no api key");
    }
    return apiKey;
  };
  SettingsService2.prototype.getFlTransportFullUrl = function() {
    return this.flTransportEndpointUrl.concat("?key=", this.transportKey);
  };
  SettingsService2.getInstance = function() {
    if (settingsServiceInstance === void 0) {
      settingsServiceInstance = new SettingsService2();
    }
    return settingsServiceInstance;
  };
  return SettingsService2;
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
var iid;
function getIidPromise() {
  var iidPromise = SettingsService.getInstance().installationsService.getId();
  iidPromise.then(function(iidVal) {
    iid = iidVal;
  });
  return iidPromise;
}
function getIid() {
  return iid;
}
function getAuthTokenPromise() {
  var authTokenPromise = SettingsService.getInstance().installationsService.getToken();
  authTokenPromise.then(function(authTokenVal) {
  });
  return authTokenPromise;
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
var VisibilityState;
(function(VisibilityState2) {
  VisibilityState2[VisibilityState2["UNKNOWN"] = 0] = "UNKNOWN";
  VisibilityState2[VisibilityState2["VISIBLE"] = 1] = "VISIBLE";
  VisibilityState2[VisibilityState2["HIDDEN"] = 2] = "HIDDEN";
})(VisibilityState || (VisibilityState = {}));
var RESERVED_ATTRIBUTE_PREFIXES = ["firebase_", "google_", "ga_"];
var ATTRIBUTE_FORMAT_REGEX = new RegExp("^[a-zA-Z]\\w*$");
var MAX_ATTRIBUTE_NAME_LENGTH = 40;
var MAX_ATTRIBUTE_VALUE_LENGTH = 100;
function getServiceWorkerStatus() {
  var navigator = Api.getInstance().navigator;
  if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
      return 2;
    } else {
      return 3;
    }
  } else {
    return 1;
  }
}
function getVisibilityState() {
  var document = Api.getInstance().document;
  var visibilityState = document.visibilityState;
  switch (visibilityState) {
    case "visible":
      return VisibilityState.VISIBLE;
    case "hidden":
      return VisibilityState.HIDDEN;
    default:
      return VisibilityState.UNKNOWN;
  }
}
function getEffectiveConnectionType() {
  var navigator = Api.getInstance().navigator;
  var navigatorConnection = navigator.connection;
  var effectiveType = navigatorConnection && navigatorConnection.effectiveType;
  switch (effectiveType) {
    case "slow-2g":
      return 1;
    case "2g":
      return 2;
    case "3g":
      return 3;
    case "4g":
      return 4;
    default:
      return 0;
  }
}
function isValidCustomAttributeName(name2) {
  if (name2.length === 0 || name2.length > MAX_ATTRIBUTE_NAME_LENGTH) {
    return false;
  }
  var matchesReservedPrefix = RESERVED_ATTRIBUTE_PREFIXES.some(function(prefix) {
    return name2.startsWith(prefix);
  });
  return !matchesReservedPrefix && !!name2.match(ATTRIBUTE_FORMAT_REGEX);
}
function isValidCustomAttributeValue(value) {
  return value.length !== 0 && value.length <= MAX_ATTRIBUTE_VALUE_LENGTH;
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
var REMOTE_CONFIG_SDK_VERSION = "0.0.1";
var DEFAULT_CONFIGS = {
  loggingEnabled: true
};
var FIS_AUTH_PREFIX = "FIREBASE_INSTALLATIONS_AUTH";
function getConfig(iid2) {
  var config = getStoredConfig();
  if (config) {
    processConfig(config);
    return Promise.resolve();
  }
  return getRemoteConfig(iid2).then(processConfig).then(function(config2) {
    return storeConfig(config2);
  }, function() {
  });
}
function getStoredConfig() {
  var localStorage = Api.getInstance().localStorage;
  if (!localStorage) {
    return;
  }
  var expiryString = localStorage.getItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY);
  if (!expiryString || !configValid(expiryString)) {
    return;
  }
  var configStringified = localStorage.getItem(CONFIG_LOCAL_STORAGE_KEY);
  if (!configStringified) {
    return;
  }
  try {
    var configResponse = JSON.parse(configStringified);
    return configResponse;
  } catch (_a2) {
    return;
  }
}
function storeConfig(config) {
  var localStorage = Api.getInstance().localStorage;
  if (!config || !localStorage) {
    return;
  }
  localStorage.setItem(CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
  localStorage.setItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY, String(Date.now() + SettingsService.getInstance().configTimeToLive * 60 * 60 * 1e3));
}
var COULD_NOT_GET_CONFIG_MSG = "Could not fetch config, will use default configs";
function getRemoteConfig(iid2) {
  return getAuthTokenPromise().then(function(authToken) {
    var projectId = SettingsService.getInstance().getProjectId();
    var configEndPoint = "https://firebaseremoteconfig.googleapis.com/v1/projects/" + projectId + "/namespaces/fireperf:fetch?key=" + SettingsService.getInstance().getApiKey();
    var request = new Request(configEndPoint, {
      method: "POST",
      headers: { Authorization: FIS_AUTH_PREFIX + " " + authToken },
      body: JSON.stringify({
        app_instance_id: iid2,
        app_instance_id_token: authToken,
        app_id: SettingsService.getInstance().getAppId(),
        app_version: SDK_VERSION,
        sdk_version: REMOTE_CONFIG_SDK_VERSION
      })
    });
    return fetch(request).then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw ERROR_FACTORY.create("RC response not ok");
    });
  }).catch(function() {
    consoleLogger.info(COULD_NOT_GET_CONFIG_MSG);
    return void 0;
  });
}
function processConfig(config) {
  if (!config) {
    return config;
  }
  var settingsServiceInstance2 = SettingsService.getInstance();
  var entries = config.entries || {};
  if (entries.fpr_enabled !== void 0) {
    settingsServiceInstance2.loggingEnabled = String(entries.fpr_enabled) === "true";
  } else {
    settingsServiceInstance2.loggingEnabled = DEFAULT_CONFIGS.loggingEnabled;
  }
  if (entries.fpr_log_source) {
    settingsServiceInstance2.logSource = Number(entries.fpr_log_source);
  }
  if (entries.fpr_log_endpoint_url) {
    settingsServiceInstance2.logEndPointUrl = entries.fpr_log_endpoint_url;
  }
  if (entries.fpr_log_transport_key) {
    settingsServiceInstance2.transportKey = entries.fpr_log_transport_key;
  }
  if (entries.fpr_vc_network_request_sampling_rate !== void 0) {
    settingsServiceInstance2.networkRequestsSamplingRate = Number(entries.fpr_vc_network_request_sampling_rate);
  }
  if (entries.fpr_vc_trace_sampling_rate !== void 0) {
    settingsServiceInstance2.tracesSamplingRate = Number(entries.fpr_vc_trace_sampling_rate);
  }
  settingsServiceInstance2.logTraceAfterSampling = shouldLogAfterSampling(settingsServiceInstance2.tracesSamplingRate);
  settingsServiceInstance2.logNetworkAfterSampling = shouldLogAfterSampling(settingsServiceInstance2.networkRequestsSamplingRate);
  return config;
}
function configValid(expiry) {
  return Number(expiry) > Date.now();
}
function shouldLogAfterSampling(samplingRate) {
  return Math.random() <= samplingRate;
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
var initializationStatus = 1;
var initializationPromise;
function getInitializationPromise() {
  initializationStatus = 2;
  initializationPromise = initializationPromise || initializePerf();
  return initializationPromise;
}
function isPerfInitialized() {
  return initializationStatus === 3;
}
function initializePerf() {
  return getDocumentReadyComplete().then(function() {
    return getIidPromise();
  }).then(function(iid2) {
    return getConfig(iid2);
  }).then(function() {
    return changeInitializationStatus();
  }, function() {
    return changeInitializationStatus();
  });
}
function getDocumentReadyComplete() {
  var document = Api.getInstance().document;
  return new Promise(function(resolve) {
    if (document && document.readyState !== "complete") {
      var handler_1 = function() {
        if (document.readyState === "complete") {
          document.removeEventListener("readystatechange", handler_1);
          resolve();
        }
      };
      document.addEventListener("readystatechange", handler_1);
    } else {
      resolve();
    }
  });
}
function changeInitializationStatus() {
  initializationStatus = 3;
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
var DEFAULT_SEND_INTERVAL_MS = 10 * 1e3;
var INITIAL_SEND_TIME_DELAY_MS = 5.5 * 1e3;
var DEFAULT_REMAINING_TRIES = 3;
var remainingTries = DEFAULT_REMAINING_TRIES;
var queue = [];
var isTransportSetup = false;
function setupTransportService() {
  if (!isTransportSetup) {
    processQueue(INITIAL_SEND_TIME_DELAY_MS);
    isTransportSetup = true;
  }
}
function processQueue(timeOffset) {
  setTimeout(function() {
    if (remainingTries === 0) {
      return;
    }
    if (!queue.length) {
      return processQueue(DEFAULT_SEND_INTERVAL_MS);
    }
    dispatchQueueEvents();
  }, timeOffset);
}
function dispatchQueueEvents() {
  var staged = __spreadArrays(queue);
  queue = [];
  var log_event = staged.map(function(evt) {
    return {
      source_extension_json_proto3: evt.message,
      event_time_ms: String(evt.eventTime)
    };
  });
  var data = {
    request_time_ms: String(Date.now()),
    client_info: {
      client_type: 1,
      js_client_info: {}
    },
    log_source: SettingsService.getInstance().logSource,
    log_event
  };
  sendEventsToFl(data, staged).catch(function() {
    queue = __spreadArrays(staged, queue);
    remainingTries--;
    consoleLogger.info("Tries left: " + remainingTries + ".");
    processQueue(DEFAULT_SEND_INTERVAL_MS);
  });
}
function sendEventsToFl(data, staged) {
  return postToFlEndpoint(data).then(function(res) {
    if (!res.ok) {
      consoleLogger.info("Call to Firebase backend failed.");
    }
    return res.json();
  }).then(function(res) {
    var transportWait = Number(res.nextRequestWaitMillis);
    var requestOffset = DEFAULT_SEND_INTERVAL_MS;
    if (!isNaN(transportWait)) {
      requestOffset = Math.max(transportWait, requestOffset);
    }
    var logResponseDetails = res.logResponseDetails;
    if (Array.isArray(logResponseDetails) && logResponseDetails.length > 0 && logResponseDetails[0].responseAction === "RETRY_REQUEST_LATER") {
      queue = __spreadArrays(staged, queue);
      consoleLogger.info("Retry transport request later.");
    }
    remainingTries = DEFAULT_REMAINING_TRIES;
    processQueue(requestOffset);
  });
}
function postToFlEndpoint(data) {
  var flTransportFullUrl = SettingsService.getInstance().getFlTransportFullUrl();
  return fetch(flTransportFullUrl, {
    method: "POST",
    body: JSON.stringify(data)
  });
}
function addToQueue(evt) {
  if (!evt.eventTime || !evt.message) {
    throw ERROR_FACTORY.create("invalid cc log");
  }
  queue = __spreadArrays(queue, [evt]);
}
function transportHandler(serializer2) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var message = serializer2.apply(void 0, args);
    addToQueue({
      message,
      eventTime: Date.now()
    });
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
var logger;
function sendLog(resource, resourceType) {
  if (!logger) {
    logger = transportHandler(serializer);
  }
  logger(resource, resourceType);
}
function logTrace(trace) {
  var settingsService = SettingsService.getInstance();
  if (!settingsService.instrumentationEnabled && trace.isAuto) {
    return;
  }
  if (!settingsService.dataCollectionEnabled && !trace.isAuto) {
    return;
  }
  if (!Api.getInstance().requiredApisAvailable()) {
    return;
  }
  if (trace.isAuto && getVisibilityState() !== VisibilityState.VISIBLE) {
    return;
  }
  if (isPerfInitialized()) {
    sendTraceLog(trace);
  } else {
    getInitializationPromise().then(function() {
      return sendTraceLog(trace);
    }, function() {
      return sendTraceLog(trace);
    });
  }
}
function sendTraceLog(trace) {
  if (!getIid()) {
    return;
  }
  var settingsService = SettingsService.getInstance();
  if (!settingsService.loggingEnabled || !settingsService.logTraceAfterSampling) {
    return;
  }
  setTimeout(function() {
    return sendLog(trace, 1);
  }, 0);
}
function logNetworkRequest(networkRequest) {
  var settingsService = SettingsService.getInstance();
  if (!settingsService.instrumentationEnabled) {
    return;
  }
  var networkRequestUrl = networkRequest.url;
  var logEndpointUrl = settingsService.logEndPointUrl.split("?")[0];
  var flEndpointUrl = settingsService.flTransportEndpointUrl.split("?")[0];
  if (networkRequestUrl === logEndpointUrl || networkRequestUrl === flEndpointUrl) {
    return;
  }
  if (!settingsService.loggingEnabled || !settingsService.logNetworkAfterSampling) {
    return;
  }
  setTimeout(function() {
    return sendLog(networkRequest, 0);
  }, 0);
}
function serializer(resource, resourceType) {
  if (resourceType === 0) {
    return serializeNetworkRequest(resource);
  }
  return serializeTrace(resource);
}
function serializeNetworkRequest(networkRequest) {
  var networkRequestMetric = {
    url: networkRequest.url,
    http_method: networkRequest.httpMethod || 0,
    http_response_code: 200,
    response_payload_bytes: networkRequest.responsePayloadBytes,
    client_start_time_us: networkRequest.startTimeUs,
    time_to_response_initiated_us: networkRequest.timeToResponseInitiatedUs,
    time_to_response_completed_us: networkRequest.timeToResponseCompletedUs
  };
  var perfMetric = {
    application_info: getApplicationInfo(),
    network_request_metric: networkRequestMetric
  };
  return JSON.stringify(perfMetric);
}
function serializeTrace(trace) {
  var traceMetric = {
    name: trace.name,
    is_auto: trace.isAuto,
    client_start_time_us: trace.startTimeUs,
    duration_us: trace.durationUs
  };
  if (Object.keys(trace.counters).length !== 0) {
    traceMetric.counters = trace.counters;
  }
  var customAttributes = trace.getAttributes();
  if (Object.keys(customAttributes).length !== 0) {
    traceMetric.custom_attributes = customAttributes;
  }
  var perfMetric = {
    application_info: getApplicationInfo(),
    trace_metric: traceMetric
  };
  return JSON.stringify(perfMetric);
}
function getApplicationInfo() {
  return {
    google_app_id: SettingsService.getInstance().getAppId(),
    app_instance_id: getIid(),
    web_app_info: {
      sdk_version: SDK_VERSION,
      page_url: Api.getInstance().getUrl(),
      service_worker_status: getServiceWorkerStatus(),
      visibility_state: getVisibilityState(),
      effective_connection_type: getEffectiveConnectionType()
    },
    application_process_state: 0
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
var MAX_METRIC_NAME_LENGTH = 100;
var RESERVED_AUTO_PREFIX = "_";
var oobMetrics = [
  FIRST_PAINT_COUNTER_NAME,
  FIRST_CONTENTFUL_PAINT_COUNTER_NAME,
  FIRST_INPUT_DELAY_COUNTER_NAME
];
function isValidMetricName(name2, traceName) {
  if (name2.length === 0 || name2.length > MAX_METRIC_NAME_LENGTH) {
    return false;
  }
  return traceName && traceName.startsWith(OOB_TRACE_PAGE_LOAD_PREFIX) && oobMetrics.indexOf(name2) > -1 || !name2.startsWith(RESERVED_AUTO_PREFIX);
}
function convertMetricValueToInteger(providedValue) {
  var valueAsInteger = Math.floor(providedValue);
  if (valueAsInteger < providedValue) {
    consoleLogger.info("Metric value should be an Integer, setting the value as : " + valueAsInteger + ".");
  }
  return valueAsInteger;
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
var Trace = function() {
  function Trace2(name2, isAuto, traceMeasureName) {
    if (isAuto === void 0) {
      isAuto = false;
    }
    this.name = name2;
    this.isAuto = isAuto;
    this.state = 1;
    this.customAttributes = {};
    this.counters = {};
    this.api = Api.getInstance();
    this.randomId = Math.floor(Math.random() * 1e6);
    if (!this.isAuto) {
      this.traceStartMark = TRACE_START_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
      this.traceStopMark = TRACE_STOP_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
      this.traceMeasure = traceMeasureName || TRACE_MEASURE_PREFIX + "-" + this.randomId + "-" + this.name;
      if (traceMeasureName) {
        this.calculateTraceMetrics();
      }
    }
  }
  Trace2.prototype.start = function() {
    if (this.state !== 1) {
      throw ERROR_FACTORY.create("trace started", {
        traceName: this.name
      });
    }
    this.api.mark(this.traceStartMark);
    this.state = 2;
  };
  Trace2.prototype.stop = function() {
    if (this.state !== 2) {
      throw ERROR_FACTORY.create("trace stopped", {
        traceName: this.name
      });
    }
    this.state = 3;
    this.api.mark(this.traceStopMark);
    this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark);
    this.calculateTraceMetrics();
    logTrace(this);
  };
  Trace2.prototype.record = function(startTime, duration, options) {
    if (startTime <= 0) {
      throw ERROR_FACTORY.create("nonpositive trace startTime", {
        traceName: this.name
      });
    }
    if (duration <= 0) {
      throw ERROR_FACTORY.create("nonpositive trace duration", {
        traceName: this.name
      });
    }
    this.durationUs = Math.floor(duration * 1e3);
    this.startTimeUs = Math.floor(startTime * 1e3);
    if (options && options.attributes) {
      this.customAttributes = __assign({}, options.attributes);
    }
    if (options && options.metrics) {
      for (var _i = 0, _a2 = Object.keys(options.metrics); _i < _a2.length; _i++) {
        var metric = _a2[_i];
        if (!isNaN(Number(options.metrics[metric]))) {
          this.counters[metric] = Number(Math.floor(options.metrics[metric]));
        }
      }
    }
    logTrace(this);
  };
  Trace2.prototype.incrementMetric = function(counter, numAsInteger) {
    if (numAsInteger === void 0) {
      numAsInteger = 1;
    }
    if (this.counters[counter] === void 0) {
      this.putMetric(counter, numAsInteger);
    } else {
      this.putMetric(counter, this.counters[counter] + numAsInteger);
    }
  };
  Trace2.prototype.putMetric = function(counter, numAsInteger) {
    if (isValidMetricName(counter, this.name)) {
      this.counters[counter] = convertMetricValueToInteger(numAsInteger);
    } else {
      throw ERROR_FACTORY.create("invalid custom metric name", {
        customMetricName: counter
      });
    }
  };
  Trace2.prototype.getMetric = function(counter) {
    return this.counters[counter] || 0;
  };
  Trace2.prototype.putAttribute = function(attr, value) {
    var isValidName = isValidCustomAttributeName(attr);
    var isValidValue = isValidCustomAttributeValue(value);
    if (isValidName && isValidValue) {
      this.customAttributes[attr] = value;
      return;
    }
    if (!isValidName) {
      throw ERROR_FACTORY.create("invalid attribute name", {
        attributeName: attr
      });
    }
    if (!isValidValue) {
      throw ERROR_FACTORY.create("invalid attribute value", {
        attributeValue: value
      });
    }
  };
  Trace2.prototype.getAttribute = function(attr) {
    return this.customAttributes[attr];
  };
  Trace2.prototype.removeAttribute = function(attr) {
    if (this.customAttributes[attr] === void 0) {
      return;
    }
    delete this.customAttributes[attr];
  };
  Trace2.prototype.getAttributes = function() {
    return __assign({}, this.customAttributes);
  };
  Trace2.prototype.setStartTime = function(startTime) {
    this.startTimeUs = startTime;
  };
  Trace2.prototype.setDuration = function(duration) {
    this.durationUs = duration;
  };
  Trace2.prototype.calculateTraceMetrics = function() {
    var perfMeasureEntries = this.api.getEntriesByName(this.traceMeasure);
    var perfMeasureEntry = perfMeasureEntries && perfMeasureEntries[0];
    if (perfMeasureEntry) {
      this.durationUs = Math.floor(perfMeasureEntry.duration * 1e3);
      this.startTimeUs = Math.floor((perfMeasureEntry.startTime + this.api.getTimeOrigin()) * 1e3);
    }
  };
  Trace2.createOobTrace = function(navigationTimings, paintTimings, firstInputDelay) {
    var route = Api.getInstance().getUrl();
    if (!route) {
      return;
    }
    var trace = new Trace2(OOB_TRACE_PAGE_LOAD_PREFIX + route, true);
    var timeOriginUs = Math.floor(Api.getInstance().getTimeOrigin() * 1e3);
    trace.setStartTime(timeOriginUs);
    if (navigationTimings && navigationTimings[0]) {
      trace.setDuration(Math.floor(navigationTimings[0].duration * 1e3));
      trace.putMetric("domInteractive", Math.floor(navigationTimings[0].domInteractive * 1e3));
      trace.putMetric("domContentLoadedEventEnd", Math.floor(navigationTimings[0].domContentLoadedEventEnd * 1e3));
      trace.putMetric("loadEventEnd", Math.floor(navigationTimings[0].loadEventEnd * 1e3));
    }
    var FIRST_PAINT = "first-paint";
    var FIRST_CONTENTFUL_PAINT = "first-contentful-paint";
    if (paintTimings) {
      var firstPaint = paintTimings.find(function(paintObject) {
        return paintObject.name === FIRST_PAINT;
      });
      if (firstPaint && firstPaint.startTime) {
        trace.putMetric(FIRST_PAINT_COUNTER_NAME, Math.floor(firstPaint.startTime * 1e3));
      }
      var firstContentfulPaint = paintTimings.find(function(paintObject) {
        return paintObject.name === FIRST_CONTENTFUL_PAINT;
      });
      if (firstContentfulPaint && firstContentfulPaint.startTime) {
        trace.putMetric(FIRST_CONTENTFUL_PAINT_COUNTER_NAME, Math.floor(firstContentfulPaint.startTime * 1e3));
      }
      if (firstInputDelay) {
        trace.putMetric(FIRST_INPUT_DELAY_COUNTER_NAME, Math.floor(firstInputDelay * 1e3));
      }
    }
    logTrace(trace);
  };
  Trace2.createUserTimingTrace = function(measureName) {
    var trace = new Trace2(measureName, false, measureName);
    logTrace(trace);
  };
  return Trace2;
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
function createNetworkRequestEntry(entry) {
  var performanceEntry = entry;
  if (!performanceEntry || performanceEntry.responseStart === void 0) {
    return;
  }
  var timeOrigin = Api.getInstance().getTimeOrigin();
  var startTimeUs = Math.floor((performanceEntry.startTime + timeOrigin) * 1e3);
  var timeToResponseInitiatedUs = performanceEntry.responseStart ? Math.floor((performanceEntry.responseStart - performanceEntry.startTime) * 1e3) : void 0;
  var timeToResponseCompletedUs = Math.floor((performanceEntry.responseEnd - performanceEntry.startTime) * 1e3);
  var url = performanceEntry.name && performanceEntry.name.split("?")[0];
  var networkRequest = {
    url,
    responsePayloadBytes: performanceEntry.transferSize,
    startTimeUs,
    timeToResponseInitiatedUs,
    timeToResponseCompletedUs
  };
  logNetworkRequest(networkRequest);
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
var FID_WAIT_TIME_MS = 5e3;
function setupOobResources() {
  if (!getIid()) {
    return;
  }
  setTimeout(function() {
    return setupOobTraces();
  }, 0);
  setTimeout(function() {
    return setupNetworkRequests();
  }, 0);
  setTimeout(function() {
    return setupUserTimingTraces();
  }, 0);
}
function setupNetworkRequests() {
  var api = Api.getInstance();
  var resources = api.getEntriesByType("resource");
  for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
    var resource = resources_1[_i];
    createNetworkRequestEntry(resource);
  }
  api.setupObserver("resource", createNetworkRequestEntry);
}
function setupOobTraces() {
  var api = Api.getInstance();
  var navigationTimings = api.getEntriesByType("navigation");
  var paintTimings = api.getEntriesByType("paint");
  if (api.onFirstInputDelay) {
    var timeoutId_1 = setTimeout(function() {
      Trace.createOobTrace(navigationTimings, paintTimings);
      timeoutId_1 = void 0;
    }, FID_WAIT_TIME_MS);
    api.onFirstInputDelay(function(fid) {
      if (timeoutId_1) {
        clearTimeout(timeoutId_1);
        Trace.createOobTrace(navigationTimings, paintTimings, fid);
      }
    });
  } else {
    Trace.createOobTrace(navigationTimings, paintTimings);
  }
}
function setupUserTimingTraces() {
  var api = Api.getInstance();
  var measures = api.getEntriesByType("measure");
  for (var _i = 0, measures_1 = measures; _i < measures_1.length; _i++) {
    var measure = measures_1[_i];
    createUserTimingTrace(measure);
  }
  api.setupObserver("measure", createUserTimingTrace);
}
function createUserTimingTrace(measure) {
  var measureName = measure.name;
  if (measureName.substring(0, TRACE_MEASURE_PREFIX.length) === TRACE_MEASURE_PREFIX) {
    return;
  }
  Trace.createUserTimingTrace(measureName);
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
var PerformanceController = function() {
  function PerformanceController2(app) {
    this.app = app;
    if (Api.getInstance().requiredApisAvailable()) {
      validateIndexedDBOpenable().then(function(isAvailable) {
        if (isAvailable) {
          setupTransportService();
          getInitializationPromise().then(setupOobResources, setupOobResources);
        }
      }).catch(function(error) {
        consoleLogger.info("Environment doesn't support IndexedDB: " + error);
      });
    }
  }
  PerformanceController2.prototype.trace = function(name2) {
    return new Trace(name2);
  };
  Object.defineProperty(PerformanceController2.prototype, "instrumentationEnabled", {
    get: function() {
      return SettingsService.getInstance().instrumentationEnabled;
    },
    set: function(val) {
      SettingsService.getInstance().instrumentationEnabled = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(PerformanceController2.prototype, "dataCollectionEnabled", {
    get: function() {
      return SettingsService.getInstance().dataCollectionEnabled;
    },
    set: function(val) {
      SettingsService.getInstance().dataCollectionEnabled = val;
    },
    enumerable: false,
    configurable: true
  });
  return PerformanceController2;
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
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
function registerPerformance(instance) {
  var factoryMethod = function(app, installations) {
    if (app.name !== DEFAULT_ENTRY_NAME) {
      throw ERROR_FACTORY.create("FB not default");
    }
    if (typeof window === "undefined") {
      throw ERROR_FACTORY.create("no window");
    }
    setupApi(window);
    SettingsService.getInstance().firebaseAppInstance = app;
    SettingsService.getInstance().installationsService = installations;
    return new PerformanceController(app);
  };
  instance.INTERNAL.registerComponent(new Component("performance", function(container) {
    var app = container.getProvider("app").getImmediate();
    var installations = container.getProvider("installations").getImmediate();
    return factoryMethod(app, installations);
  }, "PUBLIC"));
  instance.registerVersion(name, version);
}
registerPerformance(firebase$1);
