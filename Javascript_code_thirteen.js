/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(a) {
        this.polygon = a;
    };

    perimeter() {
        let perimeter = 0, i =0;
        while(i < this.polygon.length) { perimeter += this.polygon[i]; i++; }
        return perimeter;
    }
    
    
}
    

