// Función para inicializar todas las animaciones
function initAnimations() {
    // Mata todas las animaciones y ScrollTriggers existentes
    gsap.killTweensOf("#mojito, #limon, #salpica, #leaf, #leaf2");
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Crea el timeline principal con ScrollTrigger
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".collection.bg-light.position-relative.py-5",
            start: "9% 95%",
            end: "10% 10%",
            scrub: true,
        }
    });

    // Detecta el ancho de la ventana para definir las animaciones
    const screenWidth = window.innerWidth;

    if (screenWidth <= 576) {
        // Animaciones para pantallas pequeñas (≤576px)
        tl.to("#mojito", {
            top: "130%",
            left: "80%",
            x: "-50%"
        });
        tl.to("#limon", {
            top: "155%",
            left: "70%",
            x: "-50%"
        }, "-=0.2"); // Alineado ligeramente con mojito
        tl.to("#salpica", {
            width: "27%",
            top: "155%",
            left: "21%"
        }, "-=0.2");
    } else if (screenWidth > 576 && screenWidth <= 991) {
        // Animaciones para pantallas medianas (>576px y ≤991px)
        tl.to("#mojito", {
            top: "160%",
            left: "50%",
            x: "-30%"
        });
        tl.to("#limon", {
            top: "205%",
            left: "50%",
            x: "-50%"
        }, "-=0.2");
        tl.to("#salpica", {
            width: "20%",
            top: "200%",
            left: "10%"
        }, "-=0.2");
    } else {
        // Animaciones para pantallas grandes (>991px)
        tl.to("#mojito", {
            top: "125%",
            left: "10%"
        });
        tl.to("#limon", {
            top: "185%",
            left: "32%"
        }, "orange");
        tl.to("#salpica", {
            width: "15%",
            top: "180%",
            right: "65%"
        }, "orange");
        tl.to("#leaf", {
            top: "110%",
            rotate: "130deg",
            left: "70%"
        }, "orange");
        tl.to("#leaf2", {
            top: "110%",
            rotate: "130deg",
            left: "0%"
        }, "orange");
    }
}

// Llama a la función al cargar la página
initAnimations();

// Maneja redimensionamiento para recalcular y actualizar animaciones
let resizeTimeout; // Para evitar múltiples llamadas durante el redimensionamiento
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh(); // Refresca posiciones y límites
        initAnimations(); // Reinicia animaciones
    }, 100); // Espera 100ms para evitar múltiples ejecuciones
});














/*--------------------------------------*/

// Selecciona el enlace del corazón
document.querySelectorAll('.btn-wishlist').forEach((wishlistBtn) => {
    wishlistBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Evita la acción por defecto del enlace
      wishlistBtn.classList.toggle('selected'); // Alterna la clase 'selected'
    });
  });

/* Esto asegura que las columnas tengan un fondo blanco y una altura mínima, incluso si están vacías */



/*----------------------NAV--------------------------------*/ 
  const menuToggle = document.getElementById('menuToggle');
  const overlayMenu = document.getElementById('overlayMenu');
  const closeButton = overlayMenu.querySelector('.close-btn');

  // Abrir menú toggle
  menuToggle.addEventListener('click', () => {
    overlayMenu.classList.add('show');
  });

  // Cerrar menú toggle
  closeButton.addEventListener('click', () => {
    overlayMenu.classList.remove('show');
  });

  // Cerrar menú al hacer clic en una opción
  overlayMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      overlayMenu.classList.remove('show');
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      offset: 0, // Sin margen extra
      once: true, // Ejecutar animación solo una vez
      duration: 800,
      easing: 'ease-out',
    });
    AOS.refresh(); // Refresca para ajustar posiciones inmediatamente
  });








