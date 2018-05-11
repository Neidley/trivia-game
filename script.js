// Lecture: Function constructor
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

//////////////////////////////////////////
// Lecture: The Prototype Chain in the console

// .hasOwnProperty()
// john instanceof Person
// console.info(x)

//////////////////////////////////////////
// Lecture: Creating Objects - Object.create

/*
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
  {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
  });
*/

//////////////////////////////////////////
// Lecture: Primitives vs. Objects

/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //23


// Objects
var obj1 = {
  name: 'John',
  age: 26,
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); //30
console.log(obj2.age); //30

// Functions

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Fransisco';
}

change(age, obj);

console.log(age); // 27
console.log(obj.city); // San Fransisco
*/

//////////////////////////////////////
// Lecture: First Class Functions: Passing Functions as Arguments

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }

}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

///////////////////////////////////////////
// Lecture: First Class Functions: Functions Returning Functions

/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

//////////////////////////////////////////
// Lecture: Immediately Invoked Function Expressions (IIFE)

/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5)
}
game();
/*

/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
)();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}
)(5);
*/

///////////////////////////////////////////////
// Lectures: Closures

/*
function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
*/

//retirement(66)(1990);

// Original (non-closure)
/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}
*/

// My attempt
/*
function interviewQuestion(name) {
  var a = ', can you please explain what UX design is?';
  var b = ', What subject do you teach ?';
  var c = ' Hello. what do you do?';
  return function (job) {
    if (job === 'designer') {
      console.log(name + a);
    } else if (job === 'teacher') {
      console.log(name + b);
    } else {
      console.log(name + c);
    }
  }
}

interviewQuestion('Andrew')('designer');
*/

/*
function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interviewQuestion('teacher')('John');
*/

////////////////////////////////////////////
// Lecture: Bind, Call and Apply

/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning');

// Method borrowing. set the 'this' to emily with first argument
john.presentation.call(emily, 'friendly', 'afternoon');

// in this case won't work because function doesn't accept array. (more later)
//john.presentation.apply(emily, ['friendly', 'afternoon']);

// Carrying using bind()
var johnFriendly = john.presentation.bind(john, 'friendly')

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}


var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


/////////////////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question
should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate
data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor.

3. Store them all inside an array.

4. Select one random question and log it on the console, together with the possible
answers (each question should have a number) (Hint: write a method for the Question
objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should
input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is
correct or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code.
So make sure that all your code is private and doesn't interfere with the other
programmers code (Hint: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question, so that the game
never ends (Hint: write a function for this and call it right after displaying the
result).

9. Be careful: after Task 8, the game literally never ends. So include the option
to quit the game if the user writes 'exit' instead of the answer. In this case,
DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is
correct, add 1 point to the score (Hint: I'm going to use the powers of Closures
for this, but you don't have to, just do this with the tools you feel more comfortable
with at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
  // Function - display a question in the console.log();
  Question.prototype.displayQuestion = function(){

    console.log(this.question);
    for(var i = 0; i < this.answers.length; i++) {
      console.log(this.answers[i] + '\n')
    }
    console.log('?');


  };

  Question.prototype.checkAnswer = function(input) {
    if (input === this.correctAnswer) {
      console.log('\n');
      console.log('Correct!');
    } else {
      console.log('\n');
      console.log('Incorrect...');
    }
  }

  // Question Object {}
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };

  // 3 x individual Question Objects
  var questionOne = new Question('What do you do?', ['1: program', '2: eat', '3: sleep', '4: all the above'], 4);
  var questionTwo = new Question('Perfect vacation?', ['1: beach', '2: mountains', '3: desert', '4: Russia'], 1);
  var questionThree = new Question('Favorite food?', ['1: pizza', '2: ramen', '3: burgers', '4: tacos'], 2);

  // Array of Question Objects
  var questions = [questionOne, questionTwo, questionThree];


  // sets currentQuestion randomly according to input arr.length - 1
  var n = Math.floor(Math.random() * (questions.length));

  // displays question
  questions[n].displayQuestion();

  // sets answer to currentQuestion.question
  var input = parseInt(prompt('Please select the correct answer.'));

  questions[n].checkAnswer(input);
})();
