export interface ComponentProps {
  isInitialLoaded: boolean;
  isLoading: boolean;
  error: string;
  render: () => React.ReactNode;
}
