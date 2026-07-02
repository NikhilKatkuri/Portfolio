export default function formatDate(date?: string): string {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  if (!month) return year;
  return new Date(`${year}-${month}-01`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
