type truthyOrFalsey = null | boolean | undefined;
export type ClassValue<T extends string = string> =
  | Partial<Record<T, truthyOrFalsey>>
  | T
  | ClassValue<T>[];
type valType = string | number;

export default <T extends string = string>(
  styleHash: Record<T, string> = {} as Record<T, string>,
) => {
  const classNames = (...classes: ClassValue<T>[]): string => {
    const computedClasses: valType[] = [];
    for (let i = 0; i < classes.length; i++) {
      const arg = classes[i];
      const argType = typeof arg;
      if (argType === 'number' || argType === 'string') {
        const val = styleHash[arg as string]
          ? (styleHash[arg as string] as string | undefined)
          : (arg as string);
        if (val) {
          computedClasses.push(val);
        }
      } else if (Array.isArray(arg)) {
        const inner = classNames(arg);
        if (inner) {
          computedClasses.push(inner);
        }
      } else if (argType === 'object') {
        for (const key in arg as Record<T, truthyOrFalsey>) {
          if ((arg as Record<T, truthyOrFalsey>)[key]) {
            const v = styleHash[key] || key;
            // eslint-disable-next-line max-depth
            if (v) {
              computedClasses.push(v);
            }
          }
        }
      }
    }
    return computedClasses.join(' ');
  };
  return classNames;
};
