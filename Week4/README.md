# Tugas Pekanan 4 - API Automation

Repository ini merupakan API Automation Testing menggunkan Supertest, Chai, dan Mocha dari API KasirAja versi 1.0.0 untuk fitur Categories
```
https://kasir-api.belajarqa.com
```

## Menjalakan Program
Untuk menjalankan program ini perlu untuk:
- Install Node.js 
- Inisiasikan npm dan install dependency yang dibutuhkan
```
npm init
npm install
```
- Jalankan program
```
npx mocha --reporter mochawesome --recursive test/spec/categories
```

Berikut output dari API 
![output][output]
![output2][output]



[output]: asset/report1.png
[output2]: asset/report2.png