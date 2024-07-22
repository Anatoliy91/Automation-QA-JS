function getTodos(arr) {
    const baseURL = 'https://jsonplaceholder.typicode.com/todos/';

    // Функція для отримання однієї нотатки за ID
    function fetchTodoById(id) {
        return fetch(baseURL + id)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch todo with id: ${id}`);
                }
                return response.json();
            });
    }

    // Створюємо масив промісів для всіх ID
    const promises = arr.map(id => fetchTodoById(id));

    // Використовуємо Promise.all для паралельного виконання всіх запитів
    return Promise.all(promises)
        .then(todos => {
            return todos; // Повертаємо масив з нотатками
        })
        .catch(error => {
            throw new Error(`Error fetching todos: ${error.message}`);
        });
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
