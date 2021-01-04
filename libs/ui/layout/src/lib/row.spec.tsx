import { render } from '@testing-library/react';
import { ClassNames } from '@vubnguyen/styles';
import { Row } from './row';

describe('Layout component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Row />);
    expect(baseElement).toBeTruthy();
  });
  it("should render with '.flex.flexWrap' class", () => {
    const { baseElement, container } = render(<Row />);
    expect(baseElement).toBeTruthy();
    expect(container.querySelector('.flex.flexWrap')).toBeTruthy();
  });
  it('should render with extra classes', () => {
    const className: ClassNames = 'bClrblack';
    const { baseElement, container } = render(<Row classNames={[className]} />);
    expect(baseElement).toBeTruthy();
    expect(
      container.querySelector(`.${className}`)?.classList.toString(),
    ).toMatchInlineSnapshot(`"flex flexWrap nl2 nr2 bClrblack"`);
  });
  it('should render children inside a div', () => {
    const testId = 'test-id';
    const { baseElement, container, getByText } = render(
      <Row>
        <div id={testId}>Test</div>
      </Row>,
    );
    expect(baseElement).toBeTruthy();
    const row = container.querySelector('.flex.flexWrap') as HTMLDivElement;
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
