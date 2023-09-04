// constructor function

function StudentObj(name, age, programmingLanguage) {
  this.name = name;
  this.age = age;
  this.programmingLanguage = programmingLanguage;
}

const distro = new StudentObj("Ubuntu", "19", "C++");
console.info(distro);
