# Publishing a deck

Two places, used for different things:

| | claude.ai Artifact | Vercel |
|---|---|---|
| Who can open it | Only Ran (until he shares it from the page's Share menu) | Anyone with the link |
| Good for | Reviewing a draft | Teaching, sending to students |
| Build | `build_deck.py ... --fragment` | `build_deck.py ...` (full page) |
| Link | claude.ai/artifact/... | `https://actionai-slides.vercel.app/<deck>` |

## Artifact

Publish the fragment build with the Artifact tool: `file_path` = the built file, `icon` = `slides`,
and a one-sentence `description`. To update it later, publish the same file path again (same
session) or pass the artifact `url` (another session, read it first).

## Vercel

Account: team "ranarmon-6411's projects". Project: `actionai-slides`. It serves the `slides/` folder
of the GitHub repo `karishon2024/Actionai`. It is **not** linked for automatic deploys: every change
needs a new deploy.

1. Put the full build in the repo: `slides/<deck>.html` (short lowercase names like `week5.html`;
   `vercel.json` turns this into `/week5`). If the folder is missing, copy `assets/site/index.html` and
   `assets/site/vercel.json` into `slides/`.
2. Add the deck to the list in `slides/index.html` (one `<a href="/week5">` card per deck).
3. Commit and push to the working branch. Note the full commit SHA (`git rev-parse HEAD`).
4. Deploy with the Vercel connector (`create_deployment`), **without `teamId` or `slug`**:

   ```json
   {
     "skipAutoDetectionConfirmation": "1",
     "requestBody": {
       "name": "actionai-slides",
       "target": "production",
       "gitSource": {"type": "github", "org": "karishon2024", "repo": "Actionai",
                     "ref": "<branch>", "sha": "<commit sha>"},
       "projectSettings": {"framework": null, "rootDirectory": "slides",
                           "buildCommand": "", "installCommand": "", "outputDirectory": "."}
     }
   }
   ```

5. Check it with `get_deployment` until `readyState` is `READY` (a static deploy takes seconds).
6. Confirm the public page opens: fetch `https://actionai-slides.vercel.app/<deck>` with a web fetch
   tool (the cloud container itself usually cannot reach vercel.app or api.vercel.com).

### Known errors

- **403 "You don't have permission to create a project"** when `teamId` is passed. Leave `teamId`
  out; the connector then uses the account's default scope and the deploy works.
- **The container can't reach `api.vercel.com`**, so the Vercel CLI does not work from a cloud
  session. Use the connector with the Git source above. Uploading the built file through
  `upload_file` is not practical, because the file is several hundred KB of embedded fonts and images.
- **Google Fonts are blocked** in the cloud container. That is why fonts are embedded at build time.
  Get font files from npm (`@fontsource/...`) if new ones are needed; npm works.

### Later: automatic deploys

When there are several decks, move `slides/` to its own repo (for example `actionai-slides`) and
connect it to the Vercel project in the dashboard (Settings → Git). Then every push to `main`
deploys by itself, and a custom domain like `slides.actionai.ca` can be added under Domains.
