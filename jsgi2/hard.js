let tom = {
    height: 9,
    mass: 8
  };
  
  let jerry = {
    height: 10,
    mass: 45
  };
  
  let tomBMI = tom.mass / (tom.height * tom.height);
  let jerryBMI = jerry.mass / (jerry.height * jerry.height);
  
  let isTomHigher = tomBMI > jerryBMI;
  
  console.log(`Is Tom's BMI higher than Jerry's? ${isTomHigher}`);
  