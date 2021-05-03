//creating own ecard
function create(){
  document.getElementById("logo2").style.display = "none";
  document.getElementById("initial").style.display = "none";
  document.getElementById("creds2").style.display = "none";
  document.getElementById("ecard5").style.display = "none";
  document.getElementById("input2").style.display = "none";
  document.getElementById("input5").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("button5").style.display = "none";
  document.getElementById("ecard6").style.display = "none";
  document.getElementById("input6").style.display = "none";
  document.getElementById("button6").style.display = "none";
  document.getElementById("ecard3").style.display = "none";
  document.getElementById("input3").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("ecard4").style.display = "none";
  document.getElementById("input4").style.display = "none";
  document.getElementById("button4").style.display = "none";
  document.getElementById("black").style.display = "none";
  document.getElementById("white").style.display = "none";
  document.getElementById("input1").style.display = "none";
  document.getElementById("button1").style.display = "none";
  document.getElementById("confirm1").style.display = "none";
  document.getElementById("confirm2").style.display = "none";
  document.getElementById("confirm3").style.display = "none";
  document.getElementById("confirm4").style.display = "none";
  document.getElementById("confirm5").style.display = "none";
  document.getElementById("confirm6").style.display = "none";
  document.getElementById("box").style.backgroundImage = "none";
  document.getElementById("box").style.opacity = "0.07";
  document.getElementById("box").style.border = "1px dotted white";
  document.getElementById("box").style.borderWidth = "thick";
  document.getElementById("boxtext").style.display = "flex";
  document.getElementById("option2").style.display = "none";
  document.getElementById("option1").style.display = "block";
  document.getElementById("ecard").style.top = "-500px";
}

function predefined(){
  document.getElementById("option1").style.display = "none";
  document.getElementById("option2").style.display = "block";
  document.getElementById("ecard").style.top = "-580px";
}

function landscape(){
  document.getElementById("box").style.display = "block";
  document.getElementById("box").style.width = "600px";
  document.getElementById("box").style.height = "450px";
  document.getElementById("box").style.left = "27.5%";
  document.getElementById("box").style.opacity = "1.0";
  document.getElementById("box").style.border = "none";
  document.getElementById("boxtext").style.display = "none";
  document.getElementById("box").style.backgroundColor = "white";
  document.getElementById("box").style.position = "fixed";
  document.getElementById("boxtext").style.display = "none";
}

function portrait(){
  document.getElementById("box").style.display = "block";
  document.getElementById("box").style.width = "450px";
  document.getElementById("box").style.height = "600px";
  document.getElementById("box").style.opacity = "1.0";
  document.getElementById("box").style.left = "33.5%";
  document.getElementById("box").style.border = "none";
  document.getElementById("boxtext").style.display = "none";
  document.getElementById("box").style.backgroundColor = "white";
  document.getElementById("box").style.position = "absolute";
  document.getElementById("boxtext").style.display = "none";
}

function informallayout(){
  document.getElementById("ecard4").style.display = "none";
  document.getElementById("input4").style.display = "none";
  document.getElementById("button4").style.display = "none";
  document.getElementById("ecard5").style.display = "none";
  document.getElementById("input5").style.display = "none";
  document.getElementById("button5").style.display = "none";
  document.getElementById("ecard6").style.display = "none";
  document.getElementById("input6").style.display = "none";
  document.getElementById("button6").style.display = "none";
  document.getElementById("groom").style.border = "none";
  document.getElementById("bride").style.border = "none";
  document.getElementById("ecard3").style.display = "block";
  document.getElementById("input3").style.display = "block";
  document.getElementById("button3").style.display = "block";
  document.getElementById("receiver").style.border = "2px solid black";
  document.getElementById("p2").style.border = "2px solid black";
  document.getElementById("sender").style.border = "2px solid black";
  document.getElementById("confirm3").style.display = "block";
}

function formallayout1(){
  document.getElementById("ecard3").style.display = "none";
  document.getElementById("input3").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("ecard6").style.display = "none";
  document.getElementById("input6").style.display = "none";
  document.getElementById("button6").style.display = "none";
  document.getElementById("groom").style.border = "none";
  document.getElementById("bride").style.border = "none";
  document.getElementById("ecard5").style.display = "block";
  document.getElementById("input5").style.display = "block";
  document.getElementById("button5").style.display = "block";
  document.getElementById("event").style.border = "2px solid black";
  document.getElementById("confirm5").style.display = "block";
}

