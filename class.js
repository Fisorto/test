/*class Cat{
    #name;
    #age;

    constructor(name, age){
        this.#name = name;
        this.#age = age;
        this.x = 0;
        this.y = 0;
    }

    set name(value) {
        this.#name = value
    }

    get name() {
        console.log(this.#name);
    }

    set age(value) {
        if(value > 0 && value < 25) this.#age = value;
    }

    get age(){
        console.log(this.#age);
    }

    coord(){
        this.x = Math.floor(Math.random() * 1100);
        this.y = Math.floor(Math.random() * 1100);
    }


}


const cat1 = new Cat("Murzik", 13);
const cat2 = new Cat("Barsik", 20);
const cat3 = cat1;


function Dog (name, age){
    this.name = name;
    this.age = age;

    this.x = Math.floor(Math.random() * 1100);
    this.y = Math.floor(Math.random() * 1100);
}

const dog1 = new Dog("Sharik", 22);
const dog2 = new Dog("Morthy", 5);*/
let arr = [1,4,5,8,4]

let arr2 = arr.sort();

let arr3 = [...arr2]
console.log(arr)