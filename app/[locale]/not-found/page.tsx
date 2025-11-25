// // 404 Page
// export default function NotFound() {
//   return <div>404 - Page Not Found</div>;
// }


////////////////////////////////////////////////////////
// /app/[locale]/not-found.js

// Define the locales you support
const locales = ['en']; // <-- **Adjust this array to match your actual locales**

// 1. Export the generateStaticParams function
export async function generateStaticParams() {
  // 2. Return an array of objects, one for each locale
  return locales.map((locale) => ({
    locale: locale,
  }));
}

// 404 Page (your existing component)
export default function NotFound() {
  return <div>404 - Page Not Found</div>;
}
