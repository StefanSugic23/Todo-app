const header = document.querySelector("#header");
const form = document.querySelector("#form");
const error = document.querySelector("#errorMessage");
const newTodo = document.querySelector("#newTodo");
const list = document.querySelector("#list");
const footer = document.querySelector("#footer");
const counter = document.querySelector("#counter")

let objectives = [];

try {
const saved= localStorage.getItem("objectives");
 objectives = JSON.parse(saved) || [];
}
catch(err){
console.log("Could not read saved movies:");
console.log(err)
}

function save(){
    const text = JSON.stringify(objectives);
    localStorage.setItem("objectives", text);
}


function render(){

    list.textContent="";
    for (let i =0;i<objectives.length;i++){
        const li = document.createElement("li")
        const checkbox = document.createElement("input")
        checkbox.type ="checkbox"
        checkbox.checked = objectives[i].done
        const deleteButton =document.createElement("button");
        deleteButton.textContent="x"
        const span = document.createElement("span");
        span.textContent = objectives[i].text;
        

        if( objectives[i].done){
            span.classList.toggle("completed");
        }

        checkbox.addEventListener("change", function(){
            objectives[i].done = checkbox.checked;
            render();
            save();
        })

        

        deleteButton.addEventListener("click", function(){
            objectives.splice(i,1);
            render();
            save();

        })
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        list.appendChild(li);

        let remaining = 0;
        for ( let i=0;i<objectives.length;i++){
            if (objectives[i].done === false){
                remaining++;
            }
        }
        counter.textContent = remaining + " items left";


    }

}
render();

form.addEventListener("submit", function(event){
    event.preventDefault();


     if(newTodo.value===""){
        error.textContent="Don't leave empty please!"
        return;
    }
    if(newTodo.value.trim() ===""){
        error.textContent="Please don't write only backspaces!"
        return;
    }


   // const li = document.createElement("li");

   // li.textContent = newTodo.value.trim();
    //list.appendChild(li);
    
    const newObjectives ={
        text: newTodo.value.trim(),
        done:false
        
    };
    objectives.push(newObjectives);
    render();
    save();

    newTodo.value="";
    console.log(objectives)


})

