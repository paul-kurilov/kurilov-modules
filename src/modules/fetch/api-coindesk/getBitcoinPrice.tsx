
export const getBitcoinPrice = async (start: string = '2022-01-01', end: string = '2022-02-01'): Promise<any> => {
  const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`);
  const data = await response.json();
  const array = Object.entries(data.bpi).map(([day, value]) => ({ day, value }));
  return array; 
}
 