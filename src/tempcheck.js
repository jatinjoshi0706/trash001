// const { ipcRenderer, contextBridge } = require("electron");
// const XLSX = require("xlsx");

// let MGAranges = [];
// let carPairs = [];
// let ExchangePairs = [];
// let EWInputs = [];
// let CCPInputs = [];
// let MSSFInputs = [];
// let DiscountInputs = [];
// let ComplaintInputs = [];
// let MSRinputs = [];
// let NumberPairs = [];
// let pairCount = 0;
// let specialCarPairCount = 0;
// let newDSEInput = [];
// let perModelProgressivePairs = [];

// const addEWInputFields = (type, EWinputsContainer) => {
//   let inputFields;

//   switch (type) {
//     case "greater":
//       inputFields = `
//                 <div class="inputGroup">
//                     <label for="percentageGreaterThan">Percentage Greater Than or Equal To:</label>
//                     <input type="number" step="0.01" name="percentageGreaterThan" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     case "less":
//       inputFields = `
//                 <div class="inputGroup">
//                     <label for="percentageLessThan">Percentage Less Than or Equal To:</label>
//                     <input type="number" step="0.01" name="percentageLessThan" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     case "range":
//       inputFields = `
//                 <div class="inputGroup">
//                     <label for="percentageMin">Percentage Minimum (%):</label>
//                     <input type="number" step="0.01" name="percentageMin" required>
//                     <label for="percentageMax">Percentage Maximum (%):</label>
//                     <input type="number" step="0.01" name="percentageMax" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     default:
//       inputFields = "";
//       break;
//   }

//   EWinputsContainer.insertAdjacentHTML("beforeend", inputFields);
// };

// const addMSRInputFields = (type, MSRinputsContainer) => {
//   let inputFields;

//   switch (type) {
//     case "greater":
//       inputFields = `
//                 <div class="inputGroup">
//                     <label for="percentageGreaterThan">Percentage Greater Than or Equal To:</label>
//                     <input type="number" step="0.01" name="percentageGreaterThan" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     case "less":
//       inputFields = `
//                 <div class="inputGroup">
//                     <label for="percentageLessThan">Percentage Less Than or Equal To:</label>
//                     <input type="number" step="0.01" name="percentageLessThan" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     case "range":
//       inputFields = `
//                 <div class="inputGroup">
//                     <label for="percentageMin">Percentage Minimum (%):</label>
//                     <input type="number" step="0.01" name="percentageMin" required>
//                     <label for="percentageMax">Percentage Maximum (%):</label>
//                     <input type="number" step="0.01" name="percentageMax" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     default:
//       inputFields = "";
//       break;
//   }

//   MSRinputsContainer.insertAdjacentHTML("beforeend", inputFields);
// };

// const addCCPInputFields = (type, CCPinputsContainer) => {
//   let inputFields;

//   switch (type) {
//     case "greater":
//       inputFields = `
//                 <div class="CCPinputGroup">
//                     <label for="percentageGreaterThan">Percentage Greater Than or Equal To:</label>
//                     <input type="number" step="0.01" name="percentageGreaterThan" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     case "less":
//       inputFields = `
//                 <div class="CCPinputGroup">
//                     <label for="percentageLessThan">Percentage Less Than or Equal To:</label>
//                     <input type="number" step="0.01" name="percentageLessThan" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     case "range":
//       inputFields = `
//                 <div class="CCPinputGroup">
//                     <label for="percentageMin">Percentage Minimum (%):</label>
//                     <input type="number" step="0.01" name="percentageMin" required>
//                     <label for="percentageMax">Percentage Maximum (%):</label>
//                     <input type="number" step="0.01" name="percentageMax" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     default:
//       inputFields = "";
//       break;
//   }

//   CCPinputsContainer.insertAdjacentHTML("beforeend", inputFields);
// };

// const addMSSFInputFields = (type, MSSFinputsContainer) => {
//   let inputFields;

//   switch (type) {
//     case "greater":
//       inputFields = `
//                 <div class="MSSFinputGroup">
//                     <label for="percentageGreaterThan">Percentage Greater Than or Equal To:</label>
//                     <input type="number" step="0.01" name="percentageGreaterThan" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     case "less":
//       inputFields = `
//                 <div class="MSSFinputGroup">
//                     <label for="percentageLessThan">Percentage Less Than or Equal To:</label>
//                     <input type="number" step="0.01" name="percentageLessThan" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     case "range":
//       inputFields = `
//                 <div class="MSSFinputGroup">
//                     <label for="percentageMin">Percentage Minimum (%):</label>
//                     <input type="number" step="0.01" name="percentageMin" required>
//                     <label for="percentageMax">Percentage Maximum (%):</label>
//                     <input type="number" step="0.01" name="percentageMax" required>
//                     <label for="incentive">Incentive (Rs):</label>
//                     <input type="number" name="incentive" required>
//                 </div>
//             `;
//       break;

//     default:
//       inputFields = "";
//       break;
//   }

//   MSSFinputsContainer.insertAdjacentHTML("beforeend", inputFields);
// };

// const addDiscountInputFields = (DinputsContainer) => {
//   const inputFields = `
//         <div class="DinputGroup">
//             <label for="amountMin">Amount Minimum (Rs):</label>
//             <input type="number" step="any" name="amountMin" required>
//             <label for="amountMax">Amount Maximum (Rs):</label>
//             <input type="number" step="any" name="amountMax">
//             <label for="incentive">Incentive (%):</label>
//             <input type="number" step="any"  name="incentive" required>
//         </div>
//     `;
//   DinputsContainer.insertAdjacentHTML("beforeend", inputFields);
// };

