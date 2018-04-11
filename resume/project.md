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
| Entitlement Next| Equity          | 2018 Mar |         |
| Angular Select  | Open Source     | 2018 Mar | Delayed |
| Corporate Events| Corporate Action| 2018 Jan | Poc     |
| Security Conf   | Security Lending| 2018 Jan | Poc     |
| Global Console2 | Equity          | 2017 Oct |         |
| Global Console  | Market Clearing | 2017 Jan |         |
| AOF Form        | Global Markets  | 2016 Jun |         |
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
: *Angular* *Sass* *Ag-grid* *Flexbox* *Highcharts* *D3* {.labels}

Highlights

: - Sidebar: Use modern _Bootstrap4_ and _Flexbox_ to layout slider, ex. sidebar and edit panel
  - Diagram: Use _D3_ to create sophisticated tree and partition charts for entitlement
  - Fields: Custom form layout and field validation via template and reactive form engine
  - Calendar: Use _angular-calendar_ to create custom monthly calendar and events view
  - Datepicker: Custom single date and range date picker with consistent look and feel
  - Charts: Theme pie, column, stack charts with consistent look and feel using *Highcharts*
  - Documentation: Support Bootstrap documentation page layout with quick navigation list
  - Grid: Use *Ag-grid* for sophisticated business grid usage with custom theme designed

![Entitlement Selection in D3](https://s3.amazonaws.com/qp-photo/mc-common-entitlement-edit.PNG)

::: div {.flex}
![Radial Partition D3 Diagram](https://s3.amazonaws.com/qp-photo/mc-d3-radial-partition.PNG)
![Radial Tree D3 Diagram](https://s3.amazonaws.com/qp-photo/mc-d3-radial-tree.PNG)
:::

![Report Field Customization and Grid Generation](https://s3.amazonaws.com/qp-photo/mc-common-customize.PNG)

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

### AOF Account

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
: Prototype custom table for dashboard 
: - Need data for each sub product by region
  - Current levels (T)
  - Trending required, ex. 30 day rolling average (30)
  - RAG statuses based on trending

Entitlement Analysis 

: Jan 2016
: Use mongodb dump to analysis complex relationship inside entitlement system

![Entitlement Analysis](https://s3.amazonaws.com/qp-photo/dbvals-entitlement-analysis.PNG)

## QPlot
2009 - Current {.subtitle}

### Contract
Contracting work with client sponsored projects {.subtitle}


|  Project   | Company        | Client  | Start   |Comment|
| ---------- | -------------  | ------  | ------  | ----- |
| Diagram    | Stim           |         | Aug/17  |  |
| HMS - HSDM | DrupalConnect  | Harvard | Feb/14  | |
| Medication | RxAnte         |         | Sep/14  | |
| Awards     | DesignHammer   | PGH     | Nov/13  | |
| Stemcell   | AlphaMed Press |         | Sep/13  | |
| Trinity    | Duke University|         | Feb/13  | |
| TEDAR      | ArchSmart LLC  | DHS     | ?/12    | |
| PharmTrac  | PlusDelta Tech |         | Feb/12  | |
| Orders     | DataRecoverMan |         | Apr/11  | |

Stim

: 8/17/17
: Diagram creation
: *Prototype* *Angular2* *GoJs*
: [Codepen](https://codepen.io/windmaomao/pen/prRWKg)

Guided Workout

: 2/16/15
: TopFitPros
: *AngularJS* *NodeJS* {.labels}
: Proof of concept of recipe ingredients guide application where users are guided to select healthy food based on carbs, proteins, fats and other personal preference. Internal state machine is built so that user will be suggested with choices based on six guidances step by step. At each step, user might be stopped to ask to substitute with healthy food or adjust food quantities based on personal preference.

Trinity

: Feb 2013 - Aug 2013
: Duke University, contracting for Department of Trininy College of Arts & Sciences, [Duke Trinity](https://trinity.duke.edu/)
: *Drupal* {.labels}
: Redesign in Drupal 7 architect of department landing page and new students advising network application. The project splits into discovery, development, theming and support stages, and requires 300 panel layouts, 12 content types, 10 custom modules and 60 custom views and took 8 month and 1000 billable hours to finish for single developer. After the launch the site has been used by 1,400 undergrades, 640 faculties in 50 majors.
: - Data Modeling: page, panel and widgets
  - Layout Design: create various combination of page layouts
  - User Interface: apply layout pattern to multi departments
  - Directory Search: integrated with internal directory search

TEDAR

: 2012
: ArchSmart LLC, contracting for Department of Homeland Security
: *Drupal* *Solr* {.labels}
: [Test&Evaluation Data Archival Repo](https://www.sbir.gov/sbirsearch/detail/385521) will provide a repository for T&E event data, M&S event data, and other analysis event data, consisting of very large amounts of processed and raw structured and unstructured detection device data collected by T&E and M&S events and analyses of these data. Authorized users will be able to search for and access these data collections and retrieve data relevant to their business needs, such as performing engineering analyses and studies.

PharmTrac 

: Feb 2012 - Feb 2013
: [PlusDelta Technologies](http://www.plusdeltatech.com/)
: *Drupal* *iPhone* {.labels}
: Build startup flagship product that tracks medication inside hospitals like Fedex. I help build a medication tracking and workflow process improvement solution for hospital pharmacies that uses handheld smart mobile technology with an integrated web-enabled software that verifies, records and monitors every step in the process of medication preparation, dispensing, and delivery. The project mainly builds an API that can talk to mobile devices and takes 1 year with 2000 billable hours to finish. It has been deployed and used by 4 hospitals.
: - Data Modeling: dispense, med, order, and locations.
  - Tracking Workflow: design workflow states for medications.
  - Mobile Integration: design API to connet with devices
  - Tracking Wallboard: large screen monitor for hospital activity.

JQF Management

: 06/11/2011
: *Wordpress* *PHP* {.labels}
: [Apartment rental that you can trust](http://aggievillas.net/). Wordpress project that I worked alone for client Cindy Fenty who manages couple of real estate properties.

![JQF Management](https://s3.amazonaws.com/qp-photo/jqf_management.png)

WebinarFunnel

: 03/03/2011
: Teryn Ashley Enterprises
: *PHP* *MySQL* *Video* {.labels}
: Developing a webinar replay system playing pre-recorded webinar that can be watched by invited users on preset (recurring) time.

![Replay Webinar System](https://s3.amazonaws.com/qp-photo/webinarfunnel_ui.jpg)

DataRecoverMan.com Orders

: 03/02/2011
: DataRecoverMan
: *PHP* {.labels}
: Help DataRecoveryMan.com build an application for managing inventories of hard drive repair orders and tracking order status and generating order invoice.

![DataRecoverMan Orders](https://s3.amazonaws.com/qp-photo/drm_ticket_sm.png)

Simwijzer.nl

: 09/06/2010
: *PHP* {.labels}
: Choose from variety of Sim cards from different minutes, providers, and price plans.

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


