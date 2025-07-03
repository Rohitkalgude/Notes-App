const createbtn = document.getElementById("createbtn");
const noteContainer = document.getElementById("noteshow");

createbtn.addEventListener("click", () => {
  const newnote = document.createElement("p");
  newnote.className = "input-box";
  newnote.contentEditable = "true";
  newnote.innerHTML = `<img src="./image/delete.png" alt="delete" class="delete">`;

  noteContainer.appendChild(newnote);
  newnote.focus();


  const deleteBtn = newnote.querySelector(".delete");

  deleteBtn.addEventListener("click", () => {
    newnote.remove();
  });


  newnote.addEventListener("click" , () => {
    if(newnote.innerText.trim() === "Write someting..."){
      newnote.innerText = "";
    }
  })
});
