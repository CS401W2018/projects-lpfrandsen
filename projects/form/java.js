document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    const first = document.getElementById("firstname").value
    const last = document.getElementById("lastname").value
    const age= document.getElementById("age").value
    const username= document.getElementById("uname").value
    const password = document.getElementById("pword").value
    if (!first || !last){
        alert("You need a first and a last name")
        return;
    }
    if (!age || age<18){
        alert("You  must be 18")
        return;
    }
    if (!username || !password){
        alert("You need a username and password")
        return;
    }
    const formData ={
        firstname:first,
        lastname:last,
        age:age,
        username:username,
        password:password
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET","submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData)
})