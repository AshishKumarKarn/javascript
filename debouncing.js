//debouncing is a technique used to limit the rate at which a function can fire. It ensures that a function is only executed after a certain amount of time has passed since the last time it was invoked. This is particularly useful for scenarios like handling user input events, where you want to avoid executing a function too frequently.

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    const context = this;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

// Example usage:
function search(query) {
  console.log(`Searching for: ${query}`);
}

const debouncedSearch = debounce(search, 1500);

// Simulating user input
debouncedSearch('JavaScript');
debouncedSearch('Debouncing');
debouncedSearch('Function Debouncing');

// Only the last call will execute after 1500ms, printing: "Searching for: Function Debouncing"