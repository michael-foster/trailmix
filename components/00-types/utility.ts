import { QueryCompletionError } from './query';

export type OnClickFunction =
  | React.MouseEventHandler<HTMLAnchorElement>
  | VoidFunction;

export type IWindowSize = {
  width?: number;
  height?: number;
};

export type PageProps<T> = T & QueryCompletionError;
