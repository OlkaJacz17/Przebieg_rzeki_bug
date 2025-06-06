# Wizualizacja przebiegu koryta rzecznego Bugu
## Warstwy

Na mapie ukazuje się przebieg rzeki Bug w różnych latach na różnych warstwach.

Odpowiednio na warstwie przedstawiono:

### Analizy jakościowe

+ _**Rzeka_plynie_zawsze**_ przedstawiony jest obszar, na którm przez wszystkie lata od 1940 do 2024r, przepływał Bug

+ _**Union**_ ukazany jest zasięg rzeki, na jakim rzeka przepływała kiedykolwiek

### Kształt koryt rzecznych na dany rok

+ _**Sentinel**_ widzimy jak wyglądała rzeka w 2024r.

+ _**Vmap**_ obserwujemy zasięg Bugu na rok 1990

+ _**Mapa_his**_ na tej warstwie przedstawione jest koryto rzeki, pozyskane z wektoryzacji map historycznych z 1940r.

### Analizy ilościowe

+ _**Sentinel_vmap**_ warstwa ta ukazuje zestawienie różnic z map satelitarych Sentinel oraz mapy Vmap, służy analizom ilościowym koryta rzeki, symbolem tej warstwy jest siatka heksagonów

+ _**Vmap_his**_ jest to zestawienie różnic z Vmap i map historycznych, zestawienie jest wykorzystywane do analiz ilościowych, symboliką jest siatka heksagonów

+ _**Sentinel_his**_ jest to warstwa utworzona przez zestawienie różnic z Sentinela i map historycznych, warstwa służy analizom ilościowym, symbolem jak w powyższych przypadkach jest siatka heksagonów

+ _**Raster**_ jest to mapa bazowa, ortofotomapa ma za zadanie ukazać rozmieszczenie przebiegów rzek w przestrzeni.


## Uwagi
Mapa może ładować się powoli ze względu na dużą ilośc danych przestrzennych, mapa zawiera wiele warstw i obiektów, co zwiększa rozmiar plików oraz czas potrzebny na ich załadowanie i renderowanie. 
Ponadto pliki użyte do utworzenia mapy są dosyć duże, o wpływa na szybkość pobierania ich przez przeglądarkę.
