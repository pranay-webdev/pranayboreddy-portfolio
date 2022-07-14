export const scrollToView = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView();
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
