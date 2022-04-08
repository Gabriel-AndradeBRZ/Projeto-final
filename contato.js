function mandarM(){
    let nome = document.getElementById("nameId").value;
    if(nome == ""){
        alert("Digite o seu nome")
    }

    let e = document.getElementById("emailId").value;
    if (e == ""){
        alert("Preencha e-mail válido")
        
    }

    let tele = Number(document.getElementById("telId").value);
    if(tele == ""){
        alert("Digite o telefone").value;
    } else if( tele != Number(document.getElementById("telId").value)){
        alert("Digite um número válido")
    }

    let comentario = document.getElementById("comentId").value;
    if(comentario ==""){
        alert("Deixe um cometário");
    }
}

