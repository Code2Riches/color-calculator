const prompt = require('prompt-sync')({sigint: true});

// Combining color choices (#1 & #2)
let color1 = (prompt("Pick 1st color to combine: "));
let color2 = (prompt("Pick 2nd color to combine: "));

if ((color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red")){
    console.log("The colors Red & Blue combine to make Purple");
} else if ((color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red")){
    console.log("The colors Red & Yellow combine to make Orange");
} else if ((color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue")){
        console.log("The colors Blue & Yelow combine to make Green");
} else console.log("Error!");

// Deconstructing colors (#3)
let color3 = (prompt("Pick a color to deconstruct: "));

if (color3 === "purple"){
    console.log("Deconstructing Purple gives you Red & Blue");
} else if (color3 === "orange"){
    console.log("Deconstructing Orange gives you Red & Yellow");
} else if(color3 === "green"){
    console.log("Deconstructing Green gives you Blue & Yellow");
} else HTMLFormControlsCollection.log("Error!");




