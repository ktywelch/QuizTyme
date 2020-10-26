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
      a: 'document.getElement("geek").innerText=m a Geek"',
      b: '" umenet.ge" + tElementById("gee +k" ") " +.innerHTML="I am a Geek"',
      c: 'document.getId(“geek”)=”I am a Geek”',
      d: 'document.getElementById(“geek”).innerHTML=I am a Geek'
      },
    ans: 'd',
    explanation: 'The correct syntax to access the element is document.getElementById("peek"). Here we want to access the content written under that id, so we used .innerHTML to specify that and finally we replaced the content with whatever is written inside the quotes.'
    },
 /*   { 
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
    </script>
    ----------------`,
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
    </script>
    ----------------`, 
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
    var a = "Testing is fun"; 
    var result = a.substring(4, 5); 
    document.write(result);       
    </script>
    ------------------`, 
    answers: {
      a: 'ng',
      b: 'in',
      c: 'i',
      d: 'n'
      },
    ans: 'c',
    explanation: 'The substring command selects the substring starting from 4 to 5, excluding the 5th index. The indexing starts from 0. So, the output here is just “i” rather than "in".'
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
    </script>
    ------------------`, 
    answers: {
      a: '“30”',
      b: '30',
      c: '5*6',
      d: '“5*6”'
      },
    ans: 'b',
    explanation: 'eval command will evaluate the operation. Here it is 5*6=30.'
    } */
  ]


//=== Setting up the common variables
const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitButton = document.querySelector('#submit');
const startButton = document.querySelector('#startQuiz');
const questP = document.querySelector('#question');
const ansRes = document.querySelector('#ansRes')
const timeRem = document.querySelector('#timerem');
const highS = document.querySelector('#highScore');
var highscore = [], highData =[];
var currScore = 0,lastHigh = 0;
var questionIndex = 0, t = 0, a=0;
// This is where the quiz starts
function startQuiz(){
//start timer
startTimer();
//If the highscore is there add that too
getHighScore();
//hide the button
startButton.style.display = "none";
//ask the first question
buildQuestion(questionIndex);
}

//this function builds a form that builds the questions and starts listeners
function buildQuestion(quest){
  let fu = "";
  let question =  myQuestions[quest]["question"];
  let answers = myQuestions[quest]["answers"];
  let ans = myQuestions[quest]["ans"];
  let explain = myQuestions[quest]["explanation"];
  questP.innerText = question;
  //
  let newF = document.createElement("form");
  newF.setAttribute("id","ansForm");
  newF.setAttribute("class","btn-group-vertical")
 for (let [key, value] of Object.entries(answers)) {
    let newIn = document.createElement("input");
    newIn.type = "radio";
    fu="option-" + key; 
    newIn.id = fu;
    newIn.name = quest;
    newIn.value = key;
    newIn.textContent = value;
    let newLa = document.createElement("label");
    newLa.setAttribute("for",fu);
    newLa.innerText = value;
    newLa.appendChild(newIn);
    newF.appendChild(newIn);
    newF.appendChild(newLa);
  }
    quizContainer.appendChild(newF);
    var ansForm=document.querySelector("#ansForm");
    // add event listener for the form created
    ansForm.addEventListener("change", function(){
    // c finds which radio button is checked  
    var c;
    for (c of ansForm.children) {
     if (c.checked) {
       let cAns = c.getAttribute("value") 
       checkans(ans,cAns,explain);      
     }
    }
    
    })
  }

  //Checks the answers if correct adds to score - incorrect subtracts 5 from timer and gives correct answet
    function checkans(ans,ansf,explain) {
      if(ans == ansf){
        //add to score
        currScore++;
        ansRes.innerText = "-----------\nCorrect!";
        setTimeout(() => {nextQuestion(); }, 1000);
      } else {
        ansRes.innerText = "-----------\nIncorrect \n Correct answer is " + ans + "\n" + explain + "\n Taking 5 seconds from clock"
        // takes 5 seconds from clock
        t=t-5;
        setTimeout(() => { nextQuestion(); }, 1500); 
      }
    }
  // This one increases the question index and calls the buildquestion so the next question is asked
      function nextQuestion(){
      let aForm = document.querySelector('#ansForm'); 
      // Remove the form
      aForm.remove();
      // Clean up text from answer
      ansRes.innerText = "";
      questionIndex++;
      if(questionIndex === Object.keys(myQuestions).length || t < 0){
        aForm.remove();
        highScores();
        }
        else{
          buildQuestion(questionIndex);
        }
      }
 //This is called when the quiz over and populates the localstorage with the scores and 
