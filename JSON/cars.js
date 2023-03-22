let cars = [
    {
      honda: [
        {
          brand: "Honda",
          name: "City",
          cc: 1800,
          year: 2022,
          colors: ["White", "Black", "Brown"],
          warranty: "2 years",
          price: '4,779,000'
        },
        {
          brand: "Honda",
          name: "BR-V",
          cc: 2000,
          year: 2022,
          colors: ["White", "Black", "Gray"],
          warranty: "3 years",
          price: "6,529,000"
        },
        {
          brand: "Honda",
          name: "Civic",
          cc: 1800,
          year: 2022,
          colors: ["White", "Black", "Gray", "Blue"],
          warranty: "2 years",
          price: "8,599,000"
        },
        {
          brand: "Honda",
          name: "Accord ",
          cc: 2200,
          year: 2023,
          colors: ["White", "Black", "Gray", "Blue"],
          warranty: "4 years",
          price: "15,499,000"
        },
      ],
    },
    {
      toyota: [
        {
          brand: "Toyota",
          name: "Camry",
          cc: 1800,
          year: 2022,
          colors: ["White", "Black", "Brown"],
          warranty: "2 years",
          price: '26,220'
        },
        {
          brand: "Toyota",
          name: "Corolla",
          cc: 1600,
          year: 2022,
          colors: ["White", "Black", "Brown"],
          warranty: "2 years",
          price: '26,22560'
        },
        {
          brand: "Toyota",
          name: "GR86",
          cc: 1800,
          year: 2022,
          colors: ["White", "Black", "Brown","Orange"],
          warranty: "2 years",
          price: '26,220'
        },
        {
          brand: "Toyota",
          name: "GR Supra",
          cc: 3000,
          year: 2024,
          colors: ["White", "Black", "Brown","Gray"],
          warranty: "2 years",
          price: '26,220'
        },
       
      ],
    },
  ];

//   console.log(cars[1].toyota);

cars[0].honda.forEach(e => {
    document.write(`Name: ${e.name} <br> Brand: ${e.brand} <br><br>`)
});