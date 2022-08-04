
function submitData(names, emails){
   const lab = { method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    'name': names,
    'email': emails
  })}
  return fetch("http://localhost:3000/users", lab)
.then(response => response.json())
.then (obj => document.querySelector('body').innerHTML = obj.id)

.catch(error => document.querySelector('body').innerHTML = error);}

//function newId(Id){
 // document.querySelector('body').innerHTML = Id;
//}
