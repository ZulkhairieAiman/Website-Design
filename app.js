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

//change input value of Cards
function ChangeMe(){
  var title = document.getElementById("box1").value;

  if(document.getElementById("box1").value != 0){
    var box1 = document.getElementById("title1");
    box1.innerHTML = title;
  }
  var job = document.getElementById("box2").value;

  if(document.getElementById("box2").value != 0){
    var box2 = document.getElementById("job2");
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
    var box7 = document.getElementById("address");
    box7.innerHTML = address;
  }
}
