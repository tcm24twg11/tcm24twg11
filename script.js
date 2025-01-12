document.addEventListener("DOMContentLoaded", () => {
    // Inicializar o EmailJS com a sua chave pública
    emailjs.init("aph3RPLN3fBu3qbOi");

    // Formulário de Reserva
    const reserveForm = document.querySelector("#reservaForm");
    if (reserveForm) {
        reserveForm.addEventListener("submit", (e) => {
            e.preventDefault();

            
    function ready() {
        var pElement = document.getElementById("action01");
        pElement.style.cursor = "pointer";
        pElement.onclick = function () {
            loadData();
            return false; //to prevent default behaviour;
        }
    }

            // Obter valores do formulário de reserva
            const nome = document.querySelector("#nome").value.trim();
            const sobrenome = document.querySelector("#sobrenome").value.trim();
            const telemovel = document.querySelector("#telemovel").value.trim();
            const email = document.querySelector("#email-reserva").value.trim();
            const destino = document.querySelector("#destino").value.trim();
            const data = document.querySelector("#data").value;
            const pessoas = document.querySelector("#pessoas").value;
            const comentarios = document.querySelector("#comentarios").value.trim();
            const id_reserva = Math.floor(10000 + Math.random() * 90000); // Gerar ID aleatório para a reserva

            // Parâmetros do template do EmailJS
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

            // Enviar email com EmailJS
            emailjs.send("service_tvnchsi", "template_ibycglc", templateParams)
                .then(() => {
                    alert("Reserva enviada com sucesso!");
                    reserveForm.reset(); // Limpar o formulário após envio
                })
                .catch((error) => {
                    console.error("Erro ao submeter a reserva:", error);
                    alert("Ocorreu um erro ao submeter a reserva. Por favor, tente novamente.");
                });
        });
    }

    // Formulário de Newsletter
    const newsletterForm = document.querySelector("#newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Obter valores do formulário de newsletter
            const nomeNewsletter = document.querySelector("#nome-newsletter").value.trim();
            const emailNewsletter = document.querySelector("#email-newsletter").value.trim();

            // Parâmetros do template do EmailJS
            const templateParams = {
                nome_Newsletter: nomeNewsletter,
                email_Newsletter: emailNewsletter,
            };

            // Enviar email com EmailJS
            emailjs.send("service_tvnchsi", "template_5l38tia", templateParams)
                .then(() => {
                    alert("Subscrição enviada com sucesso!");
                    newsletterForm.reset(); // Limpar o formulário após envio
                })
                .catch((error) => {
                    console.error("Erro ao enviar subscrição:", error);
                    alert("Ocorreu um erro ao enviar a subscrição. Por favor, tente novamente.");
                });
        });
    }
});
