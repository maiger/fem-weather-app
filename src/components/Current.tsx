function Current() {
  return (
    <div>
      <div className="current-bg flex justify-between items-center p-6 rounded-2xl h-65">
        <div>
          <p className="text-2xl font-bold">Current Location</p>
          <p>DateTime</p>
        </div>
        <div className="flex items-center">
          <p>Weather Icon</p>
          <p className="text-6xl font-bold">20C</p>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <div className="bg-neutral-800 flex-1 p-4 rounded-2xl h-25">
          <p>Feels like</p>
          <p className="text-2xl">18c&deg;</p>
        </div>
        <div className="bg-neutral-800 flex-1 p-4 rounded-2xl h-25">
          <p>Humidity</p>
          <p className="text-2xl">46%</p>
        </div>
        <div className="bg-neutral-800 flex-1 p-4 rounded-2xl h-25">
          <p>Wind</p>
          <p className="text-2xl">14 km/h</p>
        </div>
        <div className="bg-neutral-800 flex-1 p-4 rounded-2xl h-25">
          <p>Precipitation</p>
          <p className="text-2xl">0 mm</p>
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
