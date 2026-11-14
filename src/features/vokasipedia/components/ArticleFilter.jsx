"use client";

import { useEffect, useId, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { MagnifierIcon } from "@solar-icons/react/line-duotone/magnifier";
import { FilterIcon } from "@solar-icons/react/line-duotone/filter";
import { CheckIcon } from "@solar-icons/react/line-duotone/check";
import styles from "./ArticleFilter.module.css";

// Toolbar daftar artikel: kolom pencarian + tombol Filter dengan dropdown
// checkbox (multi-select). Komponen ini "controlled": state dipegang ArticleList.
export default function ArticleFilter({
  divisions,
  selectedDivisions,
  onToggleDivision,
  onClearDivisions,
  searchQuery,
  onSearchChange,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
  const panelId = useId();
  const selectedCount = selectedDivisions.length;

  // Tutup dropdown saat klik di luar atau menekan Escape.
  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.toolbar}>
      <label className={styles.search}>
        <span className={styles.srOnly}>Cari artikel</span>
        <MagnifierIcon size={20} className={styles.searchIcon} />
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Cari artikel"
          className={styles.searchInput}
          autoComplete="off"
        />
      </label>

      <div className={styles.filterWrap} ref={wrapperRef}>
        <Button
          ref={triggerRef}
          variant="primary"
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={open ? panelId : undefined}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.triggerInner}>
            Filter
            <FilterIcon size={20} />
          </span>
        </Button>

        {selectedCount > 0 && (
          <span
            className={styles.count}
            aria-label={`${selectedCount} filter aktif`}
          >
            {selectedCount}
          </span>
        )}

        {open && (
          <div
            id={panelId}
            className={styles.panel}
            role="group"
            aria-label="Filter berdasarkan"
          >
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Filter berdasarkan</span>
              {selectedCount > 0 && (
                <button
                  type="button"
                  className={styles.reset}
                  onClick={onClearDivisions}
                >
                  Atur ulang
                </button>
              )}
            </div>

            <ul className={styles.options}>
              {divisions.map((division) => (
                <li key={division}>
                  <label className={styles.option}>
                    <span className={styles.optionLabel} title={division}>
                      {division}
                    </span>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      checked={selectedDivisions.includes(division)}
                      onChange={() => onToggleDivision(division)}
                    />
                    <span className={styles.box} aria-hidden="true">
                      <CheckIcon size={16} className={styles.check} />
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
