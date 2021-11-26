  /*function todo(){}
            document.getElementById("#todo")
            .addEventListener("click", function click(){
                window.location.href ="/homepage.html";
                window.alert("click was successfull!!!!");
                return true;
            })
        }

            function click();
*/


function list(){

    //object creation using xhr
    var xhttp=new XMLHttpRequest();

    //condition

    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var output ="";
            for (var i=0; i<response.length; i++){
                output +="<tr>" + "<td>" +"<input  type='checkbox' class='check' id = 'checking' value.onchange='check();'/>" + "</td>" + "<td>"+ response[i].title + "</td>" + "</tr>" ;
                 } 
          // console.log("output");//
           
            document.querySelector("#todos").innerHTML = output;
           
                           
        }
    }
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}





/*
function check(){

    var a = document.querySelector("check").value;
    var chk=0
    
    for( var count=0;count<=5;count++){
        if(a[count].checked == true){

            chk = chk + 1;
            window.alert("hurrayy!! succesfully completed five tasks");
        }
    }

}
*/



//COUNTING 5 CHECKS

var checkbox = document.querySelector("#checking");

checkbox.addEventListener("onclick", () =>{
let checkbox = document.querySelector('input[type="checkbox"]:checked');

for (var count=0; count <= 5; count++){

    if( count == 5){

        window.alert("hurrayy!! succesfully completed five tasks");
    }
    else{

        window.alert("complete atleast 5tasks");
    }
}
});
//LOGOUT FUNCTION

function logout(){
window.location.href="/index.html";
window.alert("logout successfull");
}

