# Button <Badge text="In-progress" type="warning" vertical="top" />

The button is a very common element that can be used as a call to action that enables the user to perform various tasks from within the application. Button labels are used to describe the action that will be performed once the user clicks it.

## Button Styles

![Button variants](/images/sundose/components/btn-variants.jpg)

## When to use

| Button 	| Usage 	|
|:-	|:-	|
| Affirmation Button 	| Acceptance, Yes, Commit, Save.<br>This button should be used when there is a commitment to an action.<br>This button can also be used for a primary-purpose action related to a list of items in a table. 	|
| Navigation Button 	| Denial, No, Cancel, Save.<br>This button should be used when an action should not proceed. 	|
| Toolbar Button 	| The majority of toolbars should use this button style. 	|
| Dropdown Button 	| Used sparingly this button may be positioned on a ribbon bar.<br>As the purpose of a dropdown button is to indicate simple selections are available when clicked, a combo box is often a wiser choice. 	|
| Ribbon Button 	| Used when many actions can be taken on a list of items in a table. The text should be clear and concise limited to an action and not a phrase.<br>When clicked a popup may be displayed when there are options related to the purpose of the ribbon button. This is the primary reason it is not<br>necessary to use a Dropdown button as it's purpose is not to show detailed options for an action. 	|


## Code (Vue.js)

``` html
<snc-btn>Default</snc-btn>
 
<snc-btn variant="primary">Primary Button</snc-btn>
<snc-btn variant="secondary">Secondary Button</snc-btn>
<snc-btn variant="transparent">Transparent Button</snc-btn>
 
<snc-btn variant="primary">
  <snc-icon>plus</snc-icon>
  <span>Label with Icon</span>
</snc-btn>
 
<snc-btn variant="transparent" title="Icon with Hover Label"><snc-icon>pencil</snc-icon></snc-btn>
```

## Dropdown button

![Button variants](/images/sundose/components/btn-dropdown.jpg)


