
// #show & hide sidenav
const sidenav=document.querySelector(".sidenav");
function showsidenav(){
    sidenav.style.display="flex"
}

function hidesidenav(){
    sidenav.style.display="none"
}

// #show & hide lang-options

const langoptions=document.querySelector(".lang-options");
const lang=document.querySelector(".lang-cont");
const langup=document.querySelector(".lang-cont .fa-angle-up");
const langdown=document.querySelector(".lang-cont .fa-angle-down");




lang.addEventListener("click", (event) => {
    event.preventDefault();
    langoptions.classList.toggle("toggledisplay");
    langup.classList.toggle("toggledisplay")
    langdown.classList.toggle("toggledisplay")
    
    event.stopPropagation()
document.body.addEventListener("click",(event)=>{
    langoptions.classList.remove("toggledisplay");
    langup.classList.remove("toggledisplay");
    langdown.classList.remove("toggledisplay");
    event.stopPropagation()
   
})

});


// #language button functionality

const srchinp1 = document.querySelector(".srch-inp1");
srchinp1.addEventListener("click", (event) => {
    event.stopPropagation();
    const inputresult1 = document.querySelector(".inp-result1");
    inputresult1.classList.toggle("toggledisplay");
   
    })

    const closeInputResult = () => {
        inputresult1.classList.remove("toggledisplay");
    };
    
    // Add the body click event listener
    document.body.addEventListener("click", closeInputResult);
 



const srchinp2 = document.querySelector(".srch-inp2");
srchinp2.addEventListener("click", (event) => {
event.stopPropagation();
const inputresult2 = document.querySelector(".inp-result2");
inputresult2.classList.toggle("toggledisplay");

document.body.addEventListener("click", () => {
    inputresult2.classList.add("toggledisplay");
});
});



const inputresult1 = document.querySelector(".inp-result1");

srchinp1.addEventListener('input', () => {
inputresult1.innerHTML = ''; 
const valueToAppend = document.createTextNode(srchinp1.value);
inputresult1.appendChild(valueToAppend);
});


// #adding places to input


const places=[
, "guindy","velachery","perungalathur","vandaloor","porur","pallavaram","teynampet" 
];






srchinp1.addEventListener("keyup",()=>{
let result=[];
let inpr=srchinp1.value;
if(inpr.length){
    result=  places.filter((keyword)=>{
        return  keyword.toLowerCase().includes(inpr.toLowerCase())
    })


  
    
display(result);



}
})   


srchinp2.addEventListener("keyup",()=>{
let result2=[];
let inpr2=srchinp2.value;
if(inpr2.length){
    result2=  places.filter((keyword)=>{
        return  keyword.toLowerCase().includes(inpr2.toLowerCase())
    })


  
    

display2(result2);



}
})   











const display=function(result){
const content=result.map((ddd)=>{
return "<li onclick=selectinp(this)>"+ddd+"</li>";
})

inputresult1.innerHTML="<ul>"+content.join("")+"</ul>"




}
const display2=function(result2){
const content=result2.map((ddd)=>{
   return "<li onclick=selectinp2(this)>"+ddd+"</li>";
})
const inputresult2=document.querySelector(".inp-result2")
inputresult2.innerHTML="<ul>"+content.join("")+"</ul>"




}



const inputresult2=document.querySelector(".inp-result2")



function selectinp(list){
srchinp1.value=list.innerHTML;
inputresult1.innerHTML='';


} 


