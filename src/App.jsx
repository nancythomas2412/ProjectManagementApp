import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProjects(){
    setProjectsState(prevState=> {
      return{
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return{
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  console.log(projectsState);
  
  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject}/>
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProjects}/>;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProjects}/>
      {content}
    </main>
  );
}

export default App;
