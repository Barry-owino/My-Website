const text = document.getElementById("action")
const hireMe = document.getElementById("hire")
const viewCv = document.getElementById("view")


document.getElementById("hireMe").onmouseover = function () {
  document.getElementById("action").innerHTML = "Hire me for Your personal and business website services";
  
}

document.getElementById("hireMe").onmouseout = function () {
  document.getElementById("action").innerHTML = "Website Designer And Developer"
}

document.getElementById("viewCv").onmouseover = function () {
  document.getElementById("action").innerHTML = "Click to download and view my Cv and Contact me"
}

document.getElementById("viewCv").onmouseout = function () {
  document.getElementById("action").innerHTML = "Website Designer And Developer"
}



