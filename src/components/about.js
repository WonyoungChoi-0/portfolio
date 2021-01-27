import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"


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
        }
    `)

    const flexContainerStyles = {
        display: "flex",
        flexDirection: "row",
        flex: "wrap",
        justifyContent: "space-evenly",
        marginTop: "2.5%",
        marginBottom: "2.5%"
    }

    return (
        <div style={{textAlign: "center"}} id="aboutSection">
            <h2>ABOUT</h2>
            <div className="container" style={flexContainerStyles}>
                <Img fixed={data.profileImage.childImageSharp.fixed} alt="Profile Picture"/>
                <p>I am a student</p>
            </div>
        </div>
    )
}

export default About