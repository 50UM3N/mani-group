import { Product, WithContext } from 'schema-dts'


export default function SchemaOrg({ schema }: { schema: WithContext<Product> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
