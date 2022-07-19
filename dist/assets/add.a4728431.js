import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, c as create_component, d as insert, m as mount_component, h as transition_in, j as transition_out, k as detach, l as destroy_component, n as component_subscribe, F as redirect, Y } from "./index.ae92f232.js";
import { e as addGarden, f as addGardenLocally } from "./garden.8cd2410c.js";
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
  document.title = title_value = ctx[1]("garden.add.title") + " | Leisure Cooperative";
  progress = new Progress({
    props: { active: ctx[0] }
  });
  form = new Form({
    props: {
      isSubmitting: ctx[0],
      garden: ctx[3]
    }
  });
  form.$on("submit", ctx[2]);
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
      if ((!current || dirty & 2) && title_value !== (title_value = ctx2[1]("garden.add.title") + " | Leisure Cooperative")) {
        document.title = title_value;
      }
      const progress_changes = {};
      if (dirty & 1)
        progress_changes.active = ctx2[0];
      progress.$set(progress_changes);
      const form_changes = {};
      if (dirty & 1)
        form_changes.isSubmitting = ctx2[0];
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
  let $redirect;
  let $_;
  component_subscribe($$self, user, ($$value) => $$invalidate(4, $user = $$value));
  component_subscribe($$self, redirect, ($$value) => $$invalidate(5, $redirect = $$value));
  component_subscribe($$self, Y, ($$value) => $$invalidate(1, $_ = $$value));
  if ($user && $user.garden)
    $redirect(routes.MANAGE_GARDEN);
  let addingGarden = false;
  const submit = async (e) => {
    const garden = e.detail;
    $$invalidate(0, addingGarden = true);
    try {
      const newGarden = await addGarden({
        ...garden,
        photo: garden.photo && garden.photo.files ? garden.photo.files[0] : null
      });
      await addGardenLocally(newGarden);
      $$invalidate(0, addingGarden = false);
      let notifyMsg;
      newGarden.photo ? notifyMsg = $_("garden.notify.success") + " " + $_("garden.notify.photo") : notifyMsg = $_("garden.notify.success");
      notify.success(notifyMsg, 1e4);
      $redirect(`${routes.MAP}/garden/${$user.id}`);
    } catch (ex) {
      console.log(ex);
      $$invalidate(0, addingGarden = false);
    }
  };
  const initialGarden = {
    description: "",
    location: null,
    facilities: { capacity: 1 },
    photo: { files: null, data: null }
  };
  return [addingGarden, $_, submit, initialGarden];
}
class Add extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Add as default };
