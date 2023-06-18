// loaderUtils.js

// Function to show the loader
export const showLoader = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "block";
  }
};

// Function to hide the loader
export const hideLoader = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};
