import { G as writable, H as get_store_value } from "./index.ae92f232.js";
import { d as db, T as Timestamp } from "./index.a79b2e56.js";
import { g as getPublicUserProfile } from "./user.1f47be60.js";
import { u as user } from "./auth.4dd538c9.js";
const hasInitialized = writable(false);
const creatingNewChat = writable(false);
const chats = writable({});
const addChat = (chat) => {
  chats.update((old) => ({
    ...old,
    [chat.id]: chat
  }));
};
const sortBySentDate = (m1, m2) => m2.createdAt - m1.createdAt;
const messages = writable({});
const addMessage = (chatId, message) => {
  const chat = get_store_value(chats)[chatId];
  if (!chat)
    return;
  messages.update((old) => {
    const newMessages = { ...old };
    if (!old[chatId])
      newMessages[chatId] = [message];
    else {
      newMessages[chatId] = [...newMessages[chatId], message].sort(sortBySentDate);
    }
    return newMessages;
  });
};
const getChatForUser = (uid) => {
  const all = get_store_value(chats);
  return Object.keys(all).find((chatId) => {
    const chat = all[chatId];
    return chat.users.includes(uid);
  });
};
const initiateChat = async (partnerUid) => {
  creatingNewChat.set(true);
  const partner = await getPublicUserProfile(partnerUid);
  creatingNewChat.set(false);
  return partner;
};
const createChatObserver = async () => {
  const query = db.collection("chats").where("users", "array-contains", get_store_value(user).id);
  return query.onSnapshot(async (querySnapshot) => {
    const changes = querySnapshot.docChanges();
    const amount = querySnapshot.size;
    let counter = 0;
    await Promise.all(changes.map(async (change) => {
      const chat = change.doc.data();
      const partnerId = chat.users.find((id) => get_store_value(user).id !== id);
      const partner = await getPublicUserProfile(partnerId);
      chat.partner = partner;
      addChat({ id: change.doc.id, ...chat });
      counter++;
    }));
    if (counter === amount)
      hasInitialized.set(true);
  }, (err) => {
    hasInitialized.set(true);
    throw new Error(err);
  });
};
const observeMessagesForChat = (chatId) => {
  db.collection("chats").doc(chatId).collection("messages").onSnapshot((snapshot) => {
    const changes = snapshot.docChanges();
    changes.forEach((message) => {
      addMessage(chatId, { id: message.doc.id, ...message.doc.data() });
    });
  }, (err) => {
    throw new Error(err);
  });
};
const sendMessage = async (chatId, message) => {
  await db.collection("chats").doc(chatId).collection("messages").add({
    content: message.trim(),
    createdAt: Timestamp.now(),
    from: get_store_value(user).id
  });
  await db.collection("chats").doc(chatId).update({
    lastActivity: Timestamp.now(),
    lastMessage: message.trim()
  });
};
const create = async (uid1, uid2, message) => {
  const doc = await db.collection("chats").add({
    users: [uid1, uid2],
    createdAt: Timestamp.now(),
    lastActivity: Timestamp.now(),
    lastMessage: message.trim()
  });
  await doc.collection("messages").add({
    content: message,
    createdAt: Timestamp.now(),
    from: uid1
  });
  return doc.id;
};
export { create as a, creatingNewChat as b, chats as c, createChatObserver as d, getChatForUser as g, hasInitialized as h, initiateChat as i, messages as m, observeMessagesForChat as o, sendMessage as s };
