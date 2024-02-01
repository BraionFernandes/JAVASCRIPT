import { tarefas } from "./bancoDados.js";
import t from "./dados.js";
const tarefaNome=document.getElementById("tarefaNome");
const btnCriar=document.getElementById("btnCriar");
const tarefasRegistradas=document.getElementById("tarefasRegistradas");
const btnEditor=document.querySelector(".inputSub");
const btnTodas=document.getElementById("btnTodas");
const btnCompleto=document.getElementById("btnCompleto");
const btnAFazer=document.getElementById("btnAFazer");
const tarefasAll=[]
btnCriar.addEventListener("click",()=>{
    if(tarefaNome.value!=""){
        const taref={
            nome:tarefaNome.value,
            id:Date.now()
        }
        t.addTarefa(taref,tarefasRegistradas);
        tarefaNome.value="";
    }else{
        alert("Texto invalido! Preencha o nome da tarefa para criar!");
    }
    tarefasAll.length="";
    tarefasAll.push(...tarefasRegistradas.children);
})
btnEditor.addEventListener("click",()=>{
    const tarefasRegistradas=document.getElementById("tarefasRegistradas");
    const editor=document.querySelector(".editor");
    const divEditando=document.querySelector(".divEditando");
    const p=document.querySelector(".editando");
    const novoNome=document.querySelector("#novoNome");
    const taref={
        nome:novoNome.value,
    }
    t.addTarefa(taref,tarefasRegistradas);
    novoNome.value="";
    divEditando.children[1].classList.remove("hidden");
    divEditando.classList.remove("divEditando");
    p.classList.remove("editando");
    editor.classList.add("hidden");
})
btnTodas.addEventListener("click",()=>{
    const tarefasRegistradas=document.getElementById("tarefasRegistradas");
})
btnCompleto.addEventListener("click",()=>{
    const tarefasRegistradas=document.getElementById("tarefasRegistradas");
})
btnAFazer.addEventListener("click",()=>{
    const tarefasRegistradas=document.getElementById("tarefasRegistradas");
})