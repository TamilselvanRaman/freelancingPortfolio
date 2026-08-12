import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
