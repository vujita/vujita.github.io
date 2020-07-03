import debounce from "./debounce";

describe("debounce should control function calls", () => {
  let func: jest.Mock;
  let debouncedFunc: Function;
  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 100);
  });
  it("should only be called once", (done) => {
    for (let i = 0; i < 100; i += 1) {
      debouncedFunc();
    }
    setTimeout(() => {
      expect(func).toBeCalledTimes(1);
      done();
    }, 1000);
  });
});
