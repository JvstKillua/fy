/* Javascript */
alert("Happy Birthday Mbah");
var sayHappybday = function(){
    alert("Happy Birthday Mbah");
}

// date
function printTime(){
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var milli = d.getMilliseconds();
  var day = d.getDay();
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  
  switch (day) {
    
    case 0:
      day = "Minggu";
      break;
    case 1:
      day = "Senin";
      break;
    case 2:
      day = "Selasa";
      break;
    case 3:
      day = "Rabu";
      break;
    case 4:
      day = "Kamis";
      break;
    case 5:
      day = "Jum 'at";
      break;
    case 6:
      day = "Sabtu";
      break;
  }
  
  switch (month) {
    
    case 1:
      month = "Januari";
      break;
    case 2:
      month = "Februari";
      break;
    case 3:
      month = "Maret";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "Mei";
      break;
    case 6:
      month = "Juni";
      break;
    case 7:
      month = "Juli";
      break;
    case 8:
      month = "Agustus";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "Oktober";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "Desember";
      break;
  }
      
  if (hours < 10){
    hours = "0" + hours;
  }
  if (mins < 10){
    
    mins = "0" + mins;
  }
  if (secs < 10){
    
    secs = "0" + secs;
  }
  
  document.getElementById("ttt").innerHTML = "hari ini, " + day + ", " + date + " / " + month + " / " + year;
}
setInterval(printTime, 100);
console.log("test");