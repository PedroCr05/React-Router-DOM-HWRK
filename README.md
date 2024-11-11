# Mailbox React Router DOM - Post Office Project

## Sections for this read me :D

- [Technologies-Used](https://github.com/PedroCr05/React-Router-DOM-HWRK#technologies-used)
- [Files]([https](https://github.com/PedroCr05/React-Router-DOM-HWRK)#files)
- [App-Structure](https://github.com/PedroCr05/React-Router-DOM-HWRK#app-structure)
- [Achievements](https://github.com/PedroCr05/React-Router-DOM-HWRK#achievements)
- [Credits](https://github.com/PedroCr05/React-Router-DOM-HWRK?tab=readme-ov-file#credits)
- [Conclusion](https://github.com/PedroCr05/React-Router-DOM-HWRK?tab=readme-ov-file#conclusion)

## Technologies Used

- **React** for component-based architecture and interactivity.
- **React Router** to manage page navigation and handle different URLs.
- **JavaScript** for dynamic behavior and logic.
- **HTML** and **CSS** for structuring and styling the components.

## Files

- [App.jsx](https://github.com/PedroCr05/React-Router-DOM-HWRK/blob/main/src/App.jsx)
- [Main.jsx](https://github.com/PedroCr05/React-Router-DOM-HWRK/blob/main/src/main.jsx)
- [NavBar](https://github.com/PedroCr05/React-Router-DOM-HWRK/blob/main/src/components/NavBar.jsx)
- [Mailbox-Details](https://github.com/PedroCr05/React-Router-DOM-HWRK/blob/main/src/components/MailboxDetails.jsx)
- [Mailbox-Form](https://github.com/PedroCr05/React-Router-DOM-HWRK/blob/main/src/components/MailboxForm.jsx)
- [Mailbox-List](https://github.com/PedroCr05/React-Router-DOM-HWRK/blob/main/src/components/MailboxList.jsx)

## App Structure

### Navigation

The application includes a navigation bar that allows users to move between different sections:

- **Home**: The landing page, which provides a welcome message for users.
- **Mailboxes**: A page that displays a list of all mailboxes.
- **New Mailbox**: A form page where users can create a new mailbox with specific details.

### Routes

This project uses `react-router-dom` to create a seamless user experience with different routes for each page. Here is an outline of the main routes:

- `/`: The homepage, welcoming users to the post office.
- `/mailboxes`: A page that displays all mailboxes in a list format.
- `/mailboxes/:mailboxId`: A page that shows the details of a specific mailbox based on its ID.
- `/mailboxes/new`: A form for users to create a new mailbox, which includes fields to specify a name and select a size.
- `/*`: A fallback route that displays a 404 error message when a user navigates to a nonexistent page.

## Achievements

For me the major accomplishment in this project was successfully troubleshooting issues independently. By using resources like MDN Web Docs and using `console.log()` for debugging, errors were identified and resolved, resulting in both learning something new, but also understanding how certain structures are meant to be built out.

## Credits

### Major Thanks to MDN

The following links were helpful in understanding & learning something new for HTML form elements:

- [HTML `<select>` Element Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
- [HTML `<option>` Element Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
- [HTML `<input>` Element - Disabled Attribute Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled)

As always thanks to chatGPT for helping me build this Read Me page! :D

- [ChatGPT](https://chatgpt.com)

## Conclusion

### Questions or anything that needs to be pointed out

- As a user when I'm on the details page. What if I want to press a go back button/text? Since sometimes moving my cursor up to the top is too much. Plus it would be beneficial if I as a user doesn't know how to go back. Or if another case. This details page is in a component within another component. How would I get there without using a Router DOM?

- There was an interesting error I did get. Not sure what it really means but it's [this](https://github.com/PedroCr05/React-Router-DOM-HWRK/blob/main/src/assets/images/image.png). For the text it self is also [here](https://github.com/PedroCr05/React-Router-DOM-HWRK/blob/main/src/assets/images/react-router.js).
  
---
