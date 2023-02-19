import Person from "./person.js";
import course from "./course.js";


export default class Student extends Person {
    rollNumber: string;
    courses: course[] = [];
  
    constructor(name: string, age: number, rollNumber: string) {
      super(name, age);
      this.rollNumber = rollNumber;
    }
  
    registerforCourses(course: course) {
      this.courses.push(course);
    }
  }