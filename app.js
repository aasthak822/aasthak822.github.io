function myOnFunction() {
    alert("Welcome to Aastha Kumari's Assingnment 2 on Web Designing Concepts. Press OK to Visit the page");
  }

function as()
  {
  setTimeout("fun1()",5000);
  }
  function fun1()
  {
  var a =new 
  Array("red","darkblue","sky","yellow","blue","pink","green");
  if(count<=6)
  {
  document.bgColor=a[count++];
  setTimeout("fun1()",5000);
  }
  else
  {
  count=0;
  as();
  }

}

function setbackground()
{
window.setTimeout( "setbackground()", 5000); // 5000 milliseconds delay

var index = Math.round(Math.random() * 9);

var ColorValue = "FFFFFF"; // default color - white (index = 0)

if(index == 1)
ColorValue = "FFCCCC"; //peach
if(index == 2)
ColorValue = "CCAFFF"; //violet
if(index == 3)
ColorValue = "A6BEFF"; //lt blue
if(index == 4)
ColorValue = "99FFFF"; //cyan
if(index == 5)
ColorValue = "D5CCBB"; //tan
if(index == 6)
ColorValue = "99FF99"; //lt green
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FFCC99"; //lt orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey

document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}

function validate() {    
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;    
    var address = document.reg_form.address;    
    var gender = document.reg_form.gender;    
    var email = document.reg_form.email;    
    var mobile = document.reg_form.mobile;    
    var course = document.reg_form.course;    

    if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    if (lname.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    if (address.value.length <= 0) {    
        alert("Address is required");    
        address.focus();    
        return false;    
    }    
    if (gender.value.length <= 0) {    
        alert("Gender is required");    
        gender.focus();    
        return false;    
    }    
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    if (mobile.value.length <= 0) {    
        alert("Mobile number is required");    
        mobile.focus();    
        return false;    
    }    
    if (course.value == "select course") {    
        alert("Course is required");    
        course.focus();    
        return false;    
    }    
    return false;    
}


function boldText(){
    var target = document.getElementById("TextArea");
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bolder";
    }
}



function italicText(){
    var target = document.getElementById("TextArea");
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
}

function underlineText(){
    var target = document.getElementById("TextArea");
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }
}

function myFunction() {
    window.location.href="aasthamain.html";  
  }