import FlorenceDuomo from './images/FlorenceDuomo.jpg'
import LondonSunrise from './images/LondonSunrise.jpg'
import Preseli from './images/Preseli.jpg'
import RomeColosseum from './images/RomeColosseum.jpg'
import TintagelCastle from './images/TintagelCastle.jpg'
import FlorenceRiver from './images/FlorenceRiver.jpg'

export const data = {
  title: 'Sarah Sweat',
  subTitle: 'Traveler - Photographer - Software Engineer - Blogger',
  contentBlocks: [
    {
      type: 'text',
      title: 'About Me',
      description: ["In college, I studied Mechanical Engineering, but always loved my coding classes the most. Instead of applying code to hardware, I decided to make a switch and learn how to apply my coding skills on the web development side. I joined Spoon University initially and transitioned to other Discovery brands after their acquisition, primarily with Food Network, working on internal publishing tools. In August 2020 I moved to The New York Times to work as a Senior Full Stack Software Engineer, exploring new products for kids. After that project was sunset in December 2022, I moved to the Cards team within the NYT Storytelling group where I help develop new visual based story formats. I am continuing to learn and grow every day, knowing I made the right choice to switch to software."]
    },
    {
      type: 'image-row',
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
      type: 'text',
      title: 'Links',
      description: []
    },
    {
      type: 'text',
      title: 'Technical Skills',
      description: ['Javascript - React - AWS (DynamoDB, AppSync, Amplify, Lambda) - Styled Components - Storybook - Nextjs - Ruby - Rails - Redux - MobX - C++ - jQuery - SQL - HTML - CSS']
    },
    {
      type: 'text',
      title: 'Interests',
      description: ['Travel - Photography - Code - Attending Tech Events - Speaking at Events - Music - Golf - Reading']
    },
  ]

}
