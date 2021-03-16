import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <main className="px-4 mx-auto my-14 max-w-7xl sm:px-6 lg:px-8">
        {children}
      </main>

      <Footer />
    </>
  );
}
