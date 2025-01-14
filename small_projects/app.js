// let data = "secret information";

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   viewData() {
//     console.log("data=", data);
//   }
// }

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editData() {
//     data = "some new value";
//   }
// }

// let student1 = new User("manish", "manish@email.com");
// let student2 = new User("varun", "varun@email.com");

// let teacher1 = new User("Dean", "dean@email.com");

// let admin1 = new Admin("admin", "admin@college.com");

// function getData(dataId, getNextData) {
// // 2s
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// callback hell

// getData(1, () => {
//   console.log("getting data2....");
//   getData(2, () => {
//     console.log("getting data3....");
//     getData(3, () => {
//       console.log("getting data4....");
//       getData(4);
//     });
//   });
// });

// const getPromise=()=>{
//     new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
// console.log("promise fulifileld",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log("fetching data2....");
//   let p2 = asyncFunc2();
//   p2.then((res) => {});
// });

// console.log("fetching data2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });

// using async await

// function api() {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       reslove(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
// }

// function getData(dataId, getNextData) {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       reslove("success");
//       // if(getNextData){
//       //   getNextData();
//       // }
//     }, 3000);
//   });
// }

// // Aysnc-await

// async function getAllData() {
//   await getData(1);
// }

// promise chain

// let p1 = getData(1);
// p1.then((res) => {
//   console.log(res);
//   getData(2).then(() => {
//     console.log(res);
//   });
// });

const URl = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");

const getFacts = async () => {
  console.log("getting data....");
  let response = await fetch(URL);
  console.log(response); // json  format
  let data = await response.json();
  factPara.innerText = data[0].text;
};

// let promise = fetch(URL);
// console.log(promise);
