# Projects

## Two Decades of Projects
2000 - Current {.subtitle}

|  Company        | Duration       | Comment |
| --------------  | -------------- | ------- |
| Deutsche Bank   | 2015 -         | UI Framework|
| QPlot           | 2009 -         | Visual Ideas |
| People Designs  | 2014 - 2018    | Website Contracting |
| University      | 2000 - 2009    | Scientific Software |

## Deutsche Bank
2015 - Current {.subtitle}

|  Project        | Department      | Start    | Comment |
| --------------  | --------------- | -------- | ------- |
| Angular Select  | Open Source     | 2018 Mar |         |
| Corporate Events| Corporate Action| 2018 Jan | Poc     |
| Security Conf   | Security Lending| 2018 Jan | Poc     |
| Global Console2 | Equity          | 2017 Oct |         |
| Market Clearing Console | Market Clearing | 2017 Jan | |
| GMI AOF Form    | Global Markets  | 2016 Jun |         |
| Kingslanding    | Open Source     | 2016 Apr |         |
| SLA Events      | CPort           | 2016 Mar |         |
| Operations Management | MI        | 2016 Feb | Poc     |
| Entitlement Analysis | CPort      | 2016 Jan | Poc     |
| DBVals Statement| DBVals          | 2015 Sep |         |

