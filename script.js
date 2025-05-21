// Carrega dados das planilhas CSV usando PapaParse
function carregarDadosCSV(url, callback) {
  Papa.parse(url, {
    download: true,
    header: true,
    complete: function(results) {
      callback(results.data);
    }
  });
}

// Equipe
carregarDadosCSV('https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLVBo6EOkYUWTy_ez3B6P_oJm4otkxIWb7lsur-_YTavztd-5ouLEKQ6at1a2OtsyHBHzlBTk1KpX/pub?gid=1742586084&single=true&output=csv', function(data) {
  const container = document.getElementById('equipe-content');
  container.innerHTML = '';
  data.forEach(pessoa => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${pessoa['URL da Foto']}" alt="${pessoa['Nome']}">
      <div>
        <h3>${pessoa['Nome']}</h3>
        <p><strong>${pessoa['Cargo']}</strong></p>
        <p>${pessoa['Mini Currículo']}</p>
      </div>
    `;
    container.appendChild(card);
  });
});

// As demais funções permanecem as mesmas (obras em andamento e concluídas)