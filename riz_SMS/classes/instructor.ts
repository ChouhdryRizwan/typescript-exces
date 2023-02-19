import course from "./course.js";
import Person from "./person.js";

export default class Instructor extends Person {
    salary: number;
    courses: course[] = [];
  
    constructor(name: string, age: number, salary: number) {
      super(name, age);
      this.salary = salary;
    }
  
    asignCourses(course: course) {
      this.courses.push(course);
    }
  }