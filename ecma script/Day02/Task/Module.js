// 1
class Shape{
    #color;

    constructor (_color){
        this.Color = _color;
    }

    // gettet 
    get Color(){
        return this.#color;
    }

    // setter
    set Color(value){
        if(value !== "red"){this.#color = value;}
        else{console.log("invalide color");}
    }

    //  DrawShape method
    DrawShape() {
        console.log( ` color: ${this.#color} `) 
    }
}

export default Shape;