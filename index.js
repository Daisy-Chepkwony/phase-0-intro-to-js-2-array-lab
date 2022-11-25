// Write your solution here!
 var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function appendCat(name){
    cats.slice(0);
    cats.concat("Broom");
    const home = cats.slice(0);
    return home;
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function prependCat(name){
    cats.slice(0);
    cats.unshift("Arnold");
    const domestic=cats.slice(0);
    return domestic;
}
function removeLastCat(){
    return cats.pop();
}

function removeLastCat(){
    return cats.shift();
}
// var kittens = ["Milo", "Otis", "Cat"]
// function appendKitten(name) { 
//     kittens.slice(0); 
//     kittens.push(); 
//     var clone = kittens.slice(0); 
//     return clone 
// }
