import Head from 'next/head';

interface SchemaScriptProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}
