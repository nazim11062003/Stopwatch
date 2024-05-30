let [sec,min,hour]=[0,0,0];
        let timer=document.querySelector(".timer");
        let startBtn=document.querySelector(".btn2")
        let stopBtn=document.querySelector(".btn1")
        let resetBtn=document.querySelector(".btn3");
        let time=null;
        function stopwatch(){
            sec++;
            if(sec===60)
            {
                sec=0;
                min++;
                if(min===60)
                {
                    min=0;
                    hour++;
                }
            }
            let h=hour<10? "0"+hour:hour;
            let m=min<10? "0"+min:min;
            let s=sec<10? "0"+sec:sec;
            timer.innerHTML=h+":"+m+":"+s;
        }

        function interval(){
            if(time!=null)
            {
                clearInterval(time);
            }
            time=setInterval(stopwatch,1000);
        }

        startBtn.addEventListener("click",interval);

        function stop(){
            clearInterval(time);
        }

        stopBtn.addEventListener("click",stop);

        function reset(){
            clearInterval(time);
            [sec,min,hour]=[0,0,0];
            timer.innerHTML="00:00:00";
        }

        resetBtn.addEventListener("click",reset);