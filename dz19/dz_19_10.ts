function makeTree(h: number): { tree: string; showTree: () => void } {
    // Функція для створення рядка дерева
    function createTree(height: number): string {
        let tree = '';
        for (let i = 0; i < height; i++) {
            let spaces = ' '.repeat(height - i - 1);
            let stars = '*'.repeat(2 * i + 1);
            tree += spaces + stars + spaces + '\n';
        }
        return tree;
    }

    // Повертаємо об'єкт з властивістю tree і методом showTree
    return {
        tree: createTree(h),
        showTree: function() {
            console.log(this.tree);
        }
    };
}

// Приклад використання
let myTree = makeTree(5);
myTree.showTree();
