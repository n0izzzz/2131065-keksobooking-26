const getRandomIntNumber = (min, max) => {
  if (min >= max) {
    throw Error(`Первое число диапазона должно быть меньше второго.\nВы ввели ${min} и ${max}`);
  }
  else if (min < 0) {
    throw Error(`Первое число диапазона не может быть меньше нуля.\nВы ввели ${min} и ${max}`);
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};


const getRandomFloatNumber = (min, max, amount) => {
  if (min >= max) {
    throw Error(`Первое число диапазона должно быть меньше второго.\nВы ввели ${min} и ${max}`);
  }
  else if (min < 0) {
    throw Error(`Первое число диапазона не может быть меньше нуля.\nВы ввели ${min} и ${max}`);
  } else {
    const num = (Math.random() * (max - min) + min);
    return num.toFixed(amount);
  }
};


getRandomIntNumber(1, 10);
getRandomFloatNumber(3.003, 3.111111, 7);
