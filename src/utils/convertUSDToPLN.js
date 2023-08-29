
export const convertUSDToPLN = (USD) => {

  if(typeof USD === "string" ){
    return NaN
  }
  if(USD === undefined) {
    return NaN;
  }
  if(USD < 0) {
    return 'PLN 0.00'
  }
  if( isNaN(USD) || 
      Array.isArray(USD) ||
      USD===null) 
       {
    return 'Error'
  }
  const USDtoPLN = USD * 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PLN'
  });

  return formatter.format(USDtoPLN).replace(/\u00a0/g, ' ');
}
