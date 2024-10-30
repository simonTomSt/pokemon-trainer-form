export async function GET() {
  const res = await fetch(
    `${process.env.TIME_API_URL}/Time/current/zone?timeZone=Europe/Warsaw`
  );
  const data = await res.json();

  return Response.json(data);
}
