

# 🗄️ Project Structure

Based on bulletprof-react architecture https://github.com/alan2207/bulletproof-react

```
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used accross the application
|
+-- utils             # shared utility functions
```


Git flowsCS

CSS-in-JS (Emotion)
JEST
Storybook
SWC


Linter:
- ESLint
- Stylelint
- Commitizen with commitlint


Lefthook