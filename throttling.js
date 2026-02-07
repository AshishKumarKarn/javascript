//throttling is a technique used to limit the number of times a function can be called over a certain period of time. It is often used to improve performance and prevent excessive function calls in situations where a function may be triggered frequently, such as during scrolling or resizing events.

function throttle(fn, limit) {
  let inThrottle = false;

  return function (...args) {
    const context = this;

    if (!inThrottle) {
      fn.apply(context, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Example usage:
function callApi() {
  console.log('called!');
}

const throttledCallApi = throttle(callApi, 2000);

// Simulating rapid calls
throttledCallApi(); // Output: called!
throttledCallApi(); // No output, as it's within the throttle limit
setTimeout(throttledCallApi, 2500); // Output: called!, as it's after the throttle limit   
