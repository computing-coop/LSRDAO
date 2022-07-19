import { S as SvelteComponent, i as init, s as safe_not_equal, w as create_slot, e as element, I as set_style, b as attr, d as insert, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, h as transition_in, j as transition_out, k as detach } from "./index.ae92f232.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
function create_fragment(ctx) {
  let ol;
  let current;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  return {
    c() {
      ol = element("ol");
      if (default_slot)
        default_slot.c();
      set_style(ol, "list-style", ctx[0] + " " + ctx[1]);
      attr(ol, "class", "svelte-1f2pa5m");
    },
    m(target, anchor) {
      insert(target, ol, anchor);
      if (default_slot) {
        default_slot.m(ol, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null), null);
        }
      }
      if (!current || dirty & 3) {
        set_style(ol, "list-style", ctx2[0] + " " + ctx2[1]);
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
        detach(ol);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { type = "decimal" } = $$props;
  let { position = "inside" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("type" in $$props2)
      $$invalidate(0, type = $$props2.type);
    if ("position" in $$props2)
      $$invalidate(1, position = $$props2.position);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [type, position, $$scope, slots];
}
class Ol extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { type: 0, position: 1 });
  }
}
export { Ol as O };
