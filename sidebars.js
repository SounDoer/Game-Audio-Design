// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;

module.exports = {
  courseSidebar: [
    'Course/intro',
      {
        type: 'category',
        label: 'L1',
        link: {type: 'doc', id: 'Course/L1/L1'},
        items: [
          'Course/L1/L1-1',
          'Course/L1/L1-2',
        ],
      },
      {
        type: 'category',
        label: 'L2',
        items: [
          'Course/L2/L2-1',
          'Course/L2/L2-2',
        ],
      },
  ],
  topicSidebar: [
    {
      type: 'autogenerated', 
      dirName: 'Topic',
    },
  ],
  resourceSidebar: [
    {
      type: 'autogenerated', 
      dirName: 'Resource',
    },
  ],
  glossarySidebar: [
    {
      type: 'autogenerated', 
      dirName: 'Glossary',
    },
  ],
};