let gamelist = [];

//need to make a key value object for each color
//to choose the actual shade that I want...or maybe I can do that in scss...
const colors = [
  "yellow",
  "red",
  "blue",
  "green",
  "black",
  "orange",
  "pink",
  "purple"
];

const colorGenerator = (colors) => {
  while (gamelist.length < 30) {
    let random = colors[Math.floor(Math.random() * colors.length)];
    gamelist.push(random);
  }
};

colorGenerator(colors);
console.log("lol");
console.log(gamelist);


