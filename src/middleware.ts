import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("ミドルウェア");

  return NextResponse.next();
};

// 特定のページだけmiddlewareを使う場合、configを利用する
export const config = {
  matcher: ["/", "/task"], // /と/taskだけmiddlewareを適用する
};
