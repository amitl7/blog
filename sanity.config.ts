'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
//import {deskTool} from 'sanity/deskTool'
import {schema as schemaTypes} from './sanity/schemaTypes'
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';

export default defineConfig({
  basePath: '/studio',
  name: "blog_content_studio",
  title: 'Blog Content Studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: schemaTypes,
  studio: {
    components: {
     logo: Logo,  
      navbar: StudioNavbar,
 
    },
  },
  plugins: [
    //deskTool(),
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion})
  ]
})