type DailyItemProps = {
  day: string;
  icon: string;
  highTemp: number;
  lowTemp: number;
  metric: boolean;
};

function DailyItem({ day, icon, highTemp, lowTemp }: DailyItemProps) {
  return (
    <div className="flex-1 flex flex-col gap-4 w-30 items-center bg-neutral-800 rounded-2xl p-4 mx-1">
      <p>{day}</p>
      <img className="w-24" src={icon} alt="" />
      <div className="flex w-full justify-between">
        <p>{lowTemp}&deg;</p>
        <p>{highTemp}&deg;</p>
      </div>
    </div>
  );
}

export default DailyItem;
