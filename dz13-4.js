async function getTodos(arr) {
    const baseURL = 'https://jsonplaceholder.typicode.com/todos/';

    // Функція для отримання однієї нотатки за ID
    async function fetchTodoById(id) {
        try {
            const response = await fetch(baseURL + id);
            if (!response.ok) {
                throw new Error(`Failed to fetch todo with id: ${id}`);
            }
            return await response.json();
        } catch (error) {
            return null;
        }
    }

    // Створюємо масив промісів для всіх ID
    const promises = arr.map(id => fetchTodoById(id));

    // Використовуємо Promise.allSettled для паралельного виконання всіх запитів
    const results = await Promise.allSettled(promises);

    // Обробляємо результати, замінюючи rejected проміси на null
    const todos = results.map(result => result.status === 'fulfilled' ? result.value : null);

    // Перевіряємо, чи всі результати є null
    if (todos.every(todo => todo === null)) {
        return null;
    }

    return todos;
}

// Приклад використання
const todoIds = [1, 3, 50, 4];
getTodos(todoIds)
    .then(todos => {
        console.log('Fetched todos:', todos);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
