Day 3 CSS : Making page look professional

BOX MODEL 

Every single element on a webpage is a rectangular box

┌─────────────────────────────┐
│         MARGIN              │  ← space outside the element
│  ┌───────────────────────┐  │
│  │       BORDER          │  │  ← the visible edge
│  │  ┌─────────────────┐  │  │
│  │  │    PADDING      │  │  │  ← space inside, around content
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  CONTENT  │  │  │  │  ← your actual text/image
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘

Three ways to add CSS

1.Inline 
2.Internal
3.External

<!-- 1. Inline — never use this in real projects -->
<h1 style="color: red;">Title</h1>

<!-- 2. Internal — okay for tiny projects -->
<head>
  <style>
    h1 { color: red; }
  </style>
</head>

<!-- 3. External — always use this professionally -->
<head>
  <link rel="stylesheet" href="style.css">
</head>

CSS Properties

/* Typography */
font-size: 16px;
font-weight: 600;
font-family: 'Arial', sans-serif;
color: #333333;
text-align: center;

/* Spacing */
margin: 16px;           /* all sides */
margin: 16px 0;         /* top/bottom, left/right */
padding: 16px 24px;     /* top/bottom, left/right */

/* Box */
width: 100%;
max-width: 900px;
border: 1px solid #e0e0e0;
border-radius: 8px;
background-color: #ffffff;

/* Layout */
display: flex;
justify-content: center;   /* horizontal alignment */
align-items: center;       /* vertical alignment */
gap: 16px;                 /* space between flex children */
flex-wrap: wrap;           /* wrap to next line if needed */
```

Never hardcode colors randomly. Pick a simple color palette and stick to it. For today use:

Primary: #4a90e2 (blue)
Dark: #2c2c2c (near black)
Light: #f5f5f5 (off white)
White: #ffffff
Border: #e0e0e0

You defined the colors inline everywhere but didn't use :root variables. This is the industry practice from today — add this at the top:
css:root {
  --primary: #4a90e2;
  --dark: #2c2c2c;
  --light: #f5f5f5;
  --border: #e0e0e0;
}

/* Then replace: */
background-color: #4a90e2;
/* With: */
background-color: var(--primary);

Why did we use max-width: 900px on main instead of just width: 100%?

The answer:
On a very wide screen, width: 100% makes text lines extremely long. Your eyes have to travel far left to right on every line, and when you drop to the next line you lose your place. It becomes exhausting to read.
max-width: 900px with margin: 0 auto does two things:
cssmain {
  max-width: 900px;  /* never gets wider than 900px */
  margin: 0 auto;    /* centers it horizontally */
}

On a wide screen — content stays 900px wide, centered, comfortable to read
On a small screen — max-width steps aside and width naturally becomes 100%