var mainController = angular.module('aptechApp', [])
mainController.controller('aptechController', function ($scope) {
    $scope.carousalImages =[
        'https://i.ytimg.com/vi/IeCiRC7w1lc/maxresdefault.jpg',
        'https://aptech-education.com.pk/images/Career%20logo-01.png',
        'https://www.aptechglobaltraining.com/images/businesspartner/awards_new/education.png',
    ]

    $scope.courses =[ {
        pro_id: '0001',
        title: 'ADSE',
        image:'https://aptech-education.com.pk/assets/images/newimg/home/homeaccp.png',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nemo.',
        duration:'6-8 months',
        price: 49.99,
    },
    {
        pro_id: '0002',
        title: 'HDSE',
        image:'https://aptech-education.com.pk/assets/images/newimg/home/homehdse.png',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nemo.',
        duration:'6-8 months',
        price: 29.99,
        
    },
    {
        pro_id: '0003',
        title: 'Smart Professionals',
        image:'https://aptech-education.com.pk/assets/images/newimg/home/homesp.png',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nemo.',
        duration:'6-8 months',
        price: 99.95,
        
    },
    
    ]




    
})