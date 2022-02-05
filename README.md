# Ticketer

Gruppeprosjekt i TDT4140

## Hvordan starte appen
* * *

Du må kjøre de to forskjellige applikasjonene (frontend og backend) i egne terminaler. Altså 2 terminaler for å kunne kjøre den.

1. Start backend

    0. Flytt deg inn i backend mappen
    ```
    cd backend
    ```

    1. Installer modulene hvis ikke allerede gjort
    ```
    yarn install
    ```

    2. Start databasen
    ```
    docker-compose up -d
    ```

    3. Start serveren (i utviklingsmodus)
    ```
    yarn run dev
    ```

2. Start frontend
    
    0. Flytt deg inn i frontend mappen
    ```
    cd frontend
    ```

    1. Installer modulene hvis ikke allerede gjort
    ```
    yarn install
    ```

    2. Start web-appen
    ```
    yarn run start
    ```