## Rest-API

#### List of basic routes:

| Route              | HTTP | Header(s) | Body                                | Description                                                  |
| ------------------ | ---- | --------- | ----------------------------------- | ------------------------------------------------------------ |
| /api/registerAdmin | POST | none      | email: String<br />password: String | Create a user (role auto admin)<br />success:<br />(201), example: {user}<br />errors:<br />(500), error |
| /api/register      | POST | none      | email: String<br />password: String | Create a user (role auto user)<br />success:<br />(201), example: {user}<br />errors:<br />(500), error |
| /api/login         | POST | none      | email: String<br />password: String | Login and get token based on credentials<br />success:<br />(200), example: {user}<br />errors:<br />(500), error |



#### List of users routes:

| Route          | HTTP   | Header(s)                                                    | Body                                                  | Description                                                  |
| -------------- | :----- | :----------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| /api/users     | GET    | Authenticated:<br />(token),<br />Authorized:<br />(role: admin) | none                                                  | Get all users info (Admin only)<br />success:<br />(200), example: [{user1}, {user2}]<br />errors:<br />(500), error |
| /api/users/:id | GET    | Authenticated:<br />(token)                                  | none                                                  | Get a single user info (Admin and authenticated user)<br />success:<br />(200), example: {user}<br />errors:<br />(404), example: {msg: 'User not found'}<br />(500), error |
| /api/users     | POST   | Authenticated:<br />(token),<br />Authorized:<br />(role: admin) | email: String<br />password: String<br />role: String | Create a user (admin only)<br />success:<br />(201), example: {user}<br />errors:<br />(500), error |
| /api/users/:id | PUT    | Authenticated:<br />(token)                                  | email: String                                         | Update a user with new info (admin and authenticated user)<br />success:<br />(200), example: {msg: 'Updated'}<br />errors:<br />(404), example: {msg: 'User not found'}<br />(500), error |
| /api/users/:id | DELETE | Authenticated:<br />(token),<br />Authorized:<br />(role: admin) | none                                                  | Delete a user (admin only)<br />success:<br />(200), example: {msg: 'Deleted'}<br />errors:<br />(404), example: {msg: 'User not found'}<br />(500), error |

