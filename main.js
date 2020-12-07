
shownotes()

// If user wants to add a note 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        text : addTxt.value,
        title : addTitle.value
    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    shownotes()
})

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" id="card-title">${element.title}</h5>
                    <p class="card-text"> ${element.text}</p>
                    <button id= "${index}" onclick= "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
        
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `No notes added yet or recently deleted.  Please add notes `
    }    
}

// Function to delete note
function deleteNote(index) {
    
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes()
}




