import { classnames as cn, ClassValue } from '@vubnguyen/styles';
import { ReactNode } from 'react';

export type NumberAttr = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnProps {
  children?: ReactNode;
  classnames?: ClassValue[];
  col?: NumberAttr;
  lg?: NumberAttr;
  md?: NumberAttr;
  ns?: NumberAttr;
}

type ColClassNames =
  | 'col1'
  | 'col10'
  | 'col10Lg'
  | 'col10Md'
  | 'col10Ns'
  | 'col11'
  | 'col11Lg'
  | 'col11Md'
  | 'col11Ns'
  | 'col12'
  | 'col12Lg'
  | 'col12Md'
  | 'col12Ns'
  | 'col1Lg'
  | 'col1Md'
  | 'col1Ns'
  | 'col2'
  | 'col2Lg'
  | 'col2Md'
  | 'col2Ns'
  | 'col3'
  | 'col3Lg'
  | 'col3Md'
  | 'col3Ns'
  | 'col4'
  | 'col4Lg'
  | 'col4Md'
  | 'col4Ns'
  | 'col5'
  | 'col5Lg'
  | 'col5Md'
  | 'col5Ns'
  | 'col6'
  | 'col6Lg'
  | 'col6Md'
  | 'col6Ns'
  | 'col7'
  | 'col7Lg'
  | 'col7Md'
  | 'col7Ns'
  | 'col8'
  | 'col8Lg'
  | 'col8Md'
  | 'col8Ns'
  | 'col9'
  | 'col9Lg'
  | 'col9Md'
  | 'col9Ns';

export const Column: React.FC<ColumnProps> = ({
  classnames = [],
  col,
  ns,
  md,
  lg,
  children,
}) => {
  const cv: ClassValue = [];
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const c = col || lg || md || ns;
  cv.push(`col${c ?? 12}` as ColClassNames);
  if (lg) {
    cv.push(`col${lg}Lg` as ColClassNames);
  }
  if (md) {
    cv.push(`col${md}Md` as ColClassNames);
  }
  if (ns) {
    cv.push(`col${ns}Nd` as ColClassNames);
  }
  return <div className={cn(...cv, ...classnames)}>{children}</div>;
};

export default Column;
