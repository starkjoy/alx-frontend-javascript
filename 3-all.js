import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      console.log(`firstName ${userResult.firstName} lastName ${userResult.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline', error);
    });
}
