import DailyItem from "./DailyItem";

function Daily() {
  return (
    <div>
      <p>Daily forecast</p>
      <div className="flex mt-4 gap-1">
        <DailyItem day="Mon" icon="icon" highTemp={18} lowTemp={10} metric />
        <DailyItem day="Tue" icon="icon" highTemp={18} lowTemp={10} metric />
        <DailyItem day="Wed" icon="icon" highTemp={18} lowTemp={10} metric />
        <DailyItem day="Thu" icon="icon" highTemp={18} lowTemp={10} metric />
        <DailyItem day="Fri" icon="icon" highTemp={18} lowTemp={10} metric />
        <DailyItem day="Sat" icon="icon" highTemp={18} lowTemp={10} metric />
        <DailyItem day="Sun" icon="icon" highTemp={18} lowTemp={10} metric />
      </div>
    </div>
  );

  // <p>Daily forecast</p>
  // {/* Insert daily forecast for the next 7 days here  */}
}

export default Daily;
