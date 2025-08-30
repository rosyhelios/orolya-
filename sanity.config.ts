'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn about API versioning
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemaTypes';
import { structure } from './sanity/structure'; // named import matches export

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    schema,
    plugins: [
        structureTool({ structure }), // pass your custom structure
        visionTool({ defaultApiVersion: apiVersion }),
    ],
});
