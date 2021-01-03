import { classnames as cn, ClassValue } from '@vubnguyen/styles';
import { ReactNode } from 'react';

export interface RowProps {
  children?: ReactNode;
  classNames?: ClassValue[];
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
