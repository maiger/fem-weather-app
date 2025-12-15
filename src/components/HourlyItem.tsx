type HourlyItemProps = {
  hour: string;
  icon: string;
  temp: number;
  metric: boolean;
};

function HourlyItem({ hour, icon, temp }: HourlyItemProps) {
  return (
    <div className="flex justify-between items-center bg-neutral-700 p-3 rounded-xl">
      <div className="flex gap-4 items-center">
        <img className="w-10" src={icon} alt="" />
        <p>{hour}</p>
      </div>
      <p>{temp}C</p>
    </div>
  );
}

export default HourlyItem;
