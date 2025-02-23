import { NextResponse } from "next/server";

export interface Dashboard {
  id: number;
  name: string;
}

const dashboard: Dashboard = {
  id: 1,
  name: "hoge",
};

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async () => {
  await sleep(1000);
  return NextResponse.json(
    { dashboard },
    {
      status: 200,
    }
  );
};

export const dynamic = "force-dynamic";
