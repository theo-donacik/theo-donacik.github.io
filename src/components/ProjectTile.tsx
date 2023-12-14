import { Card, Nav, Image, Container, Row, Col } from "react-bootstrap";
import { Project } from "../util/types";
import { TILE_BODY, TILE_TITLE, TILE_IMAGE } from '../data/style';
import '../index.css'

function ProjectTile(props : {project: Project}){
  return (
    <div className="Project Tile" style = {{padding:'20px 20px 0 20px'}}>
      <a href={"/projects/" + props.project.id} style={{textDecoration: 'none'}}>
      <Card style={{ width: '80' }}>
        <Container>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title style={TILE_TITLE}>
                  {props.project.name}
                </Card.Title>
                <Card.Text style={TILE_BODY}>
                  {props.project.shortDescription}
                  <br/><br/>
                  {props.project.date}
                </Card.Text>
              </Card.Body>
            </Col>
            <Col style={{display: "flex", flexDirection: "row", alignItems: "right", justifyContent: "right",}}>
              <Image style={TILE_IMAGE} src={props.project.tileImage} width="200" height="200"/>
            </Col>
          </Row>
        </Container>        
      </Card>
      </a>
    </div>
  )
}

export default ProjectTile;