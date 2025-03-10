import { defineStore } from 'pinia'

export const useExperienceStore = defineStore('experience', {
  state: () => ({
    experiences: [
      {   
        id: '001',
           title: 'Cultural Heritage Tech Specialist | Bridging Museums and Tech',
           timeframe: 'January 2025 - Today',
           location: 'ProDenkmal GmbH',
           description: [
          'I work at the intersection of museums, technology, and user experience, digitizing collections and improving databases. My role involves:',
'- Photography & Archiving - Capturing high-quality images for digital access.',
'- Data Management & Digitalization - Structuring and documenting collection data.'   
          ],
           details: '',
           images: [],
           links: [
            {
              link: 'https://www.prodenkmal.de/de/',
              linkText: 'Prodenkmal GmbH',
              routerLinkText: 'Check out my current employer'        
          },
          {
            link: 'https://www.stiftung-friedenstein.de/aktuell/gotha-transdigital-2027',
            linkText: 'Gotha Transdigital 2027',
            routerLinkText: `The current project I'm working on`       
        }
           ]
         },
{   
     id: '002',
        title: 'Herding Cats Travel App',
        timeframe: 'May 2024 - Today',
        location: 'Originally the final project in Bootcamp, now a platform for learning new things.',
        description: [
          'An app for sharing information among group travel participants, e. g. Flight Itineraries or Hotel Bookings. I designed and developed the UI/UX in Figma.',
          'After bootcamp, I used this project to learn:',
          '- Developing an Express.js backend with MongoDB Atlas database for user and travel data.',
          '- Building, testing and deploying on Render, while using Git for version control.',
          '- Refactoring code based on the principle: "Copied code is the root of all evil."',
            'Tech Stack: Vue.js, HTML, CSS, JavaScript, Node.js, Express.js. MongoDB, RESTful API, Git, Render',
            'Currently migrating it to Amazon Web Services to explore cloud platforms and serverless functions.'
        ],
        details: '',
        images: [
         /*  {
            src: new URL(
              '@/assets/img/herding-cats/herding-cats-screen-shot-startpage.png',
              import.meta.url
            ).href,
            alt: 'Herding Cats Travel App Startpage',
            description:
              'Login, Sign Up or enter a trip id to go straight to a trip that someone has already set up.'
          }, */
        ],
        links: [
            {
                link: 'https://herding-cats.onrender.com/',
                linkText: 'herding-cats.onrender.com',
                routerLinkText: 'Test it'        
            },
            {
                link: 'https://github.com/ghersmann/herding-cats',
                linkText: 'github.com/ghersmann/herding-cats',
                routerLinkText: 'Source Code'
            }
        ]
      },
      {
        id: '003',
        title: 'Web Developer Training',
        timeframe: 'January 2024 - April 2024',
        location: 'Coding Bootcamps Europe',
        description: [
          'This marked the completion of a journey that began as a hobby in 1996, when I taught myself HTML and built my first website. I joined the Bootcamp to turn this passion into a profession.',
          'Bootcamp contents: HTML, CSS, JavaScript, Vue.js, Figma, Git, Cypress, Web Accessibility WCAG 2.1, NPM, Node.js, Agile Project Organisation',
        'Example Projects:',
'- Todo List App: Initially developed using JavaScript and later remade with Vue.js and RESTful APIs.',
'- CSS Webshop: Recreated a design draft (provided as an image) using only HTML and CSS.',
'- Résumé Project: Focused on applying Semantic HTML and accessibility standards.'
        ],
        details: '',
        images: [],
        links: []
      },
      {
        id: '004',
        title: 'Web Content Manager & Museum Manager',
        timeframe: 'February 2022 - December 2023',
        location: 'Municipal Office Wutha-Farnroda, Germany',
        description: [
            'I Developed the UX and content for a new, more user-friendly, and accessible website in collaboration with a Web developer using Contao CMS.',
            'Head of operations at the Hörselberg Museum, including serving as project leader for two exhibitions, overseeing everything from planning and producing content to managing the budget.'
        ],
        images: [],
        links: [ 
          {
          link: 'https://www.wutha-farnroda.de',
          linkText: 'wutha-farnroda.de',
          routerLinkText: `The website we developed`       
      }
    ]
      },
      {
        id: '005',
        title: 'Freelance Photographer',
        timeframe: 'September 2006 - April 2021',
        location: 'Gustav Hersmann Photography, Nyköping, Sweden',
        description: [
            'I turned my photography hobby into a side job, capturing products, sports, weddings, portraits, and school classes. I closed the business after I moved from Sweden to Germany.',
            'I built and maintained my portfolio website, evolving it from basic HTML/CSS to a custom-styled WordPress site. Additionally, I used WordPress to create image galleries, allowing newlyweds to preview their wedding photos before receiving the finished prints.'
        ],
        images: [],
        links: [{
            link: 'https://photo.gustavhersmann.com/',
            linkText: 'photo.gustavhersmann.com',
            routerLinkText: 'Photography Portfolio' 
        }]
      },
      {
        id: '006',
        title: 'Museum Curator & Tour Guide',
        timeframe: 'June 2004 - May 2019',
        location: 'Sörmlands Museum, Nyköping, Sweden',
        description: [
            'My main task was designing and building engaging museum experiences, such as exhibitions and guided tours. Focusing on how visitors navigate exhibitions and what they see, hear, and feel. In essence: UX development for museums.',
            'Besides that, I lead the training of new tour guides, being responsible for teaching new employees how to communicate in a professional and engaging manner.',
            'I was also involved in the team that developed new guided tours and info material in Swedish, English, and German.'
        ],
        images: [],
        links: [
          {
            link: 'https://www.sormlandsmuseum.se/',
            linkText: 'www.sormlandsmuseum.se',
            routerLinkText: 'My former employer' 
        }
        ]
      },
      {
        id: '007',
        title: 'Retail Salesperson and Web Developer',
        timeframe: 'June 2000 - August 2002',
        location: 'Bildettan Photo Store, Nyköping, Sweden',
        description: [
            'I created their first, very basic, website with HTML, while also selling cameras, film, and running the photo lab as a side job during university.'
        ],
        images: [],
        links: []
      },
    ]
  }),

  getters: {
    getProjects: (state) => state.experiences
  }
})
