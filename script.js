
function showJoke() {
    let randomIndex = Math.floor(Math.random() * arrlen);
    p1.textContent = `"` + jokes[randomIndex] + `"`;

    // setTimeout(() => {
    //     next = confirm("Do you need another joke?");
    //     if (next) {
    //         showJoke(); // Call the function again if the user wants another joke
    //     }
    // }, 1000); // Display joke for 3 seconds
}

const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "I told my computer I needed a break, and now it won't stop sending me beach wallpapers.",
    "There are only 10 types of people in the world: those who understand binary and those who don't.",
    "I would tell you a joke about UDP, but you might not get it.",
    "My code has bugs, but at least they’re all well documented!",
    "Why do Java developers wear glasses? Because they don't see sharp!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why did the programmer quit his job? Because he didn't get arrays!",
    "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
    "Why was the developer unhappy at his job? He wanted arrays!",
    "Why do Python programmers prefer snake_case? Because they can't handle camelCase!",
    "What do you call a programmer from Finland? Nerdic!",
    "Why did the functions stop calling each other? Because they had constant arguments!",
    "How do you comfort a JavaScript bug? You console it!",
    "Why did the developer go broke? Because he used up all his cache!",
    "What's a programmer's favorite hangout place? Foo Bar!",
    "Why can't programmers tell jokes? They always have to explain them!",
    "What do you get when you cross a bad joke with a programming language? A joke that won't compile!",
    "Why was the computer cold? It left its Windows open!",
    "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did!",
    "What do you call a programmer who doesn’t comment their code? A code criminal!",
    "Why did the computer break up with the internet? There was too much buffering!",
    "Why did the web developer walk out of the meeting? Too many cookies!",
    "What’s a programmer’s favorite place to hang out? The GitHub repository!",
    "Why do programmers hate nature? It has too many bugs.",
    "I asked my computer for a joke, but it just gave me a syntax error!",
    "How does a programmer stay warm in winter? They code in Java!",
    "Why did the programmer get stuck in the shower? He couldn't find the shampoo bottle's API!",
    "Why was the JavaScript developer sad? Because he didn’t know how to 'null' his feelings.",
    "Why was the computer tired when it got home? It had a hard drive!",
    "What do you call a computer that sings? A Dell!",
    "How do you know if a programmer is an extrovert? They look at your shoes while talking to you!",
    "Why was the developer so good at poker? He knew how to read the stack!",
    "What do you call a programmer’s favorite cocktail? A 'byte' of rum!",
    "Why do programmers prefer using the dark web? Because it’s less buggy!",
    "I tried to use an online joke generator, but it kept crashing!",
    "Why do C# developers love coffee? Because it helps them stay awake at compile time!",
    "How do you spot an optimistic programmer? They think their code is perfect on the first try!",
    "Why don’t programmers like nature? It has too many bugs.",
    "What do you call a programming language that doesn't make any mistakes? A 'perfect' language!",
    "Why did the developer bring a ladder to work? He wanted to reach the next level!",
    "Why do programmers hate winter? Too many cold calls!",
    "What do you get if you cross a computer and a lifeguard? A screensaver!",
    "How did the developer propose? With a ring buffer!",
    "Why did the programmer go to art school? To learn about arrays!",
    "What’s a developer's favorite game? Cache me if you can!",
    "How does a programmer eat their pizza? With 'byte'-sized pieces!",
    "Why did the software developer break up with his girlfriend? She had too many dependencies!",
    "Why did the function fail? It had too many arguments!",
    "Why do Java developers always wear glasses? Because they can't C#!",
    "What do you call a nervous programmer? A 'git' push!",
    "Why did the developer stay home from work? He had a bad case of 'syntax-itis'!",
    "How do you keep a programmer in suspense? I’ll tell you tomorrow!",
    "What did the computer do at lunchtime? Had a byte!",
    "Why was the web developer's website so slow? Too many redirects!",
    "How do programmers like their eggs? Debugged!",
    "Why was the developer afraid of climbing? Too many stack overflows!",
    "Why do programmers prefer iOS development? Because they can't handle all the Android bugs!",
    "Why do developers prefer Git? Because they love branching out!",
    "How does a programmer relax? By logging off!",
    "Why did the programmer get lost in the forest? He kept following the wrong path!",
    "Why did the developer take a break? To decompress!",
    "What do you call a group of musical programmers? An orchestra of 'code'-s!",
    "Why did the coder break up with his girlfriend? She had too many bugs!",
    "What do you call a software engineer who doesn't write tests? A 'pessimist'!",
    "Why are assembly programmers always soaking wet? Because they work below C level!",
    "Why did the programmer love nature? It was full of trees!",
    "What do you call a developer who only works at night? A nocturnal coder!",
    "Why did the database administrator break up with his girlfriend? She had too many foreign keys!",
    "What’s a programmer's favorite exercise? Running tests!",
    "Why did the programmer always carry a pencil? In case he needed to draw some logic!",
    "What’s a developer's favorite band? The 'Debuggers'!",
    "Why did the programmer choose a career in music? He wanted to get better at composing!",
    "How did the programmer get promoted? By always committing!",
    "Why do programmers make terrible friends? They always push you away!",
    "What do you call a programmer who can’t code? A 'de-bugged' programmer!",
    "Why did the developer get a promotion? He had great 'class'!",
    "What do you call a programmer’s favorite dessert? A byte-sized cake!",
    "How do you make a programmer laugh? You give them a 'null' reference!",
    "Why did the programmer join a band? He wanted to work on his 'chords'!",
    "What’s a programmer's favorite type of music? Algo-rhythm!",
    "Why do programmers never play hide and seek? Because good luck hiding when they always debug!",
    "How do you know a developer is in a bad mood? They start using angry comments in their code!",
    "Why did the developer get kicked out of the party? He kept trying to refactor everyone's drinks!",
    "What do you call a programmer's favorite beverage? Java!",
    "Why did the programmer throw his clock out the window? He wanted to see time fly!",
    "What do you get when you cross a programmer and a musician? A code composer!",
    "Why do programmers prefer the ocean? Because they love 'deep' learning!",
    "What’s a programmer's favorite animal? A 'byte'-e!",
    "Why did the developer refuse to leave his house? He was afraid of bugs!",
    "What did the programmer say to the artist? 'Your work is great, but I prefer clean lines!'",
    "Why are programmers so bad at driving? They can't handle too many 'exceptions'!",
    "What do you call a programmer with a bad attitude? A 'mal-function'!",
    "Why did the programmer go broke? He lost his 'cache'!",
    "What do you call a programmer who loves to party? A 'code'-er!",
    "Why did the software engineer stay up all night? He wanted to debug his dreams!",
    "What do you call a programmer’s favorite vegetable? A 'byte'-size carrot!",
    "Why do programmers prefer cats? Because they love to debug!",
    "What do you get when you cross a computer and a teacher? A 'byte'-sized lesson!",
    "Why did the programmer get kicked out of school? For too many 'syntax errors'!",
    "What do you call a programmer’s favorite game? A logic puzzle!",
    "Why did the coder refuse to play cards? He didn't want to deal with the deck!",
    "What do you call a programmer who can’t swim? A 'drip' coder!"
];


// Obtaining array length
const arrlen = jokes.length;

// Declaring variable for confirmation from user
let next;

// Adjusting the html with some CSS
const p1 = document.createElement('p');
p1.className = "p1";

document.body.insertBefore(p1, document.querySelector(".next-btn"));
// Insert the joke paragraph before the button

document.body.style.margin = "15px";
p1.style.display = "flex";
p1.style.justifyContent = "center";
p1.style.alignItems = "center";
document.body.style.flexDirection = "column";
p1.style.fontSize = "2em";
p1.style.textAlign = "center";
p1.style.marginBottom = "20px";

// Attach event listener to the button to show a new joke on click
document.querySelector(".next-btn").addEventListener("click", showJoke);

// calling the function
showJoke(); // Start the joke display