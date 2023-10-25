describe("Navigation", () => {
    it("should navigate to the services page", () => {
        cy.visit("http://localhost:3000/");

        cy.get('a[href*="/services"]').eq(0).click();

        cy.url().should("include", "/services");

        cy.get("h1").contains("Услуги");
    });

    it("should navigate to the services page using service cards", () => {
        cy.visit("http://localhost:3000/");

        cy.get('a[href*="/services"]').click({ multiple: true });

        cy.url().should("include", "/services");
    });

    it("should navigate to the newses page", () => {
        cy.visit("http://localhost:3000/");

        cy.get('a[href*="/blog"]').eq(0).click();

        cy.url().should("include", "/blog");

        cy.get("h1").contains("Новости");
    });

    it("should navigate to the services page using service cards", () => {
        cy.visit("http://localhost:3000/");

        cy.get('a[href*="/blog"]').click({ multiple: true });

        cy.url().should("include", "/blog");
    });

    it("should navigate to the contacts page", () => {
        cy.visit("http://localhost:3000/");

        cy.get('a[href*="/contacts"]').eq(0).click();

        cy.url().should("include", "/contacts");

        cy.get("h1").contains("Контакты");
    });

    it("should navigate to the contacts page", () => {
        cy.visit("http://localhost:3000/");

        cy.get('a[href*="/docs"]').eq(0).click();

        cy.url().should("include", "/docs");

        cy.get("button").contains("Получить");
    });

    it("should navigate to the contacts page", () => {
        cy.visit("http://localhost:3000/docs");

        cy.get('a[href*="/"]').eq(0).click();

        cy.url().should("include", "/");

        cy.get("h1").contains(
            "Ваш надежный помощник в земельно-имущественных вопросах"
        );
    });
});

describe("Get documents", () => {
    it("should have a form", () => {
        cy.visit("http://localhost:3000/docs");

        cy.get("#order").should("have.value", "");

        cy.get("#phone").should("have.value", "");

        cy.get("button").contains("Получить");
    });

    it("should get the documents", () => {
        cy.visit("http://localhost:3000/docs");

        cy.url().should("include", "/docs");

        cy.get("#phone")
            .type("89630697779")
            .should("have.value", "89630697779");

        cy.get("#order").type("100001").should("have.value", "100001");

        cy.get("button").contains("Получить").click();

        cy.get("button").contains("Скачать всё").click();
    });
});

describe("Footer navigation", () => {
    it("should navigate to contacts", () => {
        cy.visit("http://localhost:3000/docs");

        cy.get('a[href *= "/contacts"]').eq(1).click();

        cy.url().should("include", "/contacts");

        cy.get("h1").contains("Контакты");
    });
});

describe("Main page form", () => {
    it("should have a form", () => {
        cy.visit("http://localhost:3000");

        cy.get("#name").should("have.value", "").click();

        cy.get("#email").should("have.value", "").click();

        cy.get("#theme").should("have.value", "").click();

        cy.get("#message").should("have.value", "").click();
    });

    it("form should be a submit", () => {
        cy.visit("http://localhost:3000");
        cy.get("#name").type("Name Names").should("have.value", "Name Names");

        cy.get("#email")
            .type("email@yandex.com")
            .should("have.value", "email@yandex.com");

        cy.get("#theme")
            .type("Theme of message")
            .should("have.value", "Theme of message");

        cy.get("#message")
            .type(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
            .should(
                "have.value",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            );

        cy.get("button[type='submit']").contains("Отправить").click();

        cy.get("#name").should("have.value", "");

        cy.get("#email").should("have.value", "");

        cy.get("#theme").should("have.value", "");

        cy.get("#message").should("have.value", "");
    });
});
