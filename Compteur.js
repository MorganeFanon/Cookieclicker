



function update() {
   document.getElementById("text").value = cookiecount;
   document.title = cookiecount + " Cookies";
   document.getElementById("amountAutoClick").innerHTML="You Own "+autoClick+" Auto Clickers";
   document.getElementById("costAutoClick").innerHTML = ((autoClick+1) * 12) + " Cookies";

   document.getElementById("amountFarms").innerHTML="You Own "+farms+" Farms";
   document.getElementById("costFarms").innerHTML = ((farms+1) * 15) + " Cookies";

   document.getElementById("cookiespersecond").innerHTML = "You are gaining " + (((autoClick)+(farms*2))*multiplier) + " Cookies per/s";
}

var multiplier = 1;
var cookiecount = 0;
var autoClick = 0;
var farms = 0;

function timer() {
   cookiecount = cookiecount + autoClick;
   cookiecount = cookiecount + farms*2;
   update()
}
setInterval(timer, 1000)

function add() { 
   cookiecount = cookiecount + 1;
   update()
}

function save() {
   localStorage.setItem("cookiecount", cookiecount);
   localStorage.setItem("autoClick", autoClick);
   localStorage.setItem("farms", farms);

}



function load() {
   cookiecount = localStorage.getItem("cookiecount");
   cookiecount = parseInt(cookiecount);
   autoClick = localStorage.getItem("autoClick");
   autoClick = parseInt(autoClick);
   farms = localStorage.getItem("farms");
   farms = parseInt(farms);
   update()
}

function buyAutoClick() {
   if(cookiecount >= ((autoClick+1) * 12)) {
      cookiecount = cookiecount - ((autoClick+1) * 12);
      autoClick = autoClick +1;
      update()
   }
}

function buyFarm() {
   if(cookiecount >= ((farms+1) * 15)) {
      cookiecount = cookiecount - ((farms+1) * 15);
      farms = farms +1;
      update()
   }
}
