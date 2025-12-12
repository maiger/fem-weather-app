function Hourly() {
  return (
    <div className="bg-neutral-800 p-4 rounded-2xl w-80">
      <div className="flex justify-between items-center gap-2 mb-4">
        <p>Hourly Forecast</p>
        <p className="bg-neutral-600 px-4 py-2 rounded-xl">Tuesday</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between bg-neutral-700 p-3 rounded-xl">
          <div className="flex gap-4">
            <p>Icon</p>
            <p>2 PM</p>
          </div>
          <p>20C</p>
        </div>
        <div className="flex justify-between bg-neutral-700 p-3 rounded-xl">
          <div className="flex gap-4">
            <p>Icon</p>
            <p>3 PM</p>
          </div>
          <p>20C</p>
        </div>
        <div className="flex justify-between bg-neutral-700 p-3 rounded-xl">
          <div className="flex gap-4">
            <p>Icon</p>
            <p>4 PM</p>
          </div>
          <p>20C</p>
        </div>
        <div className="flex justify-between bg-neutral-700 p-3 rounded-xl">
          <div className="flex gap-4">
            <p>Icon</p>
            <p>5 PM</p>
          </div>
          <p>20C</p>
        </div>
        <div className="flex justify-between bg-neutral-700 p-3 rounded-xl">
          <div className="flex gap-4">
            <p>Icon</p>
            <p>6 PM</p>
          </div>
          <p>20C</p>
        </div>
        <div className="flex justify-between bg-neutral-700 p-3 rounded-xl">
          <div className="flex gap-4">
            <p>Icon</p>
            <p>7 PM</p>
          </div>
          <p>20C</p>
        </div>
        <div className="flex justify-between bg-neutral-700 p-3 rounded-xl">
          <div className="flex gap-4">
            <p>Icon</p>
            <p>8 PM</p>
          </div>
          <p>20C</p>
        </div>
        <div className="flex justify-between bg-neutral-700 p-3 rounded-xl">
          <div className="flex gap-4">
            <p>Icon</p>
            <p>9 PM</p>
          </div>
          <p>20C</p>
        </div>
      </div>
    </div>
  );

  // <p>Hourly forecast</p>
  // {/* Insert hourly forecast for the selected day here  */}
}

export default Hourly;
