const disableScrolling = () => {
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
};

const enableScrolling = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
};

export { disableScrolling, enableScrolling };
