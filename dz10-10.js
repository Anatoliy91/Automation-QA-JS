function makeTree(h) {
    const tree = buildTree(h);
    
    function buildTree(height) {
      let result = '';
      for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        result += spaces + stars + '\n';
      }
      return result;
    }
    
    return {
      tree,
      showTree() {
        console.log(this.tree);
      }
    };
  }
  

  const christmasTree = makeTree(5);
  christmasTree.showTree();
  