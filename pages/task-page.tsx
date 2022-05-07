import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
import Layout from "../components/Layout";
import Task from "../components/Task";
import TaskForm from "../components/TaskForm";
import StateContextProvider from "../context/StateContext";
import { getAllTasksData } from "../lib/tasks";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`;

const taskPage = ({ staticFilterTasks }: any) => {
  const { data: tasks, mutate } = useSWR(apiUrl, fetcher, {
    fallbackData: staticFilterTasks,
  });

  const filteredTasks = tasks;

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StateContextProvider>
      <Layout title="Task page">
        <TaskForm taskCreated={mutate} />
        <ul>
          {filteredTasks &&
            filteredTasks.map((task: any) => (
              <Task key={task.id} task={task} taskDeleted={mutate} />
            ))}
        </ul>
        <Link href="/main-page" passHref>
          <div className="mt-12 flex cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
            <span>Back to main page</span>
          </div>
        </Link>
      </Layout>
    </StateContextProvider>
  );
};

export async function getStaticProps() {
  const staticFilterTasks = await getAllTasksData();

  return { props: { staticFilterTasks }, revalidate: 3 };
}

export default taskPage;
