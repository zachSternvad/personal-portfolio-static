// Filnamn: script.js

// Jag slår in all min kod i en funktion som anropar sig själv direkt.
// Detta är en bra vana för att undvika att mina variabler krockar med andra skript.
(function() {
    // Först hämtar jag de HTML-element jag behöver interagera med via deras ID.
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Funktion för att applicera ett valt tema (antingen 'light' eller 'dark')
    function applyTheme(theme) {
        // Om temat är 'light', lägg till klassen 'light-mode' på body.
        if (theme === "light") {
            body.classList.add("light-mode");
        } else {
            // Annars, ta bort klassen. Mörkt tema är standard.
            body.classList.remove("light-mode");
        }
    }

    // När sidan laddas kollar jag om användaren har ett sparat tema i sin webbläsares localStorage.
    // Detta gör att sidan kommer ihåg användarens val till nästa besök.
    // Om inget tema finns sparat, använder jag 'dark' som standard.
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    // Jag lägger till en "event listener" som lyssnar efter klick på min temaknapp.
    themeToggle.addEventListener("click", function() {
        // Jag kollar om body-elementet för närvarande HAR klassen "light-mode".
        const isLight = body.classList.contains("light-mode");
        
        // Om sidan är ljus, ska det nya temat bli mörkt. Annars, tvärtom.
        const newTheme = isLight ? "dark" : "light";
        
        // Jag anropar min funktion för att applicera det nya temat.
        applyTheme(newTheme);

        // Jag sparar det nya valet i användarens webbläsare så att det kommer ihåg.
        localStorage.setItem("theme", newTheme);
    });

    // Jag måste anropa denna funktion från Lucide-biblioteket för att ikonerna ska ritas korrekt.
    lucide.createIcons();
})();
