'use client';

import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/** Returns false during SSR + initial render, true after client hydration.
 *  Use to gate client-only rendering (portals, theme-dependent icons, etc.)
 *  without an effect+setState (which React 19 warns about). */
const useHasMounted = (): boolean =>
  useSyncExternalStore(emptySubscribe, () => true, () => false);

export default useHasMounted;
