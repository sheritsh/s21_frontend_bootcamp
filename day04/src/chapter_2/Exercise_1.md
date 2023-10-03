![RestaurantDB](https://user-images.githubusercontent.com/48245816/171473967-cb0bfafd-d596-4695-88db-abff2951c824.jpg)

При выполнении задания установите пакеты sequelize, sequelize-cli. Инициализируйте sequelize командой ```yarn sequelize-cli init```, после этого у вас должны создаться 4 папки: config, seeds, migrations, models. Для создания базы воспользуйтесь командой ```yarn sequelize-cli db:create``` . Обязательно добавьте в package.json команду: ```"dbr": "yarn sequelize db:drop && yarn sequelize db:create && yarn sequelize db:migrate && yarn sequelize db:seed:all"```
