import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, a as space, p as empty, b as attr, d as insert, f as append, g as set_data, k as detach, ac as destroy_each, c as create_component, m as mount_component, h as transition_in, j as transition_out, l as destroy_component, n as component_subscribe, Y } from "./index.ae92f232.js";
import { e as emailAsLink } from "./links.48cf2c98.js";
import { g as getNodeChildren } from "./get-node-children.32a58892.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { O as Ol } from "./Ol.c4481612.js";
import "./constants.c39c3a18.js";
var privacyPolicy_svelte_svelte_type_style_lang = "";
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
function get_each_context_7(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function create_each_block_7(ctx) {
  let li;
  let t0_value = ctx[0](`privacy-policy.personal-data.collection.sources.${ctx[19]}.list.${ctx[10]}`) + "";
  let t0;
  let t1;
  return {
    c() {
      li = element("li");
      t0 = text(t0_value);
      t1 = space();
      attr(li, "class", "info-item p svelte-1xavmr7");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, t0);
      append(li, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0](`privacy-policy.personal-data.collection.sources.${ctx2[19]}.list.${ctx2[10]}`) + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_each_block_6(ctx) {
  let li;
  let h4;
  let t0_value = ctx[0](`privacy-policy.personal-data.collection.sources.${ctx[19]}.title`) + "";
  let t0;
  let t1;
  let ul;
  let t2;
  let each_value_7 = getNodeChildren(`privacy-policy.personal-data.collection.sources.${ctx[19]}.list`);
  let each_blocks = [];
  for (let i = 0; i < each_value_7.length; i += 1) {
    each_blocks[i] = create_each_block_7(get_each_context_7(ctx, each_value_7, i));
  }
  return {
    c() {
      li = element("li");
      h4 = element("h4");
      t0 = text(t0_value);
      t1 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      attr(h4, "class", "title t4 svelte-1xavmr7");
      attr(ul, "class", "svelte-1xavmr7");
      attr(li, "class", "info-item p svelte-1xavmr7");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, h4);
      append(h4, t0);
      append(li, t1);
      append(li, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      append(li, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0](`privacy-policy.personal-data.collection.sources.${ctx2[19]}.title`) + ""))
        set_data(t0, t0_value);
      if (dirty & 1) {
        each_value_7 = getNodeChildren(`privacy-policy.personal-data.collection.sources.${ctx2[19]}.list`);
        let i;
        for (i = 0; i < each_value_7.length; i += 1) {
          const child_ctx = get_each_context_7(ctx2, each_value_7, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_7(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_7.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let each_1_anchor;
  let each_value_6 = getNodeChildren("privacy-policy.personal-data.collection.sources");
  let each_blocks = [];
  for (let i = 0; i < each_value_6.length; i += 1) {
    each_blocks[i] = create_each_block_6(get_each_context_6(ctx, each_value_6, i));
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
        each_value_6 = getNodeChildren("privacy-policy.personal-data.collection.sources");
        let i;
        for (i = 0; i < each_value_6.length; i += 1) {
          const child_ctx = get_each_context_6(ctx2, each_value_6, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_6(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_6.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block_5(ctx) {
  let li;
  let t0_value = ctx[0](`privacy-policy.personal-data.usage.purposes.${ctx[16]}`) + "";
  let t0;
  let t1;
  return {
    c() {
      li = element("li");
      t0 = text(t0_value);
      t1 = space();
      attr(li, "class", "info-item p svelte-1xavmr7");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, t0);
      append(li, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0](`privacy-policy.personal-data.usage.purposes.${ctx2[16]}`) + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_each_block_4(ctx) {
  let li;
  let h3;
  let t0_value = ctx[0](`privacy-policy.personal-data.extra.${ctx[13]}.title`) + "";
  let t0;
  let t1;
  let p;
  let t2_value = ctx[0](`privacy-policy.personal-data.extra.${ctx[13]}.copy`) + "";
  let t2;
  return {
    c() {
      li = element("li");
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      p = element("p");
      t2 = text(t2_value);
      attr(h3, "class", "t3 title svelte-1xavmr7");
      attr(p, "class", "svelte-1xavmr7");
      attr(li, "class", "h4 svelte-1xavmr7");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, h3);
      append(h3, t0);
      append(li, t1);
      append(li, p);
      append(p, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0](`privacy-policy.personal-data.extra.${ctx2[13]}.title`) + ""))
        set_data(t0, t0_value);
      if (dirty & 1 && t2_value !== (t2_value = ctx2[0](`privacy-policy.personal-data.extra.${ctx2[13]}.copy`) + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_each_block_3(ctx) {
  let li;
  let h4;
  let t0_value = ctx[0](`privacy-policy.rights.list.${ctx[10]}.title`) + "";
  let t0;
  let t1;
  let p;
  let t2_value = ctx[0](`privacy-policy.rights.list.${ctx[10]}.copy`) + "";
  let t2;
  let t3;
  return {
    c() {
      li = element("li");
      h4 = element("h4");
      t0 = text(t0_value);
      t1 = space();
      p = element("p");
      t2 = text(t2_value);
      t3 = space();
      attr(h4, "class", "t4 title svelte-1xavmr7");
      attr(p, "class", "info-item svelte-1xavmr7");
      attr(li, "class", "p svelte-1xavmr7");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, h4);
      append(h4, t0);
      append(li, t1);
      append(li, p);
      append(p, t2);
      append(li, t3);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0](`privacy-policy.rights.list.${ctx2[10]}.title`) + ""))
        set_data(t0, t0_value);
      if (dirty & 1 && t2_value !== (t2_value = ctx2[0](`privacy-policy.rights.list.${ctx2[10]}.copy`) + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_default_slot_1(ctx) {
  let each_1_anchor;
  let each_value_3 = getNodeChildren(`privacy-policy.rights.list`);
  let each_blocks = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
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
        each_value_3 = getNodeChildren(`privacy-policy.rights.list`);
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_3(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_3.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot(ctx) {
  let li0;
  let h30;
  let t0_value = ctx[0]("privacy-policy.scope.title") + "";
  let t0;
  let t1;
  let p0;
  let t2_value = ctx[0]("privacy-policy.scope.copy") + "";
  let t2;
  let t3;
  let li1;
  let h31;
  let t4_value = ctx[0]("privacy-policy.personal-data.meaning.title") + "";
  let t4;
  let t5;
  let p1;
  let t6_value = ctx[0]("privacy-policy.personal-data.meaning.copy") + "";
  let t6;
  let t7;
  let li2;
  let h32;
  let t8_value = ctx[0]("privacy-policy.personal-data.collection.title") + "";
  let t8;
  let t9;
  let p2;
  let t10_value = ctx[0]("privacy-policy.personal-data.collection.copy") + "";
  let t10;
  let t11;
  let ol0;
  let t12;
  let li3;
  let h33;
  let t13_value = ctx[0]("privacy-policy.personal-data.usage.title") + "";
  let t13;
  let t14;
  let p3;
  let t15_value = ctx[0]("privacy-policy.personal-data.usage.subtitle") + "";
  let t15;
  let t16;
  let ul;
  let t17;
  let p4;
  let raw0_value = ctx[0]("privacy-policy.personal-data.usage.copy") + "";
  let t18;
  let li4;
  let h34;
  let t19_value = ctx[0](`privacy-policy.personal-data.backups.title`) + "";
  let t19;
  let t20;
  let p5;
  let t21_value = ctx[0](`privacy-policy.personal-data.backups.copy`) + "";
  let t21;
  let t22;
  let t23;
  let li5;
  let h35;
  let t24_value = ctx[0]("privacy-policy.rights.title") + "";
  let t24;
  let t25;
  let p6;
  let t26_value = ctx[0]("privacy-policy.rights.copy") + "";
  let t26;
  let t27;
  let ol1;
  let t28;
  let li6;
  let h36;
  let t29_value = ctx[0]("privacy-policy.rights.exercise-rights.title") + "";
  let t29;
  let t30;
  let p7;
  let raw1_value = ctx[0]("privacy-policy.rights.exercise-rights.copy", {
    values: { support: emailAsLink }
  }) + "";
  let current;
  ol0 = new Ol({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  let each_value_5 = getNodeChildren(`privacy-policy.personal-data.usage.purposes`);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_5.length; i += 1) {
    each_blocks_1[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
  }
  let each_value_4 = getNodeChildren(`privacy-policy.personal-data.extra`);
  let each_blocks = [];
  for (let i = 0; i < each_value_4.length; i += 1) {
    each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }
  ol1 = new Ol({
    props: {
      class: "info-item",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      li0 = element("li");
      h30 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      p0 = element("p");
      t2 = text(t2_value);
      t3 = space();
      li1 = element("li");
      h31 = element("h3");
      t4 = text(t4_value);
      t5 = space();
      p1 = element("p");
      t6 = text(t6_value);
      t7 = space();
      li2 = element("li");
      h32 = element("h3");
      t8 = text(t8_value);
      t9 = space();
      p2 = element("p");
      t10 = text(t10_value);
      t11 = space();
      create_component(ol0.$$.fragment);
      t12 = space();
      li3 = element("li");
      h33 = element("h3");
      t13 = text(t13_value);
      t14 = space();
      p3 = element("p");
      t15 = text(t15_value);
      t16 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t17 = space();
      p4 = element("p");
      t18 = space();
      li4 = element("li");
      h34 = element("h3");
      t19 = text(t19_value);
      t20 = space();
      p5 = element("p");
      t21 = text(t21_value);
      t22 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t23 = space();
      li5 = element("li");
      h35 = element("h3");
      t24 = text(t24_value);
      t25 = space();
      p6 = element("p");
      t26 = text(t26_value);
      t27 = space();
      create_component(ol1.$$.fragment);
      t28 = space();
      li6 = element("li");
      h36 = element("h3");
      t29 = text(t29_value);
      t30 = space();
      p7 = element("p");
      attr(h30, "class", "title t3 svelte-1xavmr7");
      attr(p0, "class", "svelte-1xavmr7");
      attr(li0, "class", "h4 svelte-1xavmr7");
      attr(h31, "class", "title t3 svelte-1xavmr7");
      attr(p1, "class", "svelte-1xavmr7");
      attr(li1, "class", "h4 svelte-1xavmr7");
      attr(h32, "class", "title t3 svelte-1xavmr7");
      attr(p2, "class", "info svelte-1xavmr7");
      attr(li2, "class", "h4 svelte-1xavmr7");
      attr(h33, "class", "title t3 svelte-1xavmr7");
      attr(p3, "class", "info svelte-1xavmr7");
      attr(ul, "class", "svelte-1xavmr7");
      attr(p4, "class", "svelte-1xavmr7");
      attr(li3, "class", "h4 svelte-1xavmr7");
      attr(h34, "class", "t3 title svelte-1xavmr7");
      attr(p5, "class", "svelte-1xavmr7");
      attr(li4, "class", "h4 svelte-1xavmr7");
      attr(h35, "class", "t3 title svelte-1xavmr7");
      attr(p6, "class", "info p svelte-1xavmr7");
      attr(li5, "class", "h4 svelte-1xavmr7");
      attr(h36, "class", "title t3 svelte-1xavmr7");
      attr(p7, "class", "svelte-1xavmr7");
      attr(li6, "class", "h4 svelte-1xavmr7");
    },
    m(target, anchor) {
      insert(target, li0, anchor);
      append(li0, h30);
      append(h30, t0);
      append(li0, t1);
      append(li0, p0);
      append(p0, t2);
      insert(target, t3, anchor);
      insert(target, li1, anchor);
      append(li1, h31);
      append(h31, t4);
      append(li1, t5);
      append(li1, p1);
      append(p1, t6);
      insert(target, t7, anchor);
      insert(target, li2, anchor);
      append(li2, h32);
      append(h32, t8);
      append(li2, t9);
      append(li2, p2);
      append(p2, t10);
      append(li2, t11);
      mount_component(ol0, li2, null);
      insert(target, t12, anchor);
      insert(target, li3, anchor);
      append(li3, h33);
      append(h33, t13);
      append(li3, t14);
      append(li3, p3);
      append(p3, t15);
      append(li3, t16);
      append(li3, ul);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(ul, null);
      }
      append(li3, t17);
      append(li3, p4);
      p4.innerHTML = raw0_value;
      insert(target, t18, anchor);
      insert(target, li4, anchor);
      append(li4, h34);
      append(h34, t19);
      append(li4, t20);
      append(li4, p5);
      append(p5, t21);
      insert(target, t22, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, t23, anchor);
      insert(target, li5, anchor);
      append(li5, h35);
      append(h35, t24);
      append(li5, t25);
      append(li5, p6);
      append(p6, t26);
      append(li5, t27);
      mount_component(ol1, li5, null);
      insert(target, t28, anchor);
      insert(target, li6, anchor);
      append(li6, h36);
      append(h36, t29);
      append(li6, t30);
      append(li6, p7);
      p7.innerHTML = raw1_value;
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx2[0]("privacy-policy.scope.title") + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 1) && t2_value !== (t2_value = ctx2[0]("privacy-policy.scope.copy") + ""))
        set_data(t2, t2_value);
      if ((!current || dirty & 1) && t4_value !== (t4_value = ctx2[0]("privacy-policy.personal-data.meaning.title") + ""))
        set_data(t4, t4_value);
      if ((!current || dirty & 1) && t6_value !== (t6_value = ctx2[0]("privacy-policy.personal-data.meaning.copy") + ""))
        set_data(t6, t6_value);
      if ((!current || dirty & 1) && t8_value !== (t8_value = ctx2[0]("privacy-policy.personal-data.collection.title") + ""))
        set_data(t8, t8_value);
      if ((!current || dirty & 1) && t10_value !== (t10_value = ctx2[0]("privacy-policy.personal-data.collection.copy") + ""))
        set_data(t10, t10_value);
      const ol0_changes = {};
      if (dirty & 16777217) {
        ol0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      ol0.$set(ol0_changes);
      if ((!current || dirty & 1) && t13_value !== (t13_value = ctx2[0]("privacy-policy.personal-data.usage.title") + ""))
        set_data(t13, t13_value);
      if ((!current || dirty & 1) && t15_value !== (t15_value = ctx2[0]("privacy-policy.personal-data.usage.subtitle") + ""))
        set_data(t15, t15_value);
      if (dirty & 1) {
        each_value_5 = getNodeChildren(`privacy-policy.personal-data.usage.purposes`);
        let i;
        for (i = 0; i < each_value_5.length; i += 1) {
          const child_ctx = get_each_context_5(ctx2, each_value_5, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_5(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(ul, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_5.length;
      }
      if ((!current || dirty & 1) && raw0_value !== (raw0_value = ctx2[0]("privacy-policy.personal-data.usage.copy") + ""))
        p4.innerHTML = raw0_value;
      if ((!current || dirty & 1) && t19_value !== (t19_value = ctx2[0](`privacy-policy.personal-data.backups.title`) + ""))
        set_data(t19, t19_value);
      if ((!current || dirty & 1) && t21_value !== (t21_value = ctx2[0](`privacy-policy.personal-data.backups.copy`) + ""))
        set_data(t21, t21_value);
      if (dirty & 1) {
        each_value_4 = getNodeChildren(`privacy-policy.personal-data.extra`);
        let i;
        for (i = 0; i < each_value_4.length; i += 1) {
          const child_ctx = get_each_context_4(ctx2, each_value_4, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_4(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(t23.parentNode, t23);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_4.length;
      }
      if ((!current || dirty & 1) && t24_value !== (t24_value = ctx2[0]("privacy-policy.rights.title") + ""))
        set_data(t24, t24_value);
      if ((!current || dirty & 1) && t26_value !== (t26_value = ctx2[0]("privacy-policy.rights.copy") + ""))
        set_data(t26, t26_value);
      const ol1_changes = {};
      if (dirty & 16777217) {
        ol1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      ol1.$set(ol1_changes);
      if ((!current || dirty & 1) && t29_value !== (t29_value = ctx2[0]("privacy-policy.rights.exercise-rights.title") + ""))
        set_data(t29, t29_value);
      if ((!current || dirty & 1) && raw1_value !== (raw1_value = ctx2[0]("privacy-policy.rights.exercise-rights.copy", {
        values: { support: emailAsLink }
      }) + ""))
        p7.innerHTML = raw1_value;
    },
    i(local) {
      if (current)
        return;
      transition_in(ol0.$$.fragment, local);
      transition_in(ol1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(ol0.$$.fragment, local);
      transition_out(ol1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li0);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(li1);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(li2);
      destroy_component(ol0);
      if (detaching)
        detach(t12);
      if (detaching)
        detach(li3);
      destroy_each(each_blocks_1, detaching);
      if (detaching)
        detach(t18);
      if (detaching)
        detach(li4);
      if (detaching)
        detach(t22);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t23);
      if (detaching)
        detach(li5);
      destroy_component(ol1);
      if (detaching)
        detach(t28);
      if (detaching)
        detach(li6);
    }
  };
}
function create_each_block_2(ctx) {
  let p;
  let t_value = ctx[0](`privacy-policy.additional-info.infos.${ctx[4]}.copy.${ctx[7]}`) + "";
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      attr(p, "class", "svelte-1xavmr7");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[0](`privacy-policy.additional-info.infos.${ctx2[4]}.copy.${ctx2[7]}`) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_each_block_1(ctx) {
  let h4;
  let t0_value = ctx[0](`privacy-policy.additional-info.infos.${ctx[4]}.title`) + "";
  let t0;
  let t1;
  let each_1_anchor;
  let each_value_2 = getNodeChildren(`privacy-policy.additional-info.infos.${ctx[4]}.copy`);
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  return {
    c() {
      h4 = element("h4");
      t0 = text(t0_value);
      t1 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
      attr(h4, "class", "svelte-1xavmr7");
    },
    m(target, anchor) {
      insert(target, h4, anchor);
      append(h4, t0);
      insert(target, t1, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0](`privacy-policy.additional-info.infos.${ctx2[4]}.title`) + ""))
        set_data(t0, t0_value);
      if (dirty & 1) {
        each_value_2 = getNodeChildren(`privacy-policy.additional-info.infos.${ctx2[4]}.copy`);
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
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
        detach(h4);
      if (detaching)
        detach(t1);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block(ctx) {
  let h4;
  let t0_value = ctx[0](`privacy-policy.definitions.articles.${ctx[1]}.title`) + "";
  let t0;
  let t1;
  let p;
  let t2_value = ctx[0](`privacy-policy.definitions.articles.${ctx[1]}.copy`) + "";
  let t2;
  return {
    c() {
      h4 = element("h4");
      t0 = text(t0_value);
      t1 = space();
      p = element("p");
      t2 = text(t2_value);
      attr(h4, "class", "svelte-1xavmr7");
      attr(p, "class", "svelte-1xavmr7");
    },
    m(target, anchor) {
      insert(target, h4, anchor);
      append(h4, t0);
      insert(target, t1, anchor);
      insert(target, p, anchor);
      append(p, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0](`privacy-policy.definitions.articles.${ctx2[1]}.title`) + ""))
        set_data(t0, t0_value);
      if (dirty & 1 && t2_value !== (t2_value = ctx2[0](`privacy-policy.definitions.articles.${ctx2[1]}.copy`) + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(h4);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p);
    }
  };
}
function create_fragment(ctx) {
  let title_value;
  let t0;
  let h2;
  let div;
  let t1_value = ctx[0]("privacy-policy.title") + "";
  let t1;
  let t2;
  let small0;
  let t3_value = ctx[0]("privacy-policy.last-updated") + "";
  let t3;
  let t4;
  let p0;
  let t5_value = ctx[0]("privacy-policy.subtitle") + "";
  let t5;
  let t6;
  let p1;
  let t7_value = ctx[0]("privacy-policy.intro") + "";
  let t7;
  let t8;
  let p2;
  let raw_value = ctx[0]("privacy-policy.email", {
    values: { support: emailAsLink }
  }) + "";
  let t9;
  let ol;
  let t10;
  let h30;
  let t11_value = ctx[0]("privacy-policy.additional-info.title") + "";
  let t11;
  let t12;
  let t13;
  let h31;
  let t14_value = ctx[0]("privacy-policy.definitions.title") + "";
  let t14;
  let t15;
  let t16;
  let h40;
  let t17_value = ctx[0]("privacy-policy.definitions.legal-info.title") + "";
  let t17;
  let t18;
  let p3;
  let t19_value = ctx[0]("privacy-policy.definitions.legal-info.copy") + "";
  let t19;
  let t20;
  let h41;
  let t21_value = ctx[0]("privacy-policy.change-warning.title") + "";
  let t21;
  let t22;
  let small1;
  let t23_value = ctx[0]("privacy-policy.last-updated") + "";
  let t23;
  let t24;
  let p4;
  let t25_value = ctx[0]("privacy-policy.change-warning.copy") + "";
  let t25;
  let current;
  document.title = title_value = ctx[0]("privacy-policy.title") + " | Welcome To My Garden";
  ol = new Ol({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  let each_value_1 = getNodeChildren(`privacy-policy.additional-info.infos`);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = getNodeChildren(`privacy-policy.definitions.articles`);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      t0 = space();
      h2 = element("h2");
      div = element("div");
      t1 = text(t1_value);
      t2 = space();
      small0 = element("small");
      t3 = text(t3_value);
      t4 = space();
      p0 = element("p");
      t5 = text(t5_value);
      t6 = space();
      p1 = element("p");
      t7 = text(t7_value);
      t8 = space();
      p2 = element("p");
      t9 = space();
      create_component(ol.$$.fragment);
      t10 = space();
      h30 = element("h3");
      t11 = text(t11_value);
      t12 = space();
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t13 = space();
      h31 = element("h3");
      t14 = text(t14_value);
      t15 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t16 = space();
      h40 = element("h4");
      t17 = text(t17_value);
      t18 = space();
      p3 = element("p");
      t19 = text(t19_value);
      t20 = space();
      h41 = element("h4");
      t21 = text(t21_value);
      t22 = space();
      small1 = element("small");
      t23 = text(t23_value);
      t24 = space();
      p4 = element("p");
      t25 = text(t25_value);
      attr(small0, "class", "svelte-1xavmr7");
      attr(div, "class", "header svelte-1xavmr7");
      attr(p0, "class", "subtitle svelte-1xavmr7");
      attr(h2, "class", "svelte-1xavmr7");
      attr(p1, "class", "svelte-1xavmr7");
      attr(p2, "class", "svelte-1xavmr7");
      attr(h30, "class", "svelte-1xavmr7");
      attr(h31, "class", "svelte-1xavmr7");
      attr(h40, "class", "info svelte-1xavmr7");
      attr(p3, "class", "info-item svelte-1xavmr7");
      attr(small1, "class", "svelte-1xavmr7");
      attr(h41, "class", "info svelte-1xavmr7");
      attr(p4, "class", "info-item svelte-1xavmr7");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, h2, anchor);
      append(h2, div);
      append(div, t1);
      append(div, t2);
      append(div, small0);
      append(small0, t3);
      append(h2, t4);
      append(h2, p0);
      append(p0, t5);
      insert(target, t6, anchor);
      insert(target, p1, anchor);
      append(p1, t7);
      insert(target, t8, anchor);
      insert(target, p2, anchor);
      p2.innerHTML = raw_value;
      insert(target, t9, anchor);
      mount_component(ol, target, anchor);
      insert(target, t10, anchor);
      insert(target, h30, anchor);
      append(h30, t11);
      insert(target, t12, anchor);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(target, anchor);
      }
      insert(target, t13, anchor);
      insert(target, h31, anchor);
      append(h31, t14);
      insert(target, t15, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, t16, anchor);
      insert(target, h40, anchor);
      append(h40, t17);
      insert(target, t18, anchor);
      insert(target, p3, anchor);
      append(p3, t19);
      insert(target, t20, anchor);
      insert(target, h41, anchor);
      append(h41, t21);
      append(h41, t22);
      append(h41, small1);
      append(small1, t23);
      insert(target, t24, anchor);
      insert(target, p4, anchor);
      append(p4, t25);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && title_value !== (title_value = ctx2[0]("privacy-policy.title") + " | Welcome To My Garden")) {
        document.title = title_value;
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0]("privacy-policy.title") + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & 1) && t3_value !== (t3_value = ctx2[0]("privacy-policy.last-updated") + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & 1) && t5_value !== (t5_value = ctx2[0]("privacy-policy.subtitle") + ""))
        set_data(t5, t5_value);
      if ((!current || dirty & 1) && t7_value !== (t7_value = ctx2[0]("privacy-policy.intro") + ""))
        set_data(t7, t7_value);
      if ((!current || dirty & 1) && raw_value !== (raw_value = ctx2[0]("privacy-policy.email", {
        values: { support: emailAsLink }
      }) + ""))
        p2.innerHTML = raw_value;
      const ol_changes = {};
      if (dirty & 16777217) {
        ol_changes.$$scope = { dirty, ctx: ctx2 };
      }
      ol.$set(ol_changes);
      if ((!current || dirty & 1) && t11_value !== (t11_value = ctx2[0]("privacy-policy.additional-info.title") + ""))
        set_data(t11, t11_value);
      if (dirty & 1) {
        each_value_1 = getNodeChildren(`privacy-policy.additional-info.infos`);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(t13.parentNode, t13);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if ((!current || dirty & 1) && t14_value !== (t14_value = ctx2[0]("privacy-policy.definitions.title") + ""))
        set_data(t14, t14_value);
      if (dirty & 1) {
        each_value = getNodeChildren(`privacy-policy.definitions.articles`);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(t16.parentNode, t16);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if ((!current || dirty & 1) && t17_value !== (t17_value = ctx2[0]("privacy-policy.definitions.legal-info.title") + ""))
        set_data(t17, t17_value);
      if ((!current || dirty & 1) && t19_value !== (t19_value = ctx2[0]("privacy-policy.definitions.legal-info.copy") + ""))
        set_data(t19, t19_value);
      if ((!current || dirty & 1) && t21_value !== (t21_value = ctx2[0]("privacy-policy.change-warning.title") + ""))
        set_data(t21, t21_value);
      if ((!current || dirty & 1) && t23_value !== (t23_value = ctx2[0]("privacy-policy.last-updated") + ""))
        set_data(t23, t23_value);
      if ((!current || dirty & 1) && t25_value !== (t25_value = ctx2[0]("privacy-policy.change-warning.copy") + ""))
        set_data(t25, t25_value);
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
        detach(t6);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t8);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t9);
      destroy_component(ol, detaching);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(h30);
      if (detaching)
        detach(t12);
      destroy_each(each_blocks_1, detaching);
      if (detaching)
        detach(t13);
      if (detaching)
        detach(h31);
      if (detaching)
        detach(t15);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t16);
      if (detaching)
        detach(h40);
      if (detaching)
        detach(t18);
      if (detaching)
        detach(p3);
      if (detaching)
        detach(t20);
      if (detaching)
        detach(h41);
      if (detaching)
        detach(t24);
      if (detaching)
        detach(p4);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(0, $_ = $$value));
  return [$_];
}
class Privacy_policy extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Privacy_policy as default };
