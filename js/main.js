let gamelist = [];

//need to make a key value object for each color
//to choose the actual shade that I want...or maybe I can do that in scss...
const colors = [
  {name: "yellow", color: "#fff281"},
  {name: "red", color: "#ff4f4f"},
  {name: "blue", color: "#a5d1ff"},
  {name: "green", color: "#b0ffa5"},
  {name: "black", color: "#2a2825"},
  {name: "orange", color: "#ffb66f"},
  {name: "pink", color: "#ffabd4"},
  {name: "purple", color: "#dc7cff"}
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


// append li to gamelist
// if first li element text equals to first item in array
//remove that li, and remove the first item off the array
//repeat until array.length = 0

//on gameStart()
//hide title div, unhide gamesession
//create gamelist and display

const gameStart = () => {
  colorGenerator(colors);
  //hide title screen
  //game list display
}

list = gamelist.reduce((result, color) => {
  result += `<li style="color: ${color.color};">${color.name}</li>`
});