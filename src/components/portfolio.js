import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import ProjectModal from "./project_modal"

const Portfolio = () => {

    const data = useStaticQuery(graphql`
        query {
            portfolioProjects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
                edges {
                    node {
                        html
                        frontmatter {
                            title
                            subtitle
                            link
                            mainImage {
                                childImageSharp {
                                    fixed(width: 350, height: 300) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                            image1 {
                                childImageSharp {
                                    fluid(maxWidth: 450) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            image2 {
                                childImageSharp {
                                    fluid(maxWidth: 450) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            image3 {
                                childImageSharp {
                                    fluid(maxWidth: 450) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
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
        <div style={{textAlign: "center", paddingTop: "10%"}} id="portfolioSection">
            <h2>PORTFOLIO</h2>
            <div style={flexContainerStyles}>
                {data.portfolioProjects.edges.map(({node}) => (
                    <ProjectModal project={node}/>
                ))} 
            </div>
        </div>
    )
}

export default Portfolio