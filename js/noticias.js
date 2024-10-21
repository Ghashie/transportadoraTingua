document.addEventListener("DOMContentLoaded", function() {
  // Função para mostrar o conteúdo do card clicado
  showContent(1);
});

function showContent(cardNumber) {
  // Remover classe 'active' de todos os cards e conteúdo
  document.querySelectorAll('.card-news').forEach(card => {
      card.classList.remove('active');
  });
  document.querySelectorAll('.content').forEach(content => {
      content.classList.remove('active');
  });

  // Adicionar classe 'active' ao card e conteúdo selecionado
  document.getElementById('card-' + cardNumber).classList.add('active');
  document.getElementById('content-' + cardNumber).classList.add('active');
}
