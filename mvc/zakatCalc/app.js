var zakat = angular.module("myApp", [])

zakat.controller("time_ctrl", function($scope,$interval){
    $scope.myTime = new Date().toLocaleTimeString();
    
    $interval(function(){

        $scope.myTime = new Date().toLocaleTimeString();

    }, 1000);
        });
    zakat.controller("ctrl_one", function($scope,$interval){
    $scope.zakat = function(){
        if($scope.gold >= 7){
            $scope.goldPrice = $scope.gold * 240500;
            $scope.goldZakat = $scope.goldPrice / 2.5;
        }
        else{
            $scope.goldPrice = 0;
        }
        
        if($scope.silver >= 52.5){
            $scope.silverPrice = $scope.silver * 3270;
            $scope.silverZakat = $scope.silverPrice / 2.5;

        }
        else{
            $scope.silverPrice = 0;
        }

        if($scope.assets >= 171675){
            $scope.assetsZakat = $scope.assets / 2.5;
        }
        else{
            $scope.assetsZakat = 0;
        }

        $scope.totalZakat = $scope.goldZakat + $scope.silverZakat + $scope.assetsZakat
    }
    
})
zakat.controller("timeOuts",function($scope,$timeout){
    $scope.message ="gold rate"
   $timeout(function(){
       $scope.message = 'Today gold rate is 24500'
   }, 5000);
   $scope.message2 ="silver rate"
   $timeout(function(){
    $scope.message2 = 'Today silver rate is 3270'
}, 10000);

})

