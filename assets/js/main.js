// Gallery's pictures zoom - Start
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Gallery's pictures zoom - End

// Burger menu - Start
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Burger menu - End

// Clock- for web-site - Start
function startTime() {
  const clock = new Date();
  let hour = clock.getHours();
  let minute = clock.getMinutes();
  let second = clock.getSeconds();
  let year = clock.getFullYear();
  hour = checkTime(hour);
  second = checkTime(second);
  document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second;
  document.getElementById('year').innerHTML = year;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };
  return i;
}
// Clock- for web-site - End

// Dark mode - for web-site - Start
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
// Dark mode - for web-site - End

// Font size - for web-site - Start
function small() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = "14px";
  }
};

function Normal() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = "16px";
  }
};

function Medium() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = "18px";
  }
};

function Large() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = "20px";
  }
};
// Font size - for web-site - End

// Font color - for web-site - Start
function original() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "";
  }
};

function black() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";
  }
};

function blue() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "#4332d1";
  }
};

function red() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "#d13232";
  }
};

function pink() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "#c76c7c";
  }
};
// Font color - for web-site - End

// Font family - for web-site - Start
function fontFantasy() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = "fantasy";
  }
};

function fontCursive() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = "cursive";
  }
};

function fontMonospace() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = "monospace";
  }
};

function fontSansSerif() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = "sans-serif";
  }
};

function fontSerif() {
  var elements = document.querySelectorAll("p");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = "serif";
  }
};
// Font family - for web-site - End

// Background color - for web-site - Start
function originalColor() {
  document.body.style.backgroundColor = "";
};

function backgroundColorRed() {
  document.body.style.backgroundColor = "rgb(207 111 111)";
};

function backgroundColorblue() {
  document.body.style.backgroundColor = "rgb(111 116 207)";
};

function backgroundColorOrange() {
  document.body.style.backgroundColor = "rgb(207 171 111)";
};

function backgroundColorGreen() {
  document.body.style.backgroundColor = "rgb(111 207 125)";
};
// Background color - for web-site - End

// Title color - for web-site - Start
function OriginalColor() {
  var h1Elements = document.getElementsByTagName("h1");
  var h2Elements = document.getElementsByTagName("h2");

  for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "";
  }
  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = "";
  }
}

function titleColorRed() {
  var h1Elements = document.getElementsByTagName("h1");
  var h2Elements = document.getElementsByTagName("h2");

  for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "rgb(191 16 16)";
  }
  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = "rgb(191 16 16)";
  }
}

function titleColorblue() {
  var h1Elements = document.getElementsByTagName("h1");
  var h2Elements = document.getElementsByTagName("h2");

  for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "#101dbf";
  }
  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = "#101dbf";
  }
}

function titleColorpink() {
  var h1Elements = document.getElementsByTagName("h1");
  var h2Elements = document.getElementsByTagName("h2");

  for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "#a410bf";
  }
  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = "#a410bf";
  }
}

function titleColororange() {
  var h1Elements = document.getElementsByTagName("h1");
  var h2Elements = document.getElementsByTagName("h2");

  for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "rgb(177 131 62)";
  }
  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = "rgb(177 131 62)";
  }
}
// Title color - for web-site - End