declare namespace jest {
  interface Matchers<R, T> {
    /**
     * Expect your tree to match the snapshot
     */
    toMatchStyledComponentsSnapshot(): void;

    /**
     * Expect your whatever to have a style with specified value
     */
    toHaveStyleRule(property: string, value: any): void;
  }
}
