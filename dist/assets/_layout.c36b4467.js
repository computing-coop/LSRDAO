import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, c as create_component, b as attr, d as insert, m as mount_component, h as transition_in, j as transition_out, k as detach, l as destroy_component, w as create_slot, a as space, C as toggle_class, f as append, q as group_outros, r as check_outros, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, a4 as src_url_equal, o as noop, D as listen, B as createEventDispatcher, J as bubble, I as set_style, a5 as action_destroyer, a6 as self, E as run_all, p as empty, t as text, X as binding_callbacks, M as add_render_callback, P as create_bidirectional_transition, n as component_subscribe, Y, N as update_keyed_each, O as outro_and_destroy_block, g as set_data, a7 as getContext, a8 as bind, a9 as add_flush_callback, T as beforeUpdate, Q as set_input_value, aa as to_number, ab as D, $ as is_function, ac as destroy_each, ad as HtmlTag, ae as getCookie, V as onMount, af as onDestroy, K as goto, L as params, ag as setCookie } from "./index.ae92f232.js";
import { g as getGardenPhotoSmall, a as getGardenPhotoBig, b as allGardens, i as isFetchingGardens, d as getAllListedGardens } from "./garden.8cd2410c.js";
import { r as routes } from "./routes.77b585d1.js";
import { w as waterIcon, t as toiletIcon, b as bonfireIcon, e as electricityIcon, s as showerIcon, k as key, g as geocodeExtensive, M as Map$1 } from "./mapbox.16628e51.js";
import { s as scale } from "./index.f441bdbc.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { I as Icon } from "./Icon.65885a60.js";
import { g as getPublicUserProfile } from "./user.1f47be60.js";
import { u as user } from "./auth.4dd538c9.js";
import { c as clickOutside } from "./click-outside.a63b3702.js";
import { B as Button, T as Text } from "./Button.d1669e9b.js";
import { P as Progress } from "./Progress.9dad7c45.js";
import { t as tentIcon } from "./tent.5b24dad1.js";
import { c as crossIcon } from "./cross.9b7c4c9e.js";
import { L as LabeledCheckbox } from "./LabeledCheckbox.0b5b74e8.js";
import { T as TextInput } from "./TextInput.80847e0d.js";
import { Z as ZOOM_LEVELS } from "./constants.c39c3a18.js";
import "./index.a79b2e56.js";
function create_if_block$6(ctx) {
  let div;
  let icon_1;
  let current;
  icon_1 = new Icon({ props: { icon: ctx[1] } });
  return {
    c() {
      div = element("div");
      create_component(icon_1.$$.fragment);
      attr(div, "class", "icon svelte-8c5jrz");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(icon_1, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_1_changes = {};
      if (dirty & 2)
        icon_1_changes.icon = ctx2[1];
      icon_1.$set(icon_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon_1);
    }
  };
}
function create_fragment$9(ctx) {
  let div;
  let t;
  let current;
  let if_block = ctx[1] && create_if_block$6(ctx);
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      attr(div, "class", "badge svelte-8c5jrz");
      toggle_class(div, "skeleton", ctx[0]);
      toggle_class(div, "is-skeleton", ctx[0]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append(div, t);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$6(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null), null);
        }
      }
      if (dirty & 1) {
        toggle_class(div, "skeleton", ctx2[0]);
      }
      if (dirty & 1) {
        toggle_class(div, "is-skeleton", ctx2[0]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { isSkeleton = false } = $$props;
  let { icon = null } = $$props;
  $$self.$$set = ($$props2) => {
    if ("isSkeleton" in $$props2)
      $$invalidate(0, isSkeleton = $$props2.isSkeleton);
    if ("icon" in $$props2)
      $$invalidate(1, icon = $$props2.icon);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [isSkeleton, icon, $$scope, slots];
}
class Badge extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$9, safe_not_equal, { isSkeleton: 0, icon: 1 });
  }
}
function create_fragment$8(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      if (!src_url_equal(img.src, img_src_value = ctx[0]))
        attr(img, "src", img_src_value);
      attr(img, "alt", ctx[1]);
      attr(img, "style", ctx[2]);
      attr(img, "class", "svelte-ngquum");
      toggle_class(img, "rounded", ctx[3]);
    },
    m(target, anchor) {
      insert(target, img, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && !src_url_equal(img.src, img_src_value = ctx2[0])) {
        attr(img, "src", img_src_value);
      }
      if (dirty & 2) {
        attr(img, "alt", ctx2[1]);
      }
      if (dirty & 4) {
        attr(img, "style", ctx2[2]);
      }
      if (dirty & 8) {
        toggle_class(img, "rounded", ctx2[3]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { style = "" } = $$props;
  let { rounded = true } = $$props;
  $$self.$$set = ($$props2) => {
    if ("src" in $$props2)
      $$invalidate(0, src = $$props2.src);
    if ("alt" in $$props2)
      $$invalidate(1, alt = $$props2.alt);
    if ("style" in $$props2)
      $$invalidate(2, style = $$props2.style);
    if ("rounded" in $$props2)
      $$invalidate(3, rounded = $$props2.rounded);
  };
  return [src, alt, style, rounded];
}
class Image extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$8, safe_not_equal, { src: 0, alt: 1, style: 2, rounded: 3 });
  }
}
var cyclistIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.29 114.29"><defs><style>.cls-1{fill:#495747;}</style></defs><g id="Layer_2" data-name="Layer 2"><path class="cls-1" d="M90.88,45.34a22.17,22.17,0,0,0-6.77,1.07L77.14,28l-.93.35h0l1-.46h8.62a1.62,1.62,0,0,1,1.61,1.62,2.88,2.88,0,0,1-2.88,2.88H82.72a1.71,1.71,0,0,0,0,3.41h1.84a6.29,6.29,0,0,0,6.29-6.29,5,5,0,0,0-5-5H77.21A3.49,3.49,0,0,0,74,29.19l4.14,10.94L62,59.38a9.68,9.68,0,0,0-7.36-1L45.58,36.64h1.19a5,5,0,0,0,5-5V29.91a3.36,3.36,0,0,0-3.35-3.35h-12a3.36,3.36,0,0,0-3.35,3.35v1.71a5,5,0,0,0,5,5h3.79l1.75,4.2-8.07,8a22.5,22.5,0,1,0,9,26.82l11.76,1.8,1,.13v-.11a9.71,9.71,0,0,0,7.29-16L79.47,43.78l1.47,3.89a22.47,22.47,0,1,0,9.94-2.33ZM46.77,33.23H38.1a1.62,1.62,0,0,1-1.62-1.61L36.42,30l12-.06v1.71A1.61,1.61,0,0,1,46.77,33.23ZM23.48,86.93A19.09,19.09,0,1,1,33.1,51.35L24,60.43a3.91,3.91,0,0,0-.49,0,7.34,7.34,0,0,0,0,14.67,7.25,7.25,0,0,0,4.85-1.84l12.73,1.94A19.1,19.1,0,0,1,23.48,86.93Zm7-21.42,11.62-1.77a18,18,0,0,1,0,8.14L30.44,70.1a7.12,7.12,0,0,0,.41-2.37A7,7,0,0,0,30.49,65.51Zm-7,6.15a3.93,3.93,0,1,1,3.93-3.93A3.93,3.93,0,0,1,23.51,71.66ZM41.07,60.45,28.48,62.36a7.39,7.39,0,0,0-.88-.71l8.3-8.28A19.25,19.25,0,0,1,41.07,60.45ZM38.32,51l6.73-6.72,6.11,14.68-6.63,1A22.41,22.41,0,0,0,38.32,51ZM57.18,74.11a6.31,6.31,0,1,1,0-12.61,6.22,6.22,0,0,1,2.59.56l-3.9,4.65a1.71,1.71,0,0,0,.22,2.4,1.75,1.75,0,0,0,2.4-.21l3.89-4.66a6.3,6.3,0,0,1-5.2,9.87ZM45.48,63.23l3.44-.52a9.66,9.66,0,0,0,0,10.21l-3.45-.52A21.78,21.78,0,0,0,46,67.84,21.54,21.54,0,0,0,45.48,63.23Zm45.4,23.7a19.08,19.08,0,0,1-8.72-36.05L86.36,62a7.26,7.26,0,0,0-2.82,5.75,7.34,7.34,0,1,0,7.34-7.33,6.92,6.92,0,0,0-1.42.15L85.32,49.6a18.57,18.57,0,0,1,5.56-.85,19.09,19.09,0,0,1,0,38.18Zm3.93-19.2a3.93,3.93,0,1,1-3.93-3.93A3.94,3.94,0,0,1,94.81,67.73Z"></path></g></svg>';
var hikerIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.29 114.29"><defs><style>.cls-1{fill:#495747;}</style></defs><g id="Layer_2" data-name="Layer 2"><path class="cls-1" d="M80.86,56.42c-.62-.36-1.25-.67-1.85-1l-3-1.42c-1.53-.72-3-1.43-4.57-2.16a5.14,5.14,0,0,1-2.75-3.07c-.25-.77-.49-1.54-.73-2.31l0-.16c-.35-1.13-.7-2.25-1.09-3.36a23.49,23.49,0,0,0-3.21-6.42,5.62,5.62,0,0,0-3.4-2.38,18.49,18.49,0,0,0-4.31-.42,15.62,15.62,0,0,0-9.07,3.7c-2.78,2.25-5.54,4.6-8.21,6.87l-.67.57a7.89,7.89,0,0,0-2.66,5.15q-.51,4.06-1,8.13l-.53,4.2a4.84,4.84,0,0,0,4.1,5.51,4.75,4.75,0,0,0,5.48-4.14c.2-1.37.37-2.74.54-4.11L44.2,57c.13-1,.26-2,.38-3a3.27,3.27,0,0,1,.78-2.06c.65-.64,1.34-1.25,2-1.86-.56,2.67-1.13,5.35-1.71,8-.38,1.77-.62,3.51.63,5.45,4,6.15,8,12.46,11.85,18.62l5.26,8.31q1.65,2.61,3.31,5.21a6,6,0,0,0,5.08,2.8,6.17,6.17,0,0,0,2.09-.37,5.91,5.91,0,0,0,3.84-4.4,6.71,6.71,0,0,0,.09-2.11,7.34,7.34,0,0,0-1.35-3.18L69.75,77.79,60.42,63.06l-.09-.15c.11-.95.27-1.88.46-2.79.24-1.08.49-2.15.77-3.29,0-.12.06-.23.08-.34a6.55,6.55,0,0,0,2.18,2c1.41.79,2.88,1.49,4.35,2.2l.43.21c.83.4,1.66.78,2.49,1.16l.22.11c1.5.69,3,1.41,4.52,2.17a5.17,5.17,0,0,0,4.16.27,4.42,4.42,0,0,0,2.6-2.55A4.7,4.7,0,0,0,80.86,56.42Zm-3.57,5.14c-1.54-.8-3.13-1.53-4.69-2.26L70,58.08l-.5-.25c-1.37-.65-2.78-1.33-4.11-2.07a4.07,4.07,0,0,1-1.58-1.9c-.25-.49-.48-1-.72-1.5l-.51-1.07-.86-.79-.76.08h0l-1.23.15-.42,1.92c-.13.57-.25,1.14-.38,1.7l-.36,1.49-.07.31c-.27,1.1-.53,2.19-.77,3.3a33.81,33.81,0,0,0-.55,3.37,3,3,0,0,0,.6,1.93L68,81l5.79,9.14A4.81,4.81,0,0,1,74.68,92a2.89,2.89,0,0,1-5.29,2c-1.11-1.72-2.2-3.45-3.3-5.19l-5.25-8.31C57,74.37,53,68.06,49,61.82c-.56-.85-.51-1.6-.19-3.07l1.62-7.59,1-4.77,0-1.64-2.23-.4-.58.5c-.51.45-1,.88-1.55,1.33-1.3,1.1-2.64,2.25-3.9,3.46a6.3,6.3,0,0,0-1.74,4c-.12,1-.25,2-.38,3l-.33,2.61c-.17,1.35-.34,2.71-.53,4a1.67,1.67,0,0,1-1.91,1.47,1.72,1.72,0,0,1-1.4-2l.59-4.73c.32-2.53.63-5.07,1-7.6A4.76,4.76,0,0,1,40,47.32l.58-.49c2.68-2.28,5.46-4.65,8.24-6.89a12.33,12.33,0,0,1,7.23-3c.3,0,.62,0,.93,0a25.34,25.34,0,0,1,2.68.36,2.09,2.09,0,0,1,1.1.78c.11.13.22.26.31.39A20.48,20.48,0,0,1,63.82,44c.38,1.07.72,2.16,1.06,3.27.26.84.52,1.68.8,2.52a8.17,8.17,0,0,0,4.38,4.91l4.13,2,.46.21,3,1.42c.56.27,1.11.54,1.63.83a1.65,1.65,0,0,1,.36,1.77,1.27,1.27,0,0,1-.77.75A2,2,0,0,1,77.29,61.56Z"></path><path class="cls-1" d="M48.26,68.75l-.89-1.18c-.11-.15-.23-.29-.37-.45l-2-2.24-1,2.8c-.08.22-.15.4-.2.58-.61,2.22-1.21,4.44-1.82,6.66l-.21.8a8.66,8.66,0,0,1-1.33,3.15c-1.94,2.54-3.9,5.2-5.62,7.54-.75,1-1.49,2-2.25,3A5.53,5.53,0,0,0,32,95.53a5.41,5.41,0,0,0,4.41,3l.46,0a5.82,5.82,0,0,0,4.68-2.42q4.59-6.18,9.17-12.39a4.88,4.88,0,0,0,.8-1.5c.15-.53.29-1,.43-1.51.4-1.44.73-2.67,1-3.86a3,3,0,0,0-.47-2.35C51.14,72.59,49.72,70.7,48.26,68.75ZM39,94.22a2.67,2.67,0,0,1-2.34,1.13,2.22,2.22,0,0,1-1.85-1.27,2.36,2.36,0,0,1,.3-2.74l2.25-3c1.82-2.47,3.7-5,5.59-7.49a11.6,11.6,0,0,0,1.86-4.25l.11-.4q.66-2.4,1.3-4.78,1.83,2.43,3.63,4.88c-.38,1.51-.8,3.09-1.38,5.09a2.25,2.25,0,0,1-.31.5Q43.63,88,39,94.22Z"></path><path class="cls-1" d="M61.29,34.2h0a9.22,9.22,0,1,0-9.2-9.27A9.27,9.27,0,0,0,61.29,34.2Zm-6-9.28a6,6,0,0,1,6-6h0a6.05,6.05,0,0,1,0,12.1A6.08,6.08,0,0,1,55.27,24.92Zm6,8.28Z"></path></g></svg>';
var filterIcon = '<svg width="22" height="20" viewBox="0 0 22 20" fill="white" stroke="white" xmlns="http://www.w3.org/2000/svg"><line x1="0.75" y1="2.25" x2="21.25" y2="2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line><line x1="0.75" y1="10.25" x2="21.25" y2="10.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line><line x1="0.75" y1="18.25" x2="21.25" y2="18.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line><circle cx="16" cy="2" r="2"></circle><circle cx="6" cy="10" r="2"></circle><circle cx="13" cy="18" r="2"></circle></svg>';
var markerIcon = '<svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1009 0C8.6789 0 0 1.15302 0 11.3381C0 18.4484 7.46789 24.79 10.0917 26.7117C10.6972 27.0961 11.3028 27.0961 11.9083 26.7117C14.5321 24.79 22 18.4484 22 11.3381C22 1.15302 13.3211 0 11.1009 0ZM11.7064 12.4911C9.2844 12.8754 7.26605 10.9537 7.87156 8.83986C8.07339 7.68683 9.08257 6.53381 10.2936 6.34164C12.7156 5.9573 14.7339 7.879 14.1284 9.99288C14.1284 11.3381 12.9174 12.2989 11.7064 12.4911Z" fill="#AFD0B8"></path></svg>';
function create_if_block_1$5(ctx) {
  let div;
  let icon_1;
  let current;
  icon_1 = new Icon({ props: { icon: ctx[1] } });
  return {
    c() {
      div = element("div");
      create_component(icon_1.$$.fragment);
      attr(div, "class", "icon svelte-4e4ain");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(icon_1, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_1_changes = {};
      if (dirty & 2)
        icon_1_changes.icon = ctx2[1];
      icon_1.$set(icon_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon_1);
    }
  };
}
function create_if_block$5(ctx) {
  let button;
  let icon_1;
  let current;
  let mounted;
  let dispose;
  icon_1 = new Icon({ props: { icon: crossIcon } });
  return {
    c() {
      button = element("button");
      create_component(icon_1.$$.fragment);
      attr(button, "class", "icon close svelte-4e4ain");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      mount_component(icon_1, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[5]);
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(icon_1);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$7(ctx) {
  let div;
  let label;
  let t0;
  let t1;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[1] && create_if_block_1$5(ctx);
  const default_slot_template = ctx[7].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
  let if_block1 = ctx[2] && create_if_block$5(ctx);
  return {
    c() {
      div = element("div");
      label = element("label");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (default_slot)
        default_slot.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      attr(label, "for", ctx[0]);
      attr(label, "class", "svelte-4e4ain");
      toggle_class(label, "pointer", ctx[3]);
      attr(div, "class", "tag svelte-4e4ain");
      toggle_class(div, "invert", ctx[4]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, label);
      if (if_block0)
        if_block0.m(label, null);
      append(label, t0);
      if (default_slot) {
        default_slot.m(label, null);
      }
      append(div, t1);
      if (if_block1)
        if_block1.m(div, null);
      current = true;
      if (!mounted) {
        dispose = listen(label, "click", ctx[8]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$5(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(label, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 64)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
        }
      }
      if (!current || dirty & 1) {
        attr(label, "for", ctx2[0]);
      }
      if (dirty & 8) {
        toggle_class(label, "pointer", ctx2[3]);
      }
      if (ctx2[2]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$5(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (dirty & 16) {
        toggle_class(div, "invert", ctx2[4]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(default_slot, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(default_slot, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (default_slot)
        default_slot.d(detaching);
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { name } = $$props;
  let { icon = null } = $$props;
  let { closeButton = true } = $$props;
  let { pointer = false } = $$props;
  let { invert = false } = $$props;
  const dispatch = createEventDispatcher();
  const close = () => {
    dispatch("close");
  };
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("icon" in $$props2)
      $$invalidate(1, icon = $$props2.icon);
    if ("closeButton" in $$props2)
      $$invalidate(2, closeButton = $$props2.closeButton);
    if ("pointer" in $$props2)
      $$invalidate(3, pointer = $$props2.pointer);
    if ("invert" in $$props2)
      $$invalidate(4, invert = $$props2.invert);
    if ("$$scope" in $$props2)
      $$invalidate(6, $$scope = $$props2.$$scope);
  };
  return [name, icon, closeButton, pointer, invert, close, $$scope, slots, click_handler];
}
class Tag extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$7, safe_not_equal, {
      name: 0,
      icon: 1,
      closeButton: 2,
      pointer: 3,
      invert: 4
    });
  }
}
var focusTrap = (node) => {
  const handleKeydown = (e) => {
    trapFocus(node, e);
  };
  window.addEventListener("keydown", handleKeydown);
  return {
    destroy() {
      window.removeEventListener("keydown", handleKeydown);
    }
  };
};
const trapFocus = (node, e) => {
  const tabbable = ':not([disabled]):not([tabindex = "-1"])';
  if (e.key !== "Tap" && e.keyCode !== 9)
    return;
  let focusableElts = Array.from(node.querySelectorAll(`a[href]${tabbable}, area[href]${tabbable},input${tabbable}, select${tabbable}, textarea${tabbable}, button${tabbable}, iframe, [contenteditable=true]${tabbable}, *[tabindex]${tabbable}`));
  let index = focusableElts.indexOf(document.activeElement);
  index = switchFocus(focusableElts.length, index, e.shiftKey);
  if (index === -1)
    return;
  focusableElts[index].focus();
  e.preventDefault();
};
const switchFocus = (size, index, shiftKey) => {
  if (index !== -1 && index !== 0 && index !== size - 1)
    return -1;
  if (shiftKey && index === 0)
    return size - 1;
  if (!shiftKey && index === size - 1 || index === -1)
    return 0;
  return -1;
};
const get_controls_slot_changes = (dirty) => ({});
const get_controls_slot_context = (ctx) => ({});
const get_body_slot_changes = (dirty) => ({
  ariaLabelledBy: dirty & 4,
  ariaDescribedBy: dirty & 8
});
const get_body_slot_context = (ctx) => ({
  ariaLabelledBy: ctx[2],
  ariaDescribedBy: ctx[3]
});
const get_title_slot_changes = (dirty) => ({
  ariaLabelledBy: dirty & 4
});
const get_title_slot_context = (ctx) => ({
  ariaLabelledBy: ctx[2],
  class: "modal-title svelte-bwwts1"
});
function create_if_block$4(ctx) {
  let div4;
  let div3;
  let div0;
  let t0;
  let t1;
  let div1;
  let t2;
  let div2;
  let t3;
  let focusTrap_action;
  let current;
  let mounted;
  let dispose;
  const title_slot_template = ctx[18].title;
  const title_slot = create_slot(title_slot_template, ctx, ctx[20], get_title_slot_context);
  let if_block0 = ctx[4] && create_if_block_2$3(ctx);
  const body_slot_template = ctx[18].body;
  const body_slot = create_slot(body_slot_template, ctx, ctx[20], get_body_slot_context);
  let if_block1 = ctx[5] && create_if_block_1$4(ctx);
  const controls_slot_template = ctx[18].controls;
  const controls_slot = create_slot(controls_slot_template, ctx, ctx[20], get_controls_slot_context);
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      div0 = element("div");
      if (title_slot)
        title_slot.c();
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      div1 = element("div");
      if (body_slot)
        body_slot.c();
      t2 = space();
      div2 = element("div");
      if (if_block1)
        if_block1.c();
      t3 = space();
      if (controls_slot)
        controls_slot.c();
      attr(div0, "class", "modal-header svelte-bwwts1");
      attr(div1, "class", "modal-body svelte-bwwts1");
      attr(div2, "class", "controls svelte-bwwts1");
      attr(div3, "aria-labelledby", ctx[2]);
      attr(div3, "aria-describedby", ctx[3]);
      attr(div3, "aria-label", ctx[1]);
      attr(div3, "role", "dialog");
      attr(div3, "class", "modal-content svelte-bwwts1");
      set_style(div3, "max-width", ctx[6]);
      attr(div3, "id", "dialog");
      toggle_class(div3, "radius", ctx[7]);
      attr(div4, "class", "modal svelte-bwwts1");
      toggle_class(div4, "center", ctx[8]);
      toggle_class(div4, "opacity", ctx[11]);
      toggle_class(div4, "stick-to-bottom", ctx[9]);
      toggle_class(div4, "nopadding", ctx[10]);
    },
    m(target, anchor) {
      insert(target, div4, anchor);
      append(div4, div3);
      append(div3, div0);
      if (title_slot) {
        title_slot.m(div0, null);
      }
      append(div0, t0);
      if (if_block0)
        if_block0.m(div0, null);
      append(div3, t1);
      append(div3, div1);
      if (body_slot) {
        body_slot.m(div1, null);
      }
      append(div3, t2);
      append(div3, div2);
      if (if_block1)
        if_block1.m(div2, null);
      append(div2, t3);
      if (controls_slot) {
        controls_slot.m(div2, null);
      }
      ctx[19](div3);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(focusTrap_action = focusTrap.call(null, div3)),
          listen(div4, "click", self(ctx[14]))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & 1048580)) {
          update_slot_base(title_slot, title_slot_template, ctx2, ctx2[20], !current ? get_all_dirty_from_scope(ctx2[20]) : get_slot_changes(title_slot_template, ctx2[20], dirty, get_title_slot_changes), get_title_slot_context);
        }
      }
      if (ctx2[4]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$3(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div0, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (body_slot) {
        if (body_slot.p && (!current || dirty & 1048588)) {
          update_slot_base(body_slot, body_slot_template, ctx2, ctx2[20], !current ? get_all_dirty_from_scope(ctx2[20]) : get_slot_changes(body_slot_template, ctx2[20], dirty, get_body_slot_changes), get_body_slot_context);
        }
      }
      if (ctx2[5]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 32) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$4(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div2, t3);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (controls_slot) {
        if (controls_slot.p && (!current || dirty & 1048576)) {
          update_slot_base(controls_slot, controls_slot_template, ctx2, ctx2[20], !current ? get_all_dirty_from_scope(ctx2[20]) : get_slot_changes(controls_slot_template, ctx2[20], dirty, get_controls_slot_changes), get_controls_slot_context);
        }
      }
      if (!current || dirty & 4) {
        attr(div3, "aria-labelledby", ctx2[2]);
      }
      if (!current || dirty & 8) {
        attr(div3, "aria-describedby", ctx2[3]);
      }
      if (!current || dirty & 2) {
        attr(div3, "aria-label", ctx2[1]);
      }
      if (!current || dirty & 64) {
        set_style(div3, "max-width", ctx2[6]);
      }
      if (dirty & 128) {
        toggle_class(div3, "radius", ctx2[7]);
      }
      if (dirty & 256) {
        toggle_class(div4, "center", ctx2[8]);
      }
      if (dirty & 2048) {
        toggle_class(div4, "opacity", ctx2[11]);
      }
      if (dirty & 512) {
        toggle_class(div4, "stick-to-bottom", ctx2[9]);
      }
      if (dirty & 1024) {
        toggle_class(div4, "nopadding", ctx2[10]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(title_slot, local);
      transition_in(if_block0);
      transition_in(body_slot, local);
      transition_in(if_block1);
      transition_in(controls_slot, local);
      current = true;
    },
    o(local) {
      transition_out(title_slot, local);
      transition_out(if_block0);
      transition_out(body_slot, local);
      transition_out(if_block1);
      transition_out(controls_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      if (title_slot)
        title_slot.d(detaching);
      if (if_block0)
        if_block0.d();
      if (body_slot)
        body_slot.d(detaching);
      if (if_block1)
        if_block1.d();
      if (controls_slot)
        controls_slot.d(detaching);
      ctx[19](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2$3(ctx) {
  let button;
  let icon;
  let current;
  let mounted;
  let dispose;
  icon = new Icon({ props: { icon: crossIcon } });
  return {
    c() {
      button = element("button");
      create_component(icon.$$.fragment);
      attr(button, "class", "close svelte-bwwts1");
      attr(button, "type", "button");
      attr(button, "aria-label", "Close");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      mount_component(icon, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[13]);
        mounted = true;
      }
    },
    p: noop,
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
        detach(button);
      destroy_component(icon);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1$4(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      type: "button",
      uppercase: true,
      inverse: true,
      $$slots: { default: [create_default_slot$4] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[13]);
  return {
    c() {
      create_component(button.$$.fragment);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 1048576) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_default_slot$4(ctx) {
  let t;
  return {
    c() {
      t = text("Close");
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
function create_fragment$6(ctx) {
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block$4(ctx);
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
      if (!mounted) {
        dispose = listen(window, "keydown", ctx[15]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$4(ctx2);
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
      mounted = false;
      dispose();
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const dispatch = createEventDispatcher();
  let { ariaLabel = null } = $$props;
  let { ariaLabelledBy = null } = $$props;
  let { ariaDescribedBy = null } = $$props;
  let { closeButton = true } = $$props;
  let { cancelButton = false } = $$props;
  let { closeOnEsc = true } = $$props;
  let { closeOnOuterClick = true } = $$props;
  let { maxWidth: maxWidth2 } = $$props;
  let { show = true } = $$props;
  let { radius = false } = $$props;
  let { center = false } = $$props;
  let { stickToBottom = false } = $$props;
  let { nopadding = false } = $$props;
  let { opacity = true } = $$props;
  const close = () => {
    $$invalidate(0, show = false);
    dispatch("close");
  };
  let ref = null;
  const handleOuterClick = () => {
    if (!closeOnOuterClick)
      return;
    close();
  };
  const handleKeydown = (e) => {
    if (!show)
      return;
    if (!closeOnEsc)
      return;
    if (e.key === "Escape" || e.keyCode === 27)
      close();
  };
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(12, ref);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("ariaLabel" in $$props2)
      $$invalidate(1, ariaLabel = $$props2.ariaLabel);
    if ("ariaLabelledBy" in $$props2)
      $$invalidate(2, ariaLabelledBy = $$props2.ariaLabelledBy);
    if ("ariaDescribedBy" in $$props2)
      $$invalidate(3, ariaDescribedBy = $$props2.ariaDescribedBy);
    if ("closeButton" in $$props2)
      $$invalidate(4, closeButton = $$props2.closeButton);
    if ("cancelButton" in $$props2)
      $$invalidate(5, cancelButton = $$props2.cancelButton);
    if ("closeOnEsc" in $$props2)
      $$invalidate(16, closeOnEsc = $$props2.closeOnEsc);
    if ("closeOnOuterClick" in $$props2)
      $$invalidate(17, closeOnOuterClick = $$props2.closeOnOuterClick);
    if ("maxWidth" in $$props2)
      $$invalidate(6, maxWidth2 = $$props2.maxWidth);
    if ("show" in $$props2)
      $$invalidate(0, show = $$props2.show);
    if ("radius" in $$props2)
      $$invalidate(7, radius = $$props2.radius);
    if ("center" in $$props2)
      $$invalidate(8, center = $$props2.center);
    if ("stickToBottom" in $$props2)
      $$invalidate(9, stickToBottom = $$props2.stickToBottom);
    if ("nopadding" in $$props2)
      $$invalidate(10, nopadding = $$props2.nopadding);
    if ("opacity" in $$props2)
      $$invalidate(11, opacity = $$props2.opacity);
    if ("$$scope" in $$props2)
      $$invalidate(20, $$scope = $$props2.$$scope);
  };
  return [
    show,
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    closeButton,
    cancelButton,
    maxWidth2,
    radius,
    center,
    stickToBottom,
    nopadding,
    opacity,
    ref,
    close,
    handleOuterClick,
    handleKeydown,
    closeOnEsc,
    closeOnOuterClick,
    slots,
    div3_binding,
    $$scope
  ];
}
class Modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$6, safe_not_equal, {
      ariaLabel: 1,
      ariaLabelledBy: 2,
      ariaDescribedBy: 3,
      closeButton: 4,
      cancelButton: 5,
      closeOnEsc: 16,
      closeOnOuterClick: 17,
      maxWidth: 6,
      show: 0,
      radius: 7,
      center: 8,
      stickToBottom: 9,
      nopadding: 10,
      opacity: 11
    });
  }
}
var SkeletonDrawer_svelte_svelte_type_style_lang = "";
function create_fragment$5(ctx) {
  let section;
  let header;
  let t1;
  let div7;
  let div5;
  let t4;
  let div6;
  let badge0;
  let t5;
  let badge1;
  let t6;
  let badge2;
  let t7;
  let badge3;
  let t8;
  let badge4;
  let t9;
  let badge5;
  let t10;
  let footer;
  let current;
  badge0 = new Badge({ props: { isSkeleton: true } });
  badge1 = new Badge({ props: { isSkeleton: true } });
  badge2 = new Badge({ props: { isSkeleton: true } });
  badge3 = new Badge({ props: { isSkeleton: true } });
  badge4 = new Badge({ props: { isSkeleton: true } });
  badge5 = new Badge({ props: { isSkeleton: true } });
  return {
    c() {
      section = element("section");
      header = element("header");
      header.innerHTML = `<div class="skeleton mb-l skeleton-name svelte-ze9h4b"></div> 
    <div class="skeleton skeleton-photo svelte-ze9h4b"></div>`;
      t1 = space();
      div7 = element("div");
      div5 = element("div");
      div5.innerHTML = `<div class="skeleton skeleton-description svelte-ze9h4b"></div> 
      <div class="skeleton skeleton-description svelte-ze9h4b"></div> 
      <div class="skeleton skeleton-description svelte-ze9h4b"></div>`;
      t4 = space();
      div6 = element("div");
      create_component(badge0.$$.fragment);
      t5 = space();
      create_component(badge1.$$.fragment);
      t6 = space();
      create_component(badge2.$$.fragment);
      t7 = space();
      create_component(badge3.$$.fragment);
      t8 = space();
      create_component(badge4.$$.fragment);
      t9 = space();
      create_component(badge5.$$.fragment);
      t10 = space();
      footer = element("footer");
      attr(header, "class", "svelte-ze9h4b");
      attr(div5, "class", "description svelte-ze9h4b");
      attr(div6, "class", "badges-container skeleton-badges svelte-ze9h4b");
      attr(div7, "class", "svelte-ze9h4b");
      attr(footer, "class", "skeleton footer mt-ms skeleton-cta svelte-ze9h4b");
      attr(section, "class", "main svelte-ze9h4b");
    },
    m(target, anchor) {
      insert(target, section, anchor);
      append(section, header);
      append(section, t1);
      append(section, div7);
      append(div7, div5);
      append(div7, t4);
      append(div7, div6);
      mount_component(badge0, div6, null);
      append(div6, t5);
      mount_component(badge1, div6, null);
      append(div6, t6);
      mount_component(badge2, div6, null);
      append(div6, t7);
      mount_component(badge3, div6, null);
      append(div6, t8);
      mount_component(badge4, div6, null);
      append(div6, t9);
      mount_component(badge5, div6, null);
      append(section, t10);
      append(section, footer);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(badge0.$$.fragment, local);
      transition_in(badge1.$$.fragment, local);
      transition_in(badge2.$$.fragment, local);
      transition_in(badge3.$$.fragment, local);
      transition_in(badge4.$$.fragment, local);
      transition_in(badge5.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(badge0.$$.fragment, local);
      transition_out(badge1.$$.fragment, local);
      transition_out(badge2.$$.fragment, local);
      transition_out(badge3.$$.fragment, local);
      transition_out(badge4.$$.fragment, local);
      transition_out(badge5.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_component(badge0);
      destroy_component(badge1);
      destroy_component(badge2);
      destroy_component(badge3);
      destroy_component(badge4);
      destroy_component(badge5);
    }
  };
}
class SkeletonDrawer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$5, safe_not_equal, {});
  }
}
var Drawer_svelte_svelte_type_style_lang = "";
function get_each_context$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[23] = list[i];
  return child_ctx;
}
function create_if_block_11(ctx) {
  let div1;
  let div0;
  let img;
  let img_alt_value;
  let img_src_value;
  let div1_transition;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      attr(img, "alt", img_alt_value = ctx[2]("generics.garden"));
      if (!src_url_equal(img.src, img_src_value = ctx[7]))
        attr(img, "src", img_src_value);
      attr(img, "class", "svelte-ay9fvj");
      attr(div0, "class", "magnified-photo svelte-ay9fvj");
      attr(div1, "class", "magnified-photo-wrapper svelte-ay9fvj");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, img);
      ctx[18](div1);
      current = true;
      if (!mounted) {
        dispose = [
          listen(img, "click", ctx[17]),
          listen(div1, "click", ctx[19])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty & 4 && img_alt_value !== (img_alt_value = ctx2[2]("generics.garden"))) {
        attr(img, "alt", img_alt_value);
      }
      if (!current || dirty & 128 && !src_url_equal(img.src, img_src_value = ctx2[7])) {
        attr(img, "src", img_src_value);
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div1_transition)
          div1_transition = create_bidirectional_transition(div1, scale, {}, true);
        div1_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div1_transition)
        div1_transition = create_bidirectional_transition(div1, scale, {}, false);
      div1_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      ctx[18](null);
      if (detaching && div1_transition)
        div1_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_10(ctx) {
  let skeletondrawer;
  let current;
  skeletondrawer = new SkeletonDrawer({});
  return {
    c() {
      create_component(skeletondrawer.$$.fragment);
    },
    m(target, anchor) {
      mount_component(skeletondrawer, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(skeletondrawer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(skeletondrawer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(skeletondrawer, detaching);
    }
  };
}
function create_if_block$3(ctx) {
  let section;
  let header;
  let text0;
  let t0;
  let t1;
  let div2;
  let div0;
  let text1;
  let t2;
  let div1;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t3;
  let t4;
  let footer;
  let t5;
  let current_block_type_index;
  let if_block3;
  let current;
  text0 = new Text({
    props: {
      class: "mb-l",
      weight: "bold",
      size: "l",
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  let if_block0 = ctx[0].photo && create_if_block_7(ctx);
  text1 = new Text({
    props: {
      class: "mb-l",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  let each_value = ctx[12];
  const get_key = (ctx2) => ctx2[23].name;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$3(ctx, each_value, i);
    let key2 = get_key(child_ctx);
    each_1_lookup.set(key2, each_blocks[i] = create_each_block$3(key2, child_ctx));
  }
  let if_block1 = ctx[0].facilities.capacity && create_if_block_5(ctx);
  let if_block2 = ctx[5].languages && create_if_block_4(ctx);
  const if_block_creators = [create_if_block_1$3, create_else_block];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if (ctx2[11])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_2(ctx);
  if_block3 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      section = element("section");
      header = element("header");
      create_component(text0.$$.fragment);
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      create_component(text1.$$.fragment);
      t2 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t3 = space();
      if (if_block1)
        if_block1.c();
      t4 = space();
      footer = element("footer");
      if (if_block2)
        if_block2.c();
      t5 = space();
      if_block3.c();
      attr(header, "class", "svelte-ay9fvj");
      attr(div0, "class", "description svelte-ay9fvj");
      attr(div1, "class", "badges-container svelte-ay9fvj");
      attr(div2, "class", "drawer-content-area svelte-ay9fvj");
      attr(footer, "class", "footer mt-m svelte-ay9fvj");
      attr(section, "class", "main svelte-ay9fvj");
    },
    m(target, anchor) {
      insert(target, section, anchor);
      append(section, header);
      mount_component(text0, header, null);
      append(header, t0);
      if (if_block0)
        if_block0.m(header, null);
      append(section, t1);
      append(section, div2);
      append(div2, div0);
      mount_component(text1, div0, null);
      append(div2, t2);
      append(div2, div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
      append(div2, t3);
      if (if_block1)
        if_block1.m(div2, null);
      append(section, t4);
      append(section, footer);
      if (if_block2)
        if_block2.m(footer, null);
      append(footer, t5);
      if_blocks[current_block_type_index].m(footer, null);
      current = true;
    },
    p(ctx2, dirty) {
      const text0_changes = {};
      if (dirty & 67110948) {
        text0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      text0.$set(text0_changes);
      if (ctx2[0].photo) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_7(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(header, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      const text1_changes = {};
      if (dirty & 67108865) {
        text1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      text1.$set(text1_changes);
      if (dirty & 4097) {
        each_value = ctx2[12];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div1, outro_and_destroy_block, create_each_block$3, null, get_each_context$3);
        check_outros();
      }
      if (ctx2[0].facilities.capacity) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_5(ctx2);
          if_block1.c();
          if_block1.m(div2, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (ctx2[5].languages) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & 32) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_4(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(footer, t5);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block3 = if_blocks[current_block_type_index];
        if (!if_block3) {
          if_block3 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block3.c();
        } else {
          if_block3.p(ctx2, dirty);
        }
        transition_in(if_block3, 1);
        if_block3.m(footer, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(text0.$$.fragment, local);
      transition_in(if_block0);
      transition_in(text1.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(if_block2);
      transition_in(if_block3);
      current = true;
    },
    o(local) {
      transition_out(text0.$$.fragment, local);
      transition_out(if_block0);
      transition_out(text1.$$.fragment, local);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(if_block2);
      transition_out(if_block3);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_component(text0);
      if (if_block0)
        if_block0.d();
      destroy_component(text1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_else_block_1(ctx) {
  let t_value = ctx[5].firstName + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 32 && t_value !== (t_value = ctx2[5].firstName + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_9(ctx) {
  let t_value = ctx[2]("garden.drawer.owner.your-garden") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = ctx2[2]("garden.drawer.owner.your-garden") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_6(ctx) {
  let if_block_anchor;
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[11])
      return create_if_block_9;
    return create_else_block_1;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_7(ctx) {
  let button;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[6] && create_if_block_8(ctx);
  return {
    c() {
      button = element("button");
      if (if_block)
        if_block.c();
      attr(button, "class", "mb-l button-container image-wrapper svelte-ay9fvj");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if (if_block)
        if_block.m(button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[14]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[6]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 64) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_8(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(button, null);
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
        detach(button);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_8(ctx) {
  let image;
  let current;
  image = new Image({ props: { src: ctx[6] } });
  return {
    c() {
      create_component(image.$$.fragment);
    },
    m(target, anchor) {
      mount_component(image, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const image_changes = {};
      if (dirty & 64)
        image_changes.src = ctx2[6];
      image.$set(image_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(image.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(image.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(image, detaching);
    }
  };
}
function create_default_slot_5(ctx) {
  let t_value = ctx[0].description + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[0].description + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_6(ctx) {
  let badge;
  let current;
  badge = new Badge({
    props: {
      icon: ctx[23].icon,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(badge.$$.fragment);
    },
    m(target, anchor) {
      mount_component(badge, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const badge_changes = {};
      if (dirty & 4096)
        badge_changes.icon = ctx2[23].icon;
      if (dirty & 67112960) {
        badge_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge.$set(badge_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(badge.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(badge.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(badge, detaching);
    }
  };
}
function create_default_slot_4(ctx) {
  let t_value = ctx[23].label + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 4096 && t_value !== (t_value = ctx2[23].label + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block$3(key_1, ctx) {
  let first;
  let if_block_anchor;
  let current;
  let if_block = ctx[0].facilities[ctx[23].name] && create_if_block_6(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (ctx[0].facilities[ctx[23].name]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 4097) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_6(ctx);
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
      if (detaching)
        detach(first);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_5(ctx) {
  let p;
  let raw_value = ctx[2]("garden.drawer.facilities.capacity", {
    values: {
      capacity: ctx[0].facilities.capacity,
      styleCapacity: `<strong>${ctx[0].facilities.capacity}</strong>`
    }
  }) + "";
  return {
    c() {
      p = element("p");
      attr(p, "class", "mt-m capacity svelte-ay9fvj");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 5 && raw_value !== (raw_value = ctx2[2]("garden.drawer.facilities.capacity", {
        values: {
          capacity: ctx2[0].facilities.capacity,
          styleCapacity: `<strong>${ctx2[0].facilities.capacity}</strong>`
        }
      }) + ""))
        p.innerHTML = raw_value;
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_4(ctx) {
  let text_1;
  let current;
  text_1 = new Text({
    props: {
      class: "mb-m",
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(text_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const text_1_changes = {};
      if (dirty & 67108896) {
        text_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      text_1.$set(text_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(text_1, detaching);
    }
  };
}
function create_default_slot_3$1(ctx) {
  let t;
  return {
    c() {
      t = text("Dutch & English");
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
function create_default_slot_2$1(ctx) {
  let t0_value = ctx[5].firstName + "";
  let t0;
  let t1;
  let text_1;
  let current;
  text_1 = new Text({
    props: {
      is: "span",
      weight: "bold",
      $$slots: { default: [create_default_slot_3$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      t0 = text(t0_value);
      t1 = text(" speaks\n            ");
      create_component(text_1.$$.fragment);
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, t1, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 32) && t0_value !== (t0_value = ctx2[5].firstName + ""))
        set_data(t0, t0_value);
      const text_1_changes = {};
      if (dirty & 67108864) {
        text_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      text_1.$set(text_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      destroy_component(text_1, detaching);
    }
  };
}
function create_else_block(ctx) {
  let t;
  let button;
  let current;
  function select_block_type_3(ctx2, dirty) {
    if (!ctx2[1])
      return create_if_block_2$2;
    if (ctx2[0].unclaimed)
      return create_if_block_3;
  }
  let current_block_type = select_block_type_3(ctx);
  let if_block = current_block_type && current_block_type(ctx);
  button = new Button({
    props: {
      href: `${routes.CHAT}?with=${ctx[0].id}`,
      disabled: !ctx[1] || ctx[0].unclaimed,
      uppercase: true,
      medium: true,
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      create_component(button.$$.fragment);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t, anchor);
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_3(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if (if_block)
          if_block.d(1);
        if_block = current_block_type && current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(t.parentNode, t);
        }
      }
      const button_changes = {};
      if (dirty & 1)
        button_changes.href = `${routes.CHAT}?with=${ctx2[0].id}`;
      if (dirty & 3)
        button_changes.disabled = !ctx2[1] || ctx2[0].unclaimed;
      if (dirty & 67108868) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (if_block) {
        if_block.d(detaching);
      }
      if (detaching)
        detach(t);
      destroy_component(button, detaching);
    }
  };
}
function create_if_block_1$3(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      href: routes.MANAGE_GARDEN,
      uppercase: true,
      medium: true,
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(button.$$.fragment);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 67108868) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let p;
  let t_value = ctx[2]("garden.drawer.unclaimed") + "";
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      attr(p, "class", "cta-hint svelte-ay9fvj");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = ctx2[2]("garden.drawer.unclaimed") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_2$2(ctx) {
  let p;
  let raw_value = ctx[2]("garden.drawer.guest.login", {
    values: {
      signInLink: `<a class='link' href=${routes.SIGN_IN}>${ctx[2]("garden.drawer.guest.sign-link-text")}</a>`
    }
  }) + "";
  return {
    c() {
      p = element("p");
      attr(p, "class", "cta-hint svelte-ay9fvj");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 4 && raw_value !== (raw_value = ctx2[2]("garden.drawer.guest.login", {
        values: {
          signInLink: `<a class='link' href=${routes.SIGN_IN}>${ctx2[2]("garden.drawer.guest.sign-link-text")}</a>`
        }
      }) + ""))
        p.innerHTML = raw_value;
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot_1$1(ctx) {
  let t_value = ctx[2]("garden.drawer.guest.button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = ctx2[2]("garden.drawer.guest.button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$3(ctx) {
  let t_value = ctx[2]("garden.drawer.owner.button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = ctx2[2]("garden.drawer.owner.button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$4(ctx) {
  let progress;
  let t0;
  let t1;
  let div;
  let current_block_type_index;
  let if_block1;
  let current;
  let mounted;
  let dispose;
  progress = new Progress({
    props: {
      active: ctx[10]
    }
  });
  let if_block0 = ctx[9] && !ctx[10] && create_if_block_11(ctx);
  const if_block_creators = [create_if_block$3, create_if_block_10];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[13] && ctx2[8])
      return 0;
    if (!ctx2[8])
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      create_component(progress.$$.fragment);
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      div = element("div");
      if (if_block1)
        if_block1.c();
      attr(div, "class", "drawer svelte-ay9fvj");
      toggle_class(div, "hidden", !ctx[13]);
    },
    m(target, anchor) {
      mount_component(progress, target, anchor);
      insert(target, t0, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t1, anchor);
      insert(target, div, anchor);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div, null);
      }
      ctx[20](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(clickOutside.call(null, div)),
          listen(div, "click-outside", ctx[15])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const progress_changes = {};
      if (dirty & 1024)
        progress_changes.active = ctx2[10];
      progress.$set(progress_changes);
      if (ctx2[9] && !ctx2[10]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 1536) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_11(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t1.parentNode, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block1) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block1 = if_blocks[current_block_type_index];
          if (!if_block1) {
            if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block1.c();
          } else {
            if_block1.p(ctx2, dirty);
          }
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        } else {
          if_block1 = null;
        }
      }
      if (dirty & 8192) {
        toggle_class(div, "hidden", !ctx2[13]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(progress.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(progress.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      destroy_component(progress, detaching);
      if (detaching)
        detach(t0);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      ctx[20](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let gardenIsSelected;
  let facilities;
  let ownedByLoggedInUser;
  let $user;
  let $_;
  component_subscribe($$self, user, ($$value) => $$invalidate(1, $user = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(2, $_ = $$value));
  let { garden = null } = $$props;
  const dispatch = createEventDispatcher();
  let drawerElement;
  let photoWrapper;
  let userInfo = null;
  let photoUrl = null;
  let biggerPhotoUrl = null;
  let infoHasLoaded = false;
  const setAllGardenInfo = async () => {
    try {
      $$invalidate(5, userInfo = await getPublicUserProfile(garden.id));
      if (garden.photo) {
        const id = garden.previousPhotoId || garden.id;
        $$invalidate(6, photoUrl = await getGardenPhotoSmall({ ...garden, id }));
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  let previousGarden = {};
  let isShowingMagnifiedPhoto = false;
  let isGettingMagnifiedPhoto = false;
  const magnifyPhoto = async () => {
    $$invalidate(10, isGettingMagnifiedPhoto = true);
    try {
      if (garden.photo) {
        const id = garden.previousPhotoId || garden.id;
        $$invalidate(7, biggerPhotoUrl = await getGardenPhotoBig({ ...garden, id }));
      }
    } catch (ex) {
      console.log(ex);
    }
    $$invalidate(9, isShowingMagnifiedPhoto = true);
    $$invalidate(10, isGettingMagnifiedPhoto = false);
  };
  const handleClickOutsideDrawer = (event) => {
    const { clickEvent } = event.detail;
    if (isShowingMagnifiedPhoto && photoWrapper.contains(clickEvent.target))
      return;
    else if (clickEvent.target instanceof HTMLInputElement && clickEvent.target.type == "checkbox" || clickEvent.target.tagName == "LABEL")
      return;
    else if (!drawerElement.contains(clickEvent.target))
      dispatch("close");
  };
  const click_handler = () => $$invalidate(9, isShowingMagnifiedPhoto = false);
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      photoWrapper = $$value;
      $$invalidate(4, photoWrapper);
    });
  }
  const click_handler_1 = () => {
    $$invalidate(9, isShowingMagnifiedPhoto = false);
  };
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      drawerElement = $$value;
      $$invalidate(3, drawerElement);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("garden" in $$props2)
      $$invalidate(0, garden = $$props2.garden);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(13, gardenIsSelected = !!garden);
    }
    if ($$self.$$.dirty & 4) {
      $$invalidate(12, facilities = [
        {
          name: "water",
          icon: waterIcon,
          label: $_("garden.facilities.labels.water")
        },
        {
          name: "drinkableWater",
          icon: waterIcon,
          label: $_("garden.facilities.labels.drinkable-water")
        },
        {
          name: "toilet",
          icon: toiletIcon,
          label: $_("garden.facilities.labels.toilet")
        },
        {
          name: "bonfire",
          icon: bonfireIcon,
          label: $_("garden.facilities.labels.bonfire")
        },
        {
          name: "electricity",
          icon: electricityIcon,
          label: $_("garden.facilities.labels.electricity")
        },
        {
          name: "shower",
          icon: showerIcon,
          label: $_("garden.facilities.labels.shower")
        },
        {
          name: "tent",
          icon: tentIcon,
          label: $_("garden.facilities.labels.tent")
        }
      ]);
    }
    if ($$self.$$.dirty & 65537) {
      if (garden && garden.id !== previousGarden.id) {
        $$invalidate(8, infoHasLoaded = false);
        $$invalidate(5, userInfo = null);
        $$invalidate(16, previousGarden = garden);
      }
    }
    if ($$self.$$.dirty & 1) {
      if (garden) {
        $$invalidate(8, infoHasLoaded = false);
        $$invalidate(5, userInfo = null);
        $$invalidate(6, photoUrl = null);
        $$invalidate(7, biggerPhotoUrl = null);
        setAllGardenInfo().then(() => {
          $$invalidate(8, infoHasLoaded = true);
        });
      }
    }
    if ($$self.$$.dirty & 3) {
      $$invalidate(11, ownedByLoggedInUser = $user && garden && $user.id === garden.id);
    }
  };
  return [
    garden,
    $user,
    $_,
    drawerElement,
    photoWrapper,
    userInfo,
    photoUrl,
    biggerPhotoUrl,
    infoHasLoaded,
    isShowingMagnifiedPhoto,
    isGettingMagnifiedPhoto,
    ownedByLoggedInUser,
    facilities,
    gardenIsSelected,
    magnifyPhoto,
    handleClickOutsideDrawer,
    previousGarden,
    click_handler,
    div1_binding,
    click_handler_1,
    div_binding
  ];
}
class Drawer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$4, safe_not_equal, { garden: 0 });
  }
}
function instance$5($$self, $$props, $$invalidate) {
  let { allGardens: allGardens2 } = $$props;
  let { selectedGardenId } = $$props;
  const { getMap } = getContext(key);
  const map = getMap();
  const dispatch = createEventDispatcher();
  const getData = () => ({
    type: "FeatureCollection",
    features: Object.keys(allGardens2).map((gardenId) => {
      const garden = allGardens2[gardenId];
      return {
        type: "Feature",
        properties: {
          id: gardenId,
          ...garden,
          lnglat: [garden.location.longitude, garden.location.latitude],
          icon: selectedGardenId === gardenId ? "tent-filled" : "tent"
        },
        geometry: {
          type: "Point",
          coordinates: [garden.location.longitude, garden.location.latitude]
        }
      };
    })
  });
  const setupMarkers = async () => {
    const images = [
      {
        url: "/images/markers/tent-neutral.png",
        id: "tent"
      },
      {
        url: "/images/markers/tent-filled.png",
        id: "tent-filled"
      }
    ];
    await Promise.all(images.map((img) => new Promise((resolve) => {
      map.loadImage(img.url, (error, res) => {
        map.addImage(img.id, res);
        resolve();
      });
    })));
    const data = getData();
    map.addSource("gardens", {
      type: "geojson",
      data,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50
    });
    map.addLayer({
      id: "clusters",
      type: "circle",
      source: "gardens",
      filter: ["has", "point_count"],
      paint: {
        "circle-color": ["step", ["get", "point_count"], "#51bbd6", 20, "#f1f075", 40, "#f28cb1"],
        "circle-radius": ["step", ["get", "point_count"], 20, 20, 30, 40, 40]
      }
    });
    map.addLayer({
      id: "cluster-count",
      type: "symbol",
      source: "gardens",
      filter: ["has", "point_count"],
      layout: {
        "text-field": "{point_count_abbreviated}",
        "text-size": 13
      }
    });
    map.addLayer({
      id: "unclustered-point",
      type: "symbol",
      source: "gardens",
      filter: ["!", ["has", "point_count"]],
      layout: {
        "icon-image": ["get", "icon"],
        "icon-size": 0.4
      }
    });
    map.on("click", "clusters", (e) => {
      var features = map.queryRenderedFeatures(e.point, { layers: ["clusters"] });
      var clusterId = features[0].properties.cluster_id;
      map.getSource("gardens").getClusterExpansionZoom(clusterId, function(err, zoom) {
        if (err)
          return;
        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom
        });
      });
    });
    map.on("click", "unclustered-point", (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const garden = e.features[0].properties;
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      dispatch("garden-click", garden);
    });
    map.on("mouseenter", "clusters", () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseenter", "unclustered-point", () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "clusters", () => {
      map.getCanvas().style.cursor = "";
    });
    $$invalidate(2, mapReady = true);
  };
  let mapReady = false;
  const updateSelectedMarker = () => {
    const data = getData();
    map.getSource("gardens").setData(data);
  };
  setupMarkers();
  $$self.$$set = ($$props2) => {
    if ("allGardens" in $$props2)
      $$invalidate(0, allGardens2 = $$props2.allGardens);
    if ("selectedGardenId" in $$props2)
      $$invalidate(1, selectedGardenId = $$props2.selectedGardenId);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 7) {
      if (mapReady)
        updateSelectedMarker();
    }
  };
  return [allGardens2, selectedGardenId, mapReady];
}
class GardenLayer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, null, safe_not_equal, { allGardens: 0, selectedGardenId: 1 });
  }
}
function instance$4($$self, $$props, $$invalidate) {
  let { showHiking = false } = $$props;
  let { showCycling = true } = $$props;
  const { getMap } = getContext(key);
  const map = getMap();
  const getVisibilityProperty = (visibility) => visibility ? "visible" : "none";
  const toggleHikingVisibility = (visible) => {
    map.setLayoutProperty("hiking-trails", "visibility", getVisibilityProperty(visible));
  };
  const toggleCyclingVisibility = (visible) => {
    map.setLayoutProperty("cycling-trails", "visibility", getVisibilityProperty(visible));
  };
  let toggleable = false;
  const setupTrails = () => {
    map.addSource("waymarked-hiking", {
      type: "raster",
      tiles: ["https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png"],
      tileSize: 256
    });
    map.addSource("waymarked-cycling", {
      type: "raster",
      tiles: ["https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png"],
      tileSize: 256
    });
    map.addLayer({
      id: "hiking-trails",
      type: "raster",
      source: "waymarked-hiking",
      layout: {
        visibility: getVisibilityProperty(showHiking)
      }
    });
    map.addLayer({
      id: "cycling-trails",
      type: "raster",
      source: "waymarked-cycling",
      layout: {
        visibility: getVisibilityProperty(showCycling)
      }
    });
    $$invalidate(2, toggleable = true);
  };
  setupTrails();
  $$self.$$set = ($$props2) => {
    if ("showHiking" in $$props2)
      $$invalidate(0, showHiking = $$props2.showHiking);
    if ("showCycling" in $$props2)
      $$invalidate(1, showCycling = $$props2.showCycling);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 5) {
      if (toggleable)
        toggleHikingVisibility(showHiking);
    }
    if ($$self.$$.dirty & 6) {
      if (toggleable)
        toggleCyclingVisibility(showCycling);
    }
  };
  return [showHiking, showCycling, toggleable];
}
class WaymarkedTrails extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, null, safe_not_equal, { showHiking: 0, showCycling: 1 });
  }
}
var FacilitiesFilter_svelte_svelte_type_style_lang = "";
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  child_ctx[18] = list;
  child_ctx[19] = i;
  return child_ctx;
}
function create_title_slot(ctx) {
  let div;
  let h2;
  let t_value = ctx[6]("garden.filter.title") + "";
  let t;
  let div_id_value;
  return {
    c() {
      div = element("div");
      h2 = element("h2");
      t = text(t_value);
      attr(h2, "id", "gardenFilterTitle");
      attr(h2, "class", "svelte-wsw0z6");
      attr(div, "slot", "title");
      attr(div, "class", "gardenFilterTitleSection svelte-wsw0z6");
      attr(div, "id", div_id_value = ctx[16]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, h2);
      append(h2, t);
    },
    p(ctx2, dirty) {
      if (dirty & 64 && t_value !== (t_value = ctx2[6]("garden.filter.title") + ""))
        set_data(t, t_value);
      if (dirty & 65536 && div_id_value !== (div_id_value = ctx2[16])) {
        attr(div, "id", div_id_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block$2(key_1, ctx) {
  let div;
  let labeledcheckbox;
  let updating_checked;
  let t;
  let current;
  function labeledcheckbox_checked_binding(value) {
    ctx[11](value, ctx[17]);
  }
  let labeledcheckbox_props = {
    name: ctx[17].name,
    icon: ctx[17].icon,
    label: ctx[6](ctx[17].transKey)
  };
  if (ctx[1].facilities[ctx[17].name] !== void 0) {
    labeledcheckbox_props.checked = ctx[1].facilities[ctx[17].name];
  }
  labeledcheckbox = new LabeledCheckbox({ props: labeledcheckbox_props });
  binding_callbacks.push(() => bind(labeledcheckbox, "checked", labeledcheckbox_checked_binding));
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      create_component(labeledcheckbox.$$.fragment);
      t = space();
      attr(div, "class", "gardenFilterCheckbox svelte-wsw0z6");
      this.first = div;
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(labeledcheckbox, div, null);
      append(div, t);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const labeledcheckbox_changes = {};
      if (dirty & 8)
        labeledcheckbox_changes.name = ctx[17].name;
      if (dirty & 8)
        labeledcheckbox_changes.icon = ctx[17].icon;
      if (dirty & 72)
        labeledcheckbox_changes.label = ctx[6](ctx[17].transKey);
      if (!updating_checked && dirty & 10) {
        updating_checked = true;
        labeledcheckbox_changes.checked = ctx[1].facilities[ctx[17].name];
        add_flush_callback(() => updating_checked = false);
      }
      labeledcheckbox.$set(labeledcheckbox_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(labeledcheckbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(labeledcheckbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(labeledcheckbox);
    }
  };
}
function create_body_slot(ctx) {
  let div6;
  let hr0;
  let t0;
  let div1;
  let h30;
  let t1_value = ctx[6]("garden.filter.garden-facilities") + "";
  let t1;
  let t2;
  let div0;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t3;
  let hr1;
  let t4;
  let div5;
  let h31;
  let t5_value = ctx[6]("garden.filter.garden-capacity") + "";
  let t5;
  let t6;
  let div4;
  let div2;
  let p0;
  let t7_value = ctx[6]("garden.filter.spots-available") + "";
  let t7;
  let t8;
  let div3;
  let p1;
  let t9_value = ctx[6]("garden.filter.min") + "";
  let t9;
  let t10;
  let button0;
  let t12;
  let input;
  let t13;
  let button1;
  let current;
  let mounted;
  let dispose;
  let each_value = ctx[3];
  const get_key = (ctx2) => ctx2[17].name;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$2(ctx, each_value, i);
    let key2 = get_key(child_ctx);
    each_1_lookup.set(key2, each_blocks[i] = create_each_block$2(key2, child_ctx));
  }
  return {
    c() {
      div6 = element("div");
      hr0 = element("hr");
      t0 = space();
      div1 = element("div");
      h30 = element("h3");
      t1 = text(t1_value);
      t2 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t3 = space();
      hr1 = element("hr");
      t4 = space();
      div5 = element("div");
      h31 = element("h3");
      t5 = text(t5_value);
      t6 = space();
      div4 = element("div");
      div2 = element("div");
      p0 = element("p");
      t7 = text(t7_value);
      t8 = space();
      div3 = element("div");
      p1 = element("p");
      t9 = text(t9_value);
      t10 = space();
      button0 = element("button");
      button0.textContent = "-";
      t12 = space();
      input = element("input");
      t13 = space();
      button1 = element("button");
      button1.textContent = "+";
      attr(hr0, "class", "svelte-wsw0z6");
      attr(h30, "class", "gardenFilterSubtitle svelte-wsw0z6");
      attr(div0, "class", "gardenFilterCheckboxes svelte-wsw0z6");
      attr(div1, "id", "gardenFacilities");
      attr(div1, "class", "gardenFilterSection svelte-wsw0z6");
      attr(hr1, "class", "svelte-wsw0z6");
      attr(h31, "class", "gardenFilterSubtitle svelte-wsw0z6");
      attr(p0, "class", "svelte-wsw0z6");
      attr(div2, "class", "gardenFilterCapacityText svelte-wsw0z6");
      attr(p1, "class", "svelte-wsw0z6");
      attr(button0, "class", "svelte-wsw0z6");
      attr(input, "type", "number");
      attr(input, "class", "capacity-input svelte-wsw0z6");
      attr(input, "name", "capacity");
      attr(input, "min", "1");
      attr(input, "max", "20");
      attr(button1, "class", "svelte-wsw0z6");
      attr(div3, "class", "gardenFilterCapacityModifier svelte-wsw0z6");
      attr(div4, "class", "gardenFilterCapacitySection svelte-wsw0z6");
      attr(div5, "id", "gardenCapacity");
      attr(div5, "class", "gardenFilterSection svelte-wsw0z6");
      attr(div6, "slot", "body");
      attr(div6, "class", "gardenFilterBodySection svelte-wsw0z6");
    },
    m(target, anchor) {
      insert(target, div6, anchor);
      append(div6, hr0);
      append(div6, t0);
      append(div6, div1);
      append(div1, h30);
      append(h30, t1);
      append(div1, t2);
      append(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      append(div6, t3);
      append(div6, hr1);
      append(div6, t4);
      append(div6, div5);
      append(div5, h31);
      append(h31, t5);
      append(div5, t6);
      append(div5, div4);
      append(div4, div2);
      append(div2, p0);
      append(p0, t7);
      append(div4, t8);
      append(div4, div3);
      append(div3, p1);
      append(p1, t9);
      append(div3, t10);
      append(div3, button0);
      append(div3, t12);
      append(div3, input);
      set_input_value(input, ctx[1].capacity.min);
      append(div3, t13);
      append(div3, button1);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button0, "click", ctx[7]),
          listen(input, "input", ctx[12]),
          listen(button1, "click", ctx[8])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 64) && t1_value !== (t1_value = ctx2[6]("garden.filter.garden-facilities") + ""))
        set_data(t1, t1_value);
      if (dirty & 74) {
        each_value = ctx2[3];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div0, outro_and_destroy_block, create_each_block$2, null, get_each_context$2);
        check_outros();
      }
      if ((!current || dirty & 64) && t5_value !== (t5_value = ctx2[6]("garden.filter.garden-capacity") + ""))
        set_data(t5, t5_value);
      if ((!current || dirty & 64) && t7_value !== (t7_value = ctx2[6]("garden.filter.spots-available") + ""))
        set_data(t7, t7_value);
      if ((!current || dirty & 64) && t9_value !== (t9_value = ctx2[6]("garden.filter.min") + ""))
        set_data(t9, t9_value);
      if (dirty & 2 && to_number(input.value) !== ctx2[1].capacity.min) {
        set_input_value(input, ctx2[1].capacity.min);
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
        detach(div6);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_default_slot$2(ctx) {
  let t_value = ctx[6]("garden.filter.apply-filter") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 64 && t_value !== (t_value = ctx2[6]("garden.filter.apply-filter") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_controls_slot(ctx) {
  let div;
  let p;
  let raw_value = ctx[6]("garden.filter.available", {
    values: {
      amount: Object.values(ctx[0]).length,
      styledAmount: `<strong>${Object.values(ctx[0]).length}</strong>`
    }
  }) + "";
  let t;
  let button;
  let current;
  button = new Button({
    props: {
      uppercase: true,
      small: true,
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[10]);
  return {
    c() {
      div = element("div");
      p = element("p");
      t = space();
      create_component(button.$$.fragment);
      attr(p, "class", "controls-gardens-available svelte-wsw0z6");
      attr(div, "slot", "controls");
      attr(div, "class", "applyGardenFilter svelte-wsw0z6");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, p);
      p.innerHTML = raw_value;
      append(div, t);
      mount_component(button, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 65) && raw_value !== (raw_value = ctx2[6]("garden.filter.available", {
        values: {
          amount: Object.values(ctx2[0]).length,
          styledAmount: `<strong>${Object.values(ctx2[0]).length}</strong>`
        }
      }) + ""))
        p.innerHTML = raw_value;
      const button_changes = {};
      if (dirty & 1048640) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(button);
    }
  };
}
function create_fragment$3(ctx) {
  let modal;
  let updating_show;
  let current;
  let mounted;
  let dispose;
  add_render_callback(ctx[9]);
  function modal_show_binding(value) {
    ctx[13](value);
  }
  let modal_props = {
    maxWidth: maxWidth + "px",
    radius: true,
    center: !ctx[5],
    stickToBottom: ctx[5],
    nopadding: ctx[5],
    ariaLabelledBy: "title",
    $$slots: {
      controls: [
        create_controls_slot,
        ({ ariaLabelledBy }) => ({ 16: ariaLabelledBy }),
        ({ ariaLabelledBy }) => ariaLabelledBy ? 65536 : 0
      ],
      body: [
        create_body_slot,
        ({ ariaLabelledBy }) => ({ 16: ariaLabelledBy }),
        ({ ariaLabelledBy }) => ariaLabelledBy ? 65536 : 0
      ],
      title: [
        create_title_slot,
        ({ ariaLabelledBy }) => ({ 16: ariaLabelledBy }),
        ({ ariaLabelledBy }) => ariaLabelledBy ? 65536 : 0
      ]
    },
    $$scope: { ctx }
  };
  if (ctx[2] !== void 0) {
    modal_props.show = ctx[2];
  }
  modal = new Modal({ props: modal_props });
  binding_callbacks.push(() => bind(modal, "show", modal_show_binding));
  return {
    c() {
      create_component(modal.$$.fragment);
    },
    m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(window, "resize", ctx[9]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const modal_changes = {};
      if (dirty & 32)
        modal_changes.center = !ctx2[5];
      if (dirty & 32)
        modal_changes.stickToBottom = ctx2[5];
      if (dirty & 32)
        modal_changes.nopadding = ctx2[5];
      if (dirty & 1114191) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_show && dirty & 4) {
        updating_show = true;
        modal_changes.show = ctx2[2];
        add_flush_callback(() => updating_show = false);
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(modal, detaching);
      mounted = false;
      dispose();
    }
  };
}
let maxWidth = 700;
function gardenFilterFacilities(garden) {
  for (const [key2, value] of Object.entries(this)) {
    if (value && garden.facilities[key2] !== value)
      return false;
  }
  return true;
}
function gardenFilterCapacity(garden) {
  const value = garden.facilities.capacity;
  return value >= this.min && value <= this.max;
}
function instance$3($$self, $$props, $$invalidate) {
  let $allGardens;
  let $_;
  component_subscribe($$self, allGardens, ($$value) => $$invalidate(14, $allGardens = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(6, $_ = $$value));
  let { facilities } = $$props;
  let { filteredGardens } = $$props;
  let { filter } = $$props;
  let { show } = $$props;
  beforeUpdate(() => {
    $$invalidate(0, filteredGardens = returnFilteredGardens());
  });
  const capacityMinReduce = () => {
    if (filter.capacity.min > 1)
      $$invalidate(1, filter.capacity.min -= 1, filter);
  };
  const capacityMinIncrease = () => {
    if (filter.capacity.min < 20)
      $$invalidate(1, filter.capacity.min += 1, filter);
  };
  const returnFilteredGardens = () => {
    const gardensFiltered = Object.values($allGardens).filter(gardenFilterFacilities, filter.facilities).filter(gardenFilterCapacity, filter.capacity);
    let gardens = {};
    gardensFiltered.map((garden) => {
      gardens[garden.id] = { ...garden };
    });
    return gardens;
  };
  let stickToBottom = false;
  let vw;
  function onwindowresize() {
    $$invalidate(4, vw = window.innerWidth);
  }
  const click_handler = () => {
    $$invalidate(2, show = false);
  };
  function labeledcheckbox_checked_binding(value, facility) {
    if ($$self.$$.not_equal(filter.facilities[facility.name], value)) {
      filter.facilities[facility.name] = value;
      $$invalidate(1, filter);
    }
  }
  function input_input_handler() {
    filter.capacity.min = to_number(this.value);
    $$invalidate(1, filter);
  }
  function modal_show_binding(value) {
    show = value;
    $$invalidate(2, show);
  }
  $$self.$$set = ($$props2) => {
    if ("facilities" in $$props2)
      $$invalidate(3, facilities = $$props2.facilities);
    if ("filteredGardens" in $$props2)
      $$invalidate(0, filteredGardens = $$props2.filteredGardens);
    if ("filter" in $$props2)
      $$invalidate(1, filter = $$props2.filter);
    if ("show" in $$props2)
      $$invalidate(2, show = $$props2.show);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      {
        if (vw < maxWidth) {
          $$invalidate(5, stickToBottom = true);
        } else {
          $$invalidate(5, stickToBottom = false);
        }
      }
    }
  };
  return [
    filteredGardens,
    filter,
    show,
    facilities,
    vw,
    stickToBottom,
    $_,
    capacityMinReduce,
    capacityMinIncrease,
    onwindowresize,
    click_handler,
    labeledcheckbox_checked_binding,
    input_input_handler,
    modal_show_binding
  ];
}
class FacilitiesFilter extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      facilities: 3,
      filteredGardens: 0,
      filter: 1,
      show: 2
    });
  }
}
var FilterLocation_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  child_ctx[20] = i;
  return child_ctx;
}
function create_if_block_2$1(ctx) {
  let div;
  let p;
  let t_value = ctx[3]("garden.filter.no-places") + "";
  let t;
  return {
    c() {
      div = element("div");
      p = element("p");
      t = text(t_value);
      attr(p, "class", "svelte-1gukh2u");
      attr(div, "class", "location-filter-output-error svelte-1gukh2u");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, p);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("garden.filter.no-places") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block$2(ctx) {
  let div;
  let mounted;
  let dispose;
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "location-filter-output svelte-1gukh2u");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      if (!mounted) {
        dispose = [
          action_destroyer(clickOutside.call(null, div)),
          listen(div, "click-outside", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 50) {
        each_value = ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1$2(ctx) {
  let hr;
  return {
    c() {
      hr = element("hr");
      attr(hr, "class", "svelte-1gukh2u");
    },
    m(target, anchor) {
      insert(target, hr, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(hr);
    }
  };
}
function create_each_block$1(ctx) {
  let button;
  let t0_value = ctx[4](ctx[18].place_name) + "";
  let t0;
  let t1;
  let if_block_anchor;
  let mounted;
  let dispose;
  let if_block = ctx[20] != ctx[1].length - 1 && create_if_block_1$2();
  return {
    c() {
      button = element("button");
      t0 = text(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(button, "class", "button-container svelte-1gukh2u");
      attr(button, "tabindex", "0");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, t0);
      insert(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      if (!mounted) {
        dispose = listen(button, "click", function() {
          if (is_function(ctx[5](ctx[18].longitude, ctx[18].latitude)))
            ctx[5](ctx[18].longitude, ctx[18].latitude).apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 2 && t0_value !== (t0_value = ctx[4](ctx[18].place_name) + ""))
        set_data(t0, t0_value);
      if (ctx[20] != ctx[1].length - 1) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_1$2();
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (detaching)
        detach(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$2(ctx) {
  let div;
  let textinput;
  let updating_value;
  let t;
  let if_block_anchor;
  let current;
  function textinput_value_binding(value) {
    ctx[9](value);
  }
  let textinput_props = {
    icon: markerIcon,
    type: "text",
    name: "location-filter",
    id: "location-filter",
    placeholder: ctx[3]("garden.filter.search-city"),
    hideError: true,
    autocomplete: "off"
  };
  if (ctx[0] !== void 0) {
    textinput_props.value = ctx[0];
  }
  textinput = new TextInput({ props: textinput_props });
  binding_callbacks.push(() => bind(textinput, "value", textinput_value_binding));
  function select_block_type(ctx2, dirty) {
    if (ctx2[1].length >= 1)
      return create_if_block$2;
    if (ctx2[2])
      return create_if_block_2$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type && current_block_type(ctx);
  return {
    c() {
      div = element("div");
      create_component(textinput.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(div, "class", "location-filter-input svelte-1gukh2u");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(textinput, div, null);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const textinput_changes = {};
      if (dirty & 8)
        textinput_changes.placeholder = ctx2[3]("garden.filter.search-city");
      if (!updating_value && dirty & 1) {
        updating_value = true;
        textinput_changes.value = ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      textinput.$set(textinput_changes);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if (if_block)
          if_block.d(1);
        if_block = current_block_type && current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(textinput.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(textinput.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(textinput);
      if (detaching)
        detach(t);
      if (if_block) {
        if_block.d(detaching);
      }
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let $locale;
  let $_;
  component_subscribe($$self, D, ($$value) => $$invalidate(12, $locale = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(3, $_ = $$value));
  let { isSearching } = $$props;
  let { fallbackLocation } = $$props;
  const dispatch = createEventDispatcher();
  let locationInput = "";
  let places = [];
  const emptyPlacesAndInput = () => {
    $$invalidate(1, places = []);
    $$invalidate(0, locationInput = "");
  };
  let timeout = null;
  const getLocationWithTimeout = (input) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
      getlocation(input);
    }, 250);
  };
  let showNoPlacesBool = false;
  const getlocation = async (string) => {
    try {
      if (string.trim() !== "") {
        const placesReturnedFromGeocode = await geocodeExtensive(string, fallbackLocation.longitude, fallbackLocation.latitude, $locale, 5);
        if (placesReturnedFromGeocode.type == "succes") {
          $$invalidate(2, showNoPlacesBool = false);
          $$invalidate(1, places = placesReturnedFromGeocode.data);
        } else if (placesReturnedFromGeocode.type == "error") {
          $$invalidate(1, places = []);
          $$invalidate(2, showNoPlacesBool = true);
          showNoPlaces();
        }
      }
    } catch (e) {
      $$invalidate(1, places = []);
      console.log(e);
    }
  };
  const displayPlaceName = (place_name) => {
    const placeParts = place_name.split(",");
    let placeFormat = "";
    for (let index = 0; index < placeParts.length - 1; index++) {
      if (index == placeParts.length - 2) {
        placeFormat += placeParts[index];
      } else {
        placeFormat += placeParts[index] + ", ";
      }
    }
    return placeFormat;
  };
  let timeoutNoPlaces = null;
  const showNoPlaces = () => {
    if (timeoutNoPlaces !== null) {
      clearTimeout(timeoutNoPlaces);
    }
    timeoutNoPlaces = setTimeout(function() {
      $$invalidate(2, showNoPlacesBool = false);
    }, 3e3);
  };
  const goToPlace = (long, lat) => {
    emptyPlacesAndInput();
    dispatch("goToPlace", { longitude: long, latitude: lat });
  };
  const handleClickOutsidePlaces = () => {
    emptyPlacesAndInput();
  };
  function textinput_value_binding(value) {
    locationInput = value;
    $$invalidate(0, locationInput);
  }
  $$self.$$set = ($$props2) => {
    if ("isSearching" in $$props2)
      $$invalidate(7, isSearching = $$props2.isSearching);
    if ("fallbackLocation" in $$props2)
      $$invalidate(8, fallbackLocation = $$props2.fallbackLocation);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      if (locationInput == "")
        emptyPlacesAndInput();
    }
    if ($$self.$$.dirty & 1) {
      getLocationWithTimeout(locationInput);
    }
    if ($$self.$$.dirty & 6) {
      $$invalidate(7, isSearching = !!places.length || showNoPlacesBool);
    }
  };
  return [
    locationInput,
    places,
    showNoPlacesBool,
    $_,
    displayPlaceName,
    goToPlace,
    handleClickOutsidePlaces,
    isSearching,
    fallbackLocation,
    textinput_value_binding
  ];
}
class FilterLocation extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { isSearching: 7, fallbackLocation: 8 });
  }
}
var Filter_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  return child_ctx;
}
function create_default_slot_3(ctx) {
  let html_tag;
  let html_anchor;
  return {
    c() {
      html_tag = new HtmlTag(false);
      html_anchor = empty();
      html_tag.a = html_anchor;
    },
    m(target, anchor) {
      html_tag.m(filterIcon, target, anchor);
      insert(target, html_anchor, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(html_anchor);
      if (detaching)
        html_tag.d();
    }
  };
}
function create_if_block$1(ctx) {
  let div;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t0;
  let t1;
  let current;
  let each_value = ctx[9](ctx[6]);
  const get_key = (ctx2) => ctx2[21].name;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key2 = get_key(child_ctx);
    each_1_lookup.set(key2, each_blocks[i] = create_each_block(key2, child_ctx));
  }
  let if_block0 = ctx[3].capacity.min > 1 && create_if_block_2(ctx);
  let if_block1 = ctx[5] && create_if_block_1$1(ctx);
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      attr(div, "class", "filter-tags svelte-15lu113");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      append(div, t0);
      if (if_block0)
        if_block0.m(div, null);
      append(div, t1);
      if (if_block1)
        if_block1.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 712) {
        each_value = ctx2[9](ctx2[6]);
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, t0, get_each_context);
        check_outros();
      }
      if (ctx2[3].capacity.min > 1) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[5]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 32) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_default_slot_2(ctx) {
  let t_value = ctx[7](ctx[21].transKey) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 192 && t_value !== (t_value = ctx2[7](ctx2[21].transKey) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block(key_1, ctx) {
  let first;
  let tag;
  let current;
  function close_handler() {
    return ctx[14](ctx[21]);
  }
  tag = new Tag({
    props: {
      name: ctx[21].name,
      icon: ctx[21].icon,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  tag.$on("close", close_handler);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(tag.$$.fragment);
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      mount_component(tag, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const tag_changes = {};
      if (dirty & 64)
        tag_changes.name = ctx[21].name;
      if (dirty & 64)
        tag_changes.icon = ctx[21].icon;
      if (dirty & 16777408) {
        tag_changes.$$scope = { dirty, ctx };
      }
      tag.$set(tag_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tag.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tag.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(tag, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let tag;
  let current;
  tag = new Tag({
    props: {
      name: "min-capacity",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  tag.$on("close", ctx[15]);
  return {
    c() {
      create_component(tag.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tag, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tag_changes = {};
      if (dirty & 16777352) {
        tag_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tag.$set(tag_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tag.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tag.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tag, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t_value = ctx[7]("garden.filter.min-capacity", {
    values: { capacity: ctx[3].capacity.min }
  }) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 136 && t_value !== (t_value = ctx2[7]("garden.filter.min-capacity", {
        values: { capacity: ctx2[3].capacity.min }
      }) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_1$1(ctx) {
  let tag;
  let current;
  tag = new Tag({
    props: {
      name: "all-filters",
      pointer: true,
      invert: true,
      closeButton: true,
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  tag.$on("click", ctx[16]);
  tag.$on("close", ctx[17]);
  return {
    c() {
      create_component(tag.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tag, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tag_changes = {};
      if (dirty & 16777344) {
        tag_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tag.$set(tag_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tag.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tag.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tag, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let t_value = ctx[7]("garden.filter.all-filters") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 128 && t_value !== (t_value = ctx2[7]("garden.filter.all-filters") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$1(ctx) {
  let div3;
  let div2;
  let div0;
  let filterlocation;
  let updating_isSearching;
  let t0;
  let div1;
  let button;
  let t1;
  let t2;
  let facilitiesfilter;
  let updating_show;
  let updating_filteredGardens;
  let updating_filter;
  let current;
  let mounted;
  let dispose;
  add_render_callback(ctx[10]);
  function filterlocation_isSearching_binding(value) {
    ctx[11](value);
  }
  let filterlocation_props = {
    fallbackLocation: ctx[1]
  };
  if (ctx[4] !== void 0) {
    filterlocation_props.isSearching = ctx[4];
  }
  filterlocation = new FilterLocation({ props: filterlocation_props });
  binding_callbacks.push(() => bind(filterlocation, "isSearching", filterlocation_isSearching_binding));
  filterlocation.$on("goToPlace", ctx[12]);
  button = new Button({
    props: {
      type: "button",
      uppercase: true,
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[13]);
  let if_block = !ctx[4] && create_if_block$1(ctx);
  function facilitiesfilter_show_binding(value) {
    ctx[18](value);
  }
  function facilitiesfilter_filteredGardens_binding(value) {
    ctx[19](value);
  }
  function facilitiesfilter_filter_binding(value) {
    ctx[20](value);
  }
  let facilitiesfilter_props = { facilities: ctx[8] };
  if (ctx[2] !== void 0) {
    facilitiesfilter_props.show = ctx[2];
  }
  if (ctx[0] !== void 0) {
    facilitiesfilter_props.filteredGardens = ctx[0];
  }
  if (ctx[3] !== void 0) {
    facilitiesfilter_props.filter = ctx[3];
  }
  facilitiesfilter = new FacilitiesFilter({ props: facilitiesfilter_props });
  binding_callbacks.push(() => bind(facilitiesfilter, "show", facilitiesfilter_show_binding));
  binding_callbacks.push(() => bind(facilitiesfilter, "filteredGardens", facilitiesfilter_filteredGardens_binding));
  binding_callbacks.push(() => bind(facilitiesfilter, "filter", facilitiesfilter_filter_binding));
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      create_component(filterlocation.$$.fragment);
      t0 = space();
      div1 = element("div");
      create_component(button.$$.fragment);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      create_component(facilitiesfilter.$$.fragment);
      attr(div0, "class", "location-filter svelte-15lu113");
      attr(div1, "class", "garden-filter svelte-15lu113");
      attr(div2, "class", "filter-controls svelte-15lu113");
      attr(div3, "class", "filter svelte-15lu113");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div2);
      append(div2, div0);
      mount_component(filterlocation, div0, null);
      append(div2, t0);
      append(div2, div1);
      mount_component(button, div1, null);
      append(div3, t1);
      if (if_block)
        if_block.m(div3, null);
      insert(target, t2, anchor);
      mount_component(facilitiesfilter, target, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(window, "resize", ctx[10]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const filterlocation_changes = {};
      if (dirty & 2)
        filterlocation_changes.fallbackLocation = ctx2[1];
      if (!updating_isSearching && dirty & 16) {
        updating_isSearching = true;
        filterlocation_changes.isSearching = ctx2[4];
        add_flush_callback(() => updating_isSearching = false);
      }
      filterlocation.$set(filterlocation_changes);
      const button_changes = {};
      if (dirty & 16777216) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (!ctx2[4]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div3, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const facilitiesfilter_changes = {};
      if (!updating_show && dirty & 4) {
        updating_show = true;
        facilitiesfilter_changes.show = ctx2[2];
        add_flush_callback(() => updating_show = false);
      }
      if (!updating_filteredGardens && dirty & 1) {
        updating_filteredGardens = true;
        facilitiesfilter_changes.filteredGardens = ctx2[0];
        add_flush_callback(() => updating_filteredGardens = false);
      }
      if (!updating_filter && dirty & 8) {
        updating_filter = true;
        facilitiesfilter_changes.filter = ctx2[3];
        add_flush_callback(() => updating_filter = false);
      }
      facilitiesfilter.$set(facilitiesfilter_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(filterlocation.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      transition_in(if_block);
      transition_in(facilitiesfilter.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(filterlocation.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      transition_out(if_block);
      transition_out(facilitiesfilter.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(filterlocation);
      destroy_component(button);
      if (if_block)
        if_block.d();
      if (detaching)
        detach(t2);
      destroy_component(facilitiesfilter, detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(7, $_ = $$value));
  let { filteredGardens } = $$props;
  let { fallbackLocation } = $$props;
  let showFilterModal = false;
  let filter = {
    facilities: [],
    capacity: { min: 1, max: 20 }
  };
  const facilities = [
    {
      name: "toilet",
      icon: toiletIcon,
      transKey: "garden.facilities.labels.toilet"
    },
    {
      name: "shower",
      icon: showerIcon,
      transKey: "garden.facilities.labels.shower"
    },
    {
      name: "electricity",
      icon: electricityIcon,
      transKey: "garden.facilities.labels.electricity"
    },
    {
      name: "tent",
      icon: tentIcon,
      transKey: "garden.facilities.labels.tent"
    },
    {
      name: "bonfire",
      icon: bonfireIcon,
      transKey: "garden.facilities.labels.bonfire"
    },
    {
      name: "water",
      icon: waterIcon,
      transKey: "garden.facilities.labels.water"
    },
    {
      name: "drinkableWater",
      icon: waterIcon,
      transKey: "garden.facilities.labels.drinkable-water"
    }
  ];
  let isSearching = false;
  let allFiltersTag = false;
  let vw;
  const activeFacilities = (currentWidth) => {
    let activeFacilitiesFiltered = facilities.filter((facility) => filter.facilities[facility.name] === true);
    let maxWidth2 = 700;
    $$invalidate(5, allFiltersTag = false);
    if (currentWidth < maxWidth2) {
      if (activeFacilitiesFiltered.length > 2 && filter.capacity.min > 1) {
        activeFacilitiesFiltered = activeFacilitiesFiltered.slice(0, 2);
        $$invalidate(5, allFiltersTag = true);
      } else if (activeFacilitiesFiltered.length > 3) {
        activeFacilitiesFiltered = activeFacilitiesFiltered.slice(0, 3);
        $$invalidate(5, allFiltersTag = true);
      }
    }
    return activeFacilitiesFiltered;
  };
  function onwindowresize() {
    $$invalidate(6, vw = window.innerWidth);
  }
  function filterlocation_isSearching_binding(value) {
    isSearching = value;
    $$invalidate(4, isSearching);
  }
  function goToPlace_handler(event) {
    bubble.call(this, $$self, event);
  }
  const click_handler = () => {
    $$invalidate(2, showFilterModal = true);
  };
  const close_handler = (facility) => $$invalidate(3, filter.facilities[facility.name] = false, filter);
  const close_handler_1 = () => $$invalidate(3, filter.capacity.min = 1, filter);
  const click_handler_1 = () => {
    $$invalidate(2, showFilterModal = true);
  };
  const close_handler_2 = () => {
    $$invalidate(3, filter = {
      facilities: [],
      capacity: { min: 1, max: 20 }
    });
  };
  function facilitiesfilter_show_binding(value) {
    showFilterModal = value;
    $$invalidate(2, showFilterModal);
  }
  function facilitiesfilter_filteredGardens_binding(value) {
    filteredGardens = value;
    $$invalidate(0, filteredGardens);
  }
  function facilitiesfilter_filter_binding(value) {
    filter = value;
    $$invalidate(3, filter);
  }
  $$self.$$set = ($$props2) => {
    if ("filteredGardens" in $$props2)
      $$invalidate(0, filteredGardens = $$props2.filteredGardens);
    if ("fallbackLocation" in $$props2)
      $$invalidate(1, fallbackLocation = $$props2.fallbackLocation);
  };
  return [
    filteredGardens,
    fallbackLocation,
    showFilterModal,
    filter,
    isSearching,
    allFiltersTag,
    vw,
    $_,
    facilities,
    activeFacilities,
    onwindowresize,
    filterlocation_isSearching_binding,
    goToPlace_handler,
    click_handler,
    close_handler,
    close_handler_1,
    click_handler_1,
    close_handler_2,
    facilitiesfilter_show_binding,
    facilitiesfilter_filteredGardens_binding,
    facilitiesfilter_filter_binding
  ];
}
class Filter extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { filteredGardens: 0, fallbackLocation: 1 });
  }
}
var _layout_svelte_svelte_type_style_lang = "";
function create_if_block_1(ctx) {
  let gardenlayer;
  let t0;
  let drawer;
  let t1;
  let waymarkedtrails;
  let t2;
  let current;
  gardenlayer = new GardenLayer({
    props: {
      selectedGardenId: ctx[2] ? ctx[2].id : null,
      allGardens: ctx[8] || ctx[3]
    }
  });
  gardenlayer.$on("garden-click", ctx[20]);
  drawer = new Drawer({
    props: { garden: ctx[2] }
  });
  drawer.$on("close", ctx[16]);
  waymarkedtrails = new WaymarkedTrails({
    props: {
      showHiking: ctx[6],
      showCycling: ctx[7]
    }
  });
  const default_slot_template = ctx[19].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[24], null);
  return {
    c() {
      create_component(gardenlayer.$$.fragment);
      t0 = space();
      create_component(drawer.$$.fragment);
      t1 = space();
      create_component(waymarkedtrails.$$.fragment);
      t2 = space();
      if (default_slot)
        default_slot.c();
    },
    m(target, anchor) {
      mount_component(gardenlayer, target, anchor);
      insert(target, t0, anchor);
      mount_component(drawer, target, anchor);
      insert(target, t1, anchor);
      mount_component(waymarkedtrails, target, anchor);
      insert(target, t2, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      const gardenlayer_changes = {};
      if (dirty & 4)
        gardenlayer_changes.selectedGardenId = ctx2[2] ? ctx2[2].id : null;
      if (dirty & 264)
        gardenlayer_changes.allGardens = ctx2[8] || ctx2[3];
      gardenlayer.$set(gardenlayer_changes);
      const drawer_changes = {};
      if (dirty & 4)
        drawer_changes.garden = ctx2[2];
      drawer.$set(drawer_changes);
      const waymarkedtrails_changes = {};
      if (dirty & 64)
        waymarkedtrails_changes.showHiking = ctx2[6];
      if (dirty & 128)
        waymarkedtrails_changes.showCycling = ctx2[7];
      waymarkedtrails.$set(waymarkedtrails_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16777216)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[24], !current ? get_all_dirty_from_scope(ctx2[24]) : get_slot_changes(default_slot_template, ctx2[24], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(gardenlayer.$$.fragment, local);
      transition_in(drawer.$$.fragment, local);
      transition_in(waymarkedtrails.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(gardenlayer.$$.fragment, local);
      transition_out(drawer.$$.fragment, local);
      transition_out(waymarkedtrails.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(gardenlayer, detaching);
      if (detaching)
        detach(t0);
      destroy_component(drawer, detaching);
      if (detaching)
        detach(t1);
      destroy_component(waymarkedtrails, detaching);
      if (detaching)
        detach(t2);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block(ctx) {
  let div2;
  let button;
  let icon;
  let t0;
  let div1;
  let div0;
  let t1;
  let h3;
  let t2_value = ctx[13]("map.vehicle-notice.title") + "";
  let t2;
  let t3;
  let p;
  let t4_value = ctx[13]("map.vehicle-notice.text") + "";
  let t4;
  let current;
  let mounted;
  let dispose;
  icon = new Icon({ props: { icon: crossIcon } });
  return {
    c() {
      div2 = element("div");
      button = element("button");
      create_component(icon.$$.fragment);
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      div0.innerHTML = `<img src="/images/no-car.svg" alt="No vehicle allowed" class="svelte-1whiwdp"/>`;
      t1 = space();
      h3 = element("h3");
      t2 = text(t2_value);
      t3 = space();
      p = element("p");
      t4 = text(t4_value);
      attr(button, "aria-label", "Close notice");
      attr(button, "class", "button-container close svelte-1whiwdp");
      attr(div0, "class", "image-container svelte-1whiwdp");
      attr(h3, "class", "svelte-1whiwdp");
      attr(p, "class", "mt-m svelte-1whiwdp");
      attr(div1, "class", "vehicle-notice svelte-1whiwdp");
      attr(div2, "class", "vehicle-notice-wrapper svelte-1whiwdp");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, button);
      mount_component(icon, button, null);
      append(div2, t0);
      append(div2, div1);
      append(div1, div0);
      append(div1, t1);
      append(div1, h3);
      append(h3, t2);
      append(div1, t3);
      append(div1, p);
      append(p, t4);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[17]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 8192) && t2_value !== (t2_value = ctx2[13]("map.vehicle-notice.title") + ""))
        set_data(t2, t2_value);
      if ((!current || dirty & 8192) && t4_value !== (t4_value = ctx2[13]("map.vehicle-notice.text") + ""))
        set_data(t4, t4_value);
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
        detach(div2);
      destroy_component(icon);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = !ctx[4] && create_if_block_1(ctx);
  let if_block1 = ctx[9] && create_if_block(ctx);
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
    p(ctx2, dirty) {
      if (!ctx2[4]) {
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
      if (ctx2[9]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 512) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
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
function create_fragment(ctx) {
  let progress;
  let t0;
  let div3;
  let map;
  let t1;
  let div2;
  let div0;
  let labeledcheckbox0;
  let updating_checked;
  let t2;
  let div1;
  let labeledcheckbox1;
  let updating_checked_1;
  let t3;
  let span;
  let raw_value = ctx[13]("map.trails.attribution", {
    values: {
      link: `<a href="https://waymarkedtrails.org/" target="_blank">Waymarked Trails</a>`
    }
  }) + "";
  let t4;
  let filter;
  let updating_filteredGardens;
  let current;
  progress = new Progress({
    props: {
      active: ctx[4] && !ctx[5]
    }
  });
  map = new Map$1({
    props: {
      lon: ctx[11].longitude,
      lat: ctx[11].latitude,
      recenterOnUpdate: true,
      initialLon: ctx[0].longitude,
      initialLat: ctx[0].latitude,
      jump: ctx[1],
      zoom: ctx[10],
      applyZoom: ctx[12],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  function labeledcheckbox0_checked_binding(value) {
    ctx[21](value);
  }
  let labeledcheckbox0_props = {
    name: "hiking",
    icon: hikerIcon,
    label: ctx[13]("map.trails.hiking")
  };
  if (ctx[6] !== void 0) {
    labeledcheckbox0_props.checked = ctx[6];
  }
  labeledcheckbox0 = new LabeledCheckbox({ props: labeledcheckbox0_props });
  binding_callbacks.push(() => bind(labeledcheckbox0, "checked", labeledcheckbox0_checked_binding));
  function labeledcheckbox1_checked_binding(value) {
    ctx[22](value);
  }
  let labeledcheckbox1_props = {
    name: "cycling",
    icon: cyclistIcon,
    label: ctx[13]("map.trails.cycling")
  };
  if (ctx[7] !== void 0) {
    labeledcheckbox1_props.checked = ctx[7];
  }
  labeledcheckbox1 = new LabeledCheckbox({ props: labeledcheckbox1_props });
  binding_callbacks.push(() => bind(labeledcheckbox1, "checked", labeledcheckbox1_checked_binding));
  function filter_filteredGardens_binding(value) {
    ctx[23](value);
  }
  let filter_props = {
    fallbackLocation: ctx[0]
  };
  if (ctx[8] !== void 0) {
    filter_props.filteredGardens = ctx[8];
  }
  filter = new Filter({ props: filter_props });
  binding_callbacks.push(() => bind(filter, "filteredGardens", filter_filteredGardens_binding));
  filter.$on("goToPlace", ctx[15]);
  return {
    c() {
      create_component(progress.$$.fragment);
      t0 = space();
      div3 = element("div");
      create_component(map.$$.fragment);
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      create_component(labeledcheckbox0.$$.fragment);
      t2 = space();
      div1 = element("div");
      create_component(labeledcheckbox1.$$.fragment);
      t3 = space();
      span = element("span");
      t4 = space();
      create_component(filter.$$.fragment);
      attr(div0, "class", "svelte-1whiwdp");
      attr(div1, "class", "svelte-1whiwdp");
      attr(span, "class", "attribution svelte-1whiwdp");
      attr(div2, "class", "trails svelte-1whiwdp");
      attr(div3, "class", "map-section svelte-1whiwdp");
    },
    m(target, anchor) {
      mount_component(progress, target, anchor);
      insert(target, t0, anchor);
      insert(target, div3, anchor);
      mount_component(map, div3, null);
      append(div3, t1);
      append(div3, div2);
      append(div2, div0);
      mount_component(labeledcheckbox0, div0, null);
      append(div2, t2);
      append(div2, div1);
      mount_component(labeledcheckbox1, div1, null);
      append(div2, t3);
      append(div2, span);
      span.innerHTML = raw_value;
      append(div3, t4);
      mount_component(filter, div3, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const progress_changes = {};
      if (dirty & 48)
        progress_changes.active = ctx2[4] && !ctx2[5];
      progress.$set(progress_changes);
      const map_changes = {};
      if (dirty & 2048)
        map_changes.lon = ctx2[11].longitude;
      if (dirty & 2048)
        map_changes.lat = ctx2[11].latitude;
      if (dirty & 1)
        map_changes.initialLon = ctx2[0].longitude;
      if (dirty & 1)
        map_changes.initialLat = ctx2[0].latitude;
      if (dirty & 2)
        map_changes.jump = ctx2[1];
      if (dirty & 1024)
        map_changes.zoom = ctx2[10];
      if (dirty & 4096)
        map_changes.applyZoom = ctx2[12];
      if (dirty & 16786396) {
        map_changes.$$scope = { dirty, ctx: ctx2 };
      }
      map.$set(map_changes);
      const labeledcheckbox0_changes = {};
      if (dirty & 8192)
        labeledcheckbox0_changes.label = ctx2[13]("map.trails.hiking");
      if (!updating_checked && dirty & 64) {
        updating_checked = true;
        labeledcheckbox0_changes.checked = ctx2[6];
        add_flush_callback(() => updating_checked = false);
      }
      labeledcheckbox0.$set(labeledcheckbox0_changes);
      const labeledcheckbox1_changes = {};
      if (dirty & 8192)
        labeledcheckbox1_changes.label = ctx2[13]("map.trails.cycling");
      if (!updating_checked_1 && dirty & 128) {
        updating_checked_1 = true;
        labeledcheckbox1_changes.checked = ctx2[7];
        add_flush_callback(() => updating_checked_1 = false);
      }
      labeledcheckbox1.$set(labeledcheckbox1_changes);
      if ((!current || dirty & 8192) && raw_value !== (raw_value = ctx2[13]("map.trails.attribution", {
        values: {
          link: `<a href="https://waymarkedtrails.org/" target="_blank">Waymarked Trails</a>`
        }
      }) + ""))
        span.innerHTML = raw_value;
      const filter_changes = {};
      if (dirty & 1)
        filter_changes.fallbackLocation = ctx2[0];
      if (!updating_filteredGardens && dirty & 256) {
        updating_filteredGardens = true;
        filter_changes.filteredGardens = ctx2[8];
        add_flush_callback(() => updating_filteredGardens = false);
      }
      filter.$set(filter_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(progress.$$.fragment, local);
      transition_in(map.$$.fragment, local);
      transition_in(labeledcheckbox0.$$.fragment, local);
      transition_in(labeledcheckbox1.$$.fragment, local);
      transition_in(filter.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(progress.$$.fragment, local);
      transition_out(map.$$.fragment, local);
      transition_out(labeledcheckbox0.$$.fragment, local);
      transition_out(labeledcheckbox1.$$.fragment, local);
      transition_out(filter.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(progress, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div3);
      destroy_component(map);
      destroy_component(labeledcheckbox0);
      destroy_component(labeledcheckbox1);
      destroy_component(filter);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let applyZoom;
  let selectedGarden;
  let center;
  let $allGardens;
  let $goto;
  let $params;
  let $isFetchingGardens;
  let $_;
  component_subscribe($$self, allGardens, ($$value) => $$invalidate(3, $allGardens = $$value));
  component_subscribe($$self, goto, ($$value) => $$invalidate(25, $goto = $$value));
  component_subscribe($$self, params, ($$value) => $$invalidate(18, $params = $$value));
  component_subscribe($$self, isFetchingGardens, ($$value) => $$invalidate(4, $isFetchingGardens = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(13, $_ = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let fallbackLocation = { longitude: 4.5, latitude: 50.5 };
  let geolocationIsLoaded = false;
  let showHiking = false;
  let showCycling = false;
  let filteredGardens;
  let carNoticeShown = !getCookie("car-notice-dismissed");
  let usingGardenLink = !!$params.gardenId;
  let zoom = usingGardenLink ? ZOOM_LEVELS.ROAD : ZOOM_LEVELS.SMALL_COUNTRY;
  const selectGarden = (garden) => {
    const newSelectedId = garden.id;
    const newGarden = $allGardens[newSelectedId];
    $$invalidate(11, center = {
      longitude: newGarden.location.longitude,
      latitude: newGarden.location.latitude
    });
    $$invalidate(12, applyZoom = false);
    $goto(`${routes.MAP}/garden/${newSelectedId}`);
  };
  const goToPlace = (event) => {
    $$invalidate(10, zoom = ZOOM_LEVELS.CITY);
    $$invalidate(12, applyZoom = true);
    $$invalidate(11, center = {
      longitude: event.detail.longitude,
      latitude: event.detail.latitude
    });
  };
  const closeDrawer = () => {
    $$invalidate(1, usingGardenLink = false);
    $goto(routes.MAP);
  };
  const closeCarNotice = () => {
    const date = new Date();
    date.setTime(date.getTime() + 365 * 864e5);
    setCookie("car-notice-dismissed", true, { expires: date.toGMTString() });
    $$invalidate(9, carNoticeShown = false);
  };
  onMount(async () => {
    if (Object.keys($allGardens).length === 0) {
      try {
        await getAllListedGardens();
      } catch (ex) {
        console.log(ex);
        isFetchingGardens.set(false);
      }
    }
    if (!geolocationIsLoaded && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        $$invalidate(0, fallbackLocation = {
          longitude: pos.coords.longitude,
          latitude: pos.coords.latitude
        });
        $$invalidate(5, geolocationIsLoaded = true);
      }, (err) => {
        console.log(err);
        $$invalidate(5, geolocationIsLoaded = true);
      });
    }
  });
  onDestroy(() => {
    isFetchingGardens.set(false);
  });
  const garden_click_handler = (e) => selectGarden(e.detail);
  function labeledcheckbox0_checked_binding(value) {
    showHiking = value;
    $$invalidate(6, showHiking);
  }
  function labeledcheckbox1_checked_binding(value) {
    showCycling = value;
    $$invalidate(7, showCycling);
  }
  function filter_filteredGardens_binding(value) {
    filteredGardens = value;
    $$invalidate(8, filteredGardens);
  }
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(24, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      $$invalidate(12, applyZoom = usingGardenLink ? true : false);
    }
    if ($$self.$$.dirty & 262168) {
      $$invalidate(2, selectedGarden = $isFetchingGardens ? null : $allGardens[$params.gardenId]);
    }
    if ($$self.$$.dirty & 5) {
      $$invalidate(11, center = selectedGarden ? {
        longitude: selectedGarden.location.longitude,
        latitude: selectedGarden.location.latitude
      } : fallbackLocation);
    }
  };
  return [
    fallbackLocation,
    usingGardenLink,
    selectedGarden,
    $allGardens,
    $isFetchingGardens,
    geolocationIsLoaded,
    showHiking,
    showCycling,
    filteredGardens,
    carNoticeShown,
    zoom,
    center,
    applyZoom,
    $_,
    selectGarden,
    goToPlace,
    closeDrawer,
    closeCarNotice,
    $params,
    slots,
    garden_click_handler,
    labeledcheckbox0_checked_binding,
    labeledcheckbox1_checked_binding,
    filter_filteredGardens_binding,
    $$scope
  ];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Layout as default };
