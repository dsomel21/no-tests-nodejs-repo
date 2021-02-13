// Types
interface Engine {
  fast: boolean;
  cylinders: number;
  horsepower: number;
}

interface Car {
  make: string;
  model: string;
  engine: Engine;
}

function add(a: number, b: number): number {
  return a + b;
}

const coolCar: Car = {
  make: 'Ferrari',
  // mode1: 'Testarossa', // Make sure this breaks
  model: 'Testarossa',
  engine: {
    fast: true,
    cylinders: 12,
    horsepower: 385,
  },
};
// typeof coolCar === 'obect'; // Make sure this "breaks"
typeof coolCar === 'object';

function getFormattedCarDetails(car: Car): string {
  const { make, model, engine } = car;
  const { cylinders, horsepower } = engine;

  // return true; // Make sure this "breaks"
  return `${make} ${model} - V${cylinders} @ ${horsepower}hp`;
}

// add(1, '2'); // Make sure this "breaks"
add(1, 2);

const coolCarDetails = getFormattedCarDetails(coolCar);
console.log(coolCarDetails);
