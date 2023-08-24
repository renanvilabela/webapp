// function add(){
//     const itemName = item.value.trim();
//     if (itemName != ""){
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `
//         ${itemName}
//         <button id="remove">Remover</button>
//         `;
//         produtos.appendChild(listItem);
//         item.value = "";

//         const removeButton = document.querySelectorAll(".remove");
//         removeButton.forEach(button =>{
//             button.addEventListener("click", () =>{
//                 produtos.removeChild(button.parentNode);
//             });
//         });
//     }
// }

// console.log(add())

// const btn = document.querySelectorAll("#adicione")

// btn.addEventListener("click", function(e){

//     e.preventDefault();

//     const item = document.querySelectorAll("#item");
//     const value = item.value

//     console.log(value)
// })

// const item = document.querySelector("#item");
// const botao = document.querySelector("#adicione");
// const produtos = document.querySelector("#produtos");

// botao.addEventListener("click", ()=>{
//     if (item.value != ""){
//         produtos.innerHTML += `<li>${item.value}</li>`
//     } else {
//         alert("Preencha o campo!")
//     }
// })

const input = document.querySelector("#input");
const ul = document.querySelector("#tasks");

const addItem = () => {
    if (input.value != ""){
        ul.innerHTML += `<li>${input.value}</li>`
        input.style.border = "1px solid #ccc"
    } else {
        input.style.border = "1px solid red"
        alert("Preencha o campo!")
    }
}
const removeItems = () => ul.innerHTML = ''
