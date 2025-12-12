type HourlyItemProps = {
  hour: string;
  icon: string;
  temp: number;
  metric: boolean;
};

function HourlyItem({ hour, icon, temp }: HourlyItemProps) {
  return (
    <div className="flex justify-between bg-neutral-700 p-3 rounded-xl">
      <div className="flex gap-4">
        <p>{icon}</p>
        <p>{hour}</p>
      </div>
      <p>{temp}C</p>
    </div>
  );
}

export default HourlyItem;
