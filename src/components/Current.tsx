function Current() {
  return (
    <div>
      <div className="current-bg flex justify-between items-center p-6 rounded-2xl">
        <div>
          <p>Current Location</p>
          <p>DateTime</p>
        </div>
        <div className="flex">
          <p>Weather Icon</p>
          <p>20C</p>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="bg-neutral-800 flex-1 p-4 rounded-2xl">
          <p>Feels like</p>
          <p>18c</p>
        </div>
        <div className="bg-neutral-800 flex-1 p-4 rounded-2xl">
          <p>Humidity</p>
          <p>46%</p>
        </div>
        <div className="bg-neutral-800 flex-1 p-4 rounded-2xl">
          <p>Wind</p>
          <p>14 km/h</p>
        </div>
        <div className="bg-neutral-800 flex-1 p-4 rounded-2xl">
          <p>Precipitation</p>
          <p>0 mm</p>
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
