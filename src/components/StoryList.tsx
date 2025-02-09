import { useState } from "react";
import useStories from "../hooks/useStories";
import Story from "./Story";

const StoryList = () => {
  const userStories = useStories();
  const [activeUserIndex, setActiveUserIndex] = useState<number | null>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const handleNext = () => {
    if (activeUserIndex === null) return;

    const currentUserStories = userStories[activeUserIndex].stories;
    if (activeStoryIndex < currentUserStories.length - 1) {
      setActiveStoryIndex(activeStoryIndex + 1);
    } else {
      if (activeUserIndex < userStories.length - 1) {
        setActiveUserIndex(activeUserIndex + 1);
        setActiveStoryIndex(0);
      } else {
        setActiveUserIndex(null);
      }
    }
  };

  const handlePrev = () => {
    if (activeUserIndex === null) return;

    if (activeStoryIndex > 0) {
      setActiveStoryIndex(activeStoryIndex - 1);
    } else if (activeUserIndex > 0) {
      setActiveUserIndex(activeUserIndex - 1);
      setActiveStoryIndex(userStories[activeUserIndex - 1].stories.length - 1);
    }
  };

  return (
    <div className="storyList">
      {userStories.map((user, index) => (
        <div
          key={user.id}
          onClick={() => {
            setActiveUserIndex(index);
            setActiveStoryIndex(0);
          }}
        >
          <img
            src={user.stories[0].imageUrl}
            className="storyThumbnail"
            alt={user.username}
          />
          <span>{user.username}</span>
        </div>
      ))}

      {activeUserIndex !== null && (
        <Story
          username={userStories[activeUserIndex].username}
          time={userStories[activeUserIndex].stories[activeStoryIndex].time}
          imageUrl={
            userStories[activeUserIndex].stories[activeStoryIndex].imageUrl
          }
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={() => setActiveUserIndex(null)}
          totalStories={userStories[activeUserIndex].stories.length}
          currentStoryIndex={activeStoryIndex}
        />
      )}
    </div>
  );
};

export default StoryList;
