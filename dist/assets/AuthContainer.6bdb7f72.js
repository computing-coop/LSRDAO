import { S as SvelteComponent, i as init, s as safe_not_equal, w as create_slot, e as element, a as space, b as attr, d as insert, f as append, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, h as transition_in, j as transition_out, k as detach } from "./index.ae92f232.js";
var AuthContainer_svelte_svelte_type_style_lang = "";
const get_form_slot_changes = (dirty) => ({});
const get_form_slot_context = (ctx) => ({});
const get_title_slot_changes = (dirty) => ({});
const get_title_slot_context = (ctx) => ({});
function create_fragment(ctx) {
  let div1;
  let section;
  let h2;
  let t0;
  let div0;
  let t1;
  let current;
  const title_slot_template = ctx[1].title;
  const title_slot = create_slot(title_slot_template, ctx, ctx[0], get_title_slot_context);
  const form_slot_template = ctx[1].form;
  const form_slot = create_slot(form_slot_template, ctx, ctx[0], get_form_slot_context);
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      div1 = element("div");
      section = element("section");
      h2 = element("h2");
      if (title_slot)
        title_slot.c();
      t0 = space();
      div0 = element("div");
      if (form_slot)
        form_slot.c();
      t1 = space();
      if (default_slot)
        default_slot.c();
      attr(h2, "class", "title svelte-gsmo3j");
      attr(div0, "class", "form svelte-gsmo3j");
      attr(section, "class", "svelte-gsmo3j");
      attr(div1, "class", "wrapper svelte-gsmo3j");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, section);
      append(section, h2);
      if (title_slot) {
        title_slot.m(h2, null);
      }
      append(section, t0);
      append(section, div0);
      if (form_slot) {
        form_slot.m(div0, null);
      }
      append(section, t1);
      if (default_slot) {
        default_slot.m(section, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & 1)) {
          update_slot_base(title_slot, title_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(title_slot_template, ctx2[0], dirty, get_title_slot_changes), get_title_slot_context);
        }
      }
      if (form_slot) {
        if (form_slot.p && (!current || dirty & 1)) {
          update_slot_base(form_slot, form_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(form_slot_template, ctx2[0], dirty, get_form_slot_changes), get_form_slot_context);
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(title_slot, local);
      transition_in(form_slot, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(title_slot, local);
      transition_out(form_slot, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (title_slot)
        title_slot.d(detaching);
      if (form_slot)
        form_slot.d(detaching);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class AuthContainer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { AuthContainer as A };
