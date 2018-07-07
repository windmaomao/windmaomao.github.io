# Reusable Form, supporting large form entries 

_Written at 03/10/2017, never published_


> Form, easy to use, could be a daunting task for development and support. Especially when your form contains hundred to thousands of inputs with various types and user interactions. Reusable components, when designed properly, is one of the effective solution here. We don't have much risk here,since historically applying this idea to _Form_ has been proven and exercised successfully commercially.

## Idea

When you enters a text to input, it takes effort to keep track of UI representation, user interaction as well as data storage during the usage. Taking a text input as an example, if you have hundred instances, we should wrap that as a component, and drive it through parameters.

This becomes very true when you need to design a sophisticated input control, ex. calendar input. Because copying and pasting code for this control to multiple templates becomes practically impossible. And over-doing this will jeopardize the success of the project in the end.

Moreover layouting fields onto page, a business requirement, requires constant refinement alone the way. So be able to layout generically via some layout engine speeds up the form generation process and can relieve quite a bit duplication work from developer.

## Exercise

With the idea, let's demonstrate it with a quick example. Say we're writing our first field.

#### Field
```html
  <field name="'name'" meta="field" value="value"></field>
```

You can capture the field name, value and meta data assuming the meta data specifies the field type information.

- 'text', text input
- 'text-plus', text input with a button
- 'select', select dropdown
- 'select-plus', select dropdown with a button, similar to select
- 'date', date selection, with a  button to date selection
- 'radio', radio choices
- 'textarea', text area input for entering comments

#### Section

```html
  <section fields="fields" values="values" columns="2" ></section>
```

Now let's group fields together with an array and specify the section layout, ex. one column, two columns, or three columns.

#### Form

```html
  <form
    fields="fields" values="values" 
    sections="sections" columns="2"
  ></form>
```

Last but not least, now we can further group sections into a final form, assuming `sections` capture the structure of the form with section titles as well as section correlation between fields and sections.

## Result

As you can see, the exercise doesn't stop here, because when you start a new form, you can reuse this `form` element and plug in with different set of meta data. And the meta data can be either stored statically with each of your form, or fetched dynamically from an online service.

This also open doors for centralized validation and other form related tasks. Since now from the higher level we are not dealing with individual fields, instead all operations can be applied as a batch job to groups of fields at same time. For instance, reporting form issues across forms or pages becomes possible.

