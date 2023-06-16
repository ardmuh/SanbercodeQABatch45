/*
Ardi Muhammad

Sebagai QA Engineer kalian ingin mengecek total quantity  dari bebarapa storageId untuk productCode FBR00040101 (FloBrand-DressBSPink). Buatlah sebuah program javascript untuk menjumlahkan quantity dari semua storageId untuk produk tersebut 

Hint : Gunakan metode Pengulangan, Array dan Object keys (silakan cari referensi cara mendapatkan value dari json)
*/
console.log('='.repeat(10)+' Program Pengitungan Total Kuantitas dari Response API '+'='.repeat(10));

let productBin = {
  requestId: null,
  data: [
    {
      id: 100000057465,
      storageId: 10000008207,
      code: 'A01-01-01-A',
      productId: 110000081009,
      productName: 'FloBrand-DressBSPink',
      productCode: 'FBR00040101',
      quantity: 76,
      createdTime: '2021-12-21T13:54:48Z',
    },
    {
      id: 100000057466,
      storageId: 10000002181,
      code: 'A01-01-01-B',
      productId: 110000081009,
      productName: 'FloBrand-DressBSPink',
      productCode: 'FBR00040101',
      quantity: 71,
      createdTime: '2021-12-21T13:54:48Z',
    },
    {
      id: 100000065224,
      storageId: 10000008884,
      code: 'Tgt00-A-A-01',
      productId: 110000081009,
      productName: 'FloBrand-DressBSPink',
      productCode: 'FBR00040101',
      quantity: 10,
      createdTime: '2022-02-08T10:35:19Z',
    },
  ],
  message: 'success',
};

const productCode = 'FBR00040101';
let totalQuantity = 0;

productBin.data.forEach((item) => {
  if (item.productCode === productCode) {
    totalQuantity += item.quantity;
  }
});

console.log(`Total kuantitas untuk produk dengan kode '${productCode}' adalah ${totalQuantity}.`);

console.log('='.repeat(10)+' Terima Kasih '+'='.repeat(10));
