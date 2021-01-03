import { classnames as cn, ClassValue } from '@vubnguyen/styles';
import { ReactNode } from 'react';

export interface RowProps {
  children?: ReactNode;
  classNames?: ClassValue[];
  id?: string;
  noGutters?: boolean;
}
const row: ClassValue[] = ['flex', 'flexWrap'];
export const Row = ({
  id,
  children,
  classNames = [],
  noGutters,
}: RowProps): JSX.Element => (
  <div
    className={cn(
      ...row,
      // Gutters -0.5rem margin-(left/right)
      { nl2: !!noGutters, nr2: !!noGutters },
      ...classNames,
    )}
    id={id}
  >
    {children}
  </div>
);
