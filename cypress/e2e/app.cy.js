describe("Navigation", () => {
    it("should navigate to the services page", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="/services"]').eq(0).click();

        // The new url should include "/about"
        cy.url().should("include", "/services");

        // The new page should contain an h1 with "About page"
        cy.get("h1").contains("Услуги");
    });

    it("should navigate to the services page using service cards", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="/services"]').click({ multiple: true });

        // The new url should include "/about"
        cy.url().should("include", "/services");
    });

    it("should navigate to the newses page", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="/blog"]').eq(0).click();

        // The new url should include "/about"
        cy.url().should("include", "/blog");

        // The new page should contain an h1 with "About page"
        cy.get("h1").contains("Новости");
    });

    it("should navigate to the services page using service cards", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="/blog"]').click({ multiple: true });

        // The new url should include "/about"
        cy.url().should("include", "/blog");
    });

    it("should navigate to the contacts page", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="/contacts"]').eq(0).click();

        // The new url should include "/about"
        cy.url().should("include", "/contacts");

        // The new page should contain an h1 with "About page"
        cy.get("h1").contains("Контакты");
    });

    it("should navigate to the contacts page", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="/docs"]').eq(0).click();

        // The new url should include "/about"
        cy.url().should("include", "/docs");

        cy.get("button").contains("Получить");
    });

    it("should navigate to the contacts page", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/docs");

        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="/"]').eq(0).click();

        // The new url should include "/about"
        cy.url().should("include", "/");

        // The new page should contain an h1 with "About page"
        cy.get("h1").contains(
            "Ваш надежный помощник в земельно-имущественных вопросах"
        );
    });
});

describe("Get documents", () => {
    it("should get the documents", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/docs");

        // The new url should include "/about"
        cy.url().should("include", "/docs");

        // The new page should contain an h1 with "About page"
        cy.get("#phone").type("89630697779");

        cy.get("#order").type("100001");

        cy.get("button").contains("Получить").click();

        cy.get("button").contains("Скачать всё");
    });
});
