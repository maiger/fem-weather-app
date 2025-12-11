import logo from "../assets/images/logo.svg";

function Banner() {
  return (
    <div className="w-full flex justify-between items-center p-4">
      <img src={logo} alt="Weather Now Logo" />
      <p>Units</p>
    </div>
  );
  // <p>Units</p>

  // <p>Switch to Imperial/Metric</p>

  // <p>Temperature</p>

  // <p>Celsius (°C)</p>
  // <p>Fahrenheit (°F)</p>

  // <p>Wind Speed</p>

  // <p>km/h</p>
  // <p>mph</p>

  // <p>Precipitation</p>

  // <p>Millimeters (mm)</p>
  // <p>Inches (in)</p>
}

export default Banner;
