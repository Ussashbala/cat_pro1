let btn2=document.querySelector(".btn2");
let btn1=document.querySelector("#btn1");
let cat=document.querySelector(".cat");
let cat_img=document.querySelector(".cat-img");
let allbody=document.querySelector("body");
let text=document.querySelector(".text");
let audio=document.querySelector("audio");

setTimeout(()=>{
  audio.remove();
    
  },10000)
  let yes=0;
btn1.addEventListener("click",()=>{
  yes++;
  console.log("ok1")
  /*document.querySelector(".cat-walk").remove() ;*/
  cat_img.src="cat lough gif01.gif"
  audio.src="laugh cat.mp3";
  setTimeout(()=>{
    audio.remove();
   cat_img.src="Screenshot 2024-07-16 011457.png";
    },5000)
  allbody.style.backgroundColor="pink";
  text.innerText=" Sorry I Have a Girlfriend ! ";
});
let i=1;
btn2.addEventListener("mouseover",()=>{

  if(yes==0){
    if(i%2!=0){
    console.log("ok2");
  btn2.classList.add("btn22");
  cat_img.src="gun in cat mouth.jpg";
  setTimeout(()=>{
    cat_img.src="cat talking.gif";
    
   },500)
  }
  else{
    console.log("ok else");
    btn2.classList.remove("btn22");
  }
  i++;
}

});