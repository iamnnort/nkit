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

declare namespace NodeJS {
  interface Global {
    mockComponent: (componentName: string, componentProps?: {}) => { default: React.FC<{ originalComponent: string }> };
    findMock: (wrapper: any, componentName: string) => any;
    mockEventListeners: (element: any) => any;
  }
}
