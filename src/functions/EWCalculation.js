
module.exports =  (qualifiedRM, formData) => {

    formData["Extended Warranty"].sort((a, b) => {
        if (a.type === 'greater' && b.type === 'greater') {
            return b.value - a.value; // Descending order for 'greater'
          } else if (a.type === 'less' && b.type === 'less') {
            return a.value - b.value; // Ascending order for 'less'
          } else if (a.type === 'range' && b.type === 'range') {
            return b.max - a.max; // Descending order for 'range' based on max value
          } else if (a.type === 'range') {
            return 1; // 'range' conditions should come last
          } else if (b.type === 'range') {
            return -1; // 'range' conditions should come last
          } else if (a.type === 'greater') {
            return -1; // 'greater' conditions come before 'less' conditions
          } else {
            return 1; // 'less' conditions come after 'greater' conditions
          }
      });

      // console.log(formData["Extended Warranty"]);

    qualifiedRM.forEach(element => {
       
        let userEW = element["EW Penetration"];

        //Setting default incentive to 0
        element["EW Incentive"] = 0;


        // DSE's EW Count
        const noOfCarSoldEW = element["EWPCount"];



         //Loop to check if Extended Warranty of DSE falls in the range of EW inputs given by user and calculate its incentive 
      
        for (let i = 0; i < formData["Extended Warranty"].length; i++) {
            const condition = formData["Extended Warranty"][i];
            if (condition.type === 'less' && userEW <= condition.value) {
              if(condition.incentive<0){
                element["EW Incentive"] = (element["Grand Total"] - noOfCarSoldEW)*condition.incentive;
              }else{      
              element["EW Incentive"] = noOfCarSoldEW*condition.incentive;
            }
              break;
            } else if (condition.type === 'greater' && userEW >= condition.value) {
              element["EW Incentive"] = noOfCarSoldEW*condition.incentive;
              break;
            } else if (condition.type === 'range' && userEW > condition.min && userEW < condition.max) {
              element["EW Incentive"] = noOfCarSoldEW*condition.incentive;
              break;
            }
          }
    

    });
    
    return qualifiedRM;
    }