// const addMGAInputFields = (MGAinputsContainer) => {
//   const inputFields = `
//         <div class="MGAinputGroup">
//             <label for="amountMin">Amount Minimum (Rs):</label>
//             <input type="number" step="any"  name="amountMin" required>
//             <label for="amountMax">Amount Maximum (Rs):</label>
//             <input type="number" step="any"  name="amountMax">
//             <label for="incentive">Incentive (%):</label>
//             <input type="number" step="any"  name="incentive" required>
//         </div>
//     `;
//   MGAinputsContainer.insertAdjacentHTML("beforeend", inputFields);
// };

// document.addEventListener("DOMContentLoaded", function () {
//   const fileSelectorSalesExcel = document.querySelector(
//     "#file-input-salesExcel"
//   );
//   fileSelectorSalesExcel.addEventListener("change", (e) => {
//     const filePath = e.target.files[0].path;
//     ipcRenderer.send("file-selected-salesExcel", filePath);
//     // console.log(filePath);
//   });

//   const resetButton = document.getElementById("resetButton");

//   resetButton.addEventListener("click", () => {
//     ipcRenderer.send("reset-app");
//   });

//   const fileSelectorCDIScore = document.querySelector("#file-input-CDIScore");
//   fileSelectorCDIScore.addEventListener("change", (e) => {
//     const filePath = e.target.files[0].path;
//     ipcRenderer.send("file-selected-CDIScore", filePath);
//     // console.log(filePath);
//   });
//   const form = document.getElementById("myForm");

//   // For CDI Range
//   const inputTemplates = {
//     greater: `
//           <div class="cdiInput">
//               <label>CDI Greater Than:</label>
//               <input type="number" name="cdiValue" >
//               <label>Incentive:</label>
//               <input type="number" name="incentive" >
//           </div>
//       `,
//     less: `
//           <div class="cdiInput">
//               <label>CDI Less Than:</label>
//               <input type="number" name="cdiValue" >
//               <label>Incentive:</label>
//               <input type="number" name="incentive" >
//           </div>
//       `,
//     range: `
//           <div class="cdiInput">
//               <label>CDI Minimum:</label>
//               <input type="number" name="cdiMin" >
//               <label>CDI Maximum:</label>
//               <input type="number" name="cdiMax" >
//               <label>Incentive:</label>
//               <input type="number" name="incentive" >
//           </div>
//       `,
//   };

//   const addInputButton = document.getElementById("addInputButton");

//   addInputButton.addEventListener("click", () => {
//     const inputType = document.getElementById("inputType");
//     const selectedType = inputType.value;
//     const cdiContainer = document.getElementById("cdiInputs");
//     cdiContainer.insertAdjacentHTML("beforeend", inputTemplates[selectedType]);
//   });

//   const removeCDIInputButton = document.getElementById("removeCDIInput");
//   removeCDIInputButton.addEventListener("click", () => {
//     var container = document.getElementById("cdiInputs");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       container.removeChild(lastChild);
//     }
//   });

//   // For EW Input

//   const addEWInputButton = document.getElementById("addEWInputButton");

//   addEWInputButton.addEventListener("click", () => {
//     const EWinputType = document.getElementById("EWinputType");
//     const selectedType = EWinputType.value;
//     const EWContainer = document.getElementById("EWinputsContainer");
//     addEWInputFields(selectedType, EWContainer);
//   });

//   const removeEWInputButton = document.getElementById("removeEWInputButton");
//   removeEWInputButton.addEventListener("click", () => {
//     var container = document.getElementById("EWinputsContainer");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       container.removeChild(lastChild);
//     }
//   });

//   // For MSR Input

//   const addMSRInputButton = document.getElementById("addMSRInputButton");

//   addMSRInputButton.addEventListener("click", () => {
//     const MSRinputType = document.getElementById("MSRinputType");
//     const selectedType = MSRinputType.value;
//     const MSRContainer = document.getElementById("MSRinputsContainer");
//     addMSRInputFields(selectedType, MSRContainer);
//   });

//   const removeMSRInputButton = document.getElementById("removeMSRInputButton");
//   removeMSRInputButton.addEventListener("click", () => {
//     var container = document.getElementById("MSRinputsContainer");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       container.removeChild(lastChild);
//     }
//   });

//   // For MSSF input

//   const addMSSFInputButton = document.getElementById("addMSSFInputButton");

//   addMSSFInputButton.addEventListener("click", () => {
//     const MSSFinputType = document.getElementById("MSSFinputType");
//     const selectedType = MSSFinputType.value;
//     const MSSFContainer = document.getElementById("MSSFinputsContainer");
//     addMSSFInputFields(selectedType, MSSFContainer);
//   });

//   const removeMSSFInputButton = document.getElementById(
//     "removeMSSFInputButton"
//   );
//   removeMSSFInputButton.addEventListener("click", () => {
//     var container = document.getElementById("MSSFinputsContainer");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       container.removeChild(lastChild);
//     }
//   });

//   // For Car Pair
//   const addPairButton = document.getElementById("addPairButton");
//   addPairButton.addEventListener("click", () => {
//     const pairContainer = document.getElementById("pairs-container");
//     const div = document.createElement("div");
//     div.className = "pair-container";

