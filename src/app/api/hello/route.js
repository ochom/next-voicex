import { NextResponse } from "next/server";

export const GET = (req, res) => {
  const name = req.query?.name || "World";
  return NextResponse.json({ text: `Hello ${name}` }, { status: 200 });
};

export const POST = async (req, res) => {
  const data = await JSON.parse(req.body);
  return NextResponse.json({ text: `Hello ${data.name}` }, { status: 200 });
};
