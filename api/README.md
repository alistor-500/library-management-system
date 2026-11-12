<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A robust backend data layer and REST API for a Library Management System built with <a href="http://nestjs.com" target="_blank">NestJS</a>, <a href="https://www.prisma.io/" target="_blank">Prisma 6</a>, and hosted PostgreSQL (<a href="https://neon.tech" target="_blank">Neon</a>).</p>

---

## Features & Data Model

- **Users & Roles:** Supports user accounts with role-based access (`PATRON`, `LIBRARIAN`).
- **Book Catalog & Genres:** Relational mapping between books and categories, pre-populated with diverse genres and titles.
- **Database Migrations & Seeding:** Fully managed via Prisma 6 with an automated seeding script.

---

## Project Setup

### 1. Clone and Install Dependencies
Navigate into the `api/` directory and install dependencies:

```bash
cd api
npm install