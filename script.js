function calculateForce() {
  const w1 = parseFloat(document.getElementById('weight1').value);
  const w2 = parseFloat(document.getElementById('weight2').value);
  const m = 3.4;

  if (isNaN(w1) || isNaN(w2) || w1 <= 0 || w2 <= 0) {
    document.getElementById('result').innerText = "يرجى إدخال أوزان صحيحة للجسمين.";
    return;
  }

  const result1 = (w1 * 0.5) + m;
  const result2 = (w2 * 0.5) + m;
  const force = (result1 / result2).toFixed(3);

  document.getElementById('result').innerText = `قوة التنافر = ${force}`;
}
