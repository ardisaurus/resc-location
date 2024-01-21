import { useEffect, useState } from "react";
import moment from "moment-timezone";
import "./style.css";

const GetLocalTimezoneWithMoment = () => {
  const [localTimezone, setLocalTimezone] = useState(null);

  useEffect(() => {
    const getLocalMomentTimezone = () => {
      setLocalTimezone(moment.tz.guess());
    };

    getLocalMomentTimezone();
  }, []);

  return (
    <div className="main-container">
      <div className="section-title">Get local timezone with moment-js</div>
      <div className="inner-container">
        <div>{localTimezone}</div>
      </div>
    </div>
  );
};

export default GetLocalTimezoneWithMoment;
