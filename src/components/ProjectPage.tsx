import { Card, Nav } from "react-bootstrap";
import { Project } from "../util/types";
import { TITLE, BODY } from "../data/style"

function ProjectPage(props : {project: Project}){
  return (
  <div className={props.project.id} style={{textAlign:'left'}}>
    <p style={TITLE}>
      {props.project.name}
    </p>
    <p style={BODY}>
      {props.project.fullDescription}
    </p>
  </div>
  )
}

export default ProjectPage;