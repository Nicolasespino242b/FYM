// Script para el carrusel automático
let currentIndex = 0;
const carruselItems = document.querySelectorAll(".carrusel-item");
const totalItems = carruselItems.length;

function showNextItem() {
    // Oculta el elemento actual
    carruselItems[currentIndex].classList.remove("active");

    // Avanza al siguiente elemento
    currentIndex = (currentIndex + 1) % totalItems;

    // Muestra el siguiente elemento
    carruselItems[currentIndex].classList.add("active");
}

// Cambia la imagen cada 5 segundos (5000 ms)
setInterval(showNextItem, 5000);

// Asegúrate de que la primera imagen esté visible al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    carruselItems[0].classList.add("active");
});

document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.querySelector('.menu-hamburguesa'); // Selecciona el botón hamburguesa
    const menu = document.querySelector('.menu'); // Selecciona el menú
    const enlacesMenu = document.querySelectorAll('.menu ul li a'); // Selecciona todos los enlaces del menú

    // Abrir o cerrar el menú al hacer clic en el botón de hamburguesa
    menuHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('active'); // Alterna la clase 'active'
    });

    // Cerrar el menú al hacer clic en cualquier enlace del menú
    enlacesMenu.forEach(function(enlace) {
        enlace.addEventListener('click', function() {
            menu.classList.remove('active'); // Cierra el menú
        });
    });
});