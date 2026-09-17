"use client";

import { useState } from "react";

// State pagination sederhana.
// Pemakaian: const { page, totalPages, goTo } = usePagination(items.length, 9);

export default function usePagination(totalItems, itemsPerPage = 9) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const currentPage = Math.min(page, totalPages);

  const goTo = (target) => {
    setPage(Math.min(Math.max(1, target), totalPages));
  };

  const next = () => {
    goTo(currentPage + 1);
  };

  const previous = () => {
    goTo(currentPage - 1);
  };

  return { page: currentPage, totalPages, goTo, next, previous };
}
