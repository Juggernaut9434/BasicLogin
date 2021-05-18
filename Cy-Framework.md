# Workabl Automation Framework

some portions of the code or file naming system is from
[Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app)
so if we use some code of theirs we should use the following
`Copyright (c) 2021 [Cypress.io]`


## Setup

- Have a Project with NPM already
	1. Branch from the current repo
	1. run `npm install cypress --save-dev`
	1. create a `cypress.json` and `cypress/` folder
- A new Project
	1. `npm init`
	1. Branch off the main repo into cypress branch
	1. `npm install cypress --save-dev`
	1. create a `cypress.json` and `cypress/` folder

- Put the baseUrl in the `~/cypress.json`
- create `~/cypress/integration/sample.spec.ts`
- fill the sample.spec.ts with basic non-web data checking
- commit those changes on the cypress branch


## The Framework

This cypress project will be done in Typescript

We are going to be doing App Action Framework with no POM
where the tests are in the `cypress/integration/` folder.

We will also have App Actions in this project
which will use systematic approaches to arrive
to a certain state for a test or set of tests.
For example, if there is a login page and a settings
page behind that, we can use the API to store
the token in Local Storage and arrive to the
Settings page much faster rather than using the UI.
We will put the App Actions in `cypress/support/` folder,
in the `commands.ts` file. We do this because support
is processed before the integration directory for Cypress.

### Directory Setup

- /
	- cypress.json
	- cypress/
		- integration/
			- home.spec.ts
			- login.spec.ts
			- 
			- 
		- support/
			- index.ts
			- commands.ts


### The Test Files

Each page will have its own spec file. So
`home.spec.ts` and `login.spec.ts` etc.
Where all tests relating to these pages will
be put into their respective spec file.
The App Actions will allow for these files
to run fast and effectively.

### Adding Test Selectors

For this to run smoothly, the idea of adding
`data-cy` and other cypress attributes
to React components will make the automation
more reliable and long term effective. 
Only the QA / Automation team should change 
those attributes values.
For Example, `data-cy='submitLoginBtn'`,
`data-test='settingsCheckBox'`

We will need to add some Cypress.Commands
to find element bySel to make tests 
look cleaner.

### Linting and Variable Names

Classes will start with an TitleCase style
and files, attributes, variables will be camelCase.
Constants will have UPPERCASE. 
Files for spec files will have `.spec.ts` on the page
so `home.spec.ts` or `profile.spec.ts`

```typescript
describe('My Test Collection', () => {
	beforeEach(function () {
	  cy.visit();
	});

	it('First Test' () => {
		cy
			.getBySel('usernameField')
			.type('userNameExample');
		cy
			.click(login.submitLoginBtn);
	});
})
```

So the above code is a template of the 
cypress tests should look like where
we can use beforeEach, classes initialized
earlier in the file, and cypress itself. 

### CRUD

We want to do all CRUD in the beforeEach
and not the afterEach because of the 
chance that the test fails.

We therefore have to have completely stateless
and isolated tests where we use App Actions
and the API to create the state before
the test runs which is much more efficient and stable.

## Cypress Configuration

In `cypress.json` we will be putting in some 
configurations like a `baseURL` for the website.
and [others](https://docs.cypress.io/guides/references/configuration#cypress-json)


## Best Practices Notes

This is not a unit test suite. It is [end-to-end](https://docs.cypress.io/guides/references/best-practices#Creating-tiny-tests-with-a-single-assertion)
so it is okay to assert more than one thing
in a test.

There is no need to wait or put waits in the program

Instead of state, we use closures like `cy.get('elem').then( () => {});`
but if we can use App Actions (using the javascript and API to our advantage) to accomplish a state.

## Discussion

- Should we add a Linter?
- Can we run a Jenkins Box?
    - Yes, just as easily as Selenium

#### If we are using Non-Brittle UI selectors, why use POM?

We are not going to do POM, but have the selectors 
in a json file. Because, we agree that methods in
the classes are not good, therefore it is basically
a json file. 

#### To login, should we use the API or Stub?

Good Question. [sources](https://docs.cypress.io/api/commands/stub)
