import { S as SvelteComponent, i as init, s as safe_not_equal, w as create_slot, e as element, b as attr, d as insert, f as append, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, h as transition_in, M as add_render_callback, P as create_bidirectional_transition, j as transition_out, k as detach, a as space, t as text, C as toggle_class, D as listen, g as set_data, q as group_outros, r as check_outros, J as bubble } from "./index.ae92f232.js";
import { b as slide } from "./index.f441bdbc.js";
var Collapsible_svelte_svelte_type_style_lang = "";
const get_content_slot_changes = (dirty) => ({});
const get_content_slot_context = (ctx) => ({});
const get_title_slot_changes = (dirty) => ({});
const get_title_slot_context = (ctx) => ({});
function create_if_block(ctx) {
  let div1;
  let div0;
  let div1_transition;
  let current;
  const content_slot_template = ctx[2].content;
  const content_slot = create_slot(content_slot_template, ctx, ctx[1], get_content_slot_context);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (content_slot)
        content_slot.c();
      attr(div0, "class", "content svelte-bd4vjv");
      attr(div1, "class", "green-border-bottom svelte-bd4vjv");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      if (content_slot) {
        content_slot.m(div0, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (content_slot) {
        if (content_slot.p && (!current || dirty & 2)) {
          update_slot_base(content_slot, content_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(content_slot_template, ctx2[1], dirty, get_content_slot_changes), get_content_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(content_slot, local);
      add_render_callback(() => {
        if (!div1_transition)
          div1_transition = create_bidirectional_transition(div1, slide, { duration: 300 }, true);
        div1_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(content_slot, local);
      if (!div1_transition)
        div1_transition = create_bidirectional_transition(div1, slide, { duration: 300 }, false);
      div1_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (content_slot)
        content_slot.d(detaching);
      if (detaching && div1_transition)
        div1_transition.end();
    }
  };
}
function create_fragment(ctx) {
  let button;
  let div1;
  let div0;
  let t0;
  let span;
  let t1_value = ctx[0] ? "\u2212" : "+";
  let t1;
  let t2;
  let current;
  let mounted;
  let dispose;
  const title_slot_template = ctx[2].title;
  const title_slot = create_slot(title_slot_template, ctx, ctx[1], get_title_slot_context);
  let if_block = ctx[0] && create_if_block(ctx);
  return {
    c() {
      button = element("button");
      div1 = element("div");
      div0 = element("div");
      if (title_slot)
        title_slot.c();
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      t2 = space();
      if (if_block)
        if_block.c();
      attr(div0, "class", "title svelte-bd4vjv");
      attr(span, "class", "sign svelte-bd4vjv");
      attr(div1, "class", "collapsible-item svelte-bd4vjv");
      toggle_class(div1, "green-border-bottom", !ctx[0]);
      attr(button, "class", "button button-container svelte-bd4vjv");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, div1);
      append(div1, div0);
      if (title_slot) {
        title_slot.m(div0, null);
      }
      append(div1, t0);
      append(div1, span);
      append(span, t1);
      append(button, t2);
      if (if_block)
        if_block.m(button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[3]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & 2)) {
          update_slot_base(title_slot, title_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(title_slot_template, ctx2[1], dirty, get_title_slot_changes), get_title_slot_context);
        }
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0] ? "\u2212" : "+"))
        set_data(t1, t1_value);
      if (dirty & 1) {
        toggle_class(div1, "green-border-bottom", !ctx2[0]);
      }
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
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
      transition_in(title_slot, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(title_slot, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (title_slot)
        title_slot.d(detaching);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { open = false } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [open, $$scope, slots, click_handler];
}
class Collapsible extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { open: 0 });
  }
}
export { Collapsible as C };
