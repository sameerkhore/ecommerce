import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/sanity";
import { ProductDetails } from "@/components/ProductDetails";

// Define the type for page props
interface ProductPageProps {
  params: { slug: string };
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

  return product || null; // Return `null` if no product found
}

// Generate metadata dynamically for the page
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

// Main Product Page component
export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound(); // Redirect to a 404 page
  }

  return (
    <div className="container mx-auto py-8">
      <ProductDetails product={product} />
    </div>
  );
}
