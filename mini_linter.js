let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let punctuationAndExclamation = ['.', '!'];
// In order to work with the strings in the variable 'story', it has been split into individual words and saved into a new array!
const storyWords = story.split(' ');

// Next, I've filtered out some words that are unnecessary!
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

//Next, I want to let the user know how many times they are overusing some words!
let howManyTimes = 0;
/*for (value of betterWords) {
  if (overusedWords.includes(value)) {
    howManyTimes++;
  }
}*/
betterWords.forEach(value => overusedWords.includes(value) ? howManyTimes++ : howManyTimes);

//Next, I will count how many sentences are in the paragraph!
let howManySentences = 0;
const lastChar = []
betterWords.forEach(letter => lastChar.push(letter.slice(-1)));
lastChar.forEach(char => punctuationAndExclamation.includes(char) ? howManySentences++ : howManySentences);

//Next, all the data above will be logged to the console!
function logInfo(){
  console.log(`Dear User, your text has ${betterWords.length} words, ${howManySentences} sentences and ${howManyTimes} times the overused words appear.`)
  }
logInfo();

//Next the betterWords array will be logged to the console as a single string!
const newStory = betterWords.join(' ');


//Extra challenge: for the overused words, remove it every time it appears!
const evenBetterWords = betterWords.filter(everyWord => {
  if (!overusedWords.includes(everyWord)) {
    return everyWord;
  }
})
const bestStory = evenBetterWords.join(' ');

//Extra challenge: write a function that finds the word that appears the greatest number of times!
const mostUsed = arr =>{
  return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}
console.log(mostUsed(evenBetterWords));

//Extra challenge: replace overused words in the original array with 'LazyGreenGo'!
const betterThanOverused = betterWords.map(l => overusedWords.includes(l) ? 'LazyGreenGo' : l);
console.log(betterThanOverused.join(' '));
