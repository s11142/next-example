"use client";

import { createTask, FormState } from "@/actions/sampleActions";
import { useActionState } from "react";

const ServerActionsPage = () => {
  const taskId = 1;
  //taskIdを引数に含む新しい関数を作成. Server Actions側で定義した第一引数と紐付けている
  const createTaskWithTaskId = createTask.bind(null, taskId);
  const initialState: FormState = { error: "" };
  // state: Server Actionsの戻り値, formAction: Server Actionsと同じ動きをする関数
  const [state, formAction, isPending] = useActionState(
    createTaskWithTaskId,
    initialState
  );
  return (
    <div>
      <form action={formAction}>
        <input type="text" id="name" name="name" className="bg-gray-200" />
        <button
          type="submit"
          className={"bg-gray-400 ml-2 px-2 disabled:bg-gray-300"} // disabledがtrue(非活性)時だけ、bg-gray-300が有効
          disabled={isPending}
        >
          送信
        </button>
        <div>{isPending ? "isLoading..." : state.error}</div>
      </form>
    </div>
  );
};

export default ServerActionsPage;
