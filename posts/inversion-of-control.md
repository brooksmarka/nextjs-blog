---
title: 'Dependency Injection with TypeScript and How to Implement it'
date: '2024-08-13'
---

### Cuz Nobody Wants to Write Bad Code

Dependency Injection is a subtype of Inversion of control and is part of the fundamentals in object-oriented programming. I wanted to touch briefly on Dependency Injection and how TypeScript can help you write cleaner and more scalable code.

Say we want to add a few markers to a google map. One corresponds to a user and one to a company, each containing their own longitude and latitude values. Below, we have a **CustomMap** class that implements our map. We have also imported **User** and **Company** classes from their respective files. Our goal is to add markers corresponding to the location data for both the user and the company.

```ts
import { User } from './User'
import { Company } from './Company'

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    )
  }
}
```

So, we can add some less than ideal code to this **CustomMap** Class.

```ts
import { User } from './User'
import { Company } from './Company'

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    )
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    })
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    })
  }
}
```

The most obvious issue with the above code is its repetitiveness. So let’s clean this up by making just one method that handles both users and companies.

```ts
  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })
  }
```

In the above code, we have now completely deleted the **addCompanyMarker** and **addUserMarker** methods and replaced them with the **addMarker** method. This is better as we are no longer repeating ourselves; however, this still requires us to import **User** and **Company** into our **CustomMap** class. Imagine if we wanted to add more markers to the **CustomMap** class. We would have to import them all and pass them into the **addMarker** method. This solution is not scalable and needs to be refactored.

Luckily, we can use interfaces for this, and instead of making **CustomMap** depend on the **User** and **Company** classes, we can invert the dependencies and make **CustomMap** much more extendable through dependency injection.

We know we only need the location data from the **User** and **Company** classes. We can implement an interface that any class can be a part of as long as they contain the location data required to function. Above our declaration of **CustomMap**, let’s implement the following interface.

```ts
export interface Mappable {
  location: {
    lat: number
    lng: number
  }
}
```

Then we can use this interface to make sure any class that uses the **addMarker** method has the requirement of **location** contained within it. This doesn't require that the **User** class **ONLY** contains the location data. It can and does contain more values, this interface just requires that it at least has the **location** value within it because that is what it requires to function properly.

```ts
 addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })
  }
```

Here is the final code which implements our Mappable interface which a user and company class now work with.

```ts
// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    )
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })
  }
}
```

Now, in our higher-level **index.ts** file, we can initialize our **CustomMap** class and call the **addMarker** method and just pass in the **user** and **company** as parameters instead of having the **CustomMap** component depend on them directly. This is the concept of **_dependency injection_**. This solution greatly improves the scalability of our application and also makes our components much easier to test.

**_index.ts_**

```ts
import { User } from './User'
import { CustomMap } from './CustomMap'
import { Company } from './Company'

const user = new User()
const company = new Company()

const customMap = new CustomMap('map')
customMap.addMarker(user)
customMap.addMarker(company)
```

Take a look at the [final example here](https://github.com/brooksmarka/render-markers) on Github.
