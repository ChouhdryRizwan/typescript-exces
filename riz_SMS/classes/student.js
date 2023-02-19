import Person from "./person.js";
export default class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerforCourses(course) {
        this.courses.push(course);
    }
}
