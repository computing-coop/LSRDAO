import { S as SvelteComponent, i as init, s as safe_not_equal, w as create_slot, e as element, c as create_component, a as space, t as text, b as attr, d as insert, m as mount_component, f as append, g as set_data, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, h as transition_in, j as transition_out, k as detach, l as destroy_component } from "./index.ae92f232.js";
import { A as Avatar } from "./Avatar.d2fb60a1.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
var User_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div1;
  let avatar;
  let t0;
  let div0;
  let span;
  let t1;
  let t2;
  let current;
  avatar = new Avatar({ props: { name: ctx[0] } });
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  return {
    c() {
      div1 = element("div");
      create_component(avatar.$$.fragment);
      t0 = space();
      div0 = element("div");
      span = element("span");
      t1 = text(ctx[0]);
      t2 = space();
      if (default_slot)
        default_slot.c();
      attr(span, "class", "name svelte-1rnj5pl");
      attr(div0, "class", "details svelte-1rnj5pl");
      attr(div1, "class", "user svelte-1rnj5pl");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      mount_component(avatar, div1, null);
      append(div1, t0);
      append(div1, div0);
      append(div0, span);
      append(span, t1);
      append(div0, t2);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      const avatar_changes = {};
      if (dirty & 1)
        avatar_changes.name = ctx2[0];
      avatar.$set(avatar_changes);
      if (!current || dirty & 1)
        set_data(t1, ctx2[0]);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(avatar.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(avatar.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(avatar);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { name } = $$props;
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [name, $$scope, slots];
}
class User extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { name: 0 });
  }
}
var ConversationCard_svelte_svelte_type_style_lang = "";
export { User as U };
