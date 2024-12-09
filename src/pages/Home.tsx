import React from 'react';
import {Accordion, Badge, Col, Container, Image, Nav, Row, Stack} from 'react-bootstrap';
import { DESCRIPTION, PAGE_BODY, PAGE_TITLE, SUBHEADDING } from '../data/style';

function Home(){
  return (
    <div>
      <header style={PAGE_TITLE}>
        <p style={{display:"flex", alignSelf:"center"}}>Theo Donacik</p>
        <Image src="/img/me.jpg" width="100" height="100" roundedCircle/>
      </header>
      <Container fluid style={PAGE_BODY}>
        <Row>
          <Col>
            <p>
              I'm Theo, a 4th year student at Northeastern University pursuing a BS
              in Computer Science with a minor in Computer Engineering. I have a lot
              of passion for computing, from consumer electronics to web development 
              to low level programming and operating systems.  
            </p>
          </Col>
        </Row>
        <Row>
          <p>
            Check out my&nbsp;
            <a href="/projects">projects</a>
            &nbsp;or take a look at my&nbsp;
            <a href="/resume">resume</a>!
          </p>
        </Row>
        <Row xs="auto">
          <p style={SUBHEADDING}>
            Work Experience
          </p>
        </Row>
        <Row>
          <Accordion>
          <Accordion.Item eventKey="0">
              <Accordion.Header>
                <b style={{color: '#1C49C2'}}>Chewy</b>&nbsp;| Software Engineer Co-op (June 2024 - December 2024)
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  <p style={DESCRIPTION}>
                    Technologies Utilized: React, Kotlin, Python, Jenkins, Apache Airflow, PostgreSQL, GitHub                  </p>
                  <ul>
                    <li>
                      I worked on Chewy's Rebates team, working on a new platform for managing B2B
                      rebates. Rebates make up $1.9B of Chewy's overall business, with this new platform
                      saving on both licensing cost over the existing 3rd party solution and by ensuring
                      all deals with vendors are fully applied to orders. 
                    </li>
                    <li>
                      I worked on the platform's React frontend, Kotlin API with Spring, 
                      Apache Airflow for automation in the data platform, and a PostgreSQL
                      database. I worked on several UI and API features and bugfixes, addressing planned enhancements 
                      as well as bugs reported by users. I also worked in the Airflow platform, 
                      fixing bugs in data processing jobs and addressing quality issues in the database.
                    </li>
                    <li>
                      To help address potential data quality issues in the database, I designed 
                      and implemented an Airfow job for detecting these issues and sending notifications
                      to the team through Slack. Several alerts were implemented in production and
                      developers were able to identify and address several data issues. 
                      By notifying the team of these issues, more deals can be properly applied 
                      to products and accounting of accruals can be made more accurate.
                    </li>
                    <li>
                      I was able to learn about all parts of the software development stack
                      and aid my team with meaningful contributions to feature set and 
                      accuracy of the platform.
                    </li>
                  </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <b style={{color: '#7F187F'}}>Wayfair</b>&nbsp;| Software Engineer Co-op (July 2023 - December 2023)
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  <p style={DESCRIPTION}>
                    Technologies Utilized: React, Java, Kubernetes, Buildkite, PostgreSQL, Docker, 
                    Terraform, GCP, Striim, Git  
                  </p>
                  <ul>
                    <li>
                      At Wayfair I worked on a team with several full time engineers to support and develop for
                      the company's Jira platform for project and support ticketing
                    </li>
                    <li>
                      For my first project, I created a Jira ticket view application with a ReactJS
                      frontend and Java Spring backend which made calls to the Jira API to retrieve
                      ticket data. I gained experience working with Wayfair's code review and 
                      deployment systems as well as web development, something I've experimented 
                      with on my own, in a professional setting
                    </li>
                    <li>
                      The next project I worked on was to investigate and then begin the process of
                      migrating our project ticketing Jira database from Microsoft SQL Server to 
                      PostgreSQL. This Jira application has a very large database containing thousands
                      of tables and was used daily by almost every engineering team at the company. 
                      I investigated Wayfair's existing documentation for database migration and 
                      adapted it for our team. I put my findings and recommended course of action 
                      into a presentation which I gave to the more senior engineers on the team, 
                      then with their feedback began working on the migration
                    </li>
                    <li>
                      For the migration of our dev, staging, and production databases, I worked with 
                      and led the direction of a small team based on my research. We used Terraform 
                      to create the databases in Google Cloud Platforms and modified the Kubernetes 
                      configuration to support a new Jira instance. I created a set of Python scripts 
                      and SQL queries to analyze the database and prepare it for migration which was done 
                      using Striim's Change Data Capture pipeline to ensure minimal downtime
                    </li>
                  </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <b style={{color: '#C8102E'}}>Northeastern MIE</b>&nbsp;| Technical Assistant (September 2021 - May 2023)
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  <ul>
                    <li>
                      I maintained this work-study job while attending classes at Northeastern
                    </li>
                    <li>
                      I repaired computers within the Mechanical Engineering department, diagnosing, 
                      troubleshooting, and resolving both hardware and software issues on desktops 
                      and laptops
                    </li>
                    <li>
                      I was able to tap into my enthusiasm for computers by helping others and 
                      walking them through solutions to their problems
                    </li>
                  </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
        <Row style={{padding:"20px 0 0 0"}} xs="auto">
          <p style={SUBHEADDING}>
            More About Me
          </p>
        </Row>
        <Row>
          <p>
            As a Northeastern student, some of my favorite courses have been Networks and Distributed
            Systems and Intro to Cybersecurity which introduced me to networking and 
             the design behind the internet. While I have experience creating websites
            (I'm doing it right now!), the infrastructure behind the web is just as
            interesting. I've engaged in projects where I not only create websites but
            host them and allow them to interact with other services or other devices on the 
            network. I was also able to explore this as a software engineering co-op at
            Wayfair where my main project involved working on some of the company's 
            internal web tools and their data storage infrastructure.
          </p>
        </Row>
        <Row>
          <p>
            I'm also personally fascinated by lower level computation and operating
            systems. In my Computer Systems class, we explored memory management,
            file systems, shells, and all the other components that make up an 
            operating system. I was able to get even lower in my Digital Design
            class where I learned all about the low level electrical design of a
            CPU and computer architecture, culminating in the design of a 16-bit RISC-V 
            CPU running on an FPGA! I love learning how parts of a computer work
            to come together, whether in class or at home, where I run hobbyist DIY
            operating systems on my personal computer and get to dig into every 
            aspect of the system.
          </p>
        </Row>
        <Row style={{padding:"20px 0 20px 0"}} xs="auto">
          <Stack direction="horizontal" gap={2} style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
              <Badge style={SUBHEADDING} bg="success">Languages,</Badge>
              <Badge style={SUBHEADDING} bg="primary">Technologies,</Badge>
              <Badge style={SUBHEADDING} bg="light" text="dark">and</Badge>
              <Badge style={SUBHEADDING} bg="danger">Interests</Badge>
          </Stack>
        </Row>
        <Row>
          <Stack  direction="horizontal" gap={3} style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
            <h2><Badge bg="success">React</Badge></h2>
            <h2><Badge bg="success">Javascript/Typescript</Badge></h2>
            <h2><Badge bg="success">Java</Badge></h2>
            <h2><Badge bg="success">Python</Badge></h2>
            <h2><Badge bg="success">SQL</Badge></h2>
            <h2><Badge bg="success">PHP</Badge></h2>
            <h2><Badge bg="success">HTML</Badge></h2>
            <h2><Badge bg="success">BASH</Badge></h2>
            <h2><Badge bg="success">Verilog</Badge></h2>
            <h2><Badge bg="success">C</Badge></h2>
            <h2><Badge bg="success">RISC-V/x86 ASM</Badge></h2>

            <h2><Badge bg="primary">Git</Badge></h2>
            <h2><Badge bg="primary">Docker</Badge></h2>
            <h2><Badge bg="primary">Kubernetes</Badge></h2>
            <h2><Badge bg="primary">Linux</Badge></h2>
            <h2><Badge bg="primary">Buildkite</Badge></h2>
            <h2><Badge bg="primary">Terraform</Badge></h2>
            <h2><Badge bg="primary">GNU Utils</Badge></h2>
            <h2><Badge bg="primary">Apache</Badge></h2>

            <h2><Badge bg="danger">FOSS</Badge></h2>
            <h2><Badge bg="danger">Desktop Linux</Badge></h2>
            <h2><Badge bg="danger">Cooking</Badge></h2>
            <h2><Badge bg="danger">Board games</Badge></h2>
            <h2><Badge bg="danger">Running</Badge></h2>
          </Stack>
        </Row>
      </Container>
    </div>
  )
}

export default Home;