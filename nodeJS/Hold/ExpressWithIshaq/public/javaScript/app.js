document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.todo-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', async () => {
            const index = checkbox.dataset.index;

            try {
                const response = await fetch(`/todo/mark-done/${index}`, {
                    method: 'POST',
                });


                const result = await response.json();
                if (result.success) {
                    alert('Task updated!');
                } else {
                    alert('Failed to update task.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    });
});
