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
            }, 200); // Timeout to allow click events to register
        });
    });

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

    srchinp4.addEventListener("click", (event) => {
        const pass = document.querySelector(".no-of-pass");
        event.stopPropagation();
        pass.classList.toggle("toggledisplaypass");

        document.body.addEventListener("click", () => {
            pass.classList.add("toggledisplaypass");
        });
    });

    // #city names in Chennai
    const chennai_cities = [
        { "name": "Anna Nagar", "type": "locality" },
        { "name": "T. Nagar", "type": "locality" },
        { "name": "Adyar", "type": "locality" },
        { "name": "Besant Nagar", "type": "locality" },
        { "name": "Velachery", "type": "locality" }
    ];

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
const inputresult = document.querySelector(".inp-results");

srchinp1.addEventListener('input', () => {
    inputresult.innerHTML = ''; // Clear previous results
    const valueToAppend = document.createTextNode(srchinp1.value);
    inputresult.appendChild(valueToAppend);
});