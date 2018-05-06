import { fbLoginPermissions } from '../constants/constants.js';
import Firebase from './Firebase';
import Auth from './Auth.js';

export const HandleFBLogin = () => (
  Auth.Facebook.login(fbLoginPermissions)
    .then((token) => {
      Firebase.auth()
        .signInWithCredential(Firebase.auth.FacebookAuthProvider.credential(token))
    })
    .catch((err) => this.onError && this.onError(err))
);
