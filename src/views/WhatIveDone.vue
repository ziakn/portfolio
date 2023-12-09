<template>
  <core-section id="what-ive-done">
    <abstract-3 />

    <core-heading>What I've done</core-heading>

    <v-col cols="12">
      <v-carousel
        :cycle="false"
        :height="650"
        :show-arrows="false"
        class="elevation-0"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(project, i) in projects"
          :key="i"
        >
          <project :value="project" />
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </core-section>
</template>

<script>
  export default {
    name: 'WhatIveDone',

    components: {
      Abstract3: () => import('@/components/Abstract3'),
      Project: () => import('@/components/Project'),
    },

    data: () => ({
      projects: [
        {
          name: 'Al sharq',
          category: 'Arabic News Paper',
          src: 'classic-cafe.png',
          description: 'Al Sharq is an Arabic and pro-government daily newspaper published in Doha, Qatar. The paper is one of the three leading Arabic newspapers in the Qatar.',
        },
        {
          name: 'The Peninsula Qatar',
          category: 'English News Paper',
          src: 'classic-cafe.png',
          description: 'The Peninsula, one of the leading English dailies in Qatar and Middle East. With over 65 million pageviews thepeninsula.qa (thepeninsulaqatar.com), we can proudly say, is the top news website in both English and Arabic in Qatar and Middle East. Last year we had over 8.5 million users visit our website and good majority of the visitors are from Qatar, making us a very hyper local website..',
        },
        {
          name: 'Lusail News',
          category: 'Arabic News Paper',
          src: 'classic-cafe.png',
          description: 'Successfully spearheaded the development of APIs and database infrastructure for the innovative Lusail News mobile application. Contributed to enhancing user engagement and facilitating seamless news delivery.',
        },
        {
          name: 'Alwaraq',
          category: 'Printing Press',
          src: 'classic-cafe.png',
          description: 'Al Waraq Printing Press (AWPP) is the leading Printing Press of the region, comprising of Commercial Printing (offset, packaging, sheet), Digital Printing and Packaging Printing.',
        },
        {
          name: 'Top Solutions',
          category: 'Interior Design',
          src: 'flagship.jpg',
          description: "TOP Solutions is a leading manufacturer and provider of a full range of turnkey services in the interior design and exhibition stand industryHeadquartered in Dubai with 3 manufacturing facilities in Lebanon, Qatar and the UAE, TOP Solutions services clients across Asia, Europe and the Middle East. The Company's 70+ Team takes on intricate projects and specializes in high-end turnkey shop fitting and large scale exhibition stands. Its ongoing success stems out of a partnership approach with customers, leading to an in-depth understanding of a brand's needs and the delivery of superlative finishing on time and within budget.",

        },
        {
          name: 'Dar Al Sharq Group',
          category: 'Corporate',
          src: 'biere.jpg',
          description: 'Dar Al Sharq Is The Largest Multi Activities Press Institution In Qatar, Leading The Media Landscape. It Publishes 4 Newspapers (Al-Sharq, Al-Arab, Peninsula, And Lusail), And Prints More Than 8 Local And International Newspapers. It Currently Consists Of A Group Of Media Companies That Provide Their Customers With Integrated And Specialized Services In Media, Advertising, And Public Relations.',
        },
        {
          name: 'Alsharq Technology',
          category: 'Corporate',
          src: 'biere.jpg',
          description: 'Alsharq Technology is a Corporate site having WEB and CMS. It is build to showcase the Portfolio projects, Career section, mission vision, goals and values and upcomming projects.',
        },
        {
          name: 'Al mahbrah',
          category: 'E-Commerce',
          src: 'biere.jpg',
          description: 'Al Mahbrah is a single vendor ecommerce, with QPay Integrated Payment Gateway. To order or print there custom designs, writings on diffrent products, like T-shirt, Mugs, Bags etc etc.',
        },
        {
          name: 'Billing CRM',
          category: 'Billing',
          src: 'biere.jpg',
          description: 'Billing CRM is a B to C invoice system for Owner and Customer. Owner can Add Diffrent Product and create invoice with assciated client. Both can send and recieve inovice , tickets, and business contracts etc with payment options.',
        },
        {
          name: 'Eaqaqa',
          category: 'Research And Innovation',
          src: 'biere.jpg',
          description: 'Eaqaqa is Qatar University Project for teachers and professors.Professors are to upload the there research , thesis, books, articles. also give access to uplaod a diffrent seminars and activites picture previsouly held in Unversity.',
        },
        {
          name: 'Tiollo',
          category: 'Food And Restaurants',
          src: 'biere.jpg',
          description: 'Tiollo is a multivendor restaurants ecosystem. Through System end-user can order deliciues food and book a table easily.',
        },
        // {
        //   name: 'Little Sailor',
        //   category: 'Marketing and Graphic Design',
        //   src: 'biere.jpg',
        //   description: 'Eaqaqa is Qatar University Project for teachers and professors.Professors are to upload the there research , thesis, books, articles. also give access to uplaod a diffrent seminars and activites picture previsouly held in Unversity.',
        // },
        {
          name: 'Almass Water distrbution system',
          category: 'Marketing and Graphic Design',
          src: 'biere.jpg',
          description: 'Al Mass water has the following modules,1. Online Web Application for Al mass water distribution system 2. SMS Gateway and Email integration for Alerts. 3. Coupon Management System. 4. Assign coupon Management System. 5. Role based User Management 6. Zone Management System. 7. Driver Management System. 8. Sales Man Management System. 9. Customer Management System. 10. Reporting Dashboard .',
        },
        {
          name: 'Ajt Qatar Properties',
          category: 'Real Estate',
          src: 'biere.jpg',
          description: 'Ajt Properties is a Websit which facilitate the local and expsts residence of Qatar to search , lease and rent the properties thorugh portal.',
        },
        {
          name: 'SSR Qatar',
          category: 'Recruitement Agency',
          src: 'biere.jpg',
          description: 'SSR is a recruitment agency in Qatar. It is one of the fastest growing recruitment agencies in Qatar duly licensed and approved by the Ministry of Labor, Government of Qatar, managed by a team of highly experienced and motivated HR professionals.SSR provides recruiting services for the diffrent trades and industries. Like Information Technology, Human Resource, Engineering, Oil & Gas, Construction, Medical, HVAC, Household.',
        },
        {
          name: 'The Peninsula',
          category: 'News',
          src: 'biere.jpg',
          description: 'The Peninsula, one of the leading English dailies in Qatar. The Peninsula has been successfully providing  extensive news coverage from around the world with a primary focus on life in Qatar.',
        },
        // {
        //   name: 'Simplsitq Sale',
        //   category: 'Marketing and Graphic Design',
        //   src: 'biere.jpg',
        //   description: 'Eaqaqa is Qatar University Project for teachers and professors.Professors are to upload the there research , thesis, books, articles. also give access to uplaod a diffrent seminars and activites picture previsouly held in Unversity.',
        // },
        // {
        //   name: 'Realty Finder',
        //   category: 'Marketing and Graphic Design',
        //   src: 'biere.jpg',
        //   description: 'Eaqaqa is Qatar University Project for teachers and professors.Professors are to upload the there research , thesis, books, articles. also give access to uplaod a diffrent seminars and activites picture previsouly held in Unversity.',
        // },
        // {
        //   name: 'Kpk Arms License',
        //   category: 'Marketing and Graphic Design',
        //   src: 'biere.jpg',
        //   description: 'Eaqaqa is Qatar University Project for teachers and professors.Professors are to upload the there research , thesis, books, articles. also give access to uplaod a diffrent seminars and activites picture previsouly held in Unversity.',
        // },
      ],
    }),
  }
</script>
