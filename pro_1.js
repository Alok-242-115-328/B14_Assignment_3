function studentIntroduction(student){
  if (typeof student !== "object" || student === null||Array.isArray(student)){
    return "Invalid";
  }

  if(!student.name || !student.age || !student.course){
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}