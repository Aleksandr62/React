import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";

export const signIn = async (email, password) => {
  try {
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user !== null
      ? {
          id: user.uid,
          email: user.email,
          firstName: user.displayName,
          created_at: user.metadata.createdAt,
          updated_at: user.reloadUserInfo.lastRefreshAt
        }
      : null;
  } catch (err) {
    console.log(err);
  }
};

export const signOutApp = () => {
  try {
    const auth = getAuth();
    signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export const create = async (email, password) => {
  try {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (user !== null) {
      return {
        id: user.uid,
        email: user.email,
        firstName: user.displayName,
        created_at: user.metadata.createdAt,
        updated_at: user.reloadUserInfo.lastRefreshAt
      };
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateProfileApp = async (firstName) => {
  try {
    const auth = getAuth();
    await updateProfile(auth.currentUser, {
      displayName: firstName
    });
  } catch (err) {
    console.log(err);
  }
};
