import React from "react";

export default function Root(props) {
  const showNotification = () => {
    window.showToast("Sidebar action triggered");
  };

  return (
    <section>
      <button onClick={showNotification}>Show Toast from Sidebar</button>
    </section>
  );
}
