import { tarefas } from "./bancoDados.js";
import t from "./dados.js";
const tarefaNome=document.getElementById("tarefaNome");
const btnCriar=document.getElementById("btnCriar");
const tarefasRegistradas=document.getElementById("tarefasRegistradas");
const btnEditor=document.querySelector(".inputSub");
const btnTodas=document.getElementById("btnTodas");
const btnCompleto=document.getElementById("btnCompleto");
const btnAFazer=document.getElementById("btnAFazer");
const btnFiltros=document.querySelectorAll(".btnFiltro");
const inputSearch=document.querySelector("#pesquisa");
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
    btnFiltros.forEach(el=>{
        el.classList.remove("selecionado");
    })
    btnTodas.classList.add("selecionado");
    const tarefasRegistradas=document.getElementById("tarefasRegistradas");
    tarefasRegistradas.innerHTML="";
    console.log(tarefasAll)
    for(let i=0;i<tarefasAll.length;i++){
        tarefasRegistradas.appendChild(tarefasAll[i]);
    };
})
btnCompleto.addEventListener("click",()=>{
    btnFiltros.forEach(el=>{
        el.classList.remove("selecionado");
    })
    btnCompleto.classList.add("selecionado");
    const tarefasRegistradas=document.getElementById("tarefasRegistradas");
    tarefasRegistradas.innerHTML="";
    const tarefasCompleto=tarefasAll.filter(tarefa => tarefa.classList.contains('completo'));
    for(let i=0;i<tarefasCompleto.length;i++){
        tarefasRegistradas.appendChild(tarefasCompleto[i]);
    };
})
btnAFazer.addEventListener("click",()=>{
    btnFiltros.forEach(el=>{
        el.classList.remove("selecionado");
    })
    btnAFazer.classList.add("selecionado");
    const tarefasRegistradas=document.getElementById("tarefasRegistradas");
    tarefasRegistradas.innerHTML="";
    const tarefasAFazer=tarefasAll.filter(tarefa => tarefa.classList.contains('aFazer'));
    for(let i=0;i<tarefasAFazer.length;i++){
        tarefasRegistradas.appendChild(tarefasAFazer[i]);
    };
})
inputSearch.oninput=()=>{
    tarefasRegistradas.innerHTML="";

    tarefasAll.filter((item)=>
    item.innerText.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item)=>tarefasRegistradas.appendChild(item));
}