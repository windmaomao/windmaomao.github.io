# MG TMS

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

## Architect

### Common

#### MGPopoverHoverTrigger

Each grid column wraps an instance of this component to display popup upon hover.

- popoverContent
- wrapperClass
- Overlay `react-overlays`
- MGPopover

##### MGPopover

- Resizable `react-component-resizable`

### TMSApp

- Provider

| Route              | Component                | Note |
| ------------------ | ------------------------ | ---- |
| /                  | MGTMSAppComponent        |      |
| routelist          | MGRouteBoardComponent    |      |

#### MGTMSAppComponent

- `path=/`
- MGReactFormOverlay
- MGLightboxOverlay
- MGSingleContentDisplayer
- MGFlyout
- MGToaster
- ToastContainer
- MGTopBrandingHeader
- MGBranding
- MGTopToolbar
- MGFormDrawer
- MGRecentlyViewedDrawer

#### MGRouteBoardApp

- `path=routeList`
- MGReportFormatToolbar
- MGRouteBoardGrid
- MGMassUpdateDrawer

#### MGRouteBoardGrid

- MGLoadMask
- MGRouteBoardGridHeader
- MGRouteBoardGridBody

##### MGRouteBoardGridHeader

- `isLoading`
- `sortFn`

##### MGRouteBoardGridBody

- MGRouteBoardLoadRow

###### MGRouteBoardLoadRow

- MGRouteBoardFlagColumn
- MGRouteBoardIdentityColumn
- MGRouteBoardNotesColumn
- MGConfirmDeleteNoteModal
- MGRouteBoardOrigDestColumn_Load
- MGRouteBoardStopsColumn
- MGCarrierColumn
- MGRouteBoardServiceColumn
- MGRouteBoardFinancialColumn
- MGRouteBoardCustomerColumn
- MGROuteBoardItemsColumn
- MGActivityContainer
- MGActionsColumn
- CreditLimitLock
- MGPinnedNote
- MGWindowshadeButton
- MGRouteRibbon

#### MGEventPanel

- UXCard
- UXSection
- UXHeading
- MGLocation
- DateRangePickder
- MGContact
- MGTextArea
- MGReferencePanel

