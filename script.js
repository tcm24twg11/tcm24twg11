document.getElementById('tabela').addEventListener('click', () => {
    fetch('agencia.xml')
        .then(response => response.text())
        .then(xmlText => {
            const xmlDoc = new DOMParser().parseFromString(xmlText, 'application/xml');
            const tabelaBody = document.querySelector('table tbody');
            tabelaBody.innerHTML = '';

            Array.from(xmlDoc.getElementsByTagName('destino')).forEach(destino => {
                const nome = destino.querySelector('nome').textContent;
                const descricao = destino.querySelector('descricao').textContent;
                const preco = `Desde €${parseFloat(destino.querySelector('preco').textContent).toFixed(2)}`;
                tabelaBody.innerHTML += `<tr><td>${nome}</td><td>${descricao}</td><td>${preco}</td></tr>`;
            });
        })
        .catch(console.error);
});