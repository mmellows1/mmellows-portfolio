# Sanity API Library

This directory contains the API library for connecting to Sanity CMS securely and fetching data.

## Files

- `api.ts` - Main API library with functions to fetch data from Sanity
- `example-usage.ts` - Examples showing how to use the API functions
- `../types/sanity.ts` - TypeScript interfaces for Sanity data

## Setup

1. **Environment Variables**: Make sure you have the following in your `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=m1ek99iz
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_token_here  # Optional
   ```

2. **Dependencies**: The `@sanity/client` package is already installed.

## Available Functions

### `getProjects()`
Fetches all projects from Sanity.
```typescript
const response = await getProjects();
if (response.error) {
  console.error('Error:', response.error);
} else {
  console.log('Projects:', response.data);
}
```

### `getCareers()`
Fetches all careers from Sanity.
```typescript
const response = await getCareers();
if (response.error) {
  console.error('Error:', response.error);
} else {
  console.log('Careers:', response.data);
}
```

### `getProjectBySlug(slug: string)`
Fetches a single project by its slug.
```typescript
const response = await getProjectBySlug('my-project-slug');
if (response.error || !response.data) {
  console.log('Project not found');
} else {
  console.log('Project:', response.data);
}
```

### `getImageUrl(image, width?, height?, quality?)`
Generates optimized image URLs for Sanity images.
```typescript
const imageUrl = getImageUrl(project.images[0], 300, 200, 80);
```

## Usage in Components

### Server Components
```typescript
import { getProjects, getCareers } from '@/utils/api';

export default async function HomePage() {
  const projectsResponse = await getProjects();
  const careersResponse = await getCareers();

  return (
    <div>
      {projectsResponse.data.map(project => (
        <div key={project._id}>{project.title}</div>
      ))}
    </div>
  );
}
```

### API Routes
```typescript
import { getProjects } from '@/utils/api';

export async function GET() {
  const response = await getProjects();
  return Response.json(response);
}
```

## TypeScript Support

All functions are fully typed with TypeScript interfaces:
- `Project` - Project data structure
- `Career` - Career data structure  
- `SanityImage` - Image reference structure
- `SanityResponse<T>` - API response wrapper

## Error Handling

All functions return a `SanityResponse<T>` object with:
- `data` - The fetched data
- `error` - Error message if something went wrong

Always check for errors before using the data:
```typescript
const response = await getProjects();
if (response.error) {
  // Handle error
  return <div>Error: {response.error}</div>;
}
// Use response.data safely
```
