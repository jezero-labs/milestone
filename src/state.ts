import {atom} from 'recoil';

export const account = atom<string | undefined>({
  key: 'rlyAccount',
  default: undefined,
});

export const balance = atom<number | undefined | string>({
  key: 'rlyBalance',
  default: undefined,
});

export const userDetails = atom<{name: string; email: string} | undefined>({
  key: 'userDetails',
  default: undefined,
});

export const errorMessage = atom<{title: string; body: string} | undefined>({
  key: 'errorMessage',
  default: undefined,
});

export const seedPhase = atom<string>({
  key: 'seedphase',
  default: undefined,
});
