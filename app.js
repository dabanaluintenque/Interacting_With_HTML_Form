

function radioLabel(){

      let comp335 = document.getElementById('comp335').value;
        let math162 = document.getElementById('math162').value;
        let message = document.getElementById('saySome');
        let forms = document.getElementById('a');

        if(comp335){
            message.innerHTML='dd';

        }

        else if(math162){

            message.innerHTML = "non";
        }

}

function passwordCheck(){

    let studentEmail = document.getElementById('studentEmail').value;
    let studentPass = document.getElementById('studentPassword').value;
    let re_enterPass = document.getElementById('reEnterPassword').value;
    let info = document.getElementById('studentInfo');

    
    if(studentEmail==="" || studentPass==="" || re_enterPass===""){

        info.innerHTML="Don't leave an empty field."
    }

     else if(studentPass===re_enterPass){

        info.innerHTML="The student email is: "+ studentEmail;
    }

    else{

        info.innerHTML="password does not match."
    }
}

function dateOfBirth(){

    let birthday = document.getElementById('userBirthday').value;
    let birthdayinfo= document.getElementById('birthdayInfo');
    
    let dayOfBirth = birthdayinfo.innerHTML= 'Hey "user"  according to the date you have entered: ' + birthday; 
          
    
    return  dayOfBirth;
}

function searchWeb(){

    let myPage = document.getElementById("webPage").value;
    let info = document.getElementById('myWeb');

     const student ={

           firstName: 'Dabana',
           age: 23
     };


     if(myPage ===student.firstName){

         info.innerHTML= student.firstName +" has: "+student.age +"year";
     }

     else{

         info.innerHTML= "No student record found " +myPage;
     }
   
}

function UserPhoneNumber(){

   let phoneNumber = document.getElementById('number').value;

    document.getElementById('phoneNumber').innerHTML ="Your phone number is: " + phoneNumber;
}

function urlPage(){

    let urlId = document.getElementById('urlpage').value;

    let searchUrl = document.getElementById('searchUrl');

    
    return searchUrl.innerHTML='Your Homepage is: ' +urlId;
}


function uploadFile(){

    let hw = document.getElementById('hw').value;

    let upload = document.getElementById('upload');


    return upload.innerHTML = hw;
}

function checkMaxlength(){

    let studentname = document.getElementById('studentname').value;

    let id = document.getElementById('id').value;

    let check = document.getElementById('check');

   

     return check.innerHTML =" The student name is: " +studentname +"<br>" +
     " The student id is : "+ id;
      
  }

  function checkMin(){

   let dayOfBirth2 = document.getElementById('after').value;

   let minRange = document.getElementById('minRange');

   return minRange.innerHTML=" Your Day of birth is: " + dayOfBirth2;
      
  }

  function checkGrades(){

      let gradeList = document.getElementById('gradeList').value;

      let grade = document.getElementById('grade');

      
      if( gradeList<70){

          grade.innerHTML="you need to study more";

          grade.style.color="red";
      }
      else if( gradeList===70 || gradeList<80){

         grade.innerHTML="keep working";

         grade.style.color="blue";
          
       }

      else if(gradeList> 80){

          grade.innerHTML= "Great Job!"

          grade.style.color="green";
      }


    }

    function patternAttribute(){

        let passwordPattern = document.getElementById('passwordPattern').value;

        let checkpattern = document.getElementById('checkpattern');


        return checkpattern.innerHTML= "your new password is:  "+ passwordPattern;
    }

