var quiz = angular.module("quizApp", [])
quiz.controller("myQuiz", function ($scope,$timeout) {
    $scope.score=0
    $scope.isdisable = false
    $scope.wrongans=[]
    $scope.result = document.getElementById("result")
    $scope.questions = [
        {
            id: 0,
            question: 'Which keyword is used to declare a variable in JavaScript?',
            options: ['var', 'let', 'const', 'int'],
            correctAnswer: 'let'
        },
        {
            id: 1,
            question: 'What is the purpose of the addEventListener method in JavaScript?',
            options: ['To remove an event listener from an element', 'To add a new element to the DOM', 'To bind an event handler to an element',
                'To declare a new event type'],
            correctAnswer: 'To bind an event handler to an element'
        },
        {
            id: 2,
            question: 'Which built-in method in JavaScript is used to sort the elements of an array?',
            options: ['sort()', 'order()', 'arrange()', 'sortArray()'],
            correctAnswer: 'sort()'
        },
        {
            id: 3,
            question: 'What does the JSON.stringify() method in JavaScript do?',
            options: ['Parses a JSON string and returns an object', 'Converts a JavaScript object to a JSON string',
                'Parses a JSON object and returns a string', 'Converts a JSON string to a JavaScript object'],
            correctAnswer: 'Converts a JavaScript object to a JSON string'
        },
        {
            id: 4,
            question: 'What does the querySelectorAll method in JavaScript return?',
            options: ['A single element that matches the specified CSS selector', 'All elements that match the specified CSS selector',
                'All child elements of a specified parent element', 'An array of elements sorted alphabetically by tag name'],
            correctAnswer: 'All elements that match the specified CSS selector'
        }
    ];
    $timeout(function(){
        $scope.isdisable = true
    }, 1500000);
    $scope.isCorrect=function(value,id) {
        $scope.usereAns = value.option
        $scope.selectedObj= $scope.questions[id]
        console.log($scope.usereAns,$scope.selectedObj);
        if($scope.usereAns === $scope.selectedObj.correctAnswer){
            $scope.score += 10

            console.log($scope.score);
        }
        else{
            $scope.wrongans.push(id)
            console.log('wrongans',$scope.wrongans);
        }
    }
$scope.showResult = function(){
    if ($scope.score>= 30){
        $scope.result.innerHTML =`
        <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Your score is!</span> ${$scope.score}
</div>
        `
    }
    else{
        $scope.result.innerHTML =` <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span class="font-medium">Your score is!</span> ${$scope.score}
      </div>`
    }

}
})
