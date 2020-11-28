# Performance Mid Year 2020

## Manager Overall Comment
Fang has a very good first half of 2020. OBI squad has adopted SCRUM delivery model with 2 week sprints. The squad follows all the SCRUM rituals like daily stand up, sprint planning, sprint retro, dev sync ups very diligently. Practicing these rituals along with continuous delivery every 2 weeks does require lot of close coordination and collaboration among all the squad members and co-location helps in facilitating the process. However in case of OBI, co-location of product squad became challenging due to onset of pandemic which required all team members to work remotely and there was great possibility that this will affect team productivity ultimately impacting project timelines. To my surprise, after initial hiccup team adjusted to the new working conditions very well. Fang played tremendous role in ensuring that Dev squad continues to have common shared vision of the product through constant communication and regular touch points.

Fang has been responsible for architecting UI of OBI and has been very good at mentoring junior developers like Zulmy and Miguel to make substantial contributions to overall UI of OBI. Off late Fang has voluntary come forward to create/setup test framework for automated regression test pack. This is highly commendable and does exhibit his willingness to work for greater good of the team.

In the coming months, I would like Fang to focus on integrating Centaurus (Brandnet Compliant UI Core Component library) with OBI and also enriching it with new components (including migration of OBI components into Centaurus library).

Fang is doing a good job leading the tech team and at times it is necessary to make decisions but i would like him to practice consensus based decision making so that decisions are backed up all members of the squad.

Overall Fang continues to show progress and growth and i wish him continued success for remainder of 2020.

## Contribution Objectives

### Overall Contribution Comments

- Delivered OBI to production for region AMER, APAC, EMEA this year.
- Led daily OBI Tech/QA sync meeting
- Developed OBI UI framework and UI widgets library
- Utilized Odyssey continuous integration pipeline
- Used backend micro-service more effectively
- Worked with OBI SAD doc and Proposal for 2021

### Deliver OBI project to production

#### Objective

For the ongoing OBI project, I'm responsible of managing the development team sprint cycle, providing technical implementation under the business spec and architect, and deploying the project codebase into production in the prescribed budget/priorities.

#### Measurement

Success deployment of the OBI into production. Satisfactory rating from the current OBI user base.

#### Activity/Self-Evaluation

The following is the list of activity highlights for the ongoing OBI project.

- Work with Yogi/Jose/Ravi to provide the initial OBI Software Architecture Document(SAD).

- Work with Yogi/Dave/Jose to provide the initial draft of OBI Proposals for 2021.

- Lead bi-weekly OBI sprint tech planning meeting with all programmers to come up the sprint plan for the upcoming sprint requirement.

- Lead daily OBI tech sync meeting for all programmers and QA(s) to review the code level implementation and quality assurance.

- Join weekly OBI business product sync to help understand the next business design requirement for upcoming development sprint.

- Develop OBI UI framework, especially in terms of the workflow of collecting user's outside business interests form supporting create/draft/deactivate operation for various user roles. Highlights for this framework includes,

  - form section can be collapsible to support large content
  - form question supports multiple level hierarchy branches
  - realtime error check is performed for each section
  - form content is generated from scriptable CRUD engine
  - field widget is extendable from preset widget collections

- Develop OBI UI widgets, especially in all types of form widgets, to meet the gap between Centaurus library and OBI requirement. Highlights includes,

  - Asynchronous, utility for API communications
  - Fields, MultiSelect, Typehead, and Datepicker etc.
  - Form, to automate form generation and handling
  - Table, to automate table generation and customization
  - Mobile, auto detect mobile to make content responsive
  - Animation, utility to enhance user experience

### Project & Delivery Objectives

#### Objective

Effectively Deliver and meet 2020 Program commitments in an efficient way and in line with stakeholder, IT wide standards and bank wide Regulatory commitments.

#### Measurement
Success deployment of OBI into production with business timeline and priorities.

#### Activity/Self-Evaluation

While most of the work has been stated in the previous objective, the following briefly lists activity related to the delivery of OBI product.

- Join the discussion group for OBI legacy data migration and facilitate it with the UI work to accommodate the smooth transition based on the migration plan.

