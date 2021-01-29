import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import { Card, CardBody, CardSubtitle, CardTitle, CardText} from 'reactstrap';


const About = () => {

    const data = useStaticQuery(graphql`
        query {
            profileImage: file(relativePath: { eq: "profile_picture.jpeg" }) {
                childImageSharp {
                    fixed(width: 250, height: 300) {
                        ...GatsbyImageSharpFixed
                      }
                }
            }
            aboutInfo: markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
                html
                frontmatter {
                  name
                  occupation
                }
                excerpt(pruneLength: 400)
            }

        }
    `)

    const flexContainerStyles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "2.5%",
        marginBottom: "2.5%",
    }

    return (
        <div className="container" style={{textAlign: "center", paddingTop: "5%", paddingBottom: "5%"}} id="aboutSection">

            

            <div style={flexContainerStyles}>
                <Card style={{width: "275px", padding: "12.5px", paddingBottom: "0"}}>
                    <Img fixed={data.profileImage.childImageSharp.fixed} alt="Profile Picture" style={{borderRadius: "1%"}}/>
                    <CardBody>
                        <CardTitle tag="h5">{data.aboutInfo.frontmatter.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{data.aboutInfo.frontmatter.occupation}</CardSubtitle>
                    </CardBody>
                </Card>
                
                <Card style={{width: "500px"}}>
                    <CardBody>
                        <CardText style={{textAlign: "left"}} dangerouslySetInnerHTML={{__html: data.aboutInfo.html}}/>
                    </CardBody>
                </Card>
                
            </div>

            
        </div>
    )
}

export default About