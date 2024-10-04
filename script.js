const button = document.getElementById('colorButton'); 

button.addEventListener('click', () => {
    const colors = ['#FF8C00', '#00BFFF', '#32CD32', '#FF1493', '#FFD700']; /* Lista das cores disponíveis */ 
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; /* Seleciona a cor aleatoriamente */
    document.body.style.backgroundColor = randomColor; /*Troca a cor de background*/
});
