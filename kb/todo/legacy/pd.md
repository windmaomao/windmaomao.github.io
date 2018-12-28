PeopleDesigns Todo
=

2.20

1. **setup nodejs on server**
2. **textAngular adding a modal !!, https://github.com/fraywing/textAngular/issues/436**
3. *bug: flag question generates error*
4. **debug image map coordinates issue**

2.19
-

1. **fix index page**
1. **forward article CentOS**
2. *make sure add tag to edit pages, don't know*
3. **make constituent section exactly as program**
4. **change name to partner**
5. **delete manager, so just Admin or not**
6. *add granual level of permission*
2. **content, add picture and add document inside**
3. **store all pages into database**
4. **sort out backend repo**
5. **sort out backend server**
6. **load files recursive from one directory**
8. **correct email server**
9. **resolve wysiwg cursor bug caused by drag and drop**

2.18 (admin)

Admin Overall:
**- Combine the Slides and Ads into one page called "Home Page".**
**- Change Admin menu items to: Home Page (instead of Slides and Ads), General Pages, Program Pages, Partner Pages (instead of constituents), Files, Users. In that order.**
**- WYSIWYG need these additional options: h4, h5, indent, decrease indent.**
**- In WYSIWYG editor need to be able to browse file system to select links and images (not manually enter a url).**
- *[w] Some day all WYSIWYG need table option. https://github.com/fraywing/textAngular/issues/436*

Admin-Home Page:
**- Rather than typing path to image, need to be able to browse files to select image. Get the path from this selection; do not let user manually edit path.**

Admin-General Pages:
**- Content field needs WYSIWYG.**

Admin-Program Pages
**- [w] Just one "+" button, at the bottom. It adds a section after the last one.**

Admin-Partner Pages
**- Add topics (same topics as in Programs).**
- **Make sections behave same as in Programs -- add/remove, reorder.**
**- Add a second address line 2, zip code.**
**- [w] Two email fields. One called "Email" and the other called "Contact Form Email".**