//     div.innerHTML = `
//         <label for="cars">Number of Cars:</label>
//         <input type="number" name="cars">
//         <label for="incentive">Incentive:</label>
//         <input type="number" name="incentive" step="0.01">
//     `;
//     pairContainer.appendChild(div);
//   });

//   const removecarPairInputButton = document.getElementById("removePairButton");
//   removecarPairInputButton.addEventListener("click", () => {
//     var container = document.getElementById("pairs-container");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       container.removeChild(lastChild);
//     }
//   });

//   //For ModelWise Car Number Pair

//   const addNumberPairButton = document.getElementById("addNumberPairButton");
//   addNumberPairButton.addEventListener("click", () => {
//     const pairContainer = document.getElementById("Number-pairs-container");
//     const div = document.createElement("div");
//     div.className = "Number-pair-container";

//     div.innerHTML = `
//         <label for="vehicleNumber">Number of Cars:</label>
//         <input type="number" name="vehicleNumber">
//         <label for="incentive">Incentive(%):</label>
//         <input type="number" name="incentive" step="any">
//     `;
//     pairContainer.appendChild(div);
//   });

//   const removeNumberPairButton = document.getElementById(
//     "removeNumberPairButton"
//   );
//   removeNumberPairButton.addEventListener("click", () => {
//     var container = document.getElementById("Number-pairs-container");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       container.removeChild(lastChild);
//     }
//   });

//   const addExchangePairButton = document.getElementById(
//     "addExchangePairButton"
//   );
//   addExchangePairButton.addEventListener("click", () => {
//     const pairContainer = document.getElementById("Exchange-pairs-container");
//     const div = document.createElement("div");
//     div.className = "Exchange-pair-container";

//     div.innerHTML = `
//         <label for="exchange">Exchange No:</label>
//         <input type="number" name="exchange">
//         <label for="incentive">Incentive:</label>
//         <input type="number" name="incentive" step="0.01">
//     `;
//     // pairContainer.insertBefore(div, pairContainer.lastElementChild);
//     pairContainer.appendChild(div);
//   });

//   const removeLastExchangePairButton = document.getElementById(
//     "removeLastExchangePairButton"
//   );
//   removeLastExchangePairButton.addEventListener("click", () => {
//     const pairContainer = document.getElementById("Exchange-pairs-container");
//     const exchangePairContainers = pairContainer.getElementsByClassName(
//       "Exchange-pair-container"
//     );

//     const lastPairContainer =
//       exchangePairContainers[exchangePairContainers.length - 1];
//     pairContainer.removeChild(lastPairContainer);
//   });

//   // Complaint Pair

//   const addComplaintPairButton = document.getElementById(
//     "addComplaintPairButton"
//   );
//   addComplaintPairButton.addEventListener("click", () => {
//     const pairContainer = document.getElementById("Complaint-pairs-container");
//     const div = document.createElement("div");
//     div.className = "Complaint-pair-container";

//     div.innerHTML = `
//         <label for="complaint">Complaint No:</label>
//         <input type="number" name="complaint">
//         <label for="incentive">Incentive:</label>
//         <input type="number" name="incentive" step="0.01">
//     `;
//     // pairContainer.insertAdjacentHTML('beforeend',div);
//     pairContainer.appendChild(div);
//   });

//   const removeLastComplaintPairButton = document.getElementById(
//     "removeLastComplaintPairButton"
//   );
//   removeLastComplaintPairButton.addEventListener("click", () => {
//     const pairContainer = document.getElementById("Complaint-pairs-container");
//     const complaintPairContainers = pairContainer.getElementsByClassName(
//       "Complaint-pair-container"
//     );

//     const lastPairContainer =
//       complaintPairContainers[complaintPairContainers.length - 1];
//     pairContainer.removeChild(lastPairContainer);
//   });

//   //MGA input

//   const addMGAInput = document.getElementById("addMGAInput");
//   addMGAInput.addEventListener("click", () => {
//     const MGAinputsContainer = document.getElementById("MGAinputsContainer");
//     addMGAInputFields(MGAinputsContainer);
//   });

//   const removeMGAInputButton = document.getElementById("removeMGAInput");
//   removeMGAInputButton.addEventListener("click", () => {
//     var container = document.getElementById("MGAinputsContainer");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       container.removeChild(lastChild);
//     }
//   });

//   //    For CCP input

//   const addCCPInputButton = document.getElementById("addCCPInputButton");
//   addCCPInputButton.addEventListener("click", () => {
//     const CCPinputType = document.getElementById("CCPinputType");
//     const selectedType = CCPinputType.value;
//     const CCPContainer = document.getElementById("CCPinputsContainer");
//     addCCPInputFields(selectedType, CCPContainer);
//   });

//   const removeCCPInputButton = document.getElementById("removeCCPInputButton");
//   removeCCPInputButton.addEventListener("click", () => {
//     var container = document.getElementById("CCPinputsContainer");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       container.removeChild(lastChild);
//     }
//   });

//   // For Discount Input

//   const addDiscountInputButton = document.getElementById(
//     "addDiscountInputButton"
//   );
//   addDiscountInputButton.addEventListener("click", () => {
//     const DiscountContainer = document.getElementById(
//       "DiscountInputsContainer"
//     );
//     addDiscountInputFields(DiscountContainer);
//   });

//   const removeDiscountInputButton = document.getElementById(
//     "removeDiscountInput"
//   );
//   removeDiscountInputButton.addEventListener("click", () => {
//     var container = document.getElementById("DiscountInputsContainer");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       container.removeChild(lastChild);
//     }
//   });

