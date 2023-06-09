window.onload = function() {
    const images = [
        "WhatsApp Image 2023-06-07 at 10.18.43 PM (3).jpeg",
        "WhatsApp Image 2023-06-07 at 10.18.43 PM (1).jpeg",
        "WhatsApp Image 2023-06-07 at 10.18.42 PM.jpeg",
        "WhatsApp Image 2023-06-07 at 10.18.42 PM (1).jpeg",
        "WhatsApp Image 2023-06-07 at 10.18.40 PM (1).jpeg",
        "WhatsApp Image 2023-06-07 at 10.18.28 PM (2).jpeg",
        "WhatsApp Image 2023-06-07 at 10.18.23 PM (1).jpeg"
    ];

    const imageContainer = document.getElementById('image-container');

    images.forEach(function(imageName, index) {
        const imageHtml = createImageHtml(imageName);
        const div = document.createElement('div');
        div.className = 'col-md-6';
        div.innerHTML = imageHtml;
        imageContainer.appendChild(div);
    });

    // Inicializa la funcionalidad de popup aquí, después de que todas las imágenes han sido agregadas
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
        // otras opciones aquí
    });
};

function createImageHtml(imageName) {
    return `<p><a href="imgs/Escaleras/${imageName}" class="image-popup"><img src="imgs/Escaleras/${imageName}" class="img-responsive" alt="Free HTML5 Bootstrap Template by uicookies.com"></a></p>`;
}
