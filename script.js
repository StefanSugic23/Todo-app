const header = document.querySelector("#header");
const form = document.querySelector("#form");
const error = document.querySelector("#errorMessage");
const newTodo = document.querySelector("#newTodo");
const list = document.querySelector("#list");
const footer = document.querySelector("#footer");
const counter = document.querySelector("#counter");
const all = document.querySelector("#all")
const active = document.querySelector("#active");
const done = document.querySelector("#done")
const clear = document.querySelector("#clear");
const priority = document.querySelector("#priority")
const dark = document.querySelector("#dark")
const body = document.querySelector("#body")


let objectives = [];

const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode === "true") {
    body.classList.add("highlight");
}


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



function render() {
    list.textContent = "";

    for (let i = 0; i < objectives.length; i++) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = objectives[i].done;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";

        const span = document.createElement("span");
        span.textContent = objectives[i].text;

        const prioLab = document.createElement("span");
        prioLab.textContent= objectives[i].priority;
        prioLab.classList.add(objectives[i].priority)

       

        if (objectives[i].done) {
            span.classList.add("completed");
        }

        checkbox.addEventListener("change", function() {
            objectives[i].done = checkbox.checked;
            save();
            render();
        });

        deleteButton.addEventListener("click", function() {
            objectives.splice(i, 1);
            save();
            render();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        li.appendChild(prioLab)
        

        list.appendChild(li);
    }

    

    let remaining = 0;

    for (let i = 0; i < objectives.length; i++) {
        if (objectives[i].done === false) {
            remaining++;
        }
    }

    counter.textContent = remaining + " items left";
}

render();

function renderDone() {
    list.textContent = "";

    for (let i = 0; i < objectives.length; i++) {
        if (objectives[i].done===true){
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = objectives[i].done;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";

        const span = document.createElement("span");
        span.textContent = objectives[i].text;

       

        if (objectives[i].done) {
            span.classList.add("completed");
        }

        checkbox.addEventListener("change", function() {
            objectives[i].done = checkbox.checked;
            save();
            render();
        });

        deleteButton.addEventListener("click", function() {
            objectives.splice(i, 1);
            save();
            render();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        

        list.appendChild(li);
    }
}

    

    let remaining = 0;

    for (let i = 0; i < objectives.length; i++) {
        if (objectives[i].done === false) {
            remaining++;
        }
    }

    counter.textContent = remaining + " items left";
}

function renderActive() {
    list.textContent = "";

    for (let i = 0; i < objectives.length; i++) {
        if (objectives[i].done===false){
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = objectives[i].done;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";

        const span = document.createElement("span");
        span.textContent = objectives[i].text;

       

        if (objectives[i].done) {
            span.classList.add("completed");
        }

        checkbox.addEventListener("change", function() {
            objectives[i].done = checkbox.checked;
            save();
            render();
        });

        deleteButton.addEventListener("click", function() {
            objectives.splice(i, 1);
            save();
            render();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        

        list.appendChild(li);
    }
}

    

    let remaining = 0;

    for (let i = 0; i < objectives.length; i++) {
        if (objectives[i].done === false) {
            remaining++;
        }
    }

    counter.textContent = remaining + " items left";
}

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
        done:false,
        priority:priority.value
        
    };
    objectives.push(newObjectives);
    render();
    save();

    newTodo.value="";
    error.textContent="";
    console.log(objectives)


})

done.addEventListener("click", function(){
    renderDone();
    save();
})

all.addEventListener("click", function(){
    render();
    save();
})
active.addEventListener("click", function(){
    renderActive();
    save();
})

clear.addEventListener("click", function() {
    for (let i = objectives.length - 1; i >= 0; i--) {

        if (objectives[i].done === true) {
            objectives.splice(i, 1);
        }
    }

    render();
    save();
});

dark.addEventListener("click", function() {
    body.classList.toggle("highlight");

    localStorage.setItem(
        "darkMode",
        body.classList.contains("highlight")
    );

    render();
    save();
});



        
    
    
    
    
    
    
    














