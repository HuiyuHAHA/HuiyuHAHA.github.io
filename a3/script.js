let high_rise=document.getElementById('high_rise');
let fire=document.getElementById('fire');

window.addEventListener('scroll',function(){
    let value= window.scrollY
    high_rise.style.right= value*0.5+'px';
    fire.style.right= value*1.2+'px';
}
)


const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));


/* find the modal */
let modal = document.getElementById("modalDialog");
/* find the button and add an eventlister */
let showModalButton = document.getElementById("showModal");
showModalButton.addEventListener("click", () => {
  modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});