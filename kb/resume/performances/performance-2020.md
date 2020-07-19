# Performance Mid Year 2020

## Contribution Objectives

### Deliver OBI project to production

#### Overall Contribution Comments

- Worked with OBI SAD doc and Proposal for 2021
- Led daily OBI tech sync meeting
- Developed OBI UI framework and UI widgets library
- Delivered OBI sprint planned deliverables
- Used backend micro-service more effectively
- Utilized Odessey contineous integration pipeline

#### Objective 

For the ongoing OBI project, I'm responsible of managing the development team sprint cycle, providing technical implementation under the business spec and architect, and deploying the project codebase into production in the prescribed budget/priorities.

#### Measurement

Success deployment of the OBI into production. Satisfactory rating from the current OBI user base. 

#### Activity/Self-Evaluation

The following is the list of activity highlights for the ongoing OBI project.

- Work with Yogi/Jose/Ravi to provide the initial OBI Software Architecture Document(SAD).
- Work with Yoig/Dave/Jose to provide the initial draft of OBI Proposals for 2021.
- Lead bi-weekly OBI sprint tech planning meeting with all programmers to come up the sprint plan for the upcoming sprint requirement. 
- Lead daily OBI tech sync meeting for all programmers and QA(s) to review the code level implementation and quality assurance.
- Join weekly OBI business product sync to help understand the next business design requirment for upcoming development sprint.
- Develop OBI UI framework, especially in terms of the workflow of collecting user's outside business interests form supporting creat/draft/deactivate operation for various user roles. Highlights for this framework includes,
  - form section can be collapsible to support large content
  - form question supports multiple level hierachy branches
  - realtime error check is performed for each section 
  - form content is generated from scritable CRUD engine
- Develop OBI UI widgets, especially in all types of form widgets, to meet the gap between Centaurus library and OBI requirement. Highlights includes,
  - Async, async utilities to faciliate API communication 
  - Inputs, MultiSelect, Typehead, Datepicker etc.
  - Form, to automate form generation and handling 
  - Table, to automate table generation and customization
  - Mobile, auto detect mobile to make content responsive

### Project & Delivery Objectives

#### Objective

Effectively Deliver and meet 2020 Program commitments in an efficient way and in line with stakeholder, IT wide standards and bank wide Regulatory commitments.

#### Measurement
Success deployment of OBI into production with business timeline and priorities.

#### Activity/Self-Evaluation

While most of the work has been stated in the previous objective, the following briefly lists activity related to the delivery of OBI product.

- Join the discussion group for OBI legacy data migration and faciliate it with the UI work to accomendate the smooth transition based on the migration plan.
- Actively work with business owner in delivering OBI sprint planned deliverables to QA/UAT server in bi-weekly basis.

### Technology transformation

#### Objective

Enable micro-services, containerization and infrastructure as code principles to achieve end to end automation and increased portability of applications
Improve Self Service, adoption of. DevOps/NJobs practices

#### Measurement
Adoption of OBI UI/backend components in terms of using micro and portbility of the service

#### Activity/Self-Evaluation

I help draft the spec of the micro-services for OBI backend API, where the unit is designed as a stand alone service with dependencies on mainly the personal profile information. We have altogather 20 different micro single purpose resources built where each of them can be accessed upon request.

I, with team members, draft the frontend as a stand alone website with a sole dependency on the above OBI backend service. Upon each page load, one to mutiple backend resources are requested and we streamline the data flow from top of the web components to the bottom of the web components. At strategic web component locations we build blocking point to validate the data stream before sending further down the components tree. This further garentee the sucess of the web page operation by imposing prefixed (or semi-fixed) data flow.  

Frontend code is starting to carry service layer to communicate with backend indirectly. This centralization, of not writing API directly to the page, made it happen to understand the magnitude of all API calls as well as where each call has been used in web pages. For large scale (or growing) application, it has tremondous value when it comes to the scalability and maintainability of the project.

In short, async operation, not linear in time, have been handled in a much more managable way in OBI for consuming the micro services. And this will in turn add to the portobility of both the backend and UI components.

### Process transformation

#### Objective

Provide simplified solutions and standards around Developer Tooling, Automation, APIs, and other mans required to create an automation first mentality, focused on standardization and solving for commonality Increate self-service, re-usable code and automated application testing to increase change efficiency effectiveness.

#### Measurement

The adoption rate of OBI project in the automation of testing, building and deployment

#### Activity/Self-Evaluation

The team modified the OBI frontend and backend deployment to the DEV/QA/UAT server using the Odessay Continuous Integration pipeline where upon each code commit, tests are run and it alerts the deverloper to modify if failed. This speed up the development cycle tremendously. 

Additionally before submitting the latest frontend code to repository, our local pipeline will check the code quality briefly with `lint` and `husky` to prevent code issues caused by syntax or local test failure. This reduces the turn around time and improves the efficency for each developer. 

## Behaviors

### Conduct and Ethics Standards

#### Conduct and Ethics Comments

Ethics comments includes

- I took more ownership in OBI project this year to lead tech team in daily development work. This gave me more opportunities in understanding the overall scope of the work, and coming up distribution of the work among team members. I tried my best to assign work to team member based on his or her capability and availability, and help each of them to fulfill the sprint goal. During this process, I learned that each carries different strength since each is different person. I showed respect to each of them, and I strongly believe each of them can improve themselves along the way given enough guidence. 

- Developing client relationship is a long term business, coming from iComply and now transitioning into OBI space, I felt even stronger on maintaining all existing business lines. Being transparent to the business owner group, suggesting cost effective solution, and taking appropriate risk to explore the possibility but not jeopardizing the entire project sucess, and along the way hopefully retrospect and come up (or refine) the pipeline toolset to continue develop (or maintain) the project moving forward. 

- My personal favorite is to explore and experiement the cost associated with development and maintenance. Therefore I tried my best to guard the quality assurance of the project as well as the readibility and maintainability based on the teams level. Production issue probably is the most expensive item to address and unfortunately it also comes in the end. So I tried my best to forsee the possiblity of these production issues and come up ways to minize their impact during the development stage.

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







