//ví du của hàm calback hell
const callback = (error,data) =>{
  if (error) {
    console.log(`call back with error ${error}`);
    
  }
  if (data) {
    console.log(`call back with data ${data}`);
    
  }
}

function getTodos(callback) {
  let request = new XMLHttpRequest()
  request.onreadystatechange = function () {
    if (this.readyState === 4 && request.status ===200) {
      const data = JSON.parse(request.responseText)
      callback(undefined,request.responseText);
      // đưa dữ liêu sang dạng json - obj (dạng này client sẽ hiểu dc)
      const dataString = JSON.stringify(data)
      callback(undefined,data)
      // đưa dữ liệu sang dạng json - string ( dạng này sever máy chủ sẽ hiểu)
    
    }
    if (this.readyState === 4 && request.status !== 200) {
      
      callback('somthing wrongs',undefined);
    }
  }
  request.open('GET',"https://jsonplaceholder.typicode.com/todos/",true);
  request.send()
}
getTodos(callback)

console.log('thuhien');

