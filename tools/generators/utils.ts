import * as fp from 'lodash/fp';

export const slashToDash = fp.pipe(fp.split('/'), fp.join('-'));
