function subtraiDias(data, dias) {
  const novaData = new Date(data);
  novaData.setDate(novaData.getDate() - dias);
  return novaData.toISOString().split("T")[0];
}
console.log(subtraiDias(2024, 5, 3));