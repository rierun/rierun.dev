import { NextResponse } from "next/server";
import { GET as blogListGet } from "@/app/api/v1/blog/list/route";
import { GET as blogGet } from "@/app/api/v1/blog/get/[blogId]/route";

describe("GET /api/v1/blog/list", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("should return the correct JSON response on success", async () => {
    const mockResponse = {
      data: {
        posts: {
          nodes: [
            {
              id: "1",
              title: "Test Post",
              date: "2023-01-01",
              tags: {
                nodes: [
                  { id: "1", name: "Tag1" },
                  { id: "2", name: "Tag2" },
                ],
              },
            },
          ],
        },
      },
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const request = new Request("http://localhost/api/v1/blog/list");
    const response = await blogListGet(request);
    const jsonResponse = await response.json();

    expect(response.status).toBe(200);
    expect(jsonResponse).toEqual({
      code: 200,
      message: "Success",
      data: mockResponse.data.posts.nodes,
    });
  });

  it("should handle fetch errors correctly", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
      json: jest.fn().mockResolvedValue({}),
    });

    const request = new Request("http://localhost/api/v1/blog/list");
    const response = await blogGet(request, { params: { id: "abc" } });
    const jsonResponse = await response.json();

    expect(response.status).toBe(500);
    expect(jsonResponse).toEqual({
      code: 500,
      message: "Failed to fetch data",
    });
  });
});

describe("GET /api/v1/blog/get", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("should return the correct JSON response on success", async () => {
    const mockResponse = {
      data: {
        post: {
          id: "1",
          title: "Test Post",
          content: "This is a test post.",
          date: "2023-01-01",
          author: {
            node: {
              id: "1",
              nicename: "Author Name",
            },
          },
          tags: {
            nodes: [
              { id: "1", name: "Tag1" },
              { id: "2", name: "Tag2" },
            ],
          },
        },
      },
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const request = new Request("http://localhost/api/v1/blog/get");
    const response = await blogGet(request, { params: { id: "1" } });
    const jsonResponse = await response.json();

    expect(response.status).toBe(200);
    expect(jsonResponse).toEqual({
      code: 200,
      message: "Success",
      data: mockResponse.data.post,
    });
  });

  it("should handle fetch errors correctly", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
      json: jest.fn().mockResolvedValue({}),
    });

    const request = new Request("http://localhost/api/v1/blog/get");
    const response = await blogGet(request, { params: { id: "1" } });
    const jsonResponse = await response.json();

    expect(response.status).toBe(500);
    expect(jsonResponse).toEqual({
      code: 500,
      message: "Failed to fetch data",
    });
  });

  it("should handle missing posts correctly", async () => {
    const mockResponse = {
      data: {
        post: null,
      },
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const request = new Request("http://localhost/api/v1/blog/get");
    const response = await blogGet(request, { params: { id: "1" } });
    const jsonResponse = await response.json();

    expect(response.status).toBe(404);
    expect(jsonResponse).toEqual({
      code: 404,
      message: "Post not found",
    });
  });
});
