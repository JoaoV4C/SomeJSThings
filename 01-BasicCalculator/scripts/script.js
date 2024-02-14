function sumNumbers() {
  const a = parseFloat(document.getElementById("text").value);
  const b = parseFloat(document.getElementById("text2").value);
  const sum = a + b;
  let text = "";
  if (isNaN(sum)) {
    text = "Preencha todos os campos!";
  } else {
    text = `${sum}`;
  }
  return (document.getElementById("result").innerHTML = `${text}`);
}