
document.addEventListener('DOMContentLoaded', function(){

  document.getElementById("greetbtn").onclick = () =>{

    var name=document.getElementById('username').value;
    document.getElementById('output').innerHTML="Welcome "+ name;

  };


})

