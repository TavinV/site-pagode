// JavaScript para melhorar a acessibilidade
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona aria-expanded para elementos expansíveis (se houver)
    const expandableButtons = document.querySelectorAll('[aria-expanded]');
    
    expandableButtons.forEach(button => {
        button.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
        });
        
        // Também permite ativação com a tecla Enter
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Foco no conteúdo principal quando o link skip é ativado
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.setAttribute('tabindex', '-1');
        target.focus();
    });
});
