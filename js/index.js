window.onload = () => {
  const infoBlocks = document.querySelectorAll(`.info`);

  const options = {
    root: null,
    rootMargin: `0px`,
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const block = entry.target;

        block.querySelector(`.info__background`).classList.add(`info__background--blur`);
        block.querySelector(`.info__content`).classList.add(`info__content--visible`);

        observer.unobserve(entry.target);
      }
    });
  }, options);

  infoBlocks.forEach((block) => {
    observer.observe(block);
  });
}
