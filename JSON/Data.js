let car = {
    honda: [
        {
            name : "City",
            year: 2022,
            make : "Honda",
            colors: ["White","Black"]
        },
        {
            name : "Civic",
            year: 2023,
            make : "Honda",
            colors: ["White","Black"]
        },
        {
            name : "Vezel",
            year: 2022,
            make : "Honda",
            colors: ["White","Black"]
        },
        {
            name : "Fortuner",
            year: 2022,
            make : "Honda",
            colors: ["White","Black"]
        },
        {
            name : "City",
            year: 2022,
            make : "Honda",
            colors: ["White","Black"]
        },
    ]
}

// console.log(car.honda[1]);

// for(let i = 0; i< car.honda.length; i++){
//     document.write( `name: ${car.honda[i].name}<br> Year: ${car.honda[i].year}<br>`)
// }

// for in loop ... used for array 

// for(let j in car.honda){
//     document.write( `name: ${car.honda[j].name}<br> Year: ${car.honda[j].year}<br>`)
// }

car.honda.forEach(e => {
    document.write( `name: ${e.name}<br> Year: ${e.year}<br>`)
});

let datastring = JSON.stringify(car)
console.log(datastring);

let parsedata = JSON.parse(datastring)
console.log(parsedata);


