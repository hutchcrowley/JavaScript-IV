// CODE here for your Lambda Classes


// Person constructor function

class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }
    greet() {
        return 'Hello, my name is ' + this.name + ', I am from ' + this.location;
    }
}

// Student constructor function

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        return 'Today we are learning about ' + this.subject;
    }

    grade(student, subject) {
        return this.name + ' receives a perfedt score on ' + this.subject;
    }
}

//  Student constructor function

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.previousBackground;
        this.favSubjects = studentAttrs.favSubjects;
    }

listsSubjects(arr) {
    for 
}

    PRAssignment(subject) {
        return this.name + ' has begun sprint challenge on ' + this.subject;
    }

    sprintChallenge(subject) {
        return this.name + ' has begun sprint challenge on ' + this.subject;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    standUp(channel) {
        return this.name + ' announces to ' + this.channel + '@channel standby times!';
    }

    debugsCode(Student, subject) {
        return this.name + ' debugs ' + student.name + '\'s code on ' + this.subjects;
    }
}

//  Create new instances of the Person object.

const zach = new Person({
    name: 'Zach',
    age: 30,
    location: 'Nashville'
});
console.log(zach.speak());

const alex = new Person({
    name: 'Alex',
    age: 25,
    location: 'East Nashville',
});
console.log(alex.speak());

const matt = new Person({
    name: 'Matt',
    age: 33,
    location: 'Old Hickory',
});
console.log(matt.speak());

//  Create new instances of the Student object.

const jerry = new Student ({
     name: 'Jerry',
     age: 44,
     location: 'Pittsburghl'
     previousBackground: 'Comedian',
     className: 'WebPT10',
     favSubjects: ['HTML', 'CSS', 'JavaScript'],

});