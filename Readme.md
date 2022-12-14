# Task TS-07-1

## Описание задачи

Вам необходимо реализовать функционал aналогичный нативному `confirm("")` с некоторыми особенностями:

1. Асинхронный неблокирующий возврат
2. Реализация через наследование классов
3. Полная типизация TypeScript
4. Поддержка нестандартного отображения

[**Пример работы:**](https://jsfiddle.net/matveyson/obn87pke/)

## Задача

Перед Вами проект, который необходимо дописать, чтобы:

- диалог открывался по нажатию кнопки _"Open Dialog"_
- закрывался по нажатию одной из кнопок _"Отмена"_/_"Подтвердить"_
- по нажатию одной из кнопок _"Отмена"_/_"Подтвердить"_ возвращаемый из метода `open` Promise должен разрешаться(resolve) в значения `false` и `true` соответственно (Отмена - false, Подтвердить - true).

Вам требуется:

1. Реализовать класс `src/dialog/Dialog.ts`
2. Реализовать логику компонента `src/dialog/ConfirmDialogComponent.vue`
3. Реализовать шаблонизацию строк 6-14 в `src/App.vue` или вынести в отдельный компонент
4. Учесть, что на странице может быть одновременно открыто некоторое количество диалогов (каскадом), в том числе одного типа (верстка уже произведена за вас)
5. (По необходимости) реализовать дополнительные классы и компоненты для выполнения требований.
6. Использовать TypeScript и полную типизацию
7. Учесть по возможности best-practise, принципы, паттерны и т.п.

Допольнительные требования:

1. Код открытия диалога `openDialog`, объявление класса `ConfirmUserDeleteDialog`, реализация `ConfirmDialog`, **должен остаться неизменным**
2. Подключать глобальные хранилища любого типа **нельзя**
3. Подключать сторонний IoC - можно (но задача решается и без него)
4. Взаимодействовать с `DOM API` вручную **КРАЙНЕ не рекомендуется** - у вас есть Vue))) ( Но можно _дополнительно_ решить задачу используя только `DOM API` и `TypeScript` без использования runtime-зависимостей -)

Примечание:

- За вас уже произведена верстка - если Вам понадобилось что-то верстать - вероятно Вы ушли не в ту сторону

## Запуск проекта

1. Установить зависимости `pnpm i`
2. Запустить лайвсервер `vite`
