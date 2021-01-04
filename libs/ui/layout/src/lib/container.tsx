import { classnames as cn, ClassValue } from '@vubnguyen/styles';
import { ReactNode } from 'react';

export interface ContainerProps {
  children?: ReactNode;
  classnames?: ClassValue[];
  id?: string;
}

const container: ClassValue[] = ['mw100', 'mrAuto', 'mlAauto'];
export const Container: React.FC<ContainerProps> = ({
  id,
  classnames = [],
  children,
}) => {
  return (
    <div id={id} className={cn(...container, ...classnames)}>
      {children}
    </div>
  );
};
