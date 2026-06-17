
function viewdata()
{

      if( localStorage.getItem("studentlist")!=null)
      {
           let studentlist = JSON.parse(localStorage.getItem("studentlist"));
           let table = document.getElementById("studentlisttable");

        for (let student of studentlist)
        {
              // console.log(student);
               student=JSON.parse(student);
               let tr=document.createElement("tr");
                    for (let key in student)
                    {
                         let td = document.createElement("td");
                         td.innerHTML = student[key];
                         tr.append(td);
                    }

              table.append(tr);
        }


      }
}
document.addEventListener("DOMContentLoaded", viewdata);
