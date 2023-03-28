## Proje Hakkında

Kullanıcılara ait listenin görüntülendiği silme ve düzenleme işlemlerinin yapıldığı bir dasboard uygulamasıdır. E mail ile dashboard sayfasına ulaşılabilir bunu sağlamak için private router kullanıldı. Geçerli bir e mail girildikten sonra kullanıcıların listesinin olduğu sayfaya ulaşıyor. Buradan düzenleme butonuna basıldığında kullanıcının detaylı bilgi sayfasına ulaşılıyor.

## Proje Çıktısı
![proje gif](src/assets/project.gif)
## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/zeyasar/mayzor-task
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Projeyi browserda açmak için
```bash
  npm start
```

Proje Testlerini çalıştırmak için

Proje test süreçlerinde Cypress open source test otomasyon aracı kullanılmıştır.

```bash
  npx cypress open
```
> Komutu çalıştırıldıktan sonra E2E Testing seçilmeli ve Crome tarayıcı seçilerek test ekranı açılmalıdır.

Açılan Chrome penceresinde E2E specs sütununda 
* LoginTests.cy.js
* RememberMeTest.cy.js
* UsersTests.cy.js
dosyaları sıra ile seçilerek test dosyaları çalıştırılabilir.