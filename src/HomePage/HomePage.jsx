

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.module.css"

export default function HomePage() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Фермерское хозяйство «ДІАМАНТ»</h1>
        <p className="lead text-muted">Свежие и натуральные продукты прямо с нашей фермы</p>
      </header>

      <section className="mb-5">
        <h2 className="h4 mb-3">О нас</h2>
        <p>
          Фермерское хозяйство «ДІАМАНТ» было основано в 2010 году как семейное предприятие. Мы находимся в экологически чистом регионе Украины и специализируемся на выращивании натуральных продуктов без применения химических удобрений и пестицидов. Наша цель — обеспечить семьи качественными и полезными продуктами питания, сохранив при этом уважение к природе и традициям земледелия.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Наша продукция</h2>
        <ul>
          <li>Сезонные овощи и фрукты: томаты, огурцы, перец, яблоки, сливы и др.</li>
          <li>Молочная продукция: молоко, творог, сметана, йогурты.</li>
          <li>Мёд и продукты пчеловодства.</li>
          <li>Яйца от домашних кур, выращенных на натуральном корме.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Фотогалерея</h2>
        <div className="row gallery-row">
          <div className="col-md-4 mb-3">
            <div className="gallery-img">
              <img src="https://sdelanounas.ru/i/a/w/1/aW1nLnN0YXByYXZkYS5ydS9pL2IvcDgwNTA2LmpwZz9fX2lkPTk2NDk0.jpg" alt="Ферма 1" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="gallery-img">
              <img src="https://www.agronom.com.ua/wp-content/uploads/2019/06/Osobennosty-uborky-zernovyh-kultur-e1559693255680.jpg" alt="Ферма 2" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="gallery-img">
              <img src="https://www.golos.com.ua/images_article/orig/2021/06/140621/51.jpg" alt="Продукция" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Преимущества</h2>
        <ul>
          <li>100% натуральные продукты без ГМО и химии.</li>
          <li>Собственное производство полного цикла.</li>
          <li>Доставка по всей Украине.</li>
          <li>Индивидуальный подход к каждому клиенту.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Отзывы клиентов</h2>
        <blockquote className="blockquote">
          <p className="mb-0">Покупаем продукцию у «ДІАМАНТ» уже 3 года — всегда свежо и вкусно. Спасибо вам!</p>
          <footer className="blockquote-footer">Анна, г. Киев</footer>
        </blockquote>
        <blockquote className="blockquote">
          <p className="mb-0">Отличное качество, быстрая доставка. Рекомендую всем!</p>
          <footer className="blockquote-footer">Сергей, г. Львов</footer>
        </blockquote>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">Контакты</h2>
        <p>
          Телефон: +380 97 000 0000<br />
          Email: info@diamantfarm.ua<br />
          Адрес: с. Слободка, Одесская обл., Украина
        </p>
        <div className="mt-3">
          <iframe
            title="Карта фермы"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21404.542180675424!2d29.346387!3d47.88669504999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cc3c793352f1ff%3A0x247866b1fb23b762!2z0KHQu9C-0LHQvtC00LrQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjYwNTA!5e0!3m2!1sru!2sua!4v1746895037071!5m2!1sru!2sua"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer className="text-center text-muted small">
        © 2025 Фермерское хозяйство «ДІАМАНТ». Все права защищены.
      </footer>
    </div>
  );
}


// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function HomePage() {
//   return (
//     <div className="container py-5">
//       <header className="text-center mb-5">
//         <h1 className="display-4">Фермерское хозяйство «ДІАМАНТ»</h1>
//         <p className="lead text-muted">Свежие и натуральные продукты прямо с нашей фермы</p>
//       </header>

//       <section className="mb-5">
//         <h2 className="h4 mb-3">О нас</h2>
//         <p>
//           Фермерское хозяйство «ДІАМАНТ» было основано в 2010 году как семейное предприятие. Мы находимся в экологически чистом регионе Украины и специализируемся на выращивании натуральных продуктов без применения химических удобрений и пестицидов. Наша цель — обеспечить семьи качественными и полезными продуктами питания, сохранив при этом уважение к природе и традициям земледелия.
//         </p>
//       </section>

//       <section className="mb-5">
//         <h2 className="h4 mb-3">Наша продукция</h2>
//         <ul>
//           <li>Сезонные овощи и фрукты: томаты, огурцы, перец, яблоки, сливы и др.</li>
//           <li>Молочная продукция: молоко, творог, сметана, йогурты.</li>
//           <li>Мёд и продукты пчеловодства.</li>
//           <li>Яйца от домашних кур, выращенных на натуральном корме.</li>
//         </ul>
//       </section>

//       <section className="mb-5">
//         <h2 className="h4 mb-3">Фотогалерея</h2>
//         <div className="row">
//           <div className="col-md-4 mb-3">
//             {/* <img src="/fgdiamond-app/src/assets/images/farm1.jpg" alt="Ферма 1" className="img-fluid rounded" /> */}
//           <img src="https://sdelanounas.ru/i/a/w/1/aW1nLnN0YXByYXZkYS5ydS9pL2IvcDgwNTA2LmpwZz9fX2lkPTk2NDk0.jpg" />
//           </div>
//           <div className="col-md-4 mb-3">
//             <img src="https://img.goodfon.ru/wallpaper/big/4/cb/pole-pshenica-urozhay-kolosya.webp" alt="Ферма 2" className="img-fluid rounded" />
//           </div>
//           <div className="col-md-4 mb-3">
//             <img src="https://www.golos.com.ua/images_article/orig/2021/06/140621/51.jpg" alt="Продукция" className="img-fluid rounded" />
//           </div>
//         </div>
//       </section>

//       <section className="mb-5">
//         <h2 className="h4 mb-3">Преимущества</h2>
//         <ul>
//           <li>100% натуральные продукты без ГМО и химии.</li>
//           <li>Собственное производство полного цикла.</li>
//           <li>Доставка по всей Украине.</li>
//           <li>Индивидуальный подход к каждому клиенту.</li>
//         </ul>
//       </section>

//       <section className="mb-5">
//         <h2 className="h4 mb-3">Отзывы клиентов</h2>
//         <blockquote className="blockquote">
//           <p className="mb-0">Покупаем продукцию у «ДІАМАНТ» уже 3 года — всегда свежо и вкусно. Спасибо вам!</p>
//           <footer className="blockquote-footer">Анна, г. Киев</footer>
//         </blockquote>
//         <blockquote className="blockquote">
//           <p className="mb-0">Отличное качество, быстрая доставка. Рекомендую всем!</p>
//           <footer className="blockquote-footer">Сергей, г. Львов</footer>
//         </blockquote>
//       </section>

//       <section className="mb-5">
//         <h2 className="h4 mb-3">Контакты</h2>
//         <p>
//           Телефон: +380 97 000 0000<br />
//           Email: info@diamantfarm.ua<br />
//           Адрес: с. Слободка, Одесская обл., Украина
//         </p>
//         <div className="mt-3">
//           <iframe
//             title="Карта фермы"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21404.542180675424!2d29.346387!3d47.88669504999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cc3c793352f1ff%3A0x247866b1fb23b762!2z0KHQu9C-0LHQvtC00LrQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjYwNTA!5e0!3m2!1sru!2sua!4v1746895037071!5m2!1sru!2sua"
//             width="100%"
//             height="300"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>

//       <footer className="text-center text-muted small">
//         © 2025 Фермерское хозяйство «ДІАМАНТ». Все права защищены.
//       </footer>
//     </div>
//   );
// }
