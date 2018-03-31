# Component Hierarchy  

This document only contains component hierarchy information for the home category, ad detail, brand detail, and attribution reports pages.

#### Home Page
  - Navbar - Home *
  - Ad Carousel *
    - Large Ad (with Stats)
    - Smaller Ad Panes
  - Brand List *


#### Category Page
  - Navbar - General *
  - Breadcrumbs *
    - Category Dropdown
  - Category Page Content  *
    - Title
    - Ad List Component
      - Ad List Item Component


#### Ad Detail Page
  - Navbar - General *
  - Breadcrumbs *
  - Ad Content Component *
    - Title
    - Ad Details
      - Ad Video
      - Ad Stats
    - Data Visualizations *
      - Filter Bar
      - Visualization 1
      - ...
      - Visualization n
      - Blank Map Visualization
      - Get Report Button


#### Brand Detail Page
  - Navbar - General *
    - Sidebar
    - Logo - General
    - Search Box
    - Signin
  - Breadcrumbs *
  - Brand Content Component *
    - Title
    - Multi Visualization Component
      - Visualization Selection Sidebar
      - Filter Bar
      - Visualization
    - Get Report Button *
    - Ad List Component *
      - Ad List Item Component


#### Attribution Reports Page
  - Navbar - General *
    - Sidebar
    - Logo - General
    - Search Box
    - Signin
  - Breadcrumbs *
    - Title
    - Initiate New Analysis *
    - Reports List Component (Toggle between reports that user wants and reports of top brands) *
      - Report Details Component
        - Visualization
        - Ad list Component *
          - Ad List Item Component
      - Initiate New Analysis *


#### Navbar
  - Navbar - Home *
    - Sidebar
    - Logo - Home
    - Search (Home)
      - Search Box
      - Category Dropdown
    - Signin

  - Navbar - General *
    - Sidebar
    - Logo - General
    - Search Box
    - Signin


**_Note_** - _Asterisks denote components with associated containers connected to the store. _

**_Note_** - _Navbar will likely have two separate renders based upon whether it appears on the home page or any other page of the website. This could be passed to the component as a keyword prop. _
