---
title: 'Utilizing Generics in Typescript'
date: '2024-08-20'
---

### Think of Generics as a function argument

I wanted to give a quick and simple description of generics in typescript in case this concept was confusing for anyone.

Say you want to create a class which has the same structure but takes different types. The simplest example would be something like this.

```ts
class HoldNumber {
  data: number
}

class HoldString {
  data: string
}

const holdNumber = new HoldNumber()
holdNumber.data = 123

const holdString = new HoldString()
holdString.data = 'asdfasdf'
```

We created two classes which are almost identical except for the type. This problem wouldn't occur in normal Javascript since the data attribute would just accept any type. But now that you are defining the type of data in Typescript we have an issue.

You now have to create two different classes with essentially the same code to hold a number or a string. Well, with generics we can get around this issue. Instead of creating two classes we
can just create one and then specify the type we want by passing it in as a generic. You can think of generics as a **function argument** which is passed into the function.

So instead we can do this...

```ts
class HoldAnything<TypeOfData> {
	data: TypeOfData
}

const holdNumber = new HoldAnything<number>{
	holdNNumber.data = 123
}

const holdString = new HoldAnything<string>{
	holdString.data = 'asdfasdf'
}
```

You now can implement just one definition of the reusable class and pass in the type.

## A real world example

As an example of a real world application that would utilize this think of a function which parses a CSV file. The function would take in the csv file and parse it so it can be used in your application.
We would want to make this csv converter function reusable for any csv file but csv files aren't type aware and almost never have the same types in order! So we can create the function with a generic type and then just like above
pass in the type when we instantiate the function.

```ts

class csvConverter<TypeOfData>{
	data: TypeOfData = []

	constructor(public filename: string) {}

	read(): void {
		//csv read logic
	}
}

type RecipeCsvType= {
	beerName: string
	hops: string[]
	description: string
	grain: string[]
	directions: string
}

const beerRecipes = new csvConverter<RecipeCsvType>{
	beerRecipes.data = [
		//parsed beer recipe data
	]
}

type HeismanCsvType= {
	firstName: string
	lastName: string
	yearWon: Date
	school: string
	gamesWon: number
}

const heismanTrophyWinners = new csvConverter<HeismanCsvType>{
	heismanTrophyWinners.data = [
		//parsed heisman trophy data
	]
}

```

This way we can have two completely different csv lists and keep our type checking working for all of the data coming into our application.

Hopefully this clears up how generics work! Thanks for reading and feel free to reach out via my contact section above with any questions.
