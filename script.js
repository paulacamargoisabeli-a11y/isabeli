document.getElementById('emailForm').addEventListener('submit', function(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault(); 
    
    // Pega o valor digitado no campo de e-mail
    const emailInput = document.getElementById('userEmail').value;
    const feedbackText = document.getElementById('formFeedback');

    if (emailInput) {
        // Exibe mensagem de sucesso com tom profissional
        feedbackText.style.color = "#81C784"; // Verde claro para leitura no fundo escuro
        feedbackText.textContent = "Obrigado! Seu e-mail foi cadastrado. Entraremos em contato em breve.";
        
        // Limpa o campo de entrada
        document.getElementById('userEmail').value = "";
        
        // Aqui, futuramente, você poderá integrar com plataformas de e-mail (como Mailchimp ou RD Station)
        console.log("E-mail capturado com sucesso: " + emailInput);
    } else {
        feedbackText.style.color = "#E57373";
        feedbackText.textContent = "Por favor, insira um e-mail válido.";
    }
});