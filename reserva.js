function sendMail() { 
    var form = document.getElementById("reservaForm");

    var params = {
        nome: form.nome.value,
        sobrenome: form.sobrenome.value,
        telemovel: form.telemovel.value,
        email_reserva: form["email_reserva"].value,
        destino: form.destino.value,
        data: form.data.value,
        pessoas: form.pessoas.value,
        comentarios: form.comentarios.value
    };

    const serviceID = "service_tvnchsi";
    const templateID = "template_ibycglc";

    emailjs.send(serviceID, templateID, params)
    .then((res) => {
        // Limpa os campos após o envio
        form.nome.value = "";
        form.sobrenome.value = "";
        form.telemovel.value = "";
        form["email_reserva"].value = "";
        form.destino.value = "";
        form.data.value = "";
        form.pessoas.value = "";
        form.comentarios.value = "";

        console.log(res);
        alert("A sua mensagem foi enviada com sucesso!");
    })
    .catch((err) => {
        console.log("Erro ao enviar: ", err);
        alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
    });    
}