//   // For Per Model Input

//   const addPerModelPairButton = document.getElementById(
//     "addPerModelPairButton"
//   );
//   addPerModelPairButton.addEventListener("click", function () {
//     pairCount++;
//     const perModelPairContainer = document.getElementById(
//       "perModelPairContainer"
//     );

//     const newPairHTML = `
//                 <div class="perModelPairContainer">
//                     <label for="carModel${pairCount}">Car Model:</label>
//                     <select id="carModel${pairCount}">
//                         <option value="ALTO">ALTO</option>
//                         <option value="ALTO K-10">ALTO K-10</option>
//                         <option value="S-Presso">S-Presso</option>
//                         <option value="CELERIO">CELERIO</option>
//                         <option value="WagonR">WagonR</option>
//                         <option value="BREZZA">BREZZA</option>
//                         <option value="DZIRE">DZIRE</option>
//                         <option value="EECO">EECO</option>
//                         <option value="Ertiga">Ertiga</option>
//                         <option value="SWIFT">SWIFT</option>
//                     </select>
//                     <label for="incentive${pairCount}">Incentive:</label>
//                     <input type="number" id="incentive${pairCount}" placeholder="Enter incentive amount">
//                 </div>
//             `;

//     perModelPairContainer.insertAdjacentHTML("beforeend", newPairHTML);
//   });

//   const removemodelcarPairInputButton = document.getElementById(
//     "removePerModelPairButton"
//   );
//   removemodelcarPairInputButton.addEventListener("click", () => {
//     var container = document.getElementById("perModelPairContainer");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       pairCount--;
//       container.removeChild(lastChild);
//     }
//   });

//   const addSpecialCarPairButton = document.getElementById(
//     "addSpecialCarPairButton"
//   );
//   addSpecialCarPairButton.addEventListener("click", function () {
//     specialCarPairCount++;
//     const specialCarPairContainer = document.getElementById(
//       "specialCarPairContainer"
//     );

//     const newPairHTML = `
//                 <div class="specialCarPairContainer">
//                     <label for="SCcarModel${specialCarPairCount}">Car Model:</label>
//                     <select id="SCcarModel${specialCarPairCount}">
//                         <option value="ALTO">ALTO</option>
//                         <option value="ALTO K-10">ALTO K-10</option>
//                         <option value="S-Presso">S-Presso</option>
//                         <option value="CELERIO">CELERIO</option>
//                         <option value="WagonR">WagonR</option>
//                         <option value="BREZZA">BREZZA</option>
//                         <option value="DZIRE">DZIRE</option>
//                         <option value="EECO">EECO</option>
//                         <option value="Ertiga">Ertiga</option>
//                         <option value="SWIFT">SWIFT</option>
//                     </select>
//                     <label for="SCincentive${specialCarPairCount}">Incentive:</label>
//                     <input type="number" id="SCincentive${specialCarPairCount}" placeholder="Enter incentive amount">
//                 </div>
//             `;

//     specialCarPairContainer.insertAdjacentHTML("beforeend", newPairHTML);
//   });

//   const removeSpecialCarPairButton = document.getElementById(
//     "removeSpecialCarPairButton"
//   );
//   removeSpecialCarPairButton.addEventListener("click", () => {
//     var container = document.getElementById("specialCarPairContainer");
//     var lastChild = container.lastElementChild;
//     if (lastChild) {
//       specialCarPairCount--;
//       container.removeChild(lastChild);
//     }
//   });

//   document
//     .getElementById("sectionSelect")
//     .addEventListener("change", function () {
//       const selectedValue = this.value;
//       const perCarIncentiveSection = document.getElementById(
//         "perCarIncentiveSection"
//       );
//       const perModelIncentiveSection = document.getElementById(
//         "perModelIncentiveSection"
//       );

//       if (selectedValue === "perCarIncentive") {
//         perCarIncentiveSection.classList.remove("hidden");
//         perModelIncentiveSection.classList.add("hidden");
//       } else if (selectedValue === "perModelIncentive") {
//         perCarIncentiveSection.classList.add("hidden");
//         perModelIncentiveSection.classList.remove("hidden");
//       }
//     });

//   // Initialize visibility based on the initial selection
//   document.getElementById("sectionSelect").dispatchEvent(new Event("change"));

//   function validateCheckboxes() {
//     console.log("validateCheckboxes");
//     let checkboxes = document.querySelectorAll(
//       '#carSelection input[type="checkbox"]'
//     );
//     let isChecked = false;
//     checkboxes.forEach(function (checkbox) {
//       if (checkbox.checked) {
//         isChecked = true;
//         return;
//       }
//     });
//     return isChecked;
//   }

//   function validatenumCars() {
//     console.log("validatenumCars");
//     let numCarsValidation = document.querySelector("#numCars");
//     const valueNumCars = numCarsValidation.value.trim();
//     let validatenumCarsCheck = false;
//     // Validate if valueNumCars is not empty
//     if (valueNumCars !== "") {
//       // Check if valueNumCars is a valid number (not NaN)
//       if (!isNaN(valueNumCars)) {
//         validatenumCarsCheck = true;
//       } else {
//         console.log("Please enter a valid number for numCars.");
//       }
//     } else {
//       console.log("Please enter a value for numCars.");
//     }
//     return validatenumCarsCheck;
//   }

