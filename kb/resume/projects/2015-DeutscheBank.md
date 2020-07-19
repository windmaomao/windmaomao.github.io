## Deutsche Bank
### 2015 - 2018 

| Project               | Department       | Start    | Comment |
| --------------------- | ---------------- | -------- | ------- |
| Reports Center        | Equity           | 2018 Apr |         |
| Entitlement Next      | Equity           | 2018 Mar |         |
| Corporate Events      | Corporate Action | 2018 Jan | Poc     |
| Security Conf         | Security Lending | 2018 Jan | Poc     |
| Global Console 2      | Equity           | 2017 Oct |         |
| Global Console        | Market Clearing  | 2017 Jan |         |
| AOF Form              | Global Markets   | 2016 Jun |         |
| Kingslanding          | Open Source      | 2016 Apr |         |
| SLA Events            | CPort            | 2016 Mar |         |
| Operations Management | MI               | 2016 Feb | Poc     |
| Entitlement Analysis  | CPort            | 2016 Jan | Poc     |
| DBVals Statement      | DBVals           | 2015 Sep |         |

![Statistics 2016 - 2017](https://s3.amazonaws.com/qp-photo/db-stash-activity.PNG)

### Reports Center

![Reports Center](https://s3.amazonaws.com/qp-photo/report-center-scheduled.PNG)

Reports Center

: Reprt Generation and Monitor
: Apr 2018 - Jun 2018
: *Angular*  *Sass*  *Ag-grid*  *Flexbox*  *Highcharts* {.labels}

Highlights

: - Modular: Heavily rely on company common libary for widgets and styles
  - Layout: Use _Flexbox_ for page design with sidebar and cards
  - Chart: Construct custom chart from scratch via *D3* and *Victory*

### Global Console
Reusable UI framework for Angular 5 {.subtitle}

![Global Console](https://s3.amazonaws.com/qp-photo/mc-common2-header.PNG)

Global Console

: Single operation UI framework
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
![Radial Partition D3 Diagram](/Users/fjin/Desktop/mc-d3-radial-partition.PNG)
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

