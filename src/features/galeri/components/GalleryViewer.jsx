"use client";

import { useState } from "react";
import EmptyState from "@/components/shared/EmptyState";
import Modal from "@/components/ui/Modal";
import { albums } from "../data/gallery";

// Viewer sederhana untuk melihat foto dalam album.
// TODO (PAGE-007): tampilkan gambar asli dari public/images/galeri
// dan sesuaikan interaksi (lightbox, navigasi foto) dengan desain.

export default function GalleryViewer() {
  const [activeAlbum, setActiveAlbum] = useState(albums[0] ?? null);
  const [activePhoto, setActivePhoto] = useState(null);

  if (!activeAlbum) {
    return <EmptyState title="Belum ada album" />;
  }

  return (
    <div>
      <div>
        {albums.map((album) => (
          <button
            key={album.slug}
            type="button"
            onClick={() => setActiveAlbum(album)}
          >
            {album.title}
          </button>
        ))}
      </div>
      <div>
        {activeAlbum.photos.map((photo, index) => (
          <button
            key={`${activeAlbum.slug}-${index}`}
            type="button"
            onClick={() => setActivePhoto(photo)}
          >
            {photo.caption}
          </button>
        ))}
      </div>
      <Modal
        open={Boolean(activePhoto)}
        onClose={() => setActivePhoto(null)}
        title={activePhoto?.caption ?? ""}
      >
        {/* TODO: tampilkan gambar asli */}
        <p>Detail foto akan ditampilkan di sini.</p>
      </Modal>
    </div>
  );
}