//   function validateFileInput() {
//     let fileInput = document.getElementById("file-input-salesExcel");
//     let file = fileInput.files[0];
//     let checkFile = true;
//     if (!file) {
//       checkFile = false;
//     }
//     return checkFile;
//   }

//   function validateFileInputFile2() {
//     let fileInput = document.getElementById("file-input-CDIScore");
//     // let file = ;
//     let checkFile = true; 
//     if (!fileInput.files[0]) {
//       checkFile = false;
//     }
//     return checkFile;
//   }

//   function scrollToTop() {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let isValidate = true;

//     if (!validateCheckboxes()) {
//       const checkboxerror = document.querySelector("#checkboxError");
//       checkboxerror.innerHTML = "<strong> above field is mandatory </strong>";
//       scrollToTop();
//     }

//     if (!validatenumCars()) {
//       isValidate = false;
//       const numCarserror = document.querySelector("#numCarsError");
//       numCarserror.innerHTML = "<strong> above field is mandatory </strong>";
//       scrollToTop();
//     }

//     if (!validateFileInput()) {
//       isValidate = false;
//       const fileinputsalesExcelError = document.querySelector(
//         "#file-input-salesExcelError"
//       );
//       fileinputsalesExcelError.innerHTML =
//         "<strong> above field is mandatory </strong>";
//       scrollToTop();
//     }

//     if (!validateFileInputFile2()) {
//       isValidate = false;
//       const fileinputCDIExcelError = document.querySelector(
//         "#file-input-CDIExcelError"
//       );
//       fileinputCDIExcelError.innerHTML =
//         "<strong> above field is mandatory </strong>";
//       scrollToTop();
//     }

//     let AC = document.getElementById("autocard");
//     let eW = document.getElementById("ew");
//     const finalObj = {};
//     const formData = new FormData(form);
//     const qcData = {
//       numOfCars: formData.get("numCars"),
//       focusModel: formData.getAll("carsFM"),
//       autoCard: AC.checked ? "yes" : "no",
//       autocardPercent: formData.get("autocardPercent"),
//       EW: eW.checked ? "yes" : "no",
//       ewdPercent: formData.get("ewdPercent"),
//       CCPCheck: CCP.checked ? "yes" : "no",
//       CCPPercent: formData.get("CCPPercent"),
//       MSSFCheck: MSSF.checked ? "yes" : "no",
//       MSSFPercent: formData.get("MSSFPercent"),
//       MGACheck: MGA.checked ? "yes" : "no",
//       MGAAmount: formData.get("MGAAmount"),
//       DiscountCheck: Discount.checked ? "yes" : "no",
//       DiscountAmount: formData.get("DiscountAmount"),
//       ExchangeCheck: Exchange.checked ? "yes" : "no",
//       ExchangeCount: formData.get("ExchangeCount"),
//       ComplaintCheck: Complaint.checked ? "yes" : "no",
//       ComplaintCount: formData.get("ComplaintCount"),
//     };

//     const superCar = {
//       superCarCriteria: formData.getAll("superCarCheck"),
//       superCarIncentive: formData.get("SuperCarIncentive"),
//       superCarValues: {
//         MGA: formData.get("MGASaleValue"),
//         Discount: formData.get("DiscountValue"),
//         // MGADiscount:formData.get('MGADiscountValue')
//       },
//     };

//     let newDSEIncentiveInput = formData.get("newDSEInput");
//     let newDSEMcarsInput = formData.get("newDSEMcarsInput");
//     const newDSEdata = {
//       incentive: newDSEIncentiveInput,
//       minCars: newDSEMcarsInput,
//     };

//     const cdiIncentives = [...document.querySelectorAll(".cdiInput")].map(
//       (div) => {
//         let type;
//         const cdiMinElement = div.querySelector('[name="cdiMin"]');
//         const cdiMaxElement = div.querySelector('[name="cdiMax"]');
//         const cdiValueElement = div.querySelector('[name="cdiValue"]');

//         if (cdiMinElement && cdiMaxElement) {
//           type = "range";
//         } else if (cdiValueElement) {
//           const labelText = cdiValueElement.previousElementSibling.textContent;
//           type = labelText.includes("Greater") ? "greater" : "less";
//         } else {
//           type = null;
//         }

//         const cdiValue =
//           parseFloat(div.querySelector('[name="cdiValue"]')?.value) || null;
//         const cdiMin =
//           parseFloat(div.querySelector('[name="cdiMin"]')?.value) || null;
//         const cdiMax =
//           parseFloat(div.querySelector('[name="cdiMax"]')?.value) || null;
//         const incentive =
//           parseFloat(div.querySelector('[name="incentive"]')?.value) || null;

//         return { type, cdiValue, cdiMin, cdiMax, incentive };
//       }
//     );

//     const pairContainers = document.getElementsByClassName("pair-container");
//     for (let i = 0; i < pairContainers.length; i++) {
//       const pairContainer = pairContainers[i];
//       const carsInput = pairContainer.querySelector('input[name="cars"]');
//       const incentiveInput = pairContainer.querySelector(
//         'input[name="incentive"]'
//       );

//       const pair = {
//         cars: carsInput.value,
//         incentive: incentiveInput.value,
//       };

//       carPairs.push(pair);
//     }

//     const NumberpairContainers = document.getElementsByClassName(
//       "Number-pair-container"
//     );
//     for (let i = 0; i < NumberpairContainers.length; i++) {
//       const NumberpairContainer = NumberpairContainers[i];
//       const NumberInput = NumberpairContainer.querySelector(
//         'input[name="vehicleNumber"]'
//       );
//       const incentiveInput = NumberpairContainer.querySelector(
//         'input[name="incentive"]'
//       );

