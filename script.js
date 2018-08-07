"use strict";

    class bugs {
        constructor(name, time){
            this.name = name;
            this.time = time;
        }
    }

    let queue = [
        new bugs("syntax", "4:30"),
        new bugs("syntax2", "5:30"),
        new bugs("syntax3", "6:30"),
        new bugs("syntax4", "5:40")
    ]

    console.log(queue.unshift());

//    for (let i = 0; i < bug.length; i++){
       $(".next").append(
           `<p class ="name">${queue[1].name}</p>
           <p class="time">${queue[1].time}</p>`
       )
//    }

    $(".current").append(
        `<p class ="name">${queue[0].name}</p>
        <p class="time">${queue[0].time}</p>`
)

//if click "accept", remove bug from queue

    $('body').on('click', '.accept', (e) => {
        queue.unshift();
        console.log(queue)
        
    });


// if click "ignore", put bug back in queue
    $('body').on('click', '.ignore', (e) => {
        queue.pop();
       
    });
  