- Actively work with business owner in delivering OBI sprint planned deliverables to QA/UAT server in bi-weekly basis.

### Technology transformation

#### Objective

Enable micro-services, containerization and infrastructure as code principles to achieve end to end automation and increased portability of applications.

Improve Self Service, adoption of. DevOps/NJobs practices

#### Measurement
Adoption of OBI UI/backend components in terms of using micro and portability of the service

#### Activity/Self-Evaluation

I help draft the spec of the micro-services for OBI backend API, where the unit is designed as a stand alone service with dependencies on mainly the personal profile information. We have altogether 20 different micro single purpose resources built where each of them can be accessed upon request.

I, with team members, draft the frontend as a stand alone website with a sole dependency on the above OBI backend service. Upon each page load, one to multiple backend resources are requested and we streamline the data flow from top of the web components to the bottom of the web components. At strategic web component locations we build blocking point to validate the data stream before sending further down the components tree. This further guarantee the success of the web page operation by prescribed and validated data flow.  

In short, asynchronous operation of consuming the micro services, not linear in time, have been handled in a much more manageable way in OBI. And this will in turn add to the scalability and portability of both the backend and frontend.

### Process transformation

#### Objective

Provide simplified solutions and standards around Developer Tooling, Automation, APIs, and other mans required to create an automation first mentality, focused on standardization and solving for commonality Increate self-service, re-usable code and automated application testing to increase change efficiency effectiveness.

#### Measurement

The adoption rate of OBI project in the automation of testing, building and deployment

#### Activity/Self-Evaluation

The team modified the OBI frontend and backend deployment to the DEV/QA/UAT server using the Odyssey Continuous Integration pipeline where upon each code commit, tests are run and it alerts the developer if failed. This speeds up the development cycle tremendously.

Additionally before submitting the latest frontend code to repository, our local pipeline will check the code quality briefly with `lint` and `husky` to prevent code issues caused by syntax or local test failure. This reduces the turn around time and improves the efficiency for each developer.

Both are new changes that we implemented for OBI project this year.

## Behaviors

### Conduct and Ethics Standards

#### Conduct and Ethics Comments

Ethics comments includes

- I took more ownership in OBI project this year to lead tech team in daily development work. This gave me more opportunities in understanding the overall scope of the work, and coming up distribution of the work among team members. I tried my best to assign work to team member based on his or her capability and availability, and help each of them to fulfill the sprint goal as well as their technical goal. During this process, as I learned each carries different strength, I showed respect to each of them, and I strongly see their improvement along the way throughout this year.

- Developing client relationship is a long term business, coming from iComply and now transitioning into OBI space, I felt even stronger on maintaining all existing business lines. Being transparent to the business owner group, suggesting cost effective solution, and taking appropriate risk to explore the possibility but not jeopardizing the entire project success, and along the way hopefully retrospect and come up (or refine) the pipeline toolset to continue develop (or maintain) the project moving forward.

- My personal favorite is to explore and experiment the cost associated with development and maintenance. Therefore I tried my best to guard the quality assurance of the project as well as the readability and maintainability based on the teams level. Production issue probably is the most expensive item to address and unfortunately it also comes in the end. So I tried my best to anticipate the production issues, learn from them and come up ways to minimize their impact in later stage. This year I especially watched my manager and team members on this aspect and learned quite a bit while working with them. I hope I'll continue gaining knowledge in the future on this aspect.

#### Conduct and Ethics Standards

- Client Focus
  - Be a principled partner to our clients
  - Have a long term view for our business
  - Take appropriate risk
- Accountability
  - Take ownership
  - Maintain exemplary control and compliance, comply fully with regulations
  - Ensure sustainability
- Meritocracy
  - Make every effort to increase engagement
  - Strive for operational excellence
  - Deliver proactive service
  - Reward outstanding performance
- Partner
  - Be a partner and team player
  - Show respect
  - Demonstrate loyalty
- Stakeholder Management
  - Balance stakeholder views and interests
  - Act responsibly towards society
  - Seek diversity and inclusion
- Transparency
  - Build and maintain trust
  - Be honest
  - Foster and encourage open dialogue







