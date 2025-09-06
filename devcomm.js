
document.querySelector(".morephotos").addEventListener("click",()=>{
    document.getElementById("box7").style.display="";
    document.getElementById("box8").style.display="";
    document.getElementById("box9").style.display="";
    document.getElementById("box10").style.display="";
    document.getElementById("box11").style.display="";
    document.getElementById("box12").style.display="";
    document.getElementById("morephotosbtn").style.display="none";
    

});
document.querySelector(".lessphotos").addEventListener("click", () => {
  document.getElementById("box7").style.display = "none";
  document.getElementById("box8").style.display = "none";
  document.getElementById("box9").style.display = "none";
  document.getElementById("box10").style.display = "none";
  document.getElementById("box11").style.display = "none";
  document.getElementById("box12").style.display = "none";
  document.getElementById("morephotosbtn").style.display = "";
});