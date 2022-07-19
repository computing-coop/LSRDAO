import { H as get_store_value } from "./index.ae92f232.js";
import { f as functions, a as auth } from "./index.a79b2e56.js";
import { u as user, i as isInitializing, a as isLoggingIn, b as isRegistering } from "./auth.4dd538c9.js";
const createUser = functions.httpsCallable("createUser");
const requestPasswordReset$1 = functions.httpsCallable("requestPasswordReset");
const resendAccountVerification$1 = functions.httpsCallable("resendAccountVerification");
class User {
  constructor(user2) {
    this.id = user2.uid;
    this.uid = user2.uid;
    this.firstName = user2.firstName || user2.displayName;
    this.email = user2.email;
    this.emailVerified = user2.emailVerified;
    this.countryCode = user2.countryCode;
  }
  setAllInObject(obj) {
    Object.keys(obj).forEach((prop) => {
      this[prop] = obj[prop];
    });
  }
  setPrivateInformation(info) {
    this.setAllInObject(info);
  }
  setGarden(garden) {
    this.garden = garden;
  }
  addFields(fields) {
    this.setAllInObject(fields);
  }
  setEmailPreferences(name, pref) {
    this.emailPreferences[name] = pref;
  }
}
const reloadUserInfo = async () => {
  await auth.currentUser.reload();
  user.set(new User(auth.currentUser));
};
const login = async (email, password) => {
  isLoggingIn.set(true);
  await auth.signInWithEmailAndPassword(email, password);
  await reloadUserInfo();
  isLoggingIn.set(false);
};
const register = async ({ email, password, firstName, lastName, countryCode }) => {
  isRegistering.set(true);
  await auth.createUserWithEmailAndPassword(email, password);
  await createUser({ firstName, lastName, countryCode });
  await reloadUserInfo();
  isRegistering.set(false);
};
const logout = async () => {
  isInitializing.set(true);
  await auth.signOut();
  user.set(null);
  isInitializing.set(false);
};
const requestPasswordReset = (email) => requestPasswordReset$1(email);
const createAuthObserver = () => auth.onAuthStateChanged(async (userData) => {
  if (!userData)
    user.set(null);
  else
    user.set(new User(userData));
  isInitializing.set(false);
});
const resendAccountVerification = () => {
  if (!get_store_value(user))
    throw "Please sign in first";
  if (get_store_value(user).emailVerified)
    throw "Your email is already verified. Please refresh the page.";
  return resendAccountVerification$1();
};
const verifyPasswordResetCode = (code) => auth.verifyPasswordResetCode(code);
const applyActionCode = async (code) => {
  await auth.applyActionCode(code);
  await auth.currentUser.getIdToken(true);
  await reloadUserInfo();
};
const confirmPasswordReset = (code, password) => auth.confirmPasswordReset(code, password);
export { applyActionCode as a, register as b, requestPasswordReset as c, confirmPasswordReset as d, logout as e, createAuthObserver as f, login as l, resendAccountVerification as r, verifyPasswordResetCode as v };
