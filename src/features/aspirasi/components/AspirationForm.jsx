"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { ASPIRATION_CATEGORIES } from "@/lib/constants";
import { submitAspiration } from "../services/aspiration.service";

const categoryOptions = ASPIRATION_CATEGORIES.map((category) => ({
  value: category,
  label: category,
}));

// Formulir pengiriman aspirasi.
// TODO (PAGE-005): tambahkan validasi lengkap dan hubungkan ke API backend.

export default function AspirationForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [ticket, setTicket] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    setStatus("submitting");

    try {
      const result = await submitAspiration({
        name: formData.get("name"),
        category: formData.get("category"),
        message: formData.get("message"),
      });
      setTicket(result.ticket);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status">
        <p>Aspirasi berhasil dikirim.</p>
        <p>
          Nomor tiket Anda: <strong>{ticket}</strong>. Simpan nomor ini untuk
          mengecek status.
        </p>
        <Button type="button" onClick={() => setStatus("idle")}>
          Kirim aspirasi lain
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="aspiration-name"
        name="name"
        label="Nama (boleh anonim)"
        placeholder="Nama Anda"
      />
      <Select
        id="aspiration-category"
        name="category"
        label="Kategori"
        options={categoryOptions}
        required
      />
      <Textarea
        id="aspiration-message"
        name="message"
        label="Isi aspirasi"
        placeholder="Tulis aspirasi Anda..."
        required
      />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Mengirim..." : "Kirim Aspirasi"}
      </Button>
      {status === "error" ? (
        <p role="alert">Terjadi kesalahan saat mengirim, silakan coba lagi.</p>
      ) : null}
    </form>
  );
}
