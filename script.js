document.addEventListener("DOMContentLoaded", () => {
    const reserveForm = document.querySelector("#reservaForm");
    const newsletterForm = document.querySelector("#newsletterForm");
    emailjs.init("aph3RPLN3fBu3qbOi");

    reservaForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.querySelector("#nome").value;
        const sobrenome = document.querySelector("#sobrenome").value;
        const telemovel = document.querySelector("#telemovel").value;
        const email = document.querySelector("#email-reserva").value;
        const destino = document.querySelector("#destino").value;
        const data = document.querySelector("#data").value;
        const pessoas = document.querySelector("#pessoas").value;
        const comentarios = document.querySelector("#comentarios").value;
        const id_reserva = Math.floor(10000 + Math.random() * 90000);

        const templateParams = {
            nome: nome,
            sobrenome: sobrenome,
            telemovel: telemovel,
            email: email,
            destino: destino,
            data: data,
            pessoas: pessoas,
            comentarios: comentarios,
            id_reserva: id_reserva,
        };

        emailjs.send("service_tvnchsi", "template_ibycglc", templateParams)
            .then(() => {
                alert("Reserva enviada com sucesso!");
                reserveForm.reset();
            })
            .catch((error) => {
                console.error("Erro ao submeter a reserva:", error);
                alert("Ocorreu um erro ao submeter a reserva. Por favor, tente novamente.");
            });
    });

    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nomeNewsletter = document.querySelector("#nome-newsletter").value;
        const emailNewsletter = document.querySelector("#email-newsletter").value;

        const templateParams = {
            nome_Newsletter: nomeNewsletter,
            email_Newsletter: emailNewsletter,
        };

        emailjs.send("service_tvnchsi", "template_5l38tia", templateParams)
            .then(() => {
                alert("Subscrição enviada com sucesso!");
                newsletterForm.reset();
            })
            .catch((error) => {
                console.error("Erro ao enviar subscrição:", error);
                alert("Ocorreu um erro ao enviar a subscrição. Por favor, tente novamente.");
            });
    });

});
