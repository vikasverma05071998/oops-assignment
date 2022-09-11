class shape{
    area(){
        return 0
    }

    conVert() {
                return Object.getPrototypeOf(this).constructor.name;
           }
}

class circle extends shape{
    constructor(radius){
        super();
        this.radius = radius
    }
    area(){
        return Math.PI * this.radius*this.radius
    }
}

class rectangle extends shape{
    constructor(l,b){
        super()
        this.length = l
        this.breath = b
    }
    area(){
        return this.length * this.breath
    }
}


class square extends shape{
    constructor(s){
        super();
        this.square = s
    }
    area(){
        return this.square**2
    }
}

class triangle extends shape{
    constructor(l,b){
        super()
        this.length = l
        this.breath = b
    }
    area(){
        return 1/2 * this.length * this.breath
    }
}


 function cumulateShapes(shapes) {
        return shapes.reduce((sum, shape) => {
        
         console.log(`Shape: ${shape.conVert()} - area: ${shape.area()}`);
        return sum + shape.area()
            
            
        }, 0);
    }
    


const shapes =   [new circle(8), new rectangle(8,4), new square(6),new triangle(4,6)]
console.log(cumulateShapes(shapes))




