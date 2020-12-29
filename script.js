// Write your JavaScript code here!
// function checkList() {

//     let pilotNameInput = document.querySelector("input[name=pilotName]");
//     let copilotNameInput = document.querySelector("input[name=copilotName]");
//     let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
//     let cargoMassInput = document.querySelector("input[name=cargoMass]");

//     let pilotStatus = document.getElementById("pilotStatus");
//     let copilotStatus = document.getElementById("copilotStatus");
//     let fuelStatus = document.getElementById("fuelStatus");
//     let cargoStatus = document.getElementById("cargoStatus");

//     if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
//         alert("All fields are required");
//         event.preventDefault();
//     }

//     else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
//         alert("Make sure to enter valid information for each field!");
//         event.preventDefault();
//     }


//     pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
//     copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;

//     let faultyItems = document.getElementById("faultyItems");
//     let launchStatus = document.getElementById("launchStatus");

//     faultyItems.style.visibility = "visible";


//     if (fuelLevelInput < 10000 && cargoMassInput < 10000) {
//         fuelStatus.innerHTML = `Fuel too low for launch`;
//         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
//         launchStatus.innerHTML = `Shuttle not ready for launch`;
//         launchStatus.style.color = `red`;
//     }

//     if (fuelLevelInput > 10000 && cargoMassInput > 10000) {
//         fuelStatus.innerHTML = `Fuel high enough for launch`;
//         cargoStatus.innerHTML = `Cargo mass too high for launch`;
//         launchStatus.innerHTML = `Shuttle not ready for launch`;
//         launchStatus.style.color = `red`;
//     }

//     else {
//         fuelStatus.innerHTML = `Fuel high enough for launch`;
//         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
//         launchStatus.innerHTML = `Shuttle ready for launch!`;
//         launchStatus.style.color = `green`;
//     }
    
    
    
//     faultyItems.style.visibility = "visible";

// }

window.addEventListener("load", function() { 
    this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            let i = Math.floor(Math.random() * 5);
            div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[i].name}</li>
                    <li>Diameter: ${json[i].diameter}</li>
                    <li>Star: ${json[i].star}</li>
                    <li>Distance from Earth: ${json[i].distance}</li>
                    <li>Number of Moons: ${json[i].moons}</li>
                </ol>
                <img src="${json[i].image}">
            `;
        });
    })
});

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
    
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
    
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required");
            event.preventDefault();
        }
    
        else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
        }
    
    
        pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
    
        let faultyItems = document.getElementById("faultyItems");
        let launchStatus = document.getElementById("launchStatus");
        faultyItems.style.visibility = "visible";
    
    
        if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
            fuelStatus.innerHTML = `Fuel high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.innerHTML = `Shuttle ready for launch!`;
            launchStatus.style.color = "green";
        }
    
        if (fuelLevelInput.value < 10000 && cargoMassInput.value < 10000) {
            fuelStatus.innerHTML = `Fuel too low for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";

        }
    
        if (fuelLevelInput.value > 10000 && cargoMassInput.value > 10000) {
            fuelStatus.innerHTML = `Fuel high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass too high for launch`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
        }
    

        event.preventDefault();
    
    });
});

