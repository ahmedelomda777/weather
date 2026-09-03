import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; 

  const res = await fetch(`https://openweathermap.org/img/wn/${id}@2x.png`);
 
  if (!res.ok) {
    return new NextResponse(null, { status: res.status });
  }

  const buffer = await res.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": res.headers.get("Content-Type") || "image/png",
      "Cache-Control": "public, max-age=86400",
    },
  });
}