/* Script do Menu */
/* Quando o usuário clica no botão, 
alterna entre ocultar e mostrar o conteúdo suspenso */

function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }    
  // Fecha a lista suspensa se o usuário clicar fora dela  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

function enviar(){
    let nome = document.getElementById("nomeid");
    if (nome.value != "") {
        alert('Obrigado Sr(a). ' + nome.value + ' a sua opnião foi encaminhada com sucesso.');
    }
    else{
        alert("ERRO! O nome deve ser preenchido!");
    }
}