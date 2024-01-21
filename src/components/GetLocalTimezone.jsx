import { useEffect, useState } from "react";

const GetLocalTimezone = () => {
  const [localTimezone, setLocalTimezone] = useState(null);

  useEffect(() => {
    const getTimezone = () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setLocalTimezone(timezone);
    };

    getTimezone();
  }, []);

  return (
    <div className="main-container">
      <div className="section-title">Get local timezone</div>
      <div className="inner-container">
        <div>{localTimezone}</div>{" "}
      </div>
    </div>
  );
};

export default GetLocalTimezone;
