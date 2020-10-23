//create arrays one for questions - one for scores
const myQuestions =  [
  {
    question: 'What is the HTML tag under which one can write the JavaScript code?',
    answers: { 
       a: '<javascript>',
       b: '<scripted>',
       c: '<script>', 
       d: '<js>'
       },
    ans: 'c',
    explanation: 'If we want to write a JavaScript code under HTML tag, you will have to use the “script” tag.'
    },
    { 
    question: 'Choose the correct JavaScript syntax to change the content of the following HTML code.',
    answers: {
      a: 'document.getElement("geek").innerHTML="I am a Geek"',
      b: 'document.getElementById("geek").innerHTML="I am a Geek"',
      c: 'document.getId(“geek”)=”I am a Geek”',
      d: 'document.getElementById(“geek”).innerHTML=I am a Geek'
      },
    ans: 'd',
    explanation: 'The correct syntax to access the element is document.getElementById("peek"). Here we want to access the content written under that id, so we used .innerHTML to specify that and finally we replaced the content with whatever is written inside the quotes.'
    },
    { 
    question: 'Which of the following is the correct syntax to display "Quiz in Progress" in an alert box using JavaScript?',
    answers: {
       a: 'alertbox("Quiz in Progress")',
       b: 'msg("Quiz in Progress")',
       c: 'msgbox("Quiz in Progress")',
       d: 'alert("Quiz in Progress")'
       },
    ans: 'd',
    explanation: 'To display any text in the alert box, you need to write it as alert("Quiz in Progress")'
    },
    {  
    question: 'What is the correct syntax for referring to an external script called “peek.js”?',
    answers: { 
       a: '<script src=”peek.js”>',
       b: '<script href=”peek.js”>',
       c: '<script ref=”peek.js”>',
       d: '<script name=”peek.js”>'
       },
    ans: 'a',
    explanation: 'The "src" term is used to refer to any JavaScript file.'
    },
    { 
    question: 'The external JavaScript file must contain <script> tag. True or False?',
    answers: {
       a: 'True',
       b: 'False'
       }, 
    ans: 'b',
    explanation: 'It is not necessary for any external javascript file to have <script> tag.'
    },
    { 
    question: `Predict the output of the following JavaScript code.
    filter_none
    
    edit
    
    play_arrow
    
    brightness_4
    <script type="text/javascript"> 
    a = 8 + "8"; 
    document.write(a); 
    </script>`,
    answers: {
       a: '16',
       b: 'Compilation Error',
       c: '88',
       d: 'Run Time Error'
       },
    ans: 'c',
    explanation: 'In the above given code, 8+”8″ have first integer and second string data types. Rather than adding the two numbers, it concatenated the two.'
    },
    { 
    question: `Predict the output of the following JavaScript code.
    
    filter_none
    
    edit
    
    play_arrow
    
    brightness_4
    <script type="text/javascript"> 
    var a="ThisThatThese"; 
    var x=a.lastIndexOf("T"); 
    document.write(x); 
    </script>`, 
    answers: {
        a: '8',
        b: '0',
        c: '9',
        d: 'Error'
        },
    ans: 'a',
    explanation: 'The index starts with 0 in JavaScript. Here, x searches for the last occurrence of “T” in the text.',
    },
    { 
    question: 'Which of the following is not a reserved word in JavaScript?',
    answers: {
        a: 'interface',
        b: 'throws',
        c: 'program',
        d: 'short'
        },
    ans: 'c',
    explanation: 'In JavaScript, interface, throws and short are reserved keywords.'
    },
    { 
    question: `Predict the output of the following JavaScript code.
    filter_none
    
    edit
    
    play_arrow
    
    brightness_4
    <script type="text/javascript" language="javascript"> 
      
    var a = "GeeksforGeeks"; 
    var result = a.substring(4, 5); 
    document.write(result); 
      
    </script>`, 
    answers: {
      a: 'sf',
      b: 'ks',
      c: 's',
      d: 'k'
      },
    ans: 'c',
    explanation: 'The substring command selects the substring starting from 4 to 5, excluding the 5th index. The indexing starts from 0. So, the output here is just “s” rather than sf.'
    },
    { 
    question: `Predict the output of the following JavaScript code.
    filter_none
    
    edit
    
    play_arrow
    
    brightness_4
    <script type="text/javascript" language="javascript"> 
      
    var x=5; 
    var y=6; 
    var res=eval("x*y"); 
    document.write(res); 
      
    </script>`, 
    answers: {
      a: '“30”',
      b: '30',
      c: '5*6',
      d: '“5*6”'
      },
    ans: 'b',
    explanation: 'eval command will evaluate the operation. Here it is 5*6=30.'
    }
  ]


//=========
const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitButton = document.querySelector('#submit');
const startButton = document.querySelector('#startQuiz');
const ansForm = document.querySelector('#answers');
const quesP = document.querySelector('#question');

const timeRem = document.querySelector('#timerem');
  
var highscore = 0;
var currScore = 0;
var numQuest = 5;
var br = document.createElement("br");
let numQuests = Object.keys(myQuestions).length;

/*function showResults(){ ... }

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      guess(guess);
      populate();
  }
}
*/
var questionIndex = 0;

function startQuiz(){
//e.preventDefault();
startTimer();
console.log(Object.keys(myQuestions).length);
//for(let i =0;i < Object.keys(myQuestions).length;i++) {
    if (t > 0){
      buildQuestion(questionIndex);
  } else {
      alert("Out of Time")
    }
 // }
}

function buildQuestion(quest){
  let fu = "";
  let question =  myQuestions[quest]["question"];
  let answers = myQuestions[quest]["answers"];
  let ans = myQuestions[quest]["ans"];
  let exp = myQuestions[quest]["explanation"];
  let q = document.createElement("p");
  q.textContent = question;
  quizContainer.appendChild(q);
  //str = JSON.stringify(answers);
  //console.log(str + Object.keys(answers).length);
  //newD.setAttribute(onchange,"something")
  let newF = document.createElement("form");
  newF.setAttribute("id","ansForm");
  console.log(answers);
 for (let [key, value] of Object.entries(answers)) {
    let newIn = document.createElement("input");
    newIn.type = "radio";
    fu="option-" + key; 
    newIn.id = fu;
    newIn.name = quest;
    newIn.value = key;
    let newLa =  document.createElement("label");
    newLa.for=fu;
    newLa.textContent = value;
    newF.appendChild(newIn);
    newF.appendChild(newLa);
  }
    quizContainer.appendChild(newF);
    var ansForm=document.querySelector("#ansForm");
    ans1 = document.querySelector('input[name="0"]:checked').value;
    ansForm.addEventListener("change", function(){
    console.log(ans1);  
    let formAnswer =  ansForm.value;
    
    })
  }

    /*
    checkans(ans,ansf) {
      //console.log("changed");
      questionIndex++;
      if(questionIndex===Object.keys(myQuestions).length){
        console.log("endgame");}
        else{
          buildQuestion(questionIndex);
        }
      }
    */
  



  function checkans(ans,formvalue){
    if (ans == formvalue){
      return;
      console.log("correct");
    } else {
      alert("wrong");
    }

  }


// Timer allowing 15 seconds per question
function startTimer(){
  //setting timer on the quiz
t = Object.keys(myQuestions).length * 15;
let a = setInterval(function() { 
      t--;
      timeRem.textContent = t;
      if(t === 0){clearInterval(a)}
       }, 1000);
      }



   

startButton.addEventListener("click",startQuiz) 