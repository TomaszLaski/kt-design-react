# Problem z eksportem modelu 3D z 3ds Max — brak UV i tekstur

## Co jest nie tak

Eksport `.glb` z 3ds Max (Rolex GMT-Master II) trafia na stronę bez żadnych
bitmap. Wszystkie mapy, które w Maxie wyglądają poprawnie (szczotkowana
stal, kolor tarczy), w przeglądarce znikają — części wychodzą płaskie,
białe albo w domyślnym szarym kolorze materiału.

Sprawdzone bezpośrednio w pliku: `images: 0`, żadna siatka nie ma
`TEXCOORD_0` (współrzędnych UV). To dotyczy każdego dotychczasowego
eksportu (`rolex.glb`, `rolex2.glb`, `rolex3.glb`, `rolex4.glb` — różne
nazwy, ten sam brak).

## Przyczyna

Stack to czysty 3ds Max (bez Corony przy tym eksporcie) — to nie jest
konwersja z CAD. Przyczyna leży w samej scenie i w eksporterze:

1. **Obiekty nie mają nadanego mapowania UV.** Żadna siatka w pliku nie ma
   `TEXCOORD_0`. Jeśli obiekt w Maxie nigdy nie dostał modyfikatora **UVW
   Map** ani **Unwrap UVW** (a modelowanie szło bez myślenia o teksturach,
   np. na gotowych primitives albo modyfikatorach, które same z siebie UV
   nie generują), to w pliku po prostu nie ma współrzędnych, do których
   mogłaby się „przykleić" jakakolwiek bitmapa. Eksporter glb nie ma tu
   nic do zrobienia — nie wymyśli UV, których nie ma w scenie.
2. **Eksporter glb rozumie tylko podstawowy PBR.** Nawet przy poprawnych
   UV, format glTF/glb przenosi wyłącznie prosty zestaw: base color,
   metalness, roughness, normal — jako płaskie wartości albo zwykłe
   bitmapy podpięte w **Physical Material**. Materiały spoza tego
   standardu (np. z rozbudowanym stackiem map, blendami, proceduralnymi
   teksturami 3ds Max w slotach, których Physical Material nie ma) albo
   się nie przenoszą, albo przenoszą się jako przybliżenie z zerowaną
   mapą.

Efekt: eksporter zostawia płaskie, przybliżone kolory bazowe (czasem 0,
czyli czarny — stąd „fallback Material" na obiektach bez przypisanego
materiału) i zero tekstur — niezależnie od tego, jak dobrze materiał
wygląda w viewporcie Maxa.

## Jak to naprawić u źródła (w Maxie)

Żeby tekstury i UV faktycznie trafiły do glb, przed eksportem trzeba w
Maxie:

1. **Nadać mapowanie UV** stalowym częściom (bransoleta, koperta, bezel)
   — modyfikator **UVW Map**, typ Box lub Cylindrical wystarczy, nie
   trzeba ręcznego unwrapu. Bez tego kroku żadna bitmapa się nie przyklei,
   niezależnie od tego, co podłączysz w materiale.
2. **Przepiąć materiały na Physical Material** (nie V-Ray/Corona) z
   bitmapami w slotach: Base Color, Roughness, ewentualnie Normal/Bump.
   To jedyny typ materiału, który eksporter glb potrafi w pełni przełożyć.
3. **Wyeksportować przez oficjalny plugin Babylon.js / glTF Exporter** dla
   3ds Max, z zaznaczonymi opcjami eksportu tekstur i UV (domyślnie
   powinny być włączone, ale warto zaznaczyć ręcznie).
4. **Zweryfikować przed wysłaniem** — otworzyć wynikowy `.glb` w
   niezależnym viewerze (np. https://gltf-viewer.donmccurdy.com/ albo
   podgląd plików 3D w Windows) i sprawdzić, czy tekstury są widoczne
   tam, zanim plik trafi na stronę. Jeśli w tym viewerze tekstur nie
   widać, na stronie też ich nie będzie — to eliminuje zgadywanie, czy
   problem jest w eksporcie czy w kodzie strony.

## Co robimy teraz jako obejście (bez zmian w Maxie)

Dopóki eksport nie ma UV/tekstur, pipeline [scripts/optimize-rolex-hq.mjs](../scripts/optimize-rolex-hq.mjs)
odtwarza wygląd ręcznie, po stronie kodu:

- generuje UV programowo dla tarczy (rzutowanie planarne) i dla stali
  (rzutowanie po najdłuższej osi każdej części — kierunek szczotkowania),
- podpina własne, wygenerowane bitmapy (szczotkowanie stali, opcjonalnie
  tarcza jeśli dostarczona jako osobny plik graficzny),
- koloruje materiały ręcznie po **nazwie** (`rolex1`, `rolex2`, …) i po
  **nazwie siatki** (np. `Cylinder010` = tarcza, `Object068` = pierścień
  za tarczą, `Cylinder037` = numerki bezela, lista `LUME_FILL_MESHES` =
  wypełnienia znaczników/wskazówek).

To działa, ale jest kruche: jeśli w Maxie zmienią się nazwy materiałów
albo siatek, mapowanie w skrypcie przestaje pasować i trzeba je
zaktualizować ręcznie (tak jak przy przejściu z `rolex2.glb` na
`rolex4.glb`, gdzie zmieniły się nazwy materiałów `Material__115` →
`rolex1` itd.).

**Docelowo najlepsze rozwiązanie to naprawa w Maxie (kroki 1–4 wyżej)** —
wtedy prawdziwe tekstury (w tym szczegóły tarczy, których nie da się
wygenerować proceduralnie) trafią do pliku, a pipeline w kodzie będzie
mógł je po prostu przepuścić zamiast zgadywać.

## Przy każdej kolejnej teksturze (np. narzuta na skórzany pasek, inny wariant tarczy)

Zanim ktoś zacznie zgadywać, dlaczego nowa tekstura „nie działa", trzeba
sprawdzić dokładnie te dwie rzeczy w kolejności:

1. **Czy obiekt w Maxie ma UVW Map / Unwrap UVW?** Jeśli nie — bitmapa nie
   ma prawa się pojawić w glb, niezależnie od tego, co zrobimy w kodzie.
   To pierwsze pytanie, nie ostatnie.
2. **Czy materiał to Physical Material z bitmapą podpiętą wprost w slocie
   Base Color / Roughness / Normal?** Jeśli tekstura idzie przez blend,
   mix, warstwy, proceduralne mapy Maxa albo materiał V-Ray/Corona —
   eksporter może ją zgubić albo spłaszczyć do jednego koloru.

Najszybszy sposób sprawdzenia bez czekania na wdrożenie na stronę:
otworzyć eksportowany `.glb` w https://gltf-viewer.donmccurdy.com/ —
jeśli tekstura tam nie jest widoczna, problem jest w eksporcie z Maxa, nie
w kodzie strony. To pozwala od razu wiedzieć, gdzie szukać, zamiast
odbijać się między Maxem a przeglądarką.

Jeśli z jakiegoś powodu poprawa UV w Maxie nie jest od razu możliwa, da
się dorobić prowizoryczne UV programowo po stronie kodu (tak jak dla
tarczy i stali w tym modelu — patrz `optimize-rolex-hq.mjs`), ale to
zawsze wymaga: (a) dokładnej nazwy siatki/materiału, żeby wiedzieć, co
pomalować, i (b) ręcznego dobrania kierunku/skali UV metodą prób i
błędów, bo kod nie zna prawdziwego kształtu obiektu tak dobrze jak Max.
To rozwiązanie zapasowe, nie docelowe.
