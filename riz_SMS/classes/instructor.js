import Person from "./person.js";
export default class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    asignCourses(course) {
        this.courses.push(course);
    }
}
