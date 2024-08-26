let button = document.getElementById("button-1");
let images = document.getElementsByClassName("images");

function trocarImagens(){
    if (images[0].src.includes('img-1.jpg') && images[1].src.includes('img-2.jpg') && images[2].src.includes('img-3.jpg')) {
        images[0].src = '../assets/img/img-4.jpg';
        images[1].src = '../assets/img/img-5.jpg';
        images[2].src = '../assets/img/img-6.jpg';

    } else if (images[0].src.includes('img-4.jpg') && images[1].src.includes('img-5.jpg') && images[2].src.includes('img-6.jpg')) {
        images[0].src = '../assets/img/img-7.jpg';
        images[1].src = '../assets/img/img-8.jpg';
        images[2].src = '../assets/img/img-9.jpg';

    } else if (images[0].src.includes('img-7.jpg') && images[1].src.includes('img-8.jpg') && images[2].src.includes('img-9.jpg')) {
        images[0].src = '../assets/img/img-1.jpg';
        images[1].src = '../assets/img/img-2.jpg';
        images[2].src = '../assets/img/img-3.jpg';
    } 
    
}

button.addEventListener("click", trocarImagens);