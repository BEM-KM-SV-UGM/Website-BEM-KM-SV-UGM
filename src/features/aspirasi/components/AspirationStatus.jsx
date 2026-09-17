"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { getAspirationByTicket } from "../services/aspiration.service";

// Cek status aspirasi berdasarkan nomor tiket.
// TODO (PAGE-005): hubungkan ke API backend ketika tersedia.

export default function AspirationStatus() {
  const [ticket, setTicket] = useState("");
  const [result, setResult] = useState(undefined);

  function handleCheck(event) {
    event.preventDefault();
    setResult(getAspirationByTicket(ticket));
  }

  return (
    <div>
      <form onSubmit={handleCheck}>
        <Input
          id="aspiration-ticket"
          name="ticket"
          label="Nomor Tiket"
          placeholder="Contoh: ASP-001"
          value={ticket}
          onChange={(event) => setTicket(event.target.value)}
          required
        />
        <Button type="submit">Cek Status</Button>
      </form>
      {result !== undefined ? (
        result ? (
          <p>
            Status aspirasi <strong>{result.id}</strong>:{" "}
            <Badge>{result.status}</Badge>
          </p>
        ) : (
          <p>Tiket tidak ditemukan. Periksa kembali nomor tiket Anda.</p>
        )
      ) : null}
    </div>
  );
}
