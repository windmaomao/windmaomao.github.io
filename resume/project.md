# Projects

## Deutsche Bank

### Summary

|  Project        | Department      | Start    | Comment |
| --------------  | --------------- | -------- | ------- |
| Corporate Events| Corporate Action| 2018 Jan | Poc |
| Security Conf   | Security Lending| 2018 Jan | Poc |
| Global Console2 | Equity          | 2017 Oct | |
| Global Console  | Market Clearing | 2017 Jan | |
| AOF Form        | Global Markets  | 2016 Jun | |
| SLA Events      | CPort           | 2016 Mar | |
| DBVals Statement| DBVals          | 2015 Sep | |


### Angular 5
Global Console 2 {.subtitle}

![Global Console](https://s3.amazonaws.com/qp-photo/mc-common2-header.PNG)

Single operation UI framework

: Date: Oct 2017 -
: Keyword: *Angular, Sass, Highcharts, Ag-grid*

Highlights

: - Fields: Custom form layout and field validation via template and reactive form engine
  - Calendar: Use _angular-calendar_ to create custom monthly calendar and events view
  - Datepicker: Custom single date and range date picker with consistent look and feel
  - Charts: Theme pie, column, stack charts with consistent look and feel using *Highcharts*
  - Documentation: Support Bootstrap documentation page layout with quick navigation list
  - Grid: Use *Ag-grid* for sophisticated business grid usage with custom theme designed

![Single Date Picker](https://s3.amazonaws.com/qp-photo/mc-common-datepicker.PNG)

![Date Range Picker](https://s3.amazonaws.com/qp-photo/mc-common-rangepicker.PNG)

![Calendar Events](https://s3.amazonaws.com/qp-photo/mc-common-events.PNG)

![Form Layout and Fields Handling](https://s3.amazonaws.com/qp-photo/mc-common-form2.PNG)


### Global Console
Large scale reusable UI framework   

: Date: Jan 2017 -   
: Keyword: *AngularJS, Bootstrap, Webpack, Sass, HTML5*   

![MC Common Code](https://s3.amazonaws.com/qp-photo/mc-common-code.PNG)

Served as AngularJS architect for designing reusable framework for more than 35+ banking applications in Market Clearing product sector. The product provides a single UI for operations, container for apps in one place with standardized navigation and look and feel. It also serves as a rapid application dev framework with a set of directives and services, ex. headers, navigation, entitlements, etc, to facilitates onboarding of new apps.

![Light Dark Theme Colors](https://s3.amazonaws.com/qp-photo/mc-common-colors.PNG)

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


### AOF Account Opening
Bank account opening form

: 06/15/2016
: `AngularJS`, `Bootstrap`, `Gulp`, Form Generator, Book Chapter

Provided *AngularJS* UI architect for GMI West AOF applications. Served as the tech lead and project manager of six team members (UIs, API, backend developers and business analysts). Large banking account open form, categorized by pages and regions, needs to be displayed, validated and submitted for end-users. **I held morning standup meeting in daily basis, and provided demos to shareholder in weekly basis, as well as providing architect training for entry level UI developers**.

![](https://lh3.googleusercontent.com/qxS3GalWHKyySTCXF0ahqvrg9kYMlQ7WLWQP4Q5CctK2H3bw1eNiwr9KZatQtaFbnkZFrH15oETQWDE06EIbzfzi_t5cU4ayG4q6rTgFDUoZL1YIgdtIGMkgiHDXKGBfmzK0-w)

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

### SLA Event Services

Report delivery and SLA notification system

: 03/16/2016
: `NodeJS`, `AngularJS`

Provided NodeJS backend / AngularJS UI for report delivery and SLA breach notification system for 1000 daily reports from US West and East region. I served as the lead architect and developer for data API, time critical SLA breach as well as batch email summary generation and delivery. 

### DBVals Statement Audit

Four-eyes-check statement audit

: Date: 09/16/2015
: Keywords: AngularJS, Grunt

Served as a lead front-end architect of *AngularJS* and UI/UX for an enterprise statement 4-eyes-check solution for 25, 000 customers worldwide. I also **served as the sprint master for 8 people team (FA, QA, Dev and Owner etc.) in daily basis**. I drafted the migration plan and collected the preliminary analysis on-boarding 25,000 users to the company banking entitlement system. I also drafted the service layer for communicating with *Auth/WebSSO* entitlement service, which had been used by five other application since.

![Prototype](https://lh3.googleusercontent.com/lM3phKH6yoyNHJzAVQ2svuED75j4AGqUHQOecGcGQfuhFXOysJ4fG7xrrkY628CIBi5QPajcBsLlSMeNPqZSz1DbTC10Nh9eNBg77r6hIQf3VJNz-Zqvh-0z4FvbxI6ZHnf3cQ )

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

### Other Projects
Proof of concept projects {.subtitle}

Corporate Action UI 

: Jan 2018
: Prototype the calendar view

Agency Security Lending 

: Jan 2018 - Feb 2018
: Prototype the website for dashboard and performance summary page

Highlights: 

: - Dashboard snapshot: 
  - Performance summary: Multi page


## People Designs

### Prepare for Your Care

Prepare your end of life

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

### Other Projects

SRCE

: 1/30/16

OBChat

Prepare 2

: 8/6/14
: Renovation of Prepare Application

: 5/9/14

## QPlot

### Summary

|  Project    | Company        | Start   | Comment |
| ----------- | -------------  | ------- | ------- |
| Orders      | DataRecoverMan | 4/29/11 |         |


### Company
Company sponsored projects & ideas {.subtitle}

Account (aka. Qplot 7)
: 12/24/16
: Finally we need some consistent platform to build legacy data application, ex. resume etc.
: https://bitbucket.org/qplot/account

Proture
: 1/4/16
: Create a workflow so that building a quick mobile app using business data.
: `Firebase`, `Angular`, `Outliner`
: https://bitbucket.org/qplot/proture

Monthly and Annually
: 12/18/16
: Need to have a centralized location to keep track of all money coming in and out of the system therefore serves as a base for stats. It evovles  to keep track of balance, flow of all bank and investment accounts for each month and year for 2012 - 2017. It splits into other files at 2018.
: `Google Drive`, `Excel`
: https://docs.google.com/spreadsheets/d/1mZB7fcpZYH2kqISwrdqoeMNSwOK5IW6DDAZJVUhiKIA/edit#gid=58175055

Docs go

: 1/2/16
: Be able to create simple page so that it’ll navigate to all the documentations
: https://bitbucket.org/qplot/docs/overview

Promise bucket

: https://github.com/windmaomao/promise-bucket
: 12/26/15
: Create a shared repo so that we can create unified and centralized place to add APIs and handle APIs.

Knowledge-base

: 11/27/15
: Centralize project, payment, and other knowledge-base information into more organized form

Qplot Seven 

: 8/9/15
: QPLOT website, blog, and some experiment projects
: https://bitbucket.org/qplot/qplot

PKB Tasks

: 2/21/15
: PKB ended up with tracking the project tasks and timesheet for Qplot. It’s very effective and has been used for couple of years since then. It's low cost to build and maintain. All timesheets has been checked into repo.
: `AngularJS`, `NodeJS`
: https://bitbucket.org/qplot/qplot-pkb

![PKB Tasks](https://s3.amazonaws.com/qp-photo/pkb_tasks.png)
![PKB Calendar](https://s3.amazonaws.com/qp-photo/pkb_times.png)
![PKB Tracking](https://s3.amazonaws.com/qp-photo/pkb_tracking.png)

### Client
Client sponsored projects {.subtitle}

TopFitPros Guided Workout

: 2/16/15
: Proof of concept of recipe ingredients guide application where users are guided to select healthy food based on carbs, proteins, fats and other personal preference. Internal state machine is built so that user will be suggested with choices based on six guidances step by step. At each step, user might be stopped to ask to substitute with healthy food or adjust food quantities based on personal preference.
: `AngularJS`, `NodeJS`


JQF Management

: Apartment rental that you can trust
: 06/11/2012
: `Wordpress`, `PHP`
: http://aggievillas.net/

![JQF Management Wordpress](https://lh3.googleusercontent.com/8qXbOliShp3JUHb7wWOcHCkd0T52myaRvqkpXFy2kJtEGonQpP_Hl6TGIXIBDfnvUQihIsC6Nmj9YIIGtJYPhffyWHMqQZjdo_AA8QOiwsXNUnRaCanCAiOhVsEfnFVcH3UxHQ)

Wordpress project that I worked alone for client Cindy Fenty who manages couple of real estate properties.

WebinarFunnel

: 03/03/2011
: `PHP`

![Webinar Funnel](https://lh3.googleusercontent.com/25otmu2T3tnNztoDtvLSrq7X2sHtiy_YN6VZafo3laQchZ4t4z7ihs1mgsojdiVd4pj-bDkDPeSGoVhco3E-Dot33DYEX37aVgX-bylbAFAgRKu-QyQ7cQ9CtzlX_1xe-61cCA)

Worked as UI and PHP developer for developing a webinar replay system playing pre-recorded webinar that can be watched by invited users on preset (recurring) time. I was responsible for gathering business requirement and prototyping the UI design for business workflow. I also worked with an offshore PHP developer and we together coded frontend and backend logic for serving videos via PHP and MySQL.

DRM Orders

: 03/02/2011
: `PHP`
: Order and user list

![DataRecoverMan Orders](https://lh3.googleusercontent.com/ys0QrPGZP0I0PJ1Ym4TyufjoI4nsWqbZi2b7DhKwlQIDof57tMGSyx3ZjCQ3fdTo4LsS4_RYF2NeK7DUIORIk_BLJtHHQgo0kzFaDlNs1TMDYsNYwQLILFs75zNfx8Hy4z31Fg)

Served as the UI developer helping DataRecoveryMan.com build an application for managing inventories of hard drive repair orders and tracking order status and generating order invoice. I was responsible for gathering the requirement, prototyping UI according to business workflow and working with an offshore PHP developer to develop and deploy the application.

Simwijzer.nl

: 09/06/2010
: `PHP`
: Simcard plans

![Simcard Sales Plan](https://lh3.googleusercontent.com/cX2wpV8wcPDH7_S3iS1xDv-Yvpg8b51qC8Vgg9ct0nLYWAE2DpN3b-2qD2yonlMfrPEjJgrdjyEJZ3XWNJOzI6R6jH7tv19EBQ7a86bkjLzvA3dnP0mDtzofz2OHkVPpWz9OWg)

## Engineering

### Summary

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