//       const NumberPair = {
//         VehicleNumber: NumberInput.value,
//         incentive: incentiveInput.value,
//       };

//       NumberPairs.push(NumberPair);
//     }

//     // const ProgressivepairContainers = document.getElementsByClassName('Progressive-pair-container');
//     // for (let i = 0; i < ProgressivepairContainers.length; i++) {
//     //     const ProgressivepairContainer = ProgressivepairContainers[i];
//     //     const NumberInput = ProgressivepairContainer.querySelector('input[name="vehiclePNumber"]');
//     //     const incentiveInput = ProgressivepairContainer.querySelector('input[name="incentive"]');

//     //     const NumberPair = {
//     //         VehicleNumber: NumberInput.value,
//     //         incentive: incentiveInput.value
//     //     };

//     //     perModelProgressivePairs.push(NumberPair);
//     // }

//     const exchangeType = document.getElementById("exchangeSelect").value;
//     const ExchangepairContainers = document.getElementsByClassName(
//       "Exchange-pair-container"
//     );
//     for (let i = 0; i < ExchangepairContainers.length; i++) {
//       const ExchangepairContainer = ExchangepairContainers[i];
//       const exchangeInput = ExchangepairContainer.querySelector(
//         'input[name="exchange"]'
//       );
//       const incentiveInput = ExchangepairContainer.querySelector(
//         'input[name="incentive"]'
//       );

//       const exchangePair = {
//         ExchangeNumber: exchangeInput.value,
//         incentive: incentiveInput.value,
//       };

//       ExchangePairs.push(exchangePair);
//     }

//     const ComplaintpairContainers = document.getElementsByClassName(
//       "Complaint-pair-container"
//     );
//     for (let i = 0; i < ComplaintpairContainers.length; i++) {
//       const ComplaintpairContainer = ComplaintpairContainers[i];
//       const complaintInput = ComplaintpairContainer.querySelector(
//         'input[name="complaint"]'
//       );
//       const incentiveInput = ComplaintpairContainer.querySelector(
//         'input[name="incentive"]'
//       );

//       const exchangePair = {
//         ComplaintNumber: complaintInput.value,
//         incentive: incentiveInput.value,
//       };

//       ComplaintInputs.push(exchangePair);
//     }

//     const EWinputsContainer = document.getElementById("EWinputsContainer");
//     EWinputsContainer.querySelectorAll(".inputGroup").forEach((inputDiv) => {
//       const incentive = {};
//       if (inputDiv.querySelector('[name="percentageGreaterThan"]')) {
//         incentive.type = "greater";
//         incentive.value = parseFloat(
//           inputDiv.querySelector('[name="percentageGreaterThan"]').value
//         );
//       } else if (inputDiv.querySelector('[name="percentageLessThan"]')) {
//         incentive.type = "less";
//         incentive.value = parseFloat(
//           inputDiv.querySelector('[name="percentageLessThan"]').value
//         );
//       } else if (
//         inputDiv.querySelector('[name="percentageMin"]') &&
//         inputDiv.querySelector('[name="percentageMax"]')
//       ) {
//         incentive.type = "range";
//         incentive.min = parseFloat(
//           inputDiv.querySelector('[name="percentageMin"]').value
//         );
//         incentive.max = parseFloat(
//           inputDiv.querySelector('[name="percentageMax"]').value
//         );
//       }
//       incentive.incentive = parseFloat(
//         inputDiv.querySelector('[name="incentive"]').value
//       );
//       EWInputs.push(incentive);
//     });

//     const MSRinputsContainer = document.getElementById("MSRinputsContainer");
//     MSRinputsContainer.querySelectorAll(".inputGroup").forEach((inputDiv) => {
//       const incentive = {};
//       if (inputDiv.querySelector('[name="percentageGreaterThan"]')) {
//         incentive.type = "greater";
//         incentive.value = parseFloat(
//           inputDiv.querySelector('[name="percentageGreaterThan"]').value
//         );
//       } else if (inputDiv.querySelector('[name="percentageLessThan"]')) {
//         incentive.type = "less";
//         incentive.value = parseFloat(
//           inputDiv.querySelector('[name="percentageLessThan"]').value
//         );
//       } else if (
//         inputDiv.querySelector('[name="percentageMin"]') &&
//         inputDiv.querySelector('[name="percentageMax"]')
//       ) {
//         incentive.type = "range";
//         incentive.min = parseFloat(
//           inputDiv.querySelector('[name="percentageMin"]').value
//         );
//         incentive.max = parseFloat(
//           inputDiv.querySelector('[name="percentageMax"]').value
//         );
//       }
//       incentive.incentive = parseFloat(
//         inputDiv.querySelector('[name="incentive"]').value
//       );
//       MSRinputs.push(incentive);
//     });

