# App Navigation, `appnav`

The purpose of this application is to launch multiple application via unified navigation system. 

### Develop

This is build via Angular 5.x.

``` bash
  # scripts
  "start": "ng serve --aot --port 4401",
  "build": "ng build --prod",
  # dependencies
  "@angular/common": "^5.2.0",
```

### Deploy

Copy `dist` folder to `/appnav` and replace all. `app.json` holds all application links in production, which needs to be copied or updated at production server. 

### Integration

If you put app under an iframe, the following line can be used to trigger the opening. It's compatible with both `IE` and `Chrome`.

```
  const event = document.createEvent('CustomEvent');
  event.initCustomEvent('Sidenav', false, false, {});
  if (window.parent) {
    window.parent.document.dispatchEvent(event);
  }
```

