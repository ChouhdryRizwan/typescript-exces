export default class Department {
    name;
    course = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.course.push(course);
    }
}
