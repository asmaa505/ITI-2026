// let x =20

let arr = ["ahmed" , "mohamec" , "ali"]


 class Person {
        #id;
        #name;
        #salary;
        constructor(_id, _name, _salary) {
          if(new.target.name=="Person"){
            throw Error("you can`t make an object caus it is  abstract class")
          }
          this.#id = _id;
          this.#name = _name;
          this.#salary = _salary;
        }

        print() {
          console.log(this.#id, this.#name, this.#salary);
        }

        set Name(_name) {
          if (_name.trim().length < 3) {
            return;
          }
          this.#name = _name;
        }
        get Name(){
            return this.#name
        }
      }


export { arr , Person}