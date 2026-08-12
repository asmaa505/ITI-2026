import Shape from "./Module";

class Circle extends Shape{
    #x;
    #y;
    #r;

    constructor(_color ,_x , _y , _r){
        super(_color)
        this.#x = _x;
        this.#y = _y;
        this.#r = _r;
    }

    getArea(){
        this.DrawShape();
        return this.#r ** 2 * 3.14;
    }


}

export default Circle;