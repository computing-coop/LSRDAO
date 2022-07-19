import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, e as element, t as text, c as create_component, d as insert, f as append, m as mount_component, g as set_data, h as transition_in, j as transition_out, k as detach, l as destroy_component, n as component_subscribe, b as attr, ac as destroy_each, p as empty, Y } from "./index.ae92f232.js";
import { e as emailAsLink } from "./links.48cf2c98.js";
import { g as getNodeChildren } from "./get-node-children.32a58892.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { O as Ol } from "./Ol.c4481612.js";
import "./constants.c39c3a18.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let p;
  let raw_value = ctx[0](`cookies.articles.${ctx[1]}.copy.${ctx[4]}`, {
    values: { support: emailAsLink }
  }) + "";
  return {
    c() {
      p = element("p");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 1 && raw_value !== (raw_value = ctx2[0](`cookies.articles.${ctx2[1]}.copy.${ctx2[4]}`, {
        values: { support: emailAsLink }
      }) + ""))
        p.innerHTML = raw_value;
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_each_block(ctx) {
  let li;
  let h3;
  let t0_value = ctx[0](`cookies.articles.${ctx[1]}.title`) + "";
  let t0;
  let t1;
  let t2;
  let each_value_1 = getNodeChildren(`cookies.articles.${ctx[1]}.copy`);
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    c() {
      li = element("li");
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      attr(h3, "class", "title");
      attr(li, "class", "h3");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, h3);
      append(h3, t0);
      append(li, t1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(li, null);
      }
      append(li, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0](`cookies.articles.${ctx2[1]}.title`) + ""))
        set_data(t0, t0_value);
      if (dirty & 1) {
        each_value_1 = getNodeChildren(`cookies.articles.${ctx2[1]}.copy`);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(li, t2);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let each_1_anchor;
  let each_value = getNodeChildren("cookies.articles");
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
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
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = getNodeChildren("cookies.articles");
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_fragment(ctx) {
  let title_value;
  let t0;
  let h2;
  let t1_value = ctx[0]("cookies.title") + "";
  let t1;
  let t2;
  let ol;
  let current;
  document.title = title_value = ctx[0]("cookies.title") + " | Welcome To My Garden";
  ol = new Ol({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      t0 = space();
      h2 = element("h2");
      t1 = text(t1_value);
      t2 = space();
      create_component(ol.$$.fragment);
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, h2, anchor);
      append(h2, t1);
      insert(target, t2, anchor);
      mount_component(ol, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && title_value !== (title_value = ctx2[0]("cookies.title") + " | Welcome To My Garden")) {
        document.title = title_value;
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0]("cookies.title") + ""))
        set_data(t1, t1_value);
      const ol_changes = {};
      if (dirty & 129) {
        ol_changes.$$scope = { dirty, ctx: ctx2 };
      }
      ol.$set(ol_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(ol.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(ol.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(h2);
      if (detaching)
        detach(t2);
      destroy_component(ol, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(0, $_ = $$value));
  return [$_];
}
class Cookies extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Cookies as default };
