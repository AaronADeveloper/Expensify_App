const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is my resolved datas"); //resolve can only take a single value, or an object with several properties
  }, 2000);
});

console.log("before");

promise.then((data) => {
  console.log(data);
});

console.log("after");

//For a rejection

promise
  .then((data) => {
    console.log(data);
  })
  .then(() => {
    console.log("does this run? YES");
  })
  .catch((error) => {
    //error message
  });

//Alternate syntax

promise.then(
  (data) => {},
  (error) => {
    console.log("erorr", error);
  }
);
