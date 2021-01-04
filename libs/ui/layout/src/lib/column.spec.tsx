import { render } from '@testing-library/react';
import React from 'react';
import { Column, NumberAttr } from './column';

const numAttrs: NumberAttr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
describe('Column', () => {
  it('should render successfully', () => {
    const { baseElement, container } = render(<Column />);
    expect(baseElement).toBeTruthy();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="col12"
      />
    `);
  });

  numAttrs.forEach((col: NumberAttr): void => {
    it(`should render <Column col={${col}} />`, () => {
      const { baseElement, container } = render(<Column col={col} />);
      expect(baseElement).toBeTruthy();
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('should render column ns', () => {
  numAttrs.forEach((ns) => {
    it(`should render <Column ns={${ns}} />`, () => {
      const { baseElement, container } = render(<Column ns={ns} />);
      expect(baseElement).toBeTruthy();
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
describe('should render column ns col', () => {
  numAttrs.forEach((col) => {
    numAttrs.forEach((ns) => {
      it(`should render <Column ns={${ns}} col={${col}}/>`, () => {
        const { baseElement, container } = render(<Column ns={ns} col={col} />);
        expect(baseElement).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});
describe('should render column md col', () => {
  numAttrs.forEach((col) => {
    numAttrs.forEach((md) => {
      it(`should render <Column md={${md}} col={${col}} />`, () => {
        const { baseElement, container } = render(<Column md={md} col={col} />);
        expect(baseElement).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});
describe('should render column md', () => {
  numAttrs.forEach((md) => {
    it(`should render <Column md={${md}} />`, () => {
      const { baseElement, container } = render(<Column md={md} />);
      expect(baseElement).toBeTruthy();
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
describe('should render column lg col', () => {
  numAttrs.forEach((lg) => {
    numAttrs.forEach((col) => {
      it(`should render <Column lg={${lg}} col={${col} />`, () => {
        const { baseElement, container } = render(<Column md={lg} col={col} />);
        expect(baseElement).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});

describe('should render column lg', () => {
  numAttrs.forEach((lg) => {
    it(`should render <Column lg={${lg}} />`, () => {
      const { baseElement, container } = render(<Column md={lg} />);
      expect(baseElement).toBeTruthy();
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('should render col ns md', () => {
  numAttrs.forEach((col) => {
    numAttrs.forEach((ns) => {
      numAttrs.forEach((md) => {
        it(`should render <Column col={${col}} ns={${ns}} md={${md}} />`, () => {
          const { baseElement, container } = render(<Column ns={ns} md={md} />);
          expect(baseElement).toBeTruthy();
          expect(container.firstChild).toMatchSnapshot();
        });
      });
    });
  });
});

describe('should render col ns md lg', () => {
  numAttrs.forEach((col) => {
    numAttrs.forEach((ns) => {
      numAttrs.forEach((md) => {
        it(`should render <Column ns={${ns}} md={${md}} ${col} />`, () => {
          const { baseElement, container } = render(
            <Column ns={ns} md={md} col={col} />,
          );
          expect(baseElement).toBeTruthy();
          expect(container.firstChild).toMatchSnapshot();
        });
      });
    });
  });
});

describe('should render ns md lg', () => {
  numAttrs.forEach((ns) => {
    numAttrs.forEach((md) => {
      it(`should render <Column ns={${ns}} md={${md}} />`, () => {
        const { baseElement, container } = render(<Column ns={ns} md={md} />);
        expect(baseElement).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});
