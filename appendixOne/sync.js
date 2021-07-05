// Promises
// A resolve will be used when our API call is a success.
// A reject will be used when our API call is a error.

const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have successed");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

myPromise
  .then((value) => console.log(value))
  .catch((rejectValue) => console.log(rejectValue));
