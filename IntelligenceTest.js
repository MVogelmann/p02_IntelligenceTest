//Author: Matthaeus Vogelmann

function CheckAnswer1()
{
  var Answer = document.getElementById('Answer').value;
  setCookie("Answer1", 0, 1);
  if (isNaN(Answer))
  {
    //alert("Enter answer as a number");
    document.getElementById("AnswerMessage").innerHTML="Please enter only Numbers 0-9!";
  }
  else if (Answer == 28)
  {
    document.getElementById("AnswerMessage").innerHTML="CORRECT!! X/Y = Z";
    setCookie("Answer1", 1, 1);
  }
  else {
    document.getElementById("AnswerMessage").innerHTML="Answer is not correct. Please try again!";
  }
  //console.log("function 1 called");
}

function CheckAnswer2()
{
  var Answer = document.getElementById('Answer').value;
  setCookie("Answer2", 0, 1);
  if (isNaN(Answer))
  {
    //alert("Enter answer as a number");
    document.getElementById("AnswerMessage").innerHTML="Please enter only Numbers 0-9!";
  }
  else if (Answer == 16)
  {
    document.getElementById("AnswerMessage").innerHTML="CORRECT!! X^Y = Z";
    setCookie("Answer2", 1, 1);
  }
  else {
    document.getElementById("AnswerMessage").innerHTML="Answer is not correct. Please try again!";
  }
}

function CheckAnswer3()
{
  var Answer = document.getElementById('Answer').value;
  setCookie("Answer3", 0, 1);
  if (isNaN(Answer))
  {
    //alert("Enter answer as a number");
    document.getElementById("AnswerMessage").innerHTML="Please enter only Numbers 0-9!";
  }
  else if (Answer == 26)
  {
    document.getElementById("AnswerMessage").innerHTML="CORRECT!! X, Y = (X-Y)(X+Y)";
    setCookie("Answer3", 1, 1);
  }
  else {
    document.getElementById("AnswerMessage").innerHTML="Answer is not correct. Please try again!";
  }
}

function Result()
{
  var result1 = Number(getCookie("Answer1"));
  var result2 = Number(getCookie("Answer2"));
  var result3 = Number(getCookie("Answer3"));
  var total = result3 + result2 + result1;
  document.getElementById("total").innerHTML = total;
  switch (total) {
    case 0:
            document.getElementById("rating").innerHTML = "Well, it was worth a try!"
            break;
    case 1:
            document.getElementById("rating").innerHTML = "Every beginning is difficult!"
            break;
    case 2:
            document.getElementById("rating").innerHTML = "Well done!"
            break;
    case 3:
            document.getElementById("rating").innerHTML = "Hey Einstein!"
            break;

    default:
            break;
  }
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
