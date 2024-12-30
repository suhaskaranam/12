
function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function(...nextArgs) {
          return curried(...args,...nextArgs);
        }
      }
    };
  }
  
  function add(a, b) {
    return a + b;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(2)(3)); // Output: 5
  console.log(curriedAdd(2, 3)); // Output: 5

  