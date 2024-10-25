import FlorenceDuomo from './images/FlorenceDuomo.jpg'
import LondonSunrise from './images/LondonSunrise.jpg'
import Preseli from './images/Preseli.jpg'
import RomeColosseum from './images/RomeColosseum.jpg'
import TintagelCastle from './images/TintagelCastle.jpg'
import FlorenceRiver from './images/FlorenceRiver.jpg'

export const BLOCK_TYPES = {
  TEXT: 'text',
  IMAGE_ROW: 'image-row',
  JOKE: 'joke'
}

export const data = {
  title: 'Sarah Sweat',
  subTitle: 'Traveler - Software Engineer - Potter',
  contentBlocks: [
    {
      type: BLOCK_TYPES.TEXT,
      title: 'About Me',
      description: ["As an accomplished engineering leader with a strong background in full-stack web development, I bring six years of experience in the media industry, where I've successfully built and led diverse teams, working on both legacy and greenfield projects. I am committed to empowering teams and nurturing talent, as evidenced by my initiatives in mentorship and team-building activities. I have a proven track record of engaging in cross-functional partnerships to deliver user-centric solutions, managing vendor relationships, navigating stakeholder expectations and speaking to large groups. In the Fall of 2023, I took a self-funded sabbatical to travel the world and reconnect with family, enriching my perspective and fueling my passion for technology. Currently based in Orlando, Florida."]
    },
    {
      type: BLOCK_TYPES.IMAGE_ROW,
      images: [
        FlorenceDuomo,
        LondonSunrise,
        Preseli,
        RomeColosseum,
        TintagelCastle,
        FlorenceRiver
      ]
    },
    {
      type: BLOCK_TYPES.TEXT,
      title: 'Links',
      description: []
    },
    {
      type: BLOCK_TYPES.TEXT,
      title: 'Technical Skills',
      description: [' Javascript/Typescript, React, Next.js, Storybook, GCP(Firebase, Firestore, App Engine, Cloud Run, Cloud Functions, Cloud Storage, etc.), AWS (DynamoDB, Amplify, AppSync, Lambda, CloudFormation), GraphQL, Apollo, TDD, Jest, Styled Components, VS Code, Redux, MobX, Ruby, Ruby on Rails, RSpec, HTML, CSS, SQL, MATLAB, C++, R']
    },
    {
      type: BLOCK_TYPES.TEXT,
      title: 'Interests',
      description: ['Travel - Pottery - Photography - Code - Attending Tech Events - Speaking at Events - Music - Golf - Reading']
    },
  ]

}
