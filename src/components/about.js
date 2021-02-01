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
        justifyContent: "space-around",
        marginTop: "2.5%",
        marginBottom: "2.5%",
    }

    return (
        <div className="container" style={{textAlign: "center", paddingTop: "5%", paddingBottom: "5%"}} id="aboutSection">

            

            <div style={flexContainerStyles}>
                <Card style={{width: "290px", padding: "1.25rem"}}>
                    <Img fixed={data.profileImage.childImageSharp.fixed} alt="Profile Picture" style={{borderRadius: "1%"}}/>
                    <CardBody>
                        <CardTitle tag="h5">{data.aboutInfo.frontmatter.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{data.aboutInfo.frontmatter.occupation}</CardSubtitle>
                    </CardBody>
                </Card>
                
                <Card style={{width: "600px", padding: "1.25rem"}}>
                    <CardBody>
                        <CardText style={{textAlign: "left"}} dangerouslySetInnerHTML={{__html: data.aboutInfo.html}}/>
                    </CardBody>
                </Card>
                
            </div>

            {/* <Media style={{backgroundColor: "white", borderRadius: "0.25rem", border: "1px solid rgba(0, 0, 0, 0.125)", padding: "1.25rem", width: "85%", margin: "auto"}}>
                <Media left>
                    <Img fixed={data.profileImage.childImageSharp.fixed} alt="Profile Picture" style={{borderRadius: "0.25rem", marginBottom: "1.05rem"}}/>
                    <CardTitle tag="h5">{data.aboutInfo.frontmatter.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{data.aboutInfo.frontmatter.occupation}</CardSubtitle>
                </Media>
                <Media body style={{textAlign: "left", marginLeft: "1.15rem"}}>
                    <Media heading>
                    Media heading
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
            </Media> */}

            
        </div>
    )
}

export default About