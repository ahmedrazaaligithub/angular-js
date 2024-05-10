var mainController = angular.module('myApp', [])
mainController.controller('myController', function ($scope) {
    $scope.countries = ['pakistan', 'india', 'australia', 'USA', 'UK', 'germony', 'ireland', 'srilanka', 'UAE', 'russia']





    $scope.products =[ {
        pro_id: '0001',
        name: 'Wireless Earbuds',
        image:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyYnVkc3xlbnwwfDB8MHx8fDA%3D',
        price: 49.99,
        desc:'Lavender skies whisper secrets to the sleepy meadow below, dreaming peacefully.', 
        AdditionalInfo:['LED indicator for battery level.' ]
    },
    {
        pro_id: '0002',
        name: ' Portable Power Bank',
        image:'https://images.unsplash.com/photo-1632156752398-2b2cb4e6c907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG93ZXJiYW5rfGVufDB8MHwwfHx8MA%3D%3D',
        price: 29.99,
        desc:'Lavender skies whisper secrets to the sleepy meadow below, dreaming peacefully.', 
        AdditionalInfo: ['10000mAh' ,'LED indicator for battery level.']
    },
    {
        pro_id: '0003',
        name: ' Smart Watch',
        image:'https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfDB8MHx8fDA%3D',
        price: 99.95,
        desc:'Lavender skies whisper secrets to the sleepy meadow below, dreaming peacefully.', 
        AdditionalInfo: ['Water-resistant','compatible with iOS and Android smartphones.']
    },
    {
        pro_id: '0004',
        name: 'Steel Water Bottle',
        image:'https://images.unsplash.com/photo-1664714628878-9d2aa898b9e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RlZWwlMjBXYXRlciUyMEJvdHRsZXxlbnwwfDB8MHx8fDA%3D',
        price: 19.99,
        desc:'Lavender skies whisper secrets to the sleepy meadow below, dreaming peacefully.', 
        AdditionalInfo: ['available in multiple colors.','BPA-free']
    }, {
        pro_id: '00035',
        name: 'Foldable Laptop Stand',
        image:'https://plus.unsplash.com/premium_photo-1681566925324-ee1e65d9d53e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9sZGFibGUlMjAlNUNMYXB0b3AlMjBTdGFuZHxlbnwwfDB8MHx8fDA%3D',
        price: 39.95,
        desc:'Lavender skies whisper secrets to the sleepy meadow below, dreaming peacefully.', 
        AdditionalInfo: ['Compatible with laptops up to 15.6 inches',' made of durable aluminum alloy.']
    },
]

})
