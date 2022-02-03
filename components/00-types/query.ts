export type QueryError = {
  message: string;
  status?: string;
  extraInfo?: string;
};

export type QueryCompletionError = {
  queryError?: QueryError | null;
};

export type QueryCompletion<T> = {
  result?: T;
} & QueryCompletionError;