function formallayout2(){
  document.getElementById("ecard3").style.display = "none";
  document.getElementById("input3").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("ecard5").style.display = "none";
  document.getElementById("input5").style.display = "none";
  document.getElementById("button5").style.display = "none";
  document.getElementById("ecard6").style.display = "block";
  document.getElementById("input6").style.display = "block";
  document.getElementById("button6").style.display = "block";
  document.getElementById("groom").style.border = "2px solid black";
  document.getElementById("bride").style.border = "2px solid black";
  document.getElementById("confirm6").style.display = "block";
}

//favourite functions sketch1
var fav1;
fav1 = 0;
function favMe1() {
  if(fav1 == 0){
    document.getElementById("favourite1").style.backgroundImage = "url('Media/Icons/favourite.png')";
    document.getElementById("favourite1").style.backgroundSize = "30px";
    fav1 = 1;
  }
  else if(fav1 == 1){
    document.getElementById("favourite1").style.backgroundImage = "none";
    document.getElementById("favourite1").style.backgroundSize = "30px";
    fav1 = 0;
  }
}

//favourite functions sketch2
var fav2;
fav2 = 0;
function favMe2() {
  if(fav2 == 0){
    document.getElementById("favourite2").style.backgroundImage = "url('Media/Icons/favourite.png')";
    document.getElementById("favourite2").style.backgroundSize = "30px";
    fav2 = 1;
  }
  else if(fav2 == 1){
    document.getElementById("favourite2").style.backgroundImage = "none";
    document.getElementById("favourite2").style.backgroundSize = "30px";
    fav2 = 0;
  }
}

//favourite functions sketch3
var fav3;
fav3 = 0;
function favMe3() {
  if(fav3 == 0){
    document.getElementById("favourite3").style.backgroundImage = "url('Media/Icons/favourite.png')";
    document.getElementById("favourite3").style.backgroundSize = "30px";
    fav3 = 1;
  }
  else if(fav3 == 1){
    document.getElementById("favourite3").style.backgroundImage = "none";
    document.getElementById("favourite3").style.backgroundSize = "30px";
    fav3 = 0;
  }
}

//favourite functions sketch4
var fav4;
fav4 = 0;
function favMe4() {
  if(fav4 == 0){
    document.getElementById("favourite4").style.backgroundImage = "url('Media/Icons/favourite.png')";
    document.getElementById("favourite4").style.backgroundSize = "30px";
    fav4 = 1;
  }
  else if(fav4 == 1){
    document.getElementById("favourite4").style.backgroundImage = "none";
    document.getElementById("favourite4").style.backgroundSize = "30px";
    fav4 = 0;
  }
}

//favourite functions sketch5
var fav5;
fav5 = 0;
function favMe5() {
  if(fav5 == 0){
    document.getElementById("favourite5").style.backgroundImage = "url('Media/Icons/favourite.png')";
    document.getElementById("favourite5").style.backgroundSize = "30px";
    fav5 = 1;
  }
  else if(fav5 == 1){
    document.getElementById("favourite5").style.backgroundImage = "none";
    document.getElementById("favourite5").style.backgroundSize = "30px";
    fav5 = 0;
  }
}

//favourite functions sketch6
var fav6;
fav6 = 0;
function favMe6() {
  if(fav6 == 0){
    document.getElementById("favourite6").style.backgroundImage = "url('Media/Icons/favourite.png')";
    document.getElementById("favourite6").style.backgroundSize = "30px";
    fav6 = 1;
  }
  else if(fav6 == 1){
    document.getElementById("favourite6").style.backgroundImage = "none";
    document.getElementById("favourite6").style.backgroundSize = "30px";
    fav6 = 0;
  }
}

