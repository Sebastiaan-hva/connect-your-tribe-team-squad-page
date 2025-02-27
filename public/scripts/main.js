document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', async function () {
        const personId = this.getAttribute('data-id');
        const response = await fetch(`/like/${personId}`, { method: 'POST' });
        const data = await response.json();
        this.querySelector('.like-status').textContent = data.status === 1 ? 'Liked' : 'Disliked';
    });
});