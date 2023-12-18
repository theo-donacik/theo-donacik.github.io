import { Card, Carousel, Nav, Image } from "react-bootstrap";
import { Project } from "../util/types";
import { CAROUSEL_IMAGE, PAGE_TITLE, PAGE_BODY, TILE_IMAGE } from "../data/style"

function ProjectPage(props : {project: Project}){
  return (
  <div>
    <p style={PAGE_TITLE}>
      {props.project.name}
    </p>
    <div>
    {
      props.project.demoLink ? 
        <a href={props.project.demoLink} target="_blank" rel="noopener noreferrer">
          <p style={PAGE_BODY}>
            Check it out!
          </p>
        </a>
        :
        <></>
    }
    </div>
    <Carousel variant="dark" interval={null}>
      {
          props.project.carouselImages.map((img : string) => {
            return (
              <Carousel.Item>
                <img style={CAROUSEL_IMAGE} src={img} height="400"/>
              </Carousel.Item>
            )
          })
      }
    </Carousel>
    <p style={PAGE_BODY}>
      {props.project.fullDescription}
    </p>
  </div>
  )
}

export default ProjectPage;