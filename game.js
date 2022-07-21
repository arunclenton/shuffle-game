function load(){
    let b=document.querySelectorAll('#arun1');
    let x="ARUN";
    let y=x.split('');
    console.log(y);
    b.forEach((e)=>{
        let ran = Math.floor(Math.random()*y.length)
        // b.textContent= y[ran]
        // y.splice(ran,1)  
        
        console.log(y[ran]);
        e.innerHTML=y[ran];
        y.splice(ran,1)
    })
   
      

  
}