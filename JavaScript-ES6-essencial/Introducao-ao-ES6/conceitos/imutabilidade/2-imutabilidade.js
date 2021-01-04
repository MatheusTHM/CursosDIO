const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Paul',
        grade: 4
    },
    {
        name: 'Jennifer',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);