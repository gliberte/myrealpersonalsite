import React from "react";
import styled from "styled-components";
import Link from 'gatsby-link'


export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>
        Mi Blog Personal
      </h1>
      {data.allMarkdownRemark.edges.map(({node})=>(
        <div key={node.id}>
            <Link
                to={node.frontmatter.path}
            >
            <h3>{node.frontmatter.title}</h3>
            </Link>
          </div>
      )
          
      )}
     
    </div>
  );
};


export const query = graphql`
  query PostQuery {
    allMarkdownRemark(sort:{fields:[frontmatter___date],order:DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
          }
          
          excerpt
        }
      }
    }
  }
`;