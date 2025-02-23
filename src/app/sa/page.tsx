import { createTask } from "@/actions/sampleActions";

const ServerActionsPage = () => {
  const taskId = 1;
  //taskIdを引数に含む新しい関数を作成. Server Actions側で定義した第一引数と紐付けている
  const createTaskWithTaskId = createTask.bind(null, taskId);
  return (
    <div>
      <form action={createTaskWithTaskId}>
        <input type="text" id="name" name="name" className="bg-gray-200" />
        <button type="submit" className="bg-gray-400 ml-2">
          送信
        </button>
      </form>
    </div>
  );
};

export default ServerActionsPage;
