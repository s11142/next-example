"use server"; // このファイルに定義された非同期関数がServer Actionsとして認識されるようになる

export const createTask = async (taskId: number, formData: FormData) => {
  // DBにタスクを作成
  console.log("タスクを作成しました");

  // formDataから具体的な値を取り出すには、getメソッドにinputタグのname属性で指定したキーを渡す
  console.log(formData.get("name"));

  console.log(`taskId: ${taskId}`);
};
