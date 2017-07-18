// JS object for car rental facility
// 3 car models: sedan, SUV, sports car
// rental price for each
// available or not
// total number available for each category
// ability to submit a rental request

var carList = {
    cars: [
        {
            style: 'sedan',
            price: 50,
            carsTotal: 125,
            carsRented: 105,
            available: true
        },
        {
            style: 'suv',
            price: 100,
            carsTotal: 75,
            carsRented: 75,
            available: false
        },
        {
            style: 'sports car',
            price: 200,
            carsTotal: 15,
            carsRented: 3,
            available: true
        }
    ],
   
    // Method to check number of cars based on the style
    numberAvailableByStyle: function() {
        
        for (var i = 0; i < carList.cars.length; i++) {
            var eachStyle = carList.cars[i];
            console.log("Out of " + eachStyle.carsTotal + ", we have " + (eachStyle.carsTotal - eachStyle.carsRented) + " " + eachStyle.style +"s available to rent." );
        }
    },
    
    rentalRequest: function(style) {
        console.log("You would like to rent a " + style);
        // if () {
            
        // } else {
            
        // }
        
        // console.log("")
        
        
        return true;
    }
    

};
    
