# books-react-app

React Single Page App.

## Purpose of this small application:

To practice following React and JavaScript concepts:
- `React Composition`
- `React Custom Hooks`
- `React useRef hook`
- `React useEffect() cleanup function`
- `JavaScript Abort Controller`
- `JavaScript keydown events`
- `CSS flexbox`


## Requirements:
  - "@fortawesome/fontawesome-svg-core": "^6.5.1",
  - "@fortawesome/free-brands-svg-icons": "^6.5.1",
  - "@fortawesome/free-regular-svg-icons": "^6.5.1",
  - "@fortawesome/free-solid-svg-icons": "^6.5.1",
  - "@fortawesome/react-fontawesome": "^0.2.0",
  - "react": "^18.2.0",
  - "react-dom": "^18.2.0"


## Installation:

To run the server:

1. Clone this repository: `git clone https://github.com/igachev/books-react-app.git`
2. Go to folder server: `cd server`
3. Install dependencies: `npm install`
4. Start the server: `node server.js`

To run React app:

1. Go to folder client: `cd client`
2. Install dependencies: `npm install`
3. Start the app: `npm run dev`


## How it works:

<p>On the left side we see all available books.Using pagination we can go to the next page or previous page of books.</p>
<p>On the right side are books which the user already read.</p>

![1 availableBooks](https://github.com/igachev/books-react-app/assets/102420254/4f13c887-e6a0-49ee-a4db-1719c1ebae6a)


<p>Clicking over any of the available books detailed information about the book will be displayed.</p>
<p>The user can rate the book from 1 to 5 and add it to the list of his/her read books or press button Back and return to previous screen.</p>
<p>The user can use Escape keyboard button and it will act as Back button</p>
<p>If the book is already in the user's list of read books an error message will appear</p>

![2 bookDetails](https://github.com/igachev/books-react-app/assets/102420254/ba561b4a-3f42-4629-9772-2898430d3dc5)


<p>Two books were added to the user's list of read books.</p>

![3 addedReadBooks](https://github.com/igachev/books-react-app/assets/102420254/650d6c56-e1d5-41ba-9375-4ea4f921df5b)


<p>Using the Search input we can find books if they exist in our app</p>
<p>If no matches found warning message will appear</p>
<p>Instead of clicking over the Search input field we can use Enter keyboard button and it will focus our Search input field</p>

![4 searchResult](https://github.com/igachev/books-react-app/assets/102420254/31edbc66-ee3e-489e-bdcf-37f1d33186f6)


<p>The application is Web Responsive</p>

![5 webResponsive](https://github.com/igachev/books-react-app/assets/102420254/b27ed479-7ca0-418e-9e9f-c93bb2fef2cb)

