type postData = {
  id: string;
  title: string;
  content: string;
  date: string;
  author: {
    node: {
      id: string;
      nicename: string;
    };
  };
  tags: {
    nodes?: {
      id: string;
      name: string;
    }[];
  };
};

type postList = {
  id: string;
  title: string;
  date: string;
  tags: {
    nodes?: {
      id: string;
      name: string;
    }[];
  };
}[];
