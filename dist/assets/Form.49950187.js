import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, b as attr, C as toggle_class, d as insert, o as noop, k as detach, B as createEventDispatcher, a7 as getContext, V as onMount, X as binding_callbacks, t as text, a as space, c as create_component, f as append, m as mount_component, g as set_data, h as transition_in, M as add_render_callback, P as create_bidirectional_transition, j as transition_out, l as destroy_component, p as empty, q as group_outros, r as check_outros, n as component_subscribe, Y, ai as get_spread_update, aj as get_spread_object, a9 as add_flush_callback, Q as set_input_value, D as listen, N as update_keyed_each, O as outro_and_destroy_block, aa as to_number, E as run_all, u as assign, a8 as bind, ak as handle_promise, al as update_await_block_branch, a4 as src_url_equal } from "./index.ae92f232.js";
import { b as slide } from "./index.f441bdbc.js";
import { k as key, m as maplibregl, M as Map$1, a as geocode, r as reverseGeocode, w as waterIcon, t as toiletIcon, b as bonfireIcon, e as electricityIcon, s as showerIcon } from "./mapbox.16628e51.js";
import "./Partner.svelte_svelte_type_style_lang.1b936e10.js";
import { B as Button } from "./Button.d1669e9b.js";
import { T as TextInput } from "./TextInput.80847e0d.js";
import { r as routes } from "./routes.77b585d1.js";
import { u as user } from "./auth.4dd538c9.js";
import { L as LabeledCheckbox } from "./LabeledCheckbox.0b5b74e8.js";
import { t as tentIcon } from "./tent.5b24dad1.js";
import { a as getGardenPhotoBig } from "./garden.8cd2410c.js";
var DraggableMarker_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      attr(div, "class", "marker svelte-1ac2pdy");
      toggle_class(div, "filled", ctx[0]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      ctx[6](div);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        toggle_class(div, "filled", ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[6](null);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { lat } = $$props;
  let { lon } = $$props;
  let { label } = $$props;
  let { filled = false } = $$props;
  const dispatch = createEventDispatcher();
  const { getMap } = getContext(key);
  const map = getMap();
  let markerElement;
  let marker;
  onMount(() => {
    const popup = new maplibregl.Popup({
      offset: 25,
      closeButton: false,
      closeOnClick: false,
      className: "popup"
    }).setText(label);
    $$invalidate(5, marker = new maplibregl.Marker({ draggable: true, element: markerElement }).setLngLat([lon, lat]).setPopup(popup).addTo(map));
    if (!filled)
      markerElement.click();
    const onDragEnd = () => {
      const lngLat = marker.getLngLat();
      dispatch("dragged", {
        latitude: lngLat.lat,
        longitude: lngLat.lng
      });
    };
    marker.on("dragstart", popup.remove);
    marker.on("dragend", onDragEnd);
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      markerElement = $$value;
      $$invalidate(1, markerElement);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("lat" in $$props2)
      $$invalidate(2, lat = $$props2.lat);
    if ("lon" in $$props2)
      $$invalidate(3, lon = $$props2.lon);
    if ("label" in $$props2)
      $$invalidate(4, label = $$props2.label);
    if ("filled" in $$props2)
      $$invalidate(0, filled = $$props2.filled);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 44) {
      if (marker && lat && lon)
        marker.setLngLat([lon, lat]);
    }
  };
  return [filled, markerElement, lat, lon, label, marker, div_binding];
}
class DraggableMarker extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { lat: 2, lon: 3, label: 4, filled: 0 });
  }
}
var CoordinateForm_svelte_svelte_type_style_lang = "";
function create_if_block_1$1(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      type: "button",
      small: true,
      inverse: ctx[2],
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[7]);
  return {
    c() {
      create_component(button.$$.fragment);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 4)
        button_changes.inverse = ctx2[2];
      if (dirty & 4116) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_else_block$1(ctx) {
  let t_value = ctx[4]("garden.form.location.confirm-button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t_value !== (t_value = ctx2[4]("garden.form.location.confirm-button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_2$1(ctx) {
  let t_value = ctx[4]("garden.form.location.adjust-button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t_value !== (t_value = ctx2[4]("garden.form.location.adjust-button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return create_if_block_2$1;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot$1(ctx) {
  let t;
  let draggablemarker;
  let current;
  let if_block = ctx[3] && create_if_block_1$1(ctx);
  draggablemarker = new DraggableMarker({
    props: {
      label: "Drag me to your garden",
      lat: ctx[0].latitude,
      lon: ctx[0].longitude,
      filled: ctx[2]
    }
  });
  draggablemarker.$on("dragged", ctx[6]);
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      create_component(draggablemarker.$$.fragment);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t, anchor);
      mount_component(draggablemarker, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[3]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const draggablemarker_changes = {};
      if (dirty & 1)
        draggablemarker_changes.lat = ctx2[0].latitude;
      if (dirty & 1)
        draggablemarker_changes.lon = ctx2[0].longitude;
      if (dirty & 4)
        draggablemarker_changes.filled = ctx2[2];
      draggablemarker.$set(draggablemarker_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(draggablemarker.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(draggablemarker.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      destroy_component(draggablemarker, detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let div9;
  let div2;
  let div0;
  let label0;
  let t0_value = ctx[4]("garden.form.location.street") + "";
  let t0;
  let t1;
  let textinput0;
  let t2;
  let div1;
  let label1;
  let t3_value = ctx[4]("garden.form.location.house-number") + "";
  let t3;
  let t4;
  let textinput1;
  let t5;
  let div5;
  let div3;
  let label2;
  let t6_value = ctx[4]("garden.form.location.region") + "";
  let t6;
  let t7;
  let textinput2;
  let t8;
  let div4;
  let label3;
  let t9_value = ctx[4]("garden.form.location.postal-code") + "";
  let t9;
  let t10;
  let textinput3;
  let t11;
  let div8;
  let div6;
  let label4;
  let t12_value = ctx[4]("garden.form.location.city") + "";
  let t12;
  let t13;
  let textinput4;
  let t14;
  let div7;
  let label5;
  let t15_value = ctx[4]("garden.form.location.country") + "";
  let t15;
  let t16;
  let textinput5;
  let div9_transition;
  let current;
  textinput0 = new TextInput({
    props: {
      id: "street-name",
      type: "text",
      name: "street",
      value: ctx[1].street
    }
  });
  textinput0.$on("blur", ctx[5]);
  textinput1 = new TextInput({
    props: {
      id: "house-number",
      type: "text",
      name: "house-number"
    }
  });
  textinput1.$on("blur", ctx[5]);
  textinput2 = new TextInput({
    props: {
      id: "region",
      type: "text",
      name: "region",
      value: ctx[1].region
    }
  });
  textinput2.$on("blur", ctx[5]);
  textinput3 = new TextInput({
    props: {
      id: "postal-code",
      type: "text",
      name: "postalCode",
      value: ctx[1].postalCode
    }
  });
  textinput3.$on("blur", ctx[5]);
  textinput4 = new TextInput({
    props: {
      id: "city",
      type: "text",
      name: "city",
      value: ctx[1].city
    }
  });
  textinput4.$on("blur", ctx[5]);
  textinput5 = new TextInput({
    props: {
      id: "country",
      type: "text",
      name: "country",
      value: ctx[1].country
    }
  });
  return {
    c() {
      div9 = element("div");
      div2 = element("div");
      div0 = element("div");
      label0 = element("label");
      t0 = text(t0_value);
      t1 = space();
      create_component(textinput0.$$.fragment);
      t2 = space();
      div1 = element("div");
      label1 = element("label");
      t3 = text(t3_value);
      t4 = space();
      create_component(textinput1.$$.fragment);
      t5 = space();
      div5 = element("div");
      div3 = element("div");
      label2 = element("label");
      t6 = text(t6_value);
      t7 = space();
      create_component(textinput2.$$.fragment);
      t8 = space();
      div4 = element("div");
      label3 = element("label");
      t9 = text(t9_value);
      t10 = space();
      create_component(textinput3.$$.fragment);
      t11 = space();
      div8 = element("div");
      div6 = element("div");
      label4 = element("label");
      t12 = text(t12_value);
      t13 = space();
      create_component(textinput4.$$.fragment);
      t14 = space();
      div7 = element("div");
      label5 = element("label");
      t15 = text(t15_value);
      t16 = space();
      create_component(textinput5.$$.fragment);
      attr(label0, "for", "street-name");
      attr(label0, "class", "svelte-4thvg2");
      attr(div0, "class", "street svelte-4thvg2");
      attr(label1, "for", "house-number");
      attr(label1, "class", "svelte-4thvg2");
      attr(div1, "class", "svelte-4thvg2");
      attr(div2, "class", "address-group svelte-4thvg2");
      attr(label2, "for", "region");
      attr(label2, "class", "svelte-4thvg2");
      attr(div3, "class", "province svelte-4thvg2");
      attr(label3, "for", "postal-code");
      attr(label3, "class", "svelte-4thvg2");
      attr(div4, "class", "svelte-4thvg2");
      attr(div5, "class", "address-group svelte-4thvg2");
      attr(label4, "for", "city");
      attr(label4, "class", "svelte-4thvg2");
      attr(div6, "class", "svelte-4thvg2");
      attr(label5, "for", "country");
      attr(label5, "class", "svelte-4thvg2");
      attr(div7, "class", "svelte-4thvg2");
      attr(div8, "class", "address-group city-country svelte-4thvg2");
      attr(div9, "class", "svelte-4thvg2");
    },
    m(target, anchor) {
      insert(target, div9, anchor);
      append(div9, div2);
      append(div2, div0);
      append(div0, label0);
      append(label0, t0);
      append(div0, t1);
      mount_component(textinput0, div0, null);
      append(div2, t2);
      append(div2, div1);
      append(div1, label1);
      append(label1, t3);
      append(div1, t4);
      mount_component(textinput1, div1, null);
      append(div9, t5);
      append(div9, div5);
      append(div5, div3);
      append(div3, label2);
      append(label2, t6);
      append(div3, t7);
      mount_component(textinput2, div3, null);
      append(div5, t8);
      append(div5, div4);
      append(div4, label3);
      append(label3, t9);
      append(div4, t10);
      mount_component(textinput3, div4, null);
      append(div9, t11);
      append(div9, div8);
      append(div8, div6);
      append(div6, label4);
      append(label4, t12);
      append(div6, t13);
      mount_component(textinput4, div6, null);
      append(div8, t14);
      append(div8, div7);
      append(div7, label5);
      append(label5, t15);
      append(div7, t16);
      mount_component(textinput5, div7, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 16) && t0_value !== (t0_value = ctx2[4]("garden.form.location.street") + ""))
        set_data(t0, t0_value);
      const textinput0_changes = {};
      if (dirty & 2)
        textinput0_changes.value = ctx2[1].street;
      textinput0.$set(textinput0_changes);
      if ((!current || dirty & 16) && t3_value !== (t3_value = ctx2[4]("garden.form.location.house-number") + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & 16) && t6_value !== (t6_value = ctx2[4]("garden.form.location.region") + ""))
        set_data(t6, t6_value);
      const textinput2_changes = {};
      if (dirty & 2)
        textinput2_changes.value = ctx2[1].region;
      textinput2.$set(textinput2_changes);
      if ((!current || dirty & 16) && t9_value !== (t9_value = ctx2[4]("garden.form.location.postal-code") + ""))
        set_data(t9, t9_value);
      const textinput3_changes = {};
      if (dirty & 2)
        textinput3_changes.value = ctx2[1].postalCode;
      textinput3.$set(textinput3_changes);
      if ((!current || dirty & 16) && t12_value !== (t12_value = ctx2[4]("garden.form.location.city") + ""))
        set_data(t12, t12_value);
      const textinput4_changes = {};
      if (dirty & 2)
        textinput4_changes.value = ctx2[1].city;
      textinput4.$set(textinput4_changes);
      if ((!current || dirty & 16) && t15_value !== (t15_value = ctx2[4]("garden.form.location.country") + ""))
        set_data(t15, t15_value);
      const textinput5_changes = {};
      if (dirty & 2)
        textinput5_changes.value = ctx2[1].country;
      textinput5.$set(textinput5_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(textinput0.$$.fragment, local);
      transition_in(textinput1.$$.fragment, local);
      transition_in(textinput2.$$.fragment, local);
      transition_in(textinput3.$$.fragment, local);
      transition_in(textinput4.$$.fragment, local);
      transition_in(textinput5.$$.fragment, local);
      add_render_callback(() => {
        if (!div9_transition)
          div9_transition = create_bidirectional_transition(div9, slide, {}, true);
        div9_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(textinput0.$$.fragment, local);
      transition_out(textinput1.$$.fragment, local);
      transition_out(textinput2.$$.fragment, local);
      transition_out(textinput3.$$.fragment, local);
      transition_out(textinput4.$$.fragment, local);
      transition_out(textinput5.$$.fragment, local);
      if (!div9_transition)
        div9_transition = create_bidirectional_transition(div9, slide, {}, false);
      div9_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div9);
      destroy_component(textinput0);
      destroy_component(textinput1);
      destroy_component(textinput2);
      destroy_component(textinput3);
      destroy_component(textinput4);
      destroy_component(textinput5);
      if (detaching && div9_transition)
        div9_transition.end();
    }
  };
}
function create_fragment$1(ctx) {
  let div;
  let map;
  let t;
  let if_block_anchor;
  let current;
  map = new Map$1({
    props: {
      lat: ctx[0].latitude,
      lon: ctx[0].longitude,
      recenterOnUpdate: true,
      zoom: "6",
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  let if_block = !ctx[2] && create_if_block$1(ctx);
  return {
    c() {
      div = element("div");
      create_component(map.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(div, "class", "map-container svelte-4thvg2");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(map, div, null);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const map_changes = {};
      if (dirty & 1)
        map_changes.lat = ctx2[0].latitude;
      if (dirty & 1)
        map_changes.lon = ctx2[0].longitude;
      if (dirty & 4125) {
        map_changes.$$scope = { dirty, ctx: ctx2 };
      }
      map.$set(map_changes);
      if (!ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(map.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(map.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(map);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $_;
  component_subscribe($$self, Y, ($$value) => $$invalidate(4, $_ = $$value));
  let { initialCoordinates = null } = $$props;
  const dispatch = createEventDispatcher();
  const defaultAddressValues = {
    street: "",
    postalCode: "",
    region: "",
    country: "",
    city: ""
  };
  let coordinates = initialCoordinates || { latitude: 50.5, longitude: 4.5 };
  let address = {};
  let reverseGeocoded = false;
  let locationConfirmed = !!initialCoordinates;
  let isAddressConfirmShown = !!initialCoordinates;
  const setAddressField = async (event) => {
    if (reverseGeocoded) {
      $$invalidate(1, address = { ...defaultAddressValues });
      reverseGeocoded = false;
    }
    $$invalidate(1, address[event.target.name] = event.target.value, address);
    const addressString = Object.keys(address).map((key2) => address[key2]).filter((v) => v).join(" ");
    try {
      $$invalidate(0, coordinates = await geocode(addressString));
      $$invalidate(3, isAddressConfirmShown = true);
    } catch (ex) {
      console.log(ex);
    }
    dispatch("confirm", locationConfirmed ? coordinates : null);
  };
  const onMarkerDragged = async (event) => {
    $$invalidate(0, coordinates = event.detail);
    $$invalidate(3, isAddressConfirmShown = true);
    $$invalidate(2, locationConfirmed = false);
    try {
      $$invalidate(1, address = {
        ...defaultAddressValues,
        ...await reverseGeocode(coordinates)
      });
      reverseGeocoded = true;
    } catch (ex) {
      console.log(ex);
    }
  };
  const toggleLocationConfirmed = () => {
    $$invalidate(2, locationConfirmed = !locationConfirmed);
    dispatch("confirm", locationConfirmed ? coordinates : null);
  };
  $$self.$$set = ($$props2) => {
    if ("initialCoordinates" in $$props2)
      $$invalidate(8, initialCoordinates = $$props2.initialCoordinates);
  };
  return [
    coordinates,
    address,
    locationConfirmed,
    isAddressConfirmShown,
    $_,
    setAddressField,
    onMarkerDragged,
    toggleLocationConfirmed,
    initialCoordinates
  ];
}
class CoordinateForm extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { initialCoordinates: 8 });
  }
}
var Form_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[25] = list[i];
  child_ctx[26] = list;
  child_ctx[27] = i;
  return child_ctx;
}
function create_else_block_1(ctx) {
  let p;
  let raw_value = ctx[3]("garden.form.normal-notice", {
    values: {
      accountLink: `<a class='link' href=${routes.ACCOUNT}>${ctx[3]("garden.form.account-link-text")}</a>`
    }
  }) + "";
  return {
    c() {
      p = element("p");
      attr(p, "class", "svelte-1glw4jv");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 8 && raw_value !== (raw_value = ctx2[3]("garden.form.normal-notice", {
        values: {
          accountLink: `<a class='link' href=${routes.ACCOUNT}>${ctx2[3]("garden.form.account-link-text")}</a>`
        }
      }) + ""))
        p.innerHTML = raw_value;
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_5(ctx) {
  let p;
  let raw_value = ctx[3]("garden.form.email-confirm-notice", {
    values: {
      accountLink: `<a class='link' href=${routes.ACCOUNT}>${ctx[3]("garden.form.account-link-text")}</a>`
    }
  }) + "";
  return {
    c() {
      p = element("p");
      attr(p, "class", "notice svelte-1glw4jv");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 8 && raw_value !== (raw_value = ctx2[3]("garden.form.email-confirm-notice", {
        values: {
          accountLink: `<a class='link' href=${routes.ACCOUNT}>${ctx2[3]("garden.form.account-link-text")}</a>`
        }
      }) + ""))
        p.innerHTML = raw_value;
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_4(ctx) {
  let p;
  let raw_value = ctx[3]("garden.form.auth-notice", {
    values: {
      signInLink: `<a class='link' href=${routes.SIGN_IN}>${ctx[3]("garden.form.sign-in-link-text")}</a>`,
      registerLink: `<a class='link' href=${routes.REGISTER}>${ctx[3]("garden.form.register-link-text")}</a>`
    }
  }) + "";
  return {
    c() {
      p = element("p");
      attr(p, "class", "notice svelte-1glw4jv");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 8 && raw_value !== (raw_value = ctx2[3]("garden.form.auth-notice", {
        values: {
          signInLink: `<a class='link' href=${routes.SIGN_IN}>${ctx2[3]("garden.form.sign-in-link-text")}</a>`,
          registerLink: `<a class='link' href=${routes.REGISTER}>${ctx2[3]("garden.form.register-link-text")}</a>`
        }
      }) + ""))
        p.innerHTML = raw_value;
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_each_block(key_1, ctx) {
  let first;
  let labeledcheckbox;
  let updating_checked;
  let current;
  const labeledcheckbox_spread_levels = [ctx[25]];
  function labeledcheckbox_checked_binding(value) {
    ctx[18](value, ctx[25]);
  }
  let labeledcheckbox_props = {};
  for (let i = 0; i < labeledcheckbox_spread_levels.length; i += 1) {
    labeledcheckbox_props = assign(labeledcheckbox_props, labeledcheckbox_spread_levels[i]);
  }
  if (ctx[0].facilities[ctx[25].name] !== void 0) {
    labeledcheckbox_props.checked = ctx[0].facilities[ctx[25].name];
  }
  labeledcheckbox = new LabeledCheckbox({ props: labeledcheckbox_props });
  binding_callbacks.push(() => bind(labeledcheckbox, "checked", labeledcheckbox_checked_binding));
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(labeledcheckbox.$$.fragment);
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      mount_component(labeledcheckbox, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const labeledcheckbox_changes = dirty & 256 ? get_spread_update(labeledcheckbox_spread_levels, [get_spread_object(ctx[25])]) : {};
      if (!updating_checked && dirty & 257) {
        updating_checked = true;
        labeledcheckbox_changes.checked = ctx[0].facilities[ctx[25].name];
        add_flush_callback(() => updating_checked = false);
      }
      labeledcheckbox.$set(labeledcheckbox_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(labeledcheckbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(labeledcheckbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(labeledcheckbox, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 10,
    blocks: [, , ,]
  };
  handle_promise(ctx[16](), info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_if_block_2(ctx) {
  let div;
  let img;
  let img_src_value;
  let img_alt_value;
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      img = element("img");
      if (!src_url_equal(img.src, img_src_value = ctx[0].photo.data))
        attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = ctx[3]("garden.form.photo.img-alt"));
      attr(img, "class", "svelte-1glw4jv");
      attr(div, "class", "photo svelte-1glw4jv");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, img);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 1 && !src_url_equal(img.src, img_src_value = ctx2[0].photo.data)) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & 8 && img_alt_value !== (img_alt_value = ctx2[3]("garden.form.photo.img-alt"))) {
        attr(img, "alt", img_alt_value);
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_catch_block(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block(ctx) {
  let div;
  let img;
  let img_src_value;
  let img_alt_value;
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      img = element("img");
      if (!src_url_equal(img.src, img_src_value = ctx[10]))
        attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = ctx[3]("garden.form.photo.img-alt"));
      attr(img, "class", "svelte-1glw4jv");
      attr(div, "class", "photo svelte-1glw4jv");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, img);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 8 && img_alt_value !== (img_alt_value = ctx2[3]("garden.form.photo.img-alt"))) {
        attr(img, "alt", img_alt_value);
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_pending_block(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_else_block(ctx) {
  let t_value = ctx[3]("garden.form.add-button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("garden.form.add-button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_1(ctx) {
  let t_value = ctx[3]("garden.form.update-button") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3]("garden.form.update-button") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let if_block_anchor;
  function select_block_type_2(ctx2, dirty) {
    if (ctx2[2])
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type_2(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_2(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block(ctx) {
  let p;
  let t_value = ctx[3]("garden.form.invalid") + "";
  let t;
  let p_transition;
  let current;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      attr(p, "class", "hint invalid svelte-1glw4jv");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 8) && t_value !== (t_value = ctx2[3]("garden.form.invalid") + ""))
        set_data(t, t_value);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!p_transition)
          p_transition = create_bidirectional_transition(p, slide, {}, true);
        p_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!p_transition)
        p_transition = create_bidirectional_transition(p, slide, {}, false);
      p_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching && p_transition)
        p_transition.end();
    }
  };
}
function create_fragment(ctx) {
  let form;
  let section0;
  let div1;
  let h2;
  let t0_value = ctx[3]("garden.form.title") + "";
  let t0;
  let t1;
  let div0;
  let t2;
  let section1;
  let fieldset0;
  let h30;
  let t3_value = ctx[3]("garden.form.location.title") + "";
  let t3;
  let t4;
  let p0;
  let raw0_value = ctx[3]("garden.form.location.notice") + "";
  let t5;
  let coordinateform;
  let t6;
  let p1;
  let t7_value = ctx[6].message + "";
  let t7;
  let t8;
  let section2;
  let fieldset1;
  let h31;
  let t9_value = ctx[3]("garden.form.description.title") + "";
  let t9;
  let t10;
  let p2;
  let raw1_value = ctx[3]("garden.form.description.notice") + "";
  let t11;
  let div2;
  let textarea;
  let textarea_placeholder_value;
  let textarea_aria_label_value;
  let textarea_value_value;
  let t12;
  let p3;
  let t13_value = ctx[5].message + "";
  let t13;
  let t14;
  let section3;
  let fieldset2;
  let h32;
  let t15_value = ctx[3]("garden.form.facilities.title") + "";
  let t15;
  let t16;
  let p4;
  let t17_value = ctx[3]("garden.form.facilities.notice") + "";
  let t17;
  let t18;
  let div3;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t19;
  let div4;
  let label;
  let t20_value = ctx[3]("garden.form.facilities.capacity.label") + "";
  let t20;
  let t21;
  let p5;
  let t22_value = ctx[3]("garden.form.facilities.capacity.help") + "";
  let t22;
  let t23;
  let input0;
  let t24;
  let section4;
  let fieldset3;
  let h33;
  let t25_value = ctx[3]("garden.form.photo.title") + "";
  let t25;
  let t26;
  let p6;
  let raw2_value = ctx[3]("garden.form.photo.notice") + "";
  let t27;
  let input1;
  let t28;
  let current_block_type_index;
  let if_block1;
  let t29;
  let p7;
  let t30_value = ctx[7].message + "";
  let t30;
  let t31;
  let section5;
  let div5;
  let button;
  let t32;
  let current;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (!ctx2[9])
      return create_if_block_4;
    if (!ctx2[9].emailVerified)
      return create_if_block_5;
    return create_else_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  coordinateform = new CoordinateForm({
    props: {
      initialCoordinates: ctx[0].location
    }
  });
  coordinateform.$on("confirm", ctx[13]);
  let each_value = ctx[8];
  const get_key = (ctx2) => ctx2[25].name;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key2 = get_key(child_ctx);
    each_1_lookup.set(key2, each_blocks[i] = create_each_block(key2, child_ctx));
  }
  const if_block_creators = [create_if_block_2, create_if_block_3];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[0].photo && ctx2[0].photo.data)
      return 0;
    if (ctx2[10] && typeof ctx2[10] == "string")
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type_1(ctx))) {
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  button = new Button({
    props: {
      type: "button",
      disabled: ctx[1],
      uppercase: true,
      medium: true,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[17]);
  let if_block2 = !ctx[4] && create_if_block(ctx);
  return {
    c() {
      form = element("form");
      section0 = element("section");
      div1 = element("div");
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      div0 = element("div");
      if_block0.c();
      t2 = space();
      section1 = element("section");
      fieldset0 = element("fieldset");
      h30 = element("h3");
      t3 = text(t3_value);
      t4 = space();
      p0 = element("p");
      t5 = space();
      create_component(coordinateform.$$.fragment);
      t6 = space();
      p1 = element("p");
      t7 = text(t7_value);
      t8 = space();
      section2 = element("section");
      fieldset1 = element("fieldset");
      h31 = element("h3");
      t9 = text(t9_value);
      t10 = space();
      p2 = element("p");
      t11 = space();
      div2 = element("div");
      textarea = element("textarea");
      t12 = space();
      p3 = element("p");
      t13 = text(t13_value);
      t14 = space();
      section3 = element("section");
      fieldset2 = element("fieldset");
      h32 = element("h3");
      t15 = text(t15_value);
      t16 = space();
      p4 = element("p");
      t17 = text(t17_value);
      t18 = space();
      div3 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t19 = space();
      div4 = element("div");
      label = element("label");
      t20 = text(t20_value);
      t21 = space();
      p5 = element("p");
      t22 = text(t22_value);
      t23 = space();
      input0 = element("input");
      t24 = space();
      section4 = element("section");
      fieldset3 = element("fieldset");
      h33 = element("h3");
      t25 = text(t25_value);
      t26 = space();
      p6 = element("p");
      t27 = space();
      input1 = element("input");
      t28 = space();
      if (if_block1)
        if_block1.c();
      t29 = space();
      p7 = element("p");
      t30 = text(t30_value);
      t31 = space();
      section5 = element("section");
      div5 = element("div");
      create_component(button.$$.fragment);
      t32 = space();
      if (if_block2)
        if_block2.c();
      attr(h2, "class", "svelte-1glw4jv");
      attr(div0, "class", "section-description svelte-1glw4jv");
      attr(div1, "class", "sub-container svelte-1glw4jv");
      attr(section0, "class", "svelte-1glw4jv");
      attr(h30, "class", "svelte-1glw4jv");
      attr(p0, "class", "section-description svelte-1glw4jv");
      attr(p1, "class", "hint svelte-1glw4jv");
      toggle_class(p1, "invalid", !ctx[6].valid);
      attr(fieldset0, "class", "svelte-1glw4jv");
      attr(section1, "class", "svelte-1glw4jv");
      toggle_class(section1, "is-not-fillable", !ctx[11]);
      attr(h31, "class", "svelte-1glw4jv");
      attr(p2, "class", "section-description svelte-1glw4jv");
      attr(textarea, "placeholder", textarea_placeholder_value = ctx[3]("garden.form.description.placeholder"));
      attr(textarea, "aria-label", textarea_aria_label_value = ctx[3]("garden.form.description.label"));
      attr(textarea, "id", "description");
      attr(textarea, "name", "description");
      textarea.value = textarea_value_value = ctx[0].description;
      attr(textarea, "class", "svelte-1glw4jv");
      attr(p3, "class", "hint svelte-1glw4jv");
      toggle_class(p3, "invalid", !ctx[5].valid);
      attr(div2, "class", "svelte-1glw4jv");
      attr(fieldset1, "class", "svelte-1glw4jv");
      attr(section2, "class", "svelte-1glw4jv");
      toggle_class(section2, "is-not-fillable", !ctx[11]);
      attr(h32, "class", "svelte-1glw4jv");
      attr(p4, "class", "section-description svelte-1glw4jv");
      attr(div3, "class", "checkboxes svelte-1glw4jv");
      attr(label, "for", "capacity");
      attr(label, "class", "svelte-1glw4jv");
      attr(p5, "class", "svelte-1glw4jv");
      attr(input0, "type", "number");
      attr(input0, "name", "capacity");
      attr(input0, "min", "1");
      attr(input0, "id", "capacity");
      attr(input0, "max", "20");
      input0.required = true;
      attr(input0, "class", "svelte-1glw4jv");
      attr(div4, "class", "capacity svelte-1glw4jv");
      attr(fieldset2, "class", "svelte-1glw4jv");
      attr(section3, "class", "svelte-1glw4jv");
      toggle_class(section3, "is-not-fillable", !ctx[11]);
      attr(h33, "class", "svelte-1glw4jv");
      attr(p6, "class", "section-description svelte-1glw4jv");
      attr(input1, "type", "file");
      attr(input1, "id", "photo");
      attr(input1, "name", "photo");
      input1.multiple = false;
      attr(input1, "accept", ctx[14].join(","));
      attr(input1, "class", "svelte-1glw4jv");
      attr(p7, "class", "hint svelte-1glw4jv");
      toggle_class(p7, "invalid", !ctx[7].valid);
      attr(fieldset3, "class", "svelte-1glw4jv");
      attr(section4, "class", "svelte-1glw4jv");
      toggle_class(section4, "is-not-fillable", !ctx[11]);
      attr(div5, "class", "sub-container svelte-1glw4jv");
      attr(section5, "class", "section-submit svelte-1glw4jv");
      toggle_class(section5, "is-not-fillable", !ctx[11]);
      attr(form, "class", "svelte-1glw4jv");
    },
    m(target, anchor) {
      insert(target, form, anchor);
      append(form, section0);
      append(section0, div1);
      append(div1, h2);
      append(h2, t0);
      append(div1, t1);
      append(div1, div0);
      if_block0.m(div0, null);
      append(form, t2);
      append(form, section1);
      append(section1, fieldset0);
      append(fieldset0, h30);
      append(h30, t3);
      append(fieldset0, t4);
      append(fieldset0, p0);
      p0.innerHTML = raw0_value;
      append(fieldset0, t5);
      mount_component(coordinateform, fieldset0, null);
      append(fieldset0, t6);
      append(fieldset0, p1);
      append(p1, t7);
      append(form, t8);
      append(form, section2);
      append(section2, fieldset1);
      append(fieldset1, h31);
      append(h31, t9);
      append(fieldset1, t10);
      append(fieldset1, p2);
      p2.innerHTML = raw1_value;
      append(fieldset1, t11);
      append(fieldset1, div2);
      append(div2, textarea);
      append(div2, t12);
      append(div2, p3);
      append(p3, t13);
      append(form, t14);
      append(form, section3);
      append(section3, fieldset2);
      append(fieldset2, h32);
      append(h32, t15);
      append(fieldset2, t16);
      append(fieldset2, p4);
      append(p4, t17);
      append(fieldset2, t18);
      append(fieldset2, div3);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div3, null);
      }
      append(fieldset2, t19);
      append(fieldset2, div4);
      append(div4, label);
      append(label, t20);
      append(div4, t21);
      append(div4, p5);
      append(p5, t22);
      append(div4, t23);
      append(div4, input0);
      set_input_value(input0, ctx[0].facilities.capacity);
      append(form, t24);
      append(form, section4);
      append(section4, fieldset3);
      append(fieldset3, h33);
      append(h33, t25);
      append(fieldset3, t26);
      append(fieldset3, p6);
      p6.innerHTML = raw2_value;
      append(fieldset3, t27);
      append(fieldset3, input1);
      append(fieldset3, t28);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(fieldset3, null);
      }
      append(fieldset3, t29);
      append(fieldset3, p7);
      append(p7, t30);
      append(form, t31);
      append(form, section5);
      append(section5, div5);
      mount_component(button, div5, null);
      append(div5, t32);
      if (if_block2)
        if_block2.m(div5, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(textarea, "input", ctx[12]),
          listen(textarea, "keypress", keypress_handler),
          listen(input0, "input", ctx[19]),
          listen(input1, "change", ctx[20]),
          listen(input1, "change", ctx[15])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 8) && t0_value !== (t0_value = ctx2[3]("garden.form.title") + ""))
        set_data(t0, t0_value);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div0, null);
        }
      }
      if ((!current || dirty & 8) && t3_value !== (t3_value = ctx2[3]("garden.form.location.title") + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & 8) && raw0_value !== (raw0_value = ctx2[3]("garden.form.location.notice") + ""))
        p0.innerHTML = raw0_value;
      const coordinateform_changes = {};
      if (dirty & 1)
        coordinateform_changes.initialCoordinates = ctx2[0].location;
      coordinateform.$set(coordinateform_changes);
      if ((!current || dirty & 64) && t7_value !== (t7_value = ctx2[6].message + ""))
        set_data(t7, t7_value);
      if (dirty & 64) {
        toggle_class(p1, "invalid", !ctx2[6].valid);
      }
      if ((!current || dirty & 8) && t9_value !== (t9_value = ctx2[3]("garden.form.description.title") + ""))
        set_data(t9, t9_value);
      if ((!current || dirty & 8) && raw1_value !== (raw1_value = ctx2[3]("garden.form.description.notice") + ""))
        p2.innerHTML = raw1_value;
      if (!current || dirty & 8 && textarea_placeholder_value !== (textarea_placeholder_value = ctx2[3]("garden.form.description.placeholder"))) {
        attr(textarea, "placeholder", textarea_placeholder_value);
      }
      if (!current || dirty & 8 && textarea_aria_label_value !== (textarea_aria_label_value = ctx2[3]("garden.form.description.label"))) {
        attr(textarea, "aria-label", textarea_aria_label_value);
      }
      if (!current || dirty & 1 && textarea_value_value !== (textarea_value_value = ctx2[0].description)) {
        textarea.value = textarea_value_value;
      }
      if ((!current || dirty & 32) && t13_value !== (t13_value = ctx2[5].message + ""))
        set_data(t13, t13_value);
      if (dirty & 32) {
        toggle_class(p3, "invalid", !ctx2[5].valid);
      }
      if ((!current || dirty & 8) && t15_value !== (t15_value = ctx2[3]("garden.form.facilities.title") + ""))
        set_data(t15, t15_value);
      if ((!current || dirty & 8) && t17_value !== (t17_value = ctx2[3]("garden.form.facilities.notice") + ""))
        set_data(t17, t17_value);
      if (dirty & 257) {
        each_value = ctx2[8];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div3, outro_and_destroy_block, create_each_block, null, get_each_context);
        check_outros();
      }
      if ((!current || dirty & 8) && t20_value !== (t20_value = ctx2[3]("garden.form.facilities.capacity.label") + ""))
        set_data(t20, t20_value);
      if ((!current || dirty & 8) && t22_value !== (t22_value = ctx2[3]("garden.form.facilities.capacity.help") + ""))
        set_data(t22, t22_value);
      if (dirty & 1 && to_number(input0.value) !== ctx2[0].facilities.capacity) {
        set_input_value(input0, ctx2[0].facilities.capacity);
      }
      if ((!current || dirty & 8) && t25_value !== (t25_value = ctx2[3]("garden.form.photo.title") + ""))
        set_data(t25, t25_value);
      if ((!current || dirty & 8) && raw2_value !== (raw2_value = ctx2[3]("garden.form.photo.notice") + ""))
        p6.innerHTML = raw2_value;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block1) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block1 = if_blocks[current_block_type_index];
          if (!if_block1) {
            if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block1.c();
          } else {
            if_block1.p(ctx2, dirty);
          }
          transition_in(if_block1, 1);
          if_block1.m(fieldset3, t29);
        } else {
          if_block1 = null;
        }
      }
      if ((!current || dirty & 128) && t30_value !== (t30_value = ctx2[7].message + ""))
        set_data(t30, t30_value);
      if (dirty & 128) {
        toggle_class(p7, "invalid", !ctx2[7].valid);
      }
      const button_changes = {};
      if (dirty & 2)
        button_changes.disabled = ctx2[1];
      if (dirty & 268435468) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (!ctx2[4]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div5, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(coordinateform.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(if_block1);
      transition_in(button.$$.fragment, local);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(coordinateform.$$.fragment, local);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(if_block1);
      transition_out(button.$$.fragment, local);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(form);
      if_block0.d();
      destroy_component(coordinateform);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      destroy_component(button);
      if (if_block2)
        if_block2.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
const keypress_handler = (e) => {
  if ((e.keyCode || e.which) == 13) {
    e.preventDefault();
  }
};
function instance($$self, $$props, $$invalidate) {
  let facilities;
  let $_;
  let $user;
  component_subscribe($$self, Y, ($$value) => $$invalidate(3, $_ = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(9, $user = $$value));
  let { garden } = $$props;
  let { isSubmitting = false } = $$props;
  let { isUpdate = false } = $$props;
  const dispatch = createEventDispatcher();
  let isFillable = $user && $user.emailVerified;
  let formValid = true;
  let descriptionHint = { message: "", valid: true };
  const validateDescription = (description) => {
    const len = description.length;
    if (len < 20) {
      $$invalidate(5, descriptionHint.valid = false, descriptionHint);
      $$invalidate(5, descriptionHint.message = $_("garden.form.description.hints.too-short", { values: { remaining: 20 - len } }), descriptionHint);
      return false;
    }
    if (len > 300) {
      $$invalidate(5, descriptionHint.valid = false, descriptionHint);
      $$invalidate(5, descriptionHint.message = $_("garden.form.description.hints.too-long", { values: { surplus: len - 300 } }), descriptionHint);
      return false;
    }
    $$invalidate(5, descriptionHint.valid = true, descriptionHint);
    $$invalidate(5, descriptionHint.message = "", descriptionHint);
    return true;
  };
  const updateDescription = (event) => {
    const description = event.target.value;
    validateDescription(description);
    $$invalidate(0, garden.description = description, garden);
  };
  let coordinateHint = { message: "", valid: true };
  const validateLocation = (location) => {
    if (!location) {
      $$invalidate(6, coordinateHint.message = $_("garden.form.location.coordinate-hint"), coordinateHint);
      $$invalidate(6, coordinateHint.valid = false, coordinateHint);
      return false;
    }
    $$invalidate(6, coordinateHint.message = "", coordinateHint);
    $$invalidate(6, coordinateHint.valid = true, coordinateHint);
    return true;
  };
  const setCoordinates = (event) => {
    validateLocation(event.detail);
    $$invalidate(0, garden.location = event.detail, garden);
  };
  const validFileTypes = ["image/jpeg", "image/png", "image/tiff"];
  let photoHint = { message: "", valid: true };
  const validatePhoto = (file) => {
    if (!validFileTypes.includes(file.type)) {
      $$invalidate(7, photoHint.message = $_("garden.form.photo.hints.wrong-format"), photoHint);
      $$invalidate(7, photoHint.valid = false, photoHint);
      return false;
    }
    if (file.size / 1024 / 1024 > 5) {
      $$invalidate(7, photoHint.message = $_("garden.form.photo.hints.too-large"), photoHint);
      $$invalidate(7, photoHint.valid = false, photoHint);
      return false;
    }
    $$invalidate(7, photoHint.message = "", photoHint);
    $$invalidate(7, photoHint.valid = true, photoHint);
    return true;
  };
  let existingPhoto = garden.photo;
  garden.photo = {};
  const choosePhoto = () => {
    if (!garden.photo.files)
      return;
    $$invalidate(10, existingPhoto = null);
    const file = garden.photo.files[0];
    if (!validatePhoto(file))
      return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      $$invalidate(0, garden.photo.data = e.target.result, garden);
    };
  };
  const getExistingPhoto = () => {
    const id = garden && garden.previousPhotoId ? garden.previousPhotoId : $user.id;
    console.log(id);
    return getGardenPhotoBig({ photo: existingPhoto, id });
  };
  const handleSubmit = async () => {
    if (!isFillable)
      return;
    if ([validateDescription(garden.description), validateLocation(garden.location)].includes(false)) {
      $$invalidate(4, formValid = false);
      return;
    }
    if (garden.photo && garden.photo.files && !validatePhoto(garden.photo.files[0])) {
      $$invalidate(4, formValid = false);
      return;
    }
    $$invalidate(4, formValid = true);
    dispatch("submit", garden);
  };
  function labeledcheckbox_checked_binding(value, facility) {
    if ($$self.$$.not_equal(garden.facilities[facility.name], value)) {
      garden.facilities[facility.name] = value;
      $$invalidate(0, garden);
    }
  }
  function input0_input_handler() {
    garden.facilities.capacity = to_number(this.value);
    $$invalidate(0, garden);
  }
  function input1_change_handler() {
    garden.photo.files = this.files;
    $$invalidate(0, garden);
  }
  $$self.$$set = ($$props2) => {
    if ("garden" in $$props2)
      $$invalidate(0, garden = $$props2.garden);
    if ("isSubmitting" in $$props2)
      $$invalidate(1, isSubmitting = $$props2.isSubmitting);
    if ("isUpdate" in $$props2)
      $$invalidate(2, isUpdate = $$props2.isUpdate);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 8) {
      $$invalidate(8, facilities = [
        {
          name: "water",
          icon: waterIcon,
          label: $_("garden.facilities.labels.water")
        },
        {
          name: "drinkableWater",
          icon: waterIcon,
          label: $_("garden.facilities.labels.drinkable-water")
        },
        {
          name: "toilet",
          icon: toiletIcon,
          label: $_("garden.facilities.labels.toilet")
        },
        {
          name: "bonfire",
          icon: bonfireIcon,
          label: $_("garden.facilities.labels.bonfire")
        },
        {
          name: "electricity",
          icon: electricityIcon,
          label: $_("garden.facilities.labels.electricity")
        },
        {
          name: "shower",
          icon: showerIcon,
          label: $_("garden.facilities.labels.shower")
        },
        {
          name: "tent",
          icon: tentIcon,
          label: $_("garden.facilities.labels.tent")
        }
      ]);
    }
  };
  return [
    garden,
    isSubmitting,
    isUpdate,
    $_,
    formValid,
    descriptionHint,
    coordinateHint,
    photoHint,
    facilities,
    $user,
    existingPhoto,
    isFillable,
    updateDescription,
    setCoordinates,
    validFileTypes,
    choosePhoto,
    getExistingPhoto,
    handleSubmit,
    labeledcheckbox_checked_binding,
    input0_input_handler,
    input1_change_handler
  ];
}
class Form extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { garden: 0, isSubmitting: 1, isUpdate: 2 });
  }
}
export { Form as F };
