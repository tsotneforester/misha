```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Equilibrium</title>
    <style>
      *,
      ::before,
      ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      body {
        min-height: 100svh;
        background-color: #08222f;
 
      }

      main {
        width: 327px;
        border-radius: 15px;
        background-color: #0e2b41;
        padding: 24px;
        position: absolute;
        top: 0;
        left: 0;
      }

      img {
        width: 100%;
        border-radius: 8px;
        display: block;
      }
      
    </style>
  </head>
  <body>
    <main>
      <div class="image">
        <img src="https://nft-preview-geojsone.netlify.app/images/image-equilibrium.jpg" alt="equilibrium" />
      </div>
    </main>
  </body>
</html>
```

1.  Enhance **Equilibrium** project with image hover effect as [here](https://nft-preview-geojsone.netlify.app/).

[Icon URL](https://nft-preview-geojsone.netlify.app/images/icon-view.svg )
hover color - #00fff764  
Don't change html, only styles (🌟)

2. create keyframes animation called "emerge" and apply it to **equilibrium** project

```css
/* 🔰 starting styles
    opacity: 0;
    transform: scale(0.5); */

/* 🔰 ending styles
     opacity: 1;
    transform: scale(1); */
```

3.  find 2 methods how to place absolutely placed child component in the center of parent one. one method requires parent componenet css, secont method is applied to `main` card. add both methods to css and comment one of them out.


>[!TIP]
>you can ask gpt: 'what are 2 common ways of centering absolutely placed child tag within parent tag'

    