//shows ecard1
function myBox1(){
  document.getElementById("logo2").style.display = "none";
  document.getElementById("initial").style.display = "none";
  document.getElementById("creds2").style.display = "none";
  document.getElementById("ecard5").style.display = "none";
  document.getElementById("input2").style.display = "none";
  document.getElementById("input5").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("button5").style.display = "none";
  document.getElementById("ecard6").style.display = "none";
  document.getElementById("input6").style.display = "none";
  document.getElementById("button6").style.display = "none";
  document.getElementById("ecard3").style.display = "none";
  document.getElementById("input3").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("ecard4").style.display = "none";
  document.getElementById("input4").style.display = "none";
  document.getElementById("button4").style.display = "none";
  document.getElementById("boxtext").style.display = "none";
  document.getElementById("box").style.border = "none";
  document.getElementById("confirm2").style.display = "none";
  document.getElementById("confirm3").style.display = "none";
  document.getElementById("confirm4").style.display = "none";
  document.getElementById("confirm5").style.display = "none";
  document.getElementById("confirm6").style.display = "none";
  document.getElementById("box").style.backgroundImage = "url('Media/E-Cards/corporate1.jpg')";
  document.getElementById("box").style.display = "block";
  document.getElementById("box").style.position = "fixed";
  document.getElementById("box").style.opacity = "1.0";
  document.getElementById("box").style.width = "600px";
  document.getElementById("box").style.height = "450px";
  document.getElementById("box").style.left = "27.5%";
  document.getElementById("black").style.display = "block";
  document.getElementById("white").style.display = "flex";
  document.getElementById("input1").style.display = "block";
  document.getElementById("button1").style.display = "block";
}

//shows ecard2
function myBox2(){
  document.getElementById("black").style.display = "none";
  document.getElementById("white").style.display = "none";
  document.getElementById("input1").style.display = "none";
  document.getElementById("ecard5").style.display = "none";
  document.getElementById("input5").style.display = "none";
  document.getElementById("button1").style.display = "none";
  document.getElementById("button5").style.display = "none";
  document.getElementById("ecard6").style.display = "none";
  document.getElementById("input6").style.display = "none";
  document.getElementById("button6").style.display = "none";
  document.getElementById("ecard3").style.display = "none";
  document.getElementById("input3").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("ecard4").style.display = "none";
  document.getElementById("input4").style.display = "none";
  document.getElementById("button4").style.display = "none";
  document.getElementById("boxtext").style.display = "none";
  document.getElementById("box").style.border = "none";
  document.getElementById("confirm1").style.display = "none";
  document.getElementById("confirm3").style.display = "none";
  document.getElementById("confirm4").style.display = "none";
  document.getElementById("confirm5").style.display = "none";
  document.getElementById("confirm6").style.display = "none";
  document.getElementById("box").style.backgroundImage = "url('Media/E-Cards/corporate2.jpg')";
  document.getElementById("box").style.display = "block";
  document.getElementById("box").style.position = "fixed";
  document.getElementById("box").style.opacity = "1.0";
  document.getElementById("box").style.width = "600px";
  document.getElementById("box").style.height = "450px";
  document.getElementById("box").style.left = "27.5%";
  document.getElementById("logo2").style.display = "flex";
  document.getElementById("initial").style.display = "block";
  document.getElementById("creds2").style.display = "block";
  document.getElementById("input2").style.display = "block";
  document.getElementById("button2").style.display = "block";
  document.getElementById("confirm1").style.display = "block";
}

