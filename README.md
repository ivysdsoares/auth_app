# Next.js & NextUI Template

This project is a template that showcases a secure and performant Next.js application integrated with NextAuth.js and NextUI, demonstrating knowledge in forms, API integration, design, themes, SSR, and authentication.

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextAuth.js](https://next-auth.js.org)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Features

- **Secure Authentication**: User sessions and cookies are managed on the server-side to ensure security.
- **API Integration**: Seamless integration with backend APIs, with endpoints protected from public exposure.
- **Server-Side Rendering (SSR)**: Enhanced performance and SEO with SSR.
- **Type Safety**: Utilizes TypeScript for robust type checking and improved developer experience.
- **Form Validation**: Comprehensive form validation using TypeScript 

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
