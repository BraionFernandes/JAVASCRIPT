const tarefaNome=document.getElementById("tarefaNome");
const btnCriar=document.getElementById("btnCriar");
const tarefasRegistradas=document.getElementById("tarefasRegistradas");
const lista=document.getElementById("lista");
const main=document.getElementById("main");
const btnTodas=document.getElementById("btnTodas");
const btnCompletadas=document.getElementById("btnCompletadas");
const btnAFazer=document.getElementById("btnAFazer");
const btnFiltro=document.querySelectorAll(".btnFiltro");

let tarefas=[];

btnCriar.addEventListener("click",()=>{
    if(tarefaNome.value!=""){
        criar(tarefaNome.value);
        tarefaNome.value="";
    }else{
        alert("Texto invalido! Preencha o nome da tarefa para criar!");
    }
})
criar=(nome)=>{
    const div=document.createElement("div");
        div.setAttribute("class", "tarefa aFazer");
        const p=document.createElement("p");
        p.innerHTML=nome;
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
        tarefasRegistradas.appendChild(div);

        btnConcluir.addEventListener("click",()=>{
            div.classList.remove("aFazer");
            div.classList.add("completo");
        })
        btnEditar.addEventListener("click", ()=>{
            const section=document.createElement("section");
            section.setAttribute("class","editor");
            const divTarefa=document.createElement("div");
            divTarefa.setAttribute("class","tarefaEditar");
            const divEditar=document.createElement("div");
            divEditar.setAttribute("class","editar");
            const label=document.createElement("label");
            label.setAttribute("for","novoNome");
            const inputTxt=document.createElement("input");
            inputTxt.setAttribute("type","text");
            inputTxt.setAttribute("name","novoNome");
            inputTxt.setAttribute("id","novoNome");
            inputTxt.setAttribute("placeholder","Novo Texto");
            const inputSub=document.createElement("input");
            inputSub.setAttribute("type","submit");
            inputSub.setAttribute("value","+");

            main.insertBefore(section, lista);
            section.appendChild(divTarefa);
            section.appendChild(divEditar);
            divEditar.appendChild(label);
            divEditar.appendChild(inputTxt);
            divEditar.appendChild(inputSub);

            divTarefa.appendChild(btnEditar.parentElement.parentElement);
            btnEditar.parentElement.classList.add("hidden");

            inputSub.addEventListener("click",()=>{
                p.innerHTML=inputTxt.value;
                tarefasRegistradas.appendChild(div);
                btnEditar.parentElement.classList.remove("hidden");
                section.remove();
            })
        })
        btnExcluir.addEventListener("click", ()=>{
            div.remove()
        })
    }
btnTodas.addEventListener("click",()=>{
})
btnCompletadas.addEventListener("click",()=>{
})
btnAFazer.addEventListener("click",()=>{
})