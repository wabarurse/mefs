import "./-styles/index.css";
import NavigationBar from "./-components/header";
import Footer from "./-components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <body>
        <div className="bg-color flex flex-col min-h-screen">
          <NavigationBar />

        
          <main className="flex-grow pt-20 px-20 pb-20">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
