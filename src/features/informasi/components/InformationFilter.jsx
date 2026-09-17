"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { INFORMATION_CATEGORIES } from "@/lib/constants";

// Filter list informasi: search by judul + pilih kategori.
// State dikelola oleh InformationList lewat props callback.

const categoryOptions = [
  { value: "all", label: "Semua Kategori" },
  ...INFORMATION_CATEGORIES.map((category) => ({
    value: category,
    label: category,
  })),
];

export default function InformationFilter({
  category,
  onCategoryChange,
  search,
  onSearchChange,
}) {
  return (
    <div>
      <Input
        id="information-search"
        type="search"
        label="Cari"
        placeholder="Cari judul informasi..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
      <Select
        id="information-category"
        label="Kategori"
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        options={categoryOptions}
      />
    </div>
  );
}
