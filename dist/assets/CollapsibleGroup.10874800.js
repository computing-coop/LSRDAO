import { S as SvelteComponent, i as init, s as safe_not_equal, c as create_component, m as mount_component, h as transition_in, j as transition_out, l as destroy_component, e as element, b as attr, d as insert, q as group_outros, r as check_outros, k as detach, ac as destroy_each, n as component_subscribe, Y, t as text, f as append, g as set_data } from "./index.ae92f232.js";
import { g as getNodeChildren } from "./get-node-children.32a58892.js";
import { C as Collapsible } from "./Collapsible.621887e7.js";
var CollapsibleGroup_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  child_ctx[7] = i;
  return child_ctx;
}
function create_title_slot(ctx) {
  let h3;
  let t_value = ctx[2](`${ctx[0]}.${ctx[5]}.title`) + "";
  let t;
  return {
    c() {
      h3 = element("h3");
      t = text(t_value);
      attr(h3, "slot", "title");
      attr(h3, "class", "svelte-1cmj9i0");
    },
    m(target, anchor) {
      insert(target, h3, anchor);
      append(h3, t);
    },
    p(ctx2, dirty) {
      if (dirty & 5 && t_value !== (t_value = ctx2[2](`${ctx2[0]}.${ctx2[5]}.title`) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(h3);
    }
  };
}
function create_content_slot(ctx) {
  let p;
  let t_value = ctx[2](`${ctx[0]}.${ctx[5]}.copy`) + "";
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      attr(p, "slot", "content");
      attr(p, "class", "svelte-1cmj9i0");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 5 && t_value !== (t_value = ctx2[2](`${ctx2[0]}.${ctx2[5]}.copy`) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_each_block(ctx) {
  let collapsible;
  let current;
  function click_handler() {
    return ctx[4](ctx[7]);
  }
  collapsible = new Collapsible({
    props: {
      open: ctx[1] === ctx[7],
      $$slots: {
        content: [create_content_slot],
        title: [create_title_slot]
      },
      $$scope: { ctx }
    }
  });
  collapsible.$on("click", click_handler);
  return {
    c() {
      create_component(collapsible.$$.fragment);
    },
    m(target, anchor) {
      mount_component(collapsible, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const collapsible_changes = {};
      if (dirty & 2)
        collapsible_changes.open = ctx[1] === ctx[7];
      if (dirty & 261) {
        collapsible_changes.$$scope = { dirty, ctx };
      }
      collapsible.$set(collapsible_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(collapsible.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(collapsible.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(collapsible, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let current;
  let each_value = getNodeChildren(ctx[0]);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "svelte-1cmj9i0");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 15) {
        each_value = getNodeChildren(ctx2[0]);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
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
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(2, $_ = $$value));
  let { collapsibleKey } = $$props;
  let activeCollapsible = null;
  const setActiveCollapsible = (id) => {
    activeCollapsible === id ? $$invalidate(1, activeCollapsible = null) : $$invalidate(1, activeCollapsible = id);
  };
  const click_handler = (i) => setActiveCollapsible(i);
  $$self.$$set = ($$props2) => {
    if ("collapsibleKey" in $$props2)
      $$invalidate(0, collapsibleKey = $$props2.collapsibleKey);
  };
  return [collapsibleKey, activeCollapsible, $_, setActiveCollapsible, click_handler];
}
class CollapsibleGroup extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { collapsibleKey: 0 });
  }
}
export { CollapsibleGroup as C };
