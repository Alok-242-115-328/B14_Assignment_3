function generateLeaderboard(students){
  if (!Array.isArray(students) || students.length === 0){
    return "Invalid";
  }

  
  const isValid = students.every(student=> 
    typeof student === "object" &&
    student !== null &&
    "name" in student &&
    typeof student.name === "string" &&
    "score" in student &&
    typeof student.score === "number"
  );

  if(!isValid){
    return "Invalid";
  }

  const qualified = students.filter(student => student.score >= 70);
  const names = qualified.map(student => student.name.toUpperCase());

  return names.slice(0, 3);
}