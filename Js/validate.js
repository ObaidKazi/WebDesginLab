function checkEmail(e) {
	var element=e.target;
	if (/[^a-zA-Z0-9@.]/.test(element.value)){
		alert("Name is Invalid!Only character a-z ,A-Z,0-9 ,@,.,are allowed.");
	element.value="";
	return false;
	}
	if(!/[a-zA-Z]/.test(element.value))
	{
	alert("Name is Invalid!Only character 0-9 ,@,.,are allowed.");
	element.value="";
	return false;	
	}

	if(!/[0-9]/.test(element.value))
	{
	alert("Name is Invalid!Only character 0-9 ,@,.,are allowed.");
	element.value="";
	return false;	
	}

	if(!/[@]/.test(element.value))
	{
	alert("Name is Invalid!Only character 0-9 ,@,.,are allowed.");
	element.value="";
	return false;	
	}

	if(!/[.]/.test(element.value))
	{
	alert("Name is Invalid!Only character . are allowed.");
	element.value="";
	return false;	
	}
}
var email=document.getElementById('email');
email.addEventListener('blur',checkEmail,false);