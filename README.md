# Travlr Getaways – Full Stack Web Application

**Repository:** https://github.com/WL2025-CS/cs465-fullstack

Final iteration of my CS-465 capstone: a full stack app with a public customer site and a secured admin interface, now protected with authentication.

## Architecture

**Frontend approaches:** The customer site uses Express with server-rendered HTML (Handlebars/EJS) — simple, fast, good for SEO, but a full reload on every navigation. Vanilla JavaScript layers on top for interactivity (validation, AJAX) without reloading the whole page. The admin side is an Angular SPA that loads once and talks to the backend only through the JSON REST API, giving a faster, stateful experience — worth the added complexity for a tool admins use repeatedly.

**Why MongoDB:** Chosen for schema flexibility (trip data doesn't need a rigid, uniform shape), a natural fit with JSON/JS (BSON maps directly to the JSON already moving through the API and frontend, no ORM translation layer), and faster iteration during development since fields could change without formal migrations.

## Functionality

**JSON vs. JavaScript:** JavaScript is a full programming language; JSON is just a text-based data format (objects, arrays, strings, numbers, booleans, null — no logic). That simplicity is why it works as the connective layer: Express serializes MongoDB data as JSON, and both the SPA and vanilla JS consume that same JSON over HTTP, so all three layers exchange data without any custom translation.

**Refactoring & reusable components:** I consolidated duplicate create/update API calls into one reusable service method, extracted a shared trip-card component used by both the listing and search views, and moved form validation into shared validator functions. Reusable components keep the UI consistent, isolate bugs to one place, and mean a future change only has to happen once instead of in every duplicate.

## Testing

Testing covered three layers: **HTTP methods** (confirming `GET`/`POST`/`PUT`/`DELETE` behaved as REST expects, e.g. `GET` never mutating data), **endpoints** (using Postman to send valid/missing/malformed payloads and checking status codes and responses independent of the frontend), and **security** (once JWT auth was added, every protected endpoint needed both a happy-path test and negative tests — no token, expired token, tampered token — confirming graceful `401`/`403` failures instead of leaks or crashes). Adding auth roughly doubled the test cases per endpoint and reinforced that security has to be tested from day one, not bolted on later.

## Reflection

This course strengthened my full stack fluency (moving between server-rendered views, a SPA, a REST API, and NoSQL), API design and testing discipline, authentication fundamentals, and the habit of refactoring duplication into reusable code. Together these make me a stronger full stack candidate — I can speak to concrete architectural trade-offs and point to this repo as a working, secured, end-to-end application.