function highScores(){
    newHS=new Object(), initials ="",state="";
    var date = new Date().toLocaleDateString();
    stopTimer();
    // Already got the high score so if it was no there create   
    if (highData === undefined || highData.length == 0) {
       initals = prompt("First run \nEnter your initials");
       state="new";
      } else if (lastHigh > currScore){
      initals = prompt("Sorry not a new high score\nEnter your initials");
      state="normal";
      } else {
        initals = prompt("Congratulation you have a new high score\nPlease enter your initials")
        state="high";
       }
       setScoreObj(initals,state);
  
       questP.setAttribute("class","text-center bold");
       questP.setAttribute("style","text-align: center; font-size: 15px;");
       questP.innerText = "Previous Scores";
       let newF = document.createElement("div");
       newF.setAttribute("class","card border border-danger align-items-center");
         
      data=JSON.parse(localStorage.getItem('highscore')); 
      // creating & populating a table of the current scores  
      var tbl = document.createElement("table");
      for (var i = 0; i < data.length; i++) {
          var row = document.createElement("tr");
          row.setAttribute = ("class","text-center ")
          var cell = document.createElement("td");
          var cellText = document.createTextNode(data[i]["initals"]+ ": " +data[i]["score"]);
          cell.appendChild(cellText);
          row.appendChild(cell);
          tbl.appendChild(row);
      }
      newF.appendChild(tbl);
      
      //buttons to clear the old scores and start quiz again
       let but1 = document.createElement("button");
       but1.setAttribute("onclick",'localStorage.clear();window.location.reload()');
       but1.innerText ="Clear Scores \nStart New Quiz";
       newF.appendChild(but1);
       let but2 = document.createElement("button");
       but2.setAttribute("onclick","window.location.reload()");
       but2.innerText ="Start Quiz";
       newF.appendChild(but2);
       quizContainer.appendChild(newF);
       data=JSON.parse(localStorage.getItem('highscore'));
       
      }
    

// This array will store the object in the array where the first element will always be the latest high score
function setScoreObj(initals,state){
  var details={}, wth=[];
  var date = new Date().toLocaleDateString();
  //set key value pairs 
  details["date"] = date;
  details["score"] = currScore;
  details["initals"] = initals;
  wth.push(details);
  console.log(JSON.stringify(wth));
  if (state === "new"){
    console.log(details)
    localStorage.setItem('highscore', JSON.stringify(wth));
  } else if (state == 'high'){
    //if new high going to use unshift to keep as first value
    let peep = JSON.parse(localStorage.getItem('highscore'));
    peep.unshift(...wth);
    localStorage.setItem('highscore', JSON.stringify(peep));
  } else {
    let peep = JSON.parse(localStorage.getItem('highscore'));
    //if not use push to put at the end
    peep.push(...wth);
    localStorage.setItem('highscore', JSON.stringify(peep));
  }
  return;
}


// Timer allowing 15 seconds per question
function startTimer(){
  //setting timer on the quiz
t = Object.keys(myQuestions).length * 15;
a = setInterval(function() { 
      t--;
      timeRem.textContent = t;
      if(t === 0){clearInterval(a)}
       }, 1000);
}

function stopTimer() {
  clearInterval(a);
}

function getHighScore(){
  //Get the High Score for the start
  if (localStorage.getItem('highscore')){
    highData=JSON.parse(localStorage.getItem('highscore'));
    lastHigh = highData[0]["score"]; 
    //because of how the data is stored the high score will always be the first element
    highS.textContent = " " + highData[0]["initals"] + " score of " + lastHigh;
}
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

startButton.addEventListener("click",startQuiz) 