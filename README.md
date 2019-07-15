This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo Card App
  This app was built using Typescript.

  All State Manangement is handled entriely within React via Context and Hooks.

### Structure

| Folder     | Purpose                                                          |
|------------|------------------------------------------------------------------|
| components | Reusable, lightweight components                                 |
| hooks      | Reusable and robust react hooks                                  |
| pages      | Top-level views in the app                                       |
| providers  | Context providers used to wrap components                        |
| services   | Business logic and third-party integrations (interfaces to APIs) |

### Other Notes
#### About the index.ts files
  I prefer to use use index.ts files to keep imports clean. Generally, we only need to know which top-level directory a component resides in to find it. I believe the trade off between more files and cleaner imports is worthwhile.

#### Testing
  There are some basic enzyme tests, 6 in total, for some of the larger components. Usually, there is much more testing; but, this is just to show a basic testing setup and workflow using enzyme with create-react-app.
