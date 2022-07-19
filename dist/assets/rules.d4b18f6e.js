import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, e as element, t as text, c as create_component, b as attr, d as insert, f as append, m as mount_component, g as set_data, h as transition_in, j as transition_out, k as detach, l as destroy_component, n as component_subscribe, Y } from "./index.ae92f232.js";
import { C as CollapsibleGroup } from "./CollapsibleGroup.10874800.js";
import "./get-node-children.32a58892.js";
import "./Collapsible.621887e7.js";
import "./index.f441bdbc.js";
function create_fragment(ctx) {
  let title_value;
  let t0;
  let div;
  let h2;
  let t1_value = ctx[0]("rules.title") + "";
  let t1;
  let t2;
  let p;
  let t3_value = ctx[0]("rules.description") + "";
  let t3;
  let t4;
  let collapsiblegroup;
  let current;
  document.title = title_value = ctx[0]("generics.rules") + " | Welcome To My Garden";
  collapsiblegroup = new CollapsibleGroup({ props: { collapsibleKey: "rules.rules" } });
  return {
    c() {
      t0 = space();
      div = element("div");
      h2 = element("h2");
      t1 = text(t1_value);
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      create_component(collapsiblegroup.$$.fragment);
      attr(div, "class", "intro");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, div, anchor);
      append(div, h2);
      append(h2, t1);
      append(div, t2);
      append(div, p);
      append(p, t3);
      insert(target, t4, anchor);
      mount_component(collapsiblegroup, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && title_value !== (title_value = ctx2[0]("generics.rules") + " | Welcome To My Garden")) {
        document.title = title_value;
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0]("rules.title") + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & 1) && t3_value !== (t3_value = ctx2[0]("rules.description") + ""))
        set_data(t3, t3_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(collapsiblegroup.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(collapsiblegroup.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (detaching)
        detach(t4);
      destroy_component(collapsiblegroup, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(0, $_ = $$value));
  return [$_];
}
class Rules extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Rules as default };
