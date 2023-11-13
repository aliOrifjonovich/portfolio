export const createCategoryArr = (arr, checkWidth) => {
    const sortedArr = arr.reduce((acc, currentNumber) => {
      const lastSubarray = acc[acc.length - 1];
  
      if (lastSubarray && lastSubarray.length < checkWidth) {
        lastSubarray.push(currentNumber);
      } else {
        acc.push([currentNumber]);
      }
  
      return acc;
    }, []);
    return sortedArr;
  };
  