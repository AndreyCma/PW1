document.addEventListener("DOMContentLoaded", () => {

  class Person {
    constructor(name,surname){
      this.name = name;
      this.surname = surname;
    }

    get getName(){
      return this.name;
    }
    set setName(value){
      this.name = value;
    }
    get getSurname(){
      return this.surname;
    }
    set setSurname(value){
      this.surname = value;
    }

  }

  const worker = new Person('Иван', 'Иванов');
  console.log(worker.getName);
  console.log(worker.getSurname);
  console.log(worker.setSurname = 'Петров');
  console.log(worker.getSurname);

});