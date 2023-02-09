"use client";

import { TravelLogProperty } from "@/models/TravelLog/TravelLog";

const travelLogInputs: Record<
  TravelLogProperty,
  {
    label?: string;
    type: "text" | "url" | "textarea" | "number" | "date";
  }
> = {
  title: {
    type: "text",
  },
  description: {
    type: "textarea",
  },
  image: {
    type: "url",
  },
  rating: {
    type: "number",
  },
  latitude: {
    type: "number",
  },
  longitude: {
    type: "number",
  },
  visitDate: {
    label: "Visit Date",
    type: "date",
  },
};

const now = new Date();
const padNum = (input: number) => input.toString().padStart(2, "0");
const nowString = `${now.getFullYear()}-${padNum(now.getMonth() + 1)}-${padNum(
  now.getDate()
)}}`;
