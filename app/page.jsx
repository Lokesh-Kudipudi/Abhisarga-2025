"use client";
import Hero from "@/components/heroSection/Hero";
import { usePreloadImages } from "@/constants/heroImages";
import { FloatingDock } from "@/components/heroSection/Nav";
import Loader from "@/components/utils/Loader";
import Sponsors from "@/components/sponsors/Sponsors";
// import Location from "@/components/location/Location";
import ImageCarousel from "@/components/proShows/ImageCarousel";

const Home = () => {
  const { isLoading, loadedImages } = usePreloadImages();

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 relative">
      {isLoading && (
        <div className="relative min-h-screen ">
          <Loader></Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <div className="top-[85vh] left-[50vw] z-[1001] -translate-x-1/2 fixed">
            <FloatingDock></FloatingDock>
          </div>
          <Hero products={loadedImages} />
          <ImageCarousel></ImageCarousel>
          <Sponsors></Sponsors>
          {/* <Location></Location> */}
        </>
      )}
    </div>
  );
};

export default Home;
