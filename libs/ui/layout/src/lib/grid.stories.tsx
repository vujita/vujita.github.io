import { number, text, withKnobs } from '@storybook/addon-knobs';
import { ClassValue } from '@vubnguyen/styles';
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
  const numCols = number('numCols', 15);
  const columnMarkup = text('colMarkup', 'Test');
  const colProp = number('col', 3);
  const nsProp = number('ns', 5);
  const mdProp = number('md', 6);
  const lgProp = number('lg', 8);
  const colExtraClasses = text('colExtraClasses', 'pb2');
  const rowExtraClasses = text('rowExtraClasses', 'center');
  if (!numRows || !numCols || !columnMarkup) {
    return <h1>Missing prop</h1>;
  }
  const rows: JSX.Element[] = [];
  for (let r = 0; r < numRows; r++) {
    const cols: JSX.Element[] = [];
    for (let c = 0; c < numCols; c++) {
      cols.push(
        <Column
          key={`${r}-${c}`}
          classnames={[colExtraClasses as ClassValue]}
          col={colProp as NumberAttr}
          md={mdProp as NumberAttr}
          lg={lgProp as NumberAttr}
          ns={nsProp as NumberAttr}
        >
          {columnMarkup}
        </Column>,
      );
    }
    rows.push(
      <Row classNames={[rowExtraClasses as ClassValue]} key={r}>
        {cols}
      </Row>,
    );
  }
  return <Container>{rows}</Container>;
};
