import { G as writable, H as get_store_value } from "./index.ae92f232.js";
import { u as user } from "./auth.4dd538c9.js";
import { d as db, s as storage } from "./index.a79b2e56.js";
const isUploading = writable(false);
const uploadProgress = writable(0);
const isFetchingGardens = writable(true);
const allGardens = writable({});
const addToAllGardens = async (garden) => {
  if (Object.keys(get_store_value(allGardens)).length === 0) {
    isFetchingGardens.set(true);
    try {
      await getAllListedGardens();
    } catch (ex) {
      console.log(ex);
      isFetchingGardens.set(false);
    }
    isFetchingGardens.set(false);
  } else {
    allGardens.update((gardens) => ({ ...gardens, [garden.id]: garden }));
  }
};
const addGardenLocally = (garden) => addToAllGardens(garden);
const updateGardenLocally = (garden) => addToAllGardens(garden);
const getAllListedGardens = async () => {
  isFetchingGardens.set(true);
  const snapshot = await db.collection("campsites").where("listed", "==", true).get();
  const gardens = {};
  snapshot.forEach((doc) => {
    gardens[doc.id] = { id: doc.id, ...doc.data() };
  });
  allGardens.set(gardens);
  isFetchingGardens.set(false);
  return gardens;
};
const doUploadGardenPhoto = async (photo, currentUser) => {
  const extension = photo.name.split(".").pop();
  const photoLocation = `gardens/${currentUser.id}/garden.${extension}`;
  isUploading.set(true);
  const uploadTask = storage.child(photoLocation).put(photo, { contentType: photo.type });
  uploadTask.on("state_changed", (snapshot) => {
    const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
    uploadProgress.set(progress);
  });
  await uploadTask;
  isUploading.set(false);
  return `garden.${extension}`;
};
const addGarden = async ({ photo, ...rest }) => {
  const currentUser = get_store_value(user);
  let uploadedName = null;
  if (photo)
    uploadedName = await doUploadGardenPhoto(photo, currentUser);
  const facilities = Object.keys(rest.facilities).reduce((all, facility) => {
    all[facility] = rest.facilities[facility] || false;
    return all;
  }, {});
  const garden = {
    ...rest,
    facilities,
    listed: true,
    photo: uploadedName
  };
  await db.collection("campsites").doc(currentUser.id).set(garden);
  const gardenWithId = { ...garden, id: currentUser.id };
  get_store_value(user).setGarden(gardenWithId);
  return gardenWithId;
};
const updateGarden = async ({ photo, ...rest }) => {
  const currentUser = get_store_value(user);
  let uploadedName = null;
  if (photo)
    uploadedName = await doUploadGardenPhoto(photo, currentUser);
  const facilities = Object.keys(rest.facilities).reduce((all, facility) => {
    all[facility] = rest.facilities[facility] || false;
    return all;
  }, {});
  const garden = {
    ...rest,
    facilities,
    previousPhotoId: null
  };
  if (uploadedName || rest.photo)
    garden.photo = uploadedName || rest.photo;
  await db.collection("campsites").doc(currentUser.id).update(garden);
  const gardenWithId = { ...garden, id: currentUser.id };
  get_store_value(user).setGarden(gardenWithId);
  return gardenWithId;
};
const changeListedStatus = async (shouldBeListed) => {
  const currentUser = get_store_value(user);
  await db.collection("campsites").doc(currentUser.id).update({
    listed: shouldBeListed
  });
};
const getPhotoBySize = (size, garden) => {
  return storage.child(`gardens/${garden.id}/garden_${size}.${garden.photo.split(".").pop()}`).getDownloadURL();
};
const getGardenPhotoSmall = async (garden) => {
  return getPhotoBySize("360x360", garden);
};
const getGardenPhotoBig = async (garden) => {
  return getPhotoBySize("1920x1080", garden);
};
const hasGarden = async (userId) => {
  let snapshot;
  const doc = db.collection("campsites").doc(userId);
  try {
    snapshot = await doc.get({ source: "cache" });
  } catch (error) {
    snapshot = await doc.get({ source: "server" });
  }
  return snapshot ? snapshot.exists && snapshot.data().listed : false;
};
export { getGardenPhotoBig as a, allGardens as b, changeListedStatus as c, getAllListedGardens as d, addGarden as e, addGardenLocally as f, getGardenPhotoSmall as g, hasGarden as h, isFetchingGardens as i, updateGardenLocally as j, updateGarden as u };