//     const CCPinputsContainer = document.getElementById("CCPinputsContainer");
//     CCPinputsContainer.querySelectorAll(".CCPinputGroup").forEach(
//       (inputDiv) => {
//         const incentive = {};
//         if (inputDiv.querySelector('[name="percentageGreaterThan"]')) {
//           incentive.type = "greater";
//           incentive.value = parseFloat(
//             inputDiv.querySelector('[name="percentageGreaterThan"]').value
//           );
//         } else if (inputDiv.querySelector('[name="percentageLessThan"]')) {
//           incentive.type = "less";
//           incentive.value = parseFloat(
//             inputDiv.querySelector('[name="percentageLessThan"]').value
//           );
//         } else if (
//           inputDiv.querySelector('[name="percentageMin"]') &&
//           inputDiv.querySelector('[name="percentageMax"]')
//         ) {
//           incentive.type = "range";
//           incentive.min = parseFloat(
//             inputDiv.querySelector('[name="percentageMin"]').value
//           );
//           incentive.max = parseFloat(
//             inputDiv.querySelector('[name="percentageMax"]').value
//           );
//         }
//         incentive.incentive = parseFloat(
//           inputDiv.querySelector('[name="incentive"]').value
//         );
//         CCPInputs.push(incentive);
//       }
//     );

//     const MSSFinputsContainer = document.getElementById("MSSFinputsContainer");
//     MSSFinputsContainer.querySelectorAll(".MSSFinputGroup").forEach(
//       (inputDiv) => {
//         const incentive = {};
//         if (inputDiv.querySelector('[name="percentageGreaterThan"]')) {
//           incentive.type = "greater";
//           incentive.value = parseFloat(
//             inputDiv.querySelector('[name="percentageGreaterThan"]').value
//           );
//         } else if (inputDiv.querySelector('[name="percentageLessThan"]')) {
//           incentive.type = "less";
//           incentive.value = parseFloat(
//             inputDiv.querySelector('[name="percentageLessThan"]').value
//           );
//         } else if (
//           inputDiv.querySelector('[name="percentageMin"]') &&
//           inputDiv.querySelector('[name="percentageMax"]')
//         ) {
//           incentive.type = "range";
//           incentive.min = parseFloat(
//             inputDiv.querySelector('[name="percentageMin"]').value
//           );
//           incentive.max = parseFloat(
//             inputDiv.querySelector('[name="percentageMax"]').value
//           );
//         }
//         incentive.incentive = parseFloat(
//           inputDiv.querySelector('[name="incentive"]').value
//         );
//         MSSFInputs.push(incentive);
//       }
//     );

//     const DinputGroups = document.querySelectorAll(".DinputGroup");
//     DinputGroups.forEach((inputDiv) => {
//       const amountMinInput = inputDiv.querySelector('[name="amountMin"]');
//       const amountMaxInput = inputDiv.querySelector('[name="amountMax"]');
//       const incentiveInput = inputDiv.querySelector('[name="incentive"]');

//       const incentive = {
//         min: parseFloat(amountMinInput.value),
//         max: amountMaxInput.value ? parseFloat(amountMaxInput.value) : null,
//         incentive: parseFloat(incentiveInput.value),
//       };
//       DiscountInputs.push(incentive);
//     });

//     const MGAinputGroups = document.querySelectorAll(".MGAinputGroup");
//     MGAinputGroups.forEach((inputDiv) => {
//       const amountMinInput = inputDiv.querySelector('[name="amountMin"]');
//       const amountMaxInput = inputDiv.querySelector('[name="amountMax"]');
//       const incentiveInput = inputDiv.querySelector('[name="incentive"]');

//       const incentive = {
//         min: parseFloat(amountMinInput.value),
//         max: amountMaxInput.value ? parseFloat(amountMaxInput.value) : null,
//         incentive: parseFloat(incentiveInput.value),
//       };
//       MGAranges.push(incentive);
//     });

//     let perModelCarPairs = {};

//     const selectElement = document.getElementById("sectionSelect");
//     const selectedValue = selectElement.value;
//     if (selectedValue === "perModelIncentive") {
//       for (let i = 1; i <= pairCount; i++) {
//         const carModel = document.getElementById(carModel${i}).value;
//         const incentive = document.getElementById(incentive${i}).value;

//         perModelCarPairs[carModel] = incentive;
//         // perModelInputs.push(perModelCarPairs);
//       }
//     }

//     let specialCarPairs = {};

//     // if (document.getElementById("SCincentive1").value != "") {

//     for (let i = 1; i <= specialCarPairCount; i++) {
//       const carModel = document.getElementById(SCcarModel${i}).value;
//       const incentive = document.getElementById(SCincentive${i}).value;

//       specialCarPairs[carModel] = incentive;
//       // perModelInputs.push(perModelCarPairs);
//       // }
//     }

//     finalObj["QC"] = qcData;
//     // finalObj["newDSEInput"] = newDSEInput;
//     finalObj["newDSEInput"] = newDSEdata;
//     finalObj["superCar"] = superCar;
//     finalObj["CDI"] = cdiIncentives;
//     finalObj["carIncentive"] = carPairs;
//     finalObj["exchangeType"] = exchangeType;
//     finalObj["ExchangeInputs"] = ExchangePairs;
//     finalObj["ComplaintInputs"] = ComplaintInputs;
//     finalObj["DiscountInputs"] = DiscountInputs;
//     finalObj["MGAIncentive"] = MGAranges;
//     finalObj["MSR"] = MSRinputs;
//     finalObj["Extended Warranty"] = EWInputs;
//     finalObj["PerModelIncentive"] = perModelCarPairs;
//     finalObj["PerModelNumberCarIncentive"] = NumberPairs;
//     // finalObj["ProgressivePerModelInputs"] = perModelProgressivePairs;
//     finalObj["SpecialCarIncentive"] = specialCarPairs;
//     finalObj["CCP"] = CCPInputs;
//     finalObj["MSSF"] = MSSFInputs;
//     // console.log('FinalObj');
//     // console.log(finalObj);

