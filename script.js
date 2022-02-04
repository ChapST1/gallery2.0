const imagenes = document.querySelectorAll(".contenedor__img");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".imgModal");
const close = document.querySelector(".close")

imagenes.forEach(imagenes =>{
    imagenes.addEventListener('click',()=>{

        let source = imagenes.src;
        modal.classList.add("activeModal");
        imgModal.setAttribute('src',source)
        
        close.addEventListener('click',()=>{
            modal.classList.remove("activeModal")
        })
    })
})


