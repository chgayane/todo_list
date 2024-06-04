import React, { useContext } from "react";
import { CustomContext, ContextType, TaskContext } from "../App/App";
import SingleTask from "../SingleTask";
import Heading from "../ui/Heading";

const Tasks = () => {
  const Context = useContext(CustomContext);
  const taskContext = useContext(TaskContext);
  const { state } = Context as ContextType;

  return (
    <div>
      <Heading title="Tasks" />

      {state.tasks
        .filter((task) => {
          if (taskContext?.searchText === "") {
            return task;
          } else if (
            taskContext &&
            task.name.includes(taskContext?.searchText)
          ) {
            return task;
          }
        })
        .map((task) => {
          if (!state.important && !state.done) {
            return <SingleTask key={task.id} task={task} />;
          } else if (state.important && task.important) {
            return <SingleTask key={task.id} task={task} />;
          } else if (state.done && task.done) {
            return <SingleTask key={task.id} task={task} />;
          }
        })}
    </div>
  );
};

export default Tasks;
