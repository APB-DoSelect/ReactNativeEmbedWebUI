document.addEventListener("DOMContentLoaded", (e)=> {
    console.log("Sending Request");
    fetch("../data.json")
    .then((response) => response.json())
    .then((data)=>{
        console.log(data);
        const iframe = document.createElement('iframe');
        const url = data.url;
        iframe.setAttribute("src", url);
        iframe.setAttribute("id", "embed");
        iframe.style.width = "400px";
        iframe.style.height = "775px";
        document.getElementById("app").appendChild(iframe);
    })
    .catch((err)=>{
        console.error(err)
        const errorMessage = document.createElement('h1')
        errorMessage.textContent = "Please confirm if you have added URL of PORT:8001 in the required file."
        errorMessage.style.color = "red"
        document.getElementById("app").appendChild(errorMessage);
    })

})