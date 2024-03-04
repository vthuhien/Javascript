
//use loop for to get elements of array
let newArray = ['javascript','php','python','c++']
let arrayLength = newArray.length
for( let i = 0 ; i<arrayLength ; i++){
    console.log(newArray[i]);
}

//use loop forin to get key of obect or can get values of object

//a.obj
let infor = {
    name:'thuhien',
    age:15,
    address:'haiphong'
}

for(let key in infor){
    console.log(key); //lấy ra key của obj
}
for(let key in infor){
    console.log(infor[key]); //lấy ra values của obj
}

//b.array
let array = [ 'thuhien','15','haiphong']

for(let key in array){
    console.log(key); //lấy ra stt,index
}
for(let key in  array){
    console.log( array[key]); //lấy ra elements
}

//c.strings

let fullnname = 'vuthithuhien'
for(let key in fullnname){
    console.log(key)// lấy ra số thứ tự,index
}
for(let key in fullnname){
    console.log(fullnname[1]); //lấy ra từng chữ trong strings
}


//use loop for of to get value of obj
//a.strings
let fullname = 'vuthithuhien'
for(let value of fullname){
    console.log(value); // lấy ra từg chữ trong strings
}


let myInfor = {
    name:'thuhien',
    age:15,
    address:'haiphong'

}
let newobj = Object.keys(myInfor)
for(let value of Object.keys(myInfor)){   //giá tri của keys
    console.log(value); 
}

let newObj = Object.values(myInfor)
for(let value of Object.values(myInfor)){  //giá trị của giá tri
    console.log(value);
}