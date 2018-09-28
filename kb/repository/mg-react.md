# MG React Dashboard
![MG React App](https://s3.amazonaws.com/qp-photo/mg-dashboard-mockup.png)

## What is it?

Customer Portal UI for MG flagship transportation management system. It's basically stiched by a matrix of _React_ components mostly internally and some third party. 

|         | Framework    | Type      | Version|  Source               |
|---------| -------------|-----------|--------|-----------------------|
| **_Is_**| React        | App       |        | `src/customer-portal` |
| _Has_   | MG UX        | Components|        | `mg-ux-components`    |
| _Has_   | MG UX Icons  | Components|        | `mg-ux-icons`         |
| _Has_   | TMS UX       | Components|        | `mg-tms`              |

Alias corresponds to,

```javascript
{
    "mg-common": path.resolve("./src/common"),
    "mg-customer-portal" : path.resolve("./src/customer-portal"),
    "mg-tms": path.resolve("./src/tms"),
    "mg-ux-icons": path.resolve("./src/common/ux/icons/SVGIconIndex"),
    "mg-ux-components": path.resolve("./src/common/ux"),
}
```

[Components Hierarchy](https://dynalist.io/d/ZfGkJughdoGi_4WwM6tDTS7R)

