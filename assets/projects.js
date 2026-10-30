// Yeni bir proje eklemek için bu listedeki bir nesneyi kopyalayabilirsin.
// Tamamlanmamış fikirleri status: "planned" ile işaretle.
window.PORTFOLIO = [
  {
    "id": "grain",
    "number": "01",
    "title": "Grainy Gradient Studio",
    "category": "Web",
    "status": "live",
    "visual": "screenshot",
    "image": "grain/preview.png",
    "imageAlt": "Grainy Gradient Studio: gradyan tuvali ve kategorize preset kütüphanesi",
    "label": "Renk ve doku stüdyosu",
    "description": "1.262 hazır tasarım, renk ve duygu filtreleriyle gradyan üret. Mesh, katman ve hareket ekle; görsel, video veya JSON olarak paylaş.",
    "tags": [
      "Canvas",
      "JavaScript",
      "OKLab",
      "JSON"
    ],
    "intro": "Renkleri ve dokuları keşfetmek, kendi gradyanlarını oluşturmak ve tasarımlarını paylaşmak için tarayıcıda çalışan bir stüdyo.",
    "problem": "Uyumlu renkleri bulmayı, dokuları denemeyi ve farklı ölçülerde görsel üretmeyi tek bir çalışma alanında toplamak.",
    "approach": "Tüm işlemler tarayıcıda gerçekleşiyor. Renk yakınlığı OKLab ile hesaplanıyor; fotoğraf paletleri cihazda çıkarılıyor. Tasarım JSON dosyasıyla paylaşılabiliyor ve yeniden düzenlenebiliyor.",
    "features": [
      "14 duygu ve 11 renk ailesiyle kategorize 1.262 preset",
      "Seçilen renge veya fotoğraf paletine yakın tasarımları bulma",
      "Bézier mesh, dört katmana kadar düzenleme ve yedi doku türü",
      "A/B karşılaştırma ve web, kart, afiş önizlemeleri",
      "Noktaya özel hareket ve anahtar kareler",
      "PNG, JPEG, WebP, SVG ve destekleyen tarayıcılarda WebM çıktısı",
      "Dosyadan veya metinden JSON içe/dışa aktarma"
    ],
    "next": [
      "Gerçek Safari, Firefox ve telefon testlerini genişletmek",
      "Yeni palet aileleri ve kompozisyonlar eklemek"
    ],
    "note": "Hesap ve kurulum gerektirmez. Fotoğraflar cihazında işlenir; favoriler kendi tarayıcında saklanır. Video özellikleri tarayıcı desteğine bağlıdır.",
    "repo": "https://github.com/enestahtaci/enestahtaci.github.io/tree/main/grain",
    "demo": "https://enestahtaci.github.io/grain/",
    "app": "grain/"
  },
  {
    id: "vibey", number: "02", title: "vibey", category: "Web",
    status: "active", visual: "music", label: "Müzik keşfi",
    description: "Albüm keşfi, şarkı sözleri ve küçük müzik oyunlarını bir araya getiren web projesi.",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    intro: "Müzik etrafında bir keşif deneyimi: albümler, şarkılar, Türkçe çeviriler ve müzik bilgisini sınayan küçük oyunlar.",
    problem: "Albüm keşfini ve şarkı içeriklerini, farklı sayfalarda kaybolmadan inceleyebileceğin bir arayüzde toplamak.",
    approach: "Statik sayfalar ve merkezi bir JSON kataloğu kullanılıyor. Tarayıcı tarafındaki JavaScript; arama, favoriler ve oyun etkileşimlerini yönetiyor.",
    features: ["Albüm, şarkı ve sanatçı araması", "Tarayıcıda saklanan favoriler", "Şarkı sözleri ve Türkçe çeviri görünümü", "Albüm kapağı testi"],
    next: ["Portföye gerçek ekran görüntüleri eklemek", "Projenin kendi reposunu ve canlı demosunu bağlamak", "Mobil kullanım ve klavye erişimini gözden geçirmek"],
    note: "Bu açıklama mevcut yerel proje dosyalarına dayanıyor. Canlı demo ve kaynak kod bağlantıları henüz eklenmedi.",
    repo: "", demo: ""
  },
  {
    id: "portfolyo", number: "03", title: "Kişisel portföy", category: "Web",
    status: "active", visual: "portfolio", label: "Kendine ait bir alan",
    description: "Projelerimi, üzerinde çalıştıklarımı ve sıradaki fikirlerimi bir araya getirdiğim kişisel web sayfam.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    intro: "Tek bir sayfayla başlayıp her yeni projeyle büyüyen kişisel bir çalışma arşivi.",
    problem: "Projeleri yalnızca bir isim ve bağlantıyla listelemek yerine, ne yaptıklarını ve nasıl geliştirildiklerini anlatmak.",
    approach: "Derleme aracı gerektirmeyen bir yapı seçildi. Proje bilgileri tek bir JavaScript dosyasında tutuluyor; kartlar ve detay sayfaları aynı veriyi kullanıyor.",
    features: ["Arama ve kategori filtreleri", "Her proje için ayrı detay adresi", "Açık ve koyu tema", "Mobil ekrana uyumlu tasarım"],
    next: ["GitHub Pages yayın ayarını tamamlamak", "Hakkımda bölümünü kişiselleştirmek", "Yeni projeleri ve geliştirme notlarını eklemek"],
    note: "Şu anda görüntülediğin portföyün ilk sürümü. İçerik ve tasarım zamanla güncellenecek.",
    repo: "https://github.com/enestahtaci/enestahtaci.github.io", demo: ""
  },
  {
    id: "gorev-panosu", number: "04", title: "Görev panosu", category: "Arayüz",
    status: "planned", visual: "board", label: "Sıradaki fikir",
    description: "Günlük işleri yapılacak, devam eden ve tamamlanan olarak düzenlemek için bir proje fikri.",
    tags: ["JavaScript", "LocalStorage", "Erişilebilirlik"],
    intro: "Küçük bir ihtiyacı kullanılabilir bir ürüne dönüştürme fikri: işlerini tek bir panoda takip etmek.",
    problem: "Yapılacak işleri ve ilerlemeyi, karmaşık bir hesap kurulumuna gerek kalmadan görmek.",
    approach: "İlk sürüm için tarayıcıda saklanan görevler, üç durumlu bir pano ve klavyeyle kullanılabilen durum değiştirme kontrolleri planlanıyor.",
    features: [],
    next: ["Görev ekleme ve düzenleme akışını tasarlamak", "Görevleri tarayıcıda saklamak", "Durum değiştirme ve filtreleme eklemek"],
    note: "Bu proje henüz geliştirilmedi. Kart, ileride üzerinde çalışılabilecek bir fikri gösteriyor.",
    repo: "", demo: ""
  },
  {
    id: "veri-atolyesi", number: "05", title: "Veri atölyesi", category: "Veri",
    status: "planned", visual: "data", label: "Sıradaki fikir",
    description: "Bir veri setini okunabilir grafiklerle keşfetmeye odaklanan küçük bir görselleştirme projesi fikri.",
    tags: ["JavaScript", "CSV", "SVG"],
    intro: "Sayıların arkasındaki hikâyeyi, anlaşılır ve etkileşimli grafiklerle görünür kılma denemesi.",
    problem: "Bir tablodaki değişimleri ve örüntüleri, bütün satırları tek tek okumadan anlayabilmek.",
    approach: "Küçük ve açık lisanslı bir veri seti seçilmesi; ardından kategori ve zaman filtreleriyle çalışan, metin özeti de sunan grafikler hazırlanması planlanıyor.",
    features: [],
    next: ["Veri setini ve yanıtlanacak soruyu seçmek", "Veriyi temizleyip CSV olarak hazırlamak", "Grafik, filtre ve erişilebilir metin özeti oluşturmak"],
    note: "Bu proje henüz geliştirilmedi. Karttaki grafik yalnızca tasarım temsili; gerçek veri sonucu değil.",
    repo: "", demo: ""
  }
];
