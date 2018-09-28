# MG TMS Backend

## Installation

### MG folder

Use `@mg` as folder placeholder for System level app/server folder. 

### Clone repository

```bash
cd @mg
git clone dev-tools.git
git clone tms.git
```

### Set up Maven

```bash
cp @mg/dev-tools/maven/settings.xml ~/.m2/settings.xml
```

### Set up Git

edit `~/.gitconfig`

### Set up IDE

Use Eclipise or IntelliJ for IDE.

Import Project from folder `@mg/tms` and choose `Maven` as external model.

Setup Tomcat Server Local at `@mg/dev-tools/tomcat`

