# Настройка процесса транспиляции и бандлинга

## Транспиляция
**Транспиляция** &mdash; преобразование программы, при котором используется исходный код программы, написанной на одном языке программирования в качестве исходных данных, и производится эквивалентный исходный код на другом языке программирования [[Wikipedia](https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%B0%D0%B9%D0%BB%D0%B5%D1%80)].

- [Чем транспиляция отличается от компиляции?](https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/)

Самая большая сложность в процессе клиентской разработки на js состоит в том, что у разработчика нет информации об окружении, в котором будет исполняться его код (конфигурация компьютера, операционная система, браузер и его версия и тп).

Если говорить о JavaScript, как о стандарте, то вернее называть его ECMAScript ([осторожно, можно познать дзен](https://habr.com/ru/company/nix/blog/342904/) + [оригинал на английском](https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/)).
С 2015 года данный стандарт начал развиваться гораздо быстрее, и каждый год мы получаем новые фичи языка и новую версию, номер которой просто привязывается к году релиза.
Чтобы быть уверенным, что написанный разработчиком код будет выполняться у большинства клиентов, код нужно транспилировать (привести к более старой версии).
Часто production версию кода доводят до фич, поддерживаемых в ES5, так как он поддерживается большинством используемых на данный момент браузеров.
Более тонко можно настроить с помощью [browserlist](https://babeljs.io/docs/en/babel-preset-env#browserslist-integration) <sup>[[1](#1)]</sup> (об этом будет подробнее в одной из следующих лекций).

Babel умеет не только исправлять синтаксис, но также реализовывать неподдерживаемые старыми браузерами фичи языка (методы глобальных объектов JS). Делает он это не сам, а с помощью сторонних полифиллов (по-умолчанию используется [core-js](https://github.com/zloirock/core-js)).

**Полифилл** &mdash; это код, реализующий какую-либо функциональность, которая не поддерживается в некоторых версиях веб-браузеров. Обычно представляет собой библиотеку JavaScript, которая реализует поддержку веб-стандарта в версиях браузеров, где поддержка этих функций частично или полностью отсутствует [[Wikipedia](https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%B8%D1%84%D0%B8%D0%BB)].

### Стандартные пресеты
- [preset-env](https://babeljs.io/docs/en/babel-preset-env) - просто самые последние фичи стандарта языка
- [preset-react](https://babeljs.io/docs/en/babel-preset-react) - позволяет использовать jsx синтаксис
- [preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) - перевод из typescript в javascript
- [preset-flow](https://babeljs.io/docs/en/babel-preset-flow) - [Flow](https://flow.org/en/docs/getting-started/) надстройка над javascript, добавляющая типизацию. Данный пресет позволяет использовать этот синтаксис при написании кода (лично от себя я бы не рекомендовал этим пользоваться, typescript гораздо функциональнее).

По своей сути, пресеты &mdash; просто набор плагинов для Babel ([official](https://babeljs.io/docs/en/plugins) + [Github](https://github.com/search?q=babel-plugin+in%3Aname)).

## Бандлинг
**Бандлинг** &mdash; процесс минификации и упаковки различных модулей в один файл (или несколько логически разделенных по какому-либо признаку, например, функциональности).

- [Understanding the concept of bundling for beginners](https://medium.com/madhash/understanding-the-concept-of-bundling-for-beginners-f2db1adad724)
- [Webpack Getting Started](https://webpack.js.org/guides/getting-started/)

### Что-то кроме Webpack
- [Rollup Quick Start](https://rollupjs.org/guide/en/#quick-start)
- [Parcel Getting Started](https://parceljs.org/getting_started.html)

## Все вместе

![babel-loader](https://cs9.pikabu.ru/images/previews_comm/2020-11_1/1604325361161473698.jpg)

Для того, чтобы подружить Babel и Webpack используется [babel-loader](https://www.npmjs.com/package/babel-loader).
Пример такой дружбы &mdash; прямо в этой папке.

# Post lesson notes

## Source Maps
В конце лекции я хотел показать, как работают source maps, но мне не удалось это продемонстрировать, (код в chrome devtools выглядел не так, как он был написан, а с кое-какими артефактами).
Это было связано с тем, что во время написания конфига для webpack я не задал явно значение [`devtool`](https://webpack.js.org/configuration/devtool/) ([fix commit](https://github.com/Xoxol/react-js-course/commit/f5a0f164578ccac9cb9c6394b605d4096bcdd6d4)).

## Webpack Plugins
Я упоминал, что webpack поддерживает дополнительную настройку с помощью различных [плагинов](https://webpack.js.org/plugins/).
По ссылке можно посмотреть список плагинов, поставляемых командой Webpack. Существует также [сборник полезных плагинов от сообщества](https://github.com/webpack-contrib/awesome-webpack#webpack-plugins).

В качестве примера я настроил плагин, который используется практически всегда &mdash; генерирует `index.html` файл (умеет и по шаблону) и сразу вставляет туда результат бандлинга ([commit с реализацией](https://github.com/Xoxol/react-js-course/commit/4fc57814dd8ad08c643c52f4fdeb2a9a806fdec3)).

## Babel Plugins
Babel тоже поддерживает плагины. Они могут помогать транспилировать экспериментальный синтаксис ([например](https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator.html)), или добавлять какие-то дополнительные оптимизации в код ([например](https://github.com/lodash/babel-plugin-lodash)).

**Не советую использовать экспериментальные фичи языка, не вошедшие в стандарт. Риск их использования (предложение будет отклонено или претерпит значительные изменения) перевешивает потенциальную пользу от их использования.**
Но просто в качестве примера, реализуем поддержку предложения [The Pipeline Operator](https://github.com/tc39/proposal-pipeline-operator/), потому что нечто подобное на лекции было реализовано с помощью функции `compose`.

[Коммит с реализацией](https://github.com/Xoxol/react-js-course/commit/9f73fdc6be7968c0dafc3299b5620a5524c5d7a5). Попробуйте удалить подключение плагина в файле `babel.config.json`, собрать бандл (`npm run bundle:dev`) и посмотреть на результат в браузере.

# 1
В feedback форме был вопрос *Я так и не понял чем browserlist плох?*.

Я не имел в виду, что использовать browserlist &mdash; плохо.
Я подразумевал, что плохо писать в `.browserlistrc` указание на точные версии браузеров.
```
chrome >= 58
ie 9
```
Естественно, бывают исключения: если аналитики собирают статистику используемых клиентами браузеров и у вас есть реальные данные по посещаемости вашего продукта, при этом бизнес готов отказать в функционировании сайта некоторым клиентам, доля которых мала &mdash; можно писать точные версии.
Если такой статистики пока нет &mdash; лучше использовать некастрированный preset-env, или `.browserlistrc` с максимальным охватом, отрезающий реально только мертвые браузеры.
```
> 0.25%
not dead
```
