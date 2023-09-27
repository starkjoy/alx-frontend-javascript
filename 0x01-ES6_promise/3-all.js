import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      console.log(`${photoResult[0]} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline', error);
    });
}
