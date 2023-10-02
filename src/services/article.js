import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': '832a1d22b6mshff8bc74eb0155d9p17c636jsnb3765635460e',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};


export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
      prepareHeaders: (headers) => {
        headers.set("X-RapidAPI-Key", "key");
        headers.set("X-RapidAPI-Host", "key");

      }
    }),
	endpoints: (builder) => ({
		getSummary: builder.query({
			query: (params) => "test",
		}),
	}),
});
