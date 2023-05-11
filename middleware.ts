import { type NextRequest } from "next/server";
import transactionArraySchema from "./pages/api/schemas/transactionSchema";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/transactions")) {
    if (request.method === "POST") {
      console.log("entrou no middleware");
      try {
        const payload = await request.json();
        await transactionArraySchema.validate(payload);
      } catch (e) {
        return new Response(`${e}`, { status: 400 });
      }
    }
  }
}
