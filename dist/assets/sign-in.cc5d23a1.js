import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, c as create_component, d as insert, m as mount_component, h as transition_in, j as transition_out, k as detach, l as destroy_component, n as component_subscribe, e as element, b as attr, t as text, f as append, g as set_data, X as binding_callbacks, a8 as bind, M as add_render_callback, P as create_bidirectional_transition, D as listen, R as prevent_default, a9 as add_flush_callback, q as group_outros, r as check_outros, Y, K as goto } from "./index.ae92f232.js";
import { f as fade } from "./index.f441bdbc.js";
import { u as user } from "./auth.4dd538c9.js";
import { n as notify } from "./notification.67ec90d7.js";
import { l as login } from "./auth.cc08f0a7.js";
import { r as routes } from "./routes.77b585d1.js";
import { A as AuthContainer } from "./AuthContainer.6bdb7f72.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { B as Button } from "./Button.d1669e9b.js";
import { T as TextInput } from "./TextInput.80847e0d.js";
import { e as emailIcon } from "./email.b997b76f.js";
import { l as lockIcon } from "./lock.a2054616.js";
import { S as SUPPORT_EMAIL } from "./constants.c39c3a18.js";
import "./index.a79b2e56.js";
import "./Icon.65885a60.js";
import "./cross.9b7c4c9e.js";
var signIn_svelte_svelte_type_style_lang = "";
function create_default_slot_1(ctx) {
  let p0;
  let raw0_value = ctx[3]("sign-in.reset.text", {
    values: {
      link: `<a class="link" href="${routes.REQUEST_PASSWORD_RESET}">${ctx[3]("sign-in.reset.link")}</a>`
    }
  }) + "";
  let t;
  let p1;
  let raw1_value = ctx[3]("sign-in.register.text", {
    values: {
      link: `<a class="link" href="${routes.REGISTER}">${ctx[3]("sign-in.register.link")}</a>`
    }
  }) + "";
  return {
    c() {
      p0 = element("p");
      t = space();
      p1 = element("p");
      attr(p0, "class", "svelte-19b5ovq");
      attr(p1, "class", "svelte-19b5ovq");
    },
    m(target, anchor) {
      insert(target, p0, anchor);
      p0.innerHTML = raw0_value;
      insert(target, t, anchor);
      insert(target, p1, anchor);
      p1.innerHTML = raw1_value;
    },
    p(ctx2, dirty) {
      if (dirty & 8 && raw0_value !== (raw0_value = ctx2[3]("sign-in.reset.text", {
        values: {
          link: `<a class="link" href="${routes.REQUEST_PASSWORD_RESET}">${ctx2[3]("sign-in.reset.link")}</a>`
        }
      }) + ""))
        p0.innerHTML = raw0_value;
      if (dirty & 8 && raw1_value !== (raw1_value = ctx2[3]("sign-in.register.text", {
        values: {
          link: `<a class="link" href="${routes.REGISTER}">${ctx2[3]("sign-in.register.link")}</a>`
        }
      }) + ""))
        p1.innerHTML = raw1_value;
    },
    d(detaching) {
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t);
      if (detaching)
        detach(p1);
    }
  };
}
function create_title_slot(ctx) {
  let span;
  let t_value = ctx[3]("sign-in.title") + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      attr(span, "slot", "title");
      attr(span, "class", "svelte-19b5ovq");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("sign-in.title") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block(ctx) {
  let p;
  let t;
  let p_transition;
  let current;
  return {
    c() {
      p = element("p");
      t = text(ctx[2]);
      attr(p, "class", "hint danger svelte-19b5ovq");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 4)
        set_data(t, ctx2[2]);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!p_transition)
          p_transition = create_bidirectional_transition(p, fade, {}, true);
        p_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!p_transition)
        p_transition = create_bidirectional_transition(p, fade, {}, false);
      p_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching && p_transition)
        p_transition.end();
    }
  };
}
function create_default_slot(ctx) {
  let t_value = ctx[3]("sign-in.button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("sign-in.button") + ""))
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
  let div0;
  let label0;
  let t0_value = ctx[3]("generics.email") + "";
  let t0;
  let t1;
  let textinput0;
  let updating_value;
  let t2;
  let div1;
  let label1;
  let t3_value = ctx[3]("generics.password") + "";
  let t3;
  let t4;
  let textinput1;
  let updating_value_1;
  let t5;
  let div2;
  let t6;
  let div3;
  let button;
  let current;
  let mounted;
  let dispose;
  function textinput0_value_binding(value) {
    ctx[5](value);
  }
  let textinput0_props = {
    icon: emailIcon,
    autocomplete: "email",
    type: "email",
    name: "email",
    id: "email"
  };
  if (ctx[0].value !== void 0) {
    textinput0_props.value = ctx[0].value;
  }
  textinput0 = new TextInput({ props: textinput0_props });
  binding_callbacks.push(() => bind(textinput0, "value", textinput0_value_binding));
  function textinput1_value_binding(value) {
    ctx[6](value);
  }
  let textinput1_props = {
    icon: lockIcon,
    type: "password",
    name: "password",
    id: "password",
    autocomplete: "new-password"
  };
  if (ctx[1].value !== void 0) {
    textinput1_props.value = ctx[1].value;
  }
  textinput1 = new TextInput({ props: textinput1_props });
  binding_callbacks.push(() => bind(textinput1, "value", textinput1_value_binding));
  let if_block = ctx[2] && create_if_block(ctx);
  button = new Button({
    props: {
      type: "submit",
      medium: true,
      disabled: !ctx[0].value || !ctx[1].value,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      form = element("form");
      div0 = element("div");
      label0 = element("label");
      t0 = text(t0_value);
      t1 = space();
      create_component(textinput0.$$.fragment);
      t2 = space();
      div1 = element("div");
      label1 = element("label");
      t3 = text(t3_value);
      t4 = space();
      create_component(textinput1.$$.fragment);
      t5 = space();
      div2 = element("div");
      if (if_block)
        if_block.c();
      t6 = space();
      div3 = element("div");
      create_component(button.$$.fragment);
      attr(label0, "for", "email");
      attr(label0, "class", "svelte-19b5ovq");
      attr(div0, "class", "svelte-19b5ovq");
      attr(label1, "for", "password");
      attr(label1, "class", "svelte-19b5ovq");
      attr(div1, "class", "svelte-19b5ovq");
      attr(div2, "class", "hint svelte-19b5ovq");
      attr(div3, "class", "submit svelte-19b5ovq");
      attr(form, "slot", "form");
      attr(form, "class", "svelte-19b5ovq");
    },
    m(target, anchor) {
      insert(target, form, anchor);
      append(form, div0);
      append(div0, label0);
      append(label0, t0);
      append(div0, t1);
      mount_component(textinput0, div0, null);
      append(form, t2);
      append(form, div1);
      append(div1, label1);
      append(label1, t3);
      append(div1, t4);
      mount_component(textinput1, div1, null);
      append(form, t5);
      append(form, div2);
      if (if_block)
        if_block.m(div2, null);
      append(form, t6);
      append(form, div3);
      mount_component(button, div3, null);
      current = true;
      if (!mounted) {
        dispose = listen(form, "submit", prevent_default(ctx[4]));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 8) && t0_value !== (t0_value = ctx2[3]("generics.email") + ""))
        set_data(t0, t0_value);
      const textinput0_changes = {};
      if (!updating_value && dirty & 1) {
        updating_value = true;
        textinput0_changes.value = ctx2[0].value;
        add_flush_callback(() => updating_value = false);
      }
      textinput0.$set(textinput0_changes);
      if ((!current || dirty & 8) && t3_value !== (t3_value = ctx2[3]("generics.password") + ""))
        set_data(t3, t3_value);
      const textinput1_changes = {};
      if (!updating_value_1 && dirty & 2) {
        updating_value_1 = true;
        textinput1_changes.value = ctx2[1].value;
        add_flush_callback(() => updating_value_1 = false);
      }
      textinput1.$set(textinput1_changes);
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
          if_block.m(div2, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const button_changes = {};
      if (dirty & 3)
        button_changes.disabled = !ctx2[0].value || !ctx2[1].value;
      if (dirty & 520) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(textinput0.$$.fragment, local);
      transition_in(textinput1.$$.fragment, local);
      transition_in(if_block);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(textinput0.$$.fragment, local);
      transition_out(textinput1.$$.fragment, local);
      transition_out(if_block);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(form);
      destroy_component(textinput0);
      destroy_component(textinput1);
      if (if_block)
        if_block.d();
      destroy_component(button);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let title_value;
  let t;
  let authcontainer;
  let current;
  document.title = title_value = ctx[3]("sign-in.title") + " | Welcome To My Garden";
  authcontainer = new AuthContainer({
    props: {
      $$slots: {
        form: [create_form_slot],
        title: [create_title_slot],
        default: [create_default_slot_1]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      t = space();
      create_component(authcontainer.$$.fragment);
    },
    m(target, anchor) {
      insert(target, t, anchor);
      mount_component(authcontainer, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 8) && title_value !== (title_value = ctx2[3]("sign-in.title") + " | Welcome To My Garden")) {
        document.title = title_value;
      }
      const authcontainer_changes = {};
      if (dirty & 527) {
        authcontainer_changes.$$scope = { dirty, ctx: ctx2 };
      }
      authcontainer.$set(authcontainer_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(authcontainer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(authcontainer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t);
      destroy_component(authcontainer, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $_;
  let $goto;
  let $user;
  component_subscribe($$self, Y, ($$value) => $$invalidate(3, $_ = $$value));
  component_subscribe($$self, goto, ($$value) => $$invalidate(7, $goto = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(8, $user = $$value));
  let email = {};
  let password = {};
  let formError = "";
  const submit = async () => {
    if (!email.value || !password.value)
      return;
    $$invalidate(2, formError = "");
    try {
      await login(email.value, password.value);
      notify.success($_("sign-in.notify.welcome", { values: { user: $user.firstName } }));
      $goto(routes.MAP);
    } catch (ex) {
      if (ex.code === "auth/user-not-found" || ex.code === "auth/wrong-password")
        $$invalidate(2, formError = $_("sign-in.notify.incorrect"));
      else {
        $$invalidate(2, formError = $_("sign-in.notify.login-issue", { values: { support: SUPPORT_EMAIL } }));
      }
    }
  };
  function textinput0_value_binding(value) {
    if ($$self.$$.not_equal(email.value, value)) {
      email.value = value;
      $$invalidate(0, email);
    }
  }
  function textinput1_value_binding(value) {
    if ($$self.$$.not_equal(password.value, value)) {
      password.value = value;
      $$invalidate(1, password);
    }
  }
  return [
    email,
    password,
    formError,
    $_,
    submit,
    textinput0_value_binding,
    textinput1_value_binding
  ];
}
class Sign_in extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Sign_in as default };
