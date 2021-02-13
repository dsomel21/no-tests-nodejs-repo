function add(a, b) {
  return a + b;
}

const coolCar = {
  make: 'Ferrari',
  model: 'Testarossa',
  engine: {
    fast: true,
    cylinders: 12,
    horsepower: 385,
  },
};
// typeof coolCar === 'obect'; // Make sure this "breaks"
typeof coolCar === 'object';

function getFormattedCarDetails(car) {
  const { make, model, engine } = car;
  const { cylinders, horsepower } = engine;

  return `${make} ${model} - V${cylinders} @ ${horsepower}hp`;
}

add(1, 2);

const coolCarDetails = getFormattedCarDetails(coolCar);
console.log(coolCarDetails);
