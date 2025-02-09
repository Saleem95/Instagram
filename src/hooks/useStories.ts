import { useEffect, useState } from "react";

interface Story {
  imageUrl: string;
  time: string;
}

interface UserStory {
  id: number;
  username: string;
  stories: Story[];
}

const useStories = (): UserStory[] => {
  const [stories, setStories] = useState<UserStory[]>([]);

  useEffect(() => {
    fetch("/stories.json")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((error) => console.error("Failed to fetch stories:", error));
  }, []);

  return stories;
};

export default useStories;
