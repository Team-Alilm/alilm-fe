import { createContext, type Provider, useContext } from 'react';

type NullSymbolType = typeof NullSymbol;
const NullSymbol = Symbol('Null');

export type CreateContextReturn<T> = [Provider<T>, () => T];

export function createSafeContext<T>(displayName?: string): CreateContextReturn<T> {
  const Context = createContext<T | NullSymbolType>(NullSymbol);
  Context.displayName = displayName ?? 'SafeContext';

  const useSafeContext = () => {
    const context = useContext(Context);

    if (context === NullSymbol) {
      const error = new Error(`[${Context.displayName}]: Provider not found.`);
      error.name = '[Error] Context';

      throw error;
    }

    return context;
  };

  return [Context.Provider as Provider<T>, useSafeContext];
}
