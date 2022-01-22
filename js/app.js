"use strict";
let yourName=prompt("Please, Enter your name.");
let yourGender=prompt("Please, Enter your gender (male/female).");
let yourAge=prompt("Please, Enter your age.");

let valueYourAge= ( yourAge<=0)? alert("please don't worry I can play the song baby shark for you to go to sleep"):
                 ( yourAge>20)? alert("please you can go to the advance course.."):
                 alert("please you can go to the basic course..") ;

               
                
                
let wlecomeMessage=confirm("Hi User if you want show welcome message");

 (wlecomeMessage == true && yourGender.toLowerCase()=="male")? alert(`We are so glad to visit, enjoy it Mr ${yourName}`):
                    (wlecomeMessage ==true && yourGender.toLowerCase()=="female")? alert(`We are so glad to visit, enjoy it  \n Mrs ${yourName}`):
                    (wlecomeMessage ==true&&yourGender.toLowerCase()!=="male"&&yourGender.toLowerCase()!=="female" )?alert("You are welcome Mr/Mrs"):
                    "";

                
