var quiz = angular.module("quizApp", [])
quiz.controller("myQuiz", function ($scope,$timeout) {
    $scope.score=0
    $scope.isdisable = false
    $scope.questions = [
        {
            id: '01',
            question: 'Which keyword is used to declare a variable in JavaScript?',
            options: ['var', 'let', 'const', 'int'],
            correctAnswer: 'let'
        },
        {
            id: '02',
            question: 'What is the purpose of the addEventListener method in JavaScript?',
            options: ['To remove an event listener from an element', 'To add a new element to the DOM', 'To bind an event handler to an element',
                'To declare a new event type'],
            correctAnswer: 'To bind an event handler to an element'
        },
        {
            id: '03',
            question: 'Which built-in method in JavaScript is used to sort the elements of an array?',
            options: ['sort()', 'order()', 'arrange()', 'sortArray()'],
            correctAnswer: 'sort()'
        },
        {
            id: '04',
            question: 'What does the JSON.stringify() method in JavaScript do?',
            options: ['Parses a JSON string and returns an object', 'Converts a JavaScript object to a JSON string',
                'Parses a JSON object and returns a string', 'Converts a JSON string to a JavaScript object'],
            correctAnswer: 'Converts a JavaScript object to a JSON string'
        },
        {
            id: '05',
            question: 'What does the querySelectorAll method in JavaScript return?',
            options: ['A single element that matches the specified CSS selector', 'All elements that match the specified CSS selector',
                'All child elements of a specified parent element', 'An array of elements sorted alphabetically by tag name'],
            correctAnswer: 'All elements that match the specified CSS selector'
        }
    ];
    $timeout(function(){
        $scope.isdisable = true
    }, 3000);
    $scope.isCorrect=function(value,id) {
        console.log(value.option);
        console.log(id);
    }

})
