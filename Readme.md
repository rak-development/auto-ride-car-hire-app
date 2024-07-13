# Auto Ride - Car Hire Application

The UpSkill Project for a Middle JavaScript Develoer

## Subject

A simple single-page application that includes a form for a vehicle booking. The used design comes from online resources.

## Functional requirements
- Accessibility (a11y)
- Basic SEO principles
- Covered with functional tests that cover the basic user paths
- Fully functional on a mobile device such as a smartphone (the most typical device should be selected)

## Technical requirements

### Phase 1
- The application passes both SEO and accessibility audits
- No framework - may use EventEmitter concepts as an eventbus for the application and a way to transfer data between components
- Fully working functional tests in CypressJS for the described paths (so-called User journeys)

### Phase 2
- Application migration to ReactJS + Typescript
- Maintaining the stability of the previously achieved accessibility and SEO audit results and post-migration tests
- Creation of application unit tests (components, e.g. using CypressJS component testing and auxiliary functions)
- Scaling the attack application so that it is also fully usable on a tablet device (typical dimensions, device to choose from, but the dimensions should "match" one of the Apple brands)

### Phase 3
- Adding support for application internationalization in the form of 2 languages ​​(Polish and English) which can be switched by button but originally the language has be selected by checking where the user comes from (if from Poland, then Polish, if from outside, we apply English)
- Darkmode/Light mode implementation