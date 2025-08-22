// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
function userData(){
    return fetch("https://jsonplaceholder.typicode.com/users")
}
function handleRespons (response){
    return response.json()
}

function result(data){
    let newUsers = []
    
    for(let i=0 ; i<data.length ; i++){
      newUsers.push(data[i].name)
    }
    
return console.log(newUsers);
}

userData().then(handleRespons).then(result)
