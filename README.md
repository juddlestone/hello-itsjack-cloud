# 👋🏼 Hello

This repository contains the code that powers my personal landing page, hello.itsjack.cloud.

It's a small corner of the internet that introduces who I am, a bit about how I like to work, and some of the projects and ideas I've had the chance to be involved in.

## 001 — About this repository

The site itself is intentionally simple.

It is a lightweight static site made up of two pages:

- `index.html` — a short introduction to me, the technologies I work with, and how I like to work
- `work.html` — a few projects, tools, and solutions I've been involved in

Alongside the application code, this repository also contains the Terraform used to support deployment and hosting.

## 002 — What's in here

The repository is split into two main parts:

- `src/` — the website source, including HTML, CSS, JavaScript, and image assets
- `terraform/` — the infrastructure code, including shared configuration and environment-specific variables

## 003 — Tech

This project keeps things deliberately straightforward:

- HTML
- CSS
- JavaScript
- Terraform

No heavy frameworks, no unnecessary moving parts — just enough to keep the site fast, maintainable, and easy to evolve.

## 004 — Running locally

Because the site is static, you can run it locally with any simple web server.

For example, from the repository root:

```bash
cd src
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## 005 — Infrastructure

The `terraform/` directory contains the infrastructure configuration for the site, including environment-specific variable files under `terraform/environments/`.

If you're working with the infrastructure, make sure you select the appropriate tfvars file for the environment you're targeting.

## 006 — Why this exists

I wanted a personal site that felt like me — simple, clear, and thoughtful.

Somewhere I could share a little about my work, my interests, and the kinds of problems I enjoy solving, without overcomplicating it.
