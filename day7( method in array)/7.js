var courses=[
    {
        id:'1',
        name:'js',
        coin:250
    },
    {
        id:'2',
        name:'c++',
        coin:0
    },
    {
        id:'3',
        name:'python',
        coin:200
    }
]
// courses.forEach(function(infor){
//     console.log(infor);
// })

// var bien = courses.every(function(infor,index){
//     return infor.coin === 0 //kiểm tra tất cả các phần tử của mảng xem có thoả mãn đk coin = 0 là miễn phí không
// })
//    console.log(bien);   //chỉ cần 1 phần tử sai thì đều trả ra false

// var bien2 = courses.find(function(infor,index){
//     return infor.name === 'js'
// })
// console.log(bien2);
// var coursesHandle = courses

// var newCourses = courses.map(function(courses){
//     return {
//         id: courses.id,
//         name: `Khoa hoc: ${courses.name}`,
//         coin: courses.coin,
//         coinText: `Gia: ${courses.coin}`
//     }
// })
// console.log(newCourses);



let newArray = courses.reduce((previousValue,currentValue)=>{
    return previousValue + currentValue
})
console.log(courses);
