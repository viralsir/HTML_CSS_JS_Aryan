function sayhello()
{
  console.log('Hello');
  console.log("welcome to the world of java script");
}

// var no1;  premetive    number ,float ,character , array , object
// let no2;  premetive  , object , array
//  var no1;
// no1=213
// no1=343.44
// no1="vimal"


// function greeting(name){
//   console.log("welcome ", name);
//   alert("welcome "+name+"!");
// }
function greeting()
{
  var name=document.getElementById('username').value;

  document.getElementById('output').innerHTML="<b>welcome "+ name +"</b>";
}
