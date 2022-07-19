import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, c as create_component, b as attr, d as insert, m as mount_component, h as transition_in, j as transition_out, k as detach, l as destroy_component, a as space, t as text, f as append, D as listen, q as group_outros, r as check_outros, g as set_data, E as run_all, J as bubble } from "./index.ae92f232.js";
import { I as Icon } from "./Icon.65885a60.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
function create_if_block(ctx) {
  let div;
  let icon_1;
  let current;
  icon_1 = new Icon({ props: { icon: ctx[2] } });
  return {
    c() {
      div = element("div");
      create_component(icon_1.$$.fragment);
      attr(div, "class", "icon svelte-1m4h5va");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(icon_1, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_1_changes = {};
      if (dirty & 4)
        icon_1_changes.icon = ctx2[2];
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
function create_fragment(ctx) {
  let div;
  let input;
  let t0;
  let label_1;
  let t1;
  let t2;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[2] && create_if_block(ctx);
  return {
    c() {
      div = element("div");
      input = element("input");
      t0 = space();
      label_1 = element("label");
      if (if_block)
        if_block.c();
      t1 = space();
      t2 = text(ctx[3]);
      attr(input, "id", ctx[1]);
      attr(input, "type", "checkbox");
      input.disabled = ctx[4];
      attr(input, "name", ctx[1]);
      attr(input, "class", "svelte-1m4h5va");
      attr(label_1, "for", ctx[1]);
      attr(label_1, "class", "svelte-1m4h5va");
      attr(div, "class", "svelte-1m4h5va");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input);
      input.checked = ctx[0];
      append(div, t0);
      append(div, label_1);
      if (if_block)
        if_block.m(label_1, null);
      append(label_1, t1);
      append(label_1, t2);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[5]),
          listen(input, "change", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 2) {
        attr(input, "id", ctx2[1]);
      }
      if (!current || dirty & 16) {
        input.disabled = ctx2[4];
      }
      if (!current || dirty & 2) {
        attr(input, "name", ctx2[1]);
      }
      if (dirty & 1) {
        input.checked = ctx2[0];
      }
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(label_1, t1);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & 8)
        set_data(t2, ctx2[3]);
      if (!current || dirty & 2) {
        attr(label_1, "for", ctx2[1]);
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
        detach(div);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { name } = $$props;
  let { icon = null } = $$props;
  let { label } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  function input_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_change_handler() {
    checked = this.checked;
    $$invalidate(0, checked);
  }
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(1, name = $$props2.name);
    if ("icon" in $$props2)
      $$invalidate(2, icon = $$props2.icon);
    if ("label" in $$props2)
      $$invalidate(3, label = $$props2.label);
    if ("checked" in $$props2)
      $$invalidate(0, checked = $$props2.checked);
    if ("disabled" in $$props2)
      $$invalidate(4, disabled = $$props2.disabled);
  };
  return [checked, name, icon, label, disabled, input_handler, input_change_handler];
}
class LabeledCheckbox extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      name: 1,
      icon: 2,
      label: 3,
      checked: 0,
      disabled: 4
    });
  }
}
export { LabeledCheckbox as L };
