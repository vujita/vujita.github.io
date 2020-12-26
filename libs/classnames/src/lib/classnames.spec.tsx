/* eslint-disable @typescript-eslint/ban-ts-comment */
import classnames, { ClassValue } from './classnames';

interface StyleHash {
  test: 'randomhashone';
  test1: 'randomhashtwo';
  bgWhite: 'backgroundColorWhite';
}
describe('Classnames', () => {
  let styleHash: StyleHash;
  let cn: (...classes: ClassValue<keyof StyleHash>[]) => string;
  beforeEach((): void => {
    styleHash = {
      bgWhite: 'backgroundColorWhite',
      test: 'randomhashone',
      test1: 'randomhashtwo',
    };
    cn = classnames<keyof StyleHash>(styleHash);
  });
  it('should render proper css rules', () => {
    expect(cn({ test: false })).toBe('');
    expect(cn({ test: true, test1: false })).toBe('randomhashone');
    expect(cn({ test: true }, 'test1')).toBe('randomhashone randomhashtwo');
    expect(cn({ test: true, test1: false })).toBe('randomhashone');
  });
  it('should just reflect keys if missing', (): void => {
    // @ts-ignore
    expect(cn('a', 'b', 'c')).toBe('a b c');
    // @ts-ignore
    expect(cn('vu', { test: false })).toBe('vu');
    // @ts-ignore
    expect(cn('vu', { test: true, test1: false })).toBe('vu randomhashone');
    // @ts-ignore
    expect(cn('vu', { test: true }, 'test1')).toBe(
      'vu randomhashone randomhashtwo',
    );
    // @ts-ignore
    expect(cn('vu', { nguyen: true, test: true, test1: false })).toBe(
      'vu randomhashone nguyen',
    );
  });
});
