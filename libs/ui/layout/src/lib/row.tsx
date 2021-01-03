import { ClassNames, classnames as cn } from '@vubnguyen/styles';
import { ReactNode } from 'react';

export interface RowProps {
  children?: ReactNode;
  classNames?: ClassNames[];
  id?: string;
}

export const Row = ({
  id,
  children,
  classNames = [],
}: RowProps): JSX.Element => (
  <div className={cn('row', ...classNames)} id={id}>
    {children}
  </div>
);
