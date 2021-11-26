function completed(){


    var xhttp=new XMLHttpRequest();

    //condition

    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            
            let completed = "";

            if( response[i].completed == true){
                document.getElementById("checking").disabled = true;

                        } 
            
           
           
            document.querySelector("checking").innerHTML = checked;
                           
        }
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

}

}







/*function list(){

    //object creation using xhr
    var xhttp=new XMLHttpRequest();

    //condition

    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var output ="<tr>" + "<td>" +""+"</td>" +"<td>"+ "" + "</td>"+"</tr>" ;
            for (var i=0; i<response.length; i++){
                output += "<tr>" + "<td>" +"<input  type='checkbox' class='check' >"+"</td>" +"<td>"+ response[i].title + "</td>"+"</tr>" 
            }
            document.querySelector("#todos").innerHTML = output;


          var checked = document.getElementsByClassName("check").checked;
           var output = (checked , disabled);
            if (response[i].completed == true){
               
               document.getElementsByClassName("check").innerHTML =output;   
               
                    }
        }
    }



xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}*/
