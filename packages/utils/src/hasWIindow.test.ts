/* eslint-disable @typescript-eslint/ban-ts-ignore */
import hasWindow from "./hasWindow";

describe("Test has window util", () => {
  // @ts-ignore
  const startWindow = global.window;
  afterAll(() => {
    // @ts-ignore
    global.window = startWindow;
  });
  it("should not have a window", () => {
    // @ts-ignore
    global.window = undefined;
    expect(hasWindow()).toBe(false);
  });
  it("If window global is present,then hasWindow will return true", () => {
    // @ts-ignore
    global.window = true;
    expect(hasWindow()).toBe(true);
  });
});
