async function sendmsg(){
    const input = document.getElementById("userinput");
  
    const messages = document.getElementById("messages");


      const msg = input.value.trim();


    //no message then  return 
    if(!msg){
        console.log("No Message");
        return 
    }

    //show user message in bubble
    messages.innerHTML += `<div class="message user">${msg}</div>`;

    //clear the input box 
    input.value = "";

    //send the message to backend
    const response = await fetch("/chat" , {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({message:msg})

    });

    //geting data 

    const data  = await response.json();

    //Show the Ai reply
    messages.innerHTML +=`<div class="message ai">${data.reply}</div>`;


    // 🔹 Enter key support
const inputBox = document.getElementById("userinput");

inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendmsg();
  }})

}