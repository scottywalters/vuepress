# Notifications

Contents
- [What to use](#decide-what-notification-to-use)
- [When to use](#decide-when-to-use)

---

### Decide what notification to use

| Status        	| Usage                                                                                             	| Action                                                                                                         	| Color  	| Icon    	|
|---------------	|---------------------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------------------	|--------	|---------	|
| Informational 	| Provide additional information to users that may not be  tied to their current action or task     	| Do not require immediate action and can be  dismissed on a timer or persist, depending on the content          	| Blue   	| Info    	|
| Success       	| Confirm a task was completed as expected                                                          	| Typically do not require further action and can be dismissed automatically or persist in a nonintrusive manner 	| Green  	| Success 	|
| Warning       	| Inform users that they are taking actions that are not desirable or might have unexpected results 	| Often persist until the user dismisses the notification or continues in their task                             	| Yellow 	| Warning 	|
| Failure       	| Inform users that they are taking actions that are not desirable or might have unexpected results 	| Always persist until the user dismisses them or resolves error                                                 	| Red    	| Failure 	|

### Decide when to use

| Type               	| Usage                                                                                                             	| Interaction                                                                                                                                      	|
|--------------------	|-------------------------------------------------------------------------------------------------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------	|
| Banner             	| System or product level notifications that are not specific to a task                                             	| Persist until dismissed by user and may include a ghost button or link                                                                           	|
| Inline             	| Provide users with nondisruptive feedback or the status of an action                                              	| Persist until the message is resolved or dismissed by user and may include a ghost button action                                                 	|
| Modal              	| Highly disruptive notifications that provide users with critical information that needs their attention or action 	| Persist and block tasks until dismissed by user. Modals allow more user action than other notifications and can include other Carbon components. 	|
| Notification panel 	| Notification center that provides users with system-generated messages                                            	| Opened and closed by user                                                                                                                        	|
| Toast              	| Short, time-based messages that slide in and out of a page and provide nondisruptive information                  	| Disappear automatically or can be dismissed by user                                                                                              	|v