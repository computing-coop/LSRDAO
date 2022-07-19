import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, a as space, b as attr, d as insert, f as append, g as set_data, h as transition_in, c as create_component, m as mount_component, j as transition_out, l as destroy_component, q as group_outros, r as check_outros, k as detach, ac as destroy_each, p as empty, n as component_subscribe, Y, ad as HtmlTag } from "./index.ae92f232.js";
import { e as emailAsLink } from "./links.48cf2c98.js";
import { g as getNodeChildren } from "./get-node-children.32a58892.js";
import { C as Collapsible } from "./Collapsible.621887e7.js";
import { D as DONATION_URL, C as COMMUNITY_TRANSLATIONS_URL } from "./constants.c39c3a18.js";
import { r as routes } from "./routes.77b585d1.js";
import "./index.f441bdbc.js";
var Clusters_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function create_title_slot(ctx) {
  let h4;
  let t_value = ctx[2](`${ctx[0]}.${ctx[5]}.questions.${ctx[8]}.title`) + "";
  let t;
  return {
    c() {
      h4 = element("h4");
      t = text(t_value);
      attr(h4, "slot", "title");
      attr(h4, "class", "svelte-1l0644j");
    },
    m(target, anchor) {
      insert(target, h4, anchor);
      append(h4, t);
    },
    p(ctx2, dirty) {
      if (dirty & 5 && t_value !== (t_value = ctx2[2](`${ctx2[0]}.${ctx2[5]}.questions.${ctx2[8]}.title`) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(h4);
    }
  };
}
function create_content_slot(ctx) {
  let p;
  let html_tag;
  let raw_value = ctx[2](`${ctx[0]}.${ctx[5]}.questions.${ctx[8]}.copy`, {
    values: {
      support: emailAsLink,
      donationLink: `<a href="${DONATION_URL}" target="_blank" rel="noopener noreferrer" class="link">
                  ${ctx[2]("faq.donation")}</a>`,
      chatLink: `<a href="${routes.CHAT}" target="_blank" class="link lowercase">
                  ${ctx[2]("generics.chat")}</a>`,
      accountLink: `<a href="${routes.ACCOUNT}" target="_blank" class="link lowercase">
                  ${ctx[2]("generics.account")}</a>`,
      communityTranslationsLink: `<a href="${COMMUNITY_TRANSLATIONS_URL}" target="_blank" class="link lowercase">
                  ${ctx[2]("faq.instruction-page")}</a>`
    }
  }) + "";
  let t;
  return {
    c() {
      p = element("p");
      html_tag = new HtmlTag(false);
      t = space();
      html_tag.a = t;
      attr(p, "slot", "content");
      attr(p, "class", "svelte-1l0644j");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      html_tag.m(raw_value, p);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 5 && raw_value !== (raw_value = ctx2[2](`${ctx2[0]}.${ctx2[5]}.questions.${ctx2[8]}.copy`, {
        values: {
          support: emailAsLink,
          donationLink: `<a href="${DONATION_URL}" target="_blank" rel="noopener noreferrer" class="link">
                  ${ctx2[2]("faq.donation")}</a>`,
          chatLink: `<a href="${routes.CHAT}" target="_blank" class="link lowercase">
                  ${ctx2[2]("generics.chat")}</a>`,
          accountLink: `<a href="${routes.ACCOUNT}" target="_blank" class="link lowercase">
                  ${ctx2[2]("generics.account")}</a>`,
          communityTranslationsLink: `<a href="${COMMUNITY_TRANSLATIONS_URL}" target="_blank" class="link lowercase">
                  ${ctx2[2]("faq.instruction-page")}</a>`
        }
      }) + ""))
        html_tag.p(raw_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_each_block_1(ctx) {
  let collapsible;
  let current;
  function click_handler() {
    return ctx[4](ctx[5], ctx[8]);
  }
  collapsible = new Collapsible({
    props: {
      open: ctx[1] === `${ctx[5]}-${ctx[8]}`,
      $$slots: {
        content: [create_content_slot],
        title: [create_title_slot]
      },
      $$scope: { ctx }
    }
  });
  collapsible.$on("click", click_handler);
  return {
    c() {
      create_component(collapsible.$$.fragment);
    },
    m(target, anchor) {
      mount_component(collapsible, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const collapsible_changes = {};
      if (dirty & 3)
        collapsible_changes.open = ctx[1] === `${ctx[5]}-${ctx[8]}`;
      if (dirty & 2053) {
        collapsible_changes.$$scope = { dirty, ctx };
      }
      collapsible.$set(collapsible_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(collapsible.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(collapsible.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(collapsible, detaching);
    }
  };
}
function create_each_block(ctx) {
  let div2;
  let div0;
  let h3;
  let t0_value = ctx[2](`${ctx[0]}.${ctx[5]}.title`) + "";
  let t0;
  let t1;
  let div1;
  let t2;
  let current;
  let each_value_1 = getNodeChildren(`${ctx[0]}.${ctx[5]}.questions`);
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      attr(h3, "class", "svelte-1l0644j");
      attr(div0, "class", "title svelte-1l0644j");
      attr(div1, "class", "cluster-collapsible svelte-1l0644j");
      attr(div2, "class", "cluster svelte-1l0644j");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);
      append(div0, h3);
      append(h3, t0);
      append(div2, t1);
      append(div2, div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
      append(div2, t2);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 5) && t0_value !== (t0_value = ctx2[2](`${ctx2[0]}.${ctx2[5]}.title`) + ""))
        set_data(t0, t0_value);
      if (dirty & 15) {
        each_value_1 = getNodeChildren(`${ctx2[0]}.${ctx2[5]}.questions`);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div1, null);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let each_1_anchor;
  let current;
  let each_value = getNodeChildren(ctx[0]);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
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
    p(ctx2, [dirty]) {
      if (dirty & 15) {
        each_value = getNodeChildren(ctx2[0]);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
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
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(2, $_ = $$value));
  let { clustersKey: clustersKey2 } = $$props;
  let activeCollapsible = null;
  const setActiveCollapsible = (id) => {
    activeCollapsible === id ? $$invalidate(1, activeCollapsible = null) : $$invalidate(1, activeCollapsible = id);
  };
  const click_handler = (clusterKey, questionKey) => setActiveCollapsible(`${clusterKey}-${questionKey}`);
  $$self.$$set = ($$props2) => {
    if ("clustersKey" in $$props2)
      $$invalidate(0, clustersKey2 = $$props2.clustersKey);
  };
  return [clustersKey2, activeCollapsible, $_, setActiveCollapsible, click_handler];
}
class Clusters extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { clustersKey: 0 });
  }
}
function create_fragment(ctx) {
  let title_value;
  let t0;
  let div;
  let h2;
  let t1_value = ctx[0]("faq.title") + "";
  let t1;
  let t2;
  let p;
  let t3_value = ctx[0]("faq.description") + "";
  let t3;
  let t4;
  let clusters;
  let current;
  document.title = title_value = ctx[0]("generics.faq.acronym") + " | Welcome To My Garden";
  clusters = new Clusters({ props: { clustersKey } });
  return {
    c() {
      t0 = space();
      div = element("div");
      h2 = element("h2");
      t1 = text(t1_value);
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      create_component(clusters.$$.fragment);
      attr(div, "class", "intro");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, div, anchor);
      append(div, h2);
      append(h2, t1);
      append(div, t2);
      append(div, p);
      append(p, t3);
      insert(target, t4, anchor);
      mount_component(clusters, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && title_value !== (title_value = ctx2[0]("generics.faq.acronym") + " | Welcome To My Garden")) {
        document.title = title_value;
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0]("faq.title") + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & 1) && t3_value !== (t3_value = ctx2[0]("faq.description") + ""))
        set_data(t3, t3_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(clusters.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(clusters.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (detaching)
        detach(t4);
      destroy_component(clusters, detaching);
    }
  };
}
let clustersKey = "faq.clusters";
function instance($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(0, $_ = $$value));
  return [$_];
}
class Faq extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Faq as default };
