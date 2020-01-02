const shadow = `drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))`
let timeArray = []
let number=[
    [1,0,1,1,1,1,1], //0
    [0,0,0,0,0,1,1], //1
    [1,1,1,0,1,1,0], //2
    [1,1,1,0,0,1,1], //3
    [0,1,0,1,0,1,1], //4
    [1,1,1,1,0,0,1], //5
    [1,1,1,1,1,0,1], //6
    [1,0,0,0,0,1,1], //7
    [1,1,1,1,1,1,1], //8
    [1,1,1,1,0,1,1]  //9
];


function getTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    timeArray = [
        Math.floor(hour / 10),
        hour % 10,
        Math.floor(min / 10),
        min % 10,
        Math.floor(sec / 10),sec % 10
    ]
    console.log(timeArray)
}

let num = document.getElementsByClassName("number")

function start () {
    for (let i = 0; i < 6; i++) {
    let bar = num[i].getElementsByClassName("bar");
        for(let j=0; j<7; j++){
            if(number[timeArray[i]][j]==1)
            // bar[j].classList.add("animate");
            bar[j].style.filter=shadow
        }
    }
}

function show(set) {
    let bar = num[set].getElementsByClassName("bar");
    let prevTime
    if(set==3||set==5) prevTime = (timeArray[set]===0)?9:(timeArray[set]-1)
    if(set==2||set==4) prevTime = (timeArray[set]===0)?5:(timeArray[set]-1)
    for(let j=0; j<7; j++){
        bar[j].classList.remove("fade");
        bar[j].classList.remove("animate");
        if(number[timeArray[set]][j]>number[prevTime][j]){
            bar[j].classList.add("animate");
            bar[j].style.filter=shadow
        }
        if(number[timeArray[set]][j]<number[prevTime][j]){
            bar[j].classList.add("fade");
            bar[j].style.filter=`none`
        }
    }
}

getTime()

setInterval(()=>{
    getTime()
},1000)

start()
setInterval(() => {
    show(5)
}, 1000);

setTimeout(()=>{
    show(4)
    setInterval(() => {
        show(4)
    }, 1000*10);
},(10-timeArray[5])*1000)

setTimeout(()=>{
    show(3)
    setInterval(() => {
        show(3)
    }, 1000*60);
},(60-((timeArray[4]*10)+timeArray[5]))*1000)

setTimeout(()=>{
    show(2)
    setInterval(() => {
        show(2)
    }, 1000*60*10);
},(10-timeArray[3])*1000*60)

setTimeout(()=>{
    show(1)
    setInterval(() => {
        show(1)
    }, 1000*60*60);
},(60-((timeArray[2]*10)+timeArray[3]))*1000*60)

setTimeout(()=>{
    show(0)
    setInterval(() => {
        show(0)
    }, 1000*60*60*10);
},(10-timeArray[1])*1000*60*60)