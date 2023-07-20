const quotes = [{
    "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "writer": " ~ Thomas Edison"
},
{
    "quote": "You can observe a lot just by watching.",
    "writer": " ~ Yogi Berra"
},
{
    "quote": "A house divided against itself cannot stand.",
    "writer": " ~ Abraham Lincoln"
},
{
    "quote": "Difficulties increase the nearer we get to the goal.",
    "writer": " ~ Johann Wolfgang von Goethe"
},
{
    "quote": "Fate is in your hands and no one elses",
    "writer": " ~ Byron Pursier"
},
{
    "quote": "Be the chief but never the lord.",
    "writer": " ~ Lao Tzu"
},
{
    "quote": "Nothing happens unless first we dream.",
    "writer": " ~ Carl Sandburg"
},
{
    "quote": "Well begun is half done.",
    "writer": " ~ Aristotle"
},
{
    "quote": "Life is a learning experience, only if you learn.",
    "writer": " ~ Yogi Berra"
},
{
    "quote": "Self-complacency is fatal to progress.",
    "writer": " ~ Margaret Sangster"
},
{
    "quote": "Peace comes from within. Do not seek it without.",
    "writer": " ~ Buddha"
},
{
    "quote": "We can only learn to love by loving.",
    "writer": " ~ Iris Murdoch"
},
{
    "quote": "Life is change. Growth is optional. Choose wisely.",
    "writer": " ~ Karen Clark"
},
{
    "quote": "You'll see it when you believe it..",
    "writer": " ~ Wayne Dyer"
},
{
    "quote": "Well begun is half done.",
    "writer": " ~ null"
},
    // {
    //     "quote": "moti bhais sanki hai ",
    //     "writer": " ~ Sujal"
    // }

]

let btn = document.querySelector(".button");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote; // object mai se ek quote call krdia 
    writer.innerHTML = quotes[random].writer;
    // similarly object mai se , us quote ka writer call krdia 
})





// let btn = document.querySelector(".button");
// let text = document.querySelector("content");
// let author = document.querySelector(".writer");

// btn.addEventListener("click", function () {

//     let random = Math.floor(Math.random() * quotes.length);
//     content.innerHTML = quotes[random].content;
//     writer.innerHTML = quotes[random].writer;

// })