function amo(){
    alert('Eu te amo S2')
}

const botao = document.querySelector('#elemento');

function clicou(){
    botao.disabled = true
}

const elemento = document.getElementById('elemento');

elemento.addEventListener('mouseover', () => {
elemento.style.opacity = '0';
});

elemento.addEventListener('mouseout', () => {
elemento.style.opacity = '1';
});