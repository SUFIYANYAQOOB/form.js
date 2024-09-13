  function data (){

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phonenumber = document.getElementById('phonenumber').value;

    var output = document.getElementById('output');
    output.innerHTML = `
    
    

    <p>name : ${name}</p>
    <p>email : ${email}</p>
    <p>phonenumber : ${phonenumber}</p>

    `
    }
    