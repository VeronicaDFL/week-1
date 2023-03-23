const shirt1 ={

    
    shirt: "sweater",
    size:" Medium",
    color: "green",
    sleeves: "long",
    material: "cotton",
    quantity: 1,
    like: true
}
// bracket notation 
const shirtSize = shirt1["size"]
// dot notation 
const shirtLike = shirt1.like
const shirtQuantity = shirt1.quantity
const shirtColor = shirt1.color

console.log("size:", shirtSize)
console.log("like:", shirtLike)
console.log("quantity:", shirtQuantity)
console.log("color:", shirtColor)