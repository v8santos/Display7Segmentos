let canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d');
let on="#0FA",off="#011";
let i=0;
let numbers = [
  [on,on,on,on,on,on,off],//0
  [off,on,on,off,off,off,off],//1
  [on,on,off,on,on,off,on],//2
  [on,on,on,on,off,off,on],//3
  [off,on,on,off,off,on,on],//4
  [on,off,on,on,off,on,on],//5
  [on,off,on,on,on,on,on],//6
  [on,on,on,off,off,off,off],//7
  [on,on,on,on,on,on,on],//8
  [on,on,on,on,off,on,on]//9
];

function update(){
  let state=numbers[i];

  // A
  ctx.fillStyle = state[0];
  ctx.fillRect(80,40,120,20);
  
  // B
  ctx.fillStyle = state[1];
  ctx.fillRect(200,60,20,120);

  // C
  ctx.fillStyle = state[2];
  ctx.fillRect(200,200,20,120);

  // D
  ctx.fillStyle = state[3];
  ctx.fillRect(80,320,120,20);
  
  // E
  ctx.fillStyle = state[4];
  ctx.fillRect(60,200,20,120);
  
  // F
  ctx.fillStyle = state[5];
  ctx.fillRect(60,60,20,120);
  
  // G
  ctx.fillStyle = state[6];
  ctx.fillRect(80,180,120,20);
  
  i++;
  if(i>9){
    i=0;
  };
};

setInterval(update,400);