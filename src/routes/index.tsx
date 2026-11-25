import { createFileRoute } from "@tanstack/react-router";
import MindlabsHomepage from "@/components/mindlabs-homepage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MINDLABS Consulting | People, Leadership & Learning" },
      {
        name: "description",
        content:
          "Corporate training, leadership development, professional coaching and customised learning solutions from MINDLABS Consulting, Bengaluru.",
      },
      { property: "og:title", content: "MINDLABS Consulting | People, Leadership & Learning" },
      {
        property: "og:description",
        content:
          "Corporate training, leadership development, professional coaching and customised learning solutions from MINDLABS Consulting, Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MindlabsHomepage,
});
