let personagem = document.querySelector('.haaa');
let quadrado = document.querySelector('.Imagem1');

function pular(){
if(personagem.classList != 'jump'){
    personagem.classList.add('jump')
}

setTimeout(function(){
    personagem.classList.remove('jump')
}, 500)

}