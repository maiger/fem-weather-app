import WeatherIcon from "./WeatherIcon";

type HourlyItemProps = {
  hour: string;
  code: number;
  temp: number;
  metric: boolean;
};

function HourlyItem({ hour, code, temp }: HourlyItemProps) {
  return (
    <div className="flex justify-between items-center bg-neutral-700 p-3 rounded-xl">
      <div className="flex gap-4 items-center">
        <WeatherIcon code={code} size="small" />
        <p>{hour}</p>
      </div>
      <p>{temp}C</p>
    </div>
  );
}

export default HourlyItem;
