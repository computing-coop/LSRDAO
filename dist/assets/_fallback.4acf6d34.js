import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, c as create_component, a as space, t as text, b as attr, d as insert, f as append, m as mount_component, g as set_data, h as transition_in, j as transition_out, k as detach, l as destroy_component, n as component_subscribe, Y } from "./index.ae92f232.js";
import { r as routes } from "./routes.77b585d1.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { I as Icon } from "./Icon.65885a60.js";
import { B as Button } from "./Button.d1669e9b.js";
var binocularsIcon = '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156 95"><g stroke="#495747" stroke-width="3.46" stroke-miterlimit="10"><path d="M32.5 82.97a20.4 20.4 0 100-40.8 20.4 20.4 0 000 40.8z"></path><path d="M33.19 76.06a14.6 14.6 0 01-14.52-14.52M124.11 48.92a14.6 14.6 0 0114.52 14.52" stroke-linecap="round"></path><path d="M7.78 44.6l20.4-23.86A22.98 22.98 0 0166.9 37.51l-4.5 25.24"></path><path d="M33.02 17.29l9.68-10.9a14.3 14.3 0 019.85-3.8c7.78 0 14.17 6.23 14.35 14v.7L65 28.35M124.11 16.42l-10.2-10.89a15.99 15.99 0 00-10.02-3.8 14.35 14.35 0 00-14.35 14v.7l1.9 11.05"></path><path d="M149.18 46.15l-20.75-26.44a22.98 22.98 0 00-38.72 16.77l3.8 22.3M32.15 93.17a30.42 30.42 0 100-60.85 30.42 30.42 0 000 60.85z"></path><path d="M124.11 82.97a20.4 20.4 0 100-40.8 20.4 20.4 0 000 40.8z"></path><path d="M123.77 93.17a30.42 30.42 0 100-60.85 30.42 30.42 0 000 60.85zM67.42 37.68h21.6M62.4 65.69s14.35-15.9 30.94 0M64.48 51.68s12.79-8.98 28.17.7"></path></g></svg>';
var _fallback_svelte_svelte_type_style_lang = "";
function create_default_slot(ctx) {
  let t_value = ctx[0]("fallback.redirect") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[0]("fallback.redirect") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment(ctx) {
  let div2;
  let div1;
  let div0;
  let icon;
  let t0;
  let h1;
  let t1_value = ctx[0]("fallback.404") + "";
  let t1;
  let t2;
  let button;
  let current;
  icon = new Icon({ props: { icon: binocularsIcon } });
  button = new Button({
    props: {
      href: routes.HOME,
      uppercase: true,
      medium: true,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      create_component(icon.$$.fragment);
      t0 = space();
      h1 = element("h1");
      t1 = text(t1_value);
      t2 = space();
      create_component(button.$$.fragment);
      attr(div0, "class", "icon svelte-p7jd0e");
      attr(h1, "class", "svelte-p7jd0e");
      attr(div1, "class", "fallback-container svelte-p7jd0e");
      attr(div2, "class", "available-space-container svelte-p7jd0e");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div1);
      append(div1, div0);
      mount_component(icon, div0, null);
      append(div1, t0);
      append(div1, h1);
      append(h1, t1);
      append(div1, t2);
      mount_component(button, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0]("fallback.404") + ""))
        set_data(t1, t1_value);
      const button_changes = {};
      if (dirty & 3) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(icon);
      destroy_component(button);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(0, $_ = $$value));
  return [$_];
}
class Fallback extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Fallback as default };