![Statistics 2016 - 2017](https://s3.amazonaws.com/qp-photo/db-stash-activity.PNG)


Angular Select

: Mar 2018
: Add select angular spec

### Global Console
Reusable UI framework for Angular 5 {.subtitle}

![Global Console](https://s3.amazonaws.com/qp-photo/mc-common2-header.PNG)

Single operation UI framework

: Oct 2017 -
: *Angular* *Sass* *Ag-grid* *Highcharts* {.labels}

Highlights

: - Fields: Custom form layout and field validation via template and reactive form engine
  - Calendar: Use _angular-calendar_ to create custom monthly calendar and events view
  - Datepicker: Custom single date and range date picker with consistent look and feel
  - Charts: Theme pie, column, stack charts with consistent look and feel using *Highcharts*
  - Documentation: Support Bootstrap documentation page layout with quick navigation list
  - Grid: Use *Ag-grid* for sophisticated business grid usage with custom theme designed

![Report Field Customization](https://s3.amazonaws.com/qp-photo/mc-common-customize.PNG)

::: div {.flex}
![Single Date Picker](https://s3.amazonaws.com/qp-photo/mc-common-datepicker.PNG)
![Date Range Picker](https://s3.amazonaws.com/qp-photo/mc-common-rangepicker.PNG)
:::

![Calendar Events](https://s3.amazonaws.com/qp-photo/mc-common-events.PNG)

![Form Layout and Fields Handling](https://s3.amazonaws.com/qp-photo/mc-common-form2.PNG)

### MC Console

Large scale reusable UI framework

: Jan 2017 -   
: *AngularJS* *Bootstrap* *Webpack* *Sass* *HTML5* {.labels}
: Served as AngularJS architect for designing reusable framework for more than 35+ banking applications in Market Clearing product sector. The product provides a single UI for operations, container for apps in one place with standardized navigation and look and feel. It also serves as a rapid application dev framework with a set of directives and services, ex. headers, navigation, entitlements, etc, to facilitates onboarding of new apps.

![MC Common Code](https://s3.amazonaws.com/qp-photo/mc-common-code.PNG)
![Common Icons](https://s3.amazonaws.com/qp-photo/mc-common-icons.PNG)

::: div {.flex}
![Light Dark Theme Colors](https://s3.amazonaws.com/qp-photo/mc-common-colors.PNG)
![Common Form](https://s3.amazonaws.com/qp-photo/mc-common-form.PNG)
:::

![Common Sidebar](https://s3.amazonaws.com/qp-photo/mc-common-sidebar.PNG)
![Common Table](https://s3.amazonaws.com/qp-photo/mc-common-table.PNG)

Highlights

: * Prototype: Use AngularJS and Bootstrap for fast development
  * Re-usability: Design reusable branding, header, footer, menu as well as * pluggable generic services
  * Style Guide: Standardized style sheet for consistent look and feel across browser and applications
  * Authorization: Integration with authentication and authorization service for application security
  * Color Design: Extract color from design spec to form three background, three front text and border color
  * Theme: Support light and dark theme and dynamic toggle in-between
  * Icon: SVG icon design and packaging for common UI and business actions
  * Animation: Custom animation keyframe design with fallback to no-animation
  * Selection: Custom directive for single and multiple selection form input with consistent look and feel
  * Layout: Support customizable dashboard UI layout with responsible design
  * Compatibility: Support both IE 10/11 and Chrome browser
  * Component: Design fly-in menu for switching between angular applications
  * CSS: Modular layout and component design
  * Testing: Work with a test team to facilliate UI automation

### GMI AOF Account

Bank account opening form

: 06/15/2016
: *AngularJS* *Bootstrap* *Gulp* *Form* *Generator* *Book Chapter* {.labels}
: Provided *AngularJS* UI architect for GMI West AOF applications. Served as the tech lead and project manager of six team members (UIs, API, backend developers and business analysts). Large banking account open form, categorized by pages and regions, needs to be displayed, validated and submitted for end-users. **I held morning standup meeting in daily basis, and provided demos to shareholder in weekly basis, as well as providing architect training for entry level UI developers**.

![AOF Form](https://s3.amazonaws.com/qp-photo/aof-firm-prototype.PNG)

Highlights

: - Theme Design: Extend Bootstrap following corporate theme guideline
  - Form Directive: Data driven form generator based on field type and form layout
  - Front-end Build: AngularJS custom Gulp build within corporate infrastructure
  - Hierarchy Routes: Book-like chapter navigation between different forms for multiple regions
  - Form Design: Consistent form element between IE/Chrome browser, including radio, date and dropdown
  - Continuous Integration: Jenkins deployment with every Git commit
  - Fields Meta: Remapping of form fields and styling between API and UI
  - Modular CSS: CSS framework extending bootstrap, other vendors and individual page components
  - Modular JS: AngularJS framework with each feature linked as dependency
  - Async Operations: series of async calls chained together to perform UI tasks
  - Form validation: Validation driven by meta data provided by form API
  - Page action: Excel like validation and action rules based on user input
  - MVC Model: Extremely fat model design in MVC approach handling business logic

### Kingslanding

: 04/26/16
: *NodeJS* *Mongoose* *Restify*
: A quick API server setup using mongoose and restify. Configuration files are used to setup model, routes and restful services.
: [Repo](https://github.com/windmaomao/kingslanding)

### SLA Event

Report delivery and SLA notification system

: 03/16/2016
: *NodeJS* *AngularJS* *Kingslanding* {.labels}
: Provided NodeJS backend / AngularJS UI for report delivery and SLA breach notification system for 1000 daily reports from US West and East region. I served as the lead architect and developer for data API, time critical SLA breach as well as batch email summary generation and delivery. 

### DBVals Audit

Four-eyes-check statement audit

: 09/16/2015
: *AngularJS* *Grunt* {.labels}
: Served as a lead front-end architect of *AngularJS* and UI/UX for an enterprise statement 4-eyes-check solution for 25, 000 customers worldwide. I also **served as the sprint master for 8 people team (FA, QA, Dev and Owner etc.) in daily basis**. I drafted the migration plan and collected the preliminary analysis on-boarding 25,000 users to the company banking entitlement system. I also drafted the service layer for communicating with *Auth/WebSSO* entitlement service, which had been used by five other application since.

![DBvals Statement Audit](https://s3.amazonaws.com/qp-photo/db-dbvals-purple.png)

![DBVals Test Coverage](https://s3.amazonaws.com/qp-photo/dbVals-test-coverage.PNG)

Highlights: 

: - Work with *Windows* environment
  - Design page layout with *Sketch*
  - Design front-end framework with custom *Grunt* build
  - Develop recipient email list directive
  - Unit test controller, directive and services
  - Generate code coverage 80% above
  - Perform parallel tasks on page load
  - Design multiple entity selector workflow
  - Add *CSRF* token protection for security
  - Add command line tool via flatiron
  - Work with *MongoDB* (monk) for bookkeeping
  - Work with *Oracle* database query and dump
  - Use request to issue service call to on-board user

### Others
Small projects and proof of concept projects {.subtitle}

Corporate Action UI 

: Jan 2018
: Prototype the calendar view

Agency Security Lending 

: Jan 2018 - Feb 2018
: Prototype the website for dashboard and performance summary page
: - Dashboard snapshot: 
  - Performance summary: Multi page

Operations Management Dashboard

: Feb 2016
: MI
: Prototype custom table for dashboard 
: - Need data for each sub product by region
  - Current levels (T)
  - Trending required, ex. 30 day rolling average (30)
  - RAG statuses based on trending

Entitlement Analysis 

: Jan 2016
: *NodeJS*{.l}
: Use mongodb dump to analysis complex relationship inside entitlement system

![Entitlement Analysis](https://s3.amazonaws.com/qp-photo/dbvals-entitlement-analysis.PNG)

## QPlot
2009 - Current {.subtitle}

### Contract
Contracting work with client sponsored projects {.subtitle}


|  Project       | Company        | Client  | Start     |
| -------------- | -------------  | ------  | --------  |
| Diagram        | Stim           |         | 2017 Aug  |
| Prepare 3      | PeopleDesigns  |         | 2016 Aug  |
| SRCE           | PeopleDesigns  |         | 2016 Jan  |
| CleanAir       | CleanAir       |         | 2015 Nov  |
| Guided Workout | TopFitPros     |         | 2015 Jun  |
| Admin Portal   | Ndustrial IO   |         | 2015 May  |
| Admin App      | Medecision     |         | 2015 May  |
| NCPS Drupal    | NC Public School |       | 2015 Apr  | 
| Recipe         | TopFitPros     |         | 2015 Feb  |
| Chipra         | CCNC           |         | 2015 Feb  |
| NewStone Realty | NSR           |         | 2015 Jan  |
| Veolia         | ICFI           |         | 2014 Nov  |
| Saint Gobain   | Saint Gobain   |         | 2014 Sep  |
| Recovery       | Recovery Hub   |         | 2014 Sep  |
| DataTools      | RxAnte         |         | 2014 Sep  |
| Prepare 2      | PeopleDesigns  |         | 2014 Aug  |
| OBChat         | PeopleDesigns  |         | 2014 May  |
| HAARP          | DrupalConnect  | Harvard | 2014 Apr  |
| Stemcell       | AlphaMed Press |         | 2014 Jan  |
| Awards         | DesignHammer   | PGH     | 2013 Oct  |
| Oncology       | AlphaMed Press |         | 2013 Sep  |
| Advising Circle| Duke University|         | 2013 Jun  |
| Trinity        | Duke University|         | 2013 Feb  |
| TEDAR          | ArchSmart LLC  | DHS     | 2012 Jul  |
| ??             | Metrostar      |         | 2012 May  |
|DCI-IT Reporting| Duke Medical   |         | 2012 Apr  |
| PharmTrac      | PlusDelta Tech |         | 2012 Feb  |
| WebinarFunnel  | Teryn Ashley   |         | 2011 Mar  |
| JQF Management | JQF            |         | 2011 Jun  |
| Orders         | DataRecoverMan |         | 2011 Mar  |
| Simwijzer      |                |         | 2010 Sep  |

Stim

: 8/17/17
: Diagram creation
: *Prototype* *Angular2* *GoJs* {.labels}
: [Codepen](https://codepen.io/windmaomao/pen/prRWKg)

Guided Workout

: 2/16/15
: TopFitPros
: *AngularJS* *NodeJS* {.labels}
: Proof of concept of recipe ingredients guide application where users are guided to select healthy food based on carbs, proteins, fats and other personal preference. Internal state machine is built so that user will be suggested with choices based on six guidances step by step. At each step, user might be stopped to ask to substitute with healthy food or adjust food quantities based on personal preference.

Meds Dashboard

: Sep 2014 - Mar 2015
: RxAnte
: Provided enterprise PHP/Drupal development, support and deployment for a hospital/insurance/doctor relationship web application which helps their patients to adhere with their existing medications therefore upgrade ranking star in the healthcare system. The projects creates dashboard to present data collected from doctor office and insurance company, and try to predict the patient behaviors. Analyzed data for each account (multi-tenent) are sampled from 10-20 contracts with average 0.5 to 5 millions patients.
: - Environment: Drupal 7 deployed in centOS with vagrant support
  - HIPPA Server: HIPPA for health care privacy with two factor VPN protections
  - Continuous Integration: Continious integrated dev server with auto git pull
  - Service API: Use Slim framework to build rest service API that hosts all data
  - Theming: Drupal theme and renderable array are extensively used
  - IE 8 Compatibility: Resove background, round corner, table-cell and css compression

HMS -HSDM

: Harvard
: Feb - May 2014
: Provided Drupal 7 architect and development for Harvard university HR hiring process. The project creates 8 content types, 6 user roles, and 6 custom workflow supporting 5 distinct hiring state. Fields are shared between different content and has custom permission control built-in to limit access by user roles and hiring states. Automatic tests has been performed to rigorously make sure each user role and hiring state is implemented correctly.
: - Data Modeling: candidate, instructor, location etc
  - Workflow and Permissions:design workflow states and transition permissions
  - Automated Test:Design automatic web test to test user role and permissions
  - Form Customization: conditional fields with roles permissions


Stemcell 

: Jan - Feb 2014
: AlphaMed Press
: Drupal 7 migration and redesign. Redesign of web portal hosting latest journal article migrated from a legacy Joomla database. Lead a team of 5 with two backend and one front-end developers, and one content manager to accomplish the site. And we hit a deadline right before the site is ready for two conference audience across US in cutting edge cancer research communities. (150 hours)
: - Design migration strategy from Joomla
  - Construct 25 pages with various layouts
  - Two week deadline met, finish fast and deploy solid

Awards

: Nov 2013 - Apr 2014
: DesignHammer
: Practice Greenhealth
: Provided Drupal 7 architect and development for a hospital startup environmental excellence awards application for more accurately meanture and track sustainbility performance of hospitals by allowing members to assess and track sustainability accomplishments. 320 awards (by 2013) are given to health care facilities and business members that show achievement in varying levels of excellence in sustainability overt he course of the calendar year. The project evloves into discovery, phase I, phase II and deployment stages, and took 9 month and 2000 billable hours by a team with two developers (me as the lead) and one project manager. The site has been launched with stats of 800,000 responses, 200 hospitals and 25,000 peek daily page views.
: - Drupal Migration: Custom module to handle large complicated dataset migration from legacy excel sheets
  - Organic Group: When application is created, 8000 questions are auto-populated inside
  - Form API: Questions are presented using Form API with input type dynamically populated from database
  - Dashboard Design: Display all application percentage completion status for each client
  - Review Workflow: Reviewer dashboard to assign, track and manage review process
  - Cron & Batch: Batch job is heavily used for time-consuming functionalities, ex. Creation and reporting
  - Mathematic Formula: Excel cell calculation is implemented between questions upon frone-end
  - Score Management: Points are assigned for each question, and totaled for each application
  - Report & Export: Mass data assignment with import and export capability
  - Browser Compatibility: IE 7,8,9 38% user using IE7 and 96% using Windows

Oncology

: Sep 2013 - Feb 2014
: AlphaMed Press
: Redesign in Drupal 7 architect and migration from legacy Joomla site of two flagship sites Stemcell and Oncologist which integrateds with iPhone/iPad app using “One Web” solution and pulling articles daily through Stanford Hirewire. The site requires 8 user roles, 22 content types, 26 custom modules and 160 admin views. They hosts 3000 articles, 48,000 registered users and 120,000 unique visits per month.

: - Data Modeling: article, interactive Ads, image, video and poll etc
  - Data Migration:custom migration from Stanford HighWire
  - User Interface: desktop / mobile theming and interaction
  - Content Management: import/export and manage content categories



Trinity

: Feb 2013 - Aug 2013
: Duke University, contracting for Department of Trininy College of Arts & Sciences, [Duke Trinity](https://trinity.duke.edu/)
: *Drupal* {.labels}
: Redesign in Drupal 7 architect of department landing page and new students advising network application. The project splits into discovery, development, theming and support stages, and requires 300 panel layouts, 12 content types, 10 custom modules and 60 custom views and took 8 month and 1000 billable hours to finish for single developer. After the launch the site has been used by 1,400 undergrades, 640 faculties in 50 majors.
: - Data Modeling: page, panel and widgets
  - Layout Design: create various combination of page layouts
  - User Interface: apply layout pattern to multi departments
  - Directory Search: integrated with internal directory search

![Trinity Major & Minor](https://s3.amazonaws.com/qp-photo/trinity_major2.jpeg)

Advising Network

: Drupal 7 development. Allows students and mentors to work together to gather and assess
artifacts and evidence of student learning, and engages this process through a core set of professional mentors and allied colleagues. Team with one php developer and project manager are assembled and provided to work with one php developer, content manager and director of the
department. (640 hours)
: - Design feeds and import from various of data source
  - Custom template design to display advising board circles
  - Allow content manager to manage faculty profiles

![Trinity Advising Circle](https://s3.amazonaws.com/qp-photo/advising_circle.png)


TEDAR

: July 2012 - Jan 2013
: ArchSmart LLC, contracting for Department of Homeland Security
: *Drupal* *Solr* {.labels}
: [Test&Evaluation Data Archival Repo](https://www.sbir.gov/sbirsearch/detail/385521) will provide a repository for T&E event data, M&S event data, and other analysis event data, consisting of very large amounts of processed and raw structured and unstructured detection device data collected by T&E and M&S events and analyses of these data. Authorized users will be able to search for and access these data collections and retrieve data relevant to their business needs, such as performing engineering analyses and studies.
: Contractor (telecommuting, remote city) Drupal architect and developer for government inventory tracking system where nuclear device documents and reports are processed to be searchable across US collaboration units. Access control list design is my focus where each organization needs to be able to assign personnel/role to manage documents per document per user or user role basis.  (250 hours)
: - Evaluate application
  - Custom module design

PharmTrac 

: Feb 2012 - Feb 2013
: [PlusDelta Technologies](http://www.plusdeltatech.com/)
: *Drupal* *iPhone* {.labels}
: Build startup flagship product that tracks medication inside hospitals like Fedex. I help build a medication tracking and workflow process improvement solution for hospital pharmacies that uses handheld smart mobile technology with an integrated web-enabled software that verifies, records and monitors every step in the process of medication preparation, dispensing, and delivery. The project mainly builds an API that can talk to mobile devices and takes 1 year with 2000 billable hours to finish. It has been deployed and used by 4 hospitals.
: - Data Modeling: dispense, med, order, and locations.
  - Tracking Workflow: design workflow states for medications.
  - Mobile Integration: design API to connet with devices
  - Tracking Wallboard: large screen monitor for hospital activity.

![Pharmtrac Workflow](https://s3.amazonaws.com/qp-photo/pharmtrac_workflow.png)

![Pharmtrac Settings](https://s3.amazonaws.com/qp-photo/pharmtrac_settings.png)


Duke DCI-IT Reporting

: Apr - Jun 2012
: Duke University Medical Center
: *Drupal* {.labels}
: Drupal 6 module & theme development. It allow users of different group to run reports and charts over oracle database queries. Reports/Charts can be run and viewed through website, email or cron service. Reports can be accessed by users from different group over the campus and are highly restricted by group member only. Users can login to the system through LDAP without creating multiple accounts. All user functionalities can be accessed through user or group Dashboard.
: Contractor (telecommuting, same city) Drupal architect and developer for hospital reporting center where user can login through Microsoft Ldap and run report and chart with scheduling capability. Oracle database access is required, custom content report module and admin theme are designed and integrated through Drupal 6 atrium (or commons) profile.

WebinarFunnel

: 03/03/2011
: Teryn Ashley Enterprises
: *PHP* *MySQL* *Video* {.labels}
: Developing a webinar replay system playing pre-recorded webinar that can be watched by invited users on preset (recurring) time. A webinar replay system , integrated with *Infusionsoft*, plays pre-record webinar that can be watched on preset (recurring) time. 

![Replay Webinar System](https://s3.amazonaws.com/qp-photo/webinarfunnel_ui.jpg)
![Replay Webinar System](https://s3.amazonaws.com/qp-photo/webinarfunnel_user.gif)

JQF Management

: 06/11/2011
: *Wordpress* *PHP* {.labels}
: [Apartment rental that you can trust](http://aggievillas.net/). Wordpress project that I worked alone for client Cindy Fenty who manages couple of real estate properties.

![JQF Management](https://s3.amazonaws.com/qp-photo/jqf_management.png)

DataRecoverMan.com Orders

: 03/02/2011
: DataRecoverMan
: *PHP* {.labels}
: Help DataRecoveryMan.com build an application for managing inventories of hard drive repair orders and tracking order status and generating order invoice.

![DataRecoverMan Orders](https://s3.amazonaws.com/qp-photo/drm_ticket_sm.png)

Simwijzer.nl

: 09/06/2010
: *PHP* {.labels}
: Choose from variety of Sim cards from different minutes, providers, and price plans. A sim card sale affiliation site where contracts can be queried by combination of user selection criterion.

![Simcard Plans](https://s3.amazonaws.com/qp-photo/sim_card_portfolio.gif)

### Internal
Company sponsored projects & ideas {.subtitle}

|  Project           | Start    | Comment |
| ------------------ | --------:| ------- |
| Keymod             |  3/01/18 |         |
| Figure Caption     |  2/13/18 | Open source |
| Github             |  1/23/18 | Success, redesign of knowledge-base |
| Statement & Flow   | 12/22/17 | Success, upgraded from Monthly |
| Account            | 12/24/16 |         |
| Proture            |  1/04/16 |         |
| Monthly & Annually | 12/18/16 | Success |
| Docs to Go         |  1/02/16 |         |
| Knowledge-base     | 11/27/15 |         |
| Qplot Seven        |  8/09/15 |         |
| PKB Tasks          |  2/21/15 | Success |
| Environment Color  |  6/17/14 | Open source |

Keymod (aka. Single handed)

:  3/01/18
: *Prototype* *OSX*
: Started couple of years back, but never got finished. This is a redo, but put serious thought on how to experiment and integrate that into daily practice.
: [Online](https://codepen.io/windmaomao/pen/eMJRqJ)

Figure Caption

: 2/13/18
: *Markdown It* *Plugin*
: A Markdown It plugin that converts img tag into figure with caption that can be themed
: [Repo](https://github.com/windmaomao/markdown-it-figure-caption), [Codepen](https://codepen.io/windmaomao/full/xYmMdb)

Github (aka. Knowledgebase)

: 1/23/18
: *Vue* *Markdown* *Github*
: Started as a new workflow from working local markdown file to online viewer, this project goes very successful in becoming the dream-about personal knowledgebase system. And from idea to production it takes less than one month. 
: [Online](https://windmaomao.github.io),[Repo](https://github.com/windmaomao/windmaomao.github.io)
: - Use `Codepen` to prototype the site and features
  - Use `Markdown` local to draft all documentations
  - Auto deployment via `Github`

Account (aka. Qplot 7)

: 12/24/16
: Finally we need some consistent platform to build legacy data application, ex. resume etc.
: [Repo](https://bitbucket.org/qplot/account)

Proture
: 1/4/16
: Create a workflow so that building a quick mobile app using business data.
: *Firebase* *Angular* *Outliner*
: [Repo](https://bitbucket.org/qplot/proture)

Monthly and Annually
: 12/18/16
: *Google Drive* *Excel*
: Need to have a centralized location to keep track of all money coming in and out of the system therefore serves as a base for stats. It evovles  to keep track of balance, flow of all bank and investment accounts for each month and year for 2012 - 2017. It splits into other files at 2018.
: [Online](https://docs.google.com/spreadsheets/d/1mZB7fcpZYH2kqISwrdqoeMNSwOK5IW6DDAZJVUhiKIA/edit#gid=58175055)

Docs go

: 1/2/16
: Be able to create simple page so that it’ll navigate to all the documentations
: [Repo](https://bitbucket.org/qplot/docs/overview)

Knowledge-base

: 11/27/15
: Centralize project, payment, and other knowledge-base information into more organized form

Qplot Seven 

: 8/9/15
: QPLOT website, blog, and some experiment projects
: [Repo](https://bitbucket.org/qplot/qplot)

PKB Tasks

: 2/21/15
: PKB ended up with tracking the project tasks and timesheet for Qplot. It’s very effective and has been used for couple of years since then. It's low cost to build and maintain. All timesheets has been checked into repo.
: *AngularJS *NodeJS*
: [Repo](https://bitbucket.org/qplot/qplot-pkb)

![PKB Tasks](https://s3.amazonaws.com/qp-photo/pkb_tasks.png)
![PKB Calendar](https://s3.amazonaws.com/qp-photo/pkb_times.png)
![PKB Tracking](https://s3.amazonaws.com/qp-photo/pkb_tracking.png)

Environment Color
: 6/17/14
: Adds an environment indicator color bar to either top or bottom of all pages to indicate if you are working in 'local' or 'production' environment.
: *Laravel* *Plugin*

## People Designs
2014 - {.subtitle}

### Prepare 3
Prepare for your care {.subtitle}

: 08/1/2016
: `Laravel`, `AngularJS`, `Bootstrap`, `HIPPA`, Book Chapter, Video and Audio
: https://prepareforyourcare.org

Provided *Laravel 4* and *AngularJS 2* architect and development for a new version of PrepareForYourCare.org, a hospital stage III counseling program to help people prepare the end of their life. The project creates flexible tree-kind chapters navigation with video/narration helper for elder visits. Since launch, **200 doctors and 50,000 users around the globe have used the site**.

![](https://lh3.googleusercontent.com/I4xr1EBWDPej9CVO5J_x17orxY8pgsNqXUtubRMnS0EdFaR231U-MmXkSU1msYj4Y88R6jp4TXAOPXbFEqsapEUYAOFYFPT6SN-lW7E8mtJuKhH9YUFE2C6rWODGrgbGJyofRQ)

Highlights:

- HIPPA Server: *HIPPA* server host and deployment plan protecting health care privacy
- Authentication: Two-factor *SMS* enabled authentication for better security protection
- Password Recovery: Recovery based on either username or 3 out of 6 question answers
- Reusable Component: Modular design for both *CSS* and *Javascript* in developing UI components
- *508* section: Disability compliance with video, and narration support with high contrast 
- Multilingual Support: Three language translations made for pages, snippets, and graphics
- Multi-tenant: Theme and content changes entirely based on access domain 
- Responsive Design: Bootstrap is used for fast prototype for desktop, iPad and other devices
- Template Design: Allow manager to modify each page content stored in file storage
- File Management: administer language files through web interface with easy switch
- Browser Compatibility: Support *Chrome*, *Safari*, *Firefox* and *IE* 8, 9 and 10

### Prepare 2

Provided Laravel 4 architect and development for new version of PrepareForYourCare, a hospital stage III counseling program to help people prepare the end of their life. The projects creates flexible tree-kind chapters navigation with video/narration helper for elder visits. The application has been used by 200 doctors and 50,000 users around the globe.

Highlights:

- HIPPA Server: HIPPA server host and deployment plan protecting health care privacy
- Authentication: Two factor SMS enabled authentication for better security protection
- Password Recovery: Recovery based on either username or 3 out of 6 question answers
- 508 section: Disability compliance with video, and narration support with high contrast 
- Multilingual Support: Three language translations made for pages, snippets and grphics
- Responsive Design: Bootstrap is used for fast prototype for desktop, iPad and other devices
- Template Design: Allow manager to modify each page content stored in file storage
- File Management: administer language files through web interface with easy switch
Browser Compatibility: Support Chrome, Safari, Firefox and IE 8, 9 and 10

### Others

SRCE

: 1/30/16

OBChat

: 5/9/14

Prepare 2

: 8/6/14
: Renovation of Prepare Application




## University

2000 - 2009 {.subtitle}

### Summary

|  Project        | University      | Start    | Comment |
| --------------  | --------------- | -------- | ------- |
| QPlot Windowns  | Johns Hopkins   | 2006 Sep | |
| FJLib Bubble    | Johns Hopkins   | 2000 Sep | |


### Projects

![Battleship](https://s3.amazonaws.com/qp-photo/battleship_demo.jpg)

Battleship

: ??
: 06/09/2009



![FJGol Base](https://s3.amazonaws.com/qp-photo/FJGOL_base.png)

FJGol

: ??
: 05/16/2009


FJVis

: Matlab visualization package for simulation data

![QPlot Windows Software](https://s3.amazonaws.com/qp-photo/qplot_win_web.PNG)

QPlot Windows Software

: 09/28/2006
: Windows sotware which serves two purposes. A) Visualize scatter data from your notpad, supporting line point series and tabular column field data. B) Allow to extract data value from published graph tilt graph and irregular shape graphs is supported.

FJLib Bubble

: Numerical library for bubble simulations
: 06/12/2003
: `C++`, `Object Oriented`
: https://github.com/windmaomao/fjlib


