import { S as SvelteComponent, i as init, s as safe_not_equal, o as noop, n as component_subscribe, Y } from "./index.ae92f232.js";
function create_fragment(ctx) {
  let title_value;
  document.title = title_value = ctx[0]("chat.title") + " | Welcome To My Garden";
  return {
    c: noop,
    m: noop,
    p(ctx2, [dirty]) {
      if (dirty & 1 && title_value !== (title_value = ctx2[0]("chat.title") + " | Welcome To My Garden")) {
        document.title = title_value;
      }
    },
    i: noop,
    o: noop,
    d: noop
  };
}
function instance($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(0, $_ = $$value));
  let { chatId } = $$props;
  $$self.$$set = ($$props2) => {
    if ("chatId" in $$props2)
      $$invalidate(1, chatId = $$props2.chatId);
  };
  return [$_, chatId];
}
class Chat extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { chatId: 1 });
  }
}
export { Chat as default };
