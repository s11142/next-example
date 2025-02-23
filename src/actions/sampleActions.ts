"use server"; // このファイルに定義された非同期関数がServer Actionsとして認識されるようになる

export interface FormState {
  error: string;
}

export const createTask = async (
  taskId: number,
  prevState: FormState,
  formData: FormData
) => {
  // DBにタスクを作成
  console.log("タスクを作成しました");

  // formDataから具体的な値を取り出すには、getメソッドにinputタグのname属性で指定したキーを渡す
  console.log(formData.get("name"));

  console.log(`taskId: ${taskId}`);
  // Server Actionsでエラーが発生したと仮定.
  // useActionStateはcreateTaskの戻り値を自動的にstateに設定するため、stateを直接更新する必要はない.
  // prevState.error = "エラーが発生しました!"みたいなことはする必要がないということ↑
  return { error: "エラーが発生しました!" };
};
