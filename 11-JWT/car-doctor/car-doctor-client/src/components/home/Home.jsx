import About from "../home/about/About";
import Banner from "../home/banner/Banner";
import Services from "../home/services/Services";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Banner />

      <About />

      <Services />
    </div>
  );
}
