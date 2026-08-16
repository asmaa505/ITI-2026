import Shape from "./Module";

// Rectangle
class Rectangle extends Shape{
    #width;
    #height;

    constructor(_color  , _width , _height){
        super(_color);
        this.#width = _width;
        this.#height = _height;
    }

    getArea(){
        this.DrawShape();
        return this.#width * this.#height;
    }
}

// Square
class Square extends Rectangle{
    constructor(_color  , _width , _height){
        super(_color  , _width , _height);
    }

}

export {Rectangle , Square};