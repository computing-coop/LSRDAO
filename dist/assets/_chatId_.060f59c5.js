import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, c as create_component, a as space, t as text, b as attr, d as insert, f as append, m as mount_component, g as set_data, h as transition_in, M as add_render_callback, j as transition_out, k as detach, l as destroy_component, p as empty, N as update_keyed_each, O as outro_and_destroy_block, r as check_outros, P as create_bidirectional_transition, Q as set_input_value, D as listen, R as prevent_default, E as run_all, n as component_subscribe, T as beforeUpdate, U as afterUpdate, V as onMount, W as create_in_transition, q as group_outros, C as toggle_class, L as params, K as goto, Y, X as binding_callbacks } from "./index.ae92f232.js";
import { f as fade } from "./index.f441bdbc.js";
import { o as observeMessagesForChat, m as messages, c as chats, a as create, s as sendMessage } from "./chat.5882e4d4.js";
import { h as hasGarden } from "./garden.8cd2410c.js";
import { u as user } from "./auth.4dd538c9.js";
import { A as Avatar } from "./Avatar.d2fb60a1.js";
import { I as Icon } from "./Icon.65885a60.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { t as tentIcon } from "./tent.5b24dad1.js";
import { U as User } from "./ConversationCard.svelte_svelte_type_style_lang.72b577ab.js";
import { r as routes } from "./routes.77b585d1.js";
import "./index.a79b2e56.js";
import "./user.1f47be60.js";
var formatDate = (timestamp) => {
  const currentDate = new Date();
  const date = new Date(timestamp);
  if (date.getFullYear() !== currentDate.getFullYear()) {
    return date.toLocaleString([], {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } else if (new Date(currentDate.toDateString()).getTime() - new Date(date.toDateString()).getTime() > 7 * 24 * 60 * 60 * 1e3) {
    return date.toLocaleString([], {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit"
    });
  } else if (date.getDate() !== currentDate.getDate()) {
    return date.toLocaleString([], { weekday: "long", hour: "2-digit", minute: "2-digit" });
  } else {
    return date.toLocaleString([], { hour: "2-digit", minute: "2-digit" });
  }
};
var _chatId__svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[20] = list[i];
  return child_ctx;
}
function create_if_block_4(ctx) {
  let div;
  let a;
  let icon;
  let t0;
  let span;
  let t1_value = ctx[5]("chat.go-to-garden") + "";
  let t1;
  let a_href_value;
  let a_intro;
  let current;
  icon = new Icon({ props: { icon: tentIcon } });
  return {
    c() {
      div = element("div");
      a = element("a");
      create_component(icon.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      attr(span, "class", "svelte-137puwx");
      attr(a, "href", a_href_value = `${routes.MAP}/garden/${ctx[1]}`);
      attr(a, "class", "garden-link link svelte-137puwx");
      attr(div, "class", "chat-header--sm__bot svelte-137puwx");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, a);
      mount_component(icon, a, null);
      append(a, t0);
      append(a, span);
      append(span, t1);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 32) && t1_value !== (t1_value = ctx2[5]("chat.go-to-garden") + ""))
        set_data(t1, t1_value);
      if (!current || dirty & 2 && a_href_value !== (a_href_value = `${routes.MAP}/garden/${ctx2[1]}`)) {
        attr(a, "href", a_href_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      if (!a_intro) {
        add_render_callback(() => {
          a_intro = create_in_transition(a, fade, {});
          a_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon);
    }
  };
}
function create_if_block_2(ctx) {
  let user_1;
  let current;
  user_1 = new User({
    props: {
      name: ctx[10],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(user_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(user_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const user_1_changes = {};
      if (dirty & 1024)
        user_1_changes.name = ctx2[10];
      if (dirty & 8388643) {
        user_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      user_1.$set(user_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(user_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(user_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(user_1, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let div;
  let a;
  let icon;
  let t0;
  let span;
  let t1_value = ctx[5]("chat.go-to-garden") + "";
  let t1;
  let a_href_value;
  let div_intro;
  let current;
  icon = new Icon({ props: { icon: tentIcon } });
  return {
    c() {
      div = element("div");
      a = element("a");
      create_component(icon.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      attr(span, "class", "svelte-137puwx");
      attr(a, "href", a_href_value = `${routes.MAP}/garden/${ctx[1]}`);
      attr(a, "class", "garden-link link svelte-137puwx");
      attr(div, "class", "chat-header--md__bot svelte-137puwx");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, a);
      mount_component(icon, a, null);
      append(a, t0);
      append(a, span);
      append(span, t1);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 32) && t1_value !== (t1_value = ctx2[5]("chat.go-to-garden") + ""))
        set_data(t1, t1_value);
      if (!current || dirty & 2 && a_href_value !== (a_href_value = `${routes.MAP}/garden/${ctx2[1]}`)) {
        attr(a, "href", a_href_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      if (!div_intro) {
        add_render_callback(() => {
          div_intro = create_in_transition(div, fade, {});
          div_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon);
    }
  };
}
function create_default_slot(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && create_if_block_3(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3(ctx2);
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_1(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  let each_value = ctx[6][ctx[2].id];
  const get_key = (ctx2) => ctx2[20].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 2132) {
        each_value = ctx2[6][ctx2[2].id];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block(key_1, ctx) {
  let div3;
  let div1;
  let div0;
  let avatar;
  let t0;
  let p;
  let t1_value = ctx[11](ctx[20].content) + "";
  let t1;
  let t2;
  let div2;
  let t3_value = formatDate(ctx[20].createdAt.seconds * 1e3) + "";
  let t3;
  let t4;
  let current;
  avatar = new Avatar({
    props: {
      name: ctx[20].from === ctx[4].id ? ctx[4].firstName : ctx[2].partner.firstName
    }
  });
  return {
    key: key_1,
    first: null,
    c() {
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      create_component(avatar.$$.fragment);
      t0 = space();
      p = element("p");
      t1 = text(t1_value);
      t2 = space();
      div2 = element("div");
      t3 = text(t3_value);
      t4 = space();
      attr(div0, "class", "avatar svelte-137puwx");
      attr(p, "class", "message-text svelte-137puwx");
      attr(div1, "class", "holder svelte-137puwx");
      attr(div2, "class", "timestamp svelte-137puwx");
      attr(div3, "class", "message svelte-137puwx");
      toggle_class(div3, "by-user", ctx[20].from === ctx[4].id);
      this.first = div3;
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div1);
      append(div1, div0);
      mount_component(avatar, div0, null);
      append(div1, t0);
      append(div1, p);
      append(p, t1);
      append(div3, t2);
      append(div3, div2);
      append(div2, t3);
      append(div3, t4);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const avatar_changes = {};
      if (dirty & 84)
        avatar_changes.name = ctx[20].from === ctx[4].id ? ctx[4].firstName : ctx[2].partner.firstName;
      avatar.$set(avatar_changes);
      if ((!current || dirty & 68) && t1_value !== (t1_value = ctx[11](ctx[20].content) + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & 68) && t3_value !== (t3_value = formatDate(ctx[20].createdAt.seconds * 1e3) + ""))
        set_data(t3, t3_value);
      if (dirty & 84) {
        toggle_class(div3, "by-user", ctx[20].from === ctx[4].id);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(avatar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(avatar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(avatar);
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
      t = text(ctx[8]);
      attr(p, "class", "hint svelte-137puwx");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 256)
        set_data(t, ctx2[8]);
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
function create_fragment(ctx) {
  let title_value;
  let t0;
  let header0;
  let div0;
  let a;
  let t1;
  let t2;
  let h2;
  let t3;
  let t4;
  let t5;
  let header1;
  let t6;
  let div2;
  let div1;
  let t7;
  let form;
  let t8;
  let textarea;
  let textarea_placeholder_value;
  let t9;
  let button;
  let t10;
  let button_disabled_value;
  let current;
  let mounted;
  let dispose;
  document.title = title_value = "\n    " + ctx[5]("chat.title-conversation", {
    values: { partnerName: ctx[10] }
  }) + " | Welcome To My Garden\n  ";
  let if_block0 = ctx[0] && create_if_block_4(ctx);
  let if_block1 = ctx[10] && create_if_block_2(ctx);
  let if_block2 = ctx[2] && ctx[6][ctx[2].id] && create_if_block_1(ctx);
  let if_block3 = ctx[8] && create_if_block(ctx);
  return {
    c() {
      t0 = space();
      header0 = element("header");
      div0 = element("div");
      a = element("a");
      t1 = text("<");
      t2 = space();
      h2 = element("h2");
      t3 = text(ctx[10]);
      t4 = space();
      if (if_block0)
        if_block0.c();
      t5 = space();
      header1 = element("header");
      if (if_block1)
        if_block1.c();
      t6 = space();
      div2 = element("div");
      div1 = element("div");
      if (if_block2)
        if_block2.c();
      t7 = space();
      form = element("form");
      if (if_block3)
        if_block3.c();
      t8 = space();
      textarea = element("textarea");
      t9 = space();
      button = element("button");
      t10 = text(">");
      attr(a, "class", "back svelte-137puwx");
      attr(a, "href", routes.CHAT);
      attr(h2, "class", "title svelte-137puwx");
      attr(div0, "class", "chat-header--sm__top svelte-137puwx");
      attr(header0, "class", "chat-header chat-header--sm svelte-137puwx");
      attr(header1, "class", "chat-header chat-header--md svelte-137puwx");
      attr(div1, "class", "messages svelte-137puwx");
      attr(div2, "class", "message-wrapper svelte-137puwx");
      attr(textarea, "placeholder", textarea_placeholder_value = ctx[5]("chat.type-message"));
      attr(textarea, "type", "text");
      attr(textarea, "name", "message");
      textarea.disabled = ctx[9];
      attr(textarea, "class", "svelte-137puwx");
      attr(button, "type", "submit");
      button.disabled = button_disabled_value = ctx[9] || !ctx[3] || ctx[8];
      attr(button, "aria-label", "Send message");
      attr(button, "class", "svelte-137puwx");
      attr(form, "class", "svelte-137puwx");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, header0, anchor);
      append(header0, div0);
      append(div0, a);
      append(a, t1);
      append(div0, t2);
      append(div0, h2);
      append(h2, t3);
      append(header0, t4);
      if (if_block0)
        if_block0.m(header0, null);
      insert(target, t5, anchor);
      insert(target, header1, anchor);
      if (if_block1)
        if_block1.m(header1, null);
      insert(target, t6, anchor);
      insert(target, div2, anchor);
      append(div2, div1);
      if (if_block2)
        if_block2.m(div1, null);
      ctx[15](div2);
      insert(target, t7, anchor);
      insert(target, form, anchor);
      if (if_block3)
        if_block3.m(form, null);
      append(form, t8);
      append(form, textarea);
      set_input_value(textarea, ctx[3]);
      append(form, t9);
      append(form, button);
      append(button, t10);
      current = true;
      if (!mounted) {
        dispose = [
          listen(textarea, "input", ctx[16]),
          listen(form, "submit", prevent_default(ctx[12]))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1056) && title_value !== (title_value = "\n    " + ctx2[5]("chat.title-conversation", {
        values: { partnerName: ctx2[10] }
      }) + " | Welcome To My Garden\n  ")) {
        document.title = title_value;
      }
      if (!current || dirty & 1024)
        set_data(t3, ctx2[10]);
      if (ctx2[0]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(header0, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[10]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 1024) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(header1, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (ctx2[2] && ctx2[6][ctx2[2].id]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & 68) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_1(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div1, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (ctx2[8]) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty & 256) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(form, t8);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      if (!current || dirty & 32 && textarea_placeholder_value !== (textarea_placeholder_value = ctx2[5]("chat.type-message"))) {
        attr(textarea, "placeholder", textarea_placeholder_value);
      }
      if (!current || dirty & 512) {
        textarea.disabled = ctx2[9];
      }
      if (dirty & 8) {
        set_input_value(textarea, ctx2[3]);
      }
      if (!current || dirty & 776 && button_disabled_value !== (button_disabled_value = ctx2[9] || !ctx2[3] || ctx2[8])) {
        button.disabled = button_disabled_value;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      transition_in(if_block3);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      transition_out(if_block3);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(header0);
      if (if_block0)
        if_block0.d();
      if (detaching)
        detach(t5);
      if (detaching)
        detach(header1);
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t6);
      if (detaching)
        detach(div2);
      if (if_block2)
        if_block2.d();
      ctx[15](null);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(form);
      if (if_block3)
        if_block3.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let partnerName;
  let $params;
  let $goto;
  let $user;
  let $_;
  let $messages;
  let $chats;
  component_subscribe($$self, params, ($$value) => $$invalidate(18, $params = $$value));
  component_subscribe($$self, goto, ($$value) => $$invalidate(19, $goto = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(4, $user = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(5, $_ = $$value));
  component_subscribe($$self, messages, ($$value) => $$invalidate(6, $messages = $$value));
  component_subscribe($$self, chats, ($$value) => $$invalidate(14, $chats = $$value));
  let { chatId } = $$props;
  let partnerHasGarden = null;
  let partnerId;
  let chat;
  let messageContainer;
  let autoscroll;
  beforeUpdate(() => {
    autoscroll = messageContainer && messageContainer.offsetHeight + messageContainer.scrollTop > messageContainer.scrollHeight - 20;
  });
  afterUpdate(() => {
    if (autoscroll && messageContainer)
      messageContainer.scrollTo(0, messageContainer.scrollHeight);
  });
  onMount(() => {
    messageContainer.scrollTo(0, messageContainer.scrollHeight);
  });
  let hint = "";
  const normalizeWhiteSpace = (message) => message.replace(/\n\s*\n\s*\n/g, "\n\n");
  let typedMessage = "";
  let isSending = false;
  const send = async () => {
    if (!typedMessage) {
      $$invalidate(8, hint = $_("chat.notify.empty-message"));
      return;
    }
    $$invalidate(9, isSending = true);
    $$invalidate(8, hint = "");
    if (!chat) {
      try {
        const newChatId = await create($user.id, $params.id, normalizeWhiteSpace(typedMessage));
        $$invalidate(3, typedMessage = "");
        $goto(`${routes.CHAT}/${$params.name}/${newChatId}`);
      } catch (ex) {
        console.log(ex);
      }
    } else {
      try {
        await sendMessage(chat.id, normalizeWhiteSpace(typedMessage));
        $$invalidate(3, typedMessage = "");
      } catch (ex) {
        console.log(ex);
      }
    }
    $$invalidate(9, isSending = false);
  };
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      messageContainer = $$value;
      $$invalidate(7, messageContainer);
    });
  }
  function textarea_input_handler() {
    typedMessage = this.value;
    $$invalidate(3, typedMessage);
  }
  $$self.$$set = ($$props2) => {
    if ("chatId" in $$props2)
      $$invalidate(13, chatId = $$props2.chatId);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 8192) {
      if (chatId) {
        $$invalidate(0, partnerHasGarden = $$invalidate(2, chat = null));
      }
    }
    if ($$self.$$.dirty & 24580) {
      if (!chat)
        $$invalidate(2, chat = $chats[chatId]);
    }
    if ($$self.$$.dirty & 23) {
      if (partnerHasGarden === null && chat && $user.id) {
        $$invalidate(1, partnerId = chat.users.find((id) => $user.id !== id));
        hasGarden(partnerId).then((res) => {
          $$invalidate(0, partnerHasGarden = res);
        }).catch((err) => {
          console.log(err);
          $$invalidate(0, partnerHasGarden = false);
        });
      }
    }
    if ($$self.$$.dirty & 68) {
      if (chat && !$messages[chat.id]) {
        observeMessagesForChat(chat.id);
      }
    }
    if ($$self.$$.dirty & 40) {
      if (typedMessage && typedMessage.length > 500) {
        const len = typedMessage.length;
        $$invalidate(8, hint = $_("chat.notify.too-long", { values: { surplus: len - 500 } }));
      } else {
        $$invalidate(8, hint = "");
      }
    }
    if ($$self.$$.dirty & 4) {
      $$invalidate(10, partnerName = chat && chat.partner ? chat.partner.firstName : "");
    }
  };
  return [
    partnerHasGarden,
    partnerId,
    chat,
    typedMessage,
    $user,
    $_,
    $messages,
    messageContainer,
    hint,
    isSending,
    partnerName,
    normalizeWhiteSpace,
    send,
    chatId,
    $chats,
    div2_binding,
    textarea_input_handler
  ];
}
class U5BchatIdu5D extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { chatId: 13 });
  }
}
export { U5BchatIdu5D as default };
