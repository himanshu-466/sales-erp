import React, { useState } from "react";
import "../index.css";
import CircularProgress from "@mui/material/CircularProgress";

const FailureView = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 10000);
  return (
    <div className="cmn_iconbtn ">
      <div>
        {loading ? (
          <CircularProgress color="primary" />
        ) : (
          <h3 className="colorPrimary">Failed to load due to server issue</h3>
        )}
      </div>
    </div>
  );
};

export default FailureView;
