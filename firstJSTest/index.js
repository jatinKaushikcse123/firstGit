


function handleFormSubmit(event) {
    event.preventDefault();
    const expance = event.target.expance.value;
    const discription = event.target.discription.value;
    const catagory = event.target.catagory.value;

    const obj = {
        expance, discription, catagory
    }
    const stringify = JSON.stringify(obj);
    localStorage.setItem(discription, stringify);

    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    li.textContent = expance + " " + discription + " " + catagory;

    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";


    const editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit";


    deletebtn.addEventListener("click", () => {
        li.remove();
        localStorage.removeItem(obj.discription);
    })



    editbtn.addEventListener("click", () => {
        localStorage.removeItem(obj.discription);
        li.remove();
        document.getElementById("expance").value = obj.expance;
        document.getElementById("discription").value = obj.discription;
        document.getElementById("catagory").value = obj.catagory;
    })


    li.appendChild(editbtn);
    li.appendChild(deletebtn);
    ul.appendChild(li);

}

