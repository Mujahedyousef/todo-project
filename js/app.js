"use strict";
let yourName=prompt("Please, Enter your name.");
let yourGender=prompt("Please, Enter your gender (male/female).");
let yourAge=prompt("Please, Enter your age.");

let valueYourAge= ( yourAge<=0)? alert("please don't worry I can play the song baby shark for you to go to sleep"):
                 ( yourAge>20)? alert("please you can go to the advance course.."):
                 alert("please you can go to the basic course..") ;

                
                
                
let wlecomeMessage=confirm("Hi User if you want show welcome message");

(wlecomeMessage == true && yourGender.toLowerCase()==="male")? alert(`We are so glad to visit, enjoy it Mr ${yourName}`):
                    (wlecomeMessage ==true && yourGender.toLowerCase()==="female")? alert(`We are so glad to visit, enjoy it Mrs ${yourName}`):
                    ((wlecomeMessage ==true) && (yourGender.toLowerCase()!=="male")  && (yourGender.toLowerCase()!=="female") )?alert(`You are welcome Mr/Mrs`):
                    "";

  //-----------------------------------------------solve tasks 6----------------------------------------------------------------------------------------------------------------------------
  let array=[];
  let moreQuestion=confirm("Please, can you answer on some questiones? \n (yes/No)  ");
  let answerQuestionOne=prompt("Do you want to participate in the course with us?");
  let answerQuestionTwo=prompt("Do you have an empty hour a day to learn something new?");
  let answerQuestionThree=prompt("Do you have a credit card to pay the subscription?");
  
  //====================way 1 in solve tasks========================
  //  (answerQuestionOne.toLowerCase ()==="yes")? array.push("yes"):
  // (answerQuestionOne.toLowerCase ()==="no")? array.push("no"):
  //   array.push("invalid") ;
  
  //   (answerQuestionTwo.toLowerCase ()==="yes")? array.push("yes"):
  // (answerQuestionTwo.toLowerCase ()==="no")?array.push("no"):
  //   array.push("invalid") ;
  
  //   (answerQuestionThree.toLowerCase ()==="yes")? array.push("yes"):
  // (answerQuestionThree.toLowerCase ()==="no")?array.push("no"):
  //   array.push("invalid") ;
   
  // console.log(array);
  //==============way 2 in solve tasks=================================
  function checkAnswerQuestionOne(answerUserQ_1){
      if(answerUserQ_1.toLowerCase ()==="yes"){
          return array.push("yes")
  }else if(answerUserQ_1.toLowerCase ()==="no"){
      array.push("no")
  }else{
      return array.push("invalid")
  }}
  checkAnswerQuestionOne(answerQuestionOne);
  //=========================================================
  function checkAnswerQuestionTwo(answerUserQ_2){
      if(answerUserQ_2.toLowerCase ()==="yes"){
          return array.push("yes")
  }else if(answerUserQ_2.toLowerCase ()==="no"){
      array.push("no")
  }else{
      return array.push("invalid")
  }}
  checkAnswerQuestionTwo(answerQuestionTwo);
  //==========================================================
  function checkAnswerQuestionThree(answerUserQ_3){
      if(answerUserQ_3.toLowerCase ()==="yes"){
          return array.push("yes")
  }else if(answerUserQ_3.toLowerCase ()==="no"){
      array.push("no")
  }else{
      return array.push("invalid")
  }}
  checkAnswerQuestionThree(answerQuestionThree);
  //==========================================================
  console.log(array);
  
  for(let i=0;i<array.length;i++ ){
      console.log(array[i]);
  }
  
















