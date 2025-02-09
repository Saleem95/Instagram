import { useEffect, useState } from "react";

interface StoryProps {
  imageUrl: string;
  username: string;
  time: string;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  totalStories: number;
  currentStoryIndex: number;
}

const Story = ({
  imageUrl,
  username,
  time,
  onNext,
  onPrev,
  onClose,
  totalStories,
  currentStoryIndex,
}: StoryProps) => {
  const [progress, setProgress] = useState(0);
  const storyDuration = 5000;

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, storyDuration / 50);

    const timer = setTimeout(onNext, storyDuration);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [imageUrl, onNext]);

  const firstLetter = username.charAt(0).toUpperCase();

  return (
    <div className="storyOverlay">
      <div className="progressContainer">
        {Array.from({ length: totalStories }).map((_, index) => (
          <div
            key={index}
            className="progressBar"
            style={{ width: `${100 / totalStories}%` }}
          >
            <div
              className="progressFill"
              style={{
                width:
                  index === currentStoryIndex
                    ? `${progress}%`
                    : index < currentStoryIndex
                    ? "100%"
                    : "0%",
                backgroundColor: index === currentStoryIndex ? "white" : "gray",
              }}
            />
          </div>
        ))}
      </div>

      <div className="header">
        <div className="userbody">
          <p className="usernameIcon">{firstLetter}</p>
          <p className="usernameText">{username}</p>
          <p className="usetime">{time}</p>
        </div>
        <button className="closeButton" onClick={onClose}>
          X
        </button>
      </div>
      <div className="navAreaLeft" onClick={onPrev} />
      <div className="navAreaRight" onClick={onNext} />
      <img src={imageUrl} className="storyImage" alt="Story" />
    </div>
  );
};

export default Story;
