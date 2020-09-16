module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  // if(item.enhancement < 0) {
  //   return item.enhancement = 0
  // } else if (item.enhancement > 20) {
  //   return item.enhancement = 20
  // } else {
  //   item.enhancement++
  // }
 
  item.enhancement === 20 ? item.enhancement = 20 : item.enhancement++
  
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  // const newItem = {...item}
  return { 
    ...item,
    durability: 100 
  };
}

function get(item) {
  return { ...item };
}
