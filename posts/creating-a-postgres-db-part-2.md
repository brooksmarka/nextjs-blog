---
title: 'Easily Design a Postgres DB schema using dbdiagram.io (Part 2)'
date: '2024-08-22'
topics: 'Typescript'
---

Lets use Docker to download a postgres image from docker hub and then start and run the container locally.

You can do this by navigating to [docker hub](https://www.hub.docker.com) and searching for `postgres`. Select the first postgres image you see which should be the official docker image. You can download any postgres image you would like. I'm going to use 16-alpine. Enter the below command to download it.

> Make sure you have installed docker desktop.

```bash
	docker pull postgres:16-alpine
```

Once the download finishes you can run the postgres container with the following command.

> Give the postgres database a unique password instead of yoursecretpassword :)

```bash
	docker run --name postgres16 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=yoursecretpassword -d postgres:12-alpine

```

You can then run `docker ps` to see your running container. You can also run `docker images` to see the available images.

The postgres server is now ready. We can connect to it and access its console by the following command.

```bash
docker exec -it postgres16 psql -U root
```

You are now inside the postgres console. Since this is running on local host the default is to trust requests coming from local host so you will not need to enter your password. We can test to see if everything works.

```bash
select now();
```

You should see the current time outputted. GREAT!

You can also see logs of the container. Type `/q` to exit out of the postgres db. Then run the following...

```bash
docker logs postgres16
```

You can now the the logs within your database.

We can also see a gui representation of the database with tableplus.com. Navigate to tableplus.com and download it.

Once it is downloaded you can right click to create a new connection. You will want to select postgres as the database type. It should look like this.

![New Connection](/images/newconnection.png)

You can click test at the bottom and all fields should show up green.

Next open the .sql file you generated in part 1. Highlight the entire file and press `command enter`. This will generate the tables for you. Now refresh by selecting `command r` You will see 3 tables created.

1. accounts
2. entries
3. transfers

You can highlight any of the tables and select the "Structure" tab to view info on the tables.

![DB Structure](/images/structure.png)

Thats it! Your database is now initialized.
