import { Item } from './item';

export class Person {
    name: string;
    items: Item[];

    constructor() {
        this.name = '';
        this.items = new Array<Item>();
    }

    subtotal() :number {
        let subtotal = 0; 
        for (var i = 0; i < this.items.length; i++) {
            subtotal += this.items[i].amount;
        }

        return subtotal;
    }
}
