# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Links

- Solution URL: [Add solution URL here](https://github.com/Briancarlo24/Intro-component-with-sign-up-form.git)
- Live Site URL: [Add live site URL here](https://https://briancarlo24.github.io/Intro-component-with-sign-up-form/-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Javascript
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js

// WHEN BUTTON IS CLICKED THIS HAPPENS
button.addEventListener("click", function () {
  inputArr.push(document.forms["Form"].firstname.value);
  inputArr.push(document.forms["Form"].lastname.value);
  inputArr.push(document.forms["Form"].email.value);
  inputArr.push(document.forms["Form"].password.value);
  console.log(inputArr);

  if (
    inputArr[0] !== "" &&
    inputArr[1] !== "" &&
    inputArr[2] !== "" &&
    inputArr[3] !== ""
  ) {
    alert(
      `First Name: ${inputArr[0]} \nLast Name: ${inputArr[1]} \nEmail: ${inputArr[2]} \nPassword: ${inputArr[3]}`
    );

    inputValue.forEach((items) => {
      items.value = "";
    });
    window.location.reload();
  } else {
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === "") {
        if (i !== 2) {
          errorIcon[i].classList.remove("hidden");
          errorMEssage[i].classList.remove("hidden");
          inputValue[i].classList.add("errorborder");
        } else {
          errorIcon[i].classList.remove("hidden");
          errorMEssage[i].classList.remove("hidden");
          inputValue[i].classList.add("errorborder");
          document
            .getElementById("email")
            .setAttribute("placeholder", "email@example.com");
          document.getElementById("email").style.color = "hsl(0, 100%, 74%)";
        }
      }
    }
  }
  inputArr.length = 0;
```

### Continued development

I would like to learn how to properly use pseudo elements like before and after for popup error message in the input field. I think it will be very helpful and would make my coding more efficient and readable.

### Useful resources

I use a lot of resources which I am not able to track. But the main once are:

Google.com
w3cschools.com
stackoverflow.com
MDN web docs are very helpful for javascript as well

## Author

- Website - [Brian Carlo Birondo](https://briancarlo24.github.io/Intro-component-with-sign-up-form/)
- Frontend Mentor - [@Briancarlo24](https://www.frontendmentor.io/profile/Briancarlo24)

## Acknowledgments

Thank you for google and for the ones I have listed in the useful resources section.

Also thank you for @grace-snow for giving me feedback for this challenge. It opened a lot of things for me to learn and to improve my web development skills.

This is my second to last challenge with the newbie(free version) and would continue doing challenge on the junior level. Hopefully I'm able to learn more along the way.
