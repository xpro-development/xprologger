import _ from 'lodash';

const levels = {
  emerg: 'emerg',
  alert: 'alert',
  crit: 'crit',
  error: 'error',
  warning: 'warning',
  notice: 'notice',
  info: 'info',
  debug: 'debug',
};

const levelsNumbers = {
  [levels.emerg]: 0,
  [levels.alert]: 1,
  [levels.crit]: 2,
  [levels.error]: 3,
  [levels.warning]: 4,
  [levels.notice]: 5,
  [levels.info]: 6,
  [levels.debug]: 7,
};

type Level = keyof typeof levels;

const getLevelNumber = (l: Level): number => {
  const result = levelsNumbers[l];
  return _.isNil(result) ? 10 : result;
};

const isAllowed = (expectedLevel: Level, lvl: Level): boolean => {
  return getLevelNumber(lvl) <= getLevelNumber(expectedLevel);
};

export { getLevelNumber, isAllowed, Level };
