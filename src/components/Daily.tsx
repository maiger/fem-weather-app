import iSunny from "../assets/images/icon-sunny.webp";

import DailyItem from "./DailyItem";

function Daily() {
  return (
    <div>
      <p>Daily forecast</p>
      <div className="flex flex-wrap justify-center mt-4 gap-1">
        <DailyItem day="Mon" icon={iSunny} highTemp={18} lowTemp={10} metric />
        <DailyItem day="Tue" icon={iSunny} highTemp={18} lowTemp={10} metric />
        <DailyItem day="Wed" icon={iSunny} highTemp={18} lowTemp={10} metric />
        <DailyItem day="Thu" icon={iSunny} highTemp={18} lowTemp={10} metric />
        <DailyItem day="Fri" icon={iSunny} highTemp={18} lowTemp={10} metric />
        <DailyItem day="Sat" icon={iSunny} highTemp={18} lowTemp={10} metric />
        <DailyItem day="Sun" icon={iSunny} highTemp={18} lowTemp={10} metric />
      </div>
    </div>
  );

  // <p>Daily forecast</p>
  // {/* Insert daily forecast for the next 7 days here  */}
}

export default Daily;
