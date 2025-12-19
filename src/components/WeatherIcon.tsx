import sunny from "../assets/images/icon-sunny.webp";
import overcast from "../assets/images/icon-overcast.webp";
import partlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import fog from "../assets/images/icon-fog.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import rain from "../assets/images/icon-rain.webp";
import snow from "../assets/images/icon-snow.webp";
import storm from "../assets/images/icon-storm.webp";

type codeToIconMapType = {
  [key: number]: { icon: string; altText: string };
};

const codeToIconMap: codeToIconMapType = {
  0: { icon: sunny, altText: "Sunny" },
  1: { icon: partlyCloudy, altText: "Mainly clear" },
  2: { icon: partlyCloudy, altText: "Partly cloudy" },
  3: { icon: overcast, altText: "Overcast" },
  45: { icon: fog, altText: "Fog" },
  48: { icon: fog, altText: "Rime fog" },
  51: { icon: drizzle, altText: "Light drizzle" },
  53: { icon: drizzle, altText: "Moderate drizzle" },
  55: { icon: drizzle, altText: "Dense drizzle" },
  56: { icon: drizzle, altText: "Light freezing drizzle" },
  57: { icon: drizzle, altText: "Dense freezing drizzle" },
  61: { icon: rain, altText: "Slight rain" },
  63: { icon: rain, altText: "Moderate rain" },
  65: { icon: rain, altText: "Heavy rain" },
  66: { icon: rain, altText: "Light freezing rain" },
  67: { icon: rain, altText: "Heavy freezing rain" },
  71: { icon: snow, altText: "Slight snowfall" },
  73: { icon: snow, altText: "Moderate snowfall" },
  75: { icon: snow, altText: "Heavy snowfall" },
  77: { icon: snow, altText: "Snow grains" },
  80: { icon: rain, altText: "Slight rain showers" },
  81: { icon: rain, altText: "Moderate rain showers" },
  82: { icon: rain, altText: "Violent rain showers" },
  85: { icon: snow, altText: "Slight snow showers" },
  86: { icon: snow, altText: "Heavy snow showers" },
  95: { icon: storm, altText: "Thunderstorm" },
  96: { icon: storm, altText: "Thunderstorm with slight hail" },
  99: { icon: storm, altText: "Thunderstorm with heavy hail" },
};

const sizeClasses = {
  small: "w-10",
  medium: "w-20",
  large: "w-30",
};

type WeatherIconProps = {
  code: keyof codeToIconMapType;
  size: keyof typeof sizeClasses;
};

function WeatherIcon({ code, size }: WeatherIconProps) {
  const icon = codeToIconMap[code]?.icon || sunny;
  const altText = codeToIconMap[code]?.altText || "Unknown Weather";

  return (
    <img
      src={icon}
      alt={altText}
      className={sizeClasses[size]}
      loading="lazy"
    />
  );
}

export default WeatherIcon;
