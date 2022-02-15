const args = process.argv ;
const argsChanged = args.slice(2,args.length);
// console.log(argsChanged);
if(args.length){
for (let item of argsChanged){
  if(Math.sign(item) !== - 1 && isNaN(item) == false){
    setTimeout(()=>{ 
      // process.stdout.write(item);
      process.stdout.write('\x07');
    },Number(item)*1000)
  }
}
}





