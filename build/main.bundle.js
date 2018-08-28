"use strict";

var gamelist = [];
var colors = ["yellow", "red", "blue", "green", "black", "orange", "pink", "purple"];

var colorGenerator = function colorGenerator(colors) {
  while (gamelist.length < 30) {
    var random = colors[Math.floor(Math.random() * colors.length)];
    gamelist.push(random);
  }
};

colorGenerator(colors);
console.log("lol");
console.log(gamelist);
