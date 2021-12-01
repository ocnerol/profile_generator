const { stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
set up variables for name
activity
music
favMeal
favFood
favSport
superpower

ask questions to prompt getting answers for all of those variables, and assign each variable to the respective user input

set up a setTimeOut with a 0 second delay that will stdout a paragraph for the user's online profile using
*/

const userProfile = {

  // userName,
  // hobby,
  // toListenTo,
  // favMeal,
  // favFood,
  // favSport,
  // superpower
  // userDescription

};


rl.question(`What's your name? (Nicknames are also acceptable!) \n`, (answer) => {
  userProfile.userName = answer;
  rl.question(`What is an activity you enjoy doing? \n`, (answer) => {
    userProfile.hobby = answer;
    rl.question(`What do you like to listen to while doing that? \n`, (answer) => {
      userProfile.toListenTo = (answer);
      rl.question(`What is your favourite meal of the day? (for example, brunch) \n`, (answer) => {
        userProfile.favMeal = answer;
        rl.question(`What is your favourite food to have for that meal? \n`, (answer) => {
          userProfile.favFood = answer;
          rl.question(`What is your absolute favourite sport? \n`, (answer) => {
            userProfile.favSport = answer;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!\n`, (answer) => {
              userProfile.superpower = answer;
              userProfile.userDescription = `${userProfile.userName} loves listening to ${userProfile.toListenTo} while ${userProfile.hobby}, devouring ${userProfile.favFood} for ${userProfile.favMeal}, prefers ${userProfile.favSport} over any other sport, and is amazing at ${userProfile.superpower}.`;

              console.log(userProfile.userDescription);

              rl.close();
            });
          });
        });
      });
    });
  });
});