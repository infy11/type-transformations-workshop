import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type programModeEnumMapType = typeof programModeEnumMap;

export type IndividualProgram = programModeEnumMapType['ONE_ON_ONE'] | programModeEnumMapType['SELF_DIRECTED'] | programModeEnumMapType['PLANNED_ONE_ON_ONE'] | programModeEnumMapType['PLANNED_SELF_DIRECTED']  ;

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];
