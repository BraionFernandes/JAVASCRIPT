import t from "./dados.js";
const tarefaNome=document.getElementById("tarefaNome");
const btnCriar=document.getElementById("btnCriar");
const tarefasRegistradas=document.getElementById("tarefasRegistradas");
const btnEditor=document.querySelector(".inputSub");
const editor=document.querySelector("editar");

let i=1;

btnCriar.addEventListener("click",()=>{
    if(tarefaNome.value!=""){
        const taref={
            nome:`${i} - `+tarefaNome.value,
        }
        t.addTarefa(taref,tarefasRegistradas);
        tarefaNome.value="";
    }else{
        alert("Texto invalido! Preencha o nome da tarefa para criar!");
    }
    i++
})

btnEditor.addEventListener("click",()=>{
    const divEditando=document.querySelector(".divEditanto");
    const p=document.querySelector(".editando");
    const novoNome=document.querySelector("#novoNome");
    const taref={
        nome:novoNome.value,
    }
    t.addTarefa(taref,tarefasRegistradas);
    novoNome.value="";
    tarefasRegistradas.appendChild(divEditando);
    divEditando.children[1].classList.remove("hidden");
    divEditando.classList.remove("divEditando");
    p.classList.remove("editando");
    editor.classList.add("hidden");
})