function selectinp2(list){
srchinp2.value=list.innerHTML;
inputresult2.innerHTML='';


} const translations = {
bookings: {
    en: "my bookings",
    ta: "முன்பதிவுகள்"
},
help: {
    en: "help",
    ta: "உதவி"
},
login: {
    en: "sign-in",
    ta: "பதிவு செய்யவும் "
},

sign: {
    en: "sign-up",
    ta: "சேர்க்கை "
},

home:{
en:"Home",
ta:" முகப்பு"
}
,

lang:{
    en:"language",
    ta:" மொழி"
    }
    ,

account: {
    en: "create account",
    ta: "கணக்கு உருவாக்கு"
},
from: {
    en: "From",
    ta: "இடத்திலிருந்து"
},
to: {
    en: "To",
    ta: "இடத்திற்கு"
},
departure: {
    en: "Departure",
    ta: "விடைபெறுதல்"
},
passengers: {
    en: "Passengers",
    ta: "பயணிகள்"
},
search: {
    en: "Search",
    ta: "தேடு"
},
oneway: {
    en: "One Way",
    ta: "ஒருதடவை"
},
roundtrip: {
    en: "Round-Trip",
    ta: "இருதடவை"
},
track: {
    en: "Track Your Trip",
    ta: "உங்கள் பயணம்"
},
subs: {
    en: "Subscription",
    ta: "அபோசனம்"
},
};


let currentLanguage = "en";
const englishButton = document.querySelector(".english");
const tamilButton = document.querySelector(".tamil");

englishButton.addEventListener("click", () => {
currentLanguage = "en";
updateText();
 isenglish=true;



const places=[
     "guindy","velachery","perungalathur","vandaloor","porur","pallavaram","teynampet" 
    ];
    
    
    
    
    
    
    srchinp1.addEventListener("keyup",()=>{
        let result=[];
        let inpr=srchinp1.value;
        if(inpr.length){
            result=  places.filter((keyword)=>{
                return  keyword.toLowerCase().includes(inpr.toLowerCase())
            })
    
    
          
            
    display(result);
    
    
    
        }
    })   
    
    
    srchinp2.addEventListener("keyup",()=>{
        let result2=[];
        let inpr2=srchinp2.value;
        if(inpr2.length){
            result2=  places.filter((keyword)=>{
                return  keyword.toLowerCase().includes(inpr2.toLowerCase())
            })
    
    display2(result2);
    
    
    
        }
    })   

srchinp1.placeholder= "pallavaram";
srchinp2.placeholder= "perungalathur";

});




tamilButton.addEventListener("click", () => {
currentLanguage = "ta"; 
updateText();
isenglish=false;








const tamilPlaces = [
    "பல்லவரம்",
    "பெருங்கல்தூர்",
    "பொரூர்",
    "கிண்டி",
    "செய்தாபேட்டை",
    "வண்டலூர்"
];

    srchinp1.placeholder= "பல்லவரம்";
    srchinp2.placeholder=  "பெருங்கல்தூர்";
    
    
    
    srchinp1.addEventListener("keyup",()=>{
        let result3=[];
        let inpr3=srchinp1.value;
        if(inpr3.length){
            result3= tamilPlaces.filter((keyword)=>{
                return  keyword.includes(inpr3)
            })
    
    
          
            
    display(result3);
    
    
    
        }
    })   
    
    
    
srchinp2.addEventListener("keyup",()=>{
let result4=[];
let inpr4=srchinp2.value;
if(inpr4.length){
    result4=  tamilPlaces.filter((keyword)=>{
        return  keyword.includes(inpr4)
    })


  
    

display2(result4);



}
})   







});

function updateText() {
document.querySelectorAll('[data-translate]').forEach((element) => {
    const key = element.getAttribute("data-translate");
    
    
    
    if (translations[key]) {
        element.textContent = translations[key][currentLanguage];
    } 
   
});
}


// #spin-button


const spinbtn=document.querySelector(".spin-btn");
spinbtn.addEventListener("click",(event)=>{
    event.currentTarget.classList.toggle("spin");
    const tempholder=srchinp1.value||srchinp1.placeholder;
    srchinp1.value=srchinp2.value||srchinp2.placeholder;
    srchinp2.value=tempholder;
})


// #calendar


const daysGrid = document.getElementById('daysGrid');
const prevMonthButton = document.querySelector('.prev');
const nextMonthButton = document.querySelector('.next');
const calendar = document.querySelector(".calendar");
const srchinp3=document.querySelector(".srch-inp3")



let currentDate = new Date();
let selectedDay = null; 
let count = 0;




