# GeekStoreAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

This file contains information and tips that I have write down to avoid forgeting its purpose and how to implement them.

## Commands

> ng g c componentes/img --skip-tests -is

Creates a component in componet folder without styles and no test file

> ng lint

Reads the code looking for linting errors

## Topics

### Pipes

Used to format the output showed in the HTML

> ng generate pipe <path>/<name>

Are used direct into the HTML

### Directives

Used to work right over the HTML properties, are also only called from these files, for example modify the styles, are invoked like an attribute of a HTML tag.

> ng generate directive <path>/<name>

### Basic Reactivity (Stuff similar to props drilling in react, I mean, to solve it)

When you want to send data between different components in your DOM trhee and avoid to send it using inputs and outputs, you must use this.

Is some related to suscribe, and the subscribed components will receive the "notification" about a change in a particular info.

An example are visible between the StoreService and the header component*
