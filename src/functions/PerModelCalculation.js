
module.exports =  (qualifiedRM, formData) => {

 
qualifiedRM.forEach(element => {


element["PerModel Incentive"] = 0;

let perModelIncentive = 0;

      // Find the appropriate incentive based on the exact model of cars sold for modelWise Calculation


for (const model in formData.PerModelIncentive) {
    if (element.hasOwnProperty(model) && element[model] > 0) {
        perModelIncentive += element[model] * formData.PerModelIncentive[model];
    }
}

element["PerModel Incentive"] = perModelIncentive;
element["Total Incentive"] = parseFloat(element["Total Incentive"]) + parseFloat(element["PerModel Incentive"]);

});

return qualifiedRM;
}









