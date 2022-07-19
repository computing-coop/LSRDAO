const p$1 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$1();
function HMR(Component, options = { target: document.body }, id = "hmr", eventName = "app-loaded") {
  const prerenderedHtmlElement = document.getElementById(id);
  const target = document.createElement("div");
  target.style.visibility = "hidden";
  options.target.appendChild(target);
  if (!prerenderedHtmlElement)
    showApp();
  else
    addEventListener(eventName, showApp);
  function showApp() {
    removeEventListener(eventName, showApp);
    if (prerenderedHtmlElement)
      prerenderedHtmlElement.remove();
    target.style.visibility = null;
    target.setAttribute("id", id);
  }
  return new Component({ ...options, target });
}
function noop() {
}
const identity = (x2) => x2;
function assign(tar, src) {
  for (const k2 in src)
    tar[k2] = src[k2];
  return tar;
}
function is_promise(value) {
  return value && typeof value === "object" && typeof value.then === "function";
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a2, b2) {
  return a2 != a2 ? b2 == b2 : a2 !== b2 || (a2 && typeof a2 === "object" || typeof a2 === "function");
}
let src_url_equal_anchor;
function src_url_equal(element_src, url2) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement("a");
  }
  src_url_equal_anchor.href = url2;
  return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_2) => value = _2)();
  return value;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i2 = 0; i2 < len; i2 += 1) {
        merged[i2] = $$scope.dirty[i2] | lets[i2];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;
    for (let i2 = 0; i2 < length; i2++) {
      dirty[i2] = -1;
    }
    return dirty;
  }
  return -1;
}
function exclude_internal_props(props) {
  const result = {};
  for (const k2 in props)
    if (k2[0] !== "$")
      result[k2] = props[k2];
  return result;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function append(target, node) {
  target.appendChild(node);
}
function get_root_for_style(node) {
  if (!node)
    return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root && root.host) {
    return root;
  }
  return node.ownerDocument;
}
function append_empty_stylesheet(node) {
  const style_element = element("style");
  append_stylesheet(get_root_for_style(node), style_element);
  return style_element.sheet;
}
function append_stylesheet(node, style) {
  append(node.head || node, style);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
  for (let i2 = 0; i2 < iterations.length; i2 += 1) {
    if (iterations[i2])
      iterations[i2].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
  return function(event) {
    event.preventDefault();
    return fn.call(this, event);
  };
}
function self(fn) {
  return function(event) {
    if (event.target === this)
      fn.call(this, event);
  };
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function to_number(value) {
  return value === "" ? null : +value;
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data)
    text2.data = data;
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? "important" : "");
  }
}
function select_option(select, value) {
  for (let i2 = 0; i2 < select.options.length; i2 += 1) {
    const option = select.options[i2];
    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
  select.selectedIndex = -1;
}
function toggle_class(element2, name, toggle) {
  element2.classList[toggle ? "add" : "remove"](name);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
class HtmlTag {
  constructor(is_svg = false) {
    this.is_svg = false;
    this.is_svg = is_svg;
    this.e = this.n = null;
  }
  c(html) {
    this.h(html);
  }
  m(html, target, anchor = null) {
    if (!this.e) {
      if (this.is_svg)
        this.e = svg_element(target.nodeName);
      else
        this.e = element(target.nodeName);
      this.t = target;
      this.c(html);
    }
    this.i(anchor);
  }
  h(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }
  i(anchor) {
    for (let i2 = 0; i2 < this.n.length; i2 += 1) {
      insert(this.t, this.n[i2], anchor);
    }
  }
  p(html) {
    this.d();
    this.h(html);
    this.i(this.a);
  }
  d() {
    this.n.forEach(detach);
  }
}
const managed_styles = /* @__PURE__ */ new Map();
let active = 0;
function hash(str) {
  let hash2 = 5381;
  let i2 = str.length;
  while (i2--)
    hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i2);
  return hash2 >>> 0;
}
function create_style_information(doc, node) {
  const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
  managed_styles.set(doc, info);
  return info;
}
function create_rule(node, a2, b2, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = "{\n";
  for (let p2 = 0; p2 <= 1; p2 += step) {
    const t = a2 + (b2 - a2) * ease(p2);
    keyframes += p2 * 100 + `%{${fn(t, 1 - t)}}
`;
  }
  const rule = keyframes + `100% {${fn(b2, 1 - b2)}}
}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = get_root_for_style(node);
  const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
  if (!rules[name]) {
    rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }
  const animation = node.style.animation || "";
  node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}
function delete_rule(node, name) {
  const previous = (node.style.animation || "").split(", ");
  const next = previous.filter(name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("__svelte") === -1);
  const deleted = previous.length - next.length;
  if (deleted) {
    node.style.animation = next.join(", ");
    active -= deleted;
    if (!active)
      clear_rules();
  }
}
function clear_rules() {
  raf(() => {
    if (active)
      return;
    managed_styles.forEach((info) => {
      const { stylesheet } = info;
      let i2 = stylesheet.cssRules.length;
      while (i2--)
        stylesheet.deleteRule(i2);
      info.rules = {};
    });
    managed_styles.clear();
  });
}
function create_animation(node, from, fn, params2) {
  if (!from)
    return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
    return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    start: start_time = now() + delay,
    end = start_time + duration,
    tick: tick2 = noop,
    css
  } = fn(node, { from, to }, params2);
  let running = true;
  let started = false;
  let name;
  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }
    if (!delay) {
      started = true;
    }
  }
  function stop() {
    if (css)
      delete_rule(node, name);
    running = false;
  }
  loop((now2) => {
    if (!started && now2 >= start_time) {
      started = true;
    }
    if (started && now2 >= end) {
      tick2(1, 0);
      stop();
    }
    if (!running) {
      return false;
    }
    if (started) {
      const p2 = now2 - start_time;
      const t = 0 + 1 * easing(p2 / duration);
      tick2(t, 1 - t);
    }
    return true;
  });
  start();
  tick2(0, 1);
  return stop;
}
function fix_position(node) {
  const style = getComputedStyle(node);
  if (style.position !== "absolute" && style.position !== "fixed") {
    const { width, height } = style;
    const a2 = node.getBoundingClientRect();
    node.style.position = "absolute";
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a2);
  }
}
function add_transform(node, a2) {
  const b2 = node.getBoundingClientRect();
  if (a2.left !== b2.left || a2.top !== b2.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    node.style.transform = `${transform} translate(${a2.left - b2.left}px, ${a2.top - b2.top}px)`;
  }
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
  return context;
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];
  if (callbacks) {
    callbacks.slice().forEach((fn) => fn.call(this, event));
  }
}
const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  const saved_component = current_component;
  do {
    while (flushidx < dirty_components.length) {
      const component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i2 = 0; i2 < render_callbacks.length; i2 += 1) {
      const callback = render_callbacks[i2];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
let promise;
function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }
  return promise;
}
function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
}
const outroing = /* @__PURE__ */ new Set();
let outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params2) {
  let config = fn(node, params2);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;
  function cleanup() {
    if (animation_name)
      delete_rule(node, animation_name);
  }
  function go() {
    const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop, css } = config || null_transition;
    if (css)
      animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick2(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task)
      task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, "start"));
    task = loop((now2) => {
      if (running) {
        if (now2 >= end_time) {
          tick2(1, 0);
          dispatch(node, true, "end");
          cleanup();
          return running = false;
        }
        if (now2 >= start_time) {
          const t = easing((now2 - start_time) / duration);
          tick2(t, 1 - t);
        }
      }
      return running;
    });
  }
  let started = false;
  return {
    start() {
      if (started)
        return;
      started = true;
      delete_rule(node);
      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },
    invalidate() {
      started = false;
    },
    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }
  };
}
function create_out_transition(node, fn, params2) {
  let config = fn(node, params2);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;
  function go() {
    const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop, css } = config || null_transition;
    if (css)
      animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, "start"));
    loop((now2) => {
      if (running) {
        if (now2 >= end_time) {
          tick2(0, 1);
          dispatch(node, false, "end");
          if (!--group.r) {
            run_all(group.c);
          }
          return false;
        }
        if (now2 >= start_time) {
          const t = easing((now2 - start_time) / duration);
          tick2(1 - t, t);
        }
      }
      return running;
    });
  }
  if (is_function(config)) {
    wait().then(() => {
      config = config();
      go();
    });
  } else {
    go();
  }
  return {
    end(reset2) {
      if (reset2 && config.tick) {
        config.tick(1, 0);
      }
      if (running) {
        if (animation_name)
          delete_rule(node, animation_name);
        running = false;
      }
    }
  };
}
function create_bidirectional_transition(node, fn, params2, intro) {
  let config = fn(node, params2);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;
  function clear_animation() {
    if (animation_name)
      delete_rule(node, animation_name);
  }
  function init2(program, duration) {
    const d2 = program.b - t;
    duration *= Math.abs(d2);
    return {
      a: t,
      b: program.b,
      d: d2,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }
  function go(b2) {
    const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop, css } = config || null_transition;
    const program = {
      start: now() + delay,
      b: b2
    };
    if (!b2) {
      program.group = outros;
      outros.r += 1;
    }
    if (running_program || pending_program) {
      pending_program = program;
    } else {
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b2, duration, delay, easing, css);
      }
      if (b2)
        tick2(0, 1);
      running_program = init2(program, duration);
      add_render_callback(() => dispatch(node, b2, "start"));
      loop((now2) => {
        if (pending_program && now2 > pending_program.start) {
          running_program = init2(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, "start");
          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }
        if (running_program) {
          if (now2 >= running_program.end) {
            tick2(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, "end");
            if (!pending_program) {
              if (running_program.b) {
                clear_animation();
              } else {
                if (!--running_program.group.r)
                  run_all(running_program.group.c);
              }
            }
            running_program = null;
          } else if (now2 >= running_program.start) {
            const p2 = now2 - running_program.start;
            t = running_program.a + running_program.d * easing(p2 / running_program.duration);
            tick2(t, 1 - t);
          }
        }
        return !!(running_program || pending_program);
      });
    }
  }
  return {
    run(b2) {
      if (is_function(config)) {
        wait().then(() => {
          config = config();
          go(b2);
        });
      } else {
        go(b2);
      }
    },
    end() {
      clear_animation();
      running_program = pending_program = null;
    }
  };
}
function handle_promise(promise2, info) {
  const token = info.token = {};
  function update2(type, index, key, value) {
    if (info.token !== token)
      return;
    info.resolved = value;
    let child_ctx = info.ctx;
    if (key !== void 0) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }
    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;
    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block2, i2) => {
          if (i2 !== index && block2) {
            group_outros();
            transition_out(block2, 1, 1, () => {
              if (info.blocks[i2] === block2) {
                info.blocks[i2] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }
      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }
    info.block = block;
    if (info.blocks)
      info.blocks[index] = block;
    if (needs_flush) {
      flush();
    }
  }
  if (is_promise(promise2)) {
    const current_component2 = get_current_component();
    promise2.then((value) => {
      set_current_component(current_component2);
      update2(info.then, 1, info.value, value);
      set_current_component(null);
    }, (error) => {
      set_current_component(current_component2);
      update2(info.catch, 2, info.error, error);
      set_current_component(null);
      if (!info.hasCatch) {
        throw error;
      }
    });
    if (info.current !== info.pending) {
      update2(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update2(info.then, 1, info.value, promise2);
      return true;
    }
    info.resolved = promise2;
  }
}
function update_await_block_branch(info, ctx, dirty) {
  const child_ctx = ctx.slice();
  const { resolved } = info;
  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }
  if (info.current === info.catch) {
    child_ctx[info.error] = resolved;
  }
  info.block.p(child_ctx, dirty);
}
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}
function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block2, next, get_context) {
  let o2 = old_blocks.length;
  let n = list.length;
  let i2 = o2;
  const old_indexes = {};
  while (i2--)
    old_indexes[old_blocks[i2].key] = i2;
  const new_blocks = [];
  const new_lookup = /* @__PURE__ */ new Map();
  const deltas = /* @__PURE__ */ new Map();
  i2 = n;
  while (i2--) {
    const child_ctx = get_context(ctx, list, i2);
    const key = get_key(child_ctx);
    let block = lookup.get(key);
    if (!block) {
      block = create_each_block2(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }
    new_lookup.set(key, new_blocks[i2] = block);
    if (key in old_indexes)
      deltas.set(key, Math.abs(i2 - old_indexes[key]));
  }
  const will_move = /* @__PURE__ */ new Set();
  const did_move = /* @__PURE__ */ new Set();
  function insert2(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }
  while (o2 && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o2 - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      next = new_block.first;
      o2--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      destroy(old_block, lookup);
      o2--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert2(new_block);
    } else if (did_move.has(old_key)) {
      o2--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert2(new_block);
    } else {
      will_move.add(old_key);
      o2--;
    }
  }
  while (o2--) {
    const old_block = old_blocks[o2];
    if (!new_lookup.has(old_block.key))
      destroy(old_block, lookup);
  }
  while (n)
    insert2(new_blocks[n - 1]);
  return new_blocks;
}
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i2 = levels.length;
  while (i2--) {
    const o2 = levels[i2];
    const n = updates[i2];
    if (n) {
      for (const key in o2) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i2] = n;
    } else {
      for (const key in o2) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
function bind(component, name, callback) {
  const index = component.$$.props[name];
  if (index !== void 0) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, on_mount, on_destroy, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i2) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i2 / 31 | 0] |= 1 << i2 % 31;
}
function init$1(component, options, instance2, create_fragment2, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i2, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i2], $$.ctx[i2] = value)) {
      if (!$$.skip_bound && $$.bound[i2])
        $$.bound[i2](value);
      if (ready)
        make_dirty(component, i2);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }
  set_current_component(parent_component);
}
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
}
var defaultConfig = {
  queryHandler: {
    parse: (search) => fromEntries$1(new URLSearchParams(search)),
    stringify: (params2) => "?" + new URLSearchParams(params2).toString()
  },
  urlTransform: {
    apply: (x2) => x2,
    remove: (x2) => x2
  },
  useHash: false
};
function fromEntries$1(iterable) {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
}
const MATCH_PARAM = RegExp(/\:([^/()]+)/g);
function handleScroll(element2, scrollToTop) {
  if (navigator.userAgent.includes("jsdom"))
    return false;
  if (scrollToTop)
    scrollAncestorsToTop(element2);
  handleHash();
}
function handleHash() {
  if (navigator.userAgent.includes("jsdom"))
    return false;
  const { hash: hash2 } = window.location;
  if (hash2) {
    const el = document.getElementById(hash2.substring(1));
    if (el)
      el.scrollIntoView();
  }
}
function scrollAncestorsToTop(element2) {
  if (element2 && element2.scrollTo && element2.dataset.routify !== "scroll-lock" && element2.dataset["routify-scroll"] !== "lock") {
    element2.style["scroll-behavior"] = "auto";
    element2.scrollTo({ top: 0, behavior: "auto" });
    element2.style["scroll-behavior"] = "";
    scrollAncestorsToTop(element2.parentElement);
  }
}
const pathToRegex = (str, recursive) => {
  const suffix = recursive ? "" : "/?$";
  str = str.replace(/\/_fallback?$/, "(/|$)");
  str = str.replace(/\/index$/, "(/index)?");
  str = str.replace(MATCH_PARAM, "([^/]+)") + suffix;
  str = `^${str}`;
  return str;
};
const pathToParamKeys = (string) => {
  const paramsKeys = [];
  let matches;
  while (matches = MATCH_PARAM.exec(string))
    paramsKeys.push(matches[1]);
  return paramsKeys;
};
const pathToRank = ({ path }) => {
  return path.split("/").filter(Boolean).map((str) => str === "_fallback" ? "A" : str.startsWith(":") ? "B" : "C").join("");
};
function suppressComponentWarnings(ctx, tick2) {
  suppressComponentWarnings._console = suppressComponentWarnings._console || { log: console.log, warn: console.warn };
  const { _console } = suppressComponentWarnings;
  const name = ctx.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, ctx.component.shortPath.split("/").pop()).replace(/^./, (s2) => s2.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D");
  const ignores = [
    `<${name}> received an unexpected slot "default".`,
    `<${name}> was created with unknown prop 'scoped'`,
    `<${name}> was created with unknown prop 'scopedSync'`
  ];
  for (const log of ["log", "warn"]) {
    console[log] = (...args) => {
      if (!ignores.includes(args[0]))
        _console[log](...args);
    };
    tick2().then(() => {
      console[log] = _console[log];
    });
  }
}
function currentLocation() {
  let dirtyFullpath = window.location.pathname + window.location.search + window.location.hash;
  const { url: url2, options } = resolvePrefetch(dirtyFullpath);
  const parsedUrl = parseUrl(url2);
  return { ...parsedUrl, options };
}
function resolvePrefetch(dirtyFullpath) {
  const [url2, _options] = dirtyFullpath.split("__[[routify_url_options]]__");
  const options = JSON.parse(decodeURIComponent(_options || "") || "{}");
  window.routify = window.routify || {};
  window.routify.prefetched = options.prefetch;
  return { url: url2, options };
}
function parseUrl(url2) {
  if (defaultConfig.useHash)
    url2 = url2.replace(/.*#(.+)/, "$1");
  const origin = url2.startsWith("/") ? window.location.origin : void 0;
  const _url = new URL(url2, origin);
  const fullpath = _url.pathname + _url.search + _url.hash;
  return { url: _url, fullpath };
}
function resolveUrl(path, params2, inheritedParams) {
  const hash2 = defaultConfig.useHash ? "#" : "";
  let url2;
  url2 = populateUrl(path, params2, inheritedParams);
  url2 = defaultConfig.urlTransform.apply(url2);
  url2 = hash2 + url2;
  return url2;
}
function populateUrl(path, params2, inheritedParams) {
  const allParams = Object.assign({}, inheritedParams, params2);
  const queryString = getQueryString(path, params2);
  for (const [key, value] of Object.entries(allParams))
    path = path.replace(`:${key}`, value);
  return `${path}${queryString}`;
}
function getQueryString(path, params2) {
  if (!defaultConfig.queryHandler)
    return "";
  const ignoredKeys = pathToParamKeys(path);
  const queryParams = {};
  if (params2)
    Object.entries(params2).forEach(([key, value]) => {
      if (!ignoredKeys.includes(key))
        queryParams[key] = value;
    });
  return defaultConfig.queryHandler.stringify(queryParams).replace(/\?$/, "");
}
function create_fragment$4(ctx) {
  let current;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { scoped = {} } = $$props;
  $$self.$$set = ($$props2) => {
    if ("scoped" in $$props2)
      $$invalidate(0, scoped = $$props2.scoped);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [scoped, $$scope, slots];
}
class Noop extends SvelteComponent {
  constructor(options) {
    super();
    init$1(this, options, instance$4, create_fragment$4, safe_not_equal, { scoped: 0 });
  }
}
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
            subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i2) => subscribe(store, (value) => {
      values[i2] = value;
      pending &= ~(1 << i2);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i2;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
window.routify = window.routify || {};
const route = writable(null);
const routes$1 = writable([]);
routes$1.subscribe((routes2) => window.routify.routes = routes2);
let rootContext = writable({ component: { params: {} } });
const urlRoute = writable(null);
const isChangingPage = writable(true);
async function onPageLoaded({ page, metatags: metatags2, afterPageLoad: afterPageLoad2, parentNode }) {
  const scrollToTop = page.last !== page;
  setTimeout(() => handleScroll(parentNode, scrollToTop));
  const { path } = page;
  const { options } = currentLocation();
  const prefetchId = options.prefetch;
  for (const hook of afterPageLoad2._hooks) {
    if (hook)
      await hook(page.api);
  }
  metatags2.update();
  dispatchEvent(new CustomEvent("app-loaded"));
  parent.postMessage({
    msg: "app-loaded",
    prefetched: window.routify.prefetched,
    path,
    prefetchId
  }, "*");
  window["routify"].appLoaded = true;
  window["routify"].stopAutoReady = false;
}
function urlToRoute(url2, clone2 = false) {
  url2 = defaultConfig.urlTransform.remove(url2);
  let { pathname, search } = parseUrl(url2).url;
  const routes2 = get_store_value(routes$1);
  const matchingRoute = routes2.find((route3) => pathname === route3.meta.name) || routes2.find((route3) => pathname.match(route3.regex));
  if (!matchingRoute)
    throw new Error(`Route could not be found for "${pathname}".`);
  const _matchingRoute = clone2 ? Object.create(matchingRoute) : matchingRoute;
  const { route: route2, redirectPath, rewritePath } = resolveRedirects(_matchingRoute, routes2);
  if (rewritePath) {
    ({ pathname, search } = parseUrl(resolveUrl(rewritePath, route2.params)).url);
    if (redirectPath)
      route2.redirectTo = resolveUrl(redirectPath, route2.params || {});
  }
  if (defaultConfig.queryHandler)
    route2.params = Object.assign({}, defaultConfig.queryHandler.parse(search));
  assignParamsToRouteAndLayouts(route2, pathname);
  route2.leftover = url2.replace(new RegExp(route2.regex), "");
  return route2;
}
function assignParamsToRouteAndLayouts(route2, pathname) {
  if (route2.paramKeys) {
    const layouts = layoutByPos(route2.layouts);
    const fragments = pathname.split("/").filter(Boolean);
    const routeProps = getRouteProps(route2.path);
    routeProps.forEach((prop, i2) => {
      if (prop) {
        route2.params[prop] = fragments[i2];
        if (layouts[i2])
          layouts[i2].param = { [prop]: fragments[i2] };
        else
          route2.param = { [prop]: fragments[i2] };
      }
    });
  }
}
function resolveRedirects(route2, routes2, redirectPath, rewritePath) {
  const { redirect: redirect2, rewrite } = route2.meta;
  if (redirect2 || rewrite) {
    redirectPath = redirect2 ? redirect2.path || redirect2 : redirectPath;
    rewritePath = rewrite ? rewrite.path || rewrite : redirectPath;
    const redirectParams = redirect2 && redirect2.params;
    const rewriteParams = rewrite && rewrite.params;
    const newRoute = routes2.find((r2) => r2.path.replace(/\/index$/, "") === rewritePath);
    if (newRoute === route2)
      console.error(`${rewritePath} is redirecting to itself`);
    if (!newRoute)
      console.error(`${route2.path} is redirecting to non-existent path: ${rewritePath}`);
    if (redirectParams || rewriteParams)
      newRoute.params = Object.assign({}, newRoute.params, redirectParams, rewriteParams);
    return resolveRedirects(newRoute, routes2, redirectPath, rewritePath);
  }
  return { route: route2, redirectPath, rewritePath };
}
function layoutByPos(layouts) {
  const arr = [];
  layouts.forEach((layout) => {
    arr[layout.path.split("/").filter(Boolean).length - 1] = layout;
  });
  return arr;
}
function getRouteProps(url2) {
  return url2.split("/").filter(Boolean).map((f) => f.match(/\:(.+)/)).map((f) => f && f[1]);
}
function get_each_context$1(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i2];
  return child_ctx;
}
function create_each_block$1(key_1, ctx) {
  let iframe;
  let iframe_src_value;
  return {
    key: key_1,
    first: null,
    c() {
      iframe = element("iframe");
      if (!src_url_equal(iframe.src, iframe_src_value = ctx[1].url))
        attr(iframe, "src", iframe_src_value);
      attr(iframe, "frameborder", "0");
      attr(iframe, "title", "routify prefetcher");
      this.first = iframe;
    },
    m(target, anchor) {
      insert(target, iframe, anchor);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 1 && !src_url_equal(iframe.src, iframe_src_value = ctx[1].url)) {
        attr(iframe, "src", iframe_src_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(iframe);
    }
  };
}
function create_fragment$3(ctx) {
  let div;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_value = ctx[0];
  const get_key = (ctx2) => ctx2[1].options.prefetch;
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    let child_ctx = get_each_context$1(ctx, each_value, i2);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i2] = create_each_block$1(key, child_ctx));
  }
  return {
    c() {
      div = element("div");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      attr(div, "id", "__routify_iframes");
      set_style(div, "display", "none");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(div, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value = ctx2[0];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, destroy_block, create_each_block$1, null, get_each_context$1);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].d();
      }
    }
  };
}
const iframeNum = 2;
const queue = writable([]);
const actives = derived(queue, (q2) => q2.slice(0, iframeNum));
actives.subscribe((actives2) => actives2.forEach(({ options }) => {
  setTimeout(() => removeFromQueue(options.prefetch), options.timeout);
}));
function removeFromQueue(idOrEvent) {
  const id = idOrEvent.data ? idOrEvent.data.prefetchId : idOrEvent;
  if (!id)
    return null;
  const entry = get_store_value(queue).find((entry2) => entry2 && entry2.options.prefetch == id);
  if (entry) {
    const { gracePeriod } = entry.options;
    const gracePromise = new Promise((resolve) => setTimeout(resolve, gracePeriod));
    const idlePromise = new Promise((resolve) => {
      window.requestIdleCallback ? window.requestIdleCallback(resolve) : setTimeout(resolve, gracePeriod + 1e3);
    });
    Promise.all([gracePromise, idlePromise]).then(() => {
      queue.update((q2) => q2.filter((q3) => q3.options.prefetch != id));
    });
  }
}
addEventListener("message", removeFromQueue, false);
function instance$3($$self, $$props, $$invalidate) {
  let $actives;
  component_subscribe($$self, actives, ($$value) => $$invalidate(0, $actives = $$value));
  return [$actives];
}
class Prefetcher extends SvelteComponent {
  constructor(options) {
    super();
    init$1(this, options, instance$3, create_fragment$3, safe_not_equal, {});
  }
}
function getRoutifyContext() {
  return getContext("routify") || rootContext;
}
const afterPageLoad = {
  _hooks: [
    (event) => isChangingPage.set(false)
  ],
  subscribe: hookHandler
};
const beforeUrlChange = {
  _hooks: [],
  subscribe: hookHandler
};
function hookHandler(listener) {
  const hooks = this._hooks;
  const index = hooks.length;
  listener((callback) => {
    hooks[index] = callback;
  });
  return (...params2) => {
    delete hooks[index];
    listener(...params2);
  };
}
const params = {
  subscribe(run2) {
    const ctx = getRoutifyContext();
    return derived(ctx, (ctx2) => ctx2.route.params).subscribe(run2);
  }
};
const url = {
  subscribe(listener) {
    const ctx = getRoutifyContext();
    return derived(ctx, (ctx2) => makeUrlHelper(ctx2, ctx2.route, ctx2.routes)).subscribe(listener);
  }
};
function makeUrlHelper($ctx, $currentRoute, $routes) {
  return function url2(path, params2 = {}, options) {
    const { component } = $ctx;
    const inheritedParams = Object.assign({}, $currentRoute.params, component.params);
    let el = path && path.nodeType && path;
    if (el)
      path = path.getAttribute("href");
    path = path ? resolvePath(path) : component.shortPath;
    const route2 = $routes.find((route3) => [route3.shortPath || "/", route3.path].includes(path));
    if (route2 && route2.meta.preload === "proximity" && window.requestIdleCallback) {
      const delay = routify.appLoaded ? 0 : 1500;
      setTimeout(() => {
        window.requestIdleCallback(() => route2.api.preload());
      }, delay);
    }
    const strict = options && options.strict !== false;
    if (!strict)
      path = path.replace(/index$/, "");
    let url3 = resolveUrl(path, params2, inheritedParams);
    if (el) {
      el.href = url3;
      return {
        update(changedParams) {
          el.href = resolveUrl(path, changedParams, inheritedParams);
        }
      };
    }
    return url3;
    function resolvePath(path2) {
      if (path2.match(/^\.\.?\//)) {
        let [, breadcrumbs, relativePath] = path2.match(/^([\.\/]+)(.*)/);
        let dir = component.path.replace(/\/$/, "");
        const traverse = breadcrumbs.match(/\.\.\//g) || [];
        if (component.isPage)
          traverse.push(null);
        traverse.forEach(() => dir = dir.replace(/\/[^\/]+\/?$/, ""));
        path2 = `${dir}/${relativePath}`.replace(/\/$/, "");
        path2 = path2 || "/";
      } else if (path2.match(/^\//))
        ;
      else {
        const matchingRoute = $routes.find((route3) => route3.meta.name === path2);
        if (matchingRoute)
          path2 = matchingRoute.shortPath;
      }
      return path2;
    }
  };
}
const goto = {
  subscribe(listener) {
    const routifyUpdatePage = getContext("routifyupdatepage");
    return derived(url, (url2) => function goto2(path, params2, _static, shallow) {
      const href = url2(path, params2);
      if (!_static)
        history.pushState({}, null, href);
      else
        routifyUpdatePage(href, shallow);
    }).subscribe(listener);
  }
};
const redirect = {
  subscribe(listener) {
    const routifyUpdatePage = getContext("routifyupdatepage");
    return derived(url, (url2) => function redirect2(path, params2, _static, shallow) {
      const href = url2(path, params2);
      if (!_static)
        history.replaceState({}, null, href);
      else
        routifyUpdatePage(href, shallow);
    }).subscribe(listener);
  }
};
const isActive = {
  subscribe(run2) {
    return derived([url, route], ([url2, route2]) => function isActive2(path = "", params2 = {}, { strict } = { strict: true }) {
      path = url2(path, params2, { strict });
      const currentPath = url2(route2.path, params2, { strict });
      const re = new RegExp("^" + path + "($|/)");
      return !!currentPath.match(re);
    }).subscribe(run2);
  }
};
const _metatags = {
  subscribe(listener) {
    this._origin = this.getOrigin();
    return listener(metatags);
  },
  props: {},
  templates: {},
  services: {
    plain: { propField: "name", valueField: "content" },
    twitter: { propField: "name", valueField: "content" },
    og: { propField: "property", valueField: "content" }
  },
  plugins: [
    {
      name: "applyTemplate",
      condition: () => true,
      action: (prop, value) => {
        const template = _metatags.getLongest(_metatags.templates, prop) || ((x2) => x2);
        return [prop, template(value)];
      }
    },
    {
      name: "createMeta",
      condition: () => true,
      action(prop, value) {
        _metatags.writeMeta(prop, value);
      }
    },
    {
      name: "createOG",
      condition: (prop) => !prop.match(":"),
      action(prop, value) {
        _metatags.writeMeta(`og:${prop}`, value);
      }
    },
    {
      name: "createTitle",
      condition: (prop) => prop === "title",
      action(prop, value) {
        document.title = value;
      }
    }
  ],
  getLongest(repo, name) {
    const providers = repo[name];
    if (providers) {
      const currentPath = get_store_value(route).path;
      const allPaths = Object.keys(repo[name]);
      const matchingPaths = allPaths.filter((path) => currentPath.includes(path));
      const longestKey = matchingPaths.sort((a2, b2) => b2.length - a2.length)[0];
      return providers[longestKey];
    }
  },
  writeMeta(prop, value) {
    const head = document.getElementsByTagName("head")[0];
    const match = prop.match(/(.+)\:/);
    const serviceName = match && match[1] || "plain";
    const { propField, valueField } = metatags.services[serviceName] || metatags.services.plain;
    const oldElement = document.querySelector(`meta[${propField}='${prop}']`);
    if (oldElement)
      oldElement.remove();
    const newElement = document.createElement("meta");
    newElement.setAttribute(propField, prop);
    newElement.setAttribute(valueField, value);
    newElement.setAttribute("data-origin", "routify");
    head.appendChild(newElement);
  },
  set(prop, value) {
    if (typeof prop === "string") {
      _metatags.plugins.forEach((plugin) => {
        if (plugin.condition(prop, value))
          [prop, value] = plugin.action(prop, value) || [prop, value];
      });
    }
  },
  clear() {
    const oldElement = document.querySelector(`meta`);
    if (oldElement)
      oldElement.remove();
  },
  template(name, fn) {
    const origin = _metatags.getOrigin;
    _metatags.templates[name] = _metatags.templates[name] || {};
    _metatags.templates[name][origin] = fn;
  },
  update() {
    Object.keys(_metatags.props).forEach((prop) => {
      let value = _metatags.getLongest(_metatags.props, prop);
      _metatags.plugins.forEach((plugin) => {
        if (plugin.condition(prop, value)) {
          [prop, value] = plugin.action(prop, value) || [prop, value];
        }
      });
    });
  },
  batchedUpdate() {
    if (!_metatags._pendingUpdate) {
      _metatags._pendingUpdate = true;
      setTimeout(() => {
        _metatags._pendingUpdate = false;
        this.update();
      });
    }
  },
  _updateQueued: false,
  _origin: false,
  getOrigin() {
    if (this._origin)
      return this._origin;
    const routifyCtx = getRoutifyContext();
    return routifyCtx && get_store_value(routifyCtx).path || "/";
  },
  _pendingUpdate: false
};
const metatags = new Proxy(_metatags, {
  set(target, name, value, receiver) {
    const { props } = target;
    if (Reflect.has(target, name))
      Reflect.set(target, name, value, receiver);
    else {
      props[name] = props[name] || {};
      props[name][target.getOrigin()] = value;
    }
    if (window["routify"].appLoaded)
      target.batchedUpdate();
    return true;
  }
});
function get_each_context(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i2].component;
  child_ctx[22] = list[i2].componentFile;
  child_ctx[2] = list[i2].decorator;
  child_ctx[1] = list[i2].nodes;
  return child_ctx;
}
function create_if_block_1(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  let each_value = [ctx[4]];
  const get_key = (ctx2) => ctx2[7];
  for (let i2 = 0; i2 < 1; i2 += 1) {
    let child_ctx = get_each_context(ctx, each_value, i2);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i2] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      for (let i2 = 0; i2 < 1; i2 += 1) {
        each_blocks[i2].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i2 = 0; i2 < 1; i2 += 1) {
        each_blocks[i2].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 33554621) {
        each_value = [ctx2[4]];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < 1; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      for (let i2 = 0; i2 < 1; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      for (let i2 = 0; i2 < 1; i2 += 1) {
        each_blocks[i2].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block_2(ctx) {
  let route_1;
  let current;
  route_1 = new Route({
    props: {
      decorator: ctx[2],
      nodes: ctx[1],
      scoped: {
        ...ctx[0],
        ...ctx[25]
      }
    }
  });
  return {
    c() {
      create_component(route_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(route_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const route_1_changes = {};
      if (dirty & 4)
        route_1_changes.decorator = ctx2[2];
      if (dirty & 16)
        route_1_changes.nodes = ctx2[1];
      if (dirty & 33554433)
        route_1_changes.scoped = {
          ...ctx2[0],
          ...ctx2[25]
        };
      route_1.$set(route_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(route_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(route_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(route_1, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[21] && ctx[1].length && create_if_block_2(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[21] && ctx2[1].length) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot(ctx) {
  let switch_instance;
  let t;
  let current;
  const switch_instance_spread_levels = [
    { scoped: ctx[0] },
    { scopedSync: ctx[5] },
    ctx[3].param || {}
  ];
  var switch_value = ctx[22];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: {
        default: [
          create_default_slot_1,
          ({ scoped: scopeToChild, decorator }) => ({ 25: scopeToChild, 2: decorator }),
          ({ scoped: scopeToChild, decorator }) => (scopeToChild ? 33554432 : 0) | (decorator ? 4 : 0)
        ]
      },
      $$scope: { ctx: ctx2 }
    };
    for (let i2 = 0; i2 < switch_instance_spread_levels.length; i2 += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i2]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t = space();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, t, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty & 41 ? get_spread_update(switch_instance_spread_levels, [
        dirty & 1 && { scoped: ctx2[0] },
        dirty & 32 && { scopedSync: ctx2[5] },
        dirty & 8 && get_spread_object(ctx2[3].param || {})
      ]) : {};
      if (dirty & 100663317) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[22])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, t.parentNode, t);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (switch_instance)
        destroy_component(switch_instance, detaching);
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block(key_1, ctx) {
  let first;
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    return {
      props: {
        scoped: ctx2[0],
        $$slots: { default: [create_default_slot] },
        $$scope: { ctx: ctx2 }
      }
    };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const switch_instance_changes = {};
      if (dirty & 1)
        switch_instance_changes.scoped = ctx[0];
      if (dirty & 67108925) {
        switch_instance_changes.$$scope = { dirty, ctx };
      }
      if (switch_value !== (switch_value = ctx[2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let div;
  let setParentNode_action;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      set_style(div, "display", "contents");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (!mounted) {
        dispose = action_destroyer(setParentNode_action = ctx[10].call(null, div));
        mounted = true;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$2(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = ctx[4] && create_if_block_1(ctx);
  let if_block1 = !ctx[6] && create_if_block$1(ctx);
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[4]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (!ctx2[6]) {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let id;
  let $context;
  let $route;
  let $parentContext;
  let $routes;
  component_subscribe($$self, route, ($$value) => $$invalidate(14, $route = $$value));
  component_subscribe($$self, routes$1, ($$value) => $$invalidate(16, $routes = $$value));
  let { nodes = [] } = $$props;
  let { scoped = {} } = $$props;
  let { decorator = void 0 } = $$props;
  let node = null;
  let remainingNodes = null;
  let scopedSync = {};
  let parentNode;
  let invalidate = 1;
  const context = writable(null);
  component_subscribe($$self, context, (value) => $$invalidate(4, $context = value));
  const parentContext = getContext("routify") || rootContext;
  component_subscribe($$self, parentContext, (value) => $$invalidate(15, $parentContext = value));
  const setParentNode = (el) => $$invalidate(6, parentNode = el.parentNode);
  setContext("routify", context);
  let lastNodes = [];
  function setComponent(node2) {
    let PendingComponent = node2.component();
    if (PendingComponent instanceof Promise)
      PendingComponent.then(onComponentLoaded);
    else
      onComponentLoaded(PendingComponent);
  }
  function onComponentLoaded(componentFile) {
    $$invalidate(5, scopedSync = { ...scoped });
    const ctx = {
      ...$context,
      nodes: remainingNodes,
      decorator: decorator || Noop,
      layout: node.isLayout ? node : $parentContext.layout,
      component: node,
      route: $route,
      routes: $routes,
      componentFile,
      parentNode: parentNode || $parentContext.parentNode
    };
    context.set(ctx);
    set_store_value(parentContext, $parentContext.child = node, $parentContext);
    if (remainingNodes.length === 0)
      onLastComponentLoaded();
  }
  async function onLastComponentLoaded() {
    await new Promise((resolve) => setTimeout(resolve));
    const isOnCurrentRoute = $context.component.path === $route.path;
    if (!window["routify"].stopAutoReady && isOnCurrentRoute)
      onPageLoaded({
        page: $context.component,
        metatags,
        afterPageLoad,
        parentNode
      });
  }
  function getID({ meta, path, param, params: params2 }) {
    return JSON.stringify({
      path,
      invalidate,
      param: (meta["param-is-page"] || meta["slug-is-page"]) && param,
      queryParams: meta["query-params-is-page"] && params2
    });
  }
  $$self.$$set = ($$props2) => {
    if ("nodes" in $$props2)
      $$invalidate(1, nodes = $$props2.nodes);
    if ("scoped" in $$props2)
      $$invalidate(0, scoped = $$props2.scoped);
    if ("decorator" in $$props2)
      $$invalidate(2, decorator = $$props2.decorator);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 6146) {
      if (lastNodes !== nodes) {
        $$invalidate(12, lastNodes = nodes);
        $$invalidate(3, [node, ...remainingNodes] = [...nodes], node);
        $$invalidate(3, node["api"].reset = () => $$invalidate(11, invalidate++, invalidate), node);
      }
    }
    if ($$self.$$.dirty & 8) {
      setComponent(node);
    }
    if ($$self.$$.dirty & 2064) {
      $$invalidate(7, id = $context && invalidate && getID($context.component));
    }
    if ($$self.$$.dirty & 16) {
      $context && suppressComponentWarnings($context, tick);
    }
  };
  return [
    scoped,
    nodes,
    decorator,
    node,
    $context,
    scopedSync,
    parentNode,
    id,
    context,
    parentContext,
    setParentNode,
    invalidate,
    lastNodes
  ];
}
class Route extends SvelteComponent {
  constructor(options) {
    super();
    init$1(this, options, instance$2, create_fragment$2, safe_not_equal, { nodes: 1, scoped: 0, decorator: 2 });
  }
}
function init(routes2, callback) {
  let lastRoute = false;
  function updatePage(proxyToUrl, shallow) {
    const url2 = proxyToUrl || currentLocation().fullpath;
    const route$1 = urlToRoute(url2);
    if (route$1.redirectTo) {
      history.replaceStateNative({}, null, route$1.redirectTo);
      delete route$1.redirectTo;
    }
    const currentRoute = shallow && urlToRoute(currentLocation().fullpath, routes2);
    const contextRoute = currentRoute || route$1;
    const nodes = [...contextRoute.layouts, route$1];
    if (lastRoute)
      delete lastRoute.last;
    route$1.last = lastRoute;
    lastRoute = route$1;
    if (!proxyToUrl)
      urlRoute.set(route$1);
    route.set(route$1);
    route$1.api.preload().then(() => {
      isChangingPage.set(true);
      callback(nodes);
    });
  }
  const destroy = createEventListeners(updatePage);
  return { updatePage, destroy };
}
function createEventListeners(updatePage) {
  ["pushState", "replaceState"].forEach((eventName) => {
    if (!history[eventName + "Native"])
      history[eventName + "Native"] = history[eventName];
    history[eventName] = async function(state = {}, title, url2) {
      const currentUrl = location.pathname + location.search + location.hash;
      if (url2 === currentUrl)
        return false;
      const { id, path, params: params2 } = get_store_value(route);
      state = { id, path, params: params2, ...state };
      const event = new Event(eventName.toLowerCase());
      Object.assign(event, { state, title, url: url2 });
      const route$1 = await runHooksBeforeUrlChange(event, url2);
      if (route$1) {
        history[eventName + "Native"].apply(this, [state, title, url2]);
        return dispatchEvent(event);
      }
    };
  });
  let _ignoreNextPop = false;
  const listeners = {
    click: handleClick,
    pushstate: () => updatePage(),
    replacestate: () => updatePage(),
    popstate: async (event) => {
      if (_ignoreNextPop)
        _ignoreNextPop = false;
      else {
        if (await runHooksBeforeUrlChange(event, currentLocation().fullpath)) {
          updatePage();
        } else {
          _ignoreNextPop = true;
          event.preventDefault();
          history.go(1);
        }
      }
    }
  };
  Object.entries(listeners).forEach((args) => addEventListener(...args));
  const unregister = () => {
    Object.entries(listeners).forEach((args) => removeEventListener(...args));
  };
  return unregister;
}
function handleClick(event) {
  const el = event.target.closest("a") || event.composedPath().find((el2) => el2.tagName === "A");
  const href = el && el.href;
  if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || event.button || event.defaultPrevented)
    return;
  if (!href || el.target || el.host !== location.host)
    return;
  const url2 = new URL(href);
  const relativeUrl = url2.pathname + url2.search + url2.hash;
  event.preventDefault();
  history.pushState({}, "", relativeUrl);
}
async function runHooksBeforeUrlChange(event, url2) {
  const route2 = urlToRoute(url2).api;
  for (const hook of beforeUrlChange._hooks.filter(Boolean)) {
    const result = await hook(event, route2, { url: url2 });
    if (!result)
      return false;
  }
  return true;
}
function create_if_block(ctx) {
  let route_1;
  let current;
  route_1 = new Route({ props: { nodes: ctx[0] } });
  return {
    c() {
      create_component(route_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(route_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const route_1_changes = {};
      if (dirty & 1)
        route_1_changes.nodes = ctx2[0];
      route_1.$set(route_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(route_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(route_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(route_1, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let t;
  let prefetcher;
  let current;
  let if_block = ctx[0] && ctx[1] !== null && create_if_block(ctx);
  prefetcher = new Prefetcher({});
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      create_component(prefetcher.$$.fragment);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t, anchor);
      mount_component(prefetcher, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0] && ctx2[1] !== null) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 3) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(prefetcher.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(prefetcher.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      destroy_component(prefetcher, detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $route;
  component_subscribe($$self, route, ($$value) => $$invalidate(1, $route = $$value));
  let { routes: routes2 } = $$props;
  let { config = {} } = $$props;
  let nodes;
  let navigator2;
  window.routify = window.routify || {};
  window.routify.inBrowser = !window.navigator.userAgent.match("jsdom");
  Object.assign(defaultConfig, config);
  const updatePage = (...args) => navigator2 && navigator2.updatePage(...args);
  setContext("routifyupdatepage", updatePage);
  const callback = (res) => $$invalidate(0, nodes = res);
  const cleanup = () => {
    if (!navigator2)
      return;
    navigator2.destroy();
    navigator2 = null;
  };
  let initTimeout = null;
  const doInit = () => {
    clearTimeout(initTimeout);
    initTimeout = setTimeout(() => {
      cleanup();
      navigator2 = init(routes2, callback);
      routes$1.set(routes2);
      navigator2.updatePage();
    });
  };
  onDestroy(cleanup);
  $$self.$$set = ($$props2) => {
    if ("routes" in $$props2)
      $$invalidate(2, routes2 = $$props2.routes);
    if ("config" in $$props2)
      $$invalidate(3, config = $$props2.config);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 4) {
      if (routes2)
        doInit();
    }
  };
  return [nodes, $route, routes2, config];
}
class Router extends SvelteComponent {
  constructor(options) {
    super();
    init$1(this, options, instance$1, create_fragment$1, safe_not_equal, { routes: 2, config: 3 });
  }
}
function createNodeMiddleware(fn) {
  const inner = async function execute(payload) {
    return await nodeMiddleware(fn, {
      file: payload.tree,
      state: { treePayload: payload },
      scope: {}
    });
  };
  inner.sync = function executeSync(payload) {
    return nodeMiddlewareSync(fn, {
      file: payload.tree,
      state: { treePayload: payload },
      scope: {}
    });
  };
  return inner;
}
async function nodeMiddleware(fn, payload) {
  const _file = await fn(payload);
  if (_file === false)
    return false;
  const file = _file || payload.file;
  if (file.children) {
    const children2 = await Promise.all(file.children.map(async (_file2) => nodeMiddleware(fn, {
      state: payload.state,
      scope: clone(payload.scope || {}),
      parent: payload.file,
      file: await _file2
    })));
    file.children = children2.filter(Boolean);
  }
  return file;
}
function nodeMiddlewareSync(fn, payload) {
  const _file = fn(payload);
  if (_file === false)
    return false;
  const file = _file || payload.file;
  if (file.children) {
    const children2 = file.children.map((_file2) => nodeMiddlewareSync(fn, {
      state: payload.state,
      scope: clone(payload.scope || {}),
      parent: payload.file,
      file: _file2
    }));
    file.children = children2.filter(Boolean);
  }
  return file;
}
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const setRegex = createNodeMiddleware(({ file }) => {
  if (file.isPage || file.isFallback)
    file.regex = pathToRegex(file.path, file.isFallback);
});
const setParamKeys = createNodeMiddleware(({ file }) => {
  file.paramKeys = pathToParamKeys(file.path);
});
const setShortPath = createNodeMiddleware(({ file }) => {
  if (file.isFallback || file.isIndex)
    file.shortPath = file.path.replace(/\/[^/]+$/, "");
  else
    file.shortPath = file.path;
});
const setRank = createNodeMiddleware(({ file }) => {
  file.ranking = pathToRank(file);
});
const addMetaChildren = createNodeMiddleware(({ file }) => {
  const node = file;
  const metaChildren = file.meta && file.meta.children || [];
  if (metaChildren.length) {
    node.children = node.children || [];
    node.children.push(...metaChildren.map((meta) => ({ isMeta: true, ...meta, meta })));
  }
});
const setIsIndexable = createNodeMiddleware((payload) => {
  const { file } = payload;
  const { isFallback, meta } = file;
  const isDynamic = file.path.split("/").pop().startsWith(":");
  const isIndex = file.path.endsWith("/index");
  const isIndexed = meta.index || meta.index === 0;
  const isHidden = meta.index === false;
  file.isIndexable = isIndexed || !isFallback && !isDynamic && !isIndex && !isHidden;
  file.isNonIndexable = !file.isIndexable;
});
const assignRelations = createNodeMiddleware(({ file, parent: parent2 }) => {
  Object.defineProperty(file, "parent", { get: () => parent2 });
  Object.defineProperty(file, "nextSibling", { get: () => _getSibling(file, 1) });
  Object.defineProperty(file, "prevSibling", { get: () => _getSibling(file, -1) });
  Object.defineProperty(file, "lineage", { get: () => _getLineage(parent2) });
});
function _getLineage(node, lineage = []) {
  if (node) {
    lineage.unshift(node);
    _getLineage(node.parent, lineage);
  }
  return lineage;
}
function _getSibling(file, direction) {
  if (!file.root) {
    const siblings = file.parent.children.filter((c2) => c2.isIndexable);
    const index = siblings.indexOf(file);
    return siblings[index + direction];
  }
}
const assignIndex = createNodeMiddleware(({ file, parent: parent2 }) => {
  if (file.isIndex)
    Object.defineProperty(parent2, "index", { get: () => file });
});
const assignLayout = createNodeMiddleware(({ file, scope }) => {
  Object.defineProperty(file, "layouts", { get: () => getLayouts(file) });
  function getLayouts(file2) {
    if (!file2.isLayout && file2.meta.reset)
      return [];
    const { parent: parent2 } = file2;
    const layout = parent2 && parent2.component && parent2;
    const isReset = layout && (layout.isReset || layout.meta.reset);
    const layouts = parent2 && !isReset && getLayouts(parent2) || [];
    if (layout)
      layouts.push(layout);
    return layouts;
  }
});
const createFlatList = (treePayload) => {
  createNodeMiddleware((payload) => {
    if (payload.file.isPage || payload.file.isFallback)
      payload.state.treePayload.routes.push(payload.file);
  }).sync(treePayload);
  treePayload.routes.sort((c2, p2) => c2.ranking >= p2.ranking ? -1 : 1);
};
const setPrototype = createNodeMiddleware(({ file }) => {
  const Prototype = file.root ? Root : file.children ? file.isPage ? PageDir : Dir : file.isReset ? Reset : file.isLayout ? Layout : file.isFallback ? Fallback : Page;
  Object.setPrototypeOf(file, Prototype.prototype);
  function Layout() {
  }
  function Dir() {
  }
  function Fallback() {
  }
  function Page() {
  }
  function PageDir() {
  }
  function Reset() {
  }
  function Root() {
  }
});
var miscPlugins = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setRegex,
  setParamKeys,
  setShortPath,
  setRank,
  addMetaChildren,
  setIsIndexable,
  assignRelations,
  assignIndex,
  assignLayout,
  createFlatList,
  setPrototype
}, Symbol.toStringTag, { value: "Module" }));
const defaultNode = {
  "isDir": false,
  "ext": "svelte",
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "ownMeta": {},
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "id": "__fallback"
};
function restoreDefaults(node) {
  Object.entries(defaultNode).forEach(([key, value]) => {
    if (typeof node[key] === "undefined")
      node[key] = value;
  });
  if (node.children)
    node.children = node.children.map(restoreDefaults);
  return node;
}
const assignAPI = createNodeMiddleware(({ file }) => {
  file.api = new ClientApi(file);
});
class ClientApi {
  constructor(file) {
    this.__file = file;
    Object.defineProperty(this, "__file", { enumerable: false });
    this.isMeta = !!file.isMeta;
    this.path = file.path;
    this.title = _prettyName(file);
    this.meta = file.meta;
  }
  get parent() {
    return !this.__file.root && this.__file.parent.api;
  }
  get children() {
    return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((c2) => !c2.isNonIndexable).sort((a2, b2) => {
      if (a2.isMeta && b2.isMeta)
        return 0;
      a2 = (a2.meta.index || a2.meta.title || a2.path).toString();
      b2 = (b2.meta.index || b2.meta.title || b2.path).toString();
      return a2.localeCompare(b2, void 0, { numeric: true, sensitivity: "base" });
    }).map(({ api }) => api);
  }
  get next() {
    return _navigate(this, 1);
  }
  get prev() {
    return _navigate(this, -1);
  }
  async preload() {
    const filePromises = [
      ...this.__file.layouts,
      this.__file,
      this.index && this.index.__file
    ].filter(Boolean).map((file) => file.component());
    await Promise.all(filePromises);
  }
  get component() {
    return this.__file.component ? this.__file.component() : this.__file.index ? this.__file.index.component() : false;
  }
  get componentWithIndex() {
    return new Promise((resolve) => Promise.all([
      this.component,
      this.index && this.index.component
    ]).then((res) => resolve(res)));
  }
  get index() {
    const child = this.__file.children && this.__file.children.find((child2) => child2.isIndex);
    return child && child.api;
  }
}
function _navigate(node, direction) {
  if (!node.__file.root) {
    const siblings = node.parent.children;
    const index = siblings.indexOf(node);
    return node.parent.children[index + direction];
  }
}
function _prettyName(file) {
  if (typeof file.meta.title !== "undefined")
    return file.meta.title;
  else
    return (file.shortPath || file.path).split("/").pop().replace(/-/g, " ");
}
const plugins = {
  ...miscPlugins,
  restoreDefaults: ({ tree: tree2 }) => restoreDefaults(tree2),
  assignAPI
};
function buildClientTree(tree2) {
  const order = [
    "restoreDefaults",
    "setParamKeys",
    "setRegex",
    "setShortPath",
    "setRank",
    "assignLayout",
    "setPrototype",
    "addMetaChildren",
    "assignRelations",
    "setIsIndexable",
    "assignIndex",
    "assignAPI",
    "createFlatList"
  ];
  const payload = { tree: tree2, routes: [] };
  for (let name of order) {
    const fn = plugins[name].sync || plugins[name];
    fn(payload);
  }
  return payload;
}
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => __vitePreload(() => import("./_fallback.4acf6d34.js"), true ? ["assets/_fallback.4acf6d34.js","assets/routes.77b585d1.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Icon.65885a60.js","assets/Button.d1669e9b.js"] : void 0).then((m2) => m2.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "account.svelte",
      "filepath": "/account.svelte",
      "name": "account",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/account.svelte",
      "importPath": "../src/pages/account.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/account",
      "id": "_account",
      "component": () => __vitePreload(() => import("./account.210a3f38.js"), true ? ["assets/account.210a3f38.js","assets/notification.67ec90d7.js","assets/user.1f47be60.js","assets/index.a79b2e56.js","assets/auth.4dd538c9.js","assets/auth.cc08f0a7.js","assets/garden.8cd2410c.js","assets/Avatar.d2fb60a1.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Icon.65885a60.js","assets/Button.d1669e9b.js","assets/LabeledCheckbox.0b5b74e8.js","assets/email.b997b76f.js","assets/flag.54b26623.js","assets/constants.c39c3a18.js","assets/routes.77b585d1.js"] : void 0).then((m2) => m2.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "auth",
      "filepath": "/auth",
      "name": "auth",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/auth",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "action.svelte",
          "filepath": "/auth/action.svelte",
          "name": "action",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/auth/action.svelte",
          "importPath": "../src/pages/auth/action.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/auth/action",
          "id": "_auth_action",
          "component": () => __vitePreload(() => import("./action.bbc56b44.js"), true ? ["assets/action.bbc56b44.js","assets/auth.4dd538c9.js","assets/notification.67ec90d7.js","assets/auth.cc08f0a7.js","assets/index.a79b2e56.js","assets/routes.77b585d1.js"] : void 0).then((m2) => m2.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/auth"
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/chat/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/chat/_layout.svelte",
      "children": [
        {
          "isFile": false,
          "isDir": true,
          "file": "[name]",
          "filepath": "/chat/[name]",
          "name": "[name]",
          "ext": "",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/chat/[name]",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "[chatId].svelte",
              "filepath": "/chat/[name]/[chatId].svelte",
              "name": "[chatId]",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/chat/[name]/[chatId].svelte",
              "importPath": "../src/pages/chat/[name]/[chatId].svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/chat/:name/:chatId",
              "id": "_chat__name__chatId",
              "component": () => __vitePreload(() => import("./_chatId_.060f59c5.js"), true ? ["assets/_chatId_.060f59c5.js","assets/index.f441bdbc.js","assets/chat.5882e4d4.js","assets/index.a79b2e56.js","assets/user.1f47be60.js","assets/auth.4dd538c9.js","assets/garden.8cd2410c.js","assets/Avatar.d2fb60a1.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Icon.65885a60.js","assets/tent.5b24dad1.js","assets/ConversationCard.svelte_svelte_type_style_lang.72b577ab.js","assets/routes.77b585d1.js"] : void 0).then((m2) => m2.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/chat/:name"
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/chat/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/chat/index.svelte",
          "importPath": "../src/pages/chat/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/chat/index",
          "id": "_chat_index",
          "component": () => __vitePreload(() => import("./index.c04e49b2.js"), true ? [] : void 0).then((m2) => m2.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/chat/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/chat",
      "id": "_chat__layout",
      "component": () => __vitePreload(() => import("./_layout.b8536006.js"), true ? ["assets/_layout.b8536006.js","assets/index.f441bdbc.js","assets/auth.4dd538c9.js","assets/notification.67ec90d7.js","assets/chat.5882e4d4.js","assets/index.a79b2e56.js","assets/user.1f47be60.js","assets/routes.77b585d1.js","assets/ConversationCard.svelte_svelte_type_style_lang.72b577ab.js","assets/Avatar.d2fb60a1.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Progress.9dad7c45.js"] : void 0).then((m2) => m2.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/explore/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/explore/_layout.svelte",
      "children": [
        {
          "isFile": false,
          "isDir": true,
          "file": "garden",
          "filepath": "/explore/garden",
          "name": "garden",
          "ext": "",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/explore/garden",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "[gardenId].svelte",
              "filepath": "/explore/garden/[gardenId].svelte",
              "name": "[gardenId]",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/explore/garden/[gardenId].svelte",
              "importPath": "../src/pages/explore/garden/[gardenId].svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/explore/garden/:gardenId",
              "id": "_explore_garden__gardenId",
              "component": () => __vitePreload(() => import("./_gardenId_.c9a6076b.js"), true ? [] : void 0).then((m2) => m2.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/explore/garden"
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/explore/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/explore/index.svelte",
          "importPath": "../src/pages/explore/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/explore/index",
          "id": "_explore_index",
          "component": () => __vitePreload(() => import("./index.6ef61f2c.js"), true ? [] : void 0).then((m2) => m2.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/explore/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/explore",
      "id": "_explore__layout",
      "component": () => __vitePreload(() => import("./_layout.c36b4467.js"), true ? ["assets/_layout.c36b4467.js","assets/garden.8cd2410c.js","assets/auth.4dd538c9.js","assets/index.a79b2e56.js","assets/routes.77b585d1.js","assets/mapbox.16628e51.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/index.f441bdbc.js","assets/Icon.65885a60.js","assets/user.1f47be60.js","assets/click-outside.a63b3702.js","assets/Button.d1669e9b.js","assets/Progress.9dad7c45.js","assets/tent.5b24dad1.js","assets/cross.9b7c4c9e.js","assets/LabeledCheckbox.0b5b74e8.js","assets/TextInput.80847e0d.js","assets/constants.c39c3a18.js"] : void 0).then((m2) => m2.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "garden",
      "filepath": "/garden",
      "name": "garden",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/garden",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "add.svelte",
          "filepath": "/garden/add.svelte",
          "name": "add",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/garden/add.svelte",
          "importPath": "../src/pages/garden/add.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/garden/add",
          "id": "_garden_add",
          "component": () => __vitePreload(() => import("./add.a4728431.js"), true ? ["assets/add.a4728431.js","assets/garden.8cd2410c.js","assets/auth.4dd538c9.js","assets/index.a79b2e56.js","assets/notification.67ec90d7.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Progress.9dad7c45.js","assets/Form.49950187.js","assets/index.f441bdbc.js","assets/mapbox.16628e51.js","assets/Button.d1669e9b.js","assets/TextInput.80847e0d.js","assets/Icon.65885a60.js","assets/cross.9b7c4c9e.js","assets/routes.77b585d1.js","assets/LabeledCheckbox.0b5b74e8.js","assets/tent.5b24dad1.js"] : void 0).then((m2) => m2.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "manage.svelte",
          "filepath": "/garden/manage.svelte",
          "name": "manage",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/garden/manage.svelte",
          "importPath": "../src/pages/garden/manage.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/garden/manage",
          "id": "_garden_manage",
          "component": () => __vitePreload(() => import("./manage.cb594108.js"), true ? ["assets/manage.cb594108.js","assets/garden.8cd2410c.js","assets/auth.4dd538c9.js","assets/index.a79b2e56.js","assets/notification.67ec90d7.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Progress.9dad7c45.js","assets/Form.49950187.js","assets/index.f441bdbc.js","assets/mapbox.16628e51.js","assets/Button.d1669e9b.js","assets/TextInput.80847e0d.js","assets/Icon.65885a60.js","assets/cross.9b7c4c9e.js","assets/routes.77b585d1.js","assets/LabeledCheckbox.0b5b74e8.js","assets/tent.5b24dad1.js"] : void 0).then((m2) => m2.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/garden"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => __vitePreload(() => import("./index.039d764c.js"), true ? ["assets/index.039d764c.js","assets/routes.77b585d1.js","assets/CollapsibleGroup.10874800.js","assets/get-node-children.32a58892.js","assets/Collapsible.621887e7.js","assets/index.f441bdbc.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Button.d1669e9b.js","assets/constants.c39c3a18.js","assets/auth.4dd538c9.js","assets/Icon.65885a60.js","assets/cross.9b7c4c9e.js"] : void 0).then((m2) => m2.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/info/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/info/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "faq.svelte",
          "filepath": "/info/faq.svelte",
          "name": "faq",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/info/faq.svelte",
          "importPath": "../src/pages/info/faq.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/info/faq",
          "id": "_info_faq",
          "component": () => __vitePreload(() => import("./faq.2c4b95f9.js"), true ? ["assets/faq.2c4b95f9.js","assets/links.48cf2c98.js","assets/constants.c39c3a18.js","assets/get-node-children.32a58892.js","assets/Collapsible.621887e7.js","assets/index.f441bdbc.js","assets/routes.77b585d1.js"] : void 0).then((m2) => m2.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "rules.svelte",
          "filepath": "/info/rules.svelte",
          "name": "rules",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/info/rules.svelte",
          "importPath": "../src/pages/info/rules.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/info/rules",
          "id": "_info_rules",
          "component": () => __vitePreload(() => import("./rules.d4b18f6e.js"), true ? ["assets/rules.d4b18f6e.js","assets/CollapsibleGroup.10874800.js","assets/get-node-children.32a58892.js","assets/Collapsible.621887e7.js","assets/index.f441bdbc.js"] : void 0).then((m2) => m2.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/info/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/info",
      "id": "_info__layout",
      "component": () => __vitePreload(() => import("./_layout.bac830f0.js"), true ? [] : void 0).then((m2) => m2.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "register.svelte",
      "filepath": "/register.svelte",
      "name": "register",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/register.svelte",
      "importPath": "../src/pages/register.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/register",
      "id": "_register",
      "component": () => __vitePreload(() => import("./register.f6a44bc2.js"), true ? ["assets/register.f6a44bc2.js","assets/index.f441bdbc.js","assets/auth.cc08f0a7.js","assets/index.a79b2e56.js","assets/auth.4dd538c9.js","assets/notification.67ec90d7.js","assets/flag.54b26623.js","assets/constants.c39c3a18.js","assets/routes.77b585d1.js","assets/AuthContainer.6bdb7f72.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Button.d1669e9b.js","assets/Progress.9dad7c45.js","assets/TextInput.80847e0d.js","assets/Icon.65885a60.js","assets/cross.9b7c4c9e.js","assets/email.b997b76f.js","assets/lock.a2054616.js","assets/user.3a77a3d3.js"] : void 0).then((m2) => m2.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "request-password-reset.svelte",
      "filepath": "/request-password-reset.svelte",
      "name": "request-password-reset",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/request-password-reset.svelte",
      "importPath": "../src/pages/request-password-reset.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/request-password-reset",
      "id": "_requestPasswordReset",
      "component": () => __vitePreload(() => import("./request-password-reset.770530be.js"), true ? ["assets/request-password-reset.770530be.js","assets/index.f441bdbc.js","assets/AuthContainer.6bdb7f72.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Button.d1669e9b.js","assets/Progress.9dad7c45.js","assets/TextInput.80847e0d.js","assets/Icon.65885a60.js","assets/cross.9b7c4c9e.js","assets/email.b997b76f.js","assets/constants.c39c3a18.js","assets/auth.cc08f0a7.js","assets/index.a79b2e56.js","assets/auth.4dd538c9.js"] : void 0).then((m2) => m2.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "reset-password.svelte",
      "filepath": "/reset-password.svelte",
      "name": "reset-password",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/reset-password.svelte",
      "importPath": "../src/pages/reset-password.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/reset-password",
      "id": "_resetPassword",
      "component": () => __vitePreload(() => import("./reset-password.2147c15f.js"), true ? ["assets/reset-password.2147c15f.js","assets/AuthContainer.6bdb7f72.js","assets/notification.67ec90d7.js","assets/auth.cc08f0a7.js","assets/index.a79b2e56.js","assets/auth.4dd538c9.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Button.d1669e9b.js","assets/Progress.9dad7c45.js","assets/TextInput.80847e0d.js","assets/index.f441bdbc.js","assets/Icon.65885a60.js","assets/cross.9b7c4c9e.js","assets/lock.a2054616.js","assets/routes.77b585d1.js"] : void 0).then((m2) => m2.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "sign-in.svelte",
      "filepath": "/sign-in.svelte",
      "name": "sign-in",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/sign-in.svelte",
      "importPath": "../src/pages/sign-in.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/sign-in",
      "id": "_signIn",
      "component": () => __vitePreload(() => import("./sign-in.cc5d23a1.js"), true ? ["assets/sign-in.cc5d23a1.js","assets/index.f441bdbc.js","assets/auth.4dd538c9.js","assets/notification.67ec90d7.js","assets/auth.cc08f0a7.js","assets/index.a79b2e56.js","assets/routes.77b585d1.js","assets/AuthContainer.6bdb7f72.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Button.d1669e9b.js","assets/TextInput.80847e0d.js","assets/Icon.65885a60.js","assets/cross.9b7c4c9e.js","assets/email.b997b76f.js","assets/lock.a2054616.js","assets/constants.c39c3a18.js"] : void 0).then((m2) => m2.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/terms/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/terms/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "cookies.svelte",
          "filepath": "/terms/cookies.svelte",
          "name": "cookies",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/terms/cookies.svelte",
          "importPath": "../src/pages/terms/cookies.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/terms/cookies",
          "id": "_terms_cookies",
          "component": () => __vitePreload(() => import("./cookies.da8d7309.js"), true ? ["assets/cookies.da8d7309.js","assets/links.48cf2c98.js","assets/constants.c39c3a18.js","assets/get-node-children.32a58892.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Ol.c4481612.js"] : void 0).then((m2) => m2.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "privacy-policy.svelte",
          "filepath": "/terms/privacy-policy.svelte",
          "name": "privacy-policy",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/terms/privacy-policy.svelte",
          "importPath": "../src/pages/terms/privacy-policy.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/terms/privacy-policy",
          "id": "_terms_privacyPolicy",
          "component": () => __vitePreload(() => import("./privacy-policy.afebd3f4.js"), true ? ["assets/privacy-policy.afebd3f4.js","assets/links.48cf2c98.js","assets/constants.c39c3a18.js","assets/get-node-children.32a58892.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Ol.c4481612.js"] : void 0).then((m2) => m2.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "terms-of-use.svelte",
          "filepath": "/terms/terms-of-use.svelte",
          "name": "terms-of-use",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/terms/terms-of-use.svelte",
          "importPath": "../src/pages/terms/terms-of-use.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/terms/terms-of-use",
          "id": "_terms_termsOfUse",
          "component": () => __vitePreload(() => import("./terms-of-use.cd36b07a.js"), true ? ["assets/terms-of-use.cd36b07a.js","assets/links.48cf2c98.js","assets/constants.c39c3a18.js","assets/get-node-children.32a58892.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/Ol.c4481612.js"] : void 0).then((m2) => m2.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/terms/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/terms",
      "id": "_terms__layout",
      "component": () => __vitePreload(() => import("./_layout.03ffb324.js"), true ? [] : void 0).then((m2) => m2.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => __vitePreload(() => import("./_layout.03b450a2.js"), true ? ["assets/_layout.03b450a2.js","assets/auth.cc08f0a7.js","assets/index.a79b2e56.js","assets/auth.4dd538c9.js","assets/user.1f47be60.js","assets/chat.5882e4d4.js","assets/Partner.svelte_svelte_type_style_lang.1b936e10.js","assets/notification.67ec90d7.js","assets/Progress.9dad7c45.js","assets/routes.77b585d1.js","assets/index.f441bdbc.js","assets/click-outside.a63b3702.js","assets/user.3a77a3d3.js","assets/tent.5b24dad1.js","assets/Icon.65885a60.js","assets/constants.c39c3a18.js"] : void 0).then((m2) => m2.default)
};
const { tree, routes } = buildClientTree(_tree);
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element2) {
    return cloneUnlessOtherwiseSpecified(element2, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_2) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign$2 = function() {
  __assign$2 = Object.assign || function __assign2(t) {
    for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t[p2] = s2[p2];
    }
    return t;
  };
  return __assign$2.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function __assign2(t) {
    for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t[p2] = s2[p2];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var ErrorKind;
(function(ErrorKind2) {
  ErrorKind2[ErrorKind2["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
  ErrorKind2[ErrorKind2["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
  ErrorKind2[ErrorKind2["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
  ErrorKind2[ErrorKind2["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
  ErrorKind2[ErrorKind2["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
  ErrorKind2[ErrorKind2["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
  ErrorKind2[ErrorKind2["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
  ErrorKind2[ErrorKind2["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
  ErrorKind2[ErrorKind2["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
  ErrorKind2[ErrorKind2["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
  ErrorKind2[ErrorKind2["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
  ErrorKind2[ErrorKind2["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
  ErrorKind2[ErrorKind2["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
  ErrorKind2[ErrorKind2["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
  ErrorKind2[ErrorKind2["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
  ErrorKind2[ErrorKind2["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
  ErrorKind2[ErrorKind2["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
  ErrorKind2[ErrorKind2["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
  ErrorKind2[ErrorKind2["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
  ErrorKind2[ErrorKind2["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
  ErrorKind2[ErrorKind2["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
  ErrorKind2[ErrorKind2["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
  ErrorKind2[ErrorKind2["INVALID_TAG"] = 23] = "INVALID_TAG";
  ErrorKind2[ErrorKind2["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
  ErrorKind2[ErrorKind2["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
  ErrorKind2[ErrorKind2["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));
var TYPE;
(function(TYPE2) {
  TYPE2[TYPE2["literal"] = 0] = "literal";
  TYPE2[TYPE2["argument"] = 1] = "argument";
  TYPE2[TYPE2["number"] = 2] = "number";
  TYPE2[TYPE2["date"] = 3] = "date";
  TYPE2[TYPE2["time"] = 4] = "time";
  TYPE2[TYPE2["select"] = 5] = "select";
  TYPE2[TYPE2["plural"] = 6] = "plural";
  TYPE2[TYPE2["pound"] = 7] = "pound";
  TYPE2[TYPE2["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function(SKELETON_TYPE2) {
  SKELETON_TYPE2[SKELETON_TYPE2["number"] = 0] = "number";
  SKELETON_TYPE2[SKELETON_TYPE2["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
function isLiteralElement(el) {
  return el.type === TYPE.literal;
}
function isArgumentElement(el) {
  return el.type === TYPE.argument;
}
function isNumberElement(el) {
  return el.type === TYPE.number;
}
function isDateElement(el) {
  return el.type === TYPE.date;
}
function isTimeElement(el) {
  return el.type === TYPE.time;
}
function isSelectElement(el) {
  return el.type === TYPE.select;
}
function isPluralElement(el) {
  return el.type === TYPE.plural;
}
function isPoundElement(el) {
  return el.type === TYPE.pound;
}
function isTagElement(el) {
  return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
  return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
  return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.dateTime);
}
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function parseDateTimeSkeleton(skeleton) {
  var result = {};
  skeleton.replace(DATE_TIME_REGEX, function(match) {
    var len = match.length;
    switch (match[0]) {
      case "G":
        result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
        break;
      case "y":
        result.year = len === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        result.month = ["numeric", "2-digit", "short", "long", "narrow"][len - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        result.day = ["numeric", "2-digit"][len - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        result.weekday = len === 4 ? "short" : len === 5 ? "narrow" : "short";
        break;
      case "e":
        if (len < 4) {
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        }
        result.weekday = ["short", "long", "narrow", "short"][len - 4];
        break;
      case "c":
        if (len < 4) {
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        }
        result.weekday = ["short", "long", "narrow", "short"][len - 4];
        break;
      case "a":
        result.hour12 = true;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        result.hourCycle = "h12";
        result.hour = ["numeric", "2-digit"][len - 1];
        break;
      case "H":
        result.hourCycle = "h23";
        result.hour = ["numeric", "2-digit"][len - 1];
        break;
      case "K":
        result.hourCycle = "h11";
        result.hour = ["numeric", "2-digit"][len - 1];
        break;
      case "k":
        result.hourCycle = "h24";
        result.hour = ["numeric", "2-digit"][len - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        result.minute = ["numeric", "2-digit"][len - 1];
        break;
      case "s":
        result.second = ["numeric", "2-digit"][len - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        result.timeZoneName = len < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  });
  return result;
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t[p2] = s2[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function parseNumberSkeletonFromString(skeleton) {
  if (skeleton.length === 0) {
    throw new Error("Number skeleton cannot be empty");
  }
  var stringTokens = skeleton.split(WHITE_SPACE_REGEX).filter(function(x2) {
    return x2.length > 0;
  });
  var tokens = [];
  for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
    var stringToken = stringTokens_1[_i];
    var stemAndOptions = stringToken.split("/");
    if (stemAndOptions.length === 0) {
      throw new Error("Invalid number skeleton");
    }
    var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
    for (var _a2 = 0, options_1 = options; _a2 < options_1.length; _a2++) {
      var option = options_1[_a2];
      if (option.length === 0) {
        throw new Error("Invalid number skeleton");
      }
    }
    tokens.push({ stem, options });
  }
  return tokens;
}
function icuUnitToEcma(unit) {
  return unit.replace(/^(.*?)-/, "");
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
  var result = {};
  if (str[str.length - 1] === "r") {
    result.roundingPriority = "morePrecision";
  } else if (str[str.length - 1] === "s") {
    result.roundingPriority = "lessPrecision";
  }
  str.replace(SIGNIFICANT_PRECISION_REGEX, function(_2, g1, g2) {
    if (typeof g2 !== "string") {
      result.minimumSignificantDigits = g1.length;
      result.maximumSignificantDigits = g1.length;
    } else if (g2 === "+") {
      result.minimumSignificantDigits = g1.length;
    } else if (g1[0] === "#") {
      result.maximumSignificantDigits = g1.length;
    } else {
      result.minimumSignificantDigits = g1.length;
      result.maximumSignificantDigits = g1.length + (typeof g2 === "string" ? g2.length : 0);
    }
    return "";
  });
  return result;
}
function parseSign(str) {
  switch (str) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function parseConciseScientificAndEngineeringStem(stem) {
  var result;
  if (stem[0] === "E" && stem[1] === "E") {
    result = {
      notation: "engineering"
    };
    stem = stem.slice(2);
  } else if (stem[0] === "E") {
    result = {
      notation: "scientific"
    };
    stem = stem.slice(1);
  }
  if (result) {
    var signDisplay = stem.slice(0, 2);
    if (signDisplay === "+!") {
      result.signDisplay = "always";
      stem = stem.slice(2);
    } else if (signDisplay === "+?") {
      result.signDisplay = "exceptZero";
      stem = stem.slice(2);
    }
    if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
      throw new Error("Malformed concise eng/scientific notation");
    }
    result.minimumIntegerDigits = stem.length;
  }
  return result;
}
function parseNotationOptions(opt) {
  var result = {};
  var signOpts = parseSign(opt);
  if (signOpts) {
    return signOpts;
  }
  return result;
}
function parseNumberSkeleton(tokens) {
  var result = {};
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    switch (token.stem) {
      case "percent":
      case "%":
        result.style = "percent";
        continue;
      case "%x100":
        result.style = "percent";
        result.scale = 100;
        continue;
      case "currency":
        result.style = "currency";
        result.currency = token.options[0];
        continue;
      case "group-off":
      case ",_":
        result.useGrouping = false;
        continue;
      case "precision-integer":
      case ".":
        result.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        result.style = "unit";
        result.unit = icuUnitToEcma(token.options[0]);
        continue;
      case "compact-short":
      case "K":
        result.notation = "compact";
        result.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        result.notation = "compact";
        result.compactDisplay = "long";
        continue;
      case "scientific":
        result = __assign(__assign(__assign({}, result), { notation: "scientific" }), token.options.reduce(function(all, opt2) {
          return __assign(__assign({}, all), parseNotationOptions(opt2));
        }, {}));
        continue;
      case "engineering":
        result = __assign(__assign(__assign({}, result), { notation: "engineering" }), token.options.reduce(function(all, opt2) {
          return __assign(__assign({}, all), parseNotationOptions(opt2));
        }, {}));
        continue;
      case "notation-simple":
        result.notation = "standard";
        continue;
      case "unit-width-narrow":
        result.currencyDisplay = "narrowSymbol";
        result.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        result.currencyDisplay = "code";
        result.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        result.currencyDisplay = "name";
        result.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        result.currencyDisplay = "symbol";
        continue;
      case "scale":
        result.scale = parseFloat(token.options[0]);
        continue;
      case "integer-width":
        if (token.options.length > 1) {
          throw new RangeError("integer-width stems only accept a single optional option");
        }
        token.options[0].replace(INTEGER_WIDTH_REGEX, function(_2, g1, g2, g3, g4, g5) {
          if (g1) {
            result.minimumIntegerDigits = g2.length;
          } else if (g3 && g4) {
            throw new Error("We currently do not support maximum integer digits");
          } else if (g5) {
            throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
      result.minimumIntegerDigits = token.stem.length;
      continue;
    }
    if (FRACTION_PRECISION_REGEX.test(token.stem)) {
      if (token.options.length > 1) {
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      }
      token.stem.replace(FRACTION_PRECISION_REGEX, function(_2, g1, g2, g3, g4, g5) {
        if (g2 === "*") {
          result.minimumFractionDigits = g1.length;
        } else if (g3 && g3[0] === "#") {
          result.maximumFractionDigits = g3.length;
        } else if (g4 && g5) {
          result.minimumFractionDigits = g4.length;
          result.maximumFractionDigits = g4.length + g5.length;
        } else {
          result.minimumFractionDigits = g1.length;
          result.maximumFractionDigits = g1.length;
        }
        return "";
      });
      var opt = token.options[0];
      if (opt === "w") {
        result = __assign(__assign({}, result), { trailingZeroDisplay: "stripIfInteger" });
      } else if (opt) {
        result = __assign(__assign({}, result), parseSignificantPrecision(opt));
      }
      continue;
    }
    if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
      result = __assign(__assign({}, result), parseSignificantPrecision(token.stem));
      continue;
    }
    var signOpts = parseSign(token.stem);
    if (signOpts) {
      result = __assign(__assign({}, result), signOpts);
    }
    var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
    if (conciseScientificAndEngineeringOpts) {
      result = __assign(__assign({}, result), conciseScientificAndEngineeringOpts);
    }
  }
  return result;
}
var timeData = {
  "AX": [
    "H"
  ],
  "BQ": [
    "H"
  ],
  "CP": [
    "H"
  ],
  "CZ": [
    "H"
  ],
  "DK": [
    "H"
  ],
  "FI": [
    "H"
  ],
  "ID": [
    "H"
  ],
  "IS": [
    "H"
  ],
  "ML": [
    "H"
  ],
  "NE": [
    "H"
  ],
  "RU": [
    "H"
  ],
  "SE": [
    "H"
  ],
  "SJ": [
    "H"
  ],
  "SK": [
    "H"
  ],
  "AS": [
    "h",
    "H"
  ],
  "BT": [
    "h",
    "H"
  ],
  "DJ": [
    "h",
    "H"
  ],
  "ER": [
    "h",
    "H"
  ],
  "GH": [
    "h",
    "H"
  ],
  "IN": [
    "h",
    "H"
  ],
  "LS": [
    "h",
    "H"
  ],
  "PG": [
    "h",
    "H"
  ],
  "PW": [
    "h",
    "H"
  ],
  "SO": [
    "h",
    "H"
  ],
  "TO": [
    "h",
    "H"
  ],
  "VU": [
    "h",
    "H"
  ],
  "WS": [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  "AL": [
    "h",
    "H",
    "hB"
  ],
  "TD": [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "CF": [
    "H",
    "h",
    "hB"
  ],
  "CM": [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "LU": [
    "H",
    "h",
    "hB"
  ],
  "NP": [
    "H",
    "h",
    "hB"
  ],
  "PF": [
    "H",
    "h",
    "hB"
  ],
  "SC": [
    "H",
    "h",
    "hB"
  ],
  "SM": [
    "H",
    "h",
    "hB"
  ],
  "SN": [
    "H",
    "h",
    "hB"
  ],
  "TF": [
    "H",
    "h",
    "hB"
  ],
  "VA": [
    "H",
    "h",
    "hB"
  ],
  "CY": [
    "h",
    "H",
    "hb",
    "hB"
  ],
  "GR": [
    "h",
    "H",
    "hb",
    "hB"
  ],
  "CO": [
    "h",
    "H",
    "hB",
    "hb"
  ],
  "DO": [
    "h",
    "H",
    "hB",
    "hb"
  ],
  "KP": [
    "h",
    "H",
    "hB",
    "hb"
  ],
  "KR": [
    "h",
    "H",
    "hB",
    "hb"
  ],
  "NA": [
    "h",
    "H",
    "hB",
    "hb"
  ],
  "PA": [
    "h",
    "H",
    "hB",
    "hb"
  ],
  "PR": [
    "h",
    "H",
    "hB",
    "hb"
  ],
  "VE": [
    "h",
    "H",
    "hB",
    "hb"
  ],
  "AC": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "AI": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "BW": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "BZ": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "CC": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "CK": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "CX": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "DG": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "FK": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "GB": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "GG": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "GI": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "IE": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "IM": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "IO": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "JE": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "LT": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "MK": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "MN": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "MS": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "NF": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "NG": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "NR": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "NU": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "PN": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "SH": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "SX": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "TA": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "ZA": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "AR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "CL": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "CR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "CU": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "EA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "GT": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "HN": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "IC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "KG": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "KM": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "LK": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "MA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "MX": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "NI": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "PY": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "SV": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "UY": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "JP": [
    "H",
    "h",
    "K"
  ],
  "AD": [
    "H",
    "hB"
  ],
  "AM": [
    "H",
    "hB"
  ],
  "AO": [
    "H",
    "hB"
  ],
  "AT": [
    "H",
    "hB"
  ],
  "AW": [
    "H",
    "hB"
  ],
  "BE": [
    "H",
    "hB"
  ],
  "BF": [
    "H",
    "hB"
  ],
  "BJ": [
    "H",
    "hB"
  ],
  "BL": [
    "H",
    "hB"
  ],
  "BR": [
    "H",
    "hB"
  ],
  "CG": [
    "H",
    "hB"
  ],
  "CI": [
    "H",
    "hB"
  ],
  "CV": [
    "H",
    "hB"
  ],
  "DE": [
    "H",
    "hB"
  ],
  "EE": [
    "H",
    "hB"
  ],
  "FR": [
    "H",
    "hB"
  ],
  "GA": [
    "H",
    "hB"
  ],
  "GF": [
    "H",
    "hB"
  ],
  "GN": [
    "H",
    "hB"
  ],
  "GP": [
    "H",
    "hB"
  ],
  "GW": [
    "H",
    "hB"
  ],
  "HR": [
    "H",
    "hB"
  ],
  "IL": [
    "H",
    "hB"
  ],
  "IT": [
    "H",
    "hB"
  ],
  "KZ": [
    "H",
    "hB"
  ],
  "MC": [
    "H",
    "hB"
  ],
  "MD": [
    "H",
    "hB"
  ],
  "MF": [
    "H",
    "hB"
  ],
  "MQ": [
    "H",
    "hB"
  ],
  "MZ": [
    "H",
    "hB"
  ],
  "NC": [
    "H",
    "hB"
  ],
  "NL": [
    "H",
    "hB"
  ],
  "PM": [
    "H",
    "hB"
  ],
  "PT": [
    "H",
    "hB"
  ],
  "RE": [
    "H",
    "hB"
  ],
  "RO": [
    "H",
    "hB"
  ],
  "SI": [
    "H",
    "hB"
  ],
  "SR": [
    "H",
    "hB"
  ],
  "ST": [
    "H",
    "hB"
  ],
  "TG": [
    "H",
    "hB"
  ],
  "TR": [
    "H",
    "hB"
  ],
  "WF": [
    "H",
    "hB"
  ],
  "YT": [
    "H",
    "hB"
  ],
  "BD": [
    "h",
    "hB",
    "H"
  ],
  "PK": [
    "h",
    "hB",
    "H"
  ],
  "AZ": [
    "H",
    "hB",
    "h"
  ],
  "BA": [
    "H",
    "hB",
    "h"
  ],
  "BG": [
    "H",
    "hB",
    "h"
  ],
  "CH": [
    "H",
    "hB",
    "h"
  ],
  "GE": [
    "H",
    "hB",
    "h"
  ],
  "LI": [
    "H",
    "hB",
    "h"
  ],
  "ME": [
    "H",
    "hB",
    "h"
  ],
  "RS": [
    "H",
    "hB",
    "h"
  ],
  "UA": [
    "H",
    "hB",
    "h"
  ],
  "UZ": [
    "H",
    "hB",
    "h"
  ],
  "XK": [
    "H",
    "hB",
    "h"
  ],
  "AG": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "AU": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "BB": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "BM": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "BS": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "CA": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "DM": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "FJ": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "FM": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "GD": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "GM": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "GU": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "GY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "JM": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "KI": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "KN": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "KY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "LC": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "LR": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "MH": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "MP": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "MW": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "NZ": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "SB": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "SG": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "SL": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "SS": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "SZ": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "TC": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "TT": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "UM": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "US": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "VC": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "VG": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "VI": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "ZM": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "BO": [
    "H",
    "hB",
    "h",
    "hb"
  ],
  "EC": [
    "H",
    "hB",
    "h",
    "hb"
  ],
  "ES": [
    "H",
    "hB",
    "h",
    "hb"
  ],
  "GQ": [
    "H",
    "hB",
    "h",
    "hb"
  ],
  "PE": [
    "H",
    "hB",
    "h",
    "hb"
  ],
  "AE": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "BH": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "DZ": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "EG": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "EH": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "HK": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "IQ": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "JO": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "KW": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "LB": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "LY": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "MO": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "MR": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "OM": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "PH": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "PS": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "QA": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "SA": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "SD": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "SY": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "TN": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "YE": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "AF": [
    "H",
    "hb",
    "hB",
    "h"
  ],
  "LA": [
    "H",
    "hb",
    "hB",
    "h"
  ],
  "CN": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "LV": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "TL": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "CD": [
    "hB",
    "H"
  ],
  "IR": [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "KH": [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "BN": [
    "hb",
    "hB",
    "h",
    "H"
  ],
  "MY": [
    "hb",
    "hB",
    "h",
    "H"
  ],
  "ET": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "TW": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "KE": [
    "hB",
    "hb",
    "H",
    "h"
  ],
  "MM": [
    "hB",
    "hb",
    "H",
    "h"
  ],
  "TZ": [
    "hB",
    "hb",
    "H",
    "h"
  ],
  "UG": [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function getBestPattern(skeleton, locale) {
  var skeletonCopy = "";
  for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
    var patternChar = skeleton.charAt(patternPos);
    if (patternChar === "j") {
      var extraLength = 0;
      while (patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar) {
        extraLength++;
        patternPos++;
      }
      var hourLen = 1 + (extraLength & 1);
      var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
      var dayPeriodChar = "a";
      var hourChar = getDefaultHourSymbolFromLocale(locale);
      if (hourChar == "H" || hourChar == "k") {
        dayPeriodLen = 0;
      }
      while (dayPeriodLen-- > 0) {
        skeletonCopy += dayPeriodChar;
      }
      while (hourLen-- > 0) {
        skeletonCopy = hourChar + skeletonCopy;
      }
    } else if (patternChar === "J") {
      skeletonCopy += "H";
    } else {
      skeletonCopy += patternChar;
    }
  }
  return skeletonCopy;
}
function getDefaultHourSymbolFromLocale(locale) {
  var hourCycle = locale.hourCycle;
  if (hourCycle === void 0 && locale.hourCycles && locale.hourCycles.length) {
    hourCycle = locale.hourCycles[0];
  }
  if (hourCycle) {
    switch (hourCycle) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  }
  var languageTag = locale.language;
  var regionTag;
  if (languageTag !== "root") {
    regionTag = locale.maximize().region;
  }
  var hourCycles = timeData[regionTag || ""] || timeData[languageTag || ""] || timeData["".concat(languageTag, "-001")] || timeData["001"];
  return hourCycles[0];
}
var _a;
var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));
function createLocation(start, end) {
  return { start, end };
}
var hasNativeStartsWith = !!String.prototype.startsWith;
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger ? Number.isSafeInteger : function(n) {
  return typeof n === "number" && isFinite(n) && Math.floor(n) === n && Math.abs(n) <= 9007199254740991;
};
var REGEX_SUPPORTS_U_AND_Y = true;
try {
  var re = RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec("a")) === null || _a === void 0 ? void 0 : _a[0]) === "a";
} catch (_2) {
  REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith ? function startsWith2(s2, search, position) {
  return s2.startsWith(search, position);
} : function startsWith3(s2, search, position) {
  return s2.slice(position, position + search.length) === search;
};
var fromCodePoint = hasNativeFromCodePoint ? String.fromCodePoint : function fromCodePoint2() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  var elements = "";
  var length = codePoints.length;
  var i2 = 0;
  var code;
  while (length > i2) {
    code = codePoints[i2++];
    if (code > 1114111)
      throw RangeError(code + " is not a valid code point");
    elements += code < 65536 ? String.fromCharCode(code) : String.fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320);
  }
  return elements;
};
var fromEntries = hasNativeFromEntries ? Object.fromEntries : function fromEntries2(entries) {
  var obj = {};
  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _a2 = entries_1[_i], k2 = _a2[0], v2 = _a2[1];
    obj[k2] = v2;
  }
  return obj;
};
var codePointAt = hasNativeCodePointAt ? function codePointAt2(s2, index) {
  return s2.codePointAt(index);
} : function codePointAt3(s2, index) {
  var size = s2.length;
  if (index < 0 || index >= size) {
    return void 0;
  }
  var first = s2.charCodeAt(index);
  var second;
  return first < 55296 || first > 56319 || index + 1 === size || (second = s2.charCodeAt(index + 1)) < 56320 || second > 57343 ? first : (first - 55296 << 10) + (second - 56320) + 65536;
};
var trimStart = hasTrimStart ? function trimStart2(s2) {
  return s2.trimStart();
} : function trimStart3(s2) {
  return s2.replace(SPACE_SEPARATOR_START_REGEX, "");
};
var trimEnd = hasTrimEnd ? function trimEnd2(s2) {
  return s2.trimEnd();
} : function trimEnd3(s2) {
  return s2.replace(SPACE_SEPARATOR_END_REGEX, "");
};
function RE(s2, flag) {
  return new RegExp(s2, flag);
}
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
  var IDENTIFIER_PREFIX_RE_1 = RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  matchIdentifierAtIndex = function matchIdentifierAtIndex2(s2, index) {
    var _a2;
    IDENTIFIER_PREFIX_RE_1.lastIndex = index;
    var match = IDENTIFIER_PREFIX_RE_1.exec(s2);
    return (_a2 = match[1]) !== null && _a2 !== void 0 ? _a2 : "";
  };
} else {
  matchIdentifierAtIndex = function matchIdentifierAtIndex2(s2, index) {
    var match = [];
    while (true) {
      var c2 = codePointAt(s2, index);
      if (c2 === void 0 || _isWhiteSpace(c2) || _isPatternSyntax(c2)) {
        break;
      }
      match.push(c2);
      index += c2 >= 65536 ? 2 : 1;
    }
    return fromCodePoint.apply(void 0, match);
  };
}
var Parser = function() {
  function Parser2(message, options) {
    if (options === void 0) {
      options = {};
    }
    this.message = message;
    this.position = { offset: 0, line: 1, column: 1 };
    this.ignoreTag = !!options.ignoreTag;
    this.locale = options.locale;
    this.requiresOtherClause = !!options.requiresOtherClause;
    this.shouldParseSkeletons = !!options.shouldParseSkeletons;
  }
  Parser2.prototype.parse = function() {
    if (this.offset() !== 0) {
      throw Error("parser can only be used once");
    }
    return this.parseMessage(0, "", false);
  };
  Parser2.prototype.parseMessage = function(nestingLevel, parentArgType, expectingCloseTag) {
    var elements = [];
    while (!this.isEOF()) {
      var char = this.char();
      if (char === 123) {
        var result = this.parseArgument(nestingLevel, expectingCloseTag);
        if (result.err) {
          return result;
        }
        elements.push(result.val);
      } else if (char === 125 && nestingLevel > 0) {
        break;
      } else if (char === 35 && (parentArgType === "plural" || parentArgType === "selectordinal")) {
        var position = this.clonePosition();
        this.bump();
        elements.push({
          type: TYPE.pound,
          location: createLocation(position, this.clonePosition())
        });
      } else if (char === 60 && !this.ignoreTag && this.peek() === 47) {
        if (expectingCloseTag) {
          break;
        } else {
          return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
        }
      } else if (char === 60 && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
        var result = this.parseTag(nestingLevel, parentArgType);
        if (result.err) {
          return result;
        }
        elements.push(result.val);
      } else {
        var result = this.parseLiteral(nestingLevel, parentArgType);
        if (result.err) {
          return result;
        }
        elements.push(result.val);
      }
    }
    return { val: elements, err: null };
  };
  Parser2.prototype.parseTag = function(nestingLevel, parentArgType) {
    var startPosition = this.clonePosition();
    this.bump();
    var tagName = this.parseTagName();
    this.bumpSpace();
    if (this.bumpIf("/>")) {
      return {
        val: {
          type: TYPE.literal,
          value: "<".concat(tagName, "/>"),
          location: createLocation(startPosition, this.clonePosition())
        },
        err: null
      };
    } else if (this.bumpIf(">")) {
      var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
      if (childrenResult.err) {
        return childrenResult;
      }
      var children2 = childrenResult.val;
      var endTagStartPosition = this.clonePosition();
      if (this.bumpIf("</")) {
        if (this.isEOF() || !_isAlpha(this.char())) {
          return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
        }
        var closingTagNameStartPosition = this.clonePosition();
        var closingTagName = this.parseTagName();
        if (tagName !== closingTagName) {
          return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (!this.bumpIf(">")) {
          return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
        }
        return {
          val: {
            type: TYPE.tag,
            value: tagName,
            children: children2,
            location: createLocation(startPosition, this.clonePosition())
          },
          err: null
        };
      } else {
        return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
      }
    } else {
      return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
    }
  };
  Parser2.prototype.parseTagName = function() {
    var startOffset = this.offset();
    this.bump();
    while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
      this.bump();
    }
    return this.message.slice(startOffset, this.offset());
  };
  Parser2.prototype.parseLiteral = function(nestingLevel, parentArgType) {
    var start = this.clonePosition();
    var value = "";
    while (true) {
      var parseQuoteResult = this.tryParseQuote(parentArgType);
      if (parseQuoteResult) {
        value += parseQuoteResult;
        continue;
      }
      var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
      if (parseUnquotedResult) {
        value += parseUnquotedResult;
        continue;
      }
      var parseLeftAngleResult = this.tryParseLeftAngleBracket();
      if (parseLeftAngleResult) {
        value += parseLeftAngleResult;
        continue;
      }
      break;
    }
    var location2 = createLocation(start, this.clonePosition());
    return {
      val: { type: TYPE.literal, value, location: location2 },
      err: null
    };
  };
  Parser2.prototype.tryParseLeftAngleBracket = function() {
    if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !_isAlphaOrSlash(this.peek() || 0))) {
      this.bump();
      return "<";
    }
    return null;
  };
  Parser2.prototype.tryParseQuote = function(parentArgType) {
    if (this.isEOF() || this.char() !== 39) {
      return null;
    }
    switch (this.peek()) {
      case 39:
        this.bump();
        this.bump();
        return "'";
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        if (parentArgType === "plural" || parentArgType === "selectordinal") {
          break;
        }
        return null;
      default:
        return null;
    }
    this.bump();
    var codePoints = [this.char()];
    this.bump();
    while (!this.isEOF()) {
      var ch = this.char();
      if (ch === 39) {
        if (this.peek() === 39) {
          codePoints.push(39);
          this.bump();
        } else {
          this.bump();
          break;
        }
      } else {
        codePoints.push(ch);
      }
      this.bump();
    }
    return fromCodePoint.apply(void 0, codePoints);
  };
  Parser2.prototype.tryParseUnquoted = function(nestingLevel, parentArgType) {
    if (this.isEOF()) {
      return null;
    }
    var ch = this.char();
    if (ch === 60 || ch === 123 || ch === 35 && (parentArgType === "plural" || parentArgType === "selectordinal") || ch === 125 && nestingLevel > 0) {
      return null;
    } else {
      this.bump();
      return fromCodePoint(ch);
    }
  };
  Parser2.prototype.parseArgument = function(nestingLevel, expectingCloseTag) {
    var openingBracePosition = this.clonePosition();
    this.bump();
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }
    if (this.char() === 125) {
      this.bump();
      return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }
    var value = this.parseIdentifierIfPossible().value;
    if (!value) {
      return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }
    switch (this.char()) {
      case 125: {
        this.bump();
        return {
          val: {
            type: TYPE.argument,
            value,
            location: createLocation(openingBracePosition, this.clonePosition())
          },
          err: null
        };
      }
      case 44: {
        this.bump();
        this.bumpSpace();
        if (this.isEOF()) {
          return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
      }
      default:
        return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
    }
  };
  Parser2.prototype.parseIdentifierIfPossible = function() {
    var startingPosition = this.clonePosition();
    var startOffset = this.offset();
    var value = matchIdentifierAtIndex(this.message, startOffset);
    var endOffset = startOffset + value.length;
    this.bumpTo(endOffset);
    var endPosition = this.clonePosition();
    var location2 = createLocation(startingPosition, endPosition);
    return { value, location: location2 };
  };
  Parser2.prototype.parseArgumentOptions = function(nestingLevel, expectingCloseTag, value, openingBracePosition) {
    var _a2;
    var typeStartPosition = this.clonePosition();
    var argType = this.parseIdentifierIfPossible().value;
    var typeEndPosition = this.clonePosition();
    switch (argType) {
      case "":
        return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
      case "number":
      case "date":
      case "time": {
        this.bumpSpace();
        var styleAndLocation = null;
        if (this.bumpIf(",")) {
          this.bumpSpace();
          var styleStartPosition = this.clonePosition();
          var result = this.parseSimpleArgStyleIfPossible();
          if (result.err) {
            return result;
          }
          var style = trimEnd(result.val);
          if (style.length === 0) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
          }
          var styleLocation = createLocation(styleStartPosition, this.clonePosition());
          styleAndLocation = { style, styleLocation };
        }
        var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
        if (argCloseResult.err) {
          return argCloseResult;
        }
        var location_1 = createLocation(openingBracePosition, this.clonePosition());
        if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, "::", 0)) {
          var skeleton = trimStart(styleAndLocation.style.slice(2));
          if (argType === "number") {
            var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
            if (result.err) {
              return result;
            }
            return {
              val: { type: TYPE.number, value, location: location_1, style: result.val },
              err: null
            };
          } else {
            if (skeleton.length === 0) {
              return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
            }
            var dateTimePattern = skeleton;
            if (this.locale) {
              dateTimePattern = getBestPattern(skeleton, this.locale);
            }
            var style = {
              type: SKELETON_TYPE.dateTime,
              pattern: dateTimePattern,
              location: styleAndLocation.styleLocation,
              parsedOptions: this.shouldParseSkeletons ? parseDateTimeSkeleton(dateTimePattern) : {}
            };
            var type = argType === "date" ? TYPE.date : TYPE.time;
            return {
              val: { type, value, location: location_1, style },
              err: null
            };
          }
        }
        return {
          val: {
            type: argType === "number" ? TYPE.number : argType === "date" ? TYPE.date : TYPE.time,
            value,
            location: location_1,
            style: (_a2 = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a2 !== void 0 ? _a2 : null
          },
          err: null
        };
      }
      case "plural":
      case "selectordinal":
      case "select": {
        var typeEndPosition_1 = this.clonePosition();
        this.bumpSpace();
        if (!this.bumpIf(",")) {
          return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, __assign$1({}, typeEndPosition_1)));
        }
        this.bumpSpace();
        var identifierAndLocation = this.parseIdentifierIfPossible();
        var pluralOffset = 0;
        if (argType !== "select" && identifierAndLocation.value === "offset") {
          if (!this.bumpIf(":")) {
            return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
          }
          this.bumpSpace();
          var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
          if (result.err) {
            return result;
          }
          this.bumpSpace();
          identifierAndLocation = this.parseIdentifierIfPossible();
          pluralOffset = result.val;
        }
        var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
        if (optionsResult.err) {
          return optionsResult;
        }
        var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
        if (argCloseResult.err) {
          return argCloseResult;
        }
        var location_2 = createLocation(openingBracePosition, this.clonePosition());
        if (argType === "select") {
          return {
            val: {
              type: TYPE.select,
              value,
              options: fromEntries(optionsResult.val),
              location: location_2
            },
            err: null
          };
        } else {
          return {
            val: {
              type: TYPE.plural,
              value,
              options: fromEntries(optionsResult.val),
              offset: pluralOffset,
              pluralType: argType === "plural" ? "cardinal" : "ordinal",
              location: location_2
            },
            err: null
          };
        }
      }
      default:
        return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
    }
  };
  Parser2.prototype.tryParseArgumentClose = function(openingBracePosition) {
    if (this.isEOF() || this.char() !== 125) {
      return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
    }
    this.bump();
    return { val: true, err: null };
  };
  Parser2.prototype.parseSimpleArgStyleIfPossible = function() {
    var nestedBraces = 0;
    var startPosition = this.clonePosition();
    while (!this.isEOF()) {
      var ch = this.char();
      switch (ch) {
        case 39: {
          this.bump();
          var apostrophePosition = this.clonePosition();
          if (!this.bumpUntil("'")) {
            return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
          }
          this.bump();
          break;
        }
        case 123: {
          nestedBraces += 1;
          this.bump();
          break;
        }
        case 125: {
          if (nestedBraces > 0) {
            nestedBraces -= 1;
          } else {
            return {
              val: this.message.slice(startPosition.offset, this.offset()),
              err: null
            };
          }
          break;
        }
        default:
          this.bump();
          break;
      }
    }
    return {
      val: this.message.slice(startPosition.offset, this.offset()),
      err: null
    };
  };
  Parser2.prototype.parseNumberSkeletonFromString = function(skeleton, location2) {
    var tokens = [];
    try {
      tokens = parseNumberSkeletonFromString(skeleton);
    } catch (e) {
      return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location2);
    }
    return {
      val: {
        type: SKELETON_TYPE.number,
        tokens,
        location: location2,
        parsedOptions: this.shouldParseSkeletons ? parseNumberSkeleton(tokens) : {}
      },
      err: null
    };
  };
  Parser2.prototype.tryParsePluralOrSelectOptions = function(nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
    var _a2;
    var hasOtherClause = false;
    var options = [];
    var parsedSelectors = /* @__PURE__ */ new Set();
    var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
    while (true) {
      if (selector.length === 0) {
        var startPosition = this.clonePosition();
        if (parentArgType !== "select" && this.bumpIf("=")) {
          var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (result.err) {
            return result;
          }
          selectorLocation = createLocation(startPosition, this.clonePosition());
          selector = this.message.slice(startPosition.offset, this.offset());
        } else {
          break;
        }
      }
      if (parsedSelectors.has(selector)) {
        return this.error(parentArgType === "select" ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
      }
      if (selector === "other") {
        hasOtherClause = true;
      }
      this.bumpSpace();
      var openingBracePosition = this.clonePosition();
      if (!this.bumpIf("{")) {
        return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
      }
      var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
      if (fragmentResult.err) {
        return fragmentResult;
      }
      var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
      if (argCloseResult.err) {
        return argCloseResult;
      }
      options.push([
        selector,
        {
          value: fragmentResult.val,
          location: createLocation(openingBracePosition, this.clonePosition())
        }
      ]);
      parsedSelectors.add(selector);
      this.bumpSpace();
      _a2 = this.parseIdentifierIfPossible(), selector = _a2.value, selectorLocation = _a2.location;
    }
    if (options.length === 0) {
      return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
    }
    if (this.requiresOtherClause && !hasOtherClause) {
      return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
    }
    return { val: options, err: null };
  };
  Parser2.prototype.tryParseDecimalInteger = function(expectNumberError, invalidNumberError) {
    var sign = 1;
    var startingPosition = this.clonePosition();
    if (this.bumpIf("+"))
      ;
    else if (this.bumpIf("-")) {
      sign = -1;
    }
    var hasDigits = false;
    var decimal = 0;
    while (!this.isEOF()) {
      var ch = this.char();
      if (ch >= 48 && ch <= 57) {
        hasDigits = true;
        decimal = decimal * 10 + (ch - 48);
        this.bump();
      } else {
        break;
      }
    }
    var location2 = createLocation(startingPosition, this.clonePosition());
    if (!hasDigits) {
      return this.error(expectNumberError, location2);
    }
    decimal *= sign;
    if (!isSafeInteger(decimal)) {
      return this.error(invalidNumberError, location2);
    }
    return { val: decimal, err: null };
  };
  Parser2.prototype.offset = function() {
    return this.position.offset;
  };
  Parser2.prototype.isEOF = function() {
    return this.offset() === this.message.length;
  };
  Parser2.prototype.clonePosition = function() {
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column
    };
  };
  Parser2.prototype.char = function() {
    var offset = this.position.offset;
    if (offset >= this.message.length) {
      throw Error("out of bound");
    }
    var code = codePointAt(this.message, offset);
    if (code === void 0) {
      throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
    }
    return code;
  };
  Parser2.prototype.error = function(kind, location2) {
    return {
      val: null,
      err: {
        kind,
        message: this.message,
        location: location2
      }
    };
  };
  Parser2.prototype.bump = function() {
    if (this.isEOF()) {
      return;
    }
    var code = this.char();
    if (code === 10) {
      this.position.line += 1;
      this.position.column = 1;
      this.position.offset += 1;
    } else {
      this.position.column += 1;
      this.position.offset += code < 65536 ? 1 : 2;
    }
  };
  Parser2.prototype.bumpIf = function(prefix) {
    if (startsWith(this.message, prefix, this.offset())) {
      for (var i2 = 0; i2 < prefix.length; i2++) {
        this.bump();
      }
      return true;
    }
    return false;
  };
  Parser2.prototype.bumpUntil = function(pattern) {
    var currentOffset = this.offset();
    var index = this.message.indexOf(pattern, currentOffset);
    if (index >= 0) {
      this.bumpTo(index);
      return true;
    } else {
      this.bumpTo(this.message.length);
      return false;
    }
  };
  Parser2.prototype.bumpTo = function(targetOffset) {
    if (this.offset() > targetOffset) {
      throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
    }
    targetOffset = Math.min(targetOffset, this.message.length);
    while (true) {
      var offset = this.offset();
      if (offset === targetOffset) {
        break;
      }
      if (offset > targetOffset) {
        throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
      }
      this.bump();
      if (this.isEOF()) {
        break;
      }
    }
  };
  Parser2.prototype.bumpSpace = function() {
    while (!this.isEOF() && _isWhiteSpace(this.char())) {
      this.bump();
    }
  };
  Parser2.prototype.peek = function() {
    if (this.isEOF()) {
      return null;
    }
    var code = this.char();
    var offset = this.offset();
    var nextCode = this.message.charCodeAt(offset + (code >= 65536 ? 2 : 1));
    return nextCode !== null && nextCode !== void 0 ? nextCode : null;
  };
  return Parser2;
}();
function _isAlpha(codepoint) {
  return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}
function _isAlphaOrSlash(codepoint) {
  return _isAlpha(codepoint) || codepoint === 47;
}
function _isPotentialElementNameChar(c2) {
  return c2 === 45 || c2 === 46 || c2 >= 48 && c2 <= 57 || c2 === 95 || c2 >= 97 && c2 <= 122 || c2 >= 65 && c2 <= 90 || c2 == 183 || c2 >= 192 && c2 <= 214 || c2 >= 216 && c2 <= 246 || c2 >= 248 && c2 <= 893 || c2 >= 895 && c2 <= 8191 || c2 >= 8204 && c2 <= 8205 || c2 >= 8255 && c2 <= 8256 || c2 >= 8304 && c2 <= 8591 || c2 >= 11264 && c2 <= 12271 || c2 >= 12289 && c2 <= 55295 || c2 >= 63744 && c2 <= 64975 || c2 >= 65008 && c2 <= 65533 || c2 >= 65536 && c2 <= 983039;
}
function _isWhiteSpace(c2) {
  return c2 >= 9 && c2 <= 13 || c2 === 32 || c2 === 133 || c2 >= 8206 && c2 <= 8207 || c2 === 8232 || c2 === 8233;
}
function _isPatternSyntax(c2) {
  return c2 >= 33 && c2 <= 35 || c2 === 36 || c2 >= 37 && c2 <= 39 || c2 === 40 || c2 === 41 || c2 === 42 || c2 === 43 || c2 === 44 || c2 === 45 || c2 >= 46 && c2 <= 47 || c2 >= 58 && c2 <= 59 || c2 >= 60 && c2 <= 62 || c2 >= 63 && c2 <= 64 || c2 === 91 || c2 === 92 || c2 === 93 || c2 === 94 || c2 === 96 || c2 === 123 || c2 === 124 || c2 === 125 || c2 === 126 || c2 === 161 || c2 >= 162 && c2 <= 165 || c2 === 166 || c2 === 167 || c2 === 169 || c2 === 171 || c2 === 172 || c2 === 174 || c2 === 176 || c2 === 177 || c2 === 182 || c2 === 187 || c2 === 191 || c2 === 215 || c2 === 247 || c2 >= 8208 && c2 <= 8213 || c2 >= 8214 && c2 <= 8215 || c2 === 8216 || c2 === 8217 || c2 === 8218 || c2 >= 8219 && c2 <= 8220 || c2 === 8221 || c2 === 8222 || c2 === 8223 || c2 >= 8224 && c2 <= 8231 || c2 >= 8240 && c2 <= 8248 || c2 === 8249 || c2 === 8250 || c2 >= 8251 && c2 <= 8254 || c2 >= 8257 && c2 <= 8259 || c2 === 8260 || c2 === 8261 || c2 === 8262 || c2 >= 8263 && c2 <= 8273 || c2 === 8274 || c2 === 8275 || c2 >= 8277 && c2 <= 8286 || c2 >= 8592 && c2 <= 8596 || c2 >= 8597 && c2 <= 8601 || c2 >= 8602 && c2 <= 8603 || c2 >= 8604 && c2 <= 8607 || c2 === 8608 || c2 >= 8609 && c2 <= 8610 || c2 === 8611 || c2 >= 8612 && c2 <= 8613 || c2 === 8614 || c2 >= 8615 && c2 <= 8621 || c2 === 8622 || c2 >= 8623 && c2 <= 8653 || c2 >= 8654 && c2 <= 8655 || c2 >= 8656 && c2 <= 8657 || c2 === 8658 || c2 === 8659 || c2 === 8660 || c2 >= 8661 && c2 <= 8691 || c2 >= 8692 && c2 <= 8959 || c2 >= 8960 && c2 <= 8967 || c2 === 8968 || c2 === 8969 || c2 === 8970 || c2 === 8971 || c2 >= 8972 && c2 <= 8991 || c2 >= 8992 && c2 <= 8993 || c2 >= 8994 && c2 <= 9e3 || c2 === 9001 || c2 === 9002 || c2 >= 9003 && c2 <= 9083 || c2 === 9084 || c2 >= 9085 && c2 <= 9114 || c2 >= 9115 && c2 <= 9139 || c2 >= 9140 && c2 <= 9179 || c2 >= 9180 && c2 <= 9185 || c2 >= 9186 && c2 <= 9254 || c2 >= 9255 && c2 <= 9279 || c2 >= 9280 && c2 <= 9290 || c2 >= 9291 && c2 <= 9311 || c2 >= 9472 && c2 <= 9654 || c2 === 9655 || c2 >= 9656 && c2 <= 9664 || c2 === 9665 || c2 >= 9666 && c2 <= 9719 || c2 >= 9720 && c2 <= 9727 || c2 >= 9728 && c2 <= 9838 || c2 === 9839 || c2 >= 9840 && c2 <= 10087 || c2 === 10088 || c2 === 10089 || c2 === 10090 || c2 === 10091 || c2 === 10092 || c2 === 10093 || c2 === 10094 || c2 === 10095 || c2 === 10096 || c2 === 10097 || c2 === 10098 || c2 === 10099 || c2 === 10100 || c2 === 10101 || c2 >= 10132 && c2 <= 10175 || c2 >= 10176 && c2 <= 10180 || c2 === 10181 || c2 === 10182 || c2 >= 10183 && c2 <= 10213 || c2 === 10214 || c2 === 10215 || c2 === 10216 || c2 === 10217 || c2 === 10218 || c2 === 10219 || c2 === 10220 || c2 === 10221 || c2 === 10222 || c2 === 10223 || c2 >= 10224 && c2 <= 10239 || c2 >= 10240 && c2 <= 10495 || c2 >= 10496 && c2 <= 10626 || c2 === 10627 || c2 === 10628 || c2 === 10629 || c2 === 10630 || c2 === 10631 || c2 === 10632 || c2 === 10633 || c2 === 10634 || c2 === 10635 || c2 === 10636 || c2 === 10637 || c2 === 10638 || c2 === 10639 || c2 === 10640 || c2 === 10641 || c2 === 10642 || c2 === 10643 || c2 === 10644 || c2 === 10645 || c2 === 10646 || c2 === 10647 || c2 === 10648 || c2 >= 10649 && c2 <= 10711 || c2 === 10712 || c2 === 10713 || c2 === 10714 || c2 === 10715 || c2 >= 10716 && c2 <= 10747 || c2 === 10748 || c2 === 10749 || c2 >= 10750 && c2 <= 11007 || c2 >= 11008 && c2 <= 11055 || c2 >= 11056 && c2 <= 11076 || c2 >= 11077 && c2 <= 11078 || c2 >= 11079 && c2 <= 11084 || c2 >= 11085 && c2 <= 11123 || c2 >= 11124 && c2 <= 11125 || c2 >= 11126 && c2 <= 11157 || c2 === 11158 || c2 >= 11159 && c2 <= 11263 || c2 >= 11776 && c2 <= 11777 || c2 === 11778 || c2 === 11779 || c2 === 11780 || c2 === 11781 || c2 >= 11782 && c2 <= 11784 || c2 === 11785 || c2 === 11786 || c2 === 11787 || c2 === 11788 || c2 === 11789 || c2 >= 11790 && c2 <= 11798 || c2 === 11799 || c2 >= 11800 && c2 <= 11801 || c2 === 11802 || c2 === 11803 || c2 === 11804 || c2 === 11805 || c2 >= 11806 && c2 <= 11807 || c2 === 11808 || c2 === 11809 || c2 === 11810 || c2 === 11811 || c2 === 11812 || c2 === 11813 || c2 === 11814 || c2 === 11815 || c2 === 11816 || c2 === 11817 || c2 >= 11818 && c2 <= 11822 || c2 === 11823 || c2 >= 11824 && c2 <= 11833 || c2 >= 11834 && c2 <= 11835 || c2 >= 11836 && c2 <= 11839 || c2 === 11840 || c2 === 11841 || c2 === 11842 || c2 >= 11843 && c2 <= 11855 || c2 >= 11856 && c2 <= 11857 || c2 === 11858 || c2 >= 11859 && c2 <= 11903 || c2 >= 12289 && c2 <= 12291 || c2 === 12296 || c2 === 12297 || c2 === 12298 || c2 === 12299 || c2 === 12300 || c2 === 12301 || c2 === 12302 || c2 === 12303 || c2 === 12304 || c2 === 12305 || c2 >= 12306 && c2 <= 12307 || c2 === 12308 || c2 === 12309 || c2 === 12310 || c2 === 12311 || c2 === 12312 || c2 === 12313 || c2 === 12314 || c2 === 12315 || c2 === 12316 || c2 === 12317 || c2 >= 12318 && c2 <= 12319 || c2 === 12320 || c2 === 12336 || c2 === 64830 || c2 === 64831 || c2 >= 65093 && c2 <= 65094;
}
function pruneLocation(els) {
  els.forEach(function(el) {
    delete el.location;
    if (isSelectElement(el) || isPluralElement(el)) {
      for (var k2 in el.options) {
        delete el.options[k2].location;
        pruneLocation(el.options[k2].value);
      }
    } else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
      delete el.style.location;
    } else if ((isDateElement(el) || isTimeElement(el)) && isDateTimeSkeleton(el.style)) {
      delete el.style.location;
    } else if (isTagElement(el)) {
      pruneLocation(el.children);
    }
  });
}
function parse(message, opts) {
  if (opts === void 0) {
    opts = {};
  }
  opts = __assign$1({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
  var result = new Parser(message, opts).parse();
  if (result.err) {
    var error = SyntaxError(ErrorKind[result.err.kind]);
    error.location = result.err.location;
    error.originalMessage = result.err.message;
    throw error;
  }
  if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
    pruneLocation(result.val);
  }
  return result.val;
}
function memoize(fn, options) {
  var cache = options && options.cache ? options.cache : cacheDefault;
  var serializer = options && options.serializer ? options.serializer : serializerDefault;
  var strategy = options && options.strategy ? options.strategy : strategyDefault;
  return strategy(fn, {
    cache,
    serializer
  });
}
function isPrimitive(value) {
  return value == null || typeof value === "number" || typeof value === "boolean";
}
function monadic(fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === "undefined") {
    computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
  }
  return computedValue;
}
function variadic(fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);
  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === "undefined") {
    computedValue = fn.apply(this, args);
    cache.set(cacheKey, computedValue);
  }
  return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
  return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic;
  return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
  return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
  return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
var serializerDefault = function() {
  return JSON.stringify(arguments);
};
function ObjectWithoutPrototypeCache() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.get = function(key) {
  return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
  this.cache[key] = value;
};
var cacheDefault = {
  create: function create() {
    return new ObjectWithoutPrototypeCache();
  }
};
var strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
};
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2["MISSING_VALUE"] = "MISSING_VALUE";
  ErrorCode2["INVALID_VALUE"] = "INVALID_VALUE";
  ErrorCode2["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = function(_super) {
  __extends(FormatError2, _super);
  function FormatError2(msg, code, originalMessage) {
    var _this = _super.call(this, msg) || this;
    _this.code = code;
    _this.originalMessage = originalMessage;
    return _this;
  }
  FormatError2.prototype.toString = function() {
    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
  };
  return FormatError2;
}(Error);
var InvalidValueError = function(_super) {
  __extends(InvalidValueError2, _super);
  function InvalidValueError2(variableId, value, options, originalMessage) {
    return _super.call(this, 'Invalid values for "'.concat(variableId, '": "').concat(value, '". Options are "').concat(Object.keys(options).join('", "'), '"'), ErrorCode.INVALID_VALUE, originalMessage) || this;
  }
  return InvalidValueError2;
}(FormatError);
var InvalidValueTypeError = function(_super) {
  __extends(InvalidValueTypeError2, _super);
  function InvalidValueTypeError2(value, type, originalMessage) {
    return _super.call(this, 'Value for "'.concat(value, '" must be of type ').concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
  }
  return InvalidValueTypeError2;
}(FormatError);
var MissingValueError = function(_super) {
  __extends(MissingValueError2, _super);
  function MissingValueError2(variableId, originalMessage) {
    return _super.call(this, 'The intl string context variable "'.concat(variableId, '" was not provided to the string "').concat(originalMessage, '"'), ErrorCode.MISSING_VALUE, originalMessage) || this;
  }
  return MissingValueError2;
}(FormatError);
var PART_TYPE;
(function(PART_TYPE2) {
  PART_TYPE2[PART_TYPE2["literal"] = 0] = "literal";
  PART_TYPE2[PART_TYPE2["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
  if (parts.length < 2) {
    return parts;
  }
  return parts.reduce(function(all, part) {
    var lastPart = all[all.length - 1];
    if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
      all.push(part);
    } else {
      lastPart.value += part.value;
    }
    return all;
  }, []);
}
function isFormatXMLElementFn(el) {
  return typeof el === "function";
}
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, originalMessage) {
  if (els.length === 1 && isLiteralElement(els[0])) {
    return [
      {
        type: PART_TYPE.literal,
        value: els[0].value
      }
    ];
  }
  var result = [];
  for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
    var el = els_1[_i];
    if (isLiteralElement(el)) {
      result.push({
        type: PART_TYPE.literal,
        value: el.value
      });
      continue;
    }
    if (isPoundElement(el)) {
      if (typeof currentPluralValue === "number") {
        result.push({
          type: PART_TYPE.literal,
          value: formatters.getNumberFormat(locales).format(currentPluralValue)
        });
      }
      continue;
    }
    var varName = el.value;
    if (!(values && varName in values)) {
      throw new MissingValueError(varName, originalMessage);
    }
    var value = values[varName];
    if (isArgumentElement(el)) {
      if (!value || typeof value === "string" || typeof value === "number") {
        value = typeof value === "string" || typeof value === "number" ? String(value) : "";
      }
      result.push({
        type: typeof value === "string" ? PART_TYPE.literal : PART_TYPE.object,
        value
      });
      continue;
    }
    if (isDateElement(el)) {
      var style = typeof el.style === "string" ? formats.date[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : void 0;
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getDateTimeFormat(locales, style).format(value)
      });
      continue;
    }
    if (isTimeElement(el)) {
      var style = typeof el.style === "string" ? formats.time[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : formats.time.medium;
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getDateTimeFormat(locales, style).format(value)
      });
      continue;
    }
    if (isNumberElement(el)) {
      var style = typeof el.style === "string" ? formats.number[el.style] : isNumberSkeleton(el.style) ? el.style.parsedOptions : void 0;
      if (style && style.scale) {
        value = value * (style.scale || 1);
      }
      result.push({
        type: PART_TYPE.literal,
        value: formatters.getNumberFormat(locales, style).format(value)
      });
      continue;
    }
    if (isTagElement(el)) {
      var children2 = el.children, value_1 = el.value;
      var formatFn = values[value_1];
      if (!isFormatXMLElementFn(formatFn)) {
        throw new InvalidValueTypeError(value_1, "function", originalMessage);
      }
      var parts = formatToParts(children2, locales, formatters, formats, values, currentPluralValue);
      var chunks = formatFn(parts.map(function(p2) {
        return p2.value;
      }));
      if (!Array.isArray(chunks)) {
        chunks = [chunks];
      }
      result.push.apply(result, chunks.map(function(c2) {
        return {
          type: typeof c2 === "string" ? PART_TYPE.literal : PART_TYPE.object,
          value: c2
        };
      }));
    }
    if (isSelectElement(el)) {
      var opt = el.options[value] || el.options.other;
      if (!opt) {
        throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
      }
      result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
      continue;
    }
    if (isPluralElement(el)) {
      var opt = el.options["=".concat(value)];
      if (!opt) {
        if (!Intl.PluralRules) {
          throw new FormatError('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', ErrorCode.MISSING_INTL_API, originalMessage);
        }
        var rule = formatters.getPluralRules(locales, { type: el.pluralType }).select(value - (el.offset || 0));
        opt = el.options[rule] || el.options.other;
      }
      if (!opt) {
        throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
      }
      result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
      continue;
    }
  }
  return mergeLiteral(result);
}
function mergeConfig(c1, c2) {
  if (!c2) {
    return c1;
  }
  return __assign$2(__assign$2(__assign$2({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function(all, k2) {
    all[k2] = __assign$2(__assign$2({}, c1[k2]), c2[k2] || {});
    return all;
  }, {}));
}
function mergeConfigs(defaultConfig2, configs) {
  if (!configs) {
    return defaultConfig2;
  }
  return Object.keys(defaultConfig2).reduce(function(all, k2) {
    all[k2] = mergeConfig(defaultConfig2[k2], configs[k2]);
    return all;
  }, __assign$2({}, defaultConfig2));
}
function createFastMemoizeCache(store) {
  return {
    create: function() {
      return {
        get: function(key) {
          return store[key];
        },
        set: function(key, value) {
          store[key] = value;
        }
      };
    }
  };
}
function createDefaultFormatters(cache) {
  if (cache === void 0) {
    cache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
  }
  return {
    getNumberFormat: memoize(function() {
      var _a2;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a2 = Intl.NumberFormat).bind.apply(_a2, __spreadArray([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.number),
      strategy: strategies.variadic
    }),
    getDateTimeFormat: memoize(function() {
      var _a2;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a2 = Intl.DateTimeFormat).bind.apply(_a2, __spreadArray([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.dateTime),
      strategy: strategies.variadic
    }),
    getPluralRules: memoize(function() {
      var _a2;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a2 = Intl.PluralRules).bind.apply(_a2, __spreadArray([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache(cache.pluralRules),
      strategy: strategies.variadic
    })
  };
}
var IntlMessageFormat = function() {
  function IntlMessageFormat2(message, locales, overrideFormats, opts) {
    var _this = this;
    if (locales === void 0) {
      locales = IntlMessageFormat2.defaultLocale;
    }
    this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
    this.format = function(values) {
      var parts = _this.formatToParts(values);
      if (parts.length === 1) {
        return parts[0].value;
      }
      var result = parts.reduce(function(all, part) {
        if (!all.length || part.type !== PART_TYPE.literal || typeof all[all.length - 1] !== "string") {
          all.push(part.value);
        } else {
          all[all.length - 1] += part.value;
        }
        return all;
      }, []);
      if (result.length <= 1) {
        return result[0] || "";
      }
      return result;
    };
    this.formatToParts = function(values) {
      return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, void 0, _this.message);
    };
    this.resolvedOptions = function() {
      return {
        locale: _this.resolvedLocale.toString()
      };
    };
    this.getAst = function() {
      return _this.ast;
    };
    this.locales = locales;
    this.resolvedLocale = IntlMessageFormat2.resolveLocale(locales);
    if (typeof message === "string") {
      this.message = message;
      if (!IntlMessageFormat2.__parse) {
        throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
      }
      this.ast = IntlMessageFormat2.__parse(message, {
        ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
        locale: this.resolvedLocale
      });
    } else {
      this.ast = message;
    }
    if (!Array.isArray(this.ast)) {
      throw new TypeError("A message must be provided as a String or AST.");
    }
    this.formats = mergeConfigs(IntlMessageFormat2.formats, overrideFormats);
    this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
  }
  Object.defineProperty(IntlMessageFormat2, "defaultLocale", {
    get: function() {
      if (!IntlMessageFormat2.memoizedDefaultLocale) {
        IntlMessageFormat2.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
      }
      return IntlMessageFormat2.memoizedDefaultLocale;
    },
    enumerable: false,
    configurable: true
  });
  IntlMessageFormat2.memoizedDefaultLocale = null;
  IntlMessageFormat2.resolveLocale = function(locales) {
    var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
    if (supportedLocales.length > 0) {
      return new Intl.Locale(supportedLocales[0]);
    }
    return new Intl.Locale(typeof locales === "string" ? locales : locales[0]);
  };
  IntlMessageFormat2.__parse = parse;
  IntlMessageFormat2.formats = {
    number: {
      integer: {
        maximumFractionDigits: 0
      },
      currency: {
        style: "currency"
      },
      percent: {
        style: "percent"
      }
    },
    date: {
      short: {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
      },
      medium: {
        month: "short",
        day: "numeric",
        year: "numeric"
      },
      long: {
        month: "long",
        day: "numeric",
        year: "numeric"
      },
      full: {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }
    },
    time: {
      short: {
        hour: "numeric",
        minute: "numeric"
      },
      medium: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      }
    }
  };
  return IntlMessageFormat2;
}();
var o = IntlMessageFormat;
const r = {}, i = (e, n, t) => t ? (n in r || (r[n] = {}), e in r[n] || (r[n][e] = t), t) : t, l = (e, n) => {
  if (null == n)
    return;
  if (n in r && e in r[n])
    return r[n][e];
  const t = E(n);
  for (let o2 = 0; o2 < t.length; o2++) {
    const r2 = c(t[o2], e);
    if (r2)
      return i(e, n, r2);
  }
};
let a;
const s = writable({});
function u(e) {
  return e in a;
}
function c(e, n) {
  if (!u(e))
    return null;
  const t = function(e2) {
    return a[e2] || null;
  }(e);
  return function(e2, n2) {
    if (null == n2)
      return;
    if (n2 in e2)
      return e2[n2];
    const t2 = n2.split(".");
    let o2 = e2;
    for (let e3 = 0; e3 < t2.length; e3++)
      if ("object" == typeof o2) {
        if (e3 > 0) {
          const n3 = t2.slice(e3, t2.length).join(".");
          if (n3 in o2) {
            o2 = o2[n3];
            break;
          }
        }
        o2 = o2[t2[e3]];
      } else
        o2 = void 0;
    return o2;
  }(t, n);
}
function m(e, ...n) {
  delete r[e], s.update((o2) => (o2[e] = cjs.all([o2[e] || {}, ...n]), o2));
}
derived([s], ([e]) => Object.keys(e));
s.subscribe((e) => a = e);
const d = {};
function g(e) {
  return d[e];
}
function h(e) {
  return null != e && E(e).some((e2) => {
    var n;
    return null === (n = g(e2)) || void 0 === n ? void 0 : n.size;
  });
}
function w(e, n) {
  const t = Promise.all(n.map((n2) => (function(e2, n3) {
    d[e2].delete(n3), 0 === d[e2].size && delete d[e2];
  }(e, n2), n2().then((e2) => e2.default || e2))));
  return t.then((n2) => m(e, ...n2));
}
const p = {};
function b(e) {
  if (!h(e))
    return e in p ? p[e] : Promise.resolve();
  const n = function(e2) {
    return E(e2).map((e3) => {
      const n2 = g(e3);
      return [e3, n2 ? [...n2] : []];
    }).filter(([, e3]) => e3.length > 0);
  }(e);
  return p[e] = Promise.all(n.map(([e2, n2]) => w(e2, n2))).then(() => {
    if (h(e))
      return b(e);
    delete p[e];
  }), p[e];
}
function y(e, n) {
  g(e) || function(e2) {
    d[e2] = /* @__PURE__ */ new Set();
  }(e);
  const t = g(e);
  g(e).has(n) || (u(e) || s.update((n2) => (n2[e] = {}, n2)), t.add(n));
}
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
function v(e, n) {
  var t = {};
  for (var o2 in e)
    Object.prototype.hasOwnProperty.call(e, o2) && n.indexOf(o2) < 0 && (t[o2] = e[o2]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var r2 = 0;
    for (o2 = Object.getOwnPropertySymbols(e); r2 < o2.length; r2++)
      n.indexOf(o2[r2]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o2[r2]) && (t[o2[r2]] = e[o2[r2]]);
  }
  return t;
}
function O({ locale: e, id: n }) {
  console.warn(`[svelte-i18n] The message "${n}" was not found in "${E(e).join('", "')}".${h(P()) ? "\n\nNote: there are at least one loader still registered to this locale that wasn't executed." : ""}`);
}
const j = { fallbackLocale: null, loadingDelay: 200, formats: { number: { scientific: { notation: "scientific" }, engineering: { notation: "engineering" }, compactLong: { notation: "compact", compactDisplay: "long" }, compactShort: { notation: "compact", compactDisplay: "short" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } }, warnOnMissingMessages: true, handleMissingMessage: void 0, ignoreTag: true };
function M() {
  return j;
}
function $(e) {
  const { formats: n } = e, t = v(e, ["formats"]), o2 = e.initialLocale || e.fallbackLocale;
  return t.warnOnMissingMessages && (delete t.warnOnMissingMessages, null == t.handleMissingMessage ? t.handleMissingMessage = O : console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')), Object.assign(j, t, { initialLocale: o2 }), n && ("number" in n && Object.assign(j.formats.number, n.number), "date" in n && Object.assign(j.formats.date, n.date), "time" in n && Object.assign(j.formats.time, n.time)), D.set(o2);
}
const k = writable(false);
let T;
const L = writable(null);
function x(e) {
  return e.split("-").map((e2, n, t) => t.slice(0, n + 1).join("-")).reverse();
}
function E(e, n = M().fallbackLocale) {
  const t = x(e);
  return n ? [.../* @__PURE__ */ new Set([...t, ...x(n)])] : t;
}
function P() {
  return null != T ? T : void 0;
}
L.subscribe((e) => {
  T = null != e ? e : void 0, "undefined" != typeof window && null != e && document.documentElement.setAttribute("lang", e);
});
const D = Object.assign(Object.assign({}, L), { set: (e) => {
  if (e && function(e2) {
    if (null == e2)
      return;
    const n = E(e2);
    for (let e3 = 0; e3 < n.length; e3++) {
      const t = n[e3];
      if (u(t))
        return t;
    }
  }(e) && h(e)) {
    const { loadingDelay: n } = M();
    let t;
    return "undefined" != typeof window && null != P() && n ? t = window.setTimeout(() => k.set(true), n) : k.set(true), b(e).then(() => {
      L.set(e);
    }).finally(() => {
      clearTimeout(t), k.set(false);
    });
  }
  return L.set(e);
} }), C = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (t) => {
    const o2 = JSON.stringify(t);
    return o2 in n ? n[o2] : n[o2] = e(t);
  };
}, G = (e, n) => {
  const { formats: t } = M();
  if (e in t && n in t[e])
    return t[e][n];
  throw new Error(`[svelte-i18n] Unknown "${n}" ${e} format.`);
}, J = C((e) => {
  var { locale: n, format: t } = e, o2 = v(e, ["locale", "format"]);
  if (null == n)
    throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
  return t && (o2 = G("number", t)), new Intl.NumberFormat(n, o2);
}), U = C((e) => {
  var { locale: n, format: t } = e, o2 = v(e, ["locale", "format"]);
  if (null == n)
    throw new Error('[svelte-i18n] A "locale" must be set to format dates');
  return t ? o2 = G("date", t) : 0 === Object.keys(o2).length && (o2 = G("date", "short")), new Intl.DateTimeFormat(n, o2);
}), V = C((e) => {
  var { locale: n, format: t } = e, o2 = v(e, ["locale", "format"]);
  if (null == n)
    throw new Error('[svelte-i18n] A "locale" must be set to format time values');
  return t ? o2 = G("time", t) : 0 === Object.keys(o2).length && (o2 = G("time", "short")), new Intl.DateTimeFormat(n, o2);
}), _ = (e = {}) => {
  var { locale: n = P() } = e, t = v(e, ["locale"]);
  return J(Object.assign({ locale: n }, t));
}, q = (e = {}) => {
  var { locale: n = P() } = e, t = v(e, ["locale"]);
  return U(Object.assign({ locale: n }, t));
}, B = (e = {}) => {
  var { locale: n = P() } = e, t = v(e, ["locale"]);
  return V(Object.assign({ locale: n }, t));
}, H = C((e, n = P()) => new o(e, n, M().formats, { ignoreTag: M().ignoreTag })), K = (e, n = {}) => {
  var t, o2, r2, i2;
  let a2 = n;
  "object" == typeof e && (a2 = e, e = a2.id);
  const { values: s2, locale: u2 = P(), default: c2 } = a2;
  if (null == u2)
    throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
  let m2 = l(e, u2);
  if (m2) {
    if ("string" != typeof m2)
      return console.warn(`[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof m2}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`), m2;
  } else
    m2 = null !== (i2 = null !== (r2 = null === (o2 = (t = M()).handleMissingMessage) || void 0 === o2 ? void 0 : o2.call(t, { locale: u2, id: e, defaultValue: c2 })) && void 0 !== r2 ? r2 : c2) && void 0 !== i2 ? i2 : e;
  if (!s2)
    return m2;
  let f = m2;
  try {
    f = H(m2, u2).format(s2);
  } catch (n2) {
    console.warn(`[svelte-i18n] Message "${e}" has syntax error:`, n2.message);
  }
  return f;
}, Q = (e, n) => B(n).format(e), R = (e, n) => q(n).format(e), W = (e, n) => _(n).format(e), X = (e, n = P()) => l(e, n), Y = derived([D, s], () => K);
derived([D], () => Q);
derived([D], () => R);
derived([D], () => W);
derived([D, s], () => X);
var getCookie = (name, cookies) => {
  if (cookies == null) {
    if (typeof window === "undefined") {
      return void 0;
    }
    cookies = document.cookie;
  }
  const kv = cookies.split(";").find((part) => part.trim().startsWith(name));
  if (!kv)
    return void 0;
  const cookieValue = kv.split("=")[1];
  if (!cookieValue)
    return void 0;
  return decodeURIComponent(cookieValue.trim());
};
var setCookie = (name, value, options = {}) => {
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie = {
    [encodeURIComponent(name)]: encodeURIComponent(value),
    sameSite: "strict",
    ...options
  };
  document.cookie = Object.entries(updatedCookie).map((kv) => kv.join("=")).join(";");
};
var availableLocales = ["de", "en", "es", "fr", "nl"];
function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case "../locales/de.json":
      return __vitePreload(() => import("./de.052a554f.js"), true ? [] : void 0);
    case "../locales/en.json":
      return __vitePreload(() => import("./en.d96dadcd.js"), true ? [] : void 0);
    case "../locales/es.json":
      return __vitePreload(() => import("./es.f7b8270f.js"), true ? [] : void 0);
    case "../locales/fr.json":
      return __vitePreload(() => import("./fr.a7ecbea4.js"), true ? [] : void 0);
    case "../locales/nl.json":
      return __vitePreload(() => import("./nl.9b328408.js"), true ? [] : void 0);
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
var registerLocales = () => {
  availableLocales.forEach((lang) => {
    y(lang, () => __variableDynamicImportRuntime0__(`../locales/${lang}.json`));
  });
};
function create_fragment(ctx) {
  let router;
  let current;
  router = new Router({ props: { routes } });
  return {
    c() {
      create_component(router.$$.fragment);
    },
    m(target, anchor) {
      mount_component(router, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(router.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(router.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(router, detaching);
    }
  };
}
function instance($$self) {
  let lang = getCookie("locale");
  if (!lang && window.navigator.language)
    lang = window.navigator.language.split("-")[0].toLowerCase();
  if (!lang)
    lang = "en";
  registerLocales();
  $({
    fallbackLocale: "en",
    initialLocale: lang
  });
  D.subscribe((value) => {
    if (value == null)
      return;
    if (typeof window !== "undefined")
      setCookie("locale", value, { path: "/" });
  });
  return [];
}
class App extends SvelteComponent {
  constructor(options) {
    super();
    init$1(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
var reset = "";
var global$1 = "";
HMR(App, { target: document.body }, "app-container");
export { is_function as $, get_slot_changes as A, createEventDispatcher as B, toggle_class as C, listen as D, run_all as E, redirect as F, writable as G, get_store_value as H, set_style as I, bubble as J, goto as K, params as L, add_render_callback as M, update_keyed_each as N, outro_and_destroy_block as O, create_bidirectional_transition as P, set_input_value as Q, prevent_default as R, SvelteComponent as S, beforeUpdate as T, afterUpdate as U, onMount as V, create_in_transition as W, binding_callbacks as X, Y, identity as Z, __vitePreload as _, space as a, fix_position as a0, create_animation as a1, fix_and_outro_and_destroy_block as a2, isActive as a3, src_url_equal as a4, action_destroyer as a5, self as a6, getContext as a7, bind as a8, add_flush_callback as a9, to_number as aa, D as ab, destroy_each as ac, HtmlTag as ad, getCookie as ae, onDestroy as af, setCookie as ag, setContext as ah, get_spread_update as ai, get_spread_object as aj, handle_promise as ak, update_await_block_branch as al, globals as am, s as an, create_out_transition as ao, select_option as ap, destroy_block as aq, availableLocales as ar, k as as, attr as b, create_component as c, insert as d, element as e, append as f, set_data as g, transition_in as h, init$1 as i, transition_out as j, detach as k, destroy_component as l, mount_component as m, component_subscribe as n, noop as o, empty as p, group_outros as q, check_outros as r, safe_not_equal as s, text as t, assign as u, exclude_internal_props as v, create_slot as w, null_to_empty as x, update_slot_base as y, get_all_dirty_from_scope as z };
