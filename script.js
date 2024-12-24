{ let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  
  const sliderWrapper = document.querySelector('.slider-wrapper');
  sliderWrapper.style.transform = `translateX(${(-currentSlide * 100)}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
} }

{ function showdiv(){
  let div = document.getElementById("addetor")
  if (div.style.display === "none") {
    div.style.display = "block";
} else {
    div.style.display = "none";
}
} }
{
  let i=0
  function addwork(){
    i++
    if(i>=20){
      alert("your memory is full now")
    }
    else
    {let tittle = document.getElementById("title").value;
    let work = document.getElementById("work").value;
    if(tittle==="" && work===""){
      alert("you must enter some thing")
    }
    else
    {let continer = document.getElementById("slide1");
    let newdiv = document.createElement("div")
    newdiv.classList.add("newdiv");
    newdiv.classList.add(`new${i}`)
    let newh1 = document.createElement("h2");
    newh1.textContent = `${tittle}`;
    let newp = document.createElement("p");
    newp.textContent = `${work}`;
    newdiv.appendChild(newh1);
    newdiv.appendChild(newp);
    continer.appendChild(newdiv);
    newdiv.setAttribute("onclick", `div${i}()`)
  }
  document.getElementById("title").value = "";
  document.getElementById("work").value = ""; 
}
};
}

function div1(){
document.querySelector(".new1").classList.toggle("click");
}
function div2(){
document.querySelector(".new2").classList.toggle("click");
}
function div3(){
document.querySelector(".new3").classList.toggle("click");
}
function div4(){
document.querySelector(".new4").classList.toggle("click");
}
function div5(){
document.querySelector(".new5").classList.toggle("click");
}
function div6(){
document.querySelector(".new6").classList.toggle("click");
}
function div7(){
document.querySelector(".new7").classList.toggle("click");
}
function div8(){
document.querySelector(".new8").classList.toggle("click");
}
function div9(){
document.querySelector(".new9").classList.toggle("click");
}
function div10(){
document.querySelector(".new10").classList.toggle("click");
}
function div11(){
document.querySelector(".new11").classList.toggle("click");
}
function div12(){
document.querySelector(".new12").classList.toggle("click");
}
function div13(){
document.querySelector(".new13").classList.toggle("click");
}
function div14(){
document.querySelector(".new14").classList.toggle("click");
}
function div15(){
document.querySelector(".new15").classList.toggle("click");
}
function div16(){
document.querySelector(".new16").classList.toggle("click");
}
function div17(){
document.querySelector(".new17").classList.toggle("click");
}
function div18(){
document.querySelector(".new18").classList.toggle("click");
}
function div19(){
document.querySelector(".new19").classList.toggle("click");
}
function div20(){
document.querySelector(".new20").classList.toggle("click");
}
function addtopending(){
  let transform = document.getElementsByClassName("click")[0];
  let parentDiv = [document.getElementById("slide4"),
                   document.getElementById("slide2"),
                   document.getElementById("slide3")] 
  let divtobeparent = document.getElementById("slide1");

  if (transform) {
    divtobeparent.appendChild(transform);
    transform.classList.remove("click"); 
    parentDiv4.removeChild(transform);
    }
}
function addtowork(){
  let transform = document.getElementsByClassName("click")[0];
  let parentDiv = [document.getElementById("slide1"),
    document.getElementById("slide4"),
    document.getElementById("slide3")] 
  let divtobeparent = document.getElementById("slide2");

  if (transform) {
    divtobeparent.appendChild(transform);
    transform.classList.remove("click"); 
    parentDiv.removeChild(transform);
   
}
}
function completed(){
  let transform = document.getElementsByClassName("click")[0];
  let parentDiv = [document.getElementById("slide1"),
                   document.getElementById("slide2"),
                   document.getElementById("slide4")] 
  let divtobeparent = document.getElementById("slide3");

  if (transform) {
    divtobeparent.appendChild(transform);
    transform.classList.remove("click"); 
    parentDiv.removeChild(transform);
    
}
}
function addtobin(){
  let transform = document.getElementsByClassName("click")[0];
  let divtobeparent = document.getElementById("slide4");
  let parentDiv = [document.getElementById("slide1"),
                    document.getElementById("slide2"),
                    document.getElementById("slide3")]

  if (transform) {
    divtobeparent.appendChild(transform);
    transform.classList.remove("click"); 
    parentDiv.removeChild(transform);
}
}

function Delete() {
  let transform = document.getElementsByClassName("click")[0];

  if (transform) {
    let parentDivs = [
      document.getElementById("slide1"),
      document.getElementById("slide2"),
      document.getElementById("slide3"),
      document.getElementById("slide4")
    ];

    parentDivs.forEach(parentDiv => {
      if (parentDiv.contains(transform)) { 
        parentDiv.removeChild(transform); 
      }
    });
  }
}

function edit() {
   let parentDivs = [
    document.getElementById("slide1"),
    document.getElementById("slide2"),
    document.getElementById("slide3"),
    document.getElementById("slide4")
  ];
  const selectedDiv = document.querySelector(".click");

  if (selectedDiv) {
    const title = selectedDiv.querySelector("h2").textContent;
    console.log(title);

    const work = selectedDiv.querySelector("p").textContent;

      parentDivs.forEach(parentDiv => {
      if (parentDiv.contains(selectedDiv)) {
        parentDiv.removeChild(selectedDiv);
            }
    });

    document.getElementById("title").value = title;
    document.getElementById("work").value = work;
    let div = document.getElementById("addetor");
    div.style.display = "block";
  } else {
    alert("No element with class 'click' found to edit.");
  }
  
}
