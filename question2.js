// Original list of student marks
const studentMarks = [45, 78, 92, 61, 88, 54, 73, 95];

// 1. New list with every student's mark increased by 5
const increasedMarks = studentMarks.map(mark => mark + 5);

// 2. New list containing only students whose marks are 70 or above
const marks70OrAbove = studentMarks.filter(mark => mark >= 70);

// 3. First mark greater than 90
const firstMarkOver90 = studentMarks.find(mark => mark > 90);

// 4. Total of all marks in the original list
const totalMarks = studentMarks.reduce((total, mark) => total + mark, 0);

// Displaying results (original array remains unchanged)
console.log("Original Student Marks:", studentMarks);
console.log("Marks increased by 5:", increasedMarks);
console.log("Marks 70 or above:", marks70OrAbove);
console.log("First mark greater than 90:", firstMarkOver90);
console.log("Total of all original marks:", totalMarks);
