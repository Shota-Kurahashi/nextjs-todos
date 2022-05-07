import axios from "axios";

export async function getAllTasksData() {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
  );

  const posts = await res.data;
  const staticFilterTasks = posts.reverse();

  return staticFilterTasks;
}

export async function getAllTaskIds() {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
  );

  const tasks = await res.data;

  return tasks.map((task: any) => {
    return { params: { id: String(task.id) } };
  });
}

export async function getTaskData(id: string) {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}`
  );

  const task = await res.data;

  return task;
}
