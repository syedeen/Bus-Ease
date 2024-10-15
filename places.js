const createCombinations = (places, bus) => {
    return places.flatMap((from) => 
        places
            .filter(to => to !== from)
            .map(to => ({ from, to, bus }))
    );
};

const busData = [
    {
        bus: "21G",
        places: [
            "BROADWAYSECRETARIAT",
            "CHEPAUK",
            "Q.M.C",
            "Y.M.I.A",
            "MANDAVELI",
            "ADYAR GATE",
            "KOTTURPURAM",
            "ENG.COLLEGE",
            "GUINDY R.S",
            "ST THOMAS MOUNT PO",
            "MEENAMBAKKAM OLD AIRPORT",
            "THIRUSOOLAM NATIONAL AIRPORT",
            "PALLAVARAM",
            "CHROMEPET",
            "T.B.SANATORIUM",
            "TAMBARAM",
            "IRUMBULIYUR",
            "PERUNGALATHUR",
            "VANDALUR GATE",
            "VANDALUR ZOO",
            "KILAMBAKKAM B.S."
        ]
    },
    {
        bus: "515A",
        places: [
            "TAMBARAM",
            "IRUMBULIYUR",
            "PERUNGALATHUR",
            "VANDALUR GATE",
            "VANDALUR ZOO",
            "ANNA NAGAR",
            "KOLAPAKKAM",
            "VENGAMBAKKAM",
            "KANDIGAI",
            "MAMBAKKAM",
            "ARMY CAMP",
            "PUDUPAKKAM",
            "SAMIYAR PANNAI",
            "KELAMBAKKAM",
            "SALT OFFICE",
            "KOVALAM"
        ]
    },
    {
        bus: "104A",
        places: [
            "AVADI",
            "POLYTECHNIC",
            "THIRUMULLAIVOYAL",
            "AMBATTUR O.T.",
            "DUNLOP",
            "AMBATTUR I.E.",
            "NOLAMBUR SERVICE RD",
            "MADURAVOYAL JN",
            "TVS MCC MOTORS",
            "TOLL PLAZA",
            "PORUR JN",
            "MANGADU RD JN",
            "KOVOOR RD JN",
            "PAMMAL ADAYAR BRIDGE",
            "THENDRAL NAGAR",
            "THIRUNEERMALAI RD.JN.",
            "PETROL BUNK",
            "MUDICHUR RD.JN.",
            "IRUMBULIYUR",
            "PERUNGALATHUR",
            "VANDALUR GATE",
            "VANDALUR ZOO",
            "KILAMBAKKAM B.S."
        ]
    },
    {
        bus: "114",
        places: [
            "REDHILLS",
            "AAYURVEDA ASHRAMAM",
            "KAVANGARAI",
            "CYCLE SHOP",
            "BUS BAY-17TH KM",
            "MALLIGAI NAGAR AVE",
            "WATER PIPE THATHANKUPPAM",
            "WEELS INDIA RD.JN.",
            "THIRUMANGALAM",
            "KOYAMBEDU SCHOOL",
            "M.G.R.KOYAMBEDU"
        ]
    }
];

// Generate combinations for all buses
const allCombinations = busData.map(({ bus, places }) => createCombinations(places, bus)).flat();

// Function to find possible buses between two locations
const findBuses = (from, to) => {
    console.log("Searching for buses from", from, "to", to);
    const routes = allCombinations.filter(route => 
        route.from.toLowerCase() === from.toLowerCase() && route.to.toLowerCase() === to.toLowerCase()
    );
    console.log("Found routes:", routes);
    return routes;
};

// Example function to display the result
const displayBuses = (from, to) => {
    const routes = findBuses(from, to);
    if (routes.length === 0) {
        console.log(`No buses available from ${from} to ${to}.`);
    } else {
        console.log(`Possible buses from ${from} to ${to}:`);
        routes.forEach(route => {
            console.log(`Bus: ${route.bus}`);
        });
    }
};

// Event listener for the search button


document.querySelector('.search-button').addEventListener('click', () => {
    const userFrom = document.querySelector(".srch-inp1").value.trim();
    const userTo = document.querySelector(".srch-inp2").value.trim();
    const departureDAY = document.querySelector(".srch-inp3").value.trim();
    const passdata = document.querySelector(".srch-inp4").value.trim();

    // Find the buses
    const routes = findBuses(userFrom, userTo);

    // Prepare the data to pass to the results page
    const busesData = routes.map(route => ({ bus: route.bus }));

    // Redirect to results page with parameters
    const params = new URLSearchParams({
        from: userFrom,
        to: userTo,
        buses: JSON.stringify(busesData),
        DepartureDAY:departureDAY

    });


  // Validate inputs
  if (!userFrom || !userTo || !departureDAY||!passdata) {
    alert("Please fill in all fields.");
    return; // Prevent redirect
}
   
    window.location.href = `results.html?${params.toString()}`;
});
