// https://typehero.dev/challenge/day-15
// https://typehero.dev/challenge/day-15/submissions/127317

type BoxToys<
  Toy extends string,
  U extends number,
  R extends string[] = []
> = U extends unknown
  ? R['length'] extends U
    ? R
    : BoxToys<Toy, U, [...R, Toy]>
  : never;

// tests
import { Expect, Equal } from 'type-testing';

type test_doll_actual = BoxToys<'doll', 1>;
type test_doll_expected = ['doll'];
type test_doll = Expect<Equal<test_doll_expected, test_doll_actual>>;

type test_nutcracker_actual = BoxToys<'nutcracker', 3 | 4>;
type test_nutcracker_expected =
  | ['nutcracker', 'nutcracker', 'nutcracker']
  | ['nutcracker', 'nutcracker', 'nutcracker', 'nutcracker'];
type test_nutcracker = Expect<
  Equal<test_nutcracker_expected, test_nutcracker_actual>
>;
