import { defaultHandler } from "ra-data-simple-prisma";
import prisma from "../../../../lib/prisma"
import { NextResponse } from "next/server";

const handler = async (req) => {
  const body = await req.json();
  const result = await defaultHandler(body, prisma);
  return NextResponse.json(result);
};

export { handler as GET, handler as POST };