# Business Reusable Functional UI

I'd like to clarify some of the terminology we carry in daily call, especially for bussiness to understand what we're doing in the difference we carry from both business and develop (coding) perspective.

## Definition

In terms of resuable components, business is more concerned about the reusable functional UI units that are visual on the screen, ex. Title, Faq, Layout and etc. These are captured in `icomply-web` project, and published under `components` folder. While developing and sharing these components, developers are working with business requirement to see if we can take one working unit to make it work under multiple pages. 

There are other reusable UI units that are either non-visual, or non-businesss centric that developers rely on to support the above business units, ex. Collapse behavior, Tooltip placement or debounce concept etc. These are captured in `icomply-core` project, and published via `storybook` fashion. Developers are more concerned about these reusable components because they help to assemble a library of ideas together to make the business unit alive. 

## Reusability

When we talk about the reusability, it's not entirely clear for the business to understand how much reusability we achieve, simply because what's displayed on screen is not directly associated with what's coded behind the screen. 

There're bottom lines, of course. The point is valid If one unit under different pages look different on screen, then the business wil say the unit is not reused properly. This definition is really solid and we should continue rely on that.

In order to do that, we should make use of the `components` folder more. As long as we can define the business usage with consistent requirement, we can deliver a component towards that and make it resuable and shared across all business applications under `icomply-web`.

## Development

The line stops above to the business. Reusability between developers carry quite a bit challenge. 

> In reality it's more of a culture to share rather than a roadmap deliverable goal. 

Long story short, `components` folders are not a single folder. Under the `src`, there's one for entire platform. And there's one for each app we identified, ex. `Gpat` or `Registration`. All these folders are equally important, because each app can experiement with their ideas and try to achieve the reusability goal within their domain and team settings. 

Addittionally,  `icomply-core` is the last stop where developers can freely  test their component reusability if they believe their idea is must-have, show-stopper, fundermantal, cutting edge or whatever makes them feel happy and strong. 

## Conclusion

I hope the above can clarify the "reusability" word from both business and developer domain in our current icomply space. In short, business could rely more on the screen while developer should speak more inside the folders. 

>  IMHO, It's not worthwhile to blend these two fundermantally difference approach while we can still work very effectivly together. 