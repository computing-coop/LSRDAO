import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, c as create_component, b as attr, d as insert, m as mount_component, h as transition_in, j as transition_out, k as detach, l as destroy_component, o as noop, M as add_render_callback, P as create_bidirectional_transition, t as text, f as append, g as set_data, a as space, C as toggle_class, Q as set_input_value, D as listen, q as group_outros, r as check_outros, E as run_all, V as onMount, J as bubble, X as binding_callbacks } from "./index.ae92f232.js";
import { f as fade } from "./index.f441bdbc.js";
import { I as Icon } from "./Icon.65885a60.js";
import { c as crossIcon } from "./cross.9b7c4c9e.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
function create_if_block_3(ctx) {
  let div;
  let icon_1;
  let current;
  icon_1 = new Icon({ props: { icon: ctx[10] } });
  return {
    c() {
      div = element("div");
      create_component(icon_1.$$.fragment);
      attr(div, "class", "icon svelte-1em7jaq");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(icon_1, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_1_changes = {};
      if (dirty & 1024)
        icon_1_changes.icon = ctx2[10];
      icon_1.$set(icon_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon_1);
    }
  };
}
function create_if_block_2(ctx) {
  let div;
  let icon_1;
  let div_transition;
  let current;
  icon_1 = new Icon({ props: { icon: crossIcon } });
  return {
    c() {
      div = element("div");
      create_component(icon_1.$$.fragment);
      attr(div, "class", "validation-icon svelte-1em7jaq");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(icon_1, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(icon_1.$$.fragment, local);
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, fade, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(icon_1.$$.fragment, local);
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, fade, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon_1);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_if_block(ctx) {
  let div;
  let if_block = ctx[5] && create_if_block_1(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      attr(div, "class", "error svelte-1em7jaq");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (ctx2[5]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_1(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text(ctx[5]);
      attr(p, "class", "error-message svelte-1em7jaq");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 32)
        set_data(t, ctx2[5]);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let input;
  let input_id_value;
  let t0;
  let t1;
  let t2;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[10] && create_if_block_3(ctx);
  let if_block1 = !ctx[9] && create_if_block_2();
  let if_block2 = !ctx[13] && create_if_block(ctx);
  return {
    c() {
      div = element("div");
      input = element("input");
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      attr(input, "name", ctx[2]);
      attr(input, "placeholder", ctx[3]);
      input.required = ctx[4];
      attr(input, "autocomplete", ctx[12]);
      attr(input, "list", ctx[11]);
      attr(input, "id", input_id_value = ctx[1] || ctx[2]);
      attr(input, "minlength", ctx[6]);
      attr(input, "maxlength", ctx[7]);
      attr(input, "pattern", ctx[8]);
      attr(input, "class", "input svelte-1em7jaq");
      toggle_class(input, "has-icon", !!ctx[10]);
      toggle_class(input, "invalid", !!ctx[9]);
      attr(div, "class", "container svelte-1em7jaq");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input);
      ctx[18](input);
      set_input_value(input, ctx[0]);
      append(div, t0);
      if (if_block0)
        if_block0.m(div, null);
      append(div, t1);
      if (if_block1)
        if_block1.m(div, null);
      append(div, t2);
      if (if_block2)
        if_block2.m(div, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[19]),
          listen(input, "blur", ctx[16]),
          listen(input, "input", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 4) {
        attr(input, "name", ctx2[2]);
      }
      if (!current || dirty & 8) {
        attr(input, "placeholder", ctx2[3]);
      }
      if (!current || dirty & 16) {
        input.required = ctx2[4];
      }
      if (!current || dirty & 4096) {
        attr(input, "autocomplete", ctx2[12]);
      }
      if (!current || dirty & 2048) {
        attr(input, "list", ctx2[11]);
      }
      if (!current || dirty & 6 && input_id_value !== (input_id_value = ctx2[1] || ctx2[2])) {
        attr(input, "id", input_id_value);
      }
      if (!current || dirty & 64) {
        attr(input, "minlength", ctx2[6]);
      }
      if (!current || dirty & 128) {
        attr(input, "maxlength", ctx2[7]);
      }
      if (!current || dirty & 256) {
        attr(input, "pattern", ctx2[8]);
      }
      if (dirty & 1 && input.value !== ctx2[0]) {
        set_input_value(input, ctx2[0]);
      }
      if (dirty & 1024) {
        toggle_class(input, "has-icon", !!ctx2[10]);
      }
      if (dirty & 512) {
        toggle_class(input, "invalid", !!ctx2[9]);
      }
      if (ctx2[10]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 1024) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_3(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (!ctx2[9]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 512) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2();
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, t2);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!ctx2[13]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block(ctx2);
          if_block2.c();
          if_block2.m(div, null);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
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
      ctx[18](null);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { id = null } = $$props;
  let { name } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = "" } = $$props;
  let { required = false } = $$props;
  let { value = "" } = $$props;
  let { error = "" } = $$props;
  let { minLength = null } = $$props;
  let { maxLength = null } = $$props;
  let { testPattern = null } = $$props;
  let { isValid = true } = $$props;
  let { icon = null } = $$props;
  let { list = null } = $$props;
  let { autocomplete = "on" } = $$props;
  let { hideError = false } = $$props;
  let inputElement;
  onMount(() => {
    $$invalidate(14, inputElement.type = type, inputElement);
  });
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      inputElement = $$value;
      $$invalidate(14, inputElement);
    });
  }
  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(1, id = $$props2.id);
    if ("name" in $$props2)
      $$invalidate(2, name = $$props2.name);
    if ("type" in $$props2)
      $$invalidate(15, type = $$props2.type);
    if ("placeholder" in $$props2)
      $$invalidate(3, placeholder = $$props2.placeholder);
    if ("required" in $$props2)
      $$invalidate(4, required = $$props2.required);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("error" in $$props2)
      $$invalidate(5, error = $$props2.error);
    if ("minLength" in $$props2)
      $$invalidate(6, minLength = $$props2.minLength);
    if ("maxLength" in $$props2)
      $$invalidate(7, maxLength = $$props2.maxLength);
    if ("testPattern" in $$props2)
      $$invalidate(8, testPattern = $$props2.testPattern);
    if ("isValid" in $$props2)
      $$invalidate(9, isValid = $$props2.isValid);
    if ("icon" in $$props2)
      $$invalidate(10, icon = $$props2.icon);
    if ("list" in $$props2)
      $$invalidate(11, list = $$props2.list);
    if ("autocomplete" in $$props2)
      $$invalidate(12, autocomplete = $$props2.autocomplete);
    if ("hideError" in $$props2)
      $$invalidate(13, hideError = $$props2.hideError);
  };
  return [
    value,
    id,
    name,
    placeholder,
    required,
    error,
    minLength,
    maxLength,
    testPattern,
    isValid,
    icon,
    list,
    autocomplete,
    hideError,
    inputElement,
    type,
    blur_handler,
    input_handler,
    input_binding,
    input_input_handler
  ];
}
class TextInput extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      id: 1,
      name: 2,
      type: 15,
      placeholder: 3,
      required: 4,
      value: 0,
      error: 5,
      minLength: 6,
      maxLength: 7,
      testPattern: 8,
      isValid: 9,
      icon: 10,
      list: 11,
      autocomplete: 12,
      hideError: 13
    });
  }
}
export { TextInput as T };
