import React, { useState } from "react";

const withPopup = (WrappedComponent, config = {}) => {
  return (props) => {
    const [isPopupOpen, setPopupOpen] = useState(true);

    const { backgroundColor = "white", opacity = 0.8 } = config;

    const closePopup = () => {
      setPopupOpen(false);
    };

    return (
      <React.Fragment>
        {isPopupOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: `rgba(0, 0, 0, ${opacity})`,
            }}
          >
            <div
              style={{ backgroundColor, padding: "20px", position: "relative" }}
            >
              <button
                onClick={closePopup}
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                X
              </button>
              <WrappedComponent {...props} />
            </div>
          </div>
        )}
        {!isPopupOpen && <WrappedComponent {...props} />}
      </React.Fragment>
    );
  };
};

export default withPopup;