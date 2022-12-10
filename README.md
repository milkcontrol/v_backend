## .env
This file is ignored from version control so it will never be commit. There's a number of environment variables defined here that control certain options and behavior of the application. Everything is documented there.

Feel free to add new variables as needed. This is where you should put all of your secrets as well as configuration that might change depending on your environment (specific dev boxes, CI, production, etc.).


## Setup
```sh
cd v-line-backend

# Prepare an .env file
cp .env.example .env

### Image build
docker-compose build

### Container startup
docker-compose up -d

### End of container
docker-compose down

### Add package
docker-compose exec app npm install [name package]

### open browser
open http://localhost:4000

### Debugging in a container
docker-compose exec app sh

### Show log docker
docker-compose logs -f app
```

Development Flow
===

# BRANCH

## master

- The production version.
- When release, merge into this branch.

## stg

- The staging latest version.
- DON'T DEVELOP ON THE develop BRANCH.

## dev

- The development latest version.
- DON'T DEVELOP ON THE develop BRANCH.

## feature branch

- Every fixing/implementing, make feature branch from dev branch.
- naming rule
  - if you have task, "feature/task-#[Trello task index]-[easy description]"
    - for ex, "feature/task-#12345-login"
  - if fix, "feature/fix-#[Trello task index]-[easy description]
    - for ex, "feature/fix-#12345-error-on-user-registration"
  - if hot fix, "feature/hotfix-[easy description]
    - for ex, "feature/hotfix-error-on-user-login"

# FLOW

```plantuml
start
:Assign Trello Task;
:Make feature branch;
:Implement;

partition MergeRequest {
:Pull Latest develop branch;
:Make Merge Request into the dev branch;
  repeat
    repeat:Ask review to other developer;
    backward :Fix;
    repeat while (Get feedback?) is (Yes) not (No)
    :Merge into the dev branch;
    :At the end of each day merge dev\nbranch into the stg branch;
    :Deploy on staging;
    :Ask review to tester;
  repeat while (Get approval more than 50% of\ndeveloper and 1 tester) is (no) not (yes)
}
:Merge feature branch into master\nby author's responsibility;
:Announce to team;
:PM close the task;

stop
```

## Merge Request Rule

- The title, describe redmine task index and easy explanation
- on description, describe
  - what you implement/fix
  - your proof
  - what you want to check by revDewer

## Define a task to be considered complete

- Task
  - Dev: Code logic + Define api + unit test
  - Test: Tester approval
- Fix
  - Dev: Fix code + change define api + change unit test
  - Test: Tester approval
- Host fix
  - Dev: Fix code + change define api + change unit test
  - Test: Tester approval
  - Customer approval

# MAIN LIBRARY

ORM DB: [sequelize](https://sequelize.org/)

Validator: [ajv](https://ajv.js.org/)

Define api: [swagger](https://swagger.io/)

Unit test: [Jest](https://jestjs.io/docs/getting-started)

# Guide database

## [data-types](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)

## [model](https://sequelize.org/api/v6/class/src/model.js~model)

## Setup

```sh
# Creating the a Model (and Migration)
npx sequelize-cli model:generate --name Profile --attributes firstName:string,lastName:string,birthday:date,isSearch:boolean,billAddressId:bigint,favouriteCount:number

# Running Migrations
npx sequelize-cli db:migrate

# Undoing Migrations
npx sequelize-cli db:migrate:undo
# or
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-users.js

# Creating the a Seed
npx sequelize-cli seed:generate --name demo-user

# Running Seeds
npx sequelize-cli db:seed:all

```

## MOMO app test : 
link download: https://test-payment.momo.vn/download/
link use momo test : https://developers.momo.vn/v3/vi/docs/payment/onboarding/test-instructions
