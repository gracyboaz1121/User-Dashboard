function log(){
	localStorage.clear();
	window.location.href="file:///C:/Users/M1077384/Desktop/Dhanam/User.html";
	
}
let fulldata=JSON.parse(localStorage.getItem('data'));

let Print_Val=localStorage.getItem('data');
console.log(Print_Val);
var Particular_User=JSON.parse(localStorage.getItem('details'));
let arr=[]
arr.push(Particular_User);
console.log(arr);
let particularuser=arr.map(function(val){
	return `<div class="simple">
<p>Email:${val.email}</p>
<p>Phone Number:${val.phone}</p>
<p>DOB:${val.dob.date}</p>
<p>ID:${val.id.name}</p>
<p>ID Value:${val.id.value}</p>
<p>Address: ${val.location.street.number} , ${val.location.street.name} , ${val.location.city} , ${val.location.state} </p>
<p>Nationality:${val.nat}</p>
<p>TimeZone:${val.location.timezone.offset}</p>


</div>
<div class="card">
  <p><img style="width:100%" "height:130%" src="${val.picture.large}"/></p>
  <p><span id="getinfo">${val.name.first}</span> </p>
  <p style="color:white" >Age:  <span id="title">${val.dob.age}</span></p>
  <p style="color:white">Gender: <span id="gender">${val.gender}</span></p>
  <div style="margin: 24px 0;">
  </div>
  <p style="color:white">Country: <span id="button">${val.location.country}</span></p>  
</div>`
}
);
let finalans=particularuser.join('');
document.getElementById('values').innerHTML=finalans;
console.log(finalans);
console.log(particularuser);
