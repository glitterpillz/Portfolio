// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ff3bba, 0 0 82px #ff3bba, 0 0 92px #ff3bba, 0 0 102px #ff3bba, 0 0 151px #ff3bba',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neonPink: '#ff3bba',
      },
    },
  },
plugins: [],
};
