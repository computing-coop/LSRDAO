import { S as SvelteComponent, i as init, s as safe_not_equal } from "./index.ae92f232.js";
import { N as NProgress } from "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
function instance($$self, $$props, $$invalidate) {
  let { active = false } = $$props;
  let { speed = 0 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("active" in $$props2)
      $$invalidate(0, active = $$props2.active);
    if ("speed" in $$props2)
      $$invalidate(1, speed = $$props2.speed);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      if (speed)
        NProgress.configure({ trickleSpeed: speed });
    }
    if ($$self.$$.dirty & 1) {
      {
        if (active)
          NProgress.start();
        else
          NProgress.done();
      }
    }
  };
  return [active, speed];
}
class Progress extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, null, safe_not_equal, { active: 0, speed: 1 });
  }
}
export { Progress as P };
