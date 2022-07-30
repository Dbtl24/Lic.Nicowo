

function btnInicio(){
    document.querySelector(".boton-principal").classList.add("invisible");
    document.querySelector(".area-capa2").classList.remove("invisible");
    setTimeout(() => {
        document.querySelector(".area-capa2").classList.add("invisible");
      }, 2500);

      setTimeout(() => {
        document.querySelector(".area-capa3").classList.remove("invisible");
      }, 2600);

      setTimeout(() => {
        document.querySelector(".area-capa3").classList.add("invisible");
      }, 9500);

      setTimeout(() => {
        document.querySelector(".area-capa4").classList.remove("invisible");
      }, 9600);

      setTimeout(() => {
        document.querySelector(".area-capa4").classList.add("invisible");
      }, 18500);

      setTimeout(() => {
        document.querySelector(".area-capa5").classList.remove("invisible");
      }, 18600);

      setTimeout(() => {
        document.querySelector(".area-capa5").classList.add("invisible");
      }, 28500);

      setTimeout(() => {
        document.querySelector(".area-capa6").classList.remove("invisible");
      }, 28600);


}

var btnPrincipal = document.querySelector(".boton-principal");
btnPrincipal.onclick = btnInicio;