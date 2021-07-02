let cash = 0;

const clickUpgrades = {
  shovel: {
    price: 5,
    quantity: 0,
    multiplier: 1
  },
  bigshovel: {
    price: 500,
    quantity: 0,
    multiplier: 5
  }
};

const automaticUpgrades = {
  employee: {
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  crew: {
    price: 5000,
    quantity: 0,
    multiplier: 120
  }
}

function buyshovel(){
if (cash >= clickUpgrades.shovel.price , 
  alert('bought'),
  cash = cash - clickUpgrades.shovel.price)
update()}
 
//function buybigshovel(

//)

//function buyemployee(

//)

//function buycrew(


//)

function mine (){
(cash++)
update()
}


function update() {

  document.getElementById('cash').innerText = cash
 // number of upgrades bought
 // what the multiplier is
}

