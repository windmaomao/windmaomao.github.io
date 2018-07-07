# Angular on Windows

_Written at Nov 2015 and published inside DB_

## Setup instruction

1.	Request for development access so that you can create/edit files in you C drive. If you don’t have dev access, which is OK, you can download the git repository to another drive in step 5(1).

2.	Download MSYSGIT from ASD (MC7)

3.
(1) Install node.js on windows.   URL: https://nodejs.org/en/ (MC7, node)
(2) Open your control panel and add an environment variable for npm. (If you don’t know how to find it, you can just search for ‘environment’ in the search box of the control panel, then click ‘Edit environment variables for your accout’.)
(3) Select ‘PATH’ variable, click on edit and add your npm path (mine is ‘C:\Users\fengyu\AppData\Roaming\npm’).
     Make sure you find where your npm is installed, if your path is the same as mine, remember to change the blue part with your own name.

4.	After install, type the following red color command in your Git Bash to configure nodejs:
(Depending on where you are, the proxy values may be different)
npm config set proxy http://surf-proxy.gslb.db.com:8080/
npm config set https-proxy http://surf-proxy.gslb.db.com:8080/
git config http.sslVerify "false"

`npm install -g colors`

5.	Repository
(1) Create a folder in your C drive as a local repository for the codes. You can name it as ‘service’ for example.
(2) Go to the git repo: https://stash.gto.intranet.db.com:8081/projects/MCSDH/repos/mcsdh-ui-aof/browse
(3) Click the clone button and copy the URL (for example mine is https://yu.feng%40db.com@stash.gto.intranet.db.com:8081/scm/mcsdh/mcsdh-ui-aof.git ).
(4) Then open the git stash and type the following command:
cd c:service
git clone <Your URL>
git checkout develop (we are working on the develop version)

6.	Shortcut: Make sure there is a folder called ‘bower_components’ under mcsdh-ui-aof/material/client.

7.	Open git bash and go to the ‘material’ folder then type:
npm install
You need to make sure you had Python27 (https://www.python.org/downloads/windows/  Download Windows x86 web-based installer) and Visual Studio 2012 (https://www.microsoft.com/en-us/download/details.aspx?id=30682) installed. And make sure you set the correct environment variables.
(I had problems before with npm install, the error said I don’t have python so I installed python and set the environment variable for it. Then I got another error said I don’t have Microsoft Visual Studio so I installed it of version 2012 then the problems got fixed.)

Shortcut: Grab a zip package from shared folder, and unzip and put it under /material

8.	After npm install, type:
`npm install –g gulp`

9.	Run the project use:
gulp serve

10. Make a commit
