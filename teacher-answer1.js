class Person {
    constructor(first, last) {
      this.name = {
        first,
        last,
      };
    }
  }
  
  class Teacher extends Person {
    constructor(first, last, subjects) {
      super(first, last);
      if (subjects === undefined) {
        this.subjects = [];
      }
      else {
        this.subjects = [ ...subjects ];
      }
    //   this.learnSubject = function (newSubject) {
    //     // add new subject to subjects
    //     this.subjects.push(newSubject);
    //   };
    }

    learnSubject(newSubject) {
        this.subjects.push(newSubject);        
    } 

    get getFirstSubject() {
      console.log(subjects[0]);
    }
  }
  
  class Student extends Person {
    constructor(first, last, teachers) {
      super(first, last);
      this.teachers = teachers;
      this.addTeacher = function (newTeacher) {
        // add a new Teacher to teachers array
        this.teachers.push(newTeacher);
      };
    }
  }
  
  const array = ['html', 'css', 'js'];
  const Leo = new Teacher('Leo', 'Ho');
  array.push('Math');
  Leo.learnSubject('React');
  console.log(Leo);
  console.log(Leo.subjects);

Teacher.prototype.learnSubject(newSubject) {
    ...
}