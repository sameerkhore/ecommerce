import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client, urlForImage } from "@/sanity/lib/sanity";
import { ProductDetails } from "@/components/ProductDetails";

// Define the props for the ProductPage
interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Fetch the product from Sanity based on the slug
async function getProduct(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`;

  const product = await client.fetch(query, { slug });

  if (product && product.imageUrl) {
    product.imageUrl = urlForImage(product.imageUrl).url();
  }

  return product || null;
}

// Generate metadata for the page based on the product
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProduct(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

// Default export function for rendering the ProductPage
export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <ProductDetails product={product} />
    </div>
  );
}
