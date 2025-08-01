/*
You run an insanely profitable business making gourmet tacos for cats. Given an
object that represents the inventory of your company, add a method
'currentInventory' to your object that returns the current value of your
company's inventory.

Then, add a sale method that takes an order object, returns the price of the
order, updates the inventory of the purchased items, and adds the price of the
order to the company's cash property.

Heads up: This problem is a bit more involved than anything you'd see on an
admissions assessment or interview. Besides being a fun challenge, it's
intended to show how you can use objects and their methods to store and change
state.

```javascript
let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

tacoCatInc.currentInventory(); // => 1710

let order = {
  gourmetShell: 'hard treat shell',
  gourmetFishFilling: 'salmon'
};

tacoCat.Inc.sale(order); // => 7
tacoCat.Inc.sale(order); // => 7

tacoCat.gourmetFishFilling.tuna.quantity; // => 98
tacoCat.cash; // => 14

tacoCatInc.currentInventory(); // => 1696
```

*/

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