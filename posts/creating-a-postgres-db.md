---
title: 'Easily Design a Postgres DB schema using dbdiagram.io (Part 1)'
date: '2024-08-21'
---

### Succeed fast by failing fast

In software development the term "fail fast" has really resonated with me. When presented with a new project identifying a proof of
concept is invaluable to ensuring your project meets the expectations and requirements set out by product. Quickly failing and iterating
on the project can be a game changer.

In the following blog post I want to show you how you can not only create a database schema but generate SQL code to implemnent your schema in the database of your choice as well as generate an entity relationship diagram to show to your stakeholders using dbdiagram.io. This should allow you to provide needed information to your stakeholders so that you can quickly refine your proof of concepts.

### Create a new Diagram in dbdiagram.io

In order to quickly create this diagram navigate to **www.dbdiagram.io** and click the "Create your diagram" button. On the left you can see an example schema. Change it to this simple banking example.

```sql
Table accounts as A {
  id bigserial [pk]
  owner varchar [not null]
  balance bigInt [not null]
  currency varchar [not null]
  created_at timestamptz [not null, default: `now()`]

  Indexes {
    owner
  }
}

Table entries {
  id bigserial [pk]
  account_id bigint [ref: >A.id]
  amount bigint [not null, note: 'can be negative or positive']
  created_at timestamptz [not null, default: `now()`]

  Indexes {
    account_id
  }
}

Table transfers {
 id bigserial [pk]
 from_account_id bigint [ref: > A.id]
 to_account_id bigint [ref: > A.id]
 amount bigint [not null, note: 'must be positive']
 created_at timestamptz [default: `now()`]

  Indexes {
    from_account_id
    to_account_id
    (from_account_id, to_account_id)
  }

}
```

Click the "AutoArrange" icon on the bottom toolbar of the rendered diagram. The icon looks like this:  
![autoarrange](/images/autoarrange.png)

You can see the one to many relationships we set up above! Now you can share this easily with your team! (Note: I switched the accounts and entries by dragging them around to better see the relationship)
![DB Diagram](/images/diagram.png)

### Export to PostgreSQL

At the top of the page you can click export and select your desired database. I chose **Export to PostgreSQL**. It will download a .sql file for you so you can initialize your database!

```sql
CREATE TABLE "accounts" (
  "id" bigserial PRIMARY KEY,
  "owner" varchar NOT NULL,
  "balance" bigInt NOT NULL,
  "currency" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "entries" (
  "id" bigserial PRIMARY KEY,
  "account_id" bigint,
  "amount" bigint NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "transfers" (
  "id" bigserial PRIMARY KEY,
  "from_account_id" bigint,
  "to_account_id" bigint,
  "amount" bigint NOT NULL,
  "created_at" timestamptz DEFAULT (now())
);

CREATE INDEX ON "accounts" ("owner");

CREATE INDEX ON "entries" ("account_id");

CREATE INDEX ON "transfers" ("from_account_id");

CREATE INDEX ON "transfers" ("to_account_id");

CREATE INDEX ON "transfers" ("from_account_id", "to_account_id");

COMMENT ON COLUMN "entries"."amount" IS 'can be negative or positive';

COMMENT ON COLUMN "transfers"."amount" IS 'must be positive';

ALTER TABLE "entries" ADD FOREIGN KEY ("account_id") REFERENCES "accounts" ("id");

ALTER TABLE "transfers" ADD FOREIGN KEY ("from_account_id") REFERENCES "accounts" ("id");

ALTER TABLE "transfers" ADD FOREIGN KEY ("to_account_id") REFERENCES "accounts" ("id");

```

### Stay Tuned!

I hope you found this helpful. If you are curious how to set up a postgreSQL database stay tuned for the next blog post which will show how to set up a postgreSQL database within docker.
