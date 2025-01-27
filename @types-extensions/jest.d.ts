declare namespace jest {
  interface Matchers<R, T> {
    toHaveTextContent(selector: string): R;
  }
}

// Patch for Jest types using a depreacted type declaration for NodeJS.Global,
// as it's been removed from Node > v16.
// https://github.com/facebook/jest/issues/11640#issuecomment-893867514
declare module NodeJS {
  interface Global {}
}
