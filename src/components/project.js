import React from "react"
import Img from "gatsby-image"
import { Card, CardTitle, CardSubtitle, CardBody} from "reactstrap"

const Project = (props) => {
    return (
        <Card className="grow" onClick={props.onClick}>
            <CardBody>
                <Img fixed={props.project.frontmatter.mainImage.childImageSharp.fixed} alt={props.project.frontmatter.title} style={{borderRadius: "0.25rem", marginBottom: "1.05rem"}}/>
                <CardTitle tag="h5">{props.project.frontmatter.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.project.frontmatter.subtitle}</CardSubtitle>
            </CardBody>
        </Card>
    )
}


export default Project