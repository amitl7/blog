import "../globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html>
      <body>
        <Header />
        
       <Banner />
        {children }
      </body>
    </html>
  );
}
