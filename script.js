function carregarDadosCSV(url, nomeSecao, callback) {
  Papa.parse(url, {
    download: true,
    header: true,
    complete: function(results) {
      console.log(`>>> Dados brutos da seção ${nomeSecao}:`, results.data);
      callback(results.data);
    },
    error: function(err) {
      console.error(`Erro ao carregar ${nomeSecao}:`, err);
    }
  });
}

// EQUIPE
carregarDadosCSV(
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLVBo6EOkYUWTy_ez3B6P_oJm4otkxIWb7lsur-_YTavztd-5ouLEKQ6at1a2OtsyHBHzlBTk1KpX/pub?gid=1742586084&single=true&output=csv',
  'Equipe',
  function(data) {
    const container = document.getElementById('equipe-content');
    container.innerHTML = '';
    data.forEach(pessoa => {
      const nome = pessoa['Nome']?.trim();
      const foto = pessoa['URL da Foto']?.trim();
      if (nome || foto) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${foto}" alt="${nome}">
          <div>
            <h3>${nome}</h3>
            <p><strong>${pessoa['Cargo']}</strong></p>
            <p>${pessoa['Mini Currículo'] ?? pessoa['Mini CurrÃ­culo']}</p>
          </div>
        `;
        container.appendChild(card);
      }
    });
  }
);