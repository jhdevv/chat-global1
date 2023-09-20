const mario = document.querySelector('.haaa');
const pipe = document.querySelector('.Imagem1');


    const jump = () =>{
        mario.classList.add('jump');
    
        setTimeout(() => {
        
            mario.classList.remove('jump');
        
        }, 500);
        }
        
    const loop = setInterval(()   => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
    if (pipePosition <= 120 && marioPosition < 60){
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    
    }
    
    }, 10)
    
        document.addEventListener('keydown' , jump);
