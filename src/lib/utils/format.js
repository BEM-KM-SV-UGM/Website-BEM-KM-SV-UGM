// Helper format umum.

export function formatDate(value, options) {
  if (!value) {
    return "";
  }

  const date = typeof value === "string" ? new Date(value) : value;

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(
    "id-ID",
    options ?? { day: "numeric", month: "long", year: "numeric" }
  ).format(date);
}
