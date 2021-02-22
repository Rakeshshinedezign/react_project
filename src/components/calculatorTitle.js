import React from 'react'; 
  
// Create Functional Component. 
// Takes title as props.value. 
const CalculatorTitle = (props) => { 
  return ( 
    <div className="calculator-title"> 
      <h1>{ props.value }</h1>  
    </div> 
  ) 
} 
  
// Export Calculator Title. 
export default CalculatorTitle; 