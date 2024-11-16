document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    const first = document.getElementById("firstname").value
    const last = document.getElementById("lastname").value
    if (!first || !last){
        alert("You need a first and a last name")
        return;
    }
    const formData ={
        firstname:first,
        lastname:last
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST","submit.json", true);
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
    alert("I should happen last, right?")
    console.log(formData)
})