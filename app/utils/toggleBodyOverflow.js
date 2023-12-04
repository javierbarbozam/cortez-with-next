export const toggleBodyOverflow = () => {
  const body = document.body;
  const hasOverflowHidden = window.getComputedStyle(body).overflow === "hidden";
  hasOverflowHidden
    ? (body.style.overflow = "visible")
    : (body.style.overflow = "hidden");
}