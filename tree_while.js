function tree(height) {
    let i=0;
  while (i<height) {
    console.log(' '.repeat(height-i-1) + '*'.repeat(2*i+1));
    i +=1;
  }
}
tree(10);