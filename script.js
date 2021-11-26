




function validate(user,input2,login){



    var user = document.getElementById("input").value.trim();
    var input2= document.getElementById("input2").value.trim();




if(user=="admin" && input2=="12345"){


    window.location.href="/mainpage.html";
        window.alert("login sucess");

        return true;

        
    }
    else{

        window.alert("invalid credentials");
        return false;
        
    }
    login();


   
}
     function login(){


        user!== "admin" && input2!=="12345"

            window.location.href = "#";

     }

    login(user,input2,validate);