window.onload = function()
{
    createTable1();

}
var ckd=0,c=0;

function createTable1()
{
    const elements = Elements.GetElements();
    const headings = Elements.GetHeadings();
    const properties = Elements.GetProperties();
    const ele = Elements.GetProp();
    
    
    // start table and add caption
    let tablehtml = "<table>";
    //<caption>TO DO LIST</caption>";

    // insert row of headings
    tablehtml  += "<tr>";
    for(let heading of headings)
    {
        tablehtml  += `<th>${heading}</th>`;
    }
    tablehtml += "</tr>";

    // iterate data and add row of cells for each
    for(let element of elements)
    {
        tablehtml  += "<tr>";

        for(let property of properties)
        {
            tablehtml  += `<td>${element[property]}</td>`;
        }
        for(let el of ele){
            if(element[el]==true){
            tablehtml += `<td><input type="checkbox" checked="true" disabled="true" id="checkbox" onchange=" xyz()" ${element[el]}/></td>`;  
            
           }
           else{
            var t=`<input type="checkbox"  id="checkbox" onchange=" xyz()"  ${element[el]}/>`;
            tablehtml += `<td>${t}</td>`;
            t.onchange=function() {
               ckd++
              }
           } 
           
        }

        tablehtml  += "</tr>";
    }

     
    console.log(ckd);
    
    tablehtml += "</table>";

    // add table to the empty div
    document.getElementById("tablediv").innerHTML = tablehtml;

}


var count = 0 
function xyz(){
    var abcd = document.getElementById("checkbox").checked;
    if (abcd == true) {
        count=count+1;
	    
    }
    else{
        count=count-1;
    }
    if (count==5)
    {
    alert(" Congrats. 5 Tasks have been Successfully Completed ")
    count=0;
    }
}