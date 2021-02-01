import React, {useState} from "react"
import Project from "./project"
import CarouselComponent from "./carousel_component"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProjectModal = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Project project = {props.project} onClick={toggle}/>
            <Modal isOpen={modal} toggle={toggle} contentClassName="modal-class">
                <CarouselComponent project={props.project}/>
                <ModalHeader tag="h5" toggle={toggle}>
                    {props.project.frontmatter.title}<br></br>
                    <h6 className="mb-2 text-muted">{props.project.frontmatter.subtitle}</h6>
                </ModalHeader>
                <ModalBody dangerouslySetInnerHTML={{__html: props.project.html}}/>
                <ModalFooter>
                <Button outline color="secondary" href={props.project.frontmatter.link} target="_blank">Check it out!</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    )
}


export default ProjectModal