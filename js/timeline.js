const timelineItems = [
  {
    year: "2002",
    date: "March",
    descriptionHtml: "Born in Nigeria.",
  },
  {
    year: "2015",
    date: "March",
    descriptionHtml: "Wrote my first program with Windows Batch scripting.",
  },
  {
    year: "2016",
    date: "April",
    descriptionHtml:
      "Compiled my first <strong>Hello World</strong> program in C++ using Visual Studio 2010.",
  },
  {
    year: "2016",
    date: "July",
    descriptionHtml:
      "Compiled my first <strong>Hello World</strong> program in C# using Visual Studio 2013.",
  },
  {
    year: "2016",
    date: "August",
    descriptionHtml:
      "Started learning web development with HTML and CSS through TheNewBoston tutorials.",
  },
  {
    year: "2016",
    date: "November",
    descriptionHtml: "Built and launched my first PC game with C# and Unity3D.",
  },
  {
    year: "2017",
    date: "February",
    descriptionHtml:
      "Started the Blender Artists community and created my first 3D model with Blender.",
  },
  {
    year: "2017",
    date: "April",
    descriptionHtml: "Began exploring cybersecurity and penetration testing.",
  },
  {
    year: "2017",
    date: "June",
    descriptionHtml:
      "Installed and used Linux for the first time with Kali Linux.",
  },
  {
    year: "2017",
    date: "July - November",
    descriptionHtml:
      "Explored multiple programming languages, including Python, PHP, JavaScript, Ruby, SQL, C, Java, and Swift.",
  },
  {
    year: "2017",
    date: "August",
    descriptionHtml:
      "Created Greyhatcommunity, my first blog, and grew its Telegram channel to 10K+ members.",
  },
  {
    year: "2017",
    date: "August",
    descriptionHtml:
      "Built GhostScript, a beginner-friendly programming language inspired by Ruby and Python.",
  },
  {
    year: "2017",
    date: "September",
    descriptionHtml: "Helped found the SoloLearn Nigeria community.",
  },
  {
    year: "2017",
    date: "December",
    descriptionHtml:
      "Reported my first security vulnerability to Google, involving a 2FA bypass on Android.",
  },
  {
    year: "2018",
    date: "January",
    descriptionHtml:
      "Started learning about cryptocurrency and blockchain technology.",
  },
  {
    year: "2018",
    date: "February",
    descriptionHtml:
      "Built PUMMP3r 1.0, an experimental cryptocurrency trading bot written in Python.",
  },
  {
    year: "2018",
    date: "April",
    descriptionHtml:
      'Released the first version of <a href="https://github.com/LordGhostX/HashDB">HashDB</a>, a lightweight NoSQL database built with Python.',
  },
  {
    year: "2018",
    date: "April",
    descriptionHtml:
      "Earned my first programming income by selling a Python-based trading automation tool.",
  },
  {
    year: "2018",
    date: "May - December",
    descriptionHtml:
      "Studied cryptocurrency trading, forex, backtesting systems, and MQL4-based trading automation.",
  },
  {
    year: "2018",
    date: "June - July",
    descriptionHtml:
      "Graduated from high school at 16 and deepened my cybersecurity research.",
  },
  {
    year: "2018",
    date: "November",
    descriptionHtml:
      "Trained my first machine-learning model with Azure ML Studio.",
  },
  {
    year: "2018",
    date: "December",
    descriptionHtml:
      "Reported payment-processing vulnerabilities to Paystack and Flutterwave.",
  },
  {
    year: "2019",
    date: "March",
    descriptionHtml:
      "Developed a strong interest in artificial intelligence through deep learning and the DSN IndabaX program.",
  },
  {
    year: "2019",
    date: "May",
    descriptionHtml:
      "Completed my first paid client project: a website built for ₦40,000 ~ $110.",
  },
  {
    year: "2019",
    date: "June",
    descriptionHtml: "Attended my first tech hackathon.",
  },
  {
    year: "2019",
    date: "July",
    descriptionHtml:
      "Joined DSN through its Python and machine-learning class for pre-university students.",
  },
  {
    year: "2019",
    date: "September",
    descriptionHtml:
      "Gave a presentation at POIC 2019 to an audience of 5,000+ attendees.",
  },
  {
    year: "2019",
    date: "September",
    descriptionHtml:
      "Joined the DSC Unilag Core Team for the 2019/2020 session.",
  },
  {
    year: "2019",
    date: "October",
    descriptionHtml:
      "Built a Django and TensorFlow web app to help medical practitioners diagnose patients faster.",
  },
  {
    year: "2019",
    date: "November",
    descriptionHtml: "Qualified for the 2019 DSN Data Science Bootcamp.",
  },
  {
    year: "2020",
    date: "February",
    descriptionHtml: "Attended the launch of the Google Hub in Lagos, Nigeria.",
  },
  {
    year: "2020",
    date: "February",
    descriptionHtml:
      "Attended the first Open Source Festival (OSCA) in Africa.",
  },
  {
    year: "2020",
    date: "March",
    descriptionHtml: "Participated in the FSI, GLH, and CCHub Data hackathons.",
  },
  {
    year: "2020",
    date: "April",
    descriptionHtml:
      'Published my first technical article on <a href="https://lordghostx.hashnode.dev/">Hashnode</a>.',
  },
  {
    year: "2020",
    date: "May",
    descriptionHtml:
      'Launched <a href="https://github.com/LordGhostX/animeX-v2">animeX v2</a> with improved features.',
  },
  {
    year: "2020",
    date: "June",
    descriptionHtml:
      "Earned my first seven figures in NGN through software work.",
  },
  {
    year: "2020",
    date: "July",
    descriptionHtml:
      "Spoke at FlaskCon, an international conference for the Flask community.",
  },
  {
    year: "2020",
    date: "August",
    descriptionHtml:
      "Built a cryptocurrency remittance prototype that processed $1,000 in volume during its first month.",
  },
  {
    year: "2020",
    date: "August",
    descriptionHtml:
      "Joined the DSC Unilag Core Team for the 2020/2021 session.",
  },
  {
    year: "2020",
    date: "August",
    descriptionHtml:
      'Created <a href="https://t.me/devjobhub">DevJobHub</a>, a Telegram bot for developer job listings that reached 900+ users after launch.',
  },
  {
    year: "2020",
    date: "September",
    descriptionHtml:
      'Built <a href="https://t.me/animehive_bot">AnimeHive</a>, a Telegram bot for anime downloads, recommendations, and information.',
  },
  {
    year: "2020",
    date: "September",
    descriptionHtml:
      "Joined the technical team at OtakuTV, one of Nigeria's largest anime communities.",
  },
  {
    year: "2020",
    date: "October",
    descriptionHtml:
      "Helped Telos Blockchain set up an airdrop system that managed 35K+ users.",
  },
  {
    year: "2020",
    date: "October",
    descriptionHtml:
      'Became an <a href="https://auth0.com">Auth0</a> Ambassador.',
  },
  {
    year: "2020",
    date: "November",
    descriptionHtml: "Spoke at a cybersecurity-focused DSC event.",
  },
  {
    year: "2020",
    date: "November",
    descriptionHtml:
      'Became an Ambassador at <a href="https://pettysave.com">PettySave</a>, a Nigerian fintech focused on savings and investing.',
  },
  {
    year: "2020",
    date: "November",
    descriptionHtml:
      'Signed my first paid technical-writing contract with <a href="https://dev.to/lordghostx/building-a-telegram-bot-with-python-and-fauna-494i">Fauna</a>.',
  },
  {
    year: "2020",
    date: "December",
    descriptionHtml:
      'Gave a talk on technical writing at DSC Federal Polytechnic Bida. Slides and recording are available <a href="https://twitter.com/LordGhostX/status/1343865324404355072?s=20">here</a>.',
  },
  {
    year: "2020",
    date: "December",
    descriptionHtml:
      'Published my <a href="https://twitter.com/LordGhostX/status/1344670863182983171?s=20">2020 year in review</a>.',
  },
  {
    year: "2021",
    date: "February",
    descriptionHtml:
      'Featured on the <a href="https://twitter.com/dev_chronicles/status/1361737972727611397?s=21">Developer Chronicles podcast</a>.',
  },
  {
    year: "2021",
    date: "February",
    descriptionHtml:
      'Featured on the <a href="https://twitter.com/maryamcodes/status/1364528064579973120?s=21">GEN-TECH podcast</a>.',
  },
  {
    year: "2021",
    date: "February",
    descriptionHtml:
      'Featured in the <a href="https://twitter.com/lordghostx/status/1365006940636672002?s=21">Fauna Community Spotlight</a> for open-source contributions.',
  },
  {
    year: "2021",
    date: "March",
    descriptionHtml:
      'Published an article on <a href="https://www.git-tower.com/learn/curiouscat-with-python-and-fauna/">Git Tower</a>.',
  },
  {
    year: "2021",
    date: "April",
    descriptionHtml: 'Received Auth0\'s "Ambassador of the Month" award.',
  },
  {
    year: "2021",
    date: "June",
    descriptionHtml:
      'Became a <a href="https://blog.logrocket.com/author/solomonesenyi/">LogRocket</a> author.',
  },
  {
    year: "2021",
    date: "July",
    descriptionHtml:
      'Won the <a href="https://www.unicornmaking.com/solo-funds-hackathon/">SoLo Funds Hackathon</a> hosted by Unicorn.',
  },
  {
    year: "2021",
    date: "August",
    descriptionHtml:
      'Won the <a href="https://www.unicornmaking.com/boardroom-one-hackathon/">BoardRoom One Hackathon</a> hosted by <a href="https://www.linkedin.com/posts/semicolonafrica_mcm-hackathon-activity-6838105955331317760-msLf">Unicorn</a>.',
  },
  {
    year: "2021",
    date: "September",
    descriptionHtml:
      'Had a <a href="https://github.com/mongodb/mongo-go-driver/pull/737">pull request merged</a> into MongoDB\'s Go driver.',
  },
  {
    year: "2021",
    date: "September",
    descriptionHtml:
      "Joined the DSC Unilag Core Team for the 2021/2022 session.",
  },
  {
    year: "2021",
    date: "October",
    descriptionHtml:
      'Received <a href="https://twitter.com/LordGhostX/status/1447616443713998849">MongoDB swag</a> for community contributions.',
  },
  {
    year: "2021",
    date: "November",
    descriptionHtml:
      "Started my first full-time role at a US-based fintech and blockchain company.",
  },
  {
    year: "2021",
    date: "November",
    descriptionHtml:
      'Spoke at <a href="https://gdg.community.dev/events/details/google-gdg-abeokuta-presents-devfest-abeokuta-2021">DevFest Abeokuta</a>.',
  },
  {
    year: "2021",
    date: "December",
    descriptionHtml:
      'Published my <a href="https://twitter.com/LordGhostX/status/1476351288099147778?s=20">2021 year in review</a>.',
  },
  {
    year: "2022",
    date: "February",
    descriptionHtml:
      'Won the <strong>Best Use of Payments Product</strong> category at the <a href="https://stitch.money/hackathon/">Stitchathon 2022 Hackathon</a>.',
  },
  {
    year: "2022",
    date: "March",
    descriptionHtml:
      'Joined <a href="https://unstoppabledomains.com">Unstoppable Domains</a> as a full-time Technical Writer.',
  },
  {
    year: "2022",
    date: "March",
    descriptionHtml:
      'Purchased my first <a href="https://twitter.com/LordGhostX/status/1502054958224523265?s=20&t=Qn8fribItlrG9LYKgVAjOg">NFT domain</a> from Unstoppable Domains.',
  },
  {
    year: "2022",
    date: "March",
    descriptionHtml:
      'Spoke at <a href="https://oscafest22.sched.com/event/yVnI">Open Source Festival 2022</a>.',
  },
  {
    year: "2022",
    date: "April",
    descriptionHtml:
      'Minted my first NFT, <a href="https://twitter.com/LordGhostX/status/1511518541937360899">Los Muertos World</a>.',
  },
  {
    year: "2022",
    date: "April",
    descriptionHtml:
      'Sold my <a href="https://twitter.com/LordGhostX/status/1513208034796916739">first NFT</a> for 0.5 ETH.',
  },
  {
    year: "2022",
    date: "May",
    descriptionHtml:
      'Sold my <a href="https://twitter.com/LordGhostX/status/1523124421279461377?s=20&t=sUnhr7DvshI1-vLkrGbxLg">first NFT on Solana</a>.',
  },
  {
    year: "2022",
    date: "June",
    descriptionHtml: "Took my first flight and visited Abuja.",
  },
  {
    year: "2022",
    date: "July",
    descriptionHtml:
      'Interviewed with the <a href="https://twitter.com/GrowIntoTech/status/1543881419579064322?s=20&t=pnEVaaR926q-LrsK5PH7YQ">Grow Into Tech</a> team.',
  },
  {
    year: "2022",
    date: "September",
    descriptionHtml: "Took my first road trip and visited Asaba.",
  },
  {
    year: "2022",
    date: "October",
    descriptionHtml:
      'Spoke at five events on <a href="https://bit.ly/open-source-talk">open source and Hacktoberfest</a>.',
  },
  {
    year: "2022",
    date: "November",
    descriptionHtml:
      "Took my first international trip and visited Nairobi, Kenya.",
  },
  {
    year: "2022",
    date: "November",
    descriptionHtml: "Got my first car, a Hyundai Santa Fe.",
  },
  {
    year: "2022",
    date: "December",
    descriptionHtml:
      'Organized <a href="https://twitter.com/garrihangout">Garri Hangout 1.0</a>, attracting 300+ attendees and ₦642,000 in sponsorships.',
  },
  {
    year: "2022",
    date: "December",
    descriptionHtml:
      'Published my <a href="https://twitter.com/LordGhostX/status/1609123395081310208?s=20&t=v9fNZmX-_uHGLj_2SRFv6w">2022 year in review</a>.',
  },
  {
    year: "2023",
    date: "February",
    descriptionHtml: "Bought a Ford Edge Limited.",
  },
  {
    year: "2023",
    date: "March",
    descriptionHtml:
      "Revisited an earlier trading research project and began building its MVP.",
  },
  {
    year: "2023",
    date: "March",
    descriptionHtml:
      'Joined the <a href="https://www.stackshift.com">Stack Shift dWeb Fellowship</a> Zeta cohort.',
  },
  {
    year: "2023",
    date: "April",
    descriptionHtml:
      'Joined <a href="https://waku.org">Status/Waku</a> as a full-time Technical Writer.',
  },
  {
    year: "2023",
    date: "May",
    descriptionHtml: "Launched the MVP of Trade Maven on a live portfolio.",
  },
  {
    year: "2023",
    date: "June",
    descriptionHtml:
      'Spoke at <a href="https://twitter.com/LordGhostX/status/1664988980855668739?s=20">Career Fest</a> in Ilorin to 2,000+ attendees.',
  },
  {
    year: "2023",
    date: "August",
    descriptionHtml: "Visited Port Harcourt, Nigeria, and Kigali, Rwanda.",
  },
  {
    year: "2023",
    date: "September",
    descriptionHtml:
      'Closed a <a href="https://x.com/LordGhostX/status/1708147399644860608?s=20">$90,000 raise</a> for Trade Maven, above the original $30,000 target.',
  },
  {
    year: "2023",
    date: "November",
    descriptionHtml:
      'Visited Enugu and Nsukka, and spoke at <a href="https://x.com/LordGhostX/status/1723335006792114385?s=20">Polygon Dev Conference</a>.',
  },
  {
    year: "2023",
    date: "December",
    descriptionHtml:
      'Designed <a href="https://x.com/LordGhostX/status/1735313449654112588?s=20">Operation BattleGrid: Strategic Frontiers</a>, an 11x11 chess variant with modified rules.',
  },
  {
    year: "2023",
    date: "December",
    descriptionHtml:
      'Built <a href="https://x.com/LordGhostX/status/1741129443194634748?s=20">GhostNet</a>, a peer-to-peer decentralized communication protocol.',
  },
  {
    year: "2023",
    date: "December",
    descriptionHtml:
      'Published my <a href="https://x.com/LordGhostX/status/1741544247763796286?s=20">2023 year in review</a>.',
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("timeline-list");
  if (!list) {
    return;
  }

  const { escapeHtml, sortTimelineRecentFirst } = window.Portfolio;
  const sortedItems = sortTimelineRecentFirst(timelineItems);

  list.innerHTML = `${sortedItems
    .map(
      (item) => `
    <article class="timeline-item">
      <div class="timeline-marker" aria-hidden="true">
        <i class="fa-solid fa-rocket"></i>
      </div>
      <div class="timeline-card">
        <div class="timeline-date">
          <span class="timeline-year">${escapeHtml(item.year)}</span>
          <span class="timeline-month">${escapeHtml(item.date)}</span>
        </div>
        <p>${item.descriptionHtml}</p>
      </div>
    </article>
  `,
    )
    .join("")}
    <div class="timeline-end" aria-label="Start of timeline">
      <div class="timeline-marker" aria-hidden="true">
        <i class="fas fa-map-marker-alt"></i>
      </div>
      <span>Start of timeline</span>
    </div>
  `;
});
