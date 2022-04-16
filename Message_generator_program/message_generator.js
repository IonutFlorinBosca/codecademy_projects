/* For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, 
like an astrology generator, inspirational message, or nonsensical jokes. 
To make your program truly random, the message that it outputs should be made 
up of at least three different pieces of data. Take what you know of JavaScript 
syntax so far to build the program and customize it to your liking.

Project Objectives:
Build a message generator program using JavaScript
Use Git version control
Use command line
Develop locally on your computer

Prerequisites:
JavaScript
Git and GitHub
Command line */

/* The pseudo-code:

1. Quotes are multiple strings that need to be stored in an array.
2. Every time the button gets pressed, a random whole number needs to be generated.
3. The number will be used as a representation of the array index number for the quote array.
4. Once we retrieve the randomly picked quote from the array using our randomly generated 
whole number, we will place it to the HTML document. */

let quotes = [
    'Make the best use of what is in your power, and take the rest as it happens. — Epictetus',
    'What upsets people is not things themselves, but their judgements about these things. — Epictetus',
    'Man is not worried by real problems so much as by his imagined anxieties about real problems. — Epictetus',
    'We are more often frightened than hurt; and we suffer more from imagination than from reality. — Seneca',
    'But life is very short and anxious for those who forget the past, neglect the present, and fear the future. — Seneca',
    'Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions—not outside. — Marcus Aurelius',
    'You have power over your mind not outside events, realise this and you will find strength. — Seneca',
]

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}