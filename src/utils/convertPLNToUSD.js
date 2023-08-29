
export const convertPLNToUSD = (PLN) => {

  if(typeof PLN === "string" ){
    return NaN
  }
  if(PLN === undefined) {
    return NaN;
  }
  if(PLN < 0) {
    return '$0.00'
  }
  if( isNaN(PLN) || 
      Array.isArray(PLN) ||
      PLN===null) 
       {
    return 'Error'
  }

  const PLNtoUSD = PLN / 3.5;
  
  
  const formatter = new Intl.NumberFormat('en-US', {
    
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}
