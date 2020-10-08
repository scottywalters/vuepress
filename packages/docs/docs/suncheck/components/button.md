---

sidebarDepth: 0

---

# Button <Badge text="stable" type="success" vertical="top" />

The button is a very common element that can be used as a call to action that enables the user to perform various tasks from within the application. Button labels are used to describe the action that will be performed after the user presses it. Buttons are categorized based on their relative importance to the content it relates to.

## Usage

<buttons />

## Code


``` html
    <b-button variant="primary">Primary</b-button>
    <b-button variant="secondary">Secondary</b-button>
    <b-button variant="success">Success</b-button>
    <b-button variant="danger">Danger</b-button>
    <b-button variant="warning">Warning</b-button>
    <b-button variant="info">Info</b-button>
    <b-button variant="light">Light</b-button>
    <b-button variant="dark">Dark</b-button>
```


### When to use

Use buttons to direct the user as to which elements on the page are to be interacted with. Each area of focus should only have one primary button, with all other buttons presented with less emphasis.

### When not to use

Do not use buttons as a navigational element that routes the user to a new page. Instead, use links.

## Button Variants

![Button variants](/images/suncheck/components/btn-variants.png)

| Variant     	| Purpose                                                                       	|
|:------------	|:------------------------------------------------------------------------------	|
| Primary     	| For the most prominent call to action for the current page.                   	|
| Secondary   	| For additional actions on the current page.                                   	|
| Transparent 	| For the least prominent actions such as repeating items in lists and tables.  	|


## Design

### Anatomy

![Architecture of VuePress](/images/suncheck/components/anatomy.png)



### Styles

| Style      	| Default        	| Primary  	| Secondary 	| Transparent 	|
|:----------	|:---------------	|:---------	|:----------	|:------------	|
| Corners    	| rounded-0      	|          	|           	|             	|
| Background 	| bg-secondary   	| blue-700 	| gray-300  	| none        	|
| Color      	| text-secondary 	| gray-900 	| blue-700  	| gray-100    	|
| Text       	| text-3         	|          	|           	| text-2      	|
| Padding    	| px-4 py-3      	|          	| px-3 py-2 	| px-2 py-1   	|

### State

| State    	| Style                   	| Description                                                                                 	|
|:---------	|:------------------------	|:--------------------------------------------------------------------------------------------	|
| Inactive 	| default                 	| The default state of the button.                                                            	|
| Hover    	| darken-20               	| When the button is being interacted with, but not activated.                                	|
| Focus    	| border-dark             	| When the button is ready to be activated.                                                   	|
| Active   	| darken-20 border-dark   	| While the button is being activated.                                                        	|
| Load     	| opacity-50 icon-loading 	| While the button is waiting to become available, it cannot be interacted with or activated. 	|
| Save     	| opacity-50 icon-saving  	| While the button is processing its action, it cannot be interacted with or activated.       	|
| Disable  	| opacity-50              	| When the button cannot be interacted with or activated.                                     	|




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

### Props

| Variant     	| Purpose                                                                      	|
|:------------	|:-----------------------------------------------------------------------------	|
| Primary     	| For the most prominent call to action for the current page.                  	|
| Secondary   	| For additional actions on the current page.                                  	|
| Transparent 	| For the least prominent actions such as repeating items in lists and tables. 	|

### Slots

| Slot    	| Purpose                                                    	|
|:--------	|:-----------------------------------------------------------	|
| Default 	| The content within button, usually a label, icon, or both. 	|


### Events

| Event 	| Description                        	|
|:------	|:-----------------------------------	|
| Click 	| Called when the button is pressed. 	|




