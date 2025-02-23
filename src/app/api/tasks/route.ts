import { NextResponse } from "next/server";
export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  {
    id: 1,
    name: "プログラミング",
  },
  {
    id: 2,
    name: "ランニング",
  },
];

// 関数名はHTTPメソッドと対応させる. GET, POST, DELETEなど..
export const GET = async () => {
  return NextResponse.json(
    { tasks },
    {
      status: 200,
    }
  );
};

// Route Handler はデフォルトでは、ビルド時に静的な要素としてビルドされるため、ビルド時に取得するデータが決まってしまう。
// そのため、データの更新頻度が高いアプリケーションの場合は、以下のように記載して、リクエストごと動的にデータを取得するように変更する
export const dynamic = "force-dynamic";
