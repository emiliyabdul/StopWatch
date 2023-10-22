let hoursVal = document.querySelector('#hours')
let minutesVal = document.querySelector('#minutes')
let secondsVal = document.querySelector('#seconds')
let msecondsVal = document.querySelector('#mseconds')

let StartBtn = document.querySelector('.start')
let StopBtn = document.querySelector('.stop')
let ResetBtn = document.querySelector('.reset')


let hour = 0
let minute = 0
let second = 0
let msecond = 0
let MyInterval =''




    function StopWatch() {
        MyInterval = setInterval(()=>{
                if(hour<=9){
                    hoursVal.innerText = '0' + hour
                }
                else hoursVal.innerText = hour
        
                if(minute<=9){
                    minutesVal.innerText = '0' + minute
                }
                else minutesVal.innerText = minute
        
                if(second<=9){
                    secondsVal.innerText = '0' + second
                }
                else secondsVal.innerText = second
        
                if(msecond<=9){
                    msecondsVal.innerText = '0' + msecond
                }
                else msecondsVal.innerText = msecond
        
        
                msecond++
            
                    if(msecond==99){
                        msecond = 0
                        second++
                    }
            
                    if(second==59){
                        second = 0
                        minute++
                    }
            
                    if(minute==59){
                        minute = 0
                        hour++
                    }
            
                    if(hour==23){
                        hour = 0
                    }
        },10)
    
    }



function startBtn(){
    StopWatch()
    StartBtn.disabled = true
    StopBtn.disabled = false
    ResetBtn.disabled = true
}

function stopBtn(){
    clearInterval(MyInterval)
    StopBtn.disabled = true
    StartBtn.disabled = false
    ResetBtn.disabled = false
}

function resetBtn(){
    StartBtn.innerText = 'start'
    hour = 0
    minute = 0
    second = 0
    msecond = 0
    hoursVal.innerText = '0' + hour
    minutesVal.innerText = '0' + minute
    secondsVal.innerText = '0' + second
    msecondsVal.innerText = '0' + msecond
    clearInterval(MyInterval)
    ResetBtn.disabled = true
    StartBtn.disabled = false
    StopBtn.disabled = false
}

