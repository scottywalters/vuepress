# Notifications

Notifications should be relevant to the user and as minimally disruptive as possible. There are two major use cases for notifications: **Task Generated** notifications and **System Generated** notifications.

[[TOC]]

---

### Task Generatied notifications

Task generatied notifications are invoked in response to the user's interaction during a task. They should be place in the immediate area of the interaction where the user is working.

### System Generated notifications

System generated notifications are invoked by the application or the underlying system infrastructure. These nnotifications provide feedback on the system state or state of a background-running process.


### What notification to use

| Status        	| Usage                                                                                             	| Action                                                                                                         	| Color  	| Icon    	|
|---------------	|---------------------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------------------	|--------	|---------	|
| Informational 	| Provide additional information to users that may not be  tied to their current action or task     	| Do not require immediate action and can be  dismissed on a timer or persist, depending on the content          	| Blue   	| Info    	|
| Success       	| Confirm a task was completed as expected                                                          	| Typically do not require further action and can be dismissed automatically or persist in a nonintrusive manner 	| Green  	| Success 	|
| Warning       	| Inform users that they are taking actions that are not desirable or might have unexpected results 	| Often persist until the user dismisses the notification or continues in their task                             	| Yellow 	| Warning 	|
| Failure       	| Inform users that they are taking actions that are not desirable or might have unexpected results 	| Always persist until the user dismisses them or resolves error                                                 	| Red    	| Failure 	|

### When to use

| Type               	| Usage                                                                                                             	| Interaction                                                                                                                                      	|
|--------------------	|-------------------------------------------------------------------------------------------------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------	|
| Banner             	| System or product level notifications that are not specific to a task                                             	| Persist until dismissed by user and may include a ghost button or link                                                                           	|
| Inline             	| Provide users with nondisruptive feedback or the status of an action                                              	| Persist until the message is resolved or dismissed by user and may include a ghost button action                                                 	|
| [Modal](/suncheck/components/modal.html)              	| Highly disruptive notifications that provide users with critical information that needs their attention or action 	| Persist and block tasks until dismissed by user. Modals allow more user action than other notifications and can include other design components. 	|
| Notification panel 	| Notification center that provides users with system-generated messages                                            	| Opened and closed by user                                                                                                                        	|
[Toast](/suncheck/components/toast.html)              	| Short, time-based messages that slide in and out of a page and provide nondisruptive information                  	| Disappear automatically or can be dismissed by user                                                                                              	|v