export const formatNumber = (val) =>
  val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
