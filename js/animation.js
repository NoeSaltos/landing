var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".collection.bg-light.position-relative.py-5",
        start: "9% 95%",
        end: "10% 10%",
        scrub: true,
        markers: true,
    }
});

if (window.innerWidth <= 576) {
    // Para pantallas muy pequeñas
    tl.to("#mojito", {
        top: "130%",   // Hace que se mueva hacia abajo
        left: "50%",   // Centra el elemento horizontalmente
        x: "-50%"      // Ajusta el desplazamiento para que el centro del elemento esté centrado
    });
} else if (window.innerWidth > 576 && window.innerWidth <= 991) {
    // Para pantallas medianas (md) entre 576px y 991px
    tl.to("#mojito", {
        top: "130%",   // Mueve el elemento un poco hacia abajo
        left: "30%",   // Coloca el elemento más a la izquierda (ajustar según necesites)
        x: "-30%"      // Ajusta el desplazamiento para que esté centrado proporcionalmente
    });
} else {
    // Para pantallas más grandes
    tl.to("#mojito", {
        top: "120%",   // Mueve el elemento un poco hacia abajo
        left: "10%"    // Mantén la posición a la izquierda
    });
}





/*--------------------------------------*/

// Selecciona el enlace del corazón
document.querySelectorAll('.btn-wishlist').forEach((wishlistBtn) => {
    wishlistBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Evita la acción por defecto del enlace
      wishlistBtn.classList.toggle('selected'); // Alterna la clase 'selected'
    });
  });

/* Esto asegura que las columnas tengan un fondo blanco y una altura mínima, incluso si están vacías */



