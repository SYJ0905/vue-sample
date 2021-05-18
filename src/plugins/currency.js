export function currency(num) {
  if (!num) return '';
  const n = Number(num);
  const reg = /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g;
  return `${n.toFixed(0).replace(reg, '$&,')}`;
}
export default currency;
