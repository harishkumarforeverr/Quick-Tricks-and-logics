// SessionExpiredModalUtils.js

// Function to show the SessionExpiredModal
export const showSessionExpiredModal = () => {
  const SessionExpiredModal = document.getElementById("SessionExpiredModal");
  if (SessionExpiredModal) {
    SessionExpiredModal.style.display = "block";
  }
};

// Function to hide the SessionExpiredModal
export const hideSessionExpiredModal = () => {
  const SessionExpiredModal = document.getElementById("SessionExpiredModal");
  if (SessionExpiredModal) {
    SessionExpiredModal.style.display = "none";
  }
};
