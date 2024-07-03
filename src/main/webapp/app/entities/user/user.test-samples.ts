import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 12462,
  login: '4Bn@-\\>W6UF6',
};

export const sampleWithPartialData: IUser = {
  id: 11198,
  login: 'd',
};

export const sampleWithFullData: IUser = {
  id: 9378,
  login: '1uADVQ',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
