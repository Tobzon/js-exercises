
var timeDisplay = document.getElementById("time");


function refreshTime() {

    var d = new Date()

    var weekday = new Array(7)
    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"

    var wDay = weekday[d.getDay()]

    var month = d.getMonth()
    var date = d.getDate()
    var year = d.getFullYear()

    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()
    timeDisplay.innerHTML =  wDay+", "+month+"/"+date+"/"+ year+" "+h+":"+m+":"+s

}

setInterval(refreshTime, 1000);

//---------------------------------------------------------------------------------------------------

var h2 = document.getElementById("leapYear")

function checkYear() {

    var year = document.getElementById("year")


    if(year.value % 4===0 && year.value %100 !==0 || year.value %400 ===0){
        h2.innerHTML = year.value + " Is a leap year"

    }
    else  h2.innerHTML = year.value + " Is not a leap year"

}
//---------------------------------------------------------------------------------------------------



