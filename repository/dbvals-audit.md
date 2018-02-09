#GP dbVals UI

09/23/2015

##Folder Structure
All project source code related  to this project should be stored inside `client` folder. You can have multiple client technology related projects inside `client`, ex. `angular` and `html`. Each folder can have separate readme.md and .gitignore files.

```
    readme.md
    [+] client            
        readme.md
        [+] angular
            package.json                // npm install
            bower.json                  // bower install
            Gruntfile.js                // grunt serve
            .jshintrc
            [-] bower_components
            [-] node_modules
            [-] .tmp
                [-] styles
                    app.css
                    app.css.map
            [+] app
                index.html
                [+] images
                [+] scripts
                    app.js
                    layout.js
                    data.js
                    component.js
                    page.js
                    page.dbvals.js
                [+] styles
                    app.scss
                [+] views
                    layout.html
                    layout.header.html
                    layout.footer.html
                    page.index.html
                    page.dbvals.html
            [+] test
                .jshintrc
        [+] html
            readme.md
            index.html
            angular.html
            [+] fonts
            [+] css
            [+] js
            [+] partials
            [+] test
    [-] dist
```