//     ipcRenderer.send("form-submit", finalObj);
//   });

//   ipcRenderer.on("formateAlertSalesExcel", (event, data) => {
//     // console.log(data); // Log the actual data received

//     // <div class="errormsg" id="errormsgSales">
//     //     <h3 class="errorHead" id="errorHeadSales"></h3>
//     //     <ul class="ErrorList" id="salesError"></ul>
//     // </div>

//     const errormsgSales = document.querySelector("#errormsgSales");
//     const errorHeadSales = document.querySelector("#errorHeadSales");
//     const salesError = document.querySelector("#salesError");
//     errormsgSales.style.display = "block";

//     // Display the error message
//     errorHeadSales.innerHTML =
//       "<div><strong>Error in Sales Excel Format</strong></div><br> ";

//     // Clear previous errors
//     salesError.innerHTML = "";

//     // Add each error to the error list
//     data.forEach((attr) => {
//       const li = document.createElement("li");
//       li.innerText = Error in "${attr}" column heading;
//       salesError.appendChild(li);
//     });

//     const resetbtn = document.querySelector("#errorresetButton");
//     resetbtn.innerHTML =
//       "<div><strong>Click Reset button before calculating again.</strong></div>";
//   });

//   ipcRenderer.on("formateAlertMGAExcel", (event, data) => {

//     const errormsg = document.querySelector("#errormsgMGA");
//     const errorHeadMGA = document.querySelector("#errorHeadMGA");
//     const MGAError = document.querySelector("#MGAError");

//     const resetbtn = document.querySelector("#errorresetButton");
//     resetbtn.innerHTML =
//       "<div><strong>Click Reset button before calculating again.</strong></div>";

//     // Display the error message
//     errormsg.style.display = "block";
//     errorHeadMGA.innerHTML =
//       "<div><strong>Error in MGA Excel Format</strong></div>";

//     // Clear previous errors
//     MGAError.innerHTML = "";

//     // Add each error to the error list
//     data.forEach((attr) => {
//       const li = document.createElement("li");
//       li.innerText = attr;
//       MGAError.appendChild(li);
//     });
//   });

//   ipcRenderer.on("formateAlertStatusExcel", (event, data) => {
//     // console.log("data");
//     // console.log(data);
//     //   <div class="errormsg" id="errormsgStatus">
//     //   <h3 class="errorHead" id="errorHeadStatus"></h3>
//     //   <ul class="ErrorList" id="StatusError"></ul>
//     // </div>
//     // console.log(data); // Log the actual data received
//     const errormsg = document.querySelector("#errormsgStatus");
//     const errorHeadStatus = document.querySelector("#errorHeadStatus");
//     const StatusError = document.querySelector("#StatusError");

//     const resetbtn = document.querySelector("#errorresetButton");
//     resetbtn.innerHTML =
//       "<div><strong>Click Reset button before calculating again.</strong></div>";

//     // Display the error message
//     errormsg.style.display = "block";
//     errorHeadStatus.innerHTML =
//       "<div><strong>Error in DSE Status Excel Format</strong></div>";

//     // Clear previous errors
//     StatusError.innerHTML = "";

//     // Add each error to the error list
//     data.forEach((attr) => {
//       const li = document.createElement("li");
//       li.innerText = attr;
//       StatusError.appendChild(li);
//     });
//   });

//   ipcRenderer.on("formateAlertCDIExcel", (event, data) => {
//     const errormsg = document.querySelector("#errormsgCDI");
//     const errorHeadStatus = document.querySelector("#errorHeadCDI");
//     const StatusError = document.querySelector("#CDIError");
//     const resetbtn = document.querySelector("#errorresetButton");
//     resetbtn.innerHTML =
//       "<div><strong>Click Reset button before calculating again.</strong></div>";
//     errormsg.style.display = "block";
//     // Display the error message
//     errorHeadStatus.innerHTML =
//       "<div><strong>Error in CDI Score Excel Format</strong></div>";
//     // Clear previous errors
//     StatusError.innerHTML = "";

//     // Add each error to the error list
//     data.forEach((attr) => {
//       const li = document.createElement("li");
//       li.innerText = attr;
//       StatusError.appendChild(li);
//     });
//   });

//   function populateTable(data, className) {
//     const table = document.querySelector(.${className});
//     table.innerHTML = "";

//     const thead = document.createElement("thead");
//     const headerRow = document.createElement("tr");
//     for (const key in data[0]) {
//       const th = document.createElement("th");
//       th.innerText = key;
//       headerRow.appendChild(th);
//     }

//     thead.appendChild(headerRow);
//     table.appendChild(thead);
//     const tbody = document.createElement("tbody");
//     data.forEach((row) => {
//       const tr = document.createElement("tr");
//       for (const key in row) {
//         const td = document.createElement("td");
//         td.innerText = row[key];
//         tr.appendChild(td);
//       }
//       tbody.appendChild(tr);
//     });
//     table.appendChild(tbody);
//   }

//   ipcRenderer.on("dataForExcel", (event, data) => {
//     const text = "oldDSE-table";
//     populateTable(data, text);
//   });

//   ipcRenderer.on("newDSEIncentiveDataSheet", (event, data) => {
//     const text = "newDSE-table";
//     populateTable(data, text);
//   });

//   ipcRenderer.on("data-error", (event, errorMessage) => {
//     // console.error(errorMessage);
//   });
// });
