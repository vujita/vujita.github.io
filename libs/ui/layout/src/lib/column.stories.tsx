import { number, text, withKnobs } from '@storybook/addon-knobs';
import { Column, NumberAttr } from './column';
import { Container } from './container';
import { Row } from './row';
export default {
  component: Column,
  decorators: [withKnobs],
  title: 'ui/layout',
};

export const Grid = () => {
  const numRows = number('numRows', 5);
  const numCols = number('numCols', 5);
  const columnMarkup = text('colMarkup', '<div>Test</div>');
  const colProp = number('col', 5);
  const nsProp = number('ns', 8);

  const rows: JSX.Element[] = [];
  for (let r = 0; r < numRows; r++) {
    const cols: JSX.Element[] = [];
    for (let c = 0; c < numCols; c++) {
      cols.push(
        <Column
          key={`${r}-${c}`}
          col={colProp as NumberAttr}
          ns={nsProp as NumberAttr}
        >
          <span dangerouslySetInnerHTML={{ __html: columnMarkup }} />
        </Column>,
      );
    }
    rows.push(<Row key={r}>{cols}</Row>);
  }
  return <Container>{rows}</Container>;
};
