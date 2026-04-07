# Well hello there 👋🏼

This repository contains the code that powers my personal landing page, https://hello.itsjack.cloud. It's a small corner of the internet that introduces who I am, a bit about how I like to work, and some of the projects and ideas I've had the chance to be involved in.

## About

The site itself is intentionally simple. It is a lightweight static site made up of two pages:

- `index.html` — a short introduction to me, the technologies I work with, and how I like to work
- `work.html` — a few projects, tools, and solutions I've been involved in

Alongside the application code, this repository also contains the Terraform used to support deployment and hosting.

## Structure

The repository is split into two main parts:

- `src/` — the website source, including HTML, CSS, JavaScript, and image assets
- `terraform/` — the infrastructure code, including shared configuration and environment-specific variables

## Technology

This project keeps things deliberately straightforward:

- HTML
- CSS
- JavaScript
- Terraform

## Want to run it locally?

Because the site is static, you can run it locally with any simple web server. For example, from the repository root:

```bash
cd src
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.