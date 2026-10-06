# Berkeley Is: Mural Project Site

A single-page site telling the story of the Berkeley Public Library community mural:
its process, its three walls, its artists, its partners, and everyone who funded it.
Built with plain HTML, CSS, and JS: no build step, no dependencies, so it's easy to host
straight from GitHub.

## Publish it with GitHub Pages

1. Create a new repository on GitHub (e.g. `berkeley-mural`).
2. Add these files to the repo: `index.html`, `styles.css`, `script.js`, and an
   `images/` folder.
3. Push to GitHub:
   ```
   git init
   git add .
   git commit -m "Mural project site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
4. In the repo, go to **Settings → Pages**, set **Source** to "Deploy from a branch,"
   pick the `main` branch and `/ (root)` folder, then save.
5. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a
   few minutes.

## Images: current status

D'Aryn and Ariba asked not to be photographed, so their cards are built around their
own artwork instead of a portrait, by design, not as a placeholder waiting to be filled.

| Filename | Used for |
|---|---|
| `hero-mural.jpg` | Hero: full mural panorama |
| `mural-wall-1.jpg` | Part One: entrance wall |
| `mural-wall-2.jpg` | Part Two: central map wall |
| `mural-wall-3.jpg` | Part Three: collage wall (includes the mural's own credits) |
| `process-1.jpg` | Process gallery: a collage-technique exercise |
| `process-2.jpg` | Process gallery: UC Berkeley field-trip sketch page |
| `process-3.jpg` | Process gallery: studio marker sketch in progress |
| `basket-patterns.jpg` | Process gallery: basket-weaving pattern reference |
| `hannah-pae.jpg` | Hannah Pae's card: a figure sketch made during the project |
| `daryn-brooks.jpg` | D'Aryn's card: his poem, later hand-lettered across the top of the mural |
| `ariba-library-sketch.jpg` | Ariba's card: her drawing of the Library |
| `cafe-ohlone.jpg` | Partners: labeled sketch of Vincent Medina and Louis Trevino |
| `bpl-logo.png` | Berkeley Public Library logo, in the site header |
| `bplf-logo.png` | Berkeley Public Library Foundation logo, in the Gratitude section |

Nothing left open, image-wise, unless there's something new to add.

## One step after deploying

The social-preview image (what shows up when this link is pasted into Slack,
email, or social media) is set in `index.html`'s `<head>` as a relative path
(`images/mural-wall-2.jpg`). Most platforms need a full, absolute URL to fetch
that preview image. Once the site is live on GitHub Pages, update these two
lines in `index.html`:

```
<meta property="og:image" content="images/mural-wall-2.jpg">
<meta name="twitter:image" content="images/mural-wall-2.jpg">
```

to the full address, e.g.:

```
<meta property="og:image" content="https://YOUR-USERNAME.github.io/YOUR-REPO/images/mural-wall-2.jpg">
<meta name="twitter:image" content="https://YOUR-USERNAME.github.io/YOUR-REPO/images/mural-wall-2.jpg">
```

Happy to do this together once the URL is live.

## Adding the audio guide

The "Listen" section (`#listen` in `index.html`) currently shows an animated
"recording in progress" placeholder. Once the audio is ready, replace the
`.audio-placeholder` block with an `<audio controls src="audio/guide.mp3"></audio>`
element (or embed a hosted player). Happy to do this together when the files
are ready.

## Turning on analytics

The page has a GoatCounter analytics tag already in `index.html`'s `<head>`,
but it's pointed at a placeholder and won't count anything until it's connected
to a real account:

1. Go to https://www.goatcounter.com and click "Sign up" (it's free for sites
   like this one, no credit card, no cookies collected from visitors).
2. Pick a site code (e.g. `berkeley-mural`) — this becomes part of your
   GoatCounter URL: `berkeley-mural.goatcounter.com`.
3. In `index.html`, find this line near the bottom of the `<head>`:
   ```
   <script data-goatcounter="https://YOURCODE.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
   ```
   Replace `YOURCODE` with the site code you picked.
4. Once the site is live, visit `https://YOURCODE.goatcounter.com` any time to
   see visit counts, top pages, and referrers. No login is needed by visitors,
   nothing is installed on their device, and no cookie banner is required.

Happy to walk through this together once you've created the account.

## Structure

- `index.html`: all page content and section markup
- `styles.css`: palette, type, and layout (palette is drawn directly from the
  mural: manzanita red-brown, sage green, sunrise gold, bay blue, adobe cream)
- `script.js`: expandable artist bios, scroll-reveal, and the winding "creek"
  line that runs the length of the page
- `images/`: drop photos and logos here (see table above)
