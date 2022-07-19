import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, c as create_component, d as insert, m as mount_component, h as transition_in, j as transition_out, k as detach, l as destroy_component, n as component_subscribe, K as goto, Y, F as redirect } from "./index.ae92f232.js";
import { u as updateGarden, j as updateGardenLocally } from "./garden.8cd2410c.js";
import { u as user } from "./auth.4dd538c9.js";
import { n as notify } from "./notification.67ec90d7.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { P as Progress } from "./Progress.9dad7c45.js";
import { F as Form } from "./Form.49950187.js";
import { r as routes } from "./routes.77b585d1.js";
import "./index.a79b2e56.js";
import "./index.f441bdbc.js";
import "./mapbox.16628e51.js";
import "./Button.d1669e9b.js";
import "./TextInput.80847e0d.js";
import "./Icon.65885a60.js";
import "./cross.9b7c4c9e.js";
import "./LabeledCheckbox.0b5b74e8.js";
import "./tent.5b24dad1.js";
function create_fragment(ctx) {
  let title_value;
  let t0;
  let progress;
  let t1;
  let form;
  let current;
  document.title = title_value = ctx[2]("garden.manage.title") + " | Welcome To My Garden";
  progress = new Progress({
    props: { active: ctx[0] }
  });
  form = new Form({
    props: {
      isUpdate: true,
      isSubmitting: ctx[0],
      garden: ctx[1].garden
    }
  });
  form.$on("submit", ctx[3]);
  return {
    c() {
      t0 = space();
      create_component(progress.$$.fragment);
      t1 = space();
      create_component(form.$$.fragment);
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      mount_component(progress, target, anchor);
      insert(target, t1, anchor);
      mount_component(form, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 4) && title_value !== (title_value = ctx2[2]("garden.manage.title") + " | Welcome To My Garden")) {
        document.title = title_value;
      }
      const progress_changes = {};
      if (dirty & 1)
        progress_changes.active = ctx2[0];
      progress.$set(progress_changes);
      const form_changes = {};
      if (dirty & 1)
        form_changes.isSubmitting = ctx2[0];
      if (dirty & 2)
        form_changes.garden = ctx2[1].garden;
      form.$set(form_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(progress.$$.fragment, local);
      transition_in(form.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(progress.$$.fragment, local);
      transition_out(form.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      destroy_component(progress, detaching);
      if (detaching)
        detach(t1);
      destroy_component(form, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $user;
  let $goto;
  let $_;
  let $redirect;
  component_subscribe($$self, user, ($$value) => $$invalidate(1, $user = $$value));
  component_subscribe($$self, goto, ($$value) => $$invalidate(4, $goto = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(2, $_ = $$value));
  component_subscribe($$self, redirect, ($$value) => $$invalidate(5, $redirect = $$value));
  if (!$user || !$user.emailVerified) {
    notify.warning("Please verify your email first.", 8e3);
    $redirect(routes.ACCOUNT);
  }
  let updatingGarden = false;
  const submit = async (e) => {
    const garden = e.detail;
    $$invalidate(0, updatingGarden = true);
    try {
      const newGarden = await updateGarden({
        ...garden,
        photo: garden.photo && garden.photo.files ? garden.photo.files[0] : null
      });
      $$invalidate(0, updatingGarden = false);
      await updateGardenLocally(newGarden);
      let notifyMsg;
      newGarden.photo ? notifyMsg = $_("garden.notify.update") + " " + $_("garden.notify.photo") : notifyMsg = $_("garden.notify.update");
      notify.success(notifyMsg, 1e4);
      $goto(`${routes.MAP}/garden/${$user.id}`);
    } catch (ex) {
      console.log(ex);
      $$invalidate(0, updatingGarden = false);
    }
  };
  return [updatingGarden, $user, $_, submit];
}
class Manage extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Manage as default };
