let time = document.getElementById ("currentUTCTime");
setInterval(() =>{
let d = new Date();
time.innerHTML = d.toLocaleTimeString();
},1000)
