const createVehicle = function (type, numWheels, color) {
    const vehicle = {
      type: type,
      numWheels: numWheels,
      color: color,
    };
    return vehicle;
  };
  
  const car = createVehicle("car", 4, "blue");
  const bike = createVehicle("bike", 2, "yellow");
  const skateboard = createVehicle("skateboard", 4, "pink");
  
  const myVehicles = [car, bike, skateboard];
  
  for (let vehicle of myVehicles) {
    for (let key in vehicle) {
        console.log(key, vehicle[key])
    }
  }
  