import { classnames as cn, ClassValue } from '@vubnguyen/styles';

export interface ContainerProps {
  classnames?: ClassValue[];
}

export const Container: React.FC<ContainerProps> = ({ classnames = [] }) => {
  return <div className={cn(...classnames, 'mw100')}>Container</div>;
};
