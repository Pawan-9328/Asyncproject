// setTimeout(function(){
//     console.log("keshav");
// }, 2000)

// const sayKeshav = function(){
//      console.log('Keshav');
// }
// const changeText = function(){
//     document.querySelector('h1').innerHTML = "best JS series"
// }
// const changeMe  = setTimeout(changeText, 2000)

// //clearTimeout()
// document.querySelector('#stop').addEventListener('click', function(){
//     clearTimeout(changeMe)
//     console.log("STOPPED");
// })

const sayDate = (function(){
    console.log('keshav', Date.now());
})

const intervalId = setInterval(sayDate, 1000, "hiii")

clearInterval(intervalId)