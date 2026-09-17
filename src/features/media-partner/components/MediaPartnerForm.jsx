"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

// Formulir pengajuan kerja sama media partner.
// TODO (PAGE-008): hubungkan ke API/servis pengiriman form ketika tersedia.

export default function MediaPartnerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p role="status">
        Terima kasih, pengajuan kerja sama Anda telah terkirim. Kami akan
        menghubungi Anda melalui email.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id="partner-name" name="name" label="Nama" required />
      <Input
        id="partner-institution"
        name="institution"
        label="Instansi / Organisasi"
        required
      />
      <Input
        id="partner-email"
        name="email"
        type="email"
        label="Email"
        required
      />
      <Textarea
        id="partner-message"
        name="message"
        label="Pesan"
        placeholder="Ceritakan rencana kerja sama Anda..."
        required
      />
      <Button type="submit">Kirim</Button>
    </form>
  );
}
