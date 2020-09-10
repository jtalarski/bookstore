CREATE TABLE books (
"id" serial PRIMARY KEY,
"title" VARCHAR(250) NOT NULL,
"author" VARCHAR(100) NOT NULL,
"published" DATE
);

INSERT INTO "books" (title, author, published)
VALUES ('Book One', 'Joan Smith', '01-01-2020');