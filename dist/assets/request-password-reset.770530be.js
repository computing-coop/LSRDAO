import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, c as create_component, d as insert, m as mount_component, h as transition_in, j as transition_out, k as detach, l as destroy_component, n as component_subscribe, e as element, t as text, b as attr, f as append, g as set_data, q as group_outros, r as check_outros, Y, M as add_render_callback, P as create_bidirectional_transition, X as binding_callbacks, a8 as bind, D as listen, R as prevent_default, a9 as add_flush_callback } from "./index.ae92f232.js";
import { f as fade } from "./index.f441bdbc.js";
import { A as AuthContainer } from "./AuthContainer.6bdb7f72.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { B as Button } from "./Button.d1669e9b.js";
import { P as Progress } from "./Progress.9dad7c45.js";
import { T as TextInput } from "./TextInput.80847e0d.js";
import { e as emailIcon } from "./email.b997b76f.js";
import { S as SUPPORT_EMAIL } from "./constants.c39c3a18.js";
import { c as requestPasswordReset } from "./auth.cc08f0a7.js";
import "./Icon.65885a60.js";
import "./cross.9b7c4c9e.js";
import "./index.a79b2e56.js";
import "./auth.4dd538c9.js";
var requestPasswordReset_svelte_svelte_type_style_lang = "";
function create_title_slot(ctx) {
  let span;
  let t_value = ctx[3]("request-password-reset.title") + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      attr(span, "slot", "title");
      attr(span, "class", "svelte-1l68gtf");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("request-password-reset.title") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_else_block(ctx) {
  let div;
  let p0;
  let t0_value = ctx[3]("request-password-reset.set", {
    values: { email: ctx[0].value }
  }) + "";
  let t0;
  let t1;
  let p1;
  let raw_value = ctx[3]("request-password-reset.trouble", {
    values: {
      support: `<a class="link" href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>`
    }
  }) + "";
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      p0 = element("p");
      t0 = text(t0_value);
      t1 = space();
      p1 = element("p");
      attr(p0, "class", "svelte-1l68gtf");
      attr(p1, "class", "svelte-1l68gtf");
      attr(div, "class", "svelte-1l68gtf");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, p0);
      append(p0, t0);
      append(div, t1);
      append(div, p1);
      p1.innerHTML = raw_value;
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 9) && t0_value !== (t0_value = ctx2[3]("request-password-reset.set", {
        values: { email: ctx2[0].value }
      }) + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 8) && raw_value !== (raw_value = ctx2[3]("request-password-reset.trouble", {
        values: {
          support: `<a class="link" href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>`
        }
      }) + ""))
        p1.innerHTML = raw_value;
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, fade, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, fade, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_if_block(ctx) {
  let p;
  let t0_value = ctx[3]("request-password-reset.description") + "";
  let t0;
  let t1;
  let form;
  let div0;
  let label;
  let t2_value = ctx[3]("generics.email") + "";
  let t2;
  let t3;
  let textinput;
  let updating_value;
  let t4;
  let div1;
  let button;
  let form_transition;
  let current;
  let mounted;
  let dispose;
  function textinput_value_binding(value) {
    ctx[5](value);
  }
  let textinput_props = {
    icon: emailIcon,
    autocomplete: "off",
    type: "email",
    name: "email",
    id: "email"
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
      disabled: !ctx[0].value || ctx[2],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      p = element("p");
      t0 = text(t0_value);
      t1 = space();
      form = element("form");
      div0 = element("div");
      label = element("label");
      t2 = text(t2_value);
      t3 = space();
      create_component(textinput.$$.fragment);
      t4 = space();
      div1 = element("div");
      create_component(button.$$.fragment);
      attr(p, "class", "description svelte-1l68gtf");
      attr(label, "for", "email");
      attr(label, "class", "svelte-1l68gtf");
      attr(div0, "class", "svelte-1l68gtf");
      attr(div1, "class", "submit svelte-1l68gtf");
      attr(form, "class", "svelte-1l68gtf");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t0);
      insert(target, t1, anchor);
      insert(target, form, anchor);
      append(form, div0);
      append(div0, label);
      append(label, t2);
      append(div0, t3);
      mount_component(textinput, div0, null);
      append(form, t4);
      append(form, div1);
      mount_component(button, div1, null);
      current = true;
      if (!mounted) {
        dispose = listen(form, "submit", prevent_default(ctx[4]));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 8) && t0_value !== (t0_value = ctx2[3]("request-password-reset.description") + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 8) && t2_value !== (t2_value = ctx2[3]("generics.email") + ""))
        set_data(t2, t2_value);
      const textinput_changes = {};
      if (!updating_value && dirty & 1) {
        updating_value = true;
        textinput_changes.value = ctx2[0].value;
        add_flush_callback(() => updating_value = false);
      }
      textinput.$set(textinput_changes);
      const button_changes = {};
      if (dirty & 5)
        button_changes.disabled = !ctx2[0].value || ctx2[2];
      if (dirty & 72) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(textinput.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      add_render_callback(() => {
        if (!form_transition)
          form_transition = create_bidirectional_transition(form, fade, {}, true);
        form_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(textinput.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      if (!form_transition)
        form_transition = create_bidirectional_transition(form, fade, {}, false);
      form_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(form);
      destroy_component(textinput);
      destroy_component(button);
      if (detaching && form_transition)
        form_transition.end();
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot(ctx) {
  let t_value = ctx[3]("request-password-reset.button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("request-password-reset.button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_form_slot(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      attr(div, "slot", "form");
      attr(div, "class", "svelte-1l68gtf");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
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
  document.title = title_value = ctx[3]("request-password-reset.title") + " | Welcome To My Garden";
  progress = new Progress({ props: { active: ctx[2] } });
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
      if ((!current || dirty & 8) && title_value !== (title_value = ctx2[3]("request-password-reset.title") + " | Welcome To My Garden")) {
        document.title = title_value;
      }
      const progress_changes = {};
      if (dirty & 4)
        progress_changes.active = ctx2[2];
      progress.$set(progress_changes);
      const authcontainer_changes = {};
      if (dirty & 79) {
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
  component_subscribe($$self, Y, ($$value) => $$invalidate(3, $_ = $$value));
  let email = {};
  let done = false;
  let isSending = false;
  const submit = async () => {
    $$invalidate(2, isSending = true);
    try {
      await requestPasswordReset(email.value);
      $$invalidate(1, done = true);
      $$invalidate(2, isSending = false);
    } catch (err) {
      $$invalidate(1, done = true);
      $$invalidate(2, isSending = false);
    }
  };
  function textinput_value_binding(value) {
    if ($$self.$$.not_equal(email.value, value)) {
      email.value = value;
      $$invalidate(0, email);
    }
  }
  return [email, done, isSending, $_, submit, textinput_value_binding];
}
class Request_password_reset extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Request_password_reset as default };