//shows ecard3
function myBox3(){
  document.getElementById("black").style.display = "none";
  document.getElementById("white").style.display = "none";
  document.getElementById("input1").style.display = "none";
  document.getElementById("box").style.display = "none";
  document.getElementById("logo2").style.display = "none";
  document.getElementById("initial").style.display = "none";
  document.getElementById("creds2").style.display = "none";
  document.getElementById("input2").style.display = "none";
  document.getElementById("button1").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("ecard6").style.display = "none";
  document.getElementById("input6").style.display = "none";
  document.getElementById("button6").style.display = "none";
  document.getElementById("ecard5").style.display = "none";
  document.getElementById("input5").style.display = "none";
  document.getElementById("button5").style.display = "none";
  document.getElementById("ecard4").style.display = "none";
  document.getElementById("input4").style.display = "none";
  document.getElementById("button4").style.display = "none";
  document.getElementById("boxtext").style.display = "none";
  document.getElementById("box").style.border = "none";
  document.getElementById("confirm1").style.display = "none";
  document.getElementById("confirm2").style.display = "none";
  document.getElementById("confirm4").style.display = "none";
  document.getElementById("confirm5").style.display = "none";
  document.getElementById("confirm6").style.display = "none";
  document.getElementById("box").style.backgroundImage = "url('Media/E-Cards/informal1back.jpg')";
  document.getElementById("box").style.display = "block";
  document.getElementById("box").style.position = "fixed";
  document.getElementById("box").style.opacity = "1.0";
  document.getElementById("box").style.width = "600px";
  document.getElementById("box").style.height = "450px";
  document.getElementById("box").style.left = "27.5%";
  document.getElementById("ecard3").style.display = "block";
  document.getElementById("input3").style.display = "block";
  document.getElementById("button3").style.display = "block";
  document.getElementById("confirm1").style.display = "block";
}

//shows ecard4
function myBox4(){
  document.getElementById("black").style.display = "none";
  document.getElementById("white").style.display = "none";
  document.getElementById("input1").style.display = "none";
  document.getElementById("box").style.display = "none";
  document.getElementById("logo2").style.display = "none";
  document.getElementById("initial").style.display = "none";
  document.getElementById("creds2").style.display = "none";
  document.getElementById("input2").style.display = "none";
  document.getElementById("button1").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("ecard6").style.display = "none";
  document.getElementById("input6").style.display = "none";
  document.getElementById("button6").style.display = "none";
  document.getElementById("ecard5").style.display = "none";
  document.getElementById("input5").style.display = "none";
  document.getElementById("button5").style.display = "none";
  document.getElementById("ecard3").style.display = "none";
  document.getElementById("input3").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("boxtext").style.display = "none";
  document.getElementById("box").style.border = "none";
  document.getElementById("confirm1").style.display = "none";
  document.getElementById("confirm2").style.display = "none";
  document.getElementById("confirm3").style.display = "none";
  document.getElementById("confirm5").style.display = "none";
  document.getElementById("confirm6").style.display = "none";
  document.getElementById("box").style.backgroundImage = "url('Media/E-Cards/informal2back.jpg')";
  document.getElementById("box").style.display = "block";
  document.getElementById("box").style.position = "fixed";
  document.getElementById("box").style.opacity = "1.0";
  document.getElementById("box").style.width = "600px";
  document.getElementById("box").style.height = "450px";
  document.getElementById("box").style.left = "27.5%";
  document.getElementById("ecard4").style.display = "block";
  document.getElementById("input4").style.display = "block";
  document.getElementById("button4").style.display = "block";
  document.getElementById("confirm4").style.display = "block";
}

//shows ecard5
function myBox5(){
  document.getElementById("black").style.display = "none";
  document.getElementById("white").style.display = "none";
  document.getElementById("input1").style.display = "none";
  document.getElementById("box").style.display = "none";
  document.getElementById("logo2").style.display = "none";
  document.getElementById("initial").style.display = "none";
  document.getElementById("creds2").style.display = "none";
  document.getElementById("input2").style.display = "none";
  document.getElementById("button1").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("ecard6").style.display = "none";
  document.getElementById("input6").style.display = "none";
  document.getElementById("button6").style.display = "none";
  document.getElementById("ecard3").style.display = "none";
  document.getElementById("input3").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("ecard4").style.display = "none";
  document.getElementById("input4").style.display = "none";
  document.getElementById("button4").style.display = "none";
  document.getElementById("boxtext").style.display = "none";
  document.getElementById("box").style.border = "none";
  document.getElementById("confirm1").style.display = "none";
  document.getElementById("confirm2").style.display = "none";
  document.getElementById("confirm3").style.display = "none";
  document.getElementById("confirm4").style.display = "none";
  document.getElementById("confirm6").style.display = "none";
  document.getElementById("box").style.backgroundImage = "url('Media/E-Cards/formal1.jpg')";
  document.getElementById("box").style.display = "block";
  document.getElementById("box").style.position = "absolute";
  document.getElementById("box").style.opacity = "1.0";
  document.getElementById("box").style.width = "450px";
  document.getElementById("box").style.height = "600px";
  document.getElementById("box").style.left = "33.5%";
  document.getElementById("ecard5").style.display = "block";
  document.getElementById("input5").style.display = "block";
  document.getElementById("button5").style.display = "block";
  document.getElementById("confirm5").style.display = "block";
}

