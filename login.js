function validateform(){  
var name=document.getElementById("userid").value;  
var password=document.getElementById("password").value; 
if (name=="admin" && password=="12345"){   
  return true;  
}else {
    alert("Invalid Credentials");
  return false;  
  }  
}
