## Knowledge Center Application
This project was created to give a user interface for a knowledge center type of application and made with React.js.

The general idea is that there are categories that contain items, or even other categories. 

When a category has no parent category, then it is considered a top level category and is displayed when the app loads.

A user can click on that category to show all items associated with that category or type in what item they are looking for.

This is just a front end application, clicking on an item would normally redirect the user to the resource, but as of right
now it simply points to a dummy url with the fake data id at the end (eg: /kcenter/1).


### Examples
The home page showing all categories that do not have a parent category.

![alt text](https://raw.githubusercontent.com/Lettucez/knowledge-center/master/docs/images/Example%20Home.png "Example Home")

Showing the subcategories of a category after it has been clicked on.

![alt text](https://raw.githubusercontent.com/Lettucez/knowledge-center/master/docs/images/Example%20Subcategory.png "Example Subcategory")

Showing all items that match the text search.

![alt text](https://raw.githubusercontent.com/Lettucez/knowledge-center/master/docs/images/Example%20Search.png "Example Search")
