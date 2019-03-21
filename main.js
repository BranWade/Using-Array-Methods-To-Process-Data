var avg=0;

items.forEach(function(item){
      avg += Number(item.price)
})

var average = avg /items.length
console.log(average.toFixed(2))

document.querySelector('#answer1').innerHTML = `the average price is $${average.toFixed(2)}`



var cheapItems = items.filter(function(item){
    return item.price > 14.00 && item.price < 18.00
}).map(function(item){
    return item.title 
})
console.log(cheapItems)

document.querySelector('#answer2').innerHTML = `the items priced between $14 and $18 are ${cheapItems}`

var currencyType = items.filter(function(item){
    return item.currency_code === "GBP"
}) .map(function(item){
    return item.title
})

console.log(currencyType)
document.querySelector('#answer3').innerHTML = `the items priced in GBP are ${currencyType}`


var materials = items.filter(function(item){
    return item.materials.includes("wood")
}).map(function(item){
    return item.title + " is made of wood"
}).join("\n\n")

document.querySelector('#answer4').innerHTML = `the items made of wood are ${materials}`




var multiMaterial = items.filter(function(item){
    return item.materials.length >= 0
}).map(function(item){
    return item.title
}).join("\n\n")

document.querySelector('#answer5').innerHTML = `these items are made of 8 or more materials ${multiMaterial}`



var handMade = items.filter(function(item){
 return item.who_made === "i_did"
}).map(function(item){
    return item.title
}).join("\n\n")
document.querySelector('#answer6').innerHTML = `these items are handmade ${handMade}`