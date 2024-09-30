document.addEventListener("DOMContentLoaded", () => {
    const spinbtn = document.querySelector(".lr-icon");
    const srchinp1 = document.querySelector(".srch-inp1");
    const srchinp2 = document.querySelector(".srch-inp2");
    const srchinp3 = document.querySelector(".srch-inp3");
    const srchinp4 = document.querySelector(".srch-inp4");
    const daysGrid = document.getElementById('daysGrid');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const calendar = document.querySelector(".calendar");
    const increasebtn = document.querySelector(".increase");
    const decreasebtn = document.querySelector(".decrease");
    const srchinp5 = document.querySelector(".srch-inp5");

    let currentDate = new Date();
    let selectedDay = null; // Track the selected day
    let count = 0;

    spinbtn.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle("spin");
        const tempholder = srchinp1.placeholder;
        srchinp1.placeholder = srchinp2.placeholder;
        srchinp2.placeholder = tempholder;
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
      
        if (count < 1) {
            count = 1;
        } else if (count > 3) {
            count = 3;
        }
    
        

        srchinp5.placeholder = count > 0 ? `${count}` : '1'; 
        srchinp4.placeholder = count === 1 ? '1 Person' : `${count} Persons`; 



    };
    
    
    updatePlaceholder();
    

    increasebtn.addEventListener("click", () => {
        count++;

        updatePlaceholder();
    });

    decreasebtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
        }
        updatePlaceholder();
    });

    updatePlaceholder();
});

// #display passenger counter
const srchinp4 = document.querySelector(".srch-inp4");






srchinp4.addEventListener("click",(event)=>{
    const pass=document.querySelector(".no-of-pass");
      const increasebtn = document.querySelector(".increase");
    const decreasebtn = document.querySelector(".decrease");
    



    



    increasebtn.addEventListener("click",(event)=>{
    event.stopPropagation();
    });
    decreasebtn.addEventListener("click",(event)=>{
        event.stopPropagation();
        })

        event.stopPropagation();
        pass.classList.toggle("toggledisplaypass");

 
    document.body.addEventListener("click", () => {
        pass.classList.add("toggledisplaypass");
    })
})


// #city names in chennai

chennai_cities= [
    {
      "name": "Anna Nagar",
      "type": "locality"
    },
    {
      "name": "T. Nagar",
      "type": "locality"
    },
    {
      "name": "Adyar",
      "type": "locality"
    },
    {
      "name": "Besant Nagar",
      "type": "locality"
    },
    {
      "name": "Velachery",
      "type": "locality"
    }];