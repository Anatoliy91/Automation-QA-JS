function delay(s) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, s * 1000); // Перетворюємо секунди в мілісекунди
    });
}

// Приклад використання
async function exampleUsage() {
    console.log('Пауза починається...');
    await delay(3); // Пауза на 3 секунди
    console.log('Пауза закінчилася.');
}

exampleUsage();
