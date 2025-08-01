document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidad del botón de WhatsApp
    const whatsappButton = document.querySelector('.btn-whatsapp');

    if (whatsappButton) { // Asegurarse de que el botón existe antes de añadir el evento
        whatsappButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace # recargue la página

            // >>> ¡NÚMERO DE TELÉFONO ACTUALIZADO! <<<
            // Solo dígitos, sin espacios ni el signo '+' al inicio.
            // Para '+591 71045259' usamos '59171045259'
            const phoneNumber = '59171045259'; // TU NÚMERO DE WHATSAPP REAL

            const message = encodeURIComponent('Hola Abasto Ya! Estoy interesado/a en sus productos de frutas y verduras. ¿Podrían darme más información?'); // Mensaje predefinido
            
            // Construir la URL de WhatsApp
            const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
            const whatsappMobileUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;

            // Detección de dispositivo móvil
            const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            if (isMobile) {
                window.open(whatsappMobileUrl, '_blank');
            } else {
                window.open(whatsappWebUrl, '_blank');
            }
        });
    }

    // Opcional: Desplazamiento suave para los enlaces del menú
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});