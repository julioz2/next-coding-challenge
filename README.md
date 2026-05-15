# Michael's NextJS Coding Challenge

## The Challenge:
Some newb has made a mess of this code. There are TODOs that need finishing off, broken and questionable tests and the code itself is inefficient.  
Please fix up whatever mess you find to get this piece of work working well.

### Extended tasks

- Our Product Manager wants a new 'checkout' page which should detail all of the items in the basket with their quantity and a total item quantity. Create this page.
- We've launched our new product API - <https://v0-api-endpoint-request.vercel.app/api/products> - can you please migrate the site to use the products from here - UK only for now. Our CTO is adamant that products should be available as soon as the page loads - no loading spinners.
- We've released a way of getting some more products. Its a bit slow so these can be displayed to the user after the initial products load please <https://v0-api-endpoint-request.vercel.app/api/more-products>
- We're launching in the states! When the user navigates to /us, prices should be displayed in dollars (USD) instead of GBP, and text should be localized for US users. Ensure the solution is scalable for future regions (e.g., Europe, Asia). Consider how you would handle currency formatting, locale-specific content, and dynamic routing.
- Run your applications tests when you push the branch to github
- Deploy your application when you push the branch to github

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, `npm install`, then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the testing and linting with `npm run test` and `npm run lint`.

## Notes

- **Scope & tooling:** I kept the solution simple and did not add new packages. For deferred data such as “more products”, I used a small client `useEffect` and app state; in production I would typically use **TanStack Query** for caching, loading/error states, and deduplication.

- **Styling:** Visual polish was not part of the requirements, so the store UI is intentionally basic and neutral. Given more time, I would refactor the layout and components to **Tailwind** for consistency and faster iteration.

- **More products & duplicate IDs:** The “more products” API returns items that share IDs with the initial catalog. For this exercise I **prefix / merge them anyway** so the feature is visible in the UI. I would **not** ship that behaviour to production, stable unique IDs from the API, or treating “more” as updates to existing SKUs.

- **Testing:** There is plenty worth covering (regions, basket, deferred load, checkout). I did not have time, next time!!
