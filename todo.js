function ajax()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            var output="";
            output += "<table>";
            output += "<tr>";
                output +=  "<th>" + "USERID"+ "</th>";
                output +=  "<th>" + "ID" + "</th>";
                output +=  "<th>" + "TITLE"+ "</th>";
                output +=  "<th>" + "COMPLETED" + "</th>";
                output += "</tr>";
            for(var i=0;i<response.length;i++)
            {
                output += "<tr>";
                output +=  "<td>" + response[i].userId+ "</td>";
                output +=  "<td>" + response[i].id + "</td>";
                output +=  "<td>" + response[i].title+ "</td>";
                var com = response[i].completed;
                if( com == true)
                {
                    var x = document.createElement("INPUT");
                    x.setAttribute("type", "checkbox");
                    /*var checkbox = document.createElement('input');
                    checkbox.type = "checkbox";*/
                    output +=  "<td>" + x + "</td>";
                    //output +=  "<td>" + output.appendChild(x) + "</td>";
                }
                else{
                    var x = document.createElement("INPUT");
                    x.setAttribute("type", "checkbox");
                    /*var checkbox = document.createElement('input');
                    checkbox.type = "checkbox";*/
                    //output +=  "<td>" + output.appendChild(x) + "</td>";
                    output +=  "<td>" + x + "</td>";
                }
                //output +=  "<td>" + response[i].completed + "</td>";
                output += "</tr>";


               
        
    }
    output += "</table>";
    document.getElementById("title").innerHTML=output;
    

}

    }
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
 
}
