import WeatherIcon from "./WeatherIcon";

type DailyItemProps = {
  day: string;
  code: number;
  highTemp: number;
  lowTemp: number;
  metric: boolean;
};

function DailyItem({ day, code, highTemp, lowTemp }: DailyItemProps) {
  return (
    <div className="flex-1 flex flex-col gap-4 min-w-24 max-w-24 items-center bg-neutral-800 rounded-2xl p-4 mx-1">
      <p>{day}</p>
      <WeatherIcon code={code} size="medium" />
      <div className="flex w-full justify-between">
        <p>{lowTemp}&deg;</p>
        <p>{highTemp}&deg;</p>
      </div>
    </div>
  );
}

export default DailyItem;
