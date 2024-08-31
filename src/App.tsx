import Button from "./components/button";
import Carousel from "./components/carousel";
import CarouselCard from "./components/carouselCard";
import ModalComponent from "./components/modal";

function App({
  icon,
  label,
  children,
}: {
  icon?: any;
  label?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <div className="App text-center h-auto  flex gap-10 mt-20 place-content-center place-items-center">
        {/* <ModalComponent icon={icon} label={label}>
          {children}
        </ModalComponent>
        <Button color="bg-red-600">Click</Button> */}
        <Carousel>
          <CarouselCard>ascghajvcs</CarouselCard>
          <CarouselCard>ascghajvcs</CarouselCard>
          <CarouselCard>ascghajvcs</CarouselCard>
          <CarouselCard>ascghajvcs</CarouselCard>
        </Carousel>

      </div>
      <div>ajkscbha</div>
    </>
  );
}

export default App;
