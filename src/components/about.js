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
        <div style={{textAlign: "center", paddingTop: "10%"}} id="aboutSection">

            <div style={flexContainerStyles}>
                <Card style={{width: "290px", padding: "1.25rem", paddingBottom: "0"}}>
                    <Img fixed={data.profileImage.childImageSharp.fixed} alt="Profile Picture" style={{borderRadius: "1%"}}/>
                    <CardBody>
                        <CardTitle tag="h5">{data.aboutInfo.frontmatter.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{data.aboutInfo.frontmatter.occupation}</CardSubtitle>
                    </CardBody>
                </Card>
                
                <Card style={{width: "800px", padding: "1.25rem"}}>
                    <CardBody>
                        <CardText style={{textAlign: "left"}} dangerouslySetInnerHTML={{__html: data.aboutInfo.html}}/>
                    </CardBody>
                </Card>
                
            </div>


            
        </div>
    )
}

export default About