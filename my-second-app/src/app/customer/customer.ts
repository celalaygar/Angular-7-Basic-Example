export class Customer{
    id: number;
    name: string;
    city: string;
    age: number;
    constructor(id: number , name: string , city: string, age: number){
        this.id = id;
        this.name = name;
        this.city = city;
        this.age = age;
    }
}