'use server';

import { getCats } from "@/lib/client";

export const getCatsHttp = getCats({
  query: {
    limit: 10
  }
})