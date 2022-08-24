// let's take example about very bad code!

// let's assume that the memoryPacket carry on two props that each one of them contains 5kb of memory
const memoryPacket = {
    prop1: memory(), // 5kb
    prop2: memory(), // 5kb
}

/**
 * let's explain this code and expose why this code is so bad and you should avoid doing something like that!
 * first - what'll happen?
 * * you maybe expecting that prop1 will return the first element of memory and maybe it's size is 1kb, so it should return only 1kb? in fact, not it won't!
 * let's know why!
 * now our code will download all memory, literally all the memory, including the prop1 and prop2 properties, which is 10kb will be loaded in the function!
 * let's explain this a bit more
 * your function know will load the prop1 and prop2 properties from the memoryPacket then will extracts the first element of prop1 after the download
 * 
 * * so how can we fix this?
 */
function extractor() {
    console.log(memoryPacket.prop1[0])
}

/**
 * * the solution
 * there's a concept called limiting object references, this concept is the solution to our issue so we'll focus on explain this concept
 * now when you pass some object as a parameter to a function, the function will pull the whole object which is something very bad and will cause performance issues!
 * if your object was carring a lot of data inside it'll cause the function to pull the whole object including its data!
 * therefore here 'the limiting object references' concept comes in play!
 * now you'll need to pass some object property into the function as a parameter and your function won't need to pull the whole object again! what a great!
 */
function fixExtractor(prop) {
    console.log(prop)
}

// let's call the function 'fixExtractor'
fixExtractor(memoryPacket.prop1[0])