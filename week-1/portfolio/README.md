# portfolio-fm-368

A website I designed and coded myself to display all the certification projects I made for the responsive web design certificate in freecodecamp.org.

## Token System
I like to think my token system would work in a professional environment except for my colors honestly, I'm aware --cyan-dark isn't exactly professional and I would spend more time on the naming conventions for future projects.

## Design Decisions
One intentional decision was swapping images using Javascript rather than just CSS alone. Using Javascript gave me direct control over the image sources rather than working with CSS and over complicating things.

The dark mode color choice was also deliberate, rather than just desaturating the colors down to black and white, I played with other values to keep a teensy bit of color to feel more intentional rather than feeling like a filter was applied over the colors.

---

## SVG Anatomy

### What does `viewBox="0 0 24 24"` control?
`viewBox="0 0 24 24"` sets up a 24×24 internal coordinate system that you draw inside. The `width` and `height` attributes on the SVG element control how big it displays on screen, but the coordinates inside always stay the same regardless of display size.

### Why is `currentColor` more flexible than hardcoded colors?
`currentColor` is more flexible than hardcoded colors because with hardcoded colors you need a separate CSS rule for every element in every theme state. With `currentColor`, you set the color on the parent once and all the SVGs inside inherit it automatically.

### What does the `d` attribute describe?
The `d` attribute holds all the strings of commands that tell the pen where to go and what to draw — hence why it's labeled `d`. Without it, a `<path>` element draws nothing at all.

---

## Reflection

### Icon Design
It's communicating that the current preference is set to the device's set preference. A monitor is being used to communicate this because a monitor shows the display, and most everyone is looking at this through a digital display. The user can infer based on these notions that the monitor displays what they currently have their theme set to on their personal device.

### System Logic
My code handles System differently from Light and Dark because with Light and Dark, what is stored in localStorage and what is applied to the page are the same thing. With System, what is stored is `"system"` but what gets applied is either `"light"` or `"dark"` depending on the OS preference at that moment.

### Unexpected Learning
One thing that surprised me was how much easier it was than I expected. The dropdown is essentially just showing and hiding an element with a class toggle — once I understood that pattern it clicked quickly. SVGs also ended up being more approachable than I anticipated, it's essentially the same as drawing in Illustrator, just with coordinates and code instead of a visual canvas — more tedious, but the logic is the same.

---

## Citations
**Tools Used**
* codepen.io
* Github
    * codespaces
    * repositories
* Netlify

**AI Assistance**
* Claude Sonnet 4.6 was used throughout the process to help me understand what I'm writing, why I'm writing it, as well as with troubleshooting code.