/* let test = "TEST";
console.log(test);

test = 0.1;
console.log(test);

test = true;
console.log(test);
 */
const words = ["vue", "react", "angular", "javascript", "html", "css", "frontend", "backend", "framework", "bootstrap"];
const obj = {
    name: "John",
    age: 30,
    isMarried: false
};

function modify() {
    console.log('modify');
    document.getElementById("content-2").style.color = "purple";
    document.getElementById("content-2").innerText = "Hello World!";

    const aszfHref = '<a href="https://www.aszf.hu">ÁSZF</a>';
    const uselessButton = '<button onclick="alert(\'szöveg\')">Click me!</button>';

    document.getElementById("footer").innerHTML += aszfHref + uselessButton;
}

/* words.forEach(element => {
    console.log(element);
});

for (let i = 0; i < words.length; i++) {
    // console.log(words[i]);
    // console.log(Math.floor(Math.random() * words.length));
} */

/* hello(obj.name);
let result = isMarried(obj.isMarried);
console.log(result);

const number = 5;
console.log(square(number));


function hello(name, age = 18) {
    console.log("Hello " + name + "!");
    console.log("You are " + age + " years old.")
}

function isMarried(isMarried) {
    if (isMarried) {
        return "You are married.";
    } else {
        return "You are not married.";
    }
}

function square(number) {
    return number * number;
} */