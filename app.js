function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("resultado-pesquisa")
    // Limpa o conteúdo anterior da seção (opcional)

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return 
    }    

    
    section.innerHTML = '';
    for (let dado of dados) {
        const section = document.createElement('section');
        section.innerHTML += `
      <article>
        <header>
          <h2>${dado.titulo}</h2>
        </header>
        <div>
          <p>${dado.descrição}</p>
          <p>${dado.medalhas}</p>
          <p>${dado.nacionalidade}</p>
          <p>Saiba mais: <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Wikipédia</a></p>
        </div>
      </article>
    `;
        document.getElementById('resultados-pesquisa').appendChild(section);
        }
    
}