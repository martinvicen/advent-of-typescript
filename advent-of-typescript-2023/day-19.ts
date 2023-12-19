// https://typehero.dev/challenge/day-19
// https://typehero.dev/challenge/day-19/submissions/140549

type ToyMap = ["🛹", "🚲", "🛴", "🏄"];

type Rebuild<
	List extends number[],
	Counter extends Array<ToyMap[number]> = [],
	Result extends Array<ToyMap[number]> = [],
	Pattern = ToyMap,
> = List extends [infer First, ...infer Rest extends number[]]
	? First extends Counter["length"]
		? Pattern extends [infer FirstToy, ...infer RestOfToys]
			? Rebuild<Rest, [], [...Result, ...Counter], RestOfToys>
			: Rebuild<Rest, [], [...Result, ...Counter], Pattern>
		: Pattern extends [infer FirstToy extends ToyMap[number], ...infer RestOfToys]
			? Rebuild<List, [FirstToy, ...Counter], Result, Pattern>
			: Rebuild<List, [ToyMap[0], ...Counter], Result, ToyMap>
	: Result;

// tests
import { Expect, Equal } from 'type-testing';

type test_0_actual = Rebuild<[2, 1, 3, 3, 1, 1, 2]>;
type test_0_expected =  [
  '🛹', '🛹',
	'🚲',
	'🛴', '🛴', '🛴',
	'🏄', '🏄', '🏄',
	'🛹',
	'🚲',
	'🛴', '🛴',
];
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = Rebuild<[3, 3, 2, 1, 2, 1, 2]>;
type test_1_expected = [
	'🛹', '🛹', '🛹',
	'🚲', '🚲', '🚲',
	'🛴', '🛴',
	'🏄',
	'🛹', '🛹',
	'🚲',
	'🛴', '🛴'
];
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = Rebuild<[2, 3, 3, 5, 1, 1, 2]>;
type test_2_expected = [
	'🛹', '🛹',
	'🚲', '🚲', '🚲',
	'🛴', '🛴', '🛴',
	'🏄', '🏄', '🏄', '🏄', '🏄',
	'🛹',
	'🚲',
	'🛴', '🛴',
];
type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;