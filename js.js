const caixaTexto = document.querySelector('#task-input');
const botao = document.querySelector('#add-task');
const lista = document.querySelector('#task-list');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function salvarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function deletarTarefa(indice) {
  tarefas.splice(indice, 1);
  salvarTarefas();
  renderizarTarefas();
}

function marcarConcluida () {


 caixaTexto.style.textDecoration = "underline"



}

function renderizarTarefas() {
  lista.innerHTML = "";




  tarefas.forEach((pendencia, indice) => {
    const item = document.createElement('li');
    item.textContent = `${indice + 1} - ${pendencia}`;

    const btDelete = document.createElement('button');
    btDelete.textContent = '🗑️';
    btDelete.onclick = () => deletarTarefa(indice);

    item.appendChild(btDelete);
    lista.appendChild(item);
     



    function marcarConcluida() {

    if (item.style.textDecoration === "line-through") {

      item.style.textDecoration = 'none'
    } else {

      item.style.textDecoration = "line-through"

    }
}
   item.addEventListener("click", marcarConcluida)


  });
}


function gerenciarTarefas() {
  const texto = caixaTexto.value.trim();
  if (texto === "") return;

  tarefas.push(texto);
  caixaTexto.value = "";
  salvarTarefas();
  renderizarTarefas();
}



botao.addEventListener("click", gerenciarTarefas);


renderizarTarefas();
