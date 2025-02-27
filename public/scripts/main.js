document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.like-form').forEach(form => {
        form.addEventListener('submit', async function (event) {
            event.preventDefault(); 

            const personId = this.getAttribute('data-id');
            const button = this.querySelector('.like-button');
            const isLiked = button.classList.contains('liked');

            const url = isLiked ? `/person/${personId}/unlike` : `/person/${personId}/like`;

            await fetch(url, { method: 'POST' });

            if (isLiked) {
                button.textContent = 'Like ❤️';
                button.classList.remove('liked');
            } else {
                button.textContent = 'Unlike 💔';
                button.classList.add('liked');
            }
        });
    });
});
