import Image from "next/image";
import cloud from "@/assets/cloud.png"
export default async function Home() {
  let data;
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=31.04&lon=31.38&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`,
    {cache:"no-store"});
    data = await res.json();
  } catch (err) {
    console.log(err);
  }

  if (!data || !data.weather) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">something went wrong!</p>
        <p className="text-gray-500">try again</p>
      </div>
    );
  }

  const date = new Intl.DateTimeFormat("en-UG", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-sky-100 to-sky-200 p-4">
      <main className="relative w-full max-w-sm rounded-3xl bg-white/70 p-8 shadow-xl backdrop-blur-md">
        <Image
          className="pointer-events-none absolute -top-6 right-6 opacity-90"
          src={cloud}
          alt="cloud image"
          width={150}
          height={50}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">{data.name}</h1>
            <p className="mt-1 text-sm text-slate-500">{date}</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Image
                src={`/api/${data.weather[0].icon}`}
                alt={data.weather[0].description}
                width={60}
                height={60}
              />
              <h1 className="text-6xl font-extrabold text-slate-800">
                {Math.round(data.main.temp)}°
              </h1>
            </div>

            <p className="capitalize text-slate-600">
              {data.weather[0].description}
            </p>

            <div className="mt-4 flex gap-6 text-sm text-slate-600">
              <p>
                max:
                <span className="font-semibold text-slate-800">
                  {Math.round(data.main.temp_max)}°
                </span>
              </p>
              <p>
                min:
                <span className="font-semibold text-slate-800">
                  {Math.round(data.main.temp_min)}°
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
