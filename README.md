# Eleventy Blogsite Generator
JAMstack Template Repository of Static-site Generator for Blogsite CMS using these technologies:
- [Eleventy (11ty)](https://www.11ty.dev/)
- [Nunjucks](https://mozilla.github.io/nunjucks/) 
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome Kit](https://fontawesome.com/kits/)
- [Google Font - Montserrat](https://fonts.google.com/specimen/Montserrat)
- [Avataaars Generator](https://getavataaars.com/)


# Configuration Setup

## Azure Static Web App
1. Create a new service "Azure Static Web Apps" in [Azure Portal](https://portal.azure.com)
2. Provide all required details for creating the new service
   > ![image](https://user-images.githubusercontent.com/13392361/163714878-c0e5fe8a-086e-4b34-bfc5-e7d1235e5b64.png)
  
3. Signin with your Github account and authorized the Azure-App-Service-Static-Web-Apps when prompted
   > ![image](https://user-images.githubusercontent.com/13392361/163714933-f23dec5f-4eb5-4cb7-8694-2c3dfefa4fe1.png)

4. Provide details with your dedicated Github repository of the blogsite template
   >- Yellow Highlight: Provide you GitHub repository details
   >- Green Highlight: Configure as per screenshot. Based on template setup - **App location** is set to root `/`, **Api location** is set to `/api`, and **Output location** set to `public` folder

   > ![image](https://user-images.githubusercontent.com/13392361/163715522-5970c1bd-dcf7-46e1-bb7f-2e89a09e484b.png)

5. Complete the wizard steps and verify that YAML configuration has been created in your dedicated repository for the GitHub Actions
  

## Netlify CMS (Headless)
...
