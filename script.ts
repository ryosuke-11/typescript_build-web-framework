import { User } from "./models/User";
const user1 = new User({ name: "test", age: 99 });

// get test
console.log(user1.get("name"));
console.log(user1.get("age"));

// set test
console.log(user1.set({ name: "test2", age: 100 }));
console.log(user1.get("name"));
console.log(user1.get("age"));

// on trigger test
user1.on("click", () => {
  console.log("click! #1");
});
user1.on("click", () => {
  console.log("click! #2");
});
user1.on("change", () => {
  console.log("change! #1");
});
user1.trigger("click");
user1.trigger("change");
user1.trigger("noname");

// fetch test
const user2 = new User({ id: 1 });
user2.fetch();
setTimeout(() => {
  console.log(user2);
}, 1000);

// save put test
user2.set({ name: "modify name", age: 30 });
user2.save();

// save post test
const user3 = new User({ name: "new record", age: 100 });
user3.save();
