Тестовое задаие (Форма обратной связи) сделанное по ТЗ:
Задание
Реализовать форму обратной связи со следующими полями:
Имя Фамилия
E-mail
Номер телефона (с маской российского номера)
Дата рождения
Сообщение
Требования к форме:
Валидация
Поле “Имя Фамилия” может состоять только из 2-х слов (имя и фамилия) латинского алфавита. Минимальная длина каждого слова 3 символа, максимальная 30. Между словами может быть только 1 пробел. При вводе символы должны приводиться в верхний регистр.
E-mail должен быть корректным (должна быть отключена браузерная валидация).
Для номера телефона использовать маску Российского номера.
Дата рождения вводиться через календарь.
Поле “Сообщение” имеет минимальную длину в 10 символов и максимальную в 300.
Отправка формы
Отправка происходит ajax запросом на сервер. В ответе должен прийти json с 2-мя возможными статусами: error/success и текстом ошибки/”успешной отправки”. Ответ необходимо обработать на фронте и вывести соответствующее сообщение под формой.
Пока не пришел ответ с сервера, форму нельзя отправить повторно.
В случае успешного ответа с сервера, очистить все поля формы.
Вся валидация должны быть написана самостоятельно, без использования сторонних библиотек.
Поля формы необходимо валидировать во время ввода и перед отправкой на сервер.
Если поле не проходит валидацию, выводить соответствующее сообщение под полем.

Все пункты ТЗ реализованны. 

 Технологии примененные в данном проекте : : react, typescript, webpack, sass, git.
 Библиотеки примененные в данном проекте : msv: Mock Service Worker для имитации backend, react-notifications для нотификации , 
 clsx для помощи в написании классов.
 
 Для проверки ошибки с сервера использовать E-mail (test1@gmail.com)
 
 Скриншоты реализации :  
 
<img width="960" alt="Screenshot_1" src="https://user-images.githubusercontent.com/84898137/182047235-066156e8-ac79-4f27-9e0a-59fba2e33251.png">
<img width="946" alt="Screenshot_2" src="https://user-images.githubusercontent.com/84898137/182047242-92635ce1-f9b2-4039-8abe-7cb5e2c1aaef.png">
<img width="960" alt="Screenshot_3" src="https://user-images.githubusercontent.com/84898137/182047248-63c2860f-0297-4b94-bfad-29760440b142.png">
<img width="960" alt="Screenshot_4" src="https://user-images.githubusercontent.com/84898137/182047250-1245d817-85b4-47af-8bd4-4a18ee538618.png">
