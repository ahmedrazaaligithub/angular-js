var mainController = angular.module('myApp', [])
mainController.controller('myController', function ($scope) {
    $scope.calculate = function () {
        $scope.total;
        $scope.percentage;
        $scope.grade;
        $scope.color;
        if ($scope.maths > 100 || $scope.english > 100 || $scope.urdu > 100) {
            $scope.total = 0
            $scope.percentage = 0
            $scope.grade = 'marks cant be grater then 100'
            $scope.color = 'red'
        }
        else {

            $scope.res = $scope.maths + $scope.english + $scope.urdu
            $scope.total = $scope.res
            $scope.percentage = $scope.res * 100 / 300

            if ($scope.percentage >= 80) {
                $scope.grade = 'A+'
                $scope.color = 'green'
            }
            else if ($scope.percentage >= 70) {
                $scope.grade = 'A'
                $scope.color = 'blue'
            }
            else if ($scope.percentage >= 60) {
                $scope.grade = 'B'
                $scope.color = 'orange'
            }
            else if ($scope.percentage >= 50) {
                $scope.grade = 'C'
                $scope.color = 'Pink'
            }
            else {
                $scope.grade = 'Parhlya kro Fail hogae'
                $scope.color = 'red'
            }
        }


    }
})