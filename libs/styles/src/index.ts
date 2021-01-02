import cn, { ClassValue as CV } from '@vubnguyen/classnames';
import styles, { ClassNames } from './lib/global/styles.scss';

export const classnames = cn(styles);

export { ClassesType, ClassNames } from './lib/global/styles.scss';

export type ClassValue = CV<ClassNames>;
