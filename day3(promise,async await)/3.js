// ví dụ của hàm promise
// nối tiếp hàm callback hell ở js2


// const callback = (error,data) =>{
//     if (error) {
//       console.log(`call back with error ${error}`);
      
//     }
//     if (data) {
//       console.log(`call back with data ${data}`);
      
//     }
console.log("Hello");
  
  function getTodos(id) {

    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()
        request.onreadystatechange = function () {
          if (this.readyState === 4 && request.status ===200) {
            const data = JSON.parse(request.responseText)
            const dataString = JSON.stringify(data)
            resolve(data)
          }
          if (this.readyState === 4 && request.status !== 200) {
            
            reject('somethings wrong')
          }
        }
        request.open('GET',"http:/jsonplaceholder.typicode.com/todos",true);
        request.send()
    })
   
  }


// const newgetTodos = async(id)=>{

//   let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//   if(response&& response.status !==200){
//     throw new Error ('something wrongs '+ response.status)
//   }
//   let data = await response.json()
//   return data
// }
// newgetTodos(2).then(data=>{
//   console.log('check get data', data);
// }).catch(err=>{
//   console.log('check error',err.message);
// })
// console.log('thuhien');

const newgetTodos = async(id)=>{
try {
  let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  
  let data = await response.json()
  return data
} catch (e) {
  console.log('check catch erorr',e);
}
  
}
newgetTodos(2).then(data=>{
  console.log('check get data', data);
}).catch(err=>{
  console.log('check error',err.message);
})
console.log('thuhien');
