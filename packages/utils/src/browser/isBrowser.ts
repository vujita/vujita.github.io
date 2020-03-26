import hasWindow from "./hasWindow";

export default (): boolean => hasWindow() || typeof self !== "undefined";
