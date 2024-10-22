// Function to get URL parameters
const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
        from: params.get('from'),
        to: params.get('to'),
        buses: JSON.parse(params.get('buses') || '[]'),
        DepartureDAY:params.get('DepartureDAY')
    };
};// Function to display the results
const displayResults = () => {
    const { from, to, buses ,DepartureDAY} = getQueryParams();
    const resultsDiv = document.getElementById('results');
    // Clear previous results
    resultsDiv.innerHTML = '';

    // If no buses are available
    if (buses.length === 0) {
        resultsDiv.innerHTML = `<p>No buses available from ${from} to ${to}.</p>`;
    } else {
        buses.forEach(bus => {
            const busDiv = document.createElement('div');
            busDiv.classList.add('result-box'); // Adding a class for styling
            busDiv.innerHTML = `
                <h2>Bus: ${bus.bus}</h2>
                <p>From: <strong>${from}</strong></p>
                <p>To: <strong>${to}</strong></p>
                <label for="time-${bus.bus}">Departure:</label>
                <input type="time" id="time-${bus.bus}" name="time" value="12:00" class="inp" required>
                <button class="book-btn">Book</button>
            `;
            resultsDiv.appendChild(busDiv);

     // function to get today's date's last two digits
const getLastTwoDigitsOfDate = () => {
    const today = new Date();
    return today.getDate().toString().padStart(2, '0'); // Get the day and pad with zero if needed
};

//  random number generation function
const generateRandomNumber = () => {
    const randomPart = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    const lastTwoDigits = getLastTwoDigitsOfDate(); // Get the last two digits of today's date
    return `${randomPart.toString().slice(0, 2)}${lastTwoDigits}`; // Combine and return the final number
};
            



            // event listener for the booking button
            const bookButton = busDiv.querySelector('.book-btn');
            bookButton.addEventListener('click', () => {
                const selectedTime = document.getElementById(`time-${bus.bus}`).value; // Get the selected time
                   // Create an object to store
     const bookingData = {
        from: from,
        to: to,
        bus: bus.bus,
        departureDay: DepartureDAY,
        time: selectedTime,
        bookingNumber: generateRandomNumber(), // Generate the custom booking number
      
    };
                localStorage.setItem('bookingData', JSON.stringify(bookingData));
                // Redirect to bookings.html with the parameters
                window.location.href = `bookings.html`;
            });
        });
    }
};


document.querySelector(".back-btn").addEventListener("click",()=>{
    window.location.href="index.html";
})


// Call the displayResults function on page load
window.onload = displayResults;

