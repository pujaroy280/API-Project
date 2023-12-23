# API-Project based on Open Library Book Records

# Vite App - Book Filtering

A simple web application using Vite, Axios, and JavaScript to fetch and filter books (title and author) based on their published year.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
  - [Prerequisites](#prerequisites)
  - [Installation](#getting-started)

## Introduction

This project is a basic web application that fetches book data from the Open Library API using Axios. It allows users to filter and display books based on their published year.

## Features

- Fetches book data from Open Library API: https://openlibrary.org/dev/docs/api/mybooks and https://openlibrary.org/people/mekBot/books/currently-reading.json
- Allows users to filter books based on their published year.
- Displays filtered books based on the title and author dynamically.
- Books are sorted alphabetically based on titles.

![image](https://github.com/pujaroy280/API-Project/assets/62675121/40b3ba38-b451-4370-8eaa-ebc7ce713c60)
The overall UI of the API project when the user runs the dev site.

![image](https://github.com/pujaroy280/API-Project/assets/62675121/ab47806b-cf68-451c-be6c-0b026b81276b)
This UI displays the title of the books that were published in 1999, once the user clicks on the 1999 button.

![image](https://github.com/pujaroy280/API-Project/assets/62675121/ba9e98cd-0766-4249-b5f0-46ab3c356a37)
This UI displays the title of the books that were published in 2000, once the user clicks on the 2000 button.

![image](https://github.com/pujaroy280/API-Project/assets/62675121/3dacf3fd-4ed6-4b62-b339-79f9350f99ad)
This UI displays the title of the books that were published in 2002, once the user clicks on the 2002 button.

![image](https://github.com/pujaroy280/API-Project/assets/62675121/19bfb8e9-6e5f-4abe-a1e8-d6efe6ba86dd)
This UI displays the title of the books that were published in 2014, once the user clicks on the 2014 button.

![image](https://github.com/pujaroy280/API-Project/assets/62675121/762bde20-648a-4d57-87b8-26525ba89709)
This UI displays the title of the books that were published in 2016, once the user clicks on the 2016 button.

![image](https://github.com/pujaroy280/API-Project/assets/62675121/95a4034c-f213-4936-ab3d-c6378856ce77)
![image](https://github.com/pujaroy280/API-Project/assets/62675121/b77de9c7-3393-45c7-9129-fc683512ac41)
This UI displays the titles of all the books that patrons are currently reading from the Open Library, once the user clicks on the Show All button.

## Project Structure
- `api-call.js`: Module for making API calls.
- `main.js`: Main script that integrates other modules.
- `display.js`: Module for displaying books.
- `filter.js`: Module for filtering and sorting books.
- `styles.css`: Stylesheet for styling the HTML.
- `index.html`: HTML file with the structure of the project.
- `README.md`: This file provides documentation about the overall project and how to run it in your local machine.
  
## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

Follow these steps to run the web application:

```bash
// Navigate to the project directory:
cd your-repo

// Install dependencies:
npm install

// Run the application:
npm run dev
```
The application will be available at http://localhost:5173/.


