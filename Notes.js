const createbtn = document.querySelector("button");
const noteshow = document.querySelector(".noteshow");

createbtn.addEventListener("click", () => {
  const newnote = document.createElement("p");
  newnote.className = "input-box";
  newnote.contentEditable = "true";
  newnote.innerHTML = `<img src="./image/delete.png" alt="delete" class="delete">`;

  noteshow.appendChild(newnote);
  newnote.focus();
});


const deleteBtn = newnote.querySelector(".delete");

deleteBtn.addEventListener("click", () => {
  newnote.remove();
});


