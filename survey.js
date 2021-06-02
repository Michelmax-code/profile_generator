const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answers = {};

rl.question(`What's your name? Nicknames are also acceptable: `, (answer0) => {
  answers.answer0 = answer0;
  rl.question(`What's an activity you like doing? `, (answer1) => {
    answers.answer1 = answer1;
    rl.question(`What do you listen to while doing that? `, (answer2) => {
      answers.answer2 = answer2;
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer3) => {
        answers.answer3 = answer3;
        rl.question(`What's your favourite thing to eat for that meal? `, (answer4) => {
          answers.answer4 = answer4;
          rl.question(`Which sport is your absolute favourite? `, (answer5) => {
            answers.answer5 = answer5;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer6) => {
              answers.answer6 = answer6;
              console.log(`Thank you for your feedback: ${answer0}, You like to do ${answer1} and during this activity you like to listen ${answer2}. Your favourite meal is ${answer3} and you like to eat ${answer4}. Your favourite sport is ${answer5} and your superpower is ${answer6}. You are amazing.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});
