document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    const username= document.getElementById("uname").value
    const password = document.getElementById("pword").value
    if (!username || !password){
        alert("You need a username and password")
        return;
    }
    const formData ={
        firstname:first,
        lastname:last,
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