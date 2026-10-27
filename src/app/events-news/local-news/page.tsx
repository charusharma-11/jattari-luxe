
import { redirect } from "next/navigation";

export default function LocalNewsRedirect() {
  redirect("/events-news/latest-local-news");
}
