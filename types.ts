export interface WithChildren {
  children: React.ReactNode;
}

export type NonEmptyTuple<T> = [T, ...T[]];
