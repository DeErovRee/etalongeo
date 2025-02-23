# etalongeo

## Запуск на VPS сервере:

### Установка пакетов и инструментов

1. Подключиться по SSH

2. Обновить список пакетов

```bash
sudo apt update
```

3. Обновить устанвленные пакеты

```bash
sudo apt upgrade
```

4. Установить необходимые иструменты

```bash
sudo apt install curl git vim nginx
```

-   **curl** - скачивание фалов из интернета
-   **git** - клонирование репозитория с GitHub
-   **vim** - текстовый редактор (можете конечно использовать nano)
-   **nginx** - Веб-сервер и reverse proxy

### Установка Node.js и npm

1. Установите **nvm**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

2. Активируйте **nvm**

```bash
source ~/.nvm/nvm.sh
```

3. Установите стабильную версию **Node.js**

```bash
nvm install --lts
```

4. Установите использование стабильной версии **Node.js**

```bash
nvm install --lts
```

### Клонирование репозитория с GitHub

1. Перейти в деррикторию где будет располагаться проект

```bash
cd var/www/
```

2. Склонируйте репозиторий

```bash
git clone https://github.com/DeErovRee/etalongeo <new-folder-name>
```

### Установка зависимостей

1. Перейти в папку с проектов
2. Установите **npm**

```bash
npm install
```

3. Соберите проект

```bash
npm run build
```

### Настройка PM2 для управления процессом

1. Установите PM2 глобально

```bash
sudo npm install -g pm2
```

2. Запустите Next.js приложение с помощью PM2

```bash
pm2 start npm --name "app-name" -- start
```
