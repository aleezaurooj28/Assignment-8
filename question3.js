// Employee data array
const employees = [
    { name: 'Ali', department: 'IT', salary: 80000 },
    { name: 'Sara', department: 'HR', salary: 70000 },
    { name: 'Ahmed', department: 'IT', salary: 95000 },
    { name: 'Ayesha', department: 'Finance', salary: 85000 }
];

// 1. Report containing only employees who belong to the IT department
const itEmployees = employees.filter(emp => emp.department === 'IT');

// 2. First employee whose salary is greater than 90000
const highEarner = employees.find(emp => emp.salary > 90000);

// 3. New list containing only the employee names
const employeeNames = employees.map(emp => emp.name);

// 4. Total salary of all employees
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);

// Displaying the results
console.log("Employees in IT Department:", itEmployees);
console.log("First employee earning more than 90000:", highEarner);
console.log("List of employee names:", employeeNames);
console.log("Total salary budget:", totalSalary);
