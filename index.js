var readlinesync = require("readline-sync");
var chalk = require("chalk");

var userName  = readlinesync.question(chalk.blue("Hey There! Whats your name? "));

console.log(chalk.yellow.bold("\nWelcome "+ userName +"!\nLets see how well do you know about THE OFFICE"));

var questionAnswerArray = [
  {
    question : "What's Pam's favorite flavor of yogurt?",
    options : "a. Vanilla\nb. Strawberry\nc. Mixed Berry",
    answer : "c"
},
{
    question : "What's Phyllis's maiden name?",
    options : "a. Vance\nb. Lapin\nc. Lanpin",
    answer : "b"
},
{
    question : "What does Kevin suggest Dwight put in his gun holster",
    options : "a. Cellphone\nb. Banana\nc. Toy Gun",
    answer : "b"
},
{
    question : "What did Kevin buy for himself when he got himself for Secret Santa?",
    options : "a. A foot massager\nb. A foot bath\nc. M&M's",
    answer : "b"
},
{
    question : "What's the name of Dwight's porcupine who he used to make it look like Jim was pranking him?",
    options : "a. Hilly\nb. Henry\nc. Henrietta",
    answer : "c"
},
{
    question : "During the episode, Prince Family Paper, what's the secret signal that Dwight and Michael agree on using?",
    options : "a. Raising your eyebrows\nb. Licking your lips\nc. Coughing loudly",
    answer : "b"
},
{
    question : "On what social media site does Creed say that Michael's nephew is trashing them relentlessly?",
    options : "a. Twitter\nb. Facebook\nc. Instagram",
    answer : "a"
},
{
    question : "Which Toy Story character is Holly's doll that Michael throws in the trash and pours coffee on?",
    options : "a. Bo Peep\nb. Buzz\nc. Woody",
    answer : "c"
},
{
    question : "Aside from Jim, who in the office has an obvious crush on Pam throughout the show?",
    options : "a. Toby\nb. Andy\nc. Ryan",
    answer : "a"
},
{
    question : "Jim, you're 6'11\" and you weigh 90 pounds. _______ has a better body than you. Boom. Roasted.",
    options : "a. Mr Peanut\nb. Gumby\nc. Santa Clause",
    answer : "b"
},
{
    question : "What does Michael's girlfriend, Carol, dress up as to Kelly's Diwali party?",
    options : "a. A nurse\nb. A realtor\nc. A cheerleader",
    answer : "c"
},
{
    question : "How much did Michael's beloved plasma TV cost?",
    options : "a. $200\nb. $100\nc. $500",
    answer : "a"
},
{
    question : "What does Jim give Dwight to use to get his things out of the vending machine?",
    options : "a. Dimes\nb. Pennies\nc. Nickels",
    answer : "c"
},
{
    question : "What live animal did Dwight bring into the office before his Christmas goose?",
    options : "a. Chicken\nb. Duck\nc. Turkey",
    answer : "b"
},
{
    question : "How many chore wheels does Pam make in total?",
    options : "a. 3\nb. 4\nc. 5",
    answer : "b"
}
]

console.log(chalk.green.bold("\nSo here are the rules of the game:\n1. There are 3 levels in all and each level has 5 questions.\n2. You have to answer atleast 3/5 questions correctly to go to next level.\nALL THE BEST! Lets begin\n------------------------------"));


var score = 0;
for(var i=0; i<questionAnswerArray.length; i++){
  console.log(chalk.white.bold(questionAnswerArray[i].question+"\n"));
  console.log(chalk.yellow.bold(questionAnswerArray[i].options+"\n"));
  var userAnswer = readlinesync.question(chalk.white.bold("Enter your answer: "));
   while(true){
    if(userAnswer.toLowerCase() !== 'a' && userAnswer.toLowerCase() !== 'b' && userAnswer.toLowerCase() !== 'c'){
      console.log(chalk.red.bold("Please Enter Valid Option!!"));
      userAnswer = readlinesync.question(chalk.white.bold("Enter your answer: "));
    }
    else
      break;
  }
  if(userAnswer.toLowerCase()===questionAnswerArray[i].answer){
    score+=1;
    console.log(chalk.green.bold("Correct!"));
    console.log("------------------------");
  }
  else{
    console.log(chalk.red.bold("Incorrect!"));
    console.log("------------------------");
  }

  if(i==4){
    if(score>=3){
    console.log(chalk.green.bold("Congratulations " + userName + "! You cleared Level One\n"));
      score = 0;
    continue;
   
    }
    else{
      console.log(chalk.red.bold("You didn't clear Level One.\nBetter Luck Next Time"));
      break;
    }
  }

    if(i==9){
    if(score>=3){
    console.log(chalk.green.bold("Congratulations " + userName + "! You cleared Level Two\n"));
      score = 0;
    continue;
    }
    else{
      console.log(chalk.red.bold("You didn't clear Level Two.\nBetter Luck Next Time"));
      break;
    }
    }
  

  if(i==14){
    if(score>=3){
      console.log(chalk.green.bold("Congratulations " + userName + "! You are the ULTIMATE OFFICE FAN"));
    }
    else{
      console.log(chalk.red.bold("You didn't clear Level Three.\nBetter Luck Next Time"));
    }
  }
}

