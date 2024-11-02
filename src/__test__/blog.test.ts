import { getBlogData } from "@/utils/blog/getBlogData";
import { getBlogList } from "@/utils/blog/getBlogList";

global.fetch = jest.fn();

describe("getBlogData", () => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("should return data when fetch is successful", async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({
        data: {
          post: {
            id: "1",
            title: "Test Post",
            content: "This is a test post.",
            date: "2023-01-01",
            author: { node: { id: "1", nicename: "Author" } },
            tags: { nodes: [{ id: "1", name: "Tag1" }] },
          },
        },
      }),
    };
    mockFetch.mockResolvedValueOnce(mockResponse as Response);

    const result = await getBlogData("1");

    expect(result).toEqual({
      code: 200,
      message: "Success",
      data: {
        id: "1",
        title: "Test Post",
        content: "This is a test post.",
        date: "2023-01-01",
        author: { node: { id: "1", nicename: "Author" } },
        tags: { nodes: [{ id: "1", name: "Tag1" }] },
      },
    });
  });

  it("should return error when fetch fails with other status", async () => {
    const mockResponse = {
      ok: false,
      status: 500,
      json: async () => ({ error: "Internal Server Error" }),
    };
    mockFetch.mockResolvedValueOnce(mockResponse as Response);

    const result = await getBlogData("1");

    expect(result).toEqual({
      code: 500,
      message: "Failed to fetch data",
    });
  });
});

describe("getBlogList", () => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("should return data when fetch is successful", async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({
        data: {
          posts: {
            nodes: [
              {
                id: "1",
                title: "Test Post 1",
                date: "2023-01-01",
                tags: { nodes: [{ id: "1", name: "Tag1" }] },
              },
              {
                id: "2",
                title: "Test Post 2",
                date: "2023-01-02",
                tags: { nodes: [{ id: "2", name: "Tag2" }] },
              },
            ],
          },
        },
      }),
    };
    mockFetch.mockResolvedValueOnce(mockResponse as Response);

    const result = await getBlogList();

    expect(result).toEqual({
      code: 200,
      message: "Success",
      data: [
        {
          id: "1",
          title: "Test Post 1",
          date: "2023-01-01",
          tags: { nodes: [{ id: "1", name: "Tag1" }] },
        },
        {
          id: "2",
          title: "Test Post 2",
          date: "2023-01-02",
          tags: { nodes: [{ id: "2", name: "Tag2" }] },
        },
      ],
    });
  });

  it("should return error when fetch fails with other status", async () => {
    const mockResponse = {
      ok: false,
      status: 500,
      json: async () => ({ error: "Internal Server Error" }),
    };
    mockFetch.mockResolvedValueOnce(mockResponse as Response);

    const result = await getBlogList();

    expect(result).toEqual({
      code: 500,
      message: "Failed to fetch data",
    });
  });

  it("should return 500 error when fetch throws an exception", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network Error"));

    const result = await getBlogList();

    expect(result).toEqual({
      code: 500,
      message: "Internal Server Error",
    });
  });
});
