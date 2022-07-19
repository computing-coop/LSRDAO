import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, a as space, b as attr, I as set_style, d as insert, f as append, D as listen, g as set_data, ao as create_out_transition, k as detach, E as run_all, q as group_outros, N as update_keyed_each, O as outro_and_destroy_block, r as check_outros, h as transition_in, j as transition_out, af as onDestroy, w as create_slot, C as toggle_class, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, n as component_subscribe, a3 as isActive, J as bubble, R as prevent_default, M as add_render_callback, P as create_bidirectional_transition, a5 as action_destroyer, Y, c as create_component, m as mount_component, l as destroy_component, o as noop, X as binding_callbacks, ap as select_option, aq as destroy_block, ab as D, ar as availableLocales, a8 as bind, a9 as add_flush_callback, am as globals, L as params, as as k } from "./index.ae92f232.js";
import { e as logout, f as createAuthObserver } from "./auth.cc08f0a7.js";
import { s as setAllUserInfo } from "./user.1f47be60.js";
import { d as createChatObserver } from "./chat.5882e4d4.js";
import { u as user, i as isInitializing } from "./auth.4dd538c9.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { a as notification } from "./notification.67ec90d7.js";
import { P as Progress } from "./Progress.9dad7c45.js";
import { r as routes } from "./routes.77b585d1.js";
import { b as slide } from "./index.f441bdbc.js";
import { c as clickOutside } from "./click-outside.a63b3702.js";
import { u as userIcon } from "./user.3a77a3d3.js";
import { t as tentIcon } from "./tent.5b24dad1.js";
import { I as Icon } from "./Icon.65885a60.js";
import { a as SHOP_URL } from "./constants.c39c3a18.js";
import "./index.a79b2e56.js";
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function create_each_block$2(key_1, ctx) {
  let li;
  let div0;
  let t0_value = ctx[9].msg + "";
  let t0;
  let t1;
  let div1;
  let t2;
  let li_class_value;
  let li_outro;
  let current;
  let mounted;
  let dispose;
  function animationend_handler() {
    return ctx[4](ctx[9]);
  }
  function click_handler() {
    return ctx[5](ctx[9]);
  }
  return {
    key: key_1,
    first: null,
    c() {
      li = element("li");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      t2 = space();
      attr(div0, "class", "content svelte-il9q8s");
      attr(div1, "class", "time svelte-il9q8s");
      set_style(div1, "animation-duration", ctx[9].timeout + "ms");
      attr(li, "class", li_class_value = "toast " + ctx[9].intent + " svelte-il9q8s");
      this.first = li;
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, div0);
      append(div0, t0);
      append(li, t1);
      append(li, div1);
      append(li, t2);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div1, "animationend", animationend_handler),
          listen(li, "click", click_handler)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx[9].msg + ""))
        set_data(t0, t0_value);
      if (!current || dirty & 1) {
        set_style(div1, "animation-duration", ctx[9].timeout + "ms");
      }
      if (!current || dirty & 1 && li_class_value !== (li_class_value = "toast " + ctx[9].intent + " svelte-il9q8s")) {
        attr(li, "class", li_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      if (li_outro)
        li_outro.end(1);
      current = true;
    },
    o(local) {
      li_outro = create_out_transition(li, ctx[1], {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if (detaching && li_outro)
        li_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$a(ctx) {
  let ul;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let current;
  let each_value = ctx[0];
  const get_key = (ctx2) => ctx2[9].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$2(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$2(key, child_ctx));
  }
  return {
    c() {
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(ul, "class", "toasts svelte-il9q8s");
    },
    m(target, anchor) {
      insert(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 5) {
        each_value = ctx2[0];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, ul, outro_and_destroy_block, create_each_block$2, null, get_each_context$2);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  let { timeout = 5e3 } = $$props;
  let count = 0;
  let toasts = [];
  let unsubscribe;
  const animateOut = (node, { delay = 0, duration = 300 }) => ({
    delay,
    duration,
    css: (t) => `opacity: ${(t - 0.5) * 1}; transform-origin: top right; transform: scaleX(${(t - 0.5) * 1});`
  });
  const createToast = (msg, intent, to, options) => {
    $$invalidate(0, toasts = [
      {
        id: count,
        msg,
        intent,
        timeout: to || timeout,
        width: "100%",
        click: options.click || null
      },
      ...toasts
    ]);
    count = count + 1;
  };
  unsubscribe = notification.subscribe((value) => {
    if (!value)
      return;
    createToast(value.message, value.type, value.timeout, value.options);
    notification.set();
  });
  onDestroy(unsubscribe);
  const removeToast = (id) => {
    $$invalidate(0, toasts = toasts.filter((t) => t.id != id));
  };
  const animationend_handler = (toast) => removeToast(toast.id);
  const click_handler = (toast) => {
    if (toast.click)
      toast.click();
    removeToast(toast.id);
  };
  $$self.$$set = ($$props2) => {
    if ("timeout" in $$props2)
      $$invalidate(3, timeout = $$props2.timeout);
  };
  return [toasts, animateOut, removeToast, timeout, animationend_handler, click_handler];
}
class Notifications extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$a, safe_not_equal, { timeout: 3 });
  }
}
var chatIcon = '<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M1.72074 2.30953L17.5196 0.549856C18.3017 0.439876 18.9796 1.09975 18.9796 1.9246V11.9877C18.9796 12.8126 18.3017 13.4725 17.5718 13.4175L9.28126 12.8676C8.81199 12.8126 8.34271 13.0325 8.02986 13.4175L4.84923 17.5417C4.48424 17.9816 3.8064 17.7617 3.8064 17.2118L3.64998 13.8574C3.59783 13.0875 3.02428 12.4277 2.2943 12.3727L1.82502 12.3177C1.0429 12.3177 0.521484 11.7128 0.521484 10.9429V3.68428C0.521484 2.96941 1.0429 2.36452 1.72074 2.30953Z" fill="white"></path><path d="M4.43203 18.3658C4.32775 18.3658 4.22346 18.3658 4.06704 18.3108C3.64991 18.1458 3.33706 17.7609 3.28492 17.266L3.12849 13.8566C3.07635 13.3617 2.71136 12.9218 2.24209 12.9218L1.77281 12.8668C0.782123 12.8118 0 11.987 0 10.9422V3.68352C0 2.6937 0.729981 1.81387 1.66853 1.75888L17.4674 -0.000797806C17.9888 -0.0557876 18.5102 0.109182 18.9274 0.494111C19.3445 0.879039 19.5531 1.37395 19.5531 1.92385V11.987C19.5531 12.5369 19.3445 13.0318 18.9795 13.4167C18.6145 13.8016 18.0931 13.9666 17.5717 13.9666L9.28119 13.4167C8.96834 13.3617 8.65549 13.5267 8.49907 13.8016L5.31844 17.9259C5.05773 18.2008 4.74488 18.3658 4.43203 18.3658ZM1.77281 2.85867C1.35568 2.85867 1.04283 3.2436 1.04283 3.68352V10.9422C1.04283 11.3821 1.35568 11.767 1.82495 11.822L2.29423 11.877C3.28492 11.932 4.11918 12.8118 4.17132 13.8566L4.37989 17.211C4.37989 17.211 4.37989 17.266 4.43203 17.266C4.48417 17.266 4.48417 17.266 4.48417 17.266L7.6648 13.1418C8.08194 12.5919 8.70763 12.3169 9.33333 12.3719L17.6238 12.9218C17.8324 12.9218 18.0931 12.8668 18.2495 12.7019C18.406 12.5369 18.5102 12.3169 18.5102 12.097V1.97884C18.5102 1.75888 18.406 1.48393 18.2495 1.31896C18.041 1.15399 17.8324 1.099 17.5717 1.099L1.77281 2.85867Z" fill="#495747"></path><path d="M26.2794 10.888L10.4805 9.18328C9.69835 9.0733 9.02051 9.73318 9.02051 10.558V20.6212C9.02051 21.446 9.69835 22.1059 10.4283 22.0509L18.7188 21.501C19.1881 21.446 19.6574 21.666 19.9702 22.0509L23.1509 26.1751C23.5159 26.615 24.1937 26.3951 24.1937 25.8452L24.4023 22.4908C24.4544 21.721 25.028 21.0611 25.7579 21.0061L26.2272 20.9511C26.9051 20.8961 27.4786 20.2912 27.4786 19.5214V12.3177C27.4786 11.6028 26.9572 10.9979 26.2794 10.888Z" fill="white"></path><path d="M23.5681 27C23.2552 27 22.9424 26.835 22.6817 26.56L19.501 22.4358C19.2925 22.1609 19.0318 22.0509 18.7189 22.0509L10.4284 22.6008C9.90698 22.6558 9.43771 22.4358 9.02058 22.0509C8.65559 21.6659 8.44702 21.171 8.44702 20.6211V10.558C8.44702 10.0081 8.65559 9.4582 9.07272 9.12827C9.43771 8.74334 10.0113 8.57837 10.5327 8.63336L26.3316 10.338C27.2701 10.448 28.0001 11.2729 28.0001 12.2627V19.5213C28.0001 20.5661 27.218 21.391 26.2794 21.501L25.8102 21.556C25.3409 21.611 24.9237 21.9959 24.9237 22.4908L24.7152 25.8452C24.663 26.3401 24.4023 26.725 23.9331 26.89C23.7766 26.945 23.6724 27 23.5681 27ZM18.771 20.9511C19.3967 20.9511 19.9703 21.226 20.3353 21.7209L23.5159 25.8452C23.5159 25.8452 23.5681 25.9002 23.5681 25.8452C23.6202 25.8452 23.6202 25.7902 23.6202 25.7902L23.8288 22.4358C23.8809 21.391 24.7152 20.5112 25.7059 20.4562L26.1751 20.4012C26.5923 20.3462 26.9573 20.0162 26.9573 19.5213V12.3177C26.9573 11.8778 26.6444 11.4928 26.2273 11.4378L10.4284 9.73315C10.2198 9.73315 9.95913 9.78814 9.8027 9.95311C9.64628 10.1181 9.54199 10.338 9.54199 10.613V20.6761C9.54199 20.8961 9.64628 21.116 9.8027 21.281C9.95913 21.446 10.1677 21.556 10.4284 21.501L18.7189 20.9511C18.7189 20.9511 18.7189 20.9511 18.771 20.9511Z" fill="#495747"></path><path d="M24.6106 14.2424C24.6106 14.2424 24.5584 14.2424 24.6106 14.2424L11.6274 12.9227C11.3666 12.8677 11.1059 12.6477 11.1581 12.3178C11.2102 12.0428 11.4188 11.7679 11.7316 11.8229L24.6627 13.1426C24.9234 13.1976 25.1841 13.4176 25.132 13.7475C25.0799 14.0225 24.8713 14.2424 24.6106 14.2424Z" fill="#495747"></path><path d="M24.6106 17.0469C24.6106 17.0469 24.5584 17.0469 24.6106 17.0469L11.6274 15.7271C11.3666 15.6721 11.1059 15.4522 11.1581 15.1222C11.2102 14.8473 11.4188 14.5723 11.7316 14.6273L24.6627 15.9471C24.9234 16.0021 25.1841 16.222 25.132 16.552C25.0799 16.8269 24.8713 17.0469 24.6106 17.0469Z" fill="#495747"></path><path d="M24.6106 19.8513C24.6106 19.8513 24.5584 19.8513 24.6106 19.8513L11.6274 18.5316C11.3666 18.4766 11.1059 18.2566 11.1581 17.9267C11.2102 17.6517 11.4188 17.3768 11.7316 17.4318L24.6627 18.7515C24.9234 18.8065 25.1841 19.0265 25.132 19.3564C25.0799 19.6314 24.8713 19.8513 24.6106 19.8513Z" fill="#495747"></path></g><defs><rect width="28" height="27" fill="white"></rect></clipPath></defs></svg>';
var mapIcon = '<svg width="41" height="45" viewBox="0 0 41 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.49998 44.2C6.79998 44.2 6.09998 43.7 5.99998 43.1L-1.5121e-05 16.1C-0.100015 15.7 -1.51247e-05 15.4 0.199985 15.1C0.399985 14.8 0.799985 14.5 1.19998 14.5L13.7 12.3C13.8 12.3 13.9 12.3 13.9 12.2L22.4 6.9C22.7 6.7 23.2 6.6 23.6 6.7L33.7 8.5C34.3 8.6 34.8 9 34.9 9.6L40.4 34.5C40.5 34.9 40.4 35.3 40.1 35.6C39.8 36 39.4 36.2 38.9 36.2L30 36.3C29.9 36.3 29.8 36.3 29.7 36.4L21 41.8C20.8 41.9 20.6 42 20.4 42L7.79998 44.2C7.69999 44.2 7.59998 44.2 7.49998 44.2ZM23.4 7.5C23.3 7.5 23.1 7.5 23 7.6L14.5 12.9C14.3 13 14.1 13.1 13.9 13.1L1.39998 15.3C1.19998 15.3 1.09998 15.4 0.999985 15.5C0.999985 15.6 0.899985 15.7 0.899985 15.8L6.79998 42.8C6.89998 43.1 7.19998 43.2 7.49998 43.2L20.2 41C20.3 41 20.4 41 20.4 40.9L29.1 35.5C29.3 35.3 29.6 35.3 29.9 35.3L39 35.2C39.2 35.2 39.4 35.1 39.5 35C39.6 34.9 39.6 34.8 39.6 34.7L34.1 9.7C34.1 9.5 33.9 9.4 33.6 9.3L23.5 7.5H23.4Z" fill="#495747"></path><path d="M23.1904 7.07775L22.3131 7.27863L28.8975 36.0352L29.7748 35.8343L23.1904 7.07775Z" fill="#495747"></path><path d="M14.5342 12.4954L13.6512 12.6696L19.3818 41.7102L20.2648 41.5359L14.5342 12.4954Z" fill="#495747"></path><path d="M11.8 39.7C11.6 39.7 11.4 39.5 11.3 39.3C11.3 39.3 11.3 38.9 11.2 38.3C11.2 38 11.4 37.8 11.7 37.8C12 37.8 12.2 38 12.2 38.3C12.2 38.9 12.3 39.2 12.3 39.2C12.3 39.5 12.1 39.7 11.8 39.7Z" fill="#495747"></path><path d="M11.7 36.7999C11.4 36.7999 11.2 36.5999 11.2 36.2999C11.2 35.5999 11.3 34.9999 11.3 34.2999C11.3 33.9999 11.6 33.9 11.8 33.9C12.1 33.9 12.2 34.1999 12.2 34.4C12.1 35 12.1 35.6999 12.1 36.2999C12.2 36.5999 12 36.7999 11.7 36.7999ZM12.2 32.9999C12.1 32.9999 12.1 32.9999 12.2 32.9999C11.9 32.8999 11.7 32.6999 11.7 32.4C11.8 31.7 12 31.0999 12.2 30.4999C12.3 30.1999 12.5 30.0999 12.8 30.1999C13 30.2999 13.2 30.4999 13.1 30.7999C12.9 31.3999 12.8 31.9999 12.6 32.6999C12.6 32.7999 12.4 32.9999 12.2 32.9999ZM13.3 29.1999C13.2 29.1999 13.2 29.1999 13.1 29.1999C12.9 29.0999 12.8 28.7999 12.9 28.5999C13.2 27.9999 13.5 27.3999 13.8 26.7999C13.9 26.5999 14.2 26.4999 14.5 26.5999C14.7 26.6999 14.8 26.9999 14.7 27.2999C14.4 27.7999 14.1 28.3999 13.8 28.9999C13.6 29.0999 13.5 29.1999 13.3 29.1999ZM15.4 25.8999C15.3 25.8999 15.2 25.8999 15.1 25.7999C14.9 25.5999 14.9 25.2999 15.1 25.0999C15.6 24.5999 16.1 24.0999 16.6 23.6999C16.8 23.4999 17.1 23.5999 17.3 23.7999C17.5 23.9999 17.4 24.2999 17.2 24.4999C16.7 24.8999 16.3 25.2999 15.8 25.7999C15.6 25.8999 15.5 25.8999 15.4 25.8999ZM18.4 23.5999C18.2 23.5999 18.1 23.4999 18 23.2999C17.9 23.0999 18 22.7999 18.2 22.6999C18.5 22.5999 18.7 22.4999 19 22.2999C19.4 22.1999 19.7 21.9999 20 21.8999C20.2 21.7999 20.5 21.8999 20.6 22.1999C20.7 22.3999 20.6 22.6999 20.3 22.7999C20 22.8999 19.6 23.0999 19.3 23.1999C19.1 23.2999 18.8 23.3999 18.6 23.4999C18.6 23.4999 18.5 23.5999 18.4 23.5999ZM22 22.0999C21.8 22.0999 21.6 21.9999 21.6 21.7999C21.5 21.5999 21.6 21.2999 21.9 21.1999C22.6 20.8999 23.2 20.6999 23.7 20.4999C23.9 20.3999 24.2 20.4999 24.3 20.7999C24.4 20.9999 24.3 21.2999 24 21.3999C23.4 21.5999 22.8 21.8999 22.2 22.0999C22.1 21.9999 22.1 22.0999 22 22.0999ZM25.6 20.4999C25.4 20.4999 25.3 20.3999 25.2 20.1999C25.1 19.9999 25.2 19.6999 25.4 19.5999C26.1 19.2999 26.6 18.9999 27.1 18.6999C27.3 18.5999 27.6 18.5999 27.8 18.8999C27.9 19.0999 27.9 19.3999 27.6 19.4999C27.1 19.7999 26.5 20.0999 25.8 20.3999C25.8 20.4999 25.7 20.4999 25.6 20.4999ZM28.9 18.3999C28.8 18.3999 28.7 18.3999 28.6 18.2999C28.4 18.0999 28.4 17.7999 28.6 17.5999C29 17.1999 29.3 16.6999 29.6 16.0999C29.7 15.8999 30 15.7999 30.2 15.8999C30.4 15.9999 30.5 16.2999 30.4 16.4999C30.1 17.1999 29.7 17.6999 29.2 18.1999C29.1 18.3999 29 18.3999 28.9 18.3999Z" fill="#495747"></path><path d="M30.7 15H30.6C30.4 14.9 30.2 14.7 30.3 14.4C30.4 14.1 30.5 13.8 30.6 13.5C30.7 13.2 30.9 13.1 31.2 13.2C31.5 13.3 31.6 13.5 31.5 13.8C31.4 14.1 31.3 14.4 31.2 14.7C31.1 14.9 30.9 15 30.7 15Z" fill="#495747"></path><path d="M31 0C29.8 0 25.5 0.6 25.5 5.9C25.5 9.6 29.2 12.9 30.5 13.9C30.8 14.1 31.1 14.1 31.4 13.9C32.7 12.9 36.4 9.6 36.4 5.9C36.4 0.6 32.1 0 31 0ZM31.3 6.5C30.1 6.7 29.1 5.7 29.4 4.6C29.5 4 30 3.4 30.6 3.3C31.8 3.1 32.8 4.1 32.5 5.2C32.5 5.9 31.9 6.4 31.3 6.5Z" fill="#AFD0B8"></path></g><defs><clipPath id="clip0"><rect width="40.6" height="44.2" fill="white"></rect></clipPath></defs></svg>';
var signInIcon = '<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M24.968 39.8224C24.879 39.8224 24.7454 39.8224 24.6564 39.778L4.71762 36.404C3.69398 36.2264 3.02638 35.2497 3.1599 34.2286L8.32263 3.99556C8.41164 3.50721 8.67868 3.06326 9.07923 2.79689C9.47979 2.48612 9.96936 2.39733 10.5034 2.48612L30.4422 5.86015C31.4659 6.03773 32.1335 7.01443 32 8.03552L26.7927 38.2686C26.6592 39.2009 25.8581 39.8224 24.968 39.8224ZM10.1919 3.28524C9.96936 3.28524 9.79133 3.32963 9.61331 3.46282C9.39078 3.596 9.25726 3.86237 9.21275 4.08435L4.05003 34.4062C3.96101 34.939 4.31706 35.4717 4.85114 35.5605L24.7899 38.9345C25.324 39.0233 25.8581 38.6681 25.9471 38.1354L31.1098 7.85793C31.1988 7.32519 30.8428 6.79245 30.3087 6.70366L10.3699 3.32963C10.3254 3.28524 10.2364 3.28524 10.1919 3.28524Z" fill="#495747"></path><path d="M24.1224 3.06402C23.6773 2.97522 23.3213 2.62006 23.2768 2.17611C23.1433 1.11063 22.2977 0.178333 21.185 0.00075252C20.0723 -0.176828 19.0042 0.400309 18.5146 1.377C18.2921 1.77656 17.847 1.99853 17.402 1.90974L16.4228 1.77656C15.9333 1.68777 15.4882 1.99853 15.3992 2.48688L14.9541 5.19498C14.8651 5.68333 15.1767 6.12728 15.6662 6.21607L24.3894 7.68111C24.879 7.7699 25.3241 7.45913 25.4131 6.97079L25.8582 4.26268C25.9472 3.77434 25.6356 3.33039 25.1461 3.2416L24.1224 3.06402Z" fill="#AFD0B8"></path><path d="M20.8734 2.35294C21.1437 2.35294 21.3629 2.1343 21.3629 1.8646C21.3629 1.59489 21.1437 1.37625 20.8734 1.37625C20.603 1.37625 20.3838 1.59489 20.3838 1.8646C20.3838 2.1343 20.603 2.35294 20.8734 2.35294Z" fill="white"></path><path d="M28.6621 11.2764C28.6176 11.2764 28.6176 11.2764 28.5731 11.2764L10.4146 8.16871C10.192 8.12431 10.014 7.90234 10.0585 7.63597C10.103 7.41399 10.3255 7.23641 10.5926 7.2808L28.7511 10.3885C28.9737 10.4329 29.1517 10.6548 29.1072 10.9212C29.0627 11.1432 28.8847 11.2764 28.6621 11.2764Z" fill="#495747"></path><path d="M26.6148 23.3962C26.5702 23.3962 26.5702 23.3962 26.5257 23.3962L8.36719 20.2886C8.14466 20.2442 7.96663 20.0222 8.01114 19.7558C8.05564 19.5339 8.27818 19.3563 8.54521 19.4007L26.7038 22.5083C26.9263 22.5527 27.1043 22.7747 27.0598 23.0411C27.0153 23.2187 26.7928 23.3962 26.6148 23.3962Z" fill="#495747"></path><path d="M24.523 35.5161C24.4785 35.5161 24.4785 35.5161 24.4339 35.5161L6.27539 32.4084C6.05286 32.364 5.87483 32.1421 5.91934 31.8757C5.96385 31.6537 6.18638 31.4761 6.45342 31.5205L24.612 34.6282C24.8345 34.6726 25.0125 34.8945 24.968 35.1609C24.9235 35.3385 24.7455 35.5161 24.523 35.5161Z" fill="#495747"></path><path d="M21.8081 14.2508C21.7636 14.2508 21.7636 14.2508 21.7191 14.2508L9.74695 12.2087C9.52442 12.1643 9.34639 11.9423 9.3909 11.6759C9.43541 11.4539 9.65794 11.2764 9.92497 11.3208L21.8972 13.3629C22.1197 13.4073 22.2977 13.6293 22.2532 13.8957C22.2087 14.1176 22.0307 14.2508 21.8081 14.2508Z" fill="#495747"></path><path d="M27.9945 15.3163C27.95 15.3163 27.95 15.3163 27.9055 15.3163L23.3658 14.5616C23.1433 14.5172 22.9653 14.2952 23.0098 14.0288C23.0543 13.8069 23.2768 13.6293 23.5439 13.6737L28.039 14.4284C28.2615 14.4728 28.4396 14.6948 28.3951 14.9611C28.3951 15.1831 28.1725 15.3163 27.9945 15.3163Z" fill="#495747"></path><path d="M11.9723 16.7369C11.9277 16.7369 11.9277 16.7369 11.8832 16.7369L9.07935 16.2486C8.85681 16.2042 8.67879 15.9822 8.7233 15.7159C8.7678 15.4939 8.99033 15.3163 9.25737 15.3607L12.0613 15.849C12.2838 15.8934 12.4618 16.1154 12.4173 16.3818C12.3728 16.6038 12.1503 16.7369 11.9723 16.7369Z" fill="#495747"></path><path d="M27.2824 19.3562C27.2379 19.3562 27.2379 19.3562 27.1934 19.3562L13.619 17.0477C13.3965 17.0033 13.2185 16.7813 13.263 16.515C13.3075 16.293 13.53 16.1154 13.797 16.1598L27.3715 18.4683C27.594 18.5127 27.772 18.7347 27.7275 19.0011C27.683 19.2231 27.505 19.3562 27.2824 19.3562Z" fill="#495747"></path><path d="M19.7163 26.3707C19.6718 26.3707 19.6718 26.3707 19.6273 26.3707L7.65515 24.3285C7.43262 24.2841 7.2546 24.0622 7.2991 23.7958C7.34361 23.5738 7.56614 23.3962 7.83318 23.4406L19.8054 25.4828C20.0279 25.5272 20.2059 25.7492 20.1614 26.0155C20.1169 26.2375 19.9389 26.3707 19.7163 26.3707Z" fill="#495747"></path><path d="M25.9027 27.4362C25.8582 27.4362 25.8582 27.4362 25.8137 27.4362L21.274 26.6371C21.0515 26.5927 20.8735 26.3707 20.918 26.1043C20.9625 25.8823 21.185 25.7048 21.4521 25.7492L25.9917 26.5039C26.2142 26.5483 26.3923 26.7702 26.3478 27.0366C26.3033 27.2586 26.1252 27.4362 25.9027 27.4362Z" fill="#495747"></path><path d="M9.88046 28.8568C9.83595 28.8568 9.83595 28.8568 9.79144 28.8568L6.98755 28.3685C6.76502 28.3241 6.58699 28.1021 6.6315 27.8357C6.67601 27.6138 6.89854 27.4362 7.16557 27.4806L9.96947 27.9689C10.192 28.0133 10.37 28.2353 10.3255 28.5017C10.281 28.6792 10.103 28.8568 9.88046 28.8568Z" fill="#495747"></path><path d="M25.2351 31.4761C25.1906 31.4761 25.1906 31.4761 25.1461 31.4761L11.5717 29.1676C11.3491 29.1232 11.1711 28.9012 11.2156 28.6348C11.2601 28.4129 11.4826 28.2353 11.7497 28.2797L25.3241 30.5882C25.5466 30.6326 25.7246 30.8546 25.6801 31.121C25.6356 31.2985 25.4131 31.4761 25.2351 31.4761Z" fill="#495747"></path><path d="M2.93742 20.5549L1.95828 19.0899C1.86927 18.9567 1.64674 18.9567 1.60223 19.1343L1.06816 20.8213L0.489575 22.6859C0.445068 22.8191 0.445068 22.9523 0.445068 23.1299L2.67038 38.9789C2.71489 39.3785 3.07094 39.6448 3.47149 39.6004L5.78582 39.2897C6.18638 39.2453 6.45341 38.8901 6.40891 38.4906L4.18359 22.6415C4.18359 22.5083 4.09458 22.3307 4.00557 22.1976L2.93742 20.5549Z" fill="white"></path><path d="M3.38248 40C3.11544 40 2.89291 39.9556 2.67038 39.778C2.40334 39.6004 2.26982 39.3341 2.22532 39.0233L2.48104e-06 23.1742C-0.0445038 22.9523 2.48104e-06 22.7303 0.0445087 22.5083L1.15717 18.9567C1.24618 18.7347 1.4242 18.5571 1.69124 18.5128C1.95828 18.4684 2.18081 18.6015 2.31433 18.7791L4.36162 21.8868C4.49513 22.0644 4.53964 22.2863 4.58415 22.5083L6.80946 38.3574C6.85397 38.6681 6.76495 38.9789 6.58693 39.2009C6.4089 39.4229 6.14187 39.6004 5.83032 39.6448L3.5605 40C3.516 40 3.42698 40 3.38248 40ZM1.86927 19.7558L0.934634 22.8191C0.890128 22.9079 0.890128 22.9967 0.890128 23.0855L3.11544 38.9345C3.11544 39.0233 3.15995 39.0677 3.20445 39.1121C3.24896 39.1565 3.33797 39.1565 3.38248 39.1565L5.6968 38.8457C5.78582 38.8457 5.83032 38.8013 5.87483 38.7569C5.91933 38.7125 5.91933 38.6237 5.91933 38.5793L3.69402 22.7303C3.69402 22.6415 3.64952 22.5527 3.60501 22.4639L1.86927 19.7558Z" fill="#495747"></path><path d="M1.15723 20.4217L2.67044 20.2441L1.91383 19.0899L1.15723 20.4217Z" fill="#495747"></path><path d="M0.756592 20.7325L1.86925 18.6459L3.02641 20.4217L0.756592 20.7325ZM1.91375 19.4894L1.5577 20.1554L2.2698 20.0666L1.91375 19.4894Z" fill="#495747"></path></g><defs><clipPath id="clip0"><rect width="32" height="40" fill="white"></rect></clipPath></defs></svg>';
var signOutIcon = '<svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3149 14.8934C14.9832 14.8934 14.762 15.1124 14.762 15.4409V16.9193C14.762 17.4669 14.4303 17.9049 14.0433 17.9049H1.82452C1.4375 17.9049 1.10577 17.4669 1.10577 16.9193V2.08069C1.10577 1.53314 1.4375 1.0951 1.82452 1.0951H14.0986C14.4856 1.0951 14.8173 1.53314 14.8173 2.08069V3.44957C14.8173 3.7781 15.0385 3.99712 15.3702 3.99712C15.7019 3.99712 15.9231 3.7781 15.9231 3.44957V2.08069C15.9231 0.930836 15.0938 0 14.0986 0H1.82452C0.829327 0 0 0.930836 0 2.08069V16.9193C0 18.0692 0.829327 19 1.82452 19H14.0986C15.0938 19 15.9231 18.0692 15.9231 16.9193V15.4409C15.8678 15.1124 15.6466 14.8934 15.3149 14.8934Z" fill="#495747"></path><path d="M22.8342 9.08933L18.0241 4.32564C17.8029 4.10662 17.4712 4.10662 17.25 4.32564C17.0289 4.54466 17.0289 4.87319 17.25 5.09221L21.1202 8.92506H8.56973C8.238 8.92506 8.01685 9.14408 8.01685 9.47262C8.01685 9.80115 8.238 10.0202 8.56973 10.0202H21.0649L17.1947 13.853C16.9736 14.072 16.9736 14.4006 17.1947 14.6196C17.3053 14.7291 17.4712 14.7839 17.5817 14.7839C17.6923 14.7839 17.8582 14.7291 17.9688 14.6196L22.7789 9.8559C22.8894 9.74639 22.9447 9.63688 22.9447 9.47262C22.9447 9.30835 22.9447 9.19884 22.8342 9.08933Z" fill="#495747"></path></svg>';
var NavLink_svelte_svelte_type_style_lang = "";
function create_fragment$9(ctx) {
  let a;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[5].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], null);
  return {
    c() {
      a = element("a");
      if (default_slot)
        default_slot.c();
      attr(a, "href", ctx[0]);
      attr(a, "target", ctx[2]);
      attr(a, "class", "svelte-c8fwb");
      toggle_class(a, "active", ctx[1] ? ctx[3]("/index") : ctx[3](ctx[0]));
    },
    m(target, anchor) {
      insert(target, a, anchor);
      if (default_slot) {
        default_slot.m(a, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(a, "click", ctx[6]),
          listen(a, "click", ctx[7])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[4], !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(default_slot_template, ctx2[4], dirty, null), null);
        }
      }
      if (!current || dirty & 1) {
        attr(a, "href", ctx2[0]);
      }
      if (!current || dirty & 4) {
        attr(a, "target", ctx2[2]);
      }
      if (dirty & 11) {
        toggle_class(a, "active", ctx2[1] ? ctx2[3]("/index") : ctx2[3](ctx2[0]));
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
      if (detaching)
        detach(a);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let $isActive;
  component_subscribe($$self, isActive, ($$value) => $$invalidate(3, $isActive = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href } = $$props;
  let { isHome = false } = $$props;
  let { target = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("href" in $$props2)
      $$invalidate(0, href = $$props2.href);
    if ("isHome" in $$props2)
      $$invalidate(1, isHome = $$props2.isHome);
    if ("target" in $$props2)
      $$invalidate(2, target = $$props2.target);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [
    href,
    isHome,
    target,
    $isActive,
    $$scope,
    slots,
    click_handler,
    click_handler_1
  ];
}
class NavLink extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$9, safe_not_equal, { href: 0, isHome: 1, target: 2 });
  }
}
var UserDropdown_svelte_svelte_type_style_lang = "";
function create_if_block$3(ctx) {
  let ul;
  let li0;
  let a0;
  let i0;
  let t0;
  let t1_value = ctx[2]("generics.chat") + "";
  let t1;
  let a0_href_value;
  let t2;
  let li1;
  let a1;
  let i1;
  let t3;
  let t4_value = ctx[2]("generics.account") + "";
  let t4;
  let a1_href_value;
  let t5;
  let li2;
  let a2;
  let i2;
  let t6;
  let t7_value = ctx[2]("generics.sign-out") + "";
  let t7;
  let a2_href_value;
  let ul_transition;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      i0 = element("i");
      t0 = space();
      t1 = text(t1_value);
      t2 = space();
      li1 = element("li");
      a1 = element("a");
      i1 = element("i");
      t3 = space();
      t4 = text(t4_value);
      t5 = space();
      li2 = element("li");
      a2 = element("a");
      i2 = element("i");
      t6 = space();
      t7 = text(t7_value);
      attr(i0, "class", "svelte-ec6v4z");
      attr(a0, "href", a0_href_value = routes.CHAT);
      attr(a0, "class", "svelte-ec6v4z");
      attr(li0, "class", "svelte-ec6v4z");
      attr(i1, "class", "svelte-ec6v4z");
      attr(a1, "href", a1_href_value = routes.ACCOUNT);
      attr(a1, "class", "svelte-ec6v4z");
      attr(li1, "class", "svelte-ec6v4z");
      attr(i2, "class", "svelte-ec6v4z");
      attr(a2, "href", a2_href_value = routes.HOME);
      attr(a2, "class", "svelte-ec6v4z");
      attr(li2, "class", "separated svelte-ec6v4z");
      attr(ul, "class", "user-dropdown svelte-ec6v4z");
    },
    m(target, anchor) {
      insert(target, ul, anchor);
      append(ul, li0);
      append(li0, a0);
      append(a0, i0);
      i0.innerHTML = chatIcon;
      append(a0, t0);
      append(a0, t1);
      append(ul, t2);
      append(ul, li1);
      append(li1, a1);
      append(a1, i1);
      i1.innerHTML = userIcon;
      append(a1, t3);
      append(a1, t4);
      append(ul, t5);
      append(ul, li2);
      append(li2, a2);
      append(a2, i2);
      i2.innerHTML = signOutIcon;
      append(a2, t6);
      append(a2, t7);
      current = true;
      if (!mounted) {
        dispose = [
          listen(a0, "click", ctx[3]),
          listen(a1, "click", ctx[3]),
          listen(a2, "click", prevent_default(ctx[5]))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 4) && t1_value !== (t1_value = ctx2[2]("generics.chat") + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & 4) && t4_value !== (t4_value = ctx2[2]("generics.account") + ""))
        set_data(t4, t4_value);
      if ((!current || dirty & 4) && t7_value !== (t7_value = ctx2[2]("generics.sign-out") + ""))
        set_data(t7, t7_value);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!ul_transition)
          ul_transition = create_bidirectional_transition(ul, slide, { duration: 300 }, true);
        ul_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!ul_transition)
        ul_transition = create_bidirectional_transition(ul, slide, { duration: 300 }, false);
      ul_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      if (detaching && ul_transition)
        ul_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$8(ctx) {
  let li;
  let button;
  let div;
  let t0_value = ctx[0].charAt(0).toUpperCase() + "";
  let t0;
  let t1;
  let span;
  let t2;
  let t3;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block$3(ctx);
  return {
    c() {
      li = element("li");
      button = element("button");
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      span = element("span");
      t2 = text(ctx[0]);
      t3 = space();
      if (if_block)
        if_block.c();
      attr(div, "class", "user-avatar svelte-ec6v4z");
      attr(span, "class", "svelte-ec6v4z");
      attr(button, "class", "button-container user-button svelte-ec6v4z");
      attr(li, "class", "user svelte-ec6v4z");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, button);
      append(button, div);
      append(div, t0);
      append(button, t1);
      append(button, span);
      append(span, t2);
      append(li, t3);
      if (if_block)
        if_block.m(li, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button, "click", ctx[3]),
          action_destroyer(clickOutside.call(null, li)),
          listen(li, "click-outside", ctx[4])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx2[0].charAt(0).toUpperCase() + ""))
        set_data(t0, t0_value);
      if (!current || dirty & 1)
        set_data(t2, ctx2[0]);
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(li, null);
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
      if (detaching)
        detach(li);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(2, $_ = $$value));
  let { name } = $$props;
  let isOpen = false;
  const toggleOpen = () => $$invalidate(1, isOpen = !isOpen);
  const handleClickOutsideDropdown = () => {
    if (isOpen)
      toggleOpen();
  };
  const click_handler = async () => {
    toggleOpen();
    await logout();
    window.location = "/";
  };
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
  };
  return [name, isOpen, $_, toggleOpen, handleClickOutsideDropdown, click_handler];
}
class UserDropdown extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$8, safe_not_equal, { name: 0 });
  }
}
var TopNav_svelte_svelte_type_style_lang = "";
function create_if_block_1$1(ctx) {
  let t;
  return {
    c() {
      t = text("Leisure Cooperative");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_5(ctx) {
  let t_value = ctx[3]("generics.home") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("generics.home") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_4(ctx) {
  let t_value = ctx[3]("generics.map") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("generics.map") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_3(ctx) {
  let t_value = ctx[3]("generics.rules") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("generics.rules") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_2(ctx) {
  let t_value = ctx[3]("generics.faq.acronym") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("generics.faq.acronym") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1(ctx) {
  let t_value = ctx[3]("generics.slowby") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("generics.slowby") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_else_block$1(ctx) {
  let li;
  let navlink;
  let current;
  navlink = new NavLink({
    props: {
      href: routes.SIGN_IN,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      li = element("li");
      create_component(navlink.$$.fragment);
      attr(li, "class", "svelte-1o2hekq");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      mount_component(navlink, li, null);
      current = true;
    },
    p(ctx2, dirty) {
      const navlink_changes = {};
      if (dirty & 24) {
        navlink_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navlink.$set(navlink_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navlink.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navlink.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_component(navlink);
    }
  };
}
function create_if_block$2(ctx) {
  let userdropdown;
  let current;
  userdropdown = new UserDropdown({
    props: { name: ctx[1] || "" }
  });
  return {
    c() {
      create_component(userdropdown.$$.fragment);
    },
    m(target, anchor) {
      mount_component(userdropdown, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const userdropdown_changes = {};
      if (dirty & 2)
        userdropdown_changes.name = ctx2[1] || "";
      userdropdown.$set(userdropdown_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(userdropdown.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(userdropdown.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(userdropdown, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let t_value = ctx[3]("generics.sign-in") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("generics.sign-in") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$7(ctx) {
  let nav;
  let a;
  let h1;
  let show_if = !ctx[2]("/index");
  let t0;
  let ul;
  let li0;
  let navlink0;
  let t1;
  let li1;
  let navlink1;
  let t2;
  let li2;
  let navlink2;
  let t3;
  let li3;
  let navlink3;
  let t4;
  let li4;
  let navlink4;
  let t5;
  let current_block_type_index;
  let if_block1;
  let current;
  let if_block0 = show_if && create_if_block_1$1();
  navlink0 = new NavLink({
    props: {
      href: routes.HOME,
      isHome: true,
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  navlink1 = new NavLink({
    props: {
      href: routes.MAP,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  navlink2 = new NavLink({
    props: {
      href: routes.RULES,
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  navlink3 = new NavLink({
    props: {
      href: routes.FAQ,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  navlink4 = new NavLink({
    props: {
      href: ctx[3]("index.slowby.banner.url"),
      target: "_blank",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  const if_block_creators = [create_if_block$2, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      nav = element("nav");
      a = element("a");
      h1 = element("h1");
      if (if_block0)
        if_block0.c();
      t0 = space();
      ul = element("ul");
      li0 = element("li");
      create_component(navlink0.$$.fragment);
      t1 = space();
      li1 = element("li");
      create_component(navlink1.$$.fragment);
      t2 = space();
      li2 = element("li");
      create_component(navlink2.$$.fragment);
      t3 = space();
      li3 = element("li");
      create_component(navlink3.$$.fragment);
      t4 = space();
      li4 = element("li");
      create_component(navlink4.$$.fragment);
      t5 = space();
      if_block1.c();
      attr(h1, "class", "svelte-1o2hekq");
      attr(a, "href", routes.HOME);
      attr(a, "class", "title svelte-1o2hekq");
      attr(li0, "class", "svelte-1o2hekq");
      attr(li1, "class", "svelte-1o2hekq");
      attr(li2, "class", "svelte-1o2hekq");
      attr(li3, "class", "svelte-1o2hekq");
      attr(li4, "class", "svelte-1o2hekq");
      attr(ul, "class", "svelte-1o2hekq");
      attr(nav, "class", "svelte-1o2hekq");
    },
    m(target, anchor) {
      insert(target, nav, anchor);
      append(nav, a);
      append(a, h1);
      if (if_block0)
        if_block0.m(h1, null);
      append(nav, t0);
      append(nav, ul);
      append(ul, li0);
      mount_component(navlink0, li0, null);
      append(ul, t1);
      append(ul, li1);
      mount_component(navlink1, li1, null);
      append(ul, t2);
      append(ul, li2);
      mount_component(navlink2, li2, null);
      append(ul, t3);
      append(ul, li3);
      mount_component(navlink3, li3, null);
      append(ul, t4);
      append(ul, li4);
      mount_component(navlink4, li4, null);
      append(ul, t5);
      if_blocks[current_block_type_index].m(ul, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 4)
        show_if = !ctx2[2]("/index");
      if (show_if) {
        if (if_block0)
          ;
        else {
          if_block0 = create_if_block_1$1();
          if_block0.c();
          if_block0.m(h1, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      const navlink0_changes = {};
      if (dirty & 24) {
        navlink0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navlink0.$set(navlink0_changes);
      const navlink1_changes = {};
      if (dirty & 24) {
        navlink1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navlink1.$set(navlink1_changes);
      const navlink2_changes = {};
      if (dirty & 24) {
        navlink2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navlink2.$set(navlink2_changes);
      const navlink3_changes = {};
      if (dirty & 24) {
        navlink3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navlink3.$set(navlink3_changes);
      const navlink4_changes = {};
      if (dirty & 8)
        navlink4_changes.href = ctx2[3]("index.slowby.banner.url");
      if (dirty & 24) {
        navlink4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navlink4.$set(navlink4_changes);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(ul, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(navlink0.$$.fragment, local);
      transition_in(navlink1.$$.fragment, local);
      transition_in(navlink2.$$.fragment, local);
      transition_in(navlink3.$$.fragment, local);
      transition_in(navlink4.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(navlink0.$$.fragment, local);
      transition_out(navlink1.$$.fragment, local);
      transition_out(navlink2.$$.fragment, local);
      transition_out(navlink3.$$.fragment, local);
      transition_out(navlink4.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(nav);
      if (if_block0)
        if_block0.d();
      destroy_component(navlink0);
      destroy_component(navlink1);
      destroy_component(navlink2);
      destroy_component(navlink3);
      destroy_component(navlink4);
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let firstName;
  let $user;
  let $isActive;
  let $_;
  component_subscribe($$self, user, ($$value) => $$invalidate(0, $user = $$value));
  component_subscribe($$self, isActive, ($$value) => $$invalidate(2, $isActive = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(3, $_ = $$value));
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, firstName = $user ? $user.firstName : "");
    }
  };
  return [$user, firstName, $isActive, $_];
}
class TopNav extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$7, safe_not_equal, {});
  }
}
var Hamburger_svelte_svelte_type_style_lang = "";
function create_fragment$6(ctx) {
  let button;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      button.innerHTML = `<span class="svelte-1o1u96"></span>`;
      attr(button, "class", "button-container svelte-1o1u96");
      toggle_class(button, "open", ctx[1]);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      ctx[3](button);
      if (!mounted) {
        dispose = listen(button, "click", ctx[2]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 2) {
        toggle_class(button, "open", ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      ctx[3](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { isOpen = false } = $$props;
  let { hamburger = null } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      hamburger = $$value;
      $$invalidate(0, hamburger);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("isOpen" in $$props2)
      $$invalidate(1, isOpen = $$props2.isOpen);
    if ("hamburger" in $$props2)
      $$invalidate(0, hamburger = $$props2.hamburger);
  };
  return [hamburger, isOpen, click_handler, button_binding];
}
class Hamburger extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$6, safe_not_equal, { isOpen: 1, hamburger: 0 });
  }
}
var Socials_svelte_svelte_type_style_lang = "";
function create_fragment$5(ctx) {
  let ul;
  return {
    c() {
      ul = element("ul");
      ul.innerHTML = `<li class="svelte-6f75it"><a href="https://www.facebook.com/Welcome2mygarden/" target="_blank" class="svelte-6f75it"><img src="/images/icons/facebook.svg" alt="Facebook" class="svelte-6f75it"/></a></li> 
  <li class="svelte-6f75it"><a href="https://opencollective.com/welcometomygarden" target="_blank" class="svelte-6f75it"><img src="/images/icons/open-collective.svg" alt="Open Collective" class="svelte-6f75it"/></a></li> 
  <li class="svelte-6f75it"><a href="https://github.com/welcometomygarden" target="_blank" class="svelte-6f75it"><img src="/images/icons/github.svg" alt="GitHub" class="svelte-6f75it"/></a></li> 
  <li class="svelte-6f75it"><a href="https://join.slack.com/t/welcometomygarden/shared_invite/zt-f31i37dj-_zFgnfe40B6EexJuB2f_~w" target="_blank" class="svelte-6f75it"><img src="/images/icons/slack.svg" alt="Slack" class="svelte-6f75it"/></a></li> 
  <li class="svelte-6f75it"><a href="mailto:support@welcometomygarden.org" target="_blank" class="svelte-6f75it"><img src="/images/icons/email.svg" alt="Mail" class="svelte-6f75it"/></a></li>`;
      attr(ul, "class", "socials svelte-6f75it");
      toggle_class(ul, "medium", ctx[0]);
      toggle_class(ul, "small", ctx[1]);
    },
    m(target, anchor) {
      insert(target, ul, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        toggle_class(ul, "medium", ctx2[0]);
      }
      if (dirty & 2) {
        toggle_class(ul, "small", ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(ul);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { medium = true } = $$props;
  let { small = false } = $$props;
  $$self.$$set = ($$props2) => {
    if ("medium" in $$props2)
      $$invalidate(0, medium = $$props2.medium);
    if ("small" in $$props2)
      $$invalidate(1, small = $$props2.small);
  };
  return [medium, small];
}
class Socials extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$5, safe_not_equal, { medium: 0, small: 1 });
  }
}
const LANGUAGES_LIST = {
  aa: {
    name: "Afar",
    nativeName: "Afaraf"
  },
  ab: {
    name: "Abkhaz",
    nativeName: "\u0430\u04A7\u0441\u0443\u0430 \u0431\u044B\u0437\u0448\u04D9\u0430"
  },
  ae: {
    name: "Avestan",
    nativeName: "avesta"
  },
  af: {
    name: "Afrikaans",
    nativeName: "Afrikaans"
  },
  ak: {
    name: "Akan",
    nativeName: "Akan"
  },
  am: {
    name: "Amharic",
    nativeName: "\u12A0\u121B\u122D\u129B"
  },
  an: {
    name: "Aragonese",
    nativeName: "aragon\xE9s"
  },
  ar: {
    name: "Arabic",
    nativeName: "\u0627\u064E\u0644\u0652\u0639\u064E\u0631\u064E\u0628\u0650\u064A\u064E\u0651\u0629\u064F"
  },
  as: {
    name: "Assamese",
    nativeName: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
  },
  av: {
    name: "Avaric",
    nativeName: "\u0430\u0432\u0430\u0440 \u043C\u0430\u0446\u04C0"
  },
  ay: {
    name: "Aymara",
    nativeName: "aymar aru"
  },
  az: {
    name: "Azerbaijani",
    nativeName: "az\u0259rbaycan dili"
  },
  ba: {
    name: "Bashkir",
    nativeName: "\u0431\u0430\u0448\u04A1\u043E\u0440\u0442 \u0442\u0435\u043B\u0435"
  },
  be: {
    name: "Belarusian",
    nativeName: "\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F \u043C\u043E\u0432\u0430"
  },
  bg: {
    name: "Bulgarian",
    nativeName: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0435\u0437\u0438\u043A"
  },
  bi: {
    name: "Bislama",
    nativeName: "Bislama"
  },
  bm: {
    name: "Bambara",
    nativeName: "bamanankan"
  },
  bn: {
    name: "Bengali",
    nativeName: "\u09AC\u09BE\u0982\u09B2\u09BE"
  },
  bo: {
    name: "Tibetan",
    nativeName: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42"
  },
  br: {
    name: "Breton",
    nativeName: "brezhoneg"
  },
  bs: {
    name: "Bosnian",
    nativeName: "bosanski jezik"
  },
  ca: {
    name: "Catalan",
    nativeName: "Catal\xE0"
  },
  ce: {
    name: "Chechen",
    nativeName: "\u043D\u043E\u0445\u0447\u0438\u0439\u043D \u043C\u043E\u0442\u0442"
  },
  ch: {
    name: "Chamorro",
    nativeName: "Chamoru"
  },
  co: {
    name: "Corsican",
    nativeName: "corsu"
  },
  cr: {
    name: "Cree",
    nativeName: "\u14C0\u1426\u1403\u152D\u140D\u140F\u1423"
  },
  cs: {
    name: "Czech",
    nativeName: "\u010De\u0161tina"
  },
  cu: {
    name: "Old Church Slavonic",
    nativeName: "\u0469\u0437\u044B\u043A\u044A \u0441\u043B\u043E\u0432\u0463\u043D\u044C\u0441\u043A\u044A"
  },
  cv: {
    name: "Chuvash",
    nativeName: "\u0447\u04D1\u0432\u0430\u0448 \u0447\u04D7\u043B\u0445\u0438"
  },
  cy: {
    name: "Welsh",
    nativeName: "Cymraeg"
  },
  da: {
    name: "Danish",
    nativeName: "dansk"
  },
  de: {
    name: "German",
    nativeName: "Deutsch"
  },
  dv: {
    name: "Divehi",
    nativeName: "\u078B\u07A8\u0788\u07AC\u0780\u07A8"
  },
  dz: {
    name: "Dzongkha",
    nativeName: "\u0F62\u0FAB\u0F7C\u0F44\u0F0B\u0F41"
  },
  ee: {
    name: "Ewe",
    nativeName: "E\u028Begbe"
  },
  el: {
    name: "Greek",
    nativeName: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
  },
  en: {
    name: "English",
    nativeName: "English"
  },
  eo: {
    name: "Esperanto",
    nativeName: "Esperanto"
  },
  es: {
    name: "Spanish",
    nativeName: "Espa\xF1ol"
  },
  et: {
    name: "Estonian",
    nativeName: "eesti"
  },
  eu: {
    name: "Basque",
    nativeName: "euskara"
  },
  fa: {
    name: "Persian",
    nativeName: "\u0641\u0627\u0631\u0633\u06CC"
  },
  ff: {
    name: "Fula",
    nativeName: "Fulfulde"
  },
  fi: {
    name: "Finnish",
    nativeName: "suomi"
  },
  fj: {
    name: "Fijian",
    nativeName: "vosa Vakaviti"
  },
  fo: {
    name: "Faroese",
    nativeName: "f\xF8royskt"
  },
  fr: {
    name: "French",
    nativeName: "Fran\xE7ais"
  },
  fy: {
    name: "Western Frisian",
    nativeName: "Frysk"
  },
  ga: {
    name: "Irish",
    nativeName: "Gaeilge"
  },
  gd: {
    name: "Scottish Gaelic",
    nativeName: "G\xE0idhlig"
  },
  gl: {
    name: "Galician",
    nativeName: "galego"
  },
  gn: {
    name: "Guaran\xED",
    nativeName: "Ava\xF1e'\u1EBD"
  },
  gu: {
    name: "Gujarati",
    nativeName: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
  },
  gv: {
    name: "Manx",
    nativeName: "Gaelg"
  },
  ha: {
    name: "Hausa",
    nativeName: "\u0647\u064E\u0648\u064F\u0633\u064E"
  },
  he: {
    name: "Hebrew",
    nativeName: "\u05E2\u05D1\u05E8\u05D9\u05EA"
  },
  hi: {
    name: "Hindi",
    nativeName: "\u0939\u093F\u0928\u094D\u0926\u0940"
  },
  ho: {
    name: "Hiri Motu",
    nativeName: "Hiri Motu"
  },
  hr: {
    name: "Croatian",
    nativeName: "Hrvatski"
  },
  ht: {
    name: "Haitian",
    nativeName: "Krey\xF2l ayisyen"
  },
  hu: {
    name: "Hungarian",
    nativeName: "magyar"
  },
  hy: {
    name: "Armenian",
    nativeName: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
  },
  hz: {
    name: "Herero",
    nativeName: "Otjiherero"
  },
  ia: {
    name: "Interlingua",
    nativeName: "Interlingua"
  },
  id: {
    name: "Indonesian",
    nativeName: "Bahasa Indonesia"
  },
  ie: {
    name: "Interlingue",
    nativeName: "Interlingue"
  },
  ig: {
    name: "Igbo",
    nativeName: "As\u1EE5s\u1EE5 Igbo"
  },
  ii: {
    name: "Nuosu",
    nativeName: "\uA188\uA320\uA4BF Nuosuhxop"
  },
  ik: {
    name: "Inupiaq",
    nativeName: "I\xF1upiaq"
  },
  io: {
    name: "Ido",
    nativeName: "Ido"
  },
  is: {
    name: "Icelandic",
    nativeName: "\xCDslenska"
  },
  it: {
    name: "Italian",
    nativeName: "Italiano"
  },
  iu: {
    name: "Inuktitut",
    nativeName: "\u1403\u14C4\u1483\u144E\u1450\u1466"
  },
  ja: {
    name: "Japanese",
    nativeName: "\u65E5\u672C\u8A9E"
  },
  jv: {
    name: "Javanese",
    nativeName: "basa Jawa"
  },
  ka: {
    name: "Georgian",
    nativeName: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
  },
  kg: {
    name: "Kongo",
    nativeName: "Kikongo"
  },
  ki: {
    name: "Kikuyu",
    nativeName: "G\u0129k\u0169y\u0169"
  },
  kj: {
    name: "Kwanyama",
    nativeName: "Kuanyama"
  },
  kk: {
    name: "Kazakh",
    nativeName: "\u049B\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456"
  },
  kl: {
    name: "Kalaallisut",
    nativeName: "kalaallisut"
  },
  km: {
    name: "Khmer",
    nativeName: "\u1781\u17C1\u1798\u179A\u1797\u17B6\u179F\u17B6"
  },
  kn: {
    name: "Kannada",
    nativeName: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
  },
  ko: {
    name: "Korean",
    nativeName: "\uD55C\uAD6D\uC5B4"
  },
  kr: {
    name: "Kanuri",
    nativeName: "Kanuri"
  },
  ks: {
    name: "Kashmiri",
    nativeName: "\u0915\u0936\u094D\u092E\u0940\u0930\u0940"
  },
  ku: {
    name: "Kurdish",
    nativeName: "Kurd\xEE"
  },
  kv: {
    name: "Komi",
    nativeName: "\u043A\u043E\u043C\u0438 \u043A\u044B\u0432"
  },
  kw: {
    name: "Cornish",
    nativeName: "Kernewek"
  },
  ky: {
    name: "Kyrgyz",
    nativeName: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430"
  },
  la: {
    name: "Latin",
    nativeName: "latine"
  },
  lb: {
    name: "Luxembourgish",
    nativeName: "L\xEBtzebuergesch"
  },
  lg: {
    name: "Ganda",
    nativeName: "Luganda"
  },
  li: {
    name: "Limburgish",
    nativeName: "Limburgs"
  },
  ln: {
    name: "Lingala",
    nativeName: "Ling\xE1la"
  },
  lo: {
    name: "Lao",
    nativeName: "\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7"
  },
  lt: {
    name: "Lithuanian",
    nativeName: "lietuvi\u0173 kalba"
  },
  lu: {
    name: "Luba-Katanga",
    nativeName: "Kiluba"
  },
  lv: {
    name: "Latvian",
    nativeName: "latvie\u0161u valoda"
  },
  mg: {
    name: "Malagasy",
    nativeName: "fiteny malagasy"
  },
  mh: {
    name: "Marshallese",
    nativeName: "Kajin M\u0327aje\u013C"
  },
  mi: {
    name: "M\u0101ori",
    nativeName: "te reo M\u0101ori"
  },
  mk: {
    name: "Macedonian",
    nativeName: "\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 \u0458\u0430\u0437\u0438\u043A"
  },
  ml: {
    name: "Malayalam",
    nativeName: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
  },
  mn: {
    name: "Mongolian",
    nativeName: "\u041C\u043E\u043D\u0433\u043E\u043B \u0445\u044D\u043B"
  },
  mr: {
    name: "Marathi",
    nativeName: "\u092E\u0930\u093E\u0920\u0940"
  },
  ms: {
    name: "Malay",
    nativeName: "Bahasa Melayu"
  },
  mt: {
    name: "Maltese",
    nativeName: "Malti"
  },
  my: {
    name: "Burmese",
    nativeName: "\u1017\u1019\u102C\u1005\u102C"
  },
  na: {
    name: "Nauru",
    nativeName: "Dorerin Naoero"
  },
  nb: {
    name: "Norwegian Bokm\xE5l",
    nativeName: "Norsk bokm\xE5l"
  },
  nd: {
    name: "Northern Ndebele",
    nativeName: "isiNdebele"
  },
  ne: {
    name: "Nepali",
    nativeName: "\u0928\u0947\u092A\u093E\u0932\u0940"
  },
  ng: {
    name: "Ndonga",
    nativeName: "Owambo"
  },
  nl: {
    name: "Dutch",
    nativeName: "Nederlands"
  },
  nn: {
    name: "Norwegian Nynorsk",
    nativeName: "Norsk nynorsk"
  },
  no: {
    name: "Norwegian",
    nativeName: "Norsk"
  },
  nr: {
    name: "Southern Ndebele",
    nativeName: "isiNdebele"
  },
  nv: {
    name: "Navajo",
    nativeName: "Din\xE9 bizaad"
  },
  ny: {
    name: "Chichewa",
    nativeName: "chiChe\u0175a"
  },
  oc: {
    name: "Occitan",
    nativeName: "occitan"
  },
  oj: {
    name: "Ojibwe",
    nativeName: "\u140A\u14C2\u1511\u14C8\u142F\u14A7\u140E\u14D0"
  },
  om: {
    name: "Oromo",
    nativeName: "Afaan Oromoo"
  },
  or: {
    name: "Oriya",
    nativeName: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
  },
  os: {
    name: "Ossetian",
    nativeName: "\u0438\u0440\u043E\u043D \xE6\u0432\u0437\u0430\u0433"
  },
  pa: {
    name: "Panjabi",
    nativeName: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
  },
  pi: {
    name: "P\u0101li",
    nativeName: "\u092A\u093E\u0934\u093F"
  },
  pl: {
    name: "Polish",
    nativeName: "Polski"
  },
  ps: {
    name: "Pashto",
    nativeName: "\u067E\u069A\u062A\u0648"
  },
  pt: {
    name: "Portuguese",
    nativeName: "Portugu\xEAs"
  },
  qu: {
    name: "Quechua",
    nativeName: "Runa Simi"
  },
  rm: {
    name: "Romansh",
    nativeName: "rumantsch grischun"
  },
  rn: {
    name: "Kirundi",
    nativeName: "Ikirundi"
  },
  ro: {
    name: "Romanian",
    nativeName: "Rom\xE2n\u0103"
  },
  ru: {
    name: "Russian",
    nativeName: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
  },
  rw: {
    name: "Kinyarwanda",
    nativeName: "Ikinyarwanda"
  },
  sa: {
    name: "Sanskrit",
    nativeName: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D"
  },
  sc: {
    name: "Sardinian",
    nativeName: "sardu"
  },
  sd: {
    name: "Sindhi",
    nativeName: "\u0938\u093F\u0928\u094D\u0927\u0940"
  },
  se: {
    name: "Northern Sami",
    nativeName: "Davvis\xE1megiella"
  },
  sg: {
    name: "Sango",
    nativeName: "y\xE2ng\xE2 t\xEE s\xE4ng\xF6"
  },
  si: {
    name: "Sinhala",
    nativeName: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
  },
  sk: {
    name: "Slovak",
    nativeName: "sloven\u010Dina"
  },
  sl: {
    name: "Slovenian",
    nativeName: "sloven\u0161\u010Dina"
  },
  sm: {
    name: "Samoan",
    nativeName: "gagana fa'a Samoa"
  },
  sn: {
    name: "Shona",
    nativeName: "chiShona"
  },
  so: {
    name: "Somali",
    nativeName: "Soomaaliga"
  },
  sq: {
    name: "Albanian",
    nativeName: "Shqip"
  },
  sr: {
    name: "Serbian",
    nativeName: "\u0441\u0440\u043F\u0441\u043A\u0438 \u0458\u0435\u0437\u0438\u043A"
  },
  ss: {
    name: "Swati",
    nativeName: "SiSwati"
  },
  st: {
    name: "Southern Sotho",
    nativeName: "Sesotho"
  },
  su: {
    name: "Sundanese",
    nativeName: "Basa Sunda"
  },
  sv: {
    name: "Swedish",
    nativeName: "Svenska"
  },
  sw: {
    name: "Swahili",
    nativeName: "Kiswahili"
  },
  ta: {
    name: "Tamil",
    nativeName: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
  },
  te: {
    name: "Telugu",
    nativeName: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
  },
  tg: {
    name: "Tajik",
    nativeName: "\u0442\u043E\u04B7\u0438\u043A\u04E3"
  },
  th: {
    name: "Thai",
    nativeName: "\u0E44\u0E17\u0E22"
  },
  ti: {
    name: "Tigrinya",
    nativeName: "\u1275\u130D\u122D\u129B"
  },
  tk: {
    name: "Turkmen",
    nativeName: "T\xFCrkmen\xE7e"
  },
  tl: {
    name: "Tagalog",
    nativeName: "Wikang Tagalog"
  },
  tn: {
    name: "Tswana",
    nativeName: "Setswana"
  },
  to: {
    name: "Tonga",
    nativeName: "faka Tonga"
  },
  tr: {
    name: "Turkish",
    nativeName: "T\xFCrk\xE7e"
  },
  ts: {
    name: "Tsonga",
    nativeName: "Xitsonga"
  },
  tt: {
    name: "Tatar",
    nativeName: "\u0442\u0430\u0442\u0430\u0440 \u0442\u0435\u043B\u0435"
  },
  tw: {
    name: "Twi",
    nativeName: "Twi"
  },
  ty: {
    name: "Tahitian",
    nativeName: "Reo Tahiti"
  },
  ug: {
    name: "Uyghur",
    nativeName: "\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5\u200E"
  },
  uk: {
    name: "Ukrainian",
    nativeName: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
  },
  ur: {
    name: "Urdu",
    nativeName: "\u0627\u0631\u062F\u0648"
  },
  uz: {
    name: "Uzbek",
    nativeName: "\u040E\u0437\u0431\u0435\u043A"
  },
  ve: {
    name: "Venda",
    nativeName: "Tshiven\u1E13a"
  },
  vi: {
    name: "Vietnamese",
    nativeName: "Ti\u1EBFng Vi\u1EC7t"
  },
  vo: {
    name: "Volap\xFCk",
    nativeName: "Volap\xFCk"
  },
  wa: {
    name: "Walloon",
    nativeName: "walon"
  },
  wo: {
    name: "Wolof",
    nativeName: "Wollof"
  },
  xh: {
    name: "Xhosa",
    nativeName: "isiXhosa"
  },
  yi: {
    name: "Yiddish",
    nativeName: "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9"
  },
  yo: {
    name: "Yoruba",
    nativeName: "Yor\xF9b\xE1"
  },
  za: {
    name: "Zhuang",
    nativeName: "Sa\u026F cue\u014B\u0185"
  },
  zh: {
    name: "Chinese",
    nativeName: "\u4E2D\u6587"
  },
  zu: {
    name: "Zulu",
    nativeName: "isiZulu"
  }
};
class ISO6391 {
  static getLanguages(codes = []) {
    return codes.map((code) => ({
      code,
      name: ISO6391.getName(code),
      nativeName: ISO6391.getNativeName(code)
    }));
  }
  static getName(code) {
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].name : "";
  }
  static getAllNames() {
    return Object.values(LANGUAGES_LIST).map((l) => l.name);
  }
  static getNativeName(code) {
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].nativeName : "";
  }
  static getAllNativeNames() {
    return Object.values(LANGUAGES_LIST).map((l) => l.nativeName);
  }
  static getCode(name) {
    const code = Object.keys(LANGUAGES_LIST).find((code2) => {
      const language = LANGUAGES_LIST[code2];
      return language.name.toLowerCase() === name.toLowerCase() || language.nativeName.toLowerCase() === name.toLowerCase();
    });
    return code || "";
  }
  static getAllCodes() {
    return Object.keys(LANGUAGES_LIST);
  }
  static validate(code) {
    return LANGUAGES_LIST.hasOwnProperty(code);
  }
}
var LanguageSelector_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i].code;
  child_ctx[4] = list[i].name;
  child_ctx[5] = list[i].nativeName;
  return child_ctx;
}
function create_each_block$1(key_1, ctx) {
  let option;
  let t_value = ctx[5] + "";
  let t;
  let option_value_value;
  return {
    key: key_1,
    first: null,
    c() {
      option = element("option");
      t = text(t_value);
      option.__value = option_value_value = ctx[3];
      option.value = option.__value;
      attr(option, "class", "svelte-quyr6m");
      this.first = option;
    },
    m(target, anchor) {
      insert(target, option, anchor);
      append(option, t);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_fragment$4(ctx) {
  let select;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let mounted;
  let dispose;
  let each_value = ctx[2];
  const get_key = (ctx2) => ctx2[4];
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$1(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$1(key, child_ctx));
  }
  return {
    c() {
      select = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(select, "class", "svelte-quyr6m");
    },
    m(target, anchor) {
      insert(target, select, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }
      select_option(select, ctx[0]);
      if (!mounted) {
        dispose = listen(select, "input", ctx[1]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4) {
        each_value = ctx2[2];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, select, destroy_block, create_each_block$1, null, get_each_context$1);
      }
      if (dirty & 5) {
        select_option(select, ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      mounted = false;
      dispose();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $locale;
  component_subscribe($$self, D, ($$value) => $$invalidate(0, $locale = $$value));
  const setLocale = (event) => {
    D.set(event.target.value);
  };
  let allAvailableLocales = ISO6391.getLanguages(availableLocales);
  return [$locale, setLocale, allAvailableLocales];
}
class LanguageSelector extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$4, safe_not_equal, {});
  }
}
var MobileNav_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i].route;
  child_ctx[11] = list[i].name;
  return child_ctx;
}
function create_else_block(ctx) {
  let li;
  let a;
  let icon;
  let t0;
  let t1_value = ctx[0]("generics.sign-in") + "";
  let t1;
  let current;
  icon = new Icon({ props: { icon: signInIcon } });
  return {
    c() {
      li = element("li");
      a = element("a");
      create_component(icon.$$.fragment);
      t0 = space();
      t1 = text(t1_value);
      attr(a, "href", routes.SIGN_IN);
      attr(a, "class", "svelte-1gjwojp");
      toggle_class(a, "active", ctx[4](routes.SIGN_IN));
      attr(li, "class", "svelte-1gjwojp");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      mount_component(icon, a, null);
      append(a, t0);
      append(a, t1);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0]("generics.sign-in") + ""))
        set_data(t1, t1_value);
      if (dirty & 16) {
        toggle_class(a, "active", ctx2[4](routes.SIGN_IN));
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_component(icon);
    }
  };
}
function create_if_block_1(ctx) {
  let li0;
  let a0;
  let icon0;
  let t0;
  let t1_value = ctx[0]("generics.chat") + "";
  let t1;
  let t2;
  let li1;
  let a1;
  let icon1;
  let t3;
  let t4_value = ctx[0]("generics.account") + "";
  let t4;
  let current;
  icon0 = new Icon({ props: { icon: chatIcon } });
  icon1 = new Icon({ props: { icon: userIcon } });
  return {
    c() {
      li0 = element("li");
      a0 = element("a");
      create_component(icon0.$$.fragment);
      t0 = space();
      t1 = text(t1_value);
      t2 = space();
      li1 = element("li");
      a1 = element("a");
      create_component(icon1.$$.fragment);
      t3 = space();
      t4 = text(t4_value);
      attr(a0, "href", routes.CHAT);
      attr(a0, "class", "svelte-1gjwojp");
      toggle_class(a0, "active", ctx[4](routes.CHAT));
      attr(li0, "class", "svelte-1gjwojp");
      attr(a1, "href", routes.ACCOUNT);
      attr(a1, "class", "svelte-1gjwojp");
      toggle_class(a1, "active", ctx[4](routes.ACCOUNT));
      attr(li1, "class", "svelte-1gjwojp");
    },
    m(target, anchor) {
      insert(target, li0, anchor);
      append(li0, a0);
      mount_component(icon0, a0, null);
      append(a0, t0);
      append(a0, t1);
      insert(target, t2, anchor);
      insert(target, li1, anchor);
      append(li1, a1);
      mount_component(icon1, a1, null);
      append(a1, t3);
      append(a1, t4);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0]("generics.chat") + ""))
        set_data(t1, t1_value);
      if (dirty & 16) {
        toggle_class(a0, "active", ctx2[4](routes.CHAT));
      }
      if ((!current || dirty & 1) && t4_value !== (t4_value = ctx2[0]("generics.account") + ""))
        set_data(t4, t4_value);
      if (dirty & 16) {
        toggle_class(a1, "active", ctx2[4](routes.ACCOUNT));
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li0);
      destroy_component(icon0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(li1);
      destroy_component(icon1);
    }
  };
}
function create_each_block(key_1, ctx) {
  let li;
  let a;
  let t_value = ctx[11] + "";
  let t;
  let a_href_value;
  let mounted;
  let dispose;
  return {
    key: key_1,
    first: null,
    c() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      attr(a, "href", a_href_value = ctx[10]);
      attr(a, "class", "svelte-1gjwojp");
      toggle_class(a, "active", ctx[4](ctx[10]));
      attr(li, "class", "svelte-1gjwojp");
      this.first = li;
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      append(a, t);
      if (!mounted) {
        dispose = listen(a, "click", ctx[6]);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 8 && t_value !== (t_value = ctx[11] + ""))
        set_data(t, t_value);
      if (dirty & 8 && a_href_value !== (a_href_value = ctx[10])) {
        attr(a, "href", a_href_value);
      }
      if (dirty & 24) {
        toggle_class(a, "active", ctx[4](ctx[10]));
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$1(ctx) {
  let li;
  let a;
  let mounted;
  let dispose;
  return {
    c() {
      li = element("li");
      a = element("a");
      a.textContent = "Sign out";
      attr(a, "href", "/");
      attr(a, "class", "svelte-1gjwojp");
      attr(li, "class", "separated sign-out svelte-1gjwojp");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      if (!mounted) {
        dispose = listen(a, "click", prevent_default(ctx[9]));
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$3(ctx) {
  let nav;
  let ul0;
  let li0;
  let a0;
  let icon0;
  let t0;
  let span;
  let t1_value = ctx[0]("generics.home") + "";
  let t1;
  let t2;
  let li1;
  let a1;
  let icon1;
  let t3;
  let t4_value = ctx[0]("generics.map") + "";
  let t4;
  let t5;
  let current_block_type_index;
  let if_block0;
  let t6;
  let li2;
  let hamburger_1;
  let updating_hamburger;
  let t7;
  let div0;
  let t8;
  let ul1;
  let li3;
  let a2;
  let t9_value = ctx[0]("generics.slowby") + "";
  let t9;
  let a2_href_value;
  let t10;
  let li4;
  let a3;
  let t11_value = ctx[0]("generics.shop") + "";
  let t11;
  let t12;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t13;
  let li5;
  let languageselector;
  let t14;
  let t15;
  let div1;
  let socials;
  let current;
  let mounted;
  let dispose;
  icon0 = new Icon({ props: { icon: tentIcon } });
  icon1 = new Icon({ props: { icon: mapIcon } });
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[5])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  function hamburger_1_hamburger_binding(value) {
    ctx[8](value);
  }
  let hamburger_1_props = { isOpen: ctx[2] };
  if (ctx[1] !== void 0) {
    hamburger_1_props.hamburger = ctx[1];
  }
  hamburger_1 = new Hamburger({ props: hamburger_1_props });
  binding_callbacks.push(() => bind(hamburger_1, "hamburger", hamburger_1_hamburger_binding));
  hamburger_1.$on("click", ctx[6]);
  let each_value = ctx[3];
  const get_key = (ctx2) => ctx2[10];
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  languageselector = new LanguageSelector({});
  let if_block1 = ctx[5] && create_if_block$1(ctx);
  socials = new Socials({ props: { small: true } });
  return {
    c() {
      nav = element("nav");
      ul0 = element("ul");
      li0 = element("li");
      a0 = element("a");
      create_component(icon0.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      t2 = space();
      li1 = element("li");
      a1 = element("a");
      create_component(icon1.$$.fragment);
      t3 = space();
      t4 = text(t4_value);
      t5 = space();
      if_block0.c();
      t6 = space();
      li2 = element("li");
      create_component(hamburger_1.$$.fragment);
      t7 = space();
      div0 = element("div");
      t8 = space();
      ul1 = element("ul");
      li3 = element("li");
      a2 = element("a");
      t9 = text(t9_value);
      t10 = space();
      li4 = element("li");
      a3 = element("a");
      t11 = text(t11_value);
      t12 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t13 = space();
      li5 = element("li");
      create_component(languageselector.$$.fragment);
      t14 = space();
      if (if_block1)
        if_block1.c();
      t15 = space();
      div1 = element("div");
      create_component(socials.$$.fragment);
      attr(span, "class", "svelte-1gjwojp");
      attr(a0, "href", routes.HOME);
      attr(a0, "class", "svelte-1gjwojp");
      toggle_class(a0, "active", ctx[4]("/index"));
      attr(li0, "class", "svelte-1gjwojp");
      attr(a1, "href", routes.MAP);
      attr(a1, "class", "svelte-1gjwojp");
      toggle_class(a1, "active", ctx[4](routes.MAP));
      attr(li1, "class", "svelte-1gjwojp");
      attr(li2, "class", "hamburger svelte-1gjwojp");
      attr(ul0, "class", "main svelte-1gjwojp");
      attr(div0, "class", "overlay svelte-1gjwojp");
      toggle_class(div0, "shown", ctx[2]);
      attr(a2, "href", a2_href_value = ctx[0]("index.slowby.banner.url"));
      attr(a2, "target", "_blank");
      attr(a2, "class", "svelte-1gjwojp");
      attr(li3, "class", "svelte-1gjwojp");
      attr(a3, "href", SHOP_URL);
      attr(a3, "target", "_blank");
      attr(a3, "class", "svelte-1gjwojp");
      attr(li4, "class", "svelte-1gjwojp");
      attr(li5, "class", "svelte-1gjwojp");
      attr(div1, "class", "socials svelte-1gjwojp");
      attr(ul1, "class", "drawer svelte-1gjwojp");
      toggle_class(ul1, "open", ctx[2]);
      attr(nav, "id", "navigation");
      attr(nav, "class", "svelte-1gjwojp");
    },
    m(target, anchor) {
      insert(target, nav, anchor);
      append(nav, ul0);
      append(ul0, li0);
      append(li0, a0);
      mount_component(icon0, a0, null);
      append(a0, t0);
      append(a0, span);
      append(span, t1);
      append(ul0, t2);
      append(ul0, li1);
      append(li1, a1);
      mount_component(icon1, a1, null);
      append(a1, t3);
      append(a1, t4);
      append(ul0, t5);
      if_blocks[current_block_type_index].m(ul0, null);
      append(ul0, t6);
      append(ul0, li2);
      mount_component(hamburger_1, li2, null);
      append(nav, t7);
      append(nav, div0);
      append(nav, t8);
      append(nav, ul1);
      append(ul1, li3);
      append(li3, a2);
      append(a2, t9);
      append(ul1, t10);
      append(ul1, li4);
      append(li4, a3);
      append(a3, t11);
      append(ul1, t12);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul1, null);
      }
      append(ul1, t13);
      append(ul1, li5);
      mount_component(languageselector, li5, null);
      append(ul1, t14);
      if (if_block1)
        if_block1.m(ul1, null);
      append(ul1, t15);
      append(ul1, div1);
      mount_component(socials, div1, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(a2, "click", ctx[6]),
          listen(a3, "click", ctx[6]),
          action_destroyer(clickOutside.call(null, ul1)),
          listen(ul1, "click-outside", ctx[7])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0]("generics.home") + ""))
        set_data(t1, t1_value);
      if (dirty & 16) {
        toggle_class(a0, "active", ctx2[4]("/index"));
      }
      if ((!current || dirty & 1) && t4_value !== (t4_value = ctx2[0]("generics.map") + ""))
        set_data(t4, t4_value);
      if (dirty & 16) {
        toggle_class(a1, "active", ctx2[4](routes.MAP));
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(ul0, t6);
      }
      const hamburger_1_changes = {};
      if (dirty & 4)
        hamburger_1_changes.isOpen = ctx2[2];
      if (!updating_hamburger && dirty & 2) {
        updating_hamburger = true;
        hamburger_1_changes.hamburger = ctx2[1];
        add_flush_callback(() => updating_hamburger = false);
      }
      hamburger_1.$set(hamburger_1_changes);
      if (dirty & 4) {
        toggle_class(div0, "shown", ctx2[2]);
      }
      if ((!current || dirty & 1) && t9_value !== (t9_value = ctx2[0]("generics.slowby") + ""))
        set_data(t9, t9_value);
      if (!current || dirty & 1 && a2_href_value !== (a2_href_value = ctx2[0]("index.slowby.banner.url"))) {
        attr(a2, "href", a2_href_value);
      }
      if ((!current || dirty & 1) && t11_value !== (t11_value = ctx2[0]("generics.shop") + ""))
        set_data(t11, t11_value);
      if (dirty & 88) {
        each_value = ctx2[3];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, ul1, destroy_block, create_each_block, t13, get_each_context);
      }
      if (ctx2[5]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          if_block1.m(ul1, t15);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty & 4) {
        toggle_class(ul1, "open", ctx2[2]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      transition_in(if_block0);
      transition_in(hamburger_1.$$.fragment, local);
      transition_in(languageselector.$$.fragment, local);
      transition_in(socials.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      transition_out(if_block0);
      transition_out(hamburger_1.$$.fragment, local);
      transition_out(languageselector.$$.fragment, local);
      transition_out(socials.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(nav);
      destroy_component(icon0);
      destroy_component(icon1);
      if_blocks[current_block_type_index].d();
      destroy_component(hamburger_1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      destroy_component(languageselector);
      if (if_block1)
        if_block1.d();
      destroy_component(socials);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let linksInDrawer;
  let $_;
  let $isActive;
  let $user;
  component_subscribe($$self, Y, ($$value) => $$invalidate(0, $_ = $$value));
  component_subscribe($$self, isActive, ($$value) => $$invalidate(4, $isActive = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(5, $user = $$value));
  let hamburger;
  let drawerIsShown = false;
  const toggleDrawer = () => $$invalidate(2, drawerIsShown = !drawerIsShown);
  const handleClickOutsideDrawer = (event) => {
    const { clickEvent } = event.detail;
    if (drawerIsShown && !hamburger.contains(clickEvent.target))
      toggleDrawer();
  };
  function hamburger_1_hamburger_binding(value) {
    hamburger = value;
    $$invalidate(1, hamburger);
  }
  const click_handler = async () => {
    toggleDrawer();
    await logout();
    window.location = "/";
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(3, linksInDrawer = [
        {
          route: routes.RULES,
          name: $_("generics.rules")
        },
        {
          route: routes.FAQ,
          name: $_("generics.faq.explicit")
        },
        {
          route: routes.COOKIE_POLICY,
          name: $_("generics.cookie-policy")
        },
        {
          route: routes.PRIVACY_POLICY,
          name: $_("generics.privacy-policy")
        },
        {
          route: routes.TERMS_OF_USE,
          name: $_("generics.terms-of-use")
        }
      ]);
    }
  };
  return [
    $_,
    hamburger,
    drawerIsShown,
    linksInDrawer,
    $isActive,
    $user,
    toggleDrawer,
    handleClickOutsideDrawer,
    hamburger_1_hamburger_binding,
    click_handler
  ];
}
class MobileNav extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$3, safe_not_equal, {});
  }
}
function create_fragment$2(ctx) {
  let topnav;
  let t;
  let mobilenav;
  let current;
  topnav = new TopNav({});
  mobilenav = new MobileNav({});
  return {
    c() {
      create_component(topnav.$$.fragment);
      t = space();
      create_component(mobilenav.$$.fragment);
    },
    m(target, anchor) {
      mount_component(topnav, target, anchor);
      insert(target, t, anchor);
      mount_component(mobilenav, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(topnav.$$.fragment, local);
      transition_in(mobilenav.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(topnav.$$.fragment, local);
      transition_out(mobilenav.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(topnav, detaching);
      if (detaching)
        detach(t);
      destroy_component(mobilenav, detaching);
    }
  };
}
class Navigation extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$2, safe_not_equal, {});
  }
}
var Footer_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let footer;
  let div;
  let socials;
  let t0;
  let ul;
  let li0;
  let a0;
  let t1_value = ctx[0]("generics.cookie-policy") + "";
  let t1;
  let t2;
  let li1;
  let a1;
  let t3_value = ctx[0]("generics.privacy-policy") + "";
  let t3;
  let t4;
  let li2;
  let a2;
  let t5_value = ctx[0]("generics.terms-of-use") + "";
  let t5;
  let t6;
  let li3;
  let a3;
  let t7_value = ctx[0]("generics.shop") + "";
  let t7;
  let t8;
  let languageselector;
  let current;
  socials = new Socials({});
  languageselector = new LanguageSelector({});
  return {
    c() {
      footer = element("footer");
      div = element("div");
      create_component(socials.$$.fragment);
      t0 = space();
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      t1 = text(t1_value);
      t2 = space();
      li1 = element("li");
      a1 = element("a");
      t3 = text(t3_value);
      t4 = space();
      li2 = element("li");
      a2 = element("a");
      t5 = text(t5_value);
      t6 = space();
      li3 = element("li");
      a3 = element("a");
      t7 = text(t7_value);
      t8 = space();
      create_component(languageselector.$$.fragment);
      attr(div, "class", "socials svelte-up46cr");
      attr(a0, "href", routes.COOKIE_POLICY);
      attr(a0, "class", "svelte-up46cr");
      attr(li0, "class", "svelte-up46cr");
      attr(a1, "href", routes.PRIVACY_POLICY);
      attr(a1, "class", "svelte-up46cr");
      attr(li1, "class", "svelte-up46cr");
      attr(a2, "href", routes.TERMS_OF_USE);
      attr(a2, "class", "svelte-up46cr");
      attr(li2, "class", "svelte-up46cr");
      attr(a3, "href", SHOP_URL);
      attr(a3, "target", "_blank");
      attr(a3, "class", "svelte-up46cr");
      attr(li3, "class", "svelte-up46cr");
      attr(ul, "class", "terms svelte-up46cr");
      attr(footer, "class", "svelte-up46cr");
    },
    m(target, anchor) {
      insert(target, footer, anchor);
      append(footer, div);
      mount_component(socials, div, null);
      append(footer, t0);
      append(footer, ul);
      append(ul, li0);
      append(li0, a0);
      append(a0, t1);
      append(ul, t2);
      append(ul, li1);
      append(li1, a1);
      append(a1, t3);
      append(ul, t4);
      append(ul, li2);
      append(li2, a2);
      append(a2, t5);
      append(ul, t6);
      append(ul, li3);
      append(li3, a3);
      append(a3, t7);
      append(footer, t8);
      mount_component(languageselector, footer, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0]("generics.cookie-policy") + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & 1) && t3_value !== (t3_value = ctx2[0]("generics.privacy-policy") + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & 1) && t5_value !== (t5_value = ctx2[0]("generics.terms-of-use") + ""))
        set_data(t5, t5_value);
      if ((!current || dirty & 1) && t7_value !== (t7_value = ctx2[0]("generics.shop") + ""))
        set_data(t7, t7_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(socials.$$.fragment, local);
      transition_in(languageselector.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(socials.$$.fragment, local);
      transition_out(languageselector.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(footer);
      destroy_component(socials);
      destroy_component(languageselector);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(0, $_ = $$value));
  return [$_];
}
class Footer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
var _layout_svelte_svelte_type_style_lang = "";
const { window: window_1 } = globals;
function create_if_block(ctx) {
  let nav;
  let t0;
  let main;
  let t1;
  let footer;
  let current;
  nav = new Navigation({});
  const default_slot_template = ctx[8].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[7], null);
  footer = new Footer({});
  return {
    c() {
      create_component(nav.$$.fragment);
      t0 = space();
      main = element("main");
      if (default_slot)
        default_slot.c();
      t1 = space();
      create_component(footer.$$.fragment);
      attr(main, "class", "svelte-1o2nl9r");
    },
    m(target, anchor) {
      mount_component(nav, target, anchor);
      insert(target, t0, anchor);
      insert(target, main, anchor);
      if (default_slot) {
        default_slot.m(main, null);
      }
      insert(target, t1, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 128)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(nav.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(nav.$$.fragment, local);
      transition_out(default_slot, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(nav, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(main);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t1);
      destroy_component(footer, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let progress;
  let t0;
  let notifications;
  let t1;
  let current;
  let mounted;
  let dispose;
  progress = new Progress({
    props: {
      active: ctx[0] || ctx[3] || !ctx[1]
    }
  });
  notifications = new Notifications({});
  let if_block = !ctx[0] && !ctx[3] && ctx[1] && create_if_block(ctx);
  return {
    c() {
      div = element("div");
      create_component(progress.$$.fragment);
      t0 = space();
      create_component(notifications.$$.fragment);
      t1 = space();
      if (if_block)
        if_block.c();
      attr(div, "class", "app svelte-1o2nl9r");
      set_style(div, "--vh", ctx[2]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(progress, div, null);
      append(div, t0);
      mount_component(notifications, div, null);
      append(div, t1);
      if (if_block)
        if_block.m(div, null);
      current = true;
      if (!mounted) {
        dispose = listen(window_1, "resize", ctx[4]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const progress_changes = {};
      if (dirty & 11)
        progress_changes.active = ctx2[0] || ctx2[3] || !ctx2[1];
      progress.$set(progress_changes);
      if (!ctx2[0] && !ctx2[3] && ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 11) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & 4) {
        set_style(div, "--vh", ctx2[2]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(progress.$$.fragment, local);
      transition_in(notifications.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(progress.$$.fragment, local);
      transition_out(notifications.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(progress);
      destroy_component(notifications);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $isInitializing;
  let $user;
  let $params;
  let $isLocaleLoading;
  component_subscribe($$self, isInitializing, ($$value) => $$invalidate(0, $isInitializing = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(5, $user = $$value));
  component_subscribe($$self, params, ($$value) => $$invalidate(6, $params = $$value));
  component_subscribe($$self, k, ($$value) => $$invalidate(3, $isLocaleLoading = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let unsubscribeFromAuthObserver = createAuthObserver();
  let unsubscribeFromChatObserver;
  let infoIsReady = false;
  const addUserInformation = async () => {
    try {
      await setAllUserInfo();
    } catch (ex) {
      console.log(ex);
    }
    if ($user.emailVerified)
      unsubscribeFromChatObserver = await createChatObserver();
  };
  onDestroy(() => {
    if (unsubscribeFromChatObserver)
      unsubscribeFromChatObserver();
    if (unsubscribeFromAuthObserver)
      unsubscribeFromAuthObserver();
  });
  let vh = `${window.innerHeight * 0.01}px`;
  const updateViewportHeight = () => {
    $$invalidate(2, vh = `${window.innerHeight * 0.01}px`);
  };
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 64) {
      if ($params.confirmed)
        $$invalidate(1, infoIsReady = false);
    }
    if ($$self.$$.dirty & 33) {
      if ($user) {
        addUserInformation().then(() => $$invalidate(1, infoIsReady = true));
      } else if (!$isInitializing)
        $$invalidate(1, infoIsReady = true);
    }
  };
  return [
    $isInitializing,
    infoIsReady,
    vh,
    $isLocaleLoading,
    updateViewportHeight,
    $user,
    $params,
    $$scope,
    slots
  ];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Layout as default };
