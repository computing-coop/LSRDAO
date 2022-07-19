import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, c as create_component, d as insert, m as mount_component, h as transition_in, j as transition_out, k as detach, l as destroy_component, n as component_subscribe, e as element, t as text, b as attr, f as append, g as set_data, X as binding_callbacks, a8 as bind, o as noop, M as add_render_callback, P as create_bidirectional_transition, D as listen, R as prevent_default, a9 as add_flush_callback, q as group_outros, r as check_outros, ac as destroy_each, E as run_all, Y, K as goto } from "./index.ae92f232.js";
import { f as fade } from "./index.f441bdbc.js";
import { b as register } from "./auth.cc08f0a7.js";
import { b as isRegistering } from "./auth.4dd538c9.js";
import { n as notify } from "./notification.67ec90d7.js";
import { f as flagIcon, c as countries } from "./flag.54b26623.js";
import { S as SUPPORT_EMAIL } from "./constants.c39c3a18.js";
import { r as routes } from "./routes.77b585d1.js";
import { A as AuthContainer } from "./AuthContainer.6bdb7f72.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { B as Button } from "./Button.d1669e9b.js";
import { P as Progress } from "./Progress.9dad7c45.js";
import { T as TextInput } from "./TextInput.80847e0d.js";
import { e as emailIcon } from "./email.b997b76f.js";
import { l as lockIcon } from "./lock.a2054616.js";
import { u as userIcon } from "./user.3a77a3d3.js";
import "./index.a79b2e56.js";
import "./Icon.65885a60.js";
import "./cross.9b7c4c9e.js";
var register_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[24] = list[i];
  return child_ctx;
}
function create_title_slot(ctx) {
  let span;
  let t_value = ctx[4]("register.title") + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      attr(span, "slot", "title");
      attr(span, "class", "svelte-q6v297");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t_value !== (t_value = ctx2[4]("register.title") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_each_block(ctx) {
  let option;
  let t_value = countries[ctx[24]] + "";
  let t;
  let option_data_value_value;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      attr(option, "data-value", option_data_value_value = ctx[24]);
      option.__value = option_value_value = countries[ctx[24]];
      option.value = option.__value;
      attr(option, "class", "svelte-q6v297");
    },
    m(target, anchor) {
      insert(target, option, anchor);
      append(option, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_if_block_2(ctx) {
  let t_value = ctx[0].consent.error + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[0].consent.error + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_1(ctx) {
  let p;
  let t;
  let p_transition;
  let current;
  return {
    c() {
      p = element("p");
      t = text(ctx[3]);
      attr(p, "class", "hint danger svelte-q6v297");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 8)
        set_data(t, ctx2[3]);
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
  let t_value = ctx[4]("register.button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t_value !== (t_value = ctx2[4]("register.button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block(ctx) {
  let p;
  let t_value = ctx[4]("register.registering") + "";
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      attr(p, "class", "mt-m mb-m svelte-q6v297");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t_value !== (t_value = ctx2[4]("register.registering") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_form_slot(ctx) {
  let form;
  let div0;
  let label0;
  let t0_value = ctx[4]("register.first-name") + "";
  let t0;
  let t1;
  let textinput0;
  let updating_value;
  let t2;
  let div1;
  let label1;
  let t3_value = ctx[4]("register.last-name") + "";
  let t3;
  let t4;
  let textinput1;
  let updating_value_1;
  let t5;
  let div2;
  let label2;
  let t6_value = ctx[4]("generics.email") + "";
  let t6;
  let t7;
  let t8;
  let textinput2;
  let updating_value_2;
  let t9;
  let div3;
  let label3;
  let t10_value = ctx[4]("generics.password") + "";
  let t10;
  let t11;
  let textinput3;
  let updating_value_3;
  let t12;
  let div4;
  let label4;
  let t13_value = ctx[4]("register.country") + "";
  let t13;
  let t14;
  let textinput4;
  let updating_value_4;
  let t15;
  let datalist;
  let t16;
  let input0;
  let t17;
  let div7;
  let div5;
  let input1;
  let t18;
  let label5;
  let raw0_value = ctx[4]("register.policies", {
    values: {
      cookiePolicy: ctx[8],
      privacyPolicy: ctx[9],
      termsOfUse: ctx[10]
    }
  }) + "";
  let t19;
  let div6;
  let t20;
  let div9;
  let div8;
  let t21;
  let button;
  let t22;
  let t23;
  let p;
  let raw1_value = ctx[4]("register.registred", {
    values: {
      signIn: `<a class="link" href=${routes.SIGN_IN}>${ctx[4]("generics.sign-in")}</a>`
    }
  }) + "";
  let current;
  let mounted;
  let dispose;
  function textinput0_value_binding(value) {
    ctx[11](value);
  }
  let textinput0_props = {
    icon: userIcon,
    type: "text",
    name: "first-name",
    id: "first-name",
    autocomplete: "given-name",
    error: ctx[0].firstName.error
  };
  if (ctx[0].firstName.value !== void 0) {
    textinput0_props.value = ctx[0].firstName.value;
  }
  textinput0 = new TextInput({ props: textinput0_props });
  binding_callbacks.push(() => bind(textinput0, "value", textinput0_value_binding));
  textinput0.$on("blur", ctx[12]);
  function textinput1_value_binding(value) {
    ctx[13](value);
  }
  let textinput1_props = {
    icon: userIcon,
    autocomplete: "family-name",
    type: "text",
    name: "last-name",
    id: "last-name",
    error: ctx[0].lastName.error
  };
  if (ctx[0].lastName.value !== void 0) {
    textinput1_props.value = ctx[0].lastName.value;
  }
  textinput1 = new TextInput({ props: textinput1_props });
  binding_callbacks.push(() => bind(textinput1, "value", textinput1_value_binding));
  textinput1.$on("blur", ctx[14]);
  function textinput2_value_binding(value) {
    ctx[15](value);
  }
  let textinput2_props = {
    icon: emailIcon,
    autocomplete: "email",
    type: "email",
    name: "email",
    id: "email",
    error: ctx[0].email.error
  };
  if (ctx[0].email.value !== void 0) {
    textinput2_props.value = ctx[0].email.value;
  }
  textinput2 = new TextInput({ props: textinput2_props });
  binding_callbacks.push(() => bind(textinput2, "value", textinput2_value_binding));
  textinput2.$on("blur", ctx[16]);
  function textinput3_value_binding(value) {
    ctx[17](value);
  }
  let textinput3_props = {
    icon: lockIcon,
    type: "password",
    name: "password",
    id: "password",
    autocomplete: "new-password",
    error: ctx[0].password.error
  };
  if (ctx[0].password.value !== void 0) {
    textinput3_props.value = ctx[0].password.value;
  }
  textinput3 = new TextInput({ props: textinput3_props });
  binding_callbacks.push(() => bind(textinput3, "value", textinput3_value_binding));
  textinput3.$on("blur", ctx[18]);
  function textinput4_value_binding(value) {
    ctx[19](value);
  }
  let textinput4_props = {
    autocomplete: "country",
    icon: flagIcon,
    list: "countries",
    name: "country-list",
    error: ctx[0].country.error
  };
  if (ctx[0].country.value !== void 0) {
    textinput4_props.value = ctx[0].country.value;
  }
  textinput4 = new TextInput({ props: textinput4_props });
  binding_callbacks.push(() => bind(textinput4, "value", textinput4_value_binding));
  textinput4.$on("blur", ctx[20]);
  let each_value = Object.keys(countries);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  let if_block0 = ctx[0].consent.error && create_if_block_2(ctx);
  let if_block1 = ctx[3] && create_if_block_1(ctx);
  button = new Button({
    props: {
      type: "submit",
      medium: true,
      disabled: ctx[5],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  let if_block2 = ctx[5] && create_if_block(ctx);
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
      label2 = element("label");
      t6 = text(t6_value);
      t7 = text("l");
      t8 = space();
      create_component(textinput2.$$.fragment);
      t9 = space();
      div3 = element("div");
      label3 = element("label");
      t10 = text(t10_value);
      t11 = space();
      create_component(textinput3.$$.fragment);
      t12 = space();
      div4 = element("div");
      label4 = element("label");
      t13 = text(t13_value);
      t14 = space();
      create_component(textinput4.$$.fragment);
      t15 = space();
      datalist = element("datalist");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t16 = space();
      input0 = element("input");
      t17 = space();
      div7 = element("div");
      div5 = element("div");
      input1 = element("input");
      t18 = space();
      label5 = element("label");
      t19 = space();
      div6 = element("div");
      if (if_block0)
        if_block0.c();
      t20 = space();
      div9 = element("div");
      div8 = element("div");
      if (if_block1)
        if_block1.c();
      t21 = space();
      create_component(button.$$.fragment);
      t22 = space();
      if (if_block2)
        if_block2.c();
      t23 = space();
      p = element("p");
      attr(label0, "for", "first-name");
      attr(label0, "class", "svelte-q6v297");
      attr(div0, "class", "svelte-q6v297");
      attr(label1, "for", "last-name");
      attr(label1, "class", "svelte-q6v297");
      attr(div1, "class", "svelte-q6v297");
      attr(label2, "for", "email");
      attr(label2, "class", "svelte-q6v297");
      attr(div2, "class", "svelte-q6v297");
      attr(label3, "for", "password");
      attr(label3, "class", "svelte-q6v297");
      attr(div3, "class", "svelte-q6v297");
      attr(label4, "for", "country");
      attr(label4, "class", "svelte-q6v297");
      attr(datalist, "id", "countries");
      attr(datalist, "class", "svelte-q6v297");
      attr(input0, "type", "hidden");
      attr(input0, "name", "country");
      attr(input0, "id", "country-hidden");
      input0.value = ctx[1];
      attr(input0, "class", "svelte-q6v297");
      attr(div4, "class", "svelte-q6v297");
      attr(input1, "type", "checkbox");
      attr(input1, "id", "terms");
      attr(input1, "name", "terms");
      attr(input1, "class", "svelte-q6v297");
      attr(label5, "for", "terms");
      attr(label5, "class", "svelte-q6v297");
      attr(div5, "class", "checkbox svelte-q6v297");
      attr(div6, "class", "error svelte-q6v297");
      attr(div7, "class", "consent svelte-q6v297");
      attr(div8, "class", "hint svelte-q6v297");
      attr(p, "class", "svelte-q6v297");
      attr(div9, "class", "submit svelte-q6v297");
      attr(form, "slot", "form");
      attr(form, "class", "svelte-q6v297");
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
      append(div2, label2);
      append(label2, t6);
      append(label2, t7);
      append(div2, t8);
      mount_component(textinput2, div2, null);
      append(form, t9);
      append(form, div3);
      append(div3, label3);
      append(label3, t10);
      append(div3, t11);
      mount_component(textinput3, div3, null);
      append(form, t12);
      append(form, div4);
      append(div4, label4);
      append(label4, t13);
      append(div4, t14);
      mount_component(textinput4, div4, null);
      append(div4, t15);
      append(div4, datalist);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(datalist, null);
      }
      append(div4, t16);
      append(div4, input0);
      ctx[21](input0);
      append(form, t17);
      append(form, div7);
      append(div7, div5);
      append(div5, input1);
      input1.checked = ctx[0].consent.value;
      append(div5, t18);
      append(div5, label5);
      label5.innerHTML = raw0_value;
      append(div7, t19);
      append(div7, div6);
      if (if_block0)
        if_block0.m(div6, null);
      append(form, t20);
      append(form, div9);
      append(div9, div8);
      if (if_block1)
        if_block1.m(div8, null);
      append(div9, t21);
      mount_component(button, div9, null);
      append(div9, t22);
      if (if_block2)
        if_block2.m(div9, null);
      append(div9, t23);
      append(div9, p);
      p.innerHTML = raw1_value;
      current = true;
      if (!mounted) {
        dispose = [
          listen(input1, "change", ctx[22]),
          listen(form, "submit", prevent_default(ctx[7]))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 16) && t0_value !== (t0_value = ctx2[4]("register.first-name") + ""))
        set_data(t0, t0_value);
      const textinput0_changes = {};
      if (dirty & 1)
        textinput0_changes.error = ctx2[0].firstName.error;
      if (!updating_value && dirty & 1) {
        updating_value = true;
        textinput0_changes.value = ctx2[0].firstName.value;
        add_flush_callback(() => updating_value = false);
      }
      textinput0.$set(textinput0_changes);
      if ((!current || dirty & 16) && t3_value !== (t3_value = ctx2[4]("register.last-name") + ""))
        set_data(t3, t3_value);
      const textinput1_changes = {};
      if (dirty & 1)
        textinput1_changes.error = ctx2[0].lastName.error;
      if (!updating_value_1 && dirty & 1) {
        updating_value_1 = true;
        textinput1_changes.value = ctx2[0].lastName.value;
        add_flush_callback(() => updating_value_1 = false);
      }
      textinput1.$set(textinput1_changes);
      if ((!current || dirty & 16) && t6_value !== (t6_value = ctx2[4]("generics.email") + ""))
        set_data(t6, t6_value);
      const textinput2_changes = {};
      if (dirty & 1)
        textinput2_changes.error = ctx2[0].email.error;
      if (!updating_value_2 && dirty & 1) {
        updating_value_2 = true;
        textinput2_changes.value = ctx2[0].email.value;
        add_flush_callback(() => updating_value_2 = false);
      }
      textinput2.$set(textinput2_changes);
      if ((!current || dirty & 16) && t10_value !== (t10_value = ctx2[4]("generics.password") + ""))
        set_data(t10, t10_value);
      const textinput3_changes = {};
      if (dirty & 1)
        textinput3_changes.error = ctx2[0].password.error;
      if (!updating_value_3 && dirty & 1) {
        updating_value_3 = true;
        textinput3_changes.value = ctx2[0].password.value;
        add_flush_callback(() => updating_value_3 = false);
      }
      textinput3.$set(textinput3_changes);
      if ((!current || dirty & 16) && t13_value !== (t13_value = ctx2[4]("register.country") + ""))
        set_data(t13, t13_value);
      const textinput4_changes = {};
      if (dirty & 1)
        textinput4_changes.error = ctx2[0].country.error;
      if (!updating_value_4 && dirty & 1) {
        updating_value_4 = true;
        textinput4_changes.value = ctx2[0].country.value;
        add_flush_callback(() => updating_value_4 = false);
      }
      textinput4.$set(textinput4_changes);
      if (dirty & 0) {
        each_value = Object.keys(countries);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(datalist, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (!current || dirty & 2) {
        input0.value = ctx2[1];
      }
      if (dirty & 1) {
        input1.checked = ctx2[0].consent.value;
      }
      if ((!current || dirty & 16) && raw0_value !== (raw0_value = ctx2[4]("register.policies", {
        values: {
          cookiePolicy: ctx2[8],
          privacyPolicy: ctx2[9],
          termsOfUse: ctx2[10]
        }
      }) + ""))
        label5.innerHTML = raw0_value;
      if (ctx2[0].consent.error) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          if_block0.m(div6, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[3]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div8, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      const button_changes = {};
      if (dirty & 32)
        button_changes.disabled = ctx2[5];
      if (dirty & 134217744) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (ctx2[5]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block(ctx2);
          if_block2.c();
          if_block2.m(div9, t23);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if ((!current || dirty & 16) && raw1_value !== (raw1_value = ctx2[4]("register.registred", {
        values: {
          signIn: `<a class="link" href=${routes.SIGN_IN}>${ctx2[4]("generics.sign-in")}</a>`
        }
      }) + ""))
        p.innerHTML = raw1_value;
    },
    i(local) {
      if (current)
        return;
      transition_in(textinput0.$$.fragment, local);
      transition_in(textinput1.$$.fragment, local);
      transition_in(textinput2.$$.fragment, local);
      transition_in(textinput3.$$.fragment, local);
      transition_in(textinput4.$$.fragment, local);
      transition_in(if_block1);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(textinput0.$$.fragment, local);
      transition_out(textinput1.$$.fragment, local);
      transition_out(textinput2.$$.fragment, local);
      transition_out(textinput3.$$.fragment, local);
      transition_out(textinput4.$$.fragment, local);
      transition_out(if_block1);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(form);
      destroy_component(textinput0);
      destroy_component(textinput1);
      destroy_component(textinput2);
      destroy_component(textinput3);
      destroy_component(textinput4);
      destroy_each(each_blocks, detaching);
      ctx[21](null);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      destroy_component(button);
      if (if_block2)
        if_block2.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment(ctx) {
  let title_value;
  let t0;
  let progress;
  let t1;
  let authcontainer;
  let current;
  document.title = title_value = ctx[4]("register.title") + " | Leisure Cooperative";
  progress = new Progress({
    props: { active: ctx[5] }
  });
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
      t0 = space();
      create_component(progress.$$.fragment);
      t1 = space();
      create_component(authcontainer.$$.fragment);
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      mount_component(progress, target, anchor);
      insert(target, t1, anchor);
      mount_component(authcontainer, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 16) && title_value !== (title_value = ctx2[4]("register.title") + " | Leisure Cooperative")) {
        document.title = title_value;
      }
      const progress_changes = {};
      if (dirty & 32)
        progress_changes.active = ctx2[5];
      progress.$set(progress_changes);
      const authcontainer_changes = {};
      if (dirty & 134217791) {
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
      if (detaching)
        detach(t0);
      destroy_component(progress, detaching);
      if (detaching)
        detach(t1);
      destroy_component(authcontainer, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $_;
  let $goto;
  let $isRegistering;
  component_subscribe($$self, Y, ($$value) => $$invalidate(4, $_ = $$value));
  component_subscribe($$self, goto, ($$value) => $$invalidate(23, $goto = $$value));
  component_subscribe($$self, isRegistering, ($$value) => $$invalidate(5, $isRegistering = $$value));
  let fields = {
    email: {
      validate: (v) => {
        if (!v)
          return $_("register.validate.email");
      }
    },
    password: {
      validate: (v) => {
        if (!v)
          return $_("register.validate.password.set");
        if (v.length < 8)
          return $_("register.validate.password.min");
        if (v.length > 100)
          return $_("register.validate.password.max");
      }
    },
    firstName: {
      validate: (v) => {
        if (!v)
          return $_("register.validate.first-name.set");
        if (v.length > 25)
          return $_("register.validate.first-name.max");
      }
    },
    lastName: {
      validate: (v) => {
        if (!v)
          return $_("register.validate.last-name");
      }
    },
    country: {
      validate: (v) => {
        if (!v)
          return $_("register.validate.country.set");
      }
    },
    consent: {
      value: false,
      validate: (v) => {
        if (!v)
          return $_("register.validate.consent");
      }
    }
  };
  let countryCode;
  let countryInput;
  const validateCountry = (v) => {
    const value = v ? v.toLowerCase() : v;
    const code = Object.keys(countries).find((key) => countries[key].toLowerCase() === value);
    if (!code) {
      const error = $_("register.validate.country.from-list");
      $$invalidate(0, fields.country.error = error, fields);
      return error;
    } else {
      $$invalidate(1, countryCode = code);
      $$invalidate(0, fields.country.error = "", fields);
    }
  };
  let formError = "";
  const submit = async () => {
    const errors = Object.keys(fields).reduce((all, field) => {
      const error2 = fields[field].validate(fields[field].value);
      $$invalidate(0, fields[field].error = error2 || "", fields);
      if (error2)
        all.push(error2);
      return all;
    }, []);
    const error = validateCountry(fields.country.value);
    if (error)
      errors.push(error);
    $$invalidate(0, fields);
    if (errors.length > 0)
      return;
    try {
      await register({
        email: fields.email.value,
        password: fields.password.value,
        firstName: fields.firstName.value,
        lastName: fields.lastName.value,
        countryCode
      });
      notify.success($_("register.notify.successful"), 1e4);
      $goto(routes.MAP);
    } catch (err) {
      isRegistering.set(false);
      if (err.code === "auth/email-already-in-use")
        $$invalidate(3, formError = $_("register.notify.in-use"));
      else
        $$invalidate(3, formError = $_("register.notify.unexpected", { values: { support: SUPPORT_EMAIL } }));
      console.log(err);
    }
  };
  const cookiePolicy = `<a class="link" href=${routes.COOKIE_POLICY} target="_blank">${$_("generics.cookie-policy").toLocaleLowerCase()}</a>`;
  const privacyPolicy = `<a class="link" href=${routes.PRIVACY_POLICY} target="_blank">${$_("generics.privacy-policy").toLocaleLowerCase()}</a>`;
  const termsOfUse = `<a class="link" href=${routes.TERMS_OF_USE} target="_blank">${$_("generics.terms-of-use").toLocaleLowerCase()}</a>`;
  function textinput0_value_binding(value) {
    if ($$self.$$.not_equal(fields.firstName.value, value)) {
      fields.firstName.value = value;
      $$invalidate(0, fields);
    }
  }
  const blur_handler = () => $$invalidate(0, fields.firstName.error = "", fields);
  function textinput1_value_binding(value) {
    if ($$self.$$.not_equal(fields.lastName.value, value)) {
      fields.lastName.value = value;
      $$invalidate(0, fields);
    }
  }
  const blur_handler_1 = () => $$invalidate(0, fields.lastName.error = "", fields);
  function textinput2_value_binding(value) {
    if ($$self.$$.not_equal(fields.email.value, value)) {
      fields.email.value = value;
      $$invalidate(0, fields);
    }
  }
  const blur_handler_2 = () => {
    $$invalidate(0, fields.email.error = "", fields);
  };
  function textinput3_value_binding(value) {
    if ($$self.$$.not_equal(fields.password.value, value)) {
      fields.password.value = value;
      $$invalidate(0, fields);
    }
  }
  const blur_handler_3 = () => $$invalidate(0, fields.password.error = "", fields);
  function textinput4_value_binding(value) {
    if ($$self.$$.not_equal(fields.country.value, value)) {
      fields.country.value = value;
      $$invalidate(0, fields);
    }
  }
  const blur_handler_4 = () => validateCountry(fields.country.value);
  function input0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      countryInput = $$value;
      $$invalidate(2, countryInput);
    });
  }
  function input1_change_handler() {
    fields.consent.value = this.checked;
    $$invalidate(0, fields);
  }
  return [
    fields,
    countryCode,
    countryInput,
    formError,
    $_,
    $isRegistering,
    validateCountry,
    submit,
    cookiePolicy,
    privacyPolicy,
    termsOfUse,
    textinput0_value_binding,
    blur_handler,
    textinput1_value_binding,
    blur_handler_1,
    textinput2_value_binding,
    blur_handler_2,
    textinput3_value_binding,
    blur_handler_3,
    textinput4_value_binding,
    blur_handler_4,
    input0_binding,
    input1_change_handler
  ];
}
class Register extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Register as default };
