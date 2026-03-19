Day 6 Chrome DEVTOOLS 

Panel 1 - Elements

This shows you the live HTML and CSS of any webpage.

When we try changing the Google logo text to our name. It only changes in your browser — not on Google's server. But now you understand that every website's HTML is readable and editable client-side.

Panel 2 - Console

The Console is where JavaScript lives. Every error your code throws.

Panel 3 - Network Tab

It will show all headers, preview , response , timing

   - **Headers** — request and response headers
   - **Preview** — formatted response data
   - **Response** — raw response data
   - **Timing** — how long each part took

**What you're looking for:**
```
Name        Status    Type      Size      Time
posts       200       fetch     26.4 kB   243 ms
```

Every API call your MERN app makes will show up here. When your React frontend talks to your Express backend — this is where you'll watch it happen and debug it.

**Filter by type:**
- Click `XHR/Fetch` to see only API calls
- Click `JS` to see only JavaScript files
- Click `CSS` to see only stylesheets

Panel 4 Application tab

This is where the browser stores data locally.

   - **Cookies** — authentication tokens stored here
   - **Local Storage** — key/value data stored in browser
   - **Session Storage** — same but cleared when tab closes


The debugging workflow 

When something breaks in your future MERN app — this is the exact process:
```
Something is broken
       ↓
Open DevTools Console
       ↓
Red error? → Read it carefully, Google the exact message
       ↓
No console error? → Check Network tab
       ↓
API call failing? → Check request URL, method, status code
       ↓
Data not showing? → console.log() your variables
       ↓
CSS looks wrong? → Elements tab, check applied styles


1.What font does GitHub use? (check Elements → Styles)

What GitHub's CSS is teaching you
cssfont-family: var(--fontStack-sansSerif);
font-size: var(--body-font-size, 14px);
font-weight: var(--base-text-weight-normal, 400);
They're using CSS variables — exactly what you used on Day 3.
The difference is GitHub has hundreds of variables in a design system. You built the same concept on Day 3 with:
css:root {
  --primary: #4a90e2;
  --dark: #2c2c2c;
}
You were writing production-level patterns on Day 3 without even knowing it.

Notice this pattern in their variables:
cssvar(--body-font-size, 14px)
That 14px after the comma is a fallback value — if the variable isn't defined, use 14px instead. That's a CSS trick you can use in your own projects now.



2.How many network requests does Reddit make on page load?
What that tells you as a developer
Your Day 2 profile page  →  ~3 requests (HTML, CSS, maybe a font)
Reddit on page load      →  70+ requests and counting
Why so many?
Every one of those requests is something separate:

The main HTML document
CSS files
JavaScript bundles
Images and icons
API calls fetching your feed data in real time
Analytics and tracking scripts
Fonts
Ad scripts

"And changing" is the key observation. Reddit keeps making requests after the page loads — fetching more posts as you scroll, tracking events, updating notifications. That's called dynamic data fetching and it's exactly what your React app will do when it talks to your Express backend.
You just described infinite scroll behavior without knowing it



3. Paste what you got when you ran the fetch() command in the Console



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => console.log(data))
Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
VM23:3 {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}


{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident...',
  body: 'quia et suscipit...'
}
```

That is a **JSON object** — the exact format your Express API will send and your React app will receive. Every MERN application you build works exactly like this:
```
React frontend          Express backend
     │                       │
     │  fetch('/api/posts')  │
     │──────────────────────▶│
     │                       │
     │  { id: 1, title: '' } │
     │◀──────────────────────│
     │                       │
  displays it            sends it
  on screen              from MongoDB
```

You just experienced the entire MERN data flow in one command.

---

### Also notice this line:
```
Promise {<pending>}


4.Did you find a cookie on GitHub? What is it called
Cookie 1 — __Host-user_session_same_site
This is your LOGIN SESSION token.
This is what keeps you logged into GitHub.
Delete this cookie → you get logged out immediately.

Cookie 2 — _device_id
This identifies your specific device.
GitHub uses this to detect suspicious logins
from unknown devices.

Cookie 3 — _gh_sess
This is your SESSION DATA.
Notice how long and encrypted it looks?
That massive scrambled string IS your session
information — but encoded so nobody can read it.

Why this matters for your future

User logs in
     ↓
Your Express server creates a token
     ↓
Sends it back to the browser
     ↓
Browser stores it (cookie or localStorage)
     ↓
Every future request sends the token
     ↓
Your server says "I recognize you, come in" ✅