//import data fruits
const fruits = require("./data.js");

//membuat fungsi index
const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

//Membuat fungsi store
const store = (name) => {
    fruits.push(name);
    index();
};


//export method index dan store
module.exports = {index, store};