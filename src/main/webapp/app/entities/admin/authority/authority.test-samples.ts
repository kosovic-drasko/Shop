import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'dd75d711-192c-4b27-a86d-a88cf7cc7527',
};

export const sampleWithPartialData: IAuthority = {
  name: '094b8c2f-c98e-4d2b-bd76-e03f010b6804',
};

export const sampleWithFullData: IAuthority = {
  name: '9477f812-bf08-40f8-952e-e35af7cf4f27',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
