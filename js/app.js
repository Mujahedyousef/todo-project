"use strict";
let yourName=prompt("Please, Enter your name.");
let yourGender=prompt("Please, Enter your gender (male/femal).");
let yourAge=prompt("Please, Enter your age.");

let valueYourAge= ( yourAge<=0)? alert("please don't worry I can play the song baby shark for you to go to sleep"):
                 ( yourAge>20)? alert("please you can go to the advance course.."):
                 alert("please you can go to the basic course..") ;

                (valueYourAge) ;   
                
                
let wlecomeMessage=confirm("Hi User if you want show welcome message");
(wlecomeMessage);
let okWelcomeMassege=(wlecomeMessage == true && yourGender.toLocaleLowerCase=="male")? alert(`We are so glad to visit, enjoy it Mr ${yourName}`):
                    (wlecomeMessage ==true && yourGender.toLocaleLowerCase=="female")? alert(`We are so glad to visit, enjoy it  \n Mrs ${yourName}`):
                    (wlecomeMessage ==true&&yourGender.toLocaleLowerCase!="male"&&yourGender.toLocaleLowerCase!="female" )?alert("You are welcome Mr/Mrs"):
                    "";

                
