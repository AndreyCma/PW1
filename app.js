document.addEventListener("DOMContentLoaded", () => {

  class User {
    constructor(name,surname){
      this.name = name;
      this.surname = surname;
    }

    get getFullName() {
      return this.name +" " + this.surname;
    }
  }

  class Student extends User {
    constructor(name,surname,year){
      super(name,surname);
      this.year = year;
    }

    get getCourse() {
      let currentTime = new Date();
      let year = currentTime.getFullYear();
      let course = year - this.year;
      if (course > 0 && course < 6){
        return course;
      } else {
        return "Error!"
      }
    }
  }


  const student = new Student('Иван', 'Иванов',2018);
  console.log(student.name);
  console.log(student.surname);
  console.log(student.getFullName);
  console.log(student.year);
  console.log(student.getCourse);

});