  function validate_maths()
  {
    let maths=parseInt(document.getElementById("maths").value);
    if (maths<0 || maths>100)
  {
    document.getElementById("maths_error").innerHTML = "Marksh should be between 1 and 100";
    document.getElementById("maths").style.borderColor = "red";
  }
  else
  {
    document.getElementById("maths_error").innerHTML = "";
    document.getElementById("maths").style.borderColor = "black";
  }

 }

//  document.getElementById("maths").onfocusout = validate_maths;

  document.getElementById("maths").onfocusout = ()=>{

    let maths=parseInt(document.getElementById("maths").value);
    if (maths<0 || maths>100)
    {
      document.getElementById("maths_error").innerHTML = "Marksh should be between 1 and 100";
      document.getElementById("maths").style.borderColor = "red";
    }
    else
    {
      document.getElementById("maths_error").innerHTML = "";
      document.getElementById("maths").style.borderColor = "black";
    }



  };



  function validate_english()
  {
    let maths=parseInt(document.getElementById("english").value);
    if(maths<0 || maths>100)
  {
    document.getElementById("english_error").innerHTML = "Marksh should be between 1 and 100";
  }
    else
  {
    document.getElementById("english_error").innerHTML = "";
  }

  }



  function savedata()
  {
    let rollno= parseInt(document.getElementById("rollno").value);
    let name=document.getElementById("name").value;
    let maths= parseInt(document.getElementById("maths").value);
    let english= parseInt(document.getElementById("english").value);




    document.getElementById("output_rollno").innerHTML=rollno;
    document.getElementById("output_name").innerHTML=name;
    document.getElementById("output_maths").innerHTML=maths;
    document.getElementById("output_english").innerHTML=english;

    if(maths>=35 && english>=35)
  {
    let total=maths+english;
    let avg= total/2;
    //document.getElementById("output_status").innerHTML="Pass <br> Total : "+ total +" <br> Avg :"+avg;
    document.getElementById("output_status").innerHTML=`Pass <br> Total : ${total} <br> Avg : ${avg}`;
    document.getElementById("output_status").style.color="green";

  }
    else
  {
    document.getElementById("output_status").innerHTML="Fail";
    document.getElementById("output_status").style.color="red";
  }


    document.getElementById("rollno").value="";
    document.getElementById("name").value="";
    document.getElementById("maths").value="";
    document.getElementById("english").value="";





  }

