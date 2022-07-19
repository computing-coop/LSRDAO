import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, c as create_component, a as space, t as text, b as attr, d as insert, f as append, m as mount_component, D as listen, g as set_data, h as transition_in, j as transition_out, r as check_outros, k as detach, l as destroy_component, E as run_all, p as empty, n as component_subscribe, q as group_outros, o as noop, Y, F as redirect } from "./index.ae92f232.js";
import { n as notify } from "./notification.67ec90d7.js";
import { u as updatingMailPreferences, a as updateMailPreferences } from "./user.1f47be60.js";
import { r as resendAccountVerification } from "./auth.cc08f0a7.js";
import { c as changeListedStatus } from "./garden.8cd2410c.js";
import { u as user } from "./auth.4dd538c9.js";
import { A as Avatar } from "./Avatar.d2fb60a1.js";
import { I as Icon } from "./Icon.65885a60.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { B as Button } from "./Button.d1669e9b.js";
import { L as LabeledCheckbox } from "./LabeledCheckbox.0b5b74e8.js";
import { e as emailIcon } from "./email.b997b76f.js";
import { c as countries, f as flagIcon } from "./flag.54b26623.js";
import { S as SUPPORT_EMAIL } from "./constants.c39c3a18.js";
import { r as routes } from "./routes.77b585d1.js";
import "./index.a79b2e56.js";
var account_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let div5;
  let div0;
  let avatar;
  let t0;
  let div4;
  let section0;
  let h20;
  let t1_value = ctx[4].firstName + "";
  let t1;
  let t2;
  let t3_value = ctx[4].lastName + "";
  let t3;
  let t4;
  let div3;
  let div1;
  let span0;
  let icon0;
  let t5;
  let t6_value = ctx[4].email + "";
  let t6;
  let t7;
  let div2;
  let span1;
  let icon1;
  let t8;
  let t9_value = countries[ctx[4].countryCode] + "";
  let t9;
  let t10;
  let t11;
  let section1;
  let h21;
  let t12_value = ctx[3]("account.preferences.title") + "";
  let t12;
  let t13;
  let p;
  let t14_value = ctx[3]("account.preferences.text") + "";
  let t14;
  let t15;
  let ul;
  let li0;
  let input0;
  let input0_checked_value;
  let t16;
  let label0;
  let t17_value = ctx[3]("account.preferences.chat") + "";
  let t17;
  let t18;
  let li1;
  let input1;
  let input1_checked_value;
  let t19;
  let label1;
  let t20_value = ctx[3]("account.preferences.news") + "";
  let t20;
  let t21;
  let section2;
  let h22;
  let t22_value = ctx[3]("account.garden.title") + "";
  let t22;
  let t23;
  let current_block_type_index;
  let if_block1;
  let current;
  let mounted;
  let dispose;
  avatar = new Avatar({
    props: {
      large: true,
      name: ctx[4].firstName
    }
  });
  icon0 = new Icon({ props: { icon: emailIcon } });
  icon1 = new Icon({ props: { icon: flagIcon } });
  let if_block0 = !ctx[4].emailVerified && create_if_block_4(ctx);
  const if_block_creators = [create_if_block_1, create_if_block_2, create_if_block_3];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (!ctx2[4].garden)
      return 0;
    if (ctx2[4].emailVerified && ctx2[4].garden)
      return 1;
    if (ctx2[4].garden && !user.emailVerified)
      return 2;
    return -1;
  }
  if (~(current_block_type_index = select_block_type_1(ctx))) {
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      div5 = element("div");
      div0 = element("div");
      create_component(avatar.$$.fragment);
      t0 = space();
      div4 = element("div");
      section0 = element("section");
      h20 = element("h2");
      t1 = text(t1_value);
      t2 = space();
      t3 = text(t3_value);
      t4 = space();
      div3 = element("div");
      div1 = element("div");
      span0 = element("span");
      create_component(icon0.$$.fragment);
      t5 = space();
      t6 = text(t6_value);
      t7 = space();
      div2 = element("div");
      span1 = element("span");
      create_component(icon1.$$.fragment);
      t8 = space();
      t9 = text(t9_value);
      t10 = space();
      if (if_block0)
        if_block0.c();
      t11 = space();
      section1 = element("section");
      h21 = element("h2");
      t12 = text(t12_value);
      t13 = space();
      p = element("p");
      t14 = text(t14_value);
      t15 = space();
      ul = element("ul");
      li0 = element("li");
      input0 = element("input");
      t16 = space();
      label0 = element("label");
      t17 = text(t17_value);
      t18 = space();
      li1 = element("li");
      input1 = element("input");
      t19 = space();
      label1 = element("label");
      t20 = text(t20_value);
      t21 = space();
      section2 = element("section");
      h22 = element("h2");
      t22 = text(t22_value);
      t23 = space();
      if (if_block1)
        if_block1.c();
      attr(div0, "class", "avatar svelte-5xsh2n");
      attr(h20, "class", "svelte-5xsh2n");
      attr(span0, "class", "icon svelte-5xsh2n");
      attr(div1, "class", "svelte-5xsh2n");
      attr(span1, "class", "icon svelte-5xsh2n");
      attr(div2, "class", "svelte-5xsh2n");
      attr(div3, "class", "details svelte-5xsh2n");
      attr(section0, "class", "user-information svelte-5xsh2n");
      attr(h21, "class", "svelte-5xsh2n");
      attr(p, "class", "svelte-5xsh2n");
      input0.disabled = ctx[5];
      attr(input0, "type", "checkbox");
      attr(input0, "id", "new-chat");
      attr(input0, "name", "newChat");
      input0.checked = input0_checked_value = ctx[4].emailPreferences.newChat;
      attr(input0, "class", "svelte-5xsh2n");
      attr(label0, "for", "new-chat");
      attr(label0, "class", "svelte-5xsh2n");
      attr(li0, "class", "svelte-5xsh2n");
      input1.disabled = ctx[5];
      attr(input1, "type", "checkbox");
      attr(input1, "id", "news");
      attr(input1, "name", "news");
      input1.checked = input1_checked_value = ctx[4].emailPreferences.news;
      attr(input1, "class", "svelte-5xsh2n");
      attr(label1, "for", "news");
      attr(label1, "class", "svelte-5xsh2n");
      attr(li1, "class", "svelte-5xsh2n");
      attr(ul, "class", "preference-list svelte-5xsh2n");
      attr(section1, "class", "svelte-5xsh2n");
      attr(h22, "class", "svelte-5xsh2n");
      attr(section2, "class", "svelte-5xsh2n");
      attr(div4, "class", "content svelte-5xsh2n");
      attr(div5, "class", "wrapper svelte-5xsh2n");
    },
    m(target, anchor) {
      insert(target, div5, anchor);
      append(div5, div0);
      mount_component(avatar, div0, null);
      append(div5, t0);
      append(div5, div4);
      append(div4, section0);
      append(section0, h20);
      append(h20, t1);
      append(h20, t2);
      append(h20, t3);
      append(section0, t4);
      append(section0, div3);
      append(div3, div1);
      append(div1, span0);
      mount_component(icon0, span0, null);
      append(div1, t5);
      append(div1, t6);
      append(div3, t7);
      append(div3, div2);
      append(div2, span1);
      mount_component(icon1, span1, null);
      append(div2, t8);
      append(div2, t9);
      append(div4, t10);
      if (if_block0)
        if_block0.m(div4, null);
      append(div4, t11);
      append(div4, section1);
      append(section1, h21);
      append(h21, t12);
      append(section1, t13);
      append(section1, p);
      append(p, t14);
      append(section1, t15);
      append(section1, ul);
      append(ul, li0);
      append(li0, input0);
      append(li0, t16);
      append(li0, label0);
      append(label0, t17);
      append(ul, t18);
      append(ul, li1);
      append(li1, input1);
      append(li1, t19);
      append(li1, label1);
      append(label1, t20);
      append(div4, t21);
      append(div4, section2);
      append(section2, h22);
      append(h22, t22);
      append(section2, t23);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(section2, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(input0, "change", ctx[6]),
          listen(input1, "change", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const avatar_changes = {};
      if (dirty & 16)
        avatar_changes.name = ctx2[4].firstName;
      avatar.$set(avatar_changes);
      if ((!current || dirty & 16) && t1_value !== (t1_value = ctx2[4].firstName + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & 16) && t3_value !== (t3_value = ctx2[4].lastName + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & 16) && t6_value !== (t6_value = ctx2[4].email + ""))
        set_data(t6, t6_value);
      if ((!current || dirty & 16) && t9_value !== (t9_value = countries[ctx2[4].countryCode] + ""))
        set_data(t9, t9_value);
      if (!ctx2[4].emailVerified) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div4, t11);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if ((!current || dirty & 8) && t12_value !== (t12_value = ctx2[3]("account.preferences.title") + ""))
        set_data(t12, t12_value);
      if ((!current || dirty & 8) && t14_value !== (t14_value = ctx2[3]("account.preferences.text") + ""))
        set_data(t14, t14_value);
      if (!current || dirty & 32) {
        input0.disabled = ctx2[5];
      }
      if (!current || dirty & 16 && input0_checked_value !== (input0_checked_value = ctx2[4].emailPreferences.newChat)) {
        input0.checked = input0_checked_value;
      }
      if ((!current || dirty & 8) && t17_value !== (t17_value = ctx2[3]("account.preferences.chat") + ""))
        set_data(t17, t17_value);
      if (!current || dirty & 32) {
        input1.disabled = ctx2[5];
      }
      if (!current || dirty & 16 && input1_checked_value !== (input1_checked_value = ctx2[4].emailPreferences.news)) {
        input1.checked = input1_checked_value;
      }
      if ((!current || dirty & 8) && t20_value !== (t20_value = ctx2[3]("account.preferences.news") + ""))
        set_data(t20, t20_value);
      if ((!current || dirty & 8) && t22_value !== (t22_value = ctx2[3]("account.garden.title") + ""))
        set_data(t22, t22_value);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block1) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block1 = if_blocks[current_block_type_index];
          if (!if_block1) {
            if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block1.c();
          } else {
            if_block1.p(ctx2, dirty);
          }
          transition_in(if_block1, 1);
          if_block1.m(section2, null);
        } else {
          if_block1 = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(avatar.$$.fragment, local);
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(avatar.$$.fragment, local);
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div5);
      destroy_component(avatar);
      destroy_component(icon0);
      destroy_component(icon1);
      if (if_block0)
        if_block0.d();
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_4(ctx) {
  let section;
  let h2;
  let t0_value = ctx[3]("account.verify.title") + "";
  let t0;
  let t1;
  let div;
  let p;
  let t2_value = ctx[3]("account.verify.text") + "";
  let t2;
  let t3;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block_5, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!ctx2[2])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      section = element("section");
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      div = element("div");
      p = element("p");
      t2 = text(t2_value);
      t3 = space();
      if_block.c();
      attr(h2, "class", "svelte-5xsh2n");
      attr(p, "class", "svelte-5xsh2n");
      attr(div, "class", "svelte-5xsh2n");
      attr(section, "class", "svelte-5xsh2n");
    },
    m(target, anchor) {
      insert(target, section, anchor);
      append(section, h2);
      append(h2, t0);
      append(section, t1);
      append(section, div);
      append(div, p);
      append(p, t2);
      append(div, t3);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 8) && t0_value !== (t0_value = ctx2[3]("account.verify.title") + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 8) && t2_value !== (t2_value = ctx2[3]("account.verify.text") + ""))
        set_data(t2, t2_value);
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
        detach(section);
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_else_block(ctx) {
  let p;
  let t_value = ctx[3]("account.verify.sent") + "";
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      attr(p, "class", "resend-verification svelte-5xsh2n");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("account.verify.sent") + ""))
        set_data(t, t_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_5(ctx) {
  let div;
  let button;
  let current;
  button = new Button({
    props: {
      uppercase: true,
      xsmall: true,
      disabled: ctx[1],
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[8]);
  return {
    c() {
      div = element("div");
      create_component(button.$$.fragment);
      attr(div, "class", "resend-verification svelte-5xsh2n");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(button, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 2)
        button_changes.disabled = ctx2[1];
      if (dirty & 1032) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(button);
    }
  };
}
function create_default_slot_2(ctx) {
  let t_value = ctx[3]("account.verify.button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("account.verify.button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_3(ctx) {
  let p;
  let t_value = ctx[3]("account.garden.unverified.text") + "";
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      attr(p, "class", "mb-m svelte-5xsh2n");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("account.garden.unverified.text") + ""))
        set_data(t, t_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_2(ctx) {
  let p;
  let t0_value = ctx[3]("account.garden.listed.text") + "";
  let t0;
  let t1;
  let labeledcheckbox;
  let t2;
  let div;
  let button;
  let current;
  labeledcheckbox = new LabeledCheckbox({
    props: {
      disabled: ctx[0],
      name: "listed",
      checked: ctx[4].garden.listed,
      label: "Shown on the map"
    }
  });
  labeledcheckbox.$on("input", ctx[7]);
  button = new Button({
    props: {
      href: routes.MANAGE_GARDEN,
      medium: true,
      uppercase: true,
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      p = element("p");
      t0 = text(t0_value);
      t1 = space();
      create_component(labeledcheckbox.$$.fragment);
      t2 = space();
      div = element("div");
      create_component(button.$$.fragment);
      attr(p, "class", "mb-m svelte-5xsh2n");
      attr(div, "class", "mt-m svelte-5xsh2n");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t0);
      insert(target, t1, anchor);
      mount_component(labeledcheckbox, target, anchor);
      insert(target, t2, anchor);
      insert(target, div, anchor);
      mount_component(button, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 8) && t0_value !== (t0_value = ctx2[3]("account.garden.listed.text") + ""))
        set_data(t0, t0_value);
      const labeledcheckbox_changes = {};
      if (dirty & 1)
        labeledcheckbox_changes.disabled = ctx2[0];
      if (dirty & 16)
        labeledcheckbox_changes.checked = ctx2[4].garden.listed;
      labeledcheckbox.$set(labeledcheckbox_changes);
      const button_changes = {};
      if (dirty & 1032) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(labeledcheckbox.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(labeledcheckbox.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching)
        detach(t1);
      destroy_component(labeledcheckbox, detaching);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div);
      destroy_component(button);
    }
  };
}
function create_if_block_1(ctx) {
  let p;
  let t0_value = ctx[3]("account.garden.unlisted.text") + "";
  let t0;
  let t1;
  let button;
  let current;
  button = new Button({
    props: {
      uppercase: true,
      medium: true,
      href: routes.ADD_GARDEN,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      p = element("p");
      t0 = text(t0_value);
      t1 = space();
      create_component(button.$$.fragment);
      attr(p, "class", "description svelte-5xsh2n");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t0);
      insert(target, t1, anchor);
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 8) && t0_value !== (t0_value = ctx2[3]("account.garden.unlisted.text") + ""))
        set_data(t0, t0_value);
      const button_changes = {};
      if (dirty & 1032) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching)
        detach(t1);
      destroy_component(button, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t_value = ctx[3]("account.garden.listed.button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("account.garden.listed.button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let t_value = ctx[3]("account.garden.unlisted.button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("account.garden.unlisted.button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment(ctx) {
  let title_value;
  let t;
  let if_block_anchor;
  let current;
  document.title = title_value = ctx[3]("account.title") + " | Leisure Cooperative";
  let if_block = ctx[4] && create_if_block(ctx);
  return {
    c() {
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 8) && title_value !== (title_value = ctx2[3]("account.title") + " | Leisure Cooperative")) {
        document.title = title_value;
      }
      if (ctx2[4]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
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
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $_;
  let $user;
  let $redirect;
  let $updatingMailPreferences;
  component_subscribe($$self, Y, ($$value) => $$invalidate(3, $_ = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(4, $user = $$value));
  component_subscribe($$self, redirect, ($$value) => $$invalidate(9, $redirect = $$value));
  component_subscribe($$self, updatingMailPreferences, ($$value) => $$invalidate(5, $updatingMailPreferences = $$value));
  if (!$user)
    $redirect(routes.SIGN_IN);
  const onMailPreferenceChanged = async (event) => {
    try {
      const { name, checked } = event.target;
      await updateMailPreferences(name, checked);
      $user.setEmailPreferences(name, checked);
      notify.success($_("account.notify.preferences-update"), 3500);
    } catch (ex) {
      console.log(ex);
    }
  };
  let updatingListedStatus = false;
  const changeGardenListed = async (event) => {
    const newStatus = event.target.checked;
    $$invalidate(0, updatingListedStatus = true);
    try {
      await changeListedStatus(newStatus);
      $user.setGarden({ ...$user.garden, listed: newStatus });
      if (!newStatus)
        notify.success($_("account.notify.garden-no-show"), 7e3);
      else
        notify.success($_("account.notify.garden-show"), 7e3);
    } catch (ex) {
      console.log(ex);
    }
    $$invalidate(0, updatingListedStatus = false);
  };
  let isResendingEmail;
  let hasResentEmail = false;
  const doResendEmail = async () => {
    try {
      $$invalidate(1, isResendingEmail = true);
      await resendAccountVerification();
      $$invalidate(2, hasResentEmail = true);
      $$invalidate(1, isResendingEmail = false);
    } catch (ex) {
      console.log(ex);
      if (!ex.code)
        notify.danger(ex, 15e3);
      else
        notify.danger($_("account.notify.resend-error", { values: { support: SUPPORT_EMAIL } }), 12e3);
      $$invalidate(1, isResendingEmail = false);
      $$invalidate(2, hasResentEmail = false);
    }
  };
  return [
    updatingListedStatus,
    isResendingEmail,
    hasResentEmail,
    $_,
    $user,
    $updatingMailPreferences,
    onMailPreferenceChanged,
    changeGardenListed,
    doResendEmail
  ];
}
class Account extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Account as default };
