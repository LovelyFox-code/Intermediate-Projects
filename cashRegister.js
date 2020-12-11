function checkCashRegister(price, cash, cid) {
  let change;

  let amount = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  let insufficient = {status: "INSUFFICIENT_FUNDS", change: []};
//   let closed = {status: "CLOSED", change: [...]};
//   let open = {status: "OPEN", change: [...]};
  let actualChange = cash - price;
  let sumOfMoney = cid
    .map(function (v) {
      return v[1];
    }) // second value of each
    .reduce(function (a, b) {
      return a + b;
    });
  console.log(sumOfMoney);
  console.log(actualChange);
  if(console.log(sumOfMoney - actualChange) <= 0) {
    return insufficient;
  }

  for (let i = cid.length - 1; i > 0; i--) {
    if (actualChange > amount[i][1] - 1 && actualChange < amount[i][1]) {
      let arr = cid[i - 1];

      arr.pop();
      arr.push(actualChange);
    }
  }

  return cid;
}

console.log(
  checkCashRegister(19.5, 4000, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
