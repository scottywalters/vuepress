# Button

The button is a very common element that can be used as a call to action that enables the user to perform various tasks from within the application. Button labels are used to describe the action that will be performed after the user presses it. Buttons are categorized based on their relative importance to the content it relates to.

## Usage

### When to use

Use buttons to direct the user as to which elements on the page are to be interacted with. Each area of focus should only have one primary button, with all other buttons presented with less emphasis.

### When not to use

Do not use buttons as a navigational element that routes the user to a new page. Instead, use links.

## Button Variants

## Anatomy

## Code

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

<!-- ::: theorem Newton's First Law
In an inertial frame of reference, an object either remains at rest or continues to move at a constant velocity, unless acted upon by a force.

::: right
From [Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
::: -->


