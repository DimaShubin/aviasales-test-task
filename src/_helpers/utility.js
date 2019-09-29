export const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

export const parseTime = input => {
  const time = new Date(input);
  return {
    hours: () => addZero(time.getHours()),
    minuts: () => addZero(time.getMinutes())
  };
};

export const timeConverter = (item, withText) => {
  return {
    hToMin: () => item * 60,
    minToH: () => {
      const hours = Math.floor(item / 60);
      let minutes = Math.round(item % 60);
      if (withText) {
        return `${addZero(hours) + "ч"} ${addZero(minutes) + "м"}`;
      }
      return `${addZero(hours)}: ${addZero(minutes)}`;
    }
  };
};

export const addZero = item => {
  return item < 10 ? (item = "0" + item) : item;
};
