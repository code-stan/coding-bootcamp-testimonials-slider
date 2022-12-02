const sliderJSON = `[
    {   
        "user": 1,
        "details": {
            "name": "Tanya Sinclair",
            "job": "UX Engineer",
            "img": "./images/image-tanya.jpg",
            "text": "“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”"
        }

    },
    {
        "user": 2,
        "details": {
            "name": "John Tarkpor",
            "job": "Junior Front-end Developer",
            "img": "./images/image-john.jpg",
            "text": "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”"
        }
    }
]`
const parseData = JSON.parse(sliderJSON)
const navBtn = document.querySelectorAll(".nav-btn");
const profileImg = document.querySelector(".slide-img");
const text = document.querySelector(".msg-txt");
const idName = document.querySelector(".name")
const idJob = document.querySelector(".job");
let currentItem = 0;

// PREVIOUS BUTTON ACTION

navBtn[0].addEventListener("click", ()=>{
    currentItem --
    if(currentItem < 0){
        currentItem = parseData.length - 1;
    }
    console.log(currentItem)
    idName.textContent = parseData[currentItem].details.name;
    idJob.textContent = parseData[currentItem].details.job;
    profileImg.src = parseData[currentItem].details.img;
    text.textContent = parseData[currentItem].details.text;
})
navBtn[1].addEventListener("click", ()=>{
    currentItem ++
    if(currentItem > parseData.length - 1){
        currentItem = 0;
    }
    idName.textContent = parseData[currentItem].details.name;
    idJob.textContent = parseData[currentItem].details.job;
    profileImg.src = parseData[currentItem].details.img;
    text.textContent = parseData[currentItem].details.text;
})


