// This is a JavaScript file
function retorno(){

}

function retorno2(buttonIndex) {
    if(buttonIndex == 1){
      navigator.notification.alert("Sim");
      navigator.notification.beep(1);
    }else{
       navigator.notification.alert("Não");
       navigator.notification.beep(2);
    }
    
}

$(document).on("click","#alerta",function(){
    //navigator.notification.alert("Olá Mundo - Primeiro App!",retorno,"Aviso!","ok!");
    //navigator.notification.beep(2);
    
    navigator.notification.confirm("Escolha uma opção!",retorno2,"Titulo",['Sim','Não']);
});

