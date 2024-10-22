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
    },
    {
        bus: "101",
        places: [
            "THIRUVOTRIYUR",
            "THIRUVOTRIYUR TEMPLE",
            "THANGAL",
            "ANNA NAGAR",
            "ROYAPURAM P.S",
            "CLIVE BATTERY",
            "PARRYS",
            "M.G.R.CENTRAL",
            "DASAPRAKASH",
            "TAYLORS ROAD",
            "AMINJIKARAI",
            "NADUVANKARAI",
            "ARUMBAKKAM",
            "NERKUNDRAM",
            "MADURAVOYAL",
            "VAANAGARAM",
            "VELAPPANCHAVADI",
            "KUMUNANCHAVADI",
            "POONAMALLEE"
        ]
    },
    {
        bus: "102",
        places: [
            "BROADWAY",
            "SECRETARIAT",
            "CHEPAUK",
            "Q.M.C",
            "FORESHORE ESTATE",
            "A.M.S.HOSPITAL",
            "ADYAR O.T.",
            "INDIRA NAGAR WATER TANK",
            "SRP TOOLS",
            "KANDANCHAVADI",
            "THORAPPAKKAM TEA SHOP",
            "MOOTAKARAN CHAVADI",
            "KARAPAKKAM",
            "SHOZHANGANALLUR P.U.OFFICE",
            "KUMARAN NAGAR",
            "SEMMANCHERI",
            "NAVALUR",
            "CHURCH",
            "PALAVASTHIC CHEMICALS",
            "HINDUSTAN ENG. COLLEGE",
            "KELAMBAKKAM"
        ]
    },
    {
        bus: "102A",
        places: [
            "THIRUVANMIYUR",
            "SRP TOOLS",
            "KANDANCHAVADI",
            "THORAPPAKKAM TEA SHOP",
            "MOOTAKARAN CHAVADI",
            "KARAPAKKAM",
            "SHOZHANGANALLUR P.U.OFFICE",
            "KUMARAN NAGAR",
            "SEMMANCHERI",
            "NAVALUR",
            "SIPCOT",
            "SIRUSERI I.T.PARK",
            "PUDUPAKKAM P.U.O.",
            "PUDUPAKKAM/VANDALOOR RD.J"
        ]
    },

    {
        bus: "18ACT",
        places: [
            "GUINDY TVK ESTATE",
            "ST THOMAS MOUNT PO",
            "MEENAMABAKKAM OLD AIRPORT",
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
    }
    ,

    {
        bus: "E18",
        places: [
            "BROADWAY",
            "M.G.R.CENTRAL",
            "P.OR & SONS",
            "T.V.S",
            "D.M.S",
            "S.H.B",
            "SAIDAPET",
            "CONCORDE",
            "GUINDY R.S",
            "ST THOMAS MOUNT PO",
            "MEENAMABAKKAM OLD AIRPORT",
            "THIRUSOOLAM NATIONAL AIRPORT",
            "PALLAVARAM",
            "CHROMEPET",
            "T.B.SANATORIUM",
            "TAMBARAM",
            "IRUMBULIYUR",
            "PERUNGALATHUR",
            "VANDALUR GATE",
            "VANDALUR ZOO",
            "URAPAKKAM",
            "PALAKKA COMPANY",
            "GUDUVANCHERY"
        ]
    }
    ,
    {
        bus: "D70",
        places: [
            "AMBATTUR I.E.",
            "MOGAIPAIR ROAD JN.",
            "THIRUMANGALAM",
            "KOYAMBEDU SCHOOL",
            "M.M.D.A.COLONY RD.JN.",
            "JN OF III AND 1ST AVE",
            "JAFFARKHAN PET",
            "CIPET",
            "GUINDY TVK ESTATE",
            "CONCORDE",
            "JN.OF RACE COURSE RD",
            "GURUNANAK COLLEGE",
            "VELACHERY"
        ]
    }
    ,

    {
        bus: "70V",
        places: [
            "M.G.R.KOYAMBEDU",
            "M.M.D.A.COLONY RD.JN.",
            "JN OF III AND 1ST AVE",
            "JAFFARKHAN PET",
            "CIPET",
            "ST THOMAS MOUNT PO",
            "MEENAMABAKKAM OLD AIRPORT",
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
    }
    
    
    

















];

// Generate combinations for all buses
const allCombinations = busData.map(({ bus, places }) => createCombinations(places, bus)).flat();

// Function to find buses between two locations
const findBuses = (from, to) => {
    console.log("Searching for buses from", from, "to", to);
    const routes = allCombinations.filter(route => 
        route.from.toLowerCase() === from.toLowerCase() && route.to.toLowerCase() === to.toLowerCase()
    );
    console.log("Found routes:", routes);
    return routes;
};

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