//shows ecard6
function myBox6(){
  document.getElementById("black").style.display = "none";
  document.getElementById("white").style.display = "none";
  document.getElementById("input1").style.display = "none";
  document.getElementById("box").style.display = "none";
  document.getElementById("logo2").style.display = "none";
  document.getElementById("initial").style.display = "none";
  document.getElementById("creds2").style.display = "none";
  document.getElementById("input2").style.display = "none";
  document.getElementById("button1").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("ecard5").style.display = "none";
  document.getElementById("input5").style.display = "none";
  document.getElementById("button5").style.display = "none";
  document.getElementById("ecard3").style.display = "none";
  document.getElementById("input3").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("ecard4").style.display = "none";
  document.getElementById("input4").style.display = "none";
  document.getElementById("button4").style.display = "none";
  document.getElementById("boxtext").style.display = "none";
  document.getElementById("box").style.border = "none";
  document.getElementById("confirm1").style.display = "none";
  document.getElementById("confirm2").style.display = "none";
  document.getElementById("confirm3").style.display = "none";
  document.getElementById("confirm4").style.display = "none";
  document.getElementById("confirm5").style.display = "none";
  document.getElementById("box").style.backgroundImage = "url('Media/E-Cards/formal2.jpg')";
  document.getElementById("box").style.display = "block";
  document.getElementById("box").style.position = "absolute";
  document.getElementById("box").style.opacity = "1.0";
  document.getElementById("box").style.width = "450px";
  document.getElementById("box").style.height = "600px";
  document.getElementById("box").style.left = "33.5%";
  document.getElementById("ecard6").style.display = "block";
  document.getElementById("input6").style.display = "block";
  document.getElementById("button6").style.display = "block";
  document.getElementById("confirm6").style.display = "block";
}

//hides and shows cards depending on themes

function showall(){
  document.getElementById("sketch1").style.display = "block";
  document.getElementById("sketch2").style.display = "block";
  document.getElementById("sketch3").style.display = "block";
  document.getElementById("sketch4").style.display = "block";
  document.getElementById("sketch5").style.display = "block";
  document.getElementById("sketch6").style.display = "block";
  document.getElementById("favourite1").style.display = "block";
  document.getElementById("favourite2").style.display = "block";
  document.getElementById("favourite3").style.display = "block";
  document.getElementById("favourite4").style.display = "block";
  document.getElementById("favourite5").style.display = "block";
  document.getElementById("favourite6").style.display = "block";
}

function corporate(){
  document.getElementById("sketch1").style.display = "block";
  document.getElementById("sketch2").style.display = "block";
  document.getElementById("sketch3").style.display = "none";
  document.getElementById("sketch4").style.display = "none";
  document.getElementById("sketch5").style.display = "none";
  document.getElementById("sketch6").style.display = "none";
  document.getElementById("favourite1").style.display = "block";
  document.getElementById("favourite2").style.display = "block";
  document.getElementById("favourite3").style.display = "none";
  document.getElementById("favourite4").style.display = "none";
  document.getElementById("favourite5").style.display = "none";
  document.getElementById("favourite6").style.display = "none";
}

function informal(){
  document.getElementById("sketch1").style.display = "none";
  document.getElementById("sketch2").style.display = "none";
  document.getElementById("sketch3").style.display = "block";
  document.getElementById("sketch4").style.display = "block";
  document.getElementById("sketch5").style.display = "none";
  document.getElementById("sketch6").style.display = "none";
  document.getElementById("favourite3").style.display = "block";
  document.getElementById("favourite4").style.display = "block";
  document.getElementById("favourite1").style.display = "none";
  document.getElementById("favourite2").style.display = "none";
  document.getElementById("favourite5").style.display = "none";
  document.getElementById("favourite6").style.display = "none";
}

