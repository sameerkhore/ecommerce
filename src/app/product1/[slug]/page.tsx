import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client, urlForImage } from "@/sanity/lib/sanity";
import { ProductDetails } from "@/components/ProductDetails";

// Correct type for page props
interface ProductPageProps {
  params: { slug: string }; // Dynamic route parameter
}

// Function to fetch product details from Sanity
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

  if (product?.imageUrl) {
    product.imageUrl = urlForImage(product.imageUrl).url();
  }

  return product || null; // Ensure null fallback for safety
}

// Function to generate metadata dynamically
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
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

// Main Product Page Component
export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound(); // Redirect to 404 page if product not found
  }

  return (
    <div className="container mx-auto py-8">
      <ProductDetails product={product} />
    </div>
  );
}
