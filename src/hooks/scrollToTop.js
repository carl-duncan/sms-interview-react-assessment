function scrollToTop (scrollContainerRef) {
  if (scrollContainerRef.current) {
    const scrollContainer = scrollContainerRef.current;
    const scrollDuration = 200;
    const scrollStep = -scrollContainer.scrollTop / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollTop !== 0) {
        scrollContainer.scrollTop += scrollStep;
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
}

export default scrollToTop;