window.onload = () => {
  const infoBlocks = document.querySelectorAll('.info');
  infoBlocks.forEach((item) => {
    item.querySelector('.info__background').classList.add('info__background--blur');
    item.querySelector('.info__content').classList.add('info__content--visible');
  });
};
