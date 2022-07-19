import { G as writable, H as get_store_value } from "./index.ae92f232.js";
import { d as db } from "./index.a79b2e56.js";
import { u as user } from "./auth.4dd538c9.js";
const gettingPrivateUserProfile = writable(false);
const updatingMailPreferences = writable(false);
const getPublicUserProfile = async (uid) => {
  const profile = await db.collection("users").doc(uid).get();
  if (!profile.exists)
    throw new Error("This person does not have an account.");
  return profile.data();
};
const getPrivateUserProfile = async () => {
  gettingPrivateUserProfile.set(true);
  const profile = await db.collection("users-private").doc(get_store_value(user).id).get();
  get_store_value(user).setPrivateInformation(profile.data());
  gettingPrivateUserProfile.set(false);
  return profile.data();
};
const setCampsiteInformation = async () => {
  const doc = await db.collection("campsites").doc(get_store_value(user).id).get();
  if (doc.exists)
    get_store_value(user).setGarden(doc.data());
  else
    get_store_value(user).setGarden(null);
};
const setAllUserInfo = async () => {
  await setCampsiteInformation();
  const info = await getPublicUserProfile(get_store_value(user).id);
  get_store_value(user).addFields(info);
  await getPrivateUserProfile();
};
const updateMailPreferences = async (preferenceName, preference) => {
  updatingMailPreferences.set(true);
  await db.collection("users-private").doc(get_store_value(user).id).update({ [`emailPreferences.${preferenceName}`]: preference });
  updatingMailPreferences.set(false);
};
export { updateMailPreferences as a, getPublicUserProfile as g, setAllUserInfo as s, updatingMailPreferences as u };
