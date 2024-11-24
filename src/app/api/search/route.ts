import { rules } from "@/data";
import { NextRequest, NextResponse } from "next/server";
import MiniSearch from "minisearch";
import { url } from "inspector";

// export const dynamic = "force-static";
//export const revalidate = 86400; // Revalidate once every day

// Configure MiniSearch with the fields we want to search
const miniSearch = new MiniSearch({
  fields: ['title', 'content', 'tags'], // Fields to index for searching
  storeFields: ['title', 'slug', 'content', 'tags', 'author'], // Fields to return in search results
  searchOptions: {
    boost: { title: 2, tags: 1.5 }, // Boost importance of matches in title and tags
    fuzzy: 0.2, // Enable fuzzy matching
  }
});

// Index all rules
miniSearch.addAll(rules.map((rule, id) => ({ ...rule, id })));

interface SearchResult {
  id: number;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  author: string;
  score?: number;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  console.log("query", query);

  if (!query) {
    return NextResponse.json({ error: "No search query provided" }, { status: 400 });
  }

  try {
    const results = miniSearch.search(query).map((result) => {
      const fullDocument = rules[result.id]; // Retrieve the full document using the id
      return {
        ...fullDocument,
        score: result.score,
        content: fullDocument.content.slice(0, 60).trim() + "..."
      };
    });

    return new Response(JSON.stringify({ data: results }), {
      status: 200,
      // headers: {
      //   "Content-Type": "application/json",
      //   "Cache-Control": "public, s-maxage=86400",
      //   "CDN-Cache-Control": "public, s-maxage=86400",
      //   "Vercel-CDN-Cache-Control": "public, s-maxage=86400",
      // },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to perform search" },
      { status: 500 }
    );
  }
}