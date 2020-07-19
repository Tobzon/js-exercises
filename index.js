
var board = document.getElementById("board")


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

    var sunday = document.getElementById("sunday")

function sundayOnFirst() {
    var year = document.getElementById("year")

    var date = new Date()

    date.setFullYear(year.value)
    date.setMonth(0)


    if (date.getDay() === 0){
        sunday.innerHTML = "It's a sunday"
    }
    else sunday.innerHTML = "It's not a sunday"

}

//---------------------------------------------------------------------------------------------------
    var number = document.getElementById("Number")

 function randomCheck() {
     var random = Math.floor(Math.random() *10)+1

     var guessNumber = document.getElementById("guess")

     if (guessNumber.value == random){
         number.innerHTML = "It was correct"
     }
     else number.innerHTML = " It was not correct"

 }
//---------------------------------------------------------------------------------------------------

function daysUntilChristmas() {

var h3 =document.createElement("h3")

    var today = new Date()

    var xmas = new Date(today.getFullYear(),11,24)
    if (today.getFullYear()==11 && today.getDate()>25){
        xmas.setFullYear(xmas.getFullYear()+1)
    }
    // milisec,sec,min,hours
    var day = 1000*60*60*24
    h3.innerHTML = Math.ceil((xmas.getTime()-today.getTime())/ (day))+ " days left until Christmas"

    board.appendChild(h3)
}
//---------------------------------------------------------------------------------------------------

function reverse() {

 var rev =  document.getElementById("reverse")
    var revnum = document.getElementById("revnum")

    var n = rev.value

    var arr = n.toString().replace(/\D/g, '0').split('').map(Number)

    console.log(arr)

    arr.reverse()
    revnum.innerHTML = arr.toString().replace(/\D/g, '')
}

//---------------------------------------------------------------------------------------------------



function textManipulation() {
    var word = document.getElementById("word")

    var text = document.getElementById("text")

    var arr = word.value.toString().replace(/\W/g,'').split('').map(String)

    var run = false

    var start = 0
    var index = 0
     var tmp = []
    while (!run){

              for (index; index<arr.length;index++){

                  tmp.push(arr[index])

              }
              start++
              index = start
        if (start == arr.length){
            run = true
            text.innerHTML = tmp.toString()
        }
    }
}
//---------------------------------------------------------------------------------------------------

function textManipulation2() {
    var word = document.getElementById("wordd")
    var text = document.getElementById("textt")

      var arr = word.value.toString().replace(/\W/g,'').split('').map(String)

    
    text.innerHTML =  arr.sort().toString().replace(/\W/g,'')

}
//---------------------------------------------------------------------------------------------------

function textManipulation3() {
    var word = document.getElementById("worddd")
    var text = document.getElementById("texttt")

    var string = word.value

    var longestWord = string.split(' ').reduce(function (longest,current) {
        return current.length > longest.length ? current : longest

    }, "")


    text.innerHTML = string.charAt(0).toUpperCase() + string.slice(1) + ", The longest word is "+ longestWord

}
//---------------------------------------------------------------------------------------------------
function prime() {
    var number = document.getElementById("num")
    var text = document.getElementById("num1")

    var val = number.value
    
    
        if (  val% 2 == 0){
             text.innerHTML = " Number is not a prime"
        }
        else 
        text.innerHTML = " Number is a prime"


}
//---------------------------------------------------------------------------------------------------
function classN() {
    var any = document.getElementById("any")
    var text = document.getElementById("anything")




}
var toType  = function (obj) {

    return ({}).toString().call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
(function () {
    console.log(typeof arguments)

})