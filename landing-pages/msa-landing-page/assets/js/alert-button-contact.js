document.addEventListener("DOMContentLoaded", function (){
    const button = document.getElementById("button-enviar");
    
    button.addEventListener("click", function () {
        const nome = document.getElementById("first-name").value.trim();
        const sobrenome = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("message").value.trim();

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if(!nome || !sobrenome || !email || !mensagem){
            Swal.fire({
                title: 'ERRO', text: 'Por favor, preencha todos os campos.', icon: 'error', confirmButtonText: 'OK'
            });
            return;
        }

        if(!emailValido) {
            Swal.fire({
                title: 'E-mail inválido!', text: 'Por favor, digite um e-mail válido. (Exemplo: seuemail@dominio.com).', confirmButtonText: 'OK'
            });
            return;
        }


        Swal.fire({
            title: 'Mensagem Enviada', text: 'Obrigado pelo seu contato. Aguarde a resposta em breve.', icon: 'sucess', confirmButtonText: 'OK'
        });
    });
});
