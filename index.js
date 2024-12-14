
/////// 1-misol

// function sortDrinkByPrice(drinks) {
//     return drinks.sort((a, b) => a.price - b.price);
//   }
  
//   const drinks = [
//     { name: "limonli ichimlik", price: 50 },
//     { name: "limon", price: 10 }
//   ];
  
//   console.log(sortDrinkByPrice(drinks));
  







  ////// 2-misol

//   function objectToArray(obj) {
//     return Object.entries(obj);
//   }
  
//   console.log(objectToArray({
//     D: 1,
//     B: 2,
//     C: 3
//   }));
  
//   console.log(objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10
//   }));





/////// 3-missol

// let names = [];

// let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ];

// for (let { name } of users) {
//   names.push(name);
// }

// console.log(names); 






////// 4-misol

// function afterNYears(people, n) {
//     n = Math.abs(n);
    
//     for (let person in people) {
//       people[person] += n;
//     }
  
//     return people;
//   }
  
//   console.log(afterNYears({
//     "Joel": 32,
//     "Fred": 44,
//     "Reginald": 65,
//     "Susan": 33,
//     "Julian": 13
//   }, 1));
//   console.log(afterNYears({
//     "Baby": 2,
//     "Child": 8,
//     "Teenager": 15,
//     "Adult": 25,
//     "Elderly": 71
//   }, 19));
  
//   console.log(afterNYears({
//     "Genie": 1000,
//     "Joe": 40
//   }, 5));





  ////// 5-misol

//   const database = {
//     studentsList: {
//       xamidullo: {
//         name: "xamidullo",
//         age: 33,
//         id: 123,
//         tolov: false,
//       },
//     },
  
//     create(user) {
//       if (!this.studentsList[user.name]) {
//         this.studentsList[user.name] = user;
//         return this.studentsList;  
//       } else {
//         return "User already exists!";
//       }
//     },
  
//     read(name) {
//       if (this.studentsList[name]) {
//         return this.studentsList[name];
//       } else {
//         return "User not found!";
//       }
//     },
  
//     update(name, user) {
//       if (this.studentsList[name]) {
//         this.studentsList[name] = { ...this.studentsList[name], ...user };
//         return this.studentsList[name]; 
//       } else {
//         return "User not found!";
//       }
//     },
  
//     delete(name) {
//       if (this.studentsList[name]) {
//         delete this.studentsList[name];  
//         return `${name} has been deleted!`;
//       } else {
//         return "User not found!";
//       }
//     },
//   };
  
//   console.log(database.create({
//     name: "azizbek",
//     age: 21,
//     id: 124,
//     tolov: true,
//   }));
  
//   console.log(database.read("azizbek"));  
  
//   console.log(database.update("azizbek", {
//     name: "azizbek",
//     age: 22,
//     tolov: false,
//   }));
  
//   console.log(database.delete("azizbek"));
  
//   console.log(database.studentsList);
  