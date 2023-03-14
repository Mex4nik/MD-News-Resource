# md-news-resource

- How to run?
1. Run Server
```
cd .\server\
npm run start:dev
```
2. Run Client
```
cd .\client\
npm run start
```
3. Run Translation API
```
docker run -ti --rm -p 5000:5000 libretranslate/libretranslate --load-only en,uk,de,fr,ja,zh
```
