
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



  let student={};
   student["rollno"]=rollno;
   student["name"]=name;
   student["maths"]=maths;
   student["english"]=english;
   student["status"]=(maths>=35 && english>=35)?"Pass":"Fail";
   student["total"]=(student["status"]=="Pass")?maths+english : "-"
   student["Avg"]=(student["status"]=="Pass")? (maths+english)/2 : "-"



  let studentarray=[]

  //        console.log(localStorage.getItem("student"));
  if(localStorage.getItem("studentlist")==null)
  {

    studentarray.push(JSON.stringify(student));
    localStorage.setItem("studentlist",JSON.stringify(studentarray)); // convert json into string
  }
  else
  {
      studentarray=JSON.parse(localStorage.getItem("studentlist")); // convert string into json
    // [{"rollno":1,"name":"amit","maths":54,"english":56}]
       studentarray.push(JSON.stringify(student));
    //[{"rollno":1,"name":"amit","maths":54,"english":56}  {"rollno":2,"name":"rajan","maths":54,"english":56}]
       localStorage.setItem("studentlist",JSON.stringify(studentarray));
  }





  // let tr=document.createElement("tr");
  // let td_rollno=document.createElement("td");
  // let td_name=document.createElement("td");
  // let td_maths=document.createElement("td");
  // let td_english=document.createElement("td");
  // let td_pass_fail=document.createElement("td");
  // let td_total=document.createElement("td");
  // let td_avg=document.createElement("td");
  //
  //
  // td_rollno.innerHTML=rollno;
  // td_name.innerHTML=name;
  // td_maths.innerHTML=maths;
  // td_english.innerHTML=english;
  //
  // if(maths>=35 && english>=35)
  // {
  //   let total=maths+english;
  //   let avg= total/2;
  //   td_pass_fail.innerHTML="Pass";
  //   td_pass_fail.style.color="green";
  //   td_total.innerHTML=total;
  //   td_avg.innerHTML=avg;
  //
  // }
  // else
  // {
  //   td_pass_fail.innerHTML="Fail";
  //   td_pass_fail.style.color="red";
  //   td_total.innerHTML="-";
  //   td_avg.innerHTML="-";
  //
  // }
  //
  // tr.append(td_rollno);
  // tr.append(td_name);
  // tr.append(td_maths);
  // tr.append(td_english);
  // tr.append(td_pass_fail);
  // tr.append(td_total);
  // tr.append(td_avg);
  //
  // let table=document.getElementById("studentlisttable");
  // table.append(tr);

  document.getElementById("rollno").value="";
  document.getElementById("name").value="";
  document.getElementById("maths").value="";
  document.getElementById("english").value="";

}


