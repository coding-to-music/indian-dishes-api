# indian-dishes-api

# 🚀 Indian Dishes Catalog API 🚀

https://github.com/coding-to-music/indian-dishes-api

https://indian-dishes-api.vercel.app

From / By https://github.com/Sachin-chaurasiya/indian-dishes-api

https://devxhackathon.onrender.com/api

https://indian-dishes.netlify.app/

https://dev.to/sachinchaurasiya/2022-hackathon-submission-introducing-indian-dishes-catalog-1coa
## Environment variables:

```java
const connectionString = process.env.MONGO_URI;

const Port = process.env.PORT || 3000;

export const API_CLIENT = axios.create({
  baseURL: 'https://devxmongodb-hackathon.onrender.com/api',
});

```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/indian-dishes-api.git
git push -u origin main
```

# Indian dishes catalog API

## Available endpoints

**Base URL** : https://devxhackathon.onrender.com/api

**GET dishes list**

This endpoint support two query params
1. page - current page number
2. limit - pass this to limit the result data

```shell
<BASE_URL>/?page=1&limit=12

```

**GET single dish**

This endpoint requires id param to get the dish.

```shell
<BASE_URL>/6371272e6faca87b81f70697
```

**Create dish**

This endpoint is a post request and requires dish data in request body

```shell
<BASE_URL>/
```
**Update dish**

This endpoint requires two thing `id` of the dish and updated dish data.

```shell
<BASE_URL>/6371272e6faca87b81f70697
```

**Delete dish**

This endpoint requires id of the dish that you want to delete

```shell
<BASE_URL>/6371272e6faca87b81f70697
```

