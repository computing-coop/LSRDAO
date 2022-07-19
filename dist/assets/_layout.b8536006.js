import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, c as create_component, b as attr, C as toggle_class, d as insert, m as mount_component, D as listen, h as transition_in, j as transition_out, k as detach, l as destroy_component, n as component_subscribe, Y, J as bubble, t as text, f as append, g as set_data, $ as is_function, M as add_render_callback, a as space, r as check_outros, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, p as empty, q as group_outros, W as create_in_transition, a0 as fix_position, a1 as create_animation, N as update_keyed_each, a2 as fix_and_outro_and_destroy_block, o as noop, w as create_slot, a3 as isActive, K as goto, L as params, F as redirect } from "./index.ae92f232.js";
import { c as cubicOut, a as fly } from "./index.f441bdbc.js";
import { u as user } from "./auth.4dd538c9.js";
import { n as notify } from "./notification.67ec90d7.js";
import { c as chats, h as hasInitialized, b as creatingNewChat, g as getChatForUser, i as initiateChat } from "./chat.5882e4d4.js";
import { r as routes } from "./routes.77b585d1.js";
import { U as User } from "./ConversationCard.svelte_svelte_type_style_lang.72b577ab.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { P as Progress } from "./Progress.9dad7c45.js";
import "./index.a79b2e56.js";
import "./user.1f47be60.js";
import "./Avatar.d2fb60a1.js";
const defaultDiacriticsRemovalMap = [
  {
    base: "A",
    letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
  },
  { base: "AA", letters: /[\uA732]/g },
  { base: "AE", letters: /[\u00C6\u01FC\u01E2]/g },
  { base: "AO", letters: /[\uA734]/g },
  { base: "AU", letters: /[\uA736]/g },
  { base: "AV", letters: /[\uA738\uA73A]/g },
  { base: "AY", letters: /[\uA73C]/g },
  { base: "B", letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g },
  {
    base: "C",
    letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
  },
  {
    base: "D",
    letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
  },
  { base: "DZ", letters: /[\u01F1\u01C4]/g },
  { base: "Dz", letters: /[\u01F2\u01C5]/g },
  {
    base: "E",
    letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
  },
  { base: "F", letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g },
  {
    base: "G",
    letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
  },
  {
    base: "H",
    letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
  },
  {
    base: "I",
    letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
  },
  { base: "J", letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g },
  {
    base: "K",
    letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
  },
  {
    base: "L",
    letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
  },
  { base: "LJ", letters: /[\u01C7]/g },
  { base: "Lj", letters: /[\u01C8]/g },
  { base: "M", letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g },
  {
    base: "N",
    letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
  },
  { base: "NJ", letters: /[\u01CA]/g },
  { base: "Nj", letters: /[\u01CB]/g },
  {
    base: "O",
    letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
  },
  { base: "OI", letters: /[\u01A2]/g },
  { base: "OO", letters: /[\uA74E]/g },
  { base: "OU", letters: /[\u0222]/g },
  { base: "P", letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g },
  { base: "Q", letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g },
  {
    base: "R",
    letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
  },
  {
    base: "S",
    letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
  },
  {
    base: "T",
    letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
  },
  { base: "TZ", letters: /[\uA728]/g },
  {
    base: "U",
    letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
  },
  { base: "V", letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g },
  { base: "VY", letters: /[\uA760]/g },
  { base: "W", letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g },
  { base: "X", letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g },
  {
    base: "Y",
    letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
  },
  {
    base: "Z",
    letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
  },
  {
    base: "a",
    letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
  },
  { base: "aa", letters: /[\uA733]/g },
  { base: "ae", letters: /[\u00E6\u01FD\u01E3]/g },
  { base: "ao", letters: /[\uA735]/g },
  { base: "au", letters: /[\uA737]/g },
  { base: "av", letters: /[\uA739\uA73B]/g },
  { base: "ay", letters: /[\uA73D]/g },
  { base: "b", letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g },
  {
    base: "c",
    letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
  },
  {
    base: "d",
    letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
  },
  { base: "dz", letters: /[\u01F3\u01C6]/g },
  {
    base: "e",
    letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
  },
  { base: "f", letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g },
  {
    base: "g",
    letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
  },
  {
    base: "h",
    letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
  },
  { base: "hv", letters: /[\u0195]/g },
  {
    base: "i",
    letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
  },
  { base: "j", letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g },
  {
    base: "k",
    letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
  },
  {
    base: "l",
    letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
  },
  { base: "lj", letters: /[\u01C9]/g },
  { base: "m", letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g },
  {
    base: "n",
    letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
  },
  { base: "nj", letters: /[\u01CC]/g },
  {
    base: "o",
    letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
  },
  { base: "oi", letters: /[\u01A3]/g },
  { base: "ou", letters: /[\u0223]/g },
  { base: "oo", letters: /[\uA74F]/g },
  { base: "p", letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g },
  { base: "q", letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g },
  {
    base: "r",
    letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
  },
  {
    base: "s",
    letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
  },
  {
    base: "t",
    letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
  },
  { base: "tz", letters: /[\uA729]/g },
  {
    base: "u",
    letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
  },
  { base: "v", letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g },
  { base: "vy", letters: /[\uA761]/g },
  { base: "w", letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g },
  { base: "x", letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g },
  {
    base: "y",
    letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
  },
  {
    base: "z",
    letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
  }
];
var removeDiacritics = (str) => {
  let stripped = str;
  for (let i = 0; i < defaultDiacriticsRemovalMap.length; i += 1) {
    stripped = stripped.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
  }
  return stripped;
};
function create_else_block$1(ctx) {
  let span;
  let t_value = ctx[3]("chat.new") + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      attr(span, "class", "badge svelte-1nitlfe");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("chat.new") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block$1(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let p;
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return create_if_block$1;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      p = element("p");
      if_block.c();
      attr(p, "class", "last-message svelte-1nitlfe");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      if_block.m(p, null);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(p, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if_block.d();
    }
  };
}
function create_fragment$1(ctx) {
  let button;
  let user2;
  let current;
  let mounted;
  let dispose;
  user2 = new User({
    props: {
      name: ctx[1],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      button = element("button");
      create_component(user2.$$.fragment);
      attr(button, "class", "button-container conversation svelte-1nitlfe");
      toggle_class(button, "selected", ctx[0]);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      mount_component(user2, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[4]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const user_changes = {};
      if (dirty & 2)
        user_changes.name = ctx2[1];
      if (dirty & 44) {
        user_changes.$$scope = { dirty, ctx: ctx2 };
      }
      user2.$set(user_changes);
      if (dirty & 1) {
        toggle_class(button, "selected", ctx2[0]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(user2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(user2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(user2);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(3, $_ = $$value));
  let { selected = false } = $$props;
  let { recipient } = $$props;
  let { lastMessage } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("selected" in $$props2)
      $$invalidate(0, selected = $$props2.selected);
    if ("recipient" in $$props2)
      $$invalidate(1, recipient = $$props2.recipient);
    if ("lastMessage" in $$props2)
      $$invalidate(2, lastMessage = $$props2.lastMessage);
  };
  return [selected, recipient, lastMessage, $_, click_handler];
}
class ConversationCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      selected: 0,
      recipient: 1,
      lastMessage: 2
    });
  }
}
function flip(node, { from, to }, params2 = {}) {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;
  const [ox, oy] = style.transformOrigin.split(" ").map(parseFloat);
  const dx = from.left + from.width * ox / to.width - (to.left + ox);
  const dy = from.top + from.height * oy / to.height - (to.top + oy);
  const { delay = 0, duration = (d) => Math.sqrt(d) * 120, easing = cubicOut } = params2;
  return {
    delay,
    duration: is_function(duration) ? duration(Math.sqrt(dx * dx + dy * dy)) : duration,
    easing,
    css: (t, u) => {
      const x = u * dx;
      const y = u * dy;
      const sx = t + u * from.width / to.width;
      const sy = t + u * from.height / to.height;
      return `transform: ${transform} translate(${x}px, ${y}px) scale(${sx}, ${sy});`;
    }
  };
}
var _layout_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[25] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let div;
  let t;
  let current;
  let if_block0 = (!ctx[5] || ctx[5] && ctx[6]) && create_if_block_2(ctx);
  let if_block1 = (!ctx[5] || ctx[5] && !ctx[6]) && create_if_block_1(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      attr(div, "class", "container svelte-1bn6mt6");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append(div, t);
      if (if_block1)
        if_block1.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (!ctx2[5] || ctx2[5] && ctx2[6]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 96) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (!ctx2[5] || ctx2[5] && !ctx2[6]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 96) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_if_block_2(ctx) {
  let section;
  let h2;
  let t0_value = ctx[8]("chat.all-conversations") + "";
  let t0;
  let t1;
  let t2;
  let current_block_type_index;
  let if_block1;
  let section_intro;
  let current;
  let if_block0 = ctx[0] && create_if_block_4(ctx);
  const if_block_creators = [create_if_block_3, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[9] && ctx2[7].length === 0 && !ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      section = element("section");
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      if (if_block0)
        if_block0.c();
      t2 = space();
      if_block1.c();
      attr(h2, "class", "svelte-1bn6mt6");
      attr(section, "class", "conversations svelte-1bn6mt6");
    },
    m(target, anchor) {
      insert(target, section, anchor);
      append(section, h2);
      append(h2, t0);
      append(section, t1);
      if (if_block0)
        if_block0.m(section, null);
      append(section, t2);
      if_blocks[current_block_type_index].m(section, null);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 256) && t0_value !== (t0_value = ctx[8]("chat.all-conversations") + ""))
        set_data(t0, t0_value);
      if (ctx[0]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
          if (dirty & 1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(section, t2);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block1.c();
        } else {
          if_block1.p(ctx, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(section, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      if (!section_intro) {
        add_render_callback(() => {
          section_intro = create_in_transition(section, fly, { x: -ctx[1], duration: 400 });
          section_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      if (if_block0)
        if_block0.d();
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_if_block_4(ctx) {
  let article;
  let conversationcard;
  let current;
  conversationcard = new ConversationCard({
    props: {
      recipient: ctx[0].name,
      lastMessage: "",
      selected: ctx[4].chatId === "new"
    }
  });
  conversationcard.$on("click", ctx[16]);
  return {
    c() {
      article = element("article");
      create_component(conversationcard.$$.fragment);
      attr(article, "class", "svelte-1bn6mt6");
    },
    m(target, anchor) {
      insert(target, article, anchor);
      mount_component(conversationcard, article, null);
      current = true;
    },
    p(ctx2, dirty) {
      const conversationcard_changes = {};
      if (dirty & 1)
        conversationcard_changes.recipient = ctx2[0].name;
      if (dirty & 16)
        conversationcard_changes.selected = ctx2[4].chatId === "new";
      conversationcard.$set(conversationcard_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(conversationcard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(conversationcard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(article);
      destroy_component(conversationcard);
    }
  };
}
function create_else_block(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  let each_value = ctx[7];
  const get_key = (ctx2) => ctx2[25].id;
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
      if (dirty & 2188) {
        each_value = ctx2[7];
        group_outros();
        for (let i = 0; i < each_blocks.length; i += 1)
          each_blocks[i].r();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, fix_and_outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
        for (let i = 0; i < each_blocks.length; i += 1)
          each_blocks[i].a();
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
function create_if_block_3(ctx) {
  let div;
  let raw_value = ctx[8]("chat.no-messages.text", {
    values: {
      link: `<a class="link" href="${routes.MAP}">${ctx[8]("chat.no-messages.link")}</a>`
    }
  }) + "";
  return {
    c() {
      div = element("div");
      attr(div, "class", "empty svelte-1bn6mt6");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      div.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 256 && raw_value !== (raw_value = ctx2[8]("chat.no-messages.text", {
        values: {
          link: `<a class="link" href="${routes.MAP}">${ctx2[8]("chat.no-messages.link")}</a>`
        }
      }) + ""))
        div.innerHTML = raw_value;
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block(key_1, ctx) {
  let article;
  let conversationcard;
  let t;
  let rect;
  let stop_animation = noop;
  let current;
  function click_handler_1() {
    return ctx[17](ctx[25]);
  }
  conversationcard = new ConversationCard({
    props: {
      recipient: ctx[3][ctx[25].id].partner.firstName,
      lastMessage: ctx[25].lastMessage,
      selected: ctx[2] && ctx[2].id === ctx[25].id
    }
  });
  conversationcard.$on("click", click_handler_1);
  return {
    key: key_1,
    first: null,
    c() {
      article = element("article");
      create_component(conversationcard.$$.fragment);
      t = space();
      attr(article, "class", "svelte-1bn6mt6");
      this.first = article;
    },
    m(target, anchor) {
      insert(target, article, anchor);
      mount_component(conversationcard, article, null);
      append(article, t);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const conversationcard_changes = {};
      if (dirty & 136)
        conversationcard_changes.recipient = ctx[3][ctx[25].id].partner.firstName;
      if (dirty & 128)
        conversationcard_changes.lastMessage = ctx[25].lastMessage;
      if (dirty & 132)
        conversationcard_changes.selected = ctx[2] && ctx[2].id === ctx[25].id;
      conversationcard.$set(conversationcard_changes);
    },
    r() {
      rect = article.getBoundingClientRect();
    },
    f() {
      fix_position(article);
      stop_animation();
    },
    a() {
      stop_animation();
      stop_animation = create_animation(article, rect, flip, { duration: 400 });
    },
    i(local) {
      if (current)
        return;
      transition_in(conversationcard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(conversationcard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(article);
      destroy_component(conversationcard);
    }
  };
}
function create_if_block_1(ctx) {
  let div;
  let div_intro;
  let current;
  const default_slot_template = ctx[14].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[13], null);
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr(div, "class", "messages svelte-1bn6mt6");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8192)) {
          update_slot_base(default_slot, default_slot_template, ctx, ctx[13], !current ? get_all_dirty_from_scope(ctx[13]) : get_slot_changes(default_slot_template, ctx[13], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      if (!div_intro) {
        add_render_callback(() => {
          div_intro = create_in_transition(div, fly, { x: ctx[1], duration: 400 });
          div_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment(ctx) {
  let progress;
  let t;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  add_render_callback(ctx[15]);
  progress = new Progress({
    props: {
      active: !ctx[9] || ctx[10]
    }
  });
  let if_block = !ctx[4].with && ctx[9] && create_if_block(ctx);
  return {
    c() {
      create_component(progress.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      mount_component(progress, target, anchor);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(window, "resize", ctx[15]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const progress_changes = {};
      if (dirty & 1536)
        progress_changes.active = !ctx2[9] || ctx2[10];
      progress.$set(progress_changes);
      if (!ctx2[4].with && ctx2[9]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 528) {
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
      transition_in(progress.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(progress.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      destroy_component(progress, detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let selectedConversation;
  let conversations;
  let isOverview;
  let $isActive;
  let $goto;
  let $chats;
  let $params;
  let $redirect;
  let $_;
  let $user;
  let $hasInitialized;
  let $creatingNewChat;
  component_subscribe($$self, isActive, ($$value) => $$invalidate(12, $isActive = $$value));
  component_subscribe($$self, goto, ($$value) => $$invalidate(18, $goto = $$value));
  component_subscribe($$self, chats, ($$value) => $$invalidate(3, $chats = $$value));
  component_subscribe($$self, params, ($$value) => $$invalidate(4, $params = $$value));
  component_subscribe($$self, redirect, ($$value) => $$invalidate(19, $redirect = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(8, $_ = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(20, $user = $$value));
  component_subscribe($$self, hasInitialized, ($$value) => $$invalidate(9, $hasInitialized = $$value));
  component_subscribe($$self, creatingNewChat, ($$value) => $$invalidate(10, $creatingNewChat = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  if (!$user) {
    $goto(routes.SIGN_IN);
  } else if (!$user.emailVerified) {
    notify.warning($_("chat.notify.unverified"), 1e4);
    $goto(routes.ACCOUNT);
  }
  const sortByLastActivity = (c1, c2) => c2.lastActivity - c1.lastActivity;
  const normalizeName = (name) => {
    const parts = name.split(/[^A-Za-z-]/);
    return removeDiacritics(parts[0]).toLowerCase();
  };
  const getConvoRoute = (name, id) => `${routes.CHAT}/${normalizeName(name)}/${id}`;
  let newConversation;
  const startChattingWith = async (partnerId) => {
    if ($chats) {
      const activeChatWithUser = getChatForUser(partnerId);
      if (activeChatWithUser) {
        return $redirect(getConvoRoute($chats[activeChatWithUser].partner.firstName, activeChatWithUser));
      }
      try {
        const newPartner = await initiateChat(partnerId);
        $$invalidate(0, newConversation = { name: newPartner.firstName, partnerId });
        $redirect(getConvoRoute(newPartner.firstName, `new?id=${partnerId}`));
      } catch (ex) {
        $redirect(routes.CHAT);
      }
    }
  };
  const selectConversation = (id) => {
    if (!id)
      $goto(getConvoRoute(newConversation.name, "new"));
    const name = $chats[id] ? $chats[id].partner.firstName.toLowerCase() : newConversation.name;
    $goto(getConvoRoute(name, id));
  };
  let outerWidth;
  let isMobile = false;
  function onwindowresize() {
    $$invalidate(1, outerWidth = window.outerWidth);
  }
  const click_handler = () => selectConversation(null);
  const click_handler_1 = (conversation) => selectConversation(conversation.id);
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(13, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 24) {
      $$invalidate(2, selectedConversation = $chats[$params.chatId]);
    }
    if ($$self.$$.dirty & 8) {
      $$invalidate(7, conversations = Object.keys($chats).map((id) => $chats[id]).sort(sortByLastActivity));
    }
    if ($$self.$$.dirty & 5) {
      if (newConversation && selectedConversation && selectedConversation.users && selectedConversation.users.includes(newConversation.partnerId)) {
        $$invalidate(0, newConversation = null);
      }
    }
    if ($$self.$$.dirty & 16) {
      if ($params.with)
        startChattingWith($params.with);
    }
    if ($$self.$$.dirty & 4096) {
      $$invalidate(6, isOverview = $isActive("/chat/index"));
    }
    if ($$self.$$.dirty & 2) {
      outerWidth <= 700 ? $$invalidate(5, isMobile = true) : $$invalidate(5, isMobile = false);
    }
  };
  return [
    newConversation,
    outerWidth,
    selectedConversation,
    $chats,
    $params,
    isMobile,
    isOverview,
    conversations,
    $_,
    $hasInitialized,
    $creatingNewChat,
    selectConversation,
    $isActive,
    $$scope,
    slots,
    onwindowresize,
    click_handler,
    click_handler_1
  ];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Layout as default };
