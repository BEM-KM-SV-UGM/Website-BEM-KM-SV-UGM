"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/shared/EmptyState";
import Pagination from "@/components/ui/Pagination";
import useDebounce from "@/hooks/useDebounce";
import usePagination from "@/hooks/usePagination";
import InformationCard from "./InformationCard";
import InformationFilter from "./InformationFilter";

const PAGE_SIZE = 9;

// Daftar informasi dengan search, filter kategori, dan pagination.
// Data list diterima lewat props (diambil dari service di page).

export default function InformationList({ informations }) {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const filtered = useMemo(() => {
    const keyword = debouncedSearch.trim().toLowerCase();

    return informations.filter((item) => {
      const matchCategory = category === "all" || item.category === category;
      const matchSearch = item.title.toLowerCase().includes(keyword);
      return matchCategory && matchSearch;
    });
  }, [informations, category, debouncedSearch]);

  const { page, totalPages, goTo } = usePagination(filtered.length, PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <InformationFilter
        category={category}
        onCategoryChange={(value) => {
          setCategory(value);
          goTo(1);
        }}
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          goTo(1);
        }}
      />
      {visible.length === 0 ? (
        <EmptyState
          title="Tidak ada informasi"
          description="Coba ubah kata kunci atau kategori."
        />
      ) : (
        <div>
          {visible.map((item) => (
            <InformationCard key={item.slug} information={item} />
          ))}
        </div>
      )}
      <Pagination page={page} totalPages={totalPages} onChange={goTo} />
    </div>
  );
}
