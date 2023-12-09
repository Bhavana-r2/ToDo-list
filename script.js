const inputBox=document.getElementById('input box');
const listContainer=document.getElementById('list-container');


function addTask(){
    if(inputBox.value===""){
        alert("Please write anything");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value="";
    save_data()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save_data()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save_data()
    }
}
,false);


function save_data(){
    localStorage.setItem("Name",listContainer.innerHTML)

}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("Name")
}

showTask();