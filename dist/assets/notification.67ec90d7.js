import { G as writable } from "./index.ae92f232.js";
const notification = writable();
const send = (message, type = "info", timeout, options = {}) => {
  notification.set({ type, message, timeout, options });
};
const danger = (msg, timeout, opts) => {
  send(msg, "danger", timeout, opts);
};
const warning = (msg, timeout, opts) => {
  send(msg, "warning", timeout, opts);
};
const info = (msg, timeout, opts) => {
  send(msg, "info", timeout, opts);
};
const success = (msg, timeout, opts) => {
  send(msg, "success", timeout, opts);
};
var notify = { danger, warning, info, success };
export { notification as a, notify as n };
