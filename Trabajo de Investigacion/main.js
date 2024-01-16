  const canvas= document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  const gameContainer= document.getElementById('game-container');

  const ManImg = new Image();
  ManImg.src =  '/imagenes/man3.png';

  const FLAP_SPEED = -5  ;
  const MAN_WIDTH = 50;
  const MAN_HEIGTH = 30;
  const PIPE_WITDH = 50;
  const PIPE_GAP = 125;

  let ManX= 50;
  let ManY= 50;
  let ManVelocity= 0;
  let ManAceleration= 0.1;

  let PipeX= 400;
  let PipeY= canvas.height - 200;

  let ScoreDiv= document.getElementById('score-display')
  let puntuacion = 0;
  let Mejorpuntuacion = 0;
  let scored = false

  document.body.onkeyup = function(e){
    if(e.code == 'Space'){
        ManVelocity = FLAP_SPEED
      }
      this.input.on('pointerdown', () => this.jump());
  }
  document.getElementById("restart").addEventListener('click', function() {
    EsconderMenuFinal();
    Reiniciar();
    Bucle();

  })
  function Icremento_Puntaje(){
    if(ManX> PipeX + PIPE_WITDH &&
      (ManX< PipeY + PIPE_GAP||
      ManX+ MAN_WIDTH > PipeY + PIPE_GAP)  && !scored){
    puntuacion++;
    ScoreDiv.innerHTML = puntuacion;
    scored=true
  }
  if(ManX<PipeX+PIPE_WITDH){
    scored=false
  }
  }
  function Colision(){
    const ManBox={
      x: ManX,
      y: ManY,
      width: MAN_WIDTH,
      height: MAN_HEIGTH
    }
    const PipeBox={
      x:PipeX,
      y:PipeY - PIPE_GAP + MAN_HEIGTH,
      width: PIPE_WITDH,
      height: PipeY
    }
    const BotonPipeBox={
      x: PipeX,
      y: PipeY +PIPE_GAP + MAN_HEIGTH,
      width: PIPE_WITDH,
      height: canvas.height - PipeY - PIPE_GAP
    }
    if(ManBox.x + ManBox.width > PipeBox.x && 
      ManBox.x < PipeBox.x + PipeBox.width &&
      ManBox.y < PipeBox.y  ){
        return true
      }
      if(ManBox.x + ManBox.width > BotonPipeBox.x && 
        ManBox.x < BotonPipeBox.x + BotonPipeBox.width &&
        ManBox.y + ManBox.height  > BotonPipeBox.y){
          return true
        }
      if(ManY < 0 || ManY + MAN_HEIGTH > canvas.height){
        return true;
      }
  }
  function Reiniciar(){
    ManX= 50;
    ManY= 50;
    ManVelocity= 0;
    ManAceleration=0.1;

    PipeX= 400;
    PipeY= canvas.height - 200;

    puntuacion = 0;
  }
  function Finalizar(){
    MostrarMenuFinal();
  }
  function Bucle(){
    ctx.clearRect(0, 0 , canvas.clientWidth ,canvas.clientHeight);
    ctx.drawImage(ManImg, ManX, ManY);

    ctx.fillStyle = '#333';
    ctx.fillRect(PipeX, -100, PIPE_WITDH, PipeY);
    ctx.fillRect(PipeX, PipeY + PIPE_GAP, PIPE_WITDH, canvas.height - PipeY);

    PipeX-= 2.2  

    if(Colision()){
      Finalizar()
      return;
    }

    if(PipeX < -50){
      PipeX= 400;
      PipeY= Math.random()*(canvas.height - PIPE_GAP)+ PIPE_WITDH;
    }
    ManVelocity+= ManAceleration
    Icremento_Puntaje();
    ManY+= ManVelocity
    requestAnimationFrame(Bucle);
  }
  Bucle();
  function MostrarMenuFinal(){
    document.getElementById('game-end').style.display= 'block';
    gameContainer.classList.add('backdrop.blur')
    document.getElementById('score-end').innerHTML= puntuacion;
    if (Mejorpuntuacion<puntuacion){
      Mejorpuntuacion = puntuacion
    }
    document.getElementById('best-score').innerHTML= Mejorpuntuacion;
  }
  function EsconderMenuFinal(){
    document.getElementById('game-end').style.display= 'none';
    gameContainer.classList.remove('backdrop.blur')
  }
  
