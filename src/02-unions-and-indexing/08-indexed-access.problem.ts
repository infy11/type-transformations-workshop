import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeDataDefaultsType = typeof fakeDataDefaults
export type StringType =  FakeDataDefaultsType['String']
export type IntType = FakeDataDefaultsType['Int'];
export type FloatType = FakeDataDefaultsType['Float'];
export type BooleanType = FakeDataDefaultsType['Boolean'];
export type IDType = FakeDataDefaultsType['ID'];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
