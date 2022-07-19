import { S as SvelteComponent, i as init, s as safe_not_equal, c as create_component, a as space, m as mount_component, d as insert, h as transition_in, j as transition_out, l as destroy_component, k as detach, n as component_subscribe, e as element, t as text, b as attr, f as append, g as set_data, X as binding_callbacks, a8 as bind, D as listen, R as prevent_default, a9 as add_flush_callback, K as goto, Y, L as params } from "./index.ae92f232.js";
import { A as AuthContainer } from "./AuthContainer.6bdb7f72.js";
import { n as notify } from "./notification.67ec90d7.js";
import { d as confirmPasswordReset, l as login } from "./auth.cc08f0a7.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { B as Button } from "./Button.d1669e9b.js";
import { P as Progress } from "./Progress.9dad7c45.js";
import { T as TextInput } from "./TextInput.80847e0d.js";
import { l as lockIcon } from "./lock.a2054616.js";
import { r as routes } from "./routes.77b585d1.js";
import "./index.a79b2e56.js";
import "./auth.4dd538c9.js";
import "./index.f441bdbc.js";
import "./Icon.65885a60.js";
import "./cross.9b7c4c9e.js";
var resetPassword_svelte_svelte_type_style_lang = "";
function create_title_slot(ctx) {
  let span;
  let t_value = ctx[2]("reset-password.title") + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      attr(span, "slot", "title");
      attr(span, "class", "svelte-1ucjs79");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = ctx2[2]("reset-password.title") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_default_slot(ctx) {
  let t_value = ctx[2]("reset-password.update") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = ctx2[2]("reset-password.update") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_form_slot(ctx) {
  let form;
  let label;
  let t0_value = ctx[2]("generics.password") + "";
  let t0;
  let t1;
  let textinput;
  let updating_value;
  let t2;
  let button;
  let current;
  let mounted;
  let dispose;
  function textinput_value_binding(value) {
    ctx[4](value);
  }
  let textinput_props = {
    icon: lockIcon,
    type: "password",
    name: "password",
    id: "password",
    autocomplete: "new-password"
  };
  if (ctx[0].value !== void 0) {
    textinput_props.value = ctx[0].value;
  }
  textinput = new TextInput({ props: textinput_props });
  binding_callbacks.push(() => bind(textinput, "value", textinput_value_binding));
  button = new Button({
    props: {
      type: "submit",
      medium: true,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      form = element("form");
      label = element("label");
      t0 = text(t0_value);
      t1 = space();
      create_component(textinput.$$.fragment);
      t2 = space();
      create_component(button.$$.fragment);
      attr(label, "for", "password");
      attr(label, "class", "svelte-1ucjs79");
      attr(form, "slot", "form");
      attr(form, "class", "svelte-1ucjs79");
    },
    m(target, anchor) {
      insert(target, form, anchor);
      append(form, label);
      append(label, t0);
      append(form, t1);
      mount_component(textinput, form, null);
      append(form, t2);
      mount_component(button, form, null);
      current = true;
      if (!mounted) {
        dispose = listen(form, "submit", prevent_default(ctx[3]));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 4) && t0_value !== (t0_value = ctx2[2]("generics.password") + ""))
        set_data(t0, t0_value);
      const textinput_changes = {};
      if (!updating_value && dirty & 1) {
        updating_value = true;
        textinput_changes.value = ctx2[0].value;
        add_flush_callback(() => updating_value = false);
      }
      textinput.$set(textinput_changes);
      const button_changes = {};
      if (dirty & 132) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(textinput.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(textinput.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(form);
      destroy_component(textinput);
      destroy_component(button);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let progress;
  let t0;
  let title_value;
  let t1;
  let authcontainer;
  let current;
  progress = new Progress({
    props: { active: ctx[1] }
  });
  document.title = title_value = ctx[2]("reset-password.title") + " | Welcome To My Garden";
  authcontainer = new AuthContainer({
    props: {
      $$slots: {
        form: [create_form_slot],
        title: [create_title_slot]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(progress.$$.fragment);
      t0 = space();
      t1 = space();
      create_component(authcontainer.$$.fragment);
    },
    m(target, anchor) {
      mount_component(progress, target, anchor);
      insert(target, t0, anchor);
      insert(target, t1, anchor);
      mount_component(authcontainer, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const progress_changes = {};
      if (dirty & 2)
        progress_changes.active = ctx2[1];
      progress.$set(progress_changes);
      if ((!current || dirty & 4) && title_value !== (title_value = ctx2[2]("reset-password.title") + " | Welcome To My Garden")) {
        document.title = title_value;
      }
      const authcontainer_changes = {};
      if (dirty & 133) {
        authcontainer_changes.$$scope = { dirty, ctx: ctx2 };
      }
      authcontainer.$set(authcontainer_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(progress.$$.fragment, local);
      transition_in(authcontainer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(progress.$$.fragment, local);
      transition_out(authcontainer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(progress, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      destroy_component(authcontainer, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $goto;
  let $_;
  let $params;
  component_subscribe($$self, goto, ($$value) => $$invalidate(5, $goto = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(2, $_ = $$value));
  component_subscribe($$self, params, ($$value) => $$invalidate(6, $params = $$value));
  let password = {};
  let isResetting = false;
  const submit = async () => {
    $$invalidate(1, isResetting = true);
    try {
      await confirmPasswordReset($params.oobCode, password.value);
      await login($params.email, password.value);
      notify.success($_("reset-password.succes"));
      $goto(routes.MAP);
    } catch (err) {
      console.log(err);
    }
    $$invalidate(1, isResetting = false);
  };
  function textinput_value_binding(value) {
    if ($$self.$$.not_equal(password.value, value)) {
      password.value = value;
      $$invalidate(0, password);
    }
  }
  return [password, isResetting, $_, submit, textinput_value_binding];
}
class Reset_password extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Reset_password as default };
