# Cypress Automation Tests

<p align="center">
    <img src="https://github.com/user-attachments/assets/2eaac74e-6c8a-4251-8b43-9bf3d8b03cfb" alt="Automation Testing Icon" width="200" />
</p>

This repository contains automated tests for the **Sauce Demo** web application using **Cypress**. The tests cover critical user journeys, edge cases, and authentication/authorization scenarios to ensure the application's functionality.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Test Coverage](#test-coverage)
- [Running Tests](#running-tests)
- [Report Generation](#report-generation)

## Prerequisites

Before running the tests, ensure you have the following installed on your machine:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ahmedx3/cypress-automation.git
   cd cypress-automation

2. Install the required dependencies:

   ```bash
   npm install

## Test Coverage

The following tests have been implemented:

### Authentication and Authorization

- **Login**: Tests valid login scenarios.
- **Logout**: Tests successful logout functionality.
- **Access Control**: Verifies that non-admin users cannot access admin features.

### Critical User Journeys

- **Adding an Item to the Cart**: 
  - Tests the process of adding an item to the cart and verifying it.
  
- **Logging Out**: 
  - Tests the Logging out functionality.

### Edge Cases and State Management

- **Form Validation**: 
  - Test scenarios in which the login form is submitted with invalid data, such as empty fields or incorrect credentials.
 
- **State management**: 
  - Verifies that the application state changes as expected during user interactions, such as adding or removing items from the cart.

## Running Tests
  2. To run the tests, use the following command:
  
     ```bash
     npx cypress run
    
## Report Generation
After running the tests, an HTML report and a video will be generated in the `cypress/results` directory. Open the `mochawesome.html` file in your browser to view detailed test results, including passed and failed tests.

