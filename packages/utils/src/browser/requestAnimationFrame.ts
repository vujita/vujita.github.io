import isBrowser from "./isBrowser";
import fallback from "./fallbackZeroDelay";

export default isBrowser() && window.requestAnimationFrame
  ? window.requestAnimationFrame
  : fallback;
