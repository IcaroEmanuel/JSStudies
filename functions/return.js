// Exemplo de uso de una IIFE(Immediately Invoked Function Expression)
(() => {
  const date = new Date();
  console.log(date);
})();

function multiply(multiplier) {
  return (num) => {
    return multiplier * num;
  };
}

const operation = multiply(10);
console.log(operation(4));

function timer(time) {
  setTimeout(function () {
    console.log("done");
  }, time);
}

timer(5000);
