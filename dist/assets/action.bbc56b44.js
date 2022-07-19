import { S as SvelteComponent, i as init, s as safe_not_equal, n as component_subscribe, K as goto, Y, L as params } from "./index.ae92f232.js";
import { u as user } from "./auth.4dd538c9.js";
import { n as notify } from "./notification.67ec90d7.js";
import { v as verifyPasswordResetCode, a as applyActionCode } from "./auth.cc08f0a7.js";
import { r as routes } from "./routes.77b585d1.js";
import "./index.a79b2e56.js";
function instance($$self, $$props, $$invalidate) {
  let $goto;
  let $_;
  let $user;
  let $params;
  component_subscribe($$self, goto, ($$value) => $$invalidate(0, $goto = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(1, $_ = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(2, $user = $$value));
  component_subscribe($$self, params, ($$value) => $$invalidate(3, $params = $$value));
  const { mode, oobCode } = $params;
  if (!mode || !oobCode) {
    notify.danger($_("auth.invalid-code"));
    $goto(routes.HOME);
  }
  const handleAction = async () => {
    if (mode === "resetPassword") {
      try {
        const email = await verifyPasswordResetCode(oobCode);
        $goto(routes.RESET_PASSWORD, { email, oobCode });
      } catch (ex) {
        notify.danger($_("auth.password.expired"), 15e3);
        $goto(routes.REQUEST_PASSWORD_RESET);
      }
    }
    if (mode === "verifyEmail") {
      try {
        await applyActionCode(oobCode);
        notify.success($_("auth.verification.succes"), 8e3);
        $goto(`${routes.ACCOUNT}?confirmed=true`);
      } catch (ex) {
        if ($user && $user.emailVerified) {
          notify.success($_("auth.verification.refresh"), 12e3);
          $goto(routes.ACCOUNT);
        } else {
          notify.danger($_("auth.verification.expired"), 15e3);
          $goto(routes.ACCOUNT);
        }
      }
    }
  };
  handleAction();
  return [];
}
class Action extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, null, safe_not_equal, {});
  }
}
export { Action as default };
