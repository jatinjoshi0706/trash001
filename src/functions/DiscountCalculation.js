
module.exports = (qualifiedRM, formData) => {
    qualifiedRM.forEach(element => {


        element["Vehicle Incentive % Slabwise"] = 0;
        element["Total Vehicle Incentive Amt. Slabwise"] = 0;
        let userValue = element["AVG. Discount"];
       

// Summing up all types of Vehicle Incentive 
        const TotalVehicleIncentive = element["Total PerCar Incentive"] + element['SpecialCar Incentive'] + element["TotalModelIncentive"];

  
//Loop to check if Discount of DSE falls in the range of Discount Slab inputs given by user and calculate its incentive 


        for (const incentive of formData.DiscountInputs) {
            //soon scenario
            if (incentive.max === null) {
                if (userValue >= incentive.min) {
                    element["Vehicle Incentive % Slabwise"] = incentive.incentive;
                    
                    element["Total Vehicle Incentive Amt. Slabwise"] = (TotalVehicleIncentive * incentive.incentive) / 100;
                    break;
                }
            } else {
                if (userValue >= incentive.min && userValue <= incentive.max) {
                    element["Vehicle Incentive % Slabwise"] = incentive.incentive;
                    element["Total Vehicle Incentive Amt. Slabwise"] = (TotalVehicleIncentive * incentive.incentive) / 100;
                    break;
                }
            }
        }


    });
    return qualifiedRM;
}