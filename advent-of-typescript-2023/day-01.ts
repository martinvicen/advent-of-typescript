// https://typehero.dev/challenge/day-1
// https://typehero.dev/challenge/day-1/submissions/126258

type SantasFavoriteCookies = 'ginger-bread' | 'chocolate-chip';

// tests
import { Expect, Equal } from 'type-testing';

type test_0_actual = SantasFavoriteCookies;
type test_0_expected = 'ginger-bread' | 'chocolate-chip';
type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;
