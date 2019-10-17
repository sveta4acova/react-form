const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Не более ${max} символа(ов)` : undefined;
const minLength = min => value =>
  value && value.length < min ? `Минимум ${min} символ(а)` : undefined;
const exactLength = exact => value =>
  value && value.length !== exact ? `Длина ${exact} символа(ов)` : undefined;
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Неверный email адрес'
    : undefined;
const onlyNumber = value => (value && !/[0-9]/i.test(value) ? 'Только числа' : undefined);
const startText = value =>
  value && !(isNaN(parseInt(value)) || isNaN(parseFloat(value)))
    ? 'Первыми символами не могут быть числа'
    : undefined;

export default { required, maxLength, minLength, exactLength, email, onlyNumber, startText };
