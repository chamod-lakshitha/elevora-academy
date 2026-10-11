export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94754554724"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Elevora Academy on WhatsApp"
      title="Message us on WhatsApp"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-amber-300 bg-gradient-to-br from-amber-100 to-amber-300 text-brand-navy shadow-[0_12px_32px_rgba(120,85,20,0.24)] transition duration-200 hover:-translate-y-0.5 hover:from-amber-200 hover:to-amber-300 hover:shadow-[0_16px_36px_rgba(120,85,20,0.32)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/45 sm:right-6 sm:h-15 sm:w-15"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.93 11.93 0 0 0 5.8 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.49-8.41zM12.06 21.8h-.01a9.87 9.87 0 0 1-5.02-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.84 9.84 0 0 1-1.51-5.25c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7.01c0 5.46-4.44 9.9-9.9 9.9zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
