import { render } from '@testing-library/react';
import { ClassNames } from '@vubnguyen/styles';
import React from 'react';
import { Row } from './row';

describe('Layout component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Row />);
    expect(baseElement).toBeTruthy();
  });
  it("should render with '.row' class", () => {
    const { baseElement, container } = render(<Row />);
    expect(baseElement).toBeTruthy();
    expect(container.querySelector('.row')).toBeTruthy();
  });
  it('should render with extra classes', () => {
    const className: ClassNames = 'bClrblack';
    const { baseElement, container } = render(<Row classNames={[className]} />);
    expect(baseElement).toBeTruthy();
    expect(
      container.querySelector(`.${className}`)?.classList.toString(),
    ).toEqual('row bClrblack');
  });
  it('should render children inside a div', () => {
    const testId = 'test-id';
    const { baseElement, container, getByText } = render(
      <Row>
        <div id={testId}>Test</div>
      </Row>,
    );
    expect(baseElement).toBeTruthy();
    const row = container.querySelector('.row') as HTMLDivElement;
    expect(row).toBeTruthy();
    expect(row.firstChild).toBeTruthy();
    const rowChild = row.firstChild as HTMLDivElement;
    expect(rowChild.id).toEqual(testId);
    expect(getByText('Test')).toMatchInlineSnapshot(`
      <div
        id="test-id"
      >
        Test
      </div>
    `);
  });
});
