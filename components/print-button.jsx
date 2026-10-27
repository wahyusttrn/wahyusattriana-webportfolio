'use client';

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="cursor-pointer border-2 border-[#121212] bg-hot px-3.5 py-2 font-semibold text-[#121212] transition-colors hover:bg-[#121212] hover:text-hot"
    >
      Download PDF
    </button>
  );
}
