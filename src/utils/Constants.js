export const max_lengths = {
    number: 10,
    nation_id: 10,
    iban: 24,
    card: 16,
    cvc: 3,
    code: 4,
    min_number: 6,
  };
  export const maskTypes = {
    card: '[0000] [0000] [0000] [0000]',
    expiry: '[00]/[00]',
    iban: 'SA[0000000000000000000000]',
    cvc: '[000]',
  };
  export const minAgeInDays = 8 * 365;
  export const DEFAULT_COUNTRY_CODE = '+966';
export const DEFAULT_COUNTRY_FLAG = 'flag-sa';

