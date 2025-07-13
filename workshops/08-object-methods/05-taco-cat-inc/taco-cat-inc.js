let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': { cost: 2, quantity: 100 },
    'soft treat shell': { cost: 1.5, quantity: 100 }
  },

  gourmetFishFilling: {
    'salmon': { cost: 5, quantity: 100 },
    'tuna': { cost: 5.5, quantity: 100 },
    'sardines': { cost: 1.5, quantity: 100 }
  },

  gourmetVeggie: {
    'cat grass': { cost: 1, quantity: 100 }
  },

  gourmetSeasoning: {
    'cat nip': { cost: 0.5, quantity: 100 },
    'treat dust': { cost: 0.1, quantity: 100 }
  },

  cash: 0,

  currentInventory: function () {
    let totalSale = 0;
    for (let item in tacoCatInc) {
        
      if (typeof tacoCatInc[item] === 'object') {
        for (let food in tacoCatInc[item]) {
          let keys = Object.keys(tacoCatInc[item][food])
          totalSale += tacoCatInc[item][food][keys[0]] * tacoCatInc[item][food][keys[1]];
          this.cash += tacoCatInc[item][food][keys[1]];
        }
      }
    }
    return totalSale;
  },

  sale: function (order) {
    let totalOrderSale = 0;
    for (let item in order) {
      for (let food in tacoCatInc[item]){
        if (food === order[item]){
          tacoCatInc[item][food]['quantity'] = 99;
          totalOrderSale += tacoCatInc[item][food]['cost'];
        }
      }
    }
    this.cash = totalOrderSale;
    return totalOrderSale;
  }
};

// YOUR CODE BELOW
console.log(tacoCatInc.currentInventory())