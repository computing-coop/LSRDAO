import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, b as attr, d as insert, k as detach, a as space, t as text, c as create_component, f as append, m as mount_component, g as set_data, h as transition_in, j as transition_out, ac as destroy_each, l as destroy_component, n as component_subscribe, q as group_outros, r as check_outros, p as empty, Y } from "./index.ae92f232.js";
import { e as emailAsLink } from "./links.48cf2c98.js";
import { g as getNodeChildren } from "./get-node-children.32a58892.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { O as Ol } from "./Ol.c4481612.js";
import "./constants.c39c3a18.js";
var termsOfUse_svelte_svelte_type_style_lang = "";
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
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function get_each_context_4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
}
function get_each_context_5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[16] = list[i];
  return child_ctx;
}
function get_each_context_6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  return child_ctx;
}
function create_each_block_6(ctx) {
  let p;
  let raw_value = ctx[0](`terms-of-use.intro.${ctx[19]}.copy`, {
    values: { support: emailAsLink }
  }) + "";
  return {
    c() {
      p = element("p");
      attr(p, "class", "svelte-gzg0af");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 1 && raw_value !== (raw_value = ctx2[0](`terms-of-use.intro.${ctx2[19]}.copy`, {
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
function create_each_block_5(ctx) {
  let p;
  let raw_value = ctx[0](`terms-of-use.articles.${ctx[1]}.descriptions.${ctx[16]}.copy`, {
    values: { support: emailAsLink }
  }) + "";
  return {
    c() {
      p = element("p");
      attr(p, "class", "svelte-gzg0af");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 1 && raw_value !== (raw_value = ctx2[0](`terms-of-use.articles.${ctx2[1]}.descriptions.${ctx2[16]}.copy`, {
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
function create_each_block_4(ctx) {
  let li;
  let h4;
  let raw0_value = ctx[0](`terms-of-use.articles.${ctx[1]}.info.${ctx[10]}.sections.${ctx[13]}.title`) + "";
  let t;
  let p;
  let raw1_value = ctx[0](`terms-of-use.articles.${ctx[1]}.info.${ctx[10]}.sections.${ctx[13]}.copy`) + "";
  return {
    c() {
      li = element("li");
      h4 = element("h4");
      t = space();
      p = element("p");
      attr(h4, "class", "title svelte-gzg0af");
      attr(p, "class", "svelte-gzg0af");
      attr(li, "class", "info-item h4 svelte-gzg0af");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, h4);
      h4.innerHTML = raw0_value;
      append(li, t);
      append(li, p);
      p.innerHTML = raw1_value;
    },
    p(ctx2, dirty) {
      if (dirty & 1 && raw0_value !== (raw0_value = ctx2[0](`terms-of-use.articles.${ctx2[1]}.info.${ctx2[10]}.sections.${ctx2[13]}.title`) + ""))
        h4.innerHTML = raw0_value;
      if (dirty & 1 && raw1_value !== (raw1_value = ctx2[0](`terms-of-use.articles.${ctx2[1]}.info.${ctx2[10]}.sections.${ctx2[13]}.copy`) + ""))
        p.innerHTML = raw1_value;
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_default_slot_2(ctx) {
  let each_1_anchor;
  let each_value_4 = getNodeChildren(`terms-of-use.articles.${ctx[1]}.info.${ctx[10]}.sections`);
  let each_blocks = [];
  for (let i = 0; i < each_value_4.length; i += 1) {
    each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
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
        each_value_4 = getNodeChildren(`terms-of-use.articles.${ctx2[1]}.info.${ctx2[10]}.sections`);
        let i;
        for (i = 0; i < each_value_4.length; i += 1) {
          const child_ctx = get_each_context_4(ctx2, each_value_4, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_4(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_4.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block_3(ctx) {
  let p;
  let raw_value = ctx[0](`terms-of-use.articles.${ctx[1]}.info.${ctx[10]}.title`) + "";
  let t;
  let ol;
  let current;
  ol = new Ol({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      p = element("p");
      t = space();
      create_component(ol.$$.fragment);
      attr(p, "class", "info svelte-gzg0af");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
      insert(target, t, anchor);
      mount_component(ol, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && raw_value !== (raw_value = ctx2[0](`terms-of-use.articles.${ctx2[1]}.info.${ctx2[10]}.title`) + ""))
        p.innerHTML = raw_value;
      const ol_changes = {};
      if (dirty & 4194305) {
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
        detach(p);
      if (detaching)
        detach(t);
      destroy_component(ol, detaching);
    }
  };
}
function create_each_block_2(ctx) {
  let p;
  let raw_value = ctx[0](`terms-of-use.articles.${ctx[1]}.paragraphs.${ctx[4]}.copy.${ctx[7]}`) + "";
  return {
    c() {
      p = element("p");
      attr(p, "class", "svelte-gzg0af");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 1 && raw_value !== (raw_value = ctx2[0](`terms-of-use.articles.${ctx2[1]}.paragraphs.${ctx2[4]}.copy.${ctx2[7]}`) + ""))
        p.innerHTML = raw_value;
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_each_block_1(ctx) {
  let li;
  let h4;
  let raw_value = ctx[0](`terms-of-use.articles.${ctx[1]}.paragraphs.${ctx[4]}.title`) + "";
  let t0;
  let t1;
  let each_value_2 = getNodeChildren(`terms-of-use.articles.${ctx[1]}.paragraphs.${ctx[4]}.copy`);
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  return {
    c() {
      li = element("li");
      h4 = element("h4");
      t0 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      attr(h4, "class", "title svelte-gzg0af");
      attr(li, "class", "h4 svelte-gzg0af");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, h4);
      h4.innerHTML = raw_value;
      append(li, t0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(li, null);
      }
      append(li, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && raw_value !== (raw_value = ctx2[0](`terms-of-use.articles.${ctx2[1]}.paragraphs.${ctx2[4]}.title`) + ""))
        h4.innerHTML = raw_value;
      if (dirty & 1) {
        each_value_2 = getNodeChildren(`terms-of-use.articles.${ctx2[1]}.paragraphs.${ctx2[4]}.copy`);
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(li, t1);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let each_1_anchor;
  let each_value_1 = getNodeChildren(`terms-of-use.articles.${ctx[1]}.paragraphs`);
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
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
        each_value_1 = getNodeChildren(`terms-of-use.articles.${ctx2[1]}.paragraphs`);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block(ctx) {
  let li;
  let h3;
  let raw_value = ctx[0](`terms-of-use.articles.${ctx[1]}.title`) + "";
  let t0;
  let t1;
  let t2;
  let ol;
  let t3;
  let div;
  let current;
  let each_value_5 = getNodeChildren(`terms-of-use.articles.${ctx[1]}.descriptions`);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_5.length; i += 1) {
    each_blocks_1[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
  }
  let each_value_3 = getNodeChildren(`terms-of-use.articles.${ctx[1]}.info`);
  let each_blocks = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  ol = new Ol({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      li = element("li");
      h3 = element("h3");
      t0 = space();
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t1 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      create_component(ol.$$.fragment);
      t3 = space();
      div = element("div");
      attr(h3, "class", "title svelte-gzg0af");
      attr(li, "class", "h3 svelte-gzg0af");
      attr(div, "class", "line-break svelte-gzg0af");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, h3);
      h3.innerHTML = raw_value;
      append(li, t0);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(li, null);
      }
      append(li, t1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(li, null);
      }
      append(li, t2);
      mount_component(ol, li, null);
      insert(target, t3, anchor);
      insert(target, div, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && raw_value !== (raw_value = ctx2[0](`terms-of-use.articles.${ctx2[1]}.title`) + ""))
        h3.innerHTML = raw_value;
      if (dirty & 1) {
        each_value_5 = getNodeChildren(`terms-of-use.articles.${ctx2[1]}.descriptions`);
        let i;
        for (i = 0; i < each_value_5.length; i += 1) {
          const child_ctx = get_each_context_5(ctx2, each_value_5, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_5(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(li, t1);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_5.length;
      }
      if (dirty & 1) {
        each_value_3 = getNodeChildren(`terms-of-use.articles.${ctx2[1]}.info`);
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(li, t2);
          }
        }
        group_outros();
        for (i = each_value_3.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const ol_changes = {};
      if (dirty & 4194305) {
        ol_changes.$$scope = { dirty, ctx: ctx2 };
      }
      ol.$set(ol_changes);
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_3.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(ol.$$.fragment, local);
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(ol.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      destroy_component(ol);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot(ctx) {
  let each_1_anchor;
  let current;
  let each_value = getNodeChildren("terms-of-use.articles");
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
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = getNodeChildren("terms-of-use.articles");
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
function create_fragment(ctx) {
  let title_value;
  let t0;
  let h2;
  let t1_value = ctx[0]("terms-of-use.title") + "";
  let t1;
  let t2;
  let small;
  let t3_value = ctx[0]("terms-of-use.last-updated") + "";
  let t3;
  let t4;
  let t5;
  let div;
  let t6;
  let ol;
  let current;
  document.title = title_value = ctx[0]("terms-of-use.title") + " | Welcome To My Garden";
  let each_value_6 = getNodeChildren("terms-of-use.intro");
  let each_blocks = [];
  for (let i = 0; i < each_value_6.length; i += 1) {
    each_blocks[i] = create_each_block_6(get_each_context_6(ctx, each_value_6, i));
  }
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
      small = element("small");
      t3 = text(t3_value);
      t4 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t5 = space();
      div = element("div");
      t6 = space();
      create_component(ol.$$.fragment);
      attr(small, "class", "svelte-gzg0af");
      attr(h2, "class", "svelte-gzg0af");
      attr(div, "class", "line-break svelte-gzg0af");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, h2, anchor);
      append(h2, t1);
      append(h2, t2);
      append(h2, small);
      append(small, t3);
      insert(target, t4, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, t5, anchor);
      insert(target, div, anchor);
      insert(target, t6, anchor);
      mount_component(ol, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && title_value !== (title_value = ctx2[0]("terms-of-use.title") + " | Welcome To My Garden")) {
        document.title = title_value;
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0]("terms-of-use.title") + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & 1) && t3_value !== (t3_value = ctx2[0]("terms-of-use.last-updated") + ""))
        set_data(t3, t3_value);
      if (dirty & 1) {
        each_value_6 = getNodeChildren("terms-of-use.intro");
        let i;
        for (i = 0; i < each_value_6.length; i += 1) {
          const child_ctx = get_each_context_6(ctx2, each_value_6, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_6(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(t5.parentNode, t5);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_6.length;
      }
      const ol_changes = {};
      if (dirty & 4194305) {
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
        detach(t4);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(div);
      if (detaching)
        detach(t6);
      destroy_component(ol, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(0, $_ = $$value));
  return [$_];
}
class Terms_of_use extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Terms_of_use as default };
