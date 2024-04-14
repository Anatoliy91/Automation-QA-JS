function tree(height) {
    for (let i=0; i<height; i++) {
        console.log(' '.repeat(height-i-1) + '*'.repeat(2*i+1))
    }
  }
  
  tree(10);