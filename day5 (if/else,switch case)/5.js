console.log('thuhien');
let date = 2
 switch (date) {
    case 1:
        console.log('hom nay la thu2');
        break;
    case 2:
        console.log('hom nay la thu3');
        break;
    case 3:
        console.log('hom nay la thu4');
        break;
    default:
        break;
 }

let course = {
    name:'javascript',
    coin:250
}
if (course.coin>=250) {
    console.log(`mất phí${course.coin}`);
}else{
    console.log('miễn phí');
}

//toán tử 3 ngôi
let result = course.coin>=250 ? 'mất phí' : 'miễn phí'
console.log(result);