import { tarefas } from "./bancoDados.js";
const tarefa={
    getTodastarefas:function(){
        return tarefas
    },
    getTarefa:function(i){
        return tarefas[i]
    },
    addTarefa:function(novaTarefa,destinoDOM){
        const taf={
            nome:novaTarefa.nome,
            id:novaTarefa.id
        }
        tarefas.push(taf);

        destinoDOM.innerHTML=""

        tarefas.forEach((t) => {
            const div=document.createElement("div");
            div.setAttribute("class","tarefa aFazer");
            div.setAttribute("id", `${t.id}`)
            const p=document.createElement("p");
            p.innerHTML=t.nome;
            const divBtn=document.createElement("div");
            const btnConcluir=document.createElement("button");
            btnConcluir.setAttribute("id", "btnConcluir");
            btnConcluir.setAttribute("class", "material-symbols-outlined");
            btnConcluir.innerHTML="done";
            const btnEditar=document.createElement("button");
            btnEditar.setAttribute("id", "btnEditar");
            btnEditar.setAttribute("class", "material-symbols-outlined");
            btnEditar.innerHTML="edit";
            const btnExcluir=document.createElement("button");
            btnExcluir.setAttribute("id", "btnExcluir");
            btnExcluir.setAttribute("class", "material-symbols-outlined");
            btnExcluir.innerHTML="close";

            divBtn.appendChild(btnConcluir);
            divBtn.appendChild(btnEditar);
            divBtn.appendChild(btnExcluir);
            div.appendChild(p);
            div.appendChild(divBtn);
            destinoDOM.appendChild(div);

            btnConcluir.addEventListener("click",()=>{
                div.classList.remove("aFazer");
                div.classList.add("completo")
            });

            btnEditar.addEventListener("click",()=>{
                const editor=document.querySelector(".editor");
                const tarefaEditar=document.querySelector(".tarefaEditar");
                editor.classList.remove("hidden");
                tarefaEditar.appendChild(div);
                p.classList.add("editando");
                div.classList.add("divEditando");
                btnEditar.parentElement.classList.add("hidden");
                const newTarefas=tarefas.filter((el)=>{
                    return el["id"] != div.id;
                });
                console.log(newTarefas);
                tarefas.length=0;
                tarefas.push(...newTarefas);
            });
            btnExcluir.addEventListener("click" ,()=>{
                const newTarefas=tarefas.filter((el)=>{
                    return el["id"] != div.id
                })
                tarefas.length=0;
                tarefas.push(...newTarefas);
                div.remove();
            })
        })
    }
}

export default tarefa