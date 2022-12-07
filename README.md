# indian-dishes-api

# 🚀 Indian Dishes Catalog API 🚀

https://github.com/coding-to-music/indian-dishes-api

https://indian-dishes-api.vercel.app

From / By https://github.com/Sachin-chaurasiya/indian-dishes-api

https://devxhackathon.onrender.com/api

https://devxmongodb-hackathon.onrender.com/api

https://indian-dishes.netlify.app/

https://dev.to/sachinchaurasiya/mongodb-2022-hackathon-submission-introducing-indian-dishes-catalog-1coa
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

## Seed the database

```
npm run seed
```

## Running locally

```
npm run start
```

http://localhost:3000/api

```json
{"data":[{"_id":"638fa0490b55d24d2f050318","name":"Balu shahi","ingredients":"Maida flour, yogurt, oil, sugar","diet":"vegetarian","prep_time":45,"cook_time":25,"flavor_profile":"sweet","course":"dessert","state":"West Bengal","region":"East","__v":0},{"_id":"638fa0490b55d24d2f050319","name":"Boondi","ingredients":"Gram flour, ghee, sugar","diet":"vegetarian","prep_time":80,"cook_time":30,"flavor_profile":"sweet","course":"dessert","state":"Rajasthan","region":"West","__v":0},{"_id":"638fa0490b55d24d2f05031a","name":"Gajar ka halwa","ingredients":"Carrots, milk, sugar, ghee, cashews, raisins","diet":"vegetarian","prep_time":15,"cook_time":60,"flavor_profile":"sweet","course":"dessert","state":"Punjab","region":"North","__v":0},{"_id":"638fa0490b55d24d2f05031b","name":"Ghevar","ingredients":"Flour, ghee, kewra, milk, clarified butter, sugar, almonds, pistachio, saffron, green cardamom","diet":"vegetarian","prep_time":15,"cook_time":30,"flavor_profile":"sweet","course":"dessert","state":"Rajasthan","region":"West","__v":0},{"_id":"638fa0490b55d24d2f05031c","name":"Gulab jamun","ingredients":"Milk powder, plain flour, baking powder, ghee, milk, sugar, water, rose water","diet":"vegetarian","prep_time":15,"cook_time":40,"flavor_profile":"sweet","course":"dessert","state":"West Bengal","region":"East","__v":0},{"_id":"638fa0490b55d24d2f05031d","name":"Imarti","ingredients":"Sugar syrup, lentil flour","diet":"vegetarian","prep_time":10,"cook_time":50,"flavor_profile":"sweet","course":"dessert","state":"West Bengal","region":"East","__v":0},{"_id":"638fa0490b55d24d2f05031e","name":"Jalebi","ingredients":"Maida, corn flour, baking soda, vinegar, curd, water, turmeric, saffron, cardamom","diet":"vegetarian","prep_time":10,"cook_time":50,"flavor_profile":"sweet","course":"dessert","state":"Uttar Pradesh","region":"North","__v":0},{"_id":"638fa0490b55d24d2f05031f","name":"Kaju katli","ingredients":"Cashews, ghee, cardamom, sugar","diet":"vegetarian","prep_time":10,"cook_time":20,"flavor_profile":"sweet","course":"dessert","state":"-1","region":"-1","__v":0},{"_id":"638fa0490b55d24d2f050320","name":"Kalakand","ingredients":"Milk, cottage cheese, sugar","diet":"vegetarian","prep_time":20,"cook_time":30,"flavor_profile":"sweet","course":"dessert","state":"West Bengal","region":"East","__v":0},{"_id":"638fa0490b55d24d2f050321","name":"Kheer","ingredients":"Milk, rice, sugar, dried fruits","diet":"vegetarian","prep_time":10,"cook_time":40,"flavor_profile":"sweet","course":"dessert","state":"-1","region":"-1","__v":0}],"status":"success","pagination":{"currentPage":1,"totalPages":26}}
```
