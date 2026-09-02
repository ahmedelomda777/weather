export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-sky-100 to-sky-200 p-4">
      <main className="relative w-full max-w-sm animate-pulse rounded-3xl bg-white/70 p-8 shadow-xl backdrop-blur-md">
        <div className="absolute -top-6 right-6 h-12 w-37 rounded-md bg-slate-200" />

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="h-7 w-32 rounded-md bg-slate-200" />
            <div className="h-4 w-40 rounded-md bg-slate-200" />
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-15 w-15 rounded-full bg-slate-200" />
              <div className="h-14 w-20 rounded-md bg-slate-200" />
            </div>
            <div className="h-4 w-24 rounded-md bg-slate-200" />
          </div>

          <div className="flex gap-6">
            <div className="h-4 w-14 rounded-md bg-slate-200" />
            <div className="h-4 w-14 rounded-md bg-slate-200" />
          </div>
        </div>
      </main>
    </div>
  );
}