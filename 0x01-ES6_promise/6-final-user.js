import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ])
    .then((results) => {
      return results.map((result) => ({
        status: 'fulfilled',
        value: result
      }));
    })
    .catch((error) => {
      return error.map((err) => ({
        status: 'rejected',
        value: err.message
      }));
    });
}
