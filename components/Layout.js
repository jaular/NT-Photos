import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container flex-grow px-4 mx-auto mt-8 md:mt-14 mb-14 max-w-7xl sm:px-6 lg:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
