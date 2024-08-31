function Carousel({ children }: { children: React.ReactNode }) {
  const leftScroll = (e: any) => {
    if (e) {
      const scrollView = document.getElementById("carousel") as HTMLElement;
      if (scrollView) {
        const scrollPosition = scrollView.scrollLeft - 1552;
        console.log(scrollPosition);
        scrollView.scrollTo({
          behavior: "smooth",
          left: scrollPosition,
        });
      }
    }
  };
  const rightScroll = (e: any) => {
    if (e) {
      const scrollView = document.getElementById("carousel") as HTMLElement;
      if (scrollView) {
        const scrollPosition = scrollView.scrollLeft + 1552;
        console.log(scrollPosition);
        scrollView.scrollTo({
          behavior: "smooth",
          left: scrollPosition,
        });
      }
    }
  };
  return (
    <div className="relative w-full ">
      <div
        id="carousel"
        className="w-full h-40 overflow-auto flex gap-4 border-red-500 "
      >
        {/* <CarouselCard>hello</CarouselCard>
        <CarouselCard>hello</CarouselCard>
        <CarouselCard>hello</CarouselCard>
        <CarouselCard>hello</CarouselCard> */}
        {children}

        <button
          onClick={leftScroll}
          className="bg-red-200 px-1 py-0 h-6 text-center min-w-10 hover:shadow hover:bg-red-400 rounded-lg absolute   inset-y-1/3 left-0"
        >
          L
        </button>
        <button
          onClick={rightScroll}
          className="bg-red-200 px-1 py-0 h-6 text-center min-w-10 hover:shadow hover:bg-red-400 rounded-lg absolute   inset-y-1/3 right-0"
        >
          R
        </button>
      </div>
    </div>
  );
}

export default Carousel;
