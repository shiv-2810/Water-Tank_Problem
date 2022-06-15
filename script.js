document.getElementById("reset-data").disabled = true;
var i = 0;
var arr = [];
function add() {
  document.getElementById("display").innerHTML = "Input : ";
  arr[i] = document.getElementById("input-number").value;
  i++;
  document.getElementById("input-number").value = "";
  document.getElementById("display").innerHTML += arr;
}
var len = arr.length;

function generateInputTable() {
  document.getElementById("reset-data").disabled = false;
  let len = arr.length;
  let maxArr = 0;
  for (let i = 0; i < len; i++) {
    maxArr = Math.max(maxArr, arr[i]);
  }
  for (let row = 0; row <= maxArr; row++) {
    let rows = document.getElementById("inputTable").insertRow(row);
    for (let col = 0; col < len; col++) {
      rows.insertCell(col);
    }
  }
  let table = document.getElementById("inputTable");
  for (let col = 0; col < len; col++) {
    for (let row = maxArr; row > maxArr - arr[col]; row--) {
      table.rows[row].cells[col].style.backgroundColor = "yellow";
    }
  }
  let l = [];
  let r = [];
  l[0] = arr[0];
  for (let i = 1; i < len; i++) {
    l[i] = Math.max(l[i - 1], arr[i]);
  }
  r[len - 1] = arr[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    r[i] = Math.max(r[i + 1], arr[i]);
  }
  let ans = 0;
  for (let col = 0; col < len; col++) {
    let count = 0;
    let row = Math.max(l[col], r[col]) - arr[col];
    while (count < Math.min(l[col], r[col]) - arr[col]) {
      table.rows[row].cells[col].style.backgroundColor = "#0F52BA";
      row--;
      count++;
    }
    ans += Math.min(l[col], r[col]) - arr[col];
  }
  document.getElementById("input-button").disabled = true;
}

function showOutputTable() {
  let len = arr.length;
  let maxArr = 0;
  for (let i = 0; i < len; i++) {
    maxArr = Math.max(maxArr, arr[i]);
  }
  for (let row = 0; row <= maxArr; row++) {
    let rows = document.getElementById("outputTable").insertRow(row);
    for (let col = 0; col < len; col++) {
      rows.insertCell(col);
    }
  }
  let table = document.getElementById("outputTable");
  let l = [];
  let r = [];
  l[0] = arr[0];
  for (let i = 1; i < len; i++) {
    l[i] = Math.max(l[i - 1], arr[i]);
  }
  r[len - 1] = arr[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    r[i] = Math.max(r[i + 1], arr[i]);
  }
  let ans = 0;
  for (let col = 0; col < len; col++) {
    let count = 0;
    let row = Math.max(l[col], r[col]) - arr[col];
    while (count < Math.min(l[col], r[col]) - arr[col]) {
      table.rows[row].cells[col].style.backgroundColor = "#0F52BA";
      row--;
      count++;
    }
    ans += Math.min(l[col], r[col]) - arr[col];
  }
  document.getElementById("ans").innerHTML += ans;
  document.getElementById("output-button").disabled = true;
}

function resetData() {
  location.reload();
}