function formal(){
  document.getElementById("sketch1").style.display = "none";
  document.getElementById("sketch2").style.display = "none";
  document.getElementById("sketch3").style.display = "none";
  document.getElementById("sketch4").style.display = "none";
  document.getElementById("sketch5").style.display = "block";
  document.getElementById("sketch6").style.display = "block";
  document.getElementById("favourite5").style.display = "block";
  document.getElementById("favourite6").style.display = "block";
  document.getElementById("favourite1").style.display = "none";
  document.getElementById("favourite2").style.display = "none";
  document.getElementById("favourite4").style.display = "none";
  document.getElementById("favourite3").style.display = "none";
}

//drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop1(ev) {
  ev.preventDefault();
}

//favourite or unfavourite
function favourite(){
  if( fav1 == 1){
    document.getElementById("sketch1").style.display = "block";
    document.getElementById("favourite1").style.display = "block";
  }else{
    document.getElementById("sketch1").style.display = "none";
    document.getElementById("favourite1").style.display = "none";
  }

  if( fav2 == 1){
    document.getElementById("sketch2").style.display = "block";
    document.getElementById("favourite2").style.display = "block";
  }else{
    document.getElementById("sketch2").style.display = "none";
    document.getElementById("favourite2").style.display = "none"
  }

  if( fav3 == 1){
    document.getElementById("sketch3").style.display = "block";
    document.getElementById("favourite3").style.display = "block";
  }else{
    document.getElementById("sketch3").style.display = "none";
    document.getElementById("favourite3").style.display = "none";
  }

  if( fav4 == 1){
    document.getElementById("sketch4").style.display = "block";
    document.getElementById("favourite4").style.display = "block";
  }else{
    document.getElementById("sketch4").style.display = "none";
    document.getElementById("favourite4").style.display = "none";
  }

  if( fav5 == 1){
    document.getElementById("sketch5").style.display = "block";
    document.getElementById("favourite5").style.display = "block";
  }else{
    document.getElementById("sketch5").style.display = "none";
    document.getElementById("favourite5").style.display = "none";
  }

  if( fav6 == 1){
    document.getElementById("sketch6").style.display = "block";
    document.getElementById("favourite6").style.display = "block";
  }else{
    document.getElementById("sketch6").style.display = "none";
    document.getElementById("favourite6").style.display = "none";
  }
}
//change input value of ecard1
function ChangeMe1(){
  var title = document.getElementById("box1").value;

  if(document.getElementById("box1").value != 0){
    var box1 = document.getElementById("title1");
    box1.innerHTML = title;
  }
  var job = document.getElementById("box2").value;

  if(document.getElementById("box2").value != 0){
    var box2 = document.getElementById("job1");
    box2.innerHTML = job;
  }
  var phone1 = document.getElementById("box3").value;

  if(document.getElementById("box3").value != 0){
    var box3 = document.getElementById("phoneno1");
    box3.innerHTML = phone1;
  }
  var phone2 = document.getElementById("box4").value;

  if(document.getElementById("box4").value != 0){
    var box4 = document.getElementById("phoneno2");
    box4.innerHTML = phone2;
  }
  var email = document.getElementById("box5").value;

  if(document.getElementById("box5").value != 0){
    var box5 = document.getElementById("email");
    box5.innerHTML = email;
  }
  var url = document.getElementById("box6").value;

  if(document.getElementById("box6").value != 0){
    var box6 = document.getElementById("url");
    box6.innerHTML = url;
  }
  var address = document.getElementById("box7").value;

  if(document.getElementById("box7").value != 0){
    var box7 = document.getElementById("address1");
    box7.innerHTML = address;
  }
}

//change input value of ecard2
function ChangeMe2(){
  var name = document.getElementById("box8").value;

  if(document.getElementById("box8").value != 0){
    var box8 = document.getElementById("name");
    box8.innerHTML = name;
  }
  var job = document.getElementById("box9").value;

  if(document.getElementById("box9").value != 0){
    var box9 = document.getElementById("job2");
    box9.innerHTML = job;
  }
  var phone = document.getElementById("box10").value;

  if(document.getElementById("box10").value != 0){
    var box10 = document.getElementById("phoneno3");
    box10.innerHTML = phone;
  }
  var email = document.getElementById("box11").value;

  if(document.getElementById("box11").value != 0){
    var box11 = document.getElementById("email2");
    box11.innerHTML = email;
  }
  var url = document.getElementById("box12").value;

  if(document.getElementById("box12").value != 0){
    var box12 = document.getElementById("url2");
    box12.innerHTML = url;
  }
  var address = document.getElementById("box13").value;

  if(document.getElementById("box13").value != 0){
    var box13 = document.getElementById("address2");
    box13.innerHTML = address;
  }
}

