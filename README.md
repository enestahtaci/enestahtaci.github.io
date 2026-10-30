# Enes Tahtacı — Kişisel portföy

HTML, CSS ve JavaScript ile hazırlanmış, GitHub Pages üzerinde yayınlanabilen kişisel proje arşivi. Derleme veya paket kurulumu gerektirmez.

## Yerelde görüntüleme

Bu repo klasöründe Terminal açıp çalıştır:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Tarayıcıda http://127.0.0.1:8765 adresini aç. Sunucuyu durdurmak için `Ctrl+C` kullan. `index.html` doğrudan tarayıcıda da açılabilir; içerik için ağ isteği gerekmez. Google Fonts yüklenmezse sistem fontları kullanılır.

## Dosyalar

- `index.html`: Ana sayfa, hakkımda ve iletişim metinleri.
- `project.html`: Ortak proje detay sayfası (`project.html?id=vibey` gibi).
- `assets/projects.js`: Proje içerikleri. Proje eklemek için düzenlemen gereken yer.
- `assets/style.css`: Renkler, tipografi ve mobil tasarım.
- `assets/app.js`: Arama, filtreleme, tema ve proje gösterimi.
- `404.html`: Bulunamayan adresler için sayfa.
- `.nojekyll`: Dosyaların Jekyll işlemeden yayınlanmasını sağlar.

## Yeni proje ekleme

`assets/projects.js` listesindeki bir nesneyi kopyala. `id` alanı benzersiz olmalı; küçük harfler ve tire kullan. `number`, `title`, `description`, `intro`, `problem`, `approach`, `features`, `next`, `note` ve `tags` alanlarını güncelle.

- `category`: `Web`, `Arayüz` veya `Veri`. Yeni kategori için `index.html` içindeki filtrelere de bir düğme ekle.
- `status`: `active` geliştirilmekte olan işler, `planned` henüz yapılmamış fikirler için.
- `visual`: `music`, `portfolio`, `board` veya `data`. Bunlar CSS ile çizilmiş temsili görsellerdir; gerçek ekran görüntüsü değildir.
- `repo` / `demo`: Tam `https://` adresleri. Bağlantı hazır değilse boş bırak; düğme gösterilmez.

Yeni proje kartı ve detay sayfası otomatik oluşur. Ayrı bir HTML dosyası oluşturman gerekmez. Metinlerdeki tırnakları doğru kaçırmaya dikkat et.

## GitHub Desktop ile çalışma

1. **File → Add Local Repository** ile bu klasörü ekle.
2. **Changes** bölümünde değişiklikleri incele.
3. Anlamlı bir özet yazıp **Commit to portfolio** düğmesine bas.
4. Hazır olduğunda **Publish branch** ile `portfolio` dalını gönder.
5. GitHub üzerinde değişiklikleri `main` dalına bir pull request ile birleştir. Alternatif olarak Pages kaynağını doğrudan `portfolio` dalı seçebilirsin.

## GitHub Pages yayını

1. Reponun **Settings → Pages** sayfasını aç.
2. **Custom domain** altında eski `bonjibob.me` kaydını **Remove** ile kaldır. `CNAME` dosyasının silinmesi tek başına ayarın kaldırıldığını doğrulamaz.
3. **Source → Deploy from a branch** seç.
4. Yayınlayacağın dalı (`main` veya `portfolio`) ve **/(root)** klasörünü seçip **Save** de.
5. Yayın işlemini **Actions** bölümünden kontrol et.

Hedef adres: https://enestahtaci.github.io

## İçerik durumu

- **vibey:** Çalışma alanındaki mevcut proje dosyaları temel alınarak anlatıldı. Canlı demo ve repo bağlantısı henüz eklenmedi.
- **Kişisel portföy:** Bu site; geliştirme aşamasında.
- **Görev panosu / Veri atölyesi:** Henüz geliştirilmemiş proje fikirleri.
- Hakkımda metni meslek, eğitim veya deneyim iddiası içermez; bilgiler netleştikçe düzenlenebilir.

## Sonraki geliştirmeler

- Gerçek proje ekran görüntüleri eklemek.
- Hakkımda metnini ve isteğe bağlı iletişim bağlantılarını kişiselleştirmek.
- Her projeye süreç görselleri ve gerçek demo bağlantıları eklemek.
- Daha fazla içerik biriktiğinde geliştirme günlüğü oluşturmak.
