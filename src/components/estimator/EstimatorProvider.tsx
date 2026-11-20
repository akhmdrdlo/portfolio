"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { estimate, type Selection } from "@/lib/whatsapp";

type Ctx = {
  selection: Selection;
  qty: (id: string) => number;
  set: (id: string, qty: number) => void;
  toggle: (id: string) => void;
  clear: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  summary: ReturnType<typeof estimate>;
};

const EstimatorContext = createContext<Ctx | null>(null);

export function EstimatorProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<Selection>({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const set = useCallback((id: string, qty: number) => {
    setSelection((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = Math.min(qty, 99);
      return next;
    });
  }, []);

  const toggle = useCallback((id: string) => {
    setSelection((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = 1;
      return next;
    });
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      selection,
      qty: (id) => selection[id] ?? 0,
      set,
      toggle,
      clear: () => setSelection({}),
      drawerOpen,
      setDrawerOpen,
      summary: estimate(selection),
    }),
    [selection, set, toggle, drawerOpen],
  );

  return <EstimatorContext.Provider value={value}>{children}</EstimatorContext.Provider>;
}

export function useEstimator(): Ctx {
  const ctx = useContext(EstimatorContext);
  if (!ctx) throw new Error("useEstimator must be used inside <EstimatorProvider>");
  return ctx;
}
