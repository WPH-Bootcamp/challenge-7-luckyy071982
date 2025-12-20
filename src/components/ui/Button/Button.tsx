import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  suffixClass?: string;
  prefixClass?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  suffixClass,
  prefixClass,
  ariaLabel,
}) => {
  return (
    <a
      href={href ?? "#"}
      className={`${
        prefixClass ?? ""
      } bg-[#ff623e] text-white p-2 flex justify-center font-bold rounded-full shadow-[inset_0_4px_10px_rgba(255,255,255,0.5)] cursor-pointer ${
        suffixClass ?? ""
      }`}
      aria-label={ariaLabel ?? ""}
    >
      {children}
    </a>
  );
};

// Penggunaan:
// 1. Minimal (hanya children)
// <Button>Click Me</Button>
// Hasil: <a href="#" class="bg-[#ff623e] ...">Click Me</a>

// 2. Dengan href
// <Button href="https://example.com">Go to Example</Button>
// Hasil: <a href="https://example.com" class="bg-[#ff623e] ...">Go to Example</a>

// 3. Dengan suffixClass (tambahan di akhir)
// <Button suffixClass="mx-2 hover:bg-red-500">Hover Me</Button>
// Hasil: <a href="#" class="bg-[#ff623e] ... mx-2 hover:bg-red-500">Hover Me</a>

// 4. Dengan prefixClass (tambahan di awal)
// <Button prefixClass="block w-full">Full Width</Button>
// Hasil: <a href="#" class="block w-full bg-[#ff623e] ...">Full Width</a>

// 5. Kombinasi semua props
// <Button href="#about" prefixClass="block" suffixClass="mx-4 hover:scale-105 transition">About Us</Button>

// Hasil:
// <a href="#about" class="block bg-[#ff623e] ... mx-4 hover:scale-105 transition">
//   About Us
// </a>
