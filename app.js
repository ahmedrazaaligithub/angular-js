var mainController = angular.module('myApp', [])
mainController.controller('myController', function ($scope) {
    $scope.carousalImages =
     ['https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBjbG90aGVzfGVufDB8MHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1550344071-13ecada2a91d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoZXN8ZW58MHwwfDB8fHww',
       'https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGNsb3RoZXN8ZW58MHwwfDB8fHww',
        'https://images.unsplash.com/photo-1619207490561-135b1480f53e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnMlMjBjbG90aGVzfGVufDB8MHwwfHx8MA%3D%3D', ]





    $scope.products =[ {
        pro_id: '0001',
        name: 'Wireless Earbuds',
        image:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyYnVkc3xlbnwwfDB8MHx8fDA%3D',
        price: 49.99,
    },
    {
        pro_id: '0002',
        name: ' Portable Power Bank',
        image:'https://images.unsplash.com/photo-1632156752398-2b2cb4e6c907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG93ZXJiYW5rfGVufDB8MHwwfHx8MA%3D%3D',
        price: 29.99,
        
    },
    {
        pro_id: '0003',
        name: ' Smart Watch',
        image:'https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfDB8MHx8fDA%3D',
        price: 99.95,
        
    },

]

})