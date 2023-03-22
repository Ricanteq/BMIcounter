interface PersonData {
    name: string;
    age: number;
    weight: number;
    height: number;
  }
  
  import * as readline from 'readline';
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let numPatients: number;
  let currentPatient = 0;
  
  rl.question("Welcome Doctor! How many patients would you like to see today? ", (num) => {
    numPatients = parseInt(num);
    promptUser();
  });
  
  function promptUser() {
    if (currentPatient < numPatients) {
      rl.question("Enter your name: ", (name) => {
        rl.question("Enter your age: ", (age) => {
          rl.question("Enter your weight in kg: ", (weight) => {
            rl.question("Enter your height in meters: ", (height) => {
              const data: PersonData = {
                name: name,
                age: parseInt(age),
                weight: parseFloat(weight),
                height: parseFloat(height),
              };
              if (data.age < 18) {
                console.log(`Sorry ${data.name}, you are too young`);
              } else {
                console.log(`Welcome ${data.name}, you are old enough`);
                const bmi = calculateBMI(data.weight, data.height);
                console.log(`Your BMI is ${bmi.toFixed(2)}`);
              }
              currentPatient++;
              promptUser();
            });
          });
        });
      });
    } else {
      console.log(`The maximum number of patients has been reached. Sorry, we cannot see any more patients.`);
      rl.close();
    }
  }
  
  function calculateBMI(weight: number, height: number): number {
    return weight / (height * height);
  }
  