import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, b as attr, d as insert, o as noop, k as detach } from "./index.ae92f232.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
function create_fragment(ctx) {
  let i;
  return {
    c() {
      i = element("i");
      attr(i, "class", "svelte-1n1ix6s");
    },
    m(target, anchor) {
      insert(target, i, anchor);
      i.innerHTML = ctx[0];
    },
    p(ctx2, [dirty]) {
      if (dirty & 1)
        i.innerHTML = ctx2[0];
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(i);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { icon } = $$props;
  $$self.$$set = ($$props2) => {
    if ("icon" in $$props2)
      $$invalidate(0, icon = $$props2.icon);
  };
  return [icon];
}
class Icon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { icon: 0 });
  }
}
export { Icon as I };
