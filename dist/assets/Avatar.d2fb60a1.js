import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, b as attr, I as set_style, C as toggle_class, d as insert, f as append, g as set_data, o as noop, k as detach } from "./index.ae92f232.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
function create_fragment(ctx) {
  let div;
  let t_value = ctx[0].charAt(0).toUpperCase() + "";
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
      attr(div, "class", "avatar svelte-2mtic6");
      set_style(div, "--chat-color", ctx[2](ctx[0]));
      toggle_class(div, "large", ctx[1]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && t_value !== (t_value = ctx2[0].charAt(0).toUpperCase() + ""))
        set_data(t, t_value);
      if (dirty & 1) {
        set_style(div, "--chat-color", ctx2[2](ctx2[0]));
      }
      if (dirty & 2) {
        toggle_class(div, "large", ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { name = "" } = $$props;
  let { large = false } = $$props;
  const colors = ["#EC9570", "#F6C4B7", "#F4E27E", "#59C29D", "#A2D0D3", "#2E5F63"];
  const getHashCode = (str) => {
    let h;
    for (let i = 0; i < str.length; i++)
      h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    return h;
  };
  const colorOf = (value) => {
    return colors[Math.abs(getHashCode(value) % colors.length)];
  };
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("large" in $$props2)
      $$invalidate(1, large = $$props2.large);
  };
  return [name, large, colorOf];
}
class Avatar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { name: 0, large: 1 });
  }
}
export { Avatar as A };
