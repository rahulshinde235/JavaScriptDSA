const fibSequence = (n) => {
  if (n <= 1) {
    return n;
  } else {
    const fibSeqArray = [0, 1]; //first 2 num are defined
    for (let index = 2; index < n; index++) {
      const element = fibSeqArray[index - 1] + fibSeqArray[index - 2];
      fibSeqArray.push(element);
    }
    return fibSeqArray;
  }
};

//Big-O : O(N)
//Space : O(N)

console.log(fibSequence(7));
