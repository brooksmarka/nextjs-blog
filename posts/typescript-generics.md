---
title: 'Utilizing Generics in Typescript'
date: '2024-08-20'
---

### Think of Generics as a function argument

I wanted to give a quick and simple description of generics in typescript incase this concept was confusing for anyone.

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

This problem wouldn't occur in normal Javascript since the data attribute would just accept any type. But now that you are defining the type of data in Typescript we have an issue.
You now have to create two different classes with essentially the same code to hold a number or a string. Well, with generics we can get around this issue. Instead of creating two classes we
can just create one and then specify the type we want by passing it in as a generic. You can think of generics as a function argument which is passed into the function.

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
