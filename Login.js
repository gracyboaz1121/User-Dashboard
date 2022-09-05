let Submit=document.getElementById("Submit");
//let message=document.querySelector(".message");//
let getdata=JSON.parse(localStorage.getItem('data'));
var data3=JSON.parse(localStorage.getItem('details'));
console.log(getdata);
console.log(getdata.results);

/*function Return1(){
	window.location.href="file:///C:/Users/M1077384/Desktop/Dhanam/Profile.html";
}*/
Submit.addEventListener("click",function(event){
	event.preventDefault();
	let username=document.getElementById("txtuser").value;
    let password=document.getElementById("txtpass").value;
	console.log(data3);
	//let checkUser = data3.results.filter(ele => ele.login.username == username && ele.login.password == password)//
	//localStorage.setItem("details",JSON.stringify(fulldata.results));//
	if(username==data3.login.username && password==data3.login.password)
	{
		
		document.location.href="file:///C:/Users/M1077384/Desktop/Dhanam/Profile.html";
	}
	else{
		alert("Hey! I think this credential is not yours");
	}
	
	//console.log('checkUser', checkUser);//
	});
function Return()
{
	window.location.href="file:///C:/Users/M1077384/Desktop/Dhanam/User.html";
}

