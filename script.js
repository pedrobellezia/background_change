const button = document.getElementById('colorButton'); 

button.addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300']; /* Lista das cores disponíveis */ 
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; /* Seleciona a cor aleatoriamente */
    document.body.style.backgroundColor = randomColor; /*Troca a cor de background*/
});