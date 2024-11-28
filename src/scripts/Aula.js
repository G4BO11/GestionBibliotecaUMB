   document.addEventListener("astro:page-load", ()=>{
    const btnCloseModal = document.getElementById("btnCloseModal")
    //const btnCrearReserva = document.getElementById("btnReserva")

    const btnsCrearReserva = document.querySelectorAll('.btn-crear-reserva');
    const btnConfirmReserva = document.getElementById("btnConfirmReserva")
    const btnCloseConfirmReserva = document.getElementById("btnCloseConfirmReserva")
    const modalreserva = document.getElementById("modalReservation")
    const modalConfirmreserva = document.getElementById("modalConfirmReservation")


    btnsCrearReserva.forEach( btns =>{
        btns.addEventListener('click', ()=>{
            modalreserva.showModal();
        })
    })    
    
    btnCloseModal?.addEventListener('click',()=>{
        modalreserva.close();
    })
    btnCloseConfirmReserva?.addEventListener('click',()=>{
        modalConfirmreserva.close();
    })
    btnConfirmReserva?.addEventListener('click',()=>{
        modalreserva.close();
        modalConfirmreserva.showModal();
    })
   })
   