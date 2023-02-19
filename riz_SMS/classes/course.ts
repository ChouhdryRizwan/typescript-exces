import Instructor from "./instructor.js";
import Student from "./student.js";
import {std1} from "../index.js"

export default class course {
    id: string;
    name: string;
    student: Student[] = [];
    instructor!: Instructor;
  
    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }
  
    addStudent(stds: Student) {
      this.student.push(stds);
      std1.registerforCourses(this);
    }
  
    setInstructor(ins: Instructor) {
      this.instructor = ins;
    }
  
    // setCourse(course_name: string) {
    //     this.name = course_name;
    //   }
  }