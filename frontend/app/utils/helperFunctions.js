export const convertNumberToShortForm = (num) => {
  if (typeof num !== 'number') {
    return '';
  } else {
    const argNum = num;
    if (argNum < 10) {
      return '<10';
    } else if (argNum < 10000) {
      return argNum;
    } else if (argNum < 100000) {
      return Math.round(argNum / 1000) + 'K';
    } else {
      return (argNum / 1000000).toFixed(1) + 'M';
    }
  }
};

export const getDollarConvertedShortValue = (num) => {
  if (typeof num !== 'number') {
    return '';
  } else {
    const argNum = num;
    if (argNum < 100000) {
      return '<$0.1M';
    } else {
      return '$' + convertNumberToMillionShortForm(argNum);
    }
  }
};

export const convertNumberToMillionShortForm = (num) => {
  if (typeof num !== 'number') {
    return '';
  } else {
    const argNum = num;
    if (argNum < 100000) {
      return '<0.1M';
    } else {
      return (argNum / 1000000).toFixed(1) + 'M';
    }
  }
};

export const getPercentageString = (num) => {
  if (typeof num !== 'number') {
    return '';
  } else {
    const argNum = num;
    if (argNum < 1) {
      return '0.' + (argNum.toString().slice(2, 4)) + '%';
    } else if (argNum < 10) {
      return (argNum.toString().slice(0, 4)) + '%';
    } else {
      return (argNum.toString().slice(0, 2)) + '%';
    }
  }
};
