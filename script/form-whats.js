const btn = document.querySelector("#submit");


btn.addEventListener("click", e => {
    e.preventDefault();
    const name = document.querySelector("#nome").value;
    const assunto = document.querySelector("#assunto").value;
    const message = document.querySelector("#mens").value; 
    const telefone = document.querySelector("#tel").value; 
    if(name=== "" || assunto === "" || message === "" || telefone === ""){
        alert('Preencha todos os campos')
    }else{
        message.replace(" ", "+")
        console.log(assunto)
        window.location.assign(`https://wa.me/35998876688%text=Nome:+${name}%0AN° telefone:+${telefone}%0AAssunto:+${assunto}%0AMensagem:+${message}`)
    }
    
})
