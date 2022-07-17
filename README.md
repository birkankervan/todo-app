# ToDo App

### Purpose

Bu uygulama ile yapılacak işlerinizi kolaylıkla takip edebilirsiniz.
ToDo'larınızı `✅ Done` ve `❌ Not Yet` sekmelerinden takip edebilirsiniz. Yaptığınız Görevi işaretleyip günlük rutinlerinize devam edebilirsiniz.
MongoDB Bağlantısı sayesinde tüm cihazlarınızdan Chrome yardımı ile Görevlerinizi takip edebilirsiniz. Görevlerin yanında bulunan `🖍 (Kalem) ikonuna` tılayarak Görevi Düzenleyip Enter buttonu ile kayıt altına alabilirsiniz. `🗑 (Çöp Kutusu) ikonuna` tıklayarak da görevi silebilirsiniz.
Sağ üstte bulunan `Gece Modu` sayesinde karanlık ortamlarda rahatsız etmeden kullanabilirsiniz.

### ⚡️ [Demo](https://todo-app-six-pearl.vercel.app/)

### Technical Explanation for App

**MongoDB bilgileri env.local dosyasında tutulmuştur. Projenin çalışabilmesi için bu bilgilere ihtiyaç vardır. `env.local` dosyası oluşturup aşağıdaki bilgileri kullanınız.**

    DB_NAME=todo

    MONGODB_URI=mongodb+srv://kervan09:iStShXptLYjywIId@cluster0.b2xvt.mongodb.net/?retryWrites=true&w=majority

    COLLECTION_NAME=todos

### Used Libraries

<p align="center">
  <a href="https://link-vote-theta.vercel.app/" target="_blank">
    <img src="https://skillicons.dev/icons?i=git,html,js,ts,react,nextjs,styledcomponents,mongodb" />
  </a>
</p>

Görevlerin DB ye kayıt edilmesinde [MongoDB](https://www.mongodb.com/) kullanılmıştır. MongoDB nin kullanılma sebebi hızlı ve kullanım kolaylığıdır. MongoDB ile verilerimize tüm alanlardan anlık olarak erişip üzerinde düzenlemeler yapabilmekteyiz.

Servis Tarafında [NextJS'in servisleri](https://nextjs.org/docs/api-routes/introduction) kullanılmıştır. Bundaki amaç tüm alanları tek bir yerden yönetip NextJS ekosistemini tam olarak kullanmaktır. Bu sayede verimli bir api ve DB bağlanma sistemi kurulabilmektedir. Express ile yapılabilecek çoğu şey NextJS in servis tarafıyla da yapılabilmektedir.

SSR tarafında [NextJS](https://nextjs.org/) kullanılmıştır. Fetch işlemleri client side da SWR kütüphanesi ile yapılmıştır. Bu sayede sayfa daha hızlı ekrana gelmektedir. Fetch işleminin server tarafında yapılmamasının sebebi SEO açısından önemi olmayan bir uygulama olduğu içindir. Ayrıca MongoDB nin ücretsiz versiyonunu kullandığım için sistem özellikleri yeterince güçlü değildir ve bazen DB sorguları geç gelebilmektedir.

Javascript Framework olarak [React](https://tr.reactjs.org/) kullanılmıştır. Yazım dili olarak da [Typescript](https://www.typescriptlang.org/) kullanılmıştır.

Fetch işlemleri için [SWR](https://swr.vercel.app/) ile birlikte [axios](https://github.com/axios/axios) kullanılmıştır. Bunun sebebi SWR nin çok tutarlı bir hook oluşudur. Bu hook sayesinde yapılan Fetch işleminde gelen response cache'e alınıp oradan componentlere servis edilebilmektedir. Bu sayede tekrar tekrar sorgu yapılamamktadır. Ayrıca yapılan sorgu sonucunu global bir state gibi tüm componentlere dağıtabilmekteyiz.

CSS tarafında [Styled-Components](https://styled-components.com/) kullanılmıştır. Styled Component ile kompenetlermize kolayca css yazabilmekteyiz. CSS ler komponentin içinde durduğu için daha düzenli bir kod yapısı bulunmaktadır. ayrıca tema özelliği sayesinde gece modu veya kullanıcıya özel temalar oluşturup projelerimizde çeşitlilik sağlayabiliriz. Styled-Components sayesinde kullanılmayan CSS minimuma iner ve tarayıcı uyumsuzluğunu büyük ölçüde çözer. Kendisi build anında diğer tarayıcılara göre düzenlemeler yapar. SSR tarafındada rahatlıkla kullanılabilir.

Gece Modu kullanımında global state olarak [local-storage](https://www.npmjs.com/package/use-local-storage-state) kullanılmıştır. Bir değişiklik olduğunda Styled-Components temada buna uygun değişiklik yapmaktadır.

Animasyon olarak [@formkit/auto-animate](https://auto-animate.formkit.com/) kullanılmıştır. Silinen görevlere veya eklenen görevlere animasyon eklenmiştir. Çok basit bir kullanımı vardır. Parent Elemana ref ekleyerek tüm componentlerde kullanabilmekteyiz.

### Contact Me 👨🏻‍💻

<p align="center">
  <a href="https://github.com/birkankervan" target="_blank">
    <img src="https://skillicons.dev/icons?i=git" />
  </a>
    <a href="https://www.linkedin.com/in/emre-birkan-kervan-8858b1143/" target="_blank">
    <img src="https://skillicons.dev/icons?i=linkedin" />
  </a>
      <a href="https://stackoverflow.com/users/11132670/birkan" target="_blank">
    <img src="https://skillicons.dev/icons?i=stackoverflow" />
  </a>
     <a href="mailto:e.birkankervan@gmail.com" target="_blank">
    <img src="https://icons.iconarchive.com/icons/rafiqul-hassan/blogger/128/Email-3-icon.png" width=48 />
  </a>
</p>
