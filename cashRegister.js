function checkCashRegister(price, cash, cid) {
  let change = [];

  let nom = [
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
  let num = [];
  for (let i = 0; i < cid.length; i++) {
    if (cid[i][1] !== 0) {
      num.push(Math.round(cid[i][1] / nom[i][1]));
    } else {
      num.push(0);
    }
  }

  let actualChange = Math.round((cash - price) * 100) / 100;

  let sumOfMoney = cid
    .map(function (v) {
      return v[1];
    }) // second value of each
    .reduce(function (a, b) {
      return Math.round((a + b) * 100) / 100;
    });
  if (sumOfMoney - actualChange < 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (sumOfMoney == actualChange) {
    return { status: "CLOSED", change: cid };
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    if (nom[i][1] < actualChange) {
      let maxCount = Math.floor(actualChange / nom[i][1]);
      if (maxCount >= num[i]) {
        change.push(cid[i]);
        actualChange = Math.round((actualChange - cid[i][1]) * 100) / 100;
      } else {
        change.push([cid[i][0], maxCount * nom[i][1]]);
        actualChange =
          Math.round((actualChange - maxCount * nom[i][1]) * 100) / 100;
      }
    }
  }
  if (actualChange > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: change };
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);
