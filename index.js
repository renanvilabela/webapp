const item = document.getElementById("item");
const botao = document.getElementById("botao");
const produtos = document.getElementById("Produtos");

function add(){
    const itemName = item.value.trim();
    if (itemName != ""){
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        ${itemName}
        <button class="remove">Remover</button>
        `;
        produtos.appendChild(listItem);
        item.value = "";

        const removeButton = document.querySelectorAll(".remove");
        removeButton.forEach(button =>{
            button.addEventListener("click", () =>{
                produtos.removeChild(button.parentNode);
            });
        });
    }
}

console.log(add())