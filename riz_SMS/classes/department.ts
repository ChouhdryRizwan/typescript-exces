import course from "./course.js";


export default class Department {
    name: string;
    course: course[] = [];
  
    constructor(name: string) {
      this.name = name;
    }
  
    addCourse(course: course) {
      this.course.push(course);
    }
  }
  