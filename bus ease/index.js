document.addEventListener("DOMContentLoaded", () => {
    const spinbtn = document.querySelector(".lr-icon");
    const srchinp1 = document.querySelector(".srch-inp1");
    const srchinp2 = document.querySelector(".srch-inp2");
    const srchinp3 = document.querySelector(".srch-inp3");
    const srchinp4 = document.querySelector(".srch-inp4");
    const srchinp5 = document.querySelector(".srch-inp5");
    const daysGrid = document.getElementById('daysGrid');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const calendar = document.querySelector(".calendar");
    const increasebtn = document.querySelector(".increase");
    const decreasebtn = document.querySelector(".decrease");

    let currentDate = new Date();
    let selectedDay = null; // Track the selected day
    let count = 0;

    // Function to toggle input states
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
            // Allow toggling when the same input is clicked again
            setTimeout(() => {
                if (!input.contains(document.activeElement)) {
                    toggleInputs(null); // Re-enable all inputs if focus is lost
                }
            },150); // Timeout to allow click events to register
        });
    });

    spinbtn.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle("spin");
      const tempholder=srchinp1.value||srchinp1.placeholder;
      srchinp1.value=srchinp2.value||srchinp2.placeholder;
      srchinp2.value=tempholder;

        
        
    });

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

        const monthYearDisplay = document.createElement('div');
        monthYearDisplay.classList.add('month-year-display');
        monthYearDisplay.innerText = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
        daysGrid.appendChild(monthYearDisplay);

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day');
            daysGrid.appendChild(emptyDay);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
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
        calendar.classList.toggle("toggledisplay");
    });

    document.addEventListener("click", () => {
        calendar.classList.add("toggledisplay");
    });

    renderCalendar();

    const updatePlaceholder = () => {
        srchinp5.placeholder = count > 0 ? `${count}` : '1'; 
        srchinp4.placeholder = count === 1 ? '1 Person' : `${count} Persons`; 
    };

    updatePlaceholder();

    increasebtn.addEventListener("click", () => {
        count++;
        if(count>3){
            count--;
        }
        updatePlaceholder();
    });

    decreasebtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
        }
        updatePlaceholder();
    });

    srchinp4.addEventListener("click", (event) => {
        const pass = document.querySelector(".no-of-pass");
        event.stopPropagation();
        pass.classList.toggle("toggledisplaypass");

        increasebtn,decreasebtn.addEventListener("click",(event)=>{
event.stopPropagation();
        })
        increasebtn.addEventListener("click",(event)=>{
            event.stopPropagation()
                    })




        document.body.addEventListener("click", () => {
            pass.classList.add("toggledisplaypass");
        });
    });

    // #city names in Chennai

    srchinp1.addEventListener("click", (event) => {
        event.stopPropagation();
        const inputresult = document.querySelector(".inp1-results");
        inputresult.classList.toggle("toggledisplay");
      
        document.body.addEventListener("click", () => {
            inputresult.classList.add("toggledisplay");



    
        });
    });
});

const srchinp2 = document.querySelector(".srch-inp2");
srchinp2.addEventListener("click", (event) => {
    event.stopPropagation();
    const inputresult2 = document.querySelector(".inp2-results");
    inputresult2.classList.toggle("toggledisplay");
  
    document.body.addEventListener("click", () => {
        inputresult2.classList.add("toggledisplay");
    });
});



const srchinp1 = document.querySelector(".srch-inp1");
const inputresult = document.querySelector(".inp1-results");

srchinp1.addEventListener('input', () => {
    inputresult.innerHTML = ''; // Clear previous results
    const valueToAppend = document.createTextNode(srchinp1.value);
    inputresult.appendChild(valueToAppend);
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

inputresult.innerHTML="<ul>"+content.join("")+"</ul>"




}
const display2=function(result2){
    const content=result2.map((ddd)=>{
       return "<li onclick=selectinp2(this)>"+ddd+"</li>";
    })
    const inputresult2=document.querySelector(".inp2-results")
    inputresult2.innerHTML="<ul>"+content.join("")+"</ul>"
    
    
    
    
    }



    const inputresult2=document.querySelector(".inp2-results")



function selectinp(list){
    srchinp1.value=list.innerHTML;
    inputresult.innerHTML='';
    

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
    sign: {
        en: "sign-in",
        ta: "உள்நுழைக"
    },
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
        









    // Reset classes for English
    const elementsToReset = [
        "passengers",
        "from",
        "to",
        "departure",
    ];

    elementsToReset.forEach(key => {
        const element = document.querySelector(`[data-translate="${key}"]`);
        if (element) {
            element.classList.remove("tamil-inp-text"); // Remove Tamil class
        }
    });

    // Select elements to adjust margins
    const fttext2 = document.querySelector(".ft-text2");
    const dptext = document.querySelector(".dp-text");
    const pastext = document.querySelector(".pas-text");

    // Set margins for English
    fttext2.style.marginLeft = '180px'; // Set to English margin
    dptext.style.marginLeft = '215px'; // Set to English margin
    pastext.style.marginLeft = '140px'; // Set to English margin
    srchinp1.placeholder= "pallavaram";
    srchinp2.placeholder=  "perungalathur";
    updateText();
});




tamilButton.addEventListener("click", () => {
    currentLanguage = "ta"; // Set current language to 'ta'
    updateText();

    // Add Tamil class to relevant elements
    const elementsToStyle = [
        "passengers",
        "from",
        "to",
        "departure",
    ];

    elementsToStyle.forEach(key => {
        const element = document.querySelector(`[data-translate="${key}"]`);
        if (element) {
            element.classList.add("tamil-inp-text");
        }
    });

    // Select elements to adjust margins
    const fttext2 = document.querySelector(".ft-text2");
    const dptext = document.querySelector(".dp-text");
    const pastext = document.querySelector(".pas-text");

    // Set margins for Tamil
    fttext2.style.marginLeft = '100px'; // Set to Tamil margin
    dptext.style.marginLeft = '135px'; // Set to Tamil margin
    pastext.style.marginLeft = '93px'; // Set to Tamil margin



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
        console.log(`Translating key: ${key}`); // Log the key being translated
        
        // Check if the key exists in translations
        if (translations[key]) {
            element.textContent = translations[key][currentLanguage];
        } 
        element.classList.remove("tamil-text", "english-text");
        if (currentLanguage === "ta") {
            element.classList.add("tamil-text");
        } else if (currentLanguage === "en") {
            element.classList.add("english-text");
        }
    });
}
