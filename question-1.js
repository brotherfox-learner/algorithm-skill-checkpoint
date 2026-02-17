// วิธีที่ 1 For loop
function findStudentById(students, id) {
  // Your code here
  //สมมติว่า id ของนักเรียนไม่สามารถเป็น 0, ติดลบ และทศนิยมได้ ให้ return ก่อนที่จะเข้าไปใน loop 
  if (!Number.isInteger(id) || id <= 0) return null;
  // students ที่ส่งมาไม่ใช่ Array
  if (!Array.isArray(students)) return null;

  for(let student of students){
    if(student.id === id){
      return student
    }
  }
  return null
}

// Test case
const students = [
  { id: 302, name: "Emily Carter" },
  { id: 105, name: "Michael Johnson" },
  { id: 501, name: "Sarah Wilson" },
  { id: 207, name: "Daniel Brown" },
  { id: 403, name: "Sophia Martinez" },
];

console.log(findStudentById(students, 302)); // Output: { id: 302, name: "Emily Carter" }
console.log(findStudentById(students, 105)); 
console.log(findStudentById(students, 501)); 
console.log(findStudentById(students, 207)); 
console.log(findStudentById(students, 4)); // Output: null
console.log(findStudentById(students, 6)); // Output: null
console.log(findStudentById(students, -1)); // Output: null
console.log(findStudentById(students, 0)); // Output: null

// วิธีที่ 2 Built in
function findStudentById2(students, id) {
  // Your code here
  let student = students.find(s => s.id === id)
  return student || null
}

console.log(findStudentById2(students, 302)); // Output: { id: 302, name: "Emily Carter" }
console.log(findStudentById2(students, 105)); 
console.log(findStudentById2(students, 501)); 
console.log(findStudentById2(students, 207)); 
console.log(findStudentById2(students, 4)); // Output: null
console.log(findStudentById2(students, 6)); // Output: null
console.log(findStudentById2(students, -1)); // Output: null
console.log(findStudentById2(students, 0)); // Output: null