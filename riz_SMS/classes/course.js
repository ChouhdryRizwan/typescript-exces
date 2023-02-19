import { std1 } from "../index.js";
export default class course {
    id;
    name;
    student = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(stds) {
        this.student.push(stds);
        std1.registerforCourses(this);
    }
    setInstructor(ins) {
        this.instructor = ins;
    }
}
