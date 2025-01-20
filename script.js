document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    try {
        const response = await fetch('https://playerspoker-club.vercel.app/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone })
        });

        const result = await response.json();

        if (response.ok) {
            // Redireciona para a página de agradecimento
            window.location.href = '/obrigado';
        } else {
            alert(result.message || 'Erro ao enviar os dados');
        }
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('Erro ao enviar os dados');
    }
});
