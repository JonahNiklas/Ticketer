# Ticketer

Gruppeprosjekt i TDT4140

## Hvordan starte appen
* * *

Du må kjøre de to forskjellige applikasjonene (frontend og backend) i egne terminaler. Altså 2 terminaler for å kunne kjøre den.

Gjør dette i første terminalen:
1. ```cd backend```
2. ```yarn install```
3. ```docker-compose up -d```
4. ```yarn prisma db push```
5. ```yarn prisma db seed```
6. ```yarn dev```

Gjør dette i den andre terminalen
1. ```cd frontend```
2. ```yarn install```
3. ```yarn start```