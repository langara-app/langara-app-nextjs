import fetch from "node-fetch";

export async function getHomeData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=29bb16926eb538df82bf182f6f62f42f&units=metric"
  );

  return JSON.parse(JSON.stringify(res));
}
