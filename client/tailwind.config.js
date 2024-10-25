/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'; // Import the Flowbite plugin
import tailwindScrollbar from 'tailwind-scrollbar'; // Import the tailwind-scrollbar plugin

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Fixed the path to use a single '*' for matching files
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Fixed the path to use a single '*' for matching files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin, // Use the imported Flowbite plugin
    tailwindScrollbar, // Use the imported scrollbar plugin
  ],
};
