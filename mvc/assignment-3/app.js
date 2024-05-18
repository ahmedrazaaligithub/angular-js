var app = angular.module('employeesApp', []);

app.controller('EmployeesController', ['$scope', function($scope) {
    $scope.employees = [
        {
            id:'01',
            name: "Aisha",
            department: "Marketing",
            designation: "Executive",
            salary: 700000,
            gender: "Female",
            age: 25
        },
        {
            id:'02',
            name: "Ravi",
            department: "IT",
            designation: "Developer",
            salary: 850000,
            gender: "Male",
            age: 28
        },
        {
            id:'03',
            name: "Sara",
            department: "Finance",
            designation: "Analyst",
            salary: 900000,
            gender: "Female",
            age: 27
        },
        {
            id:'04',
            name: "Ahmed",
            department: "HR",
            designation: "Assistant",
            salary: 500000,
            gender: "Male",
            age: 22
        },
        {
            id:'05',
            name: "Emily",
            department: "Sales",
            designation: "Manager",
            salary: 1200000,
            gender: "Female",
            age: 30
        },
        {
            id:'06',
            name: "John",
            department: "Operations",
            designation: "Supervisor",
            salary: 750000,
            gender: "Male",
            age: 35
        },
        {
            id:'07',
            name: "Nina",
            department: "Customer Service",
            designation: "Coordinator",
            salary: 600000,
            gender: "Female",
            age: 26
        }
        
    ];
}]);