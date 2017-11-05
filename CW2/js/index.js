var form, check, pos, t;

form=document.getElementById("i_login");

form.style.display="none";
function display(){
	form.style.display="inline";
}
setInterval("display()",3000);

pos=-1;

function move(){
	if(pos==37){
		clearInterval(t);
	}	
	else{
		pos++;
		form.style.left=pos+"%";
	}
}		
t=setInterval(move,200);

function notice(){
	var user=document.getElementById("user").value;
	var pw=document.getElementById("pw").value;
	checklogin();  //User name or password must not be empty
	
	if(user.length==0||pw.length==0){
		event.preventDefault();
		alert("User name or password must not be empty!");
	}
	else if(check==0) {
		event.preventDefault();
		alert("Wrong user name or password, please input again!");
	}
}