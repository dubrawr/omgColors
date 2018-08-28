FUNCTION COLORGENERATOR
create objects colorName: color, actualColor: color
math.random will select a number between 1-8 and assign colorName and actualColor

30 objects will push into a gameList

[gamelist] will display into DOM

FUNCTION checkColor
if "inputstring" === actualColor, score ++

on input typing GAMESTART
time starts ticking

assign color to a number
yellow: 1
orange: 2
red: 3
blue: 4
green: 5
purple: 6
black: 7
pink: 8

onclick game start
fade out main UI,
fade in game and activate COLORGENERATOR


let gamelist = [];

const colorGenerator = () => {
	while (gamelist.length < 30){
		let random = myArray[Math.floor(Math.random() * myArray.length)];
		colors.push(random);
	}
}

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

fill in the .gitignore
add to github