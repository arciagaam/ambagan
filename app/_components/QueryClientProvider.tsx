"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function QueryClientContainer({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry(failureCount, error) {
          const status = parseInt(error.message)
          // Stop retrying on client errors
          if (failureCount > 3 || (!isNaN(status) && status >= 400 && status < 500)) {
            return false
          }
          return true
        },
      }
    }
  }))
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
