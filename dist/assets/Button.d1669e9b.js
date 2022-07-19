import { S as SvelteComponent, i as init, s as safe_not_equal, p as empty, d as insert, q as group_outros, j as transition_out, r as check_outros, h as transition_in, k as detach, u as assign, v as exclude_internal_props, w as create_slot, e as element, b as attr, x as null_to_empty, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, B as createEventDispatcher, c as create_component, C as toggle_class, m as mount_component, D as listen, l as destroy_component } from "./index.ae92f232.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
function create_if_block_2(ctx) {
  let h2;
  let current;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  return {
    c() {
      h2 = element("h2");
      if (default_slot)
        default_slot.c();
      attr(h2, "class", null_to_empty(ctx[1]) + " svelte-kux8o3");
    },
    m(target, anchor) {
      insert(target, h2, anchor);
      if (default_slot) {
        default_slot.m(h2, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
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
      if (detaching)
        detach(h2);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let span;
  let current;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  return {
    c() {
      span = element("span");
      if (default_slot)
        default_slot.c();
      attr(span, "class", null_to_empty(ctx[1]) + " svelte-kux8o3");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      if (default_slot) {
        default_slot.m(span, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
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
      if (detaching)
        detach(span);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let p;
  let current;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  return {
    c() {
      p = element("p");
      if (default_slot)
        default_slot.c();
      attr(p, "class", null_to_empty(ctx[1]) + " svelte-kux8o3");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      if (default_slot) {
        default_slot.m(p, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
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
      if (detaching)
        detach(p);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$1, create_if_block_1, create_if_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0] === "p")
      return 0;
    if (ctx2[0] === "span")
      return 1;
    if (ctx2[0] === "h2")
      return 2;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        } else {
          if_block = null;
        }
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
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { is = "p" } = $$props;
  let { size = "m" } = $$props;
  let { weight = "inherit" } = $$props;
  let { className = $$props.class || "" } = $$props;
  const allowedSize = ["m", "l"];
  const allowedWeight = ["inherit", "thin", "bold"];
  if (!allowedSize.includes(size))
    throw new Error("Size props is invalid");
  if (!allowedWeight.includes(weight))
    throw new Error("Weight props is invalid");
  let classNames = `text ${className} ${size} ${weight}`;
  $$self.$$set = ($$new_props) => {
    $$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("is" in $$new_props)
      $$invalidate(0, is = $$new_props.is);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("weight" in $$new_props)
      $$invalidate(3, weight = $$new_props.weight);
    if ("className" in $$new_props)
      $$invalidate(4, className = $$new_props.className);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [is, classNames, size, weight, className, $$scope, slots];
}
class Text extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { is: 0, size: 2, weight: 3, className: 4 });
  }
}
function create_else_block(ctx) {
  let button;
  let text_1;
  let current;
  let mounted;
  let dispose;
  text_1 = new Text({
    props: {
      is: "span",
      weight: "bold",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      button = element("button");
      create_component(text_1.$$.fragment);
      attr(button, "class", "button svelte-dj6jy0");
      attr(button, "type", ctx[0]);
      toggle_class(button, "disabled", ctx[9]);
      toggle_class(button, "uppercase", ctx[3]);
      toggle_class(button, "fit", ctx[4]);
      toggle_class(button, "medium", ctx[6]);
      toggle_class(button, "small", ctx[7]);
      toggle_class(button, "xsmall", ctx[8]);
      toggle_class(button, "inverse", ctx[2]);
      toggle_class(button, "clicked", ctx[10]);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      mount_component(text_1, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[11]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const text_1_changes = {};
      if (dirty & 16384) {
        text_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      text_1.$set(text_1_changes);
      if (!current || dirty & 1) {
        attr(button, "type", ctx2[0]);
      }
      if (dirty & 512) {
        toggle_class(button, "disabled", ctx2[9]);
      }
      if (dirty & 8) {
        toggle_class(button, "uppercase", ctx2[3]);
      }
      if (dirty & 16) {
        toggle_class(button, "fit", ctx2[4]);
      }
      if (dirty & 64) {
        toggle_class(button, "medium", ctx2[6]);
      }
      if (dirty & 128) {
        toggle_class(button, "small", ctx2[7]);
      }
      if (dirty & 256) {
        toggle_class(button, "xsmall", ctx2[8]);
      }
      if (dirty & 4) {
        toggle_class(button, "inverse", ctx2[2]);
      }
      if (dirty & 1024) {
        toggle_class(button, "clicked", ctx2[10]);
      }
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
        detach(button);
      destroy_component(text_1);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block(ctx) {
  let a;
  let text_1;
  let current;
  let mounted;
  let dispose;
  text_1 = new Text({
    props: {
      is: "span",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      a = element("a");
      create_component(text_1.$$.fragment);
      attr(a, "class", "button svelte-dj6jy0");
      attr(a, "href", ctx[1]);
      attr(a, "target", ctx[5]);
      toggle_class(a, "uppercase", ctx[3]);
      toggle_class(a, "disabled", ctx[9]);
      toggle_class(a, "fit", ctx[4]);
      toggle_class(a, "small", ctx[7]);
      toggle_class(a, "xsmall", ctx[8]);
      toggle_class(a, "medium", ctx[6]);
      toggle_class(a, "inverse", ctx[2]);
      toggle_class(a, "clicked", ctx[10]);
    },
    m(target, anchor) {
      insert(target, a, anchor);
      mount_component(text_1, a, null);
      current = true;
      if (!mounted) {
        dispose = listen(a, "click", ctx[13]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const text_1_changes = {};
      if (dirty & 16384) {
        text_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      text_1.$set(text_1_changes);
      if (!current || dirty & 2) {
        attr(a, "href", ctx2[1]);
      }
      if (!current || dirty & 32) {
        attr(a, "target", ctx2[5]);
      }
      if (dirty & 8) {
        toggle_class(a, "uppercase", ctx2[3]);
      }
      if (dirty & 512) {
        toggle_class(a, "disabled", ctx2[9]);
      }
      if (dirty & 16) {
        toggle_class(a, "fit", ctx2[4]);
      }
      if (dirty & 128) {
        toggle_class(a, "small", ctx2[7]);
      }
      if (dirty & 256) {
        toggle_class(a, "xsmall", ctx2[8]);
      }
      if (dirty & 64) {
        toggle_class(a, "medium", ctx2[6]);
      }
      if (dirty & 4) {
        toggle_class(a, "inverse", ctx2[2]);
      }
      if (dirty & 1024) {
        toggle_class(a, "clicked", ctx2[10]);
      }
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
        detach(a);
      destroy_component(text_1);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_1(ctx) {
  let current;
  const default_slot_template = ctx[12].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[14], null);
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
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16384)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[14], !current ? get_all_dirty_from_scope(ctx2[14]) : get_slot_changes(default_slot_template, ctx2[14], dirty, null), null);
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
function create_default_slot(ctx) {
  let current;
  const default_slot_template = ctx[12].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[14], null);
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
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16384)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[14], !current ? get_all_dirty_from_scope(ctx2[14]) : get_slot_changes(default_slot_template, ctx2[14], dirty, null), null);
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
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
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
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { type = null } = $$props;
  let { href = null } = $$props;
  let { inverse = false } = $$props;
  let { uppercase = false } = $$props;
  let { fit = true } = $$props;
  let { target = null } = $$props;
  let { medium = false } = $$props;
  let { small = false } = $$props;
  let { xsmall = false } = $$props;
  let { disabled = false } = $$props;
  const dispatch = createEventDispatcher();
  let clicked;
  const click = (e) => {
    $$invalidate(10, clicked = true);
    setTimeout(() => $$invalidate(10, clicked = false), 100);
    if (!disabled)
      return dispatch("click", e);
  };
  const click_handler = (e) => {
    if (disabled)
      e.preventDefault();
    click(e);
  };
  $$self.$$set = ($$props2) => {
    if ("type" in $$props2)
      $$invalidate(0, type = $$props2.type);
    if ("href" in $$props2)
      $$invalidate(1, href = $$props2.href);
    if ("inverse" in $$props2)
      $$invalidate(2, inverse = $$props2.inverse);
    if ("uppercase" in $$props2)
      $$invalidate(3, uppercase = $$props2.uppercase);
    if ("fit" in $$props2)
      $$invalidate(4, fit = $$props2.fit);
    if ("target" in $$props2)
      $$invalidate(5, target = $$props2.target);
    if ("medium" in $$props2)
      $$invalidate(6, medium = $$props2.medium);
    if ("small" in $$props2)
      $$invalidate(7, small = $$props2.small);
    if ("xsmall" in $$props2)
      $$invalidate(8, xsmall = $$props2.xsmall);
    if ("disabled" in $$props2)
      $$invalidate(9, disabled = $$props2.disabled);
    if ("$$scope" in $$props2)
      $$invalidate(14, $$scope = $$props2.$$scope);
  };
  return [
    type,
    href,
    inverse,
    uppercase,
    fit,
    target,
    medium,
    small,
    xsmall,
    disabled,
    clicked,
    click,
    slots,
    click_handler,
    $$scope
  ];
}
class Button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      type: 0,
      href: 1,
      inverse: 2,
      uppercase: 3,
      fit: 4,
      target: 5,
      medium: 6,
      small: 7,
      xsmall: 8,
      disabled: 9
    });
  }
}
export { Button as B, Text as T };
