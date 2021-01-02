/* eslint-disable @typescript-eslint/ban-ts-comment */
import classnames, { ClassValue } from './classnames';

interface StyleHash {
  bgWhite: 'backgroundColorWhite';
  test: 'randomhashone';
  test1: 'randomhashtwo';
}
interface TestSetup<T extends string = string> {
  args: ClassValue<T>[];
  name: string;
  value: string;
}
describe('Classnames', () => {
  const styleHash: StyleHash = {
    bgWhite: 'backgroundColorWhite',
    test: 'randomhashone',
    test1: 'randomhashtwo',
  };
  let cn: (...classes: ClassValue<keyof StyleHash>[]) => string;
  beforeEach((): void => {
    cn = classnames<keyof StyleHash>(styleHash);
  });
  const tests: TestSetup<keyof StyleHash>[] = [
    {
      args: [{ test: false }],
      name: 'should return empty string when hash is all false',
      value: '',
    },
    {
      args: [{ test: true, test1: false }],
      name: 'should only add the values where it is true in an object',
      value: `${styleHash.test}`,
    },
    {
      args: [{ test: true }, 'test1'],
      name: 'Should add mixed values',
      value: `${styleHash.test} ${styleHash.test1}`,
    },
    {
      // @ts-expect-error
      args: ['a', 'b', 'c'],
      name: 'should reflect keys when missing in style hash',
      value: 'a b c',
    },
    {
      // @ts-expect-error
      args: ['vu', { test: false }],
      name: 'reflect values: "vu", {test:false}',
      value: 'vu',
    },
    {
      // @ts-expect-error
      args: ['vu', { test: true, test1: false }],
      name: `reflect values 'vu', {test: true, test1: false}`,
      value: `vu ${styleHash.test}`,
    },
    {
      // @ts-expect-error
      args: ['vu', { nguyen: true, test: true, test1: false }],
      name: `relect values: ['vu', { nguyen: true, test: true, test1: false }]`,
      value: `vu nguyen ${styleHash.test}`,
    },
  ];
  tests.forEach((testSetup) => {
    it(testSetup.name, () => {
      expect(cn(...testSetup.args)).toEqual(testSetup.value);
    });
  });
});
