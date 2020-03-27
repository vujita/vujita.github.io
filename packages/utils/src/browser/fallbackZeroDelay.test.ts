import fallbackZeroDelay from "./fallbackZeroDelay";

it("should execute at the end of current event queue", (done) => {
  let count = 0;
  fallbackZeroDelay(() => {
    count += 1;
  });
  expect(count).toBe(0);
  setTimeout(() => {
    expect(count).toBe(1);
    done();
  }, 0);
});
