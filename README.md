# embed.learnprompting.org

This repository contains the code that powers [embed.learnprompting.org](http://embed.learnprompting.org).

## Getting Started

1. Clone the repository
2. Run `npm run dev` and navigate to the provided link to preview the package locally
3. Get hacking!

## Package info

1. Files relating to packaged components are in /src/package directory
2. The components are exposed to the bundler in the ./index.ts file for packaging
3. Only the Playground (PlaygroundWrapper's alias) and ThemeProvider components are available in the package

## Editing Packaged Components

To modify the packaged components, you can directly edit the components in the /src/package directory

## Updating & Publishing Package

1. There is a [Github Workflow](https://github.com/Eykam/playground/actions) implemented in the repo to automatically build and publish the package whenever changes are pushed to the main branch
2. Before committing changes to the main branch, make sure to increment the version number in the package.json, otherwise the publishing workflow will fail. Ex: "version" : "0.0.1" -> "version" : "0.0.2"
3. After updates are committed and new package is published, make sure to re-run `npm install @eykam/playground@latest` in projects consuming package to get updates

## Package usage

1. To use the package, first make sure @chakra-ui/react is installed in the project consuming the package

```
npm install @chakra-ui/react
```

2. You have to tell npm that the package is coming from the github registry. Create or update existing .npmrc file in the root directory of your project and include the following lines. (As long as Learn_Prompting_Nextjs repo is private, .npmrc will be automatically pulled when devs clone repo, so no config will be needed. If repo is public, .npmrc can't be included in repo because github will automatically invalidate tokens in public repos. In this case devs will need to manually create PAT token and replace <TOKEN> in .npmrc will their own):

```
@eykam:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<TOKEN>
```

Where <TOKEN> is a [Github PAT](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) with read:packages permissions.

3. You can now install the package into your project using:

```
npm install @eykam/playground@latest
```

4. The package exposes 2 components, Playground and ThemeProvider. These can be imported using the following code:

```
import Playground, {ThemeProvider} from "@eykam/playground
```

5. Playground accepts props:

```
interface PlaygroundProps {
    model?: string
    prompt?: string
    output?: string
    maxTokens?: number
    temperature?: number
    topP?: number
    style?: React.CSSProperties
}
```

if no props are provided it defaults to using the following config:

```
{
    model: "gpt-3.5-turbo";
    prompt: "";
    output: "";
    maxTokens: 256;
    temperature: 0.7;
    topP: 1;
    style: {}
}
```

Example usage:

```
<Playground model="gpt-4-32k" prompt="Testing this embed" output="Test output" />
```

You can also inject stlyes into the component:

```
<Playground model="gpt-4-32k" prompt="Testing this embed" output="Test output" style={{height:"50vh", width:"50vw"}}/>
```

6. Finally, the Playground component must be wrapped in the ThemeProvider to access styles provided by @chakra-ui/react. Ex:

```
<ThemeProvider>
    <Playground />
</ThemeProvider>
```

## License

[GNU License](LICENSE)
