const togglebtnEl = document.getElementById("toggle-skills") as  HTMLButtonElement;
const skillsEl = document.getElementById("skill") as HTMLElement;
togglebtnEl.addEventListener("click",()=>{
    if(skillsEl.style.display === 'none'){
        skillsEl.style.display ='block'
    }else{
        skillsEl.style.display = 'none'
    }
});
