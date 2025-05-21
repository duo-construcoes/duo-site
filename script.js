
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
      <img src="\${pessoa['URL da Foto']}" alt="\${pessoa['Nome']}">
      <div>
        <h3>\${pessoa['Nome']}</h3>
        <p><strong>\${pessoa['Cargo']}</strong></p>
        <p>\${pessoa['Mini Currículo']}</p>
      </div>
    `;
    container.appendChild(card);
  });
});

// Obras em andamento
carregarDadosCSV('https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLVBo6EOkYUWTy_ez3B6P_oJm4otkxIWb7lsur-_YTavztd-5ouLEKQ6at1a2OtsyHBHzlBTk1KpX/pub?gid=1482567846&single=true&output=csv', function(data) {
  const container = document.getElementById('obras-andamento-content');
  container.innerHTML = '';
  data.forEach(obra => {
    const card = document.createElement('div');
    card.className = 'obra';
    card.innerHTML = `
      <img src="\${obra['URL da Imagem']}" alt="\${obra['Nome da Obra']}">
      <div>
        <h4>\${obra['Nome da Obra']}</h4>
        <p>Área: \${obra['Área Construída']} m²</p>
        <p>Local: \${obra['Localização']}</p>
      </div>
    `;
    container.appendChild(card);
  });
});

// Obras concluídas
carregarDadosCSV('https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLVBo6EOkYUWTy_ez3B6P_oJm4otkxIWb7lsur-_YTavztd-5ouLEKQ6at1a2OtsyHBHzlBTk1KpX/pub?gid=1611364421&single=true&output=csv', function(data) {
  const container = document.getElementById('obras-concluidas-content');
  container.innerHTML = '';
  data.forEach(obra => {
    const card = document.createElement('div');
    card.className = 'obra';
    card.innerHTML = `
      <img src="\${obra['URL da Imagem']}" alt="\${obra['Nome da Obra']}">
      <div>
        <h4>\${obra['Nome da Obra']}</h4>
        <p>Área: \${obra['Área Construída']} m²</p>
        <p>Local: \${obra['Localização']}</p>
      </div>
    `;
    container.appendChild(card);
  });
});
