# Indian dishes catalog API

## Available endpoints

**Base URL** : https://devxmongodb-hackathon.onrender.com/api

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

