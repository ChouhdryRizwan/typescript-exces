import { Person } from "./person.js";
export class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = '';
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = name;
    }
}
