export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(number / 100)
}

export const getUniqueValues = (itemList, type) => {
  let uniqueValues = itemList.map(item=> item[type]);
  if(type==='colors') {
    uniqueValues= uniqueValues.flat();
  }
  return ['all', ...new Set(uniqueValues)]
}
