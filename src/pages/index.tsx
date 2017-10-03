import * as  React from 'react';
import { default as Link } from 'gatsby-link';

import { ProfilePage } from "../components/profilePage/ProfilePage";

export default ({ data }) => {
  console.log(data);
  return <ProfilePage
    aboutText={data.allProfileJson.edges[0].node.about}
    skills={data.allProfileJson.edges[0].node.skills}
    timelineItems={data.allProfileJson.edges[0].node.timeline}
  />
};

export const query = graphql`
query ProfileData{
  allProfileJson {
    edges {
      node {
        about
        skills {
          title
          iconClass
          imageSrc
        }
        timeline {
            title
            subTitle
            content
            dateTitle
            icon
            imageSrc
            id
            tags
        }
      }
    }
  }
}
`;