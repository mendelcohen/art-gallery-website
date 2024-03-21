import { useState, useEffect } from "react";
import Header from "./desktop/header";
import Body from "./desktop/body";
import Footer from "./desktop/footer";
import MobileHeader from "./mobile/header";
import MobileBody from "./mobile/body";
import MobileFooter from "./mobile/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 376);
    };
    handleResize();
    setLoading(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return (
      <div className="h-[100vh] w-screen flex justify-center items-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      {isSmallScreen ? (
        <div>
          <MobileHeader />
          <MobileBody />
          <MobileFooter />
        </div>
      ) : (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      )}
    </main>
  );
}
