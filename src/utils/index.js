export const numberWithThousands = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const parseTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60 < 10
    ? `0${time % 60}`
    : time % 60 < 1
    ? '00'
    : time % 60;
  return `${hours}ч ${minutes}м`;
};
