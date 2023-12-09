import React from 'react';
import { Button, Card, Nav, Stack } from 'react-bootstrap';
import ProjectTile from '../components/ProjectTile';
import { Project } from '../util/types';
import { PROJECTS } from '../util/common'

function ProjectSelect(){
  return (
    <div className="Project Select">
      <Stack gap={3}>
        {
          PROJECTS.map((p : Project) => {
            return (
              <ProjectTile project={p}/>
            )
          })
        }
      </Stack>
    </div>
  )
}

export default ProjectSelect;