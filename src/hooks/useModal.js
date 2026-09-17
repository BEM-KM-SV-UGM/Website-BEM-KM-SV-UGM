"use client";

import { useCallback, useState } from "react";

// Helper state untuk component Modal.
// Pemakaian: const modal = useModal(); <Modal open={modal.isOpen} onClose={modal.close} />.

export default function useModal(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((previous) => !previous);
  }, []);

  return { isOpen, open, close, toggle };
}
