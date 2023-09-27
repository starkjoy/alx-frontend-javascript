import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((results) => results.map((result) => ({
      status: 'fulfilled',
      value: result,
    })))
    .catch((error) => error.map((err) => ({
      status: 'rejected',
      value: err.message,
    })));
}
