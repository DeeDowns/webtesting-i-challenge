module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let newItem = { ...item } 
  newItem.enhancement === 20 ? newItem.enhancement = 20 : newItem.enhancement++
  
  return newItem;
}

function fail(item) {
  let newItem = { ...item } 

  if(newItem.enhancement > 16){
    newItem.enhancement--
  } else if(newItem.enhancement < 15) {
        newItem.durability -= 5
  } else if (newItem.enhancement >= 15) {
      newItem.durability -=10
  } 

  return newItem
}

function repair(item) {
  return { 
    ...item,
    durability: 100 
  };
}

function get(item) {
  let newItem = { ...item }

  if(newItem.enhancement === 0) {
    newItem.name
  } else if (newItem.enhancement > 0) {
    newItem.name = `[+${newItem.enhancement}] ${newItem.name}`
  } 

  return newItem
}
