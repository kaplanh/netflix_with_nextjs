<div id="user-content-toc">
  <ul align="left">
    <summary><h1 style="display: inline-block">netflix_with_nextjs</h1></summary>
  </ul>
</div>

<table>
   <thead>
        <tr>
            <th>What's used in this app ?</th>
            <th>How to run ?</th>
            <th>Author</th>
        </tr>
    </thead>
  <tbody>
  <tr>
    <td> 
      <li> NextJS  
      <li> Nextjs-routing
      <li> React 
      <li> React context-Api 
      <li> Fetch-Api
      <li> Tailwind CSS
      <li> Firebase
      <li> Firebase-auth 
      <li> React-toastify  
      <li> Heroicons-react 
      <li> Headlessui-react
    </td>
    <td>  <h4>Once you clone the project</h4>  
      
 1) run  `pnpm install`  or `yarn install` for node modules
 2) run `pnpm run dev` or `yarn run dev` for open development stage
   </td>
    <td> <li> <a href="https://github.com/kaplanh" target="_blank">Take a look at my other projects</a> <li> <a href="https://www.linkedin.com/in/kaplan-h/" target="_blank">Visit me on Linkedin</a> 
  </tr>
  <tr>
    <td colspan="3"><h3>What is this project about ?</h3> 
<p>

</p>
    </td>
  </tr>
      </tbody>
</table>

<div id="user-content-toc">
  <ul align="left">
    <summary><h2>How does my project look</h2></summary>
  </ul>
</div>

[Live Link](https://netflix-with-nextjs.vercel.app/movies)

![Netflix](https://github.com/kaplanh/netflix_with_nextjs/blob/master/public/images/netflix-nextjs.gif)

<div id="user-content-toc">
  <ul align="left">
    <summary><h2>Feedback and Collaboration</h2></summary>
  </ul>
</div>
I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.<br>
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.<br>
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!

## Project Skeleton

```
netflix_with_nextjs (folder)
|
|----readme.md
├── public
│     └── icons
|     └── images
├── app
|     ├── (private)
|     |      └── movies
|     |      |    └── [movieId]
|     |      |    |      └── page.jsx
|     |      |    └── components
|     |      |    |      └── HeroSection.jsx
|     |      |    |      └── MovieCard.jsx
|     |      |    |      └── MovieSection.jsx
|     |      |    |      └── VideoSection.jsx
|     |      |    └── page.jsx
|     |      └── profile
|     |      |    └── components
|     |      |    |      └── CardContainer.jsx
|     |      |    |      └── UserCard.jsx
|     |      |    └── page.jsx
|     |      └── layout.js
|     ├── (public)
|     |      └── login
|     |      |    └── page.jsx
|     |      └── register
|     |           └── page.jsx
│     ├── page.jsx
│     ├── layout.js
│     └── globals.css
│     └── error.js
│     └── loading.js
│     └── not-found.js
│     └── favicon.ico
├── auth
│     └── firebase.js
├── components
|     └── Navbar.jsx
├── context
|     └── AuthContext.js
├── helpers
|     └── ToastNotify.js
|     └── movieFunctions.js
├── .env
|── .gitignore
|── jsconfig.json
|── next.config.js
|── package-lock.json
├── package.json
|── postcss.config.js
|── tailwind.config.js
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