const renderCalendar = () => {
    daysGrid.innerHTML = '';
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const today = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    srchinp3.placeholder = selectedDay 
        ? `${selectedDay}, ${currentDate.toLocaleString('default', { month: 'short' })} ${year.toString().slice(-2)}`
        : `${today}, ${currentDate.toLocaleString('default', { month: 'short' })} ${year.toString().slice(-2)}`;

    const monthYearDisplay = document.createElement('p');
    monthYearDisplay.classList.add('month-year-display');
    monthYearDisplay.innerText = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
    daysGrid.appendChild(monthYearDisplay);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('p');
        emptyDay.classList.add('day');
        daysGrid.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('p');
        dayElement.classList.add('day');

        if (day === today && month === currentMonth && year === currentYear) {
            dayElement.classList.add('current-day');
        }

        dayElement.innerText = day;
        dayElement.title = `${day} ${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

        dayElement.addEventListener('click', () => {
            const allDays = document.querySelectorAll('.day');
            allDays.forEach(day => day.classList.remove('selected-day'));

            dayElement.classList.add('selected-day');
            selectedDay = day;

            srchinp3.placeholder = `${selectedDay} ${currentDate.toLocaleString('default', { month: 'short' })} ${year.toString().slice(-2)}`;
        });

        daysGrid.appendChild(dayElement);
    }
};

prevMonthButton.addEventListener('click', (event) => {
    event.stopPropagation();
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', (event) => {
    event.stopPropagation();
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

srchinp3.addEventListener("click", (event) => {
    event.stopPropagation();
    calendar.classList.toggle("calendar-toggle");
});

document.addEventListener("click", () => {
    calendar.classList.remove("calendar-toggle");
});

renderCalendar();




// #passengers

const increasebtn = document.querySelector(".increase");
const decreasebtn = document.querySelector(".decrease");
const srchinp4= document.querySelector(".srch-inp4");
const srchinp5 = document.querySelector(".srch-inp5");


const enupdatePlaceholder = () => {


    
    srchinp5.placeholder = count > 0 ? `${count}` : '0'; 
      srchinp4.placeholder = count === 0 ? '0 Person' : `${count} Persons`; 


}
const taupdatePlaceholder = () => {

srchinp5.placeholder = count > 0 ? `${count}` : '0'; 
srchinp4.placeholder = count === 0 ? '0 நபர்' : `${count} நபர்கள்`; 
}


let isenglish=true;
increasebtn.addEventListener("click", () => {
    count++;
    if(count>3){
        count--;
    }
    isenglish?enupdatePlaceholder():taupdatePlaceholder()
});

decreasebtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }
    isenglish?enupdatePlaceholder():taupdatePlaceholder()
});

srchinp4.addEventListener("click", (event) => {
    const pass = document.querySelector(".inp-result4");
    event.stopPropagation();
    pass.classList.toggle("toggledisplaypass");

    increasebtn,decreasebtn.addEventListener("click",(event)=>{
event.stopPropagation();
    })
    increasebtn.addEventListener("click",(event)=>{
        event.stopPropagation()
                })

    document.body.addEventListener("click", () => {
        pass.classList.remove("toggledisplaypass");
    });
});




const toggleInputs = (activeInput) => {
    const inputs = [srchinp1, srchinp2, srchinp3, srchinp4, srchinp5];
    inputs.forEach(input => {
        input.disabled = (activeInput && input !== activeInput);
    });
};



 // Input focus event listeners
 const inputs = [srchinp1, srchinp2, srchinp3, srchinp4, srchinp5];
 inputs.forEach(input => {
     input.addEventListener('focus', () => {
         toggleInputs(input);
     });

     input.addEventListener('blur', (event) => {
         setTimeout(() => {
             if (!input.contains(document.activeElement)) {
                 toggleInputs(null);
             }
         },150); 
     });
 });




//  #log-out button

const username=localStorage.getItem("user");
const log=  document.getElementById("logout");


if(username){
const parseduser= JSON.parse(username);
document.querySelector(".welcome-msg").innerHTML=`Hello ${parseduser.username}`;
}


