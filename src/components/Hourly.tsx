import HourlyItem from "./HourlyItem";

function Hourly() {
  return (
    <div className="bg-neutral-800 p-4 rounded-2xl w-80 h-150 overflow-y-auto">
      <div className="flex justify-between items-center gap-2 mb-4">
        <p>Hourly Forecast</p>
        <p className="bg-neutral-600 px-4 py-2 rounded-xl">Tuesday</p>
      </div>
      <div className="flex flex-col gap-3">
        <HourlyItem hour="1 AM" icon="Icon" temp={15} metric={true} />
        <HourlyItem hour="2 AM" icon="Icon" temp={14} metric={true} />
        <HourlyItem hour="3 AM" icon="Icon" temp={13} metric={true} />
        <HourlyItem hour="4 AM" icon="Icon" temp={13} metric={true} />
        <HourlyItem hour="5 AM" icon="Icon" temp={12} metric={true} />
        <HourlyItem hour="6 AM" icon="Icon" temp={12} metric={true} />
        <HourlyItem hour="7 AM" icon="Icon" temp={13} metric={true} />
        <HourlyItem hour="8 AM" icon="Icon" temp={14} metric={true} />
        <HourlyItem hour="9 AM" icon="Icon" temp={16} metric={true} />
      </div>
    </div>
  );

  // <p>Hourly forecast</p>
  // {/* Insert hourly forecast for the selected day here  */}
}

export default Hourly;
