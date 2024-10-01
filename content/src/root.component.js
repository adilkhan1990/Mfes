import React from "react";

export default function Root(props) {
  const showNotification = () => {
    window.showToast("Content action triggered");
  };

  return (
    <section>
      <button onClick={showNotification}>Show Toast from Content</button>
    </section>
  );
}