Admin-Files:
**- [w] Add a Delete button beside Download button.**
**- [w] Put a gray background for the whole file upload area (from "Select multiple files" down through the "Upload All" and other buttons.**

Admin-Users:
**- [w] Need to be able to select multiple constituents.**
- [w] Need to be able to suspend a user. shouldn't be able to sign in

2.17
-

2. **create specific folder, not abc**
3. **use new mail server**
4. **manage calendar rnecesouth@gmail.com**


2.16 (email)
-

Footer:
**- Add Terms of Use page.**

Programs:
**- Remove old topics from Programs. Delete all current programs if necessary.**
**- Fix All/None links and checkboxes in filters.**

Forum:
**- Show comments in ascending chronological order (oldest first).**
**- Move comment buttons and fields to bottom, after existing comments.**
**- Move Flag/Unflag button into Question area (not in side area).**
**- Fix date display (Jul 16, 47098).**
**- Fix Flag/Unflag for responses.**
**- Fix Responses number indicator (wrong number on the list of questions page).**
**- Fix newly added question not showing in results (count of questions goes up by one, but the question is not shown in the list of questions page).**

Submission:
**- File upload need option to browse, not just drag (drag does not work on some browsers, and requires windowing which some people can’t/don’t do).**
**- Make Type a select list (instead of radios).**

Southern Region network (Constituents):
**- Add topics to the filter area. Same topics as the Programs have.**
- **Remove Edit button.**

2.10 (sprint)

1. **add/delete upload folders**
2. **limit files to certain types**
3. **add ads**
4. **add submission form**
5. **allow user to edit specific constituent page**
6. **allow user to edit static page**
7. **add backend support for permission controls**
8. **wire page(db) and routing(file) together**

2.9 (sprint)

1. **add keywords to constituents**
2.**change "Q&A" to "Forum"**
3. **remove  topic from Forum**
4. **life preserver icon to text "Contact"**
5. **Change calendar icon in header to text "calendar".**
6. **Add a user icon to left of name of signed in user in header.**
7. **when flagging in forum, send email to admin with url go directly to the flagged question.**
8. **Change user roles to include Admin and each of the constituents. So if Admin is selected, user can edit all pages, and if a constituent is selected user can edit that constituent page.**
9. **Since constituent titles can be changed, this means you need to use an id to link the user to the constituents.**
10. **In Admin > Pages, need content field.**
11. **Make Admin > Constituents just like programs. - Key words. - Multiple user-definable sections.**
12. **Add file manager. - Access through Admin > File Manager. - Lets user edit content of the "files” directory. - User can add/delete sub-directories and files of type txt, rtf, doc, docx, zip, xlsx, ppt, pptx, xls.**
13. **Make home page carousel images pull from files/homepage/carousel. Make home page ad images pull from files/homepage/ads**
14. **Add submissions form.**
**- In Submission > Submission Form.**
- **If not signed in, button "Sign in to submit"**.
- **Fields are: Name (open text), Organization (open text), Email (open text email), Phone (open text), Type (drop-down), Description (open field), Attachments (browse with add)**.
**- On submit, create directory files/submissions/YYYY-MM-DD-HH-MM_[username] and put a txt file with the form fields content plus the uploaded files in there.
**- **Email admin with form fields content and name of the directory.**
- **Email user saying submission done.**
- **A third-party plug-in like plupload may be fine**.

2.9
-

4. **add categories, check email**

2.2
-

1. *work on keywords in terms of style and functionalities, Firefox*
2. **take a look at new requirements list, check email**
3. **need a way to organize files in folders, check email**

1.27 (srce meeting)
-

1. **put admin email in config file**
2. add catchup for the contact form
3. **reply of forum does not work**
4. **remove topic for questions & answers**
5. logout/and hit back give back the old page
6. **keywords for programs, multiple keywards, hidden can be by editors**
7. **edit user and assign constituent for one user, maybe multiple to multiple**
8. **keywards for constituents, add keywards including new**
9. **"Log In to ask Question" instead of "Ask question", "Login to add comment"**
10. **Add weight to programs so that it can be sorted, and then add one plus to the bottom. Drag widget to sort out the location and then try to remember**
11. **wysiwig need to accept the file upload and then refer to it. File management under admin. And then in the editor, you click and then popup a pictures browser and then select it.**
12.**add sections constituents page with fixed sections count**
13. **wisywig editing local static pages, define a Main tag for templates to be inserted in !! nice feature.**
14. **home page, admin be able to add carosal and add ads !!**

1.26
-

1. **work on wysiwig editor**
2. **add section to constituent**

1.22
-

1. **couple sections with display**
2. **add alerts**
3. **change user password**
4. *add block UI for spinning*
5. **add redirect and session redirect**

1.21
-

2. **add section to programs**
3. **deploy mail**
4. *edit page static content*

1.20
-

1. **support contact info for constituent**
3. **user account**

1.15
-

1. **manage consituents**
2. **display constituents on the map**
4. **refinement for the site**

1.14
-

1. **refine route system a bit**
2. **fix questions loading**
3. **make menu use route system**
4. **get comments working, add comment and display comments**
5. 

1.13
-

1. **work on route system**
2. **work on menu**

1.12 (site menu)
-
HOME

ABOUT US
- The Center
- Team
- Partners
- Constituents

PROGRAMS & STRATEGIES
- Overview
- List of Programs & Strategies

TRAINING
- Overview
- Upcoming Webinars
- Archived Webinars
- External Trainings

RESOURCES
- Overview
- Evaluation Forms
- Toolkit
- EFNEP
- SNAP
- Other resources

CONNECT    <- note the new name
- Overview
- Q&A
- Southern Region Network

SUBMISSIONS   <- this is a new major section
- Overview
- Submission Form

1.12 (meeting on SRCE)
-

1. **Add spinning icon to calendar**
2. **Make the front picture rotating**
3. **Add all pages under About Us, Training, Resources and Connections.**
4. **Try to see if the root menu item can be clicked**
5. **Topic selections for Q/A is not working**
6. **Fix delete question**
7. **Fix comments** 
8. **Question, search body, topic ?** 
9. **Question, fix user name and add username to the question index page**
10.**Question, so the body of text need to support multiple lines.**
11. **Programs, search body**
12. **Program Admin, be able to add/edit program** and sections
13. **Network, make map click working located in Texas, field for city and state**
14. **Network, full text search, add user email field**
15. **Contact submit just sending a email to the network manager, single email address. SMTP server.** 
16. **Admin account page to change password and full name and email address**
17. **Admin includes Programs, Networks**
18. **Admin list of all static pages !!**

1.9
-

1. **solve deploy issue**
2. **debug Q/A issue**
3. **timesheet**

1.7
-

1. **reply question, adding comments**
2. *constituent can not save sections*
3. **constituent detail page login goes to weird page**

1.6

1. *refine the json api to be more efficient internally*
2. **remember the auth session on second page load**
3. **add username and password**
4. **add user management**
5. **sort out the permissions for all pages**
6. **deploy srce node api**
7. **redirect to last visited page upon login**
8. **avoid calling me api to get local user info**
9. **make constituent resources to be api**

1.6 (auth related)
- **Post a question**
- **Reply to a question**
- **Flag a question**
- **Delete  question** or reply (available only if user is site admin)
- **Edit a constituent page** (available only if user is admin for that constituent)

1.5
-

1. **embed google calendar**

1.4
-

1. **add new repo for API**
2. **remove old API from the original repo**
3. **implemente auth for api**

1.3
-

1. **make google embedded page**
2. **finish events front page**
3. **timesheet**
4. **refine auth login**

1.2
-

1. **comment needs search by questionID**
2. **question needs flag api**
3. **draft nodeJS api for both json and mysql**
4. **work on google calendar events list**

12.30
-
1. program and strategy, http://www.centertrt.org/?p=intervention&id=1005, 1093, 1092
4. **embeded calendar **


12.29
-

1. signed in: flag, **add question** or response. 
2. signed in admin: **edit delete** and unflag. user need to add note to change comments.
3. **mark flag item as flagged**
4. **include signed in user'name, make sure the reply name is the signin name**

12.28
-

1. **timesheet**

12.27
-

1. **add quesiton comments through**
2. **authentication so that someone can edit**
3. *add map filter*

12.23
-

1. **add data integration to questions**
2. **add data integration to constituents**

12.22
-

1. **add data connnector for program**
2. solve scroll page to the bottom at the page load issue

12.15
-

1. **timesheet**

12.15 (meeting notes)
-
2. **finish applying mockup to project**
2. *add sql to the project*
3. **add roles, admin and manager to the project**
4. **add map to the project**

12.10
-

1. **[srce] draft metronic version**
2. [**srce] deploy**

12.8
-

1. **[srce] markup rest of the pages**

12.7
-

1. **[prepare] deploy**
2. **book timesheet**
3. **[srce] create front page mockup**

12.6
-

2. **[prepare] add JS detection for browsers**

11.25
-

1. **deploy prepare admin**

11.21
-

1. **self sprint**

11.21 (self sprint)

Admin:
0. **rewrite search for prepare users**
1. **add prev/next navigation**
2. **fix menu navigation**
4. **export on index page**
5. **make sure all profile exists !!**
5. **edit for user and profile**
3. import and export functionalities

11.17
-

1. **[ob] resolve issues for profile creation**
2. **[ob] resolve radio button on page 3**
3. **[ob] same thing as page 52 and 53**
4. **[ob] write custom validation codes**
5. **[ob] pull latest database to local**

11.14
-

1. **[admin] add sessions page and activity page**
2. **[prepare] backup prepare v2 repo**

11.12
-

1. **pull obchat latest content to local**
2. **deploy prepare & prepare admin**
3. **[admin] add search capability**
4. **[admin] add user page views**

11.10 (meeting notes)
-

OBCHAT:

1. **fix all submit ex. page 36**
2. **hide the script before page rendering**
3. **[bug] go to page 9 and click back will give you transcirpt on 7 (audio) interesting bug !!**
4. **make all audio and video playing**
5. **sidebar hangs, connection issue ?**
5. security issue on using jw player keys
5. **obchat.org !! launched this saturaday**

PREPARE ADMIN:

1. **add a play button on the edit page, ex. video and audio**
2. **[bug] cancel button doesn't work on edit**
4. **picture need to show in edit page without size constraint**
5. **BIG TASK change users according to new data structure**

PREPARE:

1. **got the language file and put that in the folder**
2. **test chinese zh language**
3. **user activity need to track session variable so that the length can be computed**
4. **add sessions tracking, ex. signin time**


NEW PROJECT:

11.5
-

1. sort out the rest of status message
2. **deploy prepare only**
3. **deploy obchat**

11.3 (meeting notes)
-

OBCHAT:

1. **fix repo master/develop issue**

PREPARE:
 
2. **add a new error message that you didn't enter enough information**
3. **remove "go back" and "next" for front page**
4. **[BUG] next saving doesn't work on Firefox**
5. **work on status_message**
6. **email signup is optional, but not unique**
7. **ask user to edit profile**
4. **send translation file**
5. **make button wider for all lanuages**

PREPARE ADMIN:

1. *make maintenance a page*
2. **make breadcrumb non-link to the previous link**
3. **deploy admin**

10.30
-

1. **sort out the status message inclusion**
2. *sync document*
3. **work on language pack**

10.27
-

1. *continue ask about putting my name under or just recommendation letter !!*

10.27 (meeting notes)
-

PREPARE:

1. **make show/hide menu smaller**
2. **email signup is optional**
3. **when i try to recovery, give you my email address, and then either user name and answer three questions.**
4. **ask user to edit profile**
5. **add "My Account" in the footer**
6. **make status_message page translatable**

PREPARE ADMIN:

1. **add edit to each content page, ex. narrations, and pictures, documentation**
2. **breadcrumb needs to work with link**

10.18
-

1. **deploy to the server**

10.14 (meeting notes)
-
PREPARE:

* **[bug] the audio is not persistent**
* **1-4-2vb the script isn’t loading.**
* **[bug] spacing under nav buttons when you have a script**
* **if not sign in, go to chapter 9, if signed in, go to chapter 0**
* **forgot password page is missing, build forgot page**
* **sign in/sign up page and profile page**
* **chapter 6 pages to wire all the user variables**
* **drop the spanish flag**
* **change picture back/prev to text version**
* **change show menu to horizontal and text version**
* **in any screen size, change menu button to be on the left top corner**
* **getting rid of old closed caption, and put in the bottom of script**
* **change “click to play” text version**
* **1-4-3 yellow bar is not working**
* **0-3-2va play after one another**
* **make sure user works both login and non-login**

ADMIN:

* **add language navigation on listing page**
* **add edit to each content page, ex. narrations, video and pictures, documentation**
* **on each edit page, add language navigation with right image to indicate if it exists or not**
* **add breadcrumbs**
* **for narrations, add play button**
* **for videos, add play button**
* **for pictures, use max-width or max-height, maybe it’s firefox issue**

10.14
-

1. **ask about putting my name under The Prepare Team !!**
2. **support regular page content framework**
3. **add privacy, terms, donate, contact**
4. **add related help pages**
5. BUG: help_prepare_captions is missing
6. BUG: help_prepare are not in the same ratio

10.6
-

1. **deploy prepare admin**
2. **check all audio and videos page for prepare V2**
3. **add navigation scripting feature to prepare**

10.2
-

1. **continue video editing**

10.1
-

1. **wrap up old functionalities**
2. **add video upload page**

9.30
-

1. **move obchat to new server**
2. **fix the ftp features**
3. **deal with securing templates issue**

9.24
-

1. **waiting to resolve virtual server**
2. **change file structure according to new structure**
3. **setup prepare2 server**
4. **setup prepare_admin server**
5. **edit more prepare content features**
6. *add play capability for audio files*
7. **pictures, docs prepare admin**

9.23
-

1. **test vpn connection**
2. **move to new prepare2 server**
3. **change audio folder to narration**

9.22
-

1. **add contents to main menu**
3. **edit template page**
4. **store page content**
5. **make sure delete has popup asking deletion**

9.18
-

1. **deploy with audio and video integration**
2. **make sure the cc and bar doesn't overlap**
3. **fix the bug on firefox**
4. **make audio settings persistent across pages**
5. **change file structure according to new structure**
6. **make history of pages**
7. **[admin] do FTP functionalities for template page**

9.8
-

1. **get skin package from Dave**
2. **add caption integration**
2. **support annoyous user !**
3. **test language switch and setup work for Zach.**

9.7 (prepare V2)
-

1. **fill content area 100% at lg**
2. **make yellow bar stick with right border without margin**
3. **make jw palyer responsive without letterbox and pillarbox**
4. **create a video skin similar to old site**
5. **make audio settings persistent across pages**
6. **go back to the page where you came from after select locale**
7. **wire up Spanish template pages.**
8. **data split into profile and user and session, history**

9.5
-

**obchat**

1. **video on large screen size**
2. **large checkbox**

**prepare**

1. **use new version of template on JWPlayer**
2. **data split into profile and user and session, history**
3. **create new user for annoymous** 
4. **wrap up the user and profile table and add user/session to event table**
5. **custom navigation path supported, continue and back**

**prepare admin**

1. *add the page*

9.3
-

1. **xs and sm size, login form needs to have some left and right margin**
2. **do not show "Data saved" on next page. 434, 444, 454 removed**
3. **add fancy checkboxes for data entry**
4. **adjust video player so there's no letterbox or pillarbox**
5. **change "An Example" to "Examples" side menu under assist**
6. **12 - txt field are not being saved**
7. **12 - when continue and not all answered, scroll to the top so the warining is visible**
8. **222 remove this page**
9. **show gestational diabetes message only if that option was NEVER chosen. if it was chosen before, it should not be shown again**
10. **434 - the entry is not being saved**
11. **434 - when save button used, do not continue, just show "your ADVISE question has been saved" notice and stay on this page.**
12. **4451, not saved**
13. **4451 - change continue to "Save". When used, do not continue**
14. **454 - not saved**
15. **454 - do not continue**
17. **4513 - 4516, 14->13 15->14 16->15**
18. **52 - not saved**
19. **52 - the text fields should not be required, let user move on**
20. **Map - logout menu appear twice**
21. **Map - make list items have less top/bottom margins so the map is much shorter.**

8.22
-

 1. *6-2-2 point to 6-2-3 issue*
 2. **sort out 6-3-1a summary**
 2. **sort out print stylesheet**
 3. **deploy the site and report** 
 4. **[ob] split pages according to email.**

8.20 (open discussion)
-

  1. narration audio on pages
  2. pamphlet page styling
  3. **user session and history**

8.20
-

  1. **use right audio files**
  2. **add author information on every page that I created**
  3. **fix chapter 9 page logic**
  4. **fix chapter 9 page css**
  5. **sort out 6-3-2a print**

8.19
-

  1. **deploy**
  3. **[pr] 2-3-2, 2-3-5b, 4-2-3, 4-4-1, 9-3-2, 9-4-1a**
  4. **[pr] add user data profile, but stuck at adding correct foreign key**
  5. **[pr] integrate with page submission**

8.18 (minor issues)
-

  1. **Show/hide menu icon**
  2. **9-x-x pages**
  3. **0-3-3 click not working**
  4. **1-3-4, click and then next is displayed, before that some help text is displayed**
  5. **1-4-2, video banner is too wide**
  6. **1-4-4, content h2 is not bold**
  7. **1-4-21, form width 400 !**
  8. **2-1-1, step picture is wrong, similar as 3-1-1, 4-1-1**
  9. **2-3-1, picture margin bigger or large picture**
  10. 2-3-2, couple of pictures not just one picture
  11. **2-3-5b doesn’t exist !!**
  12. **4-1 doesn’t wire to correct 4-1-1**
  13. 4-2-3 single or multiple ? 
  14. 4-4-1 different pictures ?
  15. **1-3-4a navigation bar jammed, 4-2-1**
  16. **fix all page titles**
  17. **all pages needs to be shrinker to fit content better**
  18. **6-22-2, 9-3-2, 9-4-1a can not be copied**
  19. **custom style 6-3-1a, 6-3-2a, 6-4-2a**
  20. **chapter 9 doesn’t show on the beginning**
  21. **deal with message 6-3-1a**
  22. **deal with print style 6-3-1a**
