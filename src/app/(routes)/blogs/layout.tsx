/* USER INTERFACE | React Components  */
import Footer from "@/app/ui/footer";

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="container">
      <div className="m-3">
        <main>{children}</main>
        {/* BLOGS FOOTER */}
        <Footer />
      </div>
    </section>
  );
}