//change input value of ecard3
  function ChangeMe3(){
    var receiver = document.getElementById("box14").value;

    if(document.getElementById("box14").value != 0){
      var box14 = document.getElementById("receiver");
      box14.innerHTML = receiver;
    }
    var desc = document.getElementById("box15").value;

    if(document.getElementById("box15").value != 0){
      var box15 = document.getElementById("p2");
      box15.innerHTML = desc;
    }
    var sender = document.getElementById("box16").value;

    if(document.getElementById("box16").value != 0){
      var box16 = document.getElementById("sender");
      box16.innerHTML = sender;
    }
  }

  //change input value of ecard4
    function ChangeMe4(){
      var receiver = document.getElementById("box17").value;

      if(document.getElementById("box17").value != 0){
        var box17 = document.getElementById("receiver2");
        box17.innerHTML = receiver;
      }
      var desc = document.getElementById("box18").value;

      if(document.getElementById("box18").value != 0){
        var box18 = document.getElementById("p3");
        box18.innerHTML = desc;
      }
      var sender = document.getElementById("box19").value;

      if(document.getElementById("box19").value != 0){
        var box19 = document.getElementById("sender2");
        box19.innerHTML = sender;
      }
    }

//change input value of ecard5
  function ChangeMe5(){
    var eventname = document.getElementById("box20").value;

    if(document.getElementById("box20").value != 0){
      var box20 = document.getElementById("event");
      box20.innerHTML = eventname;
    }
    var name = document.getElementById("box21").value;

    if(document.getElementById("box21").value != 0){
      var box21 = document.getElementById("host");
      box21.innerHTML = name;
    }
    var date = document.getElementById("box22").value;

    if(document.getElementById("box22").value != 0){
      var box22 = document.getElementById("date");
      box22.innerHTML = date;
    }
    var time1 = document.getElementById("box23").value;

    if(document.getElementById("box23").value != 0){
      var box23 = document.getElementById("timestart");
      box23.innerHTML = time1;
    }
    var time2 = document.getElementById("box24").value;

    if(document.getElementById("box24").value != 0){
      var box24 = document.getElementById("timeend");
      box24.innerHTML = time2;
    }
    var location = document.getElementById("box25").value;

    if(document.getElementById("box25").value != 0){
      var box25 = document.getElementById("location");
      box25.innerHTML = location;
    }
    var address = document.getElementById("box26").value;

    if(document.getElementById("box26").value != 0){
      var box26 = document.getElementById("address3");
      box26.innerHTML = address;
    }
    var country = document.getElementById("box27").value;

    if(document.getElementById("box27").value != 0){
      var box27 = document.getElementById("country");
      box27.innerHTML = country;
    }
    var phone = document.getElementById("box28").value;

    if(document.getElementById("box28").value != 0){
      var box28 = document.getElementById("phoneno4");
      box28.innerHTML = phone;
    }
}

//change input value of ecard6
  function ChangeMe6(){
    var bride = document.getElementById("box29").value;

    if(document.getElementById("box29").value != 0){
      var box29 = document.getElementById("bride");
      box29.innerHTML = bride;
    }
    var groom = document.getElementById("box30").value;

    if(document.getElementById("box30").value != 0){
      var box30 = document.getElementById("groom");
      box30.innerHTML = groom;
    }
    var desc = document.getElementById("box31").value;

    if(document.getElementById("box31").value != 0){
      var box31 = document.getElementById("p1");
      box31.innerHTML = desc;
    }
}

//confirmation submission
function submitMe(){
  var answer = window.confirm("Save and send changes to recipient?");
  if (answer) {
    alert("E-Card was sent successfully to recipient!");
  }
}
