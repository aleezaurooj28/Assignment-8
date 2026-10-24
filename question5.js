// Helper method function to calculate results to keep code DRY
function calculatePerformance() {
    const total = this.chemistry + this.mathematics + this.urdu + this.english;
    const percentage = (total / 400) * 100;
    return { total, percentage };
}

// 1. First student object
const student1 = {
    name: "Zainab",
    class: "Grade 10",
    chemistry: 85,
    mathematics: 95,
    urdu: 78,
    english: 82,
    getReport: calculatePerformance
};

// 2. Second student object demonstrating reusability
const student2 = {
    name: "Bilal",
    class: "Grade 10",
    chemistry: 65,
    mathematics: 70,
    urdu: 80,
    english: 75,
    getReport: calculatePerformance
};

// Dot property access
console.log(`Student 1 Name: ${student1.name}, Class: ${student1.class}`);

// Bracket notation access
console.log(`Student 1 Mathematics Marks: ${student1['mathematics']}`);

// Calling the method and displaying results
const report1 = student1.getReport();
console.log(`${student1.name} achieved a percentage of ${report1.percentage}%`);

const report2 = student2.getReport();
console.log(`${student2.name} achieved a percentage of ${report2.percentage}%`);

// Remove one property from student2 and display the final object
delete student2.urdu;
console.log("\nFinal Student 2 Object after removing 'urdu' property:", student2);
