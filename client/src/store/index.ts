import { useMemo } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, CombinedState, Reducer, EmptyObject, Store } from 'redux';

import themeReducer from './ducks/theme/reducer';
import { PayloadAction } from './types/actions';
import { RootState } from './types/state';

let store: Store<EmptyObject & RootState, PayloadAction> | undefined;

const initStore = (
  preloadedState?: Partial<RootState>
): Store<EmptyObject & RootState, PayloadAction> => {
  const rootReducer: Reducer<CombinedState<RootState>, PayloadAction> = combineReducers<RootState>({
    theme: themeReducer,
  });

  const store = createStore(rootReducer, preloadedState, composeWithDevTools());

  return store;
};

const initializeStore = (preloadedState?: Partial<RootState>) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

const useStore = (
  initialState?: Partial<RootState>
): Store<EmptyObject & RootState, PayloadAction> => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);

  return store;
};

export default useStore;
