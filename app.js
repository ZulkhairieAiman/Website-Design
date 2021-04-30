const navSlide = () => {
  const hamburgerbutton = document.querySelector('.hamburgerbutton');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  hamburgerbutton.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');

    // animate links
    navLinks.forEach((link, index) =>{
      if(link.style.animation){
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    //hamburger button animation
    hamburgerbutton.classList.toggle('button');
  });

}

navSlide();


//shows ecard1
function myBox1(){
  document.getElementById("logo2").style.display = "none";
  document.getElementById("initial").style.display = "none";
  document.getElementById("creds2").style.display = "none";
  document.getElementById("input2").style.display = "none";
  document.getElementById("box").style.backgroundImage = "url('Media/E-Cards/corporate1.jpg')";
  document.getElementById("box").style.display = "block";
  document.getElementById("black").style.display = "block";
  document.getElementById("white").style.display = "flex";
  document.getElementById("input1").style.display = "block";
}

//shows ecard2
function myBox2(){
  document.getElementById("black").style.display = "none";
  document.getElementById("white").style.display = "none";
  document.getElementById("input1").style.display = "none";
  document.getElementById("box").style.backgroundImage = "url('Media/E-Cards/corporate2.jpg')";
  document.getElementById("box").style.display = "block";
  document.getElementById("logo2").style.display = "flex";
  document.getElementById("initial").style.display = "block";
  document.getElementById("creds2").style.display = "block";
  document.getElementById("input2").style.display = "block";
}

//hides and shows cards depending on themes
function formal(){
  document.getElementById("sketch1").style.display = "block";
  document.getElementById("sketch2").style.display = "block";
  document.getElementById("sketch3").style.display = "none";
  document.getElementById("sketch4").style.display = "none";
  document.getElementById("sketch5").style.display = "none";
  document.getElementById("sketch6").style.display = "none";
}

function informal(){
  document.getElementById("sketch1").style.display = "none";
  document.getElementById("sketch2").style.display = "none";
  document.getElementById("sketch3").style.display = "block";
  document.getElementById("sketch4").style.display = "block";
  document.getElementById("sketch5").style.display = "none";
  document.getElementById("sketch6").style.display = "none";
}

function corporate(){
  document.getElementById("sketch1").style.display = "none";
  document.getElementById("sketch2").style.display = "none";
  document.getElementById("sketch3").style.display = "none";
  document.getElementById("sketch4").style.display = "none";
  document.getElementById("sketch5").style.display = "block";
  document.getElementById("sketch6").style.display = "block";
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
    var box5 = document.getElementById("email2");
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
