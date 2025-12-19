import WeatherIcon from "./WeatherIcon";

function Current() {
  return (
    <div>
      <div className="current-bg flex flex-col md:flex-row justify-between items-center p-6 rounded-2xl h-65">
        <div>
          <p className="text-2xl font-bold">Current Location</p>
          <p>DateTime</p>
        </div>
        <div className="flex items-center">
          <WeatherIcon code={0} size="large" />
          <p className="text-8xl font-bold">20&deg;</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-6">
        <div className="bg-neutral-800 flex-1 p-6 rounded-2xl min-w-40 h-30">
          <p>Feels like</p>
          <p className="text-3xl mt-4">18c&deg;</p>
        </div>
        <div className="bg-neutral-800 flex-1 p-6 rounded-2xl min-w-40 h-30">
          <p>Humidity</p>
          <p className="text-3xl mt-4">46%</p>
        </div>
        <div className="bg-neutral-800 flex-1 p-6 rounded-2xl min-w-40 h-30">
          <p>Wind</p>
          <p className="text-3xl mt-4">14 km/h</p>
        </div>
        <div className="bg-neutral-800 flex-1 p-6 rounded-2xl min-w-40 h-30">
          <p>Precipitation</p>
          <p className="text-3xl mt-4">0 mm</p>
        </div>
      </div>
    </div>
  );

  // <p>Feels like</p>
  // {/* Insert temperature here  */}

  // <p>Humidity</p>
  // {/* Insert humidity here  */}

  // <p>Wind</p>
  // {/* Insert wind here     */}

  // <p>Precipitation</p>
  // {/* Insert precipitation here  */}
}

export default Current;
