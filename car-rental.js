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
            available: true
        },
        {
            style: 'suv',
            price: 100,
            carsTotal: 75,
            available: true
        },
        {
            style: 'sports',
            price: 200,
            carsTotal: 15, 
            available: true
        }
    ],
   
    // Method to check number of cars based on the style
    numberAvailableByStyle: function (style, carsTotal, carsRented) {
        this.style = style;
        this.carsTotal = carsTotal;
        this.carsRented = carsRented;
        // Method to check car rental availability
        this.checkAvailable = function() {
            console.log("We have " + (this.carsTotal - this.carsRented) + " " + style +"s available to rent." );
        };
    return this.checkAvailable(this.carsTotal, this.carsRented);
    }
